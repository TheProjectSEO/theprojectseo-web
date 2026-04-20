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
  RelatedServicesSection,
} from '@/components/service-page-sections'
import {
  BarChart3,
  TrendingUp,
  GitBranch,
  Database,
  RefreshCw,
  MonitorCheck,
  LayoutDashboard,
} from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'SEO Analytics & Reporting Services | TheProjectSEO',
  description:
    'SEO analytics services that connect organic traffic to pipeline and revenue. GSC to BigQuery setup, GA4 migration, SEO forecasting, custom dashboards, and automated weekly reporting.',
  alternates: {
    canonical: '/services/analytics',
  },
  openGraph: {
    title: 'SEO Analytics & Reporting Services | TheProjectSEO',
    description:
      'Not rank-tracker screenshots. Actual revenue attribution, traffic forecasting, and board-ready dashboards built on BigQuery, GA4, and Search Console data.',
    url: 'https://theprojectseo.com/services/analytics',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'SEO Analytics & Reporting',
  title: 'SEO analytics that speak',
  accentWord: 'revenue,',
  titleAfterAccent: 'not rankings',
  description:
    'Most SEO reporting stops at keyword positions and traffic counts. That is the wrong frame. Organic search drives pipeline, demos, and signed contracts. We build the analytics infrastructure to prove it, with forecasts in Python, warehouses in BigQuery, and dashboards your CFO can read without a glossary.',
  ctaPrimaryText: 'Book a Discovery Call',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View All Services',
  ctaSecondaryHref: '/services',
}

