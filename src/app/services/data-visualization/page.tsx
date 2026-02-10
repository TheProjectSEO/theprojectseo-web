import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQAccordion } from '@/components/faq-accordion'
import { HeroAnimation } from '@/components/hero-animation'
import {
  BarChart3,
  TrendingUp,
  Cpu,
  Zap,
  ShieldCheck,
  Clock,
} from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Data Visualization Services | Custom Dashboards & SEO Reporting | The Project SEO',
  description:
    'Custom data visualization and dashboard development. SEO reporting, business intelligence, real-time analytics. 200+ dashboards built with D3.js, Tableau, and more.',
  alternates: {
    canonical: 'https://theprojectseo.com/services/data-visualization',
  },
  openGraph: {
    title: 'Data Visualization Services | Custom Dashboards & SEO Reporting',
    description:
      'Custom data visualization and dashboard development. SEO reporting, business intelligence, real-time analytics. 200+ dashboards built.',
    url: 'https://theprojectseo.com/services/data-visualization',
    siteName: 'The Project SEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Visualization Services | Custom Dashboards & SEO Reporting',
    description:
      'Custom data visualization and dashboard development. SEO reporting, business intelligence, real-time analytics.',
  },
}

export default function DataVisualizationPage() {
  return (
    <main>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Data Visualization Services',
            description:
              'Professional data visualization and custom dashboard development for SEO reporting, business intelligence, and real-time analytics.',
            provider: {
              '@type': 'Organization',
              name: 'The Project SEO',
              url: 'https://theprojectseo.com',
            },
            areaServed: 'Worldwide',
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Data Visualization Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Custom Dashboard Development',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'SEO Reporting Automation',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Business Intelligence Dashboards',
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
          <Navbar />
          <div className="mx-auto max-w-3xl text-center pt-16">
            <Subheading dark>Data Visualization Services</Subheading>
            <Heading as="h1" dark className="mt-2">
              Transform Data Into Actionable Insights
            </Heading>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-ash">
              Custom dashboards and data visualizations that help you understand performance, identify opportunities, and make data-driven decisions. Built for SEO professionals, marketers, and executives.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Start Your Dashboard Project</Button>
              <Button href="#pricing" variant="outline">View Pricing</Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">200+</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Dashboards Built
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">1M+</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Data Points Visualized
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">&lt;2s</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Avg Load Time
              </div>
            </div>
            <div className="text-center">
              <div className="font-heading text-4xl font-bold text-paper">98%</div>
              <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                Client Satisfaction
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
                <Subheading>Your Data Visualization Architect</Subheading>
                <Heading as="h2" className="mt-2">
                  Aditya Aman
                </Heading>
                <p className="mt-4 text-lg text-slate">
                  Data Visualization Architect with 10+ years experience building custom dashboards and reporting systems. Specialized in SEO analytics, business intelligence, and executive reporting. Built 200+ dashboards for companies ranging from startups to Fortune 500.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-none border border-border-strong bg-paper px-3 py-1 font-mono text-xs">
                    D3.js Expert
                  </span>
                  <span className="rounded-none border border-border-strong bg-paper px-3 py-1 font-mono text-xs">
                    BI Specialist
                  </span>
                  <span className="rounded-none border border-border-strong bg-paper px-3 py-1 font-mono text-xs">
                    200+ Dashboards
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
              Data Without Context is Just Numbers
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-px bg-border-strong md:grid-cols-3">
            <div className="bg-cream p-8">
              <h3 className="font-heading text-xl font-semibold text-ink">
                Scattered Data Sources
              </h3>
              <p className="mt-4 text-slate">
                SEO data lives in Google Analytics, Search Console, Ahrefs, Semrush, and dozens of other tools. Switching between platforms wastes time and misses the big picture.
              </p>
            </div>
            <div className="bg-cream p-8">
              <h3 className="font-heading text-xl font-semibold text-ink">
                Generic Dashboards
              </h3>
              <p className="mt-4 text-slate">
                Standard analytics platforms show the same metrics to everyone. You need custom visualizations that answer your specific questions and match your workflow.
              </p>
            </div>
            <div className="bg-cream p-8">
              <h3 className="font-heading text-xl font-semibold text-ink">
                Executive Communication
              </h3>
              <p className="mt-4 text-slate">
                Stakeholders don&apos;t care about technical metrics. They need high-level insights, trends, and ROI presented in executive-friendly formats.
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
              Custom Dashboards That Drive Decisions
            </Heading>
            <p className="mt-6 text-lg text-slate">
              We build custom data visualization solutions that consolidate your data sources, highlight what matters, and help you make better decisions faster.
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
              Enterprise-Grade Visualization Capabilities
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <BarChart3 className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Multi-Source Integration
              </h3>
              <p className="mt-4 text-slate">
                Connect Google Analytics, Search Console, Ahrefs, Semrush, CRM systems, and any data source with an API. See everything in one place.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <TrendingUp className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Custom Visualizations
              </h3>
              <p className="mt-4 text-slate">
                Interactive charts, graphs, heatmaps, and custom visualizations designed specifically for your KPIs and reporting needs.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <Zap className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Real-Time Updates
              </h3>
              <p className="mt-4 text-slate">
                Automatic data refresh from all sources. See current performance without manual exports or updates. Configurable refresh intervals.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <Cpu className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Advanced Analytics
              </h3>
              <p className="mt-4 text-slate">
                Trend analysis, forecasting, anomaly detection, and custom calculations. Transform raw data into actionable insights.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <ShieldCheck className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Role-Based Access
              </h3>
              <p className="mt-4 text-slate">
                Control who sees what data. Create different views for executives, managers, and analysts. Enterprise SSO integration available.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-8">
              <div className="mb-6 inline-flex size-12 items-center justify-center bg-accent-soft">
                <Clock className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink">
                Automated Reporting
              </h3>
              <p className="mt-4 text-slate">
                Schedule automatic email reports with PDF exports. Daily, weekly, or monthly summaries delivered to stakeholders automatically.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Dashboard Types */}
      <section className="bg-cream py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading>Dashboard Types</Subheading>
            <Heading as="h2" className="mt-2">
              Custom Solutions for Every Use Case
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2">
            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                SEO Performance Dashboards
              </h3>
              <p className="mt-4 text-slate">
                Comprehensive SEO dashboards combining organic traffic, rankings, backlinks, technical health, and conversions. Track SEO ROI and identify opportunities.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Organic traffic trends & forecasting</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Keyword ranking visualization</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Technical SEO health monitoring</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">ROI & revenue attribution</span>
                </li>
              </ul>
            </div>

            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                Executive Dashboards
              </h3>
              <p className="mt-4 text-slate">
                High-level dashboards for C-suite stakeholders. Focus on business outcomes, trends, and strategic insights rather than technical metrics.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">KPI summary cards</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Trend visualization & forecasts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Competitive intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Board-ready presentations</span>
                </li>
              </ul>
            </div>

            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                Marketing Analytics
              </h3>
              <p className="mt-4 text-slate">
                Multi-channel marketing dashboards showing paid, organic, social, and email performance. Attribution modeling and channel comparison.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Multi-channel attribution</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Customer journey mapping</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Campaign performance tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Budget optimization insights</span>
                </li>
              </ul>
            </div>

            <div className="rounded-none border border-border-strong bg-paper p-8">
              <h3 className="font-heading text-2xl font-semibold text-ink">
                E-Commerce Dashboards
              </h3>
              <p className="mt-4 text-slate">
                E-commerce analytics combining product performance, customer behavior, inventory, and revenue metrics. Identify best-sellers and optimization opportunities.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Product performance analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Customer lifetime value</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Cart abandonment tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Inventory optimization</span>
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
              Best-in-Class Visualization Tools
            </Heading>
            <p className="mt-6 text-lg text-slate">
              We use the right technology for your specific needs, from custom D3.js visualizations to enterprise BI platforms.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Custom Development</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">D3.js</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Chart.js</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Plotly</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">React</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Next.js</span>
                </div>
              </div>
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Enterprise BI</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Tableau</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Power BI</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Looker</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Metabase</span>
                </div>
              </div>
              <div className="rounded-none border border-border-strong bg-cream p-6">
                <h3 className="font-heading text-lg font-semibold text-ink">Analytics & Data Science</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Python</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">R</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">Pandas</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">NumPy</span>
                  <span className="rounded-none bg-paper px-3 py-1 font-mono text-xs text-slate">SQL</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Case Study - Dark Section */}
      <section className="bg-ink py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Subheading dark>Case Study</Subheading>
            <Heading as="h2" dark className="mt-2">
              Custom Reporting for Multi-Location Business
            </Heading>
          </div>
          <div className="mx-auto mt-16 max-w-4xl rounded-none border border-border-strong bg-stone p-8 md:p-12">
            <div className="mb-8 inline-flex rounded-none border border-border-strong bg-slate px-4 py-2">
              <span className="font-mono text-xs uppercase tracking-wider text-ash">
                Multi-Location • Custom Dashboards
              </span>
            </div>
            <h3 className="font-heading text-2xl font-semibold text-paper md:text-3xl">
              Advanced Analytics Dashboards Driving Business Decisions
            </h3>
            <p className="mt-6 text-lg text-ash">
              A multi-location business needed custom reporting to track performance across 50+ locations, understand customer behavior patterns, and identify optimization opportunities. Standard analytics tools couldn&apos;t handle their complex data requirements.
            </p>
            
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <div>
                <div className="font-heading text-3xl font-bold text-accent">15+</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                  Custom Dashboards
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-accent">50+</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                  Locations Tracked
                </div>
              </div>
              <div>
                <div className="font-heading text-3xl font-bold text-accent">5</div>
                <div className="mt-2 font-mono text-xs uppercase tracking-wider text-ash">
                  Data Sources
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-border-strong pt-8">
              <h4 className="font-heading text-xl font-semibold text-paper">Solution</h4>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Built custom dashboards showing performance by location, region, and time period</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Created interactive visualizations for customer journey analysis and conversion funnels</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Implemented automated reporting with daily updates and anomaly detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0 [&_path]:fill-accent" />
                  <span className="text-ash">Developed executive dashboards with high-level insights and trend forecasting</span>
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
              From Requirements to Insights in 4-6 Weeks
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
                    Discovery & Requirements
                  </h3>
                  <p className="mt-2 text-slate">
                    Understand your business goals, key metrics, data sources, and stakeholder needs. Define dashboard structure, visualizations, and access requirements.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Design & Prototyping
                  </h3>
                  <p className="mt-2 text-slate">
                    Create mockups and interactive prototypes showing dashboard layout, visualizations, and user interactions. Iterate based on feedback before development.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Data Integration
                  </h3>
                  <p className="mt-2 text-slate">
                    Connect all data sources via APIs, build ETL pipelines, and set up automated data refresh. Ensure data quality and consistency across sources.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  4
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Development & Testing
                  </h3>
                  <p className="mt-2 text-slate">
                    Build custom visualizations, implement calculations and analytics, and create automated reporting. Test performance, accuracy, and user experience.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-none border border-border-strong bg-accent font-mono text-lg font-bold text-paper">
                  5
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Launch & Training
                  </h3>
                  <p className="mt-2 text-slate">
                    Deploy to production, train your team on using the dashboards effectively, and provide documentation. Ongoing support and iteration as needed.
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
              Visualization Solutions for Every Industry
            </Heading>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">E-Commerce</h3>
              <p className="mt-3 text-sm text-slate">
                Product analytics, customer segmentation, inventory tracking, and revenue forecasting dashboards.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">SaaS</h3>
              <p className="mt-3 text-sm text-slate">
                User engagement metrics, churn prediction, feature adoption, and subscription analytics.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Healthcare</h3>
              <p className="mt-3 text-sm text-slate">
                Patient outcomes, operational efficiency, resource utilization, and compliance tracking.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Finance</h3>
              <p className="mt-3 text-sm text-slate">
                Portfolio performance, risk analysis, market trends, and regulatory reporting.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Real Estate</h3>
              <p className="mt-3 text-sm text-slate">
                Property performance, market analysis, lead tracking, and sales pipeline visualization.
              </p>
            </div>
            <div className="rounded-none border border-border-strong bg-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-ink">Marketing Agencies</h3>
              <p className="mt-3 text-sm text-slate">
                Client reporting, campaign performance, multi-channel attribution, and ROI tracking.
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
              Fixed-price projects with no surprises. Includes design, development, integration, and training.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 md:grid-cols-3">
            {/* Basic Dashboard */}
            <div className="flex flex-col rounded-none border border-border-strong bg-paper p-8">
              <div>
                <h3 className="font-heading text-2xl font-semibold text-ink">Basic Dashboard</h3>
                <p className="mt-2 text-slate">Single-purpose dashboard with 2-3 data sources</p>
                <div className="mt-6">
                  <span className="font-heading text-5xl font-bold text-ink">$8K</span>
                  <span className="text-slate"> project</span>
                </div>
              </div>
              <ul className="my-8 grow space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">1 custom dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">2-3 data source integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">5-10 custom visualizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Automated data refresh</span>
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

            {/* Advanced Dashboard */}
            <div className="flex flex-col rounded-none border-2 border-accent bg-paper p-8">
              <div className="mb-4 inline-flex w-fit rounded-none bg-accent px-3 py-1">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-paper">
                  Most Popular
                </span>
              </div>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-ink">Advanced Dashboard</h3>
                <p className="mt-2 text-slate">Multi-page dashboard with 5+ data sources</p>
                <div className="mt-6">
                  <span className="font-heading text-5xl font-bold text-ink">$18K</span>
                  <span className="text-slate"> project</span>
                </div>
              </div>
              <ul className="my-8 grow space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Multi-page dashboard system</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">5+ data source integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">20+ custom visualizations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Advanced analytics & calculations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Role-based access control</span>
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
                <p className="mt-2 text-slate">Custom BI platform with unlimited sources</p>
                <div className="mt-6">
                  <span className="font-heading text-5xl font-bold text-ink">$40K+</span>
                  <span className="text-slate"> custom</span>
                </div>
              </div>
              <ul className="my-8 grow space-y-4">
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Complete BI platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Unlimited data sources</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">Real-time data processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">AI-powered insights</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">SSO & enterprise security</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckIcon className="mt-1 shrink-0" />
                  <span className="text-slate">6 months support & maintenance</span>
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
              Data Visualization Questions
            </Heading>
          </div>
          <div className="mx-auto mt-16 max-w-3xl">
            <FAQAccordion
              items={[
                {
                  question: 'What data sources can you integrate?',
                  answer:
                    'We can integrate virtually any data source including Google Analytics, Search Console, Ahrefs, Semrush, Moz, CRM systems (Salesforce, HubSpot), advertising platforms (Google Ads, Facebook Ads), databases (PostgreSQL, MySQL, MongoDB), and any service with an API. If it has an API or exports data, we can connect it.',
                },
                {
                  question: 'How long does it take to build a custom dashboard?',
                  answer:
                    'Timeline depends on complexity. A basic dashboard with 2-3 data sources takes 3-4 weeks. Advanced multi-page dashboards with 5+ sources take 6-8 weeks. Enterprise BI platforms with real-time processing take 10-12 weeks. We provide detailed timelines during the discovery phase.',
                },
                {
                  question: 'Can you work with our existing BI tools like Tableau or Power BI?',
                  answer:
                    'Yes. We can build custom visualizations and dashboards within existing BI platforms, or we can build fully custom solutions using D3.js and React for maximum flexibility. We recommend the approach that best fits your technical infrastructure, team capabilities, and specific requirements.',
                },
                {
                  question: 'Do the dashboards update automatically?',
                  answer:
                    'Yes. We set up automated data refresh from all connected sources. Refresh frequency depends on your needs and data source capabilities - from real-time updates to daily/weekly refreshes. You\'ll never need to manually export or update data.',
                },
                {
                  question: 'What happens after the dashboard is launched?',
                  answer:
                    'All projects include post-launch support (30-90 days depending on package). We provide training for your team, documentation, and are available for questions and minor adjustments. After the support period, we offer ongoing maintenance and iteration packages if you need continued updates or new features.',
                },
                {
                  question: 'Can dashboards be shared with external stakeholders?',
                  answer:
                    'Yes. We can implement role-based access control allowing you to share specific dashboards or views with external stakeholders, clients, or board members. We can also set up automated PDF reports that get emailed on a schedule, perfect for regular stakeholder updates without giving direct access.',
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
              href="/services/data-engineering"
              className="group rounded-none border border-border-strong bg-paper p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-ink group-hover:text-accent">
                Data Engineering
              </h3>
              <p className="mt-4 text-slate">
                Build data pipelines and infrastructure to power your dashboards.
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
                Automate SEO reporting and monitoring with custom integrations.
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
                Custom SEO software and dashboards for Fortune 500 scale.
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
              Ready to See Your Data Clearly?
            </Heading>
            <p className="mt-6 text-lg text-ash">
              Let&apos;s discuss your dashboard requirements and build a custom visualization solution.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button href="/contact">Start Your Dashboard Project</Button>
              <Button href="/company" variant="outline">
                About Our Team
              </Button>
            </div>
          </div>
        </Container>
      </section>
    <Footer />
    </main>
  )
}
