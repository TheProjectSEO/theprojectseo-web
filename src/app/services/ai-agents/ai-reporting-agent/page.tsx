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
  Download,
  GitCommit,
  FileText,
  Send,
  RefreshCw,
  BarChart2,
  PenLine,
  Bell,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Reporting Agent | Automated Weekly Client Reports | TheProjectSEO',
  description:
    'AI reporting agent that pulls GSC, GA4, Ahrefs, and Google Ads data every Monday, correlates results to work shipped that week, writes the narrative, and delivers PDF plus Slack summary automatically.',
  alternates: {
    canonical: '/services/ai-agents/ai-reporting-agent',
  },
  openGraph: {
    title: 'AI Reporting Agent | Automated Client Reports | TheProjectSEO',
    description:
      'Weekly client reports that write themselves. Data pull, narrative, PDF, and Slack summary delivered every Monday before 8am.',
    url: 'https://theprojectseo.com/services/ai-agents/ai-reporting-agent',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Reporting Agent | TheProjectSEO',
    description:
      'Automated weekly client reports: GSC, GA4, Ahrefs, Ads data correlated to shipped work. PDF and Slack summary every Monday.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                  */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI Reporting Agent',
  title: 'Weekly reports delivered by',
  accentWord: '8am Monday',
  titleAfterAccent: 'every week',
  description:
    'We run this agent internally for all 15 of our clients via our /weekly-report skill. It pulls data from GSC, GA4, Ahrefs, and Google Ads, correlates the numbers to what the team shipped that week, writes a performance narrative, generates a PDF, and pushes a Slack summary. This is that system, productized and deployed for your clients. Stop spending Fridays writing reports.',
  ctaPrimaryText: 'Deploy the Reporting Agent',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Agents',
  ctaSecondaryHref: '/services/ai-agents',
}

const statsData = [
  { value: 'Monday 6am', label: 'Weekly delivery time' },
  { value: '~8hrs', label: 'Weekly report time redirected per account manager' },
  { value: '5', label: 'Data sources per report' },
  { value: '100%', label: 'Reports correlated to work shipped' },
]

