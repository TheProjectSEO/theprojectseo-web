import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpenText, Check, FlaskConical, Network } from 'lucide-react'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'
import { glossary } from '@/data/glossary'
import type { GlossaryCategory, GlossaryTerm } from '@/data/glossary'

export const metadata: Metadata = {
  title: 'SEO Glossary: 30 Search & AI Terms Explained',
  description:
    'A research-led SEO glossary covering technical SEO, content, links, Google search and AI search terms—with examples, mistakes, implementation steps, sources and measurement.',
  alternates: { canonical: '/resources/glossary' },
  openGraph: {
    title: 'SEO and AI Search Glossary | TheProjectSEO',
    description: '30 practitioner definitions researched against live search results and primary sources.',
    url: 'https://theprojectseo.com/resources/glossary',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
}

const categoryLabels: Record<GlossaryCategory, string> = {
  seo: 'SEO fundamentals and links',
  'technical-seo': 'Technical SEO',
  content: 'Content architecture',
  'ai-search': 'AI search, GEO and entities',
}

const categoryOrder: GlossaryCategory[] = ['seo', 'technical-seo', 'content', 'ai-search']

export default function GlossaryHubPage() {
  const alphabetical = [...glossary].sort((a, b) => a.term.localeCompare(b.term))
  const grouped = categoryOrder.map((category) => ({
    category,
    terms: glossary.filter((term) => term.category === category),
  }))

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTermSet',
          '@id': 'https://theprojectseo.com/resources/glossary#term-set',
          name: 'TheProjectSEO SEO and AI Search Glossary',
          description: metadata.description,
          url: 'https://theprojectseo.com/resources/glossary',
          hasDefinedTerm: glossary.map((term) => ({
            '@type': 'DefinedTerm',
            name: term.term,
            description: term.shortDefinition,
            url: `https://theprojectseo.com/resources/glossary/${term.slug}`,
          })),
        }}
      />

      <section className="relative border-b border-border">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="mx-auto max-w-6xl py-20 sm:py-28 lg:py-36">
            <nav className="font-mono text-xs uppercase tracking-[0.12em] text-ash">
              <Link href="/resources" className="hover:text-accent">Resources</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              SEO glossary
            </nav>
            <p className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              30 researched definitions
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,100px)] font-medium leading-[0.94] tracking-[-0.03em] text-ink">
              SEO terminology, explained for{' '}
              <span className="text-accent">real decisions.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-stone">
              A practical glossary for Google, Bing and AI search. Every term includes a
              direct definition, applied example, misconceptions, implementation steps,
              measurement, primary references and the relevant TheProjectSEO service.
            </p>
            <a href="#definitions" className="mt-10 inline-flex items-center gap-2 bg-accent px-7 py-4 text-sm font-semibold text-white">
              Browse all definitions
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-cream py-10">
        <Container>
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">A–Z index</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {alphabetical.map((term) => (
                <Link
                  key={term.slug}
                  href={`/resources/glossary/${term.slug}`}
                  className="border border-border-strong bg-paper px-3 py-2 text-xs font-medium text-slate hover:border-accent hover:text-accent"
                >
                  {term.term}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">Editorial standard</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                More than a one-sentence dictionary.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate">
                Short definitions are easy to generate. Useful definitions explain where the
                term applies, what it does not mean, how a practitioner implements it and
                which evidence would show that the work succeeded.
              </p>
              <p className="mt-5 text-base leading-7 text-slate">
                Start with{' '}
                <Link
                  href="/resources/glossary/core-web-vitals"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  Core Web Vitals in SEO
                </Link>
                ,{' '}
                <Link
                  href="/resources/glossary/hreflang"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  hreflang meaning
                </Link>
                , the{' '}
                <Link
                  href="/resources/glossary/people-also-ask"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  People Also Ask definition
                </Link>
                , or the broader{' '}
                <Link
                  href="/resources/glossary/seo"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  search engine optimization meaning
                </Link>
                .
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: FlaskConical, title: 'Current search research', detail: 'Definitions are checked against how the term is used in current search results and primary references.' },
                { icon: BookOpenText, title: 'Primary references', detail: 'Changing platform behavior is checked against official documentation.' },
                { icon: Network, title: 'Connected concepts', detail: 'Related definitions, guides and services explain the term’s place in the system.' },
                { icon: Check, title: 'Practitioner boundaries', detail: 'Tool metrics and emerging acronyms are not misrepresented as Google standards.' },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="border border-border p-6">
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="definitions" className="border-t border-border">
        {grouped.map(({ category, terms }, groupIndex) => (
          <div key={category} className={groupIndex % 2 ? 'border-b border-border bg-cream py-20' : 'border-b border-border bg-paper py-20'}>
            <Container>
              <div className="mx-auto max-w-6xl">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                      {String(groupIndex + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-3 font-heading text-3xl font-semibold text-ink sm:text-4xl">
                      {categoryLabels[category]}
                    </h2>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash">{terms.length} definitions</p>
                </div>
                <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {terms.map((term: GlossaryTerm) => (
                    <Link
                      key={term.slug}
                      href={`/resources/glossary/${term.slug}`}
                      className="group border border-border-strong bg-paper p-6 hover:border-accent"
                    >
                      <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent">{term.term}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate">{term.shortDefinition}</p>
                      <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                        Definition and use
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        ))}
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">From terminology to execution</p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Tell us which SEO decision is stuck.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                We will determine whether the problem is technical eligibility, page
                ownership, content evidence, internal architecture, authority, AI visibility
                or measurement—and scope the work around the pages that matter commercially.
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
