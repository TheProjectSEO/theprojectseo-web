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
import { Search, Target, BarChart3, Shield, Layers, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'PPC Account Audit | Wasted Spend Analysis & Opportunity Report | TheProjectSEO',
  description:
    'One-off PPC audit for Google Ads accounts spending $5,000+ per month. Wasted spend analysis, match-type review, negative keyword gap, Quality Score investigation, and conversion tracking validation.',
  alternates: {
    canonical: '/services/paid-media/ppc-audit',
  },
  openGraph: {
    title: 'PPC Account Audit | TheProjectSEO',
    description:
      'PPC audit that finds the 30-40% wasted spend in your Google Ads account. Written action plan with priority ranking. Fixed fee, no retainer required.',
    url: 'https://theprojectseo.com/services/paid-media/ppc-audit',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'PPC Account Audit',
  title: 'Find the',
  accentWord: '30-40% waste',
  titleAfterAccent: 'before adding budget',
  description:
    'The average Google Ads account has 30-40% recoverable waste: wrong match types, thin negative keyword lists, broken conversion tracking, and budget allocated to campaigns that have never driven a qualified lead. Our PPC audit identifies every structural problem and quantifies the wasted spend in dollars, not percentages. Fixed fee. Written report. No retainer required.',
  ctaPrimaryText: 'Book a PPC Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See Google Ads Management',
  ctaSecondaryHref: '/services/paid-media/google-ads',
}

const statsData = [
  { value: '40%', label: 'Average wasted spend found in audited accounts' },
  { value: '5 days', label: 'Audit delivery timeline from access granted' },
  { value: '$5K+', label: 'Minimum monthly spend for meaningful audit scope' },
  { value: '100%', label: 'Written action plan, not just a data dump' },
]

const servicesGridData = {
  subheading: 'Audit Coverage',
  heading: 'Six areas every PPC audit must cover.',
  lead: 'A surface-level audit looks at headline metrics. A structural audit finds the root causes. We go six layers deep.',
  services: [
    {
      icon: Search,
      title: 'Match Type and Search Term Analysis',
      description:
        'Match type mismanagement is the most common source of wasted spend. We pull the full search term report for the past 90 days and categorise every query: should it be added as a keyword, added as a negative, or is the match type wrong for the intent? We estimate the wasted spend from irrelevant query traffic in dollar terms.',
      features: [
        '90-day search term report full analysis',
        'Match type recommendation by keyword cluster',
        'Negative keyword gap identification and list',
        'Estimated monthly waste from match-type issues',
      ],
    },
    {
      icon: AlertTriangle,
      title: 'Negative Keyword Gap Analysis',
      description:
        'Most accounts have negative keyword lists that were set up once and never maintained. We compare your current negative lists against your actual search term data and identify every category of irrelevant queries that should have been excluded but are currently burning budget.',
      features: [
        'Existing negative keyword list audit',
        'Search term categorisation by relevance',
        'Negative keyword gap list (ready to upload)',
        'Estimated monthly waste from negative keyword gaps',
      ],
    },
    {
      icon: Target,
      title: 'Quality Score Investigation',
      description:
        'Quality Score below 6 on core keywords inflates CPC by 40-100%. We audit Quality Score distribution across the account, identify the keywords with below-average expected CTR and landing page experience, and provide specific recommendations for ad copy, keyword insertion, and landing page alignment.',
      features: [
        'Quality Score distribution by campaign and ad group',
        'Below-average component identification',
        'Ad copy recommendation for below-threshold keywords',
        'Landing page alignment gaps per keyword cluster',
      ],
    },
    {
      icon: Shield,
      title: 'Conversion Tracking Validation',
      description:
        'Broken conversion tracking is more common than most advertisers know. We verify that every conversion action fires correctly, check for duplicate tracking, validate that conversion windows are set appropriately for your sales cycle, and confirm that the conversions you are optimising toward are the ones that actually map to revenue.',
      features: [
        'Conversion action audit and deduplication check',
        'Tag implementation verification via Tag Assistant',
        'Conversion window appropriateness review',
        'Revenue vs proxy conversion assessment',
      ],
    },
    {
      icon: Layers,
      title: 'Campaign Structure Review',
      description:
        'Account structure determines performance ceiling. We audit campaign and ad group organisation, keyword-to-ad relevance, ad group size (too many keywords per ad group kills relevance), and the relationship between campaign structure and landing page architecture.',
      features: [
        'Campaign and ad group structure assessment',
        'Keyword-to-ad group relevance scoring',
        'Ad group size and theme analysis',
        'Landing page to keyword alignment gaps',
      ],
    },
    {
      icon: BarChart3,
      title: 'Budget Allocation and Bidding Strategy',
      description:
        'We analyse budget distribution across campaigns against conversion data to identify campaigns that receive budget but generate no conversions, campaigns that are budget-limited during peak hours, and bidding strategies that are not aligned with account conversion volume. We provide specific reallocation recommendations in dollar terms.',
      features: [
        'Budget vs conversion distribution analysis',
        'Budget-limited campaign identification',
        'Bidding strategy appropriateness by campaign',
        'Reallocation recommendation with dollar amounts',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Access and data pull. read-only is fine',
    description:
      'We request read-only viewer access to your Google Ads account. We also ask for Google Analytics 4 read access and Google Search Console if available. We pull 90 days of data minimum: search term reports, auction insights, Quality Score snapshots, conversion action setup, and budget distribution. Access to day one, report delivery in five business days.',
  },
  {
    number: '02',
    title: 'Structural analysis. six audit dimensions',
    description:
      'We work through the six audit dimensions systematically: match types and search terms, negative keyword gaps, Quality Score issues, conversion tracking setup, campaign structure, and budget allocation. Each dimension produces a findings section with specific identified issues, estimated dollar impact, and priority rating.',
  },
  {
    number: '03',
    title: 'Opportunity identification. not just problems',
    description:
      'The second half of the audit looks for opportunities the account is missing: keyword gaps where competitors are running and you are not, audience targeting opportunities not currently activated, ad extension gaps, and competitor conquesting opportunities. We include this section because finding waste is only half the value of a proper audit.',
  },
  {
    number: '04',
    title: 'Written action plan. prioritised and specific',
    description:
      'The audit output is a written report with an executive summary (three to five key findings and estimated monthly impact), a section-by-section analysis, and a prioritised action plan with specific changes to make. We rank every action by estimated impact and implementation effort. You can implement the action plan yourself, hand it to your existing team, or engage us to execute it.',
  },
]

const caseStudyData = {
  subheading: 'PPC Audit Case',
  heading: 'Audit found $6,800/month in recoverable waste. Implemented in two weeks.',
  challenge:
    'A software company was spending $22,000 per month on Google Ads with declining ROAS over three consecutive quarters. Their in-house team had been managing the account for 18 months without a structural review. They believed the issue was competitive pressure increasing CPCs.',
  solution:
    'Completed a five-day PPC audit covering all six dimensions. Found: 1,200 irrelevant search terms generating 31% of impressions from missing negatives, seven campaigns with Quality Score below 5 on core keywords (inflating CPC by estimated 60%), conversion tracking double-counting form submissions (every submit fired twice), and $4,800/month in budget allocated to three campaigns with zero conversions in 90 days.',
  results: [
    { metric: 'Wasted spend identified', improvement: '$6,800/mo', timeframe: 'Across all six dimensions' },
    { metric: 'Conversion tracking duplicates', improvement: '100% fixed', timeframe: 'Implementation week 1' },
    { metric: 'Quality Score improvement', improvement: '+2.3 avg', timeframe: 'After ad copy changes' },
    { metric: 'ROAS improvement from restructure', improvement: '2.4x to 3.8x', timeframe: '60 days post-audit' },
  ],
}

const faqItems = [
  {
    question: 'What is included in the PPC audit deliverable?',
    answer:
      'A written report covering six audit dimensions: match type and search term analysis, negative keyword gap analysis, Quality Score investigation, conversion tracking validation, campaign structure review, and budget allocation analysis. Each section includes specific findings, estimated monthly dollar impact, and priority-ranked recommendations. You also receive a ready-to-upload negative keyword list, a Quality Score improvement brief for below-threshold keywords, and a prioritised action plan summary.',
  },
  {
    question: 'What access do you need to the account?',
    answer:
      'Read-only viewer access to Google Ads. We also request read access to GA4 and Google Search Console if available, which allows us to cross-reference conversion data and organic ranking data against paid performance. We do not need admin or edit access for the audit itself. If you choose to engage us for implementation after the audit, we request standard user access at that point.',
  },
  {
    question: 'How is this different from Google Ads automated recommendations?',
    answer:
      'Google Ads recommendations are designed by Google to increase ad spend. They often recommend expanding match types, increasing budgets, and adding broad match keywords, which tend to increase Google\'s revenue. Our audit is designed to find waste and structural problems that reduce cost. We review the same data from the opposite incentive. We also validate conversion tracking, which Google recommendations never touch, because incorrect conversion data directly benefits Google\'s algorithm.',
  },
  {
    question: 'Can we implement the audit findings ourselves, or do we have to hire you?',
    answer:
      'The audit report is written specifically so your team can implement it without us. The action plan includes specific instructions: which negative keywords to add, which campaigns to restructure, which ad copy changes to make. We do offer implementation as a separate engagement, but there is no obligation. The audit has standalone value regardless of whether you engage us for ongoing management.',
  },
  {
    question: 'What is the minimum account spend for a PPC audit to be worthwhile?',
    answer:
      'We work with accounts spending $5,000 per month or more. Below that threshold, the structural issues are simpler and the dollar impact of waste is lower, making a full six-dimension audit disproportionate to the potential savings. For smaller accounts, we offer a lighter-touch 90-minute review call instead.',
  },
  {
    question: 'How quickly can we expect to see results after implementing the audit?',
    answer:
      'Negative keyword additions and conversion tracking fixes produce results within days. Budget reallocation improvements show within two to three weeks. Quality Score improvements from ad copy changes take four to six weeks as Google re-evaluates expected CTR. Campaign restructures that require bidding algorithm re-learning take six to eight weeks for the full benefit to appear in ROAS data.',
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
            Access to delivery in five business days.
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
          title="PPC audit: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function PPCAuditPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/ppc-audit',
          name: 'PPC Account Audit',
          description:
            'One-off PPC account audit for Google Ads accounts spending $5,000+ per month. Wasted spend analysis, match-type review, negative keyword gap, Quality Score investigation, conversion tracking validation, and written action plan.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: { '@type': 'Country', name: 'Worldwide' },
          offers: {
            '@type': 'Offer',
            description: 'Fixed-fee PPC audit with written report and prioritised action plan. Delivery in 5 business days.',
          },
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
        subheading="Book Your PPC Audit"
        heading="Find out exactly where your budget is going. All of it."
        lead="Fixed fee. Written report. Prioritised action plan. Delivered in five business days from access granted."
        benefits={[
          'Read-only access only. No account changes during audit.',
          'Six-dimension analysis: match types, negatives, Quality Score, tracking, structure, budget',
          'Written action plan you can implement yourself or hand to any team',
        ]}
        submitText="Book a PPC Audit"
      />
      <Footer />
    </main>
  )
}
