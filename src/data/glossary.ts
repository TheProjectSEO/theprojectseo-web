import type { PageStatus, LaunchPhase } from './types';

// SEO + AI search glossary. 30 launch terms, expand to 50 by M3.
// Each renders at /resources/glossary/[slug]/

export type GlossaryTerm = {
  slug: string;
  term: string;
  shortDefinition: string;
  relatedSlugs: string[];
  category: 'seo' | 'ai-search' | 'technical-seo' | 'content' | 'analytics' | 'paid-media';
  status: PageStatus;
  launchPhase: LaunchPhase;
};

export const glossary: GlossaryTerm[] = [
  // SEO fundamentals
  { slug: 'seo', term: 'SEO', shortDefinition: 'Search Engine Optimization — improving a site\'s visibility in organic search results.', relatedSlugs: ['serp', 'keyword', 'backlink'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'serp', term: 'SERP', shortDefinition: 'Search Engine Results Page — what Google shows for a query.', relatedSlugs: ['featured-snippet', 'knowledge-panel', 'rich-result'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'keyword', term: 'Keyword', shortDefinition: 'Query or phrase a user searches for.', relatedSlugs: ['long-tail-keyword', 'search-intent', 'keyword-difficulty'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'long-tail-keyword', term: 'Long-tail Keyword', shortDefinition: '3+ word queries with specific intent and lower search volume.', relatedSlugs: ['keyword', 'search-intent'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'search-intent', term: 'Search Intent', shortDefinition: 'The underlying goal behind a user\'s query.', relatedSlugs: ['keyword', 'serp'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'keyword-difficulty', term: 'Keyword Difficulty', shortDefinition: 'How hard it is to rank for a keyword on page one.', relatedSlugs: ['keyword', 'serp'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'backlink', term: 'Backlink', shortDefinition: 'An inbound link from another domain.', relatedSlugs: ['referring-domain', 'anchor-text', 'domain-rating'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'referring-domain', term: 'Referring Domain', shortDefinition: 'A unique domain linking to your site.', relatedSlugs: ['backlink', 'domain-rating'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'anchor-text', term: 'Anchor Text', shortDefinition: 'The visible clickable text of a link.', relatedSlugs: ['backlink', 'internal-link'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'domain-rating', term: 'Domain Rating (DR)', shortDefinition: 'Ahrefs\' metric for backlink profile strength, 0–100.', relatedSlugs: ['backlink', 'referring-domain'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'internal-link', term: 'Internal Link', shortDefinition: 'A link between two pages on the same domain.', relatedSlugs: ['anchor-text', 'topical-authority'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'canonical-tag', term: 'Canonical Tag', shortDefinition: 'Tells search engines which URL is the preferred version.', relatedSlugs: ['duplicate-content', 'hreflang'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'duplicate-content', term: 'Duplicate Content', shortDefinition: 'Substantially similar content on multiple URLs.', relatedSlugs: ['canonical-tag'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'hreflang', term: 'Hreflang', shortDefinition: 'HTML attribute signaling page language and region.', relatedSlugs: ['canonical-tag', 'international-seo'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'schema-markup', term: 'Schema Markup', shortDefinition: 'Structured data (JSON-LD) that helps search engines understand content.', relatedSlugs: ['rich-result', 'faq-schema'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'core-web-vitals', term: 'Core Web Vitals', shortDefinition: 'Google\'s LCP, INP, CLS page-experience metrics.', relatedSlugs: ['technical-seo', 'page-speed'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'crawl-budget', term: 'Crawl Budget', shortDefinition: 'How often/many pages Googlebot crawls on your site.', relatedSlugs: ['indexability', 'robots-txt'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'indexability', term: 'Indexability', shortDefinition: 'Whether a page can be stored in Google\'s index.', relatedSlugs: ['crawl-budget', 'robots-txt', 'canonical-tag'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'robots-txt', term: 'robots.txt', shortDefinition: 'File telling crawlers which URLs they can access.', relatedSlugs: ['crawl-budget', 'indexability'], category: 'technical-seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'featured-snippet', term: 'Featured Snippet', shortDefinition: 'Position zero — answer box above organic results.', relatedSlugs: ['serp', 'people-also-ask'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'people-also-ask', term: 'People Also Ask (PAA)', shortDefinition: 'Expandable question box on Google SERPs.', relatedSlugs: ['featured-snippet', 'faq-schema'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'rich-result', term: 'Rich Result', shortDefinition: 'Enhanced SERP listing with stars, images, or carousels.', relatedSlugs: ['schema-markup', 'featured-snippet'], category: 'seo', status: 'planned', launchPhase: 'M2' },
  { slug: 'topical-authority', term: 'Topical Authority', shortDefinition: 'Site-wide expertise on a subject measured by content depth + coverage.', relatedSlugs: ['internal-link', 'pillar-page'], category: 'content', status: 'planned', launchPhase: 'M2' },
  { slug: 'pillar-page', term: 'Pillar Page', shortDefinition: 'Long-form hub page anchoring a topic cluster.', relatedSlugs: ['topical-authority', 'internal-link'], category: 'content', status: 'planned', launchPhase: 'M2' },
  { slug: 'content-pruning', term: 'Content Pruning', shortDefinition: 'Removing low-value content to lift site-wide rankings.', relatedSlugs: ['content-audit'], category: 'content', status: 'planned', launchPhase: 'M2' },
  // AI search family
  { slug: 'aeo', term: 'AEO (Answer Engine Optimization)', shortDefinition: 'Optimization for AI answer engines like ChatGPT, Perplexity, AI Overviews.', relatedSlugs: ['geo', 'llm-visibility', 'entity-seo'], category: 'ai-search', status: 'planned', launchPhase: 'M2' },
  { slug: 'geo', term: 'GEO (Generative Engine Optimization)', shortDefinition: 'Content structured for LLM retrieval and citation.', relatedSlugs: ['aeo', 'llm-visibility'], category: 'ai-search', status: 'planned', launchPhase: 'M2' },
  { slug: 'llm-visibility', term: 'LLM Visibility', shortDefinition: 'How often a brand is cited in LLM outputs.', relatedSlugs: ['aeo', 'geo'], category: 'ai-search', status: 'planned', launchPhase: 'M2' },
  { slug: 'entity-seo', term: 'Entity SEO', shortDefinition: 'Optimization around Google\'s Knowledge Graph entities.', relatedSlugs: ['aeo', 'schema-markup', 'knowledge-graph'], category: 'ai-search', status: 'planned', launchPhase: 'M2' },
  { slug: 'knowledge-graph', term: 'Knowledge Graph', shortDefinition: 'Google\'s database of real-world entities and relationships.', relatedSlugs: ['entity-seo', 'schema-markup'], category: 'ai-search', status: 'planned', launchPhase: 'M2' },
];

export const glossarySlugs = glossary.map((g) => g.slug);

export function getGlossaryTermBySlug(slug: string): GlossaryTerm | undefined {
  return glossary.find((g) => g.slug === slug);
}
