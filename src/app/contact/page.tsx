import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckIcon } from '@/components/check-icon'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { LeadForm } from '@/components/lead-form'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { ORGANIZATION_REF, SITE_URL } from '@/lib/organization-schema'
import { Mail, MapPin, SearchCheck } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact TheProjectSEO | Discuss SEO & AI Search',
  description:
    'Share your website, market, search goal, current data, and implementation constraints with TheProjectSEO. Ongoing engagements start at $3,500 per month.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact TheProjectSEO',
    description:
      'Discuss an integrated SEO and AI-search engagement for Google, Bing, AI Overviews, ChatGPT, Gemini, Claude, and Perplexity.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TheProjectSEO',
    description:
      'Share the commercial goal, site, market, and implementation context needed for a responsible SEO scope.',
  },
}

const fitChecks = [
  'A real product, service, publication, marketplace, utility, or organization with a clear customer or audience',
  'A search problem connected to qualified enquiries, pipeline, bookings, orders, subscriptions, usage, or another defined outcome',
  'Access to the people, product facts, source data, analytics, CMS, developers, reviewers, or evidence the agreed scope requires',
  'Permission to improve implementation and page systems, not only receive reports',
  'A monthly investment starting at $3,500 for ongoing work, or a defined problem that can be scoped as a project',
]

const intakeItems = [
  {
    title: 'Website and properties',
    body: 'Share the primary domain and any relevant subdomains, apps, regional sites, marketplaces, profiles, or migrations. Do not send passwords through the form.',
  },
  {
    title: 'Commercial question',
    body: 'Explain which product, service, market, customer decision, or outcome needs to change. “More traffic” is less useful than the specific demand or conversion problem.',
  },
  {
    title: 'Current evidence',
    body: 'Describe available Search Console, analytics, CRM, ranking, crawl, AI-answer, sales, support, or customer research. Access can be arranged later if the engagement fits.',
  },
  {
    title: 'Implementation environment',
    body: 'Tell us who owns the CMS, code, analytics, content, legal or compliance review, releases, and final approval. Recommendations need an implementation path.',
  },
  {
    title: 'Timing and risk',
    body: 'Mention migrations, redesigns, launches, seasonal windows, incidents, stakeholder deadlines, regulatory review, or dependencies that could change sequencing.',
  },
  {
    title: 'Budget and procurement',
    body: 'Choose the closest range and note any contract, vendor, security, data, invoicing, or approval requirements. The starting monthly investment is $3,500.',
  },
]

const nextSteps = [
  {
    number: '01',
    title: 'Fit and context review',
    body: 'We review the site, form details, stated market, desired outcome, and obvious constraints. This is a fit check, not a promise that a complete audit has been performed.',
  },
  {
    number: '02',
    title: 'Clarification if needed',
    body: 'If the problem is potentially suitable, we may request specific context or arrange a working conversation with the appropriate decision maker and implementation owner.',
  },
  {
    number: '03',
    title: 'Diagnostic and scope',
    body: 'The appropriate discovery may include site, SERP, competitor, data, customer, technical, content, authority, and AI-answer evidence. The resulting scope names priorities, capacity, owners, dependencies, measurement, and exclusions.',
  },
  {
    number: '04',
    title: 'Decision without pressure',
    body: 'You can compare the diagnosis, methodology, commercial terms, evidence standard, and boundaries. We do not use a guaranteed ranking, citation, traffic number, or artificial result deadline to force the decision.',
  },
]

const faqItems = [
  {
    question: 'How much does it cost to work with TheProjectSEO?',
    answer:
      'Ongoing integrated SEO and AI-search engagements start at USD $3,500 per month. The final price depends on the site, markets, competition, implementation ownership, content and expert-review requirements, authority work, analytics, AI platforms, and delivery capacity. Focused diagnostics and enterprise programmes are custom scoped.',
  },
  {
    question: 'Will I receive a free SEO audit after submitting the form?',
    answer:
      'The form starts a fit and context review. We may identify obvious questions or opportunities, but we do not promise a complete free audit, keyword plan, competitor analysis, or implementation roadmap to every submission. A responsible audit requires a defined scope and sufficient evidence.',
  },
  {
    question: 'Where is TheProjectSEO located?',
    answer:
      'TheProjectSEO is headquartered in Ranchi, Jharkhand, India. Work is delivered remotely. The dedicated location pages cover India and the Philippines; the site does not claim offices in other countries or in Indian or Philippine cities where no staffed office exists.',
  },
  {
    question: 'Which search platforms can an engagement cover?',
    answer:
      'Depending on the customer journey and available evidence, work can cover Google Search, Bing, AI Overviews, AI Mode, ChatGPT, Gemini, Claude, and Perplexity. These platforms do not expose one shared ranking system, so access, source, prompt, citation, accuracy, referral, and measurement requirements are separated.',
  },
  {
    question: 'How quickly will SEO or AI-search results appear?',
    answer:
      'There is no responsible universal timetable. Timing depends on the baseline, technical condition, market, competition, crawl and indexing, release speed, content and authority gaps, product demand, domain history, and platform behavior. A scope can define leading indicators, review points, and dependencies without guaranteeing an outcome date.',
  },
  {
    question: 'What access should I provide in the form?',
    answer:
      'Do not submit passwords, tokens, customer records, tax data, health data, legal documents, or other sensitive information through the contact form. Share high-level context first. If access is needed later, use the approved account invitation or secure transfer process for that system.',
  },
  {
    question: 'Can TheProjectSEO work with our internal team?',
    answer:
      'Yes. A scope can assign research, strategy, briefs, implementation, content, structured data, analytics, QA, and reporting between TheProjectSEO and internal marketing, product, engineering, editorial, communications, sales, legal, or compliance owners.',
  },
]

