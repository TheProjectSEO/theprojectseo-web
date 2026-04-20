import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

export const metadata: Metadata = {
  title: 'SEO Resources — Glossary, Guides, Research, Templates | TheProjectSEO',
  description:
    'Free SEO resources from TheProjectSEO: glossary of 30+ SEO and AI search terms, guides, research, and templates. Built for practitioners, not beginners.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    title: 'SEO Resources | TheProjectSEO',
    description:
      'SEO glossary, guides, research, and templates from TheProjectSEO. Free for practitioners.',
    url: 'https://theprojectseo.com/resources',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const resourceTypes = [
  {
    href: '/resources/glossary',
    label: 'Glossary',
    status: 'live' as const,
    description:
      '30 SEO and AI search terms defined clearly. Technical SEO, content, analytics, and the growing AI search vocabulary.',
    count: '30 terms',
  },
  {
    href: '/resources/guides',
    label: 'Guides',
    status: 'coming' as const,
    description:
      'Step-by-step technical SEO guides, international SEO playbooks, and AEO implementation walkthroughs.',
    count: 'Coming soon',
  },
  {
    href: '/resources/research',
    label: 'Research',
    status: 'coming' as const,
    description:
      'Original data and analysis: AI search visibility benchmarks, CTR studies, link building impact studies.',
    count: 'Coming soon',
  },
  {
    href: '/resources/templates',
    label: 'Templates',
    status: 'coming' as const,
    description:
      'Download-ready SEO audit templates, content briefs, reporting frameworks, and keyword tracking sheets.',
    count: 'Coming soon',
  },
]

export default function ResourcesHubPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://theprojectseo.com/resources',
          name: 'SEO Resources',
          description:
            'Free SEO resources from TheProjectSEO — glossary, guides, research, and templates.',
          url: 'https://theprojectseo.com/resources',
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
              Resources
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Reference material for{' '}
              <em className="text-accent italic">serious SEOs</em>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              A growing library of definitions, guides, research, and templates. All free.
              Built by the team that runs SEO for 15 clients daily using the Anthropic stack.
            </p>
          </div>
        </Container>
      </div>

      {/* Resource types grid */}
      <div className="bg-paper py-24">
        <Container>
          <div className="mb-12">
            <Subheading as="h2">Resource Types</Subheading>
            <Heading as="h2" className="mt-2">
              Four libraries. One live now.
            </Heading>
            <Lead className="mt-4">
              We publish resources we actually use. The glossary is live.
              Guides, research, and templates are in production.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
            {resourceTypes.map((resource) =>
              resource.status === 'live' ? (
                <Link
                  key={resource.href}
                  href={resource.href}
                  className="group bg-paper p-10 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="font-heading text-2xl font-semibold text-ink group-hover:text-accent">
                      {resource.label}
                    </h2>
                    <span className="shrink-0 font-mono text-xs uppercase tracking-[0.1em] text-white bg-accent px-2 py-0.5">
                      {resource.count}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-slate">
                    {resource.description}
                  </p>
                  <div className="mt-5 font-mono text-xs text-accent uppercase tracking-wider">
                    Browse &rarr;
                  </div>
                </Link>
              ) : (
                <div key={resource.href} className="bg-paper p-10">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="font-heading text-2xl font-semibold text-ink/50">
                      {resource.label}
                    </h2>
                    <span className="shrink-0 font-mono text-xs uppercase tracking-[0.1em] text-ash border border-border px-2 py-0.5">
                      {resource.count}
                    </span>
                  </div>
                  <p className="text-base leading-relaxed text-slate/60">
                    {resource.description}
                  </p>
                </div>
              )
            )}
          </div>
        </Container>
      </div>

      {/* Related: Tools */}
      <div className="bg-cream py-16 border-t border-border">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <Subheading as="h2">Related</Subheading>
              <h2 className="font-heading text-2xl font-semibold text-ink mt-1">
                Looking for tools, not reading material?
              </h2>
              <p className="mt-2 text-base text-slate">
                Free interactive tools: schema generator, ROI calculator, meta tag generator, hreflang builder.
              </p>
            </div>
            <Link
              href="/tools"
              className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
            >
              Browse Free Tools
            </Link>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
