import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { CTAFormSection } from '@/components/service-page-sections'
import { Heading, Lead, Subheading } from '@/components/text'
import { caseStudies } from '@/data/case-studies'
import { ORGANIZATION_REF, SITE_URL } from '@/lib/organization-schema'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO & AI Search Case Studies with Sourced Results | TheProjectSEO',
  description:
    'Review approved TheProjectSEO case studies with metric definitions, reporting windows, methods, limitations, and empty evidence slots for final screenshots.',
  alternates: { canonical: '/case-studies' },
  openGraph: {
    title: 'SEO & AI Search Case Studies with Sourced Results',
    description:
      'First-party project evidence from Expressway.PH and TaxCalculator.com.ph, reported with source and scope limitations.',
    url: `${SITE_URL}/case-studies`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & AI Search Case Studies with Sourced Results',
    description:
      'See approved search results, how they were measured, and what the evidence does not prove.',
  },
}

const standards = [
  {
    title: 'Named project',
    body: 'The public page identifies the project instead of presenting an anonymous result that a reader cannot contextualize.',
  },
  {
    title: 'Permission or ownership',
    body: 'Only evidence approved for publication or belonging to a first-party owned project is included in the public case-study collection.',
  },
  {
    title: 'Metric definition',
    body: 'Traffic estimates, Search Console impressions, clicks, keywords, AI responses, citations, referrals, leads, and revenue are not treated as interchangeable.',
  },
  {
    title: 'Source and window',
    body: 'Every headline figure names its platform, reporting range or capture date, and whether it is first-party data or a third-party estimate.',
  },
  {
    title: 'Method and interpretation',
    body: 'The page explains the product or search problem, work performed, operating system, and narrow lesson supported by the observation.',
  },
  {
    title: 'Limitations',
    body: 'The study states what the result cannot establish, including causality, every user prompt, audited revenue, or a guaranteed client outcome.',
  },
]

const metricGuide = [
  {
    metric: 'Search Console impressions',
    means: 'Eligible result appearances recorded under Google Search Console reporting rules.',
    doesNotMean: 'Visits, leads, revenue, unique people, or a guaranteed position.',
  },
  {
    metric: 'Search Console clicks',
    means: 'Clicks from Google Search results recorded for the verified property and selected dimensions.',
    doesNotMean: 'Engaged sessions, conversions, or revenue without additional analytics and attribution.',
  },
  {
    metric: 'Estimated organic traffic',
    means: 'A third-party model based on observed keywords, positions, volumes, and expected clicks.',
    doesNotMean: 'Exact first-party analytics sessions or Google-confirmed traffic.',
  },
  {
    metric: 'Organic keywords',
    means: 'Queries observed for the domain inside the provider’s keyword database at the capture date.',
    doesNotMean: 'Every query, stable rankings, commercial relevance, or traffic on its own.',
  },
  {
    metric: 'Tracked AI responses',
    means: 'Responses associated with a domain or page in a provider’s sampled prompt and answer index.',
    doesNotMean: 'Every real conversation, referral traffic, leads, source influence, or model-wide visibility.',
  },
  {
    metric: 'AI referral sessions',
    means: 'Visits attributed to a recognizable assistant referrer under the analytics configuration.',
    doesNotMean: 'All AI-assisted journeys, citations without clicks, or correct last-touch revenue attribution.',
  },
]

const faqItems = [
  {
    question: 'Why are there only two public case studies?',
    answer:
      'They are the two projects with the strongest approved public evidence in the current collection. Additional work remains confidential or will be added after the evidence and permissions are confirmed. A smaller verified collection is more useful than a larger collection of unsupported claims.',
  },
  {
    question: 'Are Expressway.PH and TaxCalculator.com.ph client projects?',
    answer:
      'They are first-party projects owned and operated by the project owner. That gives permission to publish the supplied snapshots, but it does not turn a third-party estimate into first-party analytics or make the result representative of client engagements.',
  },
  {
    question: 'Does TheProjectSEO guarantee results like these?',
    answer:
      'No. The projects differ in product usefulness, market, competition, domain history, sources, authority, implementation, maintenance, and measurement. The methodology can be applied to another situation; the outcome and timetable cannot be promised.',
  },
  {
    question: 'Why are some screenshot areas still empty?',
    answer:
      'Where a client-approved capture is unavailable, the page uses a clearly labeled explanatory graphic instead of simulated evidence. First-party screenshots are added only with the necessary context and permission.',
  },
  {
    question: 'How does TheProjectSEO measure AI-search visibility?',
    answer:
      'The method can include versioned prompt cohorts, platforms, markets, repeated observations, brands, citations, sources, factual accuracy, answer position, sentiment where appropriate, and recognizable referral traffic. Each measure has limitations, and synthetic prompts are not presented as a complete record of real user behavior.',
  },
  {
    question: 'Can I request details from a private client engagement?',
    answer:
      'TheProjectSEO will not disclose confidential client metrics, CRM data, technical findings, or unpublished commercial information without permission. A proposal can explain the relevant methodology and approved evidence without using another client’s private data.',
  },
]

