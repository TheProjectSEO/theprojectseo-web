/**
 * EntityPageTemplate — universal page renderer for the data-layer.
 *
 * One component covers every URL pattern in the IA plan:
 *
 * @example Service page (pillar or sub-service)
 * ```tsx
 * // src/app/[lang]/services/[pillar]/[slug]/page.tsx
 * <EntityPageTemplate type="service" service={service} pillarServices={getServicesByPillar(service.pillar)} />
 * ```
 *
 * @example Industry page
 * ```tsx
 * // src/app/[lang]/industries/[industry]/page.tsx
 * <EntityPageTemplate type="industry" industry={industry} relatedServices={relatedServices} />
 * ```
 *
 * @example Country / location page
 * ```tsx
 * // src/app/[lang]/locations/[country]/page.tsx
 * <EntityPageTemplate type="location" country={country} relatedServices={relatedServices} />
 * ```
 *
 * @example Industry × Service intersection page
 * ```tsx
 * // src/app/[lang]/industries/[industry]/[service]/page.tsx
 * <EntityPageTemplate type="industry-service" industry={industry} service={service} />
 * ```
 *
 * @example City × Service page
 * ```tsx
 * // src/app/[lang]/locations/[country]/[city]/[service]/page.tsx
 * <EntityPageTemplate type="city-service" country={country} city={city} service={service} />
 * ```
 */

import { Container } from '@/components/container'
import { FAQAccordion, type FAQItem } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'
import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import {
  CTAFormSection,
  RelatedServicesSection,
} from '@/components/service-page-sections'
import { SubpageNav } from '@/components/subpage-nav'
import { Heading, Lead, Subheading } from '@/components/text'
import { ORGANIZATION_REF, SITE_URL } from '@/lib/organization-schema'
import type { City, Country, Industry, Service } from '@/data/types'

/* -------------------------------------------------------------------------- */
/*  Discriminated props union                                                  */
/* -------------------------------------------------------------------------- */

export type EntityPageProps =
  | { type: 'service'; service: Service; pillarServices: Service[] }
  | { type: 'industry'; industry: Industry; relatedServices: Service[] }
  | { type: 'location'; country: Country; relatedServices: Service[] }
  | { type: 'industry-service'; industry: Industry; service: Service }
  | { type: 'city-service'; country: Country; city: City; service: Service }

/* -------------------------------------------------------------------------- */
/*  Hero                                                                       */
/* -------------------------------------------------------------------------- */

interface HeroContent {
  label: string
  h1: string
  accentPhrase: string
  description: string
}

