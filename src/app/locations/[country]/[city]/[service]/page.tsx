import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { EntityPageTemplate } from '@/components/entity-page-template'
import { countries, getCountryBySlug } from '@/data/locations'
import { getServiceBySlug } from '@/data/services'
import { SITE_URL } from '@/lib/organization-schema'

/* -------------------------------------------------------------------------- */
/*  Static params — 10 countries × cities × 4 priority services ≈ 100 combos */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return countries.flatMap((country) =>
    country.cities.flatMap((city) =>
      country.priorityServiceSlugs.map((serviceSlug) => ({
        country: country.slug,
        city: city.slug,
        service: serviceSlug,
      })),
    ),
  )
}

export const dynamicParams = false

/* -------------------------------------------------------------------------- */
/*  Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; city: string; service: string }>
}): Promise<Metadata> {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = await params
  const country = getCountryBySlug(countrySlug)
  const city = country?.cities.find((c) => c.slug === citySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!country || !city || !service) return {}

  const title = `${service.name} in ${city.name} | TheProjectSEO`
  const description = `${service.shortDescription} Serving businesses in ${city.name}, ${country.name} with city-specific SEO strategy and local search expertise.`
  const canonical = `/locations/${country.slug}/${city.slug}/${service.slug}`

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

export default async function CityServicePage({
  params,
}: {
  params: Promise<{ country: string; city: string; service: string }>
}) {
  const { country: countrySlug, city: citySlug, service: serviceSlug } = await params
  const country = getCountryBySlug(countrySlug)
  const city = country?.cities.find((c) => c.slug === citySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!country || !city || !service) notFound()

  return (
    <EntityPageTemplate
      type="city-service"
      country={country}
      city={city}
      service={service}
    />
  )
}