export default function CaseStudiesPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'CollectionPage',
              '@id': `${SITE_URL}/case-studies#collection`,
              url: `${SITE_URL}/case-studies`,
              name: 'SEO and AI search case studies',
              description: metadata.description,
              dateModified: '2026-07-28',
              author: {
                '@type': 'Person',
                name: 'Aditya Aman',
                url: `${SITE_URL}/company`,
              },
              publisher: ORGANIZATION_REF,
              hasPart: caseStudies.map((caseStudy) => ({
                '@type': 'Article',
                '@id': `${SITE_URL}/case-studies/${caseStudy.slug}#article`,
                name: `${caseStudy.client} SEO case study`,
                url: `${SITE_URL}/case-studies/${caseStudy.slug}`,
              })),
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                {
                  '@type': 'ListItem',
                  position: 1,
                  name: 'Home',
                  item: SITE_URL,
                },
                {
                  '@type': 'ListItem',
                  position: 2,
                  name: 'Case studies',
                  item: `${SITE_URL}/case-studies`,
                },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: faqItems.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
              })),
            },
          ],
        }}
      />

      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="py-20 sm:py-28">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Approved first-party evidence · Updated July 28, 2026
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,104px)] font-medium leading-[0.93] tracking-[-0.04em] text-ink">
              SEO case studies with{' '}
              <em className="text-accent">sources, windows, and limits.</em>
            </h1>
            <Lead className="mt-8 max-w-3xl">
              Two named projects. Every public number is labeled by source and
              reporting context. Every study explains the system behind the
              result and what the observation cannot prove.
            </Lead>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="#approved-studies">Review the evidence</Button>
              <Button href="/methodology" variant="outline">
                See how we work
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Subheading>Direct answer</Subheading>
              <Heading as="h2" className="mt-3">
                What results can TheProjectSEO publicly show?
              </Heading>
            </div>
            <div className="space-y-6 text-base leading-8 text-slate">
              <p>
                Expressway.PH had 49.2K estimated monthly organic traffic,
                6.8K organic keywords, 3.4K AI Overview responses, and 2.4K
                ChatGPT responses in a July 2026 Ahrefs snapshot supplied by
                the project owner.
              </p>
              <p>
                TaxCalculator.com.ph had 32.3K Google Search impressions and
                335 clicks in the supplied three-month Search Console view as
                of July 2026. The site launched in June 2026, so the case
                reports an early baseline rather than projecting a mature
                growth rate.
              </p>
              <p>
                These are owned projects and point-in-time observations. They
                are not average client results, audited revenue, controlled
                experiments, or promises that another site will achieve the
                same scale or timetable.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="approved-studies" className="scroll-mt-12 bg-paper py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Approved studies</Subheading>
            <Heading as="h2" className="mt-3">
              Search products built for different user tasks.
            </Heading>
            <Lead className="mt-6">
              One is a broad, maintained transport information product. The
              other is a focused finance utility launched from a new-domain
              baseline. Their metrics should not be compared as if they
              represent the same product or reporting system.
            </Lead>
          </div>
          <div className="mt-14 grid gap-px bg-border-strong lg:grid-cols-2">
            {caseStudies.map((caseStudy) => (
              <article key={caseStudy.slug} className="flex flex-col bg-paper p-8 sm:p-10">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {caseStudy.industryLabel}
                </p>
                <h3 className="mt-5 font-display text-4xl font-medium leading-tight text-ink">
                  {caseStudy.client}
                </h3>
                <p className="mt-5 text-base leading-8 text-slate">
                  {caseStudy.headline}
                </p>
                <div className="mt-8 border-y border-border-strong py-6">
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    Headline observation
                  </p>
                  <p className="mt-3 font-heading text-xl font-semibold text-ink">
                    {caseStudy.headlineMetric}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-ash">
                    Reporting context: {caseStudy.reportingDate}
                  </p>
                </div>
                <p className="mt-7 line-clamp-5 text-sm leading-7 text-slate">
                  {caseStudy.summary}
                </p>
                <Link
                  href={`/case-studies/${caseStudy.slug}`}
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-accent transition-colors hover:text-ink"
                >
                  Read the sourced case study
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading dark>Publication standard</Subheading>
            <Heading as="h2" dark className="mt-3">
              What must a public case study include?
            </Heading>
            <p className="mt-6 text-lg leading-8 text-white/70">
              A persuasive result still needs enough context for a reader to
              interpret it. These six checks control what enters the public
              collection.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {standards.map((standard, index) => (
              <article key={standard.title} className="bg-ink p-8">
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                  {standard.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {standard.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Metric guide</Subheading>
            <Heading as="h2" className="mt-3">
              Which SEO and AI-search metrics are comparable?
            </Heading>
            <Lead className="mt-6">
              Most are not directly comparable. Each describes a different
              observation layer and requires its own source, denominator, and
              limitation.
            </Lead>
          </div>
          <div className="mt-14 overflow-x-auto border border-border-strong bg-paper">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border-strong">
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    Metric
                  </th>
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    What it can mean
                  </th>
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    What it does not mean by itself
                  </th>
                </tr>
              </thead>
              <tbody>
                {metricGuide.map((item) => (
                  <tr key={item.metric} className="border-b border-border last:border-0">
                    <th className="p-5 align-top font-heading text-sm font-semibold text-ink">
                      {item.metric}
                    </th>
                    <td className="p-5 align-top text-sm leading-7 text-slate">
                      {item.means}
                    </td>
                    <td className="p-5 align-top text-sm leading-7 text-slate">
                      {item.doesNotMean}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Subheading>How we report</Subheading>
              <Heading as="h2" className="mt-3">
                Observation before attribution.
              </Heading>
              <p className="mt-6 text-base leading-8 text-slate">
                Search performance can move because of technical releases,
                new pages, content changes, authority, brand demand,
                seasonality, product changes, news, competitor movement,
                tracking changes, or platform updates. A case study should not
                assign every change to the agency simply because the dates
                overlap.
              </p>
              <p className="mt-5 text-base leading-8 text-slate">
                We separate the observed metric from the interpretation, save
                baselines and captures, annotate important changes, and state
                the confidence that a particular intervention influenced the
                outcome. When the evidence only supports correlation, the page
                should say so.
              </p>
            </div>
            <div>
              <Subheading>Evidence standard</Subheading>
              <Heading as="h2" className="mt-3">
                Trust comes from verifiable context.
              </Heading>
              <ul className="mt-6 space-y-4">
                {[
                  'Every published result names the metric source and reporting window.',
                  'Confidential client, CRM, pipeline, and implementation details remain private.',
                  'Observed performance is separated from causal interpretation and future expectations.',
                  'New studies are published only after the name, evidence, context, and permissions are confirmed.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Subheading>Frequently asked questions</Subheading>
              <Heading as="h2" className="mt-3">
                How should you evaluate these results?
              </Heading>
            </div>
            <FAQAccordion title="SEO case-study questions" items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <Subheading>Continue evaluating</Subheading>
              <Heading as="h2" className="mt-3">
                Review the method and commercial model.
              </Heading>
              <p className="mt-5 max-w-3xl text-sm leading-7 text-slate">
                The case studies show observations from two owned projects. The
                methodology explains how work is researched, implemented, and
                verified. Pricing explains the $3,500 monthly starting point,
                scope variables, and boundaries.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/methodology" variant="outline">
                Our methodology
              </Button>
              <Button href="/pricing">SEO pricing</Button>
            </div>
          </div>
        </Container>
      </section>

      <CTAFormSection
        subheading="Build your baseline"
        heading="Measure your search system before promising an outcome."
        lead="Share the site, market, commercial goal, current data, and implementation constraints. We will identify the evidence needed for a responsible opportunity and scope."
        benefits={[
          'Search and AI-answer baseline',
          'Opportunity, constraint, and implementation review',
          'Sources, measurement definitions, and limitations stated upfront',
        ]}
        submitText="Request an assessment"
        formVariant="full"
      />

      <Footer />
    </main>
  )
}
