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
import {
  MapPinIcon,
  ClockIcon,
  LanguageIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Australia SEO Services | Search Engine Optimization Australia | TheProjectSEO',
  description:
    'Strategic SEO services for Australian businesses. Google.com.au expertise, local market knowledge, and proven strategies for Australian search rankings across Sydney, Melbourne, Brisbane, and beyond.',
  alternates: { canonical: '/locations/australia' },
}

const advantages = [
  {
    title: 'Local Australian Expertise',
    description:
      'In-depth knowledge of Australian search behaviour, consumer trends, and regional market dynamics across all states and territories.',
    icon: MapPinIcon,
    details: [
      'Australian consumer search behaviour analysis',
      'State and territory market variations',
      '.com.au domain authority and local signal optimisation',
      'Distance-based service area strategies for regional businesses',
    ],
  },
  {
    title: 'Google.com.au Ranking Mastery',
    description:
      'Specialised strategies for ranking on Google.com.au with local signals that differentiate Australian search results from global rankings.',
    icon: ChartBarIcon,
    details: [
      'Google.com.au vs google.com ranking factor analysis',
      'Australian-specific algorithm update monitoring',
      'Core Web Vitals optimisation for AU audiences',
      'Local pack and map ranking strategies',
    ],
  },
  {
    title: 'AEST/AWST Timezone Support',
    description:
      'Business hours support aligned with Australian timezones for real-time communication and rapid response.',
    icon: ClockIcon,
    details: [
      'AEST/ACST/AWST business hours coverage',
      'Same-day response guarantee',
      'Live support during Australian working hours',
      'Emergency SEO support available',
    ],
  },
  {
    title: 'Cultural & Language Understanding',
    description:
      'Native understanding of Australian English, local slang, and content preferences that resonate with Aussie audiences.',
    icon: LanguageIcon,
    details: [
      'Australian English spelling and terminology optimisation',
      'Local slang and colloquial content relevance',
      'Seasonal trends aligned with Southern Hemisphere',
      'Mining, tourism, and education industry expertise',
    ],
  },
]

const services = [
  {
    name: 'Local SEO Australia',
    description:
      'Optimise for local search across all Australian states, territories, and major metro areas.',
    features: [
      'Google Business Profile optimisation for AU',
      'Australian local citation and directory building',
      'Review management on AU platforms',
      'Suburb and city-level keyword targeting',
    ],
  },
  {
    name: 'E-commerce SEO',
    description:
      'Drive online sales for Australian retailers competing in a growing digital marketplace.',
    features: [
      'Product page optimisation for AU shoppers',
      'Category and collection structuring',
      'Google Shopping AU integration',
      'Conversion rate optimisation for Australian audiences',
    ],
  },
  {
    name: 'Enterprise SEO',
    description:
      'Large-scale SEO for Australian corporations and multi-location national businesses.',
    features: [
      'Multi-location optimisation across states',
      'Technical SEO at enterprise scale',
      'Content strategy for Australian markets',
      'Advanced analytics and reporting',
    ],
  },
  {
    name: 'Small Business SEO',
    description:
      'Affordable, results-driven SEO for Australian small businesses and startups looking to grow organically.',
    features: [
      'Budget-friendly SEO packages',
      'Local visibility and foot traffic growth',
      'Competitor analysis within your region',
      'Monthly performance reporting',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Australian Market Audit',
    description:
      'We conduct a comprehensive audit of your current SEO performance within the Australian market. This includes analysing your Google.com.au rankings, local search presence, .com.au domain authority, competitor landscape, and technical setup. We identify quick wins and long-term opportunities specific to the AU search ecosystem.',
  },
  {
    number: '02',
    title: 'AU-Focused Strategy',
    description:
      'Based on audit findings, we build a tailored SEO strategy aligned with your Australian growth targets. This includes a prioritised keyword roadmap for AU search terms, content calendar localised for Australian audiences, technical optimisation plan, and link building strategy targeting Australian domains and publications.',
  },
  {
    number: '03',
    title: 'Content & Optimisation',
    description:
      'We execute the strategy with locally relevant content creation, on-page optimisation using Australian English, and technical improvements. Every piece of content is written for Australian audiences, using local spelling, cultural references, and seasonal relevance aligned with the Southern Hemisphere.',
  },
  {
    number: '04',
    title: 'Scale & Report',
    description:
      'Using data-driven insights from Google.com.au rankings, we continuously refine the strategy. We scale what works, adapt to Australian algorithm shifts, and expand into new state and territory markets. Monthly reporting tracks organic traffic, local rankings, conversions, and revenue attribution across all target regions.',
  },
]

const caseStudy = {
  client: 'Australian E-commerce Retailer',
  industry: 'Home & Living',
  challenge:
    'A mid-size Australian e-commerce retailer in the home and living space was struggling to compete organically against international brands dominating Google.com.au. Their website had poor local SEO signals, with most backlinks coming from overseas domains. Organic traffic had stagnated at 18,000 monthly sessions, and their conversion rate from organic search was well below the industry average. They were over-reliant on Google Ads, with a rising cost-per-click eating into margins.',
  solution:
    'We rebuilt their SEO foundation with an Australia-first approach. We migrated to a .com.au domain, implemented hreflang tags, and built local structured data across all product and category pages. Our content strategy targeted high-intent Australian search terms, including city-specific landing pages for Sydney, Melbourne, Brisbane, and Perth. We launched a link building campaign focused exclusively on Australian publications, directories, and industry partners, growing their AU domain authority from 28 to 52 in 10 months.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+390%', timeframe: '12 months' },
    { metric: 'Google.com.au Top 10 Keywords', improvement: '180+', timeframe: 'From 22 to 202' },
    { metric: 'Organic Revenue', improvement: '+275%', timeframe: 'Year-over-year' },
    { metric: 'Customer Acquisition Cost', improvement: '-54%', timeframe: 'Organic vs. paid' },
  ],
}

