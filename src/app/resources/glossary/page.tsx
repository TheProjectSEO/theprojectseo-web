import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { glossary } from '@/data/glossary'
import type { GlossaryTerm } from '@/data/glossary'

export const metadata: Metadata = {
  title: 'SEO Glossary — 30 SEO and AI Search Terms Defined | TheProjectSEO',
  description:
    'Clear definitions for 30 SEO and AI search terms: backlinks, schema markup, Core Web Vitals, AEO, GEO, LLM visibility, topical authority, and more.',
  alternates: {
    canonical: '/resources/glossary',
  },
  openGraph: {
    title: 'SEO Glossary | TheProjectSEO',
    description:
      '30 SEO and AI search terms defined clearly. From technical SEO basics to AEO and LLM visibility.',
    url: 'https://theprojectseo.com/resources/glossary',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

const CATEGORY_LABELS: Record<GlossaryTerm['category'], string> = {
  'seo': 'SEO Fundamentals',
  'technical-seo': 'Technical SEO',
  'content': 'Content',
  'ai-search': 'AI Search',
  'analytics': 'Analytics',
  'paid-media': 'Paid Media',
}

const CATEGORY_ORDER: GlossaryTerm['category'][] = [
  'seo',
  'technical-seo',
  'content',
  'ai-search',
  'analytics',
  'paid-media',
]

export default function GlossaryHubPage() {
  const grouped = CATEGORY_ORDER.reduce<Record<string, GlossaryTerm[]>>((acc, cat) => {
    const terms = glossary.filter((t) => t.category === cat)
    if (terms.length > 0) acc[cat] = terms
    return acc
  }, {})

  const alphabetical = [...glossary].sort((a, b) => a.term.localeCompare(b.term))

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          '@id': 'https://theprojectseo.com/resources/glossary',
          name: 'SEO Glossary',
          description: '30 SEO and AI search terms defined clearly by TheProjectSEO.',
          url: 'https://theprojectseo.com/resources/glossary',
          hasDefinedTerm: glossary.map((term) => ({
            '@type': 'DefinedTerm',
            name: term.term,
            description: term.shortDefinition,
            url: `https://theprojectseo.com/resources/glossary/${term.slug}`,
          })),
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
            <div className="flex items-center gap-2 mb-4">
              <Link
                href="/resources"
                className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent"
              >
                Resources
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">
                Glossary
              </span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              SEO Glossary
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              30 SEO terms,{' '}
              <em className="text-accent italic">defined clearly</em>
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              Technical SEO, content strategy, AI search, and analytics. Definitions written for
              practitioners, not beginners. Expanding to 50 terms by next quarter.
            </p>
          </div>
        </Container>
      </div>

      {/* A-Z index */}
      <div className="bg-cream py-10 border-b border-border">
        <Container>
          <p className="font-mono text-xs uppercase tracking-wider text-ash mb-4">A-Z index</p>
          <div className="flex flex-wrap gap-2">
            {alphabetical.map((term) => (
              <Link
                key={term.slug}
                href={`/resources/glossary/${term.slug}`}
                className="font-mono text-xs text-stone hover:text-accent underline-offset-2 hover:underline"
              >
                {term.term}
              </Link>
            ))}
          </div>
        </Container>
      </div>

      {/* Grouped by category */}
      {Object.entries(grouped).map(([cat, terms]) => (
        <div key={cat} className="bg-paper py-16 border-b border-border">
          <Container>
            <div className="mb-8">
              <Subheading as="h2">{CATEGORY_LABELS[cat as GlossaryTerm['category']]}</Subheading>
            </div>
            <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
              {terms.map((term) => (
                <Link
                  key={term.slug}
                  href={`/resources/glossary/${term.slug}`}
                  className="group bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-heading text-base font-semibold text-ink group-hover:text-accent mb-2">
                    {term.term}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate line-clamp-2">
                    {term.shortDefinition}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </div>
      ))}

      {/* CTA */}
      <div className="bg-cream py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <Subheading>Put the knowledge to work</Subheading>
            <Heading as="h2" className="mt-2">
              Understanding SEO is step one. Executing it is step two.
            </Heading>
            <Lead className="mt-6 mx-auto">
              Our team handles execution across all 30+ dimensions covered in this glossary.
              Get a free audit to see where your site currently stands.
            </Lead>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
              >
                Get a Free SEO Audit
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-emphasis text-stone font-heading font-medium text-base transition-all duration-200 hover:bg-paper"
              >
                Try Our Free Tools
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