function EntityHero({ label, h1, accentPhrase, description }: HeroContent) {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            {label}
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            {h1} <em className="text-accent italic">{accentPhrase}</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            {description}
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Your Free SEO Audit</Button>
            <Button variant="outline" href="/services">
              Explore Services
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Why TheProjectSEO — 4 value props                                         */
/* -------------------------------------------------------------------------- */

interface ValueProp {
  title: string
  body: string
}

function WhySection({ props }: { props: ValueProp[] }) {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Why TheProjectSEO</Subheading>
          <Heading as="h2" className="mt-2">
            Data-driven SEO with measurable outcomes.
          </Heading>
          <Lead className="mt-6 mx-auto">
            We measure success in revenue, not rankings. Every deliverable is
            connected to a business outcome you can verify.
          </Lead>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-4">
          {props.map((vp) => (
            <div
              key={vp.title}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 size-10 rounded-none bg-accent-soft flex items-center justify-center">
                <CheckIcon className="size-5 fill-accent" />
              </div>
              <h3 className="font-heading text-base font-semibold text-ink mb-2">
                {vp.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{vp.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  FAQ block                                                                  */
/* -------------------------------------------------------------------------- */

function FAQSection({ items, title }: { items: FAQItem[]; title: string }) {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion title={title} items={items} />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Default FAQ banks per entity type                                          */
/*                                                                             */
/*  TODO (data enrichment): Replace these hardcoded defaults with FAQ content */
/*  stored on the entity records in services.ts / industries.ts / locations.ts*/
/*  Add a `faqs?: FAQItem[]` field to the Service, Industry, Country types    */
/*  and fall back to these defaults only when the array is absent/empty.      */
/* -------------------------------------------------------------------------- */

const SERVICE_FAQS: FAQItem[] = [
  {
    question: 'How long does it take to see results from this service?',
    answer:
      'Most clients see measurable movement within 60-90 days. Significant ranking and traffic gains typically compound between months 4-8 as authority builds. We track weekly and share transparent monthly reports so you always know what is moving.',
  },
  {
    question: 'Do you work with businesses at any stage?',
    answer:
      'Yes — from early-stage startups building their first organic channel to enterprise brands migrating to a new CMS without losing traffic. We size the engagement to your current baseline and growth targets.',
  },
  {
    question: 'What does your reporting look like?',
    answer:
      'Monthly reports covering keyword movement, organic sessions, conversions, and an attribution view connecting SEO to revenue. We use Google Search Console, GA4, and DataForSEO for verification — no AI-estimated numbers.',
  },
  {
    question: 'Can you integrate with our existing tech stack?',
    answer:
      'Yes. We work with any CMS, e-commerce platform, or analytics setup. Our technical team handles implementation directly or works alongside your developers with clear tickets and documentation.',
  },
  {
    question: 'What separates you from a generalist agency?',
    answer:
      'We are specialists, not generalists. Every team member works exclusively on SEO and organic growth. We also run AI-native workflows — custom models for content evaluation, schema generation, and rank forecasting — that generic agencies cannot replicate.',
  },
  {
    question: 'Do you offer month-to-month contracts?',
    answer:
      'Yes. We do not lock clients into long-term contracts because our results earn continued partnership. Most clients stay 12+ months voluntarily; we will tell you if your project is too small or too early for a retainer to make sense.',
  },
]

const INDUSTRY_FAQS: FAQItem[] = [
  {
    question: 'Do you specialise in this industry?',
    answer:
      'Yes. We maintain dedicated keyword research, content frameworks, and competitor tracking for each industry we serve. Your strategy is built on industry-specific search behaviour, not generic SEO templates.',
  },
  {
    question: 'How do you handle compliance-sensitive industries?',
    answer:
      'We research regulatory constraints before content planning. For healthcare, finance, legal, and cannabis, all content is reviewed against E-E-A-T guidelines, and we work with your legal/compliance team on approvals.',
  },
  {
    question: 'What SEO KPIs matter most for my industry?',
    answer:
      'This depends on your funnel. B2B SaaS: demo request rate from organic. E-commerce: organic revenue and ROAS. Healthcare: appointment bookings. We agree on 2-3 primary KPIs in month one and track them every week.',
  },
  {
    question: 'How competitive is organic search in my industry?',
    answer:
      'We conduct a full SERP competition analysis before engagement. You will see exactly which positions are winnable in 6 months vs. 18 months and what it costs in content and links to get there.',
  },
  {
    question: 'Do you produce industry-specific content or use generic writers?',
    answer:
      'We assign writers with direct industry experience or subject-matter-expert review for technical verticals. We also use our AI writing system calibrated to your brand voice, then human-edited to ensure accuracy.',
  },
]

const LOCATION_FAQS: FAQItem[] = [
  {
    question: 'Can you help us rank in multiple cities or countries?',
    answer:
      'Yes. Our multi-location SEO covers hreflang architecture, localised content, Google Business Profile management, local citation building, and country-specific link acquisition — all managed from a single roadmap.',
  },
  {
    question: 'Do you understand local search signals in this region?',
    answer:
      'We track local algorithm signals, map pack behaviour, and regional link ecosystems for every country we serve. We also conduct competitor analysis specific to your target city before beginning work.',
  },
  {
    question: 'How do you handle multiple languages?',
    answer:
      'We manage hreflang tags, locale-specific sitemaps, and translated content quality assurance. Translations are done by human translators with SEO briefing — never raw machine translation.',
  },
  {
    question: 'What is the typical timeline for local search visibility?',
    answer:
      'Map pack visibility for GBP-optimised listings often improves within 60 days. Organic local rankings for competitive terms typically take 4-9 months depending on domain authority and competition density.',
  },
  {
    question: 'Do you manage Google Business Profiles?',
    answer:
      'Yes. GBP optimisation is included for location-based engagements: profile setup or audit, category selection, Q&A management, photo strategy, and review velocity guidance.',
  },
]

const INDUSTRY_SERVICE_FAQS: FAQItem[] = [
  {
    question: 'How does this service differ when applied to our industry?',
    answer:
      'Every industry has unique keyword intent, competitive dynamics, and content formats. We adapt our methodology — keyword targets, link sources, schema types, and content structure — to what works specifically in your vertical.',
  },
  {
    question: 'Can you show examples of this service working in similar businesses?',
    answer:
      'Yes. We can share anonymised case studies from comparable businesses during our discovery call. We will not share client data publicly without permission.',
  },
  {
    question: 'Do you handle the full implementation or just strategy?',
    answer:
      'Both. We do strategy and full implementation — technical changes, content production, schema markup, and link acquisition. You decide how much your team handles; we fill the gaps.',
  },
  {
    question: 'What is the minimum engagement for this type of project?',
    answer:
      'We typically start with a focused 3-month project to establish baseline, implement priorities, and measure lift. Most clients then move to a retainer once they see the trajectory.',
  },
]

const CITY_SERVICE_FAQS: FAQItem[] = [
  {
    question: 'Why does city-level SEO require a different approach?',
    answer:
      'City-level search is dominated by proximity signals, GBP listings, local citations, and hyperlocal content. Generic national SEO strategies do not move local map pack rankings. We build city-specific landing pages, citation profiles, and local link strategies.',
  },
  {
    question: 'How many cities can you manage simultaneously?',
    answer:
      'We have scaled city-page programmes to 500+ locations. The key is a systematic content and schema template approach combined with unique local data for each page — avoiding thin content penalties.',
  },
  {
    question: 'Do you create unique content for each city page?',
    answer:
      'Yes. We avoid duplicate content across location pages by embedding genuinely local signals: local landmarks, neighbourhood references, city-specific client testimonials, and local schema markup. Each page passes our uniqueness check before going live.',
  },
  {
    question: 'Will this service help with Google Maps rankings?',
    answer:
      'City-level SEO directly influences map pack visibility. We combine GBP optimisation, local citation building, and review management alongside the city page to create a compound local signal.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Value-prop banks per entity type                                           */
/* -------------------------------------------------------------------------- */

const SERVICE_VALUE_PROPS: ValueProp[] = [
  {
    title: 'Specialists, not generalists',
    body: '100% of our work is organic search. No social media retainers, no brand campaigns. You get a team that lives and breathes rankings.',
  },
  {
    title: 'AI-native execution',
    body: 'Custom models handle schema generation, content scoring, and rank forecasting — freeing our strategists to focus on decisions that require human judgment.',
  },
  {
    title: 'Revenue-connected reporting',
    body: 'We connect GSC, GA4, and your CRM so you see organic revenue, not just traffic. Every month you know exactly what SEO contributed to the bottom line.',
  },
  {
    title: 'No-surprise contracts',
    body: 'Month-to-month retainers with clear scope. We expand scope when results justify it — never to hit a billing target.',
  },
]

const INDUSTRY_VALUE_PROPS: ValueProp[] = [
  {
    title: 'Industry-specific playbooks',
    body: 'Each vertical has unique keyword intent, SERP features, and link sources. We have built playbooks for 20+ industries — yours is not a first attempt.',
  },
  {
    title: 'Competitor intelligence',
    body: 'We audit the top 10 organic competitors in your niche before month one. You know exactly where the gaps are and how long they take to close.',
  },
  {
    title: 'Compliant by default',
    body: 'For regulated industries (healthcare, finance, legal, cannabis), we work within E-E-A-T requirements and co-review content with your compliance team.',
  },
  {
    title: 'Measurable contribution',
    body: 'Industry-specific conversion events tracked from first click to closed deal. We attribute organic traffic to revenue so your CFO can see the ROI.',
  },
]

const LOCATION_VALUE_PROPS: ValueProp[] = [
  {
    title: 'Local search architecture',
    body: 'Proper hreflang, locale-specific sitemaps, GBP management, and city-page templates — built correctly from day one to avoid duplication penalties.',
  },
  {
    title: 'Region-specific link building',
    body: 'We acquire backlinks from local news sites, directories, and industry publications in your target region — signals Google uses to determine geographic relevance.',
  },
  {
    title: 'Map pack optimisation',
    body: 'GBP profile management, review velocity strategy, and citation consistency audit included in every location engagement.',
  },
  {
    title: 'Multi-market scalability',
    body: 'Our location-page system scales from 5 cities to 500. You can expand geographically without rebuilding the SEO architecture.',
  },
]

const INDUSTRY_SERVICE_VALUE_PROPS: ValueProp[] = [
  {
    title: 'Vertical + service depth',
    body: 'Combining service expertise with industry knowledge means better keyword targeting, more relevant content, and higher conversion from organic visitors.',
  },
  {
    title: 'Pre-built competitor map',
    body: 'We enter every industry-service engagement with a live competitor analysis covering rankings, backlink gaps, and content opportunities specific to your niche.',
  },
  {
    title: 'Full implementation',
    body: 'Strategy and execution from the same team. No briefing a separate delivery team who has never spoken to you.',
  },
  {
    title: 'Transparent attribution',
    body: 'We track organic leads, demos, and revenue from the first session. You see exactly what the combined industry + service SEO programme is returning.',
  },
]

const CITY_SERVICE_VALUE_PROPS: ValueProp[] = [
  {
    title: 'Hyperlocal content',
    body: 'City pages built with genuine local signals — not spun templates. Each page passes our uniqueness quality gate before going live.',
  },
  {
    title: 'Map pack + organic combo',
    body: 'We run GBP and organic together. Local rankings improve faster when both signals reinforce each other.',
  },
  {
    title: 'Scalable city-page system',
    body: 'Need 50 city pages? 500? Our data-layer template approach scales without incremental cost per page.',
  },
  {
    title: 'Citation network management',
    body: 'We audit and fix NAP consistency across 40+ directories for each city, eliminating a common local ranking drag that most agencies miss.',
  },
]

/* -------------------------------------------------------------------------- */
/*  JSON-LD builders                                                           */
/* -------------------------------------------------------------------------- */

function buildServiceSchema(service: Service): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${service.pillar}/${service.slug}/#service`,
    name: service.name,
    description: service.shortDescription,
    url: `${SITE_URL}/services/${service.pillar}/${service.slug}`,
    provider: ORGANIZATION_REF,
    serviceType: service.name,
    ...(service.primaryKeyword
      ? { keywords: service.primaryKeyword }
      : {}),
  }
}

function buildIndustrySchema(industry: Industry): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/industries/${industry.slug}/#service`,
    name: `SEO Services for ${industry.name}`,
    description: `Specialist SEO, AEO, and content marketing services for ${industry.name} businesses.`,
    url: `${SITE_URL}/industries/${industry.slug}`,
    provider: ORGANIZATION_REF,
    serviceType: `${industry.name} SEO`,
  }
}

function buildLocationSchema(country: Country): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/${country.slug}/#localbusiness`,
    name: `TheProjectSEO — SEO Services in ${country.name}`,
    description: `AI-native SEO and digital marketing services for businesses in ${country.name}.`,
    url: `${SITE_URL}/locations/${country.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressCountry: country.slug === 'india' ? 'IN' : country.slug.toUpperCase(),
    },
    parentOrganization: ORGANIZATION_REF,
    areaServed: {
      '@type': 'Country',
      name: country.name,
    },
  }
}

function buildIndustryServiceSchema(
  industry: Industry,
  service: Service,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/industries/${industry.slug}/${service.slug}/#service`,
    name: `${service.name} for ${industry.name}`,
    description: `${service.shortDescription} Tailored for ${industry.name} businesses.`,
    url: `${SITE_URL}/industries/${industry.slug}/${service.slug}`,
    provider: ORGANIZATION_REF,
    serviceType: service.name,
    audience: {
      '@type': 'Audience',
      audienceType: `${industry.name} companies`,
    },
  }
}

function buildCityServiceSchema(
  country: Country,
  city: City,
  service: Service,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/locations/${country.slug}/${city.slug}/${service.slug}/#localbusiness`,
    name: `TheProjectSEO — ${service.name} in ${city.name}`,
    description: `${service.shortDescription} Serving businesses in ${city.name}, ${country.name}.`,
    url: `${SITE_URL}/locations/${country.slug}/${city.slug}/${service.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressCountry: country.slug === 'india' ? 'IN' : country.slug.toUpperCase(),
    },
    parentOrganization: ORGANIZATION_REF,
    areaServed: {
      '@type': 'City',
      name: city.name,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.shortDescription,
          },
        },
      ],
    },
  }
}

/* -------------------------------------------------------------------------- */
/*  Derive content per entity type                                             */
/* -------------------------------------------------------------------------- */

type EntityContent = {
  heroLabel: string
  heroH1: string
  heroAccent: string
  heroDescription: string
  valueProps: ValueProp[]
  faqItems: FAQItem[]
  faqTitle: string
  relatedLinks: { title: string; description: string; href: string }[]
  subpageNavHeading: string
  subpageNavLinks: { title: string; href: string }[]
  jsonLdData: Record<string, unknown>
}

function deriveContent(props: EntityPageProps): EntityContent {
  switch (props.type) {
    case 'service': {
      const { service, pillarServices } = props
      return {
        heroLabel: `${service.pillar.replace(/-/g, ' ').toUpperCase()} SERVICES`,
        heroH1: service.name,
        heroAccent: 'that drive real growth.',
        heroDescription: service.shortDescription,
        valueProps: SERVICE_VALUE_PROPS,
        faqItems: SERVICE_FAQS,
        faqTitle: `${service.name} — frequently asked questions`,
        relatedLinks: pillarServices
          .filter((s) => s.slug !== service.slug)
          .slice(0, 8)
          .map((s) => ({
            title: s.name,
            description: s.shortDescription,
            href: `/services/${s.pillar}/${s.slug}`,
          })),
        subpageNavHeading: `More ${service.pillar.replace(/-/g, ' ')} services`,
        subpageNavLinks: pillarServices
          .filter((s) => s.slug !== service.slug)
          .slice(0, 6)
          .map((s) => ({
            title: s.name,
            href: `/services/${s.pillar}/${s.slug}`,
          })),
        jsonLdData: buildServiceSchema(service),
      }
    }

    case 'industry': {
      const { industry, relatedServices } = props
      return {
        heroLabel: `${industry.name.toUpperCase()} SEO`,
        heroH1: `SEO for ${industry.name}`,
        heroAccent: 'businesses.',
        heroDescription: `Specialist organic growth programmes built for the unique search landscape of the ${industry.name} sector — from keyword architecture to authoritative content and link acquisition.`,
        valueProps: INDUSTRY_VALUE_PROPS,
        faqItems: INDUSTRY_FAQS,
        faqTitle: `${industry.name} SEO — frequently asked questions`,
        relatedLinks: relatedServices.slice(0, 8).map((s) => ({
          title: s.name,
          description: s.shortDescription,
          href: `/services/${s.pillar}/${s.slug}`,
        })),
        subpageNavHeading: `${industry.name} SEO services`,
        subpageNavLinks: relatedServices.slice(0, 6).map((s) => ({
          title: s.name,
          href: `/industries/${industry.slug}/${s.slug}`,
        })),
        jsonLdData: buildIndustrySchema(industry),
      }
    }

    case 'location': {
      const { country, relatedServices } = props
      return {
        heroLabel: `SEO IN ${country.name.toUpperCase()}`,
        heroH1: `SEO services in`,
        heroAccent: country.name,
        heroDescription: `Data-driven SEO, AEO, and content marketing for businesses operating in ${country.name}. Local search expertise, regional link networks, and multi-city scalability.`,
        valueProps: LOCATION_VALUE_PROPS,
        faqItems: LOCATION_FAQS,
        faqTitle: `SEO in ${country.name} — frequently asked questions`,
        relatedLinks: relatedServices.slice(0, 8).map((s) => ({
          title: s.name,
          description: s.shortDescription,
          href: `/services/${s.pillar}/${s.slug}`,
        })),
        subpageNavHeading: `Cities we serve in ${country.name}`,
        subpageNavLinks: country.cities.slice(0, 6).map((c) => ({
          title: c.name,
          href: `/locations/${country.slug}/${c.slug}`,
        })),
        jsonLdData: buildLocationSchema(country),
      }
    }

    case 'industry-service': {
      const { industry, service } = props
      return {
        heroLabel: `${industry.name.toUpperCase()} + ${service.name.toUpperCase()}`,
        heroH1: `${service.name} for`,
        heroAccent: `${industry.name} businesses.`,
        heroDescription: `${service.shortDescription} We apply this service specifically to the ${industry.name} competitive landscape — targeting the keywords, links, and content types that move rankings in your vertical.`,
        valueProps: INDUSTRY_SERVICE_VALUE_PROPS,
        faqItems: INDUSTRY_SERVICE_FAQS,
        faqTitle: `${service.name} for ${industry.name} — frequently asked questions`,
        relatedLinks: [
          {
            title: `All ${industry.name} Services`,
            description: `View every service we offer for ${industry.name} businesses.`,
            href: `/industries/${industry.slug}`,
          },
          {
            title: service.name,
            description: service.shortDescription,
            href: `/services/${service.pillar}/${service.slug}`,
          },
        ],
        subpageNavHeading: `Explore related pages`,
        subpageNavLinks: [
          { title: `${industry.name} SEO`, href: `/industries/${industry.slug}` },
          { title: service.name, href: `/services/${service.pillar}/${service.slug}` },
        ],
        jsonLdData: buildIndustryServiceSchema(industry, service),
      }
    }

    case 'city-service': {
      const { country, city, service } = props
      return {
        heroLabel: `${service.name.toUpperCase()} IN ${city.name.toUpperCase()}`,
        heroH1: `${service.name} in`,
        heroAccent: `${city.name}.`,
        heroDescription: `${service.shortDescription} Serving businesses in ${city.name}, ${country.name} with city-specific keyword targeting, local link building, and Google Business Profile management.`,
        valueProps: CITY_SERVICE_VALUE_PROPS,
        faqItems: CITY_SERVICE_FAQS,
        faqTitle: `${service.name} in ${city.name} — frequently asked questions`,
        relatedLinks: [
          {
            title: `SEO in ${country.name}`,
            description: `All SEO services for businesses in ${country.name}.`,
            href: `/locations/${country.slug}`,
          },
          {
            title: service.name,
            description: service.shortDescription,
            href: `/services/${service.pillar}/${service.slug}`,
          },
        ],
        subpageNavHeading: `Other cities we serve in ${country.name}`,
        subpageNavLinks: country.cities
          .filter((c) => c.slug !== city.slug)
          .slice(0, 6)
          .map((c) => ({
            title: c.name,
            href: `/locations/${country.slug}/${c.slug}/${service.slug}`,
          })),
        jsonLdData: buildCityServiceSchema(country, city, service),
      }
    }
  }
}

/* -------------------------------------------------------------------------- */
/*  Main export — Server Component                                             */
/* -------------------------------------------------------------------------- */

export function EntityPageTemplate(props: EntityPageProps) {
  const content = deriveContent(props)

  return (
    <main className="overflow-hidden">
      {/* JSON-LD schema injection */}
      <JsonLd data={content.jsonLdData} />

      {/* 1. Hero */}
      <EntityHero
        label={content.heroLabel}
        h1={content.heroH1}
        accentPhrase={content.heroAccent}
        description={content.heroDescription}
      />

      {/* 2. Secondary nav — pillar siblings / city list / industry services */}
      {content.subpageNavLinks.length > 0 && (
        <SubpageNav
          heading={content.subpageNavHeading}
          subpages={content.subpageNavLinks}
        />
      )}

      {/* 3. Why TheProjectSEO — 4 value props */}
      <WhySection props={content.valueProps} />

      {/* 4. Related services / pages grid */}
      {content.relatedLinks.length > 0 && (
        <RelatedServicesSection
          subheading="Related Services"
          heading="Extend your organic growth strategy."
          services={content.relatedLinks}
        />
      )}

      {/* 5. FAQ */}
      <FAQSection items={content.faqItems} title={content.faqTitle} />

      {/* 6. Lead form — split layout CTA */}
      <CTAFormSection
        subheading="Ready to Get Started?"
        heading="Let's build your organic growth engine."
        lead="Tell us about your website and goals. We'll review your details and send a custom SEO audit within 2 business days — no automated reports, no sales pitch."
        benefits={[
          'Custom SEO audit for your domain',
          'Competitor gap analysis included',
          'Actionable roadmap, not a slide deck',
        ]}
        submitText="Get Your Free SEO Audit"
        formVariant="compact"
      />

      <Footer />
    </main>
  )
}
