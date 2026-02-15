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
import { N8nWorkflowVisual } from '@/components/n8n-workflow-visual'
import {
  MessageSquare,
  Users,
  Bell,
  Zap,
  BarChart3,
  CheckCircle,
  AlertTriangle,
  Clock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'N8n Customer Service Automation | Ticket Routing, Auto-Responses & Escalation | TheProjectSEO',
  description:
    'Expert N8n customer service automation services. Automate ticket routing, auto-responses, escalation workflows, CSAT surveys, and knowledge base integration.',
  alternates: {
    canonical: '/services/n8n-automation/customer-service-automation',
  },
  openGraph: {
    title: 'N8n Customer Service Automation | TheProjectSEO',
    description:
      'Automate customer service workflows with N8n. Ticket routing, auto-responses, escalations, and CSAT surveys.',
    url: 'https://theprojectseo.com/services/n8n-automation/customer-service-automation',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'N8n Customer Service Automation | TheProjectSEO',
    description:
      'Automate ticket routing, auto-responses, and escalation workflows with N8n.',
  },
}

const heroData = {
  label: 'Customer Service Automation',
  title: 'Deliver exceptional support with',
  accentWord: 'automated',
  titleAfterAccent: 'workflows',
  description:
    'Automate ticket routing, auto-responses, escalation workflows, CSAT surveys, and knowledge base integration. Respond faster, resolve issues efficiently, and delight customers.',
  ctaPrimaryText: 'Automate Your Support',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'All N8n Services',
  ctaSecondaryHref: '/services/n8n-automation',
}

