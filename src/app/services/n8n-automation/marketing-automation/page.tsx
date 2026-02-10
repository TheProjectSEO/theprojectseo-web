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
  Mail,
  Users,
  BarChart3,
  Zap,
  Target,
  Share2,
  Database,
  Megaphone,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'N8n Marketing Automation Services | Lead Nurturing, Email & Social Media Workflows | TheProjectSEO',
  description:
    'Expert N8n marketing automation services. Automate lead nurturing, email sequences, social media scheduling, A/B testing, conversion tracking, and attribution modeling. Connect ConvertKit, Klaviyo, HubSpot & 400+ tools.',
  alternates: {
    canonical: '/services/n8n-automation/marketing-automation',
  },
  openGraph: {
    title: 'N8n Marketing Automation Services | TheProjectSEO',
    description:
      'Automate lead capture, email sequences, social media posting, lead nurturing, and CRM workflows. Save 30+ hours per week with N8n marketing automation.',
    url: 'https://theprojectseo.com/services/n8n-automation/marketing-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8n Marketing Automation Services | TheProjectSEO',
    description:
      'Automate lead capture, email sequences, social media posting, and CRM workflows. Save 30+ hours per week.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Marketing Automation',
  title: 'Marketing automation that connects',
  accentWord: 'everything',
  titleAfterAccent: '',
  description:
    'Automate lead capture, email sequences, social media scheduling, CRM sync, lead scoring, and campaign reporting. Connect your entire marketing stack with N8n workflows that save 30+ hours per week.',
  ctaPrimaryText: 'Automate Your Marketing',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'All N8n Services',
  ctaSecondaryHref: '/services/n8n-automation',
}

