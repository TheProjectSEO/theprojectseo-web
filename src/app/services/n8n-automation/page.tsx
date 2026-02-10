import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  ProcessSection,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  RelatedServicesSection,
  CTASection,
  TextContentSection,
} from '@/components/service-page-sections'
import {
  Workflow,
  Zap,
  Database,
  BarChart3,
  Users,
  ShoppingCart,
  Settings,
  CheckCircle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'N8n Automation Services | Workflow Automation Experts | TheProjectSEO',
  description:
    'Professional N8n automation services. Build powerful workflow automations connecting 400+ apps. Save time, reduce errors, and scale operations with custom automation.',
  alternates: {
    canonical: '/services/n8n-automation',
  },
  openGraph: {
    title: 'N8n Automation Services | TheProjectSEO',
    description:
      'Build powerful workflow automations with N8n. Connect apps, automate tasks, and scale operations without code.',
    url: 'https://theprojectseo.com/services/n8n-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8n Automation Services | TheProjectSEO',
    description:
      'Build powerful workflow automations with N8n. Connect apps, automate tasks, and scale operations without code.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'N8n Automation Services',
  title: 'Automate everything with',
  accentWord: 'N8n workflows',
  titleAfterAccent: '',
  description:
    'Connect 400+ apps, automate complex workflows, and eliminate manual tasks. Professional N8n automation built for scale, saving you time and reducing operational costs by 65%.',
  ctaPrimaryText: 'Start Automating',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '500+', label: 'Workflows Built' },
  { value: '400+', label: 'Apps Integrated' },
  { value: '10k hrs', label: 'Time Saved' },
  { value: '65%', label: 'Cost Reduction' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'Problems N8n automation solves',
  lead: 'Stop wasting time on manual tasks. Automate workflows, connect your tools, and scale your operations efficiently.',
  cards: [
    {
      title: 'Manual, Repetitive Tasks',
      items: [
        'Data entry consumes hours weekly',
        'File transfers require constant attention',
        'Routine tasks prevent strategic work',
        'Human error causes costly mistakes',
      ],
    },
    {
      title: 'Disconnected Tools',
      items: [
        'Data lives in isolated silos',
        'Manual syncing between platforms',
        'Information loss during transfers',
        'Inconsistent data across systems',
      ],
    },
    {
      title: 'Scaling Bottlenecks',
      items: [
        'Manual processes limit growth',
        'Adding headcount too expensive',
        'Team bandwidth maxed out',
        'Cannot scale current operations',
      ],
    },
    {
      title: 'High Automation Costs',
      items: [
        'Zapier Premium costs $1,000+/month',
        'Per-task pricing scales poorly',
        'Enterprise tools overpriced',
        'N8n offers self-hosted alternative',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete N8n automation solutions',
  lead: 'From simple 2-app integrations to complex multi-step workflows, we automate your entire tech stack.',
  services: [
    {
      icon: Zap,
      title: 'Marketing Automation',
      description: 'Lead capture, email sequences, social media posting, campaign tracking, and analytics automation.',
      features: [
        'Lead capture to CRM sync',
        'Email sequence automation',
        'Social media scheduling',
        'Campaign performance tracking',
      ],
    },
    {
      icon: Users,
      title: 'Sales Automation',
      description: 'Lead routing, opportunity tracking, quote generation, and automated follow-ups.',
      features: [
        'Lead routing & qualification',
        'Opportunity pipeline management',
        'Automated quote generation',
        'Follow-up sequence automation',
      ],
    },
    {
      icon: Database,
      title: 'CRM Automation',
      description: 'Contact sync, deal updates, activity logging, and multi-CRM data integration.',
      features: [
        'Multi-CRM contact syncing',
        'Deal stage automation',
        'Activity logging workflows',
        'Data enrichment pipelines',
      ],
    },
    {
      icon: Database,
      title: 'Data Pipeline Automation',
      description: 'ETL workflows, data transformation, database sync, and warehouse integration.',
      features: [
        'ETL workflow design',
        'Data transformation logic',
        'Database synchronization',
        'Data warehouse integration',
      ],
    },
    {
      icon: BarChart3,
      title: 'Reporting Automation',
      description: 'Automated dashboards, scheduled reports, data aggregation, and KPI tracking.',
      features: [
        'Automated dashboard generation',
        'Scheduled report delivery',
        'Data aggregation workflows',
        'KPI tracking & alerts',
      ],
    },
    {
      icon: Users,
      title: 'Customer Service Automation',
      description: 'Ticket routing, auto-responses, escalation workflows, and satisfaction surveys.',
      features: [
        'Smart ticket routing',
        'Auto-response templates',
        'Escalation workflows',
        'CSAT survey automation',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Automation',
      description: 'Order processing, inventory sync, customer notifications, and fulfillment workflows.',
      features: [
        'Order processing automation',
        'Inventory synchronization',
        'Customer notification flows',
        'Fulfillment coordination',
      ],
    },
    {
      icon: Settings,
      title: 'Custom Integrations',
      description: 'API integrations, webhook handlers, custom nodes, and complex multi-step workflows.',
      features: [
        'Custom API integrations',
        'Webhook handler setup',
        'Custom node development',
        'Complex branching logic',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build N8n automations',
  steps: [
    {
      number: '01',
      title: 'Process Mapping',
      description:
        'We analyze your current workflows, identify automation opportunities, and map out the optimal automation architecture.',
    },
    {
      number: '02',
      title: 'Workflow Design',
      description:
        'We design N8n workflows with error handling, conditional logic, data transformations, and proper authentication.',
    },
    {
      number: '03',
      title: 'Implementation & Testing',
      description:
        'We build and rigorously test workflows in a staging environment before deploying to production.',
    },
    {
      number: '04',
      title: 'Deployment & Monitoring',
      description:
        'We deploy to your self-hosted N8n instance or cloud, set up monitoring, and provide ongoing support.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Marketing agency: 40 hours saved per week',
  challenge:
    'A digital marketing agency was spending 40+ hours per week on manual tasks: copying leads from forms to CRM, sending welcome emails, updating Google Sheets, generating reports, and posting to social media. With 20+ clients, these repetitive tasks were preventing team growth.',
  solution:
    'We implemented 15 N8n workflows automating their entire operations: lead capture to CRM sync, automated email sequences, social media scheduling, client reporting, data aggregation, and notification systems. All workflows were connected with error handling and monitoring.',
  results: [
    {
      metric: 'Time Saved Per Week',
      improvement: '40 hrs',
      timeframe: 'From manual processes',
    },
    {
      metric: 'Cost Reduction',
      improvement: '$4,800/mo',
      timeframe: 'Eliminated manual labor',
    },
    {
      metric: 'Error Rate',
      improvement: '-95%',
      timeframe: 'Automated data handling',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'Tools & platforms we integrate',
  lead: 'We connect N8n with 400+ apps and services to automate your entire tech stack.',
  cards: [
    {
      title: 'Core Platform',
      items: ['N8n', 'Node.js', 'JavaScript', 'TypeScript', 'Docker'],
    },
    {
      title: 'Integrations',
      items: ['Salesforce', 'HubSpot', 'Slack', 'Google Workspace', 'Microsoft 365'],
    },
    {
      title: 'Data & APIs',
      items: ['PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL', 'Webhooks'],
    },
    {
      title: 'Cloud & Hosting',
      items: ['AWS', 'Google Cloud', 'DigitalOcean', 'Self-Hosted', 'Kubernetes'],
    },
    {
      title: 'Marketing Tools',
      items: ['Mailchimp', 'ActiveCampaign', 'Facebook Ads', 'Google Analytics', 'Airtable'],
    },
    {
      title: 'Development',
      items: ['Git', 'VS Code', 'Custom Nodes', 'API Testing', 'Monitoring'],
    },
  ],
}

const industriesData = {
  subheading: 'Industries We Serve',
  heading: 'N8n automation across industries',
  paragraphs: [
    'We build industry-specific automation workflows tailored to your unique business processes and compliance requirements. Our experience spans marketing agencies, e-commerce, SaaS, professional services, real estate, and healthcare.',
    'Marketing agencies benefit from client onboarding, campaign management, and reporting automation. E-commerce businesses automate order processing, inventory sync, and customer notifications. SaaS companies streamline user onboarding, lifecycle emails, and usage tracking. Professional services firms automate lead qualification, project management, and invoicing.',
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'Transparent pricing for every scale',
  tiers: [
    {
      name: 'Starter Pack',
      price: '$3,500',
      description: 'Perfect for small businesses',
      features: [
        '3-5 basic workflows',
        'Up to 10 app integrations',
        'Error handling setup',
        'Documentation',
        'Self-hosted setup assistance',
        '1 month support',
      ],
    },
    {
      name: 'Professional',
      price: '$8,500',
      description: 'For growing businesses',
      features: [
        '10-15 complex workflows',
        'Up to 30 app integrations',
        'Advanced logic & branching',
        'Custom API integrations',
        'Monitoring & alerts',
        'Training for your team',
        '3 months support',
        'Cloud deployment',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large organizations',
      features: [
        'Unlimited workflows',
        'Unlimited app integrations',
        'Custom node development',
        'Multi-environment setup',
        'Advanced security & compliance',
        'Dedicated automation architect',
        'Priority support',
        '12 months support',
        'SLA guarantee',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'Trusted by automation-first companies',
  testimonials: [
    {
      quote:
        'N8n automation saved our team 40 hours per week. The ROI was immediate and continues to grow as we scale.',
      author: 'Marcus Johnson',
      role: 'Operations Director',
      company: 'Digital Marketing Pro',
    },
    {
      quote:
        'We tried Zapier but the costs were unsustainable. N8n gives us more control and saves us $3,000/month.',
      author: 'Sophie Chen',
      role: 'CTO',
      company: 'GrowthTech Solutions',
    },
    {
      quote:
        'The workflows are rock-solid. We process 10,000+ transactions daily without a single error.',
      author: 'David Martinez',
      role: 'CEO',
      company: 'E-commerce Innovations',
    },
  ],
}

const faqData = [
  {
    question: 'What is N8n and why should I use it?',
    answer:
      'N8n is an open-source workflow automation platform that connects apps and automates tasks. Unlike Zapier or Make, N8n is self-hosted, giving you full control, unlimited workflows, and no per-execution fees. It&apos;s cost-effective for high-volume automation.',
  },
  {
    question: 'How is N8n different from Zapier or Make?',
    answer:
      'N8n is self-hosted and open-source, meaning you pay once for setup and run unlimited workflows without monthly fees. Zapier and Make charge per task execution, which becomes expensive at scale. N8n also offers more advanced features like code execution, complex branching, and custom node development.',
  },
  {
    question: 'Do I need to host N8n myself?',
    answer:
      'You can either self-host N8n on your own servers (AWS, Google Cloud, DigitalOcean) or use N8n Cloud. Self-hosting gives you maximum control and cost savings. We help with deployment, configuration, and ongoing management regardless of your hosting choice.',
  },
  {
    question: 'How long does it take to build workflows?',
    answer:
      'Simple workflows (2-3 apps) take 1-2 days. Complex workflows with multiple apps, conditional logic, and error handling take 3-5 days. We typically deliver starter packages (3-5 workflows) in 2-3 weeks, and professional packages (10-15 workflows) in 4-6 weeks.',
  },
  {
    question: 'What apps can N8n integrate with?',
    answer:
      'N8n supports 400+ pre-built integrations including Salesforce, HubSpot, Slack, Google Workspace, Microsoft 365, Mailchimp, Shopify, and more. If an app isn&apos;t supported, we can build custom integrations using APIs, webhooks, or custom nodes.',
  },
  {
    question: 'What if a workflow breaks or stops working?',
    answer:
      'We build workflows with comprehensive error handling, retry logic, and monitoring. You&apos;ll receive alerts if something fails. Our support packages include workflow maintenance, troubleshooting, and updates when APIs change.',
  },
  {
    question: 'Can N8n handle high-volume automation?',
    answer:
      'Yes, N8n is designed for production workloads. We&apos;ve built systems processing 100,000+ events daily. With proper server resources and optimization, N8n can handle virtually any volume. It scales horizontally by adding more instances.',
  },
  {
    question: 'Do you provide training for our team?',
    answer:
      'Yes, professional and enterprise packages include training sessions. We teach your team how to use N8n, modify existing workflows, create simple workflows, troubleshoot issues, and follow best practices.',
  },
  {
    question: 'What happens after the project is complete?',
    answer:
      'You receive complete documentation, workflow exports, and admin access. All packages include a support period. After that, you can either maintain workflows yourself, hire us for specific updates, or sign up for ongoing support and optimization.',
  },
  {
    question: 'Can you migrate our existing Zapier workflows to N8n?',
    answer:
      'Yes, we specialize in Zapier-to-N8n migrations. We analyze your existing Zaps, rebuild them in N8n (often with improvements), test thoroughly, and handle the cutover. Most clients see 50-80% cost savings after migrating from Zapier to N8n.',
  },
]

const relatedServicesData = [
  {
    title: 'Marketing Automation',
    description: 'Automate lead capture, email sequences, and campaign tracking.',
    href: '/services/n8n-automation/marketing-automation',
  },
  {
    title: 'Sales Automation',
    description: 'Streamline lead routing, follow-ups, and opportunity management.',
    href: '/services/n8n-automation/sales-automation',
  },
  {
    title: 'SEO Automation',
    description: 'Automate keyword tracking, reporting, and content workflows.',
    href: '/services/seo-automation',
  },
  {
    title: 'Web Development',
    description: 'Build custom web apps that integrate with your N8n workflows.',
    href: '/services/web',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Start building N8n workflows today',
  lead: 'Let&apos;s discuss your automation needs and design custom N8n workflows that save time and money.',
  ctaPrimaryText: 'Start Automating',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Learn About Us',
  ctaSecondaryHref: '/company',
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function N8nAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/n8n-automation',
          name: 'N8n Automation Services',
          description:
            'Professional N8n automation services. Build powerful workflow automations connecting 400+ apps. Save time, reduce errors, and scale operations.',
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
            name: 'N8n Automation Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Marketing Automation',
                  description: 'Automate lead capture, email sequences, and campaign tracking.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Sales Automation',
                  description: 'Streamline lead routing, follow-ups, and opportunity management.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'CRM Automation',
                  description: 'Sync contacts, deals, and activities across multiple CRMs.',
                },
              },
            ],
          },
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection {...processData} />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <TextContentSection {...industriesData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="Frequently asked questions" items={faqData} />
      </Container>
      <RelatedServicesSection
        subheading="Related Services"
        heading="Explore more automation services"
        services={relatedServicesData}
      />
      <CTASection {...ctaData} />
      <Footer />
    </main>
  )
}
