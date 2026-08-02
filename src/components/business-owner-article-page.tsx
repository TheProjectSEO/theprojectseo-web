import Image from 'next/image'
import Link from 'next/link'
import {
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  CircleAlert,
  Clock3,
  UserRound,
} from 'lucide-react'
import { Container } from '@/components/container'
import { EditorialFigure } from '@/components/editorial-figure'
import { FAQAccordion } from '@/components/faq-accordion'
import { getFlagshipArticleGraphic } from '@/components/flagship-article-visuals'
import { Footer } from '@/components/footer'
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
  linkedin: 'https://www.linkedin.com/in/adityaaman/',
}

const sectionChecks: Record<
  string,
  { output: string; caution: string }
> = {
  'traffic-is-not-the-commercial-cohort': {
    output:
      'Organic visitors are separated by landing page, buying question, device, market and date range.',
    caution:
      'Do not call the channel low quality while early researchers and ready-to-buy visitors remain blended together.',
  },
  'define-qualified-demo': {
    output:
      'Marketing and sales have one written, versioned definition for submitted, qualified and accepted.',
    caution:
      'Do not let a form submission stand in for a qualified demo or accepted opportunity.',
  },
  'query-to-page-ownership': {
    output:
      'Each recurring buying question has one clear page with the answer, evidence and next action.',
    caution:
      'Stop when a generic article, homepage and product page are all trying to answer the same question.',
  },
  'join-gsc-ga4-crm': {
    output:
      'The landing page, date range and a privacy-safe lead ID can be reconciled across systems.',
    caution:
      'Do not claim that the linked reports reveal the exact Google search made by each lead.',
  },
  'diagnose-the-first-break': {
    output:
      'The first meaningful loss has a defined visitor group, a tested explanation, a responsible person and a next check.',
    caution:
      'Do not redesign the form, page or keyword portfolio before validating that the observed break is real.',
  },
  'modeled-saas-example': {
    output:
      'The fictional example produces one clear decision and a measurable pass/fail test.',
    caution:
      'The fictional values teach the method; they are not a benchmark, forecast or client result.',
  },
  'build-90-day-backlog': {
    output:
      'The 90-day plan ranks verified commercial problems by reach, value, confidence, effort and dependency.',
    caution:
      'Do not prioritize publishing volume when a closer-to-revenue measurement or page failure remains open.',
  },
  'verify-and-govern': {
    output:
      'A responsible person can reproduce the report, check the tracking rules and explain the decision to sales.',
    caution:
      'Do not close the diagnostic until tracking, privacy, qualification and follow-up checks have owners.',
  },
  'three-leakage-zones': {
    output:
      'Every observed loss is assigned to before-engine, handoff or inside-checkout evidence.',
    caution:
      'Do not blame the booking engine for an unanswered property question or unavailable room.',
  },
  'search-demand-inventory': {
    output:
      'Priority query families are mapped to property, room, offer, policy or destination page owners.',
    caution:
      'Stop when impressions are being treated as bookable demand without checking intent, market and availability.',
  },
  'cross-domain-handoff': {
    output:
      'The same GA4 stream and linker survive the production redirect without a self-referral.',
    caution:
      'Adding the engine to unwanted referrals can hide the symptom without preserving the session.',
  },
  'booking-event-contract': {
    output:
      'Engine start, checkout, payment and purchase have distinct triggers and controlled parameters.',
    caution:
      'Do not count a CTA click or checkout start as a confirmed reservation.',
  },
  'build-search-to-booking-cohort': {
    output:
      'Landing sessions, engine starts, checkouts and purchases reconcile by device, market and page type.',
    caution:
      'Stop the conversion diagnosis when engine bookings and GA4 purchase records do not reconcile.',
  },
  'modeled-hotel-example': {
    output:
      'The test separates lost measurement from lost room context before recommending a redesign.',
    caution:
      'The fictional hotel cohort is a training artifact, not a market benchmark or client case.',
  },
  'audit-page-and-rate-continuity': {
    output:
      'Room, dates, occupancy, total price, taxes, cancellation terms and direct promise remain explainable.',
    caution:
      'Do not compare volatile rates without recording test time, conditions, device and exact URL.',
  },
  'verification-and-priority': {
    output:
      'The selected fix has reachable booking value, corroborating evidence, an owner and a production acceptance test.',
    caution:
      'Do not recommend an engine migration from one abandonment rate or an unreconciled analytics view.',
  },
}

