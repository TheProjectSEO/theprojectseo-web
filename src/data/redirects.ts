// Canonical redirect table for theprojectseo.com
//
// Usage: imported by next.config.ts → redirects().
// To add a new 301: append an entry here. Do NOT edit next.config.ts directly.
//
// Columns:
//   source      — incoming URL pattern (Next.js path-to-regexp syntax)
//   destination — target URL (absolute or root-relative)
//   permanent   — true = 301, false = 302

export type Redirect = {
  source: string;
  destination: string;
  permanent: boolean;
};

export const redirects: Redirect[] = [
  // Geo page consolidation — shipped 2026-04-19
  // Kill cannibalization between flat country pages and /locations/<country>/.
  // NOTE: /india-seo-services stays live until /locations/india/ is built in Phase 1.
  // See IA plan §Redirect & Consolidation Strategy.
  { source: '/usa-seo-services', destination: '/locations/usa', permanent: true },
  { source: '/philippines-seo-services', destination: '/locations/philippines', permanent: true },

  // Phase B pillar consolidation — shipped 2026-04-19
  // Old single pages replaced by dedicated pillars under new paths.

  // AI Search pillar (replaces single /services/aeo)
  { source: '/services/aeo', destination: '/services/ai-search/aeo', permanent: true },

  // Analytics pillar (replaces data-engineering + data-visualization)
  { source: '/services/data-engineering', destination: '/services/analytics/gsc-bigquery-setup', permanent: true },
  { source: '/services/data-visualization', destination: '/services/analytics/custom-dashboards', permanent: true },

  // AI Agents pillar (existing ai-seo-agent relocated inside the new pillar)
  { source: '/services/ai-seo-agent', destination: '/services/ai-agents/ai-seo-agent', permanent: true },
];
