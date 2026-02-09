#!/usr/bin/env node

/**
 * TextRazor Entity Extraction & Schema Generation
 *
 * This script uses TextRazor API to extract entities, topics, and Wikipedia/Wikidata
 * links from page content and generates comprehensive schema.org markup.
 *
 * Usage:
 *   node scripts/generate-entity-schema.js <file-path>
 *
 * Example:
 *   node scripts/generate-entity-schema.js src/app/industries/ecommerce/page.tsx
 */

const fs = require('fs');
const path = require('path');

const TEXTRAZOR_API_KEY = 'd33b6d33b25bd29ff213e55836a07a52b8112a90fd8d3bc8fa6e94cd';
const TEXTRAZOR_API_URL = 'https://api.textrazor.com/';

/**
 * Extract text content from a React/TSX file
 */
function extractTextFromFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');

  // Extract text from JSX strings, descriptions, metadata, etc.
  const textPatterns = [
    // Metadata descriptions
    /description:\s*['"`]([^'"`]+)['"`]/g,
    // JSX text content (simple extraction)
    />([^<>{}\n]+)</g,
    // String literals in objects
    /:\s*['"`]([^'"`]{20,}?)['"`]/g,
  ];

  const extractedTexts = new Set();

  textPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const text = match[1]?.trim();
      if (text && text.length > 20 && !text.includes('className') && !text.includes('import')) {
        extractedTexts.add(text);
      }
    }
  });

  return Array.from(extractedTexts).join('\n\n');
}

/**
 * Call TextRazor API to extract entities
 */
async function analyzeWithTextRazor(text) {
  const response = await fetch(TEXTRAZOR_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'x-textrazor-key': TEXTRAZOR_API_KEY,
    },
    body: new URLSearchParams({
      text: text,
      extractors: 'entities,topics,words,phrases',
      'entities.filterDbpediaTypes': 'true',
      'entities.enrichmentQueries': 'dbpedia,wikidata',
    }),
  });

  if (!response.ok) {
    throw new Error(`TextRazor API error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
}

/**
 * Generate comprehensive schema.org markup from TextRazor entities
 */
function generateSchemaMarkup(textRazorResponse, pageInfo) {
  const { entities = [], topics = [] } = textRazorResponse.response;

  // Extract high-confidence entities with Wikipedia/Wikidata links
  const topEntities = entities
    .filter(e => e.confidenceScore > 0.5 && e.wikidataId)
    .sort((a, b) => b.relevanceScore - a.relevanceScore)
    .slice(0, 10);

  // Extract topics
  const topTopics = topics
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  // Generate "about" properties for main entities
  const aboutEntities = topEntities.slice(0, 3).map(entity => ({
    '@type': 'Thing',
    name: entity.entityId,
    sameAs: [
      entity.wikidataId ? `https://www.wikidata.org/wiki/${entity.wikidataId}` : null,
      entity.wikipediaLink || null,
    ].filter(Boolean),
  }));

  // Generate "mentions" for all entities
  const mentionedEntities = topEntities.map(entity => ({
    '@type': 'Thing',
    name: entity.entityId,
    sameAs: [
      entity.wikidataId ? `https://www.wikidata.org/wiki/${entity.wikidataId}` : null,
      entity.wikipediaLink || null,
    ].filter(Boolean),
  }));

  // Extract keywords from topics and entities
  const keywords = [
    ...topTopics.map(t => t.label),
    ...topEntities.slice(0, 5).map(e => e.entityId),
  ].join(', ');

  return {
    about: aboutEntities,
    mentions: mentionedEntities,
    keywords: keywords,
    entities: topEntities.map(e => ({
      name: e.entityId,
      type: e.type,
      wikidataId: e.wikidataId,
      wikipediaLink: e.wikipediaLink,
      relevanceScore: e.relevanceScore,
      confidenceScore: e.confidenceScore,
    })),
    topics: topTopics.map(t => ({
      label: t.label,
      score: t.score,
      wikidataId: t.wikidataId,
    })),
  };
}

/**
 * Main execution
 */
async function main() {
  const filePath = process.argv[2];

  if (!filePath) {
    console.error('Usage: node scripts/generate-entity-schema.js <file-path>');
    process.exit(1);
  }

  const fullPath = path.resolve(filePath);

  if (!fs.existsSync(fullPath)) {
    console.error(`File not found: ${fullPath}`);
    process.exit(1);
  }

  console.log('📄 Extracting text from:', filePath);
  const text = extractTextFromFile(fullPath);

  if (text.length < 100) {
    console.error('Not enough text content extracted from file');
    process.exit(1);
  }

  console.log(`📝 Extracted ${text.length} characters of text`);
  console.log('\n--- Text Preview ---');
  console.log(text.substring(0, 300) + '...\n');

  console.log('🔍 Analyzing with TextRazor...');
  const result = await analyzeWithTextRazor(text);

  console.log('✅ Analysis complete!');
  console.log(`   - Entities found: ${result.response.entities?.length || 0}`);
  console.log(`   - Topics found: ${result.response.topics?.length || 0}`);

  console.log('\n🎯 Generating schema markup...');
  const schema = generateSchemaMarkup(result);

  console.log('\n--- Generated Schema Properties ---\n');
  console.log('Keywords:', schema.keywords);
  console.log('\nAbout Entities:');
  schema.about.forEach((entity, i) => {
    console.log(`  ${i + 1}. ${entity.name}`);
    entity.sameAs.forEach(link => console.log(`     → ${link}`));
  });

  console.log('\nTop Entities:');
  schema.entities.slice(0, 10).forEach((entity, i) => {
    console.log(`  ${i + 1}. ${entity.name} (relevance: ${entity.relevanceScore.toFixed(2)}, confidence: ${entity.confidenceScore.toFixed(2)})`);
    if (entity.wikidataId) console.log(`     Wikidata: https://www.wikidata.org/wiki/${entity.wikidataId}`);
    if (entity.wikipediaLink) console.log(`     Wikipedia: ${entity.wikipediaLink}`);
  });

  console.log('\nTop Topics:');
  schema.topics.forEach((topic, i) => {
    console.log(`  ${i + 1}. ${topic.label} (score: ${topic.score.toFixed(2)})`);
  });

  // Save full output to JSON file
  const outputPath = path.join(
    path.dirname(fullPath),
    'textrazor-schema.json'
  );

  fs.writeFileSync(
    outputPath,
    JSON.stringify(
      {
        ...schema,
        fullResponse: result.response,
      },
      null,
      2
    )
  );

  console.log(`\n💾 Full schema data saved to: ${outputPath}`);

  // Print schema.org JSON-LD snippet
  console.log('\n--- Schema.org JSON-LD Snippet ---\n');
  console.log(JSON.stringify({
    '@context': 'https://schema.org',
    about: schema.about,
    mentions: schema.mentions,
    keywords: schema.keywords,
  }, null, 2));
}

main().catch(error => {
  console.error('Error:', error.message);
  process.exit(1);
});
