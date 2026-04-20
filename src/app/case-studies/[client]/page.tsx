import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import { CTAFormSection } from '@/components/service-page-sections'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { CheckIcon } from '@/components/check-icon'
import { ArrowLeft, Clock } from 'lucide-react'
import { caseStudies, getCaseStudyBySlug } from '@/data/case-studies'

/* -------------------------------------------------------------------------- */
/* Static params + dynamic routes disabled                                      */
/* -------------------------------------------------------------------------- */

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ client: c.slug }))
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                     */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ client: string }>
}): Promise<Metadata> {
  const { client } = await params
  const cs = getCaseStudyBySlug(client)
  if (!cs) return {}

  return {
    title: `${cs.client}: SEO Case Study | TheProjectSEO`,
    description: `${cs.headline}. Case study covering SEO strategy, content architecture, and organic growth for ${cs.client}. Full results pending client sign-off.`,
    alternates: {
      canonical: `/case-studies/${cs.slug}`,
    },
    openGraph: {
      title: `${cs.client} SEO Case Study | TheProjectSEO`,
      description: `${cs.headline}. Case study in finalization. Summary available now, full results released once ${cs.client} confirms sign-off.`,
      url: `https://theprojectseo.com/case-studies/${cs.slug}`,
      siteName: 'TheProjectSEO',
      locale: 'en_US',
      type: 'article',
    },
  }
}

/* -------------------------------------------------------------------------- */
/* Industry context map                                                         */
/* -------------------------------------------------------------------------- */

const industryContext: Record<
  string,
  { label: string; scope: string; timeframe: string; approach: string }
> = {
  'real-estate': {
    label: 'Real Estate & Storage',
    scope: 'Multi-location national SEO across hundreds of service areas',
    timeframe: 'Ongoing engagement, 6+ months',
    approach:
      'Location page architecture, product page optimization, and homepage cannibalization resolution. Salesforce revenue data cross-referenced with GSC to rank markets by actual pipeline contribution.',
  },
  hrtech: {
    label: 'HR Technology',
    scope: 'B2B SaaS SEO for an AI-powered talent acquisition platform',
    timeframe: 'Ongoing engagement, 6+ months',
    approach:
      'Keyword clustering around hiring, recruitment automation, and workforce intelligence. Attribution infrastructure audit covering GA4, GTM, and CRM lead source gaps. Content architecture for /features/ and /hiring/ pages.',
  },
  saas: {
    label: 'B2B SaaS',
    scope: 'Content strategy, technical audit, and brand positioning for SaaS products',
    timeframe: 'Ongoing engagement, 6+ months',
    approach:
      'BOFU-first content approach based on the Sam Dunning framework. Pain-point keywords, service comparison pages, and external listicle placements in industry directories. Local service-area SEO for marketplace products.',
  },
  ai: {
    label: 'AI & Software',
    scope: 'Founder-led content strategy for an AI product with a complex technical audience',
    timeframe: 'Ongoing engagement, 4+ months',
    approach:
      'Full technical SEO audit covering 6-month roadmap. BOFU content architecture targeting buyer-intent keywords. Skills-based content system using a fine-tuned SEO model for citation-grounded output.',
  },
  travel: {
    label: 'Travel & OTA',
    scope: 'Content migration SEO and programmatic page quality improvement at scale',
    timeframe: 'Ongoing engagement, 9+ months',
    approach:
      '917 pages scored, 113 schema injections, 2,106 OG image backfills. Server-side redirect architecture for /blog/ migration. Bulk title rewrites, alt-text improvements, and content depth upgrades for top traffic pages.',
  },
}

/* -------------------------------------------------------------------------- */
/* Challenge / Approach / Results per slug                                      */
/* -------------------------------------------------------------------------- */

type CaseSection = {
  challenge: string
  approachPoints: string[]
  results: Array<{ metric: string; value: string; note: string }>
}

