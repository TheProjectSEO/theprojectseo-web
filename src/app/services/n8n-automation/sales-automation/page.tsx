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
  Users,
  Target,
  FileText,
  Mail,
  BarChart3,
  Zap,
  Phone,
  Calendar,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'N8n Sales Automation Services | Lead Routing, Pipeline & Follow-ups | TheProjectSEO',
  description:
    'Expert N8n sales automation services. Automate lead qualification, deal management, proposal generation, email outreach, and pipeline management. Reduce response time from hours to minutes.',
  alternates: {
    canonical: '/services/n8n-automation/sales-automation',
  },
  openGraph: {
    title: 'N8n Sales Automation Services | TheProjectSEO',
    description:
      'Automate your sales workflows with N8n. Lead routing, opportunity tracking, automated follow-ups & more.',
    url: 'https://theprojectseo.com/services/n8n-automation/sales-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8n Sales Automation Services | TheProjectSEO',
    description:
      'Automate lead routing, opportunity tracking, and follow-ups. Close deals faster with N8n sales automation.',
  },
}

const heroData = {
  label: 'Sales Automation',
  title: 'Close more deals with',
  accentWord: 'automated sales',
  titleAfterAccent: 'workflows',
  description:
    'Automate lead qualification, routing, follow-ups, proposal generation, and pipeline management. Respond to leads in under 2 minutes and never miss a follow-up again.',
  ctaPrimaryText: 'Automate Your Sales',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'All N8n Services',
  ctaSecondaryHref: '/services/n8n-automation',
}

