import type { Metadata } from 'next'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
  ProcessSection,
} from '@/components/service-page-sections'
import { TrendingUp, Calculator, Target, BarChart3, GitCommit, FileSpreadsheet } from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'SEO Forecasting Services | Traffic & Revenue Projections | TheProjectSEO',
  description:
    'SEO forecasting that outputs real revenue projections, not keyword volume estimates. We build custom forecast models in Python on BigQuery. Traffic x CR x AOV = Revenue applied to every keyword cluster.',
  alternates: {
    canonical: '/services/analytics/seo-forecasting',
  },
  openGraph: {
    title: 'SEO Forecasting Services | Traffic & Revenue Projections | TheProjectSEO',
    description:
      'Custom Python forecast models that show exactly what winning target rankings is worth to your business. No tool exports, no gut-feel projections.',
    url: 'https://theprojectseo.com/services/analytics/seo-forecasting',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'SEO Forecasting',
  title: 'What is this ranking actually',
  accentWord: 'worth?',
  description:
    'Every SEO pitch claims traffic growth. Very few can tell you what that traffic is worth in dollars before you spend a single dollar on content. We build custom SEO forecast models in Python that apply one core formula to every keyword cluster: Forecasted Traffic x Conversion Rate x Revenue-per-Conversion = Estimated Revenue. The output is a projection your CFO can approve, not a keyword volume estimate your team has to translate.',
  ctaPrimaryText: 'Get a Revenue Forecast',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Analytics Services',
  ctaSecondaryHref: '/services/analytics',
}

const statsData = [
  { value: '3x', label: 'Average forecast accuracy vs. tool estimates' },
  { value: '30d', label: 'Delivery for standard forecast' },
  { value: '100%', label: 'Python-built, not SEO tool exports' },
  { value: '$30K', label: 'Avg monthly revenue surfaced per forecast model' },
]

