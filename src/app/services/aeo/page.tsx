import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { CTAFormSection } from '@/components/service-page-sections'
import { FAQAccordion } from '@/components/faq-accordion'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import Link from 'next/link'
import {
  MessageSquare,
  Sparkles,
  Cpu,
  FileText,
  BarChart3,
  CheckCircle,
  Rocket,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AEO Services | Answer Engine Optimization | TheProjectSEO',
  description:
    'Answer Engine Optimization (AEO) services to dominate AI search results. Optimize for ChatGPT, Gemini, Claude and other AI-powered search engines.',
  keywords:
    'AEO, Answer Engine Optimization, AI search optimization, ChatGPT SEO, Gemini optimization, Claude search, AI search results',
  alternates: {
    canonical: '/services/aeo',
  },
}

const aiEngines = [
  {
    name: 'ChatGPT',
    description: "OpenAI&apos;s conversational AI with massive search influence",
    marketShare: '60%',
  },
  {
    name: 'Google Gemini',
    description: "Google&apos;s AI integrated into search results",
    marketShare: '25%',
  },
  {
    name: 'Claude',
    description: "Anthropic&apos;s AI assistant gaining rapid adoption",
    marketShare: '8%',
  },
  {
    name: 'Perplexity',
    description: 'AI-powered search engine with growing user base',
    marketShare: '7%',
  },
]

