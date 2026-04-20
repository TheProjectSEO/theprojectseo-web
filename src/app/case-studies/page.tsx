import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { CTAFormSection } from '@/components/service-page-sections'
import { caseStudies } from '@/data/case-studies'
import { ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Case Studies & Client Results | TheProjectSEO',
  description:
    'Real SEO results across B2B SaaS, real estate, travel, HR tech, and AI verticals. Eight client case studies covering national SEO, content strategy, AI-native positioning, and multi-location campaigns.',
  alternates: {
    canonical: '/case-studies',
  },
  openGraph: {
    title: 'SEO Case Studies & Client Results | TheProjectSEO',
    description:
      'Eight client case studies across five industries. National SEO, BOFU content, AI-native positioning, OTA migration, and multi-location campaigns. Real work, real clients, pending sign-off.',
    url: 'https://theprojectseo.com/case-studies',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Industry group labels                                                        */
/* -------------------------------------------------------------------------- */

const industryLabels: Record<string, string> = {
  'real-estate': 'Real Estate & Storage',
  hrtech: 'HR Technology',
  saas: 'B2B SaaS',
  ai: 'AI & Software',
  travel: 'Travel & OTA',
}

/* -------------------------------------------------------------------------- */
/* Group case studies by industry                                               */
/* -------------------------------------------------------------------------- */

function groupByIndustry() {
  const groups: Record<string, typeof caseStudies> = {}
  for (const cs of caseStudies) {
    if (!groups[cs.industry]) groups[cs.industry] = []
    groups[cs.industry].push(cs)
  }
  return groups
}

/* -------------------------------------------------------------------------- */
/* Card component                                                               */
/* -------------------------------------------------------------------------- */

function CaseStudyCard({ cs }: { cs: (typeof caseStudies)[0] }) {
  const isPending = cs.permissionsStatus === 'pending'

  return (
    <div className="bg-paper p-8 flex flex-col">
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-3">
        {industryLabels[cs.industry] ?? cs.industry}
      </p>
      <h3 className="font-heading text-lg font-semibold text-ink mb-3 leading-snug">
        {cs.client}
      </h3>
      <p className="text-sm leading-relaxed text-slate mb-6 flex-1">
        {cs.headline}
      </p>

      {isPending ? (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs text-ash font-mono uppercase tracking-[0.1em]">
            <Clock className="size-3.5 shrink-0" />
            Case study in progress
          </div>
          <Link
            href={`/case-studies/${cs.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
          >
            View summary
            <ArrowRight className="size-4" />
          </Link>
        </div>
      ) : (
        <Link
          href={`/case-studies/${cs.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-accent transition-colors hover:text-ink"
        >
          View case study
          <ArrowRight className="size-4" />
        </Link>
      )}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page                                                                         */
/* -------------------------------------------------------------------------- */

export default function CaseStudiesHubPage() {
  const grouped = groupByIndustry()

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://theprojectseo.com/case-studies',
          name: 'SEO Case Studies & Client Results',
          description:
            'Client case studies from TheProjectSEO covering national SEO, B2B SaaS content strategy, AI-native positioning, OTA migration, and multi-location campaigns.',
          url: 'https://theprojectseo.com/case-studies',
          publisher: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 max-w-3xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Client Work
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              SEO Case Studies{' '}
              <em className="text-accent italic">&amp; Results</em>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              Eight active client engagements across five industries. National multi-location campaigns, B2B SaaS content architecture, AI-native brand positioning, and OTA content migration. Full studies are released once each client signs off. Summaries are available now.
            </p>
          </div>
        </Container>
      </div>

      {/* Stats bar */}
      <div className="bg-cream border-y border-border py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '8', label: 'Active client engagements' },
              { value: '5', label: 'Industries covered' },
              { value: '15+', label: 'Clients on the stack' },
              { value: 'Tier 1', label: 'All case-study clients' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Case study cards grouped by industry */}
      <div className="bg-paper py-24">
        <Container>
          {Object.entries(grouped).map(([industry, studies]) => (
            <div key={industry} className="mb-16 last:mb-0">
              <div className="mb-8">
                <Subheading as="h2">{industryLabels[industry] ?? industry}</Subheading>
              </div>
              <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
                {studies.map((cs) => (
                  <CaseStudyCard key={cs.slug} cs={cs} />
                ))}
              </div>
            </div>
          ))}
        </Container>
      </div>

      {/* Permissions note */}
      <div className="bg-cream py-16 border-y border-border">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-4">A note on permissions</p>
            <p className="text-base leading-relaxed text-slate">
              All eight clients are active engagements. Full case studies with specific metrics, GSC data, and attribution details require written sign-off before publication. Every summary page describes the real scope and approach. Numbers are withheld until each client confirms.
            </p>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <CTAFormSection
        subheading="Don't see your industry?"
        heading="Tell us what you're working on."
        lead="We take on two to three new clients per quarter. If the fit is right, we will scope the engagement and show you exactly what we would do before you commit."
        benefits={[
          'Free 30-minute strategy call',
          'Written proposal within 48 hours',
          'No retainer commitment until you see the scope',
        ]}
        submitText="Start the Conversation"
      />

      <Footer />
    </main>
  )
}
