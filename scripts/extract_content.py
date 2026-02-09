"""
Extract content from all Next.js pages for embedding generation.

Reads page.tsx files, extracts metadata, content, and exports to CSV.
"""

import csv
import re
from pathlib import Path
from typing import Dict, List, Optional


def extract_metadata(file_content: str) -> Dict[str, str]:
    """Extract metadata from Next.js page file."""
    metadata = {}

    # Extract title
    title_match = re.search(r"title:\s*['\"](.+?)['\"]", file_content)
    if title_match:
        metadata['title'] = title_match.group(1).replace(' | TheProjectSEO', '')

    # Extract description
    desc_match = re.search(r"description:\s*['\"](.+?)['\"]", file_content, re.DOTALL)
    if desc_match:
        metadata['description'] = desc_match.group(1).replace('\n', ' ').strip()

    return metadata


def extract_text_content(file_content: str) -> str:
    """Extract readable text content from page components."""
    # Remove imports, exports, JSX tags
    content = re.sub(r'import\s+.*?from\s+[\'"].*?[\'"]', '', file_content)
    content = re.sub(r'export\s+(const|default|function)\s+.*?\n', '', content)

    # Extract text from JSX
    # Find all string literals in JSX
    jsx_text = re.findall(r'>([^<>{}\n]+)<', content)
    jsx_text += re.findall(r'["\']([^"\']{20,})["\']', content)

    # Join and clean
    text = ' '.join(jsx_text)
    text = re.sub(r'\s+', ' ', text).strip()
    text = text.replace('&apos;', "'")

    return text[:10000]  # Limit to 10K chars


def extract_h1(file_content: str) -> Optional[str]:
    """Extract H1 heading if present."""
    h1_match = re.search(r'<[Hh]1[^>]*>(.+?)</[Hh]1>', file_content)
    if h1_match:
        return h1_match.group(1).strip()

    # Try Heading component with as="h1"
    heading_match = re.search(r'<Heading\s+as="h1"[^>]*>(.+?)</Heading>', file_content, re.DOTALL)
    if heading_match:
        text = heading_match.group(1).strip()
        # Remove JSX expressions
        text = re.sub(r'\{[^}]+\}', '', text)
        return text.strip()

    return None


def process_page_file(file_path: Path, url_prefix: str = '') -> Dict[str, str]:
    """Process a single page.tsx file and extract content."""
    content = file_path.read_text()

    # Determine URL from file path
    rel_path = file_path.relative_to(file_path.parent.parent.parent)
    if 'page.tsx' in str(rel_path):
        url = '/' + str(rel_path.parent).replace('src/app', '').strip('/')
        if url == '/':
            url = ''  # Homepage
    else:
        url = '/' + str(rel_path).replace('.tsx', '').replace('src/app', '').strip('/')

    metadata = extract_metadata(content)
    text_content = extract_text_content(content)
    h1 = extract_h1(content)

    # Determine content type
    content_type = 'page'
    if '/blog/' in url and url != '/blog':
        content_type = 'blog_post'
    elif '/industries/' in url:
        content_type = 'industry_page'
    elif '/locations/' in url:
        content_type = 'location_page'
    elif '/services/' in url:
        content_type = 'service_page'

    return {
        'url': url,
        'title': metadata.get('title', ''),
        'content': text_content,
        'meta_description': metadata.get('description', ''),
        'h1': h1 or metadata.get('title', ''),
        'content_type': content_type,
        'target_keyword': '',  # Can be populated manually or via analysis
    }


def main():
    """Extract content from all pages and save to CSV."""
    project_root = Path(__file__).parent.parent
    app_dir = project_root / 'src' / 'app'

    # Find all page.tsx files
    page_files = list(app_dir.glob('**/page.tsx'))

    print(f"Found {len(page_files)} page files")

    # Process each file
    pages = []
    for page_file in sorted(page_files):
        try:
            page_data = process_page_file(page_file)
            pages.append(page_data)
            print(f"✓ {page_data['url']} ({page_data['content_type']})")
        except Exception as e:
            print(f"✗ Error processing {page_file}: {e}")

    # Save to CSV
    output_dir = project_root / 'output'
    output_dir.mkdir(exist_ok=True)

    output_file = output_dir / 'content_export.csv'

    with open(output_file, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=[
            'url', 'title', 'content', 'meta_description', 'h1', 'content_type', 'target_keyword'
        ])
        writer.writeheader()
        writer.writerows(pages)

    print(f"\n✓ Exported {len(pages)} pages to {output_file}")

    # Print summary by content type
    print("\nContent Type Summary:")
    type_counts = {}
    for page in pages:
        ct = page['content_type']
        type_counts[ct] = type_counts.get(ct, 0) + 1

    for ct, count in sorted(type_counts.items()):
        print(f"  {ct}: {count} pages")


if __name__ == '__main__':
    main()
