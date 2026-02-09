import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon,
  UsersIcon,
  BoltIcon,
  CpuChipIcon,
  MapPinIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'USA SEO Services | Top-Ranked SEO Agency | TheProjectSEO',
  description:
    'Leading SEO agency in USA helping businesses dominate Google search results. Expert SEO services for New York, Los Angeles, Chicago & nationwide. Drive real revenue growth.',
  keywords: 'USA SEO, New York SEO services, Los Angeles SEO agency, Chicago SEO expert, American digital marketing, Google USA ranking',
  alternates: { canonical: '/usa-seo-services' },
  openGraph: {
    title: 'USA SEO Services | Top-Ranked SEO Agency',
    description: 'Leading SEO agency in USA helping businesses dominate Google search results nationwide.',
    url: 'https://theprojectseo.com/usa-seo-services',
  },
}

const usCities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
  'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville',
  'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle',
  'Denver', 'Washington DC', 'Boston', 'Nashville', 'Baltimore', 'Oklahoma City'
]

const usStates = [
  'California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois',
  'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia',
  'Washington', 'Arizona', 'Massachusetts', 'Tennessee', 'Indiana', 'Maryland'
]

const localStats = [
  { metric: '1,200+', label: 'US Businesses Ranked #1' },
  { metric: '285%', label: 'Average Traffic Increase' },
  { metric: '50', label: 'States Served Nationwide' },
  { metric: '99%', label: 'Client Retention Rate' }
]

const challenges = [
  {
    challenge: 'Intense Competition',
    description:
      'The US market is the most competitive search landscape globally. With over 30 million businesses vying for top positions, ranking on page one requires advanced strategies, deep expertise, and relentless execution that goes far beyond basic SEO.',
    solution:
      'We deploy enterprise-grade competitive analysis and build multi-layered SEO strategies that systematically displace even the most entrenched competitors across national and local SERPs.',
    icon: BoltIcon,
  },
  {
    challenge: 'Algorithm Sensitivity',
    description:
      'Google&apos;s US index is the first to receive algorithm updates and core changes. American businesses are exposed to ranking volatility before any other market, making proactive adaptation essential to maintaining visibility.',
    solution:
      'Our team monitors algorithm changes in real time and maintains recovery-ready strategies. We build resilient SEO foundations that withstand updates rather than chasing short-term tactics.',
    icon: CpuChipIcon,
  },
  {
    challenge: 'Multi-Location Complexity',
    description:
      'Managing SEO across multiple states, cities, and metropolitan areas creates enormous complexity. Each location has unique search patterns, local competitors, and Google Business Profile requirements that demand individual attention.',
    solution:
      'We implement scalable multi-location SEO frameworks with city-specific landing pages, localized content strategies, and centralized Google Business Profile management across all your locations.',
    icon: MapPinIcon,
  },
  {
    challenge: 'Rising Paid Costs',
    description:
      'Cost-per-click in the US market continues to climb year over year, with some industries exceeding $50 per click. Businesses that rely solely on paid acquisition face unsustainable economics and shrinking margins.',
    solution:
      'We build strong organic foundations that offset rising paid spend, creating a compounding channel that reduces your blended customer acquisition cost and delivers sustainable long-term ROI.',
    icon: CurrencyDollarIcon,
  },
]

