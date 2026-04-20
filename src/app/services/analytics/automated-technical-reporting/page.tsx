import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
  ProcessSection,
} from '@/components/service-page-sections'
import { MonitorCheck, AlertTriangle, Zap, BarChart3, RefreshCw, Bot } from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'Automated Technical SEO Reporting | Weekly Technical Reports | TheProjectSEO',
  description:
    'Weekly automated technical SEO reports: crawl stats, index coverage, Core Web Vitals trends, and anomaly detection. Generated automatically, reviewed by humans, actioned the same day.',
  alternates: {
    canonical: '/services/analytics/automated-technical-reporting',
  },
  openGraph: {
    title: 'Automated Technical SEO Reporting | Weekly Technical Reports | TheProjectSEO',
    description:
      'Stop discovering technical SEO issues three months after they happen. Our automated reporting surfaces crawl anomalies, indexation drops, and CWV regressions the week they occur.',
    url: 'https://theprojectseo.com/services/analytics/automated-technical-reporting',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Automated Technical Reporting',
  title: 'Find technical issues the week they happen,',
  accentWord: 'not three months later.',
  description:
    'The standard technical SEO process runs a crawl tool once a quarter, produces a 200-item issues list, and prioritizes the top 20. By the time that list is worked through, three months of new issues have accumulated. Our automated technical reporting runs continuous monitoring across crawl stats, index coverage, Core Web Vitals, and site audit issues. The report lands in your team\'s inbox every Monday. Humans review and action. They do not build the report.',
  ctaPrimaryText: 'Set Up Automated Reporting',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Analytics Services',
  ctaSecondaryHref: '/services/analytics',
}

const statsData = [
  { value: '52', label: 'Technical reports delivered per year per client' },
  { value: '7d', label: 'Maximum issue detection lag (vs. 90d manually)' },
  { value: '3', label: 'Data sources: GSC, Ahrefs Site Audit, Lighthouse' },
  { value: '0hr', label: 'Manual report-building time required from your team' },
]

