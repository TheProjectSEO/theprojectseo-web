import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQAccordion } from '@/components/faq-accordion'
import { HeroAnimation } from '@/components/hero-animation'
import {
  Database,
  RefreshCw,
  Zap,
  ShieldCheck,
  BarChart3,
  Cloud,
} from 'lucide-react'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Engineering Services | ETL Pipelines & Data Warehousing | The Project SEO',
  description:
    'Professional data engineering services. Build ETL pipelines, data warehouses, and real-time data processing. 100+ pipelines built with Airflow, dbt, Snowflake, and more.',
  alternates: {
    canonical: 'https://theprojectseo.com/services/data-engineering',
  },
  openGraph: {
    title: 'Data Engineering Services | ETL Pipelines & Data Warehousing',
    description:
      'Professional data engineering services. Build ETL pipelines, data warehouses, and real-time data processing. 100+ pipelines built.',
    url: 'https://theprojectseo.com/services/data-engineering',
    siteName: 'The Project SEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Engineering Services | ETL Pipelines & Data Warehousing',
    description:
      'Professional data engineering services. Build ETL pipelines, data warehouses, and real-time data processing.',
  },
}

export default function DataEngineeringPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Data Engineering Services',
            description:
              'Professional data engineering services including ETL pipeline development, data warehouse architecture, real-time data processing, and data infrastructure optimization.',
            provider: {
              '@type': 'Organization',
              name: 'The Project SEO',
              url: 'https://theprojectseo.com',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Data Engineering Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'ETL Pipeline Development',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Data Warehouse Architecture',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Real-Time Data Processing',
                  },
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ink py-20 sm:py-32">
        <HeroAnimation />
        <Container className="relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <Subheading dark>Data Engineering Services</Subheading>
            <Heading as="h1" dark className="mt-2">
              Build Reliable Data Infrastructure at Scale
            </Heading>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ash">
              Professional data engineering services that transform scattered data into reliable, scalable infrastructure. ETL pipelines, data warehouses, and real-time processing built for growth.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Start Your Data Project</Button>
              <Button href="#pricing" variant="outline">View Pricing</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">100+</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Pipelines Built
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">10M+</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Records Per Day
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">99.9%</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Pipeline Reliability
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">60%</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Cost Reduction
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Expert Bio */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="shrink-0">
                <div className="size-32 rounded-none border border-border-strong bg-paper" />
              </div>
              <div>
                <Subheading>Your Data Engineering Lead</Subheading>
                <Heading as="h2" className="mt-2">
                  Aditya Aman
                </Heading>
                <p className="mt-4 text-lg text-slate">
                  Data Engineering Lead with 10+ years experience building scalable data infrastructure. Specialized in ETL pipelines, data warehouses, and real-time processing systems. Built 100+ production pipelines processing millions of records daily.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-none border border-border-strong bg-paper px-3 py-1 font-mono text-xs">
                    Airflow Expert
                  </span>
                  <span className="rounded-none border border-border-strong bg-paper px-3 py-1 font-mono text-xs">
                    dbt Certified
                  </span>
                  <span className="rounded-none border border-border-strong bg-paper px-3 py-1 font-mono text-xs">
                    100+ Pipelines
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem Section */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>The Challenge</Subheading>
            <Heading as="h2" className="mt-2">
              Data Chaos Prevents Growth
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-px bg-border-strong md:grid-cols-3">
            <div className="bg-cream p-8">
              <h3 className="font-heading text-xl font-semibold text-ink">
                Scattered Data Sources
              </h3>
              <p className="mt-4 text-slate">
                Data lives in databases, APIs, spreadsheets, and SaaS tools. Without unified infrastructure, analysis is impossible and decisions are based on incomplete information.
              </p>
            </div>
            <div className="bg-cream p-8">
              <h3 className="font-heading text-xl font-semibold text-ink">
                Manual Data Processes
              </h3>
              <p className="mt-4 text-slate">
                Teams waste hours on manual exports, transformations, and data cleanup. Errors creep in, data becomes stale, and analysts can&apos;t focus on insights.
              </p>
            </div>
            <div className="bg-cream p-8">
              <h3 className="font-heading text-xl font-semibold text-ink">
                Scale & Reliability Issues
              </h3>
              <p className="mt-4 text-slate">
                As data volume grows, brittle processes break. Production pipelines fail, data becomes inconsistent, and trust in analytics erodes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Solution Overview */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Our Solution</Subheading>
            <Heading as="h2" className="mt-2">
              Production-Grade Data Infrastructure
            </Heading>
            <p className="mt-6 text-lg text-slate">
              We build reliable, scalable data infrastructure that automatically consolidates, transforms, and delivers your data where you need it.
            </p>
          </div>
        </Container>
      </section>

      {/* Core Features */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Features</Subheading>
            <Heading as="h2" className="mt-2">
              Enterprise-Grade Data Engineering
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <RefreshCw className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                ETL Pipelines
              </h3>
              <p className="mt-4 text-slate">
                Automated Extract, Transform, Load pipelines that consolidate data from multiple sources, apply business logic, and deliver clean data on schedule.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <Database className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Data Warehousing
              </h3>
              <p className="mt-4 text-slate">
                Modern data warehouse architecture using Snowflake, BigQuery, or PostgreSQL. Optimized schemas, partitioning, and query performance.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <Zap className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Real-Time Processing
              </h3>
              <p className="mt-4 text-slate">
                Stream processing for real-time analytics and operational data. Kafka, Spark, and custom solutions for sub-second data latency.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <Cloud className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Cloud Architecture
              </h3>
              <p className="mt-4 text-slate">
                Cloud-native data infrastructure on AWS, GCP, or Azure. Auto-scaling, cost optimization, and multi-region deployment capabilities.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <ShieldCheck className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Data Quality & Monitoring
              </h3>
              <p className="mt-4 text-slate">
                Automated data quality checks, anomaly detection, and pipeline monitoring. Alerts on failures, data drift, or quality issues.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <BarChart3 className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Analytics-Ready Data
              </h3>
              <p className="mt-4 text-slate">
                Transform raw data into analytics-ready tables optimized for BI tools, machine learning, and reporting. Star schema modeling and denormalization.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Offered */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Our Services</Subheading>
            <Heading as="h2" className="mt-2">
              End-to-End Data Engineering Solutions
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                Data Pipeline Development
              </h3>
              <p className="mt-4 text-slate">
                Build custom ETL/ELT pipelines using Apache Airflow, dbt, Fivetran, or custom Python solutions. Scheduled batch processing or real-time streaming.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">API integration & data extraction</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Data transformation & enrichment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Automated scheduling & orchestration</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Error handling & retry logic</span>
                </li>
              </ul>
            </div>

            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                Data Warehouse Architecture
              </h3>
              <p className="mt-4 text-slate">
                Design and implement modern data warehouse solutions. Schema design, performance optimization, and cost management for Snowflake, BigQuery, or PostgreSQL.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Star/snowflake schema design</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Data modeling best practices</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Query optimization & indexing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Cost optimization strategies</span>
                </li>
              </ul>
            </div>

            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                Real-Time Data Processing
              </h3>
              <p className="mt-4 text-slate">
                Build streaming data pipelines for real-time analytics, operational dashboards, and event-driven architectures. Kafka, Spark, and custom solutions.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Kafka streaming pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Spark processing jobs</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Event-driven architectures</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Sub-second data latency</span>
                </li>
              </ul>
            </div>

            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                Data Quality & Governance
              </h3>
              <p className="mt-4 text-slate">
                Implement data quality frameworks, monitoring, and governance. Ensure data accuracy, completeness, and compliance with automated validation.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Data quality validation rules</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Anomaly detection systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Data lineage tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Compliance & audit trails</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Technology Stack */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Technology Stack</Subheading>
            <Heading as="h2" className="mt-2">
              Modern Data Engineering Tools
            </Heading>
            <p className="mt-6 text-lg text-slate">
              We use industry-leading tools and frameworks proven to handle production workloads at scale.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Orchestration</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Apache Airflow</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Dagster</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Prefect</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Temporal</span>
                </div>
              </div>
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Transformation</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">dbt</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Python</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Spark</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Pandas</span>
                </div>
              </div>
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Data Warehouses</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Snowflake</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">BigQuery</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Redshift</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">PostgreSQL</span>
                </div>
              </div>
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Integration</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Fivetran</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Airbyte</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Stitch</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Custom APIs</span>
                </div>
              </div>
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Streaming</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Apache Kafka</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Spark Streaming</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Flink</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Kinesis</span>
                </div>
              </div>
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Cloud Platforms</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">AWS</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">GCP</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Azure</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we build data infrastructure."
        steps={[
          { number: '01', title: 'Discovery & Architecture', description: 'We audit your existing data sources, identify bottlenecks, and design a scalable architecture using modern tools like Airflow, dbt, and Snowflake.' },
          { number: '02', title: 'Pipeline Development', description: 'Build robust ETL/ELT pipelines with automated testing, monitoring, and error handling. Every pipeline is version-controlled and documented.' },
          { number: '03', title: 'Integration & Testing', description: 'Connect all data sources, validate data quality with automated checks, and run end-to-end integration tests before going live.' },
          { number: '04', title: 'Deployment & Monitoring', description: 'Deploy to production with CI/CD, set up real-time monitoring dashboards, and establish alerting for pipeline failures or data anomalies.' },
        ]}
        visual={<ServiceProcessVisual type="implementation" />}
        visualBg="ink"
      />

      {/* Case Study - Dark Section */}
      <section className="bg-ink py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading dark>Case Study</Subheading>
            <Heading as="h2" dark className="mt-2">
              Scaling E-Commerce Data Infrastructure
            </Heading>
          </div>
          <div className="mx-auto mt-16 max-w-4xl rounded-none border border-border-strong bg-stone p-8 md:p-12">
            <div className="mb-8 inline-flex rounded-none border border-border-strong bg-slate px-4 py-2">
              <span className="font-mono text-xs uppercase tracking-wider text-ash">
                E-Commerce • Data Engineering
              </span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-paper md:text-3xl">
              Processing 5M Records Daily Across 10 Data Sources
            </h3>
            <p className="mt-6 text-lg text-ash">
              A fast-growing e-commerce company was drowning in manual data processes. Their team spent 20+ hours weekly on manual exports, transformations, and report generation. Data was stale, errors were common, and decision-making was slow.
            </p>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="font-heading text-3xl font-bold text-accent">5M</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                  Records Per Day
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-accent">10</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                  Data Sources Integrated
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-accent">95%</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                  Time Savings
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-border-strong pt-8">
              <h4 className="font-heading text-xl font-semibold text-paper">Solution</h4>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Built Airflow pipelines integrating Shopify, Google Analytics, Facebook Ads, email platform, and CRM</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Implemented Snowflake data warehouse with optimized star schema for analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Created dbt transformation layer with data quality checks and automated alerts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Set up monitoring dashboards and Slack alerts for pipeline failures</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Our Process</Subheading>
            <Heading as="h2" className="mt-2">
              From Chaos to Reliable Infrastructure
            </Heading>
          </div>
          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Discovery & Architecture
                  </h3>
                  <p className="mt-2 text-slate">
                    Map all data sources, understand business requirements, and design data architecture. Define schemas, pipelines, and technology stack.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Data Warehouse Setup
                  </h3>
                  <p className="mt-2 text-slate">
                    Set up cloud data warehouse, design optimal schemas, configure security and access control, and establish best practices.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Pipeline Development
                  </h3>
                  <p className="mt-2 text-slate">
                    Build ETL pipelines connecting all data sources. Implement transformations, data quality checks, and error handling. Set up orchestration and scheduling.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  4
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Testing & Validation
                  </h3>
                  <p className="mt-2 text-slate">
                    Comprehensive testing of all pipelines, data quality validation, performance optimization, and historical data backfills.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  5
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Monitoring & Optimization
                  </h3>
                  <p className="mt-2 text-slate">
                    Set up monitoring dashboards, alerting, and documentation. Train your team and provide ongoing support for optimization and new pipeline development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Industry Applications */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Industry Applications</Subheading>
            <Heading as="h2" className="mt-2">
              Data Engineering for Every Industry
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">E-Commerce</h3>
              <p className="mt-3 text-sm text-slate">
                Consolidate product, customer, and sales data for unified analytics and personalization.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">SaaS</h3>
              <p className="mt-3 text-sm text-slate">
                Integrate product usage, customer data, and billing for comprehensive business intelligence.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Marketing Agencies</h3>
              <p className="mt-3 text-sm text-slate">
                Automate client reporting by consolidating data from advertising platforms, analytics, and CRMs.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Finance</h3>
              <p className="mt-3 text-sm text-slate">
                Build compliant data pipelines with audit trails, encryption, and real-time risk monitoring.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Healthcare</h3>
              <p className="mt-3 text-sm text-slate">
                HIPAA-compliant pipelines for patient data, claims processing, and operational analytics.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Logistics</h3>
              <p className="mt-3 text-sm text-slate">
                Real-time shipment tracking, route optimization, and inventory management pipelines.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Pricing</Subheading>
            <Heading as="h2" className="mt-2">
              Transparent Project-Based Pricing
            </Heading>
            <p className="mt-6 text-lg text-slate">
              Fixed-price projects with no surprises. Includes architecture, development, testing, and training.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Starter Pipeline */}
            <div className="flex flex-col rounded-none border border-border-strong bg-paper p-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-ink">Starter Pipeline</h3>
                <p className="mt-2 text-slate">Basic ETL with 2-3 data sources</p>
                <div className="mt-6">
                  <span className="font-heading text-5xl font-bold text-ink">$12K</span>
                  <span className="text-slate"> project</span>
                </div>
              </div>
              <ul className="my-8 grow space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">2-3 data source integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Basic data warehouse setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Automated ETL pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Data quality checks</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">30 days post-launch support</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline">
                Start Project
              </Button>
            </div>

            {/* Advanced Infrastructure */}
            <div className="flex flex-col rounded-none border-2 border-accent bg-paper p-8">
              <div className="mb-4 inline-flex w-fit rounded-none bg-accent px-3 py-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-paper">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-ink">Advanced Infrastructure</h3>
                <p className="mt-2 text-slate">Complete data platform with 5+ sources</p>
                <div className="mt-6">
                  <span className="font-heading text-5xl font-bold text-ink">$28K</span>
                  <span className="text-slate"> project</span>
                </div>
              </div>
              <ul className="my-8 grow space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">5+ data source integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Full data warehouse architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">dbt transformation layer</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Monitoring & alerting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Data quality framework</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">90 days post-launch support</span>
                </li>
              </ul>
              <Button href="/contact">Start Project</Button>
            </div>

            {/* Enterprise */}
            <div className="flex flex-col rounded-none border border-border-strong bg-paper p-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-ink">Enterprise</h3>
                <p className="mt-2 text-slate">Custom platform with real-time processing</p>
                <div className="mt-6">
                  <span className="font-heading text-5xl font-bold text-ink">$60K+</span>
                  <span className="text-slate"> custom</span>
                </div>
              </div>
              <ul className="my-8 grow space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Unlimited data sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Real-time streaming pipelines</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Advanced data modeling</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Multi-region deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Enterprise security & compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">6 months support & training</span>
                </li>
              </ul>
              <Button href="/contact" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>FAQ</Subheading>
            <Heading as="h2" className="mt-2">
              Data Engineering Questions
            </Heading>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <FAQAccordion
              items={[
                {
                  question: 'What is the difference between ETL and ELT?',
                  answer:
                    'ETL (Extract, Transform, Load) transforms data before loading into the warehouse. ELT (Extract, Load, Transform) loads raw data first, then transforms it in the warehouse. ELT is more common with modern cloud warehouses like Snowflake and BigQuery because they have powerful processing capabilities. We typically recommend ELT with tools like dbt for most modern data stacks, but ETL can be necessary when dealing with legacy systems or specific data quality requirements.',
                },
                {
                  question: 'How long does it take to build a data pipeline?',
                  answer:
                    'Timeline depends on complexity. A basic pipeline with 2-3 data sources takes 3-4 weeks. More complex infrastructure with 5+ sources, transformation logic, and data quality frameworks takes 6-8 weeks. Enterprise solutions with real-time processing and multiple environments take 10-12 weeks. We provide detailed timelines after the discovery phase.',
                },
                {
                  question: 'Which data warehouse should I use?',
                  answer:
                    'Snowflake, BigQuery, and Redshift are all excellent choices. Snowflake offers the best balance of performance, features, and ease of use. BigQuery is ideal if you\'re already in the Google Cloud ecosystem and need tight GCP integration. Redshift makes sense if you\'re heavily invested in AWS. For smaller projects or tight budgets, PostgreSQL can work well. We help you evaluate based on your specific requirements, existing infrastructure, and budget.',
                },
                {
                  question: 'What happens if a data pipeline fails?',
                  answer:
                    'We implement comprehensive error handling, monitoring, and alerting in all pipelines. If a pipeline fails, you receive immediate notifications via Slack, email, or PagerDuty. Pipelines include automatic retry logic for transient failures. We maintain detailed logs and monitoring dashboards showing pipeline health. Most issues can be diagnosed and resolved quickly, and we provide support to get pipelines back online.',
                },
                {
                  question: 'Can you migrate our existing data infrastructure?',
                  answer:
                    'Yes. We specialize in migrating from legacy systems, on-premise databases, or outdated cloud infrastructure to modern data warehouses and pipelines. Migration projects include data validation to ensure no data loss, parallel running of old and new systems during transition, and comprehensive testing. We minimize disruption and typically complete migrations in 4-8 weeks depending on data volume and complexity.',
                },
                {
                  question: 'Do you provide ongoing support after launch?',
                  answer:
                    'Yes. All projects include post-launch support (30-90 days depending on package). This covers bug fixes, pipeline optimization, and training. After the initial support period, we offer monthly maintenance packages that include monitoring, updates, new pipeline development, and ongoing optimization. Many clients retain us for continued data engineering work as their needs evolve.',
                },
              ]}
            />
          </div>
        </Container>
      </section>

      {/* Related Services */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Related Services</Subheading>
            <Heading as="h2" className="mt-2">
              Complete Data Solutions
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            <Link
              href="/services/data-visualization"
              className="group rounded-none border border-border-strong bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent">
                Data Visualization
              </h3>
              <p className="mt-4 text-slate">
                Build custom dashboards to visualize your clean data.
              </p>
            </Link>
            <Link
              href="/services/seo-automation"
              className="group rounded-none border border-border-strong bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent">
                SEO Automation
              </h3>
              <p className="mt-4 text-slate">
                Automate SEO data collection and processing pipelines.
              </p>
            </Link>
            <Link
              href="/services/enterprise-seo"
              className="group rounded-none border border-border-strong bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent">
                Enterprise SEO
              </h3>
              <p className="mt-4 text-slate">
                Data engineering for SEO at Fortune 500 scale.
              </p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-ink py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Heading as="h2" dark>
              Ready to Build Reliable Data Infrastructure?
            </Heading>
            <p className="mt-6 text-lg text-ash">
              Let&apos;s discuss your data challenges and design a scalable solution.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Start Your Data Project</Button>
              <Button href="/company" variant="outline">
                About Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
