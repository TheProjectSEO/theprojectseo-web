"""
Embedding system for AI optimization analysis.

This package provides tools for generating and analyzing embeddings
for content optimization, including:

- Semantic keyword clustering
- Content completeness assessment
- Answer density optimization for AI citation
- Entity coverage analysis
- Citation-worthy content detection
- RAG chunk optimization

Usage:
    from embeddings.client import EmbeddingClient
    from embeddings.models import ContentEmbedding, KeywordEmbedding
    from embeddings.analysis import cluster_keywords, assess_completeness

    # Initialize client
    client = EmbeddingClient()

    # Generate embeddings
    result = client.get_embedding("your text here")

    # Run analysis
    clusters = cluster_keywords(keyword_embeddings)
"""

from .client import EmbeddingClient
from .cache import EmbeddingCache
from .models import (
    EmbeddingResult,
    ContentEmbedding,
    KeywordEmbedding,
    ClusterResult,
    CompletenessResult,
    AnswerDensityResult,
    EntityCoverageResult,
    CitationOpportunity,
    CitationResult,
    RAGChunkResult,
    AnalysisResult
)

__version__ = "1.0.0"
__all__ = [
    "EmbeddingClient",
    "EmbeddingCache",
    "EmbeddingResult",
    "ContentEmbedding",
    "KeywordEmbedding",
    "ClusterResult",
    "CompletenessResult",
    "AnswerDensityResult",
    "EntityCoverageResult",
    "CitationOpportunity",
    "CitationResult",
    "RAGChunkResult",
    "AnalysisResult"
]
