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
} from '@/components/service-page-sections'
import {
  Database,
  RefreshCw,
  Users,
  FileText,
  BarChart3,
  Zap,
  CheckCircle,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'N8n CRM Automation Services | Contact Sync, Deal Updates & Multi-CRM Integration | TheProjectSEO',
  description:
    'Expert N8n CRM automation services. Automate contact sync, deal updates, activity logging, data enrichment, and multi-CRM integration. Connect Salesforce, HubSpot, Pipedrive & more.',
  alternates: {
    canonical: '/services/n8n-automation/crm-automation',
  },
  openGraph: {
    title: 'N8n CRM Automation Services | TheProjectSEO',
    description:
      'Automate CRM workflows with N8n. Contact sync, deal updates, activity logging, and multi-CRM integration.',
    url: 'https://theprojectseo.com/services/n8n-automation/crm-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8n CRM Automation Services | TheProjectSEO',
    description:
      'Automate contact sync, deal updates, and activity logging across your CRM platforms.',
  },
}

const heroData = {
  label: 'CRM Automation',
  title: 'Keep your CRM perfectly',
  accentWord: 'synchronized',
  titleAfterAccent: '',
  description:
    'Automate contact sync, deal updates, activity logging, data enrichment, and multi-CRM integration. Eliminate manual data entry and ensure your CRM is always up-to-date.',
  ctaPrimaryText: 'Automate Your CRM',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'All N8n Services',
  ctaSecondaryHref: '/services/n8n-automation',
}

