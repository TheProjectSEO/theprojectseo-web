#!/usr/bin/env node

/**
 * Automatically Apply All Generated Schemas
 *
 * This script finds all textrazor-schema.json files and applies the
 * entity-enriched schema to the corresponding page.tsx files.
 *
 * Usage:
 *   node scripts/auto-apply-all-schemas.js [--dry-run]
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const DRY_RUN = process.argv.includes('--dry-run');

/**
 * Find all textrazor-schema.json files
 */
function findSchemaFiles(dir, files = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Skip node_modules, .next, etc.
      if (!entry.name.startsWith('.') && entry.name !== 'node_modules' && entry.name !== 'scripts') {
        findSchemaFiles(fullPath, files);
      }
    } else if (entry.name === 'textrazor-schema.json') {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Read schema and extract entities
 */
function extractSchemaProperties(schemaPath) {
  const schemaData = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
  const { topics = [] } = schemaData;

  // Top 5 topics as "about"
  const aboutTopics = topics.slice(0, 5);
  const about = aboutTopics
    .filter(t => t.wikidataId)
    .map(t => ({
      '@type': 'Thing',
      name: t.label,
      sameAs: `https://www.wikidata.org/wiki/${t.wikidataId}`,
    }));

  // Next 10 as "mentions"
  const mentionTopics = topics.slice(5, 15);
  const mentions = mentionTopics
    .filter(t => t.wikidataId)
    .map(t => ({
      '@type': 'Thing',
      name: t.label,
      sameAs: `https://www.wikidata.org/wiki/${t.wikidataId}`,
    }));

  // Top 20 high-scoring topics as keywords
  const keywords = topics
    .filter(t => t.score >= 0.8)
    .slice(0, 20)
    .map(t => t.label)
    .join(', ');

  return { about, mentions, keywords };
}

/**
 * Check if page already has entity schema
 */
function hasEntitySchema(pageContent) {
  return pageContent.includes('about:') || pageContent.includes('mentions:');
}

/**
 * Insert schema into page
 */
function insertSchemaIntoPage(pagePath, schema) {
  let content = fs.readFileSync(pagePath, 'utf-8');

  // Check if already has entity schema
  if (hasEntitySchema(content)) {
    console.log('    ⚠️  Page already has entity schema, skipping...');
    return false;
  }

  // Find the Service or Article schema
  const serviceSchemaMatch = content.match(/(data=\{\{[\s\S]*?serviceType:.*?,)\s*\}\}/);
  const articleSchemaMatch = content.match(/(data=\{\{[\s\S]*?dateModified:.*?,)\s*\}\}/);

  let match = serviceSchemaMatch || articleSchemaMatch;

  if (!match) {
    console.log('    ⚠️  Could not find Service or Article schema, skipping...');
    return false;
  }

  // Build the schema properties to insert
  const schemaProps = [];

  if (schema.keywords) {
    schemaProps.push(`          keywords: '${schema.keywords.replace(/'/g, "\\'")}',`);
  }

  if (schema.about && schema.about.length > 0) {
    schemaProps.push(`          about: [`);
    schema.about.forEach((entity, i) => {
      const comma = i < schema.about.length - 1 ? ',' : '';
      schemaProps.push(`            {`);
      schemaProps.push(`              '@type': 'Thing',`);
      schemaProps.push(`              name: '${entity.name.replace(/'/g, "\\'")}',`);
      schemaProps.push(`              sameAs: '${entity.sameAs}',`);
      schemaProps.push(`            }${comma}`);
    });
    schemaProps.push(`          ],`);
  }

  if (schema.mentions && schema.mentions.length > 0) {
    schemaProps.push(`          mentions: [`);
    schema.mentions.forEach((entity, i) => {
      const comma = i < schema.mentions.length - 1 ? ',' : '';
      schemaProps.push(`            {`);
      schemaProps.push(`              '@type': 'Thing',`);
      schemaProps.push(`              name: '${entity.name.replace(/'/g, "\\'")}',`);
      schemaProps.push(`              sameAs: '${entity.sameAs}',`);
      schemaProps.push(`            }${comma}`);
    });
    schemaProps.push(`          ],`);
  }

  // Insert the properties before the closing }}
  const replacement = match[1] + '\n' + schemaProps.join('\n') + '\n        }}';
  content = content.replace(match[0], replacement);

  if (!DRY_RUN) {
    fs.writeFileSync(pagePath, content);
  }

  return true;
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Finding all textrazor-schema.json files...\n');

  const schemaFiles = findSchemaFiles('src/app');

  console.log(`Found ${schemaFiles.length} schema files\n`);

  if (DRY_RUN) {
    console.log('🔍 DRY RUN MODE - No files will be modified\n');
  }

  let applied = 0;
  let skipped = 0;
  let errors = 0;

  for (const schemaPath of schemaFiles) {
    const dir = path.dirname(schemaPath);
    const pagePath = path.join(dir, 'page.tsx');

    console.log(`📄 Processing: ${pagePath}`);

    if (!fs.existsSync(pagePath)) {
      console.log('    ⚠️  page.tsx not found, skipping...\n');
      skipped++;
      continue;
    }

    try {
      const schema = extractSchemaProperties(schemaPath);

      console.log(`    📊 Keywords: ${schema.keywords.substring(0, 60)}...`);
      console.log(`    📌 About: ${schema.about.length} entities`);
      console.log(`    💬 Mentions: ${schema.mentions.length} entities`);

      const success = insertSchemaIntoPage(pagePath, schema);

      if (success) {
        console.log('    ✅ Schema applied successfully\n');
        applied++;
      } else {
        console.log('    ⏭️  Skipped\n');
        skipped++;
      }
    } catch (error) {
      console.log(`    ❌ Error: ${error.message}\n`);
      errors++;
    }
  }

  console.log('================================================');
  console.log('📊 Summary:');
  console.log(`   ✅ Applied: ${applied}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Errors: ${errors}`);
  console.log(`   📁 Total: ${schemaFiles.length}`);

  if (DRY_RUN) {
    console.log('\n💡 Run without --dry-run to apply changes');
  }
}

main();
