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
import { IndustryProcessVisual } from '@/components/industry-process-visual'
import { CTAFormSection } from '@/components/service-page-sections'
import {
  CpuChipIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI & Machine Learning SEO Services | Drive Organic Growth for AI Companies | TheProjectSEO',
  description:
    'Specialized SEO strategies for AI and machine learning companies. Reduce customer acquisition costs and drive sustainable organic growth for AI startups, ML platforms, and tech innovators.',
  alternates: {
    canonical: '/industries/ai',
  },
  openGraph: {
    title: 'AI & Machine Learning SEO Services | Drive Organic Growth for AI Companies',
    description:
      'Specialized SEO strategies for AI and machine learning companies. Reduce customer acquisition costs and drive sustainable organic growth for AI startups, ML platforms, and tech innovators.',
    url: '/industries/ai',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Machine Learning SEO Services | Drive Organic Growth for AI Companies',
    description:
      'Specialized SEO strategies for AI and machine learning companies. Reduce customer acquisition costs and drive sustainable organic growth for AI startups, ML platforms, and tech innovators.',
  },
}

const challenges = [
  {
    challenge: 'Technical Complexity',
    description:
      'AI and machine learning concepts are inherently complex, spanning deep learning architectures, model training pipelines, and inference optimization. Creating content that resonates with both technical buyers evaluating your API documentation and C-suite executives seeking strategic AI adoption requires a layered approach that most generalist SEO agencies simply cannot deliver.',
    solution:
      'We create multi-layered content strategies that address different technical knowledge levels, from developer-focused tutorials and API guides to executive-friendly ROI narratives and industry application overviews.',
    icon: CpuChipIcon,
  },
  {
    challenge: 'Rapidly Evolving Field',
    description:
      'The AI landscape shifts faster than any other technology sector. New model architectures, regulatory frameworks, and competitive products emerge weekly. Content published three months ago can already feel outdated, and search engines increasingly favor freshness signals for AI-related queries.',
    solution:
      'Our content refresh strategies keep your site updated with the latest AI developments. We implement evergreen content frameworks with modular sections that can be rapidly updated as the field evolves.',
    icon: RocketLaunchIcon,
  },
  {
    challenge: 'Competitive Keywords',
    description:
      'The AI gold rush has flooded search results with well-funded competitors, major tech publications, and academic institutions all competing for the same high-value keywords. Ranking for terms like "machine learning platform" or "AI analytics" requires both domain authority and highly specialized content.',
    solution:
      'We identify high-intent, lower-competition keyword clusters that your competitors overlook, such as industry-specific AI applications, technical integration queries, and emerging capability searches that signal strong purchase intent.',
    icon: ChartBarIcon,
  },
  {
    challenge: 'Trust & Credibility',
    description:
      'AI buyers are inherently skeptical. With widespread concerns about AI hype, hallucinations, and ethical implications, potential customers need extensive proof points before trusting an AI solution with their data and workflows. Building E-E-A-T signals is critical for ranking and converting.',
    solution:
      'We develop thought leadership content, technical case studies, and transparent methodology pages that build credibility with both search engines and discerning AI buyers.',
    icon: ShieldCheckIcon,
  },
]

