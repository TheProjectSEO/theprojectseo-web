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
  MessageSquare,
  Code2,
  BarChart3,
  AlertTriangle,
  Clock,
  Database,
  LineChart,
  Share2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Analytics Agent | Natural Language Analytics on GA4 & BigQuery | TheProjectSEO',
  description:
    'Ask plain-English questions about your GA4 and BigQuery data. The AI Analytics Agent translates to SQL, runs the query, returns the answer with a chart and SQL provenance. No SQL required.',
  alternates: {
    canonical: '/services/ai-agents/ai-analytics-agent',
  },
  openGraph: {
    title: 'AI Analytics Agent | Natural Language GA4 Analytics | TheProjectSEO',
    description:
      'Natural-language analytics on your GA4 BigQuery export. Ask questions, get answers, charts, and the SQL behind every result.',
    url: 'https://theprojectseo.com/services/ai-agents/ai-analytics-agent',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Analytics Agent | TheProjectSEO',
    description:
      'Ask plain-English questions about your GA4 and BigQuery data. Get answers, charts, and SQL provenance.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                  */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI Analytics Agent',
  title: 'Ask your data a question.',
  accentWord: 'Get an answer',
  titleAfterAccent: 'in seconds',
  description:
    'Your GA4 BigQuery export contains the answer to almost every marketing question your team asks. The bottleneck is not data. It is the SQL query that has to be written before you can read the answer. Our AI Analytics Agent removes that bottleneck. Type a plain-English question. The agent writes the SQL, runs it against your BigQuery schema, and returns the answer with a chart and the query for audit.',
  ctaPrimaryText: 'Deploy the Analytics Agent',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Agents',
  ctaSecondaryHref: '/services/ai-agents',
}

const statsData = [
  { value: '<30s', label: 'Average query to answer time' },
  { value: '100%', label: 'SQL provenance with every answer' },
  { value: 'Daily', label: 'Automated anomaly detection cadence' },
  { value: '~20hrs', label: 'Analytics request time redirected monthly' },
]

