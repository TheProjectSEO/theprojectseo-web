import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { CTAFormSection } from '@/components/service-page-sections'
import { FAQAccordion } from '@/components/faq-accordion'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  BarChart3,
  Link2,
  Search,
  Wrench,
  MapPin,
  FileText,
  CheckCircle,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Services | Complete Search Engine Optimization | TheProjectSEO',
  description:
    'Comprehensive SEO services including keyword research, on-page optimization, technical SEO, link building, and local SEO. Drive organic traffic and rankings.',
  alternates: {
    canonical: '/services/seo',
  },
}

const services = [
  {
    name: 'Keyword Research & Strategy',
    description:
      'Discover high-value keywords and create data-driven content strategies that drive targeted organic traffic.',
    icon: Search,
    features: [
      'Competitor keyword analysis',
      'Search intent mapping',
      'Long-tail keyword discovery',
      'Keyword difficulty assessment',
      'Content gap analysis',
      'Monthly keyword tracking',
    ],
    pricing: 'Starting at $797/month',
  },
  {
    name: 'On-Page Optimization',
    description:
      'Optimize your website pages for maximum search engine visibility and user experience.',
    icon: FileText,
    features: [
      'Title tag optimization',
      'Meta description writing',
      'Header structure optimization',
      'Internal linking strategy',
      'Image optimization & alt text',
      'Schema markup implementation',
    ],
    pricing: 'Starting at $597/month',
  },
  {
    name: 'Technical SEO',
    description:
      'Fix technical issues that prevent search engines from properly crawling and indexing your website.',
    icon: Wrench,
    features: [
      'Site speed optimization',
      'Mobile responsiveness fixes',
      'Crawl error resolution',
      'XML sitemap optimization',
      'Robots.txt configuration',
      'Core Web Vitals improvement',
    ],
    pricing: 'Starting at $997/month',
  },
  {
    name: 'Link Building',
    description:
      'Build high-quality backlinks from authoritative websites to increase your domain authority and rankings.',
    icon: Link2,
    features: [
      'High-authority link acquisition',
      'Guest posting campaigns',
      'Broken link building',
      'Resource page outreach',
      'Competitor backlink analysis',
      'Link quality monitoring',
    ],
    pricing: 'Starting at $1,197/month',
  },
  {
    name: 'Local SEO',
    description:
      'Dominate local search results and drive more customers to your physical business locations.',
    icon: MapPin,
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review management',
      'Local keyword optimization',
      'NAP consistency audit',
      'Local content strategy',
    ],
    pricing: 'Starting at $897/month',
  },
  {
    name: 'SEO Analytics & Reporting',
    description:
      'Track your SEO performance with detailed analytics and transparent monthly reporting.',
    icon: BarChart3,
    features: [
      'Monthly performance reports',
      'Keyword ranking tracking',
      'Traffic analysis & insights',
      'Conversion tracking setup',
      'Competitor monitoring',
      'ROI measurement',
    ],
    pricing: 'Included with all plans',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    description:
      'We start with a comprehensive technical audit and competitive analysis to understand your current position and identify opportunities.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'Based on audit findings, we build a prioritized SEO roadmap targeting the highest-impact opportunities for your business.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Our team executes on-page optimization, technical fixes, content creation, and link building according to the strategy.',
  },
  {
    number: '04',
    title: 'Monitor & Optimize',
    description:
      'We continuously track rankings, traffic, and conversions, making data-driven adjustments to maximize your ROI.',
  },
]

const caseStudy = {
  client: 'B2B E-commerce Platform',
  industry: 'Online Retail',
  challenge:
    'A mid-market e-commerce company selling specialty industrial equipment was almost invisible in organic search. Their website had severe technical issues including duplicate content across hundreds of product pages, poor site architecture, and zero structured data. Organic traffic had stagnated at 8,000 monthly sessions, with most visitors landing on branded queries only. Paid acquisition costs were rising steadily, and the team needed a sustainable organic channel to reduce their dependency on Google Ads and maintain profitability.',
  solution:
    'We began with a full technical overhaul: consolidating duplicate product pages with canonical tags, rebuilding the site architecture with siloed category structures, and deploying product schema across the entire catalog. Our content strategy targeted high-intent commercial keywords through optimized category pages, detailed buying guides, and comparison content. We also launched a targeted link building campaign focused on industry publications, supplier partnerships, and resource pages within the industrial equipment niche, earning 120+ high-authority backlinks over 12 months.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+340%', timeframe: '12 months' },
    { metric: 'First Page Rankings', improvement: '150+', timeframe: 'From 22 to 172 keywords' },
    { metric: 'Organic Revenue', improvement: '+$2.1M', timeframe: 'Annual attributed revenue' },
    { metric: 'Cost Per Acquisition', improvement: '-58%', timeframe: 'Organic vs. paid channels' },
  ],
}

