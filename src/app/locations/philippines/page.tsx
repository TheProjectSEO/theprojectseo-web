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
  BuildingOfficeIcon,
  LanguageIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Philippines SEO Services | Search Engine Optimization Philippines | TheProjectSEO',
  description:
    'Professional SEO services for businesses in the Philippines. Local market expertise, Filipino search behavior, and proven strategies for Philippine search rankings.',
  alternates: { canonical: '/locations/philippines' },
}

const advantages = [
  {
    title: 'BPO Industry Strength',
    description:
      'The Philippines is the world\'s second-largest BPO destination, creating enormous demand for digital services. We help BPO companies and their clients capture high-intent search traffic across outsourcing, customer service, and technology verticals.',
    icon: BuildingOfficeIcon,
    details: [
      'SEO for BPO lead generation and client acquisition',
      'Outsourcing industry keyword domination',
      'International client targeting from Philippine operations',
      'B2B service page optimization for global buyers',
    ],
  },
  {
    title: 'English Proficiency Advantage',
    description:
      'With the third-largest English-speaking population globally, the Philippines offers a unique advantage for content-driven SEO. We leverage bilingual search behavior across English and Filipino to maximize organic reach.',
    icon: LanguageIcon,
    details: [
      'English and Taglish keyword strategy',
      'Bilingual content creation and optimization',
      'Cross-language search intent mapping',
      'International English content that ranks globally',
    ],
  },
  {
    title: 'Cost-Effective Market Entry',
    description:
      'Philippine SEO delivers exceptional ROI due to lower competition on local keywords and cost-efficient content production. Businesses achieve top rankings faster and at a fraction of the cost compared to saturated Western markets.',
    icon: CurrencyDollarIcon,
    details: [
      'Lower keyword difficulty vs. Western markets',
      'Cost-efficient content production at scale',
      'High ROI from local Philippine search campaigns',
      'Faster time-to-rank for emerging market terms',
    ],
  },
  {
    title: 'Growing Digital Economy',
    description:
      'The Philippine digital economy is projected to reach $35 billion by 2025, with e-commerce, fintech, and digital services driving rapid adoption. Early SEO investment positions your business to capture this explosive growth.',
    icon: ChartBarIcon,
    details: [
      'E-commerce SEO for Lazada, Shopee, and local platforms',
      'Fintech and digital payment keyword strategies',
      'Mobile-first optimization for 95% mobile penetration',
      'Social commerce and search integration',
    ],
  },
]

