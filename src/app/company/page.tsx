import type { Metadata } from 'next'
import Link from 'next/link'
import { Avatar } from '@/components/avatar'
import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { CTAFormSection } from '@/components/service-page-sections'
import { Heading, Lead, Subheading } from '@/components/text'
import { SITE_URL } from '@/lib/organization-schema'
import { Linkedin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About TheProjectSEO | AI-Native SEO Agency in India',
  description:
    'Meet the India-based team behind TheProjectSEO and see how we combine technical SEO, content, authority, analytics, implementation, and AI-search measurement.',
  alternates: { canonical: '/company' },
  openGraph: {
    title: 'About TheProjectSEO | AI-Native SEO Agency in India',
    description:
      'Company facts, team, operating principles, AI boundaries, locations, methodology, and approved project evidence.',
    url: `${SITE_URL}/company`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About TheProjectSEO',
    description:
      'An India-headquartered SEO agency working across Google, Bing, and AI-assisted discovery.',
  },
}

const teamMembers = [
  {
    name: 'Aditya Aman',
    role: 'Founder and SEO Strategist',
    focus: 'Strategy, research systems, content, analytics, and delivery design',
    image: '/team/aditya-aman.png',
    linkedin: 'https://www.linkedin.com/in/adityaaman/',
  },
  {
    name: 'Shiraz Akmal',
    role: 'Technical Lead',
    focus: 'Technical SEO, site architecture, implementation, and quality assurance',
    image: '/team/shiraz-akmal.png',
    linkedin: 'https://www.linkedin.com/in/shiraz100/',
  },
  {
    name: 'Akash',
    role: 'Dev Lead',
    focus: 'Development leadership, implementation, performance, and technical quality assurance',
    image: undefined,
    linkedin: undefined,
  },
  {
    name: 'Smit Dholakiya',
    role: 'SEO Executive',
    focus: 'On-page SEO, research, content operations, and implementation support',
    image: '/team/smit-dholakiya.jpg',
    linkedin: 'https://www.linkedin.com/in/smit-dholakiya/',
  },
  {
    name: 'Mohd. Rushan',
    role: 'SEO Executive',
    focus: 'Authority research, outreach, off-page review, and campaign operations',
    image: '/team/mohd-rushan.jpeg',
    linkedin: 'https://www.linkedin.com/in/mohd-rushan/',
  },
]

const principles = [
  {
    title: 'One search system',
    body: 'Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity are treated as connected discovery surfaces with different access, ranking, retrieval, answer, and measurement boundaries—not as unrelated service add-ons.',
  },
  {
    title: 'Research before page production',
    body: 'Customer decisions, live SERPs, competitors, existing performance, source patterns, platform outputs, and implementation constraints establish what deserves a page or change.',
  },
  {
    title: 'Implementation is part of the method',
    body: 'A recommendation becomes useful when it has an owner, affected cohort, requirements, dependencies, acceptance criteria, release QA, evidence, and measurement annotation.',
  },
  {
    title: 'Claims need provenance',
    body: 'Numbers, examples, case studies, authors, reviewers, locations, awards, clients, capabilities, and platform observations must be approved, sourced, dated, or removed.',
  },
  {
    title: 'AI assists accountable people',
    body: 'Software and language models can help extract, compare, classify, draft, monitor, and test. They do not remove human responsibility for strategy, source choice, accuracy, approval, release, or interpretation.',
  },
  {
    title: 'Measurement includes limits',
    body: 'Reports separate observations from interpretations and causal confidence. Traffic estimates, Search Console data, prompt samples, citations, referrals, leads, and revenue are never presented as interchangeable.',
  },
]

const companyFacts = [
  ['Legal name', 'TheProjectSEO Digital (OPC) Private Limited'],
  ['Headquarters', 'Ranchi, Jharkhand, India'],
  ['Delivery model', 'Remote collaboration with named ownership and implementation workflows'],
  ['Dedicated locations', 'India and the Philippines'],
  ['Core focus', 'SEO, AI search, technical systems, content, authority, analytics, and implementation'],
  ['Starting investment', 'Ongoing engagements from USD $3,500 per month'],
]

