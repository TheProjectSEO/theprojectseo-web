// Shared types for the content data layer.
// Templates consume these to render service / industry / location / tool pages.
// See IA plan: ~/.claude/plans/do-a-comprehensive-research-expressive-pebble.md

export type Locale = 'en' | 'es' | 'fr' | 'de' | 'ar';

// Per-combination content for industry-service and city-service pages.
// Optional — absent records fall back to generic copy in entity-page-template.tsx.

export type FAQItem = {
  question: string;
  answer: string;
};

export type CombinationContent = {
  heroDescription?: string;  // 2-sentence unique value prop (~200 chars)
  valueProps?: string[];      // 3-4 bullets specific to this combination
  faqs?: FAQItem[];           // 3-5 Q&As that could not apply to a different combination
};

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
  // Per-service unique content: service slug → unique copy block
  serviceContent?: Record<string, CombinationContent>;
};

export type City = {
  slug: string;
  name: string;
  isHQ?: boolean;
  // Per-service unique content for city-service pages
  serviceContent?: Record<string, CombinationContent>;
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
