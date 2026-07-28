import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import { Container } from '@/components/container'
import { EvidencePlaceholder } from '@/components/evidence-placeholder'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { CTAFormSection } from '@/components/service-page-sections'
import { Heading, Lead, Subheading } from '@/components/text'
import { caseStudies, getCaseStudyBySlug } from '@/data/case-studies'
import { ORGANIZATION_REF, SITE_URL } from '@/lib/organization-schema'
import { ArrowLeft } from 'lucide-react'

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ client: caseStudy.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ client: string }>
}): Promise<Metadata> {
  const { client } = await params
  const caseStudy = getCaseStudyBySlug(client)
  if (!caseStudy) return {}

  const title = `${caseStudy.client} SEO Case Study | TheProjectSEO`
  const description = `${caseStudy.summary.slice(0, 150).trim()}…`
  const canonical = `/case-studies/${caseStudy.slug}`

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}${canonical}`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ client: string }>
}) {
  const { client } = await params
  const caseStudy = getCaseStudyBySlug(client)
  if (!caseStudy) notFound()

  const url = `${SITE_URL}/case-studies/${caseStudy.slug}`

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Article',
              '@id': `${url}#article`,
              headline: `${caseStudy.client}: ${caseStudy.headline}`,
              description: caseStudy.summary,
              dateModified: '2026-07-28',
              author: {
                '@type': 'Person',
                name: 'Aditya Aman',
                url: `${SITE_URL}/company`,
              },
              publisher: ORGANIZATION_REF,
              mainEntityOfPage: { '@id': `${url}#webpage` },
              about: [
                { '@type': 'Thing', name: 'Search engine optimization' },
                { '@type': 'Thing', name: caseStudy.industryLabel },
              ],
            },
            {
              '@type': 'WebPage',
              '@id': `${url}#webpage`,
              url,
              name: `${caseStudy.client} SEO case study`,
              description: caseStudy.summary,
              dateModified: '2026-07-28',
              breadcrumb: { '@id': `${url}#breadcrumbs` },
            },
            {
              '@type': 'BreadcrumbList',
              '@id': `${url}#breadcrumbs`,
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
                {
                  '@type': 'ListItem',
                  position: 3,
                  name: caseStudy.client,
                  item: url,
                },
              ],
            },
            {
              '@type': 'FAQPage',
              '@id': `${url}#faq`,
              mainEntity: caseStudy.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.answer,
                },
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
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-ash transition-colors hover:text-accent"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All approved case studies
            </Link>
            <p className="mt-10 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              {caseStudy.industryLabel} · First-party project
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(44px,6.4vw,92px)] font-medium leading-[0.95] tracking-[-0.035em] text-ink">
              {caseStudy.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-8 text-stone">
              {caseStudy.client}
            </p>
            <div className="mt-12 grid gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
              {caseStudy.metrics.map((metric) => (
                <article key={metric.label} className="bg-paper p-6">
                  <p className="font-display text-4xl font-medium text-accent">
                    {metric.value}
                  </p>
                  <p className="mt-3 font-heading text-sm font-semibold text-ink">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase leading-5 tracking-[0.08em] text-ash">
                    {metric.source} · {metric.window}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <section className="border-y border-border bg-cream py-14">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Evidence status
              </p>
              <p className="mt-3 font-heading text-xl font-semibold text-ink">
                Approved first-party case study
              </p>
            </div>
            <div className="space-y-3 text-sm leading-7 text-slate">
              <p>{caseStudy.ownership}.</p>
              <p>
                Figures name the supplied source and reporting window. Image
                slots remain empty until the final screenshots are approved.
                The observations are project-specific and are not presented as
                a client average, forecast, guarantee, or controlled experiment.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <Subheading>Direct answer</Subheading>
              <Heading as="h2" className="mt-3">
                What happened?
              </Heading>
            </div>
            <p className="text-lg leading-9 text-slate">{caseStudy.summary}</p>
          </div>
          <div className="mt-16 grid gap-12 border-t border-border-strong pt-16 lg:grid-cols-2">
            <div>
              <Subheading>The challenge</Subheading>
              <Heading as="h2" className="mt-3">
                What did the product need to solve?
              </Heading>
              <p className="mt-6 text-base leading-8 text-slate">
                {caseStudy.challenge}
              </p>
            </div>
            <div>
              <Subheading>The approach</Subheading>
              <Heading as="h2" className="mt-3">
                Which decisions shaped the work?
              </Heading>
              <ul className="mt-6 space-y-4">
                {caseStudy.approach.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate">
                    <CheckIcon className="mt-1 size-4 shrink-0 fill-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading dark>Operating system</Subheading>
            <Heading as="h2" dark className="mt-3">
              How was the work organized?
            </Heading>
            <p className="mt-6 text-lg leading-8 text-white/70">
              These are the repeatable parts of the project. They describe the
              system without pretending that another site will produce the same
              numbers.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2">
            {caseStudy.system.map((item, index) => (
              <article key={item.title} className="bg-ink p-8">
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Results and definitions</Subheading>
            <Heading as="h2" className="mt-3">
              What did each metric actually measure?
            </Heading>
            <Lead className="mt-6">
              A number is only useful when its source, window, unit, and
              interpretation are visible.
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
                    Value
                  </th>
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    Source and window
                  </th>
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    Interpretation
                  </th>
                </tr>
              </thead>
              <tbody>
                {caseStudy.metrics.map((metric) => (
                  <tr key={metric.label} className="border-b border-border last:border-0">
                    <th className="p-5 align-top font-heading text-sm font-semibold text-ink">
                      {metric.label}
                    </th>
                    <td className="p-5 align-top font-mono text-2xl font-semibold text-accent">
                      {metric.value}
                    </td>
                    <td className="p-5 align-top text-sm leading-7 text-slate">
                      {metric.source}
                      <br />
                      {metric.window}
                    </td>
                    <td className="p-5 align-top text-sm leading-7 text-slate">
                      {metric.interpretation}
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
              <Subheading>Interpretation</Subheading>
              <Heading as="h2" className="mt-3">
                What can we reasonably learn?
              </Heading>
              <p className="mt-6 text-base leading-8 text-slate">
                {caseStudy.interpretation}
              </p>
              <div className="mt-10">
                <Button href="/methodology" variant="outline">
                  Review the full methodology
                </Button>
              </div>
            </div>
            <div>
              <Subheading>Limitations</Subheading>
              <Heading as="h2" className="mt-3">
                What does this evidence not prove?
              </Heading>
              <ul className="mt-6 space-y-4">
                {caseStudy.limitations.map((limitation) => (
                  <li
                    key={limitation}
                    className="border-l-2 border-accent pl-5 text-sm leading-7 text-slate"
                  >
                    {limitation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Evidence gallery</Subheading>
            <Heading as="h2" className="mt-3">
              Approved screenshots to add.
            </Heading>
            <Lead className="mt-6">
              The empty states define the crop and caption required. They do not
              simulate missing proof.
            </Lead>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {caseStudy.evidence.map((item) => (
              <EvidencePlaceholder
                key={item.label}
                label={item.label}
                description={item.description}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Metric documentation</Subheading>
            <Heading as="h2" className="mt-3">
              Definitions and platform guidance.
            </Heading>
            <p className="mt-5 text-sm leading-7 text-slate">
              These links document the metrics or platform rules used to frame
              the case. The project observations themselves come from the
              supplied first-party or third-party captures described above.
            </p>
          </div>
          <div className="mt-10 grid gap-px bg-border-strong lg:grid-cols-2">
            {caseStudy.sourceLinks.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="bg-paper p-6 transition-colors hover:bg-cream"
              >
                <h3 className="font-heading text-base font-semibold text-ink">
                  {source.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate">{source.note}</p>
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm">
            <Link className="font-semibold text-accent underline" href="/services/seo">
              SEO services
            </Link>
            <Link
              className="font-semibold text-accent underline"
              href="/services/ai-search"
            >
              AI-search services
            </Link>
            <Link className="font-semibold text-accent underline" href="/pricing">
              Pricing
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Subheading>Frequently asked questions</Subheading>
              <Heading as="h2" className="mt-3">
                How should this case be read?
              </Heading>
            </div>
            <FAQAccordion
              title={`${caseStudy.client} evidence questions`}
              items={caseStudy.faqs}
            />
          </div>
        </Container>
      </section>

      <CTAFormSection
        subheading="Discuss your search system"
        heading="Start with your baseline, not somebody else’s result."
        lead="Share the site, market, commercial goal, current data, and implementation constraints. We will identify the analysis needed for a responsible opportunity and scope."
        benefits={[
          'Evidence and baseline review',
          'Google and AI-search opportunity model',
          'Implementation ownership, measurement, and limitations stated upfront',
        ]}
        submitText="Request an assessment"
        formVariant="full"
      />

      <Footer />
    </main>
  )
}
