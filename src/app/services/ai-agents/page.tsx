import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Heading, Subheading, Lead } from '@/components/text'
import Link from 'next/link'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  CaseStudyDark,
  CTAFormSection,
} from '@/components/service-page-sections'
import {
  Search,
  FileText,
  BarChart3,
  PieChart,
  FileBarChart,
  Workflow,
  ArrowRight,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Agents for Marketing & SEO | Autonomous Marketing Stack | TheProjectSEO',
  description:
    'Six production-grade AI agents covering SEO, PPC, content production, RevOps, analytics queries, and weekly reporting. Built on the Claude Agent SDK with MCP data connections. Redirect analyst hours to strategy.',
  alternates: {
    canonical: '/services/ai-agents',
  },
  openGraph: {
    title: 'AI Agents for Marketing & SEO | TheProjectSEO',
    description:
      'Six autonomous marketing agents built on the Anthropic stack. Each agent handles a distinct function: SEO, PPC, content production, pipeline hygiene, analytics queries, and client reporting.',
    url: 'https://theprojectseo.com/services/ai-agents',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Marketing & SEO | TheProjectSEO',
    description:
      'Six production-grade AI agents covering SEO, PPC, content production, pipeline hygiene, natural-language analytics, and automated client reporting.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                  */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI Agent Suite',
  title: 'Six AI agents that run your',
  accentWord: 'marketing stack',
  titleAfterAccent: 'autonomously',
  description:
    'Most marketing teams spend 60% of analyst time on tasks that follow a pattern: pull data, spot the anomaly, write the recommendation, update the report. Our AI agent suite handles that loop. Each agent covers one function, runs on the Claude Agent SDK, and escalates to your team only when a decision needs a human.',
  ctaPrimaryText: 'Deploy Your Agent Suite',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#agents',
}

const statsData = [
  { value: '6', label: 'Specialized AI agents' },
  { value: '~40hrs', label: 'Analyst time redirected monthly' },
  { value: '24/7', label: 'Monitoring and optimization' },
  { value: '100%', label: 'Human-in-the-loop on spend changes' },
]

const caseStudyData = {
  subheading: 'What the Full Suite Delivers',
  heading: 'One SaaS team replaced three analyst roles with the full agent suite.',
  challenge:
    'A 30-person B2B SaaS company was spending $18,000 per month on a three-person analytics and ops team whose primary output was weekly reports, bid adjustments, and content briefs. All pattern-following work. None of it strategic. The team was stretched across Google Ads management, GSC pulls, HubSpot hygiene, and monthly reporting. Nothing was getting done fast enough.',
  solution:
    'We deployed the full six-agent suite over eight weeks. Content optimization and SERP monitoring fell to the AI SEO Agent. Daily Google Ads bid adjustments and keyword pruning went to the AI PPC Agent. Two validated articles per week came out of the AI Content Agent without adding headcount. HubSpot stalled-deal monitoring, contact enrichment, and lead scoring updates ran through the AI RevOps Agent automatically. For analytics, the team started asking plain-English questions against their GA4 BigQuery export rather than filing data requests. Every Monday at 7am, the AI Reporting Agent delivered the weekly client summary.',
  results: [
    {
      metric: 'Analyst hours redirected',
      improvement: '~160hrs/mo',
      timeframe: 'From pattern tasks to strategic work',
    },
    {
      metric: 'PPC cost per lead',
      improvement: '-31%',
      timeframe: 'After 90 days of bid optimization',
    },
    {
      metric: 'Content output',
      improvement: '4x',
      timeframe: 'Same team, without hiring',
    },
    {
      metric: 'Report turnaround',
      improvement: '72hrs to 2hrs',
      timeframe: 'Weekly client report cycle',
    },
  ],
}

const faqItems = [
  {
    question: 'What does each AI agent actually do without human input?',
    answer:
      'Each agent handles its defined function autonomously within set boundaries. The PPC agent adjusts bids and mines negatives daily without approval, but requires sign-off on spend changes above 20%. The content agent drafts, fact-checks, and validates before flagging for editorial review. The reporting agent compiles, correlates, and ships. The line between autonomous and escalated is defined in the engagement scope before go-live.',
  },
  {
    question: 'What is the underlying technology stack?',
    answer:
      'All agents are built on the Claude Agent SDK with prompt caching enabled to reduce latency and cost on repetitive context. MCP servers connect each agent to its data sources: Google Ads API, GSC, GA4 BigQuery export, HubSpot or Salesforce, Ahrefs, and Supabase for session data. Slack is used for escalation alerts. Google Sheets for output that non-technical stakeholders need to read. Custom Skills libraries enforce brand voice and editorial standards per client.',
  },
  {
    question: 'How long does deployment take?',
    answer:
      'A single agent typically goes live in three to four weeks: one week for data source connection and testing, one week for behavior configuration and approval gate setup, and one to two weeks of supervised runs before handover. The full six-agent suite runs eight to twelve weeks for a clean deployment. We do not rush configuration. A misconfigured agent that makes autonomous decisions is worse than no agent at all.',
  },
  {
    question: 'Can agents integrate with tools we already use?',
    answer:
      'Yes. MCP servers are the integration layer. Pre-built connections cover Google Ads, GSC, GA4, HubSpot, Salesforce, Ahrefs, and four more. Custom integrations are scoped per engagement. If your CRM or analytics tool exposes an API, we build the MCP connector. The agents themselves are tool-agnostic; the model underneath is Claude.',
  },
  {
    question: 'What are the approval gates for autonomous actions?',
    answer:
      'Approval gates are defined during the scoping call and vary by agent and client risk tolerance. Common gates: PPC bid changes above 20% require Slack approval within 4 hours or are held. Content goes through editorial QA before publish. RevOps contact updates above a volume threshold trigger a weekly review. Spend-impacting decisions never execute without at minimum a Slack notification with a cancel window.',
  },
  {
    question: 'How do you handle errors and unexpected outputs?',
    answer:
      'Every agent runs with retry logic and fallback patterns. If an API call fails three times, the agent logs the failure and notifies via Slack rather than proceeding with incomplete data. Content outputs go through an eight-dimension validation script before delivery. PPC changes are staged before execution. Rollback is built into any action that writes to a production system.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Agent Cards Grid                                                           */
/* -------------------------------------------------------------------------- */

const agents = [
  {
    icon: Search,
    name: 'AI SEO Agent',
    slug: '/services/ai-agents/ai-seo-agent',
    tagline: 'Content optimization, SERP analysis, entity coverage, CTR improvement.',
    autonomousTasks: [
      'Daily SERP monitoring for 500+ tracked keywords',
      'Entity coverage scoring against top-ranking pages',
      'Internal link recommendations across full content library',
      'Meta title and description optimization at scale',
    ],
    escalates: 'Ranking drops >15% in 7 days or new competitor entering top 3.',
    stack: 'Claude Agent SDK, DataForSEO MCP, Ahrefs MCP, Supabase',
  },
  {
    icon: BarChart3,
    name: 'AI PPC Agent',
    slug: '/services/ai-agents/ai-ppc-agent',
    tagline: 'Daily bid optimization, keyword discovery, ad copy testing, negative mining.',
    autonomousTasks: [
      'Daily bid adjustments across all active campaigns',
      'New keyword discovery from search terms report',
      'Negative keyword mining from irrelevant queries',
      'Ad copy variant rotation based on CTR signals',
    ],
    escalates: 'Spend changes >20%, new campaign launches, CPA exceeds target by 40%.',
    stack: 'Claude Agent SDK, Google Ads API MCP, BigQuery MCP',
  },
  {
    icon: FileText,
    name: 'AI Content Agent',
    slug: '/services/ai-agents/ai-content-agent',
    tagline: 'Brief to publish: SERP research, citation-grounded drafting, quality validation, and CMS staging.',
    autonomousTasks: [
      'Keyword-grounded brief generation from SERP analysis',
      'Draft production using seo-kb RAG for citation accuracy',
      'Eight-dimension content quality validation',
      'Image brief generation and CMS staging',
    ],
    escalates: 'Validation score below 75, factual claims needing expert review, new topics outside existing KB.',
    stack: 'Claude Agent SDK, seo_query_kb MCP, Ahrefs MCP, CMS API',
  },
  {
    icon: Workflow,
    name: 'AI RevOps Agent',
    slug: '/services/ai-agents/ai-revops-agent',
    tagline: 'Pipeline hygiene, deal-stage monitoring, lead scoring from signal graphs.',
    autonomousTasks: [
      'Stalled deal detection and AE Slack alerts at 72-hour mark',
      'Contact enrichment from firmographic data sources',
      'Lead scoring model updates from engagement signals',
      'Pipeline coverage reports delivered weekly',
    ],
    escalates: 'Deals stalled >14 days, contacts missing required fields above 30%, scoring model drift.',
    stack: 'Claude Agent SDK, HubSpot MCP, Salesforce MCP, Slack MCP',
  },
  {
    icon: PieChart,
    name: 'AI Analytics Agent',
    slug: '/services/ai-agents/ai-analytics-agent',
    tagline: 'Natural-language queries on GA4 and BigQuery. Ask questions, get answers and charts.',
    autonomousTasks: [
      'NL-to-SQL translation against GA4 BigQuery export',
      'Automated anomaly detection on core KPIs',
      'Weekly traffic summary generation with YoY comparison',
      'Chart and data table generation from query results',
    ],
    escalates: 'Traffic drops >20% week-over-week, conversion rate anomalies, data freshness gaps.',
    stack: 'Claude Agent SDK, BigQuery MCP, GA4 MCP, Slack MCP',
  },
  {
    icon: FileBarChart,
    name: 'AI Reporting Agent',
    slug: '/services/ai-agents/ai-reporting-agent',
    tagline: 'Weekly client reports: GSC, GA4, Ahrefs, Ads correlated to work shipped.',
    autonomousTasks: [
      'Data pull from GSC, GA4, Ahrefs, Google Ads every Monday 6am',
      'Narrative generation correlating results to shipped work',
      'PDF report generation and Slack summary delivery',
      'YoY and MoM comparison with trend callouts',
    ],
    escalates: 'Data source auth failures, metrics outside acceptable variance, missed delivery windows.',
    stack: 'Claude Agent SDK, GSC MCP, Ahrefs MCP, Supabase MCP, Slack MCP',
  },
]

function AgentCardsSection() {
  return (
    <div id="agents" className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>The Agent Suite</Subheading>
          <Heading as="h2" className="mt-2">
            Six agents, six functions, one integrated stack.
          </Heading>
          <Lead className="mt-6">
            Each agent is independently deployable and integrates with the others through shared data
            outputs and Slack escalation channels. Deploy one or all six.
          </Lead>
        </div>

        <div className="grid gap-px bg-border-strong grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          {agents.map((agent) => {
            const Icon = agent.icon
            return (
              <div key={agent.slug} className="bg-paper p-8 flex flex-col">
                <div className="mb-5 flex size-11 items-center justify-center bg-accent-soft">
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-2">{agent.name}</h3>
                <p className="text-sm text-slate mb-5 leading-relaxed">{agent.tagline}</p>

                <div className="mb-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ash mb-2">
                    Runs autonomously
                  </p>
                  <ul className="space-y-1.5">
                    {agent.autonomousTasks.map((task, i) => (
                      <li key={i} className="text-xs text-slate leading-relaxed">
                        &mdash; {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-1">
                    Escalates when
                  </p>
                  <p className="text-xs text-slate leading-relaxed">{agent.escalates}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-border">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ash mb-1">Stack</p>
                  <p className="text-xs text-slate">{agent.stack}</p>
                </div>

                <Link
                  href={agent.slug}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-ink transition-colors"
                >
                  Full details <ArrowRight className="size-3.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Decision Boundary Section                                                  */
/* -------------------------------------------------------------------------- */

function DecisionBoundarySection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>How Autonomy Works</Subheading>
          <Heading as="h2" className="mt-2">
            What runs without you. what waits for you.
          </Heading>
          <Lead className="mt-6">
            Autonomous does not mean unsupervised. Every agent has a defined decision boundary.
            Below the line, it runs. Above the line, it alerts and waits.
          </Lead>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse border border-border-strong text-sm">
            <thead>
              <tr className="bg-ink text-paper">
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  Decision type
                </th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  Agent handles autonomously
                </th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  Escalates to human
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  type: 'Budget & spend',
                  auto: 'Bid adjustments within daily budget limits',
                  human: 'Spend changes >20%, new campaign launches',
                },
                {
                  type: 'Content publishing',
                  auto: 'Drafts, validation, CMS staging',
                  human: 'Publish approval, factual claims outside KB',
                },
                {
                  type: 'CRM updates',
                  auto: 'Contact enrichment, lead scoring, pipeline alerts',
                  human: 'Deal reassignment, account owner changes',
                },
                {
                  type: 'Ranking changes',
                  auto: 'Monitoring, entity gap analysis, recommendations',
                  human: 'Ranking drops >15% on priority keywords',
                },
                {
                  type: 'Data anomalies',
                  auto: 'Detection, pattern analysis, Slack notification',
                  human: 'Root cause decisions requiring business context',
                },
                {
                  type: 'Client reporting',
                  auto: 'Data pull, narrative, PDF generation, delivery',
                  human: 'Sensitive metrics requiring strategic framing',
                },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-paper' : 'bg-cream'}>
                  <td className="border border-border-strong p-4 font-heading font-semibold text-ink">
                    {row.type}
                  </td>
                  <td className="border border-border-strong p-4 text-accent font-medium text-sm">
                    {row.auto}
                  </td>
                  <td className="border border-border-strong p-4 text-slate text-sm">{row.human}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Stack Section                                                              */
/* -------------------------------------------------------------------------- */

function StackSection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading className="text-accent">Infrastructure</Subheading>
          <Heading as="h2" className="mt-2 text-paper">
            The Anthropic stack underneath every agent.
          </Heading>
          <Lead className="mt-6 text-stone">
            We use the same infrastructure we advise clients on. Every agent runs in daily production
            across 15 client engagements before we deploy it for you.
          </Lead>
        </div>

        <div className="grid gap-px bg-border-strong grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              layer: 'Orchestration',
              component: 'Claude Agent SDK',
              detail:
                'Multi-turn agent loops with tool use, retry logic, and fallback patterns. Prompt caching enabled on all static context to reduce latency by 60-80%.',
            },
            {
              layer: 'Skills library',
              component: '67 custom Skills',
              detail:
                'Per-client Skills files encoding brand voice, editorial standards, and domain knowledge. Loaded contextually, not globally, to stay within token limits.',
            },
            {
              layer: 'Data connections',
              component: 'MCP servers',
              detail:
                'Pre-built MCP integrations for Google Ads, GSC, GA4, BigQuery, Ahrefs, HubSpot, Salesforce, Supabase, and Slack. Custom connectors available.',
            },
            {
              layer: 'Knowledge base',
              component: 'seo_query_kb',
              detail:
                'Fine-tuned Qwen3.5-27B running locally via our seo_query_kb MCP tool. 100% citation rate from Ahrefs, Moz, Backlinko, and Google Search Central sources.',
            },
            {
              layer: 'Validation',
              component: 'Anti-AI scoring engine',
              detail:
                'Eight-dimension content quality check across authenticity, specificity, data grounding, brand voice, readability, and structural integrity. Pass threshold: 85.',
            },
            {
              layer: 'Notifications',
              component: 'Slack MCP + Hooks',
              detail:
                'Every escalation fires a structured Slack message: what the agent wants to do, the data behind the decision, the recommended action, and a cancel window before anything executes.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-ink p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-2">
                {item.layer}
              </p>
              <h3 className="font-heading text-base font-semibold text-paper mb-3">
                {item.component}
              </h3>
              <p className="text-sm leading-relaxed text-stone">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                */
/* -------------------------------------------------------------------------- */

export default function AIAgentsHubPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-agents',
          name: 'AI Agents for Marketing & SEO',
          description:
            'Six production-grade AI agents covering SEO, PPC, content production, pipeline hygiene, analytics queries, and weekly client reporting. Built on Claude Agent SDK with MCP data connections and a 67-skill validation system.',
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
            name: 'AI Marketing Agent Suite',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI SEO Agent',
                  description: 'Content optimization, SERP analysis, and entity coverage at scale.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI PPC Agent',
                  description: 'Daily bid optimization and keyword management for Google Ads.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Content Agent',
                  description: 'Brief-to-publish content production with validation.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI RevOps Agent',
                  description: 'Pipeline hygiene and lead scoring automation.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Analytics Agent',
                  description: 'Natural-language analytics on GA4 and BigQuery.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Reporting Agent',
                  description: 'Automated weekly client report generation and delivery.',
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
      <AgentCardsSection />
      <DecisionBoundarySection />
      <StackSection />
      <CaseStudyDark {...caseStudyData} />
      <div className="bg-cream py-24">
        <Container>
          <FAQAccordion
            title="AI marketing agent frequently asked questions"
            items={faqItems}
          />
        </Container>
      </div>
      <CTAFormSection
        subheading="Ready to Deploy?"
        heading="Start with one agent or the full suite."
        lead="Book a 30-minute scoping call. We will map your highest-friction workflows to the right agents and give you a deployment plan with timelines and approval gate definitions."
        submitText="Deploy Your Agent Suite"
      />
      <Footer />
    </main>
  )
}
