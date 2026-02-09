#!/bin/bash

# Batch Entity Schema Generation
# Processes multiple pages and generates entity-enriched schema using TextRazor

set -e

echo "🚀 Batch Entity Schema Generation with TextRazor"
echo "================================================"
echo ""

# Array of pages to process
pages=(
  # Industry pages (15 remaining)
  "src/app/industries/ai/page.tsx"
  "src/app/industries/automotive/page.tsx"
  "src/app/industries/cannabis/page.tsx"
  "src/app/industries/cybersecurity/page.tsx"
  "src/app/industries/education/page.tsx"
  "src/app/industries/fashion/page.tsx"
  "src/app/industries/finance/page.tsx"
  "src/app/industries/food/page.tsx"
  "src/app/industries/healthcare/page.tsx"
  "src/app/industries/legal/page.tsx"
  "src/app/industries/nonprofit/page.tsx"
  "src/app/industries/realestate/page.tsx"
  "src/app/industries/saas/page.tsx"
  "src/app/industries/technology/page.tsx"
  "src/app/industries/travel/page.tsx"

  # Blog posts (7 remaining)
  "src/app/blog/content-optimization-checklist/page.tsx"
  "src/app/blog/core-web-vitals-optimization/page.tsx"
  "src/app/blog/e-commerce-seo-strategy/page.tsx"
  "src/app/blog/google-algorithm-updates-2024/page.tsx"
  "src/app/blog/keyword-research-tools-2025/page.tsx"
  "src/app/blog/local-seo-complete-guide/page.tsx"
  "src/app/blog/technical-seo-audit/page.tsx"

  # Service pages (6 pages)
  "src/app/services/aeo/page.tsx"
  "src/app/services/seo/page.tsx"
  "src/app/services/content/page.tsx"
  "src/app/services/web/page.tsx"
  "src/app/services/seo-consulting/page.tsx"
  "src/app/services/page.tsx"

  # Country SEO pages (3 pages)
  "src/app/usa-seo-services/page.tsx"
  "src/app/philippines-seo-services/page.tsx"
  "src/app/india-seo-services/page.tsx"
)

total=${#pages[@]}
current=0

for page in "${pages[@]}"; do
  current=$((current + 1))
  echo "[$current/$total] Processing: $page"

  # Check if file exists
  if [ ! -f "$page" ]; then
    echo "  ⚠️  File not found, skipping..."
    echo ""
    continue
  fi

  # Generate entity schema
  echo "  🔍 Extracting entities..."
  node scripts/generate-entity-schema.js "$page" 2>&1 | grep -E "(Entities found|Topics found|Analyzing|complete)"

  # Get the directory of the page
  page_dir=$(dirname "$page")
  schema_file="$page_dir/textrazor-schema.json"

  if [ -f "$schema_file" ]; then
    echo "  ✅ Schema generated: $schema_file"
  else
    echo "  ❌ Schema generation failed"
  fi

  echo ""

  # Add a small delay to respect API rate limits
  sleep 2
done

echo "================================================"
echo "✨ Batch processing complete!"
echo ""
echo "Next steps:"
echo "1. Review the generated **/textrazor-schema.json files"
echo "2. Use apply-entity-schema.js to apply the schema to each page"
echo "3. Example: node scripts/apply-entity-schema.js <schema.json> <page.tsx>"
