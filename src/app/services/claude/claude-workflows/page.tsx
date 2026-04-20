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
} from '@/components/service-page-sections'
import { CheckIcon } from '@/components/check-icon'
import {
  RefreshCw,
  Search,
  BarChart2,
  Bell,
  FileText,
  Workflow,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Claude Agentic Workflows | Productized Claude Automation | TheProjectSEO',
  description:
    'Productized agentic workflows built on Claude: research agents, content refresh agents, SEO monitoring agents, reporting pipelines. We run 120 mapped SEO workflows on this exact stack.',
  alternates: {
    canonical: '/services/claude/claude-workflows',
  },
  openGraph: {
    title: 'Claude Agentic Workflows | Productized AI Automation | TheProjectSEO',
    description:
      'Claude-powered agentic workflows for content operations, competitive monitoring, report generation, and data-driven research. Built by the team that runs 120 SEO automation workflows across 15 clients via n8n and Claude Code.',
    url: 'https://theprojectseo.com/services/claude/claude-workflows',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Claude Agentic Workflows',
  title: 'Claude workflows that run your processes',
  accentWord: 'without',
  titleAfterAccent: 'manual intervention',
  description:
    'A workflow built on Claude is not a chatbot with extra steps. It is a system where Claude reasons about what to do next, calls the right tools in the right sequence, handles errors without stopping, and produces structured outputs that downstream systems can use. We have mapped 120 SEO automation workflows on this stack and run them daily across 15 clients via n8n and Claude Code. That operating experience is what we bring to your workflow design.',
  ctaPrimaryText: 'Build Your Workflows',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '120', label: 'Mapped automation workflows in our stack' },
  { value: '15+', label: 'Client workflows running daily' },
  { value: '67', label: 'Skills orchestrated by our workflow system' },
  { value: '4', label: 'MCP integrations powering live data access' },
]