function Figure({
  visual,
  number,
  hero = false,
}: {
  visual: EditorialVisual
  number: number
  hero?: boolean
}) {
  const graphic = visual.graphicKey
    ? getFlagshipArticleGraphic(visual.graphicKey)
    : undefined

  if (!graphic && !visual.image) return null

  return (
    <EditorialFigure
      number={number}
      title={visual.label}
      description={visual.description}
      lookFor={visual.lookFor ?? visual.description}
      caption={visual.caption ?? visual.description}
      hero={hero}
      breakout
      assetKey={visual.graphicKey}
    >
      {visual.image ? (
        <div className="bg-[#f7f8fb] p-3 sm:p-5">
          <div className="overflow-x-auto overscroll-x-contain pb-1">
            <Image
              src={visual.image.src}
              alt={visual.image.alt}
              width={visual.image.width}
              height={visual.image.height}
              sizes="(max-width: 768px) 720px, 1180px"
              className="h-auto w-full min-w-[720px] border border-ink/10 bg-white shadow-[0_16px_45px_rgba(36,30,31,0.12)] sm:min-w-0"
            />
          </div>
          <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.08em] text-ash sm:hidden">
            Swipe horizontally to inspect the report
          </p>
        </div>
      ) : (
        graphic
      )}
    </EditorialFigure>
  )
}

function SectionList({
  items,
  ordered = false,
}: {
  items: EditorialListItem[]
  ordered?: boolean
}) {
  const Tag = ordered ? 'ol' : 'ul'

  return (
    <Tag className="mt-8 border-t-2 border-ink">
      {items.map((item, index) => (
        <li
          key={item.title}
          className="grid gap-3 border-b border-border py-5 sm:grid-cols-[3.5rem_11rem_minmax(0,1fr)] sm:items-start sm:gap-5"
        >
          <span className="font-mono text-[11px] font-semibold text-accent">
            {String(index + 1).padStart(2, '0')}
          </span>
          <strong className="font-heading text-base font-semibold leading-6 text-ink">
            {item.title}
          </strong>
          <span className="text-[15px] leading-7 text-slate">{item.detail}</span>
        </li>
      ))}
    </Tag>
  )
}

