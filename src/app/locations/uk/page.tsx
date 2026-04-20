import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EntityPageTemplate } from '@/components/entity-page-template'
import { getCountryBySlug } from '@/data/locations'
import { getServiceBySlug } from '@/data/services'
import { SITE_URL } from '@/lib/organization-schema'

export const metadata: Metadata = {
  title: 'SEO Services in the UK | AI-Native SEO Agency | TheProjectSEO',
  description:
    'Data-driven SEO, AI search optimisation, digital PR, and content marketing for businesses in the United Kingdom. Serving London, Manchester, and beyond.',
  alternates: { canonical: '/locations/uk' },
  openGraph: {
    title: 'SEO Services in the UK | AI-Native SEO Agency | TheProjectSEO',
    description:
      'Data-driven SEO, AI search optimisation, digital PR, and content marketing for businesses in the United Kingdom. Serving London, Manchester, and beyond.',
    url: `${SITE_URL}/locations/uk`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in the UK | TheProjectSEO',
    description:
      'Data-driven SEO, AI search optimisation, digital PR, and content marketing for UK businesses.',
  },
}

export default function UKPage() {
  const country = getCountryBySlug('uk')
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
