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
import { AIAgentsShowcase } from '@/components/ai-agents-showcase'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  Search,
  BarChart3,
  FileText,
  Link as LinkIcon,
  TrendingUp,
  Zap,
  Globe,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Automation Services | Rank Tracking, Reporting & Content Workflows | TheProjectSEO',
  description:
    'Expert SEO automation services. Automate rank tracking, keyword research, content workflows, link monitoring, technical audits, and SEO reporting. Save 20+ hours weekly.',
  alternates: {
    canonical: '/services/seo-automation',
  },
  openGraph: {
    title: 'SEO Automation Services | TheProjectSEO',
    description:
      'Automate rank tracking, keyword research, content workflows, and SEO reporting. Save 20+ hours weekly.',
    url: 'https://theprojectseo.com/services/seo-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Automation Services | TheProjectSEO',
    description:
      'Automate rank tracking, keyword research, and SEO reporting workflows.',
  },
}

const heroData = {
  label: 'SEO Automation',
  title: 'Automate SEO tasks and focus on',
  accentWord: 'strategy',
  titleAfterAccent: '',
  description:
    'Automate rank tracking, keyword research, content workflows, link monitoring, technical audits, and SEO reporting. Save 20+ hours weekly and make data-driven decisions faster.',
  ctaPrimaryText: 'Automate Your SEO',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View All Services',
  ctaSecondaryHref: '/services',
}

