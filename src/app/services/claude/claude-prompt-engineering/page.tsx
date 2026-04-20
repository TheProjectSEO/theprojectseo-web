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
  FlaskConical,
  BarChart2,
  FileText,
  Layers,
  Target,
  Code2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Claude Prompt Engineering | Production Prompt Design with Evals | TheProjectSEO',
  description:
    'Production-grade Claude prompt engineering: system prompts, prompt caching strategy, example-based prompting, structured output, and eval frameworks. We validate prompts before they go live.',
  alternates: {
    canonical: '/services/claude/claude-prompt-engineering',
  },
  openGraph: {
    title: 'Claude Prompt Engineering | Production-Grade Prompt Design | TheProjectSEO',
    description:
      'Prompt engineering for production Claude deployments. System prompts, caching strategy, structured output, and evals. Built by a team that writes and evaluates prompts across 15 client workflows daily.',
    url: 'https://theprojectseo.com/services/claude/claude-prompt-engineering',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Claude Prompt Engineering',
  title: 'Prompts designed for production,',
  accentWord: 'validated',
  titleAfterAccent: 'before they ship',
  description:
    'Prompt engineering for a demo is one skill. Prompt engineering for a system that runs thousands of API calls per week, serves 15 different clients with different brand standards, and produces outputs that go directly to customers. that is a different discipline entirely. We write, test, and evaluate production prompts. Our 67-skill agent system runs on prompts that have been iterated against real data and hardened over months of production use. We apply that same rigor to your prompts.',
  ctaPrimaryText: 'Design Your Prompts',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '67', label: 'Production-grade prompts in our Skill library' },
  { value: '8', label: 'Eval dimensions in our content scoring system' },
  { value: '85', label: 'Minimum score threshold before any content ships' },
  { value: '100%', label: 'Citation rate on our knowledge base prompts' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Six prompt engineering services for production deployments.',
  lead: 'A prompt that works in Anthropic\'s workbench and a prompt that works reliably in your production system are different things. We build the latter.',
  services: [
    {
      icon: FileText,
      title: 'System Prompt Architecture',
      description:
        'The system prompt is the highest-impact piece of text in your Claude integration. A poorly designed system prompt produces inconsistent behavior that scales badly. We design system prompts with the right structure: persona definition, behavioral constraints, output format specification, example patterns, and edge case handling. Then we test the boundaries: what happens when users try to push Claude outside the intended behavior.',
      features: [
        'Persona and constraint design',
        'Output format specification',
        'Boundary and adversarial testing',
        'Multi-turn conversation behavior validation',
      ],
    },
    {
      icon: Layers,
      title: 'Prompt Caching Strategy',
      description:
        'Prompt caching reduces API costs when implemented correctly. The key is identifying which parts of your prompt hierarchy are stable enough to cache and structuring your calls to get the most cache hits. We audit your prompt patterns, identify the stable prefix candidates, add cache_control markers at the right granularity, and measure the before/after token cost impact.',
      features: [
        'Prompt hierarchy analysis for cache candidates',
        'cache_control marker placement',
        'Cache TTL and invalidation planning',
        'Cost reduction measurement and reporting',
      ],
    },
    {
      icon: Target,
      title: 'Example-Based Prompting',
      description:
        'Few-shot examples are one of the highest-impact prompt engineering techniques for output consistency. The right examples. covering the range of inputs your system will encounter, demonstrating the exact output format you want, and showing how to handle edge cases. can double output quality without touching the model. We select and format example sets, evaluate them against your input distribution, and deliver a documented set with coverage rationale.',
      features: [
        'Example curation for your specific domain',
        'Input distribution coverage analysis',
        'Edge case example design',
        'Example-to-context-window ratio optimization',
      ],
    },
    {
      icon: Code2,
      title: 'Structured Output Design',
      description:
        'When Claude\'s output needs to be parsed by downstream systems, the output format is as important as the content. We design JSON schemas, XML structures, and markdown formats that Claude produces reliably. then add validation layers that catch format violations before they reach your application logic. Structured output prompts get tested on 50+ input variants before delivery.',
      features: [
        'JSON schema and XML format design',
        'Format adherence testing on diverse inputs',
        'Downstream parser validation',
        'Fallback handling for format violations',
      ],
    },
    {
      icon: FlaskConical,
      title: 'Eval Framework Development',
      description:
        'An eval is a systematic test of a prompt against a defined set of inputs and expected outputs. Without evals, you cannot know whether a prompt change is an improvement or a regression. We build eval frameworks: test case sets, scoring rubrics, automated evaluation scripts, and baseline measurements. Our own content validation system runs 8 eval dimensions on every output. We build the same rigour into your system.',
      features: [
        'Test case set design (50-200 cases)',
        'Scoring rubric development',
        'Automated evaluation scripting',
        'Baseline and regression tracking',
      ],
    },
    {
      icon: BarChart2,
      title: 'Prompt Performance Analysis',
      description:
        'For teams with existing prompts, we run systematic performance analysis: failure mode identification, output variance measurement, latency profiling, and cost-per-quality-unit calculation. The analysis produces a prioritized list of improvements with expected impact. We then implement the highest-value changes and measure the improvement against the baseline.',
      features: [
        'Failure mode categorization',
        'Output variance and consistency measurement',
        'Cost-per-quality-unit analysis',
        'Prioritized improvement roadmap',
      ],
    },
  ],
}