const services = [
  {
    name: 'AI Keyword Research',
    description:
      'Deep keyword research tailored to the AI buyer journey. We map keywords across technical, commercial, and educational intent to capture demand at every stage of the funnel.',
    features: [
      'AI & ML-specific keyword mapping and intent analysis',
      'Technical vs. commercial keyword segmentation',
      'Emerging technology and trending topic identification',
      'Competitor AI keyword gap and overlap analysis',
    ],
  },
  {
    name: 'Technical Content Creation',
    description:
      'Expert content that explains complex AI concepts in accessible ways while maintaining technical accuracy. We implement schema.org structured data and create content that ranks, educates, and converts technical audiences.',
    features: [
      'AI technology explainer articles and deep-dives',
      'Use case and real-world application guides',
      'Technical documentation and API guide optimization',
      'Research paper summaries and trend analysis pieces',
    ],
  },
  {
    name: 'Thought Leadership SEO',
    description:
      'Establish your AI company as an industry authority through strategic content that demonstrates E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness), builds trust, and captures high-value informational queries.',
    features: [
      'Industry trend analysis and prediction content',
      'AI ethics, safety, and responsibility articles',
      'Expert interview and original research content',
      'Conference talk and whitepaper SEO amplification',
    ],
  },
  {
    name: 'Product SEO for AI Tools',
    description:
      'Optimize your AI products and platforms for maximum search visibility. We create product-led content that weaves feature benefits into search-optimized narratives.',
    features: [
      'AI tool and platform landing page optimization',
      'API documentation and developer portal SEO',
      'Product comparison and alternative pages',
      'Integration guide and ecosystem content optimization',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'AI SEO Audit',
    description:
      'We conduct a comprehensive audit of your current SEO performance, analyzing your marketing site architecture, technical content gaps, keyword rankings, and competitive landscape. We use Screaming Frog to crawl your site and identify technical issues. This includes a deep-dive into your technical setup, backlink profile, developer documentation SEO, and conversion funnel to identify quick wins and long-term opportunities specific to the AI industry.',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'Based on audit findings, we build a tailored AI SEO strategy aligned with your growth targets. Our keyword research leverages SEMrush, Ahrefs, and Moz to find opportunities. This includes a prioritized keyword roadmap spanning technical and commercial intent, a content calendar mapped to your buyer journey, technical optimization plan for JS-heavy platforms, and link building strategy targeting AI publications and developer communities.',
  },
  {
    number: '03',
    title: 'Content & Optimization',
    description:
      'We execute the strategy with technically accurate content creation, on-page optimization, and site architecture improvements. Every piece of content is designed to rank, convert, and demonstrate your AI expertise, from educational explainers and use-case guides to comparison pages and developer documentation.',
  },
  {
    number: '04',
    title: 'Scale & Iterate',
    description:
      'Using data-driven insights from Google Analytics and Search Console, we continuously refine the strategy. We scale what works, refresh content as AI evolves, and adapt to algorithm changes and competitive shifts. Monthly reporting tracks organic signups, developer engagement, pipeline influence, and revenue attribution from SEO.',
  },
]

const caseStudy = {
  client: 'AI Analytics Platform',
  industry: 'Machine Learning SaaS',
  challenge:
    'A Series A AI analytics platform offering predictive modeling and automated insights was struggling to compete organically against well-established data science incumbents and major cloud providers. Their marketing site was built on a modern JavaScript framework with poor crawlability, and their content strategy was unfocused, targeting broad keywords like "machine learning" and "AI analytics" with impossibly high difficulty scores. Organic traffic had stalled at 8,000 monthly sessions, with fewer than 120 organic developer signups per month. Their cost per acquisition from paid channels was climbing past $180, and leadership needed a sustainable organic growth engine to extend their runway and reduce reliance on expensive paid acquisition.',
  solution:
    'We rebuilt their technical SEO foundation by implementing server-side rendering for all critical marketing and documentation pages, eliminating crawl budget waste from dynamic playground URLs, and deploying structured data across the site including SoftwareApplication and TechArticle schemas. Our content strategy centered on a product-led, developer-first approach: we created 35 use-case guides targeting specific industry applications of their ML platform, 25 technical tutorials showing integration patterns with popular data stacks, and 20 comparison pages targeting "vs" and "alternative to" queries against established competitors. We also launched a strategic link building campaign targeting AI-focused publications, developer communities, data science blogs, and technology partnership directories to rapidly build domain authority in the machine learning space.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+520%', timeframe: '8 months' },
    { metric: 'AI Keywords in Top 10', improvement: '150+', timeframe: 'From 22 to 172' },
    { metric: 'Developer Signups', improvement: '+280%', timeframe: 'Monthly from organic' },
    { metric: 'Content Engagement', improvement: '+340%', timeframe: 'Average time on page' },
  ],
}

