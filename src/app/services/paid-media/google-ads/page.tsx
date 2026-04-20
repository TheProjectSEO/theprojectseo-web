import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
} from '@/components/service-page-sections'
import { Search, BarChart3, Target, ShoppingBag, Layers, Database } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google Ads Management Services | Search, PMax, Shopping | TheProjectSEO',
  description:
    'Google Ads management built on BigQuery data infrastructure. Search, Performance Max, Shopping, and Display campaigns optimised against revenue data, not platform-reported conversions.',
  alternates: {
    canonical: '/services/paid-media/google-ads',
  },
  openGraph: {
    title: 'Google Ads Management | TheProjectSEO',
    description:
      'We manage Google Ads campaigns and warehouse spend data in BigQuery alongside GA4 and GSC. You get revenue-level attribution, not just platform conversions.',
    url: 'https://theprojectseo.com/services/paid-media/google-ads',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Google Ads Management',
  title: 'Google Ads managed',
  accentWord: 'against revenue,',
  titleAfterAccent: 'not ROAS',
  description:
    'Platform ROAS is a good number to know. It is a poor number to optimise against. We connect your Google Ads account to BigQuery, join spend data with your CRM, and find the twelve keywords that actually drive closed deals. Then we build the account around those twelve.',
  ctaPrimaryText: 'Get a Google Ads Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See Paid + SEO Integration',
  ctaSecondaryHref: '/services/paid-media/paid-search-seo-integration',
}

const statsData = [
  { value: '40%', label: 'Average wasted spend found in audits' },
  { value: '3.1x', label: 'Typical ROAS improvement at 90 days' },
  { value: '54%', label: 'Cost-per-qualified-lead reduction' },
  { value: '18.06%', label: 'CTR when ad + organic listing both appear' },
]

