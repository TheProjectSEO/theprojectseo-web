import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { CTAFormSection } from '@/components/service-page-sections'
import {
  MapPinIcon,
  HomeModernIcon,
  MegaphoneIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Real Estate SEO Services | Realtor & Broker SEO | TheProjectSEO',
  description:
    'Specialized SEO services for real estate agents, brokers, and property companies. Dominate local search, attract qualified buyers and sellers, and grow your pipeline.',
  keywords: 'real estate SEO, realtor SEO, broker SEO, property listing optimization, local real estate marketing, real estate digital marketing',
  alternates: { canonical: '/industries/realestate' },
  openGraph: {
    title: 'Real Estate SEO Services | Realtor & Broker SEO',
    description:
      'Specialized SEO services for real estate agents, brokers, and property companies. Dominate local search, attract qualified buyers and sellers, and grow your pipeline.',
    url: '/industries/realestate',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Real Estate SEO Services | Realtor & Broker SEO',
    description:
      'Specialized SEO services for real estate agents, brokers, and property companies. Dominate local search, attract qualified buyers and sellers, and grow your pipeline.',
  },
}

const challenges = [
  {
    challenge: 'Hyper-Local Competition',
    description: 'Real estate is one of the most competitive local search markets. Every agent and brokerage in your area is fighting for the same neighborhood keywords and map pack placements.',
    solution: 'We build hyper-local content strategies targeting specific neighborhoods, zip codes, and micro-markets that your competitors overlook, giving you dominant visibility where it matters most.',
    icon: MapPinIcon
  },
  {
    challenge: 'Seasonal Market Fluctuations',
    description: 'Real estate search volume swings dramatically with seasons, interest rates, and market conditions, making it hard to maintain consistent lead flow year-round.',
    solution: 'Our seasonal content calendars and evergreen asset strategies ensure your pipeline stays full regardless of market cycles, capturing demand before peak seasons hit.',
    icon: MegaphoneIcon
  },
  {
    challenge: 'Property Listing SEO',
    description: 'Individual property listings compete with Zillow, Realtor.com, and Redfin for visibility. Most agent websites get buried beneath major portal results.',
    solution: 'We optimize your listing pages with structured data, unique neighborhood content, and long-tail keyword strategies that help your listings outrank portal pages for specific properties.',
    icon: HomeModernIcon
  },
  {
    challenge: 'Trust & Reputation',
    description: 'Home buyers and sellers need to trust their agent before making contact. Without strong online credibility signals, prospects choose competitors with better digital presence.',
    solution: 'We develop review acquisition strategies, thought leadership content, and E-E-A-T optimization that positions you as the trusted local real estate authority.',
    icon: UserGroupIcon
  }
]

const services = [
  {
    name: 'Local Real Estate SEO',
    description: 'Dominate local search results in your target neighborhoods and markets with hyper-local optimization strategies.',
    icon: MapPinIcon,
    features: [
      'Google Business Profile optimization for agents',
      'Neighborhood and zip code landing pages',
      'Local citation building (real estate directories)',
      'Map pack ranking strategies'
    ]
  },
  {
    name: 'Property Listing Optimization',
    description: 'Maximize visibility for your property listings and drive more qualified buyer traffic to your website.',
    icon: HomeModernIcon,
    features: [
      'Listing page schema markup (RealEstateListing)',
      'MLS-integrated SEO content strategy',
      'Virtual tour and media optimization',
      'Expired and sold listing redirect strategy'
    ]
  },
  {
    name: 'Real Estate Content Marketing',
    description: 'Build authority and attract organic traffic with high-value content tailored to buyers, sellers, and investors.',
    icon: MegaphoneIcon,
    features: [
      'Market report and neighborhood guide creation',
      'Buyer and seller resource hub development',
      'Blog content strategy for search intent',
      'Video SEO for property walkthroughs'
    ]
  },
  {
    name: 'Agent & Broker SEO',
    description: 'Build your personal brand online and establish yourself as the go-to real estate professional in your market.',
    icon: UserGroupIcon,
    features: [
      'Agent bio and profile page optimization',
      'Review generation and reputation management',
      'Social proof and testimonial integration',
      'Multi-agent team SEO strategies'
    ]
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Market & Competitor Audit',
    description: 'We analyze your local market, identify your top-ranking competitors, audit your current SEO performance, and map the keyword landscape for your target neighborhoods and property types.'
  },
  {
    number: '02',
    title: 'Local SEO Strategy',
    description: 'Based on audit findings, we build a hyper-local SEO roadmap prioritizing the neighborhoods, property types, and search intents that will drive the most qualified leads to your business.'
  },
  {
    number: '03',
    title: 'Implementation & Optimization',
    description: 'Our team executes on-page optimization, creates neighborhood content, builds local citations, implements listing schema, and optimizes your Google Business Profile for maximum visibility.'
  },
  {
    number: '04',
    title: 'Track, Report & Scale',
    description: 'We continuously monitor rankings, lead flow, and conversion rates across all target markets, making data-driven adjustments and expanding into new neighborhoods as you grow.'
  }
]

