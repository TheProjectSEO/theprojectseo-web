import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  BarChart3,
  Link2,
  Search,
  Wrench,
  MapPin,
  FileText,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SEO Services | TheProjectSEO',
  description:
    'Comprehensive SEO services including audits, keyword research, technical SEO, content optimization, local SEO, and link building. Dominate search rankings.',
  alternates: {
    canonical: '/services',
  },
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const services = [
  {
    name: 'SEO Audit & Analysis',
    description:
      'Comprehensive website analysis to identify opportunities and issues affecting your search rankings.',
    icon: BarChart3,
    features: [
      'Technical SEO assessment',
      'Content gap analysis',
      'Competitor benchmarking',
      'Core Web Vitals evaluation',
      'Mobile-first indexing review',
      'Site architecture analysis',
    ],
    pricing: 'Starting at $497',
    href: '/contact',
  },
  {
    name: 'Keyword Research & Strategy',
    description:
      'Advanced keyword research to discover high-value opportunities and create winning content strategies.',
    icon: Search,
    features: [
      'Search intent analysis',
      'Competitor keyword mapping',
      'Long-tail keyword discovery',
      'Keyword difficulty assessment',
      'Search volume analysis',
      'Content cluster planning',
    ],
    pricing: 'Starting at $297',
    href: '/contact',
  },
  {
    name: 'Technical SEO Optimization',
    description:
      'Fix technical issues that prevent search engines from properly crawling and indexing your website.',
    icon: Wrench,
    features: [
      'Site speed optimization',
      'Schema markup implementation',
      'XML sitemap creation',
      'Robots.txt optimization',
      'Canonical tag setup',
      'Internal linking structure',
    ],
    pricing: 'Starting at $697',
    href: '/contact',
  },
  {
    name: 'Content Optimization',
    description:
      'Create and optimize content that ranks higher and converts visitors into customers.',
    icon: FileText,
    features: [
      'On-page SEO optimization',
      'Content creation & writing',
      'Meta tag optimization',
      'Featured snippet optimization',
      'Content refresh & updates',
      'User experience improvements',
    ],
    pricing: 'Starting at $397',
    href: '/contact',
  },
  {
    name: 'Local SEO',
    description:
      'Dominate local search results and drive more customers to your physical business locations.',
    icon: MapPin,
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review management strategy',
      'Local keyword optimization',
      'NAP consistency audit',
      'Local link building',
    ],
    pricing: 'Starting at $597',
    href: '/contact',
  },
  {
    name: 'Link Building & Authority',
    description:
      'Build high-quality backlinks and domain authority to strengthen your search rankings across the board.',
    icon: Link2,
    features: [
      'Strategic link acquisition',
      'Digital PR campaigns',
      'Guest posting outreach',
      'Broken link reclamation',
      'Competitor backlink analysis',
      'Authority building strategy',
    ],
    pricing: 'Starting at $497',
    href: '/contact',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Audit & Analysis',
    description:
      'Comprehensive website audit to identify opportunities and create a data-driven strategy.',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'Custom SEO strategy based on your business goals, competition, and market opportunities.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Execute technical optimizations, content creation, and link building with precision.',
  },
  {
    number: '04',
    title: 'Monitor & Optimize',
    description:
      'Continuous monitoring and optimization to maintain and improve your search rankings.',
  },
]

const caseStudy = {
  client: 'Mid-Size E-commerce Brand',
  challenge:
    'A growing e-commerce company with over 2,000 product pages was struggling to gain organic visibility. Their site had accumulated years of technical debt: duplicate content issues, thin product descriptions, slow page load times, and a fragmented internal linking structure. Organic traffic had stagnated at around 8,000 monthly sessions despite significant ad spend, and they were losing market share to competitors who had invested heavily in SEO. Leadership needed a sustainable organic channel to reduce dependence on paid acquisition and improve margins.',
  solution:
    'We began with a full technical SEO overhaul: resolving crawl budget waste from duplicate and orphaned URLs, implementing structured data across all product and category pages, and optimizing Core Web Vitals to bring load times under 2 seconds. On the content side, we rewrote 150+ product descriptions with search-intent-aligned copy, built out a topical authority blog covering buyer guides and comparison content, and created location-specific landing pages to capture local search demand. Our link building campaign secured placements in 40+ industry publications and resource pages over 10 months.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+340%', timeframe: '12 months' },
    { metric: 'Revenue from Organic', improvement: '$1.8M', timeframe: 'Annual organic revenue' },
    { metric: 'Keywords in Top 10', improvement: '180+', timeframe: 'From 22 to 180+' },
    { metric: 'Cost per Acquisition', improvement: '-58%', timeframe: 'Organic vs. paid' },
  ],
}

