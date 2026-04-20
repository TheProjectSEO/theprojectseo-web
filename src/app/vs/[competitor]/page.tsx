import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { CheckIcon } from '@/components/check-icon'
import { competitors, getCompetitorBySlug } from '@/data/competitors'

/* -------------------------------------------------------------------------- */
/* Static params                                                               */
/* -------------------------------------------------------------------------- */

export const dynamicParams = false

export function generateStaticParams() {
  return competitors.map((c) => ({ competitor: c.slug }))
}

/* -------------------------------------------------------------------------- */
/* Metadata                                                                   */
/* -------------------------------------------------------------------------- */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ competitor: string }>
}): Promise<Metadata> {
  const { competitor } = await params
  const c = getCompetitorBySlug(competitor)
  if (!c) return {}

  return {
    title: `${c.tagline} | TheProjectSEO`,
    description:
      `A fair, data-driven comparison of ${c.name} vs TheProjectSEO. Learn what each does, who it is for, and when to choose which.`,
    alternates: {
      canonical: `/vs/${c.slug}`,
    },
    openGraph: {
      title: `${c.tagline} | TheProjectSEO`,
      description: `Honest comparison: ${c.name} vs TheProjectSEO.`,
      url: `https://theprojectseo.com/vs/${c.slug}`,
      siteName: 'TheProjectSEO',
      locale: 'en_US',
      type: 'article',
    },
  }
}

/* -------------------------------------------------------------------------- */
/* Page                                                                       */
/* -------------------------------------------------------------------------- */

