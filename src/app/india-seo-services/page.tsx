import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { CTAFormSection } from '@/components/service-page-sections'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { HeroAnimation } from '@/components/hero-animation'
import {
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon,
  UsersIcon,
  LanguageIcon,
  BuildingStorefrontIcon,
  DevicePhoneMobileIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'India SEO Services | Top-Ranked SEO Agency | TheProjectSEO',
  description:
    'Leading SEO agency in India helping businesses dominate Google search results. Expert SEO services for Mumbai, Delhi, Bangalore & nationwide. Drive real business growth.',
  keywords: 'India SEO, Mumbai SEO services, Delhi SEO agency, Bangalore SEO expert, Indian digital marketing, Google India ranking',
  alternates: { canonical: '/india-seo-services' },
  openGraph: {
    title: 'India SEO Services | Top-Ranked SEO Agency',
    description: 'Leading SEO agency in India helping businesses dominate Google search results nationwide.',
    url: 'https://theprojectseo.com/india-seo-services',
  },
}

const indianCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune',
  'Kolkata', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
  'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna'
]

const localStats = [
  { metric: '750+', label: 'Indian Businesses Ranked #1' },
  { metric: '220%', label: 'Average Traffic Increase' },
  { metric: '28+', label: 'States & UTs Served' },
  { metric: '98%', label: 'Client Retention Rate' }
]

const challenges = [
  {
    challenge: 'Multilingual Complexity',
    description:
      'India has 22 official languages and hundreds of dialects. Reaching customers effectively means creating content that resonates across Hindi, English, Tamil, Bengali, Telugu, and regional language searches. A one-language SEO strategy leaves the majority of your potential audience untapped.',
    solution:
      'We build multilingual SEO strategies with region-specific keyword research, hreflang implementation, and locally optimized content that captures search demand across India&apos;s diverse linguistic landscape.',
    icon: LanguageIcon,
  },
  {
    challenge: 'Intense Local Competition',
    description:
      'With millions of Indian businesses rapidly going digital, competition for local search visibility is fierce. From startups in Bangalore to manufacturers in Gujarat, every industry is investing in online presence, making it harder to stand out without a sophisticated SEO approach.',
    solution:
      'We identify underserved keyword niches and build hyper-local content strategies that differentiate your business from the competition, leveraging local citations, Google Business Profile optimization, and region-specific authority building.',
    icon: BuildingStorefrontIcon,
  },
  {
    challenge: 'Mobile-Dominant Market',
    description:
      'India has over 700 million mobile internet users, and for many, a smartphone is their primary or only device. Mobile-first indexing, page speed on variable network conditions, and mobile UX are not optional — they are the foundation of any successful India SEO strategy.',
    solution:
      'We optimize for mobile-first with aggressive Core Web Vitals improvements, AMP implementation where relevant, lightweight page architectures, and UX patterns designed for how Indian users actually browse on mobile.',
    icon: DevicePhoneMobileIcon,
  },
  {
    challenge: 'Emerging E-commerce Market',
    description:
      'India&apos;s e-commerce market is growing rapidly but remains fragmented across platforms like Flipkart, Amazon India, Meesho, and D2C brands. SEO strategies must account for marketplace competition, price-sensitive buyers, and festival-driven purchase cycles.',
    solution:
      'We develop e-commerce SEO strategies that optimize product discovery across search engines and marketplaces, with seasonal campaign planning around Diwali, Big Billion Days, and other high-intent shopping events.',
    icon: ShoppingCartIcon,
  },
]