const evalFrameworkData = {
  subheading: 'Our Eval Methodology',
  heading: 'How we measure whether a prompt actually works.',
  lead: 'Vibes are not an eval. These are the dimensions we measure across every production prompt we build.',
  cards: [
    {
      title: 'Accuracy',
      items: [
        'Factual accuracy against ground truth',
        'Format compliance rate across 50+ inputs',
        'Instruction following on specific constraints',
        'Edge case handling quality',
      ],
    },
    {
      title: 'Consistency',
      items: [
        'Output variance across identical inputs',
        'Behavioral stability across turns',
        'Brand voice consistency measurement',
        'Tone adherence scoring',
      ],
    },
    {
      title: 'Efficiency',
      items: [
        'Token usage vs. output quality ratio',
        'Cache hit rate on stable prefixes',
        'Latency benchmarks under load',
        'Context window utilization',
      ],
    },
    {
      title: 'Robustness',
      items: [
        'Behavior under adversarial inputs',
        'Graceful handling of incomplete data',
        'Recovery from upstream failures',
        'Edge case coverage analysis',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Use case analysis and output specification',
    description:
      'We start with the output, not the prompt. What does a perfect response look like? What does a failing response look like? How many different input types does the system need to handle? What are the most common failure modes in your current prompts? That analysis drives every design decision that follows.',
  },
  {
    number: '02',
    title: 'Prompt design and initial testing',
    description:
      'We write the prompt, then immediately test its boundaries. Not just the happy path, but the inputs most likely to produce failures: ambiguous inputs, inputs that push toward undesired formats, inputs that test constraint adherence. The first draft is always a hypothesis. The testing tells us whether the hypothesis is correct.',
  },
  {
    number: '03',
    title: 'Eval framework setup and baseline measurement',
    description:
      'We build a test case set covering the input distribution your system will encounter. We define the scoring rubric, set up the evaluation script, and run the baseline measurement. Now we have a number. Every subsequent change gets measured against that baseline. Improvements are real. Regressions are caught before deployment.',
  },
  {
    number: '04',
    title: 'Iteration against the eval, then production delivery',
    description:
      'We iterate on the prompt against the eval framework until we reach the target performance threshold. For caching implementations, we add the cache_control markers and measure the cost impact. The final deliverable is the prompt, the eval suite, the baseline measurements, and documentation on how to run evals when you modify the prompt in the future.',
  },
]

const caseStudyData = {
  subheading: 'Prompts at Scale',
  heading: 'How our 8-dimension eval system validates every output before it ships.',
  challenge:
    'Content delivered to clients must meet two sets of standards simultaneously: it must score above 85 on our 8-dimension anti-AI scoring system (which checks for em-dash usage, AI-predictable vocabulary, sentence rhythm variance, claim specificity, and four other dimensions), and it must meet each client\'s individual brand voice requirements. Without automated prompt evaluation, these standards are aspirations rather than guarantees.',
  solution:
    'We built an eval layer on top of every content-generating prompt in our Skill library. Each prompt is designed with explicit brand voice constraints and output format specifications. After Claude generates content, our validate_content.py script runs the 8-dimension scoring check. Outputs that score below 85 feed the specific failure reasons back into the next generation attempt. Prompts that consistently produce below-threshold scores get redesigned at the prompt level, not patched at the output level.',
  results: [
    { metric: 'Eval dimensions measured per output', improvement: '8', timeframe: 'Automated, before every delivery' },
    { metric: 'Minimum quality threshold', improvement: '85', timeframe: 'On 100-point scale, hard gate' },
    { metric: 'First-pass quality gate rate', improvement: '95%+', timeframe: 'After prompt redesign cycles' },
    { metric: 'Manual QA review rate', improvement: 'Near zero', timeframe: 'For outputs that pass eval gate' },
  ],
}

const faqItems = [
  {
    question: 'What is the difference between prompt engineering and just writing good prompts?',
    answer:
      'Good prompts work on the examples you tested them on. Production prompt engineering is about prompts that work across the full distribution of real inputs your system will encounter, measured against defined quality criteria, tested for robustness, and paired with an eval framework that catches regressions when the prompt changes. The difference shows up at scale, not in demos.',
  },
  {
    question: 'How do you build an eval framework for a subjective task like writing?',
    answer:
      'Subjective does not mean unmeasurable. Our 8-dimension content scoring system measures concrete properties: em-dash count, banned vocabulary patterns, sentence length variance, claim-to-evidence ratio, and others. These are proxy metrics for quality, not perfect measures of it. But they are reproducible and automatable. We design eval dimensions that are specific enough to measure automatically and correlated strongly enough with the quality you actually care about.',
  },
  {
    question: 'How many examples do we need for few-shot prompting to work well?',
    answer:
      'The right number depends on your task. Simple format tasks often work well with 2-3 examples. Complex tasks with diverse inputs may need 8-12. The more important factor than quantity is coverage: your examples should represent the range of inputs your system will actually receive. One example per input category is more valuable than five examples from the same category.',
  },
  {
    question: 'Can you help improve prompts we have already written?',
    answer:
      'We run performance analysis on your existing prompts: define the scoring rubric, build the test case set, measure your current prompts against it, identify the failure modes, and rank the improvements by expected impact. Most existing production prompts have 3-5 specific issues that account for the majority of failures. We address those first.',
  },
  {
    question: 'What does a prompt engineering engagement deliver?',
    answer:
      'The deliverables are: the final prompt(s), an eval suite with test cases and scoring rubric, a baseline measurement report, documentation on how to run evals when you modify the prompt, and a summary of the design decisions made. You own everything. If you change the prompt in the future, you have the tools to measure whether your change is an improvement.',
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
          <Subheading>How We Engineer Prompts</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from use case to production-validated prompt.
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
          title="Claude prompt engineering frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudePromptEngineeringPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/claude-prompt-engineering',
          name: 'Claude Prompt Engineering',
          description:
            'Production-grade Claude prompt engineering with evals. System prompts, caching strategy, example-based prompting, structured output design, and evaluation framework development.',
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
      <FeatureCardsSection {...evalFrameworkData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Validate Your Prompts?"
        heading="Let's measure your current performance and improve it."
        lead="Prompt audit, eval framework setup, performance measurement, and improvement implementation. You leave with prompts that are measurably better and the tools to keep them that way."
        benefits={[
          'Failure mode analysis on your existing prompts',
          'Eval suite with 50+ test cases included',
          'Before/after performance measurement',
        ]}
        submitText="Design Your Prompts"
      />
      <Footer />
    </main>
  )
}
