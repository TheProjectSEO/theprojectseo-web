import { Button } from '@/components/button'
import { HeroAnimation } from '@/components/hero-animation'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { CTAFormSection } from '@/components/service-page-sections'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { LocationProcessVisual } from '@/components/location-process-visual'
import { MapPinIcon, ClockIcon, LanguageIcon, ChartBarIcon } from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'USA SEO Services | Search Engine Optimization United States | TheProjectSEO',
  description:
    'Professional SEO services for businesses in the United States. Local market expertise, Google algorithm updates, and proven strategies for US search rankings.',
  alternates: { canonical: '/locations/usa' },
}

const advantages = [
  {
    title: 'Local Market Expertise',
    description:
      'Deep understanding of US search behavior, consumer preferences, and market dynamics.',
    icon: MapPinIcon,
    details: [
      'US consumer search behavior analysis',
      'Regional market variations',
      'Local business directory optimization',
      'State-specific SEO strategies',
    ],
  },
  {
    title: 'Google Algorithm Expertise',
    description:
      'Stay ahead of Google updates with strategies tailored for the US market.',
    icon: ChartBarIcon,
    details: [
      'Real-time algorithm update monitoring',
      'US-specific ranking factor analysis',
      'Core Web Vitals optimization',
      'Mobile-first indexing strategies',
    ],
  },
  {
    title: 'Timezone Aligned Support',
    description:
      'US business hours support for real-time communication and faster response.',
    icon: ClockIcon,
    details: [
      'EST/PST business hours support',
      'Same-day response guarantee',
      'Live chat during US hours',
      'Emergency SEO support available',
    ],
  },
  {
    title: 'Cultural Understanding',
    description:
      'Native understanding of American culture, language nuances, and content preferences.',
    icon: LanguageIcon,
    details: [
      'American English optimization',
      'Cultural content relevance',
      'US holiday and seasonal trends',
      'Regional dialect considerations',
    ],
  },
]

const services = [
  {
    name: 'Local SEO USA',
    description:
      'Optimize for local search across all US states and cities.',
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review management',
      'Local keyword targeting',
    ],
  },
  {
    name: 'Enterprise SEO',
    description:
      'Large-scale SEO for Fortune 500 and enterprise companies.',
    features: [
      'Multi-location optimization',
      'Technical SEO at scale',
      'Content strategy',
      'Advanced analytics',
    ],
  },
  {
    name: 'E-commerce SEO',
    description:
      'Drive sales for US online retailers and marketplaces.',
    features: [
      'Product page optimization',
      'Category structuring',
      'Shopping campaign integration',
      'Conversion optimization',
    ],
  },
  {
    name: 'SaaS SEO',
    description:
      'Specialized SEO for US software companies and startups.',
    features: [
      'Technical content marketing',
      'Developer-focused SEO',
      'Product-led growth strategies',
      'Freemium model optimization',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'US Market Audit',
    description:
      'We analyze the competitive US search landscape for your industry, evaluating your current rankings, technical health, backlink profile, and content gaps. This includes benchmarking against top US competitors and identifying market-specific opportunities across national and local search.',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'Based on audit insights, we build a US-market-specific SEO roadmap aligned with your business goals. This includes a prioritized keyword plan segmented by geography and intent, a content calendar, technical optimization priorities, and a link building strategy with clear milestones and KPIs.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'We execute across all pillars of SEO: on-page optimization of title tags, meta descriptions, and content structure; technical fixes for crawlability, site speed, and Core Web Vitals; content creation targeting high-value US keywords; and strategic link building from authoritative American domains.',
  },
  {
    number: '04',
    title: 'Monitor & Scale',
    description:
      'We track rankings across US markets using enterprise-grade tools, monitor organic traffic and conversion trends, and iterate on the strategy monthly. As results compound, we scale successful tactics, expand into new keyword verticals, and adapt to Google algorithm updates proactively.',
  },
]

const caseStudy = {
  client: 'US E-commerce Retailer',
  industry: 'Direct-to-Consumer Home Goods',
  challenge:
    'A mid-size US e-commerce company selling home goods direct-to-consumer was heavily reliant on paid advertising, spending over $180,000 per month on Google Ads with diminishing returns. Organic traffic contributed less than 15% of total revenue, and the site had significant technical debt: thousands of thin product pages, duplicate content from faceted navigation, and a Core Web Vitals score in the bottom quartile. With rising CPCs in the home goods vertical, leadership needed a sustainable organic channel to protect margins and reduce customer acquisition costs.',
  solution:
    'We began with a comprehensive technical overhaul, consolidating 4,000+ thin pages, implementing canonical tags for faceted navigation, and optimizing site speed to achieve passing Core Web Vitals scores. Our content strategy focused on building topical authority through buying guides, product comparison content, and room-by-room design inspiration hubs targeting high-intent keywords. We restructured the category taxonomy for better crawl efficiency and internal linking, then launched a link building campaign targeting home design publications, lifestyle blogs, and interior design directories. Within 6 months the organic channel was outpacing paid in revenue contribution.',
  results: [
    { metric: 'Organic Revenue Growth', improvement: '+385%', timeframe: '12 months' },
    { metric: 'Keywords in Top 10', improvement: '650+', timeframe: 'From 89 to 739' },
    { metric: 'Organic Traffic', improvement: '+290%', timeframe: 'Monthly sessions' },
    { metric: 'Paid Ad Spend Reduction', improvement: '-55%', timeframe: 'While growing total revenue' },
  ],
}