const packages = [
  {
    name: 'SEO Starter',
    price: '$2,200',
    period: '/month',
    description: 'Essential SEO services for small businesses',
    services: [
      'Keyword Research',
      'On-Page Optimization',
      'Basic Technical SEO',
      'Monthly Reporting',
    ],
    features: [
      '50 target keywords',
      '10 pages optimized monthly',
      'Basic technical fixes',
      'Monthly progress reports',
      'Email support',
    ],
  },
  {
    name: 'SEO Growth',
    price: '$3,500',
    period: '/month',
    description: 'Comprehensive SEO for growing businesses',
    services: [
      'Everything in Starter',
      'Advanced Technical SEO',
      'Link Building',
      'Local SEO',
    ],
    features: [
      '200 target keywords',
      '25 pages optimized monthly',
      'Advanced technical optimization',
      'Monthly link building',
      'Local SEO optimization',
      'Phone & email support',
    ],
    featured: true,
  },
  {
    name: 'SEO Enterprise',
    price: '$4,997',
    period: '/month',
    description: 'Advanced SEO solutions for large businesses',
    services: [
      'Everything in Growth',
      'Advanced Link Building',
      'Multi-Location SEO',
      'Custom Strategy',
    ],
    features: [
      'Unlimited keywords',
      'Unlimited page optimization',
      'Advanced link building campaign',
      'Multi-location optimization',
      'Custom reporting dashboard',
      'Dedicated SEO manager',
    ],
  },
]

const faqItems = [
  {
    question: 'How long does SEO take to show results?',
    answer:
      'SEO is a long-term investment, but most clients begin seeing measurable improvements within 3-6 months. Initial gains often come from quick technical fixes and on-page optimizations, while significant organic traffic and ranking improvements typically materialize within 6-12 months. The timeline depends on your industry competitiveness, current website health, and the scope of work. We focus on delivering early wins while building a foundation for compounding long-term growth.',
  },
  {
    question: 'What\u0027s included in your SEO packages?',
    answer:
      'Every package includes keyword research, on-page optimization, technical SEO audits, and monthly performance reporting. Our Growth and Enterprise tiers add link building, local SEO, advanced technical optimization, and dedicated account management. We tailor the specific deliverables to your business goals, whether that means prioritizing content creation, technical fixes, or authority building. You can view detailed breakdowns on our pricing page or request a custom proposal.',
  },
  {
    question: 'How do you measure SEO success?',
    answer:
      'We track a comprehensive set of KPIs including organic traffic growth, keyword rankings, click-through rates, conversion rates, and revenue attribution from organic search. You\u0027ll receive transparent monthly reports that go beyond vanity metrics to show real business impact. We integrate with your analytics and CRM platforms to connect SEO efforts directly to leads, sales, and ROI, ensuring every dollar invested is accounted for.',
  },
  {
    question: 'Do you guarantee first page rankings?',
    answer:
      'No ethical SEO agency can guarantee specific rankings because Google\u0027s algorithm considers hundreds of factors that no single party controls. What we do guarantee is a data-driven, best-practice approach that consistently delivers results. Our track record speaks for itself: the vast majority of our clients achieve first page rankings for their target keywords within 6-12 months. We set realistic expectations upfront and focus on driving measurable business outcomes, not empty promises.',
  },
  {
    question: 'How is your SEO different from other agencies?',
    answer:
      'Three things set us apart. First, we focus exclusively on SEO and related organic growth services, so you get specialists, not generalists. Second, our strategies are rooted in data and transparency: you\u0027ll always know exactly what we\u0027re doing and why. Third, we measure success by business outcomes like revenue and leads, not just traffic and rankings. We also offer flexible engagement models and don\u0027t lock you into long-term contracts, because we believe our results should earn your continued partnership.',
  },
  {
    question: 'What industries do you specialize in?',
    answer:
      'We work with businesses across a wide range of industries including SaaS, e-commerce, healthcare, finance, legal, real estate, and technology. Our team has deep experience in both B2B and B2C markets. While our SEO methodology is proven across verticals, we customize every strategy to the unique dynamics of your industry, including competitive landscape, buyer behavior, and search intent patterns specific to your market.',
  },
]

