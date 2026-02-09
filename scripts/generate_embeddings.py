#!/usr/bin/env python3
"""
Batch embedding generator for content.

Loads content from content_ops CSV and generates embeddings for all pages,
saving results to JSON for further analysis.
"""

import csv
import json
import argparse
from pathlib import Path
from datetime import datetime
from typing import Optional

from embeddings.client import EmbeddingClient
from embeddings.models import ContentEmbedding, KeywordEmbedding


def load_content_ops(csv_path: str) -> list[dict]:
    """Load content from content_ops CSV file."""
    content_items = []

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Handle different CSV column naming conventions
            # Support both standard names and content_ops_final format

            # URL: try multiple possible columns
            url = (row.get('URL') or row.get('url') or row.get('live_url') or
                   f"/{row.get('slug', '')}" if row.get('slug') else '')

            # Title: try multiple possible columns
            title = (row.get('Title') or row.get('title') or row.get('title_tag') or
                     row.get('page_name', ''))

            # Content: try actual content, or build from available metadata
            content = row.get('Content') or row.get('content') or row.get('Body') or ''
            if not content:
                # Build pseudo-content from available metadata for planning CSVs
                parts = []
                if row.get('title_tag'):
                    parts.append(row['title_tag'])
                if row.get('h1_tag'):
                    parts.append(row['h1_tag'])
                if row.get('meta_description'):
                    parts.append(row['meta_description'])
                if row.get('primary_keyword'):
                    parts.append(f"Primary topic: {row['primary_keyword']}")
                if row.get('secondary_keywords'):
                    parts.append(f"Related topics: {row['secondary_keywords']}")
                if row.get('main_topic'):
                    parts.append(f"Main topic: {row['main_topic']}")
                if row.get('search_intent'):
                    parts.append(f"Search intent: {row['search_intent']}")
                content = '\n\n'.join(parts)

            # Meta description
            meta_desc = (row.get('Meta Description') or row.get('meta_description') or '')

            # H1
            h1 = (row.get('H1') or row.get('h1') or row.get('h1_tag') or '')

            # Target keyword
            target_kw = (row.get('Target Keyword') or row.get('target_keyword') or
                         row.get('primary_keyword', ''))

            # Content type
            content_type = (row.get('Content Type') or row.get('content_type') or
                           row.get('page_type', 'page'))

            content_items.append({
                'url': url,
                'title': title,
                'content': content,
                'meta_description': meta_desc,
                'h1': h1,
                'target_keyword': target_kw,
                'content_type': content_type
            })

    return content_items


