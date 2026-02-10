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
  ArrowPathIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'SaaS SEO Services | Drive Organic Growth for SaaS Companies | TheProjectSEO',
  description:
    'Specialized SaaS SEO strategies that reduce customer acquisition costs and drive sustainable organic growth. Expert SEO for B2B and B2C SaaS platforms.',
  alternates: {
    canonical: '/industries/saas',
  },
  openGraph: {
    title: 'SaaS SEO Services | Drive Organic Growth for SaaS Companies',
    description:
      'Specialized SaaS SEO strategies that reduce customer acquisition costs and drive sustainable organic growth. Expert SEO for B2B and B2C SaaS platforms.',
    url: '/industries/saas',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SaaS SEO Services | Drive Organic Growth for SaaS Companies',
    description:
      'Specialized SaaS SEO strategies that reduce customer acquisition costs and drive sustainable organic growth. Expert SEO for B2B and B2C SaaS platforms.',
  },
}

const challenges = [
  {
    challenge: 'Long Sales Cycles',
    description:
      'SaaS buyers conduct extensive research before committing to a subscription. The average B2B SaaS sales cycle spans 14 months, requiring content that nurtures prospects through every stage of the funnel from awareness to decision.',
    solution:
      'We build full-funnel content strategies that capture intent at every stage, from educational top-of-funnel content to comparison pages and bottom-of-funnel conversion assets.',
    icon: ArrowPathIcon,
  },
  {
    challenge: 'High Competition for Keywords',
    description:
      'SaaS verticals are saturated with well-funded competitors who invest heavily in content marketing and SEO. Ranking for core product keywords requires both technical excellence and content depth.',
    solution:
      'We identify high-intent, lower-competition keyword clusters that your competitors overlook, and build topical authority through comprehensive content hubs.',
    icon: MagnifyingGlassIcon,
  },
  {
    challenge: 'Product-Led Content Complexity',
    description:
      'Creating content that accurately represents complex software features while remaining accessible to non-technical buyers is a constant challenge. Balancing product depth with SEO requirements demands specialized expertise.',
    solution:
      'Our team creates product-led content that weaves feature benefits into search-optimized narratives, driving both rankings and product understanding.',
    icon: DocumentTextIcon,
  },
  {
    challenge: 'Churn-Aware SEO Strategy',
    description:
      'Traditional SEO focuses on acquisition, but SaaS businesses must also consider retention. Content that only attracts low-intent traffic can inflate churn rates and damage unit economics.',
    solution:
      'We align SEO strategy with your ideal customer profile, targeting keywords that attract high-LTV users and creating onboarding content that reduces churn.',
    icon: ArrowTrendingUpIcon,
  },
]