const statsData = [
  { value: '5+', label: 'Data sources unified per client' },
  { value: '3yr', label: 'GSC data retention in BigQuery' },
  { value: '15+', label: 'Clients with live dashboards' },
  { value: '100%', label: 'Python-verified, not AI-estimated' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Seven analytics capabilities, one coherent data stack.',
  lead: 'Each service below runs on the same underlying infrastructure: Search Console exports, GA4 event data, and Ahrefs data warehouse exports, all joined in BigQuery and surfaced through dashboards your team actually uses.',
  services: [
    {
      icon: TrendingUp,
      title: 'SEO Forecasting',
      description:
        'Traffic and revenue projections tied to business outcomes, not keyword volume estimates. We build custom forecast models in Python that output: if we win these rankings, here is the expected revenue.',
      features: [
        'Traffic x CR x AOV = Revenue formula applied to every forecast',
        'Keyword opportunity sizing against current positions',
        'Scenario modeling (conservative, base, aggressive)',
        'Monthly forecast vs. actuals tracking',
      ],
    },
    {
      icon: BarChart3,
      title: 'SEO Reporting',
      description:
        'Board-ready reports built on pipeline contribution and share-of-voice, not rank tracker screenshots. We design the reporting layer, automate the data pull, and deliver a document that tells a story.',
      features: [
        'Executive dashboard in Looker Studio or Google Sheets',
        'Keyword momentum and competitive delta tracking',
        'Pipeline contribution from organic channel',
        'Weekly automation so no one builds reports manually',
      ],
    },
    {
      icon: GitBranch,
      title: 'SEO Attribution',
      description:
        'Connecting organic traffic to closed revenue. We implement first-touch, last-touch, and Markov-chain multi-touch attribution models so organic search gets the credit it actually deserves.',
      features: [
        'Multi-touch Markov attribution for B2B SaaS and considered purchases',
        'Organic channel weighting in the buyer journey',
        'CRM and GA4 data join in BigQuery',
        'Attribution model comparison reports',
      ],
    },
    {
      icon: Database,
      title: 'GSC to BigQuery Setup',
      description:
        'Enable the Google Search Console bulk data export, wire it into BigQuery, and unlock SQL-level access to three years of impression, click, and position data across every URL and query.',
      features: [
        'Bulk export configuration and schema validation',
        'URL-level inspection pipeline (our internal tooling)',
        'Cross-join with GA4 sessions and Ahrefs exports',
        'Automated daily ingestion with alerting on schema drift',
      ],
    },
    {
      icon: RefreshCw,
      title: 'GA4 Migration',
      description:
        'UA is gone, but many orgs still have GA4 setups that double-count conversions, miss bounced sessions, and have broken dataLayer variables. We audit, fix, and verify event parity from scratch.',
      features: [
        'Event parity audit between UA and GA4',
        'Enhanced measurement double-counting diagnosis',
        'dataLayer variable validation across all forms and CTAs',
        'Conversion event mapping with before/after verification',
      ],
    },
    {
      icon: MonitorCheck,
      title: 'Automated Technical Reporting',
      description:
        'Weekly technical SEO reports generated automatically: crawl stats, index coverage, Core Web Vitals trends, and anomaly detection. Humans review and action; they do not build the report.',
      features: [
        'GSC coverage and crawl anomaly detection',
        'Ahrefs Site Audit delta reporting week over week',
        'Lighthouse CWV trend tracking per page group',
        'Slack or email delivery with action items highlighted',
      ],
    },
    {
      icon: LayoutDashboard,
      title: 'Custom Dashboards',
      description:
        'Looker Studio for fast iteration, Power BI for enterprise environments, Metabase for self-hosted flexibility, or custom React dashboards on Supabase for product teams that need full control.',
      features: [
        'Pick-based-on-stack recommendations (we match the tool to your environment)',
        'Blended data sources: GSC, GA4, Ahrefs, CRM, paid media',
        'Custom calculated metrics: organic pipeline, share-of-voice, keyword velocity',
        'Embedded dashboards inside your existing BI or product',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Audit your current analytics state',
    description:
      'We start by understanding what data you already have: GA4 configuration, GSC access, any existing BigQuery datasets, CRM fields being captured, and the reporting cadence your team currently follows. This takes one call and one week of async review. Most teams discover they have more raw data than they think. and far less clean data than they need.',
  },
  {
    number: '02',
    title: 'Design the data architecture',
    description:
      'Before writing a line of SQL or Python, we map the full stack: which data sources feed which tables, how they join, what the latency expectations are, and where the dashboards sit. Teams that skip architecture rebuild 60% of their reporting layer within 12 months. We get it right before we build.',
  },
  {
    number: '03',
    title: 'Build the pipelines and warehouse',
    description:
      'We configure GSC bulk exports, set up BigQuery datasets, write the ingestion scripts, and validate row counts and schema consistency against your actual data. Every pipeline ships with monitoring and alerting. You know within one hour if something breaks.',
  },
  {
    number: '04',
    title: 'Deliver dashboards and train your team',
    description:
      'Dashboards ship with a 45-minute walkthrough for whoever owns the reporting cadence at your organization. We document the data model, the update frequency, and the interpretation guide for each metric. You can modify and extend the system without us.',
  },
]

const caseStudyData = {
  subheading: 'How We Measure Our Own Work',
  heading: 'MobileModular: from zero attribution to full revenue pipeline tracking.',
  challenge:
    'A national modular building company was generating significant organic traffic but had no visibility into which pages drove RFQ submissions, which state markets were underperforming, or how organic ranked against their paid and direct channels. SEO was a cost center in their reporting, not a revenue driver.',
  solution:
    'We built a four-source data warehouse: GSC bulk export (3 years of search data), GA4 events, Salesforce opportunity data, and Google Ads spend. A custom Python pipeline joins these daily in BigQuery. An executive Looker Studio dashboard shows organic pipeline contribution by product line and state, updated every 24 hours.',
  results: [
    { metric: 'States with no location page but active revenue identified', improvement: '35', timeframe: '$77M revenue gap surfaced' },
    { metric: 'Weekly automated reports replacing manual builds', improvement: '4', timeframe: 'Saves 6+ hours per week' },
    { metric: 'Organic pipeline attribution accuracy', improvement: '94%', timeframe: 'Validated against Salesforce CRM' },
    { metric: 'Homepage cannibalization confirmed in', improvement: '45/51', timeframe: 'States via SERP data joins' },
  ],
}

const faqItems = [
  {
    question: 'What is the difference between SEO reporting and SEO analytics?',
    answer:
      'Reporting is the output: a document or dashboard that communicates what happened. Analytics is the infrastructure that makes the reporting trustworthy and repeatable. Most agencies deliver reporting but skip analytics. you get a PDF with rank positions every month, but no underlying data model that lets you ask a new question. We build the analytics layer first so the reporting answers real business questions instead of summarizing rank tracker exports.',
  },
  {
    question: 'Why BigQuery instead of just using GA4 or Google Search Console directly?',
    answer:
      'GA4 retains event data for 14 months maximum, and the reporting interface does not let you join Search Console data with session data or CRM data. BigQuery removes both constraints. You get three-plus years of GSC impression and click data, SQL-level query flexibility, and the ability to join organic search data against any other data source your business has. For any client doing serious attribution work, BigQuery is not optional.',
  },
  {
    question: 'How is SEO attribution different from standard GA4 attribution?',
    answer:
      'GA4 uses last-click or data-driven attribution by default. For B2B SaaS and considered purchases where the sales cycle is 30 to 90 days, last-click attribution systematically undervalues organic search (which often drives the first brand awareness touch) and overvalues the final retargeting ad. We implement multi-touch Markov chain attribution on top of BigQuery data, which distributes revenue credit across all touchpoints proportional to their actual influence on conversion. Organic typically gets 15 to 40% more credit than last-click models assign it.',
  },
  {
    question: 'How long does a GSC to BigQuery setup take?',
    answer:
      'The technical setup takes three to five days once we have Search Console access and a GCP project. This covers enabling the bulk export, validating the schema, writing the ingestion pipeline, and setting up monitoring. Historical data backfill (typically 16 months) runs automatically in the background and completes within 48 hours for most sites. The full analytics stack including dashboards takes three to four weeks.',
  },
  {
    question: 'What does an SEO forecast actually look like?',
    answer:
      'A forecast document starts with your current baseline: position distribution across target keywords, estimated monthly traffic, estimated conversion rate, and average deal value or order value. We model what happens to each metric if we move specific keyword clusters from positions 20 to 30 into positions 5 to 10. The output is a table with three scenarios (conservative, base, aggressive) showing estimated monthly traffic gain and estimated monthly revenue impact. Example: 10,000 forecasted visits at a 2% conversion rate and a $150 average order value equals $30,000 per month in incremental revenue. We run this model for every major keyword cluster we target.',
  },
  {
    question: 'Do you work with existing dashboards or only build from scratch?',
    answer:
      'Both. If you have existing Looker Studio, Power BI, or Tableau assets, we audit the data model and fix the underlying reliability issues before adding new metrics. If you are starting from scratch, we recommend the tool that matches your team\'s technical environment and reporting cadence. We never pick a tool because it is impressive; we pick the one your team will actually use next Monday.',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="SEO analytics questions we get asked most"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function AnalyticsPillarPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics',
          name: 'SEO Analytics & Reporting Services',
          description:
            'SEO analytics infrastructure including GSC to BigQuery setup, GA4 migration, SEO forecasting, revenue attribution, custom dashboards, and automated technical reporting.',
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
            name: 'SEO Analytics Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Forecasting' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Reporting' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'SEO Attribution' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GSC to BigQuery Setup' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'GA4 Migration' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automated Technical Reporting' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Custom Dashboards' } },
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
      <ServicesGrid {...servicesData} />
      <ProcessSection
        subheading="How We Work"
        heading="Four stages from messy data to board-ready reporting."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <RelatedServicesSection
        subheading="Related Services"
        heading="Analytics works best alongside these."
        services={[
          {
            title: 'Technical SEO',
            description: 'The crawl data and coverage metrics that feed your technical reports.',
            href: '/services/technical-seo',
          },
          {
            title: 'SEO Consulting',
            description: 'Strategy sessions that use the analytics we build to set direction.',
            href: '/services/seo-consulting',
          },
          {
            title: 'Enterprise SEO',
            description: 'Analytics at scale: multi-brand, multi-region, multi-domain tracking.',
            href: '/services/enterprise-seo',
          },
          {
            title: 'Content Services',
            description: 'Content output guided by keyword momentum data from your analytics stack.',
            href: '/services/content',
          },
        ]}
      />
      <CTAFormSection
        subheading="Ready to Build Your SEO Data Stack?"
        heading="Let's scope your analytics engagement."
        lead="One call covers your current data state, what is missing, and what we would build first. Most clients have a working GSC to BigQuery pipeline inside two weeks."
        benefits={[
          'Free analytics audit included with discovery call',
          'BigQuery and GA4 access required to start',
          'Fixed-scope build, no ongoing lock-in unless you want it',
        ]}
        submitText="Book the Discovery Call"
      />
      <Footer />
    </main>
  )
}
