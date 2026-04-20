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
import { LayoutDashboard, Database, Code2, BarChart3, Layers, Settings } from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'Custom SEO Dashboards | Looker Studio, Power BI, Metabase | TheProjectSEO',
  description:
    'Custom SEO dashboards built on your data: Looker Studio for speed, Power BI for enterprise, Metabase for self-hosted, or custom React dashboards on Supabase. We pick the tool that matches your stack.',
  alternates: {
    canonical: '/services/analytics/custom-dashboards',
  },
  openGraph: {
    title: 'Custom SEO Dashboards | Looker Studio, Power BI, Metabase | TheProjectSEO',
    description:
      'A custom SEO dashboard is only useful if your team uses it next Monday. We match the tool to your technical environment and build on top of your actual BigQuery data.',
    url: 'https://theprojectseo.com/services/analytics/custom-dashboards',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Custom SEO Dashboards',
  title: 'A dashboard your team will actually',
  accentWord: 'use.',
  description:
    'The wrong dashboard tool is worse than no dashboard at all. A Power BI report at a company where no one has Power BI Desktop installed is a PDF that never opens. We start by understanding your team\'s technical environment, then recommend the tool that will get looked at every Monday morning. Looker Studio for most teams, Power BI where enterprise infrastructure demands it, Metabase where self-hosted data sovereignty matters, or a custom React dashboard where none of those fit.',
  ctaPrimaryText: 'Build Your Dashboard',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Analytics Services',
  ctaSecondaryHref: '/services/analytics',
}

const statsData = [
  { value: '4', label: 'Dashboard platforms we build on' },
  { value: '3wk', label: 'Typical Looker Studio delivery timeline' },
  { value: '100%', label: 'Built on your BigQuery data, not tool exports' },
  { value: '5+', label: 'Blended data sources per dashboard average' },
]

