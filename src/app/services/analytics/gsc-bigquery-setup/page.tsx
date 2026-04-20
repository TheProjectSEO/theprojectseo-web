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
import { Database, Code2, Search, GitMerge, ShieldCheck, Clock } from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'GSC to BigQuery Setup | Search Console Data Warehousing | TheProjectSEO',
  description:
    'Enable the Google Search Console bulk data export and wire it into BigQuery. Unlock three years of impression, click, and position data at URL level with SQL flexibility and cross-source joins.',
  alternates: {
    canonical: '/services/analytics/gsc-bigquery-setup',
  },
  openGraph: {
    title: 'GSC to BigQuery Setup | Search Console Data Warehousing | TheProjectSEO',
    description:
      'Three years of Search Console data, SQL-level query access, joined with GA4 and Ahrefs exports. We set this up, monitor it, and keep it running.',
    url: 'https://theprojectseo.com/services/analytics/gsc-bigquery-setup',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'GSC to BigQuery Setup',
  title: 'Three years of Search Console data,',
  accentWord: 'queryable in SQL.',
  description:
    'The Google Search Console interface retains 16 months of data and limits you to 1,000 rows per export. The bulk data export feature unlocks the full dataset: every URL, every query, every country, every device, every day, going back as far as the export has been running. We configure the export, build the ingestion pipeline, and give your team SQL access to search performance data that no rank tracker can match.',
  ctaPrimaryText: 'Set Up GSC to BigQuery',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Analytics Services',
  ctaSecondaryHref: '/services/analytics',
}

const statsData = [
  { value: '3yr', label: 'Data retention with bulk export running' },
  { value: '16mo', label: 'Maximum retention in the GSC interface' },
  { value: '1K', label: 'Row limit in GSC exports (we remove this)' },
  { value: '∞', label: 'SQL query flexibility in BigQuery' },
]

