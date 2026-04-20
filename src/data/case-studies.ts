import type { PageStatus, LaunchPhase } from './types';

// Case studies. Each lives at /case-studies/[slug]/.
// The 7 ghost URLs previously in sitemap (home-services-seo, travel-seo,
// travel-affiliate-seo, saas-seo, ecommerce-seo, automobile-seo, emd-seo)
// were industry-level concepts, not client cases. The new plan uses
// real client case studies, pending each client's sign-off.
// See IA plan Open Item #5.

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string; // matches industries.slug
  headline: string;
  headlineMetric: string; // e.g. "3.5x organic traffic"
  status: PageStatus;
  launchPhase: LaunchPhase;
  permissionsStatus: 'pending' | 'approved' | 'declined';
};

export const caseStudies: CaseStudy[] = [
  // Tier 1 clients — need written sign-off before publishing
  { slug: 'mobile-modular', client: 'Mobile Modular', industry: 'real-estate', headline: 'National SEO for 240+ locations', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
  { slug: 'mobile-modular-portable-storage', client: 'Mobile Modular Portable Storage', industry: 'real-estate', headline: 'Multi-state storage-unit SEO', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
  { slug: 'x0pa-ai', client: 'X0PA AI', industry: 'hrtech', headline: 'B2B SaaS SEO for AI-powered talent acquisition', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
  { slug: 'acelerar-technologies', client: 'Acelerar Technologies', industry: 'saas', headline: 'AI-native positioning for BPO services', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
  { slug: 'sensesbit', client: 'Sensesbit', industry: 'ai', headline: 'Founder-led BOFU content strategy', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
  { slug: 'helpling-singapore', client: 'Helpling Singapore', industry: 'saas', headline: 'Local service-marketplace SEO', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
  { slug: 'cuddlynest', client: 'CuddlyNest', industry: 'travel', headline: 'OTA content + migration SEO', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
  { slug: 'clavio', client: 'Clavio', industry: 'saas', headline: 'AI data-analytics platform launch', headlineMetric: 'TBD', status: 'planned', launchPhase: 'M1', permissionsStatus: 'pending' },
];

export const caseStudySlugs = caseStudies.map((c) => c.slug);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