const statsData = [
  { value: '25 hrs/wk', label: 'Time Saved' },
  { value: '-95%', label: 'Data Entry Errors' },
  { value: '100%', label: 'Data Accuracy' },
  { value: 'Real-time', label: 'CRM Updates' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'CRM pain points we solve',
  lead: 'Stop wasting time on manual CRM updates and data entry. Automate your CRM workflows for perfect data integrity.',
  cards: [
    {
      title: 'Manual Data Entry',
      items: [
        '3-4 hours daily on CRM updates',
        'Data entry errors cost deals',
        'Duplicate contact records',
        'Inconsistent data formats',
      ],
    },
    {
      title: 'Multi-CRM Chaos',
      items: [
        'Sales uses Salesforce',
        'Marketing uses HubSpot',
        'Data never syncs',
        'No single source of truth',
      ],
    },
    {
      title: 'Activity Logging',
      items: [
        'Emails not logged to CRM',
        'Calls forgotten after meetings',
        'Manual task creation',
        'Missing activity history',
      ],
    },
    {
      title: 'Data Enrichment',
      items: [
        'Leads missing company data',
        'No firmographic details',
        'Manual enrichment too slow',
        'Incomplete contact records',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete CRM automation solutions',
  lead: 'Automate every aspect of your CRM data management and synchronization.',
  services: [
    {
      icon: RefreshCw,
      title: 'Contact & Lead Sync',
      description: 'Bi-directional sync between CRMs, marketing platforms, and databases. Automatic deduplication and merge rules.',
      features: [
        'Bi-directional CRM sync',
        'Automatic deduplication',
        'Custom field mapping',
        'Real-time updates',
      ],
    },
    {
      icon: Database,
      title: 'Deal & Opportunity Sync',
      description: 'Sync deals across systems, update stages automatically, and trigger workflows based on deal changes.',
      features: [
        'Cross-platform deal sync',
        'Stage progression automation',
        'Deal value tracking',
        'Pipeline visibility',
      ],
    },
    {
      icon: FileText,
      title: 'Activity Logging Automation',
      description: 'Auto-log emails, calls, meetings, and tasks to CRM. Sync calendar events and communication history.',
      features: [
        'Email activity logging',
        'Call tracking',
        'Meeting notes sync',
        'Task automation',
      ],
    },
    {
      icon: Users,
      title: 'Contact Data Enrichment',
      description: 'Enrich contact records with company data, job titles, social profiles, and firmographics via Clearbit, ZoomInfo, Apollo.',
      features: [
        'Company data enrichment',
        'Job title verification',
        'Social profile matching',
        'Firmographic data',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Data Quality & Cleanup',
      description: 'Automated data validation, duplicate detection, standardization, and cleanup workflows.',
      features: [
        'Duplicate detection',
        'Data validation rules',
        'Format standardization',
        'Automated cleanup',
      ],
    },
    {
      icon: Zap,
      title: 'Multi-CRM Orchestration',
      description: 'Connect multiple CRMs (Salesforce, HubSpot, Pipedrive) and keep all systems synchronized in real-time.',
      features: [
        'Multi-CRM sync',
        'Master data management',
        'Conflict resolution',
        'Audit trail',
      ],
    },
    {
      icon: BarChart3,
      title: 'Custom Field Automation',
      description: 'Auto-populate custom fields based on rules, calculations, or external data sources.',
      features: [
        'Calculated fields',
        'Rule-based population',
        'External data lookup',
        'Field dependencies',
      ],
    },
    {
      icon: Lock,
      title: 'CRM Security & Compliance',
      description: 'Automated data retention, GDPR compliance workflows, and audit logging for CRM changes.',
      features: [
        'Data retention policies',
        'GDPR compliance',
        'Change audit logs',
        'Access control automation',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build CRM automation',
  steps: [
    {
      number: '01',
      title: 'CRM Ecosystem Audit',
      description:
        'We analyze your CRM platforms, data flow, and integration needs to identify automation opportunities.',
    },
    {
      number: '02',
      title: 'Data Mapping & Design',
      description:
        'We map fields between systems, design sync logic, and define deduplication and merge rules.',
    },
    {
      number: '03',
      title: 'N8n Workflow Build',
      description:
        'We build N8n workflows for contact sync, deal updates, activity logging, and data enrichment with error handling.',
    },
    {
      number: '04',
      title: 'Testing & Deployment',
      description:
        'We test with real data, validate sync accuracy, and deploy workflows with monitoring dashboards.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Multi-CRM sync: 25 hours saved weekly',
  challenge:
    'A company using both Salesforce (sales team) and HubSpot (marketing team) spent 25 hours weekly manually syncing contacts, deals, and activities between systems. Data was constantly out of sync, causing duplicate records and lost opportunities.',
  solution:
    'We implemented N8n workflows for bi-directional contact and deal sync, automatic deduplication, activity logging from both platforms, data enrichment via Clearbit, and real-time Slack notifications for critical updates. All syncs happen within seconds.',
  results: [
    {
      metric: 'Time Saved',
      improvement: '25 hrs/wk',
      timeframe: 'Manual sync eliminated',
    },
    {
      metric: 'Data Accuracy',
      improvement: '100%',
      timeframe: 'Real-time sync',
    },
    {
      metric: 'Duplicate Records',
      improvement: '-98%',
      timeframe: 'Automatic deduplication',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'CRM platforms we integrate',
  lead: 'We connect N8n with all major CRM systems and data enrichment tools.',
  cards: [
    {
      title: 'CRM Platforms',
      items: ['Salesforce', 'HubSpot CRM', 'Pipedrive', 'Zoho CRM', 'Close'],
    },
    {
      title: 'Data Enrichment',
      items: ['Clearbit', 'ZoomInfo', 'Apollo', 'Hunter.io', 'FullContact'],
    },
    {
      title: 'Communication Tools',
      items: ['Gmail', 'Outlook', 'Slack', 'Microsoft Teams', 'Intercom'],
    },
    {
      title: 'Marketing Platforms',
      items: ['HubSpot Marketing', 'Mailchimp', 'ActiveCampaign', 'Marketo', 'Pardot'],
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Airtable', 'Google Sheets'],
    },
    {
      title: 'Calendar & Tasks',
      items: ['Google Calendar', 'Outlook Calendar', 'Asana', 'Trello', 'Monday.com'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'CRM automation packages',
  tiers: [
    {
      name: 'Essential',
      price: '$3,500',
      description: 'For single CRM automation',
      features: [
        '5-7 core workflows',
        'Contact sync automation',
        'Activity logging',
        'Basic data enrichment',
        'Duplicate detection',
        '1 month support',
      ],
    },
    {
      name: 'Professional',
      price: '$7,500',
      description: 'For multi-CRM environments',
      features: [
        '12-15 advanced workflows',
        'Multi-CRM synchronization',
        'Bi-directional sync',
        'Advanced data enrichment',
        'Custom field automation',
        'Data quality workflows',
        'Team training',
        '3 months support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For complex CRM ecosystems',
      features: [
        'Unlimited workflows',
        '3+ CRM integrations',
        'Master data management',
        'GDPR compliance automation',
        'Custom security rules',
        'Dedicated automation architect',
        'Priority support',
        '12 months support',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What CRM teams say',
  testimonials: [
    {
      quote:
        'N8n saved us 25 hours per week syncing Salesforce and HubSpot. Our data is finally accurate and our teams trust the CRM again.',
      author: 'David Kim',
      role: 'Director of Sales Operations',
      company: 'B2B Software Company',
    },
    {
      quote:
        'The automatic data enrichment and activity logging transformed our CRM. Every contact record is complete and up-to-date.',
      author: 'Rachel Green',
      role: 'VP Operations',
      company: 'Marketing Agency',
    },
    {
      quote:
        'We went from 95% data accuracy to 100% with N8n automation. Duplicate records are a thing of the past.',
      author: 'Tom Anderson',
      role: 'CRM Administrator',
      company: 'Services Firm',
    },
  ],
}

const faqData = [
  {
    question: 'What CRM tasks can N8n automate?',
    answer:
      'N8n can automate contact creation and updates, lead sync between systems, deal/opportunity synchronization, activity logging (emails, calls, meetings), task creation, custom field population, data enrichment, duplicate detection and merging, multi-CRM synchronization, data validation, GDPR compliance workflows, audit logging, record ownership assignment, and reporting data aggregation. Any repetitive CRM task involving data movement or updates can be automated.',
  },
  {
    question: 'Can N8n sync multiple CRMs simultaneously?',
    answer:
      'Yes. N8n excels at multi-CRM orchestration. We build workflows that sync contacts, deals, and activities across Salesforce, HubSpot, Pipedrive, and other CRMs in real-time. You define which system is the master for each data type, and N8n handles bi-directional sync, conflict resolution, and deduplication. This is perfect for companies where sales uses one CRM and marketing uses another.',
  },
  {
    question: 'How does N8n handle CRM duplicate detection?',
    answer:
      'N8n workflows check for duplicates based on email, phone, company name, or custom matching rules before creating records. When a potential duplicate is found, N8n can automatically merge records using your preferred logic (newest data wins, manual review queue, field-by-field precedence), or flag for human review. We use fuzzy matching algorithms for names and addresses to catch duplicates that aren&apos;t exact matches.',
  },
  {
    question: 'Can N8n enrich CRM data automatically?',
    answer:
      'Yes. N8n integrates with data enrichment APIs like Clearbit, ZoomInfo, Apollo, and Hunter.io. When a new contact is created (or an existing one is missing data), N8n automatically fetches company information, job titles, social profiles, firmographics, and email verification. The enriched data is written back to your CRM instantly. This eliminates manual research and ensures complete contact records.',
  },
  {
    question: 'How does activity logging work with N8n?',
    answer:
      'N8n connects to Gmail, Outlook, and calendar systems to automatically log all emails, calls, and meetings to your CRM. When you send an email to a contact, N8n creates an activity record in the CRM with the email content, timestamp, and subject. Calendar meetings are logged as CRM activities with attendees and notes. This ensures a complete communication history without manual logging.',
  },
  {
    question: 'What happens if data conflicts between CRMs?',
    answer:
      'N8n workflows include conflict resolution logic. You define which system has priority for each field (e.g., Salesforce is master for deal stage, HubSpot is master for marketing data). When conflicts occur, N8n applies your rules automatically or flags the conflict for manual review. We also maintain audit logs showing every data change, when it happened, and which system triggered it.',
  },
  {
    question: 'Can N8n automate GDPR compliance for CRMs?',
    answer:
      'Yes. N8n can automate data retention policies, deletion requests, consent management, and audit logging for GDPR compliance. When a contact requests deletion, N8n removes them from all connected systems simultaneously and generates a compliance report. Consent status can be synced across CRMs and marketing platforms, ensuring you never contact someone who opted out.',
  },
  {
    question: 'How long does CRM automation implementation take?',
    answer:
      'Single CRM automation (5-7 workflows) takes 2-3 weeks. Multi-CRM sync projects (12-15 workflows) take 4-6 weeks. Enterprise implementations with complex data mapping and 3+ CRMs take 6-8 weeks. We work incrementally, deploying workflows in phases so you see value quickly. Most clients have critical workflows live within 2 weeks.',
  },
  {
    question: 'Is N8n more cost-effective than native CRM integrations?',
    answer:
      'Yes, especially for multi-CRM environments. Native integrations (e.g., HubSpot-Salesforce connector) cost $300-$1,000/month and often lack flexibility. N8n is a one-time setup cost with no recurring per-sync fees. You can also connect tools that don&apos;t have native integrations. Clients typically save $5,000-$15,000 annually compared to enterprise integration platforms like Workato or Tray.io.',
  },
  {
    question: 'What if our CRM data model changes?',
    answer:
      'N8n workflows are modular and easy to update. If you add custom fields or change your data structure, we update the field mappings in N8n (usually 1-3 hours). Unlike hard-coded integrations that break with every change, N8n&apos;s visual workflow builder makes adjustments fast. We provide documentation so your team can handle simple field mapping changes independently.',
  },
]

const relatedServicesData = [
  {
    title: 'Sales Automation',
    description: 'Automate lead routing, follow-ups, and pipeline management.',
    href: '/services/n8n-automation/sales-automation',
  },
  {
    title: 'Marketing Automation',
    description: 'Automate lead capture, email sequences, and campaign tracking.',
    href: '/services/n8n-automation/marketing-automation',
  },
  {
    title: 'Data Pipeline Automation',
    description: 'ETL workflows, data transformation, and database sync.',
    href: '/services/n8n-automation/data-pipeline-automation',
  },
  {
    title: 'Reporting Automation',
    description: 'Automated dashboards, scheduled reports, and KPI tracking.',
    href: '/services/n8n-automation/reporting-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Perfect CRM synchronization starts here',
  lead: 'Let&apos;s discuss your CRM ecosystem and design N8n workflows that eliminate manual data entry and ensure perfect data accuracy.',
  ctaPrimaryText: 'Automate Your CRM',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'All Automation Services',
  ctaSecondaryHref: '/services/n8n-automation',
}

export default function CRMAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'N8n CRM Automation Services',
          description:
            'Expert N8n CRM automation services. Automate contact sync, deal updates, activity logging, and multi-CRM integration.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/n8n-automation/crm-automation',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection {...processData} />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="CRM automation FAQ" items={faqData} />
      </Container>
      <RelatedServicesSection
        subheading="Related Services"
        heading="Explore more automation solutions"
        services={relatedServicesData}
      />
      <CTASection {...ctaData} />
      <Footer />
    </main>
  )
}
