import type { Service } from './types';

// Canonical service taxonomy. 15 pillars, ~110 sub-pages.
// See IA plan: ~/.claude/plans/do-a-comprehensive-research-expressive-pebble.md
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

  // ============ PILLAR: PAID MEDIA ============
  { slug: 'google-ads', pillar: 'paid-media', name: 'Google Ads Management', shortDescription: 'Search, Display, Performance Max campaigns.', status: 'planned', launchPhase: 'M2' },
  { slug: 'linkedin-ads', pillar: 'paid-media', name: 'LinkedIn Ads', shortDescription: 'B2B account-based campaigns on LinkedIn.', status: 'planned', launchPhase: 'M2' },
  { slug: 'meta-ads', pillar: 'paid-media', name: 'Meta Ads (Facebook + Instagram)', shortDescription: 'Full-funnel Meta campaigns.', status: 'planned', launchPhase: 'M2' },
  { slug: 'youtube-ads', pillar: 'paid-media', name: 'YouTube Ads', shortDescription: 'In-stream and discovery ad campaigns.', status: 'planned', launchPhase: 'M2' },
  { slug: 'bing-ads', pillar: 'paid-media', name: 'Microsoft Ads (Bing)', shortDescription: 'Bing/Microsoft Advertising management.', status: 'planned', launchPhase: 'M2' },
  { slug: 'google-local-services-ads', pillar: 'paid-media', name: 'Google Local Services Ads', shortDescription: 'LSA setup and optimization for local businesses.', status: 'planned', launchPhase: 'M2' },
  { slug: 'paid-search-seo-integration', pillar: 'paid-media', name: 'Paid + Organic Integration', shortDescription: 'Combined PPC + SEO strategy for SERP dominance.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ppc-audit', pillar: 'paid-media', name: 'PPC Account Audit', shortDescription: 'Wasted spend and opportunity analysis.', status: 'planned', launchPhase: 'M2' },

  // ============ PILLAR: ANALYTICS ============
  { slug: 'seo-forecasting', pillar: 'analytics', name: 'SEO Forecasting', shortDescription: 'Traffic and revenue forecasts tied to business outcomes.', status: 'planned', launchPhase: 'M2' },
  { slug: 'seo-reporting', pillar: 'analytics', name: 'SEO Reporting', shortDescription: 'Board-ready reports and executive dashboards.', status: 'planned', launchPhase: 'M2' },
  { slug: 'seo-attribution', pillar: 'analytics', name: 'SEO Attribution', shortDescription: 'Connect organic traffic to revenue.', status: 'planned', launchPhase: 'M2' },
  { slug: 'gsc-bigquery-setup', pillar: 'analytics', name: 'GSC + BigQuery Setup', shortDescription: 'Search Console warehousing for historical analysis.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ga4-migration', pillar: 'analytics', name: 'GA4 Migration', shortDescription: 'Universal Analytics to GA4 migration.', status: 'planned', launchPhase: 'M2' },
  { slug: 'custom-dashboards', pillar: 'analytics', name: 'Custom Marketing Dashboards', shortDescription: 'Looker Studio, Power BI, custom dashboards.', status: 'live', launchPhase: 'M2', legacyUrl: '/services/data-visualization' },
  { slug: 'data-engineering', pillar: 'analytics', name: 'Data Engineering', shortDescription: 'Pipelines, warehousing, data models.', status: 'live', launchPhase: 'M2', legacyUrl: '/services/data-engineering' },
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

  // ============ PILLAR: REVOPS ============
  { slug: 'revops', pillar: 'revops', name: 'RevOps Consulting', shortDescription: 'Sales + marketing + CS ops alignment.', status: 'planned', launchPhase: 'M4' },
  { slug: 'hubspot-implementation', pillar: 'revops', name: 'HubSpot Implementation', shortDescription: 'Full HubSpot setup + integrations.', status: 'planned', launchPhase: 'M4' },
  { slug: 'salesforce-setup', pillar: 'revops', name: 'Salesforce Setup', shortDescription: 'Salesforce implementation for B2B pipelines.', status: 'planned', launchPhase: 'M4' },
  { slug: 'crm-setup', pillar: 'revops', name: 'CRM Setup', shortDescription: 'CRM architecture, data model, adoption.', status: 'planned', launchPhase: 'M4' },
  { slug: 'martech-audit', pillar: 'revops', name: 'Martech Stack Audit', shortDescription: 'Tool consolidation and ROI review.', status: 'planned', launchPhase: 'M4' },
  { slug: 'marketing-automation', pillar: 'revops', name: 'Marketing Automation', shortDescription: 'Lifecycle campaigns, lead scoring, nurture.', status: 'planned', launchPhase: 'M4' },

  // ============ PILLAR: ABM ============
  { slug: 'abm', pillar: 'abm', name: 'Account-Based Marketing', shortDescription: 'Target-account-centric B2B campaigns.', status: 'planned', launchPhase: 'M4' },
  { slug: 'abm-list-building', pillar: 'abm', name: 'ABM List Building', shortDescription: 'Target-account research and scoring.', status: 'planned', launchPhase: 'M4' },
  { slug: 'one-to-one-abm', pillar: 'abm', name: '1:1 ABM Campaigns', shortDescription: 'Hyper-personalized strategic account programs.', status: 'planned', launchPhase: 'M4' },
  { slug: 'abm-content', pillar: 'abm', name: 'ABM Content', shortDescription: 'Account-specific content and personalization.', status: 'planned', launchPhase: 'M4' },

  // ============ PILLAR: CRO ============
  { slug: 'cro', pillar: 'cro', name: 'Conversion Rate Optimization', shortDescription: 'Data-driven conversion testing and lifts.', status: 'planned', launchPhase: 'M4' },
  { slug: 'landing-page-design', pillar: 'cro', name: 'Landing Page Design', shortDescription: 'High-converting landing pages for paid + organic.', status: 'planned', launchPhase: 'M4' },
  { slug: 'ab-testing', pillar: 'cro', name: 'A/B Testing', shortDescription: 'Experimentation programs that move metrics.', status: 'planned', launchPhase: 'M4' },
  { slug: 'seo-split-testing', pillar: 'cro', name: 'SEO Split Testing', shortDescription: 'Template-level experiments on organic traffic.', status: 'planned', launchPhase: 'M4' },

  // ============ PILLAR: LOCAL AT SCALE ============
  { slug: 'gbp-management', pillar: 'local-at-scale', name: 'GBP Management', shortDescription: 'Google Business Profile optimization.', status: 'planned', launchPhase: 'M5' },
  { slug: 'multi-location-gbp', pillar: 'local-at-scale', name: 'Multi-Location GBP', shortDescription: 'Hundreds of locations managed centrally.', status: 'planned', launchPhase: 'M5' },
  { slug: 'local-citations', pillar: 'local-at-scale', name: 'Local Citations Management', shortDescription: 'NAP consistency across directories.', status: 'planned', launchPhase: 'M5' },
  { slug: 'reputation-management', pillar: 'local-at-scale', name: 'Reputation Management', shortDescription: 'Review generation and response at scale.', status: 'planned', launchPhase: 'M5' },

  // ============ PILLAR: AUTOMATION ============
  { slug: 'seo-automation', pillar: 'automation', name: 'SEO Automation', shortDescription: 'Agentic systems for SEO workflows.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/seo-automation' },
  { slug: 'n8n-automation', pillar: 'automation', name: 'n8n Automation Services', shortDescription: 'Self-hosted workflow automations.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/n8n-automation' },
  { slug: 'n8n-marketing-automation', pillar: 'automation', name: 'Marketing Automation (n8n)', shortDescription: 'Lifecycle campaigns via n8n.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/n8n-automation/marketing-automation' },
  { slug: 'n8n-sales-automation', pillar: 'automation', name: 'Sales Automation (n8n)', shortDescription: 'Lead routing, enrichment, follow-ups.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/n8n-automation/sales-automation' },
  { slug: 'n8n-crm-automation', pillar: 'automation', name: 'CRM Automation (n8n)', shortDescription: 'Two-way sync + enrichment.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/n8n-automation/crm-automation' },
  { slug: 'n8n-reporting-automation', pillar: 'automation', name: 'Reporting Automation (n8n)', shortDescription: 'Auto-generated reports.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/n8n-automation/reporting-automation' },
  { slug: 'n8n-data-pipeline-automation', pillar: 'automation', name: 'Data Pipeline Automation (n8n)', shortDescription: 'ETL + data sync pipelines.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/n8n-automation/data-pipeline-automation' },
  { slug: 'n8n-customer-service-automation', pillar: 'automation', name: 'Customer Service Automation (n8n)', shortDescription: 'Support tickets, FAQ, escalations.', status: 'live', launchPhase: 'M1', legacyUrl: '/services/n8n-automation/customer-service-automation' },
  { slug: 'workflow-subscription', pillar: 'automation', name: 'Workflow Subscription', shortDescription: 'Monthly retainer — bring us any automation idea.', status: 'planned', launchPhase: 'M2' },
  { slug: 'agency-workflow-whitelabel', pillar: 'automation', name: 'Agency Workflow Whitelabel', shortDescription: 'Our workflow stack, whitelabeled for other agencies.', status: 'planned', launchPhase: 'M5' },
  { slug: 'workflow-library', pillar: 'automation', name: 'Free Workflow Library', shortDescription: 'Open-source n8n + Claude blueprints.', status: 'planned', launchPhase: 'M5' },

  // ============ PILLAR: DEVELOPMENT ============
  { slug: 'web-app-development', pillar: 'development', name: 'Web App Development', shortDescription: 'Custom web applications.', status: 'live', launchPhase: 'M1' },
  { slug: 'ecommerce-development', pillar: 'development', name: 'Ecommerce Development', shortDescription: 'Shopify, custom commerce builds.', status: 'live', launchPhase: 'M1' },
  { slug: 'mvp-development', pillar: 'development', name: 'MVP Development', shortDescription: 'Startup MVPs in weeks, not months.', status: 'live', launchPhase: 'M1' },
  { slug: 'ai-development', pillar: 'development', name: 'AI Development', shortDescription: 'Custom AI features and integrations.', status: 'live', launchPhase: 'M1' },

  // ============ PILLAR: AI AGENTS ============
  { slug: 'ai-seo-agent', pillar: 'ai-agents', name: 'AI SEO Agent', shortDescription: 'Autonomous SEO operator powered by Claude.', status: 'live', launchPhase: 'M2' },
  { slug: 'ai-ppc-agent', pillar: 'ai-agents', name: 'AI PPC Agent', shortDescription: 'Automated bid + keyword + ad-copy optimization.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ai-content-agent', pillar: 'ai-agents', name: 'AI Content Agent', shortDescription: 'Brief-to-publish content production.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ai-revops-agent', pillar: 'ai-agents', name: 'AI RevOps Agent', shortDescription: 'Deal-stage analysis, pipeline hygiene.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ai-analytics-agent', pillar: 'ai-agents', name: 'AI Analytics Agent', shortDescription: 'Natural-language analytics on GA4 + BigQuery.', status: 'planned', launchPhase: 'M2' },
  { slug: 'ai-reporting-agent', pillar: 'ai-agents', name: 'AI Reporting Agent', shortDescription: 'Auto-generated weekly client reports.', status: 'planned', launchPhase: 'M2' },

  // ============ PILLAR: CLAUDE / ANTHROPIC (white-space positioning) ============
  { slug: 'claude-agency', pillar: 'claude', name: 'Claude Agency', shortDescription: 'Your partner for Claude Code and Anthropic-powered systems.', status: 'planned', launchPhase: 'M2' },
  { slug: 'claude-code-consulting', pillar: 'claude', name: 'Claude Code Consulting', shortDescription: 'Adopt Claude Code CLI across your engineering team.', status: 'planned', launchPhase: 'M2' },
  { slug: 'claude-agent-sdk-development', pillar: 'claude', name: 'Claude Agent SDK Development', shortDescription: 'Production agents built on the Agent SDK.', status: 'planned', launchPhase: 'M2' },
  { slug: 'claude-skills-development', pillar: 'claude', name: 'Claude Skills Development', shortDescription: 'Custom Skills for your team\'s workflows.', status: 'planned', launchPhase: 'M2' },
  { slug: 'mcp-server-development', pillar: 'claude', name: 'MCP Server Development', shortDescription: 'Custom Model Context Protocol servers.', status: 'planned', launchPhase: 'M2' },
  { slug: 'claude-hooks-development', pillar: 'claude', name: 'Claude Code Hooks Development', shortDescription: 'Pre/post-tool-use automation hooks.', status: 'planned', launchPhase: 'M3' },
  { slug: 'claude-plugin-development', pillar: 'claude', name: 'Claude Code Plugin Development', shortDescription: 'Plugins that extend Claude Code.', status: 'planned', launchPhase: 'M3' },
  { slug: 'anthropic-api-consulting', pillar: 'claude', name: 'Anthropic API Consulting', shortDescription: 'API integration, prompt caching, tool use, batch.', status: 'planned', launchPhase: 'M3' },
  { slug: 'claude-prompt-engineering', pillar: 'claude', name: 'Claude Prompt Engineering', shortDescription: 'Production-grade prompt design and evals.', status: 'planned', launchPhase: 'M3' },
  { slug: 'claude-workflows', pillar: 'claude', name: 'Claude Workflows', shortDescription: 'Productized agentic workflows.', status: 'planned', launchPhase: 'M3' },
  { slug: 'anthropic-model-migration', pillar: 'claude', name: 'Anthropic Model Migration', shortDescription: 'Claude 3.5 to 4.x migration service.', status: 'planned', launchPhase: 'M3' },
  { slug: 'claude-rag-systems', pillar: 'claude', name: 'Claude RAG Systems', shortDescription: 'RAG pipelines on the Anthropic stack.', status: 'planned', launchPhase: 'M3' },
  { slug: 'claude-code-training', pillar: 'claude', name: 'Claude Code Training', shortDescription: 'Team enablement + onboarding programs.', status: 'planned', launchPhase: 'M3' },
  { slug: 'agentic-seo-systems', pillar: 'claude', name: 'Agentic SEO Systems', shortDescription: 'Productized Claude-powered SEO operating systems.', status: 'planned', launchPhase: 'M3' },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getServicesByPillar(pillar: Service['pillar']): Service[] {
  return services.filter((s) => s.pillar === pillar);
}