const servicesData = {
  subheading: 'What the Setup Unlocks',
  heading: 'Six capabilities the GSC interface cannot give you.',
  services: [
    {
      icon: Database,
      title: 'Full Query and URL Dataset',
      description:
        'The GSC interface samples data and caps exports at 1,000 rows. The bulk export to BigQuery delivers the complete, unsampled dataset: every query for every URL for every day, limited only by Google\'s 16-month rolling window on the data itself.',
      features: [
        'Unsampled impression and click data for all URLs',
        'Complete query set including long-tail and low-volume queries',
        'Device, country, and search type breakdowns in one table',
        'Daily granularity going back to when the export was enabled',
      ],
    },
    {
      icon: Clock,
      title: 'Extended Historical Retention',
      description:
        'Once the bulk export is running, BigQuery retains your data indefinitely. In 12 months you will have 12 months of data. In three years you will have three years. The export starts from the day you enable it. there is no retroactive history.',
      features: [
        'Indefinite retention once export is configured',
        'Daily partitioned tables for cost-efficient queries',
        'Historical trend analysis at query and URL level',
        'Year-over-year and multi-year seasonality modelling',
      ],
    },
    {
      icon: Code2,
      title: 'SQL Flexibility',
      description:
        'Any question you can ask in SQL you can now answer against your search performance data. Which pages gained impressions but lost CTR? Which queries rank in the top 10 for desktop but not mobile? Which URL had the largest week-over-week impression drop?',
      features: [
        'Custom SQL queries for any segmentation you need',
        'Window functions for trend and delta calculations',
        'Aggregations by page group, topic cluster, or intent',
        'Scheduled queries that auto-update reporting tables',
      ],
    },
    {
      icon: GitMerge,
      title: 'Cross-Source Data Joins',
      description:
        'The real power of BigQuery is joining Search Console data with data from other sources: GA4 sessions, Ahrefs keyword exports, Salesforce pipeline data, and your internal product or CRM data.',
      features: [
        'GSC clicks joined to GA4 sessions by landing page and date',
        'Ahrefs position data joined to GSC impressions for gap analysis',
        'Search Console coverage data joined to technical crawl data',
        'CRM revenue joined to top-of-funnel search queries',
      ],
    },
    {
      icon: Search,
      title: 'URL-Level Inspection Pipeline',
      description:
        'Beyond the bulk export, we run a URL-level inspection pipeline that checks indexation status, canonical signals, and crawl history for your highest-value pages on a weekly schedule. This pattern surfaces indexation issues before they become traffic drops.',
      features: [
        'Scheduled URL inspection API calls for top pages',
        'Indexation status change alerts',
        'Canonical signal validation at scale',
        'Coverage delta tracking week over week',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Monitoring and Alerting',
      description:
        'Data pipelines break. Export configurations drift. We build monitoring into the pipeline from day one so you know within one business day if data stops flowing or if row counts fall outside expected ranges.',
      features: [
        'Daily row count validation against expected ranges',
        'Schema drift detection with automated alerts',
        'Slack or email notification on pipeline failure',
        'Monthly data quality report with anomaly log',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Enable the GSC bulk data export',
    description:
      'We configure the Google Search Console bulk data export in your Google Cloud project. This requires owner-level access to the Search Console property and editor access to a BigQuery dataset. If you do not have a GCP project, we set one up and configure billing with cost caps. The export starts delivering data the following day. there is no retroactive history from before the enable date.',
  },
  {
    number: '02',
    title: 'Validate the schema and build reference tables',
    description:
      'The raw GSC export tables have a specific schema with nested repeated fields. We validate that the export is delivering data correctly, flatten the relevant fields into queryable tables, and build reference tables for your URL taxonomy (page type, topic cluster, product category) so any SQL query can be segmented meaningfully.',
  },
  {
    number: '03',
    title: 'Build the cross-source joins',
    description:
      'We set up the scheduled queries that join GSC data to GA4 session data and any other data sources you have in BigQuery. The most common join is GSC clicks to GA4 sessions by landing page and date: this lets you calculate organic conversion rate by search query and URL, something neither tool can show you independently.',
  },
  {
    number: '04',
    title: 'Set up dashboards, monitoring, and access',
    description:
      'We connect a Looker Studio dashboard to the BigQuery tables, configure row count monitoring and alerting, and set up IAM roles so your team can query the data without needing to understand the pipeline architecture. Documentation covers the table schema, the query patterns we use most often, and how to add new data sources.',
  },
]

const caseStudyData = {
  subheading: 'GSC to BigQuery in Practice',
  heading: 'How a 1,200-page B2C site found its traffic floor after a core algorithm update.',
  challenge:
    'A B2C content site lost 35% of its organic traffic after a Google core algorithm update. Their Search Console interface showed the traffic drop but had only 16 months of history and could not answer the most important question: which query clusters drove the loss, and did those queries shift to competitors or exit the market entirely?',
  solution:
    'The GSC bulk export had been running for 28 months at the time of the update. We queried the full 28-month dataset in BigQuery, segmented queries by topic cluster, and compared impression trends before and after the update. We then joined the GSC data to Ahrefs SERP data in BigQuery to determine which lost queries went to specific competitor URLs versus which queries saw overall SERP volatility without a clear winner.',
  results: [
    { metric: 'Months of historical data available for analysis', improvement: '28', timeframe: 'vs. 16 maximum in GSC interface' },
    { metric: 'Query clusters identified as algorithm-impacted vs. competitor-captured', improvement: '3 vs. 7', timeframe: 'Different recovery strategies needed' },
    { metric: 'Traffic recovery from content updates on competitor-captured clusters', improvement: '+28%', timeframe: '4 months post-analysis' },
    { metric: 'Weekly monitoring alerts preventing similar blindspot', improvement: '52/yr', timeframe: 'Automated, no manual review needed' },
  ],
}

const faqItems = [
  {
    question: 'What is the Google Search Console bulk data export?',
    answer:
      'It is a feature in Google Search Console that automatically exports your full search performance data (impressions, clicks, positions, CTR by query, page, country, device, and date) to a BigQuery dataset in Google Cloud every day. Unlike the GSC interface (which caps exports at 1,000 rows and retains 16 months), the bulk export delivers unsampled data and retains it as long as you keep BigQuery running. It is free to enable. you only pay for BigQuery storage and queries, which for most sites costs less than $20 per month.',
  },
  {
    question: 'Does this replace the GSC interface?',
    answer:
      'No. The GSC interface is still the best tool for URL inspection, coverage reports, and quick checks on specific pages or queries. BigQuery is for analysis that requires more data volume, longer history, or cross-source joins. We use both: the interface for diagnostic tasks, BigQuery for reporting, trend analysis, and attribution work.',
  },
  {
    question: 'Can you get historical data before the export was enabled?',
    answer:
      'No. The bulk export starts from the day you enable it. If your export is not currently running, you will not have data from before today in BigQuery. This is why we recommend enabling the export as early as possible, even if you have no immediate plans to use it. Every day without the export running is historical data you can never recover.',
  },
  {
    question: 'How much does BigQuery cost for a typical site?',
    answer:
      'For a site with 10,000 to 100,000 daily impressions, the GSC export generates roughly 500MB to 5GB of data per month. BigQuery storage costs approximately $0.02 per GB per month, and query costs depend on the volume of data scanned per query. Most sites pay $5 to $25 per month in BigQuery costs for this use case. We configure your dataset with partition pruning and cost controls so queries never scan more data than necessary.',
  },
  {
    question: 'What other data sources can you join to the GSC data?',
    answer:
      'Any data you can get into BigQuery. The most common joins we build are: GA4 session and event data (to calculate organic conversion rate by query and landing page), Ahrefs keyword and position data (for competitive analysis and gap identification), Salesforce or HubSpot opportunity data (for revenue attribution), and internal data like product catalog or content taxonomy tables. Each additional data source requires its own ingestion pipeline, which we build and maintain.',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="GSC to BigQuery questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function GscBigQuerySetupPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics/gsc-bigquery-setup',
          name: 'GSC to BigQuery Setup',
          description:
            'Configure the Google Search Console bulk data export to BigQuery, build cross-source joins with GA4 and Ahrefs, and set up dashboards and monitoring for your full search performance dataset.',
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
        subheading="How We Set It Up"
        heading="Four steps from zero to queryable search data."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Get Your Search Data into BigQuery?"
        heading="Enable the export. Build the pipeline. Start asking better questions."
        lead="We can have the bulk export running and the first dashboard live within two weeks. The longer you wait, the more historical data you will never have."
        benefits={[
          'Google Cloud project setup included if needed',
          'First dashboard live within 14 days',
          'BigQuery cost controls configured from day one',
        ]}
        submitText="Start the GSC Setup"
      />
      <Footer />
    </main>
  )
}
