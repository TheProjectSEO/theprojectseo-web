"""
Semantic keyword clustering using embeddings.

Provides hierarchical and K-means clustering of keywords based on
their semantic similarity via embeddings.
"""

import numpy as np
from typing import Optional
from sklearn.cluster import AgglomerativeClustering, KMeans
from sklearn.metrics.pairwise import cosine_similarity

from ..models import KeywordEmbedding, ClusterResult


def cluster_keywords(
    keyword_embeddings: list[KeywordEmbedding],
    n_clusters: Optional[int] = None,
    method: str = "hierarchical",
    distance_threshold: float = 0.3
) -> list[ClusterResult]:
    """
    Cluster keywords based on semantic similarity.

    Args:
        keyword_embeddings: List of KeywordEmbedding objects
        n_clusters: Number of clusters. If None, determined automatically
        method: Clustering method ('hierarchical' or 'kmeans')
        distance_threshold: Distance threshold for hierarchical clustering
                          (used when n_clusters is None)

    Returns:
        List of ClusterResult objects
    """
    if len(keyword_embeddings) < 2:
        if len(keyword_embeddings) == 1:
            return [ClusterResult(
                cluster_id=0,
                keywords=[keyword_embeddings[0].keyword],
                centroid_keyword=keyword_embeddings[0].keyword,
                avg_similarity=1.0
            )]
        return []

    # Extract embeddings matrix
    embeddings_matrix = np.array([ke.embedding for ke in keyword_embeddings])
    keywords = [ke.keyword for ke in keyword_embeddings]

    # Perform clustering
    if method == "hierarchical":
        if n_clusters is None:
            clusterer = AgglomerativeClustering(
                n_clusters=None,
                distance_threshold=distance_threshold,
                metric='cosine',
                linkage='average'
            )
        else:
            clusterer = AgglomerativeClustering(
                n_clusters=n_clusters,
                metric='cosine',
                linkage='average'
            )
    elif method == "kmeans":
        if n_clusters is None:
            # Estimate number of clusters using elbow method heuristic
            n_clusters = min(max(len(keywords) // 5, 2), 20)
        clusterer = KMeans(n_clusters=n_clusters, random_state=42, n_init=10)
    else:
        raise ValueError(f"Unknown clustering method: {method}")

    labels = clusterer.fit_predict(embeddings_matrix)

    # Build cluster results
    clusters = {}
    for i, label in enumerate(labels):
        if label not in clusters:
            clusters[label] = []
        clusters[label].append(i)

    results = []
    for cluster_id, indices in clusters.items():
        cluster_embeddings = embeddings_matrix[indices]
        cluster_keywords = [keywords[i] for i in indices]

        # Find centroid
        centroid = np.mean(cluster_embeddings, axis=0)

        # Find keyword closest to centroid
        similarities_to_centroid = cosine_similarity([centroid], cluster_embeddings)[0]
        centroid_idx = np.argmax(similarities_to_centroid)
        centroid_keyword = cluster_keywords[centroid_idx]

        # Calculate average intra-cluster similarity
        if len(cluster_embeddings) > 1:
            sim_matrix = cosine_similarity(cluster_embeddings)
            # Get upper triangle (excluding diagonal)
            upper_tri = sim_matrix[np.triu_indices(len(cluster_embeddings), k=1)]
            avg_similarity = float(np.mean(upper_tri))
        else:
            avg_similarity = 1.0

        results.append(ClusterResult(
            cluster_id=int(cluster_id),
            keywords=cluster_keywords,
            centroid_keyword=centroid_keyword,
            avg_similarity=avg_similarity
        ))

    # Sort by cluster size (largest first)
    results.sort(key=lambda x: len(x.keywords), reverse=True)

    # Reassign cluster IDs to be sequential
    for i, cluster in enumerate(results):
        cluster.cluster_id = i

    return results


def find_related_keywords(
    target: KeywordEmbedding,
    all_keywords: list[KeywordEmbedding],
    top_k: int = 10,
    min_similarity: float = 0.5
) -> list[tuple[str, float]]:
    """
    Find keywords semantically related to a target keyword.

    Args:
        target: The target KeywordEmbedding
        all_keywords: List of all KeywordEmbeddings to search
        top_k: Maximum number of related keywords to return
        min_similarity: Minimum cosine similarity threshold

    Returns:
        List of (keyword, similarity_score) tuples, sorted by similarity
    """
    target_embedding = np.array(target.embedding)

    results = []
    for kw in all_keywords:
        if kw.keyword == target.keyword:
            continue

        kw_embedding = np.array(kw.embedding)
        similarity = float(cosine_similarity([target_embedding], [kw_embedding])[0][0])

        if similarity >= min_similarity:
            results.append((kw.keyword, similarity))

    # Sort by similarity (descending)
    results.sort(key=lambda x: x[1], reverse=True)

    return results[:top_k]


def get_cluster_topic_suggestions(
    cluster: ClusterResult,
    keyword_embeddings: list[KeywordEmbedding]
) -> str:
    """
    Generate a suggested topic label for a cluster based on common terms.

    Args:
        cluster: The ClusterResult to label
        keyword_embeddings: Full list of keyword embeddings

    Returns:
        Suggested topic label string
    """
    # Simple heuristic: find most common significant words
    words = []
    for kw in cluster.keywords:
        words.extend(kw.lower().split())

    # Remove common stop words
    stop_words = {'the', 'a', 'an', 'in', 'on', 'at', 'for', 'to', 'of', 'and', 'or', 'is', 'are'}
    words = [w for w in words if w not in stop_words and len(w) > 2]

    # Count word frequencies
    word_counts = {}
    for word in words:
        word_counts[word] = word_counts.get(word, 0) + 1

    # Get top 2-3 most common words
    sorted_words = sorted(word_counts.items(), key=lambda x: x[1], reverse=True)
    top_words = [w[0] for w in sorted_words[:3]]

    if top_words:
        return " ".join(top_words).title()
    return cluster.centroid_keyword


def compute_similarity_matrix(
    keyword_embeddings: list[KeywordEmbedding]
) -> tuple[np.ndarray, list[str]]:
    """
    Compute full similarity matrix between all keywords.

    Args:
        keyword_embeddings: List of KeywordEmbedding objects

    Returns:
        Tuple of (similarity_matrix, keyword_list)
    """
    embeddings_matrix = np.array([ke.embedding for ke in keyword_embeddings])
    keywords = [ke.keyword for ke in keyword_embeddings]

    similarity_matrix = cosine_similarity(embeddings_matrix)

    return similarity_matrix, keywords


def find_outliers(
    keyword_embeddings: list[KeywordEmbedding],
    threshold: float = 0.3
) -> list[str]:
    """
    Find keywords that don't fit well with any cluster.

    Args:
        keyword_embeddings: List of KeywordEmbedding objects
        threshold: Maximum average similarity to be considered an outlier

    Returns:
        List of outlier keyword strings
    """
    if len(keyword_embeddings) < 2:
        return []

    sim_matrix, keywords = compute_similarity_matrix(keyword_embeddings)

    outliers = []
    for i, kw in enumerate(keywords):
        # Get similarities to all other keywords
        similarities = np.concatenate([sim_matrix[i, :i], sim_matrix[i, i+1:]])
        avg_similarity = np.mean(similarities)

        if avg_similarity < threshold:
            outliers.append(kw)

    return outliers
