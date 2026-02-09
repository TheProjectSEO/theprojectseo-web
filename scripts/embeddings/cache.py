"""
SQLite-based embedding cache.

Stores embeddings by content hash to avoid re-embedding unchanged content.
Provides significant cost savings (~$0.00002/1K tokens).
"""

import sqlite3
import json
import hashlib
from pathlib import Path
from datetime import datetime
from typing import Optional

from .models import EmbeddingResult


class EmbeddingCache:
    """SQLite-based cache for embeddings."""

    def __init__(self, db_path: Optional[str] = None):
        """
        Initialize the embedding cache.

        Args:
            db_path: Path to SQLite database. Defaults to 'output/embedding_cache.db'
        """
        if db_path is None:
            output_dir = Path(__file__).parent.parent.parent / "output"
            output_dir.mkdir(exist_ok=True)
            db_path = str(output_dir / "embedding_cache.db")

        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        """Initialize the database schema."""
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                CREATE TABLE IF NOT EXISTS embeddings (
                    content_hash TEXT PRIMARY KEY,
                    text TEXT NOT NULL,
                    embedding TEXT NOT NULL,
                    model TEXT NOT NULL,
                    dimensions INTEGER NOT NULL,
                    token_count INTEGER,
                    created_at TEXT NOT NULL,
                    accessed_at TEXT NOT NULL,
                    access_count INTEGER DEFAULT 1
                )
            """)
            cursor.execute("""
                CREATE INDEX IF NOT EXISTS idx_model ON embeddings(model)
            """)
            cursor.execute("""
                CREATE INDEX IF NOT EXISTS idx_created_at ON embeddings(created_at)
            """)
            conn.commit()

    @staticmethod
    def compute_hash(text: str) -> str:
        """Compute SHA-256 hash of text."""
        return hashlib.sha256(text.encode()).hexdigest()

    def get(self, text: str, model: str = "text-embedding-3-large") -> Optional[EmbeddingResult]:
        """
        Retrieve cached embedding if it exists.

        Args:
            text: The text to look up
            model: The model name (must match)

        Returns:
            EmbeddingResult if found, None otherwise
        """
        content_hash = self.compute_hash(text)

        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT text, embedding, model, dimensions, token_count, created_at
                FROM embeddings
                WHERE content_hash = ? AND model = ?
            """, (content_hash, model))

            row = cursor.fetchone()
            if row is None:
                return None

            # Update access tracking
            cursor.execute("""
                UPDATE embeddings
                SET accessed_at = ?, access_count = access_count + 1
                WHERE content_hash = ?
            """, (datetime.now().isoformat(), content_hash))
            conn.commit()

            return EmbeddingResult(
                text=row[0],
                embedding=json.loads(row[1]),
                model=row[2],
                dimensions=row[3],
                token_count=row[4],
                created_at=datetime.fromisoformat(row[5])
            )

    def set(self, result: EmbeddingResult) -> None:
        """
        Store an embedding in the cache.

        Args:
            result: The EmbeddingResult to cache
        """
        content_hash = result.content_hash
        now = datetime.now().isoformat()

        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                INSERT OR REPLACE INTO embeddings
                (content_hash, text, embedding, model, dimensions, token_count, created_at, accessed_at, access_count)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, COALESCE(
                    (SELECT access_count FROM embeddings WHERE content_hash = ?), 0
                ) + 1)
            """, (
                content_hash,
                result.text,
                json.dumps(result.embedding),
                result.model,
                result.dimensions,
                result.token_count,
                result.created_at.isoformat(),
                now,
                content_hash
            ))
            conn.commit()

    def exists(self, text: str, model: str = "text-embedding-3-large") -> bool:
        """
        Check if an embedding exists in the cache.

        Args:
            text: The text to check
            model: The model name

        Returns:
            True if cached, False otherwise
        """
        content_hash = self.compute_hash(text)

        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                SELECT 1 FROM embeddings
                WHERE content_hash = ? AND model = ?
            """, (content_hash, model))
            return cursor.fetchone() is not None

    def get_batch(self, texts: list[str], model: str = "text-embedding-3-large") -> dict[str, Optional[EmbeddingResult]]:
        """
        Retrieve multiple cached embeddings.

        Args:
            texts: List of texts to look up
            model: The model name

        Returns:
            Dictionary mapping text to EmbeddingResult (or None if not cached)
        """
        results = {}
        for text in texts:
            results[text] = self.get(text, model)
        return results

    def set_batch(self, results: list[EmbeddingResult]) -> None:
        """
        Store multiple embeddings in the cache.

        Args:
            results: List of EmbeddingResults to cache
        """
        for result in results:
            self.set(result)

    def get_stats(self) -> dict:
        """
        Get cache statistics.

        Returns:
            Dictionary with cache statistics
        """
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()

            cursor.execute("SELECT COUNT(*) FROM embeddings")
            total = cursor.fetchone()[0]

            cursor.execute("SELECT COUNT(DISTINCT model) FROM embeddings")
            models = cursor.fetchone()[0]

            cursor.execute("SELECT SUM(token_count) FROM embeddings WHERE token_count IS NOT NULL")
            total_tokens = cursor.fetchone()[0] or 0

            cursor.execute("SELECT SUM(access_count) FROM embeddings")
            total_accesses = cursor.fetchone()[0] or 0

            cursor.execute("SELECT model, COUNT(*) FROM embeddings GROUP BY model")
            by_model = dict(cursor.fetchall())

            return {
                "total_embeddings": total,
                "unique_models": models,
                "total_tokens_cached": total_tokens,
                "total_cache_hits": total_accesses - total,  # Accesses minus initial stores
                "embeddings_by_model": by_model,
                "estimated_savings": f"${total_tokens * 0.00000013:.4f}"  # Based on text-embedding-3-large pricing
            }

    def clear(self, model: Optional[str] = None) -> int:
        """
        Clear cached embeddings.

        Args:
            model: If specified, only clear embeddings for this model

        Returns:
            Number of embeddings deleted
        """
        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()

            if model:
                cursor.execute("DELETE FROM embeddings WHERE model = ?", (model,))
            else:
                cursor.execute("DELETE FROM embeddings")

            deleted = cursor.rowcount
            conn.commit()
            return deleted

    def prune_old(self, days: int = 30) -> int:
        """
        Remove embeddings not accessed in the specified number of days.

        Args:
            days: Number of days of inactivity before pruning

        Returns:
            Number of embeddings deleted
        """
        from datetime import timedelta
        cutoff = (datetime.now() - timedelta(days=days)).isoformat()

        with sqlite3.connect(self.db_path) as conn:
            cursor = conn.cursor()
            cursor.execute("""
                DELETE FROM embeddings
                WHERE accessed_at < ?
            """, (cutoff,))

            deleted = cursor.rowcount
            conn.commit()
            return deleted
