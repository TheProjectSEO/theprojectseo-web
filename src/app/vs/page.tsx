import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { competitors } from '@/data/competitors'

export const metadata: Metadata = {
  title: 'TheProjectSEO vs Competitors — Honest Comparisons | TheProjectSEO',
  description:
    'Honest comparisons between TheProjectSEO and SEMrush, Ahrefs, Moz, WebFX, Victorious, and TripleDart. Understand what each does, who it is for, and when to pick which.',
  alternates: {
    canonical: '/vs',
  },
  openGraph: {
    title: 'TheProjectSEO vs Competitors | Honest SEO Comparisons',
    description:
      'Fair, data-driven comparisons between TheProjectSEO and leading SEO tools and agencies.',
    url: 'https://theprojectseo.com/vs',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const tools = competitors.filter((c) => c.category === 'tool')
const agencies = competitors.filter((c) => c.category === 'agency')

export default function VsHubPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://theprojectseo.com/vs',
          name: 'TheProjectSEO vs Competitors',
          description:
            'Fair comparisons between TheProjectSEO and SEO tools and agencies.',
          url: 'https://theprojectseo.com/vs',
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Comparisons
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              TheProjectSEO vs{' '}
              <em className="text-accent italic">the alternatives</em>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              Honest, fair comparisons. We say clearly where competitors are stronger, and where
              our AI-native approach and data infrastructure give clients a different kind of
              advantage. No trash-talking required.
            </p>
          </div>
        </Container>
      </div>

      {/* Tools vs */}
      <div className="bg-paper py-20">
        <Container>
          <div className="mb-10">
            <Subheading as="h2">vs SEO Tools</Subheading>
            <Heading as="h2" className="mt-2">
              Tools give you data. We act on it.
            </Heading>
            <Lead className="mt-4">
              The distinction between an SEO data platform and a managed SEO agency matters.
              These comparisons explain the difference clearly.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-3">
            {tools.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/vs/${competitor.slug}`}
                className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="font-heading text-xl font-semibold text-ink group-hover:text-accent mb-3">
                  vs {competitor.name}
                </h2>
                <p className="text-sm leading-relaxed text-slate mb-5">
                  {competitor.description.split('.')[0]}.
                </p>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  Read comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Agencies vs */}
      <div className="bg-cream py-20">
        <Container>
          <div className="mb-10">
            <Subheading as="h2">vs SEO Agencies</Subheading>
            <Heading as="h2" className="mt-2">
              Agency vs agency — where each model wins.
            </Heading>
            <Lead className="mt-4">
              Different agencies serve different client types. These comparisons are honest
              about where each approach creates real value.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-3">
            {agencies.map((competitor) => (
              <Link
                key={competitor.slug}
                href={`/vs/${competitor.slug}`}
                className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <h2 className="font-heading text-xl font-semibold text-ink group-hover:text-accent mb-3">
                  vs {competitor.name}
                </h2>
                <p className="text-sm leading-relaxed text-slate mb-5">
                  {competitor.description.split('.')[0]}.
                </p>
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  Read comparison &rarr;
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Our differentiators */}
      <div className="bg-ink py-20">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">
              Our Unique Position
            </p>
            <h2 className="font-heading text-[clamp(28px,4vw,52px)] font-semibold text-white leading-tight mb-8">
              Three things no competitor in these comparisons offers together.
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Claude-native AI stack',
                  body: 'We built a 67-skill agent system, a 12-agent OpenClaw framework, and a fine-tuned SEO model (Qwen3.5-27B) as our actual operating infrastructure. This is not an AI add-on. It is the backbone of every client engagement.',
                },
                {
                  title: 'BigQuery + Python data infrastructure',
                  body: 'Most agencies use GA4 dashboards and SEMrush reports. We build BigQuery pipelines that cross-reference GSC, GA4, Google Ads, Salesforce, and DataForSEO in the same analysis layer. Clients own their data.',
                },
                {
                  title: 'AEO built into every retainer',
                  body: 'Answer Engine Optimization is not a separate upsell. Every SEO engagement includes AEO foundations: citation-capsule content formats, entity optimization, structured data, and AI visibility tracking.',
                },
              ].map((item) => (
                <div key={item.title} className="border-l-4 border-white/20 pl-6">
                  <h3 className="font-heading text-lg font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <div className="bg-paper py-20">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <Subheading>See for yourself</Subheading>
            <Heading as="h2" className="mt-2">
              One conversation is worth a dozen comparison pages.
            </Heading>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Tell us what you are evaluating. We will tell you honestly whether we are the
              right fit — and if not, which alternative we think is.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
              >
                Talk to Us
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-emphasis text-stone font-heading font-medium text-base transition-all duration-200 hover:bg-cream"
              >
                See All Services
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
