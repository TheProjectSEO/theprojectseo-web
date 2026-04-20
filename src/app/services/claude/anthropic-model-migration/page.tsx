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
  ArrowRight,
  BarChart2,
  FlaskConical,
  Shield,
  Cpu,
  RefreshCw,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Anthropic Model Migration | Claude 3.5 to 4.x Migration | TheProjectSEO',
  description:
    'Migrate Claude integrations between model generations safely. Claude 3.5 to 4.x migration with systematic eval, cost analysis, regression detection, and staged rollout. No production surprises.',
  alternates: {
    canonical: '/services/claude/anthropic-model-migration',
  },
  openGraph: {
    title: 'Anthropic Model Migration | Safe Claude Version Upgrades | TheProjectSEO',
    description:
      'Systematic Claude model migration: eval your prompts on the target model, detect regressions, adapt what needs adapting, and roll out safely. We have done this migration in our own production stack.',
    url: 'https://theprojectseo.com/services/claude/anthropic-model-migration',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Anthropic Model Migration',
  title: 'Migrate your Claude integration without',
  accentWord: 'breaking',
  titleAfterAccent: 'what works',
  description:
    'Upgrading from Claude 3.5 to Claude 4.x is not just a model ID change. Prompt patterns that produce consistent outputs on 3.5 may behave differently on 4.x. Extended thinking is new and worth evaluating. Pricing, context windows, and capability differences affect architectural decisions. We run systematic migrations: eval your existing prompts on the target model, identify every regression, adapt what needs adapting, and plan a staged rollout with clear rollback paths.',
  ctaPrimaryText: 'Plan Your Migration',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '4.x', label: 'Current production model generation' },
  { value: '67', label: 'Prompts we have migrated in our own stack' },
  { value: '0', label: 'Production regressions after staged rollout' },
  { value: '50+', label: 'Test cases per prompt in migration eval' },
]