const statsData = [
  { value: '<5 min', label: 'Response Time' },
  { value: '+40%', label: 'CSAT Score' },
  { value: '-60%', label: 'Resolution Time' },
  { value: '24/7', label: 'Availability' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'Customer service pain points we solve',
  lead: 'Stop losing customers to slow response times and missed tickets. Automate your support workflows for instant engagement.',
  cards: [
    {
      title: 'Slow Response Times',
      items: [
        'Hours to respond to tickets',
        'Customers wait too long',
        'Manual ticket assignment delays',
        'No instant acknowledgment',
      ],
    },
    {
      title: 'Missed Escalations',
      items: [
        'Urgent tickets fall through cracks',
        'No automatic escalation rules',
        'SLA breaches common',
        'Management unaware of issues',
      ],
    },
    {
      title: 'Inefficient Routing',
      items: [
        'Tickets assigned to wrong agents',
        'No skill-based routing',
        'Load balancing manual',
        'Specialists overwhelmed',
      ],
    },
    {
      title: 'Poor Follow-up',
      items: [
        'Satisfaction surveys forgotten',
        'No follow-up on resolutions',
        'Feedback not collected',
        'Improvement opportunities missed',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete customer service automation',
  lead: 'Automate every aspect of your customer support workflow from ticket creation to resolution.',
  services: [
    {
      icon: MessageSquare,
      title: 'Intelligent Ticket Routing',
      description: 'Auto-route tickets to the right agent based on topic, priority, customer tier, language, and agent availability.',
      features: [
        'Skill-based routing',
        'Priority classification',
        'Load balancing',
        'Availability checking',
      ],
    },
    {
      icon: Zap,
      title: 'Auto-Response Templates',
      description: 'Send instant acknowledgment emails, suggest knowledge base articles, and provide expected resolution times automatically.',
      features: [
        'Instant acknowledgments',
        'Knowledge base suggestions',
        'Expected resolution times',
        'Template personalization',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Escalation Workflows',
      description: 'Automatically escalate tickets based on SLA timers, priority levels, keywords, or customer sentiment.',
      features: [
        'SLA-based escalation',
        'Priority-based rules',
        'Keyword triggers',
        'Sentiment analysis',
      ],
    },
    {
      icon: Users,
      title: 'Multi-Channel Support',
      description: 'Unify tickets from email, chat, social media, and phone into a single workflow with consistent responses.',
      features: [
        'Email integration',
        'Chat platform sync',
        'Social media monitoring',
        'Phone system integration',
      ],
    },
    {
      icon: BarChart3,
      title: 'CSAT & Feedback Automation',
      description: 'Automatically send satisfaction surveys after ticket resolution, collect feedback, and alert on negative responses.',
      features: [
        'Post-resolution surveys',
        'Feedback collection',
        'Negative response alerts',
        'NPS tracking',
      ],
    },
    {
      icon: CheckCircle,
      title: 'Knowledge Base Integration',
      description: 'Auto-suggest relevant articles based on ticket content, track which articles resolve issues, and update content.',
      features: [
        'Article suggestions',
        'Resolution tracking',
        'Content effectiveness',
        'Auto-updating',
      ],
    },
    {
      icon: Clock,
      title: 'SLA Monitoring',
      description: 'Track SLA compliance, send alerts before breaches, and escalate tickets nearing deadlines automatically.',
      features: [
        'SLA compliance tracking',
        'Pre-breach alerts',
        'Automatic escalations',
        'Performance dashboards',
      ],
    },
    {
      icon: Bell,
      title: 'Agent Notifications',
      description: 'Notify agents via Slack, email, or SMS for new high-priority tickets, escalations, or approaching SLA deadlines.',
      features: [
        'Multi-channel notifications',
        'Priority alerts',
        'Escalation notifications',
        'SLA warnings',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build support automation',
  steps: [
    {
      number: '01',
      title: 'Support Process Audit',
      description:
        'We analyze your current support workflow, identify bottlenecks, and map out automation opportunities with highest impact.',
    },
    {
      number: '02',
      title: 'Workflow Design',
      description:
        'We design N8n workflows for ticket routing, auto-responses, escalations, SLA monitoring, and feedback collection.',
    },
    {
      number: '03',
      title: 'Integration Setup',
      description:
        'We connect N8n to your helpdesk (Zendesk, Intercom, Freshdesk), CRM, chat platforms, and notification tools.',
    },
    {
      number: '04',
      title: 'Deploy & Train',
      description:
        'We deploy workflows, set up monitoring dashboards, and train your support team on the automated processes.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'SaaS company: 40% CSAT improvement',
  challenge:
    'A SaaS company with 500 monthly support tickets was taking 6+ hours to respond. Tickets were manually assigned, escalations were missed, and customer satisfaction scores were declining. The 5-person support team was overwhelmed.',
  solution:
    'We implemented N8n workflows for intelligent ticket routing based on topic and priority, instant auto-responses with knowledge base articles, SLA-based escalations to managers, automated CSAT surveys, and Slack notifications for urgent tickets.',
  results: [
    {
      metric: 'Response Time',
      improvement: '<5 min',
      timeframe: 'From 6+ hours',
    },
    {
      metric: 'CSAT Score',
      improvement: '+40%',
      timeframe: 'Customer satisfaction',
    },
    {
      metric: 'Resolution Time',
      improvement: '-60%',
      timeframe: 'Faster resolutions',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'Support tools we integrate',
  lead: 'We connect N8n with all major helpdesk and communication platforms.',
  cards: [
    {
      title: 'Helpdesk Platforms',
      items: ['Zendesk', 'Intercom', 'Freshdesk', 'Help Scout', 'Front'],
    },
    {
      title: 'Chat & Messaging',
      items: ['Slack', 'Microsoft Teams', 'Discord', 'WhatsApp', 'Telegram'],
    },
    {
      title: 'CRM & Data',
      items: ['Salesforce', 'HubSpot', 'Pipedrive', 'Airtable', 'Google Sheets'],
    },
    {
      title: 'Communication',
      items: ['Gmail', 'Outlook', 'SendGrid', 'Twilio', 'Postmark'],
    },
    {
      title: 'Knowledge Base',
      items: ['Notion', 'Confluence', 'Document360', 'Helpjuice', 'Zendesk Guide'],
    },
    {
      title: 'Survey Tools',
      items: ['Typeform', 'SurveyMonkey', 'Google Forms', 'Delighted', 'Promoter.io'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'Customer service automation packages',
  tiers: [
    {
      name: 'Simple Workflow',
      price: '$500',
      description: 'One-time setup for basic support automation',
      features: [
        'Single workflow setup',
        'Ticket routing automation',
        'Auto-response templates',
        'Basic escalation rules',
        'CSAT survey automation',
      ],
    },
    {
      name: 'Multi-System',
      price: '$2,500',
      description: 'One-time setup for growing support teams',
      features: [
        'Multi-step workflow design',
        'Intelligent routing',
        'Multi-channel support',
        'SLA monitoring',
        'Knowledge base integration',
        'Advanced escalation logic',
      ],
      featured: true,
    },
    {
      name: 'AI-Powered',
      price: '$5,000',
      description: 'One-time setup with AI capabilities',
      features: [
        'AI-powered ticket routing',
        'Custom routing logic',
        'AI sentiment analysis',
        'Multi-language support',
        'Advanced analytics',
        'Team training included',
      ],
    },
    {
      name: 'Enterprise Orchestration',
      price: 'Custom',
      description: 'For large support organizations',
      features: [
        'Unlimited workflows',
        'Custom routing logic',
        'AI sentiment analysis',
        'Multi-language support',
        'Advanced analytics',
        'Dedicated automation architect',
        'Priority support',
        'SLA guarantee',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What support teams say',
  testimonials: [
    {
      quote:
        "There's not enough room here for me to write about all the amazing things Aditya did for our Workhap website & Marketing team! He's an expert when it comes to everything SEO-related and went above & beyond our initial scope of work. He is someone you can absolutely trust and know has your best interest in mind. 10/10 highly recommend Aditya for all your SEO and marketing needs.",
      author: 'Sho Dewan',
      role: 'CEO',
      company: 'Workhap',
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
        'He helped us with market research, define the right topics along with the content brief and SEO framework. He did an extensive site audit and helped us weed out the loopholes. This helped us scale our traffic and also improved our Google ranking. Aditya was always ready to help and introduced me to a lot of concepts in SEO.',
      author: 'Shubhangi',
      role: 'Content',
      company: 'Adapt.io',
    },
  ],
}

const faqData = [
  {
    question: 'What customer service tasks can N8n automate?',
    answer:
      'N8n can automate ticket routing and assignment, instant auto-response emails, escalation workflows based on SLA or priority, CSAT survey distribution, knowledge base article suggestions, agent notifications via Slack/email, ticket categorization and tagging, SLA compliance monitoring, multi-channel ticket aggregation (email, chat, social), follow-up sequences, customer data enrichment, and reporting. Any repetitive support workflow can be automated.',
  },
  {
    question: 'How does intelligent ticket routing work?',
    answer:
      'N8n analyzes incoming tickets based on keywords, customer tier, topic, language, priority, and agent availability. The workflow applies routing rules you define (e.g., billing issues go to finance team, technical issues to engineers, VIP customers to senior agents) and assigns tickets automatically. Load balancing ensures agents receive equal ticket volumes. If an agent is unavailable, tickets route to the next available specialist.',
  },
  {
    question: 'Can N8n integrate with Zendesk, Intercom, and Freshdesk?',
    answer:
      'Yes. N8n has native integration nodes for Zendesk, Intercom, Freshdesk, Help Scout, and Front. We build workflows that create tickets, update status, add tags, route to agents, fetch ticket history, and send responses. If your helpdesk has an API, N8n can connect via HTTP requests. Most helpdesk integrations take 1-2 days to set up.',
  },
  {
    question: 'How do escalation workflows work?',
    answer:
      'N8n monitors ticket age, priority, and status. When a ticket meets escalation criteria (e.g., open for 4 hours without response, priority set to urgent, contains keyword "angry"), the workflow automatically escalates by notifying a manager via Slack/email, updating ticket priority, adding escalation tags, or reassigning to senior agents. SLA-based escalation prevents breaches by alerting before deadlines.',
  },
  {
    question: 'Can N8n automate CSAT surveys?',
    answer:
      'Yes. When a ticket is marked as resolved, N8n automatically sends a satisfaction survey via email or in-app message using Typeform, SurveyMonkey, or custom forms. Survey responses are logged to the CRM or helpdesk. If a customer gives a low rating, N8n alerts the manager immediately. Survey data aggregates into dashboards showing CSAT trends by agent, topic, or time period.',
  },
  {
    question: 'How does multi-channel support automation work?',
    answer:
      'N8n aggregates tickets from email, live chat (Intercom, Drift), social media (Twitter, Facebook), and phone systems into your helpdesk. Each channel has a webhook or API integration. When a customer reaches out on any channel, N8n creates or updates the ticket, enriches it with customer data from your CRM, applies routing rules, and ensures the agent has full context. This eliminates channel silos.',
  },
  {
    question: 'What is SLA monitoring and how does N8n handle it?',
    answer:
      'SLA (Service Level Agreement) monitoring tracks whether tickets are responded to and resolved within target times (e.g., respond within 1 hour, resolve within 24 hours). N8n workflows calculate time remaining for each ticket, send alerts 30 minutes before SLA breach, escalate tickets approaching deadlines, and generate compliance reports. This ensures your team meets SLA commitments and prevents customer churn.',
  },
  {
    question: 'Can N8n suggest knowledge base articles to customers?',
    answer:
      'Yes. N8n analyzes ticket content using keyword matching or AI, searches your knowledge base (Zendesk Guide, Notion, Confluence) for relevant articles, and includes article links in auto-response emails. If the customer resolves their issue using the article, N8n can auto-close the ticket. We track which articles are most effective at deflecting tickets, helping you improve your knowledge base.',
  },
  {
    question: 'How long does it take to implement support automation?',
    answer:
      'Essential packages (5-7 workflows) take 2-3 weeks. Professional packages (12-15 workflows with multi-channel integration) take 4-5 weeks. Enterprise implementations with custom logic and AI integration take 6-8 weeks. We work incrementally, deploying critical workflows (routing, auto-responses) first, so you see immediate value. Most clients have ticket routing automated within 1 week.',
  },
  {
    question: 'What ROI can we expect from support automation?',
    answer:
      'Most clients see 40-60% reduction in response times, 30-50% increase in CSAT scores, and 20-40% reduction in resolution times. Time savings average 10-20 hours per week per team (no more manual routing or follow-ups). Many teams handle 2-3x more tickets with the same headcount. Improved customer satisfaction reduces churn, and faster resolutions increase retention. ROI typically realized within 60-90 days.',
  },
]

const relatedServicesData = [
  {
    title: 'CRM Automation',
    description: 'Sync contacts, deals, and activities across multiple CRMs.',
    href: '/services/n8n-automation/crm-automation',
  },
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
    title: 'Reporting Automation',
    description: 'Automated dashboards, scheduled reports, and KPI tracking.',
    href: '/services/n8n-automation/reporting-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Automate?',
  heading: 'Deliver exceptional support at scale',
  lead: 'Let&apos;s discuss your customer service needs and design N8n workflows that delight customers and empower your team.',
  submitText: 'Automate Your Support',
}

export default function CustomerServiceAutomationPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'N8n Customer Service Automation Services',
          description:
            'Expert N8n customer service automation services. Automate ticket routing, auto-responses, escalations, and CSAT surveys.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/n8n-automation/customer-service-automation',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<N8nWorkflowVisual />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <TestimonialQuoteSection
        quote="Aditya was brought in as a consultant to help my department improve our SEO practices. His advice was invaluable and he was always on hand to answer questions, offer insights, and he gave us a number of great suggestions for SEO tools that would help us in our day to day SEO content production. I can't recommend Aditya's services highly enough. Very professional and reliable throughout our working relationship."
        author="Frederick Jéquier"
        role="Senior Content Editor"
        company="GoTeamUp"
      />
      <FAQDarkSection title="Customer service automation FAQ" items={faqData} />
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