const aeoFeatures = [
  {
    name: 'AI Search Optimization',
    description:
      'Optimize your content to appear in AI-generated answers across ChatGPT, Gemini, Claude, and other AI search engines.',
    icon: Sparkles,
    benefits: [
      'AI answer snippet optimization',
      'Conversational query targeting',
      'AI-friendly content structure',
      'Answer engine ranking factors',
    ],
  },
  {
    name: 'Conversational Content Strategy',
    description:
      'Create content that excels in natural language queries and conversational AI interactions.',
    icon: MessageSquare,
    benefits: [
      'Natural language processing optimization',
      'Question-answer content formats',
      'Conversational keyword research',
      'Voice search optimization',
    ],
  },
  {
    name: 'Knowledge Graph Enhancement',
    description:
      'Structure your content to feed AI knowledge bases and appear in authoritative AI responses.',
    icon: Cpu,
    benefits: [
      'Structured data implementation',
      'Entity relationship mapping',
      'Knowledge panel optimization',
      'AI source attribution',
    ],
  },
  {
    name: 'Semantic Content Optimization',
    description:
      'Advanced semantic SEO that helps AI engines understand and recommend your content.',
    icon: FileText,
    benefits: [
      'Semantic keyword clustering',
      'Topic authority building',
      'Context-aware content creation',
      'AI comprehension optimization',
    ],
  },
  {
    name: 'Answer Engine Analytics',
    description:
      'Track your performance across AI search platforms with specialized AEO analytics and reporting.',
    icon: BarChart3,
    benefits: [
      'AI search performance tracking',
      'Answer position monitoring',
      'Conversational query analysis',
      'ROI measurement for AEO',
    ],
  },
  {
    name: 'Future-Proof Strategy',
    description:
      'Stay ahead of the AI search evolution with strategies that adapt to new AI engines and features.',
    icon: Rocket,
    benefits: [
      'Emerging AI platform preparation',
      'Algorithm update adaptation',
      'Next-gen search optimization',
      'Competitive advantage building',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'AI Search Audit',
    description:
      'We analyze your current visibility across all major AI search engines and identify gaps and opportunities.',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'Our team builds a custom AEO roadmap tailored to your industry, audience, and competitive landscape.',
  },
  {
    number: '03',
    title: 'Content Optimization',
    description:
      'We restructure and create content designed to be surfaced by AI answer engines as authoritative responses.',
  },
  {
    number: '04',
    title: 'Monitoring & Iteration',
    description:
      'Continuous tracking across AI platforms with regular refinements to maintain and improve answer engine positions.',
  },
]

const caseStudy = {
  client: 'B2B Enterprise Software Company',
  industry: 'Cloud Infrastructure',
  challenge:
    'A mid-market B2B software company specializing in cloud infrastructure management was virtually invisible in AI-generated search results. Despite strong traditional SEO rankings, their content was never cited by ChatGPT, Gemini, or Perplexity when users asked about cloud management solutions. Competitors were being recommended in AI answers while their brand was absent from the conversation entirely. With AI search adoption accelerating among their target audience of CTOs and DevOps leaders, they were losing mindshare and pipeline to competitors who appeared in every AI-generated recommendation.',
  solution:
    'We conducted a comprehensive AI search audit to understand exactly how each major AI engine sourced and synthesized answers in the cloud infrastructure space. Our team restructured their entire content library using entity-based architecture and semantic markup that AI models could parse authoritatively. We created a network of 60+ deeply researched, question-answer formatted articles targeting the exact conversational queries their buyers were asking AI assistants. We implemented structured data, enhanced their knowledge graph presence, and built authoritative backlinks from sources that AI models heavily weight in their training and retrieval pipelines.',
  results: [
    { metric: 'AI Citation Rate', improvement: '0 to 47%', timeframe: 'Cited in nearly half of relevant AI answers' },
    { metric: 'Brand Mentions in AI', improvement: '+1,200%', timeframe: 'Across ChatGPT, Gemini, and Perplexity' },
    { metric: 'Organic Visibility', improvement: '+310%', timeframe: 'Combined traditional and AI search' },
    { metric: 'Lead Quality Score', improvement: '+85%', timeframe: 'AI-sourced leads vs. paid channels' },
  ],
}

const aeoPackages = [
  {
    name: 'AEO Starter',
    price: '$2,200',
    period: '/month',
    description:
      'Essential answer engine optimization for growing businesses',
    features: [
      'AI search audit & analysis',
      'Basic conversational content optimization',
      'Core structured data implementation',
      'Monthly AEO performance reports',
      'Optimization for 2 AI engines',
    ],
  },
  {
    name: 'AEO Professional',
    price: '$3,997',
    period: '/month',
    description:
      'Comprehensive answer engine optimization for established companies',
    features: [
      'Everything in AEO Starter',
      'Advanced conversational keyword research',
      'Knowledge graph optimization',
      'Multi-platform AI search tracking',
      'Optimization for all major AI engines',
      'Dedicated AEO specialist',
    ],
    featured: true,
  },
  {
    name: 'AEO Enterprise',
    price: '$7,997',
    period: '/month',
    description:
      'Full-scale answer engine domination for industry leaders',
    features: [
      'Everything in AEO Professional',
      'Custom AI search strategies',
      'Advanced semantic content creation',
      'Priority algorithm update support',
      'Custom AEO tool development',
      'White-glove implementation',
    ],
  },
]

const faqItems = [
  {
    question: 'What is Answer Engine Optimization (AEO)?',
    answer:
      'Answer Engine Optimization is the practice of optimizing your content to appear in AI-generated answers from platforms like ChatGPT, Google Gemini, Claude, and Perplexity. Unlike traditional SEO which focuses on ranking in search engine results pages, AEO ensures your brand and content are cited, referenced, and recommended when users ask AI assistants questions relevant to your business.',
  },
  {
    question: 'How is AEO different from traditional SEO?',
    answer:
      'Traditional SEO focuses on ranking web pages in search engine results. AEO focuses on getting your content cited in AI-generated answers. AI engines don&apos;t just crawl and index pages; they synthesize information from multiple sources to create comprehensive answers. AEO requires structured content, entity-based architecture, authoritative sourcing, and semantic optimization that goes beyond what traditional SEO demands.',
  },
  {
    question: 'How long does it take to see AEO results?',
    answer:
      'Most clients begin seeing improvements in AI citations within 2-4 months, with significant gains by month 6. AI engines update their knowledge bases on different schedules, so results vary by platform. ChatGPT with browsing and Perplexity show changes faster since they pull real-time data, while other AI models may take longer to reflect content improvements.',
  },
  {
    question: 'Can you guarantee my brand will appear in AI answers?',
    answer:
      'No ethical AEO provider can guarantee specific AI citations, just as no SEO agency can guarantee #1 rankings. What we can guarantee is a rigorous, data-driven approach that dramatically increases your probability of being cited. Our clients typically see AI citation rates improve from near-zero to 30-50% of relevant queries within 6 months.',
  },
  {
    question: 'Which AI search engines do you optimize for?',
    answer:
      'We optimize for all major AI search platforms including ChatGPT (with browsing), Google Gemini (including AI Overviews), Claude, Perplexity, Microsoft Copilot, and emerging AI search tools. Our strategies are designed to be platform-agnostic, focusing on the content quality and structural signals that all AI engines value.',
  },
  {
    question: 'Do I still need traditional SEO if I invest in AEO?',
    answer:
      'Yes. AEO and traditional SEO are complementary, not competing strategies. Strong traditional SEO signals like domain authority, backlinks, and topical relevance also influence how AI engines evaluate and cite your content. We recommend maintaining your SEO foundation while layering AEO strategies on top for maximum visibility across both traditional and AI-powered search.',
  },
]

const relatedServices = [
  { name: 'SEO Services', href: '/services/seo' },
  { name: 'Content Marketing', href: '/services/content' },
  { name: 'Web Development', href: '/services/web' },
  { name: 'SEO Consulting', href: '/services/seo-consulting' },
  { name: 'All Services', href: '/services' },
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
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Answer Engine Optimization
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Get your brand featured in <em className="text-accent italic">every AI answer</em>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone">
              Dominate AI search results with Answer Engine Optimization (AEO).
              Get your content featured in ChatGPT, Google Gemini, Claude, and
              other AI-powered search engines.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="/contact">Get AEO Strategy</Button>
              <Button variant="ghost" href="#ai-engines">
                See AI Coverage
              </Button>
            </div>
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
    { value: '2.1B', label: 'Monthly AI search queries' },
    { value: '340%', label: 'Growth in AI search usage' },
    { value: '65%', label: 'Users prefer AI answers' },
    { value: '70%', label: 'Queries now involve AI' },
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
/*  Section 3: AI Engines (unique to AEO)                                      */
/* -------------------------------------------------------------------------- */

function AIEnginesSection() {
  return (
    <div id="ai-engines">
      <Container className="py-24">
        <div className="text-center mb-16">
          <Subheading>AI Search Landscape</Subheading>
          <Heading as="h2" className="mt-2">
            The future of search is already here.
          </Heading>
          <Lead className="mt-6 max-w-3xl mx-auto">
            AI-powered search engines are rapidly changing how people find
            information. Over 70% of search queries now involve AI-generated
            answers.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {aiEngines.map((engine, index) => (
            <div
              key={index}
              className="rounded-none bg-white p-6 border border-border-strong text-center"
            >
              <div className="inline-block px-3 py-1 rounded-none bg-accent-soft text-accent text-sm font-medium mb-4">
                {engine.marketShare} market share
              </div>
              <h3 className="text-lg font-semibold text-ink mb-2">
                {engine.name}
              </h3>
              <p className="text-slate text-sm">{engine.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 4: AEO Features / Services                                         */
/* -------------------------------------------------------------------------- */

function FeaturesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <Subheading className="text-center">AEO Services</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Optimize for the next generation of search.
        </Heading>
        <Lead className="mt-6 text-center max-w-3xl mx-auto">
          Our Answer Engine Optimization services ensure your content appears
          prominently in AI-generated search results across all major AI
          platforms.
        </Lead>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {aeoFeatures.map((feature, index) => (
            <div
              key={index}
              className="rounded-none bg-white p-8 border border-border-strong"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center">
                  <feature.icon className="size-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-ink">
                  {feature.name}
                </h3>
              </div>

              <p className="text-slate mb-6">{feature.description}</p>

              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li
                    key={benefitIndex}
                    className="flex items-start gap-3 text-sm text-stone"
                  >
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {benefit}
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
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Our Process</Subheading>
        <Heading as="h2" className="mt-2">
          How we optimize for answer engines.
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
            <h3 className="font-heading text-xl font-semibold text-ink mb-3">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Case Study (Dark Section)                                       */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>AEO Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we made a B2B brand the top AI-recommended solution.
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
/*  Section 7: Packages / Pricing                                              */
/* -------------------------------------------------------------------------- */

function PackagesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <Subheading className="text-center">AEO Packages</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Choose your answer engine optimization level.
        </Heading>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {aeoPackages.map((pkg, index) => (
            <div
              key={index}
              className={`rounded-none bg-white p-8 border ${
                pkg.featured
                  ? 'relative border-2 border-accent transform scale-105'
                  : 'border-border-strong'
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-accent text-white px-4 py-2 rounded-none text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-ink mb-2">
                  {pkg.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-ink">
                    {pkg.price}
                  </span>
                  <span className="text-ash">{pkg.period}</span>
                </div>
                <p className="text-slate mt-4">{pkg.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-3 text-sm text-stone"
                  >
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href="/contact" className="w-full">
                Get Started
              </Button>
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
            &ldquo;Before working with TheProjectSEO, our brand didn&apos;t exist in AI search
            results. Within six months of implementing their AEO strategy, we went from zero AI
            citations to being recommended by ChatGPT and Gemini in nearly half of relevant queries.
            The quality of leads coming through AI-assisted search has been remarkably higher than
            any other channel we&apos;ve invested in.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">David Mercer</p>
            <p className="text-sm text-slate mt-1">Head of Growth, Stratos Cloud Solutions</p>
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
          title="AEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Related Services                                               */
/* -------------------------------------------------------------------------- */

function RelatedServicesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Explore More Services</Subheading>
          <Heading as="h2" className="mt-2">
            Complementary services to accelerate growth.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-5">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-paper p-4 text-center text-sm font-heading font-medium text-stone transition-colors hover:text-accent hover:bg-cream"
            >
              {service.name}
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

export default function AEOServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Answer Engine Optimization Services',
          description:
            'Answer Engine Optimization (AEO) services to dominate AI search results. Optimize for ChatGPT, Gemini, Claude and other AI-powered search engines.',
          url: 'https://theprojectseo.com/services/aeo',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          keywords: 'Search engine optimization, Artificial intelligence, ChatGPT, Search engine results page, Information retrieval',
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
              name: 'ChatGPT',
              sameAs: 'https://www.wikidata.org/wiki/Q115564437',
            },
          ],
        }}
      />
      <Header />
      <StatsBar />
      <AIEnginesSection />
      <FeaturesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we optimize for answer engines"
        steps={processSteps}
        visual={<ServiceProcessVisual type="optimization" />}
        visualBg="ink"
      />
      <CaseStudySection />
      <PackagesSection />
      <TestimonialSection />
      <FAQSection />
      <RelatedServicesSection />
      <CTAFormSection
        subheading="Ready for AI Search?"
        heading="Dominate answer engines before your competitors do."
        lead="AI search is growing 340% year-over-year. The businesses that optimize for answer engines now will dominate the future of search. Don't get left behind."
        submitText="Start AEO Strategy"
      />
      <Footer />
    </main>
  )
}