const keywordCategories = [
  {
    category: 'Core AI Terms',
    keywords: ['machine learning platform', 'artificial intelligence software', 'AI development tools', 'neural network solutions'],
  },
  {
    category: 'AI Applications',
    keywords: ['computer vision API', 'natural language processing', 'predictive analytics platform', 'automated decision making'],
  },
  {
    category: 'Industry-Specific',
    keywords: ['AI for healthcare', 'fintech machine learning', 'retail AI solutions', 'manufacturing automation'],
  },
  {
    category: 'Technical Terms',
    keywords: ['deep learning framework', 'model deployment pipeline', 'AI model training', 'MLOps platform'],
  },
  {
    category: 'Business Focused',
    keywords: ['AI ROI calculator', 'enterprise AI adoption', 'AI implementation strategy', 'AI consulting services'],
  },
  {
    category: 'Emerging Tech',
    keywords: ['generative AI platform', 'conversational AI tools', 'edge AI computing', 'responsible AI practices'],
  },
]

const faqItems = [
  {
    question: 'How does SEO work for AI companies?',
    answer:
      'SEO for AI companies involves targeting the specific search queries that technical buyers, developers, and enterprise decision-makers use when evaluating AI solutions. This includes optimizing for technical terminology, use-case queries, comparison searches, and integration-related keywords. We create content that demonstrates deep technical expertise while remaining accessible, build authority through developer community engagement and AI publication backlinks, and optimize your site architecture for the JavaScript-heavy frameworks common in AI company marketing sites.',
  },
  {
    question: 'What keywords should AI startups target?',
    answer:
      'AI startups should focus on a mix of high-intent product keywords, use-case queries, and long-tail technical terms. Rather than competing for broad terms like "artificial intelligence" or "machine learning," we identify niche opportunities such as industry-specific AI applications, integration queries, technical comparison searches, and emerging capability keywords. These lower-competition terms attract highly qualified traffic that converts at much higher rates than generic AI searches.',
  },
  {
    question: 'How long does it take to see SEO results for an AI company?',
    answer:
      'Most AI companies begin seeing measurable improvements in organic traffic within 3-4 months, with significant gains in developer signups and pipeline influence by month 6-8. AI SEO is a compounding channel: the technical content and domain authority you build today continues generating returns for years. We focus on quick wins early, such as optimizing existing documentation and high-potential pages, while building toward long-term dominance for competitive AI keywords.',
  },
  {
    question: 'How do you create content for highly technical AI topics?',
    answer:
      'Our team combines SEO expertise with deep technical understanding of AI and machine learning concepts. We work closely with your engineering and product teams to ensure technical accuracy, then layer in SEO best practices for structure, keyword targeting, and search intent alignment. Every piece goes through both technical review and SEO optimization to ensure it ranks well and accurately represents your technology. We create tutorials, architecture deep-dives, use-case guides, and comparison content that technical audiences trust.',
  },
  {
    question: 'Can SEO help AI companies compete against larger incumbents?',
    answer:
      'Absolutely. SEO is one of the most effective channels for AI startups to compete against well-funded incumbents. While larger companies dominate broad keywords, startups can win by targeting specific use cases, emerging technology queries, and long-tail technical terms. We help AI companies build topical authority in focused niches, create superior technical content, and capture demand for new AI capabilities before larger competitors respond. Many of our AI clients outrank companies 10x their size for high-intent keywords.',
  },
  {
    question: 'Do you work with early-stage AI startups or only established companies?',
    answer:
      'We work with AI companies at every stage, from pre-seed startups building their first developer-focused content engine to growth-stage companies looking to scale organic as a primary acquisition channel. Our strategies adapt to your budget and growth stage. Early-stage AI companies benefit from our focused approach that prioritizes high-intent, lower-competition keywords and developer community content for faster wins with limited resources.',
  },
  {
    question: 'How do I do keyword research for an AI company?',
    answer:
      'AI keyword research requires understanding both commercial intent ("best AI chatbot for customer service") and technical queries ("how to implement GPT-4 API"). Use tools like Ahrefs, SEMrush, and Google Keyword Planner to identify high-intent keywords with manageable competition. Focus on long-tail keywords that signal purchase intent, emerging AI capabilities your product offers, and industry-specific use cases your target customers search for.',
  },
  {
    question: 'What are backlinks and why do they matter for AI SEO?',
    answer:
      'Backlinks are links from other websites pointing to yours. They signal authority and trustworthiness to search engines like Google. For AI companies, backlinks from authoritative tech publications, AI research sites, and industry blogs dramatically improve domain authority and rankings. Quality matters more than quantity—one link from TechCrunch or MIT\'s AI lab is worth hundreds of low-quality directory links.',
  },
  {
    question: 'How important are Core Web Vitals for AI platform SEO?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) are Google ranking factors that measure page speed and user experience. AI platforms with heavy JavaScript, interactive demos, or large models must optimize aggressively. Poor Core Web Vitals lead to higher bounce rates, lower rankings, and lost conversions. We use Google PageSpeed Insights and GTmetrix to achieve "Good" ratings across all metrics.',
  },
  {
    question: 'Should AI companies invest in local SEO?',
    answer:
      'If your AI company has a physical office or targets specific geographic markets, local SEO is critical. Optimize your Google Business Profile, build local citations (NAP consistency), and create location-specific content. Local SEO helps AI companies appear in "near me" searches and Google\'s local pack, especially important for AI consulting firms or region-specific AI solutions.',
  },
  {
    question: 'How do I track SEO performance for my AI platform?',
    answer:
      'Use Google Analytics 4 to track organic traffic, user behavior, and conversions. Google Search Console shows keyword rankings, click-through rates, and indexation status. Tools like Ahrefs and SEMrush provide competitor analysis and backlink monitoring. Set up custom events in GA4 to track AI-specific actions (demo requests, API signups, model interactions) and tie them back to organic search channels.',
  },
]

