"""
Entity coverage analysis using embeddings.

Analyzes content coverage of important entities in the addiction treatment
domain, including organizations, treatments, medications, and concepts.
"""

import numpy as np
from typing import Optional
from sklearn.metrics.pairwise import cosine_similarity

from ..models import ContentEmbedding, EntityCoverageResult


# Import SEO-specific entities from taxonomy
import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent.parent))
from seo_taxonomies import DEFAULT_SEO_ENTITY_TAXONOMY

# Use SEO entities for coverage analysis
DEFAULT_ENTITY_TAXONOMY = DEFAULT_SEO_ENTITY_TAXONOMY


def analyze_entity_coverage(
    content_embedding: ContentEmbedding,
    entity_embeddings: dict[str, dict[str, list[float]]],
    coverage_threshold: float = 0.45
) -> EntityCoverageResult:
    """
    Analyze entity coverage in content.

    Args:
        content_embedding: ContentEmbedding to analyze
        entity_embeddings: Nested dict {category: {entity: embedding}}
        coverage_threshold: Minimum similarity to consider entity covered

    Returns:
        EntityCoverageResult with coverage analysis
    """
    content_vec = np.array(content_embedding.embedding).reshape(1, -1)

    present_entities = []
    missing_entities = []
    entity_coverage_by_type = {}
    all_scores = []

    for category, entities in entity_embeddings.items():
        category_scores = []

        for entity_name, entity_vec in entities.items():
            entity_vec = np.array(entity_vec).reshape(1, -1)
            similarity = float(cosine_similarity(content_vec, entity_vec)[0][0])
            category_scores.append(similarity)
            all_scores.append(similarity)

            if similarity >= coverage_threshold:
                present_entities.append(entity_name)
            else:
                missing_entities.append(entity_name)

        # Calculate category coverage
        if category_scores:
            entity_coverage_by_type[category] = round(np.mean(category_scores), 4)

    # Calculate overall coverage
    overall_coverage = np.mean(all_scores) if all_scores else 0.0

    # Generate entity suggestions
    suggestions = suggest_missing_entities(
        content_embedding, entity_embeddings, coverage_threshold
    )

    return EntityCoverageResult(
        url=content_embedding.url,
        overall_coverage=round(float(overall_coverage), 4),
        entity_coverage=entity_coverage_by_type,
        present_entities=present_entities,
        missing_entities=missing_entities,
        entity_suggestions=[s["suggestion"] for s in suggestions[:5]]
    )


def suggest_missing_entities(
    content_embedding: ContentEmbedding,
    entity_embeddings: dict[str, dict[str, list[float]]],
    coverage_threshold: float = 0.45
) -> list[dict]:
    """
    Suggest entities to add based on content topic.

    Args:
        content_embedding: ContentEmbedding to analyze
        entity_embeddings: Entity taxonomy with embeddings
        coverage_threshold: Threshold below which to suggest

    Returns:
        List of suggestion dictionaries with priority
    """
    content_vec = np.array(content_embedding.embedding).reshape(1, -1)

    suggestions = []

    for category, entities in entity_embeddings.items():
        for entity_name, entity_vec in entities.items():
            entity_vec = np.array(entity_vec).reshape(1, -1)
            similarity = float(cosine_similarity(content_vec, entity_vec)[0][0])

            # Look for entities that are somewhat related but not fully covered
            if 0.3 <= similarity < coverage_threshold:
                # This entity is relevant but not well-covered
                priority = "high" if similarity >= 0.4 else "medium"
                suggestions.append({
                    "entity": entity_name,
                    "category": category,
                    "relevance_score": round(similarity, 4),
                    "priority": priority,
                    "suggestion": f"Consider mentioning {entity_name} ({category})"
                })

    # Sort by relevance (most relevant missing entities first)
    suggestions.sort(key=lambda x: x["relevance_score"], reverse=True)

    return suggestions


