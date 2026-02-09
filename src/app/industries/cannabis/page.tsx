import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ShieldExclamationIcon,
  GlobeAmericasIcon,
  NoSymbolIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cannabis & CBD SEO Services | Dispensary & Hemp Optimization | TheProjectSEO',
  description:
    'Specialized cannabis SEO strategies that navigate advertising restrictions and drive compliant organic growth. Expert SEO for dispensaries, CBD brands, and cannabis companies.',
  alternates: {
    canonical: '/industries/cannabis',
  },
  openGraph: {
    title: 'Cannabis & CBD SEO Services | Dispensary & Hemp Optimization',
    description:
      'Specialized cannabis SEO strategies that navigate advertising restrictions and drive compliant organic growth. Expert SEO for dispensaries, CBD brands, and cannabis companies.',
    url: '/industries/cannabis',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cannabis & CBD SEO Services | Dispensary & Hemp Optimization',
    description:
      'Specialized cannabis SEO strategies that navigate advertising restrictions and drive compliant organic growth. Expert SEO for dispensaries, CBD brands, and cannabis companies.',
  },
}

const challenges = [
  {
    challenge: 'Advertising Platform Bans',
    description:
      'Google Ads, Meta, and virtually every major paid advertising platform explicitly prohibit cannabis-related promotions regardless of state legality. This eliminates the primary digital growth channel most businesses rely on, making organic search the single most important marketing investment for cannabis companies.',
    solution:
      'We build organic-first growth strategies that bypass paid advertising restrictions entirely, capturing high-intent search traffic through compliant content, local optimization, and technical SEO excellence.',
    icon: NoSymbolIcon,
  },
  {
    challenge: 'State-by-State Regulations',
    description:
      'Cannabis laws vary dramatically across jurisdictions. Marketing rules, product claims, age-gating requirements, and content restrictions differ from state to state, requiring location-specific strategies that maintain compliance while maximizing visibility.',
    solution:
      'We develop state-specific landing pages and content strategies tailored to each jurisdiction&apos;s regulations, ensuring your SEO efforts are fully compliant while dominating local search results in every market you operate.',
    icon: GlobeAmericasIcon,
  },
  {
    challenge: 'Content & Medical Claims Restrictions',
    description:
      'Cannabis businesses face strict limitations on health claims, product descriptions, and educational content. Making unsubstantiated medical claims can trigger regulatory action, platform penalties, and legal liability, yet informative content is essential for SEO.',
    solution:
      'Our team creates compliance-safe content that educates and converts without crossing regulatory lines. We build topical authority through carefully worded educational resources, product guides, and strain information pages.',
    icon: ShieldExclamationIcon,
  },
  {
    challenge: 'Local SEO for Dispensaries',
    description:
      'The majority of dispensary customers search locally with high purchase intent. Competing for "dispensary near me" and city-specific queries requires specialized local SEO expertise, including Google Business Profile management in a category that Google itself restricts.',
    solution:
      'We optimize every local touchpoint from Google Business Profiles to citation networks and review strategies, ensuring your dispensary locations dominate the local pack and map results for high-converting nearby searches.',
    icon: DocumentMagnifyingGlassIcon,
  },
]

