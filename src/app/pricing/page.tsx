import type { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import { Container } from '@/components/container'
import { EvidencePlaceholder } from '@/components/evidence-placeholder'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { CTAFormSection } from '@/components/service-page-sections'
import { Heading, Lead, Subheading } from '@/components/text'
import type { SeoPlanValue } from '@/data/pricing'
import { ORGANIZATION_REF, SITE_URL } from '@/lib/organization-schema'

const pricingHeroLead =
  'See how TheProjectSEO prices integrated SEO and AI-search engagements, what the $3,500 monthly starting point includes, and which scope factors change a proposal.'

const pricingHeroDetail =
  'That is the starting investment for ongoing work, not a pre-packed list of articles and links. We scope technical SEO, content, authority, analytics, implementation, and AI-search work around the customer decisions and business outcomes that matter.'

export const metadata: Metadata = {
  title: 'SEO Agency Pricing: Retainers from $3,500/mo | TheProjectSEO',
  description: pricingHeroLead,
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'SEO Agency Pricing: Retainers from $3,500/mo',
    description:
      'Transparent pricing principles for technical SEO, content, authority, analytics, and AI-search work.',
    url: `${SITE_URL}/pricing`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Agency Pricing: Retainers from $3,500/mo',
    description:
      'Understand the starting investment, scope variables, delivery model, and measurement behind a TheProjectSEO proposal.',
  },
}

const scopeFactors = [
  {
    factor: 'Website and template scale',
    why: 'A 40-page lead-generation site and a marketplace with millions of parameter combinations require different crawl analysis, governance, QA, and implementation capacity.',
    evidence:
      'Indexed URLs, crawlable templates, rendering paths, parameters, languages, properties, and release frequency.',
  },
  {
    factor: 'Search market and competition',
    why: 'The work changes when a site must displace established publishers, aggregators, marketplaces, or category leaders across several countries.',
    evidence:
      'Relevant competitors, result types, link and entity gaps, content depth, market count, and realistic opportunity bands.',
  },
  {
    factor: 'Content and subject expertise',
    why: 'Regulated, technical, or multi-product companies need interviews, evidence, specialist review, compliance ownership, and a more controlled publishing process.',
    evidence:
      'Page backlog, review steps, subject-matter access, research burden, update frequency, and approval turnaround.',
  },
  {
    factor: 'Technical implementation',
    why: 'Advice alone costs less than an engagement in which we write tickets, change templates, test releases, coordinate developers, and verify production outcomes.',
    evidence:
      'CMS, framework, developer access, backlog ownership, testing environments, deployment cadence, and migration risk.',
  },
  {
    factor: 'Authority and digital PR',
    why: 'Authority work is based on relevance, editorial merit, evidence, and outreach—not a fixed number of links bought according to a third-party score.',
    evidence:
      'Existing reputation, original data, expert access, publication fit, risk tolerance, and outreach or research scope.',
  },
  {
    factor: 'Measurement and AI-search coverage',
    why: 'Basic Search Console reporting is simpler than joining analytics, CRM, revenue, AI-answer samples, citations, prompts, and competitive share of voice.',
    evidence:
      'Data sources, event quality, CRM access, markets, prompts, platforms, reporting frequency, and attribution questions.',
  },
]

const workstreams = [
  {
    name: 'Research and prioritization',
    description:
      'Live SERPs, customer questions, competitors, existing performance, business economics, and implementation constraints become a ranked opportunity backlog.',
  },
  {
    name: 'Technical and page systems',
    description:
      'Crawling, rendering, indexing, architecture, templates, structured data, internal links, performance, migrations, and release acceptance tests.',
  },
  {
    name: 'Content and entity development',
    description:
      'Decision pages, supporting resources, expert inputs, citations, definitions, comparisons, refreshes, consolidation, and machine-readable context.',
  },
  {
    name: 'Authority and source eligibility',
    description:
      'Editorially defensible research, digital PR, relevant links, citations, profiles, reviews, mentions, and entity consistency across independent sources.',
  },
  {
    name: 'Google and AI-search measurement',
    description:
      'Queries, landing pages, conversions, revenue where available, prompt cohorts, source selection, citations, accuracy, visibility, and competitive movement.',
  },
  {
    name: 'Implementation governance',
    description:
      'Briefs, tickets, owners, review gates, release QA, evidence capture, decision logs, stakeholder communication, and next-action reporting.',
  },
]