const statsData = [
  { value: '<2 min', label: 'Lead Response Time' },
  { value: '+45%', label: 'Conversion Rate' },
  { value: '20 hrs/wk', label: 'Time Saved' },
  { value: '-92%', label: 'Missed Follow-ups' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'Sales pain points we solve',
  lead: 'Stop losing deals to slow response times and missed follow-ups. Automate your sales workflows for instant lead engagement.',
  cards: [
    {
      title: 'Slow Lead Response',
      items: [
        'Hours to respond to inbound leads',
        'Competitors respond first',
        'Manual lead assignment delays',
        'No instant qualification',
      ],
    },
    {
      title: 'Missed Follow-ups',
      items: [
        'Deals fall through the cracks',
        'No automated reminder system',
        'Manual follow-up tracking',
        'Lost opportunities from forgetfulness',
      ],
    },
    {
      title: 'Manual Pipeline Management',
      items: [
        'Hours updating CRM daily',
        'Deal stage changes manual',
        'No automatic notifications',
        'Pipeline visibility poor',
      ],
    },
    {
      title: 'Disconnected Sales Tools',
      items: [
        'Lead data trapped in silos',
        'Email, CRM, calendar disconnect',
        'Manual data entry errors',
        'No unified sales view',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete sales automation stack',
  lead: 'Automate every step of your sales process from lead capture to deal close.',
  services: [
    {
      icon: Users,
      title: 'Lead Routing & Assignment',
      description: 'Automatically qualify, score, and route leads to the right sales rep based on territory, deal size, or product interest.',
      features: [
        'Intelligent lead scoring',
        'Territory-based routing',
        'Round-robin assignment',
        'Instant Slack/email alerts',
      ],
    },
    {
      icon: Target,
      title: 'Lead Qualification Automation',
      description: 'Auto-qualify leads based on firmographics, behavior, and engagement to ensure sales only talks to qualified prospects.',
      features: [
        'BANT qualification',
        'Behavioral scoring',
        'Firmographic filtering',
        'MQL to SQL automation',
      ],
    },
    {
      icon: Mail,
      title: 'Email Outreach & Follow-ups',
      description: 'Automated email sequences, personalized outreach, follow-up reminders, and multi-touch cadences via Gmail or Outlook.',
      features: [
        'Personalized sequences',
        'Multi-touch cadences',
        'Engagement tracking',
        'Automatic follow-ups',
      ],
    },
    {
      icon: FileText,
      title: 'Proposal & Quote Generation',
      description: 'Auto-generate personalized proposals, quotes, and contracts from templates based on deal data.',
      features: [
        'Template-based generation',
        'Dynamic pricing',
        'E-signature integration',
        'PDF delivery automation',
      ],
    },
    {
      icon: BarChart3,
      title: 'Pipeline Management',
      description: 'Automatic deal stage progression, pipeline health alerts, stale deal notifications, and revenue forecasting.',
      features: [
        'Auto stage progression',
        'Stale deal alerts',
        'Pipeline health reports',
        'Revenue forecasting',
      ],
    },
    {
      icon: Calendar,
      title: 'Meeting Scheduling Automation',
      description: 'Integrate Calendly, Google Calendar, or Outlook to automate meeting booking, reminders, and no-show follow-ups.',
      features: [
        'Automated booking confirmations',
        'Meeting reminders',
        'No-show follow-ups',
        'Calendar sync',
      ],
    },
    {
      icon: Phone,
      title: 'Call & Activity Logging',
      description: 'Automatically log calls, emails, and meetings to CRM. Sync call outcomes and next steps without manual data entry.',
      features: [
        'Call outcome logging',
        'Email activity tracking',
        'Meeting notes sync',
        'Task creation automation',
      ],
    },
    {
      icon: Zap,
      title: 'Deal Acceleration Workflows',
      description: 'Trigger actions when deals stall: automated discount approvals, manager escalations, and urgency-building follow-ups.',
      features: [
        'Stalled deal automation',
        'Discount approval workflows',
        'Manager escalation triggers',
        'Urgency-building sequences',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build sales automation',
  steps: [
    {
      number: '01',
      title: 'Sales Process Audit',
      description:
        'We map your current sales process, identify bottlenecks, and pinpoint high-ROI automation opportunities.',
    },
    {
      number: '02',
      title: 'Workflow Design',
      description:
        'We design N8n workflows for lead routing, qualification, follow-ups, pipeline management, and reporting.',
    },
    {
      number: '03',
      title: 'CRM Integration',
      description:
        'We connect N8n to your CRM (Salesforce, HubSpot, Pipedrive), email platform, calendar, and communication tools.',
    },
    {
      number: '04',
      title: 'Deploy & Train',
      description:
        'We deploy workflows, set up monitoring, and train your sales team on the new automated processes.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'B2B services: 45% increase in conversion rate',
  challenge:
    'A B2B services company with 200 monthly leads was taking 4-6 hours to respond to new inquiries. Sales reps manually qualified leads, forgot follow-ups, and spent hours updating the CRM. Conversion rate was stuck at 8%.',
  solution:
    'We implemented N8n workflows for instant lead routing to sales via Slack, automatic lead scoring and qualification, multi-touch email follow-up sequences, deal stage automation in Pipedrive, and stale deal alerts. Response time dropped to under 2 minutes.',
  results: [
    {
      metric: 'Conversion Rate',
      improvement: '+45%',
      timeframe: '8% to 11.6%',
    },
    {
      metric: 'Response Time',
      improvement: '<2 min',
      timeframe: 'From 4-6 hours',
    },
    {
      metric: 'Time Saved',
      improvement: '20 hrs/wk',
      timeframe: 'CRM updates automated',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'Sales tools we integrate',
  lead: 'We connect N8n with your entire sales tech stack for seamless automation.',
  cards: [
    {
      title: 'CRM Platforms',
      items: ['Salesforce', 'HubSpot CRM', 'Pipedrive', 'Close', 'Copper'],
    },
    {
      title: 'Email & Outreach',
      items: ['Gmail', 'Outlook', 'SendGrid', 'Lemlist', 'Outreach.io'],
    },
    {
      title: 'Calendar & Meetings',
      items: ['Calendly', 'Google Calendar', 'Outlook Calendar', 'Chili Piper', 'Zoom'],
    },
    {
      title: 'Communication',
      items: ['Slack', 'Microsoft Teams', 'Twilio', 'RingCentral', 'Intercom'],
    },
    {
      title: 'Proposal & Docs',
      items: ['PandaDoc', 'DocuSign', 'Google Docs', 'Proposify', 'HelloSign'],
    },
    {
      title: 'Data Enrichment',
      items: ['Clearbit', 'ZoomInfo', 'Apollo', 'Hunter.io', 'LinkedIn Sales Navigator'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'Sales automation packages',
  tiers: [
    {
      name: 'Essential',
      price: '$4,000',
      description: 'For small sales teams',
      features: [
        '5-7 core workflows',
        'Lead routing automation',
        'Email follow-up sequences',
        'CRM sync & logging',
        'Meeting scheduling',
        '1 month support',
      ],
    },
    {
      name: 'Professional',
      price: '$8,500',
      description: 'For growing sales teams',
      features: [
        '12-15 advanced workflows',
        'Lead qualification scoring',
        'Multi-touch cadences',
        'Proposal generation',
        'Pipeline automation',
        'Deal acceleration workflows',
        'Team training',
        '3 months support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For sales organizations',
      features: [
        'Unlimited workflows',
        'Territory management',
        'Revenue forecasting',
        'Multi-CRM orchestration',
        'Custom integrations',
        'Dedicated automation architect',
        'Priority support',
        '12 months support',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What sales teams say',
  testimonials: [
    {
      quote:
        'Our response time went from hours to under 2 minutes. We close 45% more deals now because we never miss a hot lead.',
      author: 'Michael Chen',
      role: 'VP Sales',
      company: 'B2B Services Co',
    },
    {
      quote:
        'N8n automation saved our team 20 hours per week. No more manual CRM updates or forgotten follow-ups. Game changer.',
      author: 'Amanda Rodriguez',
      role: 'Sales Director',
      company: 'Tech Startup',
    },
    {
      quote:
        'The lead routing and qualification automation ensures every rep gets high-quality leads instantly. Our close rate doubled.',
      author: 'James Parker',
      role: 'Head of Sales',
      company: 'SaaS Company',
    },
  ],
}

const faqData = [
  {
    question: 'What sales tasks can N8n automate?',
    answer:
      'N8n can automate lead routing and assignment, lead qualification and scoring, email outreach and follow-up sequences, CRM data entry and updates, meeting scheduling and reminders, proposal and quote generation, deal stage progression, pipeline health monitoring, activity logging (calls, emails, meetings), data enrichment, contract generation, e-signature workflows, revenue forecasting, stale deal alerts, manager escalations, and sales reporting. If a task involves moving data between tools or triggering actions based on criteria, N8n can automate it.',
  },
  {
    question: 'How does N8n integrate with Salesforce and HubSpot?',
    answer:
      'N8n has native integration nodes for both Salesforce and HubSpot CRM. You can create, read, update, and delete records (leads, contacts, deals, tasks) without writing code. We build workflows that sync lead data from forms or ads directly into Salesforce/HubSpot, update deal stages automatically, log all sales activities, trigger email sequences based on CRM events, and pull data for reporting dashboards. Authentication is handled securely via OAuth or API keys.',
  },
  {
    question: 'Can N8n automate email follow-ups for sales?',
    answer:
      'Yes. N8n connects to Gmail, Outlook, SendGrid, and sales engagement platforms like Lemlist and Outreach.io to automate follow-up sequences. When a lead is created, N8n can trigger a personalized email cadence (Day 1: intro, Day 3: value prop, Day 7: case study, Day 10: call to action) that stops automatically if the prospect replies, books a meeting, or becomes disqualified. Each email can be dynamically personalized with contact and company data from your CRM.',
  },
  {
    question: 'How does lead routing automation work?',
    answer:
      'N8n receives new leads from your website, forms, ads, or chatbots. The workflow scores and qualifies the lead based on criteria you define (company size, industry, job title, behavior). Qualified leads are instantly assigned to the right sales rep based on territory, product interest, deal size, or round-robin rotation. The assigned rep receives a Slack message or email notification with lead details and a link to the CRM record. The entire process takes seconds.',
  },
  {
    question: 'Can N8n automate proposal and quote generation?',
    answer:
      'Yes. N8n can pull deal data from your CRM, populate a template (Word, Google Docs, or PandaDoc), generate a customized proposal or quote with dynamic pricing, and send it for e-signature via DocuSign or HelloSign. Once signed, the workflow updates the deal stage in your CRM and notifies your team. This eliminates hours of manual document creation and ensures quotes are accurate and sent immediately.',
  },
  {
    question: 'What is the ROI of sales automation with N8n?',
    answer:
      'Most clients see ROI within 60-90 days. Time savings average 15-25 hours per week per sales team (no more manual CRM updates, data entry, or follow-up tracking). Faster response times improve lead-to-opportunity conversion by 30-50%. Automated follow-ups reduce missed opportunities by 90%. Pipeline visibility improvements lead to better forecasting and deal prioritization. The one-time setup cost is typically recovered within 2-3 months through increased closed revenue.',
  },
  {
    question: 'How long does it take to implement sales automation?',
    answer:
      'Essential packages (5-7 workflows) take 2-3 weeks. Professional packages (12-15 workflows) take 4-6 weeks. Enterprise implementations with complex CRM integrations and custom logic take 6-8 weeks. We work in sprints: Week 1-2 (discovery and design), Week 3-4 (build and test), Week 5 (deploy and train). You see value within the first sprint as workflows go live incrementally.',
  },
  {
    question: 'Can N8n replace Salesforce automation or HubSpot workflows?',
    answer:
      'N8n does not replace Salesforce or HubSpot entirely but extends their capabilities significantly. Many native CRM workflows are limited in scope (e.g., they cannot connect to external tools like Slack, ConvertKit, or custom APIs). N8n orchestrates workflows across your entire tech stack, connecting the CRM with email platforms, meeting schedulers, data enrichment tools, and more. Some clients use N8n to handle cross-platform automation while keeping simple, CRM-only workflows native.',
  },
  {
    question: 'Is N8n good for small sales teams?',
    answer:
      'N8n is excellent for small sales teams because it levels the playing field. With N8n, a 3-person sales team can operate with the efficiency of a 10-person team by automating manual work. Lead routing, follow-ups, and CRM updates happen instantly without hiring additional reps or admins. The cost is a one-time setup fee, not a monthly per-user charge like many SaaS tools. Small teams processing 50-500 leads monthly see massive productivity gains.',
  },
  {
    question: 'What happens if our CRM changes?',
    answer:
      'N8n workflows are modular. If you switch CRMs (e.g., HubSpot to Salesforce), we update the CRM integration nodes but keep the overall workflow logic intact. Most CRM migrations take 1-3 days to reconfigure in N8n, compared to weeks or months of rebuilding native automations. We provide documentation so your team can make simple updates independently, and our support packages cover CRM migration assistance.',
  },
]

const relatedServicesData = [
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
    title: 'Reporting Automation',
    description: 'Automated dashboards, scheduled reports, and KPI tracking.',
    href: '/services/n8n-automation/reporting-automation',
  },
  {
    title: 'Data Pipeline Automation',
    description: 'ETL workflows, data transformation, and database sync.',
    href: '/services/n8n-automation/data-pipeline-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Close more deals with sales automation',
  lead: 'Let&apos;s discuss your sales process and design N8n workflows that eliminate manual work and accelerate your pipeline.',
  submitText: 'Automate Your Sales',
}

export default function SalesAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'N8n Sales Automation Services',
          description:
            'Expert N8n sales automation services. Automate lead qualification, routing, follow-ups, and pipeline management.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/n8n-automation/sales-automation',
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
      <FAQDarkSection title="Sales automation FAQ" items={faqData} />
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