const services = [
  {
    name: 'Cannabis Keyword Research',
    description:
      'Deep keyword research across dispensary, product, medical, and CBD search terms with compliance-aware targeting that prioritizes high-intent, high-converting queries.',
    features: [
      'Dispensary and retailer keyword mapping by location',
      'Strain, product, and category keyword analysis',
      'Medical cannabis term targeting with compliance review',
      'CBD and hemp search opportunity identification',
    ],
  },
  {
    name: 'Compliance-Safe Content Strategy',
    description:
      'Content creation that drives organic traffic while adhering to state and federal cannabis advertising guidelines. Every piece is reviewed for regulatory compliance before publication.',
    features: [
      'Regulation-compliant blog and educational content',
      'Product description optimization within legal boundaries',
      'State-specific landing page creation and optimization',
      'Age-gate and disclaimer integration for search pages',
    ],
  },
  {
    name: 'Local Dispensary SEO',
    description:
      'Dominate local search results for dispensary and cannabis retail queries in every market you operate. We optimize for the "near me" searches that drive foot traffic and online orders.',
    features: [
      'Google Business Profile optimization and management',
      'Local citation building across cannabis directories',
      'Review generation and reputation management strategy',
      'Multi-location dispensary SEO with unique local content',
    ],
  },
  {
    name: 'CBD & Hemp Brand SEO',
    description:
      'Specialized optimization for CBD and hemp brands navigating the unique regulatory landscape of federally legal products, including e-commerce SEO and wellness content strategy.',
    features: [
      'CBD product page and category optimization',
      'Hemp and wellness keyword targeting strategy',
      'E-commerce technical SEO for CBD storefronts',
      'Compliance-safe link building and digital PR',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Compliance & Market Audit',
    description:
      'We conduct a comprehensive audit of your current search presence, reviewing state-specific regulations for your markets and analyzing your competitive landscape. This includes a technical SEO assessment, content compliance review, local SEO evaluation, and identification of the highest-impact growth opportunities within your regulatory constraints.',
  },
  {
    number: '02',
    title: 'Regulation-Aware Strategy',
    description:
      'Based on audit findings, we develop a tailored cannabis SEO strategy that maximizes organic visibility while maintaining full compliance with state advertising laws and platform guidelines. This includes a prioritized keyword roadmap, compliance-safe content calendar, local SEO plan for each location, and link building strategy with clear KPIs.',
  },
  {
    number: '03',
    title: 'Content & Optimization Execution',
    description:
      'We execute the strategy with compliance-reviewed content creation, on-page optimization, local SEO improvements, and technical enhancements. Every piece of content is designed to rank and convert while staying within regulatory boundaries, from educational blog posts to product pages and location-specific landing pages.',
  },
  {
    number: '04',
    title: 'Monitor, Report & Scale',
    description:
      'Using data-driven insights, we continuously refine the strategy as regulations evolve and new markets open. We scale what works, adapt to algorithm changes, and monitor compliance across all published content. Monthly reporting tracks organic traffic, local visibility, online orders, and in-store visit attribution from SEO.',
  },
]

const caseStudy = {
  client: 'Multi-State Dispensary Chain',
  industry: 'Cannabis Retail',
  challenge:
    'A multi-state dispensary chain with 12 locations across three states was entirely shut out of paid advertising and struggling with inconsistent organic visibility. Their website lacked state-specific content, their Google Business Profiles were poorly optimized, and competitor dispensaries were outranking them for critical "near me" and city-specific queries. Online order volume was stagnant, and new patient registrations for their medical program were declining despite market growth.',
  solution:
    'We rebuilt their SEO foundation with a compliance-first approach. We created state-specific landing pages for each jurisdiction with regulation-appropriate content, optimized all 12 Google Business Profiles with consistent NAP data and category targeting, and launched a content hub covering strains, consumption methods, and cannabis education without making prohibited health claims. We built local authority through cannabis directory citations, community partnerships, and a review generation program that increased their average rating from 3.8 to 4.6 stars.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+480%', timeframe: '12 months' },
    { metric: 'Cannabis Keywords in Top 10', improvement: '300+', timeframe: 'From 47 to 347' },
    { metric: 'Online Orders from Organic', improvement: '+250%', timeframe: 'Monthly order volume' },
    { metric: 'New Patient Registrations', improvement: '+190%', timeframe: 'Medical cannabis program' },
  ],
}

const keywordCategories = [
  {
    category: 'Dispensary Local',
    keywords: ['dispensary near me', 'best dispensary in [city]', 'recreational dispensary open now', 'medical dispensary [state]'],
  },
  {
    category: 'Cannabis Products',
    keywords: ['cannabis edibles online', 'THC vape cartridges', 'cannabis concentrates near me', 'pre-rolled joints delivery'],
  },
  {
    category: 'Medical Cannabis',
    keywords: ['medical marijuana card [state]', 'cannabis for pain relief', 'medical cannabis doctor near me', 'MMJ dispensary open today'],
  },
  {
    category: 'CBD & Hemp',
    keywords: ['CBD oil benefits', 'best CBD gummies online', 'hemp-derived products legal', 'full spectrum CBD near me'],
  },
  {
    category: 'Compliance & Legal',
    keywords: ['cannabis laws [state]', 'legal cannabis delivery', 'licensed dispensary verification', 'cannabis age requirements'],
  },
  {
    category: 'Cannabis Education',
    keywords: ['indica vs sativa difference', 'cannabis dosage guide', 'how to choose cannabis strain', 'cannabis consumption methods'],
  },
]

