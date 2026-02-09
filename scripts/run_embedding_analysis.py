#!/usr/bin/env python3
"""
Main embedding analysis runner.

Loads embeddings and runs comprehensive AI optimization analysis including
clustering, completeness, answer density, entity coverage, citations, and RAG.
"""

import json
import argparse
from pathlib import Path
from datetime import datetime
from typing import Optional

from embeddings.client import EmbeddingClient
from embeddings.models import (
    ContentEmbedding, KeywordEmbedding, AnalysisResult,
    ClusterResult, CompletenessResult, AnswerDensityResult,
    EntityCoverageResult, CitationResult, RAGChunkResult
)
from embeddings.analysis.clustering import cluster_keywords, find_outliers
from embeddings.analysis.completeness import (
    assess_completeness, find_content_gaps, identify_content_redundancy
)
from embeddings.analysis.answer_density import (
    analyze_answer_density, find_answerable_sections,
    DEFAULT_ADDICTION_QUESTIONS
)
from embeddings.analysis.entities import (
    analyze_entity_coverage, identify_entity_gaps_sitewide,
    DEFAULT_ENTITY_TAXONOMY
)
from embeddings.analysis.citations import (
    analyze_citation_readiness, compare_citation_potential
)
from embeddings.analysis.rag import (
    analyze_rag_chunks, analyze_retrieval_coverage, identify_retrieval_gaps
)