const cities = [
  { name: 'New York', state: 'NY', population: '8.3M', businesses: '200K+' },
  { name: 'Los Angeles', state: 'CA', population: '4.0M', businesses: '150K+' },
  { name: 'Chicago', state: 'IL', population: '2.7M', businesses: '120K+' },
  { name: 'Houston', state: 'TX', population: '2.3M', businesses: '110K+' },
  { name: 'Phoenix', state: 'AZ', population: '1.7M', businesses: '85K+' },
  { name: 'Philadelphia', state: 'PA', population: '1.6M', businesses: '80K+' },
  { name: 'San Antonio', state: 'TX', population: '1.5M', businesses: '75K+' },
  { name: 'San Diego', state: 'CA', population: '1.4M', businesses: '70K+' },
]

const faqItems = [
  {
    question: 'How much does SEO cost in the United States?',
    answer:
      'SEO pricing in the US market varies based on competitiveness, scope, and business size. For small to mid-size businesses, monthly retainers typically range from $1,500 to $5,000. Enterprise and highly competitive verticals can range from $5,000 to $15,000+ per month. Our engagements are priced based on the complexity of your market, the number of target locations, and the aggressiveness of your growth goals. We provide transparent pricing with clear deliverables and measurable KPIs tied to organic traffic, rankings, and revenue attribution.',
  },
  {
    question: 'How long does SEO take to show results for US businesses?',
    answer:
      'Most US businesses begin seeing measurable improvements within 3 to 6 months, depending on the competitiveness of their industry and their starting point. Local SEO campaigns in less competitive markets can show results in as little as 8 to 12 weeks, while national campaigns in highly competitive verticals may take 6 to 9 months for significant traction. We focus on quick wins in the first 90 days, such as fixing technical issues, optimizing existing high-potential pages, and building local citations, while simultaneously building toward long-term organic growth.',
  },
  {
    question: 'Do you work with businesses in all 50 states?',
    answer:
      'Yes, we provide SEO services to businesses across all 50 US states and every major metropolitan area. Whether you are a local business in a single city, a regional chain spanning multiple states, or a national brand targeting the entire country, we have the tools, data, and expertise to build a tailored strategy. Our team has direct experience with local search dynamics in markets ranging from New York and Los Angeles to smaller metros and rural regions.',
  },
  {
    question: 'What makes US SEO different from international SEO?',
    answer:
      'The US market is the most competitive search landscape in the world, with higher domain authority thresholds, more sophisticated competitors, and greater content depth required to rank. US-specific factors include Google&apos;s local pack algorithm, which weighs proximity, reviews, and Google Business Profile signals heavily; the importance of E-E-A-T signals for YMYL topics; and the need to account for regional search behavior differences across states and cities. We also navigate the complexity of multi-location SEO for businesses operating across different US markets.',
  },
  {
    question: 'Can you help with both local and national SEO?',
    answer:
      'Absolutely. We run multi-strategy campaigns that address both local and national search visibility simultaneously. For local SEO, we optimize Google Business Profiles, build local citations, manage reviews, and target geo-modified keywords for each of your locations. For national SEO, we focus on building domain authority, creating comprehensive content hubs, earning high-quality backlinks, and targeting non-geographic high-intent keywords. Many of our US clients benefit from a hybrid approach that captures both local pack results and organic national rankings.',
  },
  {
    question: 'How do you handle Google algorithm updates affecting US rankings?',
    answer:
      'We take a proactive rather than reactive approach to algorithm updates. Our team monitors Google&apos;s search quality rater guidelines, core update announcements, and ranking volatility signals daily. We build strategies grounded in sustainable best practices, so our clients are rarely negatively impacted by updates. When major core updates do roll out, we conduct immediate impact analyses across all client portfolios, identify any ranking shifts, and adjust strategies within days. Our focus on E-E-A-T, high-quality content, and clean technical foundations means our clients typically gain ground during algorithm updates rather than losing it.',
  },
]