const workflow = [
  {
    number: '01',
    title: 'Ground the context',
    body: 'We define the business question, customers, market, product facts, conversions, baseline, internal capacity, and decision rights before recommending activity.',
  },
  {
    number: '02',
    title: 'Build the evidence set',
    body: 'The team studies the live site, Search Console and analytics where available, crawls, SERPs, competitors, customer language, content, links, entities, and representative AI answers.',
  },
  {
    number: '03',
    title: 'Prioritize the constraint',
    body: 'Opportunities are compared by customer value, affected reach, evidence strength, dependency order, risk, implementation effort, reversibility, and measurement quality.',
  },
  {
    number: '04',
    title: 'Translate decisions into work',
    body: 'Priorities become briefs, tickets, source requirements, ownership, review gates, acceptance tests, and a release sequence your team can inspect.',
  },
  {
    number: '05',
    title: 'Implement and verify',
    body: 'TheProjectSEO implements within the agreed scope or works with internal owners. QA occurs on the rendered production behavior, not only in a document.',
  },
  {
    number: '06',
    title: 'Measure and change course',
    body: 'Versioned cohorts, annotations, outcomes, AI-answer observations, limitations, and decision logs determine what to scale, revise, consolidate, stop, or investigate.',
  },
]

const faqItems = [
  {
    question: 'What is TheProjectSEO?',
    answer:
      'TheProjectSEO is an India-headquartered SEO agency that combines technical SEO, content and page architecture, authority, analytics, implementation governance, and AI-search measurement. The work can cover Google Search, Bing, AI Overviews, AI Mode, ChatGPT, Gemini, Claude, and Perplexity where those surfaces support a real customer journey.',
  },
  {
    question: 'Where is TheProjectSEO based?',
    answer:
      'The legal company is headquartered in Ranchi, Jharkhand, India. Work is delivered remotely. Dedicated location pages are limited to India and the Philippines. The company page does not claim offices in the United States, Hong Kong, Singapore, Australia, other countries, or cities where no staffed office exists.',
  },
  {
    question: 'Who works on TheProjectSEO engagements?',
    answer:
      'The public team includes Aditya Aman, Shiraz Akmal, Akash, Smit Dholakiya, and Mohd. Rushan. The precise people, responsibilities, capacity, specialist review, and client-side owners are defined by the engagement rather than implied through an unsupported team-size or seniority statistic.',
  },
  {
    question: 'Why does TheProjectSEO call itself AI-native?',
    answer:
      'AI-native describes the operating model: structured context, reusable research and quality workflows, language-model assistance, automation, versioned evidence, and measurement are integrated into delivery. It does not mean automated publishing, private access to ranking systems, or guaranteed AI citations.',
  },
  {
    question: 'Does the agency guarantee Google rankings or AI recommendations?',
    answer:
      'No. Google, Microsoft, OpenAI, Anthropic, Google Gemini, Perplexity, and other platforms control their crawling, indexing, ranking, retrieval, answer generation, citation, and interfaces. TheProjectSEO improves eligible sources and measures observations; it cannot guarantee a position, mention, citation, traffic level, lead count, revenue, or result date.',
  },
  {
    question: 'What public evidence can TheProjectSEO show?',
    answer:
      'The approved public collection currently covers the owned projects Expressway.PH and TaxCalculator.com.ph. Each page labels the metric source, reporting window, interpretation, and limitation. Confidential client work is not published without explicit approval.',
  },
  {
    question: 'How can I evaluate whether the agency fits?',
    answer:
      'Review the methodology, pricing, approved case studies, services, boundaries, team, and source practices. A fit conversation should clarify the commercial question, implementation environment, owners, evidence, scope, measurement, exclusions, and claims the provider will not make.',
  },
]

