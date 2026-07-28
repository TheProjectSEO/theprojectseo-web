import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpenText,
  Check,
  FlaskConical,
  Search,
  Workflow,
} from 'lucide-react'
import { Container } from '@/components/container'
import { EvidencePlaceholder } from '@/components/evidence-placeholder'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'
import { editorialArticles } from '@/data/editorial-articles'

export const metadata: Metadata = {
  title: 'SEO Blog: Practitioner Guides for Google & AI Search',
  description:
    'Research-led SEO guides for Google, Bing and AI search covering technical SEO, content, ecommerce, local search, algorithms and measurement—with practical routes to implementation.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'TheProjectSEO Research Library',
    description:
      'Practitioner guides that connect search research to implementation and qualified growth.',
    url: 'https://theprojectseo.com/blog',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
}

const featuredSlugs = [
  'dominate-search-rankings-2025',
  'technical-seo-audit',
  'content-optimization-checklist',
]

const categories = [...new Set(editorialArticles.map((article) => article.category))]

function ArticleCard({
  article,
  featured = false,
}: {
  article: (typeof editorialArticles)[number]
  featured?: boolean
}) {
  return (
    <article
      className={`group relative flex h-full flex-col border border-border bg-paper transition-colors hover:border-accent ${
        featured ? 'p-7 sm:p-9' : 'p-6'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-accent">
          {article.category}
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-ash">
          {article.readTime}
        </p>
      </div>
      <h2
        className={`mt-5 font-heading font-semibold tracking-tight text-ink group-hover:text-accent ${
          featured ? 'text-2xl sm:text-3xl' : 'text-xl'
        }`}
      >
        <Link href={`/blog/${article.slug}`} className="after:absolute after:inset-0">
          {article.title}
        </Link>
      </h2>
      <p className="mt-4 flex-1 text-[15px] leading-7 text-slate">{article.description}</p>
      <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
        <span className="text-xs text-ash">Updated {article.updatedAt}</span>
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
          Read the guide
          <ArrowRight aria-hidden="true" className="size-4" />
        </span>
      </div>
    </article>
  )
}

export default function BlogPage() {
  const featured = featuredSlugs
    .map((slug) => editorialArticles.find((article) => article.slug === slug))
    .filter((article): article is (typeof editorialArticles)[number] => Boolean(article))
  const remaining = editorialArticles.filter((article) => !featuredSlugs.includes(article.slug))

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': 'https://theprojectseo.com/blog#collection',
          name: 'TheProjectSEO Research Library',
          description: metadata.description,
          url: 'https://theprojectseo.com/blog',
          isPartOf: { '@id': 'https://theprojectseo.com/#website' },
          about: [
            { '@type': 'Thing', name: 'Search engine optimization' },
            { '@type': 'Thing', name: 'AI search optimization' },
          ],
          hasPart: editorialArticles.map((article) => ({
            '@type': 'Article',
            headline: article.title,
            url: `https://theprojectseo.com/blog/${article.slug}`,
            dateModified: article.updatedAt,
          })),
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://theprojectseo.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'SEO Blog',
              item: 'https://theprojectseo.com/blog',
            },
          ],
        }}
      />

      <section className="relative border-b border-border">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="mx-auto max-w-6xl py-20 sm:py-28 lg:py-36">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              TheProjectSEO research library
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,100px)] font-medium leading-[0.94] tracking-[-0.03em] text-ink">
              SEO guidance built to be{' '}
              <span className="text-accent">implemented.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-xl leading-9 text-stone">
              In-depth, practitioner-led guides for Google, Bing, AI Overviews, ChatGPT,
              Gemini, Claude and Perplexity. Every article starts with live search research,
              cites the sources behind material claims and connects the answer to a useful
              next step.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#guides"
                className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-4 font-heading text-sm font-semibold text-white hover:bg-accent/90"
              >
                Explore the guides
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border border-border-strong bg-paper px-7 py-4 font-heading text-sm font-semibold text-ink hover:border-accent hover:text-accent"
              >
                Bring us your search problem
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-border bg-cream py-10">
        <Container>
          <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3">
            <span className="mr-2 font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">
              Current topics
            </span>
            {categories.map((category) => (
              <span
                key={category}
                className="border border-border-strong bg-paper px-3 py-2 text-xs font-medium text-slate"
              >
                {category}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="guides" className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Start with the operating system
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Three guides that change what you work on next
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate">
                Diagnose the ranking system, examine the technical foundation and turn the
                chosen page into a researched conversion asset. These are the core workflows
                behind the rest of the library.
              </p>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {featured.map((article) => (
                <ArticleCard key={article.slug} article={article} featured />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-ink py-20 text-white sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                How the content is made
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                Search evidence before prose.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                The library is not produced from generic prompts. Each priority guide has a
                stored live result corpus, a content-optimizer scorecard, primary-source
                references and an editorial decision about what the page should own.
              </p>
              <Link
                href="/methodology"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent"
              >
                Review our SEO methodology
                <ArrowRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: Search,
                  title: 'Live SERP corpus',
                  detail:
                    'We inspect current result types, coverage, entities, evidence and offers for the target query.',
                },
                {
                  icon: FlaskConical,
                  title: 'Primary-source review',
                  detail:
                    'Platform behavior and changing claims are checked against current official documentation.',
                },
                {
                  icon: Workflow,
                  title: 'Python content scoring',
                  detail:
                    'A local optimizer compares the rendered draft with the competitor corpus to reveal semantic gaps.',
                },
                {
                  icon: BookOpenText,
                  title: 'Practitioner editing',
                  detail:
                    'Scores guide review; a human decides what is accurate, useful, distinctive and appropriate to publish.',
                },
              ].map(({ icon: Icon, title, detail }) => (
                <div key={title} className="border border-white/15 p-6">
                  <Icon aria-hidden="true" className="size-5 text-accent" />
                  <h3 className="mt-5 font-heading text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/60">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                Complete guide library
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Research the problem. Then follow it into execution.
              </h2>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {remaining.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-20 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                A library that qualifies the next conversation
              </p>
              <h2 className="mt-4 font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Reading should lead to a better SEO decision.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                Some problems can be solved with the guide. Others expose a cross-team
                constraint involving engineering, content, authority or measurement. Those
                pages explain when TheProjectSEO is relevant and what the first scoped
                engagement would need to produce.
              </p>
              <ul className="mt-8 grid gap-3">
                {[
                  'No guaranteed rankings or fabricated performance claims.',
                  'No generic city, industry or glossary pages without distinct intent.',
                  'No topical score treated as a substitute for editorial judgment.',
                  'No lead form detached from the problem the reader is solving.',
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-7 text-slate">
                    <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <EvidencePlaceholder
              label="Editorial evidence board"
              description="Reserved for the final visual showing an approved SERP corpus, optimizer scorecard, source set and page-to-service conversion map."
              aspect="wide"
            />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                From research to a scoped plan
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
                Tell us which page or search problem matters commercially.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                Share the site, market and outcome. We will use the same research discipline
                to determine whether the constraint is technical eligibility, page ownership,
                content evidence, internal architecture, external authority or measurement.
              </p>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  Explore SEO services
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  href="/resources/glossary"
                  className="text-sm font-semibold text-ink underline decoration-border-emphasis underline-offset-4"
                >
                  Use the SEO glossary
                </Link>
              </div>
            </div>
            <LeadForm variant="compact" submitText="Request a scoped SEO review" />
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}
