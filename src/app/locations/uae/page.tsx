import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EntityPageTemplate } from '@/components/entity-page-template'
import { getCountryBySlug } from '@/data/locations'
import { getServiceBySlug } from '@/data/services'
import { SITE_URL } from '@/lib/organization-schema'

export const metadata: Metadata = {
  title: 'SEO Services in the UAE | AI-Native SEO Agency | TheProjectSEO',
  description:
    'AI-native SEO, e-commerce SEO, content strategy, and Google Ads management for businesses in the UAE — Dubai, Abu Dhabi, and the wider GCC market.',
  alternates: { canonical: '/locations/uae' },
  openGraph: {
    title: 'SEO Services in the UAE | AI-Native SEO Agency | TheProjectSEO',
    description:
      'AI-native SEO, e-commerce SEO, content strategy, and Google Ads management for businesses in the UAE — Dubai, Abu Dhabi, and the wider GCC market.',
    url: `${SITE_URL}/locations/uae`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in the UAE | TheProjectSEO',
    description:
      'AI-native SEO, e-commerce SEO, and Google Ads for businesses in Dubai, Abu Dhabi, and the GCC.',
  },
}

export default function UAEPage() {
  const country = getCountryBySlug('uae')
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