const relatedIndustries = [
  { name: 'SaaS', href: '/industries/saas' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Education', href: '/industries/education' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
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
            AI & Machine Learning
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            SEO strategies that accelerate your{' '}
            <em className="text-accent italic">AI growth</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Reduce customer acquisition costs and build a compounding organic growth engine using Google Search Console, Ahrefs, and industry-leading SEO tools to track performance and demonstrate ROI. We help AI companies rank for high-intent keywords that drive developer signups, demos, and enterprise pipeline.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get AI SEO Strategy</Button>
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
    { value: '$200B+', label: 'Global AI market size' },
    { value: '42%', label: 'Year-over-year AI growth' },
    { value: '67%', label: 'Enterprises adopting AI' },
    { value: '390%', label: 'Average ROI from AI SEO' },
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
          <Subheading>AI SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why AI companies need specialized SEO.
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
          <Subheading>AI SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for AI growth.
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

// Section 05: Process

/* -------------------------------------------------------------------------- */
/*  Section 6: Case Study + Results (Dark Section)                             */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>AI Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped an AI analytics platform achieve breakthrough organic growth.
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
/*  Section 7: Industry Keyword Examples                                       */
/* -------------------------------------------------------------------------- */

function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>AI Keyword Examples</Subheading>
          <Heading as="h2" className="mt-2">
            The types of keywords we target for AI companies.
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
            &ldquo;TheProjectSEO understood the nuances of marketing AI technology in a way no other
            agency could. They built a content strategy that spoke to both our developer audience and
            enterprise buyers simultaneously. Within 6 months, organic became our top acquisition
            channel, surpassing paid by 3x. Our developer signups tripled, and the quality of
            inbound leads improved dramatically because the content attracted people who actually
            understood what our platform does.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Dr. James Liu</p>
            <p className="text-sm text-slate mt-1">VP of Growth, NeuralPath AI</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: Pricing Context                                                 */
/* -------------------------------------------------------------------------- */

function PricingContextSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Subheading>AI SEO Investment</Subheading>
            <Heading as="h2" className="mt-2">
              Built for AI company growth metrics.
            </Heading>
          </div>

          <p className="text-sm leading-relaxed text-slate text-center mb-8">
            Our AI SEO engagements are structured to deliver measurable ROI against your customer
            acquisition cost targets. We price based on scope and growth stage, ensuring the
            investment makes sense within your financial model and runway planning.
          </p>

          <div className="border border-border-strong rounded-none p-8 mb-8">
            <p className="font-heading text-lg font-semibold text-ink mb-4">
              Investment starts at $2,497/month
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Comprehensive AI keyword research, technical content strategy, and monthly content creation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Technical SEO audits, Core Web Vitals optimization, and structured data implementation for AI platforms
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Monthly reporting with developer signup tracking, pipeline attribution, and organic channel ROI analysis
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
/*  Section 10: Testimonial Quote & FAQ                                        */
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
      <FAQDarkSection title="AI SEO frequently asked questions" items={faqItems} />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 11: Related Industries                                             */
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
/*  Technical SEO Foundations Section                                          */
/* -------------------------------------------------------------------------- */

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Core technical SEO for AI platforms
          </Heading>
          <Lead className="mt-6">
            AI companies need rock-solid technical foundations. We optimize Core Web Vitals, implement schema markup, ensure mobile-first indexing, and build crawlable site architectures that search engines love.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals Optimization</h3>
            <p className="text-slate mb-4">
              Page speed directly impacts rankings and user experience. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your AI platform loads fast on all devices.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Image optimization and lazy loading</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">JavaScript bundle optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">CDN implementation and caching</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Schema Markup & Structured Data</h3>
            <p className="text-slate mb-4">
              We implement JSON-LD schema markup from schema.org to help search engines understand your AI products, services, and features. Proper structured data enables rich snippets, knowledge panels, and better visibility in ChatGPT, Perplexity, and Google SGE.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">SoftwareApplication schema for AI products</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Organization and LocalBusiness markup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQ and HowTo rich snippets</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building & Off-Page SEO</h3>
            <p className="text-slate mb-4">
              Quality backlinks from authoritative tech publications and AI research sites build domain authority and topical relevance. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute white-hat link acquisition strategies.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest posting on AI and tech blogs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR and media outreach</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Broken link building and resource pages</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Tracking & Analytics</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4 and Google Search Console to monitor keyword rankings, organic traffic growth, conversion rates, and ROI. You&apos;ll get monthly reports showing exactly how SEO drives business growth for your AI platform.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Custom GA4 event tracking for AI features</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console performance monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Conversion attribution and ROI measurement</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 12: Industry-Specific CTA                                          */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function AIMachineLearning() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI & Machine Learning SEO Services',
          description:
            'Specialized SEO strategies for AI and machine learning companies. Reduce customer acquisition costs and drive sustainable organic growth for AI startups, ML platforms, and tech innovators.',
          url: 'https://theprojectseo.com/industries/ai',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Artificial intelligence, Information retrieval, Analytics, Backlink',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Artificial intelligence',
              sameAs: 'https://www.wikidata.org/wiki/Q11660',
            },
            {
              '@type': 'Thing',
              name: 'Information retrieval',
              sameAs: 'https://www.wikidata.org/wiki/Q816826',
            },
            {
              '@type': 'Thing',
              name: 'Analytics',
              sameAs: 'https://www.wikidata.org/wiki/Q485396',
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
      <TechnicalSEOSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we drive AI SEO results"
        steps={processSteps}
        visual={<IndustryProcessVisual type="ai" />}
        visualBg="ink"
      />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingContextSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection
        subheading="Ready to Accelerate Your AI Company's Growth?"
        heading="Let's build your AI SEO growth engine."
        lead="Partner with SEO experts who understand AI technology, developer audiences, and the unique challenges of marketing machine learning products. We'll help you turn organic search into your most efficient acquisition channel."
        submitText="Get AI SEO Strategy"
      />
      <Footer />
    </main>
  )
}