const cities = [
  { name: 'Sydney', state: 'NSW', population: '5.3M', businesses: '250K+' },
  { name: 'Melbourne', state: 'VIC', population: '5.0M', businesses: '230K+' },
  { name: 'Brisbane', state: 'QLD', population: '2.6M', businesses: '130K+' },
  { name: 'Perth', state: 'WA', population: '2.1M', businesses: '110K+' },
  { name: 'Adelaide', state: 'SA', population: '1.4M', businesses: '75K+' },
  { name: 'Canberra', state: 'ACT', population: '460K', businesses: '30K+' },
  { name: 'Gold Coast', state: 'QLD', population: '700K', businesses: '45K+' },
  { name: 'Hobart', state: 'TAS', population: '250K', businesses: '15K+' },
]

const faqItems = [
  {
    question: 'How does SEO in Australia differ from other markets?',
    answer:
      'Australian SEO requires understanding of Google.com.au ranking factors, local search behaviour, and Australian English spelling conventions. The competitive landscape differs significantly from the US or UK, with unique local directories, citation sources, and backlink opportunities. Seasonal trends are also reversed compared to the Northern Hemisphere, affecting content timing for industries like retail, travel, and education.',
  },
  {
    question: 'How long does it take to see SEO results in Australia?',
    answer:
      'Most Australian businesses begin seeing measurable improvements in organic traffic within 3-4 months, with significant gains by month 6-8. Timelines vary based on competition level, current domain authority, and your industry. Local SEO results in less competitive regional areas can appear faster, while national campaigns targeting high-competition keywords require a longer investment horizon.',
  },
  {
    question: 'Do you optimise for Google.com.au specifically?',
    answer:
      'Yes. We build strategies specifically for Google.com.au, which has distinct ranking signals compared to google.com. This includes optimising for Australian local pack results, building links from .com.au domains and Australian publications, implementing geo-targeting in Google Search Console, and ensuring your content uses Australian English spelling and terminology.',
  },
  {
    question: 'Can you help with SEO across multiple Australian cities?',
    answer:
      'Absolutely. We specialise in multi-location SEO across Australia. Whether you need visibility in Sydney, Melbourne, Brisbane, Perth, or regional areas, we create city-specific landing pages, manage multiple Google Business Profiles, and build local citations for each target location. Our strategies account for state-level search behaviour differences.',
  },
  {
    question: 'What industries do you work with in Australia?',
    answer:
      'We work with businesses across all major Australian industries, including mining and resources, tourism and hospitality, education, healthcare, financial services, real estate, retail, and technology. Our team understands the unique SEO challenges and opportunities within each sector of the Australian economy.',
  },
  {
    question: 'How do you report on Australian SEO performance?',
    answer:
      'We provide monthly reports tracking Google.com.au rankings, organic traffic from Australian users, local pack visibility, conversion rates, and revenue attribution. Reports include competitor benchmarking against other Australian businesses, state-by-state performance breakdowns, and actionable recommendations for the month ahead. All reporting is aligned with AEST business hours for live review sessions.',
  },
]