const slugSections: Record<string, CaseSection> = {
  'mobile-modular': {
    challenge:
      'A national modular building brand with 240+ delivery locations was ranking almost exclusively through its homepage. Product pages and location pages had minimal organic visibility. The homepage was outranking the correct product pages for category terms in 45 of 51 states.',
    approachPoints: [
      'Cross-referenced 1,741 delivery cities against GSC data to find location page gaps',
      'Identified 35 states with revenue but no state-level page, covering $77M in Salesforce pipeline',
      'Resolved homepage cannibalization by establishing clear page hierarchy for product categories',
      'Location page expansion strategy ordered by actual revenue per market',
      'Meta title audit across 12 key pages; before/after CTR impact tracked in BigQuery',
    ],
    results: [
      { metric: 'Organic traffic growth', value: 'In progress', note: 'Measurement ongoing' },
      { metric: 'Location gap identified', value: '35 states', note: '$77M+ in uncovered pipeline' },
      { metric: 'Pages with CTR drop reversed', value: '7 of 12', note: 'Post meta title fix' },
    ],
  },
  'mobile-modular-portable-storage': {
    challenge:
      'A portable storage division operating across multiple states had no structured content strategy for storage-specific keywords. Product differentiation between portable storage and modular buildings was unclear to both users and search engines.',
    approachPoints: [
      'Separate keyword architecture for portable storage vs modular building terms',
      'State and city page strategy mapped to actual delivery coverage data',
      'Schema implementation for storage product types and service areas',
      'Content brief framework for location-specific storage demand signals',
    ],
    results: [
      { metric: 'Keywords tracked', value: 'Growing', note: 'Storage-specific terms added' },
      { metric: 'Page coverage', value: 'Expanding', note: 'State pages in development' },
      { metric: 'Campaign scope', value: 'Multi-state', note: 'Ongoing engagement' },
    ],
  },
  'x0pa-ai': {
    challenge:
      'An AI-powered talent acquisition platform had 99.8% of its 168,502 CRM contacts with unknown lead source. GA4 data showed a 2x gap between conversion events and key events, plus a suspected double-counting issue from dual GTM containers. Organic contribution to pipeline was unmeasurable.',
    approachPoints: [
      'Full Freshsales CRM ingest to BigQuery: 168,502 contacts, 21 deals, 21 lead sources',
      'Built three BigQuery attribution views for organic page performance',
      'Identified broken dataLayer variables rendering as literal strings in GTM',
      'GA4 audit found deferred loading causing bounced session undercounting',
      'Delivered 12-action contact page improvement plan with specific CRO priorities',
    ],
    results: [
      { metric: 'CRM contacts ingested', value: '168,502', note: 'Full attribution pipeline built' },
      { metric: 'GTM issues documented', value: '5 critical', note: 'Pending dev implementation' },
      { metric: 'Attribution views built', value: '3', note: 'Organic, channel, funnel' },
    ],
  },
  'acelerar-technologies': {
    challenge:
      'A BPO services company with AI-native capabilities was being positioned in the same category as traditional offshore BPOs. The brand message was not communicating what made the approach different, which was suppressing conversion rates on high-intent pages.',
    approachPoints: [
      'Six-cluster content architecture built around specific BPO service lines',
      'AI-native positioning thread developed to separate from commodity BPO messaging',
      'BOFU-first content strategy targeting buyer-intent keywords in BPO vertical',
      'Link building pipeline built around industry directory placements',
    ],
    results: [
      { metric: 'Content clusters built', value: '6', note: 'Full architecture designed' },
      { metric: 'Positioning direction', value: 'AI-native', note: 'Distinct from commodity BPO' },
      { metric: 'Campaign status', value: 'Active', note: 'Content in production' },
    ],
  },
  sensesbit: {
    challenge:
      'An AI software product with a founder-driven brand needed to build organic presence from a near-zero baseline. Technical SEO issues were blocking crawl efficiency. The content strategy needed to target buyers, not just readers.',
    approachPoints: [
      'Full technical SEO audit with a 6-month ordered roadmap',
      'BOFU content strategy built around buyer-intent and competitor-comparison keywords',
      'Skills-based content production using fine-tuned SEO model with 100% citation rate',
      'Schema markup framework for AI product and organization entity types',
    ],
    results: [
      { metric: 'Technical issues documented', value: 'Full audit', note: '6-month roadmap delivered' },
      { metric: 'Content approach', value: 'BOFU-first', note: 'Buyer-intent keyword focus' },
      { metric: 'Campaign status', value: 'Phase 1 live', note: 'Content in production' },
    ],
  },
  'helpling-singapore': {
    challenge:
      'A home-cleaning marketplace serving Singapore needed local SEO improvements to compete for service-area and category terms. The existing content structure did not support the city-level and neighborhood-level keyword patterns that drive local service conversions.',
    approachPoints: [
      'Local keyword research across Singapore districts and service types',
      'Schema implementation for LocalBusiness and Service entities',
      'Content strategy for service-specific and location-specific landing pages',
      'On-page optimization aligned to local search intent signals',
    ],
    results: [
      { metric: 'Geographic coverage', value: 'Singapore-wide', note: 'District and area pages' },
      { metric: 'Schema types implemented', value: 'LocalBusiness, Service', note: 'Entity structure built' },
      { metric: 'Campaign status', value: 'Active', note: 'Ongoing optimization' },
    ],
  },
  cuddlynest: {
    challenge:
      'An OTA with thousands of accommodation pages needed a structured content migration without traffic loss, plus systematic quality improvements across a large programmatic page set. Multiple technical issues were suppressing crawl efficiency and index quality.',
    approachPoints: [
      '917 pages scored across quality dimensions, 113 schema injections completed',
      '2,106 OG image backfills for social sharing and indexing signal improvement',
      'Proxy-based redirect architecture for /blog/ migration without slug conflicts',
      'Server-side configuration to strip /blog/ prefix in Nginx redirect rules',
      'Bulk content improvement sprint: alt-text, title rewrites, content depth',
    ],
    results: [
      { metric: 'Pages scored', value: '917', note: 'Quality audit complete' },
      { metric: 'Schema injected', value: '113 pages', note: 'Structured data coverage expanded' },
      { metric: 'OG images backfilled', value: '2,106', note: 'Social and indexing signal fixed' },
    ],
  },
  clavio: {
    challenge:
      'An AI data-analytics platform needed to build organic presence from launch. Without established domain authority, the content strategy had to target high-intent, lower-competition keywords first and build entity credibility through structured data and AEO optimization.',
    approachPoints: [
      'Launch keyword strategy focused on product-specific and category-defining terms',
      'AEO (Answer Engine Optimization) content architecture for AI search visibility',
      'Schema markup framework for SoftwareApplication and Organization entities',
      'Content brief system using fine-tuned SEO model for consistent output quality',
    ],
    results: [
      { metric: 'Content strategy', value: 'Launch-ready', note: 'AEO and SEO integrated' },
      { metric: 'Schema coverage', value: 'Full entity setup', note: 'Organization and product types' },
      { metric: 'Campaign status', value: 'Active', note: 'Building from launch baseline' },
    ],
  },
}

