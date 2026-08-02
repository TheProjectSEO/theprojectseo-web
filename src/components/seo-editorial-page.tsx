import Link from 'next/link'
import { ArrowRight, CalendarDays, Check, Clock3, UserRound } from 'lucide-react'
import { Container } from '@/components/container'
import { EditorialFigure } from '@/components/editorial-figure'
import { EvidencePlaceholder } from '@/components/evidence-placeholder'
import { FAQAccordion } from '@/components/faq-accordion'
import { getFlagshipArticleGraphic } from '@/components/flagship-article-visuals'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'
import type {
  EditorialArticle,
  EditorialListItem,
  EditorialSection,
  EditorialVisual,
} from '@/data/editorial-article-types'

const author = {
  name: 'Aditya Aman',
  role: 'Founder and SEO practitioner',
  url: 'https://theprojectseo.com/company',
}

function ReadingList({
  items,
  ordered = false,
}: {
  items: EditorialListItem[]
  ordered?: boolean
}) {
  const Tag = ordered ? 'ol' : 'ul'
  return (
    <Tag className="mt-7 grid gap-3">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="grid grid-cols-[32px_1fr] gap-4 border border-border bg-paper p-5"
        >
          <span className="flex size-8 items-center justify-center bg-ink font-mono text-xs font-semibold text-white">
            {ordered ? index + 1 : <Check aria-hidden="true" className="size-4" />}
          </span>
          <div>
            <strong className="font-heading text-base font-semibold text-ink">{item.title}</strong>
            <p className="mt-1 text-[15px] leading-7 text-slate">{item.detail}</p>
          </div>
        </li>
      ))}
    </Tag>
  )
}

function SourceLinks({
  section,
  article,
}: {
  section: EditorialSection
  article: EditorialArticle
}) {
  const sources = (section.sourceIds ?? [])
    .map((id) => article.sources.find((source) => source.id === id))
    .filter((source): source is NonNullable<typeof source> => Boolean(source))

  if (sources.length === 0) return null

  return (
    <div className="mt-7 border-l-2 border-accent pl-5">
      <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">
        Primary references
      </p>
      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
        {sources.map((source) => (
          <a
            key={source.id}
            href={source.url}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
          >
            {source.publisher}: {source.name}
          </a>
        ))}
      </div>
    </div>
  )
}

function ConversionPanel({
  article,
  compact = false,
}: {
  article: EditorialArticle
  compact?: boolean
}) {
  return (
    <aside
      className={`border border-border-strong bg-ink text-white ${
        compact ? 'my-12 p-7 sm:p-9' : 'p-8 sm:p-12'
      }`}
    >
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.13em] text-accent">
        Apply this to a real site
      </p>
      <h2
        className={`${compact ? 'mt-3 text-2xl' : 'mt-4 text-3xl sm:text-4xl'} font-heading font-semibold`}
      >
        {article.conversionTitle}
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-8 text-white/70">{article.conversionBody}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <Link
          href={article.primaryService.href}
          className="inline-flex items-center justify-center gap-2 bg-accent px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:bg-accent/90"
        >
          {article.primaryService.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center border border-white/25 px-6 py-3 font-heading text-sm font-semibold text-white transition-colors hover:border-white/60"
        >
          Discuss your site
        </Link>
      </div>
    </aside>
  )
}

function ArticleFigure({
  visual,
  number,
  hero = false,
}: {
  visual: EditorialVisual
  number: number
  hero?: boolean
}) {
  const graphic = visual.graphicKey ? getFlagshipArticleGraphic(visual.graphicKey) : undefined

  if (!graphic) {
    return (
      <EvidencePlaceholder
        label={visual.label}
        description={visual.description}
        aspect={visual.aspect}
        className={hero ? 'mt-12' : 'my-12'}
      />
    )
  }

  return (
    <EditorialFigure
      number={number}
      title={visual.label}
      description={visual.description}
      lookFor={visual.lookFor ?? visual.description}
      caption={visual.caption ?? visual.description}
      sourceNote={visual.sourceNote ?? 'TheProjectSEO visual model'}
      hero={hero}
    >
      {graphic}
    </EditorialFigure>
  )
}

