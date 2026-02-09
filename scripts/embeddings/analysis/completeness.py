"""
Content completeness assessment using embeddings.

Analyzes how comprehensively content covers expected topics
by comparing content embeddings against topic benchmarks.
"""

import numpy as np
from typing import Optional
from sklearn.metrics.pairwise import cosine_similarity

from ..models import ContentEmbedding, CompletenessResult


# Import SEO-specific topics from taxonomy
import sys
from pathlib import Path
sys.path.append(str(Path(__file__).parent.parent.parent))
from seo_taxonomies import DEFAULT_SEO_TOPICS

# Use SEO topics for completeness analysis
DEFAULT_ADDICTION_TOPICS = DEFAULT_SEO_TOPICS


def assess_completeness(
    content_embedding: ContentEmbedding,
    topic_embeddings: dict[str, list[float]],
    similarity_threshold: float = 0.4
) -> CompletenessResult:
    """
    Assess content completeness against a set of expected topics.

    Args:
        content_embedding: ContentEmbedding to analyze
        topic_embeddings: Dictionary mapping topic names to embeddings
        similarity_threshold: Minimum similarity to consider a topic covered

    Returns:
        CompletenessResult with coverage analysis
    """
    content_vec = np.array(content_embedding.embedding).reshape(1, -1)

    covered_topics = []
    missing_topics = []
    topic_coverage = {}

    for topic_name, topic_vec in topic_embeddings.items():
        topic_vec = np.array(topic_vec).reshape(1, -1)
        similarity = float(cosine_similarity(content_vec, topic_vec)[0][0])
        topic_coverage[topic_name] = round(similarity, 4)

        if similarity >= similarity_threshold:
            covered_topics.append(topic_name)
        else:
            missing_topics.append(topic_name)

    # Calculate overall completeness score
    if topic_coverage:
        completeness_score = np.mean(list(topic_coverage.values()))
    else:
        completeness_score = 0.0

    # Generate recommendations
    recommendations = []
    if missing_topics:
        # Sort by how far below threshold they are
        missing_sorted = sorted(
            missing_topics,
            key=lambda t: topic_coverage.get(t, 0),
            reverse=True
        )[:5]
        recommendations.append(
            f"Consider adding content about: {', '.join(missing_sorted)}"
        )

    # Check for low-coverage topics that are partially addressed
    partial_topics = [
        t for t in topic_coverage
        if similarity_threshold * 0.7 <= topic_coverage[t] < similarity_threshold
    ]
    if partial_topics:
        recommendations.append(
            f"Expand coverage of: {', '.join(partial_topics[:3])}"
        )

    return CompletenessResult(
        url=content_embedding.url,
        completeness_score=round(float(completeness_score), 4),
        covered_topics=covered_topics,
        missing_topics=missing_topics,
        topic_coverage=topic_coverage,
        recommendations=recommendations
    )


def find_content_gaps(
    content_embedding: ContentEmbedding,
    expected_topic_embeddings: dict[str, list[float]],
    gap_threshold: float = 0.35
) -> list[tuple[str, float]]:
    """
    Identify specific content gaps where expected topics aren't covered.

    Args:
        content_embedding: ContentEmbedding to analyze
        expected_topic_embeddings: Topics that should be covered
        gap_threshold: Similarity below which a topic is considered a gap

    Returns:
        List of (topic, similarity) tuples for topics below threshold
    """
    content_vec = np.array(content_embedding.embedding).reshape(1, -1)

    gaps = []
    for topic_name, topic_vec in expected_topic_embeddings.items():
        topic_vec = np.array(topic_vec).reshape(1, -1)
        similarity = float(cosine_similarity(content_vec, topic_vec)[0][0])

        if similarity < gap_threshold:
            gaps.append((topic_name, similarity))

    # Sort by lowest similarity (biggest gaps first)
    gaps.sort(key=lambda x: x[1])

    return gaps


def compare_content_coverage(
    content_embeddings: list[ContentEmbedding],
    topic_embeddings: dict[str, list[float]]
) -> dict[str, dict[str, float]]:
    """
    Compare topic coverage across multiple content pieces.

    Args:
        content_embeddings: List of ContentEmbeddings to compare
        topic_embeddings: Topics to check coverage against

    Returns:
        Dictionary mapping URLs to topic coverage dictionaries
    """
    coverage_matrix = {}

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)
        coverage = {}

        for topic_name, topic_vec in topic_embeddings.items():
            topic_vec = np.array(topic_vec).reshape(1, -1)
            similarity = float(cosine_similarity(content_vec, topic_vec)[0][0])
            coverage[topic_name] = round(similarity, 4)

        coverage_matrix[content.url] = coverage

    return coverage_matrix


def find_best_content_for_topic(
    content_embeddings: list[ContentEmbedding],
    topic_embedding: list[float],
    top_k: int = 5
) -> list[tuple[str, float]]:
    """
    Find content that best covers a specific topic.

    Args:
        content_embeddings: List of ContentEmbeddings to search
        topic_embedding: Embedding of the topic to match
        top_k: Number of top results to return

    Returns:
        List of (url, similarity) tuples, sorted by similarity
    """
    topic_vec = np.array(topic_embedding).reshape(1, -1)
    results = []

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)
        similarity = float(cosine_similarity(content_vec, topic_vec)[0][0])
        results.append((content.url, similarity))

    results.sort(key=lambda x: x[1], reverse=True)
    return results[:top_k]


def calculate_topic_distribution(
    content_embeddings: list[ContentEmbedding],
    topic_embeddings: dict[str, list[float]],
    coverage_threshold: float = 0.5
) -> dict[str, int]:
    """
    Calculate how many content pieces cover each topic.

    Args:
        content_embeddings: List of ContentEmbeddings
        topic_embeddings: Topics to check
        coverage_threshold: Minimum similarity to count as coverage

    Returns:
        Dictionary mapping topic names to content count
    """
    topic_counts = {topic: 0 for topic in topic_embeddings}

    for content in content_embeddings:
        content_vec = np.array(content.embedding).reshape(1, -1)

        for topic_name, topic_vec in topic_embeddings.items():
            topic_vec = np.array(topic_vec).reshape(1, -1)
            similarity = float(cosine_similarity(content_vec, topic_vec)[0][0])

            if similarity >= coverage_threshold:
                topic_counts[topic_name] += 1

    return topic_counts


def identify_content_redundancy(
    content_embeddings: list[ContentEmbedding],
    similarity_threshold: float = 0.85
) -> list[tuple[str, str, float]]:
    """
    Identify content pieces that may be redundant (too similar).

    Args:
        content_embeddings: List of ContentEmbeddings
        similarity_threshold: Similarity above which content is flagged

    Returns:
        List of (url1, url2, similarity) tuples for redundant pairs
    """
    redundant_pairs = []

    for i, content1 in enumerate(content_embeddings):
        vec1 = np.array(content1.embedding).reshape(1, -1)

        for j, content2 in enumerate(content_embeddings[i+1:], start=i+1):
            vec2 = np.array(content2.embedding).reshape(1, -1)
            similarity = float(cosine_similarity(vec1, vec2)[0][0])

            if similarity >= similarity_threshold:
                redundant_pairs.append((content1.url, content2.url, similarity))

    redundant_pairs.sort(key=lambda x: x[2], reverse=True)
    return redundant_pairs