def compare_entity_coverage(
    content_embeddings: list[ContentEmbedding],
    entity_embeddings: dict[str, dict[str, list[float]]]
) -> dict[str, dict[str, float]]:
    """
    Compare entity coverage across multiple content pieces.

    Args:
        content_embeddings: List of content to compare
        entity_embeddings: Entity taxonomy

    Returns:
        Dictionary mapping URLs to entity coverage scores
    """
    coverage_comparison = {}

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)
        coverage = {}

        for category, entities in entity_embeddings.items():
            scores = []
            for entity_name, entity_vec in entities.items():
                entity_vec = np.array(entity_vec).reshape(1, -1)
                similarity = float(cosine_similarity(content_vec, entity_vec)[0][0])
                scores.append(similarity)

            coverage[category] = round(np.mean(scores), 4) if scores else 0.0

        coverage_comparison[content.url] = coverage

    return coverage_comparison


def find_content_for_entity(
    entity_embedding: list[float],
    content_embeddings: list[ContentEmbedding],
    top_k: int = 5
) -> list[tuple[str, float]]:
    """
    Find content that best covers a specific entity.

    Args:
        entity_embedding: Embedding of the entity to find
        content_embeddings: Content to search
        top_k: Number of results to return

    Returns:
        List of (url, similarity) tuples
    """
    entity_vec = np.array(entity_embedding).reshape(1, -1)
    results = []

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)
        similarity = float(cosine_similarity(content_vec, entity_vec)[0][0])
        results.append((content.url, similarity))

    results.sort(key=lambda x: x[1], reverse=True)
    return results[:top_k]


def calculate_entity_authority_score(
    content_embeddings: list[ContentEmbedding],
    entity_embeddings: dict[str, dict[str, list[float]]],
    authority_weights: Optional[dict[str, float]] = None
) -> dict[str, float]:
    """
    Calculate overall entity authority score per content.

    Some entities are more important for demonstrating authority.

    Args:
        content_embeddings: Content to score
        entity_embeddings: Entity taxonomy
        authority_weights: Weight per category (default equal)

    Returns:
        Dictionary mapping URLs to authority scores
    """
    if authority_weights is None:
        # Default weights emphasizing authoritative entities
        authority_weights = {
            "organizations": 1.2,
            "treatment_modalities": 1.0,
            "medications": 1.1,
            "conditions": 0.9,
            "concepts": 1.0,
            "levels_of_care": 0.8
        }

    authority_scores = {}

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)
        weighted_scores = []

        for category, entities in entity_embeddings.items():
            weight = authority_weights.get(category, 1.0)

            for entity_name, entity_vec in entities.items():
                entity_vec = np.array(entity_vec).reshape(1, -1)
                similarity = float(cosine_similarity(content_vec, entity_vec)[0][0])
                weighted_scores.append(similarity * weight)

        if weighted_scores:
            authority_scores[content.url] = round(np.mean(weighted_scores), 4)
        else:
            authority_scores[content.url] = 0.0

    return authority_scores


def identify_entity_gaps_sitewide(
    content_embeddings: list[ContentEmbedding],
    entity_embeddings: dict[str, dict[str, list[float]]],
    min_coverage_threshold: float = 0.5
) -> dict[str, list[str]]:
    """
    Identify entities not well-covered by any content on the site.

    Args:
        content_embeddings: All site content
        entity_embeddings: Entity taxonomy
        min_coverage_threshold: Threshold for adequate coverage

    Returns:
        Dictionary mapping categories to lists of uncovered entities
    """
    entity_gaps = {}

    for category, entities in entity_embeddings.items():
        category_gaps = []

        for entity_name, entity_vec in entities.items():
            entity_vec = np.array(entity_vec).reshape(1, -1)
            max_coverage = 0.0

            for content in content_embeddings:
                content_vec = np.array(content.embedding).reshape(1, -1)
                similarity = float(cosine_similarity(content_vec, entity_vec)[0][0])
                max_coverage = max(max_coverage, similarity)

            if max_coverage < min_coverage_threshold:
                category_gaps.append(entity_name)

        if category_gaps:
            entity_gaps[category] = category_gaps

    return entity_gaps
