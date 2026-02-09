import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQAccordion } from '@/components/faq-accordion'
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
  title: 'Germany SEO Services | Search Engine Optimization Deutschland | TheProjectSEO',
  description:
    'Strategic SEO services for businesses in Germany. German language expertise, google.de optimization, DACH region expansion, and GDPR-compliant strategies for German search rankings.',
  alternates: { canonical: '/locations/germany' },
}

const advantages = [
  {
    title: 'Largest EU Economy',
    description:
      'Tap into Europe\'s biggest market with SEO strategies built for Germany\'s competitive digital landscape.',
    icon: ChartBarIcon,
    details: [
      'google.de search dominance strategies',
      'German market competitive analysis',
      'Industry-specific ranking approaches',
      'High-intent keyword targeting for German buyers',
    ],
  },
  {
    title: 'German Language Expertise',
    description:
      'Native-level optimization for German search queries, including umlauts, compound words, and formal registers.',
    icon: LanguageIcon,
    details: [
      'Umlaut and special character optimization',
      'Compound word (Komposita) keyword strategy',
      'Formal vs. informal register targeting',
      'Regional dialect and terminology coverage',
    ],
  },
  {
    title: 'DACH Region Expansion',
    description:
      'Extend your reach across Germany, Austria, and Switzerland with unified DACH SEO strategies.',
    icon: MapPinIcon,
    details: [
      'Multi-country German-language SEO',
      'Austria and Switzerland market localization',
      'Cross-border e-commerce optimization',
      'Regional content adaptation for DACH markets',
    ],
  },
  {
    title: 'GDPR & Privacy-First Approach',
    description:
      'Fully compliant SEO strategies built around German data privacy standards and regulations.',
    icon: ClockIcon,
    details: [
      'GDPR-compliant analytics and tracking',
      'Privacy-first technical implementation',
      'Cookie consent optimization for rankings',
      'Trust signal and certification integration',
    ],
  },
]

