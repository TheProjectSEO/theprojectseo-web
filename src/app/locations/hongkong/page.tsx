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
  LanguageIcon,
  ChartBarIcon,
  ClockIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hong Kong SEO Services | Search Engine Optimization HK | TheProjectSEO',
  description:
    'Strategic SEO services for businesses in Hong Kong. Bilingual English and Traditional Chinese optimization, Google and Baidu expertise, and proven strategies for the Asia-Pacific market.',
  alternates: { canonical: '/locations/hongkong' },
}

const advantages = [
  {
    title: 'Bilingual Market Mastery',
    description:
      'Navigate Hong Kong\'s unique bilingual landscape with SEO strategies that perform in both English and Traditional Chinese.',
    icon: LanguageIcon,
    details: [
      'English and Traditional Chinese keyword research',
      'Bilingual content optimization and localization',
      'Cantonese search intent analysis',
      'Multilingual meta tag and structured data setup',
    ],
  },
  {
    title: 'Gateway to Mainland China',
    description:
      'Leverage Hong Kong\'s position as the bridge between global markets and Mainland China for cross-border SEO reach.',
    icon: ChartBarIcon,
    details: [
      'Google and Baidu dual-platform optimization',
      'Cross-border search visibility strategies',
      'Greater Bay Area market targeting',
      '.hk and .com.hk domain authority building',
    ],
  },
  {
    title: 'Asia-Pacific Timezone Coverage',
    description:
      'Real-time SEO support aligned with Hong Kong business hours and the broader APAC trading window.',
    icon: ClockIcon,
    details: [
      'HKT (GMT+8) business hours support',
      'Same-day reporting and response',
      'APAC market monitoring coverage',
      'Rapid response for algorithm updates',
    ],
  },
  {
    title: 'Financial Hub Positioning',
    description:
      'Specialized SEO understanding of Hong Kong\'s financial services, fintech, and professional services ecosystem.',
    icon: MapPinIcon,
    details: [
      'Financial services compliance-aware SEO',
      'Fintech and blockchain industry expertise',
      'Professional services keyword strategy',
      'High-competition YMYL content optimization',
    ],
  },
]

const services = [
  {
    name: 'Local SEO Hong Kong',
    description:
      'Dominate local search results across Hong Kong\'s densely competitive digital landscape.',
    features: [
      'Google Business Profile optimization for HK',
      'Local citation building on HK directories',
      'Review management in English and Chinese',
      'District-level keyword targeting',
    ],
  },
  {
    name: 'Bilingual SEO Strategy',
    description:
      'Comprehensive search optimization across English and Traditional Chinese to capture Hong Kong\'s full market.',
    features: [
      'Dual-language keyword research and mapping',
      'Traditional Chinese content optimization',
      'Hreflang and language targeting setup',
      'Bilingual link building campaigns',
    ],
  },
  {
    name: 'Cross-Border SEO',
    description:
      'Expand your search visibility from Hong Kong into Mainland China and across the Asia-Pacific region.',
    features: [
      'Google and Baidu simultaneous optimization',
      'Greater Bay Area search targeting',
      'Simplified and Traditional Chinese bridging',
      'Regional backlink acquisition strategy',
    ],
  },
  {
    name: 'Financial Services SEO',
    description:
      'Specialized SEO for Hong Kong\'s banks, asset managers, fintech firms, and professional services companies.',
    features: [
      'YMYL compliance-first content strategy',
      'Fintech and crypto keyword targeting',
      'Authority building for regulated industries',
      'Competitor intelligence for financial sector',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Hong Kong Market Audit',
    description:
      'We conduct a comprehensive audit of your current SEO performance in the Hong Kong market, analyzing bilingual keyword rankings, local search visibility, competitor positioning, and technical infrastructure. This includes an assessment of your presence on both Google and Baidu, backlink profile quality, and conversion funnel performance across English and Chinese audiences.',
  },
  {
    number: '02',
    title: 'Bilingual Strategy Development',
    description:
      'Based on audit findings, we build a tailored SEO strategy for the Hong Kong market. This includes a prioritized bilingual keyword roadmap, content calendar covering both English and Traditional Chinese, technical optimization plan for multilingual architecture, and a link building strategy targeting Hong Kong and APAC publications with clear KPIs.',
  },
  {
    number: '03',
    title: 'Content & Optimization',
    description:
      'We execute the strategy with bilingual content creation, on-page optimization, and technical improvements. Every piece of content is crafted for both English and Chinese search intent, optimized for local relevance, and designed to establish topical authority in Hong Kong\'s competitive verticals from finance to technology.',
  },
  {
    number: '04',
    title: 'Scale & Iterate',
    description:
      'Using data-driven insights from both Google Analytics and Baidu Tongji, we continuously refine the strategy. We scale what works, adapt to algorithm changes across platforms, and expand into adjacent markets like the Greater Bay Area. Monthly reporting tracks organic traffic, lead quality, and revenue attribution by language and region.',
  },
]

const caseStudy = {
  client: 'Hong Kong Financial Services Firm',
  industry: 'Wealth Management & Advisory',
  challenge:
    'A mid-sized wealth management firm based in Central, Hong Kong, was struggling to attract high-net-worth clients through organic search. Their website was English-only, missing the significant Traditional Chinese search market entirely. Organic traffic had stagnated at 8,000 monthly sessions, with the majority coming from branded searches. Competitors were outranking them for key terms like "wealth management Hong Kong" and "asset management advisory HK" in both languages.',
  solution:
    'We implemented a comprehensive bilingual SEO strategy, beginning with a full Traditional Chinese content build-out alongside their existing English pages. We deployed proper hreflang tags, created district-specific landing pages targeting Central, Wan Chai, and Tsim Sha Tsui, and built a content hub covering investment strategies, market commentary, and regulatory updates. Our link building campaign targeted Hong Kong financial publications, APAC business directories, and cross-border media outlets.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+340%', timeframe: '12 months' },
    { metric: 'Chinese Search Traffic', improvement: '+520%', timeframe: 'From near zero' },
    { metric: 'Qualified Lead Inquiries', improvement: '+280%', timeframe: 'Monthly inbound' },
    { metric: 'Keywords in Top 10', improvement: '180+', timeframe: 'From 22 to 180+' },
  ],
}