/* -------------------------------------------------------------------------- */
/* FAQ items (process-focused, not client-specific)                             */
/* -------------------------------------------------------------------------- */

const faqItems = [
  {
    question: 'Why are full metrics withheld from these case studies?',
    answer:
      'Every client listed here is an active engagement. Publishing specific traffic numbers, revenue data, or GSC screenshots without written approval is a trust violation we will not make. Summaries describe the real scope and approach. Once each client confirms, the full study goes live with actual data.',
  },
  {
    question: 'How does TheProjectSEO measure SEO success?',
    answer:
      'We track organic traffic, keyword rankings, CTR from GSC, and pipeline attribution from CRM data. For clients with BigQuery access, we build full attribution views connecting organic sessions to revenue. Reporting is weekly, using automated scripts not manually assembled slides.',
  },
  {
    question: 'What does a typical engagement look like in the first 90 days?',
    answer:
      'First 30 days: technical audit, baseline data pull from GSC and GA4, keyword clustering, and content architecture design. Days 31-60: on-page fixes, first content production, schema implementation. Days 61-90: second content batch, backlink outreach started, first impact measurement against baseline.',
  },
  {
    question: 'Do you work with companies that have no existing SEO traction?',
    answer:
      'Yes, and several clients in this list started with effectively zero organic traffic. The approach for a near-zero baseline is different from optimizing an established site: we build the technical foundation first, then target very specific buyer-intent terms before going for broader category keywords.',
  },
]

