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
import { MapPin, Shield, Phone, BarChart3, Star, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Local Services Ads (LSA) Setup and Management | TheProjectSEO',
  description:
    'Google Local Services Ads setup, Google Guarantee badge application, and ongoing lead management. Pay per lead, not per click. Built for home services, legal, healthcare, and local service businesses.',
  alternates: {
    canonical: '/services/paid-media/google-local-services-ads',
  },
  openGraph: {
    title: 'Google Local Services Ads Management | TheProjectSEO',
    description:
      'LSA setup and management for local service businesses. Google Guarantee badge, cost-per-lead model, and lead dispute management. Different from PPC, better economics for local services.',
    url: 'https://theprojectseo.com/services/paid-media/google-local-services-ads',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Google Local Services Ads',
  title: 'Pay per',
  accentWord: 'lead, not',
  titleAfterAccent: 'per click',
  description:
    'Google Local Services Ads appear above all standard PPC results and organic listings. They carry the Google Screened or Google Guaranteed badge, which raises call and booking rates by a measured margin. The key point: you pay when a customer calls or messages, not when they click. That economic model changes the ROI calculation for local service businesses entirely.',
  ctaPrimaryText: 'Set Up LSA for My Business',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Paid Media Services',
  ctaSecondaryHref: '/services/paid-media',
}

const statsData = [
  { value: '#1', label: 'LSA ads appear above all PPC and organic results' },
  { value: 'CPL', label: 'Cost-per-lead model, not cost-per-click' },
  { value: '$2K', label: 'Google Guarantee covers customer claims up to $2,000' },
  { value: '3x', label: 'Higher call rate with Google Guaranteed badge vs standard PPC' },
]

const servicesGridData = {
  subheading: 'LSA Services',
  heading: 'Setup, verification, and ongoing management.',
  lead: 'Google Local Services Ads require business verification, background checks, and licence verification before the badge appears. We handle the entire process.',
  services: [
    {
      icon: Shield,
      title: 'Google Guarantee Badge Setup',
      description:
        'The Google Guarantee badge requires business verification: background checks, licence verification, and insurance documentation. We manage the verification process, gather required documents, and follow up with Google on approval status. Most verifications complete in two to four weeks.',
      features: [
        'Business verification document checklist',
        'Background check coordination for qualified verticals',
        'Licence and insurance documentation submission',
        'Google Screened vs Google Guaranteed determination',
      ],
    },
    {
      icon: MapPin,
      title: 'Service Area and Category Setup',
      description:
        'LSA performance depends heavily on service area definition and category selection. Too broad and you spend budget on leads outside your service area. Too narrow and you miss available volume. We map your actual service geography against Google\'s available service categories and match types.',
      features: [
        'Service area mapping to zip codes and radius',
        'Primary and secondary category selection',
        'Job type definition and matching',
        'Seasonal service type management',
      ],
    },
    {
      icon: Phone,
      title: 'Lead Management and Dispute',
      description:
        'LSA charges for leads that may not qualify as legitimate contacts. Google allows lead disputes for wrong numbers, solicitations, and out-of-area calls. We monitor your lead feed, identify disputable leads, and submit disputes promptly. Most successful disputes generate credit within 72 hours.',
      features: [
        'Weekly lead feed review for dispute eligibility',
        'Dispute submission with supporting documentation',
        'Credit tracking and budget adjustment',
        'Lead quality trend reporting by service type',
      ],
    },
    {
      icon: Star,
      title: 'Review Management for LSA',
      description:
        'LSA ranking is heavily influenced by review count and rating. Google LSA reviews come from Google Business Profile but display separately in the LSA unit. We build a systematic review collection process for post-job follow-up and help maintain the rating threshold that keeps your ad competitive.',
      features: [
        'Post-job review request sequence',
        'GBP review monitoring and response',
        'Review velocity targets by service category',
        'Rating threshold maintenance strategy',
      ],
    },
    {
      icon: BarChart3,
      title: 'Budget Optimisation',
      description:
        'LSA uses weekly budget limits and a target CPL bidding model. We set budgets based on your capacity to handle leads (not just your willingness to spend) and monitor the CPL against your average job value. For seasonal businesses, we build budget schedules that match lead volume to capacity.',
      features: [
        'Weekly budget calculation based on lead capacity',
        'CPL target setting against average job value',
        'Seasonal budget scheduling',
        'Performance reporting vs standard PPC equivalent',
      ],
    },
    {
      icon: Zap,
      title: 'LSA Plus Standard PPC',
      description:
        'LSA and standard Google Ads serve different searchers and different stages of the decision process. We manage both to cover the full SERP: LSA for high-intent immediate-need callers, standard PPC for researching buyers who want to compare options before calling. The two campaigns do not compete; they complement.',
      features: [
        'LSA and PPC SERP coverage strategy',
        'Budget allocation between channels',
        'Unified lead attribution across both',
        'Service category coverage gap analysis',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Eligibility check. confirm LSA is available for your category',
    description:
      'LSA is not available in every service category or geography. We start with a category and location eligibility check. Available categories include HVAC, plumbing, electrical, legal services, financial planning, home cleaning, pest control, healthcare, and several others. We confirm availability and determine whether Google Guarantee or Google Screened applies to your business type.',
  },
  {
    number: '02',
    title: 'Verification. the process most businesses underestimate',
    description:
      'Verification requires business licence documentation, insurance certificates, and background check consent for owners and employees in some categories. This step takes two to four weeks and requires active follow-up with Google. We manage the document collection and submission and track verification status. Incomplete documentation is the most common reason verification stalls.',
  },
  {
    number: '03',
    title: 'Account setup. service area, categories, and budget',
    description:
      'Once verified, we set up the LSA account with your correct service areas (specific zip codes or radius from your location), primary and secondary service categories, job types, and an initial weekly budget calibrated to your lead-handling capacity. We also connect the account to your Google Business Profile for review integration.',
  },
  {
    number: '04',
    title: 'Ongoing management. lead review, disputes, and optimisation',
    description:
      'Weekly lead feed review to identify dispute-eligible leads, monthly budget review against lead quality data, and quarterly category review to ensure you are capturing all available LSA categories for your services. We provide monthly reporting on CPL, lead volume, dispute recovery, and review growth.',
  },
]

const caseStudyData = {
  subheading: 'Home Services LSA Case',
  heading: 'From $85 CPL on standard PPC to $42 CPL on LSA for the same service category.',
  challenge:
    'An HVAC company was spending $6,000 per month on Google Ads for HVAC installation and repair. Average CPL was $85. Conversion rate from call to booked job was 35%. The company had a Google Business Profile with 47 reviews but had never set up Local Services Ads, which had become available in their market six months earlier.',
  solution:
    'Completed Google Guarantee verification (four-week process, including background checks for the owner and two technicians). Set up LSA with service area matching actual dispatch radius. Connected to GBP for review syndication. Set initial weekly budget at $600 (based on their team\'s capacity to handle 15 leads per week). Implemented post-job review request sequence that added 23 new reviews in 60 days.',
  results: [
    { metric: 'LSA cost per lead', improvement: '$42', timeframe: 'vs $85 standard PPC' },
    { metric: 'Total monthly lead volume', improvement: '+41%', timeframe: 'Same total budget' },
    { metric: 'Review count growth', improvement: '+23 reviews', timeframe: '60 days' },
    { metric: 'Lead dispute credits recovered', improvement: '$340/mo', timeframe: 'Average month 2-4' },
  ],
}

const faqItems = [
  {
    question: 'Which industries qualify for Google Local Services Ads?',
    answer:
      'Available categories include home services (HVAC, plumbing, electrical, roofing, cleaning, pest control, landscaping, locksmith, garage door), healthcare (dentists, primary care), legal (personal injury, real estate, estate planning), financial (financial advisor, tax specialist), and a growing list of professional services. Eligibility varies by geography. We run an eligibility check as the first step for any new LSA client.',
  },
  {
    question: 'How long does Google Guarantee verification take?',
    answer:
      'The verification process typically takes two to four weeks. The most common delays are incomplete insurance documentation, background check processing time for multiple employees, and licence verification in states with complex contractor licensing. We manage the process and follow up with Google on your behalf. Some categories have faster verification; legal and financial services often take longer due to additional credential checks.',
  },
  {
    question: 'Can we dispute leads that are not relevant or are clearly wrong numbers?',
    answer:
      'Yes. Google allows disputes for wrong numbers, solicitation calls, automated messages, calls about services you do not offer, and calls outside your service area. We review your lead feed weekly and submit disputes for eligible leads with supporting notes. Dispute credits are typically applied to your account within 72 hours. In a well-managed account, dispute recovery covers 10-15% of monthly spend.',
  },
  {
    question: 'Should we run LSA instead of standard Google Ads, or alongside?',
    answer:
      'Alongside, in most cases. LSA captures high-intent immediate-need callers who want a vetted business with a trust badge. Standard PPC captures researching buyers who are comparing options and want to visit a website before calling. The two formats serve different searcher states and do not materially cannibalise each other. We manage both with a shared budget view and clear CPL targets per channel.',
  },
  {
    question: 'How does LSA ranking work?',
    answer:
      'Google LSA ranking is based on review count and rating, responsiveness (speed and rate of responding to leads), proximity to the searcher\'s location, and business hours relative to when the search happens. The ad budget determines eligibility to show, but does not directly determine rank the way Google Ads bidding does. This is why review management and lead response speed are critical to LSA performance.',
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
            From eligibility check to live badge in four stages.
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
          title="Google Local Services Ads: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function GoogleLSAPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/google-local-services-ads',
          name: 'Google Local Services Ads Setup and Management',
          description:
            'Google LSA setup, Google Guarantee badge application, verification management, lead dispute handling, and ongoing budget optimisation for local service businesses.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: { '@type': 'Country', name: 'United States' },
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
        subheading="Get the Google Guarantee Badge"
        heading="LSA verification is the hardest part. We handle it."
        lead="Most businesses stall in the verification step. We manage the process from document collection to approval."
        benefits={[
          'Free LSA eligibility check for your category and location',
          'Verification document checklist provided immediately',
          'Managed process from submission to badge live',
        ]}
        submitText="Set Up LSA for My Business"
      />
      <Footer />
    </main>
  )
}
