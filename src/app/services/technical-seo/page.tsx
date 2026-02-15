import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Heading, Subheading, Lead } from '@/components/text'
import { Button } from '@/components/button'
import Link from 'next/link'
import { CheckIcon } from '@/components/check-icon'
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
  CTAFormSection,
} from '@/components/service-page-sections'
import { AIAgentsShowcase } from '@/components/ai-agents-showcase'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  Zap,
  Search,
  Code,
  Database,
  Settings,
  Shield,
  Smartphone,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Technical SEO Services | Core Web Vitals, Site Speed & Crawlability Experts | TheProjectSEO',
  description:
    'Expert technical SEO services: Core Web Vitals optimization, INP & site speed improvements, crawl budget management, structured data, log file analysis. 500+ sites optimized.',
  openGraph: {
    title: 'Technical SEO Services | Core Web Vitals & Site Speed Experts',
    description:
      'Expert technical SEO services. Site speed optimization, Core Web Vitals, crawlability, structured data, log file analysis. 500+ sites optimized.',
    url: 'https://theprojectseo.com/services/technical-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Technical SEO Services | Core Web Vitals & Site Speed Experts',
    description:
      'Expert technical SEO services. Site speed optimization, Core Web Vitals, crawlability, structured data. 500+ sites optimized.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/technical-seo',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Technical SEO Services',
  title: 'Fix technical issues holding back your',
  accentWord: 'rankings',
  titleAfterAccent: '',
  description:
    'Technical SEO is the foundation every ranking depends on. We optimize site speed, Core Web Vitals, crawlability, indexation, and structured data so search engines can discover, render, and rank your content without friction.',
  ctaPrimaryText: 'Get Your Technical SEO Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '40%', label: 'Avg Traffic Increase' },
  { value: '2.5s', label: 'Avg Load Time Improvement' },
  { value: '500+', label: 'Sites Optimized' },
  { value: '100%', label: 'CWV Pass Rate Achieved' },
]

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive technical SEO services.',
  lead: 'Technical SEO ensures search engines can efficiently crawl, render, and index every page on your site. Without it, even the best content and strongest backlink profiles underperform.',
  services: [
    {
      icon: Zap,
      title: 'Core Web Vitals Optimization',
      description:
        'Optimize LCP under 2.5s, INP under 200ms, and CLS below 0.1. Critical rendering path optimization, resource prioritization, and layout stability fixes.',
      features: [
        'LCP optimization (Largest Contentful Paint)',
        'INP optimization (Interaction to Next Paint)',
        'CLS fixes (Cumulative Layout Shift)',
        'PageSpeed Insights field data improvements',
      ],
    },
    {
      icon: Zap,
      title: 'Site Speed & Performance',
      description:
        'Comprehensive speed improvements: image optimization, JavaScript code splitting, critical CSS, compression, CDN implementation, and TTFB optimization.',
      features: [
        'WebP/AVIF image formats',
        'Code splitting & tree shaking',
        'Gzip/Brotli compression',
        'Resource hints (preload, prefetch)',
      ],
    },
    {
      icon: Search,
      title: 'Crawlability & Indexation',
      description:
        'Optimize how Googlebot discovers your site: robots.txt, XML sitemaps, internal linking, crawl budget allocation, URL parameters, pagination management.',
      features: [
        'Robots.txt configuration',
        'XML sitemap strategy',
        'Crawl budget optimization',
        '100% index coverage',
      ],
    },
    {
      icon: Code,
      title: 'Structured Data & Schema Markup',
      description:
        'JSON-LD schema for rich results: Product, Article, FAQ, HowTo, BreadcrumbList, Organization, LocalBusiness, Review, Event schemas.',
      features: [
        'Rich results eligibility',
        '20-30% higher CTR',
        'Google AI Overview citations',
        'All major schema types',
      ],
    },
    {
      icon: Code,
      title: 'JavaScript SEO',
      description:
        'Optimize JavaScript-rendered content for React, Next.js, Vue, Angular sites. SSR/SSG implementation, dynamic rendering, hydration optimization.',
      features: [
        'Server-side rendering (SSR)',
        'Static site generation (SSG)',
        'Dynamic rendering strategies',
        'Googlebot rendering validation',
      ],
    },
    {
      icon: Database,
      title: 'URL Structure & Canonicalization',
      description:
        'Clean URL architecture with proper canonical tags. Resolve duplicate content from URL parameters, session IDs, protocol variations, faceted navigation.',
      features: [
        'Canonical tag implementation',
        'Duplicate content resolution',
        'URL parameter handling',
        'Authority consolidation',
      ],
    },
    {
      icon: BarChart3,
      title: 'Log File Analysis',
      description:
        'Analyze server logs to see how Googlebot interacts with your site. Identify crawl waste, orphan pages, indexation patterns, and crawl frequency changes.',
      features: [
        'Screaming Frog Log Analyzer',
        'Crawl behavior insights',
        'Orphan page discovery',
        'Data-driven technical decisions',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Optimization',
      description:
        'Google indexes mobile first. Audit responsive design, mobile rendering performance, viewport configuration, touch targets, font legibility.',
      features: [
        'Mobile Core Web Vitals',
        'Responsive design audit',
        'Touch target sizing',
        'Mobile rendering optimization',
      ],
    },
    {
      icon: Shield,
      title: 'Security & HTTPS',
      description:
        'SSL certificate implementation, HTTPS migration with 301 redirects, HSTS headers, mixed content resolution, security hardening.',
      features: [
        'SSL/TLS configuration',
        'HTTPS migration management',
        'Security headers',
        'Mixed content resolution',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Methodology',
  heading: 'How we diagnose and fix technical SEO issues.',
  steps: [
    {
      number: '01',
      title: 'Discovery & Audit',
      description:
        'Full-site crawl using Screaming Frog and Lumar, supplemented by Google Search Console data and log file analysis. Audit covers crawlability, indexation, Core Web Vitals, site architecture, structured data, HTTPS, mobile rendering, and JavaScript execution. Every finding is scored by estimated traffic impact, implementation effort, and business priority to create a prioritized roadmap with highest ROI focus.',
    },
    {
      number: '02',
      title: 'Implementation & Optimization',
      description:
        'Detailed implementation specifications for your dev team or direct execution. Includes robots.txt, sitemaps, canonicals, redirects, schema markup, speed optimization, and JavaScript rendering solutions. Focused performance sprint targeting LCP, INP, CLS improvements with critical rendering path optimization, resource hints, deferred JavaScript, image format upgrades, critical CSS extraction, and layout stability fixes.',
    },
    {
      number: '03',
      title: 'Validation & Testing',
      description:
        'Post-implementation validation through fresh crawls, Search Console monitoring, PageSpeed Insights field data checks, structured data testing. Staging environment testing prevents production regressions and ensures all changes work correctly before deployment.',
    },
    {
      number: '04',
      title: 'Monitoring & Reporting',
      description:
        'Continuous vigilance with Lighthouse CI monitoring, weekly crawl checks, Core Web Vitals dashboards, Search Console alerting, and comprehensive monthly reporting. Proactive monitoring catches issues before they impact rankings and allows rapid response to algorithm updates or technical regressions.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Enterprise e-commerce: 40% traffic gain from Core Web Vitals overhaul.',
  challenge:
    'An enterprise e-commerce site with 50,000+ product pages was experiencing declining rankings after Core Web Vitals became a ranking signal. LCP measured 4.2 seconds, CLS was 0.4, and INP was severely failing. Average page load time was 5.8 seconds. The development team lacked SEO-specific expertise to prioritize the right optimizations.',
  solution:
    'We implemented next-gen image formats (WebP with AVIF fallbacks), critical CSS extraction, JavaScript code splitting with dynamic imports, CDN with Brotli compression, lazy loading for below-fold resources, and server-side rendering for product pages. Detailed Lighthouse and CrUX field data analysis identified the specific resources causing LCP delays and layout shifts.',
  results: [
    {
      metric: 'Core Web Vitals Pass Rate',
      improvement: '100%',
      timeframe: 'LCP 1.8s, INP <120ms, CLS 0.05',
    },
    {
      metric: 'Organic Traffic',
      improvement: '+40%',
      timeframe: 'Within 8 weeks of field data update',
    },
    {
      metric: 'Page Load Time',
      improvement: '2.1s',
      timeframe: 'From 5.8s average',
    },
    {
      metric: 'Annual Revenue Impact',
      improvement: '+$1.2M',
      timeframe: 'From improved performance',
    },
  ],
}

const toolsData = {
  subheading: 'Tools & Technologies',
  heading: 'The technical SEO stack we rely on.',
  lead: 'We use industry-leading technical SEO tools to audit, diagnose, and monitor every aspect of your site\'s technical health.',
  cards: [
    {
      title: 'Crawling & Auditing',
      items: [
        'Screaming Frog SEO Spider',
        'Lumar (DeepCrawl)',
        'Ahrefs Site Audit',
        'Semrush Site Audit',
        'Botify',
      ],
    },
    {
      title: 'Performance & Core Web Vitals',
      items: [
        'Google PageSpeed Insights',
        'Chrome DevTools',
        'Lighthouse CI',
        'GTmetrix',
        'WebPageTest',
      ],
    },
    {
      title: 'Data Sources',
      items: [
        'Google Search Console',
        'Screaming Frog Log Analyzer',
        'Google Analytics',
        'CrUX (Chrome User Experience Report)',
      ],
    },
    {
      title: 'Implementation',
      items: [
        'Schema.org Validator',
        'Cloudflare / CDN Platforms',
        'Terraform',
        'Google Looker Studio',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Cost & Pricing Guide',
  heading: 'Transparent technical SEO pricing.',
  tiers: [
    {
      name: 'Foundation',
      price: '$1,800',
      period: '/month',
      description: 'For small to mid-size sites (under 5,000 pages).',
      features: [
        'Full technical SEO audit',
        'Core Web Vitals optimization',
        'Site speed improvements',
        'XML sitemap & robots.txt',
        'Schema markup implementation',
        'Monthly crawl monitoring',
        'Monthly technical report',
      ],
    },
    {
      name: 'Growth',
      price: '$3,500',
      period: '/month',
      description: 'For established sites and e-commerce (5K-100K pages).',
      features: [
        'Everything in Foundation',
        'Advanced speed optimization',
        'JavaScript SEO & rendering fixes',
        'Crawl budget optimization',
        'Log file analysis (monthly)',
        'Redirect management',
        'Mobile-first optimization',
        'Weekly monitoring & reporting',
        'Dedicated technical specialist',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large sites with complex architectures.',
      features: [
        'Everything in Growth',
        'Custom technical solutions',
        'Platform migration management',
        'Multi-site technical oversight',
        'DevOps & infrastructure consulting',
        'Lighthouse CI pipeline setup',
        'Priority support & SLA',
        'Quarterly strategy sessions',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What our clients say.',
  testimonials: [
    {
      quote:
        'We successfully migrated our blog from Medium to Goodnotes.com/blog without losing traffic. We also solved tech SEO problems for the Thailand, Japan, Taiwan, and Hong Kong sites, doubling the traffic with minimal efforts.',
      author: 'Elizabeth Ching',
      role: 'Marketing',
      company: 'Goodnotes',
    },
    {
      quote:
        'Working with Aditya in our journey to rank our website has been a great pleasure. Aditya possesses an exceptional skill set and a deep understanding of SEO strategies and techniques. He has an uncanny ability to analyze complex data and identify critical opportunities to improve organic search rankings and drive targeted website traffic. I wholeheartedly recommend Aditya for any SEO-related position or project.',
      author: 'Caleb Hoon',
      role: 'Head of Community and Operations',
      company: 'OFFEO',
    },
    {
      quote:
        'I had the pleasure of working with Aditya. He is a true SEO specialist. He knows how to layout the SEO strategy together with a timeline and a list of tasks to be done.',
      author: 'Eyal Gerber',
      role: 'Founder & CEO',
      company: 'Novodes',
    },
  ],
}

const faqData = [
  {
    question: 'What is technical SEO and why is it important?',
    answer:
      'Technical SEO is the practice of optimizing your website\'s infrastructure so search engines can efficiently crawl, render, index, and rank your pages. It covers site speed, Core Web Vitals, crawlability, indexation, structured data, HTTPS, mobile optimization, and site architecture. Without solid technical SEO, even the best content and backlinks fail to rank because Google simply cannot access or process your pages effectively. Technical SEO is the foundation that makes on-page and off-page SEO possible.',
  },
  {
    question: 'What is INP and how does it differ from FID?',
    answer:
      'INP (Interaction to Next Paint) replaced FID (First Input Delay) as a Core Web Vital in March 2024. While FID only measured the delay of the first user interaction, INP measures the responsiveness of all interactions throughout the entire page lifecycle. The target threshold is under 200 milliseconds. INP is a more comprehensive metric because it captures the full user experience, not just the first click. Sites that passed FID may still fail INP, which is why re-optimization is often needed.',
  },
  {
    question: 'What does a technical SEO audit include?',
    answer:
      'Our technical SEO audit covers: crawlability analysis (robots.txt, XML sitemaps, internal linking, crawl budget), indexation review (index coverage, canonical tags, duplicate content), Core Web Vitals assessment (LCP, INP, CLS with field and lab data), site speed analysis (TTFB, resource loading, compression), mobile-first evaluation, structured data validation, HTTPS and security check, redirect chain analysis, JavaScript rendering audit, log file analysis of Googlebot behavior, and site architecture review. You receive a prioritized report with specific implementation recommendations.',
  },
  {
    question: 'How much do technical SEO services cost?',
    answer:
      'Technical SEO services typically range from $1,000-$5,000 per month for ongoing retainers, with one-time audits ranging from $3,000-$8,000. Our Foundation plan begins at $1,800/month for sites under 5,000 pages, our Growth plan is $3,500/month for mid-size sites, and Enterprise pricing is custom. The investment depends on site size, platform complexity, and the scope of issues. Most clients see positive ROI within 3-4 months as improved technical performance directly impacts rankings and traffic.',
  },
  {
    question: 'How long does technical SEO take to show results?',
    answer:
      'Some fixes show immediate results: resolving indexation blockers can surface previously invisible pages within days of Googlebot\'s next crawl. Core Web Vitals improvements typically impact rankings within 2-6 weeks after Google\'s CrUX field data updates. Complex site architecture changes and migration projects may take 2-3 months for full impact. Technical SEO provides compounding returns because the infrastructure improvements you make today continue benefiting every page on your site indefinitely.',
  },
  {
    question: 'What is crawl budget and why does it matter?',
    answer:
      'Crawl budget is the number of pages Googlebot crawls on your site within a given time period. For sites with thousands or millions of pages, crawl budget is a critical constraint. If Googlebot wastes crawl resources on low-value pages (faceted navigation, URL parameters, pagination, internal search results), it may never reach your most important revenue-generating content. We optimize crawl budget through robots.txt configuration, URL parameter handling, internal linking improvements, and eliminating crawl traps identified through log file analysis.',
  },
  {
    question: 'Do I need technical SEO if my site is on WordPress?',
    answer:
      'Yes. While WordPress handles some technical basics, it introduces its own challenges: plugin bloat that slows page speed, auto-generated taxonomy pages that waste crawl budget, default permalink structures that create duplicate content, insufficient schema markup, and theme-level rendering inefficiencies. WordPress sites frequently fail Core Web Vitals due to excessive plugin JavaScript. Technical SEO for WordPress involves optimizing what the CMS generates, not just configuring settings.',
  },
  {
    question: 'Can you help with JavaScript SEO for React or Next.js sites?',
    answer:
      'JavaScript SEO is one of our specialties. We optimize sites built on React, Next.js, Vue, Angular, Nuxt, and other modern frameworks. Our work includes ensuring Googlebot can render dynamic content, implementing SSR (server-side rendering) or SSG (static site generation) where beneficial, optimizing hydration performance, managing client-side routing for proper crawling, and resolving issues where content is invisible to search engine crawlers because it depends on JavaScript execution.',
  },
  {
    question: 'What is log file analysis and why is it valuable?',
    answer:
      'Log file analysis examines your server\'s access logs to see exactly how Googlebot interacts with your site. Unlike crawl tools that simulate Googlebot, log files show actual crawl behavior: which pages Googlebot visits most frequently, which pages it ignores, how much crawl budget is wasted, and how quickly it discovers new content. This data is invaluable for diagnosing crawl budget issues, identifying orphan pages, and verifying that technical optimizations are working as intended. We use Screaming Frog Log Analyzer and Botify for this analysis.',
  },
  {
    question: 'How do you handle site migrations without losing rankings?',
    answer:
      'Site migrations are high-stakes projects where technical SEO expertise is critical. Our migration process includes: comprehensive pre-migration crawl and URL inventory, 1:1 URL mapping and redirect planning, staging environment validation, structured data migration, canonical tag and sitemap strategy for the new architecture, coordinated launch with real-time monitoring, and post-launch crawl analysis with rapid issue resolution. We have completed hundreds of successful migrations with zero ranking loss. Proper planning and execution is the difference between a migration that gains traffic and one that loses it.',
  },
  {
    question: 'What is structured data and how does it help rankings?',
    answer:
      'Structured data (schema markup) is code in JSON-LD format that helps search engines understand the type and context of your content. It enables rich results in SERPs: star ratings, pricing, FAQ dropdowns, recipe cards, event details, and more. Pages with rich results see 20-30% higher click-through rates. We implement schema types including Product, Article, FAQ, HowTo, BreadcrumbList, Organization, LocalBusiness, Review, Event, and SoftwareApplication. Google uses structured data as a trust signal and for AI Overview citations.',
  },
  {
    question: 'Do I need ongoing technical SEO or just a one-time audit?',
    answer:
      'Both serve a purpose, but ongoing monitoring is strongly recommended. A one-time audit identifies and fixes current issues, but technical SEO is not a set-and-forget discipline. CMS updates break configurations, new content introduces canonical conflicts, code deployments cause speed regressions, and Google\'s requirements evolve. Ongoing technical SEO monitoring catches problems before they impact rankings. Most of our clients start with an audit and transition to a monthly retainer once they see the value of proactive maintenance.',
  },
]

const ctaData = {
  subheading: 'Ready to Fix Technical Issues?',
  heading: 'Get your free technical SEO audit.',
  lead: 'Discover exactly what technical issues are holding back your rankings. Our audit covers Core Web Vitals, crawlability, indexation, site speed, and structured data, with a prioritized roadmap of fixes.',
  submitText: 'Get Your Free Audit',
}

/* -------------------------------------------------------------------------- */
/*  Comparison Table Section                                                 */
/* -------------------------------------------------------------------------- */

function ComparisonTableSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>How We Compare</Subheading>
          <Heading as="h2" className="mt-2">
            Technical SEO vs. on-page SEO vs. off-page SEO
          </Heading>
          <Lead className="mt-6">
            Understanding where each discipline fits helps you invest in the right areas. Technical SEO builds the
            foundation, on-page SEO optimizes content, and off-page SEO builds authority.
          </Lead>
        </div>
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full border-collapse border border-border-strong text-sm">
            <thead>
              <tr className="bg-ink text-paper">
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">Factor</th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">Technical SEO</th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  <Link href="/services/on-page-seo" className="hover:text-accent">
                    On-Page SEO
                  </Link>
                </th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">
                  <Link href="/services/off-page-seo" className="hover:text-accent">
                    Off-Page SEO
                  </Link>
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  factor: 'Primary Focus',
                  technical: 'Site infrastructure, speed, crawlability',
                  onPage: 'Content quality, keywords, meta tags',
                  offPage: 'Backlinks, brand signals, authority',
                },
                {
                  factor: 'Key Metrics',
                  technical: 'Core Web Vitals, crawl stats, index coverage',
                  onPage: 'Rankings, CTR, engagement, conversions',
                  offPage: 'Domain authority, referring domains',
                },
                {
                  factor: 'Time to Impact',
                  technical: '2-6 weeks after implementation',
                  onPage: '4-12 weeks for ranking changes',
                  offPage: '3-6 months for authority growth',
                },
                {
                  factor: 'Best For',
                  technical: 'Large sites, e-commerce, JS frameworks',
                  onPage: 'Content-heavy sites, blogs, SaaS',
                  offPage: 'Competitive industries, new brands',
                },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-paper' : 'bg-cream'}>
                  <td className="border border-border-strong p-4 font-heading font-semibold text-ink">{row.factor}</td>
                  <td className="border border-border-strong p-4 text-slate">{row.technical}</td>
                  <td className="border border-border-strong p-4 text-slate">{row.onPage}</td>
                  <td className="border border-border-strong p-4 text-slate">{row.offPage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function TechnicalSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Technical SEO Services',
          description:
            'Professional technical SEO services including site speed optimization, Core Web Vitals, INP optimization, crawl budget management, log file analysis, and structured data implementation.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/technical-seo',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="audit" />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <AIAgentsShowcase
        subheading="AI-Powered Monitoring"
        heading="AI agents that never stop watching your site's health."
        lead="Our AI agents continuously monitor Core Web Vitals, crawl errors, indexation issues, and schema validity — catching problems before they impact rankings. We're constantly deploying new agents as technical SEO evolves."
      />
      <FeatureCardsSection {...toolsData} />
      <ComparisonTableSection />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <TestimonialQuoteSection
        quote="He helped us with market research, define the right topics along with the content brief and SEO framework. He did an extensive site audit and helped us weed out the loopholes. This helped us scale our traffic and also improved our Google ranking. Aditya was always ready to help and introduced me to a lot of concepts in SEO."
        author="Shubhangi"
        role="Content"
        company="Adapt.io"
      />
      <FAQDarkSection title="Technical SEO frequently asked questions" items={faqData} />
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