/* -------------------------------------------------------------------------- */
/* Page                                                                         */
/* -------------------------------------------------------------------------- */

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ client: string }>
}) {
  const { client } = await params
  const cs = getCaseStudyBySlug(client)
  if (!cs) notFound()

  const ctx = industryContext[cs.industry]
  const sections = slugSections[cs.slug]

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `https://theprojectseo.com/case-studies/${cs.slug}`,
          headline: `${cs.client}: ${cs.headline}`,
          description: `SEO case study for ${cs.client}. ${cs.headline}. Covers the challenge, approach, and results from an active TheProjectSEO engagement.`,
          author: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: `https://theprojectseo.com/case-studies/${cs.slug}`,
          about: {
            '@type': 'Service',
            name: 'Search Engine Optimization',
            provider: {
              '@type': 'Organization',
              name: 'TheProjectSEO',
            },
          },
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ash mb-8 hover:text-accent transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              All case studies
            </Link>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              {ctx?.label ?? cs.industry}
            </p>
            <h1 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink max-w-4xl">
              {cs.headline}
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-stone max-w-2xl">
              {cs.client}
            </p>
          </div>
        </Container>
      </div>

      {/* Status banner */}
      <div className="bg-cream border-y border-border py-6">
        <Container>
          <div className="flex items-start gap-4 max-w-3xl">
            <Clock className="size-5 shrink-0 text-ash mt-0.5" />
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-1">
                Case study in finalization
              </p>
              <p className="text-sm leading-relaxed text-slate">
                The summary below describes the actual scope, approach, and representative results from this engagement. Full study with specific GSC data, traffic numbers, and revenue attribution is released once {cs.client} provides written sign-off. Contact us if you want the detailed version sooner.
              </p>
            </div>
          </div>
        </Container>
      </div>

      {/* Context bar */}
      <div className="bg-paper border-b border-border py-10">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 max-w-4xl">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-2">Industry</p>
              <p className="text-sm font-medium text-ink">{ctx?.label ?? cs.industry}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-2">Scope</p>
              <p className="text-sm text-slate">{ctx?.scope ?? 'Multi-channel SEO engagement'}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-2">Timeframe</p>
              <p className="text-sm text-slate">{ctx?.timeframe ?? 'Ongoing engagement'}</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Challenge section */}
      <div className="bg-paper py-24">
        <Container>
          <div className="max-w-4xl">
            <Subheading as="h2" className="mb-4">The Challenge</Subheading>
            <p className="text-base leading-relaxed text-slate">
              {sections?.challenge ?? 'Challenge details available in the full case study. Contact us for a summary call.'}
            </p>
          </div>
        </Container>
      </div>

      {/* Approach section */}
      <div className="bg-cream py-24">
        <Container>
          <div className="max-w-4xl">
            <Subheading as="h2" className="mb-4">Our Approach</Subheading>
            {ctx?.approach && (
              <p className="text-base leading-relaxed text-slate mb-8">{ctx.approach}</p>
            )}
            {sections?.approachPoints && (
              <ul className="space-y-4">
                {sections.approachPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-1" />
                    <span className="text-sm leading-relaxed text-slate">{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </div>

      {/* Results section */}
      <div className="bg-ink py-24">
        <Container>
          <div className="text-center mb-16">
            <Subheading dark as="h2">Results</Subheading>
            <Heading as="h3" dark className="mt-2">
              What we measured.
            </Heading>
          </div>

          <div className="max-w-3xl mx-auto">
            {sections?.results ? (
              <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-3">
                {sections.results.map((r, i) => (
                  <div key={i} className="bg-ink p-8">
                    <div className="font-mono text-[clamp(28px,4vw,40px)] font-black text-white mb-2">
                      {r.value}
                    </div>
                    <div className="text-sm text-white/80 mb-1">{r.metric}</div>
                    <div className="text-xs text-white/40">{r.note}</div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-white/60 text-center text-sm">
                Full results available once client sign-off is complete. Contact us for details.
              </p>
            )}
          </div>
        </Container>
      </div>

      {/* Methodology link */}
      <div className="bg-paper py-16 border-b border-border">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-4">How we work</p>
            <p className="text-base leading-relaxed text-slate mb-6">
              Every engagement documented here runs through the same operating system: a 67-skill agent stack, fine-tuned SEO model with 100% citation rate, and BigQuery data infrastructure connecting GSC, GA4, and CRM data for attribution.
            </p>
            <Link
              href="/methodology"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-ink transition-colors"
            >
              Read our methodology
              <ArrowLeft className="size-4 rotate-180" />
            </Link>
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <div className="bg-cream py-24">
        <Container>
          <FAQAccordion
            title="Questions about this engagement"
            items={faqItems}
          />
        </Container>
      </div>

      {/* CTA */}
      <CTAFormSection
        subheading="Want the detailed study?"
        heading="Let's talk through this engagement."
        lead="We can walk you through the full approach, data infrastructure, and results on a 30-minute call. No pitch deck, just specifics."
        benefits={[
          'Access to the full case study on request',
          'Comparable scope scoped for your business',
          'Written proposal within 48 hours',
        ]}
        submitText="Request the Full Study"
      />

      <Footer />
    </main>
  )
}
