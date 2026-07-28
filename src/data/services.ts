import type { Service } from './types';

// Canonical SEO-only service taxonomy.
//
// status: 'live'    = page.tsx already exists on main
// status: 'planned' = scheduled per plan
// status: 'draft'   = in progress
//
// NOTE: this file is the source of truth for service URLs once dynamic routes ship.
// Until then it runs alongside hand-written page.tsx files; the template refactor
// migrates each 'live' entry to a data-driven page.

export const services: Service[] = [
  // ============ PILLAR: SEO ============
  { slug: 'seo', pillar: 'seo', name: 'SEO Services', shortDescription: 'Full-stack SEO strategy, execution, and measurement.', status: 'live', launchPhase: 'M1' },
  { slug: 'seo-audit', pillar: 'seo', name: 'SEO Audit', shortDescription: 'Technical + content + link audit with prioritized fix list.', status: 'live', launchPhase: 'M1' },
  { slug: 'seo-consulting', pillar: 'seo', name: 'SEO Consulting', shortDescription: 'Strategic advisory for in-house teams and leadership.', status: 'live', launchPhase: 'M1' },
  { slug: 'on-page-seo', pillar: 'seo', name: 'On-Page SEO', shortDescription: 'Meta tags, internal linking, content structure.', status: 'live', launchPhase: 'M1' },
  { slug: 'off-page-seo', pillar: 'seo', name: 'Off-Page SEO', shortDescription: 'Authority building, digital PR, brand mentions.', status: 'live', launchPhase: 'M1' },
  { slug: 'local-seo', pillar: 'seo', name: 'Local SEO', shortDescription: 'GBP optimization, local citations, map pack rankings.', status: 'live', launchPhase: 'M1' },
  { slug: 'link-building', pillar: 'seo', name: 'Link Building', shortDescription: 'Quality backlink acquisition via digital PR and outreach.', status: 'live', launchPhase: 'M1' },
  { slug: 'ecommerce-seo', pillar: 'seo', name: 'Ecommerce SEO', shortDescription: 'Shopify, Magento, WooCommerce product and category SEO.', status: 'live', launchPhase: 'M1' },
  { slug: 'enterprise-seo', pillar: 'seo', name: 'Enterprise SEO', shortDescription: 'Large-scale SEO programs for complex organizations.', status: 'live', launchPhase: 'M1' },
  { slug: 'international-seo', pillar: 'seo', name: 'International SEO', shortDescription: 'Hreflang, multi-language, multi-region SEO.', status: 'live', launchPhase: 'M1' },
  { slug: 'keyword-research', pillar: 'seo', name: 'Keyword Research', shortDescription: 'Intent-driven keyword discovery and clustering.', status: 'planned', launchPhase: 'M1' },

  // ============ PILLAR: TECHNICAL SEO ============
  { slug: 'technical-seo', pillar: 'technical-seo', name: 'Technical SEO', shortDescription: 'Crawlability, indexability, speed, and architecture.', status: 'live', launchPhase: 'M1' },
  { slug: 'javascript-seo', pillar: 'technical-seo', name: 'JavaScript SEO', shortDescription: 'SSR, hydration, and client-rendered content for SEO.', status: 'planned', launchPhase: 'M1' },
  { slug: 'log-file-analysis', pillar: 'technical-seo', name: 'Log File Analysis', shortDescription: 'Googlebot crawl behavior analysis.', status: 'planned', launchPhase: 'M1' },
  { slug: 'crawl-budget-optimization', pillar: 'technical-seo', name: 'Crawl Budget Optimization', shortDescription: 'Stop wasting crawl on non-indexable URLs.', status: 'planned', launchPhase: 'M1' },
  { slug: 'core-web-vitals', pillar: 'technical-seo', name: 'Core Web Vitals Optimization', shortDescription: 'LCP, INP, CLS improvements.', status: 'planned', launchPhase: 'M1' },
  { slug: 'seo-migration', pillar: 'technical-seo', name: 'SEO Migration', shortDescription: 'Platform migrations without ranking loss.', status: 'planned', launchPhase: 'M1' },
  { slug: 'traffic-drop-recovery', pillar: 'technical-seo', name: 'Traffic Drop Recovery', shortDescription: 'Diagnose and recover from algorithmic or technical drops.', status: 'planned', launchPhase: 'M1' },
  { slug: 'penalty-recovery', pillar: 'technical-seo', name: 'Penalty Recovery', shortDescription: 'Google manual action and algorithmic penalty recovery.', status: 'planned', launchPhase: 'M1' },

  // ============ PILLAR: AI SEARCH ============
  { slug: 'aeo', pillar: 'ai-search', name: 'Answer Engine Optimization (AEO)', shortDescription: 'Optimize for ChatGPT, Perplexity, AI Overviews.', status: 'live', launchPhase: 'M2', legacyUrl: '/services/aeo' },
  { slug: 'geo', pillar: 'ai-search', name: 'Generative Engine Optimization (GEO)', shortDescription: 'Content structured for LLM citation.', status: 'planned', launchPhase: 'M2' },
  { slug: 'entity-seo', pillar: 'ai-search', name: 'Entity SEO', shortDescription: 'Knowledge Graph, co-citations, entity authority.', status: 'planned', launchPhase: 'M2' },
  { slug: 'llm-visibility-tracking', pillar: 'ai-search', name: 'LLM Visibility Tracking', shortDescription: 'Monitor brand mentions in ChatGPT, Perplexity, Gemini.', status: 'planned', launchPhase: 'M2' },
  { slug: 'chatgpt-seo', pillar: 'ai-search', name: 'ChatGPT SEO', shortDescription: 'Get cited in ChatGPT answers.', status: 'planned', launchPhase: 'M2' },
  { slug: 'perplexity-seo', pillar: 'ai-search', name: 'Perplexity SEO', shortDescription: 'Get cited in Perplexity answers.', status: 'planned', launchPhase: 'M2' },
  { slug: 'google-ai-overviews-optimization', pillar: 'ai-search', name: 'Google AI Overviews Optimization', shortDescription: 'Rank inside Google\'s AI Overviews.', status: 'planned', launchPhase: 'M2' },
  { slug: 'claude-seo', pillar: 'ai-search', name: 'Claude SEO', shortDescription: 'Optimize for Claude citations.', status: 'planned', launchPhase: 'M2' },
  { slug: 'gemini-seo', pillar: 'ai-search', name: 'Gemini SEO', shortDescription: 'Optimize for Gemini citations.', status: 'planned', launchPhase: 'M2' },

  // ============ PILLAR: SEO ANALYTICS ============
  { slug: 'seo-forecasting', pillar: 'analytics', name: 'SEO Forecasting', shortDescription: 'Traffic and revenue forecasts tied to business outcomes.', status: 'planned', launchPhase: 'M2' },
  { slug: 'seo-reporting', pillar: 'analytics', name: 'SEO Reporting', shortDescription: 'Board-ready reports and executive dashboards.', status: 'planned', launchPhase: 'M2' },
  { slug: 'seo-attribution', pillar: 'analytics', name: 'SEO Attribution', shortDescription: 'Connect organic traffic to revenue.', status: 'planned', launchPhase: 'M2' },
  { slug: 'gsc-bigquery-setup', pillar: 'analytics', name: 'GSC + BigQuery Setup', shortDescription: 'Search Console warehousing for historical analysis.', status: 'planned', launchPhase: 'M2' },
  { slug: 'automated-technical-reporting', pillar: 'analytics', name: 'Automated Technical SEO Reporting', shortDescription: 'Weekly auto-generated tech SEO reports.', status: 'planned', launchPhase: 'M2' },

  // ============ PILLAR: CONTENT ============
  { slug: 'content', pillar: 'content', name: 'SEO Content', shortDescription: 'Strategy, production, and optimization.', status: 'live', launchPhase: 'M3' },
  { slug: 'programmatic-seo', pillar: 'content', name: 'Programmatic SEO', shortDescription: 'Templated, data-driven pages at scale.', status: 'planned', launchPhase: 'M3' },
  { slug: 'content-audit', pillar: 'content', name: 'Content Audit', shortDescription: 'Comprehensive content performance review.', status: 'planned', launchPhase: 'M3' },
  { slug: 'content-pruning', pillar: 'content', name: 'Content Pruning', shortDescription: 'Deindex low-value pages to lift site-wide quality.', status: 'planned', launchPhase: 'M3' },
  { slug: 'content-refresh', pillar: 'content', name: 'Content Refresh', shortDescription: 'Update outdated content for ranking gains.', status: 'planned', launchPhase: 'M3' },
  { slug: 'topic-cluster-strategy', pillar: 'content', name: 'Topic Cluster Strategy', shortDescription: 'Hub-and-spoke content architecture.', status: 'planned', launchPhase: 'M3' },
  { slug: 'pillar-page-development', pillar: 'content', name: 'Pillar Page Development', shortDescription: 'Long-form authoritative resources.', status: 'planned', launchPhase: 'M3' },
  { slug: 'content-operations', pillar: 'content', name: 'Content Operations', shortDescription: 'Editorial workflows, QA, publishing ops.', status: 'planned', launchPhase: 'M3' },

  // ============ PILLAR: SERP FEATURES ============
  { slug: 'featured-snippet-optimization', pillar: 'serp-features', name: 'Featured Snippet Optimization', shortDescription: 'Win position zero.', status: 'planned', launchPhase: 'M3' },
  { slug: 'people-also-ask-optimization', pillar: 'serp-features', name: 'People Also Ask Optimization', shortDescription: 'Capture PAA boxes.', status: 'planned', launchPhase: 'M3' },
  { slug: 'schema-markup', pillar: 'serp-features', name: 'Schema Markup', shortDescription: 'JSON-LD structured data for rich results.', status: 'planned', launchPhase: 'M3' },
  { slug: 'faq-optimization', pillar: 'serp-features', name: 'FAQ Optimization', shortDescription: 'FAQPage schema and content for SERP features.', status: 'planned', launchPhase: 'M3' },
  { slug: 'rich-results', pillar: 'serp-features', name: 'Rich Results Optimization', shortDescription: 'Carousels, How-to, Review snippets.', status: 'planned', launchPhase: 'M3' },

  // ============ PILLAR: VISUAL MEDIA SEO ============
  { slug: 'video-seo', pillar: 'visual-media-seo', name: 'Video SEO', shortDescription: 'Rank videos in Google and on-site.', status: 'planned', launchPhase: 'M3' },
  { slug: 'youtube-seo', pillar: 'visual-media-seo', name: 'YouTube SEO', shortDescription: 'YouTube search and suggested ranking.', status: 'planned', launchPhase: 'M3' },
  { slug: 'image-seo', pillar: 'visual-media-seo', name: 'Image SEO', shortDescription: 'Google Images and Lens optimization.', status: 'planned', launchPhase: 'M3' },

  // ============ PILLAR: DIGITAL PR ============
  { slug: 'digital-pr', pillar: 'digital-pr', name: 'Digital PR', shortDescription: 'Media coverage + backlinks from tier-1 publications.', status: 'planned', launchPhase: 'M3' },
  { slug: 'unlinked-brand-mentions', pillar: 'digital-pr', name: 'Unlinked Brand Mentions', shortDescription: 'Convert mentions to backlinks.', status: 'planned', launchPhase: 'M3' },
  { slug: 'brand-co-citation-building', pillar: 'digital-pr', name: 'Co-Citation Building', shortDescription: 'Strategic brand associations for entity authority.', status: 'planned', launchPhase: 'M3' },
  { slug: 'e-e-a-t-audit', pillar: 'digital-pr', name: 'E-E-A-T Audit', shortDescription: 'Experience, Expertise, Authoritativeness, Trust review.', status: 'planned', launchPhase: 'M3' },
  { slug: 'pr-link-building', pillar: 'digital-pr', name: 'PR-Driven Link Building', shortDescription: 'Editorial links from journalism.', status: 'planned', launchPhase: 'M3' },

  // ============ PILLAR: SEO EXPERIMENTATION ============
  { slug: 'seo-split-testing', pillar: 'cro', name: 'SEO Split Testing', shortDescription: 'Template-level experiments on organic traffic.', status: 'planned', launchPhase: 'M4' },

  // ============ PILLAR: LOCAL AT SCALE ============
  { slug: 'gbp-management', pillar: 'local-at-scale', name: 'GBP Management', shortDescription: 'Google Business Profile optimization.', status: 'planned', launchPhase: 'M5' },
  { slug: 'multi-location-gbp', pillar: 'local-at-scale', name: 'Multi-Location GBP', shortDescription: 'Hundreds of locations managed centrally.', status: 'planned', launchPhase: 'M5' },
  { slug: 'local-citations', pillar: 'local-at-scale', name: 'Local Citations Management', shortDescription: 'NAP consistency across directories.', status: 'planned', launchPhase: 'M5' },
  { slug: 'reputation-management', pillar: 'local-at-scale', name: 'Reputation Management', shortDescription: 'Review generation and response at scale.', status: 'planned', launchPhase: 'M5' },

  // ============ PILLAR: SEO AUTOMATION ============
  { slug: 'seo-automation', pillar: 'automation', name: 'SEO Automation', shortDescription: 'Agentic systems for SEO workflows.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/seo-automation' },

  // ============ PILLAR: AI SEO AGENTS ============
  { slug: 'ai-seo-agent', pillar: 'ai-agents', name: 'AI SEO Agent', shortDescription: 'Autonomous SEO operator powered by Claude.', status: 'live', launchPhase: 'M2' },

  // ============ PILLAR: AGENTIC SEO SYSTEMS ============
  { slug: 'agentic-seo-systems', pillar: 'claude', name: 'Agentic SEO Systems', shortDescription: 'Productized Claude-powered SEO operating systems.', status: 'planned', launchPhase: 'M3' },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillar: Service['pillar']): Service[] {
  return services.filter((s) => s.pillar === pillar);
}