const faqItems = [
  {
    question: 'Can cannabis companies advertise on Google or social media?',
    answer:
      'No. Google Ads, Meta (Facebook and Instagram), and most major advertising platforms explicitly prohibit cannabis-related promotions regardless of state legality. This is precisely why SEO is the most critical digital marketing channel for cannabis businesses. Organic search is the primary way potential customers discover dispensaries, CBD brands, and cannabis products online, and it represents the only scalable digital growth channel available.',
  },
  {
    question: 'How do you handle compliance with different state cannabis regulations?',
    answer:
      'We maintain up-to-date knowledge of cannabis advertising and marketing regulations for every legal state. Our content strategies are tailored to each jurisdiction&apos;s specific requirements, including proper disclaimers, age-gating, medical claims restrictions, and product description guidelines. Every piece of content is reviewed for regulatory compliance before publication, and we conduct regular audits of all published content when regulations change.',
  },
  {
    question: 'How long does it take to see results from cannabis SEO?',
    answer:
      'Most cannabis businesses start seeing measurable improvements within 60 to 90 days, with significant results typically appearing within 6 to 9 months. The timeline depends on your current search presence, competition in your local market, and the number of locations being optimized. Because paid advertising is not available, SEO investments compound more dramatically over time in the cannabis space, making early investment particularly valuable.',
  },
  {
    question: 'Do you work with both recreational and medical cannabis businesses?',
    answer:
      'Yes. We work with recreational dispensaries, medical cannabis providers, CBD and hemp brands, cannabis delivery services, and ancillary cannabis businesses. Each segment has unique keyword opportunities and compliance requirements that we address with tailored strategies. Whether you operate a single dispensary or a multi-state chain, our approach scales to your business model.',
  },
  {
    question: 'Can you help with SEO for cannabis businesses in newly legal states?',
    answer:
      'Absolutely. Newly legal markets represent some of the biggest SEO opportunities because competition is lower and search demand spikes dramatically as consumers begin searching for legal options. We help cannabis businesses establish search dominance early in new markets, often achieving strong rankings before competitors even begin their SEO efforts. Early movers in new states consistently see the strongest long-term organic performance.',
  },
  {
    question: 'What makes cannabis SEO different from regular SEO?',
    answer:
      'Cannabis SEO requires navigating advertising platform bans, state-by-state regulatory compliance, content restrictions on medical claims, age-gating requirements, and unique local search patterns. Standard SEO agencies lack the regulatory knowledge to safely optimize cannabis businesses. Our cannabis-specific expertise ensures your SEO strategy drives growth without risking compliance violations, platform penalties, or legal liability.',
  },
  {
    question: 'How do I do keyword research for cannabis businesses?',
    answer:
      'Cannabis keyword research requires understanding consumer search behavior and compliance restrictions. Use tools like Ahrefs, SEMrush, and Google Keyword Planner to identify keywords like "dispensary near me", "cannabis [product] delivery", and "[strain] effects". Focus on long-tail keywords with high commercial intent, local search modifiers, and product-specific queries. Analyze search volume, keyword difficulty, and competitor rankings to prioritize opportunities while staying within advertising guidelines.',
  },
  {
    question: 'What are backlinks and why do they matter for cannabis SEO?',
    answer:
      'Backlinks are links from other websites pointing to your cannabis site. They signal authority and trustworthiness to search engines like Google. For cannabis businesses, backlinks from authoritative cannabis publications, industry blogs, and compliant directories dramatically improve domain authority and rankings. Quality matters more than quantity—one link from Leafly or High Times is worth hundreds of low-quality directory links. Use Ahrefs or Moz to analyze your backlink profile while ensuring all link sources comply with state regulations.',
  },
  {
    question: 'How important are Core Web Vitals for cannabis websites?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) are Google ranking factors that measure page speed and user experience. Cannabis websites must load fast on mobile devices where most customers search for dispensaries and products. Poor Core Web Vitals lead to higher bounce rates, lower rankings, and lost online orders. We use Google PageSpeed Insights and GTmetrix to optimize cannabis sites and achieve "Good" ratings across all metrics, which improves both rankings and conversion rates.',
  },
  {
    question: 'Should cannabis dispensaries invest in local SEO?',
    answer:
      'Yes, local SEO is essential for cannabis dispensaries. Most customers search for cannabis products and dispensaries within their geographic area using "near me" searches. Optimize your Google Business Profile for each location, build local citations with consistent NAP (Name, Address, Phone), and create location-specific pages targeting neighborhood-level keywords. Local SEO helps you appear in Google&apos;s local pack and map results, driving foot traffic and online orders from nearby searches.',
  },
  {
    question: 'How do I track SEO performance for my cannabis business?',
    answer:
      'Use Google Analytics 4 to track organic traffic, customer behavior, and online orders from search. Google Search Console shows keyword rankings, click-through rates, and indexation status for your cannabis content. Tools like Ahrefs, SEMrush, and Screaming Frog provide competitor analysis, backlink monitoring, and technical SEO audits. Set up custom events in GA4 to track customer actions (product views, menu clicks, order completions, store locator usage) and tie them back to organic search channels for complete ROI visibility.',
  },
]

