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
import {
  Database,
  RefreshCw,
  FileText,
  Workflow,
  Zap,
  Cloud,
  Filter,
  GitBranch,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'N8n Data Pipeline Automation | ETL, Database Sync & Data Transformation | TheProjectSEO',
  description:
    'Expert N8n data pipeline automation services. Build ETL workflows, automate database sync, data transformation, warehouse integration, and real-time data pipelines.',
  alternates: {
    canonical: '/services/n8n-automation/data-pipeline-automation',
  },
  openGraph: {
    title: 'N8n Data Pipeline Automation | TheProjectSEO',
    description:
      'Build automated data pipelines with N8n. ETL workflows, database sync, and real-time data transformation.',
    url: 'https://theprojectseo.com/services/n8n-automation/data-pipeline-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8n Data Pipeline Automation | TheProjectSEO',
    description:
      'Automate ETL workflows, database sync, and data transformation with N8n.',
  },
}

const heroData = {
  label: 'Data Pipeline Automation',
  title: 'Build robust data pipelines with',
  accentWord: 'zero code',
  titleAfterAccent: '',
  description:
    'Automate ETL workflows, database synchronization, data transformation, warehouse integration, and real-time data pipelines. Move data seamlessly between systems without manual intervention.',
  ctaPrimaryText: 'Automate Your Data Pipeline',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'All N8n Services',
  ctaSecondaryHref: '/services/n8n-automation',
}