const relatedLocations = [
  { name: 'USA', href: '/locations/usa' },
  { name: 'Philippines', href: '/locations/philippines' },
  { name: 'Hong Kong', href: '/locations/hongkong' },
  { name: 'Singapore', href: '/locations/singapore' },
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
            Australia SEO Services
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            SEO strategy for the{' '}
            <em className="text-accent italic">Australian market</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Strategic SEO solutions for Australian businesses — from Sydney to Perth, we help you dominate Google.com.au and drive qualified organic traffic.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Australian Market Analysis</Button>
            <Button variant="outline" href="/pricing">
              View SEO Packages
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
    { value: '26M', label: 'Population' },
    { value: '$1.6T', label: 'GDP' },
    { value: '89%', label: 'Internet penetration' },
    { value: '22M', label: 'Google.com.au users' },
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
          <Subheading>Why Choose Australia-Focused SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Local expertise for the Australian market.
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

              <ul className="space-y-2">
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
          <Subheading>SEO Services for Australian Businesses</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for the Australian market.
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
            How we drive Australian SEO results.
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
/*  Section 6: Case Study (Dark)                                               */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Australian Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped an Australian retailer achieve breakthrough organic growth.
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
          <Subheading>Major Australian Cities We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            Local SEO expertise across Australia.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-paper p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink mb-1">{city.name}</h3>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-4">
                {city.state}
              </p>
              <div className="space-y-2">
                <div className="text-sm text-slate">
                  Population: <span className="font-medium text-ink">{city.population}</span>
                </div>
                <div className="text-sm text-slate">
                  Businesses: <span className="font-medium text-ink">{city.businesses}</span>
                </div>
              </div>
            </div>
          ))}
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
            &ldquo;TheProjectSEO understood the Australian market in a way no other agency could match.
            They built a strategy around Google.com.au that tripled our organic traffic in under a year.
            Their team operates in our timezone, responds within hours, and genuinely understands
            what Australian customers are searching for. The ROI has been exceptional.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">James Mitchell</p>
            <p className="text-sm text-slate mt-1">Head of Digital, Horizon Retail Group, Sydney</p>
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
            SEO expertise across the globe.
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

export default function AustraliaSEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Australia SEO Services',
          description:
            'Strategic SEO services for Australian businesses. Google.com.au expertise, local market knowledge, and proven strategies for Australian search rankings across Sydney, Melbourne, Brisbane, and beyond.',
          url: 'https://theprojectseo.com/locations/australia',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Australia',
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
        heading="How we drive Australian SEO results"
        steps={processSteps}
        visual={<LocationProcessVisual type="australia" />}
        visualBg="accent"
      />
      <CaseStudySection />
      <CitiesSection />
      <TestimonialSection />
      <FAQDarkSection
        title="Australia SEO frequently asked questions"
        items={faqItems}
      />
      <RelatedLocationsSection />
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <CTAFormSection
        subheading="Ready to Dominate Australian Search Results?"
        heading="Let's build your Australian SEO strategy."
        lead="Partner with SEO experts who understand the Australian market inside and out. We'll create a winning strategy that drives qualified Australian traffic to your business."
        submitText="Get Free Australian Market Analysis"
      />
      <Footer />
    </main>
  )
}