const districts = [
  { name: 'Central', area: 'Hong Kong Island', character: 'Financial Core', businesses: '15K+' },
  { name: 'Wan Chai', area: 'Hong Kong Island', character: 'Business Hub', businesses: '12K+' },
  { name: 'Tsim Sha Tsui', area: 'Kowloon', character: 'Commercial Centre', businesses: '18K+' },
  { name: 'Causeway Bay', area: 'Hong Kong Island', character: 'Retail District', businesses: '14K+' },
  { name: 'Mong Kok', area: 'Kowloon', character: 'High-Density Market', businesses: '20K+' },
  { name: 'Admiralty', area: 'Hong Kong Island', character: 'Government & Corporate', businesses: '8K+' },
  { name: 'Sha Tin', area: 'New Territories', character: 'Tech & Residential', businesses: '10K+' },
  { name: 'Kwun Tong', area: 'Kowloon', character: 'Industrial & Emerging', businesses: '16K+' },
]

const faqItems = [
  {
    question: 'How long does it take to see SEO results in Hong Kong?',
    answer:
      'Most businesses in Hong Kong begin seeing measurable improvements in organic traffic within 3-4 months, with significant gains in leads and revenue by month 6-8. The timeline can vary based on your industry competitiveness and whether you need bilingual optimization. Financial services and professional services in Hong Kong typically see faster results due to clearly defined keyword targets and high-intent search behavior.',
  },
  {
    question: 'Do you optimize for both Google and Baidu?',
    answer:
      'Yes. While Google dominates Hong Kong search with approximately 93% market share, Baidu is essential for reaching Mainland Chinese users who search for Hong Kong services. We implement parallel optimization strategies for both platforms, accounting for their different ranking algorithms, content requirements, and technical specifications. This dual-platform approach is especially valuable for businesses targeting the Greater Bay Area market.',
  },
  {
    question: 'How do you handle bilingual SEO for English and Chinese?',
    answer:
      'Our bilingual SEO strategy goes beyond simple translation. We conduct separate keyword research for English and Traditional Chinese, as search intent often differs between language groups. We implement proper hreflang tags, create culturally adapted content for each audience, and build language-specific backlink profiles. Our team includes native Cantonese speakers who understand local search behavior and colloquial terms that drive traffic in Hong Kong.',
  },
  {
    question: 'What industries do you specialize in for Hong Kong SEO?',
    answer:
      'We have deep expertise in Hong Kong\'s core industries including financial services, fintech, professional services (legal, accounting, consulting), luxury retail, property, hospitality, and technology. Our understanding of YMYL compliance requirements is particularly valuable for regulated industries in Hong Kong, where content must meet strict accuracy and authority standards to rank well.',
  },
  {
    question: 'Can you help with cross-border SEO into Mainland China?',
    answer:
      'Absolutely. Hong Kong\'s unique position as a gateway to Mainland China makes cross-border SEO a key part of our strategy. We help businesses extend their search visibility into the Greater Bay Area and beyond through Baidu optimization, Simplified Chinese content strategies, ICP licensing guidance, and partnerships with Mainland Chinese media outlets for link building. We also manage the technical complexities of serving content to users behind the Great Firewall.',
  },
  {
    question: 'How do you measure SEO success for Hong Kong businesses?',
    answer:
      'We track metrics that matter for the Hong Kong market: organic traffic segmented by language, local pack rankings across key districts, bilingual keyword positions on both Google and Baidu, qualified lead inquiries, and revenue attribution from organic search. Our monthly reports include competitor benchmarking against Hong Kong rivals and market share analysis within your specific vertical.',
  },
]

