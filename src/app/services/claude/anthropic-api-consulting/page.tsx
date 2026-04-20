import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
  FeatureCardsSection,
} from '@/components/service-page-sections'
import { CheckIcon } from '@/components/check-icon'
import {
  Cpu,
  Layers,
  Zap,
  FileText,
  Database,
  RefreshCw,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anthropic API Consulting | Claude Integration & Migration | TheProjectSEO',
  description:
    'Anthropic API consulting covering prompt caching, extended thinking, tool use, batch API, files API, citations, and memory tool. Migration from Claude 3.5 to 4.x included. We integrate the API ourselves daily.',
  alternates: {
    canonical: '/services/claude/anthropic-api-consulting',
  },
  openGraph: {
    title: 'Anthropic API Consulting | Claude 4.x Integration | TheProjectSEO',
    description:
      'Anthropic API integration and migration consulting from a team that uses the full API surface daily. Prompt caching, extended thinking, batch processing, and Claude 3.5 to 4.x migration.',
    url: 'https://theprojectseo.com/services/claude/anthropic-api-consulting',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Anthropic API Consulting',
  title: 'Anthropic API integration that goes',
  accentWord: 'beyond',
  titleAfterAccent: 'the quickstart',
  description:
    'Most teams get the Anthropic API working. The hard part is getting it working well: prompt caching that actually reduces costs, extended thinking configured for the decisions that need it, batch processing for the workloads that justify it, tool use patterns that hold up at scale, and migration plans for teams moving from Claude 3.5 to 4.x without breaking production. We use every one of these features in our own stack, on a daily basis, across 15 client workflows.',
  ctaPrimaryText: 'Talk to an API Expert',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '100%', label: 'Citation rate on our fine-tuned model' },
  { value: '5-6', label: 'Tok/s on Qwen3.5-27B, M4 Pro' },
  { value: '15+', label: 'Client workflows on the Anthropic API stack' },
  { value: '4.x', label: 'Current production model generation' },
]

