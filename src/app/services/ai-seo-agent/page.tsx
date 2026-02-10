import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { HeroAnimation } from '@/components/hero-animation'
import { JsonLd } from '@/components/json-ld'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { ProcessSectionAnimated } from '@/components/process-section-animated'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'AI SEO Agent Services | Generative Engine Optimization (GEO) | TheProjectSEO',
  description:
    'Deploy AI SEO agents that automate content optimization, SERP analysis, keyword research, and CTR optimization at scale. Generative engine optimization (GEO) for AI search visibility. 250% average traffic increase.',
  alternates: {
    canonical: '/services/ai-seo-agent',
  },
  openGraph: {
    title: 'AI SEO Agent Services | Generative Engine Optimization | TheProjectSEO',
    description:
      'Deploy AI agents that optimize content, analyze SERPs, and build internal links automatically. Generative engine optimization for ChatGPT, Perplexity, and Google AI Overviews.',
    url: 'https://theprojectseo.com/services/ai-seo-agent',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Agent Services | TheProjectSEO',
    description:
      'Deploy AI agents that optimize content, analyze SERPs, and build internal links automatically. Generative engine optimization for AI search visibility.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Section 1: Hero                                                           */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <div className="relative overflow-hidden bg-ink py-20 sm:py-32">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="mx-auto max-w-2xl pt-16">
          <h1 className="font-heading text-5xl font-medium tracking-tight text-white sm:text-6xl">
            AI SEO Agents That Work 24/7
          </h1>
          <p className="mt-6 font-display italic text-xl/8 text-white/80">
            Deploy intelligent AI agents that optimize content, analyze SERPs, research keywords,
            optimize CTR, and build internal links automatically. SEO that scales without limits.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/contact">Deploy Your AI Agent</Button>
            <Button variant="outline" href="/pricing" className="text-white border-white/20 hover:bg-white/10">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 2: Stats Bar                                                      */
/* -------------------------------------------------------------------------- */

function StatsBar() {
  return (
    <div className="border-b border-border bg-paper">
      <Container>
        <dl className="grid grid-cols-2 gap-8 py-12 sm:grid-cols-4">
          <div className="flex flex-col">
            <dt className="font-mono text-xs uppercase tracking-[0.1em] text-ash">AI Agents Deployed</dt>
            <dd className="mt-2 font-heading text-4xl font-semibold tracking-tight text-ink">150+</dd>
          </div>
          <div className="flex flex-col">
            <dt className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Avg. Traffic Increase</dt>
            <dd className="mt-2 font-heading text-4xl font-semibold tracking-tight text-ink">250%</dd>
          </div>
          <div className="flex flex-col">
            <dt className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Content Optimized</dt>
            <dd className="mt-2 font-heading text-4xl font-semibold tracking-tight text-ink">50K+</dd>
          </div>
          <div className="flex flex-col">
            <dt className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Processing Time</dt>
            <dd className="mt-2 font-heading text-4xl font-semibold tracking-tight text-ink">&lt;5min</dd>
          </div>
        </dl>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: What Is an AI SEO Agent (definitional, GEO)                    */
/* -------------------------------------------------------------------------- */

function WhatIsSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl">
        <Subheading>What Is an AI SEO Agent?</Subheading>
        <Heading as="h2" className="mt-2">
          Autonomous AI systems that optimize your search visibility at scale.
        </Heading>
        <div className="mt-10 space-y-6 text-base/7 text-slate">
          <p>
            An AI SEO agent is an autonomous software system powered by large language models (LLMs) and natural
            language processing (NLP) that performs search engine optimization tasks without constant human
            intervention. Unlike traditional SEO tools that provide data and reports for humans to act on, AI
            agents analyze your content, make intelligent optimization decisions, and execute changes at a speed
            and scale that manual SEO cannot match.
          </p>
          <p>
            Our AI SEO agents use advanced NLP to understand content semantically, not just at the keyword level.
            They analyze your pages through embeddings-based entity extraction, identify gaps in topical coverage,
            evaluate SERP features like featured snippets, People Also Ask boxes, and AI Overviews, then generate
            data-driven optimization recommendations. The agents handle title tag optimization, meta description
            rewriting, header structure improvements, internal link building, schema markup generation, and content
            gap identification automatically.
          </p>
          <p>
            What sets our approach apart from generic AI SEO tools is the agent architecture. Rather than running
            a single prompt against your content, our agents orchestrate multi-step workflows: they analyze the
            target SERP, extract entities from top-ranking competitors, map your content against the ideal entity
            coverage, identify CTR optimization opportunities in title tags, and execute changes through your CMS
            integration. Every optimization is grounded in real SERP data and competitive analysis, not abstract
            AI suggestions.
          </p>
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 4: GEO (Generative Engine Optimization)                           */
/* -------------------------------------------------------------------------- */

function GEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading>Generative Engine Optimization (GEO)</Subheading>
          <Heading as="h2" className="mt-2">
            Optimize for ChatGPT, Perplexity, Google AI Overviews, and Claude.
          </Heading>
          <div className="mt-10 space-y-6 text-base/7 text-slate">
            <p>
              Generative engine optimization (GEO) is the next evolution of SEO. As AI-powered search engines like
              ChatGPT, Perplexity, Google AI Overviews, and Claude become primary information sources for millions
              of users, businesses need a strategy to appear in AI-generated answers, not just traditional search
              results. GEO focuses on structuring your content so that generative AI systems cite, reference, and
              recommend your brand when users ask relevant questions.
            </p>
            <p>
              Our AI SEO agents are built with GEO as a core capability. They analyze how generative engines
              synthesize answers from multiple sources, identify the entity coverage and content structure patterns
              that earn AI citations, and optimize your pages accordingly. This includes ensuring comprehensive
              entity coverage (targeting 80% or higher on our entity analysis framework), structuring content
              in clear factual statements that AI systems can extract, implementing structured data that reinforces
              entity relationships, and building topical authority through strategic internal linking clusters.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
            {[
              {
                title: 'AI Overview Optimization',
                description:
                  'Structure content with clear definitions, bulleted lists, and specific data points that Google AI Overviews extract and display. Our agents analyze which content formats trigger AI Overviews in your niche and optimize accordingly.',
              },
              {
                title: 'ChatGPT & Perplexity Visibility',
                description:
                  'Ensure your brand appears in conversational AI recommendations by building authoritative, entity-rich content that LLMs weight heavily in their retrieval and generation pipelines.',
              },
              {
                title: 'Featured Snippet Capture',
                description:
                  'Our AI agents identify featured snippet opportunities, restructure content with concise 40-60 word definition paragraphs, numbered process lists, and comparison tables that capture position zero.',
              },
              {
                title: 'Entity & Knowledge Graph',
                description:
                  'Build comprehensive entity coverage through semantic analysis, structured data deployment, and content that explicitly establishes entity relationships Google and AI systems understand.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-paper p-8">
                <h3 className="font-heading text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm/6 text-slate">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 5: What Our AI Agent Optimizes                                    */
/* -------------------------------------------------------------------------- */

function OptimizationTargets() {
  const targets = [
    {
      title: 'Title Tag Optimization',
      description: 'AI-driven A/B testing and optimization of title tags for higher click-through rates. Analyzes SERP competitors, tests variations, and identifies patterns that drive 15-25% CTR improvements.',
    },
    {
      title: 'SERP Analysis & Monitoring',
      description: 'Continuous automated SERP analysis tracking competitor movements, SERP feature changes, ranking volatility, and new opportunities across featured snippets, PAA, and AI Overviews.',
    },
    {
      title: 'Content Entity Coverage',
      description: 'Embeddings-based analysis of entity coverage compared to top-ranking pages. Identifies missing entities, subtopics, and semantic gaps that prevent your content from ranking.',
    },
    {
      title: 'Internal Linking Architecture',
      description: 'Smart internal link recommendations based on topic relevance, anchor text optimization, and link equity distribution. Builds topical clusters that reinforce authority signals.',
    },
    {
      title: 'Meta Description CTR Optimization',
      description: 'Generates and tests meta descriptions optimized for click-through rate, incorporating keywords, calls to action, and emotional triggers that outperform competitors.',
    },
    {
      title: 'Schema Markup & Structured Data',
      description: 'Automated generation of FAQ schema, Article schema, Service schema, and organization markup. Ensures your pages communicate structured information to search engines and AI systems.',
    },
    {
      title: 'Header Structure Optimization',
      description: 'Analyzes and restructures H1-H6 hierarchy for semantic clarity, keyword targeting, and improved crawlability. Ensures headers match search intent and support content hierarchy.',
    },
    {
      title: 'Content Gap Identification',
      description: 'AI-powered competitor content analysis revealing keywords, topics, and questions your competitors rank for but you do not. Prioritized by search volume and difficulty.',
    },
  ]

  return (
    <Container className="py-24">
      <Subheading>What Our AI Agent Optimizes</Subheading>
      <Heading as="h2" className="mt-2">
        Comprehensive AI-powered SEO at scale.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our AI SEO agents handle every aspect of on-page optimization, from title tags to entity coverage,
        processing hundreds of pages per day with consistent quality.
      </Lead>
      <div className="mt-16 grid gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
        {targets.map((target, index) => (
          <div key={index} className="bg-paper p-8">
            <div className="flex size-12 items-center justify-center bg-accent-soft">
              <CheckCircle className="size-6 text-accent" />
            </div>
            <h3 className="mt-6 font-heading text-lg font-semibold text-ink">{target.title}</h3>
            <p className="mt-3 text-sm/6 text-slate">{target.description}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: AI SEO Agent vs Manual SEO Comparison                          */
/* -------------------------------------------------------------------------- */

function ComparisonSection() {
  const comparisons = [
    { dimension: 'Pages optimized per day', ai: '100-500 pages', manual: '3-5 pages' },
    { dimension: 'Keyword research speed', ai: '1,000 keywords in minutes', manual: '50-100 keywords per day' },
    { dimension: 'Internal link analysis', ai: 'Entire site in hours', manual: 'Weeks for large sites' },
    { dimension: 'SERP monitoring frequency', ai: 'Continuous (real-time)', manual: 'Weekly or monthly' },
    { dimension: 'Entity coverage analysis', ai: 'Automated embeddings analysis', manual: 'Manual competitor review' },
    { dimension: 'Title tag A/B testing', ai: 'Systematic, data-driven', manual: 'Ad hoc, intuition-based' },
    { dimension: 'Content gap discovery', ai: 'Comprehensive, automated', manual: 'Partial, time-intensive' },
    { dimension: 'Consistency', ai: '100% consistent quality', manual: 'Varies by team member' },
    { dimension: 'Cost at scale (1,000+ pages)', ai: '$0.50-$2 per page', manual: '$15-$50 per page' },
    { dimension: 'GEO optimization', ai: 'Built-in AI citation analysis', manual: 'Emerging skill, limited tools' },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading>AI Agent vs. Manual SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Why AI SEO agents outperform manual optimization.
          </Heading>
          <Lead className="mt-6">
            AI SEO agents do not replace human strategists. They amplify what humans can accomplish
            by automating repetitive analysis and optimization at a scale and speed that manual work
            cannot achieve. The result: your SEO team focuses on strategy while AI handles execution.
          </Lead>

          <div className="mt-12 overflow-hidden rounded-none border border-border-strong">
            <div className="grid grid-cols-3 bg-ink text-white">
              <div className="p-4 font-heading text-sm font-semibold">Dimension</div>
              <div className="p-4 font-heading text-sm font-semibold border-l border-white/10">AI SEO Agent</div>
              <div className="p-4 font-heading text-sm font-semibold border-l border-white/10">Manual SEO</div>
            </div>
            {comparisons.map((row, index) => (
              <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-paper' : 'bg-cream'}`}>
                <div className="p-4 text-sm font-medium text-ink">{row.dimension}</div>
                <div className="p-4 text-sm text-accent font-medium border-l border-border">{row.ai}</div>
                <div className="p-4 text-sm text-slate border-l border-border">{row.manual}</div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-slate">
            Our clients typically see 10-50x efficiency gains when deploying AI SEO agents alongside
            their existing SEO teams. The human team defines strategy, sets quality standards, and
            reviews critical pages while the AI agent handles optimization at scale.
          </p>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 7: Architecture & Design                                          */
/* -------------------------------------------------------------------------- */

function ArchitectureSection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl">
        <Subheading>Architecture & Design</Subheading>
        <Heading as="h2" className="mt-2">
          How our AI SEO agents are built.
        </Heading>
        <div className="mt-10 space-y-6 text-base/7 text-slate">
          <p>
            Our AI SEO agents are built on a multi-agent orchestration architecture that coordinates
            specialized sub-agents for different optimization tasks. At the core, a planning agent
            receives the optimization objective (for example, optimize a page for a target keyword cluster),
            decomposes it into sub-tasks, and delegates to specialized agents: a SERP analysis agent, an
            entity extraction agent, a content optimization agent, and a quality assurance agent. Each
            sub-agent operates independently with its own LLM context, tools, and evaluation criteria.
          </p>
          <p>
            The SERP analysis agent uses API integrations with Google Search Console, Ahrefs, and SEMrush
            to gather real-time ranking data, competitor content, and SERP feature information. It identifies
            which pages rank for target queries, what SERP features are triggered (featured snippets, People
            Also Ask, AI Overviews, video carousels), and what content patterns the top results share. This
            data feeds into the entity extraction agent, which uses semantic embeddings (via FAISS or Pinecone
            vector databases) to map the entity landscape of the target SERP and compare it against your
            content&apos;s current entity coverage.
          </p>
          <p>
            The content optimization agent receives the gap analysis and generates specific recommendations:
            missing entities to incorporate, header restructuring suggestions, title tag variations for CTR
            testing, meta description rewrites, and internal linking opportunities. It uses batch processing
            to handle hundreds of pages efficiently, queuing optimizations and executing them through your
            CMS integration (WordPress, Shopify, Webflow, Contentful, or custom headless CMS). Every change
            is version-controlled, allowing instant rollback if needed.
          </p>
          <p>
            The quality assurance agent scores every optimization against predefined quality thresholds
            including readability, keyword density, entity coverage percentage, editorial guideline
            compliance, and tone of voice consistency. Content that fails quality checks is flagged for
            human review rather than deployed automatically. This human-in-the-loop design ensures that
            AI agents enhance quality rather than compromise it.
          </p>
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: CMS Integration                                                */
/* -------------------------------------------------------------------------- */

function CMSIntegration() {
  const platforms = [
    { name: 'WordPress', description: 'Plugin-based integration with direct content updates, meta tag management, and schema markup deployment.' },
    { name: 'Shopify', description: 'Product page optimization, collection page SEO, meta tag automation, and structured data for product schema.' },
    { name: 'Webflow', description: 'API-driven optimization for Webflow pages, CMS items, and dynamic content with automatic publishing.' },
    { name: 'Contentful', description: 'Headless CMS integration via Contentful API for content model optimization and structured data management.' },
    { name: 'Custom / Headless CMS', description: 'REST API or GraphQL integration with any CMS. We build custom connectors for proprietary platforms.' },
    { name: 'Sanity / Prismic', description: 'Native API integrations for modern headless CMS platforms with real-time content optimization.' },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <Subheading>CMS Integration</Subheading>
        <Heading as="h2" className="mt-2">
          Works with your existing content platform.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Our AI SEO agents integrate directly with your CMS, enabling automated optimization
          without disrupting your editorial workflow. Changes are staged for review or applied
          automatically based on your approval settings.
        </Lead>
        <div className="mt-16 grid gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-paper p-8">
              <h3 className="font-heading text-lg font-semibold text-ink">{platform.name}</h3>
              <p className="mt-3 text-sm/6 text-slate">{platform.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: Process                                                        */
/* -------------------------------------------------------------------------- */

const processSteps = [
  {
    number: '01',
    title: 'SEO Audit & Agent Strategy',
    description:
      'Week 1-2: We analyze your content library, current rankings, SERP landscape, and entity coverage. We identify optimization opportunities, define agent objectives, and create a deployment roadmap aligned with your SEO goals.',
  },
  {
    number: '02',
    title: 'AI Agent Development & Training',
    description:
      'Week 3-4: We build custom AI agents using LLMs (GPT-4, Claude), train them on your brand voice and editorial guidelines, connect SERP analysis APIs and SEO data sources, and configure CMS integration for automated deployment.',
  },
  {
    number: '03',
    title: 'Testing, Validation & A/B Testing',
    description:
      'Week 5-6: We test agents on a sample of pages, validate output quality against editorial standards, run A/B tests on title tag and meta description optimizations, and fine-tune agent behavior based on results. Your team approves all changes before scale deployment.',
  },
  {
    number: '04',
    title: 'Production Deployment & Monitoring',
    description:
      'Week 7-8: We deploy agents to your full content library with batch processing, set up continuous monitoring dashboards tracking rankings, CTR, traffic, and entity coverage, and establish a feedback loop for ongoing agent improvement.',
  },
]

function ProcessSection() {
  const steps = processSteps

  return (
    <Container className="py-24">
      <Subheading>Our Process</Subheading>
      <Heading as="h2" className="mt-2">
        From manual to AI-powered in 8 weeks.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        A systematic approach to building and deploying AI SEO agents that deliver measurable results.
      </Lead>
      <div className="mt-16 space-y-0">
        {steps.map((step) => (
          <div key={step.number} className="border-b border-border py-8">
            <div className="flex gap-6">
              <span className="font-mono text-sm font-semibold text-accent">{step.number}</span>
              <div className="flex-1">
                <h3 className="font-heading text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-3 text-base/7 text-slate">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Quality Assurance & Testing                                   */
/* -------------------------------------------------------------------------- */

function QASection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading>Quality Assurance</Subheading>
          <Heading as="h2" className="mt-2">
            Rigorous testing at every stage.
          </Heading>
          <div className="mt-10 space-y-6 text-base/7 text-slate">
            <p>
              Quality is non-negotiable when AI agents modify your content at scale. Our quality assurance
              framework ensures every optimization improves your pages without compromising editorial standards,
              brand voice, or user experience. We use a multi-layer validation approach that combines automated
              scoring, human review checkpoints, and continuous performance monitoring.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {[
              {
                title: 'Automated Quality Scoring',
                items: [
                  'Readability score validation (Flesch-Kincaid)',
                  'Keyword density thresholds (avoid over-optimization)',
                  'Entity coverage percentage targets',
                  'Editorial guideline compliance checks',
                  'Tone of voice consistency scoring',
                ],
              },
              {
                title: 'Human Review Checkpoints',
                items: [
                  'Critical pages reviewed by SEO strategist',
                  'Sample-based quality audits (10% of batch)',
                  'Brand voice approval before mass deployment',
                  'Stakeholder sign-off on optimization strategy',
                  'Monthly quality review meetings',
                ],
              },
              {
                title: 'Performance Monitoring',
                items: [
                  'Real-time ranking tracking post-optimization',
                  'CTR change monitoring per page',
                  'Traffic impact analysis within 14 days',
                  'Bounce rate and engagement monitoring',
                  'Automated alerts for negative impact',
                ],
              },
              {
                title: 'Rollback & Version Control',
                items: [
                  'Every change is version-controlled',
                  'Instant rollback capability (within hours)',
                  'Change history for audit trails',
                  'A/B test framework for risky changes',
                  'Staging environment for preview',
                ],
              },
            ].map((block, index) => (
              <div key={index} className="rounded-none border border-border-strong bg-paper p-8">
                <h3 className="font-heading text-lg font-semibold text-ink mb-4">{block.title}</h3>
                <ul className="space-y-2">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate">
                      <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 11: Case Study 1 (Dark)                                           */
/* -------------------------------------------------------------------------- */

function CaseStudy1() {
  return (
    <div className="relative bg-ink py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading dark>Case Study 1</Subheading>
          <Heading as="h2" className="mt-2" dark>
            Content publisher increases organic traffic 250% with AI SEO agent.
          </Heading>
          <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">The Challenge</h3>
                <p className="mt-3 text-base/7 text-white/70">
                  A B2B content publisher with 5,200+ articles had accumulated years of SEO debt. Title tags were
                  generic, internal linking was sparse, entity coverage averaged just 34%, and meta descriptions were
                  either missing or auto-generated. Manual optimization would have required 3 full-time SEO specialists
                  working for 18+ months. Previous attempts with basic AI writing tools produced low-quality, generic
                  content that hurt rather than helped rankings. Monthly organic traffic had stagnated at 85,000
                  sessions despite a large content library.
                </p>
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">Our Solution</h3>
                <p className="mt-3 text-base/7 text-white/70">
                  We deployed a custom multi-agent AI system. The SERP analysis agent processed 12,000+ target keywords,
                  mapping SERP features and competitor entity coverage. The content optimization agent rewrote 5,200 title
                  tags and meta descriptions, restructured headers on 3,100 pages, and added missing entities to 4,800
                  articles. The internal linking agent analyzed the full site graph and added 18,000+ contextual internal
                  links. All changes were reviewed through automated quality scoring and a 10% human sample audit before
                  batch deployment. The entire optimization completed in 14 weeks, processing 50-100 articles per day.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-white mb-8">Results (6 Months)</h3>
              <div className="space-y-6">
                <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                  <dt className="text-sm/6 text-white/60">Organic Traffic</dt>
                  <dd className="font-heading text-3xl font-semibold text-white">+250%</dd>
                  <dd className="text-xs text-white/40">From 85K to 297K monthly sessions</dd>
                </div>
                <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                  <dt className="text-sm/6 text-white/60">New Keywords Ranking</dt>
                  <dd className="font-heading text-3xl font-semibold text-white">12,400</dd>
                  <dd className="text-xs text-white/40">Previously unranked terms now in top 100</dd>
                </div>
                <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                  <dt className="text-sm/6 text-white/60">Average CTR Improvement</dt>
                  <dd className="font-heading text-3xl font-semibold text-white">+38%</dd>
                  <dd className="text-xs text-white/40">From optimized title tags and meta descriptions</dd>
                </div>
                <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                  <dt className="text-sm/6 text-white/60">Annual Revenue Impact</dt>
                  <dd className="font-heading text-3xl font-semibold text-white">+$1.2M</dd>
                  <dd className="text-xs text-white/40">Attributed to organic traffic growth</dd>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 12: Case Study 2                                                  */
/* -------------------------------------------------------------------------- */

function CaseStudy2() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl">
        <Subheading>Case Study 2</Subheading>
        <Heading as="h2" className="mt-2">
          E-commerce brand scales product page SEO across 8,000 SKUs.
        </Heading>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="font-heading text-lg font-semibold text-ink">The Challenge</h3>
              <p className="mt-3 text-base/7 text-slate">
                A mid-market e-commerce brand with 8,000 product pages had thin, duplicate product descriptions
                that generated almost zero organic traffic. Category pages lacked topical depth, product schema
                was inconsistent, and internal linking between related products was nonexistent. The SEO team of
                two people estimated 24+ months to manually optimize the catalog. Meanwhile, competitors with
                AI-optimized product pages were capturing the majority of commercial-intent search traffic.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg font-semibold text-ink">Our Solution</h3>
              <p className="mt-3 text-base/7 text-slate">
                We built a specialized e-commerce AI SEO agent integrated with their Shopify store. The agent
                analyzed competitor product pages for each category, identified target keyword clusters, rewrote
                product descriptions with unique, search-intent-aligned copy, generated product schema markup,
                and built internal links between related products and category pages. For category pages, the agent
                added topical content sections addressing buyer intent questions. Processing 200+ products per day,
                the full catalog was optimized in 8 weeks.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-ink mb-8">Results (6 Months)</h3>
            <div className="space-y-6">
              <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                <dt className="text-sm/6 text-ash">Organic Revenue</dt>
                <dd className="font-heading text-3xl font-semibold text-ink">+$840K</dd>
                <dd className="text-xs text-ash">Annualized organic revenue increase</dd>
              </div>
              <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                <dt className="text-sm/6 text-ash">Product Page Traffic</dt>
                <dd className="font-heading text-3xl font-semibold text-ink">+310%</dd>
                <dd className="text-xs text-ash">From 12K to 49K monthly sessions</dd>
              </div>
              <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                <dt className="text-sm/6 text-ash">Keywords in Top 10</dt>
                <dd className="font-heading text-3xl font-semibold text-ink">2,400+</dd>
                <dd className="text-xs text-ash">Up from 180 before optimization</dd>
              </div>
              <div className="flex flex-col gap-2 border-l-2 border-accent pl-4">
                <dt className="text-sm/6 text-ash">Optimization Time</dt>
                <dd className="font-heading text-3xl font-semibold text-ink">8 weeks</dd>
                <dd className="text-xs text-ash">vs. 24+ months estimated manually</dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 13: Technology Stack                                              */
/* -------------------------------------------------------------------------- */

function TechnologyStack() {
  const technologies = {
    'Large Language Models': ['GPT-4 / GPT-4 Turbo', 'Claude 3 (Anthropic)', 'Gemini Pro', 'Open Source Models (Llama, Mistral)', 'Fine-tuned Models'],
    'AI Frameworks': ['LangChain', 'LlamaIndex', 'Semantic Kernel', 'Custom Agent Orchestration', 'Prompt Engineering Pipelines'],
    'Vector Databases': ['Pinecone', 'Weaviate', 'FAISS', 'Qdrant', 'Chroma'],
    'SEO Tools & APIs': ['Google Search Console API', 'Ahrefs API', 'SEMrush API', 'DataForSEO API', 'Custom SERP Scrapers'],
    'Development': ['Python', 'TypeScript', 'FastAPI', 'Celery (batch processing)', 'Redis'],
    'Deployment': ['AWS Lambda', 'Google Cloud Run', 'Docker', 'Kubernetes', 'Serverless Architecture'],
  }

  return (
    <div className="bg-cream py-24">
      <Container>
        <Subheading>Technology Stack</Subheading>
        <Heading as="h2" className="mt-2">
          Enterprise-grade AI and SEO technology.
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Our AI SEO agents are built with the most advanced NLP, embeddings, and SEO technologies
          available, deployed on scalable cloud infrastructure.
        </Lead>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(technologies).map(([category, techs]) => (
            <div key={category} className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-lg font-semibold text-ink">{category}</h3>
              <ul className="mt-4 space-y-2">
                {techs.map((tech) => (
                  <li key={tech} className="flex items-center gap-2 text-sm text-slate">
                    <CheckIcon className="size-4 flex-shrink-0 fill-accent" />
                    {tech}
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
/*  Section 14: Cost Breakdown                                                */
/* -------------------------------------------------------------------------- */

function CostBreakdown() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl">
        <Subheading>Cost Breakdown</Subheading>
        <Heading as="h2" className="mt-2">
          AI SEO agent pricing and what drives costs.
        </Heading>
        <div className="mt-10 space-y-6 text-base/7 text-slate">
          <p>
            AI SEO agent costs depend on three primary factors: the size of your content library,
            the depth of optimization required, and the level of CMS integration and customization.
            Unlike traditional SEO retainers that charge monthly regardless of output, our AI agent
            pricing is tied directly to deliverables: pages optimized, agents built, and integrations deployed.
          </p>
          <p>
            For a content library of 500-1,000 pages, a standard AI content optimization deployment
            typically ranges from $5,000 to $12,000 as a one-time project. This includes SERP analysis,
            entity coverage assessment, title tag and meta description optimization, header restructuring,
            and basic internal link recommendations. Ongoing monthly optimization for new and updated content
            adds $1,500-$3,500 per month depending on publishing volume.
          </p>
          <p>
            Full AI SEO agent deployments with custom agent development, CMS integration, keyword research
            automation, and content gap analysis range from $12,000 to $30,000 for initial setup, with monthly
            retainers of $3,000-$8,000 for continuous optimization, monitoring, and agent improvement. Enterprise
            deployments with multi-domain support, white-label platforms, and dedicated engineering resources
            start at $30,000+ for setup with custom monthly retainers.
          </p>
          <p>
            To put these costs in perspective: a single full-time SEO specialist costs $60,000-$100,000 annually
            and can manually optimize 15-25 pages per week. An AI SEO agent optimizes 100-500 pages per day at
            a fraction of the cost. For businesses with 1,000+ pages, the ROI of AI-powered optimization
            typically exceeds 5x within the first 6 months through increased organic traffic and revenue.
          </p>
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 15: Pricing Packages                                              */
/* -------------------------------------------------------------------------- */

function Pricing() {
  const tiers = [
    {
      name: 'AI Content Optimizer',
      price: '$5,000',
      description: 'Optimize existing content with AI',
      features: [
        'Content analysis AI agent',
        'Optimize up to 500 pages',
        'Title tag & meta description optimization',
        'Header structure improvements',
        'Entity coverage analysis',
        'Basic internal link suggestions',
        'Performance report',
        '2 months support',
      ],
    },
    {
      name: 'Full AI SEO Agent',
      price: '$12,000',
      description: 'Complete AI SEO automation',
      features: [
        'Everything in Content Optimizer',
        'Unlimited page optimization',
        'AI keyword research agent',
        'Content gap analysis',
        'Automated internal linking',
        'Semantic SEO & entity optimization',
        'SERP feature monitoring',
        'CMS integration (WordPress, Shopify, etc.)',
        'CTR optimization with A/B testing',
        'Monthly optimization reports',
        '4 months support',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise AI Platform',
      price: '$30,000+',
      description: 'Custom AI SEO platform',
      features: [
        'Everything in Full AI Agent',
        'Multi-domain support',
        'Custom AI agent development',
        'GEO (Generative Engine Optimization)',
        'White-label platform option',
        'Full API access',
        'Advanced analytics & dashboards',
        'Team collaboration features',
        'Priority LLM access',
        'Dedicated AI engineer',
        '6 months support + SLA',
      ],
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <Subheading>Pricing</Subheading>
        <Heading as="h2" className="mt-2">
          AI SEO Agent Packages
        </Heading>
        <Lead className="mt-6 max-w-3xl">
          Transparent pricing for AI-powered SEO that scales with your content library.
        </Lead>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-none border ${
                tier.highlighted ? 'border-accent bg-accent-soft/30' : 'border-border-strong bg-paper'
              } p-8`}
            >
              {tier.highlighted && (
                <div className="mb-4 inline-block rounded-none bg-accent px-3 py-1 text-xs font-mono uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl font-semibold text-ink">{tier.name}</h3>
              <p className="mt-2 text-sm text-slate">{tier.description}</p>
              <p className="mt-6 font-heading text-4xl font-semibold text-ink">{tier.price}</p>
              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="mt-0.5 size-5 flex-shrink-0 fill-accent" />
                    <span className="text-sm text-slate">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 16: ROI Calculator                                                */
/* -------------------------------------------------------------------------- */

function ROICalculator() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-4xl">
        <Subheading>ROI Measurement</Subheading>
        <Heading as="h2" className="mt-2">
          How to calculate AI SEO agent ROI.
        </Heading>
        <div className="mt-10 space-y-6 text-base/7 text-slate">
          <p>
            Measuring the return on investment of an AI SEO agent requires tracking three core metrics:
            incremental organic traffic generated, revenue attributed to that traffic, and the cost of
            the AI agent deployment compared to equivalent manual SEO effort.
          </p>
          <p>
            <strong className="text-ink">The formula:</strong> ROI = ((Incremental Organic Revenue - AI Agent Cost) / AI Agent Cost) x 100%.
            For example, if your AI SEO agent costs $15,000 to deploy and generates an additional $75,000 in
            organic revenue over 12 months, your ROI is 400%.
          </p>
          <p>
            <strong className="text-ink">Typical ROI timeline:</strong> Months 1-3 are the baseline period
            where agents are deployed and optimizations take effect. Months 3-6 show measurable ranking
            improvements and traffic increases. Months 6-12 deliver compounding returns as improved rankings
            drive sustained traffic growth. Most clients achieve positive ROI by month 4 and 3-5x ROI by month 12.
          </p>
          <p>
            <strong className="text-ink">Cost comparison:</strong> A full-time SEO specialist costs $5,000-$8,000/month
            and can optimize 60-100 pages per month. An AI SEO agent at $3,000-$5,000/month optimizes 2,000-10,000
            pages per month. At scale, AI agents deliver 20-50x the output per dollar invested compared to manual
            SEO execution.
          </p>
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 17: Testimonials                                                  */
/* -------------------------------------------------------------------------- */

function Testimonials() {
  const testimonials = [
    {
      quote:
        'The AI agent optimized our entire content library in 3 months. Organic traffic tripled and we saved countless hours of manual work.',
      author: 'Lauren Mitchell',
      role: 'Head of Content',
      company: 'TechInsights',
    },
    {
      quote:
        'Best SEO investment we have ever made. The AI finds opportunities we would have never discovered manually and the quality is exceptional.',
      author: 'Ryan Patterson',
      role: 'VP of Marketing',
      company: 'CloudScale SaaS',
    },
    {
      quote:
        'We scaled from optimizing 10 articles per week to 100 per day. The AI maintains our brand voice perfectly while improving SEO performance.',
      author: 'Amanda Zhao',
      role: 'Editor-in-Chief',
      company: 'HealthNews Daily',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <Subheading>Testimonials</Subheading>
        <Heading as="h2" className="mt-2">
          Trusted by forward-thinking companies.
        </Heading>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-none border border-border-strong bg-paper p-8">
              <p className="font-display italic text-lg/7 text-slate">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="mt-6 border-t border-border pt-6">
                <p className="text-sm font-heading font-medium text-ink">{testimonial.author}</p>
                <p className="text-sm text-ash">
                  {testimonial.role} &bull; {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 18: FAQ (FAQAccordion with 12 questions)                          */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  const faqItems = [
    {
      question: 'What is an AI SEO agent?',
      answer:
        'An AI SEO agent is an autonomous software system powered by large language models and NLP that performs search engine optimization tasks at scale. Unlike traditional SEO tools that provide data for humans to act on, AI agents analyze content, make optimization decisions, and execute changes automatically. They handle title tag optimization, entity coverage analysis, internal linking, SERP monitoring, meta description writing, and content gap identification.',
    },
    {
      question: 'How is an AI SEO agent different from AI SEO tools?',
      answer:
        'AI SEO tools provide suggestions and data that humans must interpret and act on. AI SEO agents take autonomous action based on predefined objectives and quality criteria. An agent orchestrates multi-step workflows: analyzing SERPs, extracting entities, generating optimizations, validating quality, and deploying changes through your CMS. Think of tools as assistants that report findings, and agents as specialists that execute the work.',
    },
    {
      question: 'What is generative engine optimization (GEO)?',
      answer:
        'Generative engine optimization is the practice of optimizing content to appear in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and Claude. GEO focuses on comprehensive entity coverage, structured factual statements, authoritative sourcing, and content formats that generative AI systems prefer to cite. Our AI SEO agents include GEO capabilities as a core feature.',
    },
    {
      question: 'Will AI-optimized content hurt my search rankings?',
      answer:
        'No, when implemented properly. Our AI agents enhance existing content rather than generating new content from scratch. They improve title tags, restructure headers, add missing entities, build internal links, and optimize meta descriptions. Google does not penalize AI-assisted optimization; they penalize low-quality, thin content. Our quality assurance framework ensures every optimization improves content quality.',
    },
    {
      question: 'Can the AI agent maintain my brand voice and editorial standards?',
      answer:
        'Yes. We train custom agents on your brand guidelines, writing style, tone of voice, and editorial standards. The agent learns your preferences through fine-tuning and few-shot examples. We include human review checkpoints for critical pages and a quality scoring system that flags content deviating from your standards. Most clients find AI-optimized content maintains or improves voice consistency.',
    },
    {
      question: 'How many pages can the AI agent optimize per day?',
      answer:
        'Typically 100-500 pages per day depending on optimization depth. Title tag and meta description optimization processes 300-500 pages daily. Deep content analysis with entity coverage, internal linking, and semantic optimization handles 100-200 pages daily. We can scale further with additional compute resources for enterprise deployments.',
    },
    {
      question: 'What CMS platforms do you integrate with?',
      answer:
        'We integrate with all major CMS platforms including WordPress, Shopify, Webflow, Contentful, Sanity, Prismic, and custom headless CMS solutions via REST API or GraphQL. The agent can stage changes for human review or apply optimizations automatically based on your approval settings.',
    },
    {
      question: 'What results can I expect from an AI SEO agent?',
      answer:
        'Most clients see 150-250% organic traffic increase within 6 months. Typical outcomes include 30-50% more keywords ranking in the top 100, 20-40% ranking improvement for existing keywords, 15-25% CTR improvement from title tag optimization, and 2-3x increase in internal link equity distribution. Results vary by content quality, competition, and starting point.',
    },
    {
      question: 'How do you measure AI SEO agent ROI?',
      answer:
        'We track incremental organic traffic, revenue attribution, keyword ranking improvements, CTR changes, and cost comparison against equivalent manual SEO effort. Monthly reports include traffic growth, ranking changes, pages optimized, entity coverage improvements, and estimated revenue impact. Most clients achieve positive ROI by month 4 and 3-5x ROI by month 12.',
    },
    {
      question: 'What happens if the AI agent makes a mistake?',
      answer:
        'Every change is version-controlled with instant rollback capability. We deploy optimizations in batches with quality scoring, sample human review before mass deployment, and continuous performance monitoring. Mistakes are rare but caught early through automated alerts for negative ranking or traffic impact. Critical pages always include human review checkpoints.',
    },
    {
      question: 'How is your AI SEO agent priced?',
      answer:
        'Pricing is based on content library size, optimization depth, and CMS integration requirements. Standard deployments for 500-1,000 pages start at $5,000. Full AI SEO agent deployments with custom development and CMS integration range from $12,000-$30,000 for initial setup, with optional monthly retainers of $1,500-$8,000 for ongoing optimization.',
    },
    {
      question: 'Do I still need a human SEO team with an AI agent?',
      answer:
        'Yes, but their role evolves. AI agents handle execution at scale (optimization, monitoring, analysis) while your human team focuses on strategy, creative content ideation, relationship building for link acquisition, and high-level decision-making. Most clients find their existing SEO team becomes 5-10x more productive with AI agent support rather than being replaced.',
    },
  ]

  return (
    <Container className="py-24">
      <FAQAccordion
        title="AI SEO agent frequently asked questions"
        items={faqItems}
      />
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 19: Related Services                                              */
/* -------------------------------------------------------------------------- */

function RelatedServicesSection() {
  const services = [
    {
      title: 'SEO Services',
      description: 'Comprehensive search engine optimization for sustainable organic growth.',
      href: '/services/seo',
    },
    {
      title: 'SEO Consulting',
      description: 'Strategic SEO guidance and implementation support from experts.',
      href: '/services/seo-consulting',
    },
    {
      title: 'AEO Services',
      description: 'Answer engine optimization for AI-powered search visibility.',
      href: '/services/aeo',
    },
    {
      title: 'AI Development',
      description: 'Custom AI application development with enterprise-grade quality.',
      href: '/services/ai-development',
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation that ranks, engages, and converts.',
      href: '/services/content',
    },
    {
      title: 'SEO Automation',
      description: 'Automate rank tracking, reporting, and SEO workflows.',
      href: '/services/seo-automation',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <Subheading>Related Services</Subheading>
        <Heading as="h2" className="mt-2">
          Complete AI and SEO solutions.
        </Heading>
        <div className="mt-16 grid gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group bg-paper p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-3 text-sm/6 text-slate">{service.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-medium text-accent">
                Learn more <ArrowRight className="size-4" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 20: CTA                                                           */
/* -------------------------------------------------------------------------- */

function CTA() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Heading as="h2">Ready to deploy your AI SEO agent?</Heading>
        <Lead className="mt-6">
          Let&apos;s discuss your content optimization needs and build an AI agent that drives measurable results.
          Free consultation includes an SEO audit, entity coverage analysis, and AI agent deployment plan.
        </Lead>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href="/contact">Deploy Your AI Agent</Button>
          <Button variant="outline" href="/services/seo-consulting">
            Expert Consultation
          </Button>
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                */
/* -------------------------------------------------------------------------- */

export default function AISEOAgent() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-seo-agent',
          name: 'AI SEO Agent Services',
          description:
            'Professional AI SEO agent services with generative engine optimization (GEO). AI-powered content optimization, SERP analysis, automated keyword research, CTR optimization, and intelligent internal linking at scale.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Worldwide',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI SEO Agent Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Content Optimization',
                  description: 'Automated content analysis and optimization using AI at scale.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Generative Engine Optimization (GEO)',
                  description: 'Optimize for ChatGPT, Perplexity, Google AI Overviews, and Claude.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'SERP Analysis & CTR Optimization',
                  description: 'Automated SERP monitoring and title tag A/B testing for higher CTR.',
                },
              },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is an AI SEO agent?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'An AI SEO agent is an autonomous software system powered by large language models and NLP that performs search engine optimization tasks at scale, including content optimization, SERP analysis, entity coverage analysis, and internal linking.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is generative engine optimization (GEO)?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Generative engine optimization is the practice of optimizing content to appear in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and Claude through comprehensive entity coverage, structured data, and authoritative content.',
              },
            },
            {
              '@type': 'Question',
              name: 'How much does an AI SEO agent cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'AI SEO agent pricing ranges from $5,000 for basic content optimization to $30,000+ for enterprise deployments. Monthly retainers for ongoing optimization range from $1,500 to $8,000 depending on content volume and features.',
              },
            },
          ],
        }}
      />
      <Hero />
      <StatsBar />
      <WhatIsSection />
      <GEOSection />
      <OptimizationTargets />
      <ComparisonSection />
      <ArchitectureSection />
      <CMSIntegration />
      <ProcessSectionAnimated
        subheading="Our Process"
        heading="From manual to AI-powered in 8 weeks."
        steps={processSteps}
      />
      <QASection />
      <CaseStudy1 />
      <CaseStudy2 />
      <TechnologyStack />
      <CostBreakdown />
      <Pricing />
      <ROICalculator />
      <Testimonials />
      <FAQSection />
      <RelatedServicesSection />
      <CTA />
      <Footer />
    </main>
  )
}
