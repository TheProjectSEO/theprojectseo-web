import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Heading, Subheading, Lead } from '@/components/text'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
} from '@/components/service-page-sections'
import {
  AlertCircle,
  UserCheck,
  Star,
  BarChart2,
  GitMerge,
  Database,
  Mail,
  Activity,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI RevOps Agent | Pipeline Hygiene & Lead Scoring Automation | TheProjectSEO',
  description:
    'AI RevOps agent that monitors HubSpot and Salesforce for stalled deals, enriches contacts, scores leads from signal graphs, and delivers pipeline hygiene alerts to AEs. Built on Claude Agent SDK.',
  alternates: {
    canonical: '/services/ai-agents/ai-revops-agent',
  },
  openGraph: {
    title: 'AI RevOps Agent | Pipeline Hygiene Automation | TheProjectSEO',
    description:
      'Autonomous revenue operations agent: stalled deal detection, contact enrichment, lead scoring, and pipeline coverage reports delivered to Slack.',
    url: 'https://theprojectseo.com/services/ai-agents/ai-revops-agent',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI RevOps Agent | TheProjectSEO',
    description:
      'Pipeline hygiene, lead scoring, and deal monitoring running autonomously on your CRM.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                  */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI RevOps Agent',
  title: 'Your pipeline watched,',
  accentWord: 'scored,',
  titleAfterAccent: 'and cleaned automatically',
  description:
    'Stalled deals sit in CRM stages for weeks before anyone notices. Contacts stay unenriched. Lead scores go stale. AEs spend Monday mornings doing admin that should not require their attention. Our AI RevOps Agent monitors your HubSpot or Salesforce instance continuously, surfaces what needs action, enriches what is incomplete, and scores what is new. Your reps spend their time selling.',
  ctaPrimaryText: 'Deploy the RevOps Agent',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Agents',
  ctaSecondaryHref: '/services/ai-agents',
}

const statsData = [
  { value: '72hrs', label: 'Stalled deal alert threshold' },
  { value: '~12hrs', label: 'Weekly CRM admin time redirected per AE' },
  { value: '90%', label: 'Contact enrichment rate on deployment' },
  { value: 'Weekly', label: 'Pipeline coverage report cadence' },
]

const servicesData = {
  subheading: 'What the Agent Monitors',
  heading: 'Every signal in your pipeline, checked on a schedule your team does not have to set.',
  lead: 'Revenue operations failures are usually information failures. The data is in the CRM. Nobody looked at it on time. The agent looks at it constantly.',
  services: [
    {
      icon: AlertCircle,
      title: 'Stalled Deal Detection',
      description:
        'The agent checks every open deal daily. When a deal has not had a stage update or logged activity in 72 hours, the assigned AE receives a Slack message with the deal name, current stage, last activity date, and suggested next action based on deal context. No deal goes unnoticed for a week.',
      features: [
        '72-hour inactivity threshold (configurable)',
        'Slack alert with deal context and suggested action',
        'Stage velocity tracking across pipeline',
        'Escalation to manager if AE does not respond in 24hrs',
      ],
    },
    {
      icon: UserCheck,
      title: 'Contact Enrichment',
      description:
        'Contacts created via form fill often arrive with only email and name. The agent enriches records with job title, company size, industry, LinkedIn URL, and tech stack from firmographic data providers. Enrichment runs on creation and on a weekly pass for contacts missing more than two required fields.',
      features: [
        'Auto-enrichment on contact creation',
        'Weekly pass for incomplete records',
        'Job title, company size, and industry fill',
        'Tech stack detection for ICP scoring',
      ],
    },
    {
      icon: Star,
      title: 'Lead Scoring from Signal Graphs',
      description:
        'Static lead scoring models decay. Engagement patterns change. The agent maintains a dynamic scoring model that incorporates page visit recency, email open and click patterns, form submission history, content download signals, and firmographic fit. Scores update daily and surface to AEs via CRM field and weekly Slack digest.',
      features: [
        'Daily score recalculation from engagement signals',
        'Firmographic fit scoring against ICP definition',
        'Behavioral signal weighting by content type',
        'Score change alerts on significant movement',
      ],
    },
    {
      icon: BarChart2,
      title: 'Pipeline Coverage Reports',
      description:
        'Every Monday morning the agent generates a pipeline coverage report: total pipeline value by stage, coverage ratio against quarterly targets, deals at risk by probability and close date, and a three-sentence narrative on the health of the pipeline. Delivered to Slack and as a Google Sheet.',
      features: [
        'Monday 7am pipeline summary to Slack',
        'Coverage ratio vs quarterly target',
        'Deals at risk flagged by probability and date',
        'Three-sentence executive narrative',
      ],
    },
    {
      icon: GitMerge,
      title: 'Duplicate and Data Quality Cleanup',
      description:
        'CRMs accumulate duplicates faster than ops teams can clean them. The agent runs a weekly deduplication pass using email, company domain, and name fuzzy matching. Duplicate candidates are surfaced in a review queue rather than merged automatically. One review session per week handles what previously took hours.',
      features: [
        'Email, domain, and name fuzzy match deduplication',
        'Weekly review queue for merge candidates',
        'Field completeness scoring across contact database',
        'Data decay identification on inactive contacts',
      ],
    },
    {
      icon: Database,
      title: 'CRM-to-Marketing Sync Monitoring',
      description:
        'When CRM and marketing automation fall out of sync, you send the wrong sequence to the wrong people. The agent monitors list membership, lifecycle stage mismatches, and contact properties that diverge between HubSpot and your email platform. Sync errors get flagged before they affect active campaigns.',
      features: [
        'List membership sync monitoring',
        'Lifecycle stage mismatch detection',
        'Property value divergence alerts',
        'Active campaign contamination prevention',
      ],
    },
    {
      icon: Mail,
      title: 'Sequence Performance Monitoring',
      description:
        'Sales sequences that are not performing drain your contact list. The agent tracks open rates, reply rates, and meeting book rates per sequence. Sequences below threshold get flagged with specific step-level data so your team knows whether to rewrite step two or eliminate the sequence entirely.',
      features: [
        'Per-sequence open, reply, and book rate tracking',
        'Step-level performance breakdown',
        'Below-threshold sequence flagging',
        'Best-performing sequence recommendations',
      ],
    },
    {
      icon: Activity,
      title: 'Revenue Attribution Monitoring',
      description:
        'Closed-won attribution tells you which channels actually close deals, not just generate leads. The agent pulls closed-won deals monthly, maps them against first-touch and multi-touch attribution, and surfaces the channels that produce revenue rather than just volume. Connects to your Google Sheets dashboard.',
      features: [
        'Monthly closed-won attribution pull',
        'First-touch and multi-touch comparison',
        'Channel revenue vs lead volume analysis',
        'Google Sheets dashboard output',
      ],
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'B2B SaaS recovers $340K in stalled pipeline in 60 days.',
  challenge:
    'A 15-person SaaS sales team had $1.2M in open pipeline that the VP of Sales described as "probably stale." Their CRM showed 47 deals with no activity logged in 30+ days. The RevOps function was handled by a part-time ops manager who ran a monthly pipeline review. In that cadence, deals rotted for weeks before anyone acted.',
  solution:
    'We deployed the AI RevOps Agent against their HubSpot account. In the first 48 hours, the agent identified 47 deals with no activity and sent structured Slack alerts to the relevant AEs with last-contact date and suggested reengagement messaging. Lead scoring was rebuilt using 90 days of engagement data, surfacing 23 contacts that had been marked as cold but had visited the pricing page in the prior two weeks. Enrichment ran on 1,200 contacts, filling missing fields on 89% of records.',
  results: [
    {
      metric: 'Stalled pipeline recovered',
      improvement: '$340K',
      timeframe: '14 of 47 stalled deals moved forward in 60 days',
    },
    {
      metric: 'Hot leads surfaced from cold list',
      improvement: '23',
      timeframe: 'Pricing page visitors marked cold but re-engaging',
    },
    {
      metric: 'Contact enrichment rate',
      improvement: '89%',
      timeframe: 'On 1,200 contacts missing required fields',
    },
    {
      metric: 'Weekly CRM admin time per AE',
      improvement: '-11hrs/mo',
      timeframe: 'Redirected to active selling',
    },
  ],
}

const faqItems = [
  {
    question: 'Does the agent write to the CRM directly?',
    answer:
      'Write actions are scoped by risk level. Contact enrichment fields and lead score fields are written automatically. Stage changes, deal reassignment, and contact merges require human approval via Slack. The principle is: additive writes with low reversibility risk run autonomously, destructive or reassignment actions always require sign-off.',
  },
  {
    question: 'Which CRM platforms are supported?',
    answer:
      'HubSpot and Salesforce have pre-built MCP connectors and are production-tested. For HubSpot, the agent uses the HubSpot API via our MCP server. For Salesforce, we use the Salesforce REST API. Freshsales, Pipedrive, and Close.io are supported via custom MCP connectors scoped during the engagement. If your CRM has a REST API, we can build the connector.',
  },
  {
    question: 'How is the lead scoring model built?',
    answer:
      'We start with your ICP definition: company size, industry, job title, and tech stack. That becomes the firmographic fit layer, weighted at 40% of the score. The behavioral layer, 60%, is built from your own CRM engagement data: which pages close deals, which content types correlate with conversions, what email actions precede meetings. We calibrate against your last 90 days of closed-won data so the model reflects your actual buyers, not a generic template.',
  },
  {
    question: 'Can the agent integrate with our email sequencing tool?',
    answer:
      'Yes. We have MCP connectors for Outreach, Salesloft, and Apollo. The agent monitors sequence performance but does not send emails directly without a human trigger. Sequence performance data flows into the weekly report and can be used to update lead scores based on email engagement signals.',
  },
  {
    question: 'What is the typical deployment timeline?',
    answer:
      'Four weeks for a single CRM. Week one: CRM audit, API connection, field mapping. Week two: lead scoring model calibration on historical data. Week three: supervised run where all agent actions are logged but not executed. Week four: live deployment with full Slack alerting. For organizations with complex multi-CRM environments, add two to three weeks.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Decision Flow Section                                                      */
/* -------------------------------------------------------------------------- */

function DecisionFlowSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>Approval Boundaries</Subheading>
          <Heading as="h2" className="mt-2">
            What runs automatically and what waits for your approval.
          </Heading>
          <Lead className="mt-6">
            Every write action to your CRM is categorized by reversibility risk. Low-risk writes
            run automatically. High-risk writes send a Slack approval request with a context summary.
          </Lead>
        </div>

        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full border-collapse border border-border-strong text-sm">
            <thead>
              <tr className="bg-ink text-paper">
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  Action
                </th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  Mode
                </th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  Rationale
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  action: 'Contact field enrichment',
                  mode: 'Autonomous',
                  rationale: 'Additive. Does not overwrite existing values.',
                },
                {
                  action: 'Lead score update',
                  mode: 'Autonomous',
                  rationale: 'Score field only. AE sees updated score in CRM.',
                },
                {
                  action: 'Stalled deal alert',
                  mode: 'Autonomous',
                  rationale: 'Notification only. No CRM write.',
                },
                {
                  action: 'Pipeline coverage report',
                  mode: 'Autonomous',
                  rationale: 'Read-only report generation and Slack delivery.',
                },
                {
                  action: 'Duplicate merge',
                  mode: 'Approval required',
                  rationale: 'Destructive. Contact data can be lost on incorrect merge.',
                },
                {
                  action: 'Deal stage change',
                  mode: 'Approval required',
                  rationale: 'Affects revenue attribution and AE commission tracking.',
                },
                {
                  action: 'Deal reassignment',
                  mode: 'Approval required',
                  rationale: 'Changes AE ownership and sequence enrollment.',
                },
                {
                  action: 'Contact deletion',
                  mode: 'Approval required',
                  rationale: 'Irreversible. Requires explicit manager approval.',
                },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-paper' : 'bg-cream'}>
                  <td className="border border-border-strong p-4 font-heading font-semibold text-ink">
                    {row.action}
                  </td>
                  <td
                    className={`border border-border-strong p-4 font-medium text-sm ${
                      row.mode === 'Autonomous' ? 'text-accent' : 'text-stone'
                    }`}
                  >
                    {row.mode}
                  </td>
                  <td className="border border-border-strong p-4 text-slate text-sm">
                    {row.rationale}
                  </td>
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
/*  Page Export                                                                */
/* -------------------------------------------------------------------------- */

export default function AIRevOpsAgentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-agents/ai-revops-agent',
          name: 'AI RevOps Agent',
          description:
            'Autonomous revenue operations agent monitoring HubSpot and Salesforce for stalled deals, enriching contacts, scoring leads from signal graphs, and delivering pipeline hygiene alerts to AEs via Slack.',
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
      <DecisionFlowSection />
      <CaseStudyDark {...caseStudyData} />
      <div className="bg-paper py-24">
        <Container>
          <FAQAccordion
            title="AI RevOps agent frequently asked questions"
            items={faqItems}
          />
        </Container>
      </div>
      <CTAFormSection
        subheading="Ready to Deploy?"
        heading="Get a free pipeline hygiene audit."
        lead="Connect your CRM for 30 minutes. We run the stalled deal and enrichment analysis on your live data and send you the findings. No obligation and no write access needed for the audit."
        submitText="Deploy the RevOps Agent"
      />
      <Footer />
    </main>
  )
}
