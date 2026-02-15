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
  FileText,
  SquarePen,
  Search,
  BarChart3,
  Zap,
  Tag,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Content Marketing Services | SEO Content Creation & Strategy | TheProjectSEO',
  description:
    'Professional content marketing services including content strategy, SEO content creation, optimization, and performance tracking. Drive organic traffic with high-quality content that ranks and converts.',
  alternates: {
    canonical: '/services/content',
  },
}

const services = [
  {
    name: 'Content Strategy Development',
    description:
      'Comprehensive content strategies aligned with your business goals and target audience search behavior.',
    icon: BarChart3,
    features: [
      'Content audit & gap analysis',
      'Topic cluster planning',
      'Content calendar development',
      'Competitor content analysis',
      'User journey mapping',
      'Content performance KPIs',
    ],
  },
  {
    name: 'SEO Content Creation',
    description:
      'High-quality, SEO-optimized content that ranks well and converts visitors into customers.',
    icon: SquarePen,
    features: [
      'Blog posts & articles',
      'Landing page copy',
      'Product descriptions',
      'Service page content',
      'FAQ & help content',
      'Email sequences',
    ],
  },
  {
    name: 'Content Optimization',
    description:
      'Optimize existing content for better search rankings and user engagement.',
    icon: Zap,
    features: [
      'On-page SEO optimization',
      'Keyword integration',
      'Meta tags & descriptions',
      'Header structure optimization',
      'Internal linking strategy',
      'Content freshness updates',
    ],
  },
  {
    name: 'Keyword Research for Content',
    description:
      'Advanced keyword research to identify content opportunities and search demand.',
    icon: Search,
    features: [
      'Topic-based keyword research',
      'Search intent analysis',
      'Long-tail keyword discovery',
      'Question-based keywords',
      'Seasonal keyword opportunities',
      'Content keyword mapping',
    ],
  },
  {
    name: 'Content Performance Tracking',
    description:
      'Monitor and analyze your content performance to optimize for better results.',
    icon: FileText,
    features: [
      'Content analytics setup',
      'Traffic & engagement tracking',
      'Ranking position monitoring',
      'Conversion tracking',
      'Content ROI analysis',
      'Performance optimization recommendations',
    ],
  },
  {
    name: 'Content Refresh & Updates',
    description:
      'Keep your content fresh and relevant with regular updates and improvements.',
    icon: Tag,
    features: [
      'Content freshness audits',
      'Outdated content updates',
      'New information integration',
      'Improved optimization',
      'Enhanced user experience',
      'Republishing strategies',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Strategy & Research',
    description:
      'Comprehensive keyword research and content strategy development aligned with your business goals. We audit your existing content, analyze competitors, map search intent across your buyer journey, and build a prioritized content roadmap with clear KPIs and timelines.',
  },
  {
    number: '02',
    title: 'Content Creation',
    description:
      'Expert writers create engaging, SEO-optimized content that resonates with your target audience. Every piece is crafted to satisfy search intent, incorporate strategic keywords naturally, and drive readers toward conversion with compelling narratives and clear calls to action.',
  },
  {
    number: '03',
    title: 'Optimization & Publishing',
    description:
      'Technical optimization, proper formatting, and strategic publishing for maximum search visibility. We handle on-page SEO, internal linking, schema markup, meta tags, and publishing cadence to ensure each piece is fully optimized before it goes live.',
  },
  {
    number: '04',
    title: 'Monitor & Improve',
    description:
      'Continuous performance monitoring and optimization to ensure your content achieves its goals. We track rankings, traffic, engagement, and conversions, then iterate on what&apos;s working and refresh content that can perform better.',
  },
]

const caseStudy = {
  client: 'B2B Technology Company',
  industry: 'Enterprise Software',
  narrative:
    'A mid-market B2B technology company had invested in content sporadically for years but never saw consistent organic growth. Their blog had over 200 posts, yet fewer than 15 ranked on page one for any meaningful keyword. Traffic had stagnated at 8,000 monthly sessions, and the content team was stretched thin producing pieces with no strategic direction. Leadership wanted to transform content from a cost center into a measurable growth channel that reduced reliance on paid acquisition.',
  approach:
    'We conducted a comprehensive content audit, identifying 60 posts worth refreshing and 140 to consolidate or retire. We built a topic cluster strategy around 8 core pillars aligned with the buyer journey, created a 12-month editorial calendar, and implemented rigorous on-page optimization standards. Over 10 months, we published 48 new strategically targeted articles, refreshed 55 existing posts, and built internal linking structures that reinforced topical authority across every cluster.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+340%', timeframe: '10 months' },
    { metric: 'Page-One Keywords', improvement: '120+', timeframe: 'From 15 to 135' },
    { metric: 'Organic Leads', improvement: '+280%', timeframe: 'Monthly inbound leads' },
    { metric: 'Cost Per Lead', improvement: '-55%', timeframe: 'Organic vs. paid' },
  ],
}