const packages = [
  {
    name: 'Starter',
    price: '$997/mo',
    description: 'For small businesses ready to build a strong SEO foundation.',
    features: [
      'Initial SEO audit & strategy',
      'Keyword research (up to 50 keywords)',
      'On-page optimization (10 pages/mo)',
      'Monthly performance reporting',
      'Google Business Profile setup',
      'Basic link building (5 links/mo)',
    ],
    href: '/contact',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$2,497/mo',
    description: 'For scaling businesses that need comprehensive SEO across all channels.',
    features: [
      'Everything in Starter, plus:',
      'Full technical SEO optimization',
      'Content creation (8 pieces/mo)',
      'Advanced link building (15 links/mo)',
      'Competitor monitoring & analysis',
      'Bi-weekly strategy calls',
      'Schema markup implementation',
      'Core Web Vitals optimization',
    ],
    href: '/contact',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$4,997/mo',
    description: 'For established businesses that demand market dominance and full-service SEO.',
    features: [
      'Everything in Growth, plus:',
      'Dedicated SEO strategist',
      'Custom content strategy & production',
      'Aggressive link building (30+ links/mo)',
      'International SEO & hreflang',
      'Weekly strategy & reporting calls',
      'Conversion rate optimization',
      'Priority support & Slack channel',
    ],
    href: '/contact',
    featured: false,
  },
]

const faqItems = [
  {
    question: 'What SEO services do you offer?',
    answer:
      'We offer a comprehensive suite of SEO services including technical SEO audits, keyword research and strategy, on-page and content optimization, local SEO, link building, and ongoing performance monitoring. Each service can be engaged individually or as part of a bundled package tailored to your business goals.',
  },
  {
    question: 'How do you determine which SEO package is right for my business?',
    answer:
      'We start with a free consultation and preliminary site assessment to understand your current SEO maturity, competitive landscape, and business objectives. Based on this analysis, we recommend a package that aligns with your growth targets and budget. Businesses with limited existing SEO typically start with our Starter or Growth packages, while those in competitive markets benefit from our Enterprise tier.',
  },
  {
    question: 'How long before I see results from SEO?',
    answer:
      'Most clients begin seeing measurable improvements in rankings and traffic within 3 to 6 months. Early wins such as technical fixes and on-page optimizations can produce results within weeks, while content marketing and link building efforts compound over time. SEO is a long-term investment that builds sustainable organic growth, with the strongest returns typically appearing between months 6 and 12.',
  },
  {
    question: 'Do you offer custom SEO packages?',
    answer:
      'Yes. While our Starter, Growth, and Enterprise packages cover the most common needs, we regularly build custom engagements for clients with unique requirements. Whether you need a one-time technical audit, a content-only retainer, or an integrated SEO and web development project, we can tailor a solution that fits your specific situation and budget.',
  },
  {
    question: 'Can I combine multiple services?',
    answer:
      'Absolutely. In fact, we encourage an integrated approach because SEO works best when technical optimization, content, and link building operate together. Combining services ensures that every improvement reinforces the others, delivering faster and more sustainable results. Our packages are designed with this integration in mind, and custom bundles are always available.',
  },
  {
    question: 'What reporting do you provide?',
    answer:
      'Every client receives detailed monthly reports covering keyword rankings, organic traffic trends, backlink growth, technical health scores, and conversion metrics. Reports include clear visualizations, plain-language analysis of what changed and why, and strategic recommendations for the next period. Enterprise clients receive weekly reports and have access to a real-time dashboard.',
  },
]

