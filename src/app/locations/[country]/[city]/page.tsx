import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { EntityPageTemplate } from '@/components/entity-page-template'
import { countries, getCountryBySlug } from '@/data/locations'
import { getServiceBySlug } from '@/data/services'
import { SITE_URL } from '@/lib/organization-schema'

/* -------------------------------------------------------------------------- */
/*  Static params — all cities across all 10 countries ≈ 24 combos           */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return countries.flatMap((country) =>
    country.cities.map((city) => ({
      country: country.slug,
      city: city.slug,
    })),
  )
}

export const dynamicParams = false

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string }>
}): Promise<Metadata> {
  const { country: countrySlug, city: citySlug } = await params
  const country = getCountryBySlug(countrySlug)
  const city = country?.cities.find((c) => c.slug === citySlug)

  if (!country || !city) return {}

  const title = `SEO Services in ${city.name} | ${country.name} | TheProjectSEO`
  const description = `AI-native SEO and digital marketing services for businesses in ${city.name}, ${country.name}. Local keyword targeting, GBP management, and city-specific link building.`
  const canonical = `/locations/${country.slug}/${city.slug}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonical}`,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function CityHubPage({
  params,
}: {
  params: Promise<{ country: string; city: string }>
}) {
  const { country: countrySlug, city: citySlug } = await params
  const country = getCountryBySlug(countrySlug)
  const city = country?.cities.find((c) => c.slug === citySlug)

  if (!country || !city) notFound()

  // Resolve related services from the country's priority slugs
  const relatedServices = country.priorityServiceSlugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is NonNullable<typeof s> => s !== undefined)

  return (
    <EntityPageTemplate
      type="location"
      country={country}
      city={city}
      relatedServices={relatedServices}
    />
  )
}