const statsData = [
  { value: '30+ hrs', label: 'Time Saved Weekly' },
  { value: '<2 min', label: 'Lead Response Time' },
  { value: '+180%', label: 'Marketing ROI' },
  { value: '-98%', label: 'Error Reduction' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'Marketing pain points we solve',
  lead: 'Stop losing leads to manual processes. Automate your marketing workflows and respond to opportunities instantly.',
  cards: [
    {
      title: 'Manual Lead Entry',
      items: [
        'Hours wasted copying leads from forms',
        'Data entry errors causing lost opportunities',
        'Slow follow-up times kill conversions',
        'Manual CRM updates delay sales handoffs',
      ],
    },
    {
      title: 'Disconnected Marketing Stack',
      items: [
        'Data lives in isolated silos',
        'No single source of truth',
        'Mailchimp, HubSpot, Google Ads disconnect',
        'Analytics tracking incomplete',
      ],
    },
    {
      title: 'Slow Lead Response',
      items: [
        'Competitors respond first',
        'Manual handoffs kill conversion',
        'Lost leads due to delays',
        'No instant qualification',
      ],
    },
    {
      title: 'Campaign Tracking Chaos',
      items: [
        'Reporting requires 10+ tools',
        'Manual spreadsheet compilation',
        'Takes days instead of hours',
        'Attribution models impossible',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete marketing automation stack',
  lead: 'Connect your entire marketing ecosystem and automate every step from lead capture to sales handoff.',
  services: [
    {
      icon: Users,
      title: 'Lead Capture Automation',
      description: 'Auto-capture leads from website forms, landing pages, chatbots, and social media directly to CRM.',
      features: [
        'Website form webhooks',
        'Landing page integration',
        'Chatbot lead capture',
        'Social media lead sync',
      ],
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Triggered email sequences, drip campaigns, behavior-based emails, and personalized content delivery.',
      features: [
        'Drip campaign automation',
        'Behavior-based triggers',
        'Personalized sequences',
        'Mailchimp/ConvertKit/Klaviyo',
      ],
    },
    {
      icon: Database,
      title: 'CRM Integration & Sync',
      description: 'Real-time sync between marketing platforms and CRM (HubSpot, Salesforce, Pipedrive).',
      features: [
        'Bi-directional CRM sync',
        'Contact deduplication',
        'Deal stage automation',
        'Activity logging',
      ],
    },
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'Automatic lead scoring based on behavior, demographics, and engagement. Route hot leads to sales.',
      features: [
        'Behavioral scoring models',
        'Demographic qualification',
        'Engagement tracking',
        'Automated sales routing',
      ],
    },
    {
      icon: Share2,
      title: 'Social Media Scheduling',
      description: 'Automate content distribution across social channels with Buffer, Hootsuite, and native platform APIs.',
      features: [
        'Multi-platform scheduling',
        'RSS feed distribution',
        'Engagement monitoring',
        'Social ROI tracking',
      ],
    },
    {
      icon: BarChart3,
      title: 'Campaign Reporting & Attribution',
      description: 'Automated dashboards pulling data from all channels with UTM parameter tracking and multi-touch attribution.',
      features: [
        'Multi-touch attribution',
        'UTM parameter tracking',
        'ROAS calculation',
        'Automated dashboards',
      ],
    },
    {
      icon: Megaphone,
      title: 'Ad Campaign Automation',
      description: 'Sync leads from Google Ads and Facebook Ads to CRM, track conversions, manage budgets, and calculate ROAS.',
      features: [
        'Google Ads lead sync',
        'Facebook Ads integration',
        'Conversion tracking',
        'Budget monitoring',
      ],
    },
    {
      icon: Zap,
      title: 'Lead Nurturing Workflows',
      description: 'Multi-step nurture sequences that adapt based on prospect behavior, lifecycle stage, and engagement score.',
      features: [
        'Adaptive sequences',
        'Lifecycle automation',
        'Engagement scoring',
        'Funnel progression',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build marketing automation',
  steps: [
    {
      number: '01',
      title: 'Marketing Stack Audit',
      description:
        'We analyze your current tools (CRM, email platform, ad accounts, analytics) and identify automation opportunities with the highest ROI impact.',
    },
    {
      number: '02',
      title: 'Workflow Design & Mapping',
      description:
        'We design N8n workflows covering lead capture, enrichment, scoring, email sequences, CRM sync, and reporting with proper error handling.',
    },
    {
      number: '03',
      title: 'Integration & Testing',
      description:
        'We connect all platforms via N8n nodes and webhooks, test with real data in staging, and validate lead flow accuracy.',
    },
    {
      number: '04',
      title: 'Deployment & Monitoring',
      description:
        'We deploy workflows to production, set up monitoring dashboards, and provide team training on workflow management.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'B2B SaaS: 180% increase in marketing ROI',
  challenge:
    'A B2B SaaS company with 500+ monthly leads was manually copying leads from forms to HubSpot, sending generic follow-up emails, and struggling with lead scoring. Sales complained about lead quality. Marketing spent 25 hours weekly on manual tasks.',
  solution:
    'We implemented 12 N8n workflows automating lead capture from 5 sources, enriching contact data with Clearbit, applying behavioral lead scoring, enrolling contacts in lifecycle-specific email sequences via ConvertKit, syncing everything to HubSpot, and routing hot leads directly to sales via Slack.',
  results: [
    {
      metric: 'Marketing ROI',
      improvement: '+180%',
      timeframe: 'From better lead quality',
    },
    {
      metric: 'Time Saved',
      improvement: '25 hrs/wk',
      timeframe: 'Manual work eliminated',
    },
    {
      metric: 'Lead Response Time',
      improvement: '<2 min',
      timeframe: 'Instant sales routing',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'Marketing tools we integrate',
  lead: 'We connect N8n with your entire marketing ecosystem for seamless data flow.',
  cards: [
    {
      title: 'Email Marketing',
      items: ['Mailchimp', 'ConvertKit', 'Klaviyo', 'ActiveCampaign', 'SendGrid'],
    },
    {
      title: 'CRM & Marketing Hubs',
      items: ['HubSpot', 'Salesforce Marketing Cloud', 'Pipedrive', 'Marketo', 'Pardot'],
    },
    {
      title: 'Social Media',
      items: ['Buffer', 'Hootsuite', 'Meta Business Suite', 'LinkedIn Marketing', 'RSS Feeds'],
    },
    {
      title: 'Advertising',
      items: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'TikTok Ads', 'Bing Ads'],
    },
    {
      title: 'Analytics & Tracking',
      items: ['Google Analytics', 'Segment', 'Mixpanel', 'Amplitude', 'Google Tag Manager'],
    },
    {
      title: 'Lead Generation',
      items: ['Typeform', 'Gravity Forms', 'Webflow', 'Unbounce', 'Leadpages'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'Marketing automation packages',
  tiers: [
    {
      name: 'Essential',
      price: '$4,500',
      description: 'For small marketing teams',
      features: [
        '5-7 core workflows',
        'Lead capture to CRM automation',
        'Email marketing integration',
        'Basic lead scoring',
        'Social media scheduling',
        'Campaign reporting',
        '1 month support',
      ],
    },
    {
      name: 'Professional',
      price: '$9,500',
      description: 'For growing marketing teams',
      features: [
        '12-15 advanced workflows',
        'Multi-channel lead capture',
        'Advanced lead scoring',
        'Multi-touch attribution',
        'Ad platform integration',
        'Custom API connections',
        'Team training included',
        '3 months support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For marketing departments',
      features: [
        'Unlimited workflows',
        'Account-based marketing automation',
        'Custom attribution models',
        'Multi-CRM orchestration',
        'Advanced segmentation',
        'Dedicated automation architect',
        'Priority support',
        '12 months support',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What marketing teams say',
  testimonials: [
    {
      quote:
        'N8n automation transformed our lead process. We went from 2-hour response times to under 2 minutes. Conversion rates tripled.',
      author: 'Jennifer Lee',
      role: 'VP Marketing',
      company: 'SaaS Growth Co',
    },
    {
      quote:
        'We saved $2,500/month switching from Zapier to N8n. The workflows are more powerful and cost a fraction of what we were paying.',
      author: 'Marcus Williams',
      role: 'Marketing Director',
      company: 'E-commerce Brand',
    },
    {
      quote:
        'Our marketing team was drowning in manual work. Now everything happens automatically and we can focus on strategy instead of data entry.',
      author: 'Sarah Thompson',
      role: 'Head of Growth',
      company: 'Tech Startup',
    },
  ],
}

const faqData = [
  {
    question: 'What marketing tasks can be automated with N8n?',
    answer:
      'Almost everything repetitive in your marketing stack: lead capture from forms and ads, CRM data entry, email sequences and drip campaigns, lead scoring and qualification, social media scheduling and posting, campaign reporting, UTM parameter tracking, conversion tracking, A/B test orchestration, ad spend monitoring, sales notifications, meeting scheduling, data enrichment, list segmentation, webinar registration follow-ups, RSS feed content distribution, and dynamic content personalization. If it involves moving data between tools or triggering actions based on events, N8n can automate it.',
  },
  {
    question: 'Can N8n replace HubSpot marketing automation?',
    answer:
      'N8n does not replace HubSpot entirely, but it can replace and extend HubSpot&apos;s workflow automation at a fraction of the cost. Many clients use HubSpot as their CRM and contact database while using N8n to orchestrate complex multi-tool workflows that HubSpot&apos;s native automation cannot handle, such as connecting to Klaviyo, ConvertKit, custom APIs, databases, and tools outside the HubSpot ecosystem. For small businesses paying for HubSpot Marketing Hub Professional ($800/mo+), N8n can replicate most workflow automation features with a one-time setup cost.',
  },
  {
    question: 'How does N8n integrate with ConvertKit and Klaviyo?',
    answer:
      'N8n has native integration nodes for both ConvertKit and Klaviyo. For ConvertKit, you can automate subscriber management, tag application, sequence enrollment, and form submission triggers. For Klaviyo, N8n connects to profiles, lists, segments, campaigns, and flow triggers. This means you can build workflows that capture a lead from your website, enrich it with company data, add it to the right Klaviyo segment or ConvertKit sequence based on behavior, and sync everything back to your CRM automatically.',
  },
  {
    question: 'What is the difference between N8n and Zapier for marketing automation?',
    answer:
      'N8n is self-hosted with no per-task fees, making it significantly more cost-effective for high-volume marketing automation. Zapier charges per execution ($19.99/mo minimum, scaling quickly with volume), which gets expensive fast when you are processing hundreds of leads daily. N8n also offers more advanced features like complex branching, custom JavaScript/Python code execution, better debugging with full execution logs, and AI agent support. Zapier has more pre-built integrations (6,000+ vs. 400+), but N8n can connect to any tool with an API via HTTP request nodes.',
  },
  {
    question: 'How do you set up lead nurturing workflows in N8n?',
    answer:
      'We build lead nurturing workflows by connecting your lead sources (forms, ads, webinars) to your email platform (ConvertKit, Klaviyo, ActiveCampaign, Mailchimp) through N8n. The workflow captures the lead, enriches it with company data, assigns a lifecycle stage, enrolls them in the appropriate email sequence based on their segment, tracks engagement (opens, clicks, page visits), updates their lead score, and automatically hands off to sales when they reach your qualification threshold. Each step includes error handling and fallback logic.',
  },
  {
    question: 'Can N8n handle social media scheduling and content distribution?',
    answer:
      'Yes. N8n connects to Buffer, Hootsuite, and native social media APIs (Meta Business Suite, LinkedIn, Twitter/X) to automate content distribution. A common workflow detects new blog posts via RSS feed or CMS webhook, generates platform-specific copy and formats, schedules posts at optimal times across all channels with unique UTM parameters, and compiles engagement metrics 24-72 hours later. This eliminates the manual process of reformatting and posting content across platforms.',
  },
  {
    question: 'How does marketing attribution work with N8n?',
    answer:
      'N8n automates multi-touch attribution by collecting conversion data from all your channels (Google Analytics, ad platforms, CRM, email), mapping UTM parameters to touchpoints, and calculating attribution using first-touch, last-touch, or linear models. The workflow pulls ad spend data to calculate ROAS per channel, updates dashboards in Looker Studio or Google Sheets, and alerts your team when a channel&apos;s performance drops below target. This gives you real-time visibility into which marketing efforts are actually driving revenue.',
  },
  {
    question: 'Is N8n good for small business marketing automation?',
    answer:
      'N8n is one of the best options for small business marketing automation because of its pricing model. Unlike Zapier or HubSpot, which charge monthly fees that scale with volume, N8n&apos;s self-hosted version is free and the cloud version starts at affordable tiers. Small businesses processing 500-5,000 leads per month can save $200-$2,000/month compared to Zapier. The visual workflow builder is accessible enough for marketing managers to understand, while being powerful enough for developers to build complex automations.',
  },
  {
    question: 'Can N8n automate webinar marketing workflows?',
    answer:
      'Absolutely. We build webinar automation workflows that connect your registration platform (Zoom Webinars, GoToWebinar, Demio) with your CRM and email tools. The workflow handles pre-webinar registration confirmation and reminder sequences, attendance tracking with no-show follow-ups, post-webinar replay distribution and feedback surveys, lead scoring based on attendance and engagement, and automatic CRM updates with webinar activity history. This eliminates hours of manual post-webinar data management.',
  },
  {
    question: 'How do you handle form submission automation with N8n?',
    answer:
      'N8n captures form submissions from virtually any platform: Typeform, Gravity Forms, WPForms, HubSpot Forms, Webflow, or custom HTML forms via webhooks. When a form is submitted, the workflow instantly enriches the contact data, checks for duplicates in your CRM, creates or updates the contact record, applies lead scoring rules, enrolls the contact in the appropriate email sequence, and notifies the relevant team member. The entire process happens in seconds with zero manual intervention.',
  },
]

const relatedServicesData = [
  {
    title: 'Sales Automation',
    description: 'Automate sales workflows, lead routing, and opportunity management.',
    href: '/services/n8n-automation/sales-automation',
  },
  {
    title: 'CRM Automation',
    description: 'Sync contacts, deals, and activities across multiple CRMs.',
    href: '/services/n8n-automation/crm-automation',
  },
  {
    title: 'Reporting Automation',
    description: 'Automated dashboards, scheduled reports, and KPI tracking.',
    href: '/services/n8n-automation/reporting-automation',
  },
  {
    title: 'SEO Automation',
    description: 'Automate keyword tracking, reporting, and content workflows.',
    href: '/services/seo-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Transform your marketing operations',
  lead: 'Let&apos;s discuss your marketing automation needs and design N8n workflows that eliminate manual work and improve ROI.',
  submitText: 'Automate Your Marketing',
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function MarketingAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'N8n Marketing Automation Services',
          description:
            'Expert N8n marketing automation services. Automate lead nurturing, email sequences, social media scheduling, and campaign reporting.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/n8n-automation/marketing-automation',
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
      <FAQDarkSection title="Marketing automation FAQ" items={faqData} />
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