const servicesData = {
  subheading: 'What Gets Monitored',
  heading: 'Six technical SEO signals monitored continuously and reported weekly.',
  services: [
    {
      icon: MonitorCheck,
      title: 'GSC Coverage and Crawl Stats',
      description:
        'Google Search Console coverage data tells you which pages are indexed, which are excluded, and which have errors. We monitor this weekly and flag any movement in the indexed, excluded, or error counts that falls outside expected ranges.',
      features: [
        'Weekly indexed page count tracking',
        'Excluded page reason breakdown and trend',
        'Crawl error delta: new errors identified week over week',
        'Sitemap coverage vs. indexed page gap monitoring',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Anomaly Detection',
      description:
        'Not every metric change is an anomaly. We build statistical thresholds for each site based on historical variance so the report only surfaces genuine deviations. A 5% traffic drop on a high-variance traffic day is not an alert. A 5% traffic drop on a typically stable day is.',
      features: [
        'Statistical control limits per metric per site',
        'Multi-metric anomaly correlation (crawl drop + traffic drop = likely issue)',
        'False positive suppression based on seasonality and historical patterns',
        'Severity classification: warning, alert, critical',
      ],
    },
    {
      icon: Zap,
      title: 'Core Web Vitals Trend Monitoring',
      description:
        'CWV scores change when developers push code, when third-party scripts are added, and when traffic patterns shift device mix. We run Lighthouse monitoring on a sample of key pages weekly and track score trends over time.',
      features: [
        'LCP, INP, and CLS tracked weekly per page group',
        'Regression detection: score drops flagged within one week of occurrence',
        'Deploy correlation: CWV changes mapped to deployment timestamps',
        'Field data (CrUX) vs. lab data (Lighthouse) comparison',
      ],
    },
    {
      icon: BarChart3,
      title: 'Ahrefs Site Audit Delta Reporting',
      description:
        'Ahrefs Site Audit runs daily and tracks hundreds of technical issues. We extract the weekly delta: which issues are new, which are resolved, and which have been present longest without resolution. This tells your team where to focus without requiring a full audit review.',
      features: [
        'New issues by priority: high, medium, low',
        'Resolved issues confirmation (verify fixes worked)',
        'Oldest unresolved high-priority issue tracker',
        'Issue category trends over rolling 4-week period',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Indexation Health Tracking',
      description:
        'A page can be indexed one week and not the next without any alert in standard tooling. We track indexation status for your top 500 pages by traffic or value on a weekly basis and flag any pages that drop out of the index without an expected explanation.',
      features: [
        'Weekly indexation status check for top pages by traffic',
        'Canonical signal validation for critical pages',
        'Noindex tag detection for pages that should not have it',
        'Indexation drop alert with probable cause classification',
      ],
    },
    {
      icon: Bot,
      title: 'AI-Generated Report Narrative',
      description:
        'Raw data is not a report. We use a Claude-native agent to generate the weekly narrative: what changed, why it probably changed, what needs action, and what can wait. The agent references historical baselines and flags connections between multiple metrics moving together.',
      features: [
        'Narrative summary: what changed this week in plain language',
        'Action items with priority and estimated effort',
        'Connection flagging: metrics that moved together and likely share a cause',
        'Delivery to Slack channel or email at scheduled time every Monday',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Connect your data sources',
    description:
      'We need access to three core data sources: Google Search Console, your Ahrefs account (with Site Audit configured), and a list of your top pages for Lighthouse monitoring. If you have an existing BigQuery dataset from our GSC setup service, we build on top of it. Setup takes one week once access is provided.',
  },
  {
    number: '02',
    title: 'Establish your baselines',
    description:
      'Before anomaly detection works correctly, we need to understand what normal looks like for your site. We analyze four to eight weeks of historical data to set control limits for each metric. Sites with highly seasonal traffic get seasonality-adjusted baselines. New sites with limited history get conservative initial thresholds that tighten as more data accumulates.',
  },
  {
    number: '03',
    title: 'Build the reporting pipeline and agent',
    description:
      'We build the automated data pull (GSC API, Ahrefs API, Lighthouse CI), the BigQuery tables that store weekly snapshots, and the Claude agent prompt that generates the narrative. The agent is tested against three weeks of real data before going live to calibrate the narrative quality and reduce false urgency in the action items.',
  },
  {
    number: '04',
    title: 'Configure delivery and train your team on the workflow',
    description:
      'We configure Slack or email delivery for Monday morning, hold a 30-minute session explaining how to read the report and what to do with different alert types, and document the escalation path for critical alerts. We review the first four reports with your team to calibrate the alert sensitivity before handing over full ownership.',
  },
]

const caseStudyData = {
  subheading: 'Automated Technical Reporting in Practice',
  heading: 'How weekly automated reporting caught a canonical error before it became a traffic loss.',
  challenge:
    'A B2B software company completed a site redesign that inadvertently added a canonical tag pointing all product pages to the homepage. The development team did not run a post-launch crawl. The QA process did not include SEO checks. Google began deindexing product pages four weeks after launch. Without automated monitoring, the issue would have been discovered only when the traffic drop became visible in Google Analytics. by which time three months of product page indexation would have been lost.',
  solution:
    'The automated technical reporting system detected the indexation drop in the first Monday report after the launch week. The GSC coverage report showed 847 pages moved from Indexed to Excluded. The anomaly detection flagged this as critical (deviation greater than 10 standard deviations from the rolling baseline). The alert landed in Slack at 8am Monday. The team identified and fixed the canonical error by noon.',
  results: [
    { metric: 'Days between canonical error introduction and detection', improvement: '7', timeframe: 'vs. estimated 90+ without automated monitoring' },
    { metric: 'Pages affected by the canonical error', improvement: '847', timeframe: 'All recovered after fix' },
    { metric: 'Estimated traffic loss prevented by early detection', improvement: '~65%', timeframe: 'Based on crawl re-indexation timeline' },
    { metric: 'Cost of the monitoring setup vs. estimated revenue impact of full traffic loss', improvement: '40x', timeframe: 'ROI on automated monitoring' },
  ],
}

const faqItems = [
  {
    question: 'How is this different from Ahrefs Site Audit alerts?',
    answer:
      'Ahrefs Site Audit has its own alerting, but it only covers the issues Ahrefs can detect from its crawler. It does not include GSC coverage data (which reflects how Google actually crawls and indexes your site), Lighthouse CWV measurements, or the narrative layer that explains what the data means and what to do about it. Our automated reporting aggregates all three sources, applies anomaly detection logic, and delivers a single actionable document rather than three separate tool dashboards to check.',
  },
  {
    question: 'What counts as an anomaly?',
    answer:
      'An anomaly is any metric movement that falls outside two standard deviations of the rolling four-week baseline for that metric on that day of week. We use day-of-week baselines because many metrics have consistent weekly patterns (organic traffic is typically lower on weekends). Anomaly thresholds are calibrated per site based on historical variance. a high-volatility news site has wider thresholds than a stable SaaS product site. Severity levels are: warning (2 to 3 standard deviations), alert (3 to 5 standard deviations), critical (more than 5 standard deviations or multi-metric correlation).',
  },
  {
    question: 'How does the Lighthouse monitoring work?',
    answer:
      'We run Lighthouse CI against a sample of your pages: typically your homepage, your top 10 pages by organic traffic, and a representative sample of your key page templates (product, blog, landing page). Lighthouse runs in a controlled environment with a consistent device and connection simulation so score changes reflect actual site changes rather than measurement noise. Results are stored in BigQuery and compared to the previous week\'s scores. Pages with a score drop of five points or more are flagged in the weekly report.',
  },
  {
    question: 'Can the report be customized for our team?',
    answer:
      'Yes. The default report covers the six signals described above. We can add or remove signals based on what your team cares about, adjust delivery format (Slack thread vs. direct message vs. email), customize the severity classification thresholds, and add custom SQL queries against your BigQuery data for site-specific metrics that are not covered by the standard data sources. Customization adds one to two weeks to the setup timeline.',
  },
  {
    question: 'What happens when a critical alert fires outside business hours?',
    answer:
      'Critical alerts are delivered immediately regardless of the day or time. We configure Slack or email to deliver critical alerts with a designated on-call contact tagged. The definition of critical is restricted to issues that have a high probability of causing significant traffic loss within 48 hours: mass indexation drops, server errors affecting more than 5% of your top pages, or a canonical tag applied to the homepage. False positives at the critical level are rare because the bar for critical classification is deliberately high.',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="Automated technical reporting questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function AutomatedTechnicalReportingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics/automated-technical-reporting',
          name: 'Automated Technical SEO Reporting',
          description:
            'Weekly automated technical SEO reports covering crawl stats, index coverage, Core Web Vitals trends, and anomaly detection. GSC, Ahrefs Site Audit, and Lighthouse data aggregated into a single Monday morning report.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: { '@type': 'Country', name: 'Worldwide' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection
        subheading="How We Set Up Automated Reporting"
        heading="Four steps from manual quarterly audits to weekly automated monitoring."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Stop Missing Technical Issues?"
        heading="Get your first automated technical report within two weeks."
        lead="We set up the monitoring pipeline, calibrate the anomaly detection, and deliver the first live report. Your team reviews and actions. Nobody builds the report manually."
        benefits={[
          'GSC and Ahrefs access required to start',
          'First automated report delivered within 14 days',
          'Critical alerts configured from day one',
        ]}
        submitText="Set Up Technical Monitoring"
      />
      <Footer />
    </main>
  )
}
