"""
Data models for the embedding system.

Provides dataclasses for storing and managing embeddings and analysis results.
"""

from dataclasses import dataclass, field
from datetime import datetime
from typing import Optional
import hashlib


@dataclass
class EmbeddingResult:
    """Single embedding with metadata."""

    text: str
    embedding: list[float]
    model: str = "text-embedding-3-large"
    dimensions: int = 3072
    token_count: Optional[int] = None
    created_at: datetime = field(default_factory=datetime.now)

    @property
    def content_hash(self) -> str:
        """Generate hash of the text for caching."""
        return hashlib.sha256(self.text.encode()).hexdigest()

    def to_dict(self) -> dict:
        """Convert to dictionary for JSON serialization."""
        return {
            "text": self.text,
            "embedding": self.embedding,
            "model": self.model,
            "dimensions": self.dimensions,
            "token_count": self.token_count,
            "content_hash": self.content_hash,
            "created_at": self.created_at.isoformat()
        }

    @classmethod
    def from_dict(cls, data: dict) -> "EmbeddingResult":
        """Create from dictionary."""
        return cls(
            text=data["text"],
            embedding=data["embedding"],
            model=data.get("model", "text-embedding-3-large"),
            dimensions=data.get("dimensions", 3072),
            token_count=data.get("token_count"),
            created_at=datetime.fromisoformat(data["created_at"]) if "created_at" in data else datetime.now()
        )


@dataclass
class ContentEmbedding:
    """Page content with embedding and metadata."""

    url: str
    title: str
    content: str
    embedding: list[float]
    word_count: int = 0
    content_type: str = "page"
    meta_description: Optional[str] = None
    h1: Optional[str] = None
    target_keyword: Optional[str] = None

    def __post_init__(self):
        if self.word_count == 0:
            self.word_count = len(self.content.split())

    @property
    def content_hash(self) -> str:
        """Generate hash of the content for caching."""
        return hashlib.sha256(self.content.encode()).hexdigest()

    def to_dict(self) -> dict:
        """Convert to dictionary for JSON serialization."""
        return {
            "url": self.url,
            "title": self.title,
            "content": self.content,
            "embedding": self.embedding,
            "word_count": self.word_count,
            "content_type": self.content_type,
            "meta_description": self.meta_description,
            "h1": self.h1,
            "target_keyword": self.target_keyword,
            "content_hash": self.content_hash
        }

    @classmethod
    def from_dict(cls, data: dict) -> "ContentEmbedding":
        """Create from dictionary."""
        return cls(
            url=data["url"],
            title=data["title"],
            content=data["content"],
            embedding=data["embedding"],
            word_count=data.get("word_count", 0),
            content_type=data.get("content_type", "page"),
            meta_description=data.get("meta_description"),
            h1=data.get("h1"),
            target_keyword=data.get("target_keyword")
        )


@dataclass
class KeywordEmbedding:
    """Keyword with embedding and search metrics."""

    keyword: str
    embedding: list[float]
    search_volume: Optional[int] = None
    keyword_difficulty: Optional[float] = None
    intent: Optional[str] = None
    cluster_id: Optional[int] = None
    parent_topic: Optional[str] = None

    @property
    def content_hash(self) -> str:
        """Generate hash of the keyword for caching."""
        return hashlib.sha256(self.keyword.encode()).hexdigest()

    def to_dict(self) -> dict:
        """Convert to dictionary for JSON serialization."""
        return {
            "keyword": self.keyword,
            "embedding": self.embedding,
            "search_volume": self.search_volume,
            "keyword_difficulty": self.keyword_difficulty,
            "intent": self.intent,
            "cluster_id": self.cluster_id,
            "parent_topic": self.parent_topic,
            "content_hash": self.content_hash
        }

    @classmethod
    def from_dict(cls, data: dict) -> "KeywordEmbedding":
        """Create from dictionary."""
        return cls(
            keyword=data["keyword"],
            embedding=data["embedding"],
            search_volume=data.get("search_volume"),
            keyword_difficulty=data.get("keyword_difficulty"),
            intent=data.get("intent"),
            cluster_id=data.get("cluster_id"),
            parent_topic=data.get("parent_topic")
        )