def load_embeddings(embeddings_path: str) -> tuple[list[ContentEmbedding], list[KeywordEmbedding]]:
    """Load embeddings from JSON file."""
    with open(embeddings_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    content_embeddings = [
        ContentEmbedding.from_dict(ce)
        for ce in data.get('content_embeddings', [])
    ]

    keyword_embeddings = [
        KeywordEmbedding.from_dict(ke)
        for ke in data.get('keyword_embeddings', [])
    ]

    return content_embeddings, keyword_embeddings


def generate_topic_embeddings(
    client: EmbeddingClient,
    topics: list[str]
) -> dict[str, list[float]]:
    """Generate embeddings for a list of topics."""
    results = client.get_embeddings_batch(topics, show_progress=False)
    return {topic: result.embedding for topic, result in zip(topics, results)}


def generate_question_embeddings(
    client: EmbeddingClient,
    questions: list[str] = None
) -> dict[str, list[float]]:
    """Generate embeddings for questions."""
    if questions is None:
        questions = DEFAULT_ADDICTION_QUESTIONS
    results = client.get_embeddings_batch(questions, show_progress=False)
    return {q: result.embedding for q, result in zip(questions, results)}


def generate_entity_embeddings(
    client: EmbeddingClient,
    taxonomy: dict[str, list[str]] = None
) -> dict[str, dict[str, list[float]]]:
    """Generate embeddings for entity taxonomy."""
    if taxonomy is None:
        taxonomy = DEFAULT_ENTITY_TAXONOMY

    entity_embeddings = {}
    for category, entities in taxonomy.items():
        results = client.get_embeddings_batch(entities, show_progress=False)
        entity_embeddings[category] = {
            entity: result.embedding
            for entity, result in zip(entities, results)
        }

    return entity_embeddings


def run_clustering_analysis(
    keyword_embeddings: list[KeywordEmbedding],
    n_clusters: Optional[int] = None
) -> list[ClusterResult]:
    """Run keyword clustering analysis."""
    print("Running keyword clustering analysis...")

    if not keyword_embeddings:
        print("  No keywords to cluster")
        return []

    clusters = cluster_keywords(keyword_embeddings, n_clusters=n_clusters)
    outliers = find_outliers(keyword_embeddings)

    print(f"  Found {len(clusters)} clusters")
    print(f"  Found {len(outliers)} outlier keywords")

    return clusters


def run_completeness_analysis(
    content_embeddings: list[ContentEmbedding],
    topic_embeddings: dict[str, list[float]]
) -> list[CompletenessResult]:
    """Run content completeness analysis."""
    print("Running content completeness analysis...")

    results = []
    for content in content_embeddings:
        result = assess_completeness(content, topic_embeddings)
        results.append(result)

    avg_score = sum(r.completeness_score for r in results) / len(results) if results else 0
    print(f"  Average completeness score: {avg_score:.2f}")

    # Check for redundancy
    redundant = identify_content_redundancy(content_embeddings)
    if redundant:
        print(f"  Found {len(redundant)} potentially redundant content pairs")

    return results


def run_answer_density_analysis(
    content_embeddings: list[ContentEmbedding],
    content_texts: dict[str, str],
    question_embeddings: dict[str, list[float]]
) -> list[AnswerDensityResult]:
    """Run answer density analysis."""
    print("Running answer density analysis...")

    results = []
    for content in content_embeddings:
        content_text = content_texts.get(content.url, content.content)
        result = analyze_answer_density(
            content, question_embeddings, content_text
        )
        results.append(result)

    avg_score = sum(r.answer_density_score for r in results) / len(results) if results else 0
    print(f"  Average answer density score: {avg_score:.2f}")

    return results


def run_entity_coverage_analysis(
    content_embeddings: list[ContentEmbedding],
    entity_embeddings: dict[str, dict[str, list[float]]]
) -> list[EntityCoverageResult]:
    """Run entity coverage analysis."""
    print("Running entity coverage analysis...")

    results = []
    for content in content_embeddings:
        result = analyze_entity_coverage(content, entity_embeddings)
        results.append(result)

    avg_score = sum(r.overall_coverage for r in results) / len(results) if results else 0
    print(f"  Average entity coverage: {avg_score:.2f}")

    # Check for sitewide gaps
    gaps = identify_entity_gaps_sitewide(content_embeddings, entity_embeddings)
    total_gaps = sum(len(g) for g in gaps.values())
    print(f"  Found {total_gaps} entity gaps across {len(gaps)} categories")

    return results


def run_citation_analysis(
    content_embeddings: list[ContentEmbedding],
    content_texts: dict[str, str]
) -> list[CitationResult]:
    """Run citation potential analysis."""
    print("Running citation analysis...")

    results = []
    for content in content_embeddings:
        content_text = content_texts.get(content.url, content.content)
        result = analyze_citation_readiness(content, content_text)
        results.append(result)

    avg_potential = sum(r.total_citation_potential for r in results) / len(results) if results else 0
    print(f"  Average citation potential: {avg_potential:.2f}")

    return results


def run_rag_analysis(
    content_embeddings: list[ContentEmbedding],
    content_texts: dict[str, str],
    query_embeddings: dict[str, list[float]]
) -> list[RAGChunkResult]:
    """Run RAG optimization analysis."""
    print("Running RAG chunk analysis...")

    results = []
    for content in content_embeddings:
        content_text = content_texts.get(content.url, content.content)
        result = analyze_rag_chunks(content, content_text, query_embeddings)
        results.append(result)

    avg_score = sum(r.avg_retrieval_score for r in results) / len(results) if results else 0
    print(f"  Average retrieval score: {avg_score:.2f}")

    # Check for retrieval gaps
    gaps = identify_retrieval_gaps(content_embeddings, query_embeddings)
    print(f"  Found {len(gaps)} queries with retrieval gaps")

    return results


def generate_summary(result: AnalysisResult) -> dict:
    """Generate summary statistics from analysis results."""
    summary = {
        "overview": {
            "content_analyzed": result.content_count,
            "keywords_analyzed": result.keyword_count,
            "generated_at": result.generated_at.isoformat()
        }
    }

    # Clustering summary
    if result.keyword_clusters:
        summary["clustering"] = {
            "total_clusters": len(result.keyword_clusters),
            "largest_cluster_size": max(len(c.keywords) for c in result.keyword_clusters),
            "avg_cluster_size": sum(len(c.keywords) for c in result.keyword_clusters) / len(result.keyword_clusters)
        }

    # Completeness summary
    if result.completeness_results:
        scores = [r.completeness_score for r in result.completeness_results]
        summary["completeness"] = {
            "avg_score": round(sum(scores) / len(scores), 4),
            "min_score": round(min(scores), 4),
            "max_score": round(max(scores), 4),
            "below_threshold": sum(1 for s in scores if s < 0.5)
        }

    # Answer density summary
    if result.answer_density_results:
        scores = [r.answer_density_score for r in result.answer_density_results]
        summary["answer_density"] = {
            "avg_score": round(sum(scores) / len(scores), 4),
            "min_score": round(min(scores), 4),
            "max_score": round(max(scores), 4)
        }

    # Entity coverage summary
    if result.entity_coverage_results:
        scores = [r.overall_coverage for r in result.entity_coverage_results]
        summary["entity_coverage"] = {
            "avg_coverage": round(sum(scores) / len(scores), 4),
            "min_coverage": round(min(scores), 4),
            "max_coverage": round(max(scores), 4)
        }

    # Citation summary
    if result.citation_results:
        scores = [r.total_citation_potential for r in result.citation_results]
        total_opportunities = sum(len(r.opportunities) for r in result.citation_results)
        summary["citations"] = {
            "avg_potential": round(sum(scores) / len(scores), 4),
            "total_opportunities": total_opportunities,
            "pages_with_opportunities": sum(1 for r in result.citation_results if r.opportunities)
        }

    # RAG summary
    if result.rag_results:
        scores = [r.avg_retrieval_score for r in result.rag_results]
        summary["rag"] = {
            "avg_retrieval_score": round(sum(scores) / len(scores), 4),
            "min_score": round(min(scores), 4),
            "max_score": round(max(scores), 4)
        }

    return summary


def save_results(result: AnalysisResult, output_dir: str) -> dict[str, str]:
    """Save analysis results to JSON files."""
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d")
    files_saved = {}

    # Main report
    main_file = output_path / f"ai_optimization_report_{timestamp}.json"
    with open(main_file, 'w', encoding='utf-8') as f:
        json.dump(result.to_dict(), f, indent=2)
    files_saved["main_report"] = str(main_file)

    # Individual analysis files
    if result.keyword_clusters:
        cluster_file = output_path / f"keyword_clusters_{timestamp}.json"
        with open(cluster_file, 'w', encoding='utf-8') as f:
            json.dump([c.to_dict() for c in result.keyword_clusters], f, indent=2)
        files_saved["keyword_clusters"] = str(cluster_file)

    if result.completeness_results:
        completeness_file = output_path / f"content_completeness_{timestamp}.json"
        with open(completeness_file, 'w', encoding='utf-8') as f:
            json.dump([c.to_dict() for c in result.completeness_results], f, indent=2)
        files_saved["content_completeness"] = str(completeness_file)

    if result.answer_density_results:
        density_file = output_path / f"answer_density_scores_{timestamp}.json"
        with open(density_file, 'w', encoding='utf-8') as f:
            json.dump([a.to_dict() for a in result.answer_density_results], f, indent=2)
        files_saved["answer_density"] = str(density_file)

    if result.entity_coverage_results:
        entity_file = output_path / f"entity_coverage_{timestamp}.json"
        with open(entity_file, 'w', encoding='utf-8') as f:
            json.dump([e.to_dict() for e in result.entity_coverage_results], f, indent=2)
        files_saved["entity_coverage"] = str(entity_file)

    if result.citation_results:
        citation_file = output_path / f"citation_opportunities_{timestamp}.json"
        with open(citation_file, 'w', encoding='utf-8') as f:
            json.dump([c.to_dict() for c in result.citation_results], f, indent=2)
        files_saved["citations"] = str(citation_file)

    if result.rag_results:
        rag_file = output_path / f"rag_optimization_{timestamp}.json"
        with open(rag_file, 'w', encoding='utf-8') as f:
            json.dump([r.to_dict() for r in result.rag_results], f, indent=2)
        files_saved["rag_optimization"] = str(rag_file)

    return files_saved


def main():
    parser = argparse.ArgumentParser(
        description="Run AI optimization analysis on content embeddings"
    )
    parser.add_argument(
        "--embeddings",
        required=True,
        help="Path to embeddings JSON file"
    )
    parser.add_argument(
        "--output-dir",
        default="output",
        help="Output directory for analysis results"
    )
    parser.add_argument(
        "--api-key",
        default=None,
        help="OpenAI API key for generating additional embeddings"
    )
    parser.add_argument(
        "--skip-clustering",
        action="store_true",
        help="Skip keyword clustering analysis"
    )
    parser.add_argument(
        "--skip-completeness",
        action="store_true",
        help="Skip content completeness analysis"
    )
    parser.add_argument(
        "--skip-answer-density",
        action="store_true",
        help="Skip answer density analysis"
    )
    parser.add_argument(
        "--skip-entities",
        action="store_true",
        help="Skip entity coverage analysis"
    )
    parser.add_argument(
        "--skip-citations",
        action="store_true",
        help="Skip citation analysis"
    )
    parser.add_argument(
        "--skip-rag",
        action="store_true",
        help="Skip RAG analysis"
    )

    args = parser.parse_args()

    # Resolve paths
    script_dir = Path(__file__).parent.parent
    embeddings_path = Path(args.embeddings)
    if not embeddings_path.is_absolute():
        embeddings_path = script_dir / embeddings_path
    output_dir = script_dir / args.output_dir

    # Check embeddings file exists
    if not embeddings_path.exists():
        print(f"Error: Embeddings file not found at {embeddings_path}")
        return 1

    # Load embeddings
    print(f"Loading embeddings from {embeddings_path}...")
    content_embeddings, keyword_embeddings = load_embeddings(str(embeddings_path))
    print(f"  Loaded {len(content_embeddings)} content embeddings")
    print(f"  Loaded {len(keyword_embeddings)} keyword embeddings")

    # Build content text dictionary
    content_texts = {ce.url: ce.content for ce in content_embeddings}

    # Initialize embedding client for generating reference embeddings
    try:
        client = EmbeddingClient(api_key=args.api_key)
    except ValueError as e:
        print(f"Warning: {e}")
        print("Some analyses requiring additional embeddings will be limited")
        client = None

    # Initialize result
    result = AnalysisResult(
        content_count=len(content_embeddings),
        keyword_count=len(keyword_embeddings)
    )

    # Run analyses
    print("\n" + "="*50)
    print("RUNNING AI OPTIMIZATION ANALYSIS")
    print("="*50 + "\n")

    # 1. Clustering
    if not args.skip_clustering and keyword_embeddings:
        result.keyword_clusters = run_clustering_analysis(keyword_embeddings)

    # 2. Completeness
    if not args.skip_completeness and client:
        print("\nGenerating topic embeddings...")
        from embeddings.analysis.completeness import DEFAULT_ADDICTION_TOPICS
        all_topics = []
        for topics in DEFAULT_ADDICTION_TOPICS.values():
            all_topics.extend(topics)
        topic_embeddings = generate_topic_embeddings(client, all_topics)
        result.completeness_results = run_completeness_analysis(
            content_embeddings, topic_embeddings
        )

    # 3. Answer Density
    if not args.skip_answer_density and client:
        print("\nGenerating question embeddings...")
        question_embeddings = generate_question_embeddings(client)
        result.answer_density_results = run_answer_density_analysis(
            content_embeddings, content_texts, question_embeddings
        )

    # 4. Entity Coverage
    if not args.skip_entities and client:
        print("\nGenerating entity embeddings...")
        entity_embeddings = generate_entity_embeddings(client)
        result.entity_coverage_results = run_entity_coverage_analysis(
            content_embeddings, entity_embeddings
        )

    # 5. Citations
    if not args.skip_citations:
        result.citation_results = run_citation_analysis(
            content_embeddings, content_texts
        )

    # 6. RAG
    if not args.skip_rag and client:
        # Reuse question embeddings for RAG query simulation
        if 'question_embeddings' not in locals():
            question_embeddings = generate_question_embeddings(client)
        result.rag_results = run_rag_analysis(
            content_embeddings, content_texts, question_embeddings
        )

    # Generate summary
    result.summary = generate_summary(result)

    # Save results
    print("\n" + "="*50)
    print("SAVING RESULTS")
    print("="*50 + "\n")

    files_saved = save_results(result, str(output_dir))
    for name, path in files_saved.items():
        print(f"  {name}: {path}")

    # Print summary
    print("\n" + "="*50)
    print("ANALYSIS SUMMARY")
    print("="*50 + "\n")

    print(json.dumps(result.summary, indent=2))

    # Print client usage if available
    if client:
        stats = client.get_usage_stats()
        print(f"\nAPI Usage:")
        print(f"  Calls: {stats['api_calls']}")
        print(f"  Cache hits: {stats['cache_hits']}")
        print(f"  Estimated cost: {stats['estimated_cost']}")

    return 0


if __name__ == "__main__":
    exit(main())
