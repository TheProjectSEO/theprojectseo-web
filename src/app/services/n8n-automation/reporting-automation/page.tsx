import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  TestimonialQuoteSection,
  RelatedServicesSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { N8nWorkflowVisual } from '@/components/n8n-workflow-visual'
import {
  BarChart3,
  Database,
  Mail,
  Calendar,
  FileText,
  Zap,
  TrendingUp,
  PieChart,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'N8n Reporting Automation Services | Dashboards, SQL & Scheduled Reports | TheProjectSEO',
  description:
    'Expert N8n reporting automation services. Automate dashboards, scheduled reports, SQL queries, Looker Studio integration, Slack and email report delivery. Reduce reporting time by 95%.',
  alternates: {
    canonical: '/services/n8n-automation/reporting-automation',
  },
  openGraph: {
    title: 'N8n Reporting Automation Services | TheProjectSEO',
    description:
      'Automate reporting workflows with N8n. Generate dashboards, schedule reports, and track KPIs in real-time.',
    url: 'https://theprojectseo.com/services/n8n-automation/reporting-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8n Reporting Automation Services | TheProjectSEO',
    description:
      'Automate dashboards, SQL queries, and scheduled report delivery with N8n.',
  },
}

const heroData = {
  label: 'Reporting Automation',
  title: 'Automate reports and',
  accentWord: 'eliminate',
  titleAfterAccent: 'manual data compilation',
  description:
    'Automate dashboard generation, scheduled reports, SQL queries, KPI tracking, and report delivery via email or Slack. Reduce reporting time by 95% and ensure real-time data accuracy.',
  ctaPrimaryText: 'Automate Your Reporting',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'All N8n Services',
  ctaSecondaryHref: '/services/n8n-automation',
}