export function SeoEditorialPage({ article }: { article: EditorialArticle }) {
  const canonical = `https://theprojectseo.com/blog/${article.slug}`
  const sourceMap = Object.fromEntries(article.sources.map((source) => [source.id, source]))

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `${canonical}#article`,
          headline: article.title,
          description: article.description,
          url: canonical,
          mainEntityOfPage: canonical,
          datePublished: article.publishedAt,
          dateModified: article.updatedAt,
          author: {
            '@type': 'Person',
            name: author.name,
            url: author.url,
            jobTitle: author.role,
          },
          reviewedBy: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          about: {
            '@type': 'Thing',
            name: article.targetKeyword,
          },
          citation: article.sources.map((source) => source.url),
          image: article.heroImage
            ? `https://theprojectseo.com${article.heroImage.src}`
            : undefined,
          inLanguage: 'en',
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
            {
              '@type': 'ListItem',
              position: 3,
              name: article.title,
              item: canonical,
            },
          ],
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: article.faqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }}
      />

      <div className="relative overflow-hidden border-b border-border">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="mx-auto max-w-5xl py-16 sm:py-24">
            <nav
              aria-label="Breadcrumb"
              className="font-mono text-xs uppercase tracking-[0.12em] text-ash"
            >
              <Link href="/blog" className="hover:text-accent">
                SEO Library
              </Link>
              <span aria-hidden="true" className="mx-2">
                /
              </span>
              <span>{article.category}</span>
            </nav>
            <p className="mt-10 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
              {article.category}
            </p>
            <h1 className="mt-5 max-w-5xl font-display text-[clamp(42px,6vw,82px)] font-medium leading-[0.98] tracking-[-0.025em] text-ink">
              {article.title}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-stone">{article.dek}</p>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ash">
              <span className="inline-flex items-center gap-2">
                <UserRound aria-hidden="true" className="size-4" />
                {author.name}, {author.role}
              </span>
              <span className="inline-flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="size-4" />
                Updated {article.updatedAt}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 aria-hidden="true" className="size-4" />
                {article.readTime}
              </span>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_290px]">
          <article className="min-w-0">
            <section className="border border-border-strong bg-cream p-7 sm:p-9">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                Direct answer
              </p>
              <p className="mt-4 text-lg leading-8 text-ink">{article.directAnswer}</p>
            </section>

            <section className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <h2 className="font-heading text-xl font-semibold text-ink">What matters most</h2>
                <ul className="mt-5 space-y-3">
                  {article.takeaways.map((takeaway) => (
                    <li key={takeaway} className="flex gap-3 text-[15px] leading-7 text-slate">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-ink">
                  Who this guide is for
                </h2>
                <ul className="mt-5 space-y-3">
                  {article.audience.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-7 text-slate">
                      <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {article.heroVisual && <ArticleFigure visual={article.heroVisual} number={1} hero />}

            <nav aria-label="Article contents" className="mt-12 border-y border-border py-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
                In this guide
              </p>
              <ol className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {article.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex gap-3 text-sm leading-6 text-slate hover:text-accent"
                    >
                      <span className="font-mono text-xs text-ash group-hover:text-accent">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {article.sections.map((section, index) => {
              const visual = article.visuals.find((item) => item.afterSection === index)
              return (
                <div key={section.id}>
                  <section
                    id={section.id}
                    className={`scroll-mt-24 py-14 ${
                      article.heroVisual ? '' : 'border-b border-border'
                    }`}
                  >
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
                      {String(index + 1).padStart(2, '0')}
                    </p>
                    <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.015em] text-ink sm:text-4xl">
                      {section.title}
                    </h2>
                    <p className="mt-6 text-lg font-medium leading-8 text-ink">{section.answer}</p>
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="mt-5 text-[17px] leading-8 text-slate">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && <ReadingList items={section.bullets} />}
                    {section.steps && <ReadingList items={section.steps} ordered />}
                    {section.table && (
                      <div className="mt-8 overflow-x-auto border border-border">
                        <table className="w-full min-w-[640px] border-collapse text-left">
                          <thead className="bg-ink text-white">
                            <tr>
                              {section.table.headers.map((header) => (
                                <th
                                  key={header}
                                  className="px-5 py-4 font-heading text-sm font-semibold"
                                >
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row, rowIndex) => (
                              <tr
                                key={`${section.id}-${rowIndex}`}
                                className="border-t border-border"
                              >
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={`${cell}-${cellIndex}`}
                                    className="px-5 py-4 align-top text-sm leading-6 text-slate"
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                    <SourceLinks section={section} article={article} />
                  </section>
                  {visual && (
                    <ArticleFigure
                      visual={visual}
                      number={article.visuals.indexOf(visual) + (article.heroVisual ? 2 : 1)}
                    />
                  )}
                  {(index === 2 || index === 6) && <ConversionPanel article={article} compact />}
                </div>
              )
            })}

            <section className="py-16">
              <FAQAccordion
                items={article.faqs}
                title={`Questions about ${article.targetKeyword}`}
              />
            </section>

            <section className="border-y border-border py-14">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
                Sources and editorial method
              </p>
              <p className="mt-4 max-w-3xl text-[15px] leading-7 text-slate">
                This guide combines the live competitor corpus collected for its target query with
                current primary documentation. TheProjectSEO separates documented platform behavior
                from practitioner judgment, dates material revisions, and does not convert a
                correlation, tool score, or isolated result into a ranking guarantee.
              </p>
              <ul className="mt-7 space-y-5">
                {article.sources.map((source) => (
                  <li key={source.id}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading text-base font-semibold text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
                    >
                      {source.publisher}: {source.name}
                    </a>
                    <p className="mt-1 text-sm leading-6 text-slate">{source.note}</p>
                  </li>
                ))}
              </ul>
            </section>
          </article>

          <aside className="h-fit lg:sticky lg:top-24">
            <div className="border border-border-strong bg-paper p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.12em] text-ash">
                Relevant service
              </p>
              <Link
                href={article.primaryService.href}
                className="mt-3 block font-heading text-xl font-semibold text-ink hover:text-accent"
              >
                {article.primaryService.label}
              </Link>
              <p className="mt-3 text-sm leading-6 text-slate">
                Use the guide yourself, or bring us in when diagnosis, prioritization,
                implementation, and measurement need to work as one system.
              </p>
              {article.secondaryService && (
                <Link
                  href={article.secondaryService.href}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-accent"
                >
                  {article.secondaryService.label}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
              )}
            </div>
            <div className="mt-6 border border-border bg-cream p-6">
              <p className="font-heading text-base font-semibold text-ink">Research references</p>
              <ul className="mt-4 space-y-3">
                {article.sections
                  .flatMap((section) => section.sourceIds ?? [])
                  .filter((id, index, ids) => ids.indexOf(id) === index)
                  .slice(0, 5)
                  .map((id) => sourceMap[id])
                  .filter(Boolean)
                  .map((source) => (
                    <li key={source.id}>
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm leading-5 text-slate underline decoration-border-emphasis underline-offset-4 hover:text-accent"
                      >
                        {source.name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>

      <section className="border-t border-border bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_460px] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                From guide to execution
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                {article.conversionTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                {article.conversionBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href={article.primaryService.href}
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  Review the relevant service
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  href="/methodology"
                  className="inline-flex items-center gap-2 font-heading text-sm font-semibold text-ink underline decoration-border-emphasis underline-offset-4"
                >
                  See how delivery works
                </Link>
              </div>
            </div>
            <LeadForm variant="compact" submitText="Request a scoped SEO review" />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-paper py-14">
        <Container>
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
              Continue the research
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {article.relatedSlugs.map((slug) => (
                <Link
                  key={slug}
                  href={`/blog/${slug}`}
                  className="border border-border p-6 font-heading text-lg font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  Read the related guide
                  <span className="mt-2 block font-mono text-xs font-normal uppercase tracking-[0.1em] text-ash">
                    /blog/{slug}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </main>
  )
}
