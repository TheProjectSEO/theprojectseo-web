// Shared types for the content data layer.
// Templates consume these to render service / industry / location / tool pages.
// See IA plan: ~/.claude/plans/do-a-comprehensive-research-expressive-pebble.md

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'ar';

export type LaunchPhase = 'M1' | 'M2' | 'M3' | 'M4' | 'M5' | 'M6' | 'M7' | 'M8' | 'M9' | 'M10';

export type PageStatus = 'live' | 'planned' | 'draft';

export type ServicePillarSlug =
  | 'seo'
  | 'technical-seo'
  | 'ai-search'
  | 'paid-media'
  | 'analytics'
  | 'content'
  | 'serp-features'
  | 'visual-media-seo'
  | 'digital-pr'
  | 'revops'
  | 'abm'
  | 'cro'
  | 'local-at-scale'
  | 'automation'
  | 'development'
  | 'ai-agents'
  | 'claude';

export type Service = {
  slug: string;
  pillar: ServicePillarSlug;
  name: string;
  shortDescription: string;
  primaryKeyword?: string;
  status: PageStatus;
  launchPhase: LaunchPhase;
  // When URL migrates (e.g. /services/aeo -> /services/ai-search/aeo)
  legacyUrl?: string;
};

export type Industry = {
  slug: string;
  name: string;
  // Services this industry pairs with for the industry x service matrix
  priorityServiceSlugs: string[];
  status: PageStatus;
  launchPhase: LaunchPhase;
};

export type City = {
  slug: string;
  name: string;
  isHQ?: boolean;
};

export type Country = {
  slug: string;
  name: string;
  cities: City[];
  // Services emphasized on this country page
  priorityServiceSlugs: string[];
  status: PageStatus;
  launchPhase: LaunchPhase;
  // Locale this country's content should be available in
  locales: Locale[];
};

export type ToolType = 'checker' | 'generator' | 'calculator';

export type Tool = {
  slug: string;
  name: string;
  type: ToolType;
  shortDescription: string;
  status: PageStatus;
  launchPhase: LaunchPhase;
};