const services = [
  {
    name: 'SaaS Keyword Research',
    description:
      'Deep keyword research tailored to the SaaS buyer journey. We map keywords to funnel stages and prioritize terms that drive qualified signups and demo requests.',
    features: [
      'Funnel-stage keyword mapping and intent analysis',
      'Competitor keyword gap and overlap analysis',
      'Feature-specific and use-case keyword clusters',
      'Search volume vs. conversion potential scoring',
    ],
  },
  {
    name: 'Product-Led Content Strategy',
    description:
      'Content that positions your product as the solution. We create comparison pages, alternative pages, use-case guides, and integration content that converts.',
    features: [
      'Competitor comparison and alternative pages',
      'Use-case and workflow content creation',
      'Integration and API documentation SEO',
      'Product changelog and feature announcement optimization',
    ],
  },
  {
    name: 'Technical SaaS SEO',
    description:
      'Enterprise-grade technical SEO for SaaS platforms. We optimize app-shell architectures, dynamic rendering, and JavaScript-heavy marketing sites for crawlability.',
    features: [
      'JavaScript rendering and crawlability audits',
      'Core Web Vitals and page speed optimization',
      'International SEO and hreflang configuration',
      'Structured data for software application schema',
    ],
  },
  {
    name: 'SaaS Link Building',
    description:
      'Strategic link acquisition from SaaS directories, industry publications, and technology partners. We build authority through genuine industry relationships.',
    features: [
      'SaaS directory and marketplace submissions',
      'Guest posting on industry-leading SaaS publications',
      'Technology partnership and integration link building',
      'Digital PR for product launches and funding rounds',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'SaaS SEO Audit',
    description:
      'We conduct a comprehensive audit of your current SEO performance, analyzing your marketing site architecture, content gaps, keyword rankings, and competitive landscape. This includes a deep-dive into your technical setup, backlink profile, and conversion funnel to identify quick wins and long-term opportunities.',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'Based on audit findings, we build a tailored SaaS SEO strategy aligned with your growth targets. This includes a prioritized keyword roadmap, content calendar mapped to your buyer journey, technical optimization plan, and link building strategy with clear KPIs and timelines.',
  },
  {
    number: '03',
    title: 'Content & Optimization',
    description:
      'We execute the strategy with product-led content creation, on-page optimization, and technical improvements. Every piece of content is designed to rank, convert, and support your product narrative, from TOFU educational content to BOFU comparison and pricing pages.',
  },
  {
    number: '04',
    title: 'Scale & Iterate',
    description:
      'Using data-driven insights, we continuously refine the strategy. We scale what works, prune what doesn&apos;t, and adapt to algorithm changes and competitive shifts. Monthly reporting tracks organic signups, MRR attribution, and pipeline influence from SEO.',
  },
]

const caseStudy = {
  client: 'B2B SaaS Platform',
  industry: 'Project Management Software',
  challenge:
    'A mid-stage B2B SaaS company offering project management software was struggling to compete organically against well-established incumbents. Their marketing site was built on a JavaScript framework with poor crawlability, and their content strategy was unfocused, targeting broad keywords with high difficulty scores. Organic traffic had plateaued at 12,000 monthly sessions, with fewer than 200 organic signups per month. Their CAC from paid channels was climbing, and leadership wanted a sustainable organic growth engine to reduce reliance on paid acquisition.',
  solution:
    'We rebuilt their technical SEO foundation by implementing server-side rendering for critical pages, fixing crawl budget waste from dynamic URLs, and deploying structured data across the site. Our content strategy centered on product-led growth: we created 45 comparison pages targeting "vs" and "alternative to" keywords, 30 use-case guides mapped to high-intent search queries, and a comprehensive resource hub covering project management methodologies. We also launched a strategic link building campaign targeting SaaS directories, technology publications, and integration partners.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+480%', timeframe: '12 months' },
    { metric: 'Keywords in Top 10', improvement: '200+', timeframe: 'From 34 to 234' },
    { metric: 'Organic Signups', improvement: '+320%', timeframe: 'Monthly free trials' },
    { metric: 'Customer Acquisition Cost', improvement: '-62%', timeframe: 'Organic vs. paid' },
  ],
}

const keywordCategories = [
  {
    category: 'Core SaaS Terms',
    keywords: ['project management software', 'CRM platform for startups', 'team collaboration tool', 'workflow automation SaaS'],
  },
  {
    category: 'Feature Keywords',
    keywords: ['Gantt chart software', 'automated invoicing tool', 'real-time analytics dashboard', 'API integration platform'],
  },
  {
    category: 'Comparison Keywords',
    keywords: ['Asana vs Monday', 'best Salesforce alternatives', 'HubSpot competitor comparison', 'Slack alternatives for teams'],
  },
  {
    category: 'Technical SaaS',
    keywords: ['SSO authentication software', 'SOC 2 compliant SaaS', 'enterprise API management', 'cloud infrastructure monitoring'],
  },
  {
    category: 'Business SaaS',
    keywords: ['SaaS pricing strategy', 'reduce SaaS churn rate', 'SaaS onboarding best practices', 'B2B SaaS marketing strategy'],
  },
  {
    category: 'Long-tail SaaS',
    keywords: ['best project management tool for remote teams', 'affordable CRM for small business', 'how to choose HR software', 'SaaS SEO agency for startups'],
  },
]