const caseStudy = {
  client: 'Regional Real Estate Brokerage',
  industry: 'Residential Real Estate',
  narrative: 'A mid-size real estate brokerage with 45 agents was struggling to compete against national portals and established local competitors in organic search. Their website generated fewer than 30 organic leads per month despite covering a metro area with over 2 million residents. We implemented a comprehensive local SEO strategy that included hyper-local neighborhood pages for 60+ communities, agent-specific landing pages optimized for personal branding keywords, a market report content hub updated monthly with local statistics, and structured data markup across all active and sold listings. Within 12 months, the brokerage&apos;s organic lead volume increased by over 420%, with the majority of new leads coming from neighborhood-specific and "homes for sale" queries. Their agents now rank individually for personal name searches and local expertise terms, driving a measurable increase in listing appointments and buyer consultations.',
  results: [
    { metric: 'Organic Leads', improvement: '+420%', timeframe: '12 months' },
    { metric: 'Local Keywords Ranked', improvement: '300+', timeframe: 'Top 10 positions' },
    { metric: 'Property Page Views', improvement: '+180%', timeframe: 'From organic search' },
    { metric: 'Agent Inquiry Volume', improvement: '+95%', timeframe: 'Year over year' }
  ],
  benchmarks: [
    { metric: 'Monthly Organic Leads', before: '28', after: '146' },
    { metric: 'Keywords in Top 10', before: '42', after: '342' },
    { metric: 'Organic Traffic (monthly)', before: '4,200', after: '22,800' },
    { metric: 'Domain Authority', before: '18', after: '41' },
    { metric: 'Google Business Profile Views', before: '1,100/mo', after: '8,400/mo' }
  ]
}

const keywordGroups = [
  {
    category: 'Buyer Keywords',
    keywords: ['homes for sale in [city]', 'houses for sale near me', 'new construction homes', 'open houses this weekend']
  },
  {
    category: 'Seller Keywords',
    keywords: ['how to sell my house fast', 'best realtor to sell my home', 'home value estimator', 'listing agent near me']
  },
  {
    category: 'Local Market',
    keywords: ['[neighborhood] real estate', '[city] housing market', 'best neighborhoods in [city]', 'school district homes']
  },
  {
    category: 'Property Types',
    keywords: ['luxury homes for sale', 'condos for sale [city]', 'townhomes near me', 'waterfront properties']
  },
  {
    category: 'Agent & Broker',
    keywords: ['best realtor in [city]', 'top real estate agents near me', 'real estate broker [city]', 'buyer agent [area]']
  },
  {
    category: 'Investment',
    keywords: ['investment properties [city]', 'rental property ROI', 'real estate market forecast', 'fix and flip homes']
  }
]

