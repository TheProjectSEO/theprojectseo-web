import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EntityPageTemplate } from '@/components/entity-page-template'
import { getCountryBySlug } from '@/data/locations'
import { getServiceBySlug } from '@/data/services'
import { SITE_URL } from '@/lib/organization-schema'

export const metadata: Metadata = {
  title: 'SEO Services in Canada | AI-Native SEO Agency | TheProjectSEO',
  description:
    'Professional SEO, Google Ads management, content marketing, and AI search services for Canadian businesses in Toronto, Vancouver, and across Canada.',
  alternates: { canonical: '/locations/canada' },
  openGraph: {
    title: 'SEO Services in Canada | AI-Native SEO Agency | TheProjectSEO',
    description:
      'Professional SEO, Google Ads management, content marketing, and AI search services for Canadian businesses in Toronto, Vancouver, and across Canada.',
    url: `${SITE_URL}/locations/canada`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in Canada | TheProjectSEO',
    description:
      'Professional SEO, Google Ads management, and AI search services for Canadian businesses.',
  },
}

export default function CanadaPage() {
  const country = getCountryBySlug('canada')
  if (!country) notFound()

  const relatedServices = country.priorityServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)

  return (
    <EntityPageTemplate
      type="location"
      country={country}
      relatedServices={relatedServices}
    />
  )
}
