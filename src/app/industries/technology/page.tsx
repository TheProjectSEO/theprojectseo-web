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
import { JsonLd } from '@/components/json-ld'
import {
  CpuChipIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'
import { Link } from '@/components/link'

export const metadata: Metadata = {
  title: 'Technology Company SEO Services | Tech Industry SEO | TheProjectSEO',
  description:
    'Specialized SEO services for technology companies. Drive organic growth for tech brands, developer platforms, and enterprise software with strategies that position you as the industry leader.',
  alternates: {
    canonical: '/industries/technology',
  },
  openGraph: {
    title: 'Technology Company SEO Services | Tech Industry SEO',
    description:
      'Specialized SEO services for technology companies. Drive organic growth for tech brands, developer platforms, and enterprise software with strategies that position you as the industry leader.',
    url: '/industries/technology',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technology Company SEO Services | Tech Industry SEO',
    description:
      'Specialized SEO services for technology companies. Drive organic growth for tech brands, developer platforms, and enterprise software with strategies that position you as the industry leader.',
  },
}

const challenges = [
  {
    challenge: 'Rapidly Evolving Landscape',
    description: 'Technology moves fast. New frameworks, platforms, and paradigms emerge constantly, making it difficult to maintain relevant, up-to-date content that ranks.',
    solution: 'We implement agile content strategies with continuous refresh cycles that keep your content current and competitive as the tech landscape shifts.',
    icon: RocketLaunchIcon
  },
  {
    challenge: 'Technical Audience Targeting',
    description: 'Tech buyers range from C-suite decision-makers to hands-on developers. Each audience searches differently and expects different content depth.',
    solution: 'We create segmented keyword strategies and content tiers that speak to every stakeholder in the technology buying journey.',
    icon: CpuChipIcon
  },
  {
    challenge: 'Feature vs Benefit Content',
    description: 'Tech companies often over-index on feature-heavy content that fails to communicate business value, missing high-intent commercial searches.',
    solution: 'We balance technical feature content with benefit-driven pages that capture both informational and transactional search intent.',
    icon: CodeBracketIcon
  },
  {
    challenge: 'Developer Documentation SEO',
    description: 'Documentation and developer resources represent massive organic traffic opportunities that most tech companies leave untapped.',
    solution: 'We optimize API docs, tutorials, and developer guides with structured data and internal linking strategies that drive qualified developer traffic.',
    icon: DocumentTextIcon
  }
]

const services = [
  {
    name: 'Tech Keyword Research',
    description: 'Specialized keyword research across the full technology search landscape, from enterprise decision-makers to individual developers.',
    features: [
      'Technology-specific keyword mapping',
      'Developer vs. buyer intent analysis',
      'Competitor technology keyword gaps',
      'Emerging tech trend identification'
    ]
  },
  {
    name: 'Developer Content Strategy',
    description: 'Content strategies that attract, engage, and convert developer audiences through technical authority and practical value.',
    features: [
      'Technical tutorial and guide creation',
      'Developer community content planning',
      'Stack-specific content clusters',
      'Open source project optimization'
    ]
  },
  {
    name: 'Product Launch SEO',
    description: 'Pre-launch and post-launch SEO strategies that ensure your new products and features capture search demand from day one.',
    features: [
      'Pre-launch keyword positioning',
      'Product landing page optimization',
      'Feature announcement content',
      'Comparison and alternative pages'
    ]
  },
  {
    name: 'Technical Documentation SEO',
    description: 'Transform your docs into a powerful organic acquisition channel with structured, search-optimized documentation.',
    features: [
      'API documentation optimization',
      'Knowledge base SEO architecture',
      'Schema markup for documentation',
      'Internal linking and navigation SEO'
    ]
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Technology Audit & Research',
    description: 'We conduct a deep-dive audit of your current search presence, analyze your competitive landscape, and map the full technology keyword universe relevant to your products and audience.'
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description: 'Based on audit findings, we build a prioritized SEO roadmap that aligns with your product roadmap, targeting the highest-impact opportunities for developer and enterprise audiences.'
  },
  {
    number: '03',
    title: 'Content & Technical Execution',
    description: 'Our team implements on-page optimization, creates technical content, optimizes documentation, and builds authoritative backlinks within the technology ecosystem.'
  },
  {
    number: '04',
    title: 'Measure & Iterate',
    description: 'We continuously monitor rankings, traffic, and conversions, making data-driven adjustments and scaling what works to accelerate your organic growth trajectory.'
  }
]

const caseStudy = {
  client: 'B2B Technology Platform',
  industry: 'Enterprise Software',
  challenge: 'Mid-stage B2B tech platform struggling to break through competitive enterprise software keywords and generate qualified demo requests from organic search.',
  solution: 'Comprehensive SEO strategy combining developer content marketing, product page optimization, and technical documentation SEO to capture demand across the full buyer journey.',
  results: [
    { metric: 'Organic Traffic', improvement: '+440%', timeframe: '10 months' },
    { metric: 'Keyword Rankings', improvement: '180+ rankings', timeframe: 'Top 10 positions' },
    { metric: 'Demo Requests', improvement: '+260%', timeframe: 'From organic search' },
    { metric: 'Developer Signups', improvement: '+190%', timeframe: 'From documentation traffic' }
  ]
}

const faqs = [
  {
    question: 'How is SEO for technology companies different from other industries?',
    answer: 'Technology SEO requires deep understanding of technical audiences, developer search behavior, and rapidly changing product landscapes. We optimize for both business decision-makers searching for solutions and developers evaluating technical capabilities, creating content strategies that address the full technology buying cycle.'
  },
  {
    question: 'How do you handle SEO for products in highly competitive tech categories?',
    answer: 'We identify underserved long-tail opportunities and comparison keywords where you can win quickly, while building authority for competitive head terms over time. Our strategies leverage your unique technical differentiators to create content that stands out in crowded markets.'
  },
  {
    question: 'Can you optimize developer documentation for search?',
    answer: 'Absolutely. Developer documentation is one of the most underutilized organic channels for tech companies. We optimize docs with proper schema markup, internal linking, search-friendly navigation, and content structure that helps both search engines and developers find what they need.'
  },
  {
    question: 'How do you keep up with rapidly changing technology trends for SEO?',
    answer: 'We use real-time search trend monitoring, industry signal tracking, and emerging keyword detection to identify new opportunities as they appear. Our agile content processes allow us to quickly create and publish content around new technologies, frameworks, and industry developments.'
  },
  {
    question: 'How do I do keyword research for technology companies?',
    answer: 'Technology keyword research requires understanding both business buyer intent and developer search patterns. Start by mapping your technology stack, features, and use cases to search queries. Use tools like Ahrefs, SEMrush, and Google Keyword Planner to identify high-volume commercial keywords, long-tail developer queries, and comparison terms. Focus on keywords that match different stages of the buyer journey, from awareness (\"what is\") to consideration (\"best\") to decision (\"vs\" and \"pricing\").'
  },
  {
    question: 'What are backlinks and why do they matter for tech SEO?',
    answer: 'Backlinks are links from other websites pointing to your technology site. They matter because search engines use them as votes of confidence and authority signals. For tech companies, quality backlinks from authoritative technology publications, developer communities, and industry directories significantly boost rankings. Focus on earning links through technical content, product launches, developer resources, and thought leadership rather than buying low-quality links that can harm your SEO.'
  },
  {
    question: 'How important are Core Web Vitals for technology websites?',
    answer: 'Core Web Vitals are critical for technology websites because they directly impact user experience and search rankings. Google measures three key metrics: Largest Contentful Paint (loading speed), Interaction to Next Paint (interactivity), and Cumulative Layout Shift (visual stability). Technology sites with documentation, code demos, and interactive features must optimize these metrics to rank well and provide excellent developer experiences. Poor Core Web Vitals can hurt both rankings and conversion rates.'
  },
  {
    question: 'Should technology companies invest in local SEO?',
    answer: 'It depends on your business model. B2B enterprise software and global SaaS companies typically focus on national/global SEO. However, technology companies with physical locations, regional sales teams, or location-specific services should invest in local SEO. This includes optimizing Google Business Profiles, building local citations, and creating location-specific content. Even remote-first tech companies can benefit from local SEO to capture \"[service] near me\" searches in key markets.'
  },
  {
    question: 'How do I track SEO performance for my tech business?',
    answer: 'Track technology SEO performance using Google Analytics 4 to monitor organic traffic, conversions, and user behavior. Use Google Search Console to track keyword rankings, click-through rates, and technical issues. Monitor developer engagement metrics like documentation visits, API signup conversions, and demo requests. Set up custom dashboards tracking key metrics like organic MQLs, demo bookings from organic search, and developer signup attribution. Run monthly technical audits with Screaming Frog to catch crawl errors and optimization opportunities.'
  },
  {
    question: 'What kind of results can a technology company expect from SEO?',
    answer: 'Most technology clients see meaningful ranking improvements within 3-4 months, with significant traffic and lead generation growth by month 6-8. B2B tech companies typically see 200-500% organic traffic increases and substantial improvements in demo requests and developer signups within the first year.'
  },
  {
    question: 'Do you work with both B2B and B2C technology companies?',
    answer: 'Yes. We work with B2B enterprise software companies, developer tool platforms, B2C consumer tech brands, and everything in between. Our strategies are tailored to your specific technology market, whether you&apos;re targeting CTOs, individual developers, or end consumers.'
  }
]

const relatedIndustries = [
  { name: 'AI & Machine Learning', href: '/industries/ai' },
  { name: 'SaaS', href: '/industries/saas' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Education', href: '/industries/education' }
]

function Header() {
  return (
    <div className="relative bg-paper">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Technology
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Technology SEO that positions your brand as the{' '}
            <em className="text-accent not-italic font-display font-light italic">industry leader</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Specialized SEO strategies for technology companies that drive qualified traffic from developers, buyers, and enterprise decision-makers.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Tech SEO Strategy</Button>
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
    <div className="bg-cream border-y border-border">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { metric: '$5.3T', label: 'Global Tech Market' },
            { metric: '81%', label: 'B2B Research Online' },
            { metric: '1.9K/mo', label: 'Avg Search Volume' },
            { metric: '2.4%', label: 'Avg Conversion Rate' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent leading-none mb-2">{item.metric}</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ChallengesSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Technology Industry Challenges</Subheading>
        <Heading as="h2" className="mt-2">
          Unique SEO challenges in the tech space.
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
  )
}

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Technology SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for technology companies.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">{service.name}</h3>
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
            How we deliver results for tech companies.
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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Technology Technical SEO Excellence
          </Heading>
          <Lead className="mt-6">
            Technology websites require specialized technical optimization. We optimize Core Web Vitals for fast mobile performance, implement comprehensive tech industry schema markup, build authoritative backlinks from technology publications, and set up advanced tracking to measure developer engagement and enterprise leads.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Page Speed</h3>
            <p className="text-slate mb-4">
              Developer and enterprise audiences expect lightning-fast experiences. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your technology website loads quickly on all devices. Fast sites rank higher, convert more users, and provide better developer experiences.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Code demo and documentation optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Mobile-first optimization for developer searches</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">CDN optimization and edge caching strategies</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Tech Industry Schema Markup</h3>
            <p className="text-slate mb-4">
              Structured data from schema.org helps search engines understand your technology products, features, and documentation. We implement JSON-LD schema markup for SoftwareApplication, Product, and FAQPage to enable rich snippets in Google, knowledge panels, and better visibility in ChatGPT, Perplexity, and technology search results.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">SoftwareApplication and Product schema</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">HowTo and TechArticle markup for documentation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQPage and Organization structured data</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building for Tech Companies</h3>
            <p className="text-slate mb-4">
              Quality backlinks from authoritative tech publications, developer communities, and industry directories build domain authority and demonstrate technical expertise. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute white-hat link acquisition strategies that resonate with technology audiences.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest posting on tech blogs and publications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Developer community engagement and partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR for product launches and features</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Tech Analytics & Tracking</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4, Google Search Console, and Screaming Frog to monitor keyword rankings, organic traffic patterns, and conversion rates. You&apos;ll get monthly reports showing exactly how SEO drives developer signups and enterprise demos, with custom dashboards that track the complete user journey from search to conversion.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">GA4 event tracking for developer actions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console tech keyword monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Technical site audits with Screaming Frog</span>
              </li>
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
          <Subheading dark>Technology Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a B2B tech platform achieve breakthrough growth.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">{caseStudy.challenge}</p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">Our Solution</h3>
              <p className="text-sm leading-relaxed text-white/60">{caseStudy.solution}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Results Achieved</h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">{result.improvement}</div>
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

function KeywordsSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Technology Industry Keywords</Subheading>
        <Heading as="h2" className="mt-2">
          Examples of technology keywords we target.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            category: 'Core Tech',
            keywords: ['enterprise software solutions', 'technology platform', 'cloud computing services', 'IT infrastructure management']
          },
          {
            category: 'Developer',
            keywords: ['developer tools', 'API integration platform', 'SDK documentation', 'code collaboration software']
          },
          {
            category: 'Enterprise',
            keywords: ['enterprise IT solutions', 'digital transformation platform', 'business technology consulting', 'enterprise security software']
          },
          {
            category: 'Product',
            keywords: ['project management software', 'data analytics platform', 'automation tools for business', 'workflow management system']
          },
          {
            category: 'Comparison',
            keywords: ['best project management tools', 'top cloud platforms compared', 'CRM software alternatives', 'enterprise vs startup tech stack']
          },
          {
            category: 'Emerging Tech',
            keywords: ['edge computing solutions', 'quantum computing platform', 'Web3 development tools', 'IoT management software']
          }
        ].map((group, index) => (
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
  )
}

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-4 font-display text-2xl leading-none text-accent">&ldquo;</div>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink mb-8">
            TheProjectSEO transformed our organic presence. Their understanding of developer search behavior
            and enterprise buying cycles helped us 4x our organic demo pipeline in under a year.
            They don&apos;t just do SEO — they understand technology.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="size-10 rounded-full bg-accent-soft flex items-center justify-center">
              <span className="font-heading text-xs font-medium text-accent">RK</span>
            </div>
            <div className="text-left">
              <div className="font-heading text-sm font-semibold text-ink">Rahul Kumar</div>
              <div className="text-xs text-ash">CTO, CloudScale Technologies</div>
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
        <div className="max-w-3xl mx-auto text-center">
          <Subheading>Technology SEO Pricing</Subheading>
          <Heading as="h2" className="mt-2">
            Invest in organic growth for your tech company.
          </Heading>
          <Lead className="mt-6">
            Our technology SEO packages are designed for the unique needs of tech companies,
            from early-stage startups to established enterprise platforms.
          </Lead>

          <div className="mt-12 border border-border-strong bg-white p-8">
            <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-4">Starting at</div>
            <div className="font-mono text-[48px] font-bold text-ink leading-none mb-2">$1,997</div>
            <div className="font-mono text-sm text-ash mb-8">/month</div>

            <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
              {[
                'Technology keyword research & strategy',
                'Developer content creation & optimization',
                'Technical documentation SEO',
                'Product page optimization',
                'Monthly reporting & strategy calls',
                'Dedicated technology SEO specialist'
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact">Get Started</Button>
              <Button variant="outline" href="/pricing">
                View All Plans
              </Button>
            </div>
          </div>

          <p className="mt-6 text-xs text-ash">
            Custom enterprise packages available. All plans include a free technology SEO audit.
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
      <FAQDarkSection title="Technology SEO frequently asked questions" items={faqs} />
    </>
  )
}

function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO for other industries.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
          {relatedIndustries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="bg-paper p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">{industry.name}</h3>
              <p className="mt-2 text-sm text-accent font-medium">View Industry SEO &rarr;</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}


export default function TechnologySEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Technology Company SEO Services | Tech Industry SEO',
          description:
            'Specialized SEO services for technology companies. Drive organic growth for tech brands, developer platforms, and enterprise software with strategies that position you as the industry leader.',
          url: 'https://theprojectseo.com/industries/technology',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Backlink, Business-to-business, Keyword research, Analytics',
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
              name: 'Business-to-business',
              sameAs: 'https://www.wikidata.org/wiki/Q325421',
            },
            {
              '@type': 'Thing',
              name: 'Keyword research',
              sameAs: 'https://www.wikidata.org/wiki/Q6398555',
            },
            {
              '@type': 'Thing',
              name: 'Analytics',
              sameAs: 'https://www.wikidata.org/wiki/Q485396',
            }
          ],
        }}
      />
      {/* Section 1: Hero Header */}
      <Header />
      {/* Section 2: Stats Bar */}
      <StatsSection />
      {/* Section 3: Industry Challenges */}
      <ChallengesSection />
      {/* Section 4: Services Tailored for Industry */}
      <ServicesSection />
      {/* Section 5: Process */}
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we deliver results for tech companies"
        steps={processSteps}
      />
      {/* Section 6: Technical SEO Excellence */}
      <TechnicalSEOSection />
      {/* Section 7: Case Study (dark) */}
      <CaseStudySection />
      {/* Section 8: Industry Keyword Examples */}
      <KeywordsSection />
      {/* Section 9: Client Testimonial */}
      <TestimonialSection />
      {/* Section 10: Pricing */}
      <PricingSection />
      {/* Section 11: FAQ */}
      <TestimonialAndFAQSection />
      {/* Section 12: Related Industries */}
      <RelatedIndustriesSection />
      {/* Section 13: CTA */}
      <CTAFormSection subheading="Ready to accelerate your tech company's growth?" heading="Let's build your technology SEO strategy." lead="Partner with SEO experts who understand the technology industry. We'll help you capture developer mindshare, dominate enterprise search, and drive qualified pipeline through organic." submitText="Get Tech SEO Strategy" />
      <Footer />
    </main>
  )
}
