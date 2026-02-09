# TextRazor Entity Schema Generation

This directory contains scripts for generating entity-enriched schema.org markup using the TextRazor API.

## Overview

TextRazor analyzes your page content and extracts:
- **Topics**: Main concepts discussed (with Wikidata IDs)
- **Entities**: Named entities like organizations, people, places
- **Wikipedia/Wikidata Links**: Authoritative knowledge graph connections

We use this data to create comprehensive schema.org markup that includes:
- `keywords`: Extracted from top topics
- `about`: Main entities the page is about (with Wikidata sameAs)
- `mentions`: Additional entities mentioned (with Wikidata sameAs)

## Scripts

### 1. `generate-entity-schema.js`
Analyzes a single page and generates entity data.

**Usage:**
```bash
node scripts/generate-entity-schema.js <page-path>
```

**Example:**
```bash
node scripts/generate-entity-schema.js src/app/industries/ecommerce/page.tsx
```

**Output:**
- Prints entity analysis to console
- Saves `textrazor-schema.json` in the same directory as the page

### 2. `apply-entity-schema.js`
Generates formatted schema properties to add to your page.

**Usage:**
```bash
node scripts/apply-entity-schema.js <schema-json> <page-path>
```

**Example:**
```bash
node scripts/apply-entity-schema.js src/app/industries/ecommerce/textrazor-schema.json src/app/industries/ecommerce/page.tsx
```

**Output:**
- Prints formatted schema properties ready to copy-paste

### 3. `batch-entity-schema.sh`
Processes multiple pages in batch.

**Usage:**
```bash
chmod +x scripts/batch-entity-schema.sh
./scripts/batch-entity-schema.sh
```

Edit the `pages` array in the script to customize which pages to process.

## Workflow

### For a Single Page

1. **Extract entities:**
   ```bash
   node scripts/generate-entity-schema.js src/app/industries/ecommerce/page.tsx
   ```

2. **Review the output:**
   - Check console for top entities/topics
   - Review `src/app/industries/ecommerce/textrazor-schema.json`

3. **Generate schema properties:**
   ```bash
   node scripts/apply-entity-schema.js \
     src/app/industries/ecommerce/textrazor-schema.json \
     src/app/industries/ecommerce/page.tsx
   ```

4. **Copy and apply:**
   - Copy the generated `keywords`, `about`, and `mentions` properties
   - Add them to your existing Service/Article schema in the page

### For Multiple Pages

1. **Edit batch script:**
   ```bash
   nano scripts/batch-entity-schema.sh
   ```
   Add your pages to the `pages` array.

2. **Run batch processing:**
   ```bash
   ./scripts/batch-entity-schema.sh
   ```

3. **Apply to each page individually:**
   For each generated schema file, run:
   ```bash
   node scripts/apply-entity-schema.js <schema.json> <page.tsx>
   ```

## Example Output

### Before (Basic Schema)
```typescript
<JsonLd
  data={{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-commerce SEO Services',
    description: '...',
    provider: { ... },
  }}
/>
```

### After (Entity-Enriched Schema)
```typescript
<JsonLd
  data={{
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'E-commerce SEO Services',
    description: '...',
    provider: { ... },
    keywords: 'Search engine optimization, E-commerce, Backlink, Product optimization',
    about: [
      {
        '@type': 'Thing',
        name: 'Search engine optimization',
        sameAs: 'https://www.wikidata.org/wiki/Q180711',
      },
      {
        '@type': 'Thing',
        name: 'E-commerce',
        sameAs: 'https://www.wikidata.org/wiki/Q484847',
      },
    ],
    mentions: [
      {
        '@type': 'Thing',
        name: 'Backlink',
        sameAs: 'https://www.wikidata.org/wiki/Q373952',
      },
    ],
  }}
/>
```

## Benefits

1. **Knowledge Graph Integration**: Connects your content to Wikidata/Wikipedia
2. **Better Understanding**: Helps search engines understand page topics
3. **Rich Snippets**: Increases chance of appearing in rich results
4. **Entity SEO**: Aligns with Google's shift to entity-based search
5. **Semantic Relevance**: Shows topical authority through entity connections

## API Configuration

The TextRazor API key is configured in `generate-entity-schema.js`:
```javascript
const TEXTRAZOR_API_KEY = 'd33b6d33b25bd29ff213e55836a07a52b8112a90fd8d3bc8fa6e94cd';
```

**API Limits:**
- Free tier: 500 requests/day
- Rate limit: Batch script includes 2-second delays

## Pages Processed

### Industry Pages
- ✅ E-commerce (`src/app/industries/ecommerce/page.tsx`)
- ⬜ AI & Machine Learning
- ⬜ SaaS
- ⬜ Healthcare
- ⬜ Finance
- ⬜ Real Estate
- ⬜ Technology
- ⬜ Legal
- ⬜ Automotive
- ⬜ Travel
- ⬜ Food & Beverage
- ⬜ Non-profit
- ⬜ Fashion
- ⬜ Education
- ⬜ Cannabis
- ⬜ Cybersecurity

### Blog Posts
- ✅ Dominate Search Rankings 2025
- ⬜ Core Web Vitals Optimization
- ⬜ Keyword Research Tools 2025
- ⬜ Local SEO Complete Guide
- ⬜ E-commerce SEO Strategy
- ⬜ Google Algorithm Updates 2024
- ⬜ Content Optimization Checklist
- ⬜ Technical SEO Audit

### Service Pages
- ⬜ AEO Services
- ⬜ SEO Services
- ⬜ Content Services
- ⬜ Web Services
- ⬜ SEO Consulting

## Troubleshooting

### No entities found, only topics
This is normal. TextRazor's entity extraction works best with longer, prose-heavy content. Topics with Wikidata IDs are equally valuable for schema enrichment.

### API rate limit errors
Add longer delays in the batch script (`sleep 5` instead of `sleep 2`).

### Text extraction issues
The script extracts text from TSX files by pattern matching. For pages with unusual structure, you may need to adjust the extraction patterns in `extractTextFromFile()`.

## Next Steps

1. Process remaining industry pages
2. Process all blog posts
3. Add entity schema to service pages
4. Create a monitoring system to track rich snippet performance
5. Periodically re-analyze pages as content is updated
