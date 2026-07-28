import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Check, FlaskConical } from 'lucide-react'
import { Container } from '@/components/container'
import { EvidencePlaceholder } from '@/components/evidence-placeholder'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'
import { getGlossaryTermBySlug, glossary } from '@/data/glossary'
import type { GlossaryItem, GlossaryTerm } from '@/data/glossary'

export const dynamicParams = false

export function generateStaticParams() {
  return glossary.map((entry) => ({ term: entry.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ term: string }>
}): Promise<Metadata> {
  const { term } = await params
  const entry = getGlossaryTermBySlug(term)
  if (!entry) return {}

  const canonical = `/resources/glossary/${entry.slug}`
  return {
    title: `${entry.term}: Meaning, Examples & SEO Use`,
    description: entry.shortDefinition,
    alternates: { canonical },
    authors: [{ name: 'Aditya Aman', url: '/company' }],
    openGraph: {
      title: `${entry.term}: Definition, Examples and Practical Use`,
      description: entry.shortDefinition,
      url: `https://theprojectseo.com${canonical}`,
      siteName: 'TheProjectSEO',
      type: 'article',
      modifiedTime: `${entry.updatedAt}T00:00:00.000Z`,
    },
  }
}

function ItemGrid({
  items,
  ordered = false,
}: {
  items: GlossaryItem[]
  ordered?: boolean
}) {
  return (
    <ol className="mt-7 grid gap-3">
      {items.map((item, index) => (
        <li key={item.title} className="grid grid-cols-[34px_1fr] gap-4 border border-border bg-paper p-5">
          <span className="flex size-[34px] items-center justify-center bg-ink font-mono text-xs font-semibold text-white">
            {ordered ? index + 1 : <Check aria-hidden="true" className="size-4" />}
          </span>
          <div>
            <strong className="font-heading text-base font-semibold text-ink">{item.title}</strong>
            <p className="mt-1 text-[15px] leading-7 text-slate">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function ServicePanel({ entry }: { entry: GlossaryTerm }) {
  return (
    <aside className="border border-border-strong bg-ink p-7 text-white sm:p-9">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.13em] text-accent">
        Apply the definition
      </p>
      <h2 className="mt-3 font-heading text-2xl font-semibold">
        Use {entry.term} in a real SEO system
      </h2>
      <p className="mt-4 text-[15px] leading-7 text-white/65">
        The definition is useful only when it improves page ownership, implementation or
        measurement. See the relevant TheProjectSEO service or bring us the page and
        decision you are working through.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href={entry.relatedService.href}
          className="inline-flex items-center justify-center gap-2 bg-accent px-5 py-3 text-sm font-semibold text-white"
        >
          {entry.relatedService.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-white/25 px-5 py-3 text-sm font-semibold text-white"
        >
          Discuss your site
        </Link>
      </div>
    </aside>
  )
}

export default async function GlossaryTermPage({
  params,
}: {
  params: Promise<{ term: string }>
}) {
  const { term } = await params
  const entry = getGlossaryTermBySlug(term)
  if (!entry) notFound()

  const canonical = `https://theprojectseo.com/resources/glossary/${entry.slug}`
  const relatedTerms = entry.relatedSlugs
    .map((slug) => getGlossaryTermBySlug(slug))
    .filter((item): item is GlossaryTerm => Boolean(item))

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': ['DefinedTerm', 'Article'],
          '@id': `${canonical}#term`,
          name: entry.term,
          headline: `${entry.term}: definition and practical SEO use`,
          description: entry.shortDefinition,
          url: canonical,
          dateModified: entry.updatedAt,
          author: { '@type': 'Person', name: 'Aditya Aman', url: 'https://theprojectseo.com/company' },
          publisher: { '@type': 'Organization', '@id': 'https://theprojectseo.com/#organization' },
          citation: entry.sources.map((source) => source.url),
          inDefinedTermSet: {
            '@type': 'DefinedTermSet',
            '@id': 'https://theprojectseo.com/resources/glossary#term-set',
            name: 'TheProjectSEO SEO and AI Search Glossary',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://theprojectseo.com' },
            { '@type': 'ListItem', position: 2, name: 'Resources', item: 'https://theprojectseo.com/resources' },
            { '@type': 'ListItem', position: 3, name: 'SEO Glossary', item: 'https://theprojectseo.com/resources/glossary' },
            { '@type': 'ListItem', position: 4, name: entry.term, item: canonical },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: entry.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      <section className="relative border-b border-border">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="mx-auto max-w-5xl py-16 sm:py-24">
            <nav aria-label="Breadcrumb" className="font-mono text-xs uppercase tracking-[0.12em] text-ash">
              <Link href="/resources" className="hover:text-accent">Resources</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <Link href="/resources/glossary" className="hover:text-accent">Glossary</Link>
            </nav>
            <p className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              SEO glossary · {entry.category.replace('-', ' ')}
            </p>
            <h1 className="mt-5 font-display text-[clamp(48px,7vw,96px)] font-medium leading-[0.95] tracking-[-0.03em] text-ink">
              {entry.term}
            </h1>
            <p className="mt-7 max-w-4xl text-xl leading-9 text-stone">{entry.shortDefinition}</p>
            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-ash">
              <span>Reviewed by Aditya Aman</span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="size-4" />
                Updated {entry.updatedAt}
              </span>
              <span>Live SERP researched</span>
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_290px]">
          <article className="min-w-0">
            <section className="border border-border-strong bg-cream p-7 sm:p-9">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                In plain English
              </p>
              <p className="mt-4 text-lg leading-8 text-ink">{entry.plainEnglish}</p>
            </section>

            <nav aria-label="Page contents" className="mt-10 border-y border-border py-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
                On this page
              </p>
              <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                {[
                  ['why-it-matters', `Why ${entry.term} matters`],
                  ['how-it-works', 'How it works'],
                  ['example', 'Applied example'],
                  ['mistakes', 'Common mistakes'],
                  ['how-to-use', 'How to use it'],
                  ['measurement', 'How to measure it'],
                  ['sources', 'Primary sources'],
                  ['questions', 'Common questions'],
                ].map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="text-slate hover:text-accent">{label}</a>
                ))}
              </div>
            </nav>

            <section id="why-it-matters" className="scroll-mt-24 border-b border-border py-12">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">01</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                Why does {entry.term} matter?
              </h2>
              {entry.whyItMatters.map((paragraph) => (
                <p key={paragraph} className="mt-5 text-[17px] leading-8 text-slate">{paragraph}</p>
              ))}
            </section>

            <section id="how-it-works" className="scroll-mt-24 border-b border-border py-12">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">02</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                How does {entry.term} work?
              </h2>
              <ItemGrid items={entry.howItWorks} />
            </section>

            <section id="example" className="scroll-mt-24 border-b border-border py-12">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">03</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                A practical {entry.term} example
              </h2>
              <div className="mt-7 border-l-4 border-accent bg-cream p-6 sm:p-8">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">Scenario</p>
                <p className="mt-3 text-[17px] leading-8 text-slate">{entry.example.scenario}</p>
                <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">Interpretation</p>
                <p className="mt-3 text-[17px] leading-8 text-ink">{entry.example.interpretation}</p>
              </div>
            </section>

            <ServicePanel entry={entry} />

            <section id="mistakes" className="scroll-mt-24 border-b border-border py-12">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">04</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                Common mistakes and misconceptions
              </h2>
              <ItemGrid items={entry.mistakes} />
            </section>

            <EvidencePlaceholder
              label={`${entry.term} implementation visual`}
              description={`Reserved for the final practitioner diagram or redacted evidence example showing how ${entry.term} is evaluated in a real project.`}
              aspect="wide"
              className="my-12"
            />

            <section id="how-to-use" className="scroll-mt-24 border-b border-border py-12">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">05</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                How to use {entry.term} in practice
              </h2>
              <ItemGrid items={entry.actionSteps} ordered />
            </section>

            <section id="measurement" className="scroll-mt-24 border-b border-border py-12">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">06</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                How should {entry.term} be measured?
              </h2>
              <ul className="mt-7 grid gap-3">
                {entry.measurement.map((item) => (
                  <li key={item} className="flex gap-3 border border-border bg-paper p-5 text-[15px] leading-7 text-slate">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section id="sources" className="scroll-mt-24 border-b border-border py-12">
              <div className="flex items-center gap-3">
                <FlaskConical aria-hidden="true" className="size-5 text-accent" />
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
                  Sources and research method
                </p>
              </div>
              <p className="mt-5 text-[16px] leading-8 text-slate">
                This definition was checked against a live DataForSEO result corpus for its
                target query and scored with TheProjectSEO’s local Python content optimizer.
                Material behavior is supported with the primary references below. Tool metrics
                and emerging industry terms are labelled as such rather than presented as
                official Google systems.
              </p>
              <ul className="mt-7 space-y-5">
                {entry.sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="font-heading text-base font-semibold text-accent underline decoration-accent/30 underline-offset-4">
                      {source.publisher}: {source.name}
                    </a>
                    <p className="mt-1 text-sm leading-6 text-slate">{source.note}</p>
                  </li>
                ))}
              </ul>
            </section>

            <section id="questions" className="scroll-mt-24 py-14">
              <FAQAccordion items={entry.faqs} title={`Questions about ${entry.term}`} />
            </section>
          </article>

          <aside className="h-fit lg:sticky lg:top-24">
            <div className="border border-border-strong bg-paper p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">Relevant service</p>
              <Link href={entry.relatedService.href} className="mt-3 block font-heading text-xl font-semibold text-ink hover:text-accent">
                {entry.relatedService.label}
              </Link>
              <p className="mt-3 text-sm leading-6 text-slate">
                Use the definition yourself, or bring us in when diagnosis and implementation need to work together.
              </p>
              {entry.relatedGuide && (
                <Link href={entry.relatedGuide.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                  {entry.relatedGuide.label}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              )}
            </div>
            <div className="mt-6 border border-border bg-cream p-6">
              <p className="font-heading text-base font-semibold text-ink">Related definitions</p>
              <div className="mt-4 grid gap-3">
                {relatedTerms.map((related) => (
                  <Link key={related.slug} href={`/resources/glossary/${related.slug}`} className="text-sm leading-6 text-slate underline decoration-border-emphasis underline-offset-4 hover:text-accent">
                    {related.term}
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t border-border bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">From definition to implementation</p>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                Apply {entry.term} to the page that matters commercially.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                Share the site, market and current search problem. TheProjectSEO will scope the
                evidence required and connect the term to technical, content, authority or
                AI-search work that can be implemented and measured.
              </p>
            </div>
            <LeadForm variant="compact" submitText="Request a scoped SEO review" />
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}
