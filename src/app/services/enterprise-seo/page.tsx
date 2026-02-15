import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
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
  TextContentSection,
} from '@/components/service-page-sections'
import { AIAgentsShowcase } from '@/components/ai-agents-showcase'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  Globe,
  Server,
  BarChart3,
  GitBranch,
  FileCode,
  Users,
  Layers,
  Shield,
  Workflow,
  Database,
} from 'lucide-react'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'Enterprise SEO Services | Large-Scale SEO Strategy & Management | TheProjectSEO',
  description:
    'Enterprise SEO services for large organizations. Crawl budget optimization, multi-domain SEO, platform migration, international SEO, and custom reporting dashboards. Proven at scale.',
  openGraph: {
    title: 'Enterprise SEO Services | Large-Scale SEO at Scale',
    description:
      'Enterprise SEO services for large organizations managing complex websites, multiple brands, and international markets. Custom solutions built for scale.',
    url: 'https://theprojectseo.com/services/enterprise-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise SEO Services | Large-Scale SEO at Scale',
    description:
      'Enterprise SEO services for large organizations managing complex websites, multiple brands, and international markets.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/enterprise-seo',
  },
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Enterprise SEO Services',
  title: 'Large-scale SEO that drives',
  accentWord: 'enterprise growth',
  titleAfterAccent: '',
  description:
    'Enterprise SEO is the practice of optimizing complex websites with thousands to millions of pages across multiple domains, brands, and international markets. TheProjectSEO delivers enterprise-grade crawl budget optimization, SEO governance frameworks, platform migration management, and custom executive reporting that translates organic search into measurable revenue.',
  ctaPrimaryText: 'Schedule Enterprise Consultation',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Enterprise Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '500K+', label: 'Pages optimized at scale' },
  { value: '$10M+', label: 'SEO budgets managed' },
  { value: '200%', label: 'Average organic growth' },
  { value: '50+', label: 'Enterprise clients served' },
]

