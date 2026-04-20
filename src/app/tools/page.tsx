import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { tools } from '@/data/tools'
import type { ToolType } from '@/data/types'

export const metadata: Metadata = {
  title: 'Free SEO Tools | TheProjectSEO',
  description:
    'Free SEO tools built by TheProjectSEO — ROI calculator, schema generator, hreflang generator, meta tag generator, and AI visibility checker. No signup required.',
  alternates: {
    canonical: '/tools',
  },
  openGraph: {
    title: 'Free SEO Tools | TheProjectSEO',
    description:
      'Free SEO tools for technical and content teams. Schema generator, hreflang builder, meta tag generator, ROI calculator — all free, no signup.',
    url: 'https://theprojectseo.com/tools',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const LIVE_SLUGS = new Set([
  'seo-roi-calculator',
  'ai-visibility-checker',
  'schema-generator',
  'hreflang-generator',
  'meta-tag-generator',
])

const TYPE_LABELS: Record<ToolType, string> = {
  checker: 'Checker',
  generator: 'Generator',
  calculator: 'Calculator',
}

const GROUPS: { type: ToolType; label: string; description: string }[] = [
  {
    type: 'calculator',
    label: 'Calculators',
    description: 'Forecast revenue, cost, and return from your SEO and marketing investments.',
  },
  {
    type: 'generator',
    label: 'Generators',
    description: 'Build schema markup, hreflang tags, meta tags, and other technical assets.',
  },
  {
    type: 'checker',
    label: 'Checkers',
    description: 'Audit and diagnose SEO issues across your site, keywords, and backlinks.',
  },
]

export default function ToolsHubPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://theprojectseo.com/tools',
          name: 'Free SEO Tools',
          description:
            'Free SEO tools from TheProjectSEO — calculators, generators, and checkers for technical and content teams.',
          url: 'https://theprojectseo.com/tools',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
          },
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Free Tools
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              SEO tools that are{' '}
              <em className="text-accent italic">actually free</em>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              No account required. No trial limits. These tools run entirely in your browser.
              We build them to prove our expertise — you use them to get work done.
            </p>
            <p className="mt-3 font-mono text-sm text-ash">
              21 tools planned. 5 live now. More launching monthly.
            </p>
          </div>
        </Container>
      </div>

      {/* Tool groups */}
      {GROUPS.map((group) => {
        const groupTools = tools.filter((t) => t.type === group.type)
        return (
          <div key={group.type} className="bg-paper py-16 border-b border-border">
            <Container>
              <div className="mb-10">
                <Subheading as="h2">{group.label}</Subheading>
                <p className="mt-2 text-base text-slate">{group.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
                {groupTools.map((tool) => {
                  const isLive = LIVE_SLUGS.has(tool.slug)
                  return isLive ? (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-heading text-base font-semibold text-ink group-hover:text-accent">
                          {tool.name}
                        </h3>
                        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.1em] text-white bg-accent px-2 py-0.5">
                          Free
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate mb-4">
                        {tool.shortDescription}
                      </p>
                      <span className="font-mono text-xs text-ash uppercase tracking-wider">
                        {TYPE_LABELS[tool.type]}
                      </span>
                    </Link>
                  ) : (
                    <div key={tool.slug} className="bg-paper p-8">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <h3 className="font-heading text-base font-semibold text-ink/50">
                          {tool.name}
                        </h3>
                        <span className="shrink-0 font-mono text-xs uppercase tracking-[0.1em] text-ash border border-border px-2 py-0.5">
                          Soon
                        </span>
                      </div>
                      <p className="text-sm leading-relaxed text-slate/60">
                        {tool.shortDescription}
                      </p>
                    </div>
                  )
                })}
              </div>
            </Container>
          </div>
        )
      })}

      {/* Bottom CTA */}
      <div className="bg-cream py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Subheading>Want an audit, not just a tool?</Subheading>
            <Heading as="h2" className="mt-2">
              We do the SEO work. You measure the results.
            </Heading>
            <Lead className="mt-6 mx-auto">
              Tools show you what to fix. We fix it. If you want a full technical SEO audit
              and execution partner, talk to us.
            </Lead>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
              >
                Get a Free SEO Audit
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-emphasis text-stone font-heading font-medium text-base transition-all duration-200 hover:bg-paper"
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