const servicesData = {
  subheading: 'API Consulting Areas',
  heading: 'Six Anthropic API capabilities we help teams implement correctly.',
  lead: 'The API surface is broad. Which features matter for your use case depends on your workload patterns. We help you choose correctly.',
  services: [
    {
      icon: Zap,
      title: 'Prompt Caching Strategy',
      description:
        'Prompt caching reduces latency and cost by reusing computed prefixes across API calls. The savings are real. up to 90% cost reduction on cached tokens. But most teams implement caching incorrectly: caching prefixes that change too frequently, not caching system prompts that are stable, or caching at the wrong granularity. We audit your current API usage, identify caching opportunities, and implement the cache_control markers that produce measurable cost reductions.',
      features: [
        'Current API usage cost audit',
        'Cache prefix architecture design',
        'cache_control marker implementation',
        'Before/after cost measurement',
      ],
    },
    {
      icon: Cpu,
      title: 'Extended Thinking Integration',
      description:
        'Extended thinking gives Claude a reasoning scratchpad before producing its final response. It meaningfully improves performance on complex analytical tasks, multi-step reasoning, and decisions with high stakes. But it adds latency and cost. The right guidance is specific: which decision types benefit from extended thinking in your workflow and which do not. We run evaluations, not guesses.',
      features: [
        'Task classification for thinking applicability',
        'Budget token configuration and testing',
        'Streaming implementation for long thinking sessions',
        'Latency vs. quality tradeoff analysis',
      ],
    },
    {
      icon: Database,
      title: 'Batch API Implementation',
      description:
        'The Batch API processes large volumes of requests asynchronously at 50% cost reduction compared to synchronous calls. For workloads like content generation, data classification, or report generation at scale, batch processing changes the unit economics. We design the batch architecture: request formatting, result polling, error handling, and integration with your downstream systems.',
      features: [
        'Batch request formatting and validation',
        'Result polling and error handling',
        'Downstream system integration',
        'Cost modeling vs. synchronous baseline',
      ],
    },
    {
      icon: FileText,
      title: 'Files API and Citations',
      description:
        'The Files API lets you upload documents once and reference them across multiple API calls without re-sending the content. Combined with the citations feature, Claude can produce outputs with traceable source references. This is the foundation of our own seo_query_kb tool: documents uploaded once, cited in every response, with 100% citation rate across all knowledge base queries.',
      features: [
        'Document upload and reference architecture',
        'Citation configuration and formatting',
        'Multi-document reference patterns',
        'Knowledge base query pipeline design',
      ],
    },
    {
      icon: Layers,
      title: 'Tool Use Patterns',
      description:
        'Tool use (function calling) is how Claude takes actions. Getting tool definitions right makes the difference between an agent that calls tools correctly and one that hallucinates parameters. We design tool schemas with the right level of description, parameter constraints that prevent invalid calls, and error handling patterns that let Claude recover from tool failures gracefully.',
      features: [
        'Tool schema design and documentation',
        'Parameter constraint specification',
        'Error handling and retry patterns',
        'Parallel tool call optimization',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Model Migration (Claude 3.5 to 4.x)',
      description:
        'Migrating from Claude 3.5 Sonnet to Claude 4.x is not just a model ID swap. Prompt patterns that worked on 3.5 may behave differently on 4.x. Extended thinking is a new capability to evaluate. Pricing and context window changes affect architecture decisions. We run systematic migration assessments: eval your existing prompts against both models, identify regressions, and plan a safe rollout that minimizes production risk.',
      features: [
        'Existing prompt evaluation on target model',
        'Regression identification and documentation',
        'Prompt adaptation for model differences',
        'Staged rollout plan with rollback procedures',
      ],
    },
  ],
}

const apiCapabilitiesData = {
  subheading: 'Full API Surface',
  heading: 'What the Anthropic API gives you when configured correctly.',
  lead: 'Most teams use 20% of the API surface and wonder why the economics do not work. The full surface, used correctly, changes the picture.',
  cards: [
    {
      title: 'Cost Optimization',
      items: [
        'Prompt caching: up to 90% reduction on stable prefixes',
        'Batch API: 50% discount on async workloads',
        'Context window management to avoid unnecessary token waste',
        'Model tier selection (Haiku for simple tasks, Sonnet for complex)',
      ],
    },
    {
      title: 'Quality Improvement',
      items: [
        'Extended thinking for complex reasoning tasks',
        'Citations for grounded, verifiable outputs',
        'Tool use for action accuracy at scale',
        'System prompt engineering for consistent behavior',
      ],
    },
    {
      title: 'Production Reliability',
      items: [
        'Streaming for long-running responses',
        'Error handling and retry logic patterns',
        'Rate limit management across high-volume workloads',
        'Monitoring and alerting for API health',
      ],
    },
    {
      title: 'Scale Capabilities',
      items: [
        'Batch API for high-volume async processing',
        'Files API for document reuse without re-upload',
        'Multi-turn conversation state management',
        'Parallel tool calls for workflow acceleration',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'API usage audit and opportunity mapping',
    description:
      'We review your current API implementation: model selection, prompt structure, caching configuration, tool definitions, and error handling. For existing integrations, we identify specific optimization opportunities. For new integrations, we establish the architecture before you write a line of code. Either way, the output is a clear picture of what to build and why.',
  },
  {
    number: '02',
    title: 'Architecture design and feature selection',
    description:
      'Not every team needs every feature. Extended thinking adds latency. Batch API requires async infrastructure. The Files API is valuable when you reuse documents across calls. We map your workload patterns to the right feature set, design the architecture around those features, and document the decisions so your team understands the reasoning.',
  },
  {
    number: '03',
    title: 'Implementation and evaluation',
    description:
      'We implement the API integration against your real workloads. Prompt caching gets measured against your actual call patterns. Extended thinking gets evaluated on your specific task types. Tool use patterns get tested against the edge cases your system will encounter. We do not deliver implementations that only work on toy examples.',
  },
  {
    number: '04',
    title: 'Migration testing and production rollout',
    description:
      'For teams migrating between model versions, we run parallel evaluation: the same prompts against both models, documented regression analysis, and a rollout plan that lets you validate quality before committing to the new model. For new integrations, we plan the production deployment with monitoring in place from day one.',
  },
]

const caseStudyData = {
  subheading: 'API Integration at Scale',
  heading: 'How we use the full Anthropic API surface across 15 client workflows.',
  challenge:
    'Operating an SEO agency on the Anthropic stack means running dozens of API-powered workflows daily: content generation, keyword research synthesis, technical audit analysis, schema generation, report writing. Each workflow has different requirements: acceptable latency, per-call cost, and minimum output quality. Getting the economics right requires more than a basic API integration.',
  solution:
    'We implemented prompt caching on all system prompts that are stable across sessions (reducing token costs on those calls by over 70%), batch processing for content scoring workflows that run on large page sets, the Files API for our knowledge base documents (uploaded once, cited in every seo_query_kb response), and extended thinking for the analytical tasks where reasoning depth produces measurably better outputs. The fine-tuned Qwen3.5-27B model running at 5-6 tok/s on an M4 Pro handles local inference for cost-sensitive workloads.',
  results: [
    { metric: 'Token cost reduction via caching', improvement: '70%+', timeframe: 'On stable system prompt prefixes' },
    { metric: 'Knowledge base citation rate', improvement: '100%', timeframe: 'Via Files API + citations integration' },
    { metric: 'Batch processing coverage', improvement: '40%+', timeframe: 'Of content scoring workloads' },
    { metric: 'Client workflows on API stack', improvement: '15+', timeframe: 'Across 5 industries' },
  ],
}

const faqItems = [
  {
    question: 'What does Anthropic API consulting actually include?',
    answer:
      'It depends on where you are. For new integrations, we cover architecture design, feature selection, implementation, and evaluation. For existing integrations, we audit your current setup, identify optimization opportunities (usually caching and tool use patterns), implement improvements, and measure the before/after impact. For teams migrating between model versions, we add a parallel evaluation phase with documented regression analysis.',
  },
  {
    question: 'Is prompt caching worth the implementation effort?',
    answer:
      'For most production workloads with stable system prompts, yes. Cached tokens cost approximately 10% of fresh token prices. A workflow that sends a 2,000-token system prompt with every API call sees significant savings when that prompt is cached. The implementation is a matter of adding cache_control markers in the right places. We audit your call patterns, identify which prefixes qualify for caching, and implement it correctly.',
  },
  {
    question: 'When should we use extended thinking?',
    answer:
      'Extended thinking improves performance on tasks that benefit from step-by-step reasoning before producing a final answer: complex analysis, multi-criteria decisions, mathematical reasoning, and tasks where the reasoning chain itself is valuable. It adds latency (the model must finish thinking before responding) and token cost. We run task-type evaluations to identify where thinking produces a measurable quality improvement vs. where standard generation is sufficient.',
  },
  {
    question: 'How complicated is migrating from Claude 3.5 to Claude 4.x?',
    answer:
      'Less complicated than most teams fear, but more nuanced than just swapping the model ID. Prompt patterns tuned for 3.5 may behave differently on 4.x. Extended thinking is newly available and worth evaluating. Pricing differences affect which tasks are economically viable. We run systematic evaluation of your existing prompts against both models, document any regressions, adapt prompts where needed, and plan a staged rollout. Most migrations complete in 2-4 weeks.',
  },
  {
    question: 'Do you work with teams that are just starting to integrate the API?',
    answer:
      'Yes, and this is often the highest-value engagement. Getting the architecture right from the start. correct caching, proper tool schemas, appropriate model selection for different task types. avoids the common mistake of building on a foundation that needs to be rebuilt after 3 months. New integrations typically take 4-6 weeks from architecture design to production deployment.',
  },
]

/* -------------------------------------------------------------------------- */
/* Process Section */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>How We Work</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from API audit to production integration.
          </Heading>
        </div>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* FAQ Section */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="Anthropic API consulting frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function AnthropicApiConsultingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/anthropic-api-consulting',
          name: 'Anthropic API Consulting',
          description:
            'Anthropic API consulting covering prompt caching, extended thinking, tool use, batch API, files API, citations, and model migration from Claude 3.5 to 4.x.',
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
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.slice(0, 5).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...apiCapabilitiesData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Improve Your Anthropic API Integration?"
        heading="Let's audit your current setup and plan the improvements."
        lead="We review your API implementation, identify the highest-value optimization opportunities, and build the improvements. Measurable cost and quality impact, not theoretical gains."
        benefits={[
          'API usage audit and cost analysis included',
          'Architecture designed around your specific workload patterns',
          'Before/after measurement on every optimization',
        ]}
        submitText="Talk to an API Expert"
      />
      <Footer />
    </main>
  )
}