const statsData = [
  { value: '95%', label: 'Time Reduction' },
  { value: 'Real-time', label: 'Data Updates' },
  { value: '100%', label: 'Accuracy' },
  { value: '0 hrs', label: 'Manual Work' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'Reporting pain points we solve',
  lead: 'Stop spending hours compiling reports manually. Automate your entire reporting workflow for instant insights.',
  cards: [
    {
      title: 'Manual Report Generation',
      items: [
        '10+ hours weekly on reports',
        'Copy-paste from multiple sources',
        'Spreadsheet compilation tedious',
        'Data outdated by delivery time',
      ],
    },
    {
      title: 'Disconnected Data Sources',
      items: [
        'Data in 10+ different tools',
        'No unified reporting view',
        'Inconsistent metrics definitions',
        'Manual data reconciliation',
      ],
    },
    {
      title: 'Delayed Insights',
      items: [
        'Weekly reports lag behind reality',
        'KPI tracking not real-time',
        'Decisions based on old data',
        'Opportunities missed',
      ],
    },
    {
      title: 'Distribution Overhead',
      items: [
        'Manual email report sending',
        'Attachment version control chaos',
        'No automated scheduling',
        'Follow-up questions slow response',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete reporting automation solutions',
  lead: 'Automate every aspect of your reporting workflow from data aggregation to delivery.',
  services: [
    {
      icon: BarChart3,
      title: 'Automated Dashboards',
      description: 'Auto-generate dashboards in Looker Studio, Tableau, Power BI, or Google Sheets with real-time data from all sources.',
      features: [
        'Real-time dashboard updates',
        'Multi-source data aggregation',
        'Custom KPI calculations',
        'Visual chart generation',
      ],
    },
    {
      icon: Calendar,
      title: 'Scheduled Reports',
      description: 'Automatically generate and distribute reports daily, weekly, or monthly via email, Slack, or PDF delivery.',
      features: [
        'Flexible scheduling options',
        'Email/Slack delivery',
        'PDF report generation',
        'Customizable templates',
      ],
    },
    {
      icon: Database,
      title: 'SQL Query Automation',
      description: 'Automate SQL queries, data transformations, and database aggregations for reporting and analytics.',
      features: [
        'Scheduled SQL execution',
        'Query result formatting',
        'Database aggregations',
        'Performance optimization',
      ],
    },
    {
      icon: TrendingUp,
      title: 'KPI Tracking & Alerts',
      description: 'Real-time KPI monitoring with threshold-based alerts via Slack, email, or SMS when metrics hit targets or drop.',
      features: [
        'Real-time KPI monitoring',
        'Threshold-based alerts',
        'Anomaly detection',
        'Trend analysis',
      ],
    },
    {
      icon: PieChart,
      title: 'Multi-Source Data Aggregation',
      description: 'Pull data from CRM, analytics, ads, finance tools, and databases into unified reports automatically.',
      features: [
        'Cross-platform data pulls',
        'Unified data models',
        'Automatic data merging',
        'Conflict resolution',
      ],
    },
    {
      icon: FileText,
      title: 'Executive Report Generation',
      description: 'Auto-generate executive summaries, board reports, and investor updates with charts and narrative insights.',
      features: [
        'Executive summaries',
        'Chart generation',
        'Narrative insights',
        'Branded templates',
      ],
    },
    {
      icon: Mail,
      title: 'Report Distribution',
      description: 'Distribute reports via email, Slack channels, Teams, or webhook delivery with custom formatting and attachments.',
      features: [
        'Multi-channel delivery',
        'Custom formatting',
        'Attachment handling',
        'Distribution lists',
      ],
    },
    {
      icon: Zap,
      title: 'Custom Chart Generation',
      description: 'Generate custom charts, graphs, and visualizations using Chart.js, QuickChart, or Google Charts APIs.',
      features: [
        'Dynamic chart creation',
        'Multiple chart types',
        'Branded styling',
        'Interactive visuals',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build reporting automation',
  steps: [
    {
      number: '01',
      title: 'Reporting Audit',
      description:
        'We analyze your current reports, data sources, distribution methods, and identify automation opportunities with highest ROI.',
    },
    {
      number: '02',
      title: 'Data Source Mapping',
      description:
        'We map all data sources (CRM, analytics, databases, ads platforms) and design unified data models for reporting.',
    },
    {
      number: '03',
      title: 'Workflow Build',
      description:
        'We build N8n workflows for data aggregation, SQL queries, dashboard updates, report generation, and scheduled delivery.',
    },
    {
      number: '04',
      title: 'Deployment & Monitoring',
      description:
        'We deploy workflows, set up monitoring alerts, and train your team on accessing automated reports.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Marketing agency: 95% reporting time reduction',
  challenge:
    'A marketing agency with 25 clients spent 40 hours monthly generating client reports. Data was pulled from Google Ads, Facebook Ads, Analytics, and CRM manually into spreadsheets. Reports were outdated by the time they were sent.',
  solution:
    'We implemented N8n workflows that automatically pull data from all sources daily, aggregate metrics by client, generate branded PDF reports, and deliver via email every Monday at 8 AM. Real-time dashboards in Looker Studio update hourly.',
  results: [
    {
      metric: 'Time Saved',
      improvement: '38 hrs/mo',
      timeframe: 'From 40 to 2 hours',
    },
    {
      metric: 'Reporting Speed',
      improvement: '95% faster',
      timeframe: 'Real-time vs weekly',
    },
    {
      metric: 'Client Satisfaction',
      improvement: '+60%',
      timeframe: 'From timely insights',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'Reporting tools we integrate',
  lead: 'We connect N8n with all major analytics, BI, and data platforms.',
  cards: [
    {
      title: 'BI & Dashboards',
      items: ['Looker Studio', 'Tableau', 'Power BI', 'Metabase', 'Google Sheets'],
    },
    {
      title: 'Analytics Platforms',
      items: ['Google Analytics', 'Mixpanel', 'Amplitude', 'Segment', 'Heap'],
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery', 'Snowflake'],
    },
    {
      title: 'Advertising Platforms',
      items: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'TikTok Ads', 'Bing Ads'],
    },
    {
      title: 'CRM & Sales',
      items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Close', 'Copper'],
    },
    {
      title: 'Chart & Visualization',
      items: ['Chart.js', 'QuickChart', 'Google Charts', 'D3.js', 'Plotly'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'Reporting automation packages',
  tiers: [
    {
      name: 'Simple Workflow',
      price: '$500',
      description: 'One-time setup for basic reporting',
      features: [
        'Single report automation',
        'Up to 5 data sources',
        'Email/Slack delivery',
        'Weekly scheduling',
        'Basic dashboards',
      ],
    },
    {
      name: 'Multi-System',
      price: '$2,500',
      description: 'One-time setup for comprehensive reporting',
      features: [
        'Multi-step reporting workflows',
        'Up to 15 data sources',
        'Advanced SQL queries',
        'Looker Studio integration',
        'Real-time KPI alerts',
        'Custom chart generation',
      ],
      featured: true,
    },
    {
      name: 'AI-Powered',
      price: '$5,000',
      description: 'One-time setup with AI capabilities',
      features: [
        'AI-powered reporting automation',
        'Unlimited data sources',
        'Custom BI integrations',
        'Advanced anomaly detection',
        'Multi-tenant reporting',
        'Team training included',
      ],
    },
    {
      name: 'Enterprise Orchestration',
      price: 'Custom',
      description: 'For complex reporting needs',
      features: [
        'Unlimited reports',
        'Unlimited data sources',
        'Custom BI integrations',
        'Advanced anomaly detection',
        'Multi-tenant reporting',
        'Dedicated automation architect',
        'Priority support',
        'SLA guarantee',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What reporting teams say',
  testimonials: [
    {
      quote:
        'Aditya is highly skilled in SEO and has a strong drive for making positive changes. He has successfully led SEO efforts for GrowthSpot and our clients. I highly recommend him to anyone seeking assistance with SEO.',
      author: 'Randal Hung',
      role: 'Founder',
      company: 'GrowthSpot',
    },
    {
      quote:
        'He helped us with market research, define the right topics along with the content brief and SEO framework. He did an extensive site audit and helped us weed out the loopholes. This helped us scale our traffic and also improved our Google ranking. Aditya was always ready to help and introduced me to a lot of concepts in SEO.',
      author: 'Shubhangi',
      role: 'Content',
      company: 'Adapt.io',
    },
    {
      quote:
        'Aditya went above and beyond when he helped us with our SEO strategy. Everything from keyword research to on-page optimization was extremely helpful. He was proactive and has the technical SEO knowledge that any business looking to grow their online presence would benefit from.',
      author: 'Wendy Chan',
      role: 'Co-Founder & CEO',
      company: 'PackMojo',
    },
  ],
}

const faqData = [
  {
    question: 'What types of reports can N8n automate?',
    answer:
      'N8n can automate executive summaries, client reports, sales dashboards, marketing performance reports, financial reports, KPI tracking, SQL query results, custom analytics reports, board presentations, investor updates, operational dashboards, and any report requiring data aggregation from multiple sources. If you manually compile data from multiple tools into a report, N8n can automate it.',
  },
  {
    question: 'How does N8n integrate with Looker Studio (Google Data Studio)?',
    answer:
      'N8n connects to Looker Studio via Google Sheets or BigQuery. We build workflows that aggregate data from all your sources, write it to a Google Sheet or BigQuery table, which Looker Studio uses as a data source. The dashboard updates automatically as N8n refreshes the data. This enables real-time dashboards pulling from CRM, ads, analytics, and databases simultaneously.',
  },
  {
    question: 'Can N8n run SQL queries automatically?',
    answer:
      'Yes. N8n has native nodes for PostgreSQL, MySQL, MongoDB, and can connect to any database via JDBC. We schedule SQL queries to run daily, weekly, or hourly, transform the results, and deliver them via email, Slack, or write to Google Sheets/databases. This eliminates manual SQL execution and report compilation from query results.',
  },
  {
    question: 'How does scheduled report delivery work?',
    answer:
      'N8n workflows run on schedules you define (daily at 8 AM, weekly on Mondays, monthly on the 1st, etc.). The workflow pulls data, generates the report (PDF, Excel, HTML), and sends it via email or Slack. You can have different reports sent to different stakeholders on different schedules. All delivery is automatic with zero manual intervention.',
  },
  {
    question: 'Can N8n generate PDF reports automatically?',
    answer:
      'Yes. N8n can generate PDF reports using HTML templates, Puppeteer for browser-based rendering, or integration with PDF generation APIs. We build branded report templates with your logo, charts, and formatting. The workflow populates the template with current data and generates a PDF, which is then emailed or uploaded to cloud storage automatically.',
  },
  {
    question: 'What is KPI alert automation?',
    answer:
      'N8n workflows continuously monitor your KPIs by querying databases, APIs, or analytics platforms. When a KPI crosses a threshold (e.g., website traffic drops 20%, sales goal hit, churn rate increases), N8n sends instant alerts via Slack, email, or SMS. This enables real-time decision-making instead of waiting for weekly reports to discover issues.',
  },
  {
    question: 'How does N8n aggregate data from multiple sources?',
    answer:
      'N8n workflows pull data from multiple APIs and databases simultaneously, merge the data using common keys (customer ID, date, campaign name), perform calculations and aggregations, and output unified reports. For example, we can combine Google Ads spend, Salesforce pipeline, and Stripe revenue into a single ROI report, all updated automatically.',
  },
  {
    question: 'Can N8n replace our BI tool?',
    answer:
      'N8n does not replace BI tools like Tableau or Looker Studio but enhances them. N8n automates the data pipeline: pulling from multiple sources, transforming data, and feeding your BI tool. This eliminates manual data uploads and ensures your dashboards are always current. Many clients use N8n for automation and their existing BI tool for visualization.',
  },
  {
    question: 'How long does reporting automation take to implement?',
    answer:
      'Essential packages (3-5 reports) take 1-2 weeks. Professional packages (10-15 reports with SQL and dashboards) take 3-4 weeks. Enterprise implementations with complex data models and 20+ reports take 4-6 weeks. We deliver incrementally, starting with your highest-priority reports, so you see value within the first week.',
  },
  {
    question: 'What happens if our data sources change?',
    answer:
      'N8n workflows are modular and easy to update. If you switch analytics platforms or add new data sources, we update the integration nodes (usually 1-3 hours per source). The overall reporting logic remains intact. We provide documentation so your team can make simple updates independently. Most data source changes take less than a day to accommodate.',
  },
]

const relatedServicesData = [
  {
    title: 'Data Pipeline Automation',
    description: 'ETL workflows, data transformation, and database synchronization.',
    href: '/services/n8n-automation/data-pipeline-automation',
  },
  {
    title: 'Marketing Automation',
    description: 'Automate lead capture, email sequences, and campaign tracking.',
    href: '/services/n8n-automation/marketing-automation',
  },
  {
    title: 'CRM Automation',
    description: 'Sync contacts, deals, and activities across multiple CRMs.',
    href: '/services/n8n-automation/crm-automation',
  },
  {
    title: 'Sales Automation',
    description: 'Automate lead routing, follow-ups, and pipeline management.',
    href: '/services/n8n-automation/sales-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Stop wasting time on manual reports',
  lead: 'Let&apos;s discuss your reporting needs and design N8n workflows that deliver real-time insights automatically.',
  submitText: 'Automate Your Reporting',
}

export default function ReportingAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'N8n Reporting Automation Services',
          description:
            'Expert N8n reporting automation services. Automate dashboards, scheduled reports, SQL queries, and KPI tracking.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/n8n-automation/reporting-automation',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<N8nWorkflowVisual />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <TestimonialQuoteSection
        quote="We successfully migrated our blog from Medium to Goodnotes.com/blog without losing traffic. We also solved tech SEO problems for the Thailand, Japan, Taiwan, and Hong Kong sites, doubling the traffic with minimal efforts."
        author="Elizabeth Ching"
        role="Marketing"
        company="Goodnotes"
      />
      <FAQDarkSection title="Reporting automation FAQ" items={faqData} />
      <RelatedServicesSection
        subheading="Related Services"
        heading="Explore more automation solutions"
        services={relatedServicesData}
      />
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
