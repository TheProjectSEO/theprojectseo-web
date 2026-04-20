import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EntityPageTemplate } from '@/components/entity-page-template'
import { getCountryBySlug } from '@/data/locations'
import { getServiceBySlug } from '@/data/services'
import { SITE_URL } from '@/lib/organization-schema'

export const metadata: Metadata = {
  title: 'SEO Services in India | AI-Native SEO Agency | TheProjectSEO',
  description:
    'Expert SEO, AI search, and content marketing services for businesses across India. Headquartered in Ranchi with clients in Bangalore, Mumbai, Delhi, Hyderabad, Pune, and Chennai.',
  alternates: { canonical: '/locations/india' },
  openGraph: {
    title: 'SEO Services in India | AI-Native SEO Agency | TheProjectSEO',
    description:
      'Expert SEO, AI search, and content marketing services for businesses across India. Headquartered in Ranchi with clients in Bangalore, Mumbai, Delhi, Hyderabad, Pune, and Chennai.',
    url: `${SITE_URL}/locations/india`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in India | TheProjectSEO',
    description:
      'Expert SEO, AI search, and content marketing services for businesses across India.',
  },
}

export default function IndiaPage() {
  const country = getCountryBySlug('india')
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
