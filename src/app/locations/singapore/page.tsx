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
  LanguageIcon,
  ChartBarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Singapore SEO Services | Search Engine Optimization Singapore | TheProjectSEO',
  description:
    'Strategic SEO services for businesses in Singapore. Multilingual expertise, ASEAN market expansion, and data-driven strategies for Google.com.sg and regional search rankings.',
  alternates: { canonical: '/locations/singapore' },
}

const advantages = [
  {
    title: 'ASEAN Regional Hub',
    description:
      'Leverage Singapore&apos;s position as the gateway to Southeast Asia for regional SEO dominance.',
    icon: MapPinIcon,
    details: [
      'Cross-border ASEAN search strategies',
      'Regional market entry SEO planning',
      'Singapore as hub for multi-country campaigns',
      'APAC competitor landscape analysis',
    ],
  },
  {
    title: 'Multilingual SEO Expertise',
    description:
      'Reach Singapore&apos;s diverse population with SEO in English, Mandarin, Malay, and Tamil.',
    icon: LanguageIcon,
    details: [
      'English, Mandarin, Malay, and Tamil optimization',
      'Singlish and local search term targeting',
      'Bilingual content strategy and hreflang setup',
      'Culturally relevant keyword research',
    ],
  },
  {
    title: 'Digital-First Economy',
    description:
      'Capitalize on Singapore&apos;s world-leading smartphone penetration and digital adoption rates.',
    icon: ChartBarIcon,
    details: [
      'Mobile-first SEO for 90%+ smartphone penetration',
      'Voice search optimization for local queries',
      'App store and web search integration',
      'E-commerce SEO for Shopee and Lazada sellers',
    ],
  },
  {
    title: 'Government Digital Support',
    description:
      'Align your SEO investment with Singapore government grants and digital transformation programs.',
    icon: ClockIcon,
    details: [
      'PSG grant-eligible digital marketing services',
      'IMDA digital transformation alignment',
      'SME Go Digital programme compatibility',
      'Enterprise Development Grant synergy',
    ],
  },
]

const services = [
  {
    name: 'Local SEO Singapore',
    description:
      'Dominate Google.com.sg and Google Maps results for Singapore-based searches.',
    features: [
      'Google Business Profile optimization for SG',
      '.sg domain SEO and authority building',
      'Local citation and directory listings',
      'Google Maps and location-based targeting',
    ],
  },
  {
    name: 'Multilingual SEO',
    description:
      'Capture search traffic across all four official languages of Singapore.',
    features: [
      'English and Mandarin keyword strategies',
      'Malay and Tamil content optimization',
      'Hreflang and language targeting setup',
      'Cross-language search intent mapping',
    ],
  },
  {
    name: 'ASEAN Expansion SEO',
    description:
      'Scale your Singapore business across Southeast Asian markets with regional SEO.',
    features: [
      'Multi-country SEO strategy from Singapore hub',
      'Market-specific keyword research (MY, ID, TH, PH)',
      'Regional backlink and authority building',
      'Cross-border e-commerce SEO',
    ],
  },
  {
    name: 'Enterprise SEO Singapore',
    description:
      'Large-scale SEO solutions for MNCs, GLCs, and high-growth Singapore enterprises.',
    features: [
      'Technical SEO at enterprise scale',
      'Content strategy for B2B and B2C verticals',
      'Advanced analytics and attribution',
      'Competitive intelligence and market share analysis',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Singapore Market Audit',
    description:
      'We conduct a comprehensive audit of your current SEO performance within the Singapore market, analyzing your site architecture, content gaps, keyword rankings on Google.com.sg, and competitive landscape across local and regional competitors. This includes a deep-dive into multilingual opportunities, technical setup, backlink profile, and conversion funnel to identify quick wins and long-term growth areas.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'Based on audit findings, we build a tailored SEO strategy aligned with your Singapore growth targets. This includes a prioritized keyword roadmap across English, Mandarin, and other languages, a content calendar mapped to local search trends and cultural moments, technical optimization plan, and link building strategy with clear KPIs and timelines.',
  },
  {
    number: '03',
    title: 'Content & Optimization',
    description:
      'We execute the strategy with multilingual content creation, on-page optimization, and technical improvements. Every piece of content is designed to rank on Google.com.sg, convert local audiences, and support your brand narrative across Singapore&apos;s four official languages and diverse cultural segments.',
  },
  {
    number: '04',
    title: 'Scale & Expand',
    description:
      'Using data-driven insights, we continuously refine the strategy. We scale what works domestically and expand into ASEAN markets using Singapore as your regional hub. Monthly reporting tracks organic traffic growth, lead attribution, and competitive positioning across the region.',
  },
]

const caseStudy = {
  client: 'Singapore FinTech Platform',
  industry: 'Financial Technology',
  challenge:
    'A fast-growing Singapore-based FinTech company offering digital payments and lending solutions was struggling to compete organically against well-funded incumbents and traditional financial institutions. Their website was heavily JavaScript-rendered with poor crawlability for Google.com.sg. Content was only available in English, missing the 40% of Singaporeans who search in Mandarin. Organic traffic had stalled at 8,000 monthly sessions, with fewer than 150 organic leads per month. Rising CPCs on Google Ads were making paid acquisition unsustainable, and leadership needed an organic growth engine to reduce reliance on paid channels.',
  solution:
    'We rebuilt their technical SEO foundation with server-side rendering for critical pages, resolved crawl budget waste from dynamic application URLs, and deployed structured data for financial product schema. Our content strategy centered on bilingual optimization: we created 35 English and 25 Mandarin content assets targeting high-intent financial keywords, launched comparison pages for local banking alternatives, and built a resource hub covering personal finance topics relevant to Singaporean consumers. We also executed a strategic link building campaign targeting Singapore business directories, FinTech publications, and government-affiliated digital economy portals.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+410%', timeframe: '12 months' },
    { metric: 'Keywords in Top 10', improvement: '180+', timeframe: 'From 28 to 208' },
    { metric: 'Organic Leads', improvement: '+290%', timeframe: 'Monthly qualified leads' },
    { metric: 'Customer Acquisition Cost', improvement: '-55%', timeframe: 'Organic vs. paid' },
  ],
}