const services = [
  {
    name: 'German Language SEO',
    description:
      'Optimize for google.de with native German keyword research and content strategies.',
    features: [
      'German keyword research and mapping',
      'Umlaut and compound word optimization',
      'German-language content creation',
      'SERP feature targeting on google.de',
    ],
  },
  {
    name: 'DACH Region Expansion',
    description:
      'Scale your visibility across Germany, Austria, and Switzerland simultaneously.',
    features: [
      'Multi-market keyword strategy',
      'Hreflang and geo-targeting setup',
      'Localized content for AT and CH markets',
      'Cross-border link building campaigns',
    ],
  },
  {
    name: 'Technical & Industrial SEO',
    description:
      'Specialized SEO for German engineering, automotive, and Mittelstand companies.',
    features: [
      'B2B and industrial keyword targeting',
      'Technical product page optimization',
      'Engineering content marketing',
      'Mittelstand digital visibility strategies',
    ],
  },
  {
    name: 'Local SEO Germany',
    description:
      'Dominate local search results across major German cities and regions.',
    features: [
      'Google Business Profile optimization (DE)',
      'German business directory listings',
      'Local citation building in German portals',
      'Review management on German platforms',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'German Market Audit',
    description:
      'We conduct a thorough audit of your current google.de visibility, analyzing your German-language keyword rankings, technical SEO health, backlink profile from .de domains, and competitive positioning in the DACH region. This includes evaluating GDPR compliance, hreflang implementation, and content localization quality.',
  },
  {
    number: '02',
    title: 'DACH Strategy Development',
    description:
      'Based on audit findings, we build a tailored SEO strategy for the German market. This includes a prioritized German keyword roadmap, content calendar with native-language topics, technical optimization plan for google.de, and a link building strategy targeting authoritative .de and DACH-region domains.',
  },
  {
    number: '03',
    title: 'Content & Optimization',
    description:
      'We execute the strategy with native German content creation, on-page optimization for compound keywords and umlauts, and technical improvements for google.de crawling. Every piece of content is crafted for German search intent, balancing formal registers with industry-specific terminology.',
  },
  {
    number: '04',
    title: 'Scale & Iterate',
    description:
      'Using data-driven insights from German search analytics, we continuously refine the strategy. We scale successful content clusters, expand into Austrian and Swiss markets, and adapt to google.de algorithm changes. Monthly reporting tracks organic visibility, qualified traffic, and lead generation across the DACH region.',
  },
]

const caseStudy = {
  client: 'B2B Industrial Manufacturer',
  industry: 'Industrial Equipment & Engineering',
  challenge:
    'A mid-sized German Mittelstand company manufacturing precision engineering components was invisible on google.de for their core product categories. Their website was entirely in English despite serving primarily German-speaking buyers. Organic traffic from the DACH region was under 3,000 monthly sessions, and they were losing market share to competitors who had invested in German-language SEO. Their technical documentation ranked well internationally but failed to capture high-intent German purchase queries.',
  solution:
    'We implemented a comprehensive German-language SEO transformation. This included full localization of 120+ product pages with native German content optimized for compound keywords and industry-specific Fachbegriffe (technical terminology). We deployed proper hreflang tags for DE, AT, and CH markets, rebuilt their internal linking architecture around German search intent clusters, and launched a targeted link building campaign focusing on German industry publications, trade associations, and engineering directories. We also optimized their Google Business Profiles for three manufacturing locations across Germany.',
  results: [
    { metric: 'German Organic Traffic', improvement: '+520%', timeframe: '14 months' },
    { metric: 'google.de Top 10 Rankings', improvement: '180+', timeframe: 'From 22 to 202' },
    { metric: 'DACH Lead Generation', improvement: '+340%', timeframe: 'Qualified inquiries' },
    { metric: 'Cost Per Lead (Organic)', improvement: '-58%', timeframe: 'vs. Google Ads DE' },
  ],
}

const cities = [
  { name: 'Berlin', state: 'Berlin', population: '3.7M', businesses: '180K+' },
  { name: 'Munich', state: 'Bavaria', population: '1.5M', businesses: '120K+' },
  { name: 'Hamburg', state: 'Hamburg', population: '1.9M', businesses: '110K+' },
  { name: 'Frankfurt', state: 'Hesse', population: '760K', businesses: '95K+' },
  { name: 'Cologne', state: 'North Rhine-Westphalia', population: '1.1M', businesses: '85K+' },
  { name: 'Stuttgart', state: 'Baden-Wurttemberg', population: '635K', businesses: '80K+' },
  { name: 'Dusseldorf', state: 'North Rhine-Westphalia', population: '620K', businesses: '75K+' },
  { name: 'Leipzig', state: 'Saxony', population: '600K', businesses: '50K+' },
]

const faqItems = [
  {
    question: 'How does SEO for Germany differ from English-language SEO?',
    answer:
      'German SEO requires specialized expertise in several areas. German compound words (Komposita) create unique keyword targeting challenges, as a single concept might be expressed as one long compound word rather than multiple separate terms. Umlauts and special characters must be handled correctly in URLs, meta tags, and content. German search intent patterns also differ from English, with German users often preferring more formal, detailed content. Additionally, GDPR compliance is strictly enforced and affects analytics, tracking, and cookie implementations.',
  },
  {
    question: 'Do you optimize for google.de specifically?',
    answer:
      'Yes. While Google uses the same core algorithm globally, google.de has distinct ranking behaviors influenced by German-language signals, local backlink profiles, and user behavior patterns specific to the DACH region. We optimize specifically for google.de ranking factors, including German-language content quality signals, .de domain authority, and local relevance indicators. We also target German SERP features like featured snippets and People Also Ask boxes in German.',
  },
  {
    question: 'Can you help us expand from Germany into Austria and Switzerland?',
    answer:
      'Absolutely. DACH region expansion is one of our core specialties. While Germany, Austria, and Switzerland all speak German, there are important linguistic and cultural differences that affect search behavior. We implement proper hreflang configurations for de-DE, de-AT, and de-CH, create localized content that respects regional terminology differences, and build market-specific link profiles. This ensures you rank well across all three markets without keyword cannibalization.',
  },
  {
    question: 'How do you handle GDPR compliance in your SEO strategies?',
    answer:
      'GDPR compliance is built into every aspect of our German SEO approach. We implement privacy-first analytics setups using cookieless tracking where possible, ensure consent management platforms are properly configured to avoid impacting page speed or Core Web Vitals, and structure data collection to meet DSGVO (the German implementation of GDPR) requirements. Our technical SEO audits include a compliance review to ensure your site meets German data protection standards.',
  },
  {
    question: 'What industries do you specialize in for the German market?',
    answer:
      'We have deep experience with key German industries including automotive and manufacturing (a cornerstone of the German economy), engineering and technical B2B companies, Mittelstand businesses looking to digitize their marketing, financial services and fintech companies in the Frankfurt hub, e-commerce brands targeting German consumers, and SaaS companies expanding into the DACH market. Our industry knowledge ensures we use the correct Fachbegriffe (technical terminology) in every content piece.',
  },
  {
    question: 'How long does it take to see SEO results in the German market?',
    answer:
      'The German market is competitive, but well-executed SEO typically shows measurable improvements within 3-5 months. Initial gains often come from technical fixes, proper hreflang implementation, and quick-win keyword targeting. Significant traffic growth and lead generation improvements generally materialize between months 6-10 as content authority builds and backlink profiles strengthen. For businesses entering the German market for the first time, we recommend a 12-month commitment to establish meaningful organic visibility on google.de.',
  },
]

const relatedLocations = [
  { name: 'USA', href: '/locations/usa' },
  { name: 'Philippines', href: '/locations/philippines' },
  { name: 'Hong Kong', href: '/locations/hongkong' },
  { name: 'Singapore', href: '/locations/singapore' },
  { name: 'Australia', href: '/locations/australia' },
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
            Germany SEO Services
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink max-w-3xl">
            SEO strategies built for the{' '}
            <em className="text-accent italic">German market</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-[1.65] text-slate">
            Dominate google.de with native German language expertise, DACH region expansion, and GDPR-compliant strategies that drive qualified traffic and measurable growth.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get German Market Analysis</Button>
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
    { value: '84M', label: 'Population' },
    { value: '#1', label: 'Europe\u2019s largest economy' },
    { value: '93%', label: 'Internet penetration' },
    { value: '67M', label: 'Active Google users' },
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
/*  Section 3: Advantages                                                      */
/* -------------------------------------------------------------------------- */

function AdvantagesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Why Choose Germany-Focused SEO</Subheading>
          <Heading as="h2" className="mt-2">
            German market expertise for measurable results.
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
          <Subheading>SEO Services for German Businesses</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for the German market.
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
            How we drive German SEO results.
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
          <Subheading dark>Germany Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a German Mittelstand company achieve breakthrough organic growth.
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
          <Subheading>Major German Cities We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            Local SEO expertise across Germany.
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
                  Population: <span className="font-medium text-ink">{city.population}</span>
                </div>
                <div className="text-sm text-stone">
                  Businesses: <span className="font-medium text-ink">{city.businesses}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate text-sm mb-6">
            We provide SEO services to businesses across all 16 German states and major metropolitan regions.
          </p>
          <Button href="/contact">Find Your German SEO Expert</Button>
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
            &ldquo;TheProjectSEO understood the nuances of the German market from day one. They
            handled our compound keyword strategy, GDPR-compliant tracking setup, and DACH
            expansion flawlessly. Within 10 months, our google.de visibility increased by over
            400%, and organic leads from the German market now outperform our paid channels by
            a significant margin.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Markus Weber</p>
            <p className="text-sm text-slate mt-1">Head of Digital Marketing, Precision Systems GmbH</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: FAQ                                                             */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="Germany SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
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

function CTASection() {
  return (
    <div className="bg-paper py-16 border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <Subheading>Ready to Dominate German Search Results?</Subheading>
            <Heading as="h2" className="mt-2">
              Let&apos;s build your Germany SEO growth engine.
            </Heading>
            <Lead className="mt-6">
              Partner with SEO experts who understand the German market, DACH region dynamics,
              and google.de ranking factors. We&apos;ll help you turn organic search into your
              most efficient acquisition channel in Germany.
            </Lead>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Button href="/contact">Get German Market Analysis</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
        <p className="mt-6 text-xs text-ash text-center lg:text-left">
          Free analysis includes German competitor research, DACH market opportunity assessment, and google.de visibility audit.
        </p>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function GermanySEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Germany SEO Services',
          description:
            'Strategic SEO services for businesses in Germany. German language expertise, google.de optimization, DACH region expansion, and GDPR-compliant strategies for German search rankings.',
          url: 'https://theprojectseo.com/locations/germany',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Germany',
          },
          serviceType: 'Search Engine Optimization',
        }}
      />
      <Header />
      <StatsBar />
      <AdvantagesSection />
      <ServicesSection />
      <ProcessSection />
      <CaseStudySection />
      <CitiesSection />
      <TestimonialSection />
      <FAQSection />
      <RelatedLocationsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
