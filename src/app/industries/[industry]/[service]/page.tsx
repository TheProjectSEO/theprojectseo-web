import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { EntityPageTemplate } from '@/components/entity-page-template'
import { industries, getIndustryBySlug } from '@/data/industries'
import { getServiceBySlug } from '@/data/services'
import { SITE_URL } from '@/lib/organization-schema'

/* -------------------------------------------------------------------------- */
/*  Static params — 20 industries × 4 priority services = 80 combos          */
/* -------------------------------------------------------------------------- */

export function generateStaticParams() {
  return industries.flatMap((industry) =>
    industry.priorityServiceSlugs.map((serviceSlug) => ({
      industry: industry.slug,
      service: serviceSlug,
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
  params: Promise<{ industry: string; service: string }>
}): Promise<Metadata> {
  const { industry: industrySlug, service: serviceSlug } = await params
  const industry = getIndustryBySlug(industrySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!industry || !service) return {}

  const title = `${service.name} for ${industry.name} | TheProjectSEO`
  const description = `${service.shortDescription} Tailored strategy and execution for ${industry.name} businesses — industry-specific keywords, content, and link acquisition.`
  const canonical = `/industries/${industry.slug}/${service.slug}`

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

export default async function IndustryServicePage({
  params,
}: {
  params: Promise<{ industry: string; service: string }>
}) {
  const { industry: industrySlug, service: serviceSlug } = await params
  const industry = getIndustryBySlug(industrySlug)
  const service = getServiceBySlug(serviceSlug)

  if (!industry || !service) notFound()

  return <EntityPageTemplate type="industry-service" industry={industry} service={service} />
}
