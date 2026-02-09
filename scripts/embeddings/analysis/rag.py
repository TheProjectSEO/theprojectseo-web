"""
RAG (Retrieval-Augmented Generation) chunk optimization.

Analyzes content for optimal chunking and retrieval performance
in RAG systems used by AI search engines.
"""

import re
import numpy as np
from typing import Optional
from sklearn.metrics.pairwise import cosine_similarity

from ..models import ContentEmbedding, RAGChunkResult


# Default chunk configuration
DEFAULT_CHUNK_SIZE = 512  # tokens (approximately 2000 chars)
DEFAULT_CHUNK_OVERLAP = 50  # tokens overlap


def chunk_content(
    content_text: str,
    chunk_size: int = DEFAULT_CHUNK_SIZE,
    chunk_overlap: int = DEFAULT_CHUNK_OVERLAP,
    respect_boundaries: bool = True
) -> list[str]:
    """
    Split content into chunks for RAG analysis.

    Args:
        content_text: Full text content
        chunk_size: Approximate size of each chunk in tokens
        chunk_overlap: Overlap between chunks
        respect_boundaries: Try to split at paragraph/sentence boundaries

    Returns:
        List of text chunks
    """
    # Approximate chars per token (rough estimate)
    chars_per_token = 4
    chunk_chars = chunk_size * chars_per_token
    overlap_chars = chunk_overlap * chars_per_token

    chunks = []

    if respect_boundaries:
        # Split by paragraphs first
        paragraphs = re.split(r'\n\n+', content_text.strip())

        current_chunk = ""
        for para in paragraphs:
            para = para.strip()
            if not para:
                continue

            if len(current_chunk) + len(para) <= chunk_chars:
                current_chunk += ("\n\n" if current_chunk else "") + para
            else:
                if current_chunk:
                    chunks.append(current_chunk.strip())

                # If paragraph is too long, split by sentences
                if len(para) > chunk_chars:
                    sentences = re.split(r'(?<=[.!?])\s+', para)
                    current_chunk = ""
                    for sent in sentences:
                        if len(current_chunk) + len(sent) <= chunk_chars:
                            current_chunk += (" " if current_chunk else "") + sent
                        else:
                            if current_chunk:
                                chunks.append(current_chunk.strip())
                            current_chunk = sent
                else:
                    current_chunk = para

        if current_chunk:
            chunks.append(current_chunk.strip())

        # Add overlap by prepending end of previous chunk
        if overlap_chars > 0 and len(chunks) > 1:
            overlapped_chunks = [chunks[0]]
            for i in range(1, len(chunks)):
                prev_overlap = chunks[i-1][-overlap_chars:]
                overlapped_chunks.append(prev_overlap + " ... " + chunks[i])
            chunks = overlapped_chunks

    else:
        # Simple character-based chunking
        for i in range(0, len(content_text), chunk_chars - overlap_chars):
            chunk = content_text[i:i + chunk_chars]
            if chunk.strip():
                chunks.append(chunk.strip())

    return chunks


def analyze_rag_chunks(
    content_embedding: ContentEmbedding,
    content_text: str,
    query_embeddings: dict[str, list[float]],
    chunk_embeddings: Optional[list[list[float]]] = None
) -> RAGChunkResult:
    """
    Analyze how well content chunks retrieve for given queries.

    Args:
        content_embedding: ContentEmbedding for the page
        content_text: Full text content
        query_embeddings: Dictionary mapping query strings to embeddings
        chunk_embeddings: Pre-computed chunk embeddings (optional)

    Returns:
        RAGChunkResult with retrieval analysis
    """
    # Create chunks
    chunks = chunk_content(content_text)

    if not chunks:
        return RAGChunkResult(
            url=content_embedding.url,
            avg_retrieval_score=0.0,
            chunk_scores=[],
            boundary_suggestions=["Content too short for chunking analysis"]
        )

    # If chunk embeddings not provided, use content embedding as proxy
    # (In production, you'd embed each chunk separately)
    if chunk_embeddings is None:
        # Use content embedding for all chunks as approximation
        chunk_embeddings = [content_embedding.embedding] * len(chunks)

    chunk_scores = []

    for i, (chunk, chunk_emb) in enumerate(zip(chunks, chunk_embeddings)):
        chunk_vec = np.array(chunk_emb).reshape(1, -1)
        query_scores = {}

        for query, q_emb in query_embeddings.items():
            q_vec = np.array(q_emb).reshape(1, -1)
            similarity = float(cosine_similarity(chunk_vec, q_vec)[0][0])
            query_scores[query] = round(similarity, 4)

        best_query = max(query_scores.items(), key=lambda x: x[1])

        chunk_scores.append({
            "chunk_index": i,
            "chunk_preview": chunk[:150] + "..." if len(chunk) > 150 else chunk,
            "best_matching_query": best_query[0],
            "best_score": best_query[1],
            "all_query_scores": query_scores,
            "word_count": len(chunk.split())
        })

    # Calculate average retrieval score
    avg_score = np.mean([cs["best_score"] for cs in chunk_scores])

    # Generate boundary suggestions
    boundary_suggestions = optimize_chunk_boundaries(chunks, chunk_scores)

    return RAGChunkResult(
        url=content_embedding.url,
        avg_retrieval_score=round(float(avg_score), 4),
        chunk_scores=chunk_scores,
        boundary_suggestions=boundary_suggestions
    )