const services = [
  {
    name: 'Local Philippine SEO',
    description:
      'Optimize for local search across major Philippine cities and regions. We build local authority through Google Business Profile optimization, Philippine directory listings, and region-specific keyword targeting.',
    features: [
      'Google Business Profile optimization for PH',
      'Local citation and Philippine directory listings',
      'Regional keyword targeting across Luzon, Visayas, and Mindanao',
      'Google Maps and location-based search optimization',
    ],
  },
  {
    name: 'E-commerce SEO Philippines',
    description:
      'Drive online sales for Philippine retailers and marketplace sellers. We optimize product pages, category structures, and marketplace listings for maximum visibility across Lazada, Shopee, and Google Shopping.',
    features: [
      'Product page and category optimization',
      'Lazada and Shopee marketplace SEO',
      'Mobile commerce and local payment keyword targeting',
      'Structured data for Philippine e-commerce stores',
    ],
  },
  {
    name: 'Enterprise SEO',
    description:
      'Large-scale SEO solutions for Philippine enterprises, BPO companies, and multinational corporations operating in the Philippines. Technical excellence at scale with advanced analytics and reporting.',
    features: [
      'Multi-location optimization across Philippine offices',
      'Technical SEO at enterprise scale',
      'Advanced analytics and revenue attribution',
      'Competitive intelligence and market share analysis',
    ],
  },
  {
    name: 'Content Marketing',
    description:
      'Culturally relevant content that resonates with Filipino audiences and ranks on Google. We create Taglish content strategies, leverage local trends, and produce content aligned with Philippine consumer behavior.',
    features: [
      'Taglish and English content optimization',
      'Cultural trend and local event integration',
      'Filipino consumer insight-driven content strategy',
      'Thought leadership and industry authority building',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Philippine Market Audit',
    description:
      'We conduct a comprehensive audit of your current search presence in the Philippines, analyzing local keyword rankings, competitor positions, technical health, and content gaps. This includes a deep-dive into Filipino search behavior, mobile usability, and local citation accuracy to identify quick wins and long-term growth opportunities.',
  },
  {
    number: '02',
    title: 'Localized Strategy Development',
    description:
      'Based on audit findings, we build a tailored Philippine SEO strategy aligned with your business goals. This includes a prioritized keyword roadmap covering English and Taglish terms, a content calendar mapped to Filipino consumer trends and local holidays, a technical optimization plan, and a link building strategy targeting Philippine domains and regional publications.',
  },
  {
    number: '03',
    title: 'Content Creation & Optimization',
    description:
      'We execute the strategy with culturally relevant content creation, on-page optimization, and technical improvements. Every piece of content is crafted for Filipino audiences while maintaining global SEO best practices, from local landing pages targeting Philippine cities to industry-specific guides for the BPO and e-commerce sectors.',
  },
  {
    number: '04',
    title: 'Scale & Expand',
    description:
      'Using data-driven insights, we continuously refine and scale the strategy across new Philippine regions and verticals. We expand what works, adapt to local algorithm changes and competitive shifts, and build authority across the Philippine digital ecosystem. Monthly reporting tracks organic traffic, lead generation, and revenue attribution from Philippine search.',
  },
]

const caseStudy = {
  client: 'Philippine E-commerce Platform',
  industry: 'Online Retail & Marketplace',
  challenge:
    'A fast-growing Philippine e-commerce platform was struggling to compete organically against established marketplaces like Lazada and Shopee. Their product pages had poor indexation, their category structure was not optimized for local search terms, and they were invisible for high-intent Filipino shopping queries. Organic traffic accounted for less than 8% of total visits, with the business heavily reliant on expensive paid advertising to drive sales. The cost per acquisition from paid channels had increased 40% year-over-year, and leadership needed a sustainable organic growth channel to reduce dependence on ad spend.',
  solution:
    'We rebuilt their technical SEO foundation by implementing proper product schema markup, fixing crawl issues across 50,000+ product pages, and restructuring their category hierarchy around Filipino search patterns. Our content strategy focused on creating locally optimized category landing pages, Filipino buying guides, and Taglish product comparison content targeting high-intent commercial queries. We also launched a strategic link building campaign targeting Philippine media outlets, local business directories, and industry publications to build domain authority in the Philippine market.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+520%', timeframe: '12 months' },
    { metric: 'Keywords in Top 10', improvement: '340+', timeframe: 'From 45 to 385' },
    { metric: 'Organic Revenue', improvement: '+380%', timeframe: 'Monthly GMV from search' },
    { metric: 'Customer Acquisition Cost', improvement: '-58%', timeframe: 'Organic vs. paid' },
  ],
}

const cities = [
  { name: 'Manila', region: 'NCR', focus: 'Finance & Government' },
  { name: 'Cebu', region: 'Central Visayas', focus: 'IT & Tourism' },
  { name: 'Davao', region: 'Davao Region', focus: 'Agriculture & Mining' },
  { name: 'Quezon City', region: 'NCR', focus: 'Media & Entertainment' },
  { name: 'Makati', region: 'NCR', focus: 'Business & Finance' },
  { name: 'Taguig', region: 'NCR', focus: 'BGC & Technology' },
  { name: 'Pasig', region: 'NCR', focus: 'IT & BPO Hub' },
  { name: 'Caloocan', region: 'NCR', focus: 'Manufacturing & Trade' },
]