def load_keywords(keywords_path: Optional[str]) -> list[dict]:
    """Load keywords from CSV file."""
    if not keywords_path or not Path(keywords_path).exists():
        return []

    keywords = []
    with open(keywords_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            keywords.append({
                'keyword': row.get('Keyword', row.get('keyword', '')),
                'search_volume': int(row.get('Search Volume', row.get('search_volume', 0)) or 0),
                'keyword_difficulty': float(row.get('Keyword Difficulty', row.get('kd', 0)) or 0),
                'intent': row.get('Intent', row.get('intent', ''))
            })

    return keywords


def extract_keywords_from_content_ops(csv_path: str) -> list[dict]:
    """Extract keywords from content_ops CSV (primary and secondary keywords)."""
    keywords = []
    seen = set()

    with open(csv_path, 'r', encoding='utf-8') as f:
        reader = csv.DictReader(f)
        for row in reader:
            # Primary keyword
            primary = row.get('primary_keyword', '').strip()
            if primary and primary not in seen:
                seen.add(primary)
                keywords.append({
                    'keyword': primary,
                    'search_volume': int(row.get('search_volume', 0) or 0),
                    'keyword_difficulty': float(row.get('keyword_difficulty', 0) or 0),
                    'intent': row.get('search_intent', '')
                })

            # Secondary keywords (comma-separated)
            secondary = row.get('secondary_keywords', '')
            if secondary:
                for kw in secondary.split(','):
                    kw = kw.strip()
                    if kw and kw not in seen:
                        seen.add(kw)
                        keywords.append({
                            'keyword': kw,
                            'search_volume': 0,  # Not available for secondary
                            'keyword_difficulty': 0,
                            'intent': row.get('search_intent', '')
                        })

    return keywords


def generate_content_embeddings(
    content_items: list[dict],
    client: EmbeddingClient,
    show_progress: bool = True
) -> list[ContentEmbedding]:
    """Generate embeddings for all content items."""
    if show_progress:
        print(f"\nGenerating embeddings for {len(content_items)} content items...")

    # Prepare texts for batch embedding
    texts = []
    for item in content_items:
        # Combine title and content for richer embedding
        text = f"{item['title']}\n\n{item['content']}"
        if item.get('meta_description'):
            text = f"{item['meta_description']}\n\n{text}"
        texts.append(text[:8000])  # Truncate very long content

    # Get embeddings in batch
    results = client.get_embeddings_batch(texts, show_progress=show_progress)

    # Create ContentEmbedding objects
    content_embeddings = []
    for item, result in zip(content_items, results):
        content_embeddings.append(ContentEmbedding(
            url=item['url'],
            title=item['title'],
            content=item['content'][:5000],  # Store truncated content
            embedding=result.embedding,
            content_type=item.get('content_type', 'page'),
            meta_description=item.get('meta_description'),
            h1=item.get('h1'),
            target_keyword=item.get('target_keyword')
        ))

    return content_embeddings


def generate_keyword_embeddings(
    keywords: list[dict],
    client: EmbeddingClient,
    show_progress: bool = True
) -> list[KeywordEmbedding]:
    """Generate embeddings for all keywords."""
    if show_progress:
        print(f"\nGenerating embeddings for {len(keywords)} keywords...")

    texts = [kw['keyword'] for kw in keywords]
    results = client.get_embeddings_batch(texts, show_progress=show_progress)

    keyword_embeddings = []
    for kw, result in zip(keywords, results):
        keyword_embeddings.append(KeywordEmbedding(
            keyword=kw['keyword'],
            embedding=result.embedding,
            search_volume=kw.get('search_volume'),
            keyword_difficulty=kw.get('keyword_difficulty'),
            intent=kw.get('intent')
        ))

    return keyword_embeddings


def save_embeddings(
    content_embeddings: list[ContentEmbedding],
    keyword_embeddings: list[KeywordEmbedding],
    output_dir: str
) -> str:
    """Save embeddings to JSON file."""
    output_path = Path(output_dir)
    output_path.mkdir(exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d")
    filename = output_path / f"embeddings_{timestamp}.json"

    data = {
        "generated_at": datetime.now().isoformat(),
        "content_count": len(content_embeddings),
        "keyword_count": len(keyword_embeddings),
        "model": "text-embedding-3-large",
        "dimensions": 3072,
        "content_embeddings": [ce.to_dict() for ce in content_embeddings],
        "keyword_embeddings": [ke.to_dict() for ke in keyword_embeddings]
    }

    with open(filename, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2)

    return str(filename)


def main():
    parser = argparse.ArgumentParser(
        description="Generate embeddings for content and keywords"
    )
    parser.add_argument(
        "--content-csv",
        default="output/content_ops_final.csv",
        help="Path to content CSV file"
    )
    parser.add_argument(
        "--keywords-csv",
        default=None,
        help="Path to keywords CSV file (optional)"
    )
    parser.add_argument(
        "--output-dir",
        default="output",
        help="Output directory for embeddings JSON"
    )
    parser.add_argument(
        "--no-cache",
        action="store_true",
        help="Skip embedding cache (re-embed everything)"
    )
    parser.add_argument(
        "--api-key",
        default=None,
        help="OpenAI API key (or set OPENAI_API_KEY env var)"
    )

    args = parser.parse_args()

    # Resolve paths relative to script location
    script_dir = Path(__file__).parent.parent
    content_csv = script_dir / args.content_csv
    output_dir = script_dir / args.output_dir

    # Check if content CSV exists
    if not content_csv.exists():
        print(f"Error: Content CSV not found at {content_csv}")
        print("Please provide a valid path with --content-csv")
        return 1

    # Initialize client
    try:
        client = EmbeddingClient(
            api_key=args.api_key,
            use_cache=not args.no_cache
        )
    except ValueError as e:
        print(f"Error: {e}")
        return 1

    # Load content
    print(f"Loading content from {content_csv}...")
    content_items = load_content_ops(str(content_csv))
    print(f"Loaded {len(content_items)} content items")

    # Load keywords if provided, or extract from content_ops
    keyword_items = []
    if args.keywords_csv:
        keywords_csv = script_dir / args.keywords_csv
        if keywords_csv.exists():
            keyword_items = load_keywords(str(keywords_csv))
            print(f"Loaded {len(keyword_items)} keywords from keywords CSV")
    else:
        # Extract keywords from content_ops CSV
        keyword_items = extract_keywords_from_content_ops(str(content_csv))
        print(f"Extracted {len(keyword_items)} keywords from content ops")

    # Generate embeddings
    content_embeddings = generate_content_embeddings(content_items, client)
    keyword_embeddings = generate_keyword_embeddings(keyword_items, client) if keyword_items else []

    # Save results
    output_file = save_embeddings(content_embeddings, keyword_embeddings, str(output_dir))
    print(f"\nEmbeddings saved to: {output_file}")

    # Print usage stats
    stats = client.get_usage_stats()
    print(f"\nUsage Statistics:")
    print(f"  API calls: {stats['api_calls']}")
    print(f"  Cache hits: {stats['cache_hits']}")
    print(f"  Tokens used: {stats['tokens_used']}")
    print(f"  Estimated cost: {stats['estimated_cost']}")

    return 0


if __name__ == "__main__":
    exit(main())