const servicesData = {
  subheading: 'Workflow Types We Build',
  heading: 'Six agentic workflow patterns we build for production teams.',
  lead: 'These are not theoretical architectures. They are patterns we run in our own system and build for clients.',
  services: [
    {
      icon: Search,
      title: 'Research Agents',
      description:
        'Claude-powered research workflows that gather information from multiple sources, combine it coherently, and produce structured documents without human coordination of each step. A research agent takes a brief, plans a research strategy, queries the right sources (web, internal databases, MCP-connected APIs), evaluates source quality, resolves contradictions, and produces a structured research document. What takes a human analyst 3-4 hours takes the agent 15-20 minutes.',
      features: [
        'Multi-source research coordination',
        'Source quality evaluation',
        'Contradiction detection and resolution',
        'Structured output for downstream use',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Content Refresh Agents',
      description:
        'Agents that identify underperforming content, diagnose why it is underperforming, generate specific improvement recommendations, and execute the rewrites. Our own content refresh workflow connects GSC data (via MCP) to identify pages where rankings or CTR have dropped, runs a content audit against current SERP leaders, generates a prioritized improvement plan, and queues rewrites with the relevant brand-specific Skill. The whole sequence runs without a human initiating each step.',
      features: [
        'Performance data integration via GSC MCP',
        'Automated SERP gap analysis',
        'Brand-specific rewrite execution',
        'Before/after performance tracking',
      ],
    },
    {
      icon: BarChart2,
      title: 'SEO Monitoring Agents',
      description:
        'Continuous monitoring agents that track keyword rankings, traffic trends, backlink changes, and technical health. When a metric crosses a defined threshold, the agent does not just send an alert. it diagnoses the likely cause, cross-references with other data sources to confirm the hypothesis, and drafts a recommended action. We run this pattern across all 15 clients. The agent surfaces the problems worth a human\'s attention.',
      features: [
        'Multi-signal threshold monitoring',
        'Automated diagnosis and root cause analysis',
        'Cross-source correlation for confirmation',
        'Prioritized action recommendations',
      ],
    },
    {
      icon: FileText,
      title: 'Report Generation Agents',
      description:
        'Agents that pull data from your analytics stack, structure it into a coherent narrative, flag the metrics that need attention, and produce client-ready reports. Our weekly report workflow pulls GSC, GA4, and BigQuery data via MCP, runs the numbers through our analysis framework, and produces structured reports for each of our 15 clients. A process that previously took 6-8 hours per week takes under 30 minutes.',
      features: [
        'Multi-source data aggregation',
        'Automated narrative generation',
        'Anomaly detection and flagging',
        'Client-ready output formatting',
      ],
    },
    {
      icon: Bell,
      title: 'Alert and Escalation Workflows',
      description:
        'Workflows that monitor your systems, detect conditions that require human attention, and route alerts to the right person with enough context to act immediately. Not every anomaly warrants a human response. An alert workflow that classifies incoming signals, determines severity, enriches the alert with diagnostic context, and routes only the high-priority items to a human reviewer reduces alert fatigue without increasing response time.',
      features: [
        'Signal classification and severity scoring',
        'Alert enrichment with diagnostic context',
        'Smart routing based on alert type',
        'Escalation path definition and testing',
      ],
    },
    {
      icon: Workflow,
      title: 'n8n + Claude Orchestration Workflows',
      description:
        'n8n is the workflow automation layer that schedules, triggers, and orchestrates Claude-powered processes. A workflow that runs every Monday, pulls data from three sources, feeds it to Claude for analysis, and posts the results to Slack requires n8n for the scheduling and orchestration. Claude for the reasoning and synthesis. and MCP servers for the data access. We design and build the full stack.',
      features: [
        'n8n workflow design and implementation',
        'Claude API integration within n8n nodes',
        'Scheduled trigger configuration',
        'Error handling and retry logic',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Workflow selection and scoping',
    description:
      'Not every process should be an agentic workflow. We start by identifying which of your existing processes have the right characteristics: clear inputs and outputs, defined quality criteria, repetitive enough to justify build time, and high enough volume or frequency to produce real ROI. The scoping session produces a ranked list of workflow opportunities with estimated build times and projected time savings.',
  },
  {
    number: '02',
    title: 'Architecture design and tool selection',
    description:
      'We design the workflow architecture: the sequence of Claude actions, the tool calls required, the data sources accessed, the error handling paths, and the output format. For n8n-orchestrated workflows, we design the node graph before touching n8n. For Claude Code-based workflows, we design the agent loop and tool set. The architecture document is reviewed before build starts.',
  },
  {
    number: '03',
    title: 'Build and integration testing',
    description:
      'We build against your real data and systems. Research agents get tested on your actual research briefs. Content refresh agents get tested on your actual underperforming pages. Monitoring agents get tested on your actual metric thresholds and historical data. A workflow that only works on synthetic test data is not a production workflow.',
  },
  {
    number: '04',
    title: 'Production deployment and monitoring setup',
    description:
      'We deploy the workflow, configure monitoring for the workflow itself (not just what it monitors), and run it in parallel with the existing manual process until your team is confident in the outputs. We document the workflow, including how to modify triggers, adjust thresholds, and debug common failure modes. You own the workflow; we hand it over in a state you can operate.',
  },
]

const caseStudyData = {
  subheading: '120 Workflows in Production',
  heading: 'How our n8n + Claude automation stack handles 15 clients with a team of six.',
  challenge:
    'A six-person agency managing 15 active SEO clients generates an enormous amount of repetitive high-stakes work: weekly performance reports, content audits, keyword monitoring, backlink tracking, schema validation, and client communication prep. At the individual task level, these are straightforward. At 15-client scale, running them manually is the entire job.',
  solution:
    'We mapped 120 recurring workflow types and built automated versions of the highest-volume 40. Our n8n instance triggers Claude-powered workflows on schedules: Monday morning briefings that pull live data from GSC, GA4, and Ahrefs via MCP and produce per-client status summaries; weekly reports that aggregate performance data and generate the narrative automatically; content monitoring alerts that diagnose ranking drops and draft action plans before the analyst opens their laptop. Claude handles the reasoning. n8n handles the scheduling. MCP handles the data access.',
  results: [
    { metric: 'Recurring workflows automated', improvement: '40+', timeframe: 'From a mapped 120 total' },
    { metric: 'Weekly reporting time', improvement: '~85%', timeframe: 'Reduction across all 15 clients' },
    { metric: 'Client response time on alerts', improvement: 'Same-day', timeframe: 'vs. next-morning previously' },
    { metric: 'New workflow deployment time', improvement: '2-3 days', timeframe: 'Once architecture is established' },
  ],
}

const whoIsThisForData = [
  {
    profile: 'Operations teams with high-volume repetitive processes',
    problem: 'Your team runs the same analysis, the same report, the same research sequence every week. Every hour spent on repetition is an hour not spent on the judgment calls only humans can make.',
    fit: 'We identify which of your repetitive workflows have clear enough criteria to automate, build them on the Claude + n8n stack, and measure the time recaptured.',
  },
  {
    profile: 'Marketing teams managing multi-channel content operations',
    problem: 'Content refresh, brief generation, performance monitoring, and reporting across multiple channels and stakeholders requires coordination that is hard to scale manually.',
    fit: 'We build content operations workflows that handle the mechanical coordination automatically, surfacing only the decisions that need a human strategist.',
  },
  {
    profile: 'Agencies scaling from boutique to mid-market',
    problem: 'You are adding clients faster than you can add headcount. The processes that worked at 5 clients break at 15. Automation is the only path to scaling without proportional cost.',
    fit: 'We audit your highest-volume processes, identify the automation opportunities, and build the workflow system that lets you serve more clients with the same team.',
  },
  {
    profile: 'Product teams building workflow automation into their product',
    problem: 'You want to offer Claude-powered workflow features to your users but need a reference architecture that handles the edge cases correctly before you ship it.',
    fit: 'We build and test the workflow architecture against real use cases, then document the patterns your engineering team can implement in your product.',
  },
]

const faqItems = [
  {
    question: 'What is an agentic workflow and how is it different from basic automation?',
    answer:
      'Basic automation follows fixed rules: if X, then Y. Agentic workflows use Claude to reason about what to do next based on the current state of the task. If the research agent cannot find a good source for a claim, it decides to try a different search approach rather than failing. If the content refresh agent identifies a new competitor that was not in the original brief, it incorporates that finding. The reasoning capacity is what makes it agentic.',
  },
  {
    question: 'Do your workflows require n8n specifically or can they work with other orchestration tools?',
    answer:
      'We build on n8n because it is what we run in production. But the patterns work on other orchestration platforms. Zapier, Make (formerly Integromat), AWS Step Functions, or custom Python orchestration can all serve the same scheduling and triggering role. If you have an existing automation stack, we design the Claude workflow layer to integrate with it.',
  },
  {
    question: 'How do agentic workflows handle errors and edge cases?',
    answer:
      'Error handling is a first-class design concern in every workflow we build. We define explicit error states, retry logic for transient failures, escalation paths for cases that require human attention, and fallback behaviors when primary data sources are unavailable. A workflow that fails silently or stops on unexpected input is not production-ready.',
  },
  {
    question: 'How long does it take to build a production workflow?',
    answer:
      'A simple linear workflow (one input, one Claude call, structured output) takes 1-2 weeks. A multi-step workflow with external data sources, conditional logic, and error handling takes 3-5 weeks. A complex orchestration workflow with multiple Claude agents, MCP integrations, and downstream system writes takes 5-8 weeks. We scope precisely after reviewing your specific workflow requirements.',
  },
  {
    question: 'Can we modify and extend workflows after you deliver them?',
    answer:
      'Yes. We document every workflow with a technical spec covering the trigger configuration, the Claude prompt used at each step, the tool calls involved, the error handling paths, and how to modify thresholds and outputs. n8n workflows are visual and modifiable without code. Claude prompts in the workflow are plaintext and editable. You own the workflow and can extend it without us.',
  },
]

/* -------------------------------------------------------------------------- */
/* Who Is This For Section */
/* -------------------------------------------------------------------------- */

function WhoIsThisForSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Who This Is For</Subheading>
          <Heading as="h2" className="mt-2">
            Four teams ready for agentic workflows.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {whoIsThisForData.map((item, index) => (
            <div key={index} className="bg-paper p-10">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">
                {item.profile}
              </h3>
              <div className="mb-4">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">The problem</p>
                <p className="text-sm leading-relaxed text-slate">{item.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-2">How we help</p>
                <p className="text-sm leading-relaxed text-slate">{item.fit}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Process Section */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>How We Build Workflows</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from process audit to production automation.
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
          title="Claude agentic workflows frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeWorkflowsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/claude-workflows',
          name: 'Claude Agentic Workflows',
          description:
            'Productized agentic workflows built on Claude: research agents, content refresh agents, SEO monitoring agents, n8n orchestration, and automated reporting pipelines.',
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
      <WhoIsThisForSection />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Automate Your Workflows?"
        heading="Let's map your processes and build the first workflow."
        lead="A process audit, workflow architecture design, and a production build. Your first automated workflow is running within 3-5 weeks."
        benefits={[
          'Process audit and workflow opportunity ranking included',
          'Architecture designed before build starts',
          'Production deployment with monitoring setup',
        ]}
        submitText="Build Your Workflows"
      />
      <Footer />
    </main>
  )
}
