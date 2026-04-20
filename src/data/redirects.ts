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

  // Future IA redirects added per plan §Redirect table go here
];