@dataclass
class ClusterResult:
    """Result of keyword clustering analysis."""

    cluster_id: int
    keywords: list[str]
    centroid_keyword: str
    avg_similarity: float
    topic_label: Optional[str] = None

    def to_dict(self) -> dict:
        return {
            "cluster_id": self.cluster_id,
            "keywords": self.keywords,
            "centroid_keyword": self.centroid_keyword,
            "avg_similarity": self.avg_similarity,
            "topic_label": self.topic_label
        }


@dataclass
class CompletenessResult:
    """Result of content completeness analysis."""

    url: str
    completeness_score: float
    covered_topics: list[str]
    missing_topics: list[str]
    topic_coverage: dict[str, float] = field(default_factory=dict)
    recommendations: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "url": self.url,
            "completeness_score": self.completeness_score,
            "covered_topics": self.covered_topics,
            "missing_topics": self.missing_topics,
            "topic_coverage": self.topic_coverage,
            "recommendations": self.recommendations
        }


@dataclass
class AnswerDensityResult:
    """Result of answer density analysis."""

    url: str
    answer_density_score: float
    questions_answered: list[str]
    questions_unanswered: list[str]
    answerable_sections: list[dict] = field(default_factory=list)
    improvement_suggestions: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "url": self.url,
            "answer_density_score": self.answer_density_score,
            "questions_answered": self.questions_answered,
            "questions_unanswered": self.questions_unanswered,
            "answerable_sections": self.answerable_sections,
            "improvement_suggestions": self.improvement_suggestions
        }


@dataclass
class EntityCoverageResult:
    """Result of entity coverage analysis."""

    url: str
    overall_coverage: float
    entity_coverage: dict[str, float] = field(default_factory=dict)
    present_entities: list[str] = field(default_factory=list)
    missing_entities: list[str] = field(default_factory=list)
    entity_suggestions: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "url": self.url,
            "overall_coverage": self.overall_coverage,
            "entity_coverage": self.entity_coverage,
            "present_entities": self.present_entities,
            "missing_entities": self.missing_entities,
            "entity_suggestions": self.entity_suggestions
        }


@dataclass
class CitationOpportunity:
    """A section of content identified as citation-worthy."""

    section_text: str
    citation_score: float
    reason: str
    suggested_format: Optional[str] = None

    def to_dict(self) -> dict:
        return {
            "section_text": self.section_text,
            "citation_score": self.citation_score,
            "reason": self.reason,
            "suggested_format": self.suggested_format
        }


@dataclass
class CitationResult:
    """Result of citation analysis for a page."""

    url: str
    total_citation_potential: float
    opportunities: list[CitationOpportunity] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "url": self.url,
            "total_citation_potential": self.total_citation_potential,
            "opportunities": [o.to_dict() for o in self.opportunities]
        }


@dataclass
class RAGChunkResult:
    """Result of RAG chunk analysis."""

    url: str
    avg_retrieval_score: float
    chunk_scores: list[dict] = field(default_factory=list)
    boundary_suggestions: list[str] = field(default_factory=list)

    def to_dict(self) -> dict:
        return {
            "url": self.url,
            "avg_retrieval_score": self.avg_retrieval_score,
            "chunk_scores": self.chunk_scores,
            "boundary_suggestions": self.boundary_suggestions
        }


@dataclass
class AnalysisResult:
    """Complete analysis output structure."""

    generated_at: datetime = field(default_factory=datetime.now)
    content_count: int = 0
    keyword_count: int = 0

    keyword_clusters: list[ClusterResult] = field(default_factory=list)
    completeness_results: list[CompletenessResult] = field(default_factory=list)
    answer_density_results: list[AnswerDensityResult] = field(default_factory=list)
    entity_coverage_results: list[EntityCoverageResult] = field(default_factory=list)
    citation_results: list[CitationResult] = field(default_factory=list)
    rag_results: list[RAGChunkResult] = field(default_factory=list)

    summary: dict = field(default_factory=dict)

    def to_dict(self) -> dict:
        return {
            "generated_at": self.generated_at.isoformat(),
            "content_count": self.content_count,
            "keyword_count": self.keyword_count,
            "keyword_clusters": [c.to_dict() for c in self.keyword_clusters],
            "completeness_results": [c.to_dict() for c in self.completeness_results],
            "answer_density_results": [a.to_dict() for a in self.answer_density_results],
            "entity_coverage_results": [e.to_dict() for e in self.entity_coverage_results],
            "citation_results": [c.to_dict() for c in self.citation_results],
            "rag_results": [r.to_dict() for r in self.rag_results],
            "summary": self.summary
        }