const relatedLocations = [
  { name: 'Philippines', href: '/locations/philippines' },
  { name: 'Hong Kong', href: '/locations/hongkong' },
  { name: 'Singapore', href: '/locations/singapore' },
  { name: 'Australia', href: '/locations/australia' },
  { name: 'Germany', href: '/locations/germany' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Header / Hero                                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="relative">
        <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            USA SEO Services
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            SEO services built for the{' '}
            <em className="text-accent italic">American market</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Drive organic growth for your US business with local market expertise, proven SEO strategies, and deep understanding of the world&apos;s most competitive search landscape.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get US Market Analysis</Button>
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
    { value: '330M+', label: 'US population' },
    { value: '$1.5T', label: 'Digital economy' },
    { value: '93%', label: 'Online experiences start with search' },
    { value: '8.5B', label: 'Daily Google searches' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">
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
/*  Section 3: Advantages                                                      */
/* -------------------------------------------------------------------------- */

function AdvantagesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Why Choose US-Based SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Local expertise for maximum impact.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <advantage.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {advantage.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-6">{advantage.description}</p>

              <ul className="space-y-3">
                {advantage.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3 text-sm text-stone">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {detail}
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
/*  Section 4: Services                                                        */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>SEO Services for US Businesses</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for the American market.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                {service.name}
              </h3>
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
/*  Section 5: Process                                                         */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we drive US SEO results.
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
/*  Section 6: Case Study (Dark Section)                                       */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>US Client Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a US e-commerce retailer grow organic revenue by 385%.
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
/*  Section 7: Cities                                                          */
/* -------------------------------------------------------------------------- */

function CitiesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Major US Cities We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            Local SEO expertise across America.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-paper p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">{city.name}</h3>
              <p className="text-slate text-sm mb-4">{city.state}</p>
              <div className="space-y-2">
                <div className="text-sm text-stone">
                  Population: <span className="text-ink font-medium">{city.population}</span>
                </div>
                <div className="text-sm text-stone">
                  Businesses: <span className="text-ink font-medium">{city.businesses}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate mb-6">
            We provide SEO services to businesses across all 50 states and major metropolitan areas.
          </p>
          <Button href="/contact" variant="outline">
            Find Your Local SEO Expert
          </Button>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: Testimonial                                                     */
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
            &ldquo;TheProjectSEO completely changed how we approach organic growth in the US market.
            Within six months our organic traffic tripled, and we&apos;re now ranking in the top 3 for
            keywords we never thought we could compete on. Their understanding of the American search
            landscape and local SEO nuances is unmatched. They don&apos;t just drive traffic, they drive
            revenue.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Eyal Gerber</p>
            <p className="text-sm text-slate mt-1">CMO, Novodes</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: FAQ (Dark)                                                      */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*  Section 10: Related Locations                                              */
/* -------------------------------------------------------------------------- */

function RelatedLocationsSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Explore More Locations</Subheading>
          <Heading as="h2" className="mt-2">
            SEO expertise around the world.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-5">
          {relatedLocations.map((location, index) => (
            <Link
              key={index}
              href={location.href}
              className="bg-paper p-4 text-center text-sm font-heading font-medium text-stone transition-colors hover:text-accent hover:bg-cream"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 11: CTA                                                            */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function USASEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'USA SEO Services',
          description:
            'Professional SEO services for businesses in the United States. Local market expertise, Google algorithm updates, and proven strategies for US search rankings.',
          url: 'https://theprojectseo.com/locations/usa',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'United States',
          },
          serviceType: 'Search Engine Optimization',
        }}
      />
      <Header />
      <StatsBar />
      <AdvantagesSection />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we drive US SEO results"
        steps={processSteps}
        visual={<LocationProcessVisual type="usa" />}
        visualBg="accent"
      />
      <CaseStudySection />
      <CitiesSection />
      <TestimonialSection />
      <FAQDarkSection
        title="USA SEO frequently asked questions"
        items={faqItems}
      />
      <RelatedLocationsSection />
      <TestimonialQuoteSection
        quote="Aditya was brought in as a consultant to help my department improve our SEO practices. His advice was invaluable and he was always on hand to answer questions, offer insights, and he gave us a number of great suggestions for SEO tools that would help us in our day to day SEO content production. I can&apos;t recommend Aditya&apos;s services highly enough. Very professional and reliable throughout our working relationship."
        author="Frederick J&eacute;quier"
        role="Senior Content Editor"
        company="GoTeamUp"
      />
      <CTAFormSection
        subheading="Ready to Dominate US Search Results?"
        heading="Let's build your US SEO growth engine."
        lead="Partner with SEO experts who understand the American market inside and out. We'll create a winning strategy that drives qualified US traffic and turns organic search into your most efficient revenue channel."
        submitText="Get Free US Market Analysis"
      />
      <Footer />
    </main>
  )
}