const servicesData = {
  subheading: 'What the Agent Produces',
  heading: 'Every section of a complete client report, generated automatically.',
  lead: 'The report is not a data dump. Each section is written with context: what changed, why it likely changed, and what the team plans to do about it. The agent knows what work was shipped because it reads from the same task log your team maintains.',
  services: [
    {
      icon: Download,
      title: 'Multi-Source Data Pull',
      description:
        'Every Monday at 6am the agent pulls from five sources: Google Search Console for impressions, clicks, and keyword rankings; GA4 for sessions, conversions, and channel performance; Ahrefs for referring domain changes, keyword movement, and DR changes; Google Ads for spend, CPA, and ROAS; and Supabase for any client-specific custom metrics.',
      features: [
        'GSC: impressions, clicks, CTR, position by keyword',
        'GA4: sessions, conversions, channel attribution',
        'Ahrefs: DR, referring domains, top keyword movements',
        'Google Ads: spend, conversions, CPA, ROAS by campaign',
      ],
    },
    {
      icon: GitCommit,
      title: 'Work Correlation Layer',
      description:
        'Raw data without context produces reports nobody reads. The agent reads from your team\'s work log, which can be a simple Google Sheet, a Notion database, or a task management tool, and correlates metric changes to actions taken. "Organic sessions +18% this week. Four new blog posts indexed Monday through Wednesday. Two previous posts had title tags updated." That is a useful report.',
      features: [
        'Work log integration via Sheets, Notion, or API',
        'Metric change to shipped work correlation',
        'Change timeline overlay on performance graphs',
        'Attribution confidence scoring per correlation',
      ],
    },
    {
      icon: PenLine,
      title: 'Performance Narrative Generation',
      description:
        'The narrative section is written by Claude using your client\'s brand voice file. It leads with the headline number, explains the driver, and closes with what is planned for next week. It does not read like an AI summary. It reads like a senior account manager who knows the account and writes clearly.',
      features: [
        'Headline metric lead with driver explanation',
        'Per-client voice calibration via Skills file',
        'Next week plan section drawn from task queue',
        'Anomaly callouts with context, not just alerts',
      ],
    },
    {
      icon: FileText,
      title: 'PDF Report Generation',
      description:
        'The final report generates as a professionally formatted PDF with your agency logo, client name, reporting period, and data sections. Charts are embedded. Tables are formatted. The document looks like something a senior strategist spent three hours on, because the agent spent three minutes on it.',
      features: [
        'Agency-branded PDF with client name and period',
        'Embedded charts from data pull',
        'Formatted data tables for key metrics',
        'Consistent layout across all client reports',
      ],
    },
    {
      icon: Send,
      title: 'Slack and Email Delivery',
      description:
        'The report arrives in two formats simultaneously. A Slack message in the client-specific channel delivers a three-paragraph summary with the top three wins, top concern, and next week focus. The PDF attaches to the Slack message and gets emailed to the client contact list. No manual sending.',
      features: [
        'Slack summary: three wins, one concern, next week',
        'PDF attached to Slack message',
        'Client email delivery with PDF attachment',
        'Configurable recipient list per client',
      ],
    },
    {
      icon: BarChart2,
      title: 'YoY and MoM Benchmarking',
      description:
        'Week-over-week data without context creates panic on down weeks. The report automatically includes year-over-year and month-over-month comparisons for the core metrics, so a down week in a strong month reads correctly. Seasonal patterns are visible, not hidden.',
      features: [
        'Automatic YoY comparison for primary KPIs',
        'MoM trend line for rolling context',
        'Seasonal baseline calculation',
        'Rolling 13-week performance trend',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Data Freshness Monitoring',
      description:
        'If any data source fails to refresh before the Monday pull, the agent does not silently omit the section. It flags the failure in Slack with the affected source, the last available data date, and the reason if determinable. You know before the client does.',
      features: [
        'Pre-pull data freshness check at 5am Monday',
        'Source failure Slack alert before report generation',
        'Partial report delivery with missing-data notice',
        'Auto-retry on recoverable API failures',
      ],
    },
    {
      icon: Bell,
      title: 'Mid-Week Anomaly Alerts',
      description:
        'Weekly reports are the scheduled cadence. But significant drops should not wait until Monday. The agent monitors core KPIs daily and sends a mid-week alert if anything moves materially: ranking drops, traffic anomalies, conversion rate changes, or spend overruns. Same format, smaller scope.',
      features: [
        'Daily KPI monitoring between weekly reports',
        'Anomaly threshold alerts on significant movement',
        'Slack alert format consistent with weekly summary',
        'Context provided: change magnitude, likely driver',
      ],
    },
  ],
}

const caseStudyData = {
  subheading: 'Internal Proof, Then External Product',
  heading: 'We built this for ourselves first. Now we deploy it for clients.',
  challenge:
    'Running 15 active SEO and content engagements, we were spending 12-15 hours per week on client reporting. Each report required pulling GSC, GA4, and Ahrefs data manually, correlating numbers to work delivered, writing a narrative, formatting a PDF, and sending it. The reports were good. The process was not sustainable at that volume.',
  solution:
    'We built the reporting agent as an internal tool using the Claude Agent SDK, MCP integrations for all five data sources, and a work log reader connected to our client task databases. The agent now runs every Monday at 6am. Each client receives a branded PDF and Slack summary by 8am. Our account managers spend Mondays acting on the data rather than compiling it. After 6 months of internal production use, we turned it into a productized service.',
  results: [
    {
      metric: 'Weekly reporting time saved',
      improvement: '~12hrs/wk',
      timeframe: 'Across 15 client accounts',
    },
    {
      metric: 'Report delivery consistency',
      improvement: '100%',
      timeframe: 'On-time Monday delivery since deployment',
    },
    {
      metric: 'Client report quality',
      improvement: 'Identical',
      timeframe: 'No quality degradation vs manual reports',
    },
    {
      metric: 'Account manager time redirected',
      improvement: '~48hrs/mo',
      timeframe: 'Team-wide, now spent on strategy and execution',
    },
  ],
}

const faqItems = [
  {
    question: 'How does the agent know what work was shipped each week?',
    answer:
      'We connect the agent to your work log during setup. The work log is typically a Google Sheet with columns for date, task type, client, URL affected, and description. This can also be a Notion database or a project management tool with an API. The agent reads the log at report time, matches entries to the reporting period, and uses them as context for the narrative generation. If your team currently logs work anywhere with a date field, we can connect it.',
  },
  {
    question: 'Can the report include custom metrics specific to our clients?',
    answer:
      'Yes. During onboarding we map your client-specific KPIs: e-commerce revenue, trial signups, qualified leads, form fills, or whatever matters for each account. These pull from GA4 custom events or BigQuery via the analytics MCP. The report template is configurable per client, so a SaaS client report differs in structure and metrics from an e-commerce client report.',
  },
  {
    question: 'What happens if a data source is down on Monday morning?',
    answer:
      'The agent runs a data freshness check at 5am before the 6am pull. If a source returns stale data or an error, a Slack alert goes to the account manager immediately. The report still generates with available data and includes a clear note where data is missing. Most Google API rate limit issues resolve within 30 minutes, so a retry runs at 7am. If the retry fails, you receive a partial report with explicit missing-data callouts.',
  },
  {
    question: 'Can we customize the report template and branding?',
    answer:
      'Yes. The PDF template uses your agency logo, color scheme, and font. Section order is configurable. You can include or exclude any section by client. The narrative style is calibrated from your existing reports during onboarding, so it matches how your team currently writes rather than imposing a generic format.',
  },
  {
    question: 'How is this different from Google Data Studio or Looker dashboards?',
    answer:
      'Dashboards require the client to log in and interpret data themselves. This agent delivers an interpreted narrative. The numbers come with a written explanation of what drove them and what will happen next week. Most clients do not want a dashboard. They want to know if things are moving in the right direction and what their agency is doing about it. That is what the report delivers. Dashboards are still useful for clients who want to self-serve; the two are not mutually exclusive.',
  },
  {
    question: 'What does the Slack summary look like?',
    answer:
      'The Slack message follows a fixed three-section format: three wins from the week with the supporting number (e.g., "Organic traffic +14% WoW, driven by three new blog posts indexing Thursday"), one concern or area to watch with context, and three planned actions for the coming week pulled from your task queue. This format was calibrated from six months of internal use and is the section clients engage with most. The PDF has the full data for anyone who wants to go deeper.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Report Structure Preview Section                                           */
/* -------------------------------------------------------------------------- */

function ReportStructureSection() {
  const sections = [
    { label: 'Executive summary', detail: 'Three wins, one concern, three next steps. Three paragraphs. Written by Claude using account context.' },
    { label: 'Organic traffic overview', detail: 'Sessions, users, and conversion rate from GA4. WoW, MoM, and YoY comparison.' },
    { label: 'Search Console performance', detail: 'Impressions, clicks, CTR, and average position. Top keyword movers. New rankings and drops.' },
    { label: 'Keyword ranking table', detail: 'Top 20 tracked keywords with current position, WoW change, and volume.' },
    { label: 'Content performance', detail: 'Top pages by organic sessions. New content published that week. Impact of recent updates.' },
    { label: 'Link profile update', detail: 'New referring domains, lost domains, and DR change from Ahrefs.' },
    { label: 'Paid media summary', detail: 'Google Ads spend, conversions, CPA, and ROAS vs target. Only included if ads are active.' },
    { label: 'Work completed', detail: 'Tasks shipped that week from work log, with URLs and type labels.' },
    { label: 'Next week plan', detail: 'Planned tasks from queue, with owner and expected impact.' },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>Report Structure</Subheading>
          <Heading as="h2" className="mt-2">
            What every weekly report contains.
          </Heading>
          <Lead className="mt-6">
            Nine sections, delivered as one PDF and one Slack summary. Each section is configurable
            and can be turned on or off per client.
          </Lead>
        </div>

        <div className="mx-auto max-w-3xl">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex items-start gap-6 py-6 ${
                index < sections.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div className="font-mono text-xs text-accent font-semibold w-6 shrink-0 pt-0.5">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold text-ink mb-1">
                  {section.label}
                </h3>
                <p className="text-sm leading-relaxed text-slate">{section.detail}</p>
              </div>
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

export default function AIReportingAgentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-agents/ai-reporting-agent',
          name: 'AI Reporting Agent',
          description:
            'Automated weekly client report generation agent. Pulls GSC, GA4, Ahrefs, and Google Ads data every Monday, correlates results to work shipped, writes a performance narrative, generates a PDF, and delivers via Slack and email.',
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
      <ReportStructureSection />
      <CaseStudyDark {...caseStudyData} />
      <div className="bg-paper py-24">
        <Container>
          <FAQAccordion
            title="AI reporting agent frequently asked questions"
            items={faqItems}
          />
        </Container>
      </div>
      <CTAFormSection
        subheading="Ready to Deploy?"
        heading="Get a sample report generated for your top client."
        lead="Connect your data sources and send us your client context. We generate a sample weekly report within 48 hours. No commitment, and you keep the report regardless."
        submitText="Deploy the Reporting Agent"
      />
      <Footer />
    </main>
  )
}
