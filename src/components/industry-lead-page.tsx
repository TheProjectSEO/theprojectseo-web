import Link from 'next/link'

import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import { Container } from '@/components/container'
import { EvidencePlaceholder } from '@/components/evidence-placeholder'
import { getEvidenceGraphic } from '@/components/evidence-graphics'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { CTAFormSection } from '@/components/service-page-sections'
import { Heading, Lead, Subheading } from '@/components/text'
import type { IndustryLeadPageData } from '@/data/industry-lead-pages'
import { ORGANIZATION_REF, SITE_URL } from '@/lib/organization-schema'

function ArrowLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 font-heading text-sm font-semibold text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:text-ink ${className}`}
    >
      {children}
      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
        →
      </span>
    </Link>
  )
}

function SectionIntro({
  eyebrow,
  title,
  lead,
  center = false,
}: {
  eyebrow: string
  title: string
  lead?: string
  center?: boolean
}) {
  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <Subheading>{eyebrow}</Subheading>
      <Heading as="h2" className="mt-3">
        {title}
      </Heading>
      {lead ? <Lead className={`mt-6 ${center ? 'mx-auto' : ''}`}>{lead}</Lead> : null}
    </div>
  )
}

function IndustryHero({ page }: { page: IndustryLeadPageData }) {
  return (
    <div className="relative overflow-hidden border-b border-border bg-paper">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="grid gap-12 pb-20 pt-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(300px,0.6fr)] lg:items-end lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-6 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              {page.eyebrow}
            </p>
            <h1 className="max-w-5xl font-display text-[clamp(46px,5.8vw,82px)] font-medium leading-[0.95] tracking-[-0.03em] text-ink">
              {page.title}{' '}
              <em className="text-accent italic">{page.titleAccent}</em>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-stone sm:text-xl">
              {page.metaDescription}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">{page.primaryCta}</Button>
              <Button variant="outline" href="#deliverables">
                See what is included
              </Button>
            </div>
          </div>
          <aside className="border border-border-emphasis bg-cream p-6 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ash">
              Best fit
            </p>
            <p className="mt-4 font-heading text-xl font-semibold leading-snug text-ink">
              {page.bestFit}
            </p>
            <ul className="mt-6 space-y-3">
              {page.heroChecks.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate">
                  <CheckIcon className="mt-0.5 size-4 shrink-0 fill-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border py-5 text-xs text-ash">
          <p>
            Written and reviewed by <span className="font-semibold text-stone">Aditya Aman</span>,
            Founder and SEO Strategist
          </p>
          <p>Last updated July 28, 2026 · Research reviewed against the live SERP</p>
        </div>
      </Container>
    </div>
  )
}

function DirectAnswerSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="border-b border-border bg-cream py-16 sm:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[minmax(220px,0.65fr)_minmax(0,1.35fr)] lg:gap-14">
          <div>
            <Subheading>The short answer</Subheading>
            <Heading as="h2" className="mt-3">
              {page.name}
            </Heading>
          </div>
          <p className="text-lg leading-8 text-stone sm:text-xl sm:leading-9">
            {page.directAnswer}
          </p>
        </div>
      </Container>
    </section>
  )
}

function SearchJourneySection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-cream py-24">
      <Container>
        <SectionIntro
          eyebrow="Search demand"
          title={page.journeyTitle}
          lead={page.journeyLead}
        />
        <div className="mt-14 grid gap-px bg-border-strong lg:grid-cols-4">
          {page.searchJourneys.map((journey, index) => (
            <article key={journey.stage} className="bg-paper p-7">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                0{index + 1} · {journey.stage}
              </p>
              <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                {journey.intent}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{journey.explanation}</p>
              <p className="mt-6 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-ash">
                Example searches
              </p>
              <ul className="mt-3 space-y-2">
                {journey.examples.map((example) => (
                  <li key={example} className="text-sm leading-relaxed text-stone">
                    “{example}”
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-4 text-xs leading-relaxed text-ash">
                Conversion event: {journey.conversion}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ObstaclesSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-paper py-24">
      <Container>
        <SectionIntro
          eyebrow="What gets in the way"
          title={page.obstaclesTitle}
          lead={page.obstaclesLead}
        />
        <div className="mt-14 divide-y divide-border border-y border-border">
          {page.obstacles.map((obstacle, index) => (
            <article
              key={obstacle.title}
              className="grid gap-6 py-9 lg:grid-cols-[90px_minmax(220px,0.7fr)_minmax(0,1.3fr)] lg:gap-10"
            >
              <span className="font-display text-5xl italic text-accent/70">0{index + 1}</span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-ink">{obstacle.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{obstacle.problem}</p>
              </div>
              <div className="border-l-2 border-accent pl-6">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
                  Our response
                </p>
                <p className="mt-3 leading-relaxed text-stone">{obstacle.response}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function DeliverablesSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section id="deliverables" className="scroll-mt-10 bg-ink py-24 text-white">
      <Container>
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
            Scope and deliverables
          </p>
          <h2 className="mt-3 font-heading text-[clamp(36px,5vw,64px)] font-semibold leading-[1.05] tracking-tight">
            {page.deliverablesTitle}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">{page.deliverablesLead}</p>
        </div>
        <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
          {page.deliverables.map((service, index) => (
            <article key={service.title} className="bg-ink p-7 sm:p-8">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                0{index + 1}
              </p>
              <h3 className="mt-4 font-heading text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{service.description}</p>
              <ul className="mt-6 space-y-3">
                {service.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/80">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 fill-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function MidPageConversion({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="border-y border-accent bg-accent py-8 text-white">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-2xl font-heading text-2xl font-semibold leading-tight sm:text-3xl">
            {page.ctaTitle}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button variant="action" href="/contact">
              {page.primaryCta}
            </Button>
            <Button
              variant="outline"
              href="/pricing"
              className="border-white/50 text-white hover:border-white hover:bg-white hover:text-ink"
            >
              See engagement pricing
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

function AIVisibilitySection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-cream py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div>
            <SectionIntro
              eyebrow="Google + AI search"
              title={page.aiVisibility.title}
              lead={page.aiVisibility.lead}
            />
            <div className="mt-8 flex flex-wrap gap-2">
              {page.aiVisibility.platforms.map((platform) => (
                <span
                  key={platform}
                  className="border border-border-emphasis bg-paper px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-stone"
                >
                  {platform}
                </span>
              ))}
            </div>
            <p className="mt-8 text-sm leading-relaxed text-ash">{page.aiVisibility.boundary}</p>
            <ArrowLink href="/services/ai-search" className="mt-6">
              Explore our AI search optimization service
            </ArrowLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {page.aiVisibility.workstreams.map((workstream) => (
              <article key={workstream.title} className="border border-border bg-paper p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">{workstream.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">{workstream.description}</p>
                <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-ash">
                  Output: {workstream.output}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function ArchitectureSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-paper py-24">
      <Container>
        <SectionIntro
          eyebrow="Content architecture"
          title={page.architectureTitle}
          lead={page.architectureLead}
          center
        />
        <div className="mt-14 overflow-x-auto border border-border">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead className="bg-cream">
              <tr>
                <th className="px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  Page system
                </th>
                <th className="px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  Search job
                </th>
                <th className="px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  Example assets
                </th>
                <th className="px-6 py-4 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  Business signal
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {page.architecture.map((row) => (
                <tr key={row.pageType} className="align-top">
                  <th className="px-6 py-5 font-heading text-sm font-semibold text-ink">
                    {row.pageType}
                  </th>
                  <td className="px-6 py-5 text-sm leading-relaxed text-slate">{row.intent}</td>
                  <td className="px-6 py-5 text-sm leading-relaxed text-slate">{row.examples}</td>
                  <td className="px-6 py-5 text-sm leading-relaxed text-slate">{row.signal}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}

function ProcessSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-cream py-24">
      <Container>
        <SectionIntro eyebrow="How the engagement works" title={page.processTitle} lead={page.processLead} />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {page.process.map((step) => (
            <article key={step.number} className="border border-border bg-paper p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-4xl italic text-accent">{step.number}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ash">
                  {step.cadence}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate">{step.description}</p>
              <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-ash">
                Delivered: {step.output}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function MeasurementSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-paper py-24">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <SectionIntro
              eyebrow="Measurement"
              title={page.measurementTitle}
              lead={page.measurementLead}
            />
            <p className="mt-7 text-sm leading-relaxed text-ash">{page.measurementBoundary}</p>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {page.measurement.map((metric) => (
              <article key={metric.name} className="grid gap-3 py-6 sm:grid-cols-[180px_1fr]">
                <h3 className="font-heading text-sm font-semibold text-ink">{metric.name}</h3>
                <div>
                  <p className="text-sm leading-relaxed text-slate">{metric.definition}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ash">
                    Verified with: {metric.source}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function EvidenceSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-ink py-24 text-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
          <div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Evidence, not theatre
            </p>
            <h2 className="mt-3 font-heading text-[clamp(36px,5vw,60px)] font-semibold leading-[1.05] tracking-tight">
              {page.evidence.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">{page.evidence.lead}</p>
            <dl className="mt-9 space-y-5">
              {page.evidence.verifiedMetrics.map((metric) => (
                <div key={metric.label} className="border-l-2 border-accent pl-5">
                  <dt className="font-heading text-2xl font-semibold text-white">{metric.value}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-white/60">{metric.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-8 text-xs leading-relaxed text-white/45">{page.evidence.note}</p>
          </div>
          <div className="grid gap-6">
            {page.evidence.slots.map((slot) => {
              const graphic = getEvidenceGraphic(slot.label)

              return (
                <EvidencePlaceholder
                  key={slot.label}
                  label={slot.label}
                  description={slot.description}
                  aspect="wide"
                  graphic={graphic}
                  className={
                    graphic
                      ? 'border-white/15'
                      : '[&_figcaption]:text-white/55 [&>div]:bg-ink [&>div]:border-white/15 [&_p]:text-white/55'
                  }
                />
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

function FitAndSourcesSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="bg-paper py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionIntro eyebrow="Before we start" title={page.fitTitle} lead={page.fitLead} />
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <div className="border border-border bg-cream p-6">
                <h3 className="font-heading text-base font-semibold text-ink">Strong fit</h3>
                <ul className="mt-4 space-y-3">
                  {page.goodFit.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate">
                      <CheckIcon className="mt-0.5 size-4 shrink-0 fill-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-border bg-paper p-6">
                <h3 className="font-heading text-base font-semibold text-ink">Probably not a fit</h3>
                <ul className="mt-4 space-y-3">
                  {page.notFit.map((item) => (
                    <li key={item} className="text-sm leading-relaxed text-slate">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              <ArrowLink href="/pricing">See engagement pricing</ArrowLink>
              <ArrowLink href="/methodology">Review our methodology</ArrowLink>
            </div>
          </div>
          <aside className="border border-border bg-cream p-7 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
              Research and implementation references
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate">
              These primary sources inform the technical and content standards described on this
              page. They do not imply endorsement of TheProjectSEO.
            </p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {page.sources.map((source) => (
                <li key={source.url} className="py-5">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-heading text-sm font-semibold text-ink underline decoration-accent/40 underline-offset-4 hover:text-accent"
                  >
                    {source.label}
                  </a>
                  <p className="mt-2 text-xs leading-relaxed text-ash">{source.description}</p>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </Container>
    </section>
  )
}

function RelatedSection({ page }: { page: IndustryLeadPageData }) {
  return (
    <section className="border-y border-border bg-cream py-16">
      <Container>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ash">
          Continue planning
        </p>
        <div className="mt-6 grid gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
          {page.relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-paper p-6 transition-colors hover:bg-accent-soft"
            >
              <h3 className="font-heading text-base font-semibold text-ink group-hover:text-accent">
                {link.label}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{link.description}</p>
              <span className="mt-5 inline-block text-accent" aria-hidden="true">
                →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}

function buildSchema(page: IndustryLeadPageData): Record<string, unknown> {
  const pagePath = page.path ?? `/industries/${page.slug}`
  const parentBreadcrumb = page.parentBreadcrumb ?? {
    name: 'Industries',
    href: '/industries',
  }
  const url = `${SITE_URL}${pagePath}`

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.metaTitle,
        description: page.metaDescription,
        dateModified: '2026-07-28',
        inLanguage: 'en',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        author: {
          '@type': 'Person',
          name: 'Aditya Aman',
          url: `${SITE_URL}/company`,
        },
        about: { '@id': `${url}#service` },
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: page.schemaName ?? `${page.name} SEO services`,
        serviceType: page.serviceType,
        description: page.directAnswer,
        url,
        provider: ORGANIZATION_REF,
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'Country', name: 'Philippines' },
        ],
        audience: {
          '@type': 'BusinessAudience',
          audienceType: page.schemaAudience,
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: parentBreadcrumb.name,
            item: `${SITE_URL}${parentBreadcrumb.href}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: page.name,
            item: url,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
    ],
  }
}

export function IndustryLeadPage({ page }: { page: IndustryLeadPageData }) {
  return (
    <>
      <JsonLd data={buildSchema(page)} />
      <IndustryHero page={page} />
      <main>
        <DirectAnswerSection page={page} />
        <EvidenceSection page={page} />
        <DeliverablesSection page={page} />
        <MidPageConversion page={page} />
        <SearchJourneySection page={page} />
        <ObstaclesSection page={page} />
        <AIVisibilitySection page={page} />
        <ProcessSection page={page} />
        <ArchitectureSection page={page} />
        <MeasurementSection page={page} />
        <FitAndSourcesSection page={page} />
        <FAQDarkSection title={page.faqTitle} items={page.faqs} />
        <RelatedSection page={page} />
        <CTAFormSection
          subheading={page.ctaEyebrow}
          heading={page.ctaTitle}
          lead={page.ctaLead}
          benefits={page.ctaBenefits}
          submitText={page.primaryCta}
          formVariant="full"
        />
      </main>
      <Footer />
    </>
  )
}