const servicesData = {
  subheading: 'Which Tool We Recommend',
  heading: 'Four platforms, each for a different team profile.',
  services: [
    {
      icon: LayoutDashboard,
      title: 'Looker Studio (Google)',
      description:
        'Free, fast to build, native BigQuery connector, and accessible to anyone with a Google account. The right choice for most marketing and SEO teams. Limitations: no complex calculated metrics, limited custom visualizations, and Google-controlled updates that occasionally break existing reports.',
      features: [
        'Best for: teams already in Google Workspace',
        'Timeline: 2 to 3 weeks from BigQuery data to live dashboard',
        'Native connectors: GA4, GSC, BigQuery, Google Sheets, Google Ads',
        'Access control via Google Workspace roles',
      ],
    },
    {
      icon: BarChart3,
      title: 'Power BI (Microsoft)',
      description:
        'The enterprise standard for organizations that use Microsoft 365. More powerful calculated metrics and custom visualizations than Looker Studio. Requires Power BI Desktop for report editing and a Power BI Pro license ($10/user/month) for sharing. Right choice where IT already runs the Microsoft stack.',
      features: [
        'Best for: enterprises with Microsoft 365 and IT-managed BI',
        'DAX calculated metrics for complex SEO KPI definitions',
        'Direct Query to BigQuery for real-time data',
        'Embedded dashboard option in SharePoint or Teams',
      ],
    },
    {
      icon: Database,
      title: 'Metabase (Self-Hosted)',
      description:
        'Open-source BI tool that runs on your infrastructure. No per-user licensing cost at scale. Right for teams that have engineering resources, care about data sovereignty, or need to embed analytics inside their own product. Connects directly to BigQuery or PostgreSQL.',
      features: [
        'Best for: engineering-led teams or product-embedded analytics',
        'Self-hosted on AWS, GCP, or your VPS (we configure this)',
        'SQL-based questions or GUI question builder for non-technical users',
        'Public embed links for client-facing dashboards without login',
      ],
    },
    {
      icon: Code2,
      title: 'Custom React Dashboard (Supabase)',
      description:
        'For teams that need full control over the visual design, the data model, or the user experience. We build custom dashboard applications using React and Supabase with direct BigQuery data pulls through a serverless API layer.',
      features: [
        'Best for: agencies building client-facing white-label dashboards',
        'Fully custom design matching your brand system',
        'Real-time updates via Supabase realtime subscriptions',
        'User authentication and role-based data access control',
      ],
    },
    {
      icon: Layers,
      title: 'Blended Multi-Source Dashboards',
      description:
        'Every dashboard we build blends multiple data sources. GSC impressions and clicks, GA4 sessions and conversions, Ahrefs share-of-voice, CRM pipeline, paid media spend. The power is in the joins. a dashboard that only shows one data source is a glorified export.',
      features: [
        'Up to 8 data sources blended in a single BigQuery dataset',
        'Custom calculated metrics: organic pipeline rate, SOV index, keyword velocity',
        'Unified date dimension across all sources',
        'Source-of-truth documentation for every metric definition',
      ],
    },
    {
      icon: Settings,
      title: 'Dashboard Maintenance and Evolution',
      description:
        'Dashboards decay. Data sources change, business questions evolve, and new metrics become relevant. We offer monthly maintenance retainers that keep your dashboard current as your analytics needs change.',
      features: [
        'Monthly data source validation and schema drift correction',
        'New metric additions as business questions evolve',
        'Quarterly dashboard review with your reporting stakeholders',
        'Performance optimization for slow queries or loading times',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Understand your team and your questions',
    description:
      'We start with two questions: who reads the dashboard (technical or non-technical, how many people, what decisions do they make with it) and what are the three most important questions the dashboard needs to answer. Most dashboard projects fail because they try to answer 30 questions instead of three. We scope ruthlessly and add additional views only after the core three are working correctly.',
  },
  {
    number: '02',
    title: 'Select the right tool for your environment',
    description:
      'Based on your team profile, technical infrastructure, and access requirements, we recommend a specific tool with explicit reasoning. If you have a strong preference for a tool we have not recommended, we will explain the tradeoffs and build what you want. but we will not pretend the tradeoffs do not exist.',
  },
  {
    number: '03',
    title: 'Build on your BigQuery data layer',
    description:
      'All dashboards connect to BigQuery as the source of truth. If you do not have BigQuery set up, we build the data layer first. The dashboard layer is a read interface on top of the data model; getting the data model right is the work that makes the dashboard trustworthy. We never build a dashboard that connects directly to raw API endpoints. that is how you get dashboards with sampling discrepancies and stale data.',
  },
  {
    number: '04',
    title: 'Deliver, document, and hand over',
    description:
      'We deliver the dashboard with a written metric definition guide (so anyone reading it knows exactly what each number means and where it comes from), a walkthrough session for the primary audience, and documentation for whoever will maintain it. Ownership is yours from day one.',
  },
]

const caseStudyData = {
  subheading: 'Custom Dashboards in Practice',
  heading: 'Building a Looker Studio dashboard that replaced five weekly manual reports.',
  challenge:
    'A digital marketing agency was producing five separate reports for each client: organic traffic, keyword rankings, technical health, backlink profile, and competitive share-of-voice. Each report took 90 minutes to compile and pulled from different tools with different data definitions. Clients were confused by inconsistencies across reports. The team spent 15 hours per week per client on reporting instead of strategy.',
  solution:
    'We built a unified BigQuery data model pulling from GSC, Ahrefs, GA4, and the agency\'s proprietary keyword tracking data. A single Looker Studio dashboard replaced all five reports: one tab per report type, all pulling from the same data source, all using consistent metric definitions. An automated weekly data refresh ran on Sunday night so the dashboard was current by Monday morning. Client access was managed via Google account sharing.',
  results: [
    { metric: 'Weekly hours saved per client on reporting', improvement: '12', timeframe: 'From 15 hours to 3 hours review time' },
    { metric: 'Number of tools clients now need to check', improvement: '1', timeframe: 'Down from 5 separate reports' },
    { metric: 'Client questions about data inconsistencies', improvement: '0', timeframe: 'Single source of truth eliminates discrepancies' },
    { metric: 'Agency capacity freed for strategy work per client per week', improvement: '12hr', timeframe: 'Redirected from manual report production' },
  ],
}

const faqItems = [
  {
    question: 'How do you decide which dashboard tool to recommend?',
    answer:
      'We use a four-factor decision matrix: technical environment (Google Workspace vs. Microsoft 365 vs. custom), audience technical level (can they run a SQL query or do they need a GUI), access and sharing requirements (internal only, client-facing, embedded in a product), and data freshness needs (daily batch is fine vs. near-real-time required). Most teams end up on Looker Studio because it is free, fast to build, and native in the Google ecosystem where most SEO data already lives. Enterprise Microsoft teams typically need Power BI. Teams with engineering resources who need embedded analytics or self-hosted data control go to Metabase or a custom build.',
  },
  {
    question: 'Do you build dashboards on top of existing data or do you need to set up BigQuery first?',
    answer:
      'We prefer to build on BigQuery because it gives us a single source of truth and eliminates sampling discrepancies between tools. If you already have a BigQuery dataset with clean, documented data, we can build a dashboard directly on top of it. If you are starting from scratch, we set up the data layer first (typically two to three weeks) and then build the dashboard. Building dashboards directly on raw GA4 or GSC APIs without a data layer in between creates maintenance headaches and metric inconsistencies that always surface at the worst moment.',
  },
  {
    question: 'What is the difference between a Looker Studio dashboard and a GA4 Explore report?',
    answer:
      'GA4 Explore reports are flexible but locked inside GA4. They can only use GA4 data, they are not shareable outside the GA4 property, and they have GA4\'s sampling limitations. Looker Studio connects to BigQuery where we have joined GA4 data with GSC, Ahrefs, CRM, and any other source. It produces a fixed-layout report that anyone with a link can view without a GA4 login. For reporting to stakeholders who do not have GA4 access, Looker Studio is always the right choice.',
  },
  {
    question: 'Can you build dashboards for our clients as white-label deliverables?',
    answer:
      'Yes. For agencies that want to deliver branded analytics dashboards to their clients, we build the dashboard template, configure client-specific data connections, and set up access management so each client sees only their own data. Looker Studio supports this via report copying and data source swapping. For more complex multi-tenant requirements, Metabase self-hosted or a custom React build gives more control over the access model and branding.',
  },
  {
    question: 'What custom metrics can you calculate that standard tools cannot show?',
    answer:
      'The most valuable custom metrics we build: organic pipeline rate (organic sessions to CRM lead conversion, not just form fill), share-of-voice index (your impressions as a percentage of total estimated impressions for your target keyword universe), keyword velocity (rate of position improvement per week weighted by revenue relevance), content decay score (pages where impressions are declining faster than traffic. indicating ranking loss before traffic drop), and incremental organic revenue (organic revenue minus what direct and branded search would have driven without SEO investment).',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="Custom dashboard questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function CustomDashboardsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics/custom-dashboards',
          name: 'Custom SEO Dashboards',
          description:
            'Custom SEO dashboards built on BigQuery data. Looker Studio, Power BI, Metabase, or custom React on Supabase. Tool selection matched to team environment and access requirements.',
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
        subheading="How We Build Dashboards"
        heading="Four steps from scattered data to a dashboard your team checks every Monday."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Build a Dashboard Worth Opening?"
        heading="Tell us what questions it needs to answer."
        lead="We start by scoping the three core questions your dashboard must answer. Most teams are surprised how focused and fast the build goes once those three are clear."
        benefits={[
          'Tool recommendation with explicit reasoning included',
          'First dashboard delivered within 3 weeks (Looker Studio) or 6 weeks (custom)',
          'Metric definitions documented so anyone can read it',
        ]}
        submitText="Start the Dashboard Scoping"
      />
      <Footer />
    </main>
  )
}