const packages = [
  {
    name: 'Content Package',
    price: '$500',
    period: '/month',
    description: '8 SEO-optimized articles per month for consistent content growth',
    features: [
      '8 blog articles per month',
      'SEO keyword targeting',
      'On-page optimization',
      'Content calendar',
      'Monthly performance report',
    ],
  },
  {
    name: 'Full Content Marketing',
    price: '$2,000',
    period: '/month',
    description: 'Complete content marketing with strategy, production, and distribution',
    features: [
      '8 SEO-optimized articles per month',
      'Content strategy & planning',
      'Reddit & forum promotion',
      'Social distribution',
      'Topic cluster development',
      'Monthly performance reporting',
    ],
    featured: true,
  },
  {
    name: 'Content Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-scale content marketing for large organizations',
    features: [
      '16+ articles per month',
      'Comprehensive content strategy',
      'Multi-format content creation',
      'Advanced optimization',
      'Custom content calendar',
      'Dedicated content manager',
    ],
  },
]

const faqItems = [
  {
    question: 'How does content marketing drive SEO results?',
    answer:
      'Content marketing and SEO are deeply intertwined. Every piece of strategically created content targets specific keywords and search intents, building topical authority that search engines reward with higher rankings. Over time, a well-executed content strategy creates a compounding effect: each new article strengthens your site\u2019s overall authority, improves internal linking, and captures long-tail traffic that compounds month over month.',
  },
  {
    question: 'What types of content do you create?',
    answer:
      'We create a wide range of content formats including blog posts, long-form guides, landing pages, product and service page copy, case studies, white papers, FAQ content, comparison articles, and email sequences. Every piece is tailored to your audience and optimized for search. We match the format to the search intent behind each target keyword to maximize both rankings and conversions.',
  },
  {
    question: 'How often should we publish new content?',
    answer:
      'Publishing frequency depends on your goals, industry competitiveness, and resources. Most clients see strong results with 4-8 optimized posts per month, but quality always matters more than quantity. We help you find the right cadence that balances consistency with depth, ensuring every piece is thoroughly researched, well-written, and strategically targeted rather than churning out thin content.',
  },
  {
    question: 'How do you measure content marketing ROI?',
    answer:
      'We track a comprehensive set of metrics including organic traffic growth, keyword rankings, time on page, engagement rates, lead generation, and direct revenue attribution. Monthly reports break down performance by content piece and topic cluster, showing exactly which assets are driving traffic, leads, and pipeline. We connect content performance to business outcomes so you can see the real return on your investment.',
  },
  {
    question: 'Can you work with our existing content team?',
    answer:
      'Absolutely. We frequently work alongside in-house content teams, marketing departments, and subject matter experts. We can own the full content strategy and execution, or serve as a specialized extension handling keyword research, editorial planning, and SEO optimization while your team focuses on writing and brand voice. We integrate with your existing workflows, tools, and approval processes.',
  },
  {
    question: 'How long before content starts ranking?',
    answer:
      'New content typically begins appearing in search results within 2-4 weeks of publishing, with meaningful rankings developing over 2-4 months. Content targeting lower-competition keywords can rank faster, while competitive terms may take 6+ months to reach page one. Refreshed and optimized existing content often sees ranking improvements within weeks. We focus on quick wins early while building toward long-term keyword dominance.',
  },
]