const services = [
  {
    icon: ChartBarIcon,
    title: 'US Market SEO Audit',
    description: 'Comprehensive analysis tailored for highly competitive US search landscape, including national and local competitor assessment.',
    features: [
      'National vs. local SERP analysis',
      'Competitor analysis vs. top US companies',
      'Voice search optimization for US market',
      'Mobile-first optimization for US users',
      'Conversion rate optimization focus'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Local US SEO',
    description: 'Dominate local search results in major US metropolitan areas and compete effectively against national chains.',
    features: [
      'Google My Business optimization for US market',
      'Local citation building (US directories)',
      'State and city-specific landing pages',
      'Local review management strategy',
      'Multi-location SEO for franchises'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'E-commerce SEO USA',
    description: 'Specialized SEO for US e-commerce businesses competing against Amazon, major retailers, and D2C brands.',
    features: [
      'Product page optimization for US buyers',
      'Holiday season SEO strategies',
      'Shopping intent keyword targeting',
      'Amazon SEO integration',
      'B2B e-commerce optimization'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Enterprise SEO USA',
    description: 'Advanced SEO strategies for Fortune 500 companies, large corporations, and fast-growing US businesses.',
    features: [
      'Multi-state SEO management',
      'Enterprise-scale content optimization',
      'Technical SEO at scale',
      'International + domestic SEO',
      'Corporate brand authority building'
    ]
  }
]

const testimonials = [
  {
    quote: "TheProjectSEO helped our NYC-based SaaS company achieve #1 rankings for highly competitive B2B keywords. Our organic traffic increased 380% in 10 months, generating $4.2M in additional ARR.",
    author: "Michael Thompson",
    company: "CloudScale Technologies",
    role: "VP of Marketing"
  },
  {
    quote: "As a Los Angeles-based e-commerce brand, we needed SEO experts who could compete with Amazon and major retailers. TheProjectSEO delivered exceptional results - we now rank #1 for our primary product categories.",
    author: "Sarah Johnson",
    company: "West Coast Lifestyle Co.",
    role: "CEO & Founder"
  },
  {
    quote: "Our Chicago law firm's online presence was transformed by TheProjectSEO. We now dominate local legal searches across the Midwest and generate 150+ qualified leads monthly from organic search.",
    author: "Attorney David Rodriguez",
    company: "Rodriguez & Partners LLP",
    role: "Managing Partner"
  }
]

const caseStudies = [
  {
    client: "National Healthcare Provider",
    industry: "Healthcare",
    challenge: "Competing with WebMD and major health systems for medical searches",
    results: [
      "425% increase in organic traffic",
      "$8.5M additional revenue in 24 months",
      "#1 rankings for 300+ medical keywords",
      "4x improvement in patient appointment bookings"
    ]
  },
  {
    client: "Texas-based B2B Manufacturing",
    industry: "Industrial Manufacturing",
    challenge: "Competing nationally while maintaining local Texas market dominance",
    results: [
      "310% increase in B2B lead generation",
      "1,200+ qualified manufacturing leads monthly",
      "#1 for 'industrial equipment manufacturing'",
      "75% increase in enterprise client inquiries"
    ]
  }
]

const industries = [
  'Technology & Software', 'Healthcare', 'Finance & Banking', 'E-commerce & Retail',
  'Real Estate', 'Legal Services', 'Manufacturing', 'Professional Services',
  'Education', 'Automotive', 'Hospitality', 'Non-Profit'
]

const faqItems = [
  {
    question: 'How much does SEO cost in the United States?',
    answer:
      'SEO services in the United States typically range from $1,500 to $10,000+ per month, depending on the scope, competitiveness of your industry, and the number of locations you need to target. Enterprise-level campaigns for Fortune 500 companies or highly competitive national keywords may exceed this range. We offer customized pricing based on your specific goals, market, and growth stage to ensure your investment delivers measurable ROI.',
  },
  {
    question: 'How long does it take to rank on Google in the US?',
    answer:
      'Most businesses begin seeing measurable ranking improvements within 3 to 6 months of a well-executed SEO strategy. The US market is highly competitive, so timelines vary based on your industry, current domain authority, and the competitiveness of your target keywords. Quick wins on lower-competition terms can appear within weeks, while highly competitive national keywords may take 6 to 12 months to achieve page-one rankings.',
  },
  {
    question: 'Do you work with businesses in all 50 states?',
    answer:
      'Yes, we serve businesses across all 50 states, Washington DC, and US territories. Whether you are a local business in a single city, a regional company spanning multiple states, or a national brand targeting the entire country, we have the infrastructure and expertise to deliver results. Our team understands the unique search dynamics of every major US market.',
  },
  {
    question: 'What makes the US SEO market different?',
    answer:
      'The US SEO market is uniquely challenging due to the sheer volume of competition, the sophistication of competitors, and the complexity of Google&apos;s US index. Google rolls out algorithm updates to the US market first, meaning American businesses face ranking volatility before any other country. Additionally, local SEO signals in the US are highly nuanced, with city-level, state-level, and neighborhood-level search intent all requiring distinct optimization approaches.',
  },
  {
    question: 'How do you handle local SEO for multi-location businesses?',
    answer:
      'We implement a scalable multi-location SEO framework that includes individual Google Business Profile optimization for each location, city-specific landing pages with unique localized content, consistent NAP citation management across US directories, location-specific review acquisition strategies, and centralized reporting that shows performance across all locations. This approach ensures each location ranks in its local market while maintaining brand consistency.',
  },
  {
    question: 'What industries do you serve in the US?',
    answer:
      'We serve all major industries across the United States, including technology and SaaS, healthcare, finance and banking, e-commerce and retail, real estate, legal services, manufacturing, professional services, education, automotive, hospitality, and non-profit organizations. Each industry has unique SEO challenges, and our team has deep experience building strategies tailored to industry-specific search behavior and competition.',
  },
]

const relatedLocations = [
  { name: 'Philippines SEO', href: '/philippines-seo-services' },
  { name: 'India SEO', href: '/india-seo-services' },
  { name: 'USA Locations', href: '/locations/usa' },
  { name: 'Philippines Locations', href: '/locations/philippines' },
  { name: 'Hong Kong', href: '/locations/hongkong' },
  { name: 'Singapore', href: '/locations/singapore' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Hero                                                            */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <Container className="mt-24 lg:mt-32">
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
        <div className="flex items-center gap-2 mb-6">
          <span className="font-mono text-xs font-medium tracking-[0.1em] text-accent uppercase">
            #1 SEO Agency in USA
          </span>
        </div>

        <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink">
          USA SEO Services That Dominate Competition
        </h1>

        <p className="mt-8 max-w-lg text-xl/7 font-medium text-ink/75 sm:text-2xl/8">
          Help your American business outrank competitors and dominate Google search results nationwide.
          From coast to coast - we drive revenue through search.
        </p>

        <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
          <Button href="/contact">Get Free USA SEO Audit</Button>
          <Button variant="outline" href="/pricing">
            View Enterprise Pricing
          </Button>
        </div>

        <div className="mt-8 text-sm text-ash">
          <span className="font-medium text-accent">&#10003;</span> Serving all 50 states nationwide
          <span className="mx-3">&bull;</span>
          <span className="font-medium text-accent">&#10003;</span> Fortune 500 experience
          <span className="mx-3">&bull;</span>
          <span className="font-medium text-accent">&#10003;</span> US market leaders since 2012
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 2: Stats                                                           */
/* -------------------------------------------------------------------------- */

function StatsSection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>USA SEO Success</Subheading>
          <Heading as="h2" dark className="mt-2">
            Trusted by 1,200+ American businesses nationwide.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {localStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl font-medium text-accent sm:text-5xl">{stat.metric}</div>
              <div className="mt-2 text-sm font-medium text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: Challenges (NEW)                                                */
/* -------------------------------------------------------------------------- */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>US Market Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why the US market demands specialized SEO.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <item.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {item.challenge}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-4">{item.description}</p>

              <div className="border-l-4 border-border-emphasis pl-4">
                <p className="text-sm font-medium text-ink mb-1">Our Solution:</p>
                <p className="text-sm text-stone">{item.solution}</p>
              </div>
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
    <Container className="py-24">
      <Subheading>SEO Services</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Advanced SEO services for the competitive US market.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our expertise in the highly competitive US search landscape, consumer behavior,
        and enterprise-level SEO strategies gives your business the competitive advantage.
      </Lead>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <div key={index} className="rounded-none border border-border-strong bg-white p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center">
                  <IconComponent className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">{service.title}</h3>
              </div>

              <p className="text-sm/6 text-slate mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm/6 text-slate">
                    <span className="inline-block w-1.5 h-1.5 bg-accent rounded-none mt-2 shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 5: Industries                                                      */
/* -------------------------------------------------------------------------- */

function IndustriesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Industries We Dominate</Subheading>
          <Heading as="h2" className="mt-2">
            SEO expertise across all major US industries.
          </Heading>
          <Lead className="mt-6 max-w-3xl mx-auto">
            From Fortune 500 enterprises to fast-growing startups, we&apos;ve helped American
            businesses across every major industry achieve search dominance.
          </Lead>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="text-center p-6 rounded-none border border-border-strong bg-white hover:bg-cream transition-colors">
              <div className="text-sm font-heading font-medium text-ink">{industry}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Testimonials                                                    */
/* -------------------------------------------------------------------------- */

function TestimonialsSection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <Subheading dark className="text-center">Client Success Stories</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          American businesses that dominate their markets.
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-none border border-white/10 p-8">
              <blockquote className="text-lg text-white mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="size-12 rounded-none bg-white/10 flex items-center justify-center">
                  <span className="text-white font-heading font-medium text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-heading font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-white/50">{testimonial.role}, {testimonial.company}</div>
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
/*  Section 7: Case Studies                                                    */
/* -------------------------------------------------------------------------- */

function CaseStudiesSection() {
  return (
    <Container className="py-24">
      <Subheading>Case Studies</Subheading>
      <Heading as="h2" className="mt-2">
        Proven results for American enterprises.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <div key={index} className="rounded-none border border-border-strong bg-cream p-8">
            <div className="mb-6">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">{study.client}</h3>
              <span className="inline-flex items-center rounded-none bg-accent-soft px-3 py-1 text-sm font-heading font-medium text-accent">
                {study.industry}
              </span>
            </div>

            <div className="mb-6">
              <h4 className="font-heading font-medium text-ink mb-2">Challenge:</h4>
              <p className="text-sm/6 text-slate">{study.challenge}</p>
            </div>

            <div>
              <h4 className="font-heading font-medium text-ink mb-3">Results:</h4>
              <ul className="space-y-2">
                {study.results.map((result, resultIndex) => (
                  <li key={resultIndex} className="flex items-start gap-3">
                    <span className="text-accent font-bold">&#10003;</span>
                    <span className="text-sm/6 text-stone">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: Locations                                                       */
/* -------------------------------------------------------------------------- */

function LocationsSection() {
  return (
    <Container className="py-24">
      <Subheading>Service Areas</Subheading>
      <Heading as="h2" className="mt-2">
        SEO services across the United States.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We serve businesses in all 50 states, with specialized strategies for major
        metropolitan areas and understanding of regional market dynamics.
      </Lead>

      <div className="mt-12">
        <h3 className="font-heading text-lg font-semibold text-ink mb-6">Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {usCities.map((city) => (
            <div key={city} className="text-center p-3 rounded-none border border-border bg-cream hover:bg-white transition-colors">
              <div className="text-sm font-medium text-ink">{city}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="font-heading text-lg font-semibold text-ink mb-6">States We Serve</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {usStates.map((state) => (
            <div key={state} className="text-center p-3 rounded-none border border-border bg-cream hover:bg-white transition-colors">
              <div className="text-sm font-medium text-ink">{state}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-slate">
          Serving all 50 states, Washington DC, and US territories.
          Nationwide coverage with local market expertise.
        </p>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: FAQ (NEW)                                                       */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="USA SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Related Locations (NEW)                                        */
/* -------------------------------------------------------------------------- */

function RelatedLocationsSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Explore More Locations</Subheading>
          <Heading as="h2" className="mt-2">
            SEO services across the globe.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-6">
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

function CTASection() {
  return (
    <div className="bg-cream">
      <Container className="py-24">
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Ready to dominate US search results?</Subheading>
          <Heading as="h2" className="mt-2">
            Get your free USA SEO audit today.
          </Heading>
          <Lead className="mt-6">
            Discover exactly what it takes to outrank your toughest competitors and dominate
            Google search results in the highly competitive US market.
          </Lead>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Enterprise Pricing
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-ash">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-none"></span>
              Enterprise-grade solutions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-none"></span>
              Fortune 500 experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-success rounded-none"></span>
              Results within 30 days
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function USASEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'USA SEO Services',
          description:
            'Leading SEO agency in USA helping businesses dominate Google search results. Expert SEO services for New York, Los Angeles, Chicago & nationwide. Drive real revenue growth.',
          url: 'https://theprojectseo.com/usa-seo-services',
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
          keywords: 'Search engine optimization, Economy, Business, Marketing, United States',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Economy',
              sameAs: 'https://www.wikidata.org/wiki/Q9715089',
            },
            {
              '@type': 'Thing',
              name: 'Business',
              sameAs: 'https://www.wikidata.org/wiki/Q6353120',
            },
            {
              '@type': 'Thing',
              name: 'Marketing',
              sameAs: 'https://www.wikidata.org/wiki/Q7012234',
            },
            {
              '@type': 'Thing',
              name: 'United States',
              sameAs: 'https://www.wikidata.org/wiki/Q30',
            }
          ],
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <StatsSection />
      <ChallengesSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <LocationsSection />
      <FAQSection />
      <RelatedLocationsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