function ArticleTable({ section }: { section: EditorialSection }) {
  if (!section.table) return null

  return (
    <div className="relative left-1/2 mt-9 w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 overflow-x-auto border border-border-strong bg-paper">
      <table className="w-full min-w-[760px] border-collapse text-left">
        <thead className="bg-ink text-white">
          <tr>
            {section.table.headers.map((header) => (
              <th
                key={header}
                className="border-r border-white/10 px-5 py-4 font-heading text-sm font-semibold last:border-r-0"
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
              className="border-t border-border first:border-t-0"
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={`${cell}-${cellIndex}`}
                  className={`border-r border-border px-5 py-4 align-top text-sm leading-6 last:border-r-0 ${
                    cellIndex === 0
                      ? 'font-heading font-semibold text-ink'
                      : 'text-slate'
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MidArticleAction({ article }: { article: EditorialArticle }) {
  return (
    <aside className="relative left-1/2 my-16 w-[min(1040px,calc(100vw-2rem))] -translate-x-1/2 border border-ink bg-ink p-7 text-white sm:p-10">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-action">
            Apply the diagnostic
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
            {article.conversionTitle}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/68">
            {article.conversionBody}
          </p>
        </div>
        <Link
          href={article.primaryService.href}
          className="inline-flex min-h-12 items-center justify-center gap-2 border border-action bg-action px-6 font-heading text-sm font-semibold text-ink transition-colors hover:bg-action-hover"
        >
          {article.primaryService.label}
          <ArrowRight aria-hidden="true" className="size-4" />
        </Link>
      </div>
    </aside>
  )
}

export function BusinessOwnerArticlePage({
  article,
}: {
  article: EditorialArticle
}) {
  const canonical = `https://theprojectseo.com/blog/${article.slug}`

  return (
    <main className="overflow-hidden bg-paper">
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
          image: article.heroImage
            ? `https://theprojectseo.com${article.heroImage.src}`
            : undefined,
          author: {
            '@type': 'Person',
            name: author.name,
            url: author.url,
            jobTitle: author.role,
            sameAs: [author.linkedin],
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          citation: article.sources.map((source) => source.url),
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

      <article>
        <header className="border-b border-border bg-paper">
        <Container>
          <Navbar />
          <div className="mx-auto max-w-7xl py-12 sm:py-16 lg:py-20">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-ash"
            >
              <Link href="/blog" className="hover:text-accent">
                SEO Library
              </Link>
              <span aria-hidden="true">/</span>
              <span>{article.category}</span>
            </nav>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-accent">
                {article.category}
              </p>
            </div>

            <h1 className="mt-5 max-w-6xl text-balance font-display text-[clamp(40px,6.4vw,84px)] font-medium leading-[0.98] tracking-[-0.035em] text-ink">
              {article.title}
            </h1>
            <p className="mt-7 max-w-4xl text-lg leading-8 text-stone sm:text-xl sm:leading-9">
              {article.dek}
            </p>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-ash">
              <a
                href={author.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent"
              >
                <UserRound aria-hidden="true" className="size-4" />
                {author.name}, {author.role}
              </a>
              <span className="inline-flex items-center gap-2">
                <CalendarDays aria-hidden="true" className="size-4" />
                Updated {article.updatedAt}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock3 aria-hidden="true" className="size-4" />
                {article.readTime}
              </span>
            </div>

            {article.heroVisual && (
              <div className="mx-auto max-w-4xl">
                <Figure visual={article.heroVisual} number={1} hero />
              </div>
            )}
          </div>
        </Container>
        </header>

        <section className="border-b border-border bg-cream/55 py-12 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                Direct answer
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight text-ink">
                What the business should do
              </h2>
            </div>
            <div>
              <p className="text-xl leading-9 text-ink">{article.directAnswer}</p>
              <ul className="mt-8 border-t-2 border-ink">
                {article.takeaways.map((takeaway, index) => (
                  <li
                    key={takeaway}
                    className="grid gap-3 border-b border-border py-4 sm:grid-cols-[3rem_minmax(0,1fr)] sm:items-start"
                  >
                    <span className="font-mono text-[10px] font-semibold text-accent">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm leading-7 text-slate">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
        </section>

        <section className="border-b border-border bg-paper py-12">
        <Container>
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[18rem_minmax(0,1fr)] lg:gap-16">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ash">
                Article index
              </p>
              <p className="mt-3 text-sm leading-7 text-slate">
                Read in order to build the diagnosis, or jump directly to the
                failing part of the system.
              </p>
            </div>
            <nav
              aria-label="Article contents"
              className="grid gap-px border border-border bg-border sm:grid-cols-2"
            >
              {article.sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex min-h-16 items-center gap-3 bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink hover:bg-action-soft"
                >
                  <span className="font-mono text-[10px] text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {section.title}
                </a>
              ))}
            </nav>
          </div>
        </Container>
        </section>

        <div className="mx-auto w-full max-w-[820px] px-4 sm:px-6">
        <aside className="my-12 grid gap-px border border-border bg-border sm:grid-cols-2">
          <div className="bg-white p-5">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-accent">
              This is for
            </p>
            <ul className="mt-4 space-y-3">
              {article.audience.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-slate">
                  <Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-ink p-5 text-white">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-action">
              Keep outside scope
            </p>
            <p className="mt-4 text-sm leading-7 text-white/68">
              This guide explains how to diagnose and verify the system. It does
              not turn fictional examples into benchmarks, promise a ranking
              outcome, or replace privacy, legal, revenue, engineering, or sales
              review.
            </p>
          </div>
        </aside>

        {article.sections.map((section, index) => {
          const visual = article.visuals.find(
            (item) => item.afterSection === index,
          )
          const check = sectionChecks[section.id]

          return (
            <div key={section.id}>
              <section
                id={section.id}
                aria-labelledby={`${section.id}-title`}
                className="scroll-mt-24 border-t border-border py-14 first:border-t-0 sm:py-16"
              >
                <div className="grid gap-7 md:grid-cols-[5.5rem_minmax(0,1fr)] md:gap-9">
                  <div>
                    <span className="grid size-14 place-items-center bg-ink font-mono text-base font-semibold text-action">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="mt-3 block font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-ash">
                      Diagnostic
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h2
                      id={`${section.id}-title`}
                      className="text-balance font-heading text-3xl font-semibold leading-[1.18] tracking-[-0.025em] text-ink sm:text-4xl"
                    >
                      {section.title}
                    </h2>
                    <p className="mt-5 border-l-4 border-accent bg-accent-soft px-5 py-4 text-lg font-medium leading-8 text-ink">
                      {section.answer}
                    </p>
                    {section.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-6 text-[17px] leading-8 text-slate"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && <SectionList items={section.bullets} />}
                    {section.steps && (
                      <SectionList items={section.steps} ordered />
                    )}
                    <ArticleTable section={section} />

                    {check && (
                      <div className="mt-9 grid gap-px border border-border bg-border sm:grid-cols-2">
                        <div className="bg-white p-5">
                          <p className="flex items-center gap-2 text-xs font-semibold text-signal">
                            <CheckCircle2 aria-hidden="true" className="size-4" />
                            Ready to move on when
                          </p>
                          <p className="mt-2 text-sm leading-7 text-slate">
                            {check.output}
                          </p>
                        </div>
                        <div className="bg-cream p-5">
                          <p className="flex items-center gap-2 text-xs font-semibold text-accent">
                            <CircleAlert aria-hidden="true" className="size-4" />
                            Stop when
                          </p>
                          <p className="mt-2 text-sm leading-7 text-slate">
                            {check.caution}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {visual && (
                <Figure
                  visual={visual}
                  number={
                    article.visuals.indexOf(visual) +
                    (article.heroVisual ? 2 : 1)
                  }
                />
              )}

              {index === 3 && <MidArticleAction article={article} />}
            </div>
          )
        })}

        <section className="border-t border-border py-16">
          <FAQAccordion
            items={article.faqs}
            title={`Questions about ${article.targetKeyword}`}
          />
        </section>

        <section className="border-t border-border py-16">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-ash">
            References
          </p>
          <h2 className="mt-3 font-heading text-3xl font-semibold text-ink">
            Official information and verification scope
          </h2>
          <p className="mt-4 max-w-2xl text-xs leading-6 text-ash">
            Product behavior and reporting limitations were checked against
            current primary documentation. Modeled cohorts are visibly labelled
            and are not customer results or industry benchmarks.
          </p>
          <details className="group mt-6 border-y border-border">
            <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-4 py-3 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-slate marker:hidden">
              <span>
                View references and verification notes ({article.sources.length})
              </span>
              <span
                aria-hidden="true"
                className="text-base font-normal transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <ol className="border-t border-border pb-3">
              {article.sources.map((source, index) => (
                <li
                  key={source.id}
                  className="grid gap-2 border-b border-border/70 py-3 last:border-b-0 sm:grid-cols-[2rem_10rem_minmax(0,1fr)] sm:gap-4"
                >
                  <span className="font-mono text-[9px] text-ash">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-semibold leading-5 text-ink underline decoration-border-emphasis underline-offset-3 hover:text-accent"
                  >
                    {source.publisher}: {source.name}
                  </a>
                  <p className="text-[10px] leading-5 text-ash">{source.note}</p>
                </li>
              ))}
            </ol>
          </details>
        </section>
        </div>
      </article>

      <section className="border-t border-border bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[minmax(0,1fr)_460px] lg:items-start">
            <div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
                From diagnosis to execution
              </p>
              <h2 className="mt-4 max-w-3xl font-heading text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                {article.conversionTitle}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">
                {article.conversionBody}
              </p>
              <div className="mt-8 flex flex-wrap gap-5">
                <Link
                  href={article.primaryService.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4"
                >
                  {article.primaryService.label}
                  <ArrowRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  href="/methodology"
                  className="text-sm font-semibold text-ink underline decoration-border-emphasis underline-offset-4"
                >
                  Review the methodology
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