const districts = [
  { name: 'CBD', area: 'Central Business District', focus: 'Financial Services', businesses: '25K+' },
  { name: 'Marina Bay', area: 'Downtown Core', focus: 'MNCs & Startups', businesses: '10K+' },
  { name: 'Orchard', area: 'Orchard Road', focus: 'Retail & Lifestyle', businesses: '8K+' },
  { name: 'Jurong East', area: 'Jurong Gateway', focus: 'Industrial & Tech', businesses: '6K+' },
  { name: 'Tampines', area: 'Tampines Regional Centre', focus: 'Retail & Services', businesses: '5K+' },
  { name: 'Changi', area: 'Changi Business Park', focus: 'Logistics & Aviation', businesses: '4K+' },
  { name: 'Woodlands', area: 'North Region', focus: 'Cross-Border Trade', businesses: '3K+' },
  { name: 'Buona Vista', area: 'One-North', focus: 'Tech & Biomedical', businesses: '3K+' },
]

const faqItems = [
  {
    question: 'How long does it take to see SEO results in Singapore?',
    answer:
      'Most Singapore businesses begin seeing measurable improvements in organic traffic within 3-4 months, with significant gains in leads and revenue by month 6-8. Singapore is a competitive but focused market, which means well-targeted strategies can gain traction faster than in larger markets. We focus on quick wins early, such as optimizing existing high-potential pages for Google.com.sg, while building toward long-term organic dominance.',
  },
  {
    question: 'Do you optimize for Google.com.sg specifically?',
    answer:
      'Yes. Google.com.sg has distinct ranking signals compared to Google.com, including local domain authority, Singapore-specific backlinks, and geo-targeted content relevance. We optimize specifically for the Singapore search ecosystem, ensuring your business ranks where local customers are searching. This includes .sg domain strategies, Singapore-based citation building, and locally relevant content creation.',
  },
  {
    question: 'Can you handle multilingual SEO for Singapore?',
    answer:
      'Absolutely. Singapore has four official languages: English, Mandarin, Malay, and Tamil. We create multilingual SEO strategies that capture search traffic across all relevant languages. This includes proper hreflang implementation, culturally relevant keyword research in each language, and content that resonates with each demographic. We also account for Singlish and colloquial search terms that are unique to Singapore.',
  },
  {
    question: 'Is your SEO service eligible for PSG grants?',
    answer:
      'Our digital marketing services are structured to align with Singapore government support programs including the Productivity Solutions Grant (PSG) and the SME Go Digital programme. We can provide the documentation and deliverables required for grant applications. Eligible SMEs can receive up to 50% support for qualifying digital marketing solutions. Contact us for details on how to leverage government grants for your SEO investment.',
  },
  {
    question: 'How do you approach ASEAN expansion from Singapore?',
    answer:
      'We use Singapore as the strategic hub for ASEAN SEO expansion. This involves conducting market-specific keyword research for target countries such as Malaysia, Indonesia, Thailand, and the Philippines, building regional content strategies that account for language and cultural differences, and developing country-specific backlink profiles. Our approach leverages Singapore&apos;s strong digital infrastructure and business credibility as a launchpad for regional organic growth.',
  },
  {
    question: 'What industries do you specialize in for Singapore SEO?',
    answer:
      'We work with businesses across Singapore&apos;s key industries including financial services and FinTech, technology and SaaS, e-commerce and retail, healthcare, education, professional services, and real estate. Our strategies are customized to each industry&apos;s competitive landscape, regulatory requirements, and target audience within the Singapore market. We also have deep experience with B2B companies headquartered in Singapore that serve the wider APAC region.',
  },
]