def optimize_chunk_boundaries(
    chunks: list[str],
    chunk_scores: list[dict]
) -> list[str]:
    """
    Suggest better chunk boundaries based on analysis.

    Args:
        chunks: Current chunks
        chunk_scores: Scoring results for each chunk

    Returns:
        List of optimization suggestions
    """
    suggestions = []

    # Check for very short chunks
    short_chunks = [cs for cs in chunk_scores if cs["word_count"] < 50]
    if short_chunks:
        suggestions.append(
            f"Merge {len(short_chunks)} short chunks (<50 words) with adjacent chunks"
        )

    # Check for very long chunks
    long_chunks = [cs for cs in chunk_scores if cs["word_count"] > 500]
    if long_chunks:
        suggestions.append(
            f"Split {len(long_chunks)} long chunks (>500 words) for better retrieval"
        )

    # Check for low-scoring chunks
    low_scores = [cs for cs in chunk_scores if cs["best_score"] < 0.3]
    if low_scores:
        suggestions.append(
            f"{len(low_scores)} chunks have low retrieval scores - "
            "consider restructuring content for better query alignment"
        )

    # Check for inconsistent scoring across chunks
    scores = [cs["best_score"] for cs in chunk_scores]
    if len(scores) > 1:
        score_std = np.std(scores)
        if score_std > 0.15:
            suggestions.append(
                "High variance in chunk scores - some sections may need "
                "topic focus improvement"
            )

    # Check for chunks that don't match any query well
    orphan_chunks = [
        cs for cs in chunk_scores
        if all(s < 0.4 for s in cs["all_query_scores"].values())
    ]
    if orphan_chunks:
        suggestions.append(
            f"{len(orphan_chunks)} chunks don't match any common queries - "
            "consider if this content serves search intent"
        )

    if not suggestions:
        suggestions.append("Chunk boundaries appear well-optimized")

    return suggestions


def simulate_retrieval(
    content_embeddings: list[ContentEmbedding],
    query_embedding: list[float],
    top_k: int = 5
) -> list[tuple[str, float]]:
    """
    Simulate RAG retrieval for a query across all content.

    Args:
        content_embeddings: All content to search
        query_embedding: Query embedding
        top_k: Number of results to return

    Returns:
        List of (url, similarity) tuples
    """
    query_vec = np.array(query_embedding).reshape(1, -1)
    results = []

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)
        similarity = float(cosine_similarity(content_vec, query_vec)[0][0])
        results.append((content.url, similarity))

    results.sort(key=lambda x: x[1], reverse=True)
    return results[:top_k]


def analyze_retrieval_coverage(
    content_embeddings: list[ContentEmbedding],
    query_embeddings: dict[str, list[float]],
    retrieval_threshold: float = 0.5
) -> dict[str, dict]:
    """
    Analyze which content is retrieved for which queries.

    Args:
        content_embeddings: All content
        query_embeddings: Query set to test
        retrieval_threshold: Minimum score for "retrieval"

    Returns:
        Dictionary with coverage analysis
    """
    query_coverage = {}

    for query, q_emb in query_embeddings.items():
        retrieved = simulate_retrieval(content_embeddings, q_emb, top_k=10)
        above_threshold = [(url, score) for url, score in retrieved if score >= retrieval_threshold]

        query_coverage[query] = {
            "retrieved_count": len(above_threshold),
            "top_results": above_threshold[:5],
            "coverage_gap": len(above_threshold) == 0
        }

    # Summary statistics
    total_queries = len(query_embeddings)
    queries_with_coverage = sum(
        1 for q in query_coverage.values() if q["retrieved_count"] > 0
    )

    return {
        "query_coverage": query_coverage,
        "summary": {
            "total_queries": total_queries,
            "queries_with_coverage": queries_with_coverage,
            "coverage_rate": round(queries_with_coverage / total_queries, 4) if total_queries > 0 else 0
        }
    }


def identify_retrieval_gaps(
    content_embeddings: list[ContentEmbedding],
    query_embeddings: dict[str, list[float]],
    max_score_threshold: float = 0.4
) -> list[str]:
    """
    Identify queries that no content retrieves well for.

    Args:
        content_embeddings: All content
        query_embeddings: Queries to check
        max_score_threshold: Queries with max score below this are gaps

    Returns:
        List of queries with retrieval gaps
    """
    gaps = []

    for query, q_emb in query_embeddings.items():
        retrieved = simulate_retrieval(content_embeddings, q_emb, top_k=1)
        if not retrieved or retrieved[0][1] < max_score_threshold:
            gaps.append(query)

    return gaps


def suggest_content_for_retrieval_gaps(
    gaps: list[str],
    existing_content: list[ContentEmbedding]
) -> list[dict]:
    """
    Suggest content improvements or new content for retrieval gaps.

    Args:
        gaps: Queries with retrieval gaps
        existing_content: Existing content

    Returns:
        List of content suggestions
    """
    suggestions = []

    for query in gaps:
        suggestions.append({
            "query": query,
            "suggestion_type": "new_content",
            "recommendation": f"Create or expand content specifically addressing: '{query}'",
            "target_elements": [
                f"Include exact phrasing: '{query}'",
                "Add structured definition or explanation",
                "Include related statistics or facts",
                "Reference authoritative sources"
            ]
        })

    return suggestions