const models: Array<{
  name: string
  price: string
  plan: SeoPlanValue
  fit: string
  scope: string
}> = [
  {
    name: 'Initial',
    price: '$3,500/month',
    plan: 'initial-3500',
    fit: 'For teams that need continuous research, implementation, content or page improvement, authority development, and measurement.',
    scope:
      'A custom mix of technical SEO, content and page architecture, AI-search optimization, analytics, authority, and delivery governance. The proposal states the monthly capacity, priority workstreams, owners, dependencies, and review cadence.',
  },
  {
    name: 'Growth',
    price: '$5,500/month',
    plan: 'growth-5500',
    fit: 'For teams that need several SEO, content, authority, analytics, and AI-search workstreams in parallel.',
    scope:
      'A custom mix of technical SEO, content and page architecture, AI-search optimization, analytics, authority, and delivery governance. The proposal states the monthly capacity, priority workstreams, owners, dependencies, and review cadence.',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    plan: 'enterprise-custom',
    fit: 'For large sites, multiple business units, several markets, regulated review, high release volume, or significant analytics and governance requirements.',
    scope:
      'Capacity and decision rights are designed around the operating environment. The scope may include multiple specialists, workstream leads, developer collaboration, data engineering, executive reporting, and formal QA.',
  },
]

const quoteSteps = [
  {
    number: '01',
    title: 'Confirm the commercial problem',
    body: 'We identify the products, services, markets, customer decisions, conversions, economics, and business constraint that organic discovery is expected to influence. “More traffic” is not a sufficient scope.',
  },
  {
    number: '02',
    title: 'Inspect the current system',
    body: 'We review the site, search footprint, technical shape, existing pages, data quality, competitors, authority, internal capacity, and current AI-answer visibility. Access improves precision but is not required for an initial conversation.',
  },
  {
    number: '03',
    title: 'Separate opportunity from maintenance',
    body: 'The proposal distinguishes growth work from essential maintenance, measurement, governance, or risk control. This prevents a visible content calendar from hiding technical or operational work that the site actually needs.',
  },
  {
    number: '04',
    title: 'Set capacity and ownership',
    body: 'We state what TheProjectSEO owns, what your team owns, which specialists or reviewers are required, how work enters production, and how monthly priorities may change when evidence changes.',
  },
  {
    number: '05',
    title: 'Define measurement and boundaries',
    body: 'The scope names baselines, reporting cohorts, business outcomes, review cadence, exclusions, dependencies, and known attribution limits. It does not promise a ranking, citation, traffic number, or result date.',
  },
]

const faqItems = [
  {
    question: 'How much do TheProjectSEO retainers cost?',
    answer:
      'Ongoing integrated SEO and AI-search engagements start at USD $3,500 per month. A final proposal depends on site scale, markets, competition, implementation ownership, content and specialist-review needs, authority work, analytics, AI platforms, and delivery capacity. The starting figure is not a promise that every requirement fits inside that scope.',
  },
  {
    question: 'Is AI-search optimization an extra add-on?',
    answer:
      'Not by default. We treat Google Search, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity as connected discovery systems with different interfaces and evidence paths. The monthly work is scoped around the platforms and customer journeys that matter. Unusually large monitoring, research, or data requirements may change the price.',
  },
  {
    question: 'What is included in a $3,500 monthly engagement?',
    answer:
      'The exact mix is set after diagnosis. A focused engagement can include opportunity research, technical priorities, high-intent page improvement, internal linking, structured data, AI-answer sampling, analytics, implementation briefs, release QA, and reporting. It cannot responsibly include unlimited pages, unlimited development, a fixed link quota, or every possible workstream.',
  },
  {
    question: 'Do you sell articles or backlinks individually?',
    answer:
      'The pricing page does not sell commodity articles or links by word count or Domain Rating. Content is scoped around a customer decision, evidence burden, format, expert access, distribution, and maintenance need. Authority work is based on relevance and editorial merit. Any third-party cost is disclosed before approval.',
  },
  {
    question: 'Can TheProjectSEO guarantee rankings or AI citations?',
    answer:
      'No. Search engines and AI platforms control crawling, indexing, ranking, source selection, answer generation, interfaces, and changes to their systems. We can diagnose, implement, measure, and improve eligible signals; we cannot guarantee a position, citation, traffic outcome, or timetable.',
  },
  {
    question: 'How long is the contract?',
    answer:
      'Commercial terms are confirmed in the proposal and agreement. We do not use this page to claim that every engagement is month-to-month or cancellable under identical conditions. The appropriate term depends on scope, onboarding cost, capacity reservation, project risk, and procurement requirements.',
  },
  {
    question: 'What can make an SEO proposal more expensive?',
    answer:
      'Large or technically complex sites, multiple markets, migrations, weak analytics, regulated review, extensive content production, developer implementation, original research, digital PR, large prompt sets, multiple AI platforms, and frequent executive reporting all increase the work. Fast approvals and clear internal ownership often reduce wasted capacity.',
  },
  {
    question: 'What should I compare between SEO agency proposals?',
    answer:
      'Compare the diagnosis, assumptions, named workstreams, people and ownership, implementation depth, evidence standards, reporting cohorts, exclusions, third-party costs, change process, and claims the provider refuses to make. Deliverable counts alone do not show whether the work addresses the real constraint.',
  },
]