export default function CompanyPage() {
  const organizationId = `${SITE_URL}/#organization`

  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'AboutPage',
              '@id': `${SITE_URL}/company#aboutpage`,
              url: `${SITE_URL}/company`,
              name: 'About TheProjectSEO',
              description: metadata.description,
              dateModified: '2026-07-28',
              about: { '@id': organizationId },
            },
            {
              '@type': 'Organization',
              '@id': organizationId,
              name: 'TheProjectSEO',
              legalName: 'TheProjectSEO Digital (OPC) Private Limited',
              url: SITE_URL,
              email: 'hello@theprojectseo.com',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Ranchi',
                addressRegion: 'Jharkhand',
                addressCountry: 'IN',
              },
              areaServed: [
                { '@type': 'Country', name: 'India' },
                { '@type': 'Country', name: 'Philippines' },
              ],
              member: teamMembers.map((member) => ({
                '@type': 'Person',
                name: member.name,
                jobTitle: member.role,
                sameAs: member.linkedin,
              })),
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
                  name: 'Company',
                  item: `${SITE_URL}/company`,
                },
              ],
            },
            {
              '@type': 'FAQPage',
              mainEntity: faqItems.map((faq) => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: { '@type': 'Answer', text: faq.answer },
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
              About TheProjectSEO · Ranchi, India
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,104px)] font-medium leading-[0.93] tracking-[-0.04em] text-ink">
              An SEO agency built for{' '}
              <em className="text-accent">Google and AI-assisted discovery.</em>
            </h1>
            <Lead className="mt-8 max-w-3xl">
              TheProjectSEO combines technical SEO, content and page systems,
              authority, analytics, implementation governance, and AI-search
              measurement. The team is headquartered in Ranchi and works
              remotely with explicit sources, owners, QA, and commercial
              outcomes.
            </Lead>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/methodology">See how we work</Button>
              <Button href="/contact" variant="outline">
                Discuss a project
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <Subheading>Direct answer</Subheading>
              <Heading as="h2" className="mt-3">
                Who is TheProjectSEO?
              </Heading>
            </div>
            <div className="space-y-6 text-base leading-8 text-slate">
              <p>
                TheProjectSEO is the trading brand of TheProjectSEO Digital
                (OPC) Private Limited, an SEO company headquartered in Ranchi,
                Jharkhand, India. The agency’s public location strategy is
                limited to India and the Philippines.
              </p>
              <p>
                We help organizations improve how useful sources are discovered,
                understood, ranked, cited, and measured across Google, Bing,
                AI Overviews, ChatGPT, Gemini, Claude, and Perplexity. The
                platforms do not share one ranking system, so the method keeps
                platform-specific access, prompts, citations, sources,
                accuracy, referrals, and limitations separate.
              </p>
              <p>
                The company does not claim hundreds of number-one rankings,
                a fixed average traffic increase, thousands of completed
                projects, twelve years of agency history, a global office
                network, or a guaranteed result. Public claims are restricted
                to facts and evidence that can be approved and contextualized.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Company facts</Subheading>
            <Heading as="h2" className="mt-3">
              Entity details customers and platforms can verify.
            </Heading>
          </div>
          <div className="mt-14 grid gap-px bg-border-strong md:grid-cols-2">
            {companyFacts.map(([label, value]) => (
              <div key={label} className="bg-paper p-7">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
                  {label}
                </p>
                <p className="mt-3 font-heading text-lg font-semibold text-ink">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading dark>Operating principles</Subheading>
            <Heading as="h2" dark className="mt-3">
              What guides the work?
            </Heading>
            <p className="mt-6 text-lg leading-8 text-white/70">
              The principles are intentionally more specific than “data-driven”
              or “results-focused.” They describe the decisions and boundaries
              a client can inspect.
            </p>
          </div>
          <div className="mt-14 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <article key={principle.title} className="bg-ink p-8">
                <p className="font-mono text-xs text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/65">
                  {principle.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>People</Subheading>
            <Heading as="h2" className="mt-3">
              Meet the public team.
            </Heading>
            <Lead className="mt-6">
              Roles below describe focus areas, not a claim that every person
              appears on every engagement. A proposal defines actual ownership,
              capacity, specialists, client-side counterparts, and review paths.
            </Lead>
          </div>
          <div className="mt-14 grid gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-5">
            {teamMembers.map((member) => (
              <article key={member.name} className="bg-paper p-6">
                <Avatar
                  name={member.name}
                  src={member.image}
                  size={88}
                  className="border-2 border-accent/20"
                />
                <h3 className="mt-5 font-heading text-lg font-semibold text-ink">
                  {member.name}
                </h3>
                <p className="mt-2 font-mono text-[10px] font-semibold uppercase leading-5 tracking-[0.1em] text-accent">
                  {member.role}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate">{member.focus}</p>
                {member.linkedin ? (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink underline"
                  >
                    <Linkedin className="size-4" aria-hidden="true" />
                    LinkedIn
                  </a>
                ) : null}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Delivery</Subheading>
            <Heading as="h2" className="mt-3">
              How does the team move from evidence to release?
            </Heading>
            <Lead className="mt-6">
              The workflow applies to technical, content, authority, analytics,
              local, ecommerce, and AI-search work. Scope controls which steps
              and specialists are required.
            </Lead>
          </div>
          <div className="mt-14 divide-y divide-border-strong border-y border-border-strong">
            {workflow.map((step) => (
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

      <section className="bg-paper py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Subheading>AI-native, not AI-autonomous</Subheading>
              <Heading as="h2" className="mt-3">
                Where does AI assist the agency?
              </Heading>
              <p className="mt-6 text-base leading-8 text-slate">
                The toolchain can assist research collection, corpus analysis,
                classification, entity and topic comparison, draft evaluation,
                repetitive QA, monitoring, and reporting preparation. The local
                Python content optimizer used on this site compares rendered
                pages with live competitor corpora and produces a scorecard and
                brief.
              </p>
              <p className="mt-5 text-base leading-8 text-slate">
                Scores do not override truth, natural language, user value,
                design, accessibility, compliance, or platform policy. Strategy,
                claims, sources, editorial judgment, approval, implementation,
                and causal interpretation remain accountable human decisions.
              </p>
            </div>
            <div>
              <Subheading>Human controls</Subheading>
              <Heading as="h2" className="mt-3">
                What retains named review?
              </Heading>
              <ul className="mt-6 space-y-4">
                {[
                  'Business, product, customer, market, pricing, location, people, and case-study facts',
                  'YMYL, regulated, legal, financial, health, safety, or compliance-sensitive claims',
                  'Source selection, evidence sufficiency, attribution, disclosure, and publication approval',
                  'Canonical page purpose, consolidation, redirects, migrations, indexing, and material technical changes',
                  'Client deliverables, release acceptance, measurement conclusions, and commercial recommendations',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-7 text-slate">
                    <CheckIcon className="mt-1 size-4 shrink-0 fill-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-cream py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Approved evidence</Subheading>
            <Heading as="h2" className="mt-3">
              Which public project results can you inspect?
            </Heading>
            <Lead className="mt-6">
              The public collection is deliberately limited to two owned
              projects with supplied evidence and explicit metric context.
            </Lead>
          </div>
          <div className="mt-12 grid gap-px bg-border-strong lg:grid-cols-2">
            <Link
              href="/case-studies/expressway-ph"
              className="bg-paper p-8 transition-colors hover:bg-white"
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                Expressway.PH · July 2026 Ahrefs snapshot
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">
                49.2K estimated monthly organic traffic
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate">
                Also 6.8K organic keywords, 3.4K AI Overview responses, and
                2.4K ChatGPT responses in the supplied Ahrefs view. The page
                explains what each sampled metric does and does not mean.
              </p>
            </Link>
            <Link
              href="/case-studies/taxcalculator-com-ph"
              className="bg-paper p-8 transition-colors hover:bg-white"
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                TaxCalculator.com.ph · supplied Search Console view
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-ink">
                32.3K impressions and 335 clicks
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate">
                The selected three-month view is reported with the June 2026
                launch context, so readers do not mistake it for three full
                mature months or a forecast.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Subheading>Frequently asked questions</Subheading>
              <Heading as="h2" className="mt-3">
                Evaluate the company, not a slogan.
              </Heading>
            </div>
            <FAQAccordion title="About TheProjectSEO" items={faqItems} />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-cream py-16">
        <Container>
          <p className="text-sm leading-7 text-slate">
            Written and reviewed by{' '}
            <span className="font-semibold text-ink">Aditya Aman</span>, Founder
            and SEO Strategist. Last updated July 28, 2026. Review the{' '}
            <Link className="font-semibold text-accent underline" href="/methodology">
              full methodology
            </Link>
            ,{' '}
            <Link className="font-semibold text-accent underline" href="/pricing">
              pricing and scope
            </Link>
            , or{' '}
            <Link className="font-semibold text-accent underline" href="/case-studies">
              approved evidence
            </Link>
            .
          </p>
        </Container>
      </section>

      <CTAFormSection
        subheading="Discuss the fit"
        heading="Bring the search problem and implementation context."
        lead="Share the site, market, customer decision, commercial goal, available evidence, internal owners, and constraints. We will identify the appropriate next step without promising a ranking or result date."
        benefits={[
          'Direct access to the public methodology and evidence standard',
          'Scope with owners, dependencies, implementation, and measurement',
          'Google and AI-search work treated as one connected discovery system',
        ]}
        submitText="Share the project context"
        formVariant="full"
      />

      <Footer />
    </main>
  )
}