const relatedLocations = [
  { name: 'USA', href: '/locations/usa' },
  { name: 'Philippines', href: '/locations/philippines' },
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
            Hong Kong SEO Services
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            SEO strategies for{' '}
            <em className="text-accent italic">Hong Kong&apos;s</em> competitive market
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Drive organic growth in one of Asia&apos;s most competitive digital markets with bilingual SEO strategies built for Hong Kong&apos;s unique business landscape.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get HK Market Analysis</Button>
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
    { value: '7.5M', label: 'Population in Hong Kong' },
    { value: '#3', label: 'Global financial centre ranking' },
    { value: '93%', label: 'Google market share in HK' },
    { value: '2 Languages', label: 'English & Chinese optimization' },
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
          <Subheading>Why Choose Hong Kong SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Strategic advantage in Asia&apos;s gateway market.
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

              <p className="text-sm leading-relaxed text-slate mb-4">{advantage.description}</p>

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
          <Subheading>SEO Services for Hong Kong Businesses</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for the Hong Kong market.
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
/*  Section 5: Process Steps                                                   */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we drive Hong Kong SEO results.
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
/*  Section 6: Case Study + Results (Dark Section)                             */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Hong Kong Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a Hong Kong financial firm achieve breakthrough organic growth.
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
/*  Section 7: Districts / Cities                                              */
/* -------------------------------------------------------------------------- */

function CitiesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Key Hong Kong Districts We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            District-level SEO across Hong Kong.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
          {districts.map((district, index) => (
            <div key={index} className="bg-paper p-6 text-center">
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">
                {district.name}
              </h3>
              <p className="text-slate text-sm mb-4">{district.area}</p>
              <div className="space-y-2">
                <div className="text-sm text-stone">
                  Character: <span className="text-ink font-medium">{district.character}</span>
                </div>
                <div className="text-sm text-stone">
                  Businesses: <span className="text-ink font-medium">{district.businesses}</span>
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
/*  Section 8: Client Testimonial                                              */
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
            &ldquo;TheProjectSEO understood the Hong Kong market from day one. They built a
            bilingual strategy that captured both English-speaking expats and local Cantonese
            searchers. Our organic leads have tripled, and we&apos;re now ranking on page one for
            key terms in both languages. Their cross-border expertise with Mainland China has
            opened a new growth channel we hadn&apos;t even considered.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">David Wong</p>
            <p className="text-sm text-slate mt-1">Managing Director, Pacific Advisory Group, Central HK</p>
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

export default function HongKongSEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Hong Kong SEO Services',
          description:
            'Strategic SEO services for businesses in Hong Kong. Bilingual English and Traditional Chinese optimization, Google and Baidu expertise, and proven strategies for the Asia-Pacific market.',
          url: 'https://theprojectseo.com/locations/hongkong',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Hong Kong',
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
        heading="How we drive Hong Kong SEO results"
        steps={processSteps}
        visual={<LocationProcessVisual type="hongkong" />}
        visualBg="accent"
      />
      <CaseStudySection />
      <CitiesSection />
      <TestimonialSection />
      <FAQDarkSection
        title="Hong Kong SEO frequently asked questions"
        items={faqItems}
      />
      <RelatedLocationsSection />
      <TestimonialQuoteSection
        quote="We hit our KPIs in less than 3 months. Working with Aditya, we moved our key revenue-driving pages to positions #1 and #2, where we were previously ranking at #6 or #7."
        author="James Lim"
        role="CEO"
        company="Helpling APAC"
      />
      <CTAFormSection
        subheading="Ready to Dominate Hong Kong Search Results?"
        heading="Start your Hong Kong SEO strategy today."
        lead="Partner with SEO strategists who understand Hong Kong's bilingual market and competitive digital landscape. We'll build a search strategy that drives qualified traffic from both English and Chinese audiences."
        submitText="Get Free HK Market Analysis"
      />
      <Footer />
    </main>
  )
}