const faqItems = [
  {
    question: 'How long does it take to see SEO results in the Philippines?',
    answer:
      'Most Philippine businesses start seeing measurable improvements in organic traffic within 3-4 months, with significant gains in leads and revenue by month 6-8. The Philippine market often offers faster results than saturated Western markets due to lower keyword competition for local terms. We focus on quick wins early, such as optimizing existing high-potential pages and fixing technical issues, while building toward long-term organic dominance.',
  },
  {
    question: 'Do you optimize for both English and Filipino search terms?',
    answer:
      'Yes. We develop bilingual keyword strategies that cover English, Filipino, and Taglish search queries. Filipino consumers frequently switch between languages when searching online, and our strategies capture traffic across all language variations. We conduct separate keyword research for each language and create content that naturally incorporates both English and Filipino terms to maximize organic reach.',
  },
  {
    question: 'How is SEO in the Philippines different from other markets?',
    answer:
      'Philippine SEO requires understanding the unique digital behavior of Filipino consumers: 95% mobile internet usage, strong social media influence on search behavior, bilingual search patterns, and a price-sensitive market. Local search also involves optimizing for Philippine-specific platforms and directories alongside Google. Our strategies are built around these local nuances rather than applying generic Western SEO approaches.',
  },
  {
    question: 'Can you help BPO companies attract international clients through SEO?',
    answer:
      'Absolutely. We have deep experience helping Philippine BPO companies rank for international outsourcing queries. This involves targeting high-intent B2B keywords in the US, UK, and Australian markets, creating trust-building content that addresses common concerns about offshore outsourcing, and building authority through industry publications and partnerships. Our BPO clients consistently generate qualified international leads through organic search.',
  },
  {
    question: 'What types of Philippine businesses do you work with?',
    answer:
      'We work with businesses across all sectors of the Philippine economy, from BPO companies and e-commerce platforms to real estate developers, fintech startups, and traditional enterprises going digital. Our strategies adapt to your industry, business model, and target audience, whether you are serving Filipino consumers locally or targeting international clients from the Philippines.',
  },
  {
    question: 'How do you measure SEO success for Philippine businesses?',
    answer:
      'We track metrics that directly impact your business: organic traffic from Philippine and international searches, keyword rankings for target terms, lead generation and conversion rates, and revenue attribution from organic channels. You receive monthly reports with clear data on how your SEO investment is performing, including competitor tracking and market share analysis within the Philippine digital landscape.',
  },
]

const relatedLocations = [
  { name: 'USA', href: '/locations/usa' },
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
            Philippines SEO Services
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Dominate search in the{' '}
            <em className="text-accent italic">Philippine market</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Drive organic growth for your Philippine business with local market expertise, bilingual content strategies, and culturally relevant SEO that connects with Filipino audiences.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Philippine Market Analysis</Button>
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
    { value: '114M', label: 'Total population' },
    { value: '76M+', label: 'Internet users' },
    { value: '95%', label: 'Mobile internet access' },
    { value: '$12B+', label: 'E-commerce market size' },
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
          <Subheading>Why Choose Philippines-Focused SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Strategic advantages of the Philippine market.
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

              <ul className="space-y-3">
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
          <Subheading>SEO Services for Philippine Businesses</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for the Filipino market.
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
            How we drive Philippine SEO results.
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
          <Subheading dark>Philippine Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a Philippine e-commerce platform achieve breakthrough organic growth.
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
          <Subheading>Major Philippine Cities We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            Local SEO expertise across the Philippines.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-paper p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">{city.name}</h3>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-3">
                {city.region}
              </p>
              <p className="text-sm text-stone">{city.focus}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate mb-6">
            We provide SEO services to businesses across Luzon, Visayas, and Mindanao.
          </p>
          <Button variant="outline" href="/contact">
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
            &ldquo;TheProjectSEO transformed our digital presence in the Philippine market. Within
            six months, our organic traffic from Filipino consumers tripled, and we&apos;re now
            ranking on the first page for our most competitive local keywords. Their understanding
            of bilingual search behavior and Filipino consumer culture made all the difference.
            They didn&apos;t just improve our rankings; they helped us connect with our audience
            in a way that drives real business results.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Miguel Reyes</p>
            <p className="text-sm text-slate mt-1">Head of Digital, ManilaCommerce Inc.</p>
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

export default function PhilippinesSEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Philippines SEO Services',
          description:
            'Professional SEO services for businesses in the Philippines. Local market expertise, Filipino search behavior, and proven strategies for Philippine search rankings.',
          url: 'https://theprojectseo.com/locations/philippines',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Philippines',
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
        heading="How we drive Philippine SEO results"
        steps={processSteps}
        visual={<LocationProcessVisual type="philippines" />}
        visualBg="accent"
      />
      <CaseStudySection />
      <CitiesSection />
      <TestimonialSection />
      <FAQDarkSection
        title="Philippines SEO frequently asked questions"
        items={faqItems}
      />
      <RelatedLocationsSection />
      <TestimonialQuoteSection
        quote="He helped us with market research, define the right topics along with the content brief and SEO framework. He did an extensive site audit and helped us weed out the loopholes. This helped us scale our traffic and also improved our Google ranking. Aditya was always ready to help and introduced me to a lot of concepts in SEO."
        author="Shubhangi"
        role="Content"
        company="Adapt.io"
      />
      <CTAFormSection
        subheading="Ready to Dominate Philippine Search Results?"
        heading="Start your Philippine SEO strategy today."
        lead="Partner with SEO experts who understand the Philippine market, culture, and digital landscape. We'll create a winning strategy that drives qualified Filipino traffic to your business."
        submitText="Get Free Philippine Market Analysis"
      />
      <Footer />
    </main>
  )
}
