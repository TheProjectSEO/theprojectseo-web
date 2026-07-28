export type SeoPlanValue = 'initial-3500' | 'growth-5500' | 'enterprise-custom'

export interface SEOTier {
  name: string
  price: string
  period: string
  formValue: SeoPlanValue
  description: string
  featured: boolean
  highlights: string[]
}

/**
 * Compact pricing summary used on the homepage.
 *
 * The full /pricing page explains the variables and commercial boundaries.
 * These are engagement models, not fixed deliverable packages.
 */
export const seoTiers: SEOTier[] = [
  {
    name: 'Initial',
    price: '$3,500',
    period: '/mo',
    formValue: 'initial-3500',
    description:
      'The starting point for an ongoing engagement concentrated on the highest-priority search constraint.',
    featured: false,
    highlights: [
      'Custom scope after diagnosis',
      'Google and AI-search research',
      'Priority technical or page work',
      'Implementation briefs and QA',
      'Measurement matched to the goal',
    ],
  },
  {
    name: 'Growth',
    price: '$5,500',
    period: '/mo',
    formValue: 'growth-5500',
    description:
      'For teams that need several SEO, content, authority, analytics, and AI-search workstreams in parallel.',
    featured: true,
    highlights: [
      'Multiple coordinated workstreams',
      'Content and page architecture',
      'Technical implementation support',
      'Authority and source development',
      'Search and AI visibility reporting',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    formValue: 'enterprise-custom',
    description:
      'For large sites, multiple markets, regulated review, migrations, or complex data and governance requirements.',
    featured: false,
    highlights: [
      'Custom capacity and specialists',
      'Multi-market governance',
      'Developer and release collaboration',
      'Advanced analytics requirements',
      'Formal ownership and acceptance tests',
    ],
  },
]

export function getSeoTierByFormValue(value: string | null | undefined) {
  return seoTiers.find((tier) => tier.formValue === value)
}

export function getSeoTierFormLabel(tier: SEOTier) {
  return tier.period
    ? `${tier.name} — ${tier.price}/month`
    : `${tier.name} — ${tier.price}`
}