const sources = [
  {
    label: 'Ahrefs SEO pricing survey',
    href: 'https://ahrefs.com/blog/seo-pricing/',
    note: 'A 2024 survey of 439 providers covering retainers, projects, hourly pricing, regions, and provider types. It supplies market context, not a rule for this proposal.',
  },
  {
    label: 'Semrush: what affects SEO pricing',
    href: 'https://www.semrush.com/blog/seo-pricing/',
    note: 'An overview of provider models and variables that change the cost of external SEO work.',
  },
  {
    label: 'Google Search Essentials',
    href: 'https://developers.google.com/search/docs/essentials',
    note: 'Google’s technical requirements, spam policies, and core Search practices, including the reminder that eligibility does not guarantee appearance.',
  },
  {
    label: 'Google SEO Starter Guide',
    href: 'https://developers.google.com/search/docs/fundamentals/seo-starter-guide',
    note: 'Google’s explanation of SEO and its explicit statement that no method automatically guarantees first place.',
  },
  {
    label: 'Google: AI features and your website',
    href: 'https://developers.google.com/search/docs/appearance/ai-features',
    note: 'Google’s published requirements and measurement guidance for AI Overviews and AI Mode.',
  },
]

export default function PricingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebPage',
              '@id': `${SITE_URL}/pricing/#webpage`,
              url: `${SITE_URL}/pricing`,
              name: 'SEO Agency Pricing',
              description: metadata.description,
              dateModified: '2026-07-28',
              author: ORGANIZATION_REF,
              isPartOf: { '@id': `${SITE_URL}/#website` },
            },
            {
              '@type': 'Service',
              '@id': `${SITE_URL}/pricing/#service`,
              name: 'Integrated SEO and AI-search services',
              provider: ORGANIZATION_REF,
              areaServed: [
                { '@type': 'Country', name: 'India' },
                { '@type': 'Country', name: 'Philippines' },
              ],
              offers: [
                {
                  '@type': 'Offer',
                  name: 'Initial',
                  price: '3500',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '3500',
                    priceCurrency: 'USD',
                    unitText: 'MONTH',
                  },
                  description: 'Initial monthly engagement.',
                },
                {
                  '@type': 'Offer',
                  name: 'Growth',
                  price: '5500',
                  priceCurrency: 'USD',
                  priceSpecification: {
                    '@type': 'UnitPriceSpecification',
                    price: '5500',
                    priceCurrency: 'USD',
                    unitText: 'MONTH',
                  },
                  description: 'Growth monthly engagement.',
                },
                {
                  '@type': 'Offer',
                  name: 'Enterprise',
                  priceCurrency: 'USD',
                  description: 'Custom enterprise engagement.',
                },
              ],
            },
            {
              '@type': 'BreadcrumbList',
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
                  name: 'Pricing',
                  item: `${SITE_URL}/pricing`,
                },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: faqItems.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            },
          ],
        }}
      />

      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="py-20 sm:py-28">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              SEO pricing · Updated July 28, 2026
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,104px)] font-medium leading-[0.93] tracking-[-0.04em] text-ink">
              SEO and AI-search retainers from{' '}
              <em className="text-accent">$3,500/month.</em>
            </h1>
            <Lead className="mt-8 max-w-3xl">{pricingHeroLead}</Lead>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Request a scoped proposal</Button>
              <Button href="/methodology" variant="outline">
                Review the methodology
              </Button>
            </div>
            <div className="mt-12 grid max-w-5xl gap-px bg-border-strong sm:grid-cols-3">
              {[
                ['Starting point', '$3,500 USD / month'],
                ['AI-search scope', 'Integrated where relevant'],
                ['Guarantees', 'No ranking or citation promises'],
              ].map(([label, value]) => (
                <div key={label} className="bg-paper p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash">
                    {label}
                  </p>
                  <p className="mt-3 font-heading text-lg font-semibold text-ink">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Subheading>Direct answer</Subheading>
              <Heading as="h2" className="mt-3">
                What does SEO cost?
              </Heading>
            </div>
            <div className="space-y-6 text-base leading-8 text-slate">
              <p>{pricingHeroDetail}</p>
              <p>
                There is no single responsible market price for SEO. A retainer
                can mean monitoring one local site, rebuilding a large ecommerce
                architecture, publishing expert-reviewed decision pages,
                supporting a migration, or joining Search Console, analytics,
                CRM, revenue, and AI-answer data. Comparing only the monthly
                number hides the work.
              </p>
              <p>
                Ahrefs’ 2024 survey of 439 providers reported an average monthly
                cost of $2,917 and an agency average of $3,209. It also found
                wide variation by provider type, region, experience, and market.
                Those figures are useful context, but they do not determine what
                your site requires or what TheProjectSEO will propose.
              </p>
              <p>
                Our ongoing engagements start at $3,500 per month. We use an
                initial diagnosis to choose the workstreams, capacity, owners,
                evidence, and measurement model. A proposal should explain why
                the scope costs what it costs—and what will not be attempted
                inside it.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Engagement models</Subheading>
            <Heading as="h2" className="mt-3">
              Start with the operating problem, not a package name.
            </Heading>
            <Lead className="mt-6">
              These models explain how we scope work. Initial and Growth rates
              are published; Enterprise requirements are custom because they can
              vary too widely for a credible fixed quote.
            </Lead>
          </div>
          <div className="mt-14 grid gap-px bg-border-strong lg:grid-cols-3">
            {models.map((model) => (
              <article key={model.name} className="flex flex-col bg-paper p-8">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.12em] text-accent">
                  {model.price}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">
                  {model.name}
                </h3>
                <p className="mt-5 text-sm font-medium leading-6 text-ink">
                  {model.fit}
                </p>
                <p className="mt-5 text-sm leading-7 text-slate">
                  {model.scope}
                </p>
                <Button
                  href={`/contact?plan=${model.plan}#contact-form`}
                  className="mt-8 w-full"
                >
                  {model.name === 'Enterprise' ? 'Contact us' : 'Get started'}
                </Button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading dark>What the retainer funds</Subheading>
            <Heading as="h2" dark className="mt-3">
              Six connected workstreams, selected by evidence.
            </Heading>
            <p className="mt-6 text-lg leading-8 text-white/70">
              A smaller engagement concentrates on the most consequential
              constraint. A larger programme can run several streams in
              parallel. Capacity is never described as unlimited.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {workstreams.map((stream, index) => (
              <article key={stream.name} className="bg-ink p-8">
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                  {stream.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {stream.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Scope variables</Subheading>
            <Heading as="h2" className="mt-3">
              Why can two SEO proposals have different prices?
            </Heading>
            <Lead className="mt-6">
              Price should change when the amount of research, implementation,
              production, risk, review, measurement, or coordination changes.
              These are the variables we inspect.
            </Lead>
          </div>
          <div className="mt-14 overflow-x-auto border border-border-strong bg-paper">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead>
                <tr className="border-b border-border-strong bg-paper">
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    Factor
                  </th>
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    Why it changes the work
                  </th>
                  <th className="p-5 font-mono text-xs uppercase tracking-[0.1em] text-ash">
                    What we inspect
                  </th>
                </tr>
              </thead>
              <tbody>
                {scopeFactors.map((item) => (
                  <tr
                    key={item.factor}
                    className="border-b border-border last:border-0"
                  >
                    <th className="p-5 align-top font-heading text-base font-semibold text-ink">
                      {item.factor}
                    </th>
                    <td className="p-5 align-top text-sm leading-7 text-slate">
                      {item.why}
                    </td>
                    <td className="p-5 align-top text-sm leading-7 text-slate">
                      {item.evidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>How a quote is built</Subheading>
            <Heading as="h2" className="mt-3">
              From business question to accountable scope.
            </Heading>
          </div>
          <div className="mt-14 divide-y divide-border-strong border-y border-border-strong">
            {quoteSteps.map((step) => (
              <article
                key={step.number}
                className="grid gap-5 py-8 md:grid-cols-[90px_0.8fr_1.4fr]"
              >
                <p className="font-mono text-sm font-semibold text-accent">
                  {step.number}
                </p>
                <h3 className="font-heading text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-slate">{step.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Subheading>Commercial boundaries</Subheading>
              <Heading as="h2" className="mt-3">
                What we do not sell.
              </Heading>
              <p className="mt-6 text-base leading-8 text-slate">
                A transparent price is incomplete without boundaries. We do not
                price links by DR, sell bulk pages without a usefulness and
                uniqueness case, disguise third-party media costs, promise
                rankings, or present AI-answer monitoring as guaranteed
                influence over a platform.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  'No guaranteed Google position, AI citation, traffic figure, lead volume, revenue, or result date.',
                  'No unlimited page, article, revision, development, outreach, market, prompt, or platform promise.',
                  'No fake office, review, author, expert, benchmark, award, partnership, case study, or customer result.',
                  'No fixed backlink quota that rewards volume over relevance, editorial merit, and risk.',
                  'No reporting that combines incompatible markets or hides measurement limitations.',
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-slate"
                  >
                    <CheckIcon className="mt-1 size-4 shrink-0 fill-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Subheading>Evidence to add</Subheading>
              <Heading as="h2" className="mt-3">
                Show how capacity becomes work.
              </Heading>
              <p className="mt-6 text-base leading-8 text-slate">
                These slots are intentionally empty until the final,
                non-confidential screenshots are supplied.
              </p>
              <div className="mt-8 space-y-6">
                <EvidencePlaceholder
                  label="Example scoped roadmap"
                  description="Add an approved roadmap view showing priorities, owners, workstreams, and acceptance criteria without client-confidential data."
                />
                <EvidencePlaceholder
                  label="Example measurement view"
                  description="Add an approved reporting screenshot connecting search and AI visibility to the relevant conversion or business cohort."
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Evaluation guide</Subheading>
            <Heading as="h2" className="mt-3">
              How should you compare SEO pricing proposals?
            </Heading>
            <Lead className="mt-6">
              Ask whether the proposal explains the operating model behind the
              number. A long deliverable list can still omit the constraint that
              controls growth.
            </Lead>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                'Diagnosis',
                'Does it name the customer decision, search opportunity, technical constraint, evidence, and assumptions?',
              ],
              [
                'People',
                'Who makes decisions, researches, writes, reviews, implements, tests, reports, and speaks with your team?',
              ],
              [
                'Capacity',
                'Which workstreams fit simultaneously, how are priorities changed, and what is explicitly outside scope?',
              ],
              [
                'Implementation',
                'Does the provider stop at recommendations, or own tickets, changes, QA, and verification?',
              ],
              [
                'Measurement',
                'Are baselines, conversion cohorts, AI samples, sources, limits, and business outcomes defined?',
              ],
              [
                'Risk',
                'What does the provider refuse to guarantee, automate, publish, buy, or represent inaccurately?',
              ],
            ].map(([title, body]) => (
              <article key={title} className="border border-border-strong p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-sm leading-7 text-slate">
            See our{' '}
            <Link
              className="font-semibold text-accent underline"
              href="/methodology"
            >
              methodology
            </Link>
            , review the{' '}
            <Link
              className="font-semibold text-accent underline"
              href="/services"
            >
              service architecture
            </Link>
            , or inspect the approved{' '}
            <Link
              className="font-semibold text-accent underline"
              href="/case-studies"
            >
              case-study evidence
            </Link>{' '}
            before requesting a proposal.
          </p>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Subheading>Frequently asked questions</Subheading>
              <Heading as="h2" className="mt-3">
                Questions buyers should ask before signing.
              </Heading>
            </div>
            <FAQAccordion
              title="SEO agency pricing questions"
              items={faqItems}
            />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-20">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Sources and update policy</Subheading>
            <Heading as="h2" className="mt-3">
              Pricing context you can inspect.
            </Heading>
            <p className="mt-5 text-sm leading-7 text-slate">
              Market figures are dated and attributed. TheProjectSEO’s starting
              price is first-party commercial information. This page was
              reviewed by TheProjectSEO and updated July 28, 2026.
            </p>
          </div>
          <div className="mt-10 grid gap-px bg-border-strong lg:grid-cols-2">
            {sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noreferrer"
                className="bg-paper p-6 transition-colors hover:bg-cream"
              >
                <h3 className="font-heading text-base font-semibold text-ink">
                  {source.label}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate">
                  {source.note}
                </p>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <CTAFormSection
        subheading="Request a scope"
        heading="Find out what $3,500—or a larger programme—should fund."
        lead="Share the site, markets, commercial goal, current team, and implementation constraints. We will identify the information needed for a responsible scope rather than sending a generic package."
        benefits={[
          'Opportunity and constraint review',
          'Named workstreams, capacity, ownership, and exclusions',
          'Google and AI-search measurement matched to the buying journey',
        ]}
        submitText="Request a scoped proposal"
        formVariant="full"
      />

      <Footer />
    </main>
  )
}
