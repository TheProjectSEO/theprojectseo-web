#!/usr/bin/env node

/**
 * Apply Entity-Enriched Schema to Pages
 *
 * This script reads the TextRazor analysis and applies comprehensive
 * schema.org markup to the page based on extracted topics and entities.
 *
 * Usage:
 *   node scripts/apply-entity-schema.js <schema-json-path> <page-tsx-path>
 *
 * Example:
 *   node scripts/apply-entity-schema.js src/app/industries/ecommerce/textrazor-schema.json src/app/industries/ecommerce/page.tsx
 */

const fs = require('fs');
const path = require('path');

/**
 * Generate comprehensive schema markup from TextRazor data
 */
function generateEnhancedSchema(schemaData, pageInfo) {
  const { topics = [], entities = [] } = schemaData;

  // Use top topics as "about" entities
  const topTopics = topics.slice(0, 5);
  const aboutEntities = topTopics.map(topic => ({
    '@type': 'Thing',
    name: topic.label,
    sameAs: topic.wikidataId ? `https://www.wikidata.org/wiki/${topic.wikidataId}` : undefined,
  })).filter(entity => entity.sameAs); // Only include if we have a Wikidata link

  // Use next 10 topics as "mentions"
  const mentionTopics = topics.slice(5, 15);
  const mentionsEntities = mentionTopics.map(topic => ({
    '@type': 'Thing',
    name: topic.label,
    sameAs: topic.wikidataId ? `https://www.wikidata.org/wiki/${topic.wikidataId}` : undefined,
  })).filter(entity => entity.sameAs);

  // Generate keywords from all high-scoring topics
  const keywords = topics
    .filter(t => t.score >= 0.8)
    .slice(0, 20)
    .map(t => t.label)
    .join(', ');

  return {
    about: aboutEntities,
    mentions: mentionsEntities,
    keywords: keywords,
  };
}

/**
 * Format schema for insertion into TSX file
 */
function formatSchemaForTSX(schema, indent = '      ') {
  const lines = [];

  if (schema.keywords) {
    lines.push(`${indent}keywords: '${schema.keywords}',`);
  }

  if (schema.about && schema.about.length > 0) {
    lines.push(`${indent}about: [`);
    schema.about.forEach((entity, i) => {
      const comma = i < schema.about.length - 1 ? ',' : '';
      lines.push(`${indent}  {`);
      lines.push(`${indent}    '@type': 'Thing',`);
      lines.push(`${indent}    name: '${entity.name.replace(/'/g, "\\'")}',`);
      lines.push(`${indent}    sameAs: '${entity.sameAs}',`);
      lines.push(`${indent}  }${comma}`);
    });
    lines.push(`${indent}],`);
  }

  if (schema.mentions && schema.mentions.length > 0) {
    lines.push(`${indent}mentions: [`);
    schema.mentions.forEach((entity, i) => {
      const comma = i < schema.mentions.length - 1 ? ',' : '';
      lines.push(`${indent}  {`);
      lines.push(`${indent}    '@type': 'Thing',`);
      lines.push(`${indent}    name: '${entity.name.replace(/'/g, "\\'")}',`);
      lines.push(`${indent}    sameAs: '${entity.sameAs}',`);
      lines.push(`${indent}  }${comma}`);
    });
    lines.push(`${indent}],`);
  }

  return lines.join('\n');
}

/**
 * Main execution
 */
function main() {
  const schemaJsonPath = process.argv[2];
  const pageTsxPath = process.argv[3];

  if (!schemaJsonPath || !pageTsxPath) {
    console.error('Usage: node scripts/apply-entity-schema.js <schema-json-path> <page-tsx-path>');
    process.exit(1);
  }

  // Read the schema data
  const schemaData = JSON.parse(fs.readFileSync(schemaJsonPath, 'utf-8'));

  console.log('🎯 Generating enhanced schema...');
  const enhancedSchema = generateEnhancedSchema(schemaData);

  console.log('\n--- Enhanced Schema ---\n');
  console.log('Keywords:', enhancedSchema.keywords);
  console.log('\nAbout Entities:', enhancedSchema.about.length);
  enhancedSchema.about.forEach((entity, i) => {
    console.log(`  ${i + 1}. ${entity.name}`);
    console.log(`     ${entity.sameAs}`);
  });

  console.log('\nMentions Entities:', enhancedSchema.mentions.length);
  enhancedSchema.mentions.forEach((entity, i) => {
    console.log(`  ${i + 1}. ${entity.name}`);
    console.log(`     ${entity.sameAs}`);
  });

  console.log('\n--- Schema Properties to Add ---\n');
  const formatted = formatSchemaForTSX(enhancedSchema);
  console.log(formatted);

  console.log('\n💡 Instructions:');
  console.log('1. Copy the properties above');
  console.log('2. Add them to your Service or Article schema in:', path.basename(pageTsxPath));
  console.log('3. Place them inside the schema object (before the closing })');
  console.log('\nExample:');
  console.log('  <JsonLd');
  console.log('    data={{');
  console.log("      '@context': 'https://schema.org',");
  console.log("      '@type': 'Service',");
  console.log("      name: 'E-commerce SEO Services',");
  console.log("      // ... other properties ...");
  console.log('      // Add the generated properties here:');
  console.log('      keywords: \'...\',');
  console.log('      about: [...],');
  console.log('      mentions: [...],');
  console.log('    }}');
  console.log('  />');
}

main();