const statsData = [
  { value: '20 hrs/wk', label: 'Time Saved' },
  { value: 'Daily', label: 'Rank Updates' },
  { value: '+45%', label: 'Efficiency Gain' },
  { value: '100%', label: 'Data Accuracy' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'SEO pain points we solve',
  lead: 'Stop wasting time on manual SEO tasks. Automate your workflows and focus on high-impact strategy.',
  cards: [
    {
      title: 'Manual Rank Tracking',
      items: [
        'Hours checking rankings manually',
        'Inconsistent tracking frequency',
        'Spreadsheet chaos',
        'No automated alerts',
      ],
    },
    {
      title: 'Time-Consuming Reports',
      items: [
        'Manual client report compilation',
        'Data from 10+ different tools',
        'Hours spent on formatting',
        'Reports outdated on delivery',
      ],
    },
    {
      title: 'Content Workflow Bottlenecks',
      items: [
        'Manual keyword research',
        'No automated content briefs',
        'Publishing workflow manual',
        'Performance tracking scattered',
      ],
    },
    {
      title: 'Link Monitoring Gaps',
      items: [
        'Lost backlinks unnoticed',
        'Competitor link gains missed',
        'Broken links undiscovered',
        'Manual outreach tracking',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete SEO automation solutions',
  lead: 'Automate every repetitive SEO task and accelerate your results.',
  services: [
    {
      icon: TrendingUp,
      title: 'Rank Tracking Automation',
      description: 'Automated daily rank tracking with Slack/email alerts for ranking changes, volatility detection, and competitor monitoring.',
      features: [
        'Daily rank updates',
        'Ranking change alerts',
        'Competitor tracking',
        'Volatility detection',
      ],
    },
    {
      icon: Search,
      title: 'Keyword Research Automation',
      description: 'Auto-discover keyword opportunities, track search volume changes, identify content gaps, and prioritize based on difficulty.',
      features: [
        'Keyword opportunity discovery',
        'Search volume monitoring',
        'Content gap analysis',
        'Difficulty scoring',
      ],
    },
    {
      icon: FileText,
      title: 'Content Workflow Automation',
      description: 'Automate content briefs, keyword clustering, publishing workflows, and performance tracking across your content calendar.',
      features: [
        'Automated content briefs',
        'Keyword clustering',
        'Publishing automation',
        'Performance tracking',
      ],
    },
    {
      icon: LinkIcon,
      title: 'Link Monitoring & Outreach',
      description: 'Monitor backlinks, detect lost links, track competitor link gains, and automate outreach sequences for link building.',
      features: [
        'Backlink monitoring',
        'Lost link alerts',
        'Competitor link tracking',
        'Outreach automation',
      ],
    },
    {
      icon: Zap,
      title: 'Technical SEO Audits',
      description: 'Schedule automated crawls, monitor Core Web Vitals, detect technical issues, and receive instant alerts for problems.',
      features: [
        'Scheduled crawls',
        'CWV monitoring',
        'Issue detection',
        'Instant alerts',
      ],
    },
    {
      icon: BarChart3,
      title: 'SEO Reporting Automation',
      description: 'Auto-generate client reports, executive summaries, and performance dashboards with data from all SEO tools.',
      features: [
        'Automated client reports',
        'Executive dashboards',
        'Multi-tool data aggregation',
        'Scheduled delivery',
      ],
    },
    {
      icon: Globe,
      title: 'Competitor Monitoring',
      description: 'Track competitor rankings, content updates, backlink profiles, and organic traffic trends automatically.',
      features: [
        'Competitor rank tracking',
        'Content monitoring',
        'Backlink analysis',
        'Traffic trend alerts',
      ],
    },
    {
      icon: Target,
      title: 'Goal & KPI Tracking',
      description: 'Set SEO goals, track KPIs automatically, receive threshold alerts, and generate progress reports.',
      features: [
        'Automated KPI tracking',
        'Goal progress monitoring',
        'Threshold-based alerts',
        'Progress reports',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build SEO automation',
  steps: [
    {
      number: '01',
      title: 'SEO Workflow Audit',
      description:
        'We analyze your current SEO processes, identify repetitive tasks, and map out automation opportunities.',
    },
    {
      number: '02',
      title: 'Tool Integration',
      description:
        'We connect your SEO stack (Ahrefs, Semrush, GSC, Analytics, Screaming Frog) to automation platforms.',
    },
    {
      number: '03',
      title: 'Workflow Build',
      description:
        'We build automated workflows for rank tracking, reporting, content management, and monitoring with alerts.',
    },
    {
      number: '04',
      title: 'Deploy & Train',
      description:
        'We deploy workflows, set up dashboards, and train your team on accessing automated insights.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'SEO agency: 20 hours saved weekly',
  challenge:
    'An SEO agency with 15 clients was spending 20 hours weekly on manual rank tracking, client report generation, and link monitoring. Reports were always outdated, and ranking changes were discovered too late.',
  solution:
    'We automated daily rank tracking with Slack alerts for significant changes, weekly client report generation pulling data from Ahrefs, GSC, and Analytics, automated backlink monitoring with lost link alerts, and keyword opportunity detection with weekly summaries.',
  results: [
    {
      metric: 'Time Saved',
      improvement: '20 hrs/wk',
      timeframe: 'From manual tasks',
    },
    {
      metric: 'Ranking Alerts',
      improvement: 'Real-time',
      timeframe: 'From weekly checks',
    },
    {
      metric: 'Client Satisfaction',
      improvement: '+35%',
      timeframe: 'From timely insights',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'SEO tools we integrate',
  lead: 'We connect automation platforms with your entire SEO stack.',
  cards: [
    {
      title: 'SEO Platforms',
      items: ['Ahrefs', 'Semrush', 'Moz Pro', 'SE Ranking', 'Serpstat'],
    },
    {
      title: 'Analytics & Search',
      items: ['Google Search Console', 'Google Analytics', 'Bing Webmaster', 'Google Tag Manager', 'Looker Studio'],
    },
    {
      title: 'Technical SEO',
      items: ['Screaming Frog', 'Lumar', 'OnCrawl', 'Sitebulb', 'Botify'],
    },
    {
      title: 'Content & CMS',
      items: ['WordPress', 'Webflow', 'Contentful', 'Notion', 'Airtable'],
    },
    {
      title: 'Automation Platforms',
      items: ['N8n', 'Zapier', 'Make', 'Python Scripts', 'Google Sheets'],
    },
    {
      title: 'Communication',
      items: ['Slack', 'Email', 'Microsoft Teams', 'Discord', 'SMS'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'SEO automation packages',
  tiers: [
    {
      name: 'Essential',
      price: '$2,500',
      description: 'For small SEO teams',
      features: [
        'Rank tracking automation',
        'Weekly reporting',
        'Backlink monitoring',
        'Basic alert setup',
        'Up to 500 keywords',
        '1 month support',
      ],
    },
    {
      name: 'Professional',
      price: '$5,500',
      description: 'For agencies & in-house teams',
      features: [
        'Advanced rank tracking',
        'Client report automation',
        'Content workflow automation',
        'Link monitoring & outreach',
        'Technical audit scheduling',
        'Up to 5,000 keywords',
        'Team training',
        '3 months support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large agencies',
      features: [
        'Unlimited keywords',
        'Multi-client automation',
        'Custom integrations',
        'Advanced analytics',
        'White-label reporting',
        'Dedicated automation architect',
        'Priority support',
        '12 months support',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What SEO teams say',
  testimonials: [
    {
      quote:
        'SEO automation saved our team 20 hours weekly. Clients get reports automatically and we catch ranking drops instantly via Slack.',
      author: 'Michael Torres',
      role: 'SEO Director',
      company: 'Digital Marketing Agency',
    },
    {
      quote:
        'The rank tracking automation and competitor monitoring transformed our workflow. We operate 45% more efficiently now.',
      author: 'Jennifer Lee',
      role: 'Head of SEO',
      company: 'E-commerce Company',
    },
    {
      quote:
        'Automated content workflows and keyword research cut our content production cycle in half. Best investment we made.',
      author: 'Ryan Cooper',
      role: 'Content Director',
      company: 'SaaS Platform',
    },
  ],
}

const faqData = [
  {
    question: 'What SEO tasks can be automated?',
    answer:
      'You can automate rank tracking and alerts, keyword research and opportunity discovery, client report generation, backlink monitoring and lost link alerts, technical SEO audits and crawls, Core Web Vitals monitoring, content brief generation, publishing workflows, competitor tracking, goal and KPI monitoring, outreach sequence management, and data aggregation from multiple SEO tools. Any repetitive SEO task that involves data collection, analysis, or reporting can be automated.',
  },
  {
    question: 'How does automated rank tracking work?',
    answer:
      'We set up daily or weekly rank tracking using Ahrefs, Semrush, or SE Ranking APIs. The automation pulls ranking data for your keywords, compares to previous positions, detects significant changes (e.g., +5 or -5 positions), and sends alerts via Slack or email. You can monitor desktop vs mobile rankings, track local rankings by location, and monitor SERP features. This eliminates manual rank checking and ensures you catch ranking changes immediately.',
  },
  {
    question: 'Can you automate SEO client reports?',
    answer:
      'Yes. We build workflows that pull data from Google Search Console, Google Analytics, Ahrefs/Semrush, and other tools, aggregate metrics (traffic, rankings, backlinks, conversions), generate branded PDF or HTML reports, and email them to clients automatically on schedule (weekly or monthly). Reports include executive summaries, key metric changes, goal progress, and insights. This eliminates 5-10 hours of manual report compilation per client.',
  },
  {
    question: 'How does backlink monitoring automation work?',
    answer:
      'We connect to Ahrefs or Majestic APIs to monitor your backlink profile daily. When a backlink is lost, gained, or changes (nofollow to dofollow), you receive instant Slack/email alerts. We also track competitor backlink gains so you can pursue the same opportunities. This ensures you never miss link-building opportunities or discover lost links too late.',
  },
  {
    question: 'What is content workflow automation?',
    answer:
      'Content workflow automation streamlines your content production: automatically generate content briefs with target keywords and competitor analysis, assign tasks to writers via project management tools, track draft status and deadlines, schedule publishing to WordPress or your CMS, monitor published content performance, and alert when content underperforms. This reduces content production cycle time by 40-60%.',
  },
  {
    question: 'Can technical SEO audits be automated?',
    answer:
      'Yes. We schedule Screaming Frog, Lumar, or OnCrawl to crawl your site daily or weekly. The automation detects technical issues (broken links, missing meta descriptions, duplicate content, slow pages, crawl errors) and sends alerts for new issues. Core Web Vitals are monitored via PageSpeed Insights API with alerts when pages fail thresholds. This catches technical SEO problems before they impact rankings.',
  },
  {
    question: 'How does competitor monitoring work?',
    answer:
      'We track competitor rankings for target keywords, monitor their backlink profiles for new links, detect new content published on their sites, track their organic traffic trends via Ahrefs/Semrush, and alert you to significant changes. This intelligence informs your SEO strategy by revealing what competitors are doing successfully (or unsuccessfully).',
  },
  {
    question: 'What automation platform do you recommend?',
    answer:
      'We typically use N8n for self-hosted, cost-effective automation, or Zapier/Make for SaaS solutions. N8n is ideal for agencies and in-house teams with high-volume automation needs (no per-task fees). Zapier works well for smaller teams needing quick setup. Python scripts are used for complex data processing. We choose based on your technical capabilities, budget, and volume requirements.',
  },
  {
    question: 'How long does SEO automation take to implement?',
    answer:
      'Essential packages (rank tracking and basic reporting) take 1-2 weeks. Professional packages (client reports, content workflows, link monitoring) take 3-4 weeks. Enterprise implementations with custom integrations and white-label reporting take 4-6 weeks. We deliver incrementally, starting with highest-priority automations (usually rank tracking and alerts), so you see value within days.',
  },
  {
    question: 'What ROI can we expect from SEO automation?',
    answer:
      'Most clients save 15-25 hours per week in manual work (rank tracking, reporting, monitoring). For agencies, this equals $1,500-$3,000 monthly in saved labor costs. Faster detection of ranking changes and technical issues prevents traffic loss worth thousands in revenue. Better insights from automated competitor monitoring inform strategy improvements. Typical ROI is realized within 60-90 days through time savings and improved decision-making.',
  },
]

const relatedServicesData = [
  {
    title: 'Technical SEO',
    description: 'Core Web Vitals optimization, site speed, and crawlability.',
    href: '/services/technical-seo',
  },
  {
    title: 'Content SEO',
    description: 'SEO content strategy, optimization, and performance.',
    href: '/services/content',
  },
  {
    title: 'N8n Automation',
    description: 'Workflow automation connecting 400+ apps and services.',
    href: '/services/n8n-automation',
  },
  {
    title: 'Reporting Automation',
    description: 'Automated dashboards, SQL queries, and scheduled reports.',
    href: '/services/n8n-automation/reporting-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Save 20+ hours weekly with SEO automation',
  lead: 'Let&apos;s discuss your SEO workflows and design automation that eliminates manual work and accelerates results.',
  submitText: 'Automate Your SEO',
}

export default function SEOAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'SEO Automation Services',
          description:
            'Expert SEO automation services. Automate rank tracking, keyword research, content workflows, and SEO reporting.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/seo-automation',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="implementation" />} visualBg="ink" />
      <AIAgentsShowcase
        subheading="Meet the Agents"
        heading="8 specialized AI agents powering your SEO automation."
        lead="Our proprietary AI agents are purpose-built for SEO workflows. Each one handles a specific domain — from internal linking to competitor monitoring — and they're constantly evolving as SEO changes."
      />
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
      <FAQDarkSection title="SEO automation FAQ" items={faqData} />
      <RelatedServicesSection
        subheading="Related Services"
        heading="Explore more SEO services"
        services={relatedServicesData}
      />
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