const faqItems = [
  {
    question: 'How long does it take to see results from SaaS SEO?',
    answer:
      'Most SaaS companies begin seeing measurable improvements in organic traffic within 3-4 months, with significant gains in signups and pipeline influence by month 6-8. SaaS SEO is a compounding channel: the content and authority you build today continues generating returns for years. We focus on quick wins early, such as optimizing existing high-potential pages, while building toward long-term dominance.',
  },
  {
    question: 'How do you measure SEO success for SaaS companies?',
    answer:
      'We go beyond vanity metrics like raw traffic. Our SaaS SEO reporting tracks organic signups, free trial conversions, demo requests, and pipeline attribution. We integrate with your analytics and CRM to measure MRR influenced by organic search, customer acquisition cost reduction, and the quality of organic leads compared to paid channels.',
  },
  {
    question: 'Do you work with early-stage SaaS startups or only established companies?',
    answer:
      'We work with SaaS companies at every stage, from seed-funded startups building their first content engine to Series C+ companies looking to scale organic as a primary growth channel. Our strategies adapt to your budget and growth stage. Early-stage companies benefit from our focused approach that prioritizes high-intent, lower-competition keywords for faster wins.',
  },
  {
    question: 'How does SaaS SEO differ from traditional SEO?',
    answer:
      'SaaS SEO requires understanding subscription economics, product-led growth, and the complex B2B buyer journey. Unlike traditional SEO, we optimize for signups and trial activations rather than just traffic. We create product-led content like comparison pages and use-case guides, optimize for multi-touch attribution across long sales cycles, and align content with specific ICP segments.',
  },
  {
    question: 'What types of content do you create for SaaS companies?',
    answer:
      'Our SaaS content strategy includes competitor comparison and alternative pages, use-case and workflow guides, feature-focused landing pages, integration documentation, industry-specific solution pages, educational blog content, and gated resources like templates and calculators. Every piece is designed to rank organically and drive qualified product interest.',
  },
  {
    question: 'Can you work alongside our existing marketing team?',
    answer:
      'Absolutely. We frequently embed alongside in-house marketing, product marketing, and content teams. We can own the full SEO strategy or act as a specialized extension of your team, handling keyword research, technical SEO, and content strategy while your team manages execution. We integrate with your existing workflows, tools, and reporting cadences.',
  },
  {
    question: 'How do I do keyword research for a SaaS company?',
    answer:
      'SaaS keyword research requires understanding both commercial intent ("best project management software") and technical queries ("how to integrate CRM API"). Use tools like Ahrefs, SEMrush, and Google Keyword Planner to identify high-intent keywords with manageable competition. Focus on product-specific keywords that signal purchase intent, comparison keywords like "vs" and "alternative to", and use-case queries your target customers search for.',
  },
  {
    question: 'What are backlinks and why do they matter for SaaS SEO?',
    answer:
      'Backlinks are links from other websites pointing to your SaaS platform. They signal authority and trustworthiness to search engines like Google. For SaaS companies, backlinks from authoritative tech publications, SaaS review sites, and industry blogs dramatically improve domain authority and rankings. Quality matters more than quantity—one link from TechCrunch or SaaS Mag is worth hundreds of low-quality directory links. Use Ahrefs or Moz to analyze your backlink profile.',
  },
  {
    question: 'How important are Core Web Vitals for SaaS applications?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) are Google ranking factors that measure page speed and user experience. SaaS platforms with heavy JavaScript, interactive dashboards, or complex features must optimize aggressively. Poor Core Web Vitals lead to higher bounce rates, lower rankings, and lost conversions. We use Google PageSpeed Insights and GTmetrix to achieve "Good" ratings across all metrics, ensuring your marketing site loads fast and converts visitors into trial signups.',
  },
  {
    question: 'Should B2B SaaS companies invest in local SEO?',
    answer:
      'If your B2B SaaS company has physical offices, offers in-person onboarding, or targets specific geographic markets, local SEO is critical. Optimize your Google Business Profile, build local citations (NAP consistency), and create location-specific content. Local SEO helps SaaS companies appear in "near me" searches and Google\'s local pack, especially important for SaaS consulting firms or region-specific solutions.',
  },
  {
    question: 'How do I track SEO performance and MRR attribution for my SaaS platform?',
    answer:
      'Use Google Analytics 4 to track organic traffic, user behavior, and trial signups. Google Search Console shows keyword rankings, click-through rates, and indexation status. Tools like Ahrefs and SEMrush provide competitor analysis and backlink monitoring. Set up custom events in GA4 to track SaaS-specific actions (demo requests, free trial signups, feature interactions) and tie them back to organic search channels. Integrate with your CRM to measure MRR influenced by SEO and calculate true organic channel ROI.',
  },
]