const statsData = [
  { value: '99.9%', label: 'Uptime' },
  { value: '100k+', label: 'Records/Day' },
  { value: 'Real-time', label: 'Data Sync' },
  { value: '-90%', label: 'Data Errors' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'Data pipeline pain points we solve',
  lead: 'Stop spending hours on manual data transfers and error-prone CSV imports. Automate your data pipelines for reliability.',
  cards: [
    {
      title: 'Manual Data Transfers',
      items: [
        'CSV exports and imports daily',
        'Manual database updates',
        'Copy-paste data between systems',
        'Hours wasted on data movement',
      ],
    },
    {
      title: 'Data Inconsistency',
      items: [
        'Different data in each system',
        'No single source of truth',
        'Sync conflicts and errors',
        'Duplicate records everywhere',
      ],
    },
    {
      title: 'Delayed Data Availability',
      items: [
        'Batch processes run overnight',
        'Data 24 hours behind',
        'Real-time decisions impossible',
        'Business operates on stale data',
      ],
    },
    {
      title: 'Complex Transformations',
      items: [
        'Data formats incompatible',
        'Manual transformation scripts',
        'Validation logic missing',
        'Error handling non-existent',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete data pipeline solutions',
  lead: 'Automate every aspect of your data flow from extraction to loading.',
  services: [
    {
      icon: Workflow,
      title: 'ETL Workflow Design',
      description: 'Build Extract, Transform, Load workflows that move data from source systems to destinations with transformation logic.',
      features: [
        'Custom ETL pipelines',
        'Data extraction automation',
        'Transform logic implementation',
        'Load destination integration',
      ],
    },
    {
      icon: Database,
      title: 'Database Synchronization',
      description: 'Real-time or scheduled sync between databases (PostgreSQL, MySQL, MongoDB, SQL Server) with conflict resolution.',
      features: [
        'Bi-directional database sync',
        'Real-time replication',
        'Conflict resolution logic',
        'Schema mapping',
      ],
    },
    {
      icon: Filter,
      title: 'Data Transformation',
      description: 'Transform data formats, validate fields, enrich records, merge datasets, and apply business logic automatically.',
      features: [
        'Format conversion',
        'Data validation rules',
        'Record enrichment',
        'Business logic application',
      ],
    },
    {
      icon: Cloud,
      title: 'Data Warehouse Integration',
      description: 'Connect operational databases to data warehouses (BigQuery, Snowflake, Redshift) for analytics and reporting.',
      features: [
        'BigQuery integration',
        'Snowflake pipelines',
        'Redshift loading',
        'Incremental updates',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Real-Time Data Pipelines',
      description: 'Build event-driven pipelines that process data in real-time via webhooks, message queues, and streaming APIs.',
      features: [
        'Webhook-triggered pipelines',
        'Message queue integration',
        'Stream processing',
        'Sub-second latency',
      ],
    },
    {
      icon: FileText,
      title: 'API Data Integration',
      description: 'Pull data from REST APIs, GraphQL endpoints, and webhooks, transform it, and load into your databases or tools.',
      features: [
        'REST API integration',
        'GraphQL queries',
        'Webhook handlers',
        'Rate limit management',
      ],
    },
    {
      icon: GitBranch,
      title: 'Data Quality & Validation',
      description: 'Implement validation rules, data quality checks, duplicate detection, and error handling in your pipelines.',
      features: [
        'Validation rule engine',
        'Quality score calculation',
        'Duplicate detection',
        'Error notification',
      ],
    },
    {
      icon: Zap,
      title: 'Batch Processing',
      description: 'Schedule bulk data processing, nightly batch jobs, and large-scale data migrations with retry logic.',
      features: [
        'Scheduled batch jobs',
        'Bulk processing',
        'Retry mechanisms',
        'Progress tracking',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build data pipelines',
  steps: [
    {
      number: '01',
      title: 'Data Flow Analysis',
      description:
        'We map your current data flow, identify bottlenecks, and design optimal pipeline architecture for your needs.',
    },
    {
      number: '02',
      title: 'Pipeline Design',
      description:
        'We design N8n workflows with extraction logic, transformation rules, validation, error handling, and destination loading.',
    },
    {
      number: '03',
      title: 'Build & Test',
      description:
        'We build pipelines in staging, test with real data volumes, optimize performance, and validate data accuracy.',
    },
    {
      number: '04',
      title: 'Deploy & Monitor',
      description:
        'We deploy to production, set up monitoring alerts, and provide dashboards showing pipeline health and throughput.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'E-commerce company: 100k records processed daily',
  challenge:
    'An e-commerce company was manually exporting order data from Shopify to CSV, importing it to their database, transforming data formats, and loading into their warehouse nightly. The process took 3 hours and often failed, leaving analytics 48+ hours behind.',
  solution:
    'We built N8n pipelines that sync Shopify orders to PostgreSQL in real-time via webhooks, transform data formats automatically, validate records, and load to BigQuery every hour for analytics. Error handling with Slack alerts ensures reliability.',
  results: [
    {
      metric: 'Processing Volume',
      improvement: '100k/day',
      timeframe: 'Fully automated',
    },
    {
      metric: 'Data Latency',
      improvement: '<5 min',
      timeframe: 'From 24-48 hours',
    },
    {
      metric: 'Manual Work',
      improvement: '0 hours',
      timeframe: 'From 3 hours daily',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'Data platforms we integrate',
  lead: 'We connect N8n with all major databases, warehouses, and data platforms.',
  cards: [
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server', 'Oracle'],
    },
    {
      title: 'Data Warehouses',
      items: ['BigQuery', 'Snowflake', 'Redshift', 'Databricks', 'Azure Synapse'],
    },
    {
      title: 'Cloud Storage',
      items: ['AWS S3', 'Google Cloud Storage', 'Azure Blob', 'Dropbox', 'Box'],
    },
    {
      title: 'Message Queues',
      items: ['RabbitMQ', 'Apache Kafka', 'AWS SQS', 'Google Pub/Sub', 'Redis'],
    },
    {
      title: 'Data Tools',
      items: ['Airtable', 'Google Sheets', 'Excel', 'CSV/JSON', 'Parquet'],
    },
    {
      title: 'ETL Platforms',
      items: ['Fivetran', 'Stitch', 'Segment', 'Airbyte', 'Custom APIs'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'Data pipeline automation packages',
  tiers: [
    {
      name: 'Essential',
      price: '$4,000',
      description: 'For basic data pipelines',
      features: [
        '3-5 data pipelines',
        'Up to 10k records/day',
        'Database sync automation',
        'Basic transformations',
        'Error handling',
        '1 month support',
      ],
    },
    {
      name: 'Professional',
      price: '$8,500',
      description: 'For complex data flows',
      features: [
        '10-15 data pipelines',
        'Up to 100k records/day',
        'Real-time sync',
        'Advanced transformations',
        'Data warehouse integration',
        'Quality validation',
        'Team training',
        '3 months support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale data operations',
      features: [
        'Unlimited pipelines',
        '1M+ records/day',
        'Multi-region deployment',
        'Custom transformation logic',
        'Advanced monitoring',
        'Dedicated data engineer',
        'Priority support',
        '12 months support',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What data teams say',
  testimonials: [
    {
      quote:
        'N8n pipelines process 100k orders daily with zero failures. We went from 24-hour data lag to real-time analytics.',
      author: 'Kevin Zhang',
      role: 'Head of Data Engineering',
      company: 'E-commerce Platform',
    },
    {
      quote:
        'The data warehouse integration saved our analysts 15 hours weekly. Data flows automatically from 12 sources to BigQuery.',
      author: 'Laura Mitchell',
      role: 'VP Analytics',
      company: 'SaaS Company',
    },
    {
      quote:
        'We migrated 5 million records with zero data loss. The N8n pipelines are rock solid and handle edge cases perfectly.',
      author: 'Alex Johnson',
      role: 'CTO',
      company: 'FinTech Startup',
    },
  ],
}

const faqData = [
  {
    question: 'What is a data pipeline and why do I need one?',
    answer:
      'A data pipeline is an automated workflow that moves data from source systems to destinations with optional transformation steps in between. You need pipelines when you manually export/import data, maintain spreadsheets, or have data inconsistencies across systems. Automated pipelines eliminate manual work, ensure data accuracy, reduce latency (from hours to minutes), and scale to handle large volumes. Instead of a team member spending hours moving data, pipelines do it automatically 24/7.',
  },
  {
    question: 'What is ETL and how does N8n handle it?',
    answer:
      'ETL stands for Extract, Transform, Load. Extract pulls data from sources (databases, APIs, files). Transform cleans, validates, and reformats data. Load writes data to destinations (databases, warehouses, tools). N8n builds ETL workflows visually with nodes for each step. We extract data via database queries or API calls, transform using JavaScript functions or built-in operations, and load using database insert/update nodes or API writes. All error handling, retries, and monitoring included.',
  },
  {
    question: 'Can N8n handle real-time data pipelines?',
    answer:
      'Yes. N8n excels at real-time pipelines via webhooks, message queues, and database triggers. When an event occurs (new order, form submission, database insert), N8n receives it instantly and processes within seconds. We build event-driven architectures where data moves in real-time instead of batch processing overnight. Typical latency is under 5 seconds from source event to destination arrival.',
  },
  {
    question: 'How does N8n integrate with data warehouses like BigQuery and Snowflake?',
    answer:
      'N8n has native nodes for BigQuery and can connect to Snowflake, Redshift, and other warehouses via SQL or APIs. We build pipelines that extract data from operational databases or APIs, transform it for analytics schema, and load into your warehouse on schedule or real-time. Supports incremental loading (only new/changed records), partitioning, and schema evolution. This replaces expensive ETL tools like Fivetran at a fraction of the cost.',
  },
  {
    question: 'What volume of data can N8n pipelines handle?',
    answer:
      'N8n can handle millions of records daily when properly configured. We have built pipelines processing 100,000+ records per day with sub-second latency. Volume capacity depends on server resources and pipeline optimization. For very high volumes (10M+ records daily), we implement batching, parallel processing, and queue-based architectures. N8n scales horizontally by adding more instances.',
  },
  {
    question: 'How does data validation work in N8n pipelines?',
    answer:
      'We implement validation rules at every pipeline step: checking for required fields, data type validation, range checks, format verification (email, phone, date), duplicate detection, referential integrity checks, and business rule validation. When validation fails, the pipeline can retry, send alerts, log to error tables, or route to manual review queues. Every record is validated before loading to ensure data quality.',
  },
  {
    question: 'Can N8n replace Fivetran or Stitch?',
    answer:
      'Yes, for most use cases. Fivetran and Stitch are expensive SaaS ETL tools ($100-$2,000+/month). N8n is self-hosted with no per-connector fees, making it significantly more cost-effective. N8n offers more flexibility for custom transformations and business logic. Fivetran has more pre-built connectors (150+ vs N8n 400+), but N8n can connect to any API or database via HTTP requests. Most clients save 80-90% on ETL costs switching to N8n.',
  },
  {
    question: 'What happens if a data pipeline fails?',
    answer:
      'N8n pipelines include comprehensive error handling: automatic retries with exponential backoff, error logging to databases or files, Slack/email alerts for critical failures, dead letter queues for problematic records, and checkpoint/restart capability. We design pipelines to be idempotent (safe to retry) and transactional where needed. Most failures are transient (network issues, API rate limits) and resolve automatically via retries.',
  },
  {
    question: 'How long does it take to build data pipelines?',
    answer:
      'Simple pipelines (database sync, API to database) take 1-3 days. Complex ETL with transformations and validation take 5-7 days. Enterprise projects with 10+ pipelines, data warehouses, and custom logic take 3-4 weeks. We deliver incrementally, starting with highest-priority pipelines, so you see value within days. Most clients have their first production pipeline running within a week.',
  },
  {
    question: 'Can N8n handle database migrations?',
    answer:
      'Yes. N8n is excellent for database migrations. We build pipelines that extract data from the old database, transform schema to match the new structure, validate data integrity, and load to the new database. We can migrate incrementally (tables or batches at a time) or as a one-time bulk operation. Supports PostgreSQL, MySQL, MongoDB, SQL Server, and more. We handle edge cases, data type conversions, and foreign key relationships automatically.',
  },
]

const relatedServicesData = [
  {
    title: 'Reporting Automation',
    description: 'Automated dashboards, scheduled reports, and KPI tracking.',
    href: '/services/n8n-automation/reporting-automation',
  },
  {
    title: 'CRM Automation',
    description: 'Sync contacts, deals, and activities across multiple CRMs.',
    href: '/services/n8n-automation/crm-automation',
  },
  {
    title: 'Marketing Automation',
    description: 'Automate lead capture, email sequences, and campaign tracking.',
    href: '/services/n8n-automation/marketing-automation',
  },
  {
    title: 'Sales Automation',
    description: 'Automate lead routing, follow-ups, and pipeline management.',
    href: '/services/n8n-automation/sales-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Build reliable data pipelines today',
  lead: 'Let&apos;s discuss your data flow needs and design N8n pipelines that move data seamlessly and reliably.',
  submitText: 'Automate Your Data Pipeline',
}

export default function DataPipelineAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'N8n Data Pipeline Automation Services',
          description:
            'Expert N8n data pipeline automation services. Build ETL workflows, automate database sync, and data transformation.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/n8n-automation/data-pipeline-automation',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Data pipeline automation FAQ" items={faqData} />
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