const relatedIndustries = [
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Food & Beverage', href: '/industries/food' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
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
            Cannabis & CBD Industry
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink max-w-3xl">
            SEO strategies that navigate regulations and drive{' '}
            <em className="text-accent italic">compliant growth</em>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-[1.65] text-slate">
            Overcome advertising bans and regulatory complexity with organic-first SEO built for dispensaries, CBD brands, and cannabis companies. We turn search into your most powerful growth channel.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Cannabis SEO Strategy</Button>
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
/*  Section 2: Industry Statistics Bar                                         */
/* -------------------------------------------------------------------------- */

function StatsBar() {
  const stats = [
    { value: '$57B', label: 'Global cannabis market size' },
    { value: '68%', label: 'Consumers search dispensaries online' },
    { value: '0', label: 'Paid ad channels available' },
    { value: '420%', label: 'Average ROI from cannabis SEO' },
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
/*  Section 3: Industry SEO Challenges                                         */
/* -------------------------------------------------------------------------- */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Cannabis SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why cannabis businesses need specialized SEO.
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
/*  Section 4: Services Tailored for Industry                                  */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Cannabis SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for cannabis growth.
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
            How we drive cannabis SEO results.
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
/*  Section 6: Technical SEO                                                   */
/* -------------------------------------------------------------------------- */

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Core technical SEO for cannabis businesses
          </Heading>
          <Lead className="mt-6">
            Cannabis businesses need rock-solid technical foundations to compete in organic search. We optimize Core Web Vitals, implement compliant schema markup, build authoritative backlinks, and track performance with precision analytics.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Site Performance</h3>
            <p className="text-slate mb-4">
              Page speed directly impacts rankings and conversion rates. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your cannabis site loads fast on all devices, reducing bounce rates and improving online order completion.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product image optimization and lazy loading</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Menu and inventory page speed optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Mobile-first optimization for dispensary searches</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Cannabis Schema Markup</h3>
            <p className="text-slate mb-4">
              We implement JSON-LD schema markup from schema.org to help search engines understand your cannabis products, dispensary locations, and services. Proper structured data enables rich snippets, local business visibility, and better indexation while maintaining compliance with advertising restrictions.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">LocalBusiness schema for dispensary locations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product schema for cannabis items and menus</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQ and HowTo rich snippets for education content</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building for Cannabis Businesses</h3>
            <p className="text-slate mb-4">
              Quality backlinks from authoritative cannabis publications and industry sites build domain authority despite advertising restrictions. We use Ahrefs, SEMrush, and Moz to identify compliant link opportunities, analyze competitor backlink profiles, and execute white-hat link acquisition strategies that respect state regulations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest posting on cannabis industry publications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Directory listings in compliant cannabis platforms</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR within regulatory guidelines</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Cannabis Analytics & Compliance Tracking</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4, Google Search Console, and Screaming Frog to monitor keyword rankings, organic traffic growth, online order attribution, and compliance status. You&apos;ll get monthly reports showing exactly how SEO drives revenue for your cannabis business.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Custom GA4 event tracking for cannabis transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console monitoring for indexation and rankings</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Technical audits with Screaming Frog for SEO health</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 7: Case Study + Results (Dark Section)                             */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Cannabis Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a multi-state dispensary chain achieve breakthrough organic growth.
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
/*  Section 8: Industry Keyword Examples                                       */
/* -------------------------------------------------------------------------- */

function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Cannabis Keyword Examples</Subheading>
          <Heading as="h2" className="mt-2">
            The types of keywords we target for cannabis businesses.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keywordCategories.map((group, index) => (
            <div key={index} className="text-center">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.keywords.map((keyword, keywordIndex) => (
                  <li
                    key={keywordIndex}
                    className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none"
                  >
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

/* -------------------------------------------------------------------------- */
/*  Section 9: Client Testimonial                                              */
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
            &ldquo;With every advertising platform shutting us out, organic search was our lifeline.
            TheProjectSEO understood our industry&apos;s challenges from day one. Their compliance-first
            approach gave us confidence, and the results speak for themselves: a 480% increase in
            organic traffic across all our dispensary locations. They didn&apos;t just improve our
            rankings; they built a sustainable growth engine that keeps delivering month after month.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Jason Mitchell</p>
            <p className="text-sm text-slate mt-1">CEO, GreenLeaf Holdings</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Pricing Context                                                */
/* -------------------------------------------------------------------------- */

function PricingContextSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Subheading>Cannabis SEO Investment</Subheading>
            <Heading as="h2" className="mt-2">
              Built for a restricted-advertising landscape.
            </Heading>
          </div>

          <p className="text-sm leading-relaxed text-slate text-center mb-8">
            With paid advertising completely off the table, your SEO investment is not just another marketing
            line item; it is your primary digital growth channel. Our cannabis SEO engagements are structured
            to deliver measurable ROI in an industry where organic search is the only scalable option.
          </p>

          <div className="border border-border-strong rounded-none p-8 mb-8">
            <p className="font-heading text-lg font-semibold text-ink mb-4">
              Investment starts at $1,997/month
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Compliance-safe keyword research, content strategy, and monthly content creation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Local dispensary SEO, Google Business Profile optimization, and citation management
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Monthly reporting with organic traffic, local visibility, online orders, and compliance audits
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button href="/pricing">View Full Pricing Details</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 11: FAQ                                                            */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="Cannabis SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 12: Related Industries                                             */
/* -------------------------------------------------------------------------- */

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

/* -------------------------------------------------------------------------- */
/*  Section 13: Industry-Specific CTA                                          */
/* -------------------------------------------------------------------------- */

function CTASection() {
  return (
    <div className="bg-paper py-16 border-t border-border">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <Subheading>Ready to Grow Your Cannabis Brand with SEO?</Subheading>
            <Heading as="h2" className="mt-2">
              Let&apos;s build your cannabis SEO growth engine.
            </Heading>
            <Lead className="mt-6">
              Partner with SEO experts who understand cannabis regulations, advertising restrictions,
              and the compliance-first approach your business demands. We&apos;ll turn organic search
              into the growth channel that paid advertising can&apos;t be.
            </Lead>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Button href="/contact">Get Cannabis SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
        <p className="mt-6 text-xs text-ash text-center lg:text-left">
          Free consultation includes cannabis-specific keyword research, compliance review, and competitor analysis.
        </p>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function CannabisIndustrySEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Cannabis & CBD SEO Services | Dispensary & Hemp Optimization',
          description:
            'Specialized cannabis SEO strategies that navigate advertising restrictions and drive compliant organic growth. Expert SEO for dispensaries, CBD brands, and cannabis companies.',
          url: 'https://theprojectseo.com/industries/cannabis',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Regulatory compliance, World Wide Web, Cannabidiol, Backlink',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Regulatory compliance',
              sameAs: 'https://www.wikidata.org/wiki/Q626741',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            },
            {
              '@type': 'Thing',
              name: 'Cannabidiol',
              sameAs: 'https://www.wikidata.org/wiki/Q422917',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            }
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ChallengesSection />
      <ServicesSection />
      <ProcessSection />
      <TechnicalSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingContextSection />
      <FAQSection />
      <RelatedIndustriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
