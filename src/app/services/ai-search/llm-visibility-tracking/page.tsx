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
import { CheckIcon } from '@/components/check-icon'
import {
  BarChart3,
  Eye,
  TrendingUp,
  AlertCircle,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'LLM Visibility Tracking | Monitor AI Citations Monthly | TheProjectSEO',
  description:
    'Monthly LLM visibility tracking across ChatGPT, Perplexity, Claude, and Gemini. We run structured prompt sets, measure citation frequency, and report share of voice trends for your brand.',
  alternates: {
    canonical: '/services/ai-search/llm-visibility-tracking',
  },
  openGraph: {
    title: 'LLM Visibility Tracking | Monitor AI Citations Monthly | TheProjectSEO',
    description:
      'You cannot manage what you cannot measure. Our monthly LLM visibility tracking tells you exactly where your brand appears across AI systems and where competitors are gaining ground.',
    url: 'https://theprojectseo.com/services/ai-search/llm-visibility-tracking',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'LLM Visibility Tracking',
  title: 'Monthly tracking of your brand across',
  accentWord: 'every major LLM',
  titleAfterAccent: '',
  description:
    'This is a recurring retainer service. Every month, we run structured prompt sets across ChatGPT, Perplexity, Claude, and Gemini, measure how often your brand is cited versus competitors, and deliver a report with trend lines and recommended actions. AI search visibility without measurement is guesswork.',
  ctaPrimaryText: 'Start LLM Tracking',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore All AI Search Services',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '4', label: 'LLMs tracked every month' },
  { value: '50-100', label: 'Prompt sets run per client monthly' },
  { value: 'Monthly', label: 'Reporting cadence with trend data' },
  { value: '6mo', label: 'Typical timeline to establish meaningful trend lines' },
]

const servicesData = {
  subheading: 'What the Tracking Retainer Includes',
  heading: 'Five deliverables every month.',
  services: [
    {
      icon: Eye,
      title: 'Structured Prompt Set Execution',
      description:
        'We design and run 50-100 prompts per client per month across ChatGPT, Perplexity, Claude, and Gemini. Prompt sets cover informational queries, comparison queries, recommendation queries, and brand-direct queries. Each category tells a different story about how AI systems perceive your brand.',
      features: [
        'Custom prompt set design for your category',
        'Four-platform execution monthly',
        'Prompt set updates as your product or category evolves',
        'Consistent methodology for valid trend comparison',
      ],
    },
    {
      icon: BarChart3,
      title: 'Citation Frequency Report',
      description:
        'How often does your brand appear across the prompt set? We report raw citation counts, citation rate percentage, and trend versus last month. The citation frequency report is the headline metric: it tells you whether AI visibility is moving in the right direction.',
      features: [
        'Overall citation rate per LLM',
        'Citation rate by query type',
        'Month-over-month trend lines',
        'Historical archive from program start',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Competitive Share of Voice',
      description:
        'Your citation rate matters more in context. If competitors are cited twice as often, your 20% citation rate is still a losing position. We track 3-5 named competitors monthly and report share of voice: what percentage of total citations in your category go to your brand.',
      features: [
        'Competitive citation rate tracking (up to 5 competitors)',
        'Share of voice calculation by query type',
        'Competitor movement alerts',
        'Trend comparison with commentary',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Citation Accuracy Monitoring',
      description:
        'Being cited is good. Being cited accurately is better. We flag instances where AI systems cite your brand with incorrect information: wrong product descriptions, outdated pricing claims, inaccurate company details. These accuracy issues are fixable with the right content and entity signals.',
      features: [
        'Accuracy review of all brand citations',
        'Misinformation flagging and documentation',
        'Recommended corrections per inaccuracy type',
        'Entity signal fixes for persistent errors',
      ],
    },
    {
      icon: FileText,
      title: 'Monthly Action Report',
      description:
        'Data without action is just cost. Every monthly report closes with a prioritized action list: which content changes would move citation frequency most, which entity signals are weakest, which competitor gains are most urgent to address. The report is designed to drive the next sprint.',
      features: [
        'Prioritized optimization recommendations',
        'Estimated impact per recommendation',
        'Competitive threat assessment',
        'Optional implementation retainer add-on',
      ],
    },
  ],
}

const whatIsTracked = [
  'Brand citation frequency across informational queries',
  'Product or service recommendation appearances',
  'Brand vs competitor share of voice',
  'Citation accuracy and attribute correctness',
  'Emerging competitor threats in AI-generated answers',
  'Query type breakdown: informational, comparison, recommendation',
  'Platform-specific citation rates (ChatGPT vs Perplexity vs Gemini vs Claude)',
  'Citation position: primary source vs secondary mention',
]

const caseStudyData = {
  subheading: 'Tracking in Practice',
  heading: 'How tracking caught a competitor surge before it affected pipeline.',
  challenge:
    'A B2B project management SaaS company started LLM visibility tracking in Q1. Their baseline citation rate was 12% across the prompt set. By month 3, we flagged a competitor (a well-funded new entrant) whose citation rate had climbed from 8% to 31% over the same period. The competitor had published a series of original research pieces and earned coverage in TechCrunch and Forbes. Without the tracking data, the company would not have noticed until it showed up as lost deals.',
  solution:
    'The month 3 report included a specific competitive threat assessment: which content gaps the competitor had exploited, which publications had cited them, and what a counter-program would look like. The company activated an original research piece on project management productivity data, targeted the same publications for coverage, and implemented FAQ schema across their product comparison pages within 6 weeks of the alert.',
  results: [
    { metric: 'Citation Rate by Month 6', improvement: '12% to 38%', timeframe: 'Full prompt set' },
    { metric: 'Competitor Citation Rate', improvement: 'Closed from 31% to 22% gap', timeframe: 'Counter-program effect' },
    { metric: 'Time to Competitive Alert', improvement: '8 weeks', timeframe: 'Before impact on sales pipeline' },
    { metric: 'ROI on Tracking Retainer', improvement: '12x', timeframe: 'Estimated pipeline protected' },
  ],
}

const faqItems = [
  {
    question: 'Why is LLM visibility tracking a retainer rather than a one-time audit?',
    answer:
      'AI search is dynamic. ChatGPT and Perplexity update their retrieval constantly. LLM training data evolves. Competitors publish new content and earn new citations. A one-time audit tells you where you stand on one day. A monthly retainer tells you whether you are gaining or losing ground, catches competitor movements early, and gives you the trend data to know whether optimization work is actually moving the needle. Trend lines require consistent methodology over time. That is the only way to know if interventions worked.',
  },
  {
    question: 'What LLMs do you track?',
    answer:
      'Standard tracking covers ChatGPT (with Browse enabled), Perplexity, Google Gemini, and Claude. We run the same prompt set across all four monthly. Additional platforms (Microsoft Copilot, Meta AI) can be added as the market warrants. Each LLM is tracked separately because citation patterns differ in meaningful ways: Perplexity cites open web sources heavily; ChatGPT Browse weights Bing authority; Gemini draws from Google index signals; Claude projects from training data.',
  },
  {
    question: 'How are the prompt sets designed?',
    answer:
      'We design prompt sets with your category team at program start. A typical set of 75 prompts covers: 20 informational queries about your domain (what your buyers research before they buy), 20 comparison queries (how you stack up against specific competitors), 20 recommendation queries (who should I use for X?), and 15 brand-direct queries (tell me about [company name]). The set gets reviewed quarterly and updated as your product or market evolves.',
  },
  {
    question: 'How long before we see useful trend data?',
    answer:
      'Month 1 establishes baseline. Month 2 gives you the first data point. By month 3 you can see directional movement. Six months of consistent tracking gives you statistically meaningful trend lines that you can use to evaluate whether specific optimization initiatives worked. We are transparent from the start: the first two months are baseline-building, not optimization proof. The value compounds from month 3 onward.',
  },
  {
    question: 'Can we add optimization work on top of tracking?',
    answer:
      'Yes. The tracking retainer is designed to be used standalone or as the measurement layer for an active optimization program. Many clients start with tracking only to build the baseline, then add AEO or entity SEO work once they know which gaps are most urgent. Others run tracking alongside active optimization from month one. We scope both options and recommend based on where you are in your AI search maturity.',
  },
  {
    question: 'What does the monthly report look like?',
    answer:
      'A standard report is 8-12 pages: executive summary with headline metrics, citation frequency charts per LLM, competitive share of voice chart, accuracy flag summary, and a prioritized action table with estimated impact per recommendation. We deliver it in the first week of every month covering the prior month. Clients get a 30-minute debrief call with the tracking analyst to walk through findings and agree on next steps.',
  },
]

/* -------------------------------------------------------------------------- */
/* What Gets Tracked Section */
/* -------------------------------------------------------------------------- */

function WhatIsTrackedSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Subheading>Measurement Scope</Subheading>
          <Heading as="h2" className="mt-2">
            Eight dimensions of AI search visibility, measured every month.
          </Heading>
          <Lead className="mt-6">
            AI search visibility is not one number. It is a set of signals that tell different parts of the story. We track all eight.
          </Lead>
          <div className="mt-12 grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
            {whatIsTracked.map((item, i) => (
              <div key={i} className="bg-paper p-6 flex items-start gap-4">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-1" />
                <p className="text-sm text-slate">{item}</p>
              </div>
            ))}
          </div>
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
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="LLM visibility tracking frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function LLMVisibilityTrackingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/llm-visibility-tracking',
          name: 'LLM Visibility Tracking',
          description:
            'Monthly LLM visibility tracking across ChatGPT, Perplexity, Claude, and Gemini. Structured prompt sets, citation frequency measurement, and competitive share of voice reporting.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          isPartOf: {
            '@type': 'Service',
            name: 'AI Search Optimization Services',
            url: 'https://theprojectseo.com/services/ai-search',
          },
          serviceType: 'Recurring monthly retainer',
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
      <ServicesGrid {...servicesData} />
      <WhatIsTrackedSection />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Start Measuring AI Visibility"
        heading="Get your first LLM citation baseline in 30 days."
        lead="We set up your prompt set, run the first round across all four LLMs, and deliver a baseline report within 30 days. From there, the monthly retainer keeps your finger on the pulse of AI search."
        benefits={[
          'Custom prompt set design for your category',
          'Baseline report across 4 LLMs in 30 days',
          'Monthly trend tracking from month 2 onward',
        ]}
        submitText="Start LLM Visibility Tracking"
      />
      <Footer />
    </main>
  )
}