const servicesData = {
  subheading: 'What the Agent Handles',
  heading: 'From ad-hoc questions to scheduled intelligence delivery.',
  lead: 'Analytics work splits into two categories: answering questions as they arise and monitoring the metrics that matter on a schedule. The agent handles both without requiring an analyst between the question and the answer.',
  services: [
    {
      icon: MessageSquare,
      title: 'Natural Language to SQL',
      description:
        'The agent understands your GA4 BigQuery schema, table names, and custom dimensions. Ask "Show me organic traffic for blog posts in Q1 this year versus Q1 last year, grouped by author" and receive the query result, a chart, and the SQL behind it within 30 seconds.',
      features: [
        'GA4 BigQuery schema awareness',
        'Custom dimension and event name mapping',
        'Multi-table join handling',
        'Date range and segment parsing from plain English',
      ],
    },
    {
      icon: BarChart3,
      title: 'Chart and Table Generation',
      description:
        'Every query result comes with a chart appropriate to the data type: line charts for time series, bar charts for comparisons, scatter plots for correlations. Charts are generated as PNG or embedded in Slack. For tabular data, Google Sheets output is available with one-click formatting.',
      features: [
        'Auto chart type selection by data structure',
        'PNG export for slides and reports',
        'Slack-embedded chart previews',
        'Google Sheets structured output',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Anomaly Detection',
      description:
        'The agent runs a daily anomaly check on your core KPIs: sessions, conversions, bounce rate, and revenue. When a metric moves more than two standard deviations from its trailing 30-day pattern, a Slack alert fires within four hours with context on which segments drove the movement.',
      features: [
        'Daily scan across core KPIs',
        'Two standard deviation threshold (configurable)',
        'Segment-level anomaly attribution',
        'Alert with 30-day trend context',
      ],
    },
    {
      icon: Code2,
      title: 'SQL Provenance and Auditability',
      description:
        'Every answer comes with the SQL that produced it. No black box. Marketing leaders who need to present data to a CFO can show exactly how the number was calculated. Data teams can audit the query logic. Trust in the output comes from transparency in the process.',
      features: [
        'Full SQL returned with every answer',
        'Query history log with timestamps',
        'Reproducible results on re-run',
        'Schema version tracking for breaking changes',
      ],
    },
    {
      icon: Clock,
      title: 'Scheduled Intelligence Reports',
      description:
        'Beyond ad-hoc queries, the agent runs scheduled intelligence reports: weekly traffic by channel, monthly conversion funnel, quarterly cohort analysis. Each runs on a defined schedule, formats the output, and delivers to Slack or Google Sheets without requiring a human to kick it off.',
      features: [
        'Configurable weekly and monthly scheduled queries',
        'Automatic delivery to Slack or Sheets',
        'YoY and MoM comparisons built in',
        'Channel and segment breakdown templates',
      ],
    },
    {
      icon: Database,
      title: 'Custom Schema Layer',
      description:
        'GA4 BigQuery exports have a complex nested schema. Most natural language to SQL tools fail on event arrays and nested parameters. We build a schema translation layer on top of your export that normalizes the structure, maps your custom event names, and makes the data queryable without JSON unpacking in every query.',
      features: [
        'GA4 nested event parameter flattening',
        'Custom event name to business metric mapping',
        'Derived table layer for common calculations',
        'Schema documentation for team use',
      ],
    },
    {
      icon: LineChart,
      title: 'Conversion Funnel Analysis',
      description:
        'Funnel analysis on GA4 requires multi-step event sequence queries. The agent handles these natively: "Show me drop-off rates at each step in the trial signup funnel for users who came from organic search last month." Returns a funnel visualization with step-level conversion rates and absolute numbers.',
      features: [
        'Multi-step event sequence querying',
        'Funnel visualization with step rates',
        'Segment comparison across funnels',
        'Drop-off attribution to page and device',
      ],
    },
    {
      icon: Share2,
      title: 'Cross-Channel Attribution Queries',
      description:
        'With your CRM data in BigQuery alongside GA4, the agent can answer cross-channel attribution questions that no single tool handles: "Which organic pages most often appear as first touch for contacts that closed as enterprise deals?" This requires joining GA4 session data to CRM closed-won records, which the agent does on demand.',
      features: [
        'GA4 and CRM BigQuery join queries',
        'First-touch and multi-touch attribution',
        'Content-to-revenue path analysis',
        'Enterprise vs SMB conversion path comparison',
      ],
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'SaaS marketing team cuts analytics backlog from 3 days to 30 minutes.',
  challenge:
    'A 12-person SaaS marketing team had a recurring analytics bottleneck. Every question that needed data went to one data analyst who was also responsible for the marketing dashboard and quarterly reports. The average turnaround for an analytics request was three days. Marketing decisions got made without data because waiting was not an option.',
  solution:
    'We deployed the AI Analytics Agent against their GA4 BigQuery export and CRM data. We built the schema translation layer over three days, mapping their 47 custom events to business metric names. We configured the agent with their core KPI definitions and set up the daily anomaly detection scan. On day seven, the marketing team could ask any question in Slack and receive an answer in under 30 seconds.',
  results: [
    {
      metric: 'Analytics request turnaround',
      improvement: '3 days to 30s',
      timeframe: 'For standard GA4 and CRM queries',
    },
    {
      metric: 'Analyst time freed',
      improvement: '~22hrs/mo',
      timeframe: 'Redirected to dashboard architecture and modeling',
    },
    {
      metric: 'Data-informed decisions',
      improvement: '4x',
      timeframe: 'Marketing decisions with supporting data vs prior quarter',
    },
    {
      metric: 'Anomalies caught proactively',
      improvement: '9',
      timeframe: 'In first 60 days of deployment before manual detection',
    },
  ],
}

const faqItems = [
  {
    question: 'What data sources does the agent query?',
    answer:
      'The primary data source is your GA4 BigQuery export, which contains all event-level session and conversion data. We can also connect your CRM data in BigQuery, Google Ads cost data, Search Console query data, and any custom tables you have loaded into BigQuery. The schema layer we build maps all of these into a queryable surface. The agent does not query GA4 directly via the API because the BigQuery export has the full event-level data that the API does not expose.',
  },
  {
    question: 'Does the agent have access to write to our BigQuery tables?',
    answer:
      'No. The agent has read-only access to your BigQuery dataset. It writes query results to Google Sheets or sends them to Slack, but it does not write back to BigQuery tables. This is a deliberate design decision. An analytics agent that can modify source data is a significant risk. The only exception is a dedicated results table in BigQuery where query history is stored, which is in a separate dataset with explicit write permission.',
  },
  {
    question: 'How does the agent handle GA4 nested event parameters?',
    answer:
      'GA4 BigQuery exports store event parameters as nested key-value arrays, which require UNNEST operations in every query. We build a flattened view layer on top of your export that unpacks the parameters you use most frequently: page_location, session_id, ga_session_number, traffic source dimensions, and your custom event parameters. The agent queries the view layer, not the raw nested tables, which makes queries faster and the SQL cleaner.',
  },
  {
    question: 'What happens when the agent cannot answer a question?',
    answer:
      'If the question requires data that is not in the connected BigQuery datasets, the agent returns a clear explanation of what data would be needed and whether that data is available elsewhere. If the question is ambiguous, the agent asks a clarifying question before generating SQL. If the query runs but returns unexpected results, the agent flags the result as potentially low-confidence and includes the SQL for manual review.',
  },
  {
    question: 'How is the anomaly detection threshold calibrated?',
    answer:
      'Anomaly detection uses a rolling 30-day baseline with two standard deviations as the default threshold. We calibrate this during onboarding against your traffic patterns. If you have strong weekly seasonality, the baseline adjusts for day-of-week. If you run frequent paid promotions, we can exclude promotion periods from the baseline. The threshold is configurable per metric. High-volume metrics like sessions often run at 2.5 standard deviations. Low-volume metrics like enterprise conversions may run at 1.5.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Sample Questions Section                                                   */
/* -------------------------------------------------------------------------- */

function SampleQuestionsSection() {
  const questions = [
    {
      category: 'Traffic analysis',
      question:
        'Show me organic traffic by landing page for the last 90 days, sorted by sessions, for pages in the /blog/ path.',
    },
    {
      category: 'Conversion analysis',
      question:
        'What is the trial signup conversion rate from organic search vs paid search for the last 60 days, split by device type?',
    },
    {
      category: 'Content performance',
      question:
        'Which blog posts published in the last 6 months have the highest assisted conversion rate?',
    },
    {
      category: 'Attribution',
      question:
        'Show me the pages most commonly visited within the 7 days before a trial signup, ranked by frequency.',
    },
    {
      category: 'Anomaly context',
      question:
        'Organic sessions dropped 18% last week. Break down the drop by country, device, and landing page to find where it came from.',
    },
    {
      category: 'YoY comparison',
      question:
        'Compare Q1 2025 vs Q1 2026 organic traffic, conversions, and conversion rate by top 20 landing pages.',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>What You Can Ask</Subheading>
          <Heading as="h2" className="mt-2">
            Six questions your team can answer in 30 seconds.
          </Heading>
          <Lead className="mt-6">
            These are real questions. Each one used to require a three-day analytics request or a
            30-minute SQL session. The agent answers them on demand.
          </Lead>
        </div>

        <div className="mx-auto max-w-4xl grid gap-px bg-border-strong grid-cols-1 sm:grid-cols-2">
          {questions.map((item, index) => (
            <div key={index} className="bg-paper p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-accent mb-3">
                {item.category}
              </p>
              <p className="text-sm leading-relaxed text-ink font-medium italic">&ldquo;{item.question}&rdquo;</p>
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

export default function AIAnalyticsAgentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-agents/ai-analytics-agent',
          name: 'AI Analytics Agent',
          description:
            'Natural-language analytics agent for GA4 and BigQuery. Translates plain-English questions to SQL, runs queries, and returns answers with charts and SQL provenance. Includes daily anomaly detection.',
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
      <SampleQuestionsSection />
      <CaseStudyDark {...caseStudyData} />
      <div className="bg-paper py-24">
        <Container>
          <FAQAccordion
            title="AI analytics agent frequently asked questions"
            items={faqItems}
          />
        </Container>
      </div>
      <CTAFormSection
        subheading="Ready to Deploy?"
        heading="Ask your first question in 7 days."
        lead="We need read access to your GA4 BigQuery export and one scoping call to map your custom events. Most teams are running queries by the end of week one."
        submitText="Deploy the Analytics Agent"
      />
      <Footer />
    </main>
  )
}