export default function ContactPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'ContactPage',
              '@id': `${SITE_URL}/contact#contactpage`,
              url: `${SITE_URL}/contact`,
              name: 'Contact TheProjectSEO',
              description: metadata.description,
              dateModified: '2026-07-28',
              about: ORGANIZATION_REF,
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
                  name: 'Contact',
                  item: `${SITE_URL}/contact`,
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
              Contact TheProjectSEO · India headquarters
            </p>
            <h1 className="mt-6 max-w-5xl font-display text-[clamp(48px,7vw,104px)] font-medium leading-[0.93] tracking-[-0.04em] text-ink">
              Tell us what search needs to{' '}
              <em className="text-accent">change.</em>
            </h1>
            <Lead className="mt-8 max-w-3xl">
              Share the site, market, customer decision, commercial outcome,
              available evidence, and implementation constraints. We will review
              the context and recommend the appropriate next step.
            </Lead>
            <div className="mt-10 flex flex-wrap gap-5 text-sm text-slate">
              <span>Ongoing engagements from $3,500/month</span>
              <span aria-hidden="true">·</span>
              <Link
                className="font-semibold text-accent underline"
                href="/pricing"
              >
                Review pricing and scope
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <section
        id="contact-form"
        className="scroll-mt-8 border-y border-border bg-cream py-24"
      >
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Subheading>Start the conversation</Subheading>
              <Heading as="h2" className="mt-3">
                Give us enough context to be useful.
              </Heading>
              <p className="mt-6 text-base leading-8 text-slate">
                A domain and a target keyword are not a complete brief. The form
                helps us understand the type of organization, problem, budget,
                and implementation environment before recommending a call,
                diagnostic, project, or ongoing engagement.
              </p>
              <div className="mt-10 space-y-5 border-t border-border-strong pt-8">
                <div className="flex items-start gap-4">
                  <Mail
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-heading text-sm font-semibold text-ink">
                      Email
                    </p>
                    <a
                      className="mt-1 inline-block text-sm text-slate underline"
                      href="mailto:hello@theprojectseo.com"
                    >
                      hello@theprojectseo.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-heading text-sm font-semibold text-ink">
                      Headquarters
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate">
                      Ranchi, Jharkhand, India · Remote delivery
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <SearchCheck
                    className="mt-1 size-5 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="font-heading text-sm font-semibold text-ink">
                      Dedicated location coverage
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate">
                      India and the Philippines. No invented international or
                      city-office claims.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <LeadForm variant="full" submitText="Share the project context" />
          </div>
        </Container>
      </section>

      <section className="bg-paper py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>Before you submit</Subheading>
            <Heading as="h2" className="mt-3">
              What information helps us assess fit?
            </Heading>
            <Lead className="mt-6">
              High-level information is enough for the first review. Sensitive
              credentials and customer data should stay out of the form.
            </Lead>
          </div>
          <div className="mt-14 grid gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-3">
            {intakeItems.map((item, index) => (
              <article key={item.title} className="bg-paper p-8">
                <p className="font-mono text-xs font-semibold text-accent">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2">
            <div>
              <Subheading dark>Good fit</Subheading>
              <Heading as="h2" dark className="mt-3">
                Who is the engagement designed for?
              </Heading>
              <p className="mt-6 text-lg leading-8 text-white/70">
                The work is strongest when search is connected to a real
                customer decision, the organization can provide evidence and
                expertise, and recommendations can enter production.
              </p>
            </div>
            <ul className="space-y-4">
              {fitChecks.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 border-b border-white/15 pb-4 text-sm leading-7 text-white/70"
                >
                  <CheckIcon className="mt-1 size-4 shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-cream py-24">
        <Container>
          <div className="max-w-3xl">
            <Subheading>What happens next</Subheading>
            <Heading as="h2" className="mt-3">
              From form submission to a responsible scope.
            </Heading>
            <Lead className="mt-6">
              The sequence can be shorter for a clearly defined project and more
              detailed for a complex site or procurement process. The page does
              not promise an arbitrary two-hour or 48-hour response.
            </Lead>
          </div>
          <div className="mt-14 divide-y divide-border-strong border-y border-border-strong">
            {nextSteps.map((step) => (
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
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Subheading>Frequently asked questions</Subheading>
              <Heading as="h2" className="mt-3">
                Before you share the project.
              </Heading>
            </div>
            <FAQAccordion
              title="Contact and engagement questions"
              items={faqItems}
            />
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-cream py-16">
        <Container>
          <p className="text-sm leading-7 text-slate">
            Written and reviewed by{' '}
            <span className="font-semibold text-ink">Aditya Aman</span>, Founder
            and SEO Strategist. Last updated July 28, 2026. You can also review
            the{' '}
            <Link
              className="font-semibold text-accent underline"
              href="/methodology"
            >
              methodology
            </Link>
            ,{' '}
            <Link
              className="font-semibold text-accent underline"
              href="/case-studies"
            >
              approved case-study evidence
            </Link>
            , and{' '}
            <Link
              className="font-semibold text-accent underline"
              href="/privacy"
            >
              privacy policy
            </Link>{' '}
            before submitting.
          </p>
        </Container>
      </section>

      <Footer />
    </main>
  )
}