const services = [
  {
    icon: ChartBarIcon,
    title: 'Indian Market SEO Audit',
    description: 'Comprehensive analysis tailored for Indian search behavior, local competitors, and diverse market opportunities across different regions.',
    features: [
      'Multi-language SEO assessment (Hindi, English, regional)',
      'Competitor analysis vs. top Indian companies',
      'Mobile-first optimization for Indian users',
      'Local SERP analysis for Indian keywords',
      'Voice search optimization for Indian accent/queries'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Local India SEO',
    description: 'Dominate local search results in Mumbai, Delhi, Bangalore, Chennai, and other major Indian cities.',
    features: [
      'Google My Business optimization for India',
      'Local citation building (Indian directories)',
      'Multi-language keyword optimization',
      'Regional landing page optimization',
      'Indian review management strategy'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'E-commerce SEO India',
    description: 'Specialized SEO for Indian e-commerce businesses competing against Flipkart, Amazon India, and local marketplaces.',
    features: [
      'Product page optimization for Indian buyers',
      'Festival season SEO strategies',
      'Regional delivery optimization',
      'Price comparison optimization',
      'Indian payment method integration SEO'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Enterprise SEO India',
    description: 'Advanced SEO strategies for large Indian corporations, startups, and multinational companies with Indian operations.',
    features: [
      'Multi-city SEO management',
      'International + local SEO strategy',
      'Large-scale content optimization',
      'Enterprise technical SEO',
      'Brand visibility across India'
    ]
  }
]

const testimonials = [
  {
    quote: "TheProjectSEO transformed our Mumbai-based fintech startup\u2019s online presence. We achieved #1 rankings for competitive financial keywords and increased organic traffic by 450%, generating \u20B98.5 crores in additional revenue.",
    author: "Rajesh Sharma",
    company: "FinTech Innovations Pvt Ltd",
    role: "CEO & Co-founder"
  },
  {
    quote: "As a Bangalore-based SaaS company, we needed SEO experts who understood both the Indian market and global reach. TheProjectSEO delivered exceptional results - we now rank higher than international competitors.",
    author: "Priya Patel",
    company: "CloudTech Solutions",
    role: "Head of Marketing"
  },
  {
    quote: "Our Delhi healthcare clinic\u2019s online visibility skyrocketed after working with TheProjectSEO. We now dominate local medical searches and receive 100+ qualified patient inquiries monthly from Google.",
    author: "Dr. Arjun Singh",
    company: "Advanced Medical Care",
    role: "Medical Director"
  }
]

const caseStudies = [
  {
    client: "Indian E-learning Platform",
    industry: "EdTech",
    challenge: "Competing with BYJU\u2019s and Unacademy for educational searches",
    results: [
      "400% increase in organic traffic",
      "\u20B912 crores additional revenue in 18 months",
      "#1 rankings for 200+ education keywords",
      "3x improvement in course enrollment conversion"
    ]
  },
  {
    client: "Mumbai Real Estate Group",
    industry: "Real Estate",
    challenge: "Dominating competitive Mumbai property market",
    results: [
      "350% increase in local search visibility",
      "800+ qualified property leads monthly",
      "#1 for 'Mumbai flats for sale'",
      "60% increase in property site visits"
    ]
  }
]

const industries = [
  'IT & Software', 'E-commerce', 'Healthcare', 'Education', 'Real Estate',
  'Finance & Banking', 'Manufacturing', 'Retail', 'Hospitality', 'Automotive'
]

const faqItems = [
  {
    question: 'Why hire an SEO company from India?',
    answer:
      'India offers a deep talent pool of SEO professionals with strong technical and analytical skills, combined with cost-effective service delivery. Indian SEO agencies bring excellent English proficiency, experience working across global markets, and an innate understanding of one of the world\u2019s largest and most diverse digital markets. You get world-class expertise at a fraction of Western agency pricing, without compromising on quality or communication.',
  },
  {
    question: 'How much does SEO cost in India?',
    answer:
      'SEO pricing in India varies based on scope and competitiveness. For small to mid-sized businesses, monthly SEO retainers typically range from \u20B91,80,000 to \u20B93,50,000 (approximately $2,200 to $4,200 USD). Enterprise-level SEO engagements for large corporations or highly competitive industries range from \u20B93,50,000 to \u20B95,00,000+ per month ($4,200 to $6,000+ USD). Our pricing is structured around measurable ROI, ensuring your investment delivers tangible business growth.',
  },
  {
    question: 'How do you handle the Indian market\u2019s diversity?',
    answer:
      'We develop region-specific SEO strategies that account for India\u2019s linguistic, cultural, and economic diversity. This includes multilingual keyword research across Hindi, English, Tamil, Telugu, Bengali, and other regional languages. We create geo-targeted content for specific states and cities, optimize for regional search behavior patterns, and build local citation profiles tailored to each market. Our team includes native speakers who understand the nuances of each region.',
  },
  {
    question: 'What makes Indian SEO different from Western SEO?',
    answer:
      'Indian SEO requires navigating a unique digital ecosystem. Google dominates but regional language searches are growing rapidly. Mobile-first optimization is critical since over 70% of Indian internet users access the web via smartphones, often on slower connections. Voice search in Hindi and regional languages is surging. Local search behavior differs significantly from Western markets, with users frequently searching in transliterated text (Hindi words in English script). We optimize for all these India-specific factors.',
  },
  {
    question: 'Do you work with both Indian and international clients?',
    answer:
      'Yes, we work with both Indian businesses looking to dominate domestic search results and international companies seeking to enter or expand in the Indian market. For Indian clients, we provide full-spectrum SEO from local to national visibility. For international clients, we offer India market entry strategies, localization services, and regional SEO campaigns tailored to specific Indian states and cities. Our global experience combined with deep local expertise makes us the ideal partner for either scenario.',
  },
  {
    question: 'How do you measure SEO success for Indian businesses?',
    answer:
      'We track a comprehensive set of KPIs tailored to your business goals. This includes organic traffic growth segmented by region and language, keyword rankings across target Indian cities and states, lead generation and conversion rates, and direct revenue attribution from organic search. We provide monthly reports with clear metrics on Google Business Profile performance, local pack visibility, and competitive positioning. For e-commerce clients, we also track organic revenue, average order value from SEO traffic, and category-level performance.',
  },
]

const relatedLocations = [
  { name: 'USA SEO', href: '/usa-seo-services' },
  { name: 'Philippines SEO', href: '/philippines-seo-services' },
  { name: 'Singapore', href: '/locations/singapore' },
  { name: 'Hong Kong', href: '/locations/hongkong' },
  { name: 'Australia', href: '/locations/australia' },
  { name: 'Germany', href: '/locations/germany' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Hero                                                            */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <Container className="mt-16 lg:mt-24">
      <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
        <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
          #1 SEO Agency in India
        </p>

        <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
          India SEO Services That Drive Business Growth
        </h1>

        <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
          Help your Indian business dominate Google search results nationwide.
          From Mumbai to Bangalore to Delhi - we connect you with your customers.
        </p>

        <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
          <Button href="/contact">Get Free India SEO Audit</Button>
          <Button variant="outline" href="/pricing">
            View Pricing Plans
          </Button>
        </div>

        <div className="mt-8 text-sm text-ash">
          <span className="font-medium text-accent">--</span> Serving businesses across all Indian states
          <span className="mx-3">|</span>
          <span className="font-medium text-accent">--</span> Multi-language SEO expertise
          <span className="mx-3">|</span>
          <span className="font-medium text-accent">--</span> Indian market specialists since 2012
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
          <Subheading dark>Indian SEO Success</Subheading>
          <Heading as="h2" dark className="mt-2">
            Trusted by 750+ Indian businesses nationwide.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {localStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl font-medium text-white sm:text-5xl">{stat.metric}</div>
              <div className="mt-2 text-sm font-medium text-white/50">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: Challenges                                                      */
/* -------------------------------------------------------------------------- */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>India SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why the Indian market needs specialized SEO.
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
        Specialized SEO services for the diverse Indian market.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our deep understanding of Indian search patterns, regional preferences,
        multi-language requirements, and local competition gives your business the advantage.
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
                <h3 className="font-heading text-xl font-semibold text-ink">{service.title}</h3>
              </div>

              <p className="text-sm/6 text-slate mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm/6 text-slate">
                    <span className="inline-block w-1.5 h-1.5 bg-accent mt-2 flex-shrink-0"></span>
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
    <div className="bg-cream">
      <Container className="py-24">
        <div className="text-center mb-16">
          <Subheading>Industries We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            SEO expertise across all major Indian industries.
          </Heading>
          <Lead className="mt-6 max-w-3xl mx-auto">
            From startups to enterprise companies, we&apos;ve helped businesses across
            every major industry dominate their market through strategic SEO.
          </Lead>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
          Indian businesses that dominate their markets.
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-none border border-white/10 p-8">
              <blockquote className="text-lg text-white mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex items-center">
                <div className="size-12 rounded-none bg-accent flex items-center justify-center">
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
        Real results for Indian businesses.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <div key={index} className="rounded-none border border-border-strong bg-cream p-8">
            <div className="mb-6">
              <h3 className="font-heading text-xl font-semibold text-ink mb-2">{study.client}</h3>
              <span className="inline-flex items-center rounded-none bg-accent-soft px-3 py-1 text-sm font-mono font-medium text-accent">
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
                    <span className="text-accent font-heading font-bold">--</span>
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
        SEO services across India.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We serve businesses in all major Indian cities and states, with specialized
        local SEO strategies adapted for each regional market.
      </Lead>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {indianCities.map((city) => (
          <div key={city} className="text-center p-4 rounded-none border border-border-strong bg-cream hover:bg-white transition-colors">
            <div className="text-sm font-heading font-medium text-ink">{city}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="text-sm/6 text-ash">
          Serving all 28 states and 8 union territories across India.
          Don&apos;t see your city? We work with businesses nationwide.
        </p>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: FAQ                                                             */
/* -------------------------------------------------------------------------- */

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection
        title="India SEO frequently asked questions"
        items={faqItems}
      />
    </>
  )
}

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


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function IndiaSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'India SEO Services',
          description:
            'Leading SEO agency in India helping businesses dominate Google search results. Expert SEO services for Mumbai, Delhi, Bangalore & nationwide. Drive real business growth.',
          url: 'https://theprojectseo.com/india-seo-services',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'India',
          },
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, India, Languages of India, Flipkart, Technology',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'India',
              sameAs: 'https://www.wikidata.org/wiki/Q668',
            },
            {
              '@type': 'Thing',
              name: 'Languages of India',
              sameAs: 'https://www.wikidata.org/wiki/Q135595',
            },
            {
              '@type': 'Thing',
              name: 'Flipkart',
              sameAs: 'https://www.wikidata.org/wiki/Q1381966',
            },
            {
              '@type': 'Thing',
              name: 'Technology',
              sameAs: 'https://www.wikidata.org/wiki/Q4884546',
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
      <TestimonialAndFAQSection />
      <RelatedLocationsSection />
      <CTAFormSection
        subheading="Ready to dominate Indian search results?"
        heading="Get your free India SEO audit today."
        lead="Discover exactly what it takes to outrank your competitors and dominate Google search results for your target Indian market segments."
        submitText="Get Free SEO Audit"
      />
      <Footer />
    </main>
  )
}