const faqItems = [
  {
    question: 'How long does it take to see results from real estate SEO?',
    answer: 'Most real estate clients begin seeing measurable improvements in local rankings within 60-90 days, with significant lead generation gains appearing within 4-6 months. Hyper-local neighborhood pages often rank faster than broader market terms due to lower competition. We provide monthly progress reports so you can track improvements from day one.'
  },
  {
    question: 'Can you help me compete with Zillow and Realtor.com?',
    answer: 'Yes. While portals dominate broad searches, we focus on hyper-local and long-tail keywords where individual agents and brokerages can realistically outrank them. Neighborhood-specific content, agent expertise pages, and local market reports give you an edge that portals cannot replicate at a local level.'
  },
  {
    question: 'Do you work with individual agents or just brokerages?',
    answer: 'We work with both. For individual agents, we focus on personal brand SEO, Google Business Profile optimization, and neighborhood authority building. For brokerages, we develop multi-agent strategies that build team visibility while supporting individual agent rankings.'
  },
  {
    question: 'How do you handle property listings that expire or sell?',
    answer: 'We implement a strategic redirect system for sold and expired listings, preserving the SEO value those pages have accumulated. Sold listings are converted into neighborhood proof points, and expired listings are redirected to relevant active listing or neighborhood pages to maintain link equity.'
  },
  {
    question: 'What makes real estate SEO different from general SEO?',
    answer: 'Real estate SEO requires deep local expertise, an understanding of seasonal search patterns, property listing schema markup, IDX/MLS integration optimization, and strategies that account for the unique buyer and seller journey. Our team specializes in these nuances to deliver results that general SEO agencies cannot match.'
  },
  {
    question: 'Do you integrate with my MLS or IDX provider?',
    answer: 'Yes. We work with all major IDX and MLS platforms to ensure your listing pages are optimized for search engines. This includes implementing proper canonical tags, structured data, and crawl management to avoid duplicate content issues that commonly plague real estate websites.'
  },
  {
    question: 'How do I do keyword research for real estate businesses?',
    answer: 'Start with hyper-local terms combining your neighborhoods with property types (e.g., "condos for sale in [neighborhood]"). Use Google Keyword Planner to find search volumes for buyer keywords like "homes for sale near me" and seller keywords like "how to sell my house fast." Analyze competitor websites ranking for local terms and identify gaps. Focus on long-tail keywords with commercial intent rather than broad informational queries. Tools like Ahrefs and SEMrush can reveal what keywords your top-performing competitors rank for in your market.'
  },
  {
    question: 'What are backlinks and why do they matter for real estate SEO?',
    answer: 'Backlinks are links from other websites pointing to your real estate site. They act as trust signals to Google, indicating your site is authoritative and credible. For real estate agents, quality backlinks from local news sites, community organizations, real estate directories like Zillow, and industry publications significantly boost your domain authority and local rankings. A single backlink from a trusted local source can be more valuable than dozens of low-quality directory links. We focus on earning backlinks through local sponsorships, guest posts, and community involvement.'
  },
  {
    question: 'How important are Core Web Vitals for real estate websites?',
    answer: 'Core Web Vitals are critical for real estate sites because property listings often include high-resolution images, virtual tours, and IDX integrations that can slow page load times. Google uses metrics like Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) as ranking factors. Slow-loading property pages frustrate buyers and increase bounce rates, directly impacting your rankings and lead generation. We optimize images, implement lazy loading, and improve server response times to ensure your listings load quickly and rank well.'
  },
  {
    question: 'Should real estate agents invest in local SEO?',
    answer: 'Absolutely. Real estate is inherently local, and 97% of home buyers start their search online with local queries like "homes for sale near me" or "[neighborhood] real estate agent." Local SEO helps you dominate Google&apos;s Map Pack, rank for neighborhood-specific searches, and appear when buyers and sellers are actively looking in your service area. Investing in Google Business Profile optimization, local citations, neighborhood content, and review generation delivers the highest ROI for real estate professionals competing in specific geographic markets.'
  },
  {
    question: 'How do I track SEO performance for my real estate business?',
    answer: 'Use Google Analytics 4 to track organic traffic, lead form submissions, and property page views. Google Search Console shows which keywords are driving impressions and clicks, plus any technical issues affecting your listings. Set up goal tracking for contact forms, phone calls, and virtual tour requests to measure conversion rates. Monitor keyword rankings for your target neighborhoods using tools like Ahrefs or SEMrush. Track your Google Business Profile insights to measure local visibility. We provide monthly reports showing these metrics alongside lead volume and ROI to demonstrate the business impact of SEO.'
  }
]

const relatedIndustries = [
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'AI', href: '/industries/ai' }
]