export default async function CompetitorPage({
  params,
}: {
  params: Promise<{ competitor: string }>
}) {
  const { competitor } = await params
  const c = getCompetitorBySlug(competitor)
  if (!c) notFound()

  const otherComparisons = competitors.filter((x) => x.slug !== c.slug)

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `https://theprojectseo.com/vs/${c.slug}`,
          headline: c.tagline,
          description: c.description,
          url: `https://theprojectseo.com/vs/${c.slug}`,
          author: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          publisher: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: c.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/vs" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">
                Comparisons
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">
                vs {c.name}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="font-mono text-xs uppercase tracking-wider text-ash border border-border px-2 py-0.5">
                {c.category === 'tool' ? 'Tool Comparison' : 'Agency Comparison'}
              </span>
            </div>
            <h1 className="font-display text-[clamp(40px,5.5vw,80px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              {c.tagline}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              {c.description}
            </p>
          </div>
        </Container>
      </div>

      {/* Strengths comparison */}
      <div className="bg-paper py-20">
        <Container>
          <div className="mb-12">
            <Subheading as="h2">Where each excels</Subheading>
            <Heading as="h2" className="mt-2">
              Honest about both sides.
            </Heading>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
            {/* Their strengths */}
            <div className="bg-cream p-10">
              <h3 className="font-heading text-xl font-semibold text-ink mb-6">
                {c.name} strengths
              </h3>
              <ul className="space-y-4">
                {c.theirStrengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-slate">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-slate" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>

            {/* Our strengths */}
            <div className="bg-paper p-10">
              <h3 className="font-heading text-xl font-semibold text-ink mb-6">
                TheProjectSEO strengths
              </h3>
              <ul className="space-y-4">
                {c.ourStrengths.map((strength, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-slate">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 fill-accent" />
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </div>

      {/* Comparison table */}
      <div className="bg-cream py-20">
        <Container>
          <div className="mb-10">
            <Subheading as="h2">Side by side</Subheading>
            <Heading as="h2" className="mt-2">
              Dimension-by-dimension comparison.
            </Heading>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border-strong">
                  <th className="py-4 pr-6 text-left font-mono text-xs uppercase tracking-wider text-ash w-1/3">
                    Dimension
                  </th>
                  <th className="py-4 px-6 text-left font-mono text-xs uppercase tracking-wider text-ash w-1/3">
                    {c.name}
                  </th>
                  <th className="py-4 pl-6 text-left font-mono text-xs uppercase tracking-wider text-accent w-1/3">
                    TheProjectSEO
                  </th>
                </tr>
              </thead>
              <tbody>
                {c.comparisonTable.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-border ${i % 2 === 0 ? 'bg-paper' : 'bg-cream'}`}
                  >
                    <td className="py-4 pr-6 font-heading text-sm font-semibold text-ink">
                      {row.dimension}
                    </td>
                    <td className="py-4 px-6 text-sm text-slate">{row.them}</td>
                    <td className="py-4 pl-6 text-sm text-ink font-medium">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </div>

      {/* When to pick each */}
      <div className="bg-ink py-20">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-3">
              The honest answer
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-semibold text-white leading-tight">
              When should you pick each?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-2">
            <div className="bg-white/5 p-10">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Pick {c.name} when...
              </h3>
              <p className="text-base leading-relaxed text-white/70">{c.whenToPickThem}</p>
            </div>
            <div className="bg-white/10 p-10">
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Pick TheProjectSEO when...
              </h3>
              <p className="text-base leading-relaxed text-white/70">{c.whenToPickUs}</p>
            </div>
          </div>
        </Container>
      </div>

      {/* Our unique value */}
      <div className="bg-paper py-20">
        <Container>
          <div className="max-w-3xl">
            <Subheading as="h2">Our unique position</Subheading>
            <Heading as="h2" className="mt-2">
              What makes TheProjectSEO different from every option on this page.
            </Heading>
            <div className="mt-10 grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-3">
              {[
                {
                  title: 'Claude-native stack',
                  desc: '67 custom Skills, OpenClaw 12-agent framework, fine-tuned SEO model (Qwen3.5-27B). Not an AI add-on. The actual operating infrastructure.',
                },
                {
                  title: 'BigQuery + Python',
                  desc: 'Client data lives in BigQuery. Cross-referenced from GSC, GA4, Google Ads, CRM. Attribution that most agencies cannot build.',
                },
                {
                  title: 'AEO by default',
                  desc: 'Answer Engine Optimization built into every SEO engagement. AI search visibility is not optional in 2026 — and we treat it that way.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-paper p-8">
                  <h3 className="font-heading text-base font-semibold text-ink mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* FAQ */}
      <div className="bg-cream py-20">
        <Container>
          <FAQAccordion
            title={`${c.name} vs TheProjectSEO: frequently asked questions`}
            items={c.faqs}
          />
        </Container>
      </div>

      {/* Other comparisons */}
      <div className="bg-paper py-16 border-t border-border">
        <Container>
          <div className="mb-8">
            <Subheading>More comparisons</Subheading>
            <h2 className="font-heading text-2xl font-semibold text-ink mt-1">
              Compare TheProjectSEO to other options.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-3">
            {otherComparisons.slice(0, 3).map((other) => (
              <Link
                key={other.slug}
                href={`/vs/${other.slug}`}
                className="group bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-heading text-base font-semibold text-ink group-hover:text-accent mb-2">
                  vs {other.name}
                </h3>
                <p className="text-sm text-slate line-clamp-2">{other.description.split('.')[0]}.</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <Link
              href="/vs"
              className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent"
            >
              View all comparisons &rarr;
            </Link>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="bg-cream py-20 border-t border-border">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <Subheading>Still deciding?</Subheading>
            <Heading as="h2" className="mt-2">
              One conversation is worth more than this page.
            </Heading>
            <Lead className="mt-6 mx-auto">
              Tell us your situation. We will give you our honest assessment — including whether
              {' '}{c.name} might be the right choice for your specific needs.
            </Lead>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
              >
                Talk to Us
              </Link>
              <Link
                href="/vs"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-emphasis text-stone font-heading font-medium text-base transition-all duration-200 hover:bg-paper"
              >
                All Comparisons
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
