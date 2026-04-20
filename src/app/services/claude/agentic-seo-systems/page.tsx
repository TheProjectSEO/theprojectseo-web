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
  Brain,
  BarChart2,
  FileText,
  Database,
  Workflow,
  Search,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Agentic SEO Systems | Claude-Powered SEO Operating System | TheProjectSEO',
  description:
    'Productized Claude-powered SEO operating systems for in-house teams. Reference our 67-skill internal system, seo_query_kb RAG, and 120 n8n automation workflows. Built to scale with your team.',
  alternates: {
    canonical: '/services/claude/agentic-seo-systems',
  },
  openGraph: {
    title: 'Agentic SEO Systems | Claude-Powered SEO Operations | TheProjectSEO',
    description:
      'Claude-powered SEO operating systems: 67-skill agent frameworks, seo_query_kb RAG, n8n automation, and MCP data integrations. We run this system. We build it for in-house SEO teams.',
    url: 'https://theprojectseo.com/services/claude/agentic-seo-systems',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Agentic SEO Systems',
  title: 'Claude-powered SEO operations built to',
  accentWord: 'scale',
  titleAfterAccent: 'with your team',
  description:
    'Most in-house SEO teams have data in five places, produce outputs in three formats, and run the same analytical sequences manually every week. An agentic SEO system changes that: Claude handles the research, synthesis, quality checking, and report generation. Your team handles the strategic decisions that actually require human judgment. We did not design this system on a whiteboard. We run it across 15 clients daily. We know where the hard parts are.',
  ctaPrimaryText: 'Build Your SEO System',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '67', label: 'SEO Skills in our production system' },
  { value: '120', label: 'Automation workflows mapped and built' },
  { value: '15+', label: 'Clients served by one AI-native team' },
  { value: '100%', label: 'Citation rate on seo_query_kb queries' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Six components of a complete agentic SEO operating system.',
  lead: 'These are the same components that power our own agency. We assemble the right subset for your team size, maturity, and workflow requirements.',
  services: [
    {
      icon: Brain,
      title: 'SEO Knowledge Base and RAG System',
      description:
        'Our seo_query_kb tool is a RAG system indexing Ahrefs research, Backlinko data studies, Moz methodology, Google Search Central documentation, and Search Engine Journal analysis. Claude queries it before answering any SEO question. Every answer is grounded in citable research with 100% citation rate. We build the same system for your in-house team: your internal research, your methodology documents, your client case studies, all accessible to Claude via MCP.',
      features: [
        'Supabase pgvector knowledge base indexing',
        'Hybrid search with keyword and semantic retrieval',
        'Anthropic citations API for grounded answers',
        'MCP tool wrapping for Claude Code access',
      ],
    },
    {
      icon: FileText,
      title: 'SEO Skill Library',
      description:
        'Our 67-Skill library covers every SEO function: keyword research, brief generation, writing and editing, schema markup, technical audit analysis, outreach, performance reporting, and competitive analysis across multiple client contexts. Each Skill is a SKILL.md file with explicit quality thresholds, brand voice constraints, and tool integrations. We build a custom Skill library for your team: fewer Skills, tuned to your specific workflows and clients.',
      features: [
        'Custom Skill count matched to your workflow complexity',
        'Brand and tone constraints built into every Skill',
        'Quality threshold configuration per Skill',
        'Slash command integration for one-command invocation',
      ],
    },
    {
      icon: Database,
      title: 'Data Integration via MCP',
      description:
        'SEO decisions require live data. An in-house SEO system that cannot access current rankings, traffic trends, and crawl data is useful for content generation but blind to what is actually happening in search. We build MCP servers that give Claude structured access to Google Search Console, Google Analytics 4, Ahrefs (or SEMrush), and your BigQuery data warehouse. The data layer makes the system capable of decisions, not just drafts.',
      features: [
        'Google Search Console MCP integration',
        'GA4 MCP for traffic and conversion data',
        'Ahrefs or SEMrush API MCP connection',
        'BigQuery MCP for warehouse-level analysis',
      ],
    },
    {
      icon: Workflow,
      title: 'n8n Automation Workflows',
      description:
        'We have mapped 120 SEO automation workflows. The 40 we run daily include: weekly ranking reports that pull GSC data, run it through Claude for narrative generation, and post structured summaries to Slack; content audit workflows that identify underperforming pages and queue improvement tasks; competitor monitoring that alerts when a competitor acquires a significant backlink or publishes content targeting your keywords. We build the subset most valuable to your team.',
      features: [
        'Scheduled reporting with Claude-generated narrative',
        'Content performance monitoring and alerting',
        'Competitor signal detection and notification',
        'Automated briefing preparation for team meetings',
      ],
    },
    {
      icon: BarChart2,
      title: 'Content Quality Gate System',
      description:
        'Our validate_content.py script runs an 8-dimension quality check on every content output before delivery: anti-AI language patterns, claim specificity, sentence rhythm variance, brand voice alignment, factual citation rate, and three others. Any output below 85 on the 100-point scale gets rejected with specific failure reasons. The system produces content that reads human-written because it was validated by a system designed to detect AI-predictable patterns.',
      features: [
        '8-dimension automated quality scoring',
        'Anti-AI language detection (200+ patterns)',
        'Brand voice alignment measurement',
        'Rejection feedback for revision guidance',
      ],
    },
    {
      icon: Search,
      title: 'Competitive Intelligence Automation',
      description:
        'Manual competitor tracking does not scale. An agentic competitive intelligence system monitors your top 5-10 competitors continuously: new keyword rankings, content published, backlinks acquired, and SERP position changes. When a competitor makes a significant move, the system diagnoses the tactic, assesses the threat level, and drafts a recommended response. Your team reviews the recommendation rather than first discovering the competitive change.',
      features: [
        'Automated competitor ranking and content monitoring',
        'New backlink detection and quality scoring',
        'SERP feature change tracking',
        'Threat assessment and response drafting',
      ],
    },
  ],
}