const servicesData = {
  subheading: 'What Migration Covers',
  heading: 'Five components of a safe Claude model migration.',
  lead: 'Migration is not one step. It is a sequence of steps, each of which reduces risk before the next. Skip a step and you find the problem in production.',
  services: [
    {
      icon: FlaskConical,
      title: 'Prompt Evaluation on Target Model',
      description:
        'Before anything else, we run your existing prompts against the target model on a representative test case set. This produces an honest picture of what breaks, what improves, and what stays the same. We do not skip this step. A migration decision made without eval data is a guess. The eval takes 3-5 business days and produces a documented report of every prompt\'s performance on the new model.',
      features: [
        'Representative test case set design (50+ cases per prompt)',
        'Side-by-side output comparison',
        'Regression identification and categorization',
        'Improvement detection and documentation',
      ],
    },
    {
      icon: BarChart2,
      title: 'Cost and Latency Analysis',
      description:
        'Claude 4.x pricing and context windows differ from 3.5. The cost impact of migration depends on your call patterns: how long your prompts are, how many tokens your outputs consume, whether your workload benefits from prompt caching differently on the new model. We run cost modeling against your actual API usage data, so the financial impact of migration is known before you commit.',
      features: [
        'Token usage analysis across your call patterns',
        'Cost comparison at current and projected volumes',
        'Prompt caching opportunity analysis on target model',
        'Latency benchmarking on representative workloads',
      ],
    },
    {
      icon: Cpu,
      title: 'Extended Thinking Evaluation',
      description:
        'Extended thinking is available on Claude 4.x models and provides measurable quality improvements on certain task types. Migration is the right time to evaluate whether your use case benefits from it. We test the specific tasks in your integration. analytical reasoning, multi-step planning, complex decisions. against both standard generation and extended thinking, with cost-per-quality-unit measurement for each.',
      features: [
        'Task classification for thinking applicability',
        'Quality measurement with and without extended thinking',
        'Cost-per-quality-unit comparison',
        'Budget token configuration recommendations',
      ],
    },
    {
      icon: ArrowRight,
      title: 'Prompt Adaptation',
      description:
        'Most prompts do not need major changes for migration. But some do. Prompts that relied on specific 3.5 formatting behaviors, prompts that assumed specific refusal patterns, prompts that were tuned for 3.5\'s particular response style. These need targeted adaptation. We identify exactly which prompts need changes, make the minimum necessary adaptations, and re-eval the adapted prompts to confirm the regression is resolved.',
      features: [
        'Regression-driven adaptation planning',
        'Minimum necessary change principle',
        'Re-evaluation of adapted prompts',
        'Change documentation for your team',
      ],
    },
    {
      icon: Shield,
      title: 'Staged Rollout and Rollback Planning',
      description:
        'We do not switch all traffic to the new model at once. We design a staged rollout: start with a small percentage of traffic, measure output quality against the baseline, expand only after confirming performance meets the threshold. The rollback plan is designed before the rollout starts: exactly which configuration change reverts to the previous model if a problem is detected in production.',
      features: [
        'Traffic split configuration for staged rollout',
        'Quality monitoring during rollout phase',
        'Expansion criteria definition',
        'Rollback procedure documentation',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Post-Migration Monitoring',
      description:
        'Migration does not end at 100% traffic on the new model. We set up monitoring that watches the quality metrics that matter for your use case for 2-4 weeks post-migration. If output quality drifts in any dimension. format compliance, accuracy, tone consistency. we detect it before it compounds and address it at the prompt level.',
      features: [
        'Quality metric monitoring configuration',
        'Anomaly detection and alerting',
        '2-4 week post-migration observation period',
        'Prompt iteration if drift is detected',
      ],
    },
  ],
}

const migrationRisksData = {
  subheading: 'What Can Go Wrong',
  heading: 'The four migration risks that catch teams by surprise.',
  lead: 'None of these are disasters if you catch them before production. All of them are avoidable with a systematic migration process.',
  cards: [
    {
      title: 'Prompt Regressions',
      items: [
        'Format adherence changes between model versions',
        'Different refusal behavior on edge case inputs',
        'Style and tone shifts that violate brand standards',
        'Structured output schema violations under new model',
      ],
    },
    {
      title: 'Cost Surprises',
      items: [
        'Token usage changes under new model\'s tokenization',
        'Different cache hit rates with new prompt structure',
        'Extended thinking cost if adopted without modeling',
        'Context window differences affecting call frequency',
      ],
    },
    {
      title: 'Capability Gaps',
      items: [
        'Tool use behavior differences in multi-step workflows',
        'Multi-turn conversation state handling changes',
        'System prompt interpretation differences',
        'Example-based prompt sensitivity shifts',
      ],
    },
    {
      title: 'Integration Failures',
      items: [
        'API parameter deprecations in newer model versions',
        'Response format changes in structured output mode',
        'Streaming behavior differences in long responses',
        'Rate limit and tier differences between models',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Current state inventory',
    description:
      'We document every prompt, every API call pattern, every tool definition, and every expected output format in your integration. This inventory is the baseline. We need to know what we are migrating before we can plan a safe path.',
  },
  {
    number: '02',
    title: 'Parallel evaluation on target model',
    description:
      'We run your full prompt inventory against the target model with a representative test case set. Each prompt gets at least 50 test cases. The evaluation produces a regression report: which prompts have changed behavior, what the nature of the change is, whether the change is a regression or an improvement, and what adaptation is required.',
  },
  {
    number: '03',
    title: 'Adaptation and cost modeling',
    description:
      'We adapt the prompts that require changes. minimal, targeted changes that resolve the regression without introducing new behavior. In parallel, we run cost modeling against your actual API usage data to produce a precise forecast of the cost impact of migration.',
  },
  {
    number: '04',
    title: 'Staged rollout and post-migration monitoring',
    description:
      'We configure the staged rollout, monitor quality metrics through the expansion phases, confirm the migration is complete, and run post-migration monitoring for 2-4 weeks. The engagement closes when you have operated on the new model long enough to be confident in the performance.',
  },
]

const caseStudyData = {
  subheading: 'Migration in Our Own Stack',
  heading: 'How we migrated our 67-prompt production system without a single client-facing regression.',
  challenge:
    'Our agency runs on 67 production Skills, each containing Claude prompts tuned for specific client workflows. Migrating these prompts to a new model version means 67 potential regression points across 15 active clients. A regression in a content writing Skill means a client delivery fails quality check. A regression in a schema generation Skill means invalid structured data goes out. The stakes are real.',
  solution:
    'We ran a systematic migration process before touching production: built a 50-case test suite for each high-stakes Skill, ran parallel evaluation against the target model, identified 8 Skills with behavioral changes that qualified as regressions, made targeted adaptations to those 8 prompts, ran a staged rollout starting with our lowest-risk client workflows, and expanded only after confirming quality gate pass rates held at 95%+. The migration took 3 weeks. Zero client-facing regressions.',
  results: [
    { metric: 'Skills evaluated in migration', improvement: '67', timeframe: 'Full production inventory' },
    { metric: 'Regressions identified pre-migration', improvement: '8', timeframe: 'All caught in eval, none in production' },
    { metric: 'Migration timeline', improvement: '3 weeks', timeframe: 'From eval start to 100% traffic' },
    { metric: 'Production regressions', improvement: '0', timeframe: 'Across all 15 clients post-migration' },
  ],
}

const faqItems = [
  {
    question: 'Is migrating from Claude 3.5 to 4.x really necessary?',
    answer:
      'Not always immediately. Claude 3.5 Sonnet remains capable and Anthropic maintains backward compatibility for current-generation models. But Claude 4.x models offer meaningful improvements on complex reasoning, extended thinking capability, and long-context tasks. Whether migration is worth it depends on which capabilities you need and whether the improvement on your specific tasks justifies the migration effort. We can evaluate this for your use case before you commit to a migration.',
  },
  {
    question: 'How long does a migration typically take?',
    answer:
      'For a focused integration with 5-15 prompts, 2-3 weeks: 1 week for evaluation, a few days for adaptation, 1-2 weeks for staged rollout. For larger systems with 30+ prompts, complex tool use patterns, or multi-agent architectures, 4-6 weeks. The timeline is driven primarily by how many prompts need adaptation and how conservative the staged rollout needs to be.',
  },
  {
    question: 'What if we discover major regressions in the eval?',
    answer:
      'Major regressions are exactly what the eval phase is for. If evaluation reveals that the target model produces substantially worse outputs on your core use cases, we document the findings and you make an informed decision about whether to proceed, delay, or invest more heavily in prompt adaptation. We do not rush through regressions. A regression discovered in eval is a manageable problem. A regression discovered in production is a crisis.',
  },
  {
    question: 'Can you help us stay current with future Anthropic model releases?',
    answer:
      'Yes. For teams on retainer, we include model release monitoring: reviewing Anthropic release notes, evaluating new capabilities against your use case, and recommending migration timing when a new model offers meaningful improvements for your workflows. Migration readiness is easier when you are not starting from scratch each time.',
  },
  {
    question: 'What do you need from us to start a migration engagement?',
    answer:
      'We need: your current model configuration (model ID, API call patterns), your existing prompts and system prompts, a set of representative real-world inputs from your production system (we use these to build the test case set), and access to your current model\'s outputs on those inputs (for baseline comparison). If you do not have logged outputs, we generate the baseline in the first week of the engagement.',
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
          <Subheading>How We Migrate</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from inventory to confirmed production migration.
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
          title="Anthropic model migration frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function AnthropicModelMigrationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/anthropic-model-migration',
          name: 'Anthropic Model Migration',
          description:
            'Migrate Claude integrations between model generations safely. Claude 3.5 to 4.x migration with systematic evaluation, regression detection, prompt adaptation, and staged rollout.',
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
      <FeatureCardsSection {...migrationRisksData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Migrate Safely?"
        heading="Let's evaluate your prompts on the target model before you commit."
        lead="Prompt inventory, parallel evaluation, regression report, adaptation plan, and staged rollout. You know exactly what you are getting into before migration starts."
        benefits={[
          'Full prompt inventory and evaluation included',
          'Regression report before any production changes',
          'Staged rollout with rollback plan',
        ]}
        submitText="Plan Your Migration"
      />
      <Footer />
    </main>
  )
}
