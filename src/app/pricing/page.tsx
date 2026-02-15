import { Button } from '@/components/button'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { FAQAccordion } from '@/components/faq-accordion'
import { AIAgentsShowcase } from '@/components/ai-agents-showcase'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { CheckIcon } from '@heroicons/react/16/solid'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing | SEO, Development & Automation Services | TheProjectSEO',
  description:
    'Transparent pricing for SEO, web development, AI solutions, and automation. Every project is custom-built. SEO from $1,800/mo, development from $3,000, content from $70/article.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing | SEO, Development & Automation Services | TheProjectSEO',
    description:
      'Transparent pricing for SEO, web development, AI solutions, and automation. Every project is custom-built.',
    url: 'https://theprojectseo.com/pricing',
  },
  twitter: {
    title: 'Pricing | SEO, Development & Automation Services | TheProjectSEO',
    description:
      'Transparent pricing for SEO, web development, AI solutions, and automation. Every project is custom-built.',
  },
}

/* ─── SEO Retainer Tiers ─── */

interface SEOTier {
  name: string
  price: string
  period: string
  description: string
  featured: boolean
  highlights: string[]
}

const seoTiers: SEOTier[] = [
  {
    name: 'Foundation',
    price: '$1,800',
    period: '/mo',
    description:
      'For businesses building their organic presence from the ground up.',
    featured: false,
    highlights: [
      'Comprehensive SEO audit',
      'Keyword research (100+ keywords)',
      'On-page optimization (10 pages/mo)',
      'Technical SEO monitoring',
      'Google Business Profile setup',
      '2 blog articles/month',
      'Monthly reporting dashboard',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    price: '$3,500',
    period: '/mo',
    description:
      'For businesses ready to scale organic traffic and dominate their niche.',
    featured: true,
    highlights: [
      'Everything in Foundation',
      'Advanced keyword strategy (300+ keywords)',
      'On-page optimization (25 pages/mo)',
      'Full technical SEO management',
      'Content strategy & creation (4 articles/mo)',
      'Link building (10 links/mo)',
      'Competitor analysis & tracking',
      'Real-time analytics dashboard',
      'Bi-weekly strategy calls',
      'Dedicated SEO manager',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description:
      'For organizations that need multi-brand, multi-region, or large-scale SEO.',
    featured: false,
    highlights: [
      'Custom keyword universe',
      'Unlimited page optimization',
      'Custom content strategy',
      'Advanced link building (25+ links/mo)',
      'Multi-location & multi-brand SEO',
      'Custom reporting & dashboards',
      'Weekly strategy sessions',
      'Priority support & SLA',
      'Custom tool integrations',
    ],
  },
]

/* ─── Development Services ─── */

interface DevService {
  name: string
  price: string
  description: string
  highlights: string[]
  note?: string
  href: string
}

const devServices: DevService[] = [
  {
    name: 'MVP Development',
    price: '$3,000',
    description:
      'Validate your idea fast with a production-ready minimum viable product.',
    highlights: [
      'Core feature set scoped to your goals',
      'Responsive design across all devices',
      'User authentication & database',
      'Cloud deployment & CI/CD',
    ],
    note: 'Delivery in 8\u201312 weeks',
    href: '/services/mvp-development',
  },
  {
    name: 'Web Applications',
    price: '$6,000',
    description:
      'Custom web applications built for scale, performance, and reliability.',
    highlights: [
      'Custom architecture & API design',
      'Third-party integrations',
      'Admin dashboard & analytics',
      'Cloud infrastructure & deployment',
    ],
    href: '/services/web-app-development',
  },
  {
    name: 'E-commerce Development',
    price: '$3,000',
    description:
      'Custom online stores built for conversion and growth.',
    highlights: [
      'Starter Store (up to 200 products) \u2014 $3,000',
      'Growth Store (custom features) \u2014 $9,000',
      'Enterprise Commerce (full custom) \u2014 $15,000',
    ],
    href: '/services/ecommerce-development',
  },
  {
    name: 'AI & LLM Integration',
    price: '$3,000',
    description:
      'Integrate AI into your products, workflows, and customer experience.',
    highlights: [
      'AI Chatbot / Assistant \u2014 $3,000',
      'Custom AI Application \u2014 $6,000',
      'Enterprise AI Platform \u2014 $10,000',
    ],
    href: '/services/ai-development',
  },
  {
    name: 'Data Engineering',
    price: '$3,000',
    description:
      'Build the data infrastructure your business decisions depend on.',
    highlights: [
      'ETL pipeline design & implementation',
      'Data warehousing & modeling',
      'Real-time data processing',
      'Analytics dashboards & reporting',
    ],
    href: '/services/data-engineering',
  },
  {
    name: 'Data Visualization',
    price: '$8,000',
    description:
      'Custom dashboards and reporting that turn your data into actionable insights.',
    highlights: [
      'Custom dashboard design & development',
      'SEO & business intelligence reporting',
      'Real-time analytics integration',
      'Interactive data storytelling',
    ],
    href: '/services/data-visualization',
  },
]

/* ─── Automation Tiers ─── */

interface AutomationTier {
  name: string
  price: string
  period: string
  description: string
  highlights: string[]
  maintenance?: string
}

const automationTiers: AutomationTier[] = [
  {
    name: 'Simple Workflow',
    price: '$500',
    period: 'one-time',
    description:
      'Single-system automation with basic triggers and actions.',
    highlights: [
      'One integration (e.g. form \u2192 CRM)',
      'Basic triggers & actions',
      'Documentation & handoff',
      'One-time setup',
    ],
    maintenance: '$200/mo maintenance available',
  },
  {
    name: 'Multi-System',
    price: '$2,500',
    period: 'one-time',
    description:
      'Connect 3\u20135 systems with conditional logic and error handling.',
    highlights: [
      '3\u20135 system integrations',
      'Conditional logic & branching',
      'Error handling & retry logic',
      'Full testing & QA',
    ],
    maintenance: '$200/mo maintenance available',
  },
  {
    name: 'AI-Powered',
    price: '$5,000',
    period: 'one-time',
    description:
      'Intelligent automation with AI/ML for smarter decision-making.',
    highlights: [
      'AI/ML model integration',
      'Smart routing & classification',
      'Natural language processing',
      'Predictive automation',
    ],
    maintenance: '$200/mo maintenance available',
  },
  {
    name: 'Enterprise Orchestration',
    price: 'Custom',
    period: '',
    description:
      'Full-scale automation with SSO, data pipelines, and containerized builds.',
    highlights: [
      'SSO integration (Okta, Azure AD)',
      'Custom data pipelines',
      'Containerized deployment',
      'Custom orchestration logic',
      '24/7 monitoring & alerting',
    ],
  },
]

/* ─── Content & Link Building ─── */

const contentPricing = [
  { item: 'SEO Blog Article (1,000\u20131,500 words)', price: '$70' },
  { item: 'In-depth Guide (2,000+ words)', price: '$150' },
  { item: 'Monthly Content Package (8 articles)', price: '$500' },
]

const backlinkPricing = [
  {
    tier: 'DR 10\u201320',
    price: '$80',
    description: 'Niche-relevant, quality sites',
  },
  {
    tier: 'DR 30\u201340',
    price: '$120',
    description: 'Established authority sites',
  },
  {
    tier: 'DR 50\u201360',
    price: '$200',
    description: 'High-authority publications',
  },
  {
    tier: 'DR 70+',
    price: '$350',
    description: 'Premium, top-tier domains',
  },
]

/* ─── FAQ ─── */

const faqItems = [
  {
    question: 'How is your pricing different from other agencies?',
    answer:
      "Every project we take on is custom-scoped. We don't use cookie-cutter packages or templates. Your pricing reflects your specific goals, timeline, and technical requirements\u2014not a generic tier that barely fits.",
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Absolutely. Most clients bundle SEO with content marketing, or development with automation. We offer package discounts when you combine services\u2014reach out for a custom quote.',
  },
  {
    question: 'How long does it take to see SEO results?',
    answer:
      'Most clients see measurable improvements within 60\u201390 days, with significant ranking gains in 4\u20136 months. We set realistic expectations during onboarding and provide transparent progress reports every month.',
  },
  {
    question: "What's the typical timeline for development projects?",
    answer:
      'MVPs typically ship in 8\u201312 weeks. Web applications take 12\u201320 weeks depending on complexity. E-commerce stores range from 6\u201316 weeks based on customization level.',
  },
  {
    question: 'Do you offer ongoing maintenance after project delivery?',
    answer:
      'Yes. Development projects include a 30-day warranty period. After that, maintenance retainers start at $200/month for automation workflows and scale based on project complexity.',
  },
  {
    question: 'How do backlink prices work?',
    answer:
      "Backlinks are priced by domain rating (DR)\u2014a measure of the linking site's authority. DR 10\u201320 links start at $80 each, DR 30\u201340 at $120, and higher DR domains are priced accordingly. Every link is manually vetted for relevance and quality.",
  },
  {
    question: 'Can I cancel my SEO retainer anytime?',
    answer:
      'Yes. All SEO retainers are month-to-month with no long-term contracts. We believe in earning your business through results, not locking you into agreements.',
  },
  {
    question: 'Do you work with startups on limited budgets?',
    answer:
      'We do. Our MVP development starts at $3,000 and blog content at $70 per article. We work with you to prioritize the highest-impact activities within your budget.',
  },
  {
    question: "What's included in the full content marketing retainer?",
    answer:
      'The $2,000/month retainer covers 8 SEO-optimized articles, content strategy, Reddit and forum promotion, social distribution, and monthly performance reporting.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Book a free consultation through our contact page. We discuss your goals, audit your current setup, and provide a custom proposal within 48 hours\u2014no obligation.',
  },
]

/* ═══════════════════════════════════════════════════════════
   Section Components
   ═══════════════════════════════════════════════════════════ */

function Header() {
  return (
    <div className="relative">
      <HeroAnimation />
      <Container className="relative pt-16 pb-24">
        <Heading as="h1">Pricing built around your project.</Heading>
        <Lead className="mt-6 max-w-3xl">
          Every engagement is custom. No cookie-cutter packages, no
          one-size-fits-all plans. Just solutions designed for your specific
          goals and budget.
        </Lead>
        <nav className="mt-10 flex flex-wrap gap-3" aria-label="Jump to pricing section">
          {[
            { label: 'SEO Retainers', href: '#seo' },
            { label: 'Development', href: '#development' },
            { label: 'Automation', href: '#automation' },
            { label: 'Content & Links', href: '#content' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full border border-border-strong px-4 py-2 text-sm font-medium text-stone transition-colors hover:bg-cream"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  )
}

/* ─── SEO Retainers ─── */

function SEOPricing() {
  return (
    <section id="seo" className="scroll-mt-8 bg-cream py-24">
      <Container>
        <div className="mb-16 text-center">
          <Subheading>SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Monthly SEO retainers
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-stone">
            Ongoing SEO management with transparent deliverables, monthly
            reporting, and a dedicated team focused on your organic growth.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {seoTiers.map((tier, i) => (
            <div
              key={i}
              className={`rounded-none border border-border-strong bg-white ${
                tier.featured
                  ? 'relative border-t-[3px] border-t-accent shadow-lg lg:scale-105'
                  : ''
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="whitespace-nowrap bg-accent px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.1em] text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="p-8">
                <Subheading as="h3">{tier.name}</Subheading>
                <p className="mt-2 text-sm text-stone">{tier.description}</p>
                <div className="mt-8 flex items-baseline gap-2">
                  <span className="font-mono text-[40px] font-medium text-ink">
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className="text-sm text-stone">{tier.period}</span>
                  )}
                </div>
                <div className="mt-8">
                  <Button
                    variant={tier.featured ? 'solid' : 'ghost'}
                    href="/contact"
                  >
                    {tier.name === 'Enterprise' ? 'Contact us' : 'Get started'}
                  </Button>
                </div>
                <ul className="mt-8 space-y-3">
                  {tier.highlights.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-start gap-3 text-sm text-stone"
                    >
                      <CheckIcon className="mt-0.5 size-4 shrink-0 fill-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="mb-3 text-sm text-ash">All SEO plans include:</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-slate">
            <span>&#10003; No setup fees</span>
            <span>&#10003; Cancel anytime</span>
            <span>&#10003; 30-day money-back guarantee</span>
            <span>&#10003; Free consultation</span>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─── Development Services ─── */

function DevelopmentPricing() {
  return (
    <section id="development" className="scroll-mt-8 py-24">
      <Container>
        <div className="mb-16 text-center">
          <Subheading>Development</Subheading>
          <Heading as="h2" className="mt-2">
            Project-based development
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-stone">
            Custom-built applications, platforms, and AI solutions. Fixed-price
            projects with clear scope, timelines, and deliverables.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {devServices.map((service, i) => (
            <div
              key={i}
              className="flex flex-col rounded-none border border-border-strong bg-white p-8"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">
                {service.name}
              </h3>
              <p className="mt-2 text-sm text-stone">{service.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-medium text-ink">
                  from {service.price}
                </span>
              </div>
              <ul className="mt-6 flex-1 space-y-2">
                {service.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-stone"
                  >
                    <CheckIcon className="mt-0.5 size-4 shrink-0 fill-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              {service.note && (
                <p className="mt-4 font-mono text-xs uppercase tracking-wide text-ash">
                  {service.note}
                </p>
              )}
              <Link
                href={service.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
              >
                Learn more &rarr;
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/* ─── Automation Services ─── */

function AutomationPricing() {
  return (
    <section id="automation" className="scroll-mt-8 bg-cream py-24">
      <Container>
        <div className="mb-16 text-center">
          <Subheading>Automation</Subheading>
          <Heading as="h2" className="mt-2">
            Workflow automation
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-stone">
            Eliminate manual work with n8n-powered automation. One-time build
            with optional ongoing maintenance.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {automationTiers.map((tier, i) => (
            <div
              key={i}
              className="flex flex-col rounded-none border border-border-strong bg-white p-8"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">
                {tier.name}
              </h3>
              <p className="mt-2 text-sm text-stone">{tier.description}</p>
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-mono text-2xl font-medium text-ink">
                  {tier.price}
                </span>
                {tier.period && (
                  <span className="text-sm text-stone">{tier.period}</span>
                )}
              </div>
              <ul className="mt-6 flex-1 space-y-2">
                {tier.highlights.map((item, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-sm text-stone"
                  >
                    <CheckIcon className="mt-0.5 size-4 shrink-0 fill-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              {tier.maintenance && (
                <p className="mt-4 text-xs text-ash">{tier.maintenance}</p>
              )}
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/services/n8n-automation"
            className="text-sm font-medium text-accent hover:underline"
          >
            Explore all automation services &rarr;
          </Link>
        </div>
      </Container>
    </section>
  )
}

/* ─── Content & Link Building ─── */

function ContentPricing() {
  return (
    <section id="content" className="scroll-mt-8 py-24">
      <Container>
        <div className="mb-16 text-center">
          <Subheading>Content & Links</Subheading>
          <Heading as="h2" className="mt-2">
            Content marketing & link building
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-stone">
            SEO-optimized content and high-quality backlinks to build authority
            and drive organic traffic.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Content Creation */}
          <div className="rounded-none border border-border-strong bg-white">
            <div className="border-b border-border-strong px-8 py-5">
              <h3 className="font-heading text-lg font-semibold text-ink">
                Content Creation
              </h3>
            </div>
            <div className="p-8">
              <div className="space-y-0">
                {contentPricing.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-border py-4 last:border-0"
                  >
                    <span className="text-sm text-stone">{item.item}</span>
                    <span className="ml-4 whitespace-nowrap font-mono text-sm font-medium text-ink">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Link Building */}
          <div className="rounded-none border border-border-strong bg-white">
            <div className="border-b border-border-strong px-8 py-5">
              <h3 className="font-heading text-lg font-semibold text-ink">
                Link Building{' '}
                <span className="text-sm font-normal text-ash">per link</span>
              </h3>
            </div>
            <div className="p-8">
              <div className="space-y-0">
                {backlinkPricing.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-border py-4 last:border-0"
                  >
                    <div>
                      <span className="text-sm font-medium text-ink">
                        {item.tier}
                      </span>
                      <p className="text-xs text-ash">{item.description}</p>
                    </div>
                    <span className="ml-4 whitespace-nowrap font-mono text-sm font-medium text-ink">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Full Content Marketing Retainer */}
        <div className="mt-8 rounded-none border border-accent/30 bg-accent/5 p-8 text-center">
          <h3 className="font-heading text-lg font-semibold text-ink">
            Full Content Marketing
          </h3>
          <div className="mt-2 flex items-baseline justify-center gap-2">
            <span className="font-mono text-[32px] font-medium text-ink">
              $2,000
            </span>
            <span className="text-sm text-stone">/mo</span>
          </div>
          <p className="mx-auto mt-3 max-w-lg text-sm text-stone">
            8 SEO articles, content strategy, Reddit &amp; forum promotion,
            social distribution, and monthly performance reporting.
          </p>
          <div className="mt-6">
            <Button variant="ghost" href="/contact">
              Get started
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─── Custom Section (dark) ─── */

function CustomSection() {
  return (
    <section className="bg-ink py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Subheading dark>Why Custom</Subheading>
          <Heading as="h2" dark className="mt-2">
            Every project starts with a conversation.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            We don&apos;t believe in cookie-cutter solutions. Your business is
            unique, your challenges are specific, and your strategy should be
            too. That&apos;s why every engagement begins with a deep-dive into
            your goals, your market, and your competitive landscape.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <div className="font-mono text-3xl font-medium text-accent">
                100%
              </div>
              <p className="mt-2 text-sm text-white/60">
                Custom-scoped projects
              </p>
            </div>
            <div>
              <div className="font-mono text-3xl font-medium text-accent">
                48hr
              </div>
              <p className="mt-2 text-sm text-white/60">
                Custom proposal delivery
              </p>
            </div>
            <div>
              <div className="font-mono text-3xl font-medium text-accent">
                0
              </div>
              <p className="mt-2 text-sm text-white/60">
                Long-term contracts required
              </p>
            </div>
          </div>
          <div className="mt-12">
            <Button variant="solid" href="/contact">
              Book a free consultation
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ─── FAQ ─── */

function FAQ() {
  return (
    <section className="py-24">
      <Container>
        <FAQAccordion
          items={faqItems}
          title="Pricing questions answered"
        />
      </Container>
    </section>
  )
}

/* ─── CTA ─── */

function CTASection() {
  return (
    <section className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Ready to start?</Subheading>
          <Heading as="h2" className="mt-2">
            Let&apos;s build something great together.
          </Heading>
          <p className="mt-6 text-stone">
            Tell us about your project and we&apos;ll send you a custom proposal
            within 48 hours. No commitment, no pressure.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button variant="solid" href="/contact">
              Get a custom proposal
            </Button>
            <Button variant="outline" href="/services">
              Explore services
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

/* ═══════════════════════════════════════════════════════════
   Page
   ═══════════════════════════════════════════════════════════ */

export default function Pricing() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Pricing - SEO, Development & Automation Services',
          description:
            'Transparent pricing for SEO, web development, AI solutions, and automation services. Every project is custom-built.',
          url: 'https://theprojectseo.com/pricing',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <SEOPricing />
      <AIAgentsShowcase
        subheading="Included in Every SEO Plan"
        heading="8 AI agents powering your SEO — at no extra cost."
        lead="Every SEO retainer includes our full AI agent fleet. They monitor rankings, optimize content, track competitors, and flag issues automatically — so your investment works harder around the clock."
      />
      <DevelopmentPricing />
      <AutomationPricing />
      <ContentPricing />
      <CustomSection />
      <TestimonialQuoteSection
        quote="We hit our KPIs in less than 3 months. Working with Aditya, we moved our key revenue-driving pages to positions #1 and #2, where we were previously ranking at #6 or #7."
        author="James Lim"
        role="CEO"
        company="Helpling APAC"
      />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  )
}