const systemArchitectureData = {
  subheading: 'System Architecture',
  heading: 'The four layers of our 67-skill SEO operating system.',
  lead: 'Each layer handles a different concern. Together they produce an SEO operation that is consistent, data-grounded, and scalable.',
  cards: [
    {
      title: 'Knowledge Layer',
      items: [
        'seo_query_kb RAG: 4 research sources indexed',
        '100% citation rate on all knowledge queries',
        'Client context files (CLAUDE.md per client)',
        'Decision log for consistent strategic choices',
      ],
    },
    {
      title: 'Execution Layer',
      items: [
        '67 Skills covering every SEO workflow function',
        'Client-specific Skills for brand voice adherence',
        'Slash commands for one-invocation workflows',
        'Hook enforcement for quality and policy compliance',
      ],
    },
    {
      title: 'Data Layer',
      items: [
        'GSC MCP: real-time ranking and impression data',
        'Ahrefs MCP: backlink and competitor intelligence',
        'BigQuery MCP: warehouse-level aggregated analysis',
        'GA4 MCP: traffic, conversion, and user behaviour',
      ],
    },
    {
      title: 'Automation Layer',
      items: [
        '40+ n8n workflows running on schedule',
        'Weekly reporting automated across 15 clients',
        'Alert routing for ranking drops and competitor moves',
        'Content monitoring with automatic queue management',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'SEO workflow audit and system design',
    description:
      'We map your current SEO operation: which workflows run weekly, which require the most manual effort, where quality inconsistencies appear, and which data sources your team relies on. That audit produces a system design: which components to build first, which MCP integrations are worth the effort, and how many Skills your team actually needs. The design is specific to your team and your client base, not a generic template.',
  },
  {
    number: '02',
    title: 'Knowledge base and data integration build',
    description:
      'The foundation of an effective agentic SEO system is data access. We build the knowledge base first (your research documents, methodology, and client context indexed for Claude), then the MCP data integrations (GSC, Ahrefs, and whatever analytics stack you use). This layer is what makes the system\'s outputs trustworthy rather than just fluent.',
  },
  {
    number: '03',
    title: 'Skill library and workflow automation build',
    description:
      'We build the Skill library in priority order: the Skills that support your highest-volume workflows first. Each Skill is tested against real examples from your actual client work, not synthetic inputs. Simultaneously, we build the n8n automation workflows that handle the scheduled, repetitive processes your team currently runs manually.',
  },
  {
    number: '04',
    title: 'Team enablement and system handover',
    description:
      'We train your team on the system they will operate: how to invoke Skills, how to interpret data from the MCP integrations, how to modify automation workflows, and how to extend the Skill library as new needs emerge. The system is documented and owned by your team. Ongoing support is available as a retainer, but dependency on us is never the design goal.',
  },
]

const caseStudyData = {
  subheading: 'The Reference Implementation',
  heading: 'Our agency as a live proof of concept: 15 clients, six people, one AI-native system.',
  challenge:
    'Managing SEO for 15 active clients across five industries, with different brand voices, different keyword strategies, different technical requirements, and different reporting cadences, is not a problem that scales with headcount. Adding a seventh team member does not solve the coordination problem. A system designed for the work does.',
  solution:
    'We built the system we now offer: 67 Skills covering every function, four MCP servers for data access, a fine-tuned Qwen3.5-27B SEO specialist model accessible via seo_query_kb, 40 n8n automation workflows handling scheduled processes, and an 8-dimension content quality gate that validates every output before delivery. Six people serve 15 clients with consistent quality because the system handles the mechanical execution. The team handles the strategy, the client relationships, and the judgment calls the system cannot make.',
  results: [
    { metric: 'Client workflows automated', improvement: '40+', timeframe: 'From 120 mapped, highest ROI first' },
    { metric: 'SEO knowledge citations', improvement: '100%', timeframe: 'Across all seo_query_kb responses' },
    { metric: 'Content quality gate pass rate', improvement: '95%+', timeframe: 'First-pass, before any revision' },
    { metric: 'Weekly reporting time per client', improvement: '-85%', timeframe: 'Automated via n8n + Claude' },
  ],
}

const faqItems = [
  {
    question: 'How is this different from an SEO tool subscription?',
    answer:
      'SEO tools provide data and dashboards. An agentic SEO system takes action on that data: Claude synthesizes the rankings data into a diagnosis, generates the content brief, drafts the content, validates it against your quality standards, and queues it for review. The system replaces manual analytical workflows, not just adds another dashboard. You still need the data tools; the agentic system sits on top of them.',
  },
  {
    question: 'What does the system actually automate vs. what still requires human judgment?',
    answer:
      'The system automates data aggregation and synthesis, content brief and draft generation, quality validation, routine reporting, and competitive signal monitoring. It surfaces decisions that require human judgment: strategic pivots, client-facing communications, creative direction, budget allocation, and anything where the context needed exceeds what the system can retrieve. The goal is not to replace SEO judgment. It is to ensure that human judgment is applied to the decisions that actually require it.',
  },
  {
    question: 'How long does it take to build a complete system?',
    answer:
      'A focused build covering the highest-priority components (knowledge base, 10-15 core Skills, 2-3 data integrations, and 5-8 automation workflows) takes 8-12 weeks. A full-scale system matching the depth of our own 67-Skill, 40-workflow implementation takes 4-6 months. We recommend starting with the focused build and expanding once your team has adopted the initial system.',
  },
  {
    question: 'Can the system be built around tools we already use (SEMrush, HubSpot, etc.)?',
    answer:
      'Yes. MCP servers can be built for any tool with a structured API. If you use SEMrush instead of Ahrefs, we build the SEMrush MCP server. If your CRM is HubSpot, the Salesforce attribution patterns adapt. The core architecture is tool-agnostic. The specific integrations are built to your stack.',
  },
  {
    question: 'Does the system require ongoing maintenance?',
    answer:
      'Yes, at two levels. The data integrations need credential management and occasional updates when APIs change. The Skill library benefits from quarterly review: new workflows emerge, old ones become less relevant, quality thresholds may need adjustment. We offer ongoing maintenance retainers covering both. For teams that want full independence, we document the maintenance procedures in detail during handover.',
  },
  {
    question: 'What is the minimum team size that benefits from this system?',
    answer:
      'A two-person SEO team managing three or more clients will see significant benefit from a focused build. The break-even point on build investment is typically 3-6 months for teams at that scale. Larger teams managing more clients see proportionally larger returns. We do a specific ROI analysis before any engagement starts: we model your current time spend on automatable tasks and calculate the payback period for the recommended build scope.',
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
          <Subheading>How We Build Your System</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from workflow audit to team-operated SEO system.
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
          title="Agentic SEO system frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function AgenticSeoSystemsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/agentic-seo-systems',
          name: 'Agentic SEO Systems',
          description:
            'Productized Claude-powered SEO operating systems for in-house teams. 67-skill agent frameworks, seo_query_kb RAG, MCP data integrations, and n8n automation. Built on our live production system.',
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
      <FeatureCardsSection {...systemArchitectureData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Build Your SEO Operating System?"
        heading="Let's audit your workflows and scope the build."
        lead="SEO workflow audit, ROI analysis, system design, and a phased build starting with your highest-value automation opportunities."
        benefits={[
          'Workflow audit and ROI analysis included',
          'System designed around your existing tool stack',
          'Phased build starting with fastest-payback components',
        ]}
        submitText="Build Your SEO System"
      />
      <Footer />
    </main>
  )
}
