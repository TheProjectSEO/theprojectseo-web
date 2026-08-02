import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpenText,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  FileSearch,
  Network,
} from 'lucide-react'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'

export const metadata: Metadata = {
  title: 'SEO Resources: Guides, Glossary, Cases & Methods',
  description:
    'Research-led SEO resources from TheProjectSEO: comprehensive Google and AI search guides, 30 sourced glossary definitions, case studies and an implementation methodology.',
  alternates: { canonical: '/resources' },
}

const libraries = [
  {
    href: '/blog',
    icon: BookOpenText,
    title: 'Practitioner guides',
    count: '8 in-depth guides',
    description:
      'Technical, content, local, ecommerce and algorithm guides built from live SERP research and primary sources.',
  },
  {
    href: '/resources/glossary',
    icon: Network,
    title: 'SEO and AI glossary',
    count: '30 definitions',
    description:
      'Direct definitions with applied examples, mistakes, implementation steps, measurements and references.',
  },
  {
    href: '/case-studies',
    icon: BriefcaseBusiness,
    title: 'Case studies',
    count: '2 approved project records',
    description:
      'Evidence from Expressway.PH and TaxCalculator.com.ph, with screenshot locations reserved for approved source visuals.',
  },
  {
    href: '/methodology',
    icon: FileSearch,
    title: 'Delivery methodology',
    count: 'Research to validation',
    description:
      'How TheProjectSEO moves from search evidence to page ownership, implementation, QA and measured outcomes.',
  },
  {
    href: '/research/ai-visibility-measurement',
    icon: ChartNoAxesCombined,
    title: 'AI visibility measurement',
    count: '50 families · 200 prompts',
    description:
      'A controlled observation method for prompt variation, citations, competitor inclusion, accuracy, referrals and qualified demand.',
  },
]

const researchPaths = [
  {
    title: 'Diagnose a technical search problem',
    body: 'Start with the technical SEO audit guide, then use the glossary for canonical, indexability, robots.txt, crawl budget, schema markup and Core Web Vitals definitions. Move into technical SEO services when the issue needs template changes, engineering acceptance criteria or release validation.',
    href: '/blog/technical-seo-audit',
    label: 'Open the technical audit guide',
  },
  {
    title: 'Plan or improve an important page',
    body: 'Use the keyword-tool comparison to select the right dataset, the search-intent definition to choose a page owner and the content optimization checklist to research, write, source, internally link and measure the page. The content service supports teams that need the complete production system.',
    href: '/blog/content-optimization-checklist',
    label: 'Use the content checklist',
  },
  {
    title: 'Understand Google and AI search together',
    body: 'Begin with the ranking system guide, then compare AEO, GEO, LLM visibility, entity SEO and Knowledge Graph terminology. The AI-visibility measurement method explains how to use prompt panels, repeated observations, citations and referrals without turning mentions into one opaque score.',
    href: '/research/ai-visibility-measurement',
    label: 'Review the AI measurement method',
  },
  {
    title: 'Evaluate an SEO agency or engagement',
    body: 'Review the delivery methodology, service scope, pricing model and approved case studies. A qualified engagement should identify the affected page cohort, evidence, implementation owners, dependencies and validation method before it promises an outcome.',
    href: '/methodology',
    label: 'Review the methodology',
  },
]

export default function ResourcesPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://theprojectseo.com/resources#collection',
          name: 'TheProjectSEO SEO Resources',
          description: metadata.description,
          url: 'https://theprojectseo.com/resources',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
          },
          hasPart: libraries.map((library) => ({
            '@type': 'CollectionPage',
            name: library.title,
            url: `https://theprojectseo.com${library.href}`,
          })),
        }}
      />

      <section className="relative border-b border-border">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="mx-auto max-w-6xl py-20 sm:py-28 lg:py-36">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              TheProjectSEO resources
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,100px)] font-medium leading-[0.94] tracking-[-0.03em] text-ink">
              SEO research you can use—and{' '}
              <span className="text-accent">bring into execution.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-stone">
              Guides, definitions, project evidence and operating methods for
              Google, Bing and AI search. Every live resource is connected to
              the relevant service so a qualified reader can move from
              understanding the problem to solving it.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-4 text-sm font-semibold text-white"
              >
                Read the guides
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
              <Link
                href="/resources/glossary"
                className="inline-flex items-center justify-center border border-border-strong bg-paper px-7 py-4 text-sm font-semibold text-ink"
              >
                Browse the glossary
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Five live libraries
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                No placeholder tools or invented resource counts.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate">
                The resource hub lists what is actually available today. Tool
                ideas remain out of the index until they solve a defensible SEO
                problem better than a general AI prompt.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {libraries.map(
                ({ href, icon: Icon, title, count, description }) => (
                  <Link
                    key={href}
                    href={href}
                    className="group border border-border-strong p-7 sm:p-9 hover:border-accent"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <Icon aria-hidden="true" className="size-6 text-accent" />
                      <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ash">
                        {count}
                      </span>
                    </div>
                    <h2 className="mt-7 font-heading text-2xl font-semibold text-ink group-hover:text-accent">
                      {title}
                    </h2>
                    <p className="mt-4 text-[15px] leading-7 text-slate">
                      {description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent">
                      Open the library
                      <ArrowRight aria-hidden="true" className="size-4" />
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-cream py-20 sm:py-24">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                How to use the library
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Start with the decision, not the resource format.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate">
                The same SEO question can require a definition, a complete
                guide, project evidence or specialist implementation. These
                paths connect the live content so you can find the shortest
                useful route from the search problem to the next action.
              </p>
              <p className="mt-5 text-base leading-7 text-slate">
                If the terminology is the blocker, start with the{' '}
                <Link
                  href="/resources/glossary"
                  className="font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  SEO terminology
                </Link>{' '}
                library before choosing the relevant implementation path.
              </p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {researchPaths.map((path, index) => (
                <article
                  key={path.title}
                  className="border border-border-strong bg-paper p-7 sm:p-9"
                >
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </p>
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">
                    {path.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-7 text-slate">
                    {path.body}
                  </p>
                  <Link
                    href={path.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                  >
                    {path.label}
                    <ArrowRight aria-hidden="true" className="size-4" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-ink py-20 text-white sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Research standard
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Sources, scope and uncertainty stay visible.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-8 text-white/65">
              <p>
                Priority pages use live DataForSEO result collection and the
                local Python content optimizer supplied for this project.
              </p>
              <p>
                Official documentation supports changing platform claims.
                Approved project evidence is separated from general advice, and
                image locations remain empty until the final screenshots are
                supplied.
              </p>
              <p>
                No resource promises a ranking, hides an affiliate comparison or
                creates a separate page simply because another keyword variation
                exists.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Need the implementation?
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Bring us the site, market and business outcome.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                We will use the same research process to identify the page
                cohort and constraint, then scope technical, content, authority,
                analytics or AI-search work around an outcome your team can
                verify.
              </p>
            </div>
            <LeadForm
              variant="compact"
              submitText="Request a scoped SEO review"
            />
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}