const servicesGridData = {
  subheading: 'Google Ads Service Coverage',
  heading: 'Every Google Ads product type. One connected strategy.',
  lead: 'Google Ads has four distinct product lines that require different management approaches. We manage all four with campaign structures that prevent cannibalisation and budget waste.',
  services: [
    {
      icon: Search,
      title: 'Search Campaigns',
      description:
        'The highest-intent traffic source in digital advertising. We build search campaigns with exact match and phrase match foundations, systematic negative keyword expansion, and ad copy tested against organic CTR data from GSC.',
      features: [
        'Match type architecture (exact, phrase, broad controlled)',
        'Ad copy based on GSC query performance data',
        'Negative keyword list management at account level',
        'Ad strength optimisation without surrendering control',
      ],
    },
    {
      icon: Layers,
      title: 'Performance Max',
      description:
        'Performance Max requires careful asset group architecture or it wastes budget. We structure PMax campaigns with clean audience signals, specific asset groups by product category, and brand exclusions to prevent cannibalisation of search campaigns.',
      features: [
        'Asset group design by product/service category',
        'Audience signal build from first-party CRM data',
        'Brand term exclusion to protect search campaigns',
        'Placement report monitoring and exclusions',
      ],
    },
    {
      icon: ShoppingBag,
      title: 'Shopping Campaigns',
      description:
        'Shopping campaign performance lives or dies by feed quality and bidding architecture. We audit and fix product feeds, structure Standard Shopping alongside PMax with clear priority rules, and optimise by product margin rather than revenue.',
      features: [
        'Product feed audit and title optimisation',
        'Standard Shopping and PMax co-existence strategy',
        'Bidding by product margin category',
        'Merchant Center issue resolution',
      ],
    },
    {
      icon: Target,
      title: 'Display and Remarketing',
      description:
        'Display is a reach and recall tool, not a conversion tool. We use it for remarketing to qualified visitors and for brand awareness at the top of the funnel, with clear audience segmentation and frequency caps.',
      features: [
        'Remarketing audience segmentation by intent stage',
        'Frequency capping to prevent ad fatigue',
        'Placement targeting and exclusion lists',
        'Dynamic remarketing for ecommerce',
      ],
    },
    {
      icon: Database,
      title: 'BigQuery Data Pipeline',
      description:
        'We build a daily Google Ads to BigQuery pipeline that connects your ad spend data to GA4 sessions and CRM records. This gives you revenue-level attribution that survives GA4 sampling and platform discrepancies.',
      features: [
        'Daily Google Ads API export to BigQuery',
        'GA4 session and conversion join',
        'CRM closed-deal attribution layer',
        'Looker Studio dashboard on your data',
      ],
    },
    {
      icon: BarChart3,
      title: 'Conversion Tracking Audit',
      description:
        'Most Google Ads accounts have broken or duplicated conversion tracking. We audit your current setup, remove duplicate events, implement server-side conversion imports from your CRM, and validate that what you are optimising for matches what actually matters.',
      features: [
        'Conversion action audit and deduplication',
        'Enhanced conversions implementation',
        'Offline conversion import from CRM',
        'Google Tag Manager audit for ad tags',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Week 1. audit what you have',
    description:
      'We review your current account structure, match types, negative keyword coverage, conversion tracking setup, and spend distribution. In most accounts spending over $5,000 per month, we identify $1,500-3,000 in recoverable waste in the first audit session before touching a single bid.',
  },
  {
    number: '02',
    title: 'Week 2-3. build the data infrastructure',
    description:
      'We set up the BigQuery pipeline connecting Google Ads to your GA4 and CRM data. This step takes longer than most agencies want to spend on it. It is also the step that makes every subsequent optimisation decision better, because you are optimising against revenue data instead of platform conversions.',
  },
  {
    number: '03',
    title: 'Week 3-4. restructure the account',
    description:
      'With clean attribution data showing which campaigns and keywords actually drive closed deals, we restructure the account. This typically means collapsing 80% of the existing campaigns into a smaller, better-structured set and rebuilding bidding strategy from scratch using the revenue signal.',
  },
  {
    number: '04',
    title: 'Month 2+. systematic optimisation',
    description:
      'Weekly bid reviews, fortnightly negative keyword expansion, monthly creative refresh, and quarterly strategy review aligned to your SEO content calendar. We share a standing dashboard and a monthly written summary with specific numbers, changes made, and rationale.',
  },
]

const caseStudyData = {
  subheading: 'Account Restructure Case',
  heading: 'From 1.4x ROAS to 3.1x in 90 days. No budget increase.',
  challenge:
    'An industrial equipment company was running Google Ads with a 1.4x ROAS. Their agency reported strong conversion numbers, but the sales team said paid leads were low-quality. The disconnect came from optimising against Google-reported conversions instead of CRM-qualified leads.',
  solution:
    'Connected Google Ads to BigQuery alongside Salesforce data. Mapped ad clicks through to qualified opportunities and closed deals, not GA4 events. Found that broad match campaigns drove 44% of spend and 6% of revenue. Rebuilt the account around exact-match branded and competitor terms, with phrase match for product-specific queries. Added 1,800 negative keywords in the first two weeks.',
  results: [
    { metric: 'ROAS at 90 days', improvement: '3.1x', timeframe: 'Same monthly budget' },
    { metric: 'Wasted spend recovered', improvement: '$4,200/mo', timeframe: 'First 30 days' },
    { metric: 'Qualified lead volume', improvement: '+67%', timeframe: 'Month 3 vs baseline' },
    { metric: 'Cost per qualified lead', improvement: '-54%', timeframe: 'Month 2 vs baseline' },
  ],
}

const faqItems = [
  {
    question: 'Do you need access to our Google Ads account or do you manage it separately?',
    answer:
      'We request manager-level access to your existing Google Ads account. We do not create a new account. All campaigns, historical data, and conversion history stay with you. If you ever leave, you retain full ownership of everything.',
  },
  {
    question: 'How long does account restructuring take before we see results?',
    answer:
      'The audit and data infrastructure setup takes two to three weeks. The account restructure takes one more week. Performance improvements typically show within 30 days of restructuring, with the clearest signal at 60-90 days when the bidding algorithms have had time to learn the new conversion signals.',
  },
  {
    question: 'We are already ranking organically for some keywords. Should we still bid on them?',
    answer:
      'The data says yes for branded terms and competitive navigational queries. Moz research shows total CTR for a query rises from 5.66% to 18.06% when both an ad and an organic listing appear. But for informational queries where you rank in position one, the incremental value of a paid listing is much lower. We build a keyword-by-keyword matrix that shows where paid reinforces organic versus where it wastes budget.',
  },
  {
    question: 'What is your approach to Performance Max campaigns?',
    answer:
      'PMax requires tighter control than Google defaults suggest. We build PMax with clean audience signals sourced from your CRM, asset groups structured by product category rather than campaign-level, and brand exclusions to prevent PMax from cannibalising your search campaigns. We also monitor the placement report weekly and add exclusions for low-quality display placements.',
  },
  {
    question: 'Can you manage Google Ads if we already have an in-house team?',
    answer:
      'Yes. We work in a variety of models: full management, strategy and audit with your team executing, or a data infrastructure and attribution layer while your team runs campaigns. We define the scope clearly in the proposal so there is no overlap or confusion about who owns what.',
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
            Four weeks to a restructured account.
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
          title="Google Ads management: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function GoogleAdsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/google-ads',
          name: 'Google Ads Management Services',
          description:
            'Google Ads management across Search, Performance Max, Shopping, and Display. Data warehoused in BigQuery for revenue-level attribution. Wasted spend audit in week one.',
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
        subheading="Start With an Audit"
        heading="We will find the waste before we spend a dollar more."
        lead="Most accounts have 30-40% recoverable waste. We find it in week one, before any restructuring begins."
        benefits={[
          'Free 30-minute Google Ads account review',
          'Written wasted spend estimate within 48 hours',
          'No retainer required to start',
        ]}
        submitText="Get a Google Ads Audit"
      />
      <Footer />
    </main>
  )
}