const relatedIndustries = [
  { name: 'AI & Machine Learning', href: '/industries/ai' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Legal', href: '/industries/legal' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Header / Hero                                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            SaaS Industry
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            SEO strategies that scale your{' '}
            <em className="text-accent italic">SaaS growth</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Reduce customer acquisition costs and build a compounding organic growth engine. We help SaaS companies rank for high-intent keywords that drive signups, demos, and pipeline.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get SaaS SEO Strategy</Button>
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
    { value: '$232B', label: 'Global SaaS market size' },
    { value: '72%', label: 'SaaS companies investing in SEO' },
    { value: '14 mo', label: 'Average SaaS sales cycle' },
    { value: '340%', label: 'Average ROI from SaaS SEO' },
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
/*  Section 3: Industry SEO Challenges                                         */
/* -------------------------------------------------------------------------- */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>SaaS SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why SaaS companies need specialized SEO.
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
          <Subheading>SaaS SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for SaaS growth.
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
            How we drive SaaS SEO results.
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
/*  Section 6: SaaS Technical SEO Foundations                                  */
/* -------------------------------------------------------------------------- */

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            SaaS Technical SEO Foundations
          </Heading>
          <Lead className="mt-6">
            SaaS platforms need rock-solid technical foundations. We optimize Core Web Vitals, implement schema markup, build high-quality backlinks, and set up advanced tracking to measure MRR attribution and trial-to-paid conversion from organic search.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals for SaaS Apps</h3>
            <p className="text-slate mb-4">
              Page speed directly impacts rankings, trial signups, and user retention. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your SaaS marketing site and app load fast on all devices, reducing bounce rates and improving conversion.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">JavaScript bundle optimization for SaaS dashboards</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Server-side rendering for marketing pages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">CDN implementation and aggressive caching</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">SaaS Schema Markup</h3>
            <p className="text-slate mb-4">
              Structured data from schema.org is critical for SaaS visibility. We implement JSON-LD markup for SoftwareApplication, FAQPage, and Offer schemas. Proper E-E-A-T signals help Google understand your product, pricing, and value proposition, enabling rich snippets, knowledge panels, and better visibility in AI search tools like ChatGPT and Perplexity.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">SoftwareApplication schema for product pages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQPage and HowTo markup for help content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Offer schema for pricing and trial pages</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">SaaS Link Building</h3>
            <p className="text-slate mb-4">
              Quality backlinks from tech blogs, SaaS directories, and industry publications build domain authority and referral traffic. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute white-hat link acquisition campaigns that scale your organic visibility.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest posting on SaaS and tech blogs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">SaaS directory and marketplace submissions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR for product launches and funding</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">SaaS Analytics & MRR Tracking</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4 and Google Search Console to monitor keyword rankings, organic traffic growth, trial-to-paid conversion rates, and MRR attribution from SEO. Track demo requests, free trial signups, and customer lifetime value with Screaming Frog audits and custom GA4 dashboards.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">GA4 event tracking for trial signups and demos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console performance by funnel stage</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">MRR attribution and trial-to-paid conversion tracking</span>
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
          <Subheading dark>SaaS Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a B2B SaaS platform achieve breakthrough organic growth.
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
          <Subheading>SaaS Keyword Examples</Subheading>
          <Heading as="h2" className="mt-2">
            The types of keywords we target for SaaS companies.
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
            &ldquo;TheProjectSEO transformed our organic channel from an afterthought into our
            primary growth engine. Within 8 months, organic signups surpassed paid acquisition,
            and our CAC dropped by over 60%. They genuinely understand SaaS metrics and build
            strategies around the numbers that matter: MRR, LTV, and pipeline velocity.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Sarah Chen</p>
            <p className="text-sm text-slate mt-1">VP of Marketing, CloudSync Technologies</p>
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
            <Subheading>SaaS SEO Investment</Subheading>
            <Heading as="h2" className="mt-2">
              Built for SaaS unit economics.
            </Heading>
          </div>

          <p className="text-sm leading-relaxed text-slate text-center mb-8">
            Our SaaS SEO engagements are structured to deliver measurable ROI against your customer
            acquisition cost targets. We price based on scope and growth stage, ensuring the
            investment makes sense within your SaaS financial model.
          </p>

          <div className="border border-border-strong rounded-none p-8 mb-8">
            <p className="font-heading text-lg font-semibold text-ink mb-4">
              Investment starts at $1,997/month
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Comprehensive SaaS keyword research, content strategy, and monthly content creation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Technical SEO audits, Core Web Vitals optimization, and structured data implementation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Monthly reporting with organic signup tracking, MRR attribution, and CAC analysis
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

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="SaaS SEO frequently asked questions" items={faqItems} />
    </>
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


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function SaaSSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'SaaS SEO Services',
          description:
            'Specialized SaaS SEO strategies that reduce customer acquisition costs and drive sustainable organic growth. Expert SEO for B2B and B2C SaaS platforms.',
          url: 'https://theprojectseo.com/industries/saas',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Software as a service, Backlink, Marketing, Google PageSpeed Tools',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Software as a service',
              sameAs: 'https://www.wikidata.org/wiki/Q1254596',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            },
            {
              '@type': 'Thing',
              name: 'Marketing',
              sameAs: 'https://www.wikidata.org/wiki/Q39809',
            },
            {
              '@type': 'Thing',
              name: 'Google PageSpeed Tools',
              sameAs: 'https://www.wikidata.org/wiki/Q1537678',
            }
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ChallengesSection />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we drive SaaS SEO results"
        steps={processSteps}
      />
      <TechnicalSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingContextSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection subheading="Ready to Scale Your SaaS with SEO?" heading="Let's build your SaaS SEO growth engine." lead="Partner with SEO experts who understand SaaS metrics, product-led growth, and the subscription business model. We'll help you turn organic search into your most efficient acquisition channel." submitText="Get SaaS SEO Strategy" />
      <Footer />
    </main>
  )
}