const relatedServices = [
  { name: 'SEO', href: '/services/seo' },
  { name: 'AEO', href: '/services/aeo' },
  { name: 'Web Development', href: '/services/web' },
  { name: 'SEO Consulting', href: '/services/consulting' },
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
            Content Marketing
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Content that ranks, engages, and{' '}
            <em className="text-accent italic">drives growth</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Strategic, SEO-optimized content marketing that builds topical authority, captures
            high-intent search traffic, and converts readers into customers.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Content Strategy</Button>
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
    { value: '72%', label: 'Of marketers say content increases leads' },
    { value: '3x', label: 'More leads than traditional marketing' },
    { value: '62%', label: 'Lower cost than outbound channels' },
    { value: '434%', label: 'More indexed pages with blogs' },
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
/*  Section 3: Services                                                        */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Content Services</Subheading>
          <Heading as="h2" className="mt-2">
            Everything you need for content success.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <service.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {service.name}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-stone">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
            How we create content that ranks and converts.
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
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">{step.title}</h3>
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
          <Subheading dark>Content Marketing Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we turned a stagnant blog into a lead generation engine.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                {caseStudy.narrative}
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Our Approach
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {caseStudy.approach}
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
/*  Section 6: Packages / Pricing                                              */
/* -------------------------------------------------------------------------- */

function PackagesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Content Packages</Subheading>
          <Heading as="h2" className="mt-2">
            Choose your content marketing level.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-paper p-8 ${
                pkg.featured ? 'ring-2 ring-accent ring-inset' : ''
              }`}
            >
              {pkg.featured && (
                <div className="mb-4">
                  <span className="bg-accent text-white px-4 py-1.5 text-xs font-mono uppercase tracking-[0.1em]">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="font-heading text-xl font-semibold text-ink mb-2">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-ink">{pkg.price}</span>
                <span className="text-ash">{pkg.period}</span>
              </div>
              <p className="text-sm text-slate mb-6">{pkg.description}</p>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-stone">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

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
            &ldquo;TheProjectSEO completely transformed our content strategy. Within six months,
            our organic traffic tripled and content became our top lead generation channel. They
            don&apos;t just write blog posts&mdash;they build an entire content engine that compounds
            over time. The ROI has been remarkable.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">James Lim</p>
            <p className="text-sm text-slate mt-1">Head of Growth, Helpling APAC</p>
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
          title="Content marketing frequently asked questions"
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
            Complementary services to amplify your content.
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

export default function ContentServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Content Marketing Services',
          description:
            'Professional content marketing services including content strategy, SEO content creation, optimization, and performance tracking. Drive organic traffic with high-quality content that ranks and converts.',
          url: 'https://theprojectseo.com/services/content',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          keywords: 'Search engine optimization, Content marketing, Marketing, Management, Business',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Content marketing',
              sameAs: 'https://www.wikidata.org/wiki/Q558685',
            },
            {
              '@type': 'Thing',
              name: 'Marketing',
              sameAs: 'https://www.wikidata.org/wiki/Q39809',
            },
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we create content that ranks and converts"
        steps={processSteps}
        visual={<ServiceProcessVisual type="strategy" />}
        visualBg="ink"
      />
      <CaseStudySection />
      <PackagesSection />
      <TestimonialSection />
      <FAQSection />
      <RelatedServicesSection />
      <CTAFormSection
        subheading="Ready to Transform Your Content?"
        heading="Let's build a content engine that drives growth."
        lead="Partner with content marketing experts who combine SEO expertise with compelling storytelling. We'll turn your content into your most efficient and scalable acquisition channel."
        submitText="Get Content Strategy"
      />
      <Footer />
    </main>
  )
}