const challengesData = {
  subheading: 'Enterprise vs. Traditional SEO',
  heading: 'Why enterprise SEO requires a fundamentally different approach',
  lead: 'Traditional SEO focuses on optimizing individual pages. Enterprise SEO manages entire ecosystems of domains, teams, and technologies. The challenges are not just bigger -- they are structurally different. Without specialized enterprise SEO expertise, large organizations waste crawl budget, lose traffic during migrations, and lack the governance frameworks needed to execute at scale.',
  cards: [
    {
      title: 'Scale & Complexity',
      items: [
        'Managing millions of pages across multiple brands, regions, and languages requires specialized crawl budget optimization and workflow management that standard SEO cannot provide.',
      ],
    },
    {
      title: 'Cross-Team Collaboration',
      items: [
        'Enterprise SEO demands coordination between marketing, engineering, product, and legal teams. Without a governance framework and clear workflows, SEO initiatives stall or conflict.',
      ],
    },
    {
      title: 'Platform Migration Risk',
      items: [
        'Replatforming a large website without a rigorous technical migration plan risks catastrophic traffic loss. Enterprise migrations require meticulous URL mapping, redirect chains, and post-launch monitoring.',
      ],
    },
    {
      title: 'Reporting for Stakeholders',
      items: [
        'C-suite executives and board members need executive-level SEO reporting dashboards that tie organic search performance directly to revenue attribution and business KPIs.',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Enterprise SEO Services',
  heading: 'Comprehensive solutions built for organizational scale',
  lead: 'Our enterprise SEO services address every dimension of large-scale search optimization, from technical infrastructure and crawl budget management to content strategy at scale, digital PR, and international SEO expansion. Each service integrates with your existing engineering workflows and organizational structure.',
  services: [
    {
      icon: Server,
      title: 'Crawl Budget Optimization',
      description:
        'Maximize search engine crawl resources through log file analysis and strategic optimization.',
      features: ['Server log analysis', 'Robots.txt optimization', 'XML sitemap strategy', 'Crawl prioritization'],
    },
    {
      icon: Globe,
      title: 'Multi-Domain & International SEO',
      description:
        'Manage SEO across multiple domains and international markets without cannibalization.',
      features: ['Hreflang implementation', 'Multi-language content', 'Unified reporting', 'Cross-domain strategy'],
    },
    {
      icon: GitBranch,
      title: 'Platform Migration SEO',
      description:
        'De-risk website migrations with comprehensive audits, URL mapping, and post-launch monitoring.',
      features: ['Pre-migration audit', 'URL mapping strategy', 'Redirect optimization', 'Post-launch monitoring'],
    },
    {
      icon: FileCode,
      title: 'JavaScript SEO & Edge Optimization',
      description:
        'Ensure JavaScript-rendered content is fully crawlable with SSR, dynamic rendering, and edge optimization.',
      features: ['JavaScript rendering audit', 'SSR/SSG implementation', 'CDN edge SEO', 'Core Web Vitals optimization'],
    },
    {
      icon: BarChart3,
      title: 'Enterprise SEO Reporting & Dashboards',
      description:
        'Custom reporting dashboards with real-time visibility and revenue attribution across all properties.',
      features: ['Custom dashboards', 'Revenue attribution', 'Real-time monitoring', 'Executive reporting'],
    },
    {
      icon: Users,
      title: 'SEO Governance & Workflow Management',
      description:
        'Establish governance frameworks defining roles, workflows, and approval processes across teams.',
      features: ['Governance framework', 'Cross-team workflows', 'Content policies', 'Sprint integration'],
    },
  ],
}

const contentStrategyData = {
  subheading: 'Content & Link Building',
  heading: 'Content strategy and link building at enterprise scale',
  paragraphs: [
    'Enterprise content strategy at scale requires editorial workflows that coordinate dozens of writers, subject matter experts, and stakeholders across multiple brands and regions. Our content operations framework includes content governance policies, quality assurance processes, and performance tracking that ensures every piece of content serves both SEO and business objectives.',
    'Link building at enterprise scale goes beyond individual outreach campaigns. We execute digital PR programs that generate coverage in industry publications, develop original research and data studies that attract natural backlinks from authoritative sources, and build systematic link acquisition processes that scale across your entire domain portfolio. Our enterprise clients typically earn 50-200+ high-authority backlinks per month through a combination of digital PR, thought leadership, and strategic content partnerships.',
    'For organizations requiring GDPR compliance and accessibility standards in their SEO strategy, we integrate privacy-by-design principles into content creation, structured data deployment, and international targeting. Our accessibility SEO practices ensure that search optimization improvements also enhance the experience for users relying on assistive technologies, meeting WCAG 2.1 AA requirements alongside search engine best practices.',
  ],
}

const processData = {
  subheading: 'Our Enterprise SEO Process',
  heading: 'A proven methodology for large-scale SEO success',
  steps: [
    {
      number: '01',
      title: 'Discovery & Audit',
      description:
        'Comprehensive enterprise SEO audit that goes far beyond standard site crawls. Using tools like Botify and Lumar, we analyze crawl budget allocation, log file data, JavaScript rendering issues, and technical infrastructure. We map your entire domain portfolio, identify cross-domain cannibalization, and benchmark against enterprise competitors.',
    },
    {
      number: '02',
      title: 'Strategy & Governance',
      description:
        'Establish SEO governance framework defining roles across engineering, content, product, and marketing teams. Our strategy includes crawl budget optimization roadmaps, international SEO expansion plans, content strategy at scale, and platform migration timelines. Every initiative is prioritized by expected revenue impact.',
    },
    {
      number: '03',
      title: 'Implementation at Scale',
      description:
        'Work alongside your engineering organization to implement technical SEO improvements at scale including hreflang deployment, JavaScript SEO fixes, edge SEO configurations via CDN, and structured data deployment. Develop enterprise content strategies across multiple brands, regions, and languages with editorial workflow management and scalable link building through digital PR campaigns earning coverage in industry publications.',
    },
    {
      number: '04',
      title: 'Monitoring & Optimization',
      description:
        'Continuous monitoring through real-time dashboards tracking rankings, crawl health, Core Web Vitals, and revenue attribution across all domains. We provide executive-level SEO reporting for C-suite stakeholders and detailed operational reports for implementation teams, with automated alerting for critical changes and ongoing optimization based on performance data.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Enterprise SEO Case Study',
  heading: 'Global E-commerce: 200% Organic Growth Across 50 International Sites',
  challenge:
    'A Fortune 500 retailer with 50 international websites across 30 countries was managing each site independently with no unified SEO strategy. Crawl budget waste exceeded 60%, hreflang implementation had critical errors affecting 2M+ pages, and there was no centralized reporting to measure organic performance across the portfolio.',
  solution:
    'We implemented a centralized SEO governance framework with standardized technical requirements across all 50 sites. Our team deployed automated hreflang validation, optimized crawl budget allocation using log file analysis (reducing crawl waste from 60% to under 15%), and built custom executive dashboards integrating data from all regional Google Search Console properties. We also migrated 12 sites from legacy platforms to a modern headless CMS without traffic loss.',
  results: [
    { metric: 'Organic Traffic Growth', improvement: '+200%', timeframe: 'Within 18 months' },
    { metric: 'Revenue Attribution', improvement: '$50M annually', timeframe: 'Current run rate' },
    { metric: 'Sites Managed', improvement: '50 sites', timeframe: 'Across 30 countries' },
    { metric: 'Crawl Waste Reduction', improvement: '75% improvement', timeframe: 'From 60% to 15%' },
  ],
}

const toolsData = {
  subheading: 'Enterprise SEO Tools & Platforms',
  heading: 'The technology stack behind large-scale SEO',
  paragraphs: [
    'Enterprise SEO requires specialized platforms that standard tools cannot replicate. We leverage enterprise SEO platforms and technologies, each selected for specific capabilities that address the unique challenges of optimizing websites at scale:',
    '**BrightEdge** — Enterprise SEO platform for content performance, keyword tracking, and competitive intelligence across large-scale websites with millions of pages.',
    '**Conductor** — Organic marketing platform providing real-time SEO insights, content recommendations, and workflow automation for enterprise marketing teams.',
    '**seoClarity** — Enterprise SEO analytics platform with deep crawl capabilities, rank tracking across international markets, and AI-driven content optimization.',
    '**Botify** — Technical SEO platform specializing in log file analysis, crawl budget optimization, and JavaScript rendering analysis for enterprise websites.',
    '**Lumar (DeepCrawl)** — Website intelligence platform for large-scale technical SEO auditing, site architecture analysis, and automated monitoring across millions of URLs.',
    '**Screaming Frog** — Technical SEO crawling tool used for log file analysis, redirect chain auditing, structured data validation, and crawl budget assessment.',
    '**Semrush Enterprise** — All-in-one SEO platform for keyword research, competitive analysis, content gap identification, and backlink monitoring at enterprise scale.',
    '**Ahrefs Enterprise** — Comprehensive SEO toolset for backlink analysis, keyword research, content exploration, and rank tracking across multi-domain portfolios.',
    '**Cloudflare / Akamai** — CDN platforms for edge SEO implementation, server-side rendering, A/B testing at the edge, and Core Web Vitals optimization.',
    '**Google Looker Studio** — Business intelligence tool for building custom enterprise SEO reporting dashboards with revenue attribution and cross-platform data integration.',
  ],
}

const comparisonData = {
  subheading: 'How We Compare',
  heading: 'TheProjectSEO vs. typical enterprise SEO providers',
  lead: 'Most agencies that offer enterprise SEO simply apply their standard SEO process to larger sites. True enterprise SEO requires fundamentally different capabilities, tools, and organizational approaches. Here is how TheProjectSEO compares to typical enterprise SEO service providers across the capabilities that matter most.',
  comparisonTable: [
    {
      feature: 'Page Scale',
      theprojectseo: 'Millions of pages across multiple domains',
      typical: 'Hundreds to thousands of pages',
    },
    {
      feature: 'Crawl Budget Strategy',
      theprojectseo: 'Log file analysis + automated optimization',
      typical: 'Basic robots.txt configuration',
    },
    {
      feature: 'International SEO',
      theprojectseo: 'Hreflang deployment, multi-language content ops',
      typical: 'Limited or manual hreflang setup',
    },
    {
      feature: 'Governance Framework',
      theprojectseo: 'Cross-team workflows, sprint integration, CI/CD checks',
      typical: 'Ad-hoc recommendations',
    },
    {
      feature: 'Reporting',
      theprojectseo: 'Custom executive dashboards with revenue attribution',
      typical: 'Standard rank tracking reports',
    },
    {
      feature: 'Platform Migration',
      theprojectseo: 'Full migration management with zero traffic loss guarantee',
      typical: 'Basic redirect mapping',
    },
    {
      feature: 'Tools & Platforms',
      theprojectseo: 'BrightEdge, Botify, Lumar, Conductor, custom integrations',
      typical: 'Standard SEO tools (Semrush, Ahrefs only)',
    },
    {
      feature: 'Edge SEO',
      theprojectseo: 'CDN-level SEO via Cloudflare Workers / Akamai',
      typical: 'Not offered',
    },
  ],
  closing:
    'The difference between enterprise SEO success and failure often comes down to operational capability, not just strategy. Agencies that lack experience managing SEO governance across large engineering organizations, handling crawl budget optimization with log file analysis, or implementing edge SEO via CDN workers will struggle to deliver results for enterprise clients. TheProjectSEO has managed SEO operations for organizations with 50+ international sites, executed platform migrations involving millions of URLs, and built custom reporting infrastructure that integrates with enterprise business intelligence platforms. Our process is built for the organizational complexity that makes enterprise SEO fundamentally different from standard SEO.',
}

const pricingData = {
  subheading: 'Enterprise SEO Pricing',
  heading: 'Transparent pricing for enterprise scale',
  lead: 'Enterprise SEO is custom-quoted based on the number of domains, page count, technical complexity, and international scope. With average CPC values of $12-18 for enterprise SEO keywords, even modest organic ranking improvements deliver significant ROI. Most enterprise clients achieve 5-10x return on SEO investment within the first year through reduced paid acquisition costs and increased organic revenue.',
  tiers: [
    {
      name: 'Foundation',
      price: '$1,800',
      period: '/month',
      description: 'For growing organizations starting enterprise-scale SEO.',
      features: [
        'Comprehensive SEO audit',
        'Monthly strategy sessions',
        'Technical SEO monitoring',
        'Crawl budget optimization',
        'Content optimization',
        'Monthly reporting',
      ],
      ctaText: 'Schedule Consultation',
      ctaHref: '/contact',
    },
    {
      name: 'Growth',
      price: '$3,500',
      period: '/month',
      description: 'For established enterprises with complex multi-domain needs.',
      features: [
        'Everything in Foundation',
        'Weekly strategy sessions',
        'Custom executive dashboards',
        'Multi-domain management',
        'International SEO (hreflang)',
        'Platform migration support',
        'SEO governance framework',
        'Monthly reporting with revenue attribution',
      ],
      featured: true,
      ctaText: 'Schedule Consultation',
      ctaHref: '/contact',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with millions of pages and global operations.',
      features: [
        'Everything in Growth',
        'Unlimited pages and domains',
        'Dedicated enterprise SEO team',
        'Custom platform integrations',
        'Edge SEO implementation',
        'Log file analysis & monitoring',
        'Digital PR at scale',
        'Real-time alerting & monitoring',
        '24/7 support with SLA',
      ],
      ctaText: 'Schedule Consultation',
      ctaHref: '/contact',
    },
  ],
}

const testimonialData = {
  subheading: 'Client Testimonial',
  heading: 'What enterprise clients say',
  testimonials: [
    {
      quote:
        'We hit our KPIs in less than 3 months. Working with Aditya, we moved our key revenue-driving pages to positions #1 and #2, where we were previously ranking at #6 or #7.',
      author: 'James Lim',
      role: 'CEO',
      company: 'Helpling APAC',
    },
  ],
}

const faqData = [
  {
    question: 'What is enterprise SEO and how is it different from regular SEO?',
    answer:
      'Enterprise SEO is the practice of optimizing large-scale websites with thousands to millions of pages, multiple domains, and complex technical infrastructures. Unlike regular SEO which focuses on individual page optimization, enterprise SEO requires crawl budget optimization, cross-team governance frameworks, platform migration expertise, international SEO management, and custom reporting dashboards. Enterprise SEO agencies work with tools like BrightEdge, Botify, and Conductor that are designed for scale, rather than relying solely on standard tools.',
  },
  {
    question: 'How much does enterprise SEO cost?',
    answer:
      'Enterprise SEO services start at $1,800/month for the Foundation plan, $3,500/month for the Growth plan, and custom pricing for large-scale Enterprise engagements depending on the scope, number of domains, page count, and complexity of your technical environment. The average CPC for enterprise SEO keywords is $12-18, meaning even modest organic traffic gains deliver substantial ROI. Most enterprise clients see 5-10x return on their SEO investment within the first 12 months through reduced paid acquisition costs and increased organic revenue.',
  },
  {
    question: 'What tools are used for enterprise SEO?',
    answer:
      'Enterprise SEO requires specialized platforms beyond standard SEO tools. We use BrightEdge and Conductor for content performance and workflow automation, Botify and Lumar for large-scale technical crawling and log file analysis, seoClarity for rank tracking across international markets, ContentKing for real-time monitoring, Cloudflare Workers for edge SEO, and Google Looker Studio for custom executive dashboards. The specific tool stack depends on your existing infrastructure and needs.',
  },
  {
    question: 'What is crawl budget optimization and why does it matter?',
    answer:
      'Crawl budget is the number of pages search engines will crawl on your site within a given timeframe. For enterprise sites with millions of pages, search engines cannot crawl everything. Crawl budget optimization ensures your most valuable pages are prioritized through strategic robots.txt directives, XML sitemap optimization, internal linking improvements, and elimination of crawl waste from faceted navigation, parameter URLs, and duplicate content. Without crawl budget optimization, critical pages may go unindexed for weeks or months.',
  },
  {
    question: 'How do you handle SEO for platform migrations?',
    answer:
      'Platform migrations are high-risk events that can devastate organic traffic if mishandled. Our migration process includes comprehensive pre-migration audits, complete URL mapping with redirect strategy, structured data migration, content parity validation, staging environment testing, phased rollout with real-time monitoring, and 90-day post-migration support. We have managed migrations involving millions of URLs with zero net traffic loss by using log file analysis and real-time crawl monitoring throughout the process.',
  },
  {
    question: 'What is an SEO governance framework?',
    answer:
      'An SEO governance framework defines how SEO requirements are integrated into organizational workflows. It establishes roles and responsibilities across engineering, content, product, and marketing teams, creates approval processes for SEO-impacting changes, embeds SEO checks into development sprints and CI/CD pipelines, and provides escalation paths for critical issues. Without governance, enterprise SEO initiatives stall because there is no clear ownership or process for implementation.',
  },
  {
    question: 'How do you manage multi-domain and international SEO?',
    answer:
      'Multi-domain SEO requires careful management to avoid keyword cannibalization and duplicate content across properties. We implement hreflang tags for multi-language and multi-region sites, develop cross-domain canonical strategies, build unified reporting dashboards, and create content strategies that differentiate each domain&apos;s targeting. For international SEO, we handle market-specific keyword research, local link building, and cultural content adaptation across all target markets.',
  },
  {
    question: 'What is JavaScript SEO and why is it important for enterprises?',
    answer:
      'Many enterprise websites use JavaScript frameworks like React, Angular, or Vue.js for their front-end. These frameworks can create rendering challenges that prevent search engines from seeing and indexing content. JavaScript SEO involves auditing how Googlebot renders your pages, implementing server-side rendering or dynamic rendering where needed, optimizing lazy loading behavior, and ensuring critical content is accessible without client-side execution. For enterprises with thousands of JavaScript-rendered pages, this is often a major source of lost organic traffic.',
  },
  {
    question: 'What is edge SEO and how does it help enterprise sites?',
    answer:
      'Edge SEO uses CDN-level technologies like Cloudflare Workers or Akamai EdgeWorkers to implement SEO changes at the network edge, bypassing slow development cycles. This enables rapid deployment of redirects, hreflang tags, schema markup, meta tag modifications, and A/B tests without requiring backend code changes. For enterprises where engineering resources are bottlenecked, edge SEO provides a way to implement critical SEO fixes in hours instead of months.',
  },
  {
    question: 'How do you report enterprise SEO performance to C-suite executives?',
    answer:
      'Executive reporting focuses on business outcomes rather than technical metrics. Our custom dashboards show organic revenue attribution, market share of voice against competitors, ROI calculations for SEO investment, and strategic opportunities with estimated revenue impact. We provide monthly executive summaries and quarterly strategic reviews, alongside real-time dashboards accessible to all stakeholders. Reports integrate data from Google Search Console, analytics platforms, CRM systems, and revenue tools.',
  },
]

const relatedServicesData = {
  subheading: 'Explore Related Services',
  heading: 'Complete enterprise SEO ecosystem',
  services: [
    { title: 'SEO Audit', description: 'Comprehensive enterprise SEO audit', href: '/services/seo-audit' },
    { title: 'Link Building', description: 'Link building at enterprise scale', href: '/services/link-building' },
    { title: 'Local SEO', description: 'Multi-location local SEO management', href: '/services/local-seo' },
    { title: 'SEO Services', description: 'Complete SEO solutions', href: '/services/seo' },
    { title: 'SEO Consulting', description: 'Strategic SEO consulting', href: '/services/seo-consulting' },
  ],
}

const ctaData = {
  subheading: 'Ready to Scale Enterprise SEO?',
  heading: 'Let&apos;s build your enterprise organic growth engine',
  lead: 'Schedule a consultation to discuss your organization&apos;s specific needs. We&apos;ll assess your current SEO maturity, identify high-impact opportunities, and outline a roadmap for enterprise-scale organic growth.',
  submitText: 'Schedule Enterprise Consultation',
  note: 'Free consultation includes preliminary site assessment, competitive benchmarking, and enterprise SEO roadmap.',
}

/* -------------------------------------------------------------------------- */
/*  Page Component                                                             */
/* -------------------------------------------------------------------------- */

export default function EnterpriseSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Enterprise SEO Services',
          description:
            'Enterprise SEO services for large organizations. Crawl budget optimization, multi-domain SEO, platform migration, international SEO, and custom reporting dashboards.',
          url: 'https://theprojectseo.com/services/enterprise-seo',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          keywords:
            'Enterprise SEO, large-scale SEO, crawl budget optimization, multi-domain SEO, platform migration, international SEO, SEO governance, JavaScript SEO, edge SEO',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Enterprise software',
              sameAs: 'https://www.wikidata.org/wiki/Q1572977',
            },
          ],
        }}
      />

      <ServiceHero {...heroData} />

      <StatsBar stats={statsData} />

      <FeatureCardsSection {...challengesData} />

      <ServicesGrid {...servicesData} />

      <TextContentSection {...contentStrategyData} />

      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="strategy" />} visualBg="ink" />

      <AIAgentsShowcase
        subheading="AI at Enterprise Scale"
        heading="AI agents that scale across your entire domain portfolio."
        lead="Managing hundreds of thousands of pages requires AI. Our agents monitor crawl budgets, track competitors, optimize content, and flag issues across every domain in your portfolio — continuously. And the fleet keeps growing."
      />
      <CaseStudyDark {...caseStudyData} />

      <TextContentSection {...toolsData} />

      {/* Comparison Table - Custom Section */}
      <div className="bg-cream py-24">
        <Container>
          <div className="text-center mb-16">
            <Subheading>{comparisonData.subheading}</Subheading>
            <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
              {comparisonData.heading}
            </Heading>
            <p className="mt-6 text-base leading-relaxed text-slate max-w-3xl mx-auto">
              {comparisonData.lead}
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto mb-12">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border-strong">
                  <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-ink">
                    Capability
                  </th>
                  <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-accent">
                    TheProjectSEO
                  </th>
                  <th className="text-left py-4 px-4 font-heading text-sm font-semibold text-ash">
                    Typical Agency
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.comparisonTable.map((row, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-3 px-4 text-sm font-medium text-ink">
                      {row.feature}
                    </td>
                    <td className="py-3 px-4 text-sm text-stone">
                      {row.theprojectseo}
                    </td>
                    <td className="py-3 px-4 text-sm text-ash">{row.typical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="max-w-4xl mx-auto">
            <p className="text-sm leading-relaxed text-slate">{comparisonData.closing}</p>
          </div>
        </Container>
      </div>

      <PricingSection {...pricingData} />

      <TestimonialSection {...testimonialData} />

      <TestimonialQuoteSection
        quote="We hit our KPIs in less than 3 months. Working with Aditya, we moved our key revenue-driving pages to positions #1 and #2, where we were previously ranking at #6 or #7."
        author="James Lim"
        role="CEO"
        company="Helpling APAC"
      />

      <FAQDarkSection title="Enterprise SEO frequently asked questions" items={faqData} />

      <RelatedServicesSection {...relatedServicesData} />

      <CTAFormSection {...ctaData} />

      <Footer />
    </main>
  )
}
