"""
Analysis modules for embedding-based content optimization.

This package provides various analysis tools including:
- Semantic keyword clustering
- Content completeness assessment
- Answer density optimization
- Entity coverage analysis
- Citation-worthy content detection
- RAG chunk optimization
"""

from .clustering import cluster_keywords, find_related_keywords
from .completeness import assess_completeness, find_content_gaps
from .answer_density import analyze_answer_density, find_answerable_sections
from .entities import analyze_entity_coverage, suggest_missing_entities
from .citations import find_citation_worthy, score_citation_potential
from .rag import analyze_rag_chunks, optimize_chunk_boundaries

__all__ = [
    "cluster_keywords",
    "find_related_keywords",
    "assess_completeness",
    "find_content_gaps",
    "analyze_answer_density",
    "find_answerable_sections",
    "analyze_entity_coverage",
    "suggest_missing_entities",
    "find_citation_worthy",
    "score_citation_potential",
    "analyze_rag_chunks",
    "optimize_chunk_boundaries"
]
