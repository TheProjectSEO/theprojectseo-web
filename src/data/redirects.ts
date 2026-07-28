// Canonical redirect table for theprojectseo.com.
// Retired offers consolidate into the closest SEO page so old backlinks and
// bookmarks do not land on a soft 404.

export type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

const retiredCountries = [
  'usa',
  'hongkong',
  'singapore',
  'australia',
  'germany',
  'canada',
  'uk',
  'uae',
];

const retiredServicePaths = [
  '/services/ai-development',
  '/services/ecommerce-development',
  '/services/mvp-development',
  '/services/web-app-development',
  '/services/web',
  '/services/paid-media',
  '/services/ai-agents/ai-analytics-agent',
  '/services/ai-agents/ai-content-agent',
  '/services/ai-agents/ai-ppc-agent',
  '/services/ai-agents/ai-reporting-agent',
  '/services/ai-agents/ai-revops-agent',
  '/services/claude/anthropic-api-consulting',
  '/services/claude/anthropic-model-migration',
  '/services/claude/claude-agency',
  '/services/claude/claude-agent-sdk-development',
  '/services/claude/claude-code-consulting',
  '/services/claude/claude-code-training',
  '/services/claude/claude-hooks-development',
  '/services/claude/claude-plugin-development',
  '/services/claude/claude-prompt-engineering',
  '/services/claude/claude-rag-systems',
  '/services/claude/claude-skills-development',
  '/services/claude/claude-workflows',
  '/services/claude/mcp-server-development',
  '/services/analytics/custom-dashboards',
  '/services/analytics/ga4-migration',
];

const retiredToolRedirects = [
  { source: '/tools', destination: '/resources' },
  { source: '/tools/seo-audit-tool', destination: '/services/seo-audit' },
  {
    source: '/tools/ai-visibility-checker',
    destination: '/services/ai-search/llm-visibility-tracking',
  },
  { source: '/tools/keyword-research-tool', destination: '/services/content' },
  { source: '/tools/backlink-checker', destination: '/services/link-building' },
  { source: '/tools/serp-checker', destination: '/services/content' },
  { source: '/tools/readability-checker', destination: '/services/content' },
  {
    source: '/tools/core-web-vitals-checker',
    destination: '/services/technical-seo',
  },
  {
    source: '/tools/keyword-difficulty-checker',
    destination: '/services/content',
  },
  {
    source: '/tools/domain-authority-checker',
    destination: '/services/link-building',
  },
  { source: '/tools/schema-generator', destination: '/services/technical-seo' },
  {
    source: '/tools/robots-txt-generator',
    destination: '/services/technical-seo',
  },
  {
    source: '/tools/hreflang-generator',
    destination: '/services/international-seo',
  },
  { source: '/tools/meta-tag-generator', destination: '/services/on-page-seo' },
  { source: '/tools/content-brief-generator', destination: '/services/content' },
  { source: '/tools/sitemap-generator', destination: '/services/technical-seo' },
  { source: '/tools/seo-roi-calculator', destination: '/pricing' },
  { source: '/tools/cac-calculator', destination: '/services/seo' },
  { source: '/tools/roas-calculator', destination: '/services/seo' },
  { source: '/tools/ltv-calculator', destination: '/services/seo' },
  { source: '/tools/churn-rate-calculator', destination: '/services/seo' },
  { source: '/tools/arpu-calculator', destination: '/services/seo' },
];

const retiredCaseStudyPaths = [
  '/case-studies/mobile-modular',
  '/case-studies/mobile-modular-portable-storage',
  '/case-studies/x0pa-ai',
  '/case-studies/acelerar-technologies',
  '/case-studies/sensesbit',
  '/case-studies/helpling-singapore',
  '/case-studies/cuddlynest',
  '/case-studies/clavio',
];

export const redirects: Redirect[] = [
  // Common misspellings of the standard AI-discovery filenames.
  { source: '/lms.txt', destination: '/llms.txt', permanent: true },
  { source: '/lmsful.txt', destination: '/llms-full.txt', permanent: true },
  { source: '/llmsful.txt', destination: '/llms-full.txt', permanent: true },

  // Retired locale prefixes: consolidate any stale translated URL into its
  // canonical English equivalent. The site is English-only.
  { source: '/en', destination: '/', permanent: true },
  { source: '/en/:path*', destination: '/:path*', permanent: true },
  { source: '/es', destination: '/', permanent: true },
  { source: '/es/:path*', destination: '/:path*', permanent: true },
  { source: '/fr', destination: '/', permanent: true },
  { source: '/fr/:path*', destination: '/:path*', permanent: true },
  { source: '/de', destination: '/', permanent: true },
  { source: '/de/:path*', destination: '/:path*', permanent: true },
  { source: '/ar', destination: '/', permanent: true },
  { source: '/ar/:path*', destination: '/:path*', permanent: true },

  { source: '/india-seo-services', destination: '/locations/india', permanent: true },
  { source: '/philippines-seo-services', destination: '/locations/philippines', permanent: true },
  { source: '/usa-seo-services', destination: '/services/international-seo', permanent: true },
  {
    source: '/locations/india/:city/:path*',
    destination: '/locations/india',
    permanent: true,
  },
  {
    source: '/locations/philippines/:city/:path*',
    destination: '/locations/philippines',
    permanent: true,
  },
  {
    source: '/industries/:industry/:service',
    destination: '/industries/:industry',
    permanent: true,
  },

  ...retiredCountries.flatMap((country) => [
    {
      source: `/locations/${country}`,
      destination: '/services/international-seo',
      permanent: true,
    },
    {
      source: `/locations/${country}/:path*`,
      destination: '/services/international-seo',
      permanent: true,
    },
  ]),

  ...retiredServicePaths.map((source) => ({
    source,
    destination: '/services/seo',
    permanent: true,
  })),

  ...retiredToolRedirects.map(({ source, destination }) => ({
    source,
    destination,
    permanent: true,
  })),

  ...retiredCaseStudyPaths.map((source) => ({
    source,
    destination: '/case-studies',
    permanent: true,
  })),

  // Retired comparison cluster: the pages compared a managed SEO agency with
  // software products and contained claims that were not supported by current
  // public evidence. Consolidate any existing equity into the core SEO offer.
  { source: '/vs', destination: '/services/seo', permanent: true },
  { source: '/vs/:competitor', destination: '/services/seo', permanent: true },

  {
    source: '/services/n8n-automation',
    destination: '/services/seo-automation',
    permanent: true,
  },
  {
    source: '/services/n8n-automation/:path*',
    destination: '/services/seo-automation',
    permanent: true,
  },
  {
    source: '/services/paid-media/:path*',
    destination: '/services/seo',
    permanent: true,
  },
  {
    source: '/services/ai-agents',
    destination: '/services/ai-agents/ai-seo-agent',
    permanent: true,
  },
  {
    source: '/services/claude',
    destination: '/services/claude/agentic-seo-systems',
    permanent: true,
  },

  { source: '/services/aeo', destination: '/services/ai-search/aeo', permanent: true },
  {
    source: '/services/data-engineering',
    destination: '/services/analytics/gsc-bigquery-setup',
    permanent: true,
  },
  {
    source: '/services/data-visualization',
    destination: '/services/analytics',
    permanent: true,
  },
  {
    source: '/services/ai-seo-agent',
    destination: '/services/ai-agents/ai-seo-agent',
    permanent: true,
  },
];