const relatedLocations = [
  { name: 'USA', href: '/locations/usa' },
  { name: 'Philippines', href: '/locations/philippines' },
  { name: 'Hong Kong', href: '/locations/hongkong' },
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
            Singapore SEO Services
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Dominate search in{' '}
            <em className="text-accent italic">Singapore&apos;s digital market</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Strategic SEO solutions for businesses in Singapore. From multilingual optimization to ASEAN market expansion, we help you dominate search in the Lion City and beyond.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Singapore Market Analysis</Button>
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
    { value: '5.9M', label: 'Population' },
    { value: '$400B', label: 'GDP' },
    { value: '96%', label: 'Internet penetration' },
    { value: '4 langs', label: 'Official languages' },
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
          <Subheading>Why Choose Singapore-Focused SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Strategic advantage in Asia&apos;s digital hub.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <item.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {item.title}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-4">{item.description}</p>

              <ul className="space-y-2">
                {item.details.map((detail, detailIndex) => (
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
          <Subheading>SEO Services for Singapore Businesses</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for the Singapore market.
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
            How we drive SEO results in Singapore.
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
          <Subheading dark>Singapore Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a Singapore FinTech platform achieve breakthrough organic growth.
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
/*  Section 7: Cities / Districts                                              */
/* -------------------------------------------------------------------------- */

function CitiesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Singapore Business Districts We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            Local SEO expertise across Singapore.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {districts.map((district, index) => (
            <div
              key={index}
              className="rounded-none border border-border-strong p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">{district.name}</h3>
              <p className="text-slate text-sm mb-4">{district.area}</p>
              <div className="space-y-2">
                <div className="text-sm text-stone">
                  Focus: <span className="font-medium text-ink">{district.focus}</span>
                </div>
                <div className="text-sm text-stone">
                  Businesses: <span className="font-medium text-ink">{district.businesses}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate mb-6 text-sm">
            We provide SEO services to businesses across all districts in Singapore, from the CBD to heartland commercial centres.
          </p>
          <Button href="/contact" variant="outline">
            Find Your Singapore SEO Expert
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
            &ldquo;TheProjectSEO understood the nuances of Singapore&apos;s multilingual market from
            day one. Within six months, our organic traffic from Google.com.sg tripled, and we started
            ranking for Mandarin keywords we had never targeted before. Their ASEAN expansion strategy
            also opened up entirely new revenue streams for us in Malaysia and Indonesia.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">David Lim</p>
            <p className="text-sm text-slate mt-1">Head of Digital, Pinnacle Commerce Singapore</p>
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

export default function SingaporeSEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Singapore SEO Services',
          description:
            'Strategic SEO services for businesses in Singapore. Multilingual expertise, ASEAN market expansion, and data-driven strategies for Google.com.sg and regional search rankings.',
          url: 'https://theprojectseo.com/locations/singapore',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Singapore',
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
        heading="How we drive SEO results in Singapore"
        steps={processSteps}
        visual={<LocationProcessVisual type="singapore" />}
        visualBg="accent"
      />
      <CaseStudySection />
      <CitiesSection />
      <TestimonialSection />
      <FAQDarkSection
        title="Singapore SEO frequently asked questions"
        items={faqItems}
      />
      <RelatedLocationsSection />
      <TestimonialQuoteSection
        quote="There&apos;s not enough room here for me to write about all the amazing things Aditya did for our Workhap website & Marketing team! He&apos;s an expert when it comes to everything SEO-related and went above & beyond our initial scope of work. He is someone you can absolutely trust and know has your best interest in mind. 10/10 highly recommend Aditya for all your SEO and marketing needs."
        author="Sho Dewan"
        role="CEO"
        company="Workhap"
      />
      <CTAFormSection
        subheading="Ready to Dominate Singapore Search Results?"
        heading="Let's build your Singapore SEO growth engine."
        lead="Partner with SEO experts who understand Singapore's multilingual, mobile-first market. We'll help you turn organic search into your most efficient acquisition channel across the Lion City and ASEAN."
        submitText="Get Singapore Market Analysis"
      />
      <Footer />
    </main>
  )
}