const servicesData = {
  subheading: 'What We Forecast',
  heading: 'Six forecast outputs for different business decisions.',
  services: [
    {
      icon: TrendingUp,
      title: 'Traffic Opportunity Sizing',
      description:
        'How much traffic is available for your target keyword set across positions 1 through 20, and how much you can actually capture based on your domain strength and current position distribution.',
      features: [
        'Position-by-position CTR modelling using GSC actual data',
        'Keyword clustering by intent and topic',
        'Cannibalization risk flagging before you start',
        'Monthly traffic projection at target positions',
      ],
    },
    {
      icon: Calculator,
      title: 'Revenue Impact Model',
      description:
        'The Backlinko-cited formula: Forecasted Traffic x Conversion Rate x Revenue-per-Conversion = Estimated Revenue, applied to every keyword cluster. Real numbers, not relative estimates.',
      features: [
        'Actual conversion rate from your GA4 data, not industry benchmarks',
        'Average order value or deal value from your CRM',
        'Three scenarios: conservative (60% of target), base, aggressive (120%)',
        'Monthly and quarterly revenue projection tables',
      ],
    },
    {
      icon: Target,
      title: 'Keyword Cluster Prioritization',
      description:
        'Not all rankings are worth the same effort. We rank your target keyword clusters by revenue-per-ranking-point: the expected revenue gain for each position improvement, weighted by the difficulty of achieving it.',
      features: [
        'Difficulty-adjusted ROI per keyword cluster',
        'Quick-win cluster identification (positions 11 to 20)',
        'Content investment required per cluster',
        'Time-to-rank estimates based on historical velocity data',
      ],
    },
    {
      icon: BarChart3,
      title: 'Competitive Gap Forecast',
      description:
        'Your competitors are ranked somewhere today. We model what happens to your traffic and revenue if you close the ranking gap on the top 10 keywords where they currently outrank you.',
      features: [
        'Competitor position tracking for shared keyword universe',
        'Traffic share modelling by keyword',
        'Revenue at-risk from competitor gains',
        'Overtake timeline by content investment level',
      ],
    },
    {
      icon: GitCommit,
      title: 'Content ROI Forecast',
      description:
        'Before commissioning a content piece, model what it is worth. We estimate the traffic and revenue value of ranking for the target keyword cluster before you spend on writing, editing, and design.',
      features: [
        'Per-article revenue projection before production',
        'Break-even analysis (content cost vs. traffic value)',
        'Expected ranking timeline from publication',
        'Priority queue sorted by revenue-per-dollar-invested',
      ],
    },
    {
      icon: FileSpreadsheet,
      title: 'Forecast vs. Actuals Tracking',
      description:
        'A forecast is only useful if you measure it. We build the tracking layer that compares your monthly actuals against the model so you know whether your SEO investment is performing to plan.',
      features: [
        'Monthly forecast vs. actuals dashboard in BigQuery',
        'Variance explanation: ranking miss vs. CTR miss vs. conversion miss',
        'Model recalibration quarterly based on new actuals',
        'Executive summary for budget review cycles',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Gather your baseline data',
    description:
      'We pull three inputs: current GSC data (click-through rates at each position for your actual keywords), your GA4 conversion rate data, and your average deal or order value. If you do not have reliable GA4 conversion tracking, we note that gap and work with conservative industry benchmarks until it is fixed. No model is better than its inputs, and we are upfront about data quality.',
  },
  {
    number: '02',
    title: 'Build the keyword universe',
    description:
      'We define the full set of keywords worth forecasting: your current ranking keywords, near-page-one keywords (positions 11 to 30), and high-value target keywords where competitors rank but you do not. Each keyword gets a search volume, current position, target position, and difficulty score from Ahrefs. The universe typically contains 200 to 2,000 keywords depending on site size.',
  },
  {
    number: '03',
    title: 'Run the forecast model in Python',
    description:
      'Our Python model applies position-curve CTR rates (derived from your own GSC data where volume exists, supplemented by Backlinko benchmarks where it does not) to each keyword at the target position. The output is a traffic projection. That traffic projection multiplies against your conversion rate and revenue-per-conversion to produce the revenue estimate. Every calculation is documented and auditable.',
  },
  {
    number: '04',
    title: 'Deliver the forecast document and tracking setup',
    description:
      'You receive a Google Sheets workbook with the full model (reviewable by your team), a one-page executive summary for board or budget use, and a BigQuery view that tracks actuals against the forecast each month. We walk you through the assumptions and the sensitivity levers: which inputs, if wrong, would most affect the projection.',
  },
]

const caseStudyData = {
  subheading: 'Forecast in Practice',
  heading: 'How a B2B SaaS client used forecasting to justify a 3x content budget increase.',
  challenge:
    'The marketing director at a B2B SaaS company needed to double the content budget but had no data to justify the ask. Leadership was skeptical of SEO as a channel. Existing reporting showed traffic trends but could not answer the question: what is this traffic actually worth to revenue?',
  solution:
    'We built a keyword universe of 340 target clusters, pulled their actual GA4 conversion rates by landing page type, and applied their ACV of $18,000 per customer. The forecast model showed that moving 12 keyword clusters from positions 15 to 25 into the top 5 would generate an estimated 1,200 additional monthly sessions at a 1.8% conversion rate, producing 21 additional trials per month. At a 20% trial-to-paid rate and $18,000 ACV, the forecast output was $75,000 per month in incremental pipeline.',
  results: [
    { metric: 'Incremental monthly pipeline identified in forecast', improvement: '$75K', timeframe: 'At current conversion rates' },
    { metric: 'Content budget increase approved based on model', improvement: '3x', timeframe: 'From $8K to $24K per month' },
    { metric: 'Forecast accuracy at 6-month check-in', improvement: '88%', timeframe: 'Actual pipeline within 12% of projection' },
    { metric: 'Keyword clusters moved into top 5', improvement: '9/12', timeframe: 'First 6 months post-model' },
  ],
}

const faqItems = [
  {
    question: 'How is this different from the forecasting built into Ahrefs or SEMrush?',
    answer:
      'Tool-based forecasts use their own CTR curves (industry averages) and their own traffic estimates, which frequently differ from your actual GSC data by 30 to 60%. Our models use your actual GSC click-through rates at each position for your domain. We also connect to your actual conversion rate data from GA4 and your actual revenue-per-customer from your CRM. The resulting forecast is calibrated to your specific business, not to an average e-commerce or SaaS company.',
  },
  {
    question: 'What data do you need to build a forecast?',
    answer:
      'We need three things: Search Console access (at least 6 months of data, 12+ months is better), GA4 access with conversion events properly configured, and your average order value or average contract value. If your GA4 conversion tracking is broken or incomplete, we flag it and either use conservative benchmarks or fix the tracking first. A forecast built on bad conversion data is worse than no forecast.',
  },
  {
    question: 'How accurate are SEO forecasts?',
    answer:
      'Honest answer: within 15 to 25% of actuals at 6 months for clients where the underlying data is clean. The biggest sources of variance are algorithm changes that shift CTR curves, ranking velocity that differs from historical patterns, and conversion rate changes on the landing pages. We document our assumptions explicitly so you can identify which variable drove any variance. We also recalibrate the model quarterly against actuals.',
  },
  {
    question: 'Can you forecast for a new site with no existing data?',
    answer:
      'Yes, but the confidence band widens. For new sites, we use industry-average CTR curves from the Backlinko dataset, competitor conversion rate proxies from industry reports, and conservative traffic estimates. The output is labeled as a market-opportunity forecast rather than a site-specific forecast. It is useful for investment planning but should not be used for quarterly revenue commitments.',
  },
  {
    question: 'What is the deliverable format?',
    answer:
      'A Google Sheets workbook with the full model and all inputs documented, a one-page executive summary designed for a board or budget presentation, and a BigQuery view that auto-updates monthly with your actual performance against the projection. We also hold a walkthrough session where we explain every assumption and how to stress-test the model.',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="SEO forecasting questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function SeoForecastingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics/seo-forecasting',
          name: 'SEO Forecasting',
          description:
            'Custom Python SEO forecast models that output traffic and revenue projections by keyword cluster. Applies the Traffic x CR x AOV = Revenue formula with your actual data.',
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
          mainEntity: faqItems.slice(0, 4).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection
        subheading="How We Build Forecasts"
        heading="Four steps from data to revenue projection."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to See Your Revenue Opportunity?"
        heading="Book a forecast scoping call."
        lead="We will tell you in 30 minutes whether we have enough data to build a reliable model and what the range of your opportunity looks like before you commit."
        benefits={[
          'Free opportunity sizing in the discovery call',
          'Full forecast delivered within 30 days',
          'Model remains yours, fully editable in Google Sheets',
        ]}
        submitText="Book the Scoping Call"
      />
      <Footer />
    </main>
  )
}