function HeroSection() {
  return (
    <div className="bg-paper">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Real Estate
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Real estate SEO that fills your pipeline with qualified buyers and sellers
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Dominate local search results, outrank the portals for your neighborhoods, and turn organic traffic into listing appointments and closed deals.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Real Estate SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">$3.7T</div>
            <div className="mt-1 text-sm text-slate">US real estate market</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">97%</div>
            <div className="mt-1 text-sm text-slate">of buyers search online</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">4.8K</div>
            <div className="mt-1 text-sm text-slate">avg monthly search volume</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">2.8%</div>
            <div className="mt-1 text-sm text-slate">average conversion rate</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Real Estate SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Unique challenges in real estate search.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <item.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">{item.challenge}</h3>
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

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Real Estate SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for real estate professionals.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <service.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-ink">{service.name}</h3>
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

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we deliver real estate SEO results.
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex gap-8 border-b border-border py-8 last:border-b-0"
            >
              <div className="font-mono text-[28px] font-semibold text-accent leading-none pt-1">
                {step.number}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Technical Real Estate SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Advanced optimization for real estate websites.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Core Web Vitals & Site Performance
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Real estate websites often suffer from slow load times due to heavy property images and IDX integrations. We optimize performance metrics that directly impact rankings and user experience.
            </p>
            <ul className="space-y-3">
              {[
                'Google PageSpeed Insights optimization for property listing pages',
                'GTmetrix monitoring and image compression for MLS photos',
                'Lazy loading implementation for gallery views',
                'CDN configuration for faster global property listing delivery',
                'Mobile performance optimization for on-the-go buyers'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Real Estate Schema Markup
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Proper structured data helps search engines understand your property listings, agent profiles, and local office information, leading to enhanced search visibility and rich results.
            </p>
            <ul className="space-y-3">
              {[
                'RealEstateListing schema implementation from schema.org',
                'JSON-LD markup for property details, pricing, and features',
                'RealEstateAgent and LocalBusiness schema for agent profiles',
                'Residence and Apartment schema for property types',
                'Review and AggregateRating markup for social proof'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Link Building for Real Estate
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Build domain authority and local relevance through strategic link acquisition targeting real estate directories, local publications, and community resources.
            </p>
            <ul className="space-y-3">
              {[
                'Ahrefs and SEMrush competitor backlink analysis',
                'Moz Local for real estate directory submissions',
                'Local citation building on Zillow, Realtor.com, and Trulia',
                'Community sponsorship and local news outreach',
                'Guest posting on real estate investment blogs'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">
              Real Estate Analytics & Lead Tracking
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Track every lead source, monitor keyword rankings, and measure ROI with comprehensive analytics tailored to real estate business metrics.
            </p>
            <ul className="space-y-3">
              {[
                'Google Analytics 4 setup for lead form and contact tracking',
                'Google Search Console monitoring for listing page indexing',
                'Screaming Frog audits for technical SEO issues',
                'Custom dashboards tracking organic leads by neighborhood',
                'Monthly reporting on rankings, traffic, and conversion rates'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Real Estate Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a brokerage achieve +420% organic leads.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-2">{caseStudy.client}</h3>
              <span className="inline-flex items-center bg-white/10 px-3 py-1 text-sm font-heading font-medium text-white/80 mb-6">
                {caseStudy.industry}
              </span>

              <p className="text-sm leading-relaxed text-white/60 mt-4">
                {caseStudy.narrative}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Results Achieved</h3>
              <div className="space-y-6 mb-8">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">{result.improvement}</div>
                    <div className="text-sm text-white/80">{result.metric}</div>
                    <div className="text-xs text-white/40">{result.timeframe}</div>
                  </div>
                ))}
              </div>

              <h4 className="font-heading text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">Benchmark Comparison</h4>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-2 text-white/50 font-medium">Metric</th>
                    <th className="text-right py-2 text-white/50 font-medium">Before</th>
                    <th className="text-right py-2 text-white/50 font-medium">After</th>
                  </tr>
                </thead>
                <tbody>
                  {caseStudy.benchmarks.map((row, index) => (
                    <tr key={index} className="border-b border-white/5">
                      <td className="py-2 text-white/70">{row.metric}</td>
                      <td className="py-2 text-right text-white/40">{row.before}</td>
                      <td className="py-2 text-right font-medium text-white">{row.after}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Real Estate Keywords</Subheading>
          <Heading as="h2" className="mt-2">
            Examples of real estate keywords we target.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keywordGroups.map((group, index) => (
            <div key={index} className="text-center">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.keywords.map((keyword, keywordIndex) => (
                  <li key={keywordIndex} className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none">
                    {keyword}
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

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 font-display text-2xl leading-none text-accent">&ldquo;</div>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink mb-8">
            TheProjectSEO transformed our online presence completely. We went from barely getting any organic leads to having our agents rank on the first page for every major neighborhood in our market. Our organic lead volume has more than quadrupled, and the quality of those leads is significantly higher than what we get from paid portals. They truly understand real estate.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="size-10 rounded-none bg-accent-soft flex items-center justify-center">
              <span className="font-heading text-sm font-medium text-accent">JR</span>
            </div>
            <div className="text-left">
              <div className="font-heading text-sm font-semibold text-ink">Jennifer Reeves</div>
              <div className="text-xs text-ash">Managing Broker, Reeves Realty Group</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PricingSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="max-w-2xl mx-auto text-center">
          <Subheading>Real Estate SEO Pricing</Subheading>
          <Heading as="h2" className="mt-2">
            Invest in your pipeline.
          </Heading>
          <Lead className="mt-6">
            Our real estate SEO packages are designed to deliver measurable lead generation results for agents, teams, and brokerages of all sizes.
          </Lead>

          <div className="mt-12 rounded-none border border-border-strong bg-white p-8">
            <div className="font-mono text-[36px] font-bold text-ink">$1,997</div>
            <div className="text-sm text-ash mt-1">Starting at /month</div>

            <ul className="mt-8 space-y-3 text-left max-w-md mx-auto">
              {[
                'Hyper-local neighborhood SEO strategy',
                'Google Business Profile optimization',
                'Property listing schema markup',
                'Monthly market report content',
                'Agent profile page optimization',
                'Review generation campaign',
                'Monthly analytics and lead tracking',
                'Dedicated real estate SEO specialist'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact">Get Started</Button>
              <Button variant="outline" href="/pricing">
                See All Plans
              </Button>
            </div>
          </div>

          <p className="mt-6 text-xs text-ash">
            Custom packages available for multi-office brokerages and real estate teams. Contact us for enterprise pricing.
          </p>
        </div>
      </Container>
    </div>
  )
}

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Real estate SEO questions, answered" items={faqItems} />
    </>
  )
}

function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-8">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO services for other industries.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {relatedIndustries.map((industry) => (
            <a
              key={industry.name}
              href={industry.href}
              className="text-center p-6 rounded-none border border-border-strong bg-white hover:bg-cream transition-colors"
            >
              <div className="text-sm font-heading font-medium text-ink">{industry.name}</div>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}


export default function RealEstateSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Real Estate SEO Services | Realtor & Broker SEO',
          description:
            'Specialized SEO services for real estate agents, brokers, and property companies. Dominate local search, attract qualified buyers and sellers, and grow your pipeline.',
          url: 'https://theprojectseo.com/industries/realestate',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Backlink, World Wide Web, Computing, Websites',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            },
            {
              '@type': 'Thing',
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
            },
            {
              '@type': 'Thing',
              name: 'Websites',
              sameAs: 'https://www.wikidata.org/wiki/Q5635640',
            }
          ],
        }}
      />
      {/* Section 1: Hero */}
      <HeroSection />
      {/* Section 2: Stats Bar */}
      <StatsSection />
      {/* Section 3: Challenges */}
      <ChallengesSection />
      {/* Section 4: Services */}
      <ServicesSection />
      {/* Section 5: Process */}
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we deliver real estate SEO results"
        steps={processSteps}
      />
      {/* Section 6: Technical SEO */}
      <TechnicalSEOSection />
      {/* Section 7: Case Study */}
      <CaseStudySection />
      {/* Section 8: Keywords */}
      <KeywordsSection />
      {/* Section 9: Testimonial */}
      <TestimonialSection />
      {/* Section 10: Pricing */}
      <PricingSection />
      {/* Section 11: FAQ */}
      <TestimonialAndFAQSection />
      {/* Section 12: Related Industries */}
      <RelatedIndustriesSection />
      {/* Section 13: CTA */}
      <CTAFormSection subheading="Ready to dominate your local real estate market?" heading="Let's build your real estate SEO strategy." lead="Partner with SEO experts who understand the real estate industry. We'll help you outrank the portals, attract qualified buyers and sellers, and grow your business through organic search." submitText="Get Real Estate SEO Audit" />
      <Footer />
    </main>
  )
}