const relatedServices = [
  { name: 'SEO Services', href: '/services/seo' },
  { name: 'Answer Engine Optimization', href: '/services/aeo' },
  { name: 'Content Marketing', href: '/services/content' },
  { name: 'Web Development', href: '/services/web' },
  { name: 'SEO Consulting', href: '/services/seo-consulting' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Header / Hero                                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="relative">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-6">
            Our Services
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink max-w-3xl">
            Complete SEO services to{' '}
            <em className="text-accent italic">dominate search</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-[1.65] text-slate">
            From technical audits to content optimization, we provide all the SEO services
            your business needs to rank #1 on Google and drive sustainable organic growth.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Your Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
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
    { value: '500+', label: 'Clients served' },
    { value: '340%', label: 'Average traffic growth' },
    { value: '99%', label: 'Client retention' },
    { value: '12+', label: 'Years experience' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[32px] font-semibold text-ink">{stat.value}</div>
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
          <Subheading>What We Do</Subheading>
          <Heading as="h2" className="mt-2">
            SEO services built for measurable growth.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={index}
                className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                    <IconComponent className="size-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-ink">
                      {service.name}
                    </h3>
                    <p className="text-sm text-ash font-medium">{service.pricing}</p>
                  </div>
                </div>

                <p className="text-sm/6 text-slate mb-6">{service.description}</p>

                <div className="mb-8">
                  <h4 className="text-sm/6 font-heading font-medium text-ink mb-3">
                    What&apos;s included:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm/6 text-slate"
                      >
                        <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button href={service.href} className="w-full">
                  Get Started
                </Button>
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
            How we deliver SEO results.
          </Heading>
        </div>

        <div className="mx-auto max-w-3xl">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
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
          <Subheading dark>Client Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a mid-size e-commerce brand achieve 340% organic growth.
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
                    <div className="text-xs text-white/40">{result.timeframe}</div>
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
          <Subheading>Pricing Packages</Subheading>
          <Heading as="h2" className="mt-2">
            Transparent pricing for every growth stage.
          </Heading>
          <Lead className="mt-6 mx-auto max-w-2xl">
            Choose a package that matches your ambitions, or let us build a custom plan
            during your free consultation.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${
                pkg.featured ? 'ring-2 ring-accent' : ''
              }`}
            >
              {pkg.featured && (
                <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-accent mb-4">
                  Most Popular
                </p>
              )}
              <h3 className="font-heading text-xl font-semibold text-ink">{pkg.name}</h3>
              <div className="font-mono text-[32px] font-semibold text-ink mt-2">
                {pkg.price}
              </div>
              <p className="text-sm leading-relaxed text-slate mt-3 mb-6">
                {pkg.description}
              </p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm text-stone"
                  >
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                href={pkg.href}
                variant={pkg.featured ? undefined : 'outline'}
                className="w-full"
              >
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
            &ldquo;Before working with TheProjectSEO, organic search was barely on our radar.
            Within six months they overhauled our technical foundation, rebuilt our content
            strategy, and secured backlinks we couldn&apos;t have earned on our own. Organic
            traffic tripled, our cost per lead dropped by half, and for the first time
            SEO is our highest-ROI channel. They don&apos;t just optimize pages &mdash; they
            build growth engines.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">James Whitfield</p>
            <p className="text-sm text-slate mt-1">CMO, Meridian Commerce</p>
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
          title="SEO services frequently asked questions"
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
          <Subheading>Explore Our Services</Subheading>
          <Heading as="h2" className="mt-2">
            Specialized SEO solutions.
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

function CTASection() {
  return (
    <div className="bg-paper py-16 border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <Subheading>Ready to Get Started?</Subheading>
            <Heading as="h2" className="mt-2">
              Let&apos;s dominate your search rankings.
            </Heading>
            <Lead className="mt-6">
              Choose the SEO services that fit your business needs, or let us create
              a custom strategy during your free consultation.
            </Lead>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Button href="/contact">Get Your Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View All Pricing
            </Button>
          </div>
        </div>
        <p className="mt-6 text-xs text-ash text-center lg:text-left">
          Free audit includes technical analysis, keyword opportunities, and competitive insights.
        </p>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function Services() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'SEO Services',
          description:
            'Comprehensive SEO services including audits, keyword research, technical SEO, content optimization, local SEO, and link building. Dominate search rankings.',
          url: 'https://theprojectseo.com/services',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          serviceType: [
            'SEO Audit & Analysis',
            'Keyword Research & Strategy',
            'Technical SEO Optimization',
            'Content Optimization',
            'Local SEO',
            'Link Building & Authority',
          ],
          keywords: 'Search engine optimization, Link building, Business, World Wide Web, Management',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Link building',
              sameAs: 'https://www.wikidata.org/wiki/Q1569371',
            },
            {
              '@type': 'Thing',
              name: 'Business',
              sameAs: 'https://www.wikidata.org/wiki/Q6353120',
            },
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ServicesGrid />
      <ProcessSection />
      <CaseStudySection />
      <PackagesSection />
      <TestimonialSection />
      <FAQSection />
      <RelatedServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
