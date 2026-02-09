"""
OpenAI embedding client with caching integration.

Provides high-level API for generating embeddings with automatic caching,
rate limiting, and batch processing.
"""

import os
import time
from typing import Optional
from pathlib import Path
from dotenv import load_dotenv

from openai import OpenAI

from .models import EmbeddingResult
from .cache import EmbeddingCache

# Load environment variables from .env file
load_dotenv()


class EmbeddingClient:
    """OpenAI embedding client with caching and rate limiting."""

    DEFAULT_MODEL = "text-embedding-3-large"
    DEFAULT_DIMENSIONS = 3072
    RATE_LIMIT_DELAY = 0.1  # Seconds between API calls
    BATCH_SIZE = 100  # Max texts per API call

    def __init__(
        self,
        api_key: Optional[str] = None,
        model: str = DEFAULT_MODEL,
        dimensions: int = DEFAULT_DIMENSIONS,
        use_cache: bool = True,
        cache_path: Optional[str] = None
    ):
        """
        Initialize the embedding client.

        Args:
            api_key: OpenAI API key. If None, reads from OPENAI_API_KEY env var
            model: Embedding model to use
            dimensions: Embedding dimensions (3072 for text-embedding-3-large)
            use_cache: Whether to use SQLite caching
            cache_path: Custom path for cache database
        """
        # Get API key from environment if not provided
        if api_key is None:
            api_key = os.getenv("OPENAI_API_KEY")
            if api_key is None:
                # Try loading from .env file
                env_path = Path(__file__).parent.parent.parent / ".env"
                if env_path.exists():
                    with open(env_path) as f:
                        for line in f:
                            if line.startswith("OPENAI_API_KEY="):
                                api_key = line.split("=", 1)[1].strip().strip('"\'')
                                break

        if api_key is None:
            raise ValueError(
                "OpenAI API key not found. Set OPENAI_API_KEY environment variable "
                "or pass api_key parameter."
            )

        self.client = OpenAI(api_key=api_key)
        self.model = model
        self.dimensions = dimensions
        self.use_cache = use_cache

        if use_cache:
            self.cache = EmbeddingCache(cache_path)
        else:
            self.cache = None

        # Track usage
        self._api_calls = 0
        self._cache_hits = 0
        self._tokens_used = 0

    def get_embedding(self, text: str, skip_cache: bool = False) -> EmbeddingResult:
        """
        Get embedding for a single text.

        Args:
            text: Text to embed
            skip_cache: If True, skip cache lookup and always call API

        Returns:
            EmbeddingResult with the embedding
        """
        # Check cache first
        if self.use_cache and not skip_cache:
            cached = self.cache.get(text, self.model)
            if cached is not None:
                self._cache_hits += 1
                return cached

        # Call OpenAI API
        response = self.client.embeddings.create(
            input=text,
            model=self.model,
            dimensions=self.dimensions
        )

        self._api_calls += 1
        self._tokens_used += response.usage.total_tokens

        result = EmbeddingResult(
            text=text,
            embedding=response.data[0].embedding,
            model=self.model,
            dimensions=self.dimensions,
            token_count=response.usage.total_tokens
        )

        # Store in cache
        if self.use_cache:
            self.cache.set(result)

        return result

    def get_embeddings_batch(
        self,
        texts: list[str],
        skip_cache: bool = False,
        show_progress: bool = True
    ) -> list[EmbeddingResult]:
        """
        Get embeddings for multiple texts with rate limiting.

        Args:
            texts: List of texts to embed
            skip_cache: If True, skip cache and always call API
            show_progress: If True, print progress updates

        Returns:
            List of EmbeddingResults
        """
        results = []
        texts_to_embed = []
        text_indices = []

        # Check cache for all texts first
        if self.use_cache and not skip_cache:
            for i, text in enumerate(texts):
                cached = self.cache.get(text, self.model)
                if cached is not None:
                    self._cache_hits += 1
                    results.append((i, cached))
                else:
                    texts_to_embed.append(text)
                    text_indices.append(i)
        else:
            texts_to_embed = texts
            text_indices = list(range(len(texts)))

        if show_progress and texts_to_embed:
            print(f"Cache hits: {len(results)}, API calls needed: {len(texts_to_embed)}")

        # Process uncached texts in batches
        for batch_start in range(0, len(texts_to_embed), self.BATCH_SIZE):
            batch_end = min(batch_start + self.BATCH_SIZE, len(texts_to_embed))
            batch_texts = texts_to_embed[batch_start:batch_end]
            batch_indices = text_indices[batch_start:batch_end]

            if show_progress:
                print(f"Processing batch {batch_start//self.BATCH_SIZE + 1}/"
                      f"{(len(texts_to_embed) + self.BATCH_SIZE - 1)//self.BATCH_SIZE}")

            # Call OpenAI API for batch
            response = self.client.embeddings.create(
                input=batch_texts,
                model=self.model,
                dimensions=self.dimensions
            )

            self._api_calls += 1
            self._tokens_used += response.usage.total_tokens

            # Process results
            for j, embedding_data in enumerate(response.data):
                original_idx = batch_indices[j]
                original_text = batch_texts[j]

                result = EmbeddingResult(
                    text=original_text,
                    embedding=embedding_data.embedding,
                    model=self.model,
                    dimensions=self.dimensions,
                    token_count=response.usage.total_tokens // len(batch_texts)  # Approximate
                )

                # Cache the result
                if self.use_cache:
                    self.cache.set(result)

                results.append((original_idx, result))

            # Rate limiting between batches
            if batch_end < len(texts_to_embed):
                time.sleep(self.RATE_LIMIT_DELAY)

        # Sort by original index and return just the results
        results.sort(key=lambda x: x[0])
        return [r[1] for r in results]

    def compute_similarity(self, embedding1: list[float], embedding2: list[float]) -> float:
        """
        Compute cosine similarity between two embeddings.

        Args:
            embedding1: First embedding vector
            embedding2: Second embedding vector

        Returns:
            Cosine similarity score (0 to 1)
        """
        import numpy as np

        vec1 = np.array(embedding1)
        vec2 = np.array(embedding2)

        dot_product = np.dot(vec1, vec2)
        norm1 = np.linalg.norm(vec1)
        norm2 = np.linalg.norm(vec2)

        if norm1 == 0 or norm2 == 0:
            return 0.0

        return float(dot_product / (norm1 * norm2))

    def find_most_similar(
        self,
        query_embedding: list[float],
        embeddings: list[list[float]],
        top_k: int = 5
    ) -> list[tuple[int, float]]:
        """
        Find most similar embeddings to a query.

        Args:
            query_embedding: Query embedding vector
            embeddings: List of embeddings to search
            top_k: Number of results to return

        Returns:
            List of (index, similarity_score) tuples, sorted by similarity
        """
        similarities = []
        for i, emb in enumerate(embeddings):
            sim = self.compute_similarity(query_embedding, emb)
            similarities.append((i, sim))

        similarities.sort(key=lambda x: x[1], reverse=True)
        return similarities[:top_k]

    def get_usage_stats(self) -> dict:
        """
        Get usage statistics.

        Returns:
            Dictionary with usage statistics
        """
        stats = {
            "api_calls": self._api_calls,
            "cache_hits": self._cache_hits,
            "tokens_used": self._tokens_used,
            "estimated_cost": f"${self._tokens_used * 0.00000013:.6f}"  # text-embedding-3-large pricing
        }

        if self.cache:
            stats["cache_stats"] = self.cache.get_stats()

        return stats

    def reset_usage_stats(self):
        """Reset usage counters."""
        self._api_calls = 0
        self._cache_hits = 0
        self._tokens_used = 0
