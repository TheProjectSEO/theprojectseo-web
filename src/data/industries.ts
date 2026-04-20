import type { Industry } from './types';

// 20 industries. Current 16 live + 4 new to build in M1.
// Dynamic /industries/[industry]/[service]/ consumes priorityServiceSlugs
// to generate the industry x service matrix.

export const industries: Industry[] = [
  { slug: 'saas', name: 'SaaS', priorityServiceSlugs: ['seo', 'google-ads', 'ai-search', 'content'], status: 'live', launchPhase: 'M1' },
  { slug: 'fintech', name: 'Fintech', priorityServiceSlugs: ['seo', 'technical-seo', 'digital-pr', 'abm'], status: 'planned', launchPhase: 'M1' },
  { slug: 'ecommerce', name: 'Ecommerce', priorityServiceSlugs: ['ecommerce-seo', 'google-ads', 'cro', 'content'], status: 'live', launchPhase: 'M1' },
  { slug: 'fashion', name: 'Fashion', priorityServiceSlugs: ['ecommerce-seo', 'visual-media-seo', 'content', 'meta-ads'], status: 'live', launchPhase: 'M1' },
  { slug: 'travel', name: 'Travel', priorityServiceSlugs: ['content', 'technical-seo', 'ai-search', 'programmatic-seo'], status: 'live', launchPhase: 'M1' },
  { slug: 'finance', name: 'Finance', priorityServiceSlugs: ['seo', 'digital-pr', 'content', 'e-e-a-t-audit'], status: 'live', launchPhase: 'M1' },
  { slug: 'healthcare', name: 'Healthcare', priorityServiceSlugs: ['local-seo', 'content', 'digital-pr', 'technical-seo'], status: 'live', launchPhase: 'M1' },
  { slug: 'legal', name: 'Legal', priorityServiceSlugs: ['local-seo', 'content', 'digital-pr', 'seo'], status: 'live', launchPhase: 'M1' },
  { slug: 'real-estate', name: 'Real Estate', priorityServiceSlugs: ['local-seo', 'content', 'programmatic-seo', 'google-ads'], status: 'live', launchPhase: 'M1' },
  { slug: 'technology', name: 'Technology', priorityServiceSlugs: ['seo', 'ai-search', 'content', 'digital-pr'], status: 'live', launchPhase: 'M1' },
  { slug: 'education', name: 'Education', priorityServiceSlugs: ['content', 'seo', 'local-seo', 'programmatic-seo'], status: 'live', launchPhase: 'M1' },
  { slug: 'automotive', name: 'Automotive', priorityServiceSlugs: ['local-seo', 'seo', 'google-ads', 'content'], status: 'live', launchPhase: 'M1' },
  { slug: 'cybersecurity', name: 'Cybersecurity', priorityServiceSlugs: ['seo', 'content', 'abm', 'digital-pr'], status: 'live', launchPhase: 'M1' },
  { slug: 'cannabis', name: 'Cannabis', priorityServiceSlugs: ['local-seo', 'content', 'seo', 'digital-pr'], status: 'live', launchPhase: 'M1' },
  { slug: 'nonprofit', name: 'Nonprofit', priorityServiceSlugs: ['content', 'seo', 'google-ads', 'local-seo'], status: 'live', launchPhase: 'M1' },
  { slug: 'ai', name: 'AI Companies', priorityServiceSlugs: ['ai-search', 'entity-seo', 'digital-pr', 'content'], status: 'live', launchPhase: 'M1' },
  { slug: 'food', name: 'Food & Beverage', priorityServiceSlugs: ['local-seo', 'content', 'visual-media-seo', 'ecommerce-seo'], status: 'live', launchPhase: 'M1' },
  // 4 new
  { slug: 'hrtech', name: 'HRTech', priorityServiceSlugs: ['seo', 'abm', 'content', 'linkedin-ads'], status: 'planned', launchPhase: 'M1' },
  { slug: 'martech', name: 'Martech', priorityServiceSlugs: ['seo', 'ai-search', 'abm', 'content'], status: 'planned', launchPhase: 'M1' },
  { slug: 'manufacturing', name: 'Manufacturing', priorityServiceSlugs: ['seo', 'technical-seo', 'programmatic-seo', 'abm'], status: 'planned', launchPhase: 'M1' },
];

export const industrySlugs = industries.map((i) => i.slug);

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