const relatedServices = [
  { name: 'AEO Services', href: '/services/aeo' },
  { name: 'Content Marketing', href: '/services/content' },
  { name: 'Web Development', href: '/services/web' },
  { name: 'SEO Consulting', href: '/services/seo-consulting' },
  { name: 'All Services', href: '/services' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Header / Hero                                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            SEO Services
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Search engine optimization that drives{' '}
            <em className="text-accent italic">real growth</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            From technical foundations to content strategy and link building, our
            comprehensive SEO services help businesses rank higher, attract
            qualified traffic, and convert visitors into customers.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Your Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Packages
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 2: Stats Bar                                                       */
/* -------------------------------------------------------------------------- */

function StatsBar() {
  const stats = [
    { value: '93%', label: 'Online experiences start with search' },
    { value: '75%', label: 'Never scroll past page 1' },
    { value: '14.6%', label: 'SEO lead close rate' },
    { value: '5.3x', label: 'Average ROI from organic SEO' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[32px] font-semibold text-ink">
                {stat.value}
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: Services Grid                                                   */
/* -------------------------------------------------------------------------- */

function ServicesGrid() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our SEO Services</Subheading>
          <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
            Everything you need to rank higher.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.name}
                className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                    <Icon className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-ink">
                      {service.name}
                    </h3>
                    <p className="text-sm text-ash font-medium">
                      {service.pricing}
                    </p>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-slate mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-stone"
                    >
                      <CheckCircle className="size-3.5 text-accent flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 4: Process                                                         */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we deliver results.
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 5: Case Study (Dark)                                               */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>SEO Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a B2B e-commerce platform achieve breakthrough organic growth.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                {caseStudy.challenge}
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Our Solution
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {caseStudy.solution}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Results Achieved
              </h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">
                      {result.improvement}
                    </div>
                    <div className="text-sm text-white/80">{result.metric}</div>
                    <div className="text-xs text-white/40">
                      {result.timeframe}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Packages                                                        */
/* -------------------------------------------------------------------------- */

function PackagesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>SEO Packages</Subheading>
          <Heading as="h2" className="mt-2">
            Choose the right SEO package for your business.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-paper p-8 ${
                pkg.featured ? 'ring-2 ring-accent' : ''
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-heading text-xl font-semibold text-ink mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-mono text-[36px] font-bold text-ink">
                    {pkg.price}
                  </span>
                  <span className="text-ash">{pkg.period}</span>
                </div>
                <p className="text-sm text-slate mt-4">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-heading text-sm font-semibold text-ink mb-3">
                  Services included:
                </h4>
                <ul className="space-y-2">
                  {pkg.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 text-sm text-stone"
                    >
                      <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-heading text-sm font-semibold text-ink mb-3">
                  Features:
                </h4>
                <ul className="space-y-2">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-stone"
                    >
                      <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/contact" className="w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 7: Testimonial                                                     */
/* -------------------------------------------------------------------------- */

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-8">
            Client Testimonial
          </p>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink">
            &ldquo;TheProjectSEO&apos;s comprehensive SEO strategy helped us
            achieve first page rankings for all our target keywords. Our organic
            traffic has increased by 400% and we&apos;re generating 50+
            qualified leads per month from Google. They don&apos;t just chase
            rankings; they build a real growth engine.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">
              Sarah Johnson
            </p>
            <p className="text-sm text-slate mt-1">
              Marketing Director, TechCorp
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: FAQ                                                             */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: Related Services                                                */
/* -------------------------------------------------------------------------- */

function RelatedServicesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Explore More Services</Subheading>
          <Heading as="h2" className="mt-2">
            Extend your organic growth strategy.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-5">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-paper p-4 text-center text-sm font-heading font-medium text-stone transition-colors hover:text-accent hover:bg-cream"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: CTA                                                            */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function SEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Search Engine Optimization Services',
          description:
            'Comprehensive SEO services including keyword research, on-page optimization, technical SEO, link building, and local SEO. Drive organic traffic and rankings.',
          url: 'https://theprojectseo.com/services/seo',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          keywords: 'Search engine optimization, Business, World Wide Web, Technology, Information technology',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Business',
              sameAs: 'https://www.wikidata.org/wiki/Q6353120',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            },
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ServicesGrid />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we deliver results"
        steps={processSteps}
        visual={<ServiceProcessVisual type="audit" />}
        visualBg="ink"
      />
      <CaseStudySection />
      <PackagesSection />
      <TestimonialSection />
      <FAQSection />
      <RelatedServicesSection />
      <CTAFormSection
        subheading="Ready to Dominate Search Results?"
        heading="Let's build your organic growth engine."
        lead="Join hundreds of businesses that trust TheProjectSEO to drive their organic growth. Get your free SEO audit and discover exactly what it takes to rank on page one."
        submitText="Get Your Free SEO Audit"
      />
      <Footer />
    </main>
  )
}
