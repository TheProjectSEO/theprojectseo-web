import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
} from '@/components/service-page-sections'
import { Users, Mail, Target, BarChart3, Building2, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'LinkedIn Ads Management | B2B ABM Advertising | TheProjectSEO',
  description:
    'LinkedIn Ads management for B2B pipeline generation. Account-based marketing, Sponsored InMail, matched audiences, and Insight Tag attribution. Built for enterprise and mid-market buyers.',
  alternates: {
    canonical: '/services/paid-media/linkedin-ads',
  },
  openGraph: {
    title: 'LinkedIn Ads Management | TheProjectSEO',
    description:
      'LinkedIn Ads built for B2B pipeline. ABM targeting, matched audiences from CRM, Sponsored InMail sequences, and revenue attribution to closed deals.',
    url: 'https://theprojectseo.com/services/paid-media/linkedin-ads',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'LinkedIn Ads Management',
  title: 'LinkedIn Ads for',
  accentWord: 'B2B pipeline,',
  titleAfterAccent: 'not brand impressions',
  description:
    'LinkedIn is the only paid channel where you can target by job title, company size, seniority, and industry simultaneously. Most companies waste that precision by running awareness campaigns. We run LinkedIn Ads tied to ABM target lists, CRM data, and closed-deal attribution. Pipeline-first, every campaign.',
  ctaPrimaryText: 'Get a LinkedIn Ads Strategy',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See ABM Services',
  ctaSecondaryHref: '/services/abm',
}

const statsData = [
  { value: '4x', label: 'Higher B2B lead quality vs Google Display' },
  { value: '89%', label: 'B2B marketers use LinkedIn for lead generation' },
  { value: '2x', label: 'Higher conversion rate with matched audiences' },
  { value: '58%', label: 'Lower CPL with Insight Tag retargeting vs cold' },
]

const servicesGridData = {
  subheading: 'LinkedIn Ads Services',
  heading: 'Every LinkedIn format. One pipeline objective.',
  lead: 'LinkedIn gives you more targeting precision than any other B2B channel. The question is whether your campaign structure is built to use it.',
  services: [
    {
      icon: Users,
      title: 'Sponsored Content',
      description:
        'Single image, carousel, and document ads in the LinkedIn feed. The highest-volume format and the most competitive. We design Sponsored Content campaigns with precise audience targeting, creative variations by persona, and A/B testing on headline and image.',
      features: [
        'Single image, carousel, and document ad formats',
        'Persona-specific creative and copy variations',
        'A/B testing framework on headline and visual',
        'Lead Gen Form integration for friction-free conversion',
      ],
    },
    {
      icon: Mail,
      title: 'Sponsored InMail / Message Ads',
      description:
        'InMail reaches your target contacts directly in their LinkedIn inbox. High read rates, high friction, high intent when executed well. We write InMail sequences that read as relevant outreach, not broadcast spam. Targeting by role, seniority, and company.',
      features: [
        'InMail copy that passes the relevance test',
        'Sequence design for multi-touch nurture',
        'Sender personalisation by vertical',
        'Response rate tracking and iteration',
      ],
    },
    {
      icon: Target,
      title: 'Account-Based Marketing (ABM)',
      description:
        'Upload your target account list and hit every decision-maker at every company on that list with coordinated messaging. We build ABM campaigns from CRM exports, match against LinkedIn company data, and layer job function targeting to reach the right titles at the right accounts.',
      features: [
        'CRM account list upload and matching',
        'Job function and seniority layering',
        'Account-level engagement reporting',
        'Coordinated outreach with sales sequence timing',
      ],
    },
    {
      icon: Building2,
      title: 'Matched Audiences',
      description:
        'Contact lists, company lists, website retargeting, and lookalike audiences. Matched audiences consistently outperform broad LinkedIn targeting in both CPL and lead quality. We build and maintain all audience types with regular refresh cycles.',
      features: [
        'Contact list upload from CRM with regular refresh',
        'Insight Tag website audience segmentation',
        'Lookalike audience expansion from best customers',
        'Audience overlap analysis to prevent waste',
      ],
    },
    {
      icon: BarChart3,
      title: 'LinkedIn Insight Tag & Attribution',
      description:
        'The Insight Tag unlocks retargeting, website demographics, and conversion tracking. Most accounts have it installed but not properly configured. We audit the installation, set up conversion events, and connect LinkedIn attribution to CRM pipeline data.',
      features: [
        'Insight Tag audit and correct installation',
        'Conversion event setup and verification',
        'Website demographics report for SEO and content strategy',
        'LinkedIn to CRM pipeline attribution',
      ],
    },
    {
      icon: Zap,
      title: 'Lead Gen Form Optimisation',
      description:
        'LinkedIn Lead Gen Forms pre-fill contact details and keep users on platform. Conversion rates are typically three to four times higher than landing page clicks. We design forms with the right field count, the right offer, and automatic CRM sync.',
      features: [
        'Form field optimisation for completion rate',
        'Offer design (content, demo, consultation)',
        'CRM webhook integration for instant lead delivery',
        'Follow-up sequence timing with sales team',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'ICP and account list. define before you spend',
    description:
      'LinkedIn advertising precision is only valuable if you define who you are targeting before you launch. We spend the first week working through your Ideal Customer Profile, identifying the job titles that matter, the company sizes that convert, and the industries where your win rate is highest. That definition drives every targeting decision.',
  },
  {
    number: '02',
    title: 'Audience build. CRM data into LinkedIn',
    description:
      'We upload your existing CRM contacts and target accounts to LinkedIn Campaign Manager, set up the Insight Tag for retargeting, and build lookalike audiences from your closed-won customers. This audience infrastructure is the foundation. Without it, you are paying for LinkedIn\'s broad demographic targeting, which is expensive and imprecise.',
  },
  {
    number: '03',
    title: 'Campaign launch. persona-specific creative',
    description:
      'We launch campaigns segmented by persona and funnel stage. Different creative for a VP who has never heard of you versus a director who visited your pricing page last week. Each campaign has a clear conversion path: Lead Gen Form for demos, document download for awareness, InMail for direct outreach to named accounts.',
  },
  {
    number: '04',
    title: 'Attribution. connect to pipeline, not just leads',
    description:
      'LinkedIn says it generated 40 leads. Your CRM says 8 of those became qualified opportunities and 2 closed. We connect those datasets so your optimisation decisions are based on revenue impact, not lead volume. Monthly review of campaign performance against pipeline contribution.',
  },
]

const caseStudyData = {
  subheading: 'B2B Pipeline Case',
  heading: 'From 120 LinkedIn leads per month to 18 qualified opportunities.',
  challenge:
    'A B2B SaaS company was generating 120 LinkedIn leads per month at a $45 CPL. The sales team was converting 3-4% of those leads to qualified opportunities. Marketing reported strong lead volume; sales reported poor lead quality. The disconnect was that LinkedIn targeting was set to broad job function categories, generating plenty of leads from people who would never buy.',
  solution:
    'Rebuilt audience targeting using matched audiences from CRM closed-won data. Added company size filter (200-2,000 employees), seniority filter (director and above), and excluded competitor employees. Changed campaign objective from lead generation to website conversion with a lead qualification step. Reduced lead volume by 60% and increased qualified opportunity rate from 3.5% to 15%.',
  results: [
    { metric: 'Qualified opportunity rate', improvement: '15%', timeframe: 'Up from 3.5%' },
    { metric: 'Qualified opportunities per month', improvement: '18', timeframe: 'Up from 4-5' },
    { metric: 'Cost per qualified opportunity', improvement: '-41%', timeframe: 'Despite higher CPL' },
    { metric: 'Pipeline generated per month', improvement: '$180K', timeframe: 'Month 3 average' },
  ],
}

const faqItems = [
  {
    question: 'Is LinkedIn Ads worth the higher CPCs compared to Google?',
    answer:
      'For B2B with a deal size above $5,000, yes. LinkedIn CPCs are 3-5x Google search, but the targeting precision means you are reaching a buying committee at your target accounts, not a general keyword audience. The metric that matters is cost per qualified opportunity, not cost per click. LinkedIn almost always wins that comparison for enterprise and mid-market B2B.',
  },
  {
    question: 'What is the minimum budget for LinkedIn Ads to be effective?',
    answer:
      'LinkedIn has a minimum daily budget of $10 per campaign, but effective B2B campaigns need more room to work. We recommend a minimum of $3,000 per month in ad spend to generate meaningful data volume. Below that, the learning algorithms cannot optimise properly and you will not get statistically reliable data on which audiences convert.',
  },
  {
    question: 'How do you handle LinkedIn Ads if we also want Google Ads?',
    answer:
      'The two channels serve different functions and should be coordinated, not run independently. LinkedIn generates demand and warms up target accounts. Google Ads captures that demand when someone searches after seeing your LinkedIn ad. We manage both channels with a shared audience strategy and unified attribution so you can see how they interact.',
  },
  {
    question: 'Can you target specific companies we are trying to sell into?',
    answer:
      'Yes. This is the ABM play. You give us a list of target accounts, and we upload them to LinkedIn and layer job function and seniority targeting on top. Every decision-maker at every company on your list sees coordinated messaging. We also set up account-level engagement reporting so your sales team knows which accounts are engaging before they reach out.',
  },
  {
    question: 'How does Lead Gen Form performance compare to sending people to a landing page?',
    answer:
      'Typically 3-4x higher conversion rate for Lead Gen Forms because the contact details pre-fill from the LinkedIn profile. The trade-off is lead quality: pre-filled forms have a lower friction bar, so you may get more people submitting who are less committed. We design the form fields and offer to create the right level of friction for your sales process.',
  },
]

/* -------------------------------------------------------------------------- */
/* Process Section */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>How We Work</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from ICP definition to pipeline attribution.
          </Heading>
        </div>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* FAQ Section */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="LinkedIn Ads: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function LinkedInAdsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/linkedin-ads',
          name: 'LinkedIn Ads Management',
          description:
            'LinkedIn Ads management for B2B pipeline generation. Account-based marketing, Sponsored InMail, matched audiences, Lead Gen Form optimisation, and CRM pipeline attribution.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: { '@type': 'Country', name: 'Worldwide' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesGridData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Start Building Pipeline"
        heading="Tell us who you are trying to reach. We will tell you how to reach them on LinkedIn."
        lead="B2B pipeline starts with audience definition, not ad creative. Let us start there."
        benefits={[
          'Free ICP and audience targeting review',
          'LinkedIn Campaign Manager audit for existing accounts',
          'Written strategy proposal within 48 hours',
        ]}
        submitText="Get a LinkedIn Ads Strategy"
      />
      <Footer />
    </main>
  )
}
