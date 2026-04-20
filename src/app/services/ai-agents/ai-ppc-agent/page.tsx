import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Heading, Subheading, Lead } from '@/components/text'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
} from '@/components/service-page-sections'
import {
  TrendingUp,
  Search,
  FileText,
  MinusCircle,
  Target,
  BarChart2,
  AlertCircle,
  DollarSign,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI PPC Agent | Autonomous Google Ads Optimization | TheProjectSEO',
  description:
    'Deploy an AI PPC agent that runs daily bid adjustments, mines negative keywords, discovers new search terms, and A/B tests ad copy. Approval gates on spend changes above 20%. Built on Claude Agent SDK.',
  alternates: {
    canonical: '/services/ai-agents/ai-ppc-agent',
  },
  openGraph: {
    title: 'AI PPC Agent | Autonomous Google Ads Optimization | TheProjectSEO',
    description:
      'An autonomous Google Ads agent that optimizes bids daily, mines negatives, and tests ad copy. Human approval required on spend changes above 20%.',
    url: 'https://theprojectseo.com/services/ai-agents/ai-ppc-agent',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI PPC Agent | TheProjectSEO',
    description:
      'Autonomous Google Ads optimization: daily bid adjustments, keyword discovery, negative mining, and ad copy testing.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                  */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI PPC Agent',
  title: 'Google Ads that optimizes',
  accentWord: 'itself',
  titleAfterAccent: 'every day',
  description:
    'Most PPC managers check campaigns twice a week. Auctions run every second. Our AI PPC Agent monitors performance continuously, adjusts bids daily based on conversion patterns, mines the search terms report for new opportunities and wasted spend, and rotates ad copy based on CTR signals. Your team approves strategy. The agent handles execution.',
  ctaPrimaryText: 'Deploy the PPC Agent',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Agents',
  ctaSecondaryHref: '/services/ai-agents',
}

const statsData = [
  { value: 'Daily', label: 'Bid optimization cadence' },
  { value: '-31%', label: 'Average CPA reduction at 90 days' },
  { value: '20%', label: 'Spend change approval threshold' },
  { value: '~18hrs', label: 'Monthly PPC management time redirected' },
]

const servicesData = {
  subheading: 'What the Agent Manages',
  heading: 'Every lever in your Google Ads account, on a daily cycle.',
  lead: 'The agent covers the full optimization surface of a Google Ads account. Not just bids. Campaign structure, audience signals, query-level decisions, and copy performance all feed into a unified daily optimization pass.',
  services: [
    {
      icon: TrendingUp,
      title: 'Daily Bid Optimization',
      description:
        'Each morning the agent pulls 30-day conversion data by device, hour, and audience segment. It calculates target CPA variance by campaign and adjusts manual bids or target CPA/ROAS settings within your defined budget envelope. Bid changes are logged with rationale.',
      features: [
        'Device bid modifier adjustments',
        'Hour-of-day performance weighting',
        'Audience segment bid layering',
        'Campaign-level CPA variance tracking',
      ],
    },
    {
      icon: Search,
      title: 'New Keyword Discovery',
      description:
        'Weekly analysis of the search terms report surfaces high-intent queries triggering impressions but not captured as exact or phrase match keywords. The agent drafts new keyword candidates with match type recommendations and estimated volume, ready for one-click approval.',
      features: [
        'Search term intent classification',
        'Match type recommendations per query',
        'Volume and competition estimates via Google Ads API',
        'Weekly keyword candidate report',
      ],
    },
    {
      icon: MinusCircle,
      title: 'Negative Keyword Mining',
      description:
        'Irrelevant queries drain budget silently. The agent scans the search terms report daily for queries below a quality threshold: wrong intent, wrong geography, branded competitor terms, and informational queries landing on bottom-of-funnel pages. Negatives are staged for batch approval.',
      features: [
        'Daily irrelevant query identification',
        'Campaign-level and account-level negative staging',
        'Brand protection for competitor terms',
        'Intent mismatch detection by landing page',
      ],
    },
    {
      icon: FileText,
      title: 'Ad Copy A/B Testing',
      description:
        'The agent monitors RSA asset performance at the headline and description level. Low-performing assets get flagged for replacement. New copy variants are generated using Claude, grounded in your brand voice file, and tested systematically. Not rotated randomly.',
      features: [
        'RSA asset performance scoring',
        'Brand-voice-grounded copy generation',
        'Systematic variant rotation schedule',
        'CTR lift tracking per asset change',
      ],
    },
    {
      icon: Target,
      title: 'Audience Signal Optimization',
      description:
        'Performance Max and Smart campaigns rely on audience signals to find buyers. The agent monitors which audience segments are converting and adjusts signal weights quarterly, feeding new in-market and custom intent segments from your CRM data.',
      features: [
        'Audience segment conversion analysis',
        'CRM-sourced custom intent audiences',
        'Signal weight adjustment recommendations',
        'Performance Max asset group monitoring',
      ],
    },
    {
      icon: BarChart2,
      title: 'Quality Score Monitoring',
      description:
        'Quality Score affects position and cost per click. The agent tracks QS changes weekly across all active keywords, identifies keywords with expected CTR below average, and surfaces landing page relevance issues by comparing keyword-to-landing-page semantic alignment.',
      features: [
        'Weekly QS change tracking across all keywords',
        'Below-average CTR identification',
        'Landing page relevance scoring',
        'Ad relevance gap analysis',
      ],
    },
    {
      icon: AlertCircle,
      title: 'Anomaly Detection and Alerts',
      description:
        'The agent monitors for spend spikes, CPA outliers, impression share drops, and conversion tracking gaps. Anomalies trigger Slack alerts within 30 minutes of detection. No more discovering a tracking break a week after it happened.',
      features: [
        'Spend spike detection within 30 minutes',
        'Conversion tracking gap alerts',
        'Impression share cliff notifications',
        'CPA outlier flagging with context',
      ],
    },
    {
      icon: DollarSign,
      title: 'Budget Pacing Management',
      description:
        'Budgets that exhaust early miss afternoon traffic. Budgets that underspend signal misalignment. The agent monitors daily pacing against monthly targets and adjusts daily budget limits to smooth delivery without manual intervention.',
      features: [
        'Daily pacing against monthly targets',
        'Underspend and overspend alerts',
        'Campaign priority rebalancing',
        'End-of-month budget recovery tactics',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Account audit and baseline',
    description:
      'We audit your current Google Ads account structure, conversion tracking setup, and historical performance. We identify which campaigns have reliable conversion data (required for the agent to optimize), flag tracking gaps, and define the baseline CPA and ROAS the agent will work against.',
  },
  {
    number: '02',
    title: 'Approval gate configuration',
    description:
      'Before any autonomous action runs, we define the decision boundary with you: which bid changes require approval, what the spend threshold is, which campaigns are in supervised mode. This is documented in the agent configuration and is adjustable without redeployment.',
  },
  {
    number: '03',
    title: 'Supervised run period (2 weeks)',
    description:
      'The agent runs in observation mode for two weeks. Every action it would have taken is logged but not executed. You review the log, confirm the judgment is sound, and we fine-tune any thresholds before going live. This step eliminates surprises.',
  },
  {
    number: '04',
    title: 'Live deployment and weekly review',
    description:
      'The agent goes live with full autonomy within the configured decision boundary. Weekly reviews cover what actions ran, what was escalated, CPA and ROAS trends, and any threshold adjustments needed. Monthly you receive a full optimization report.',
  },
]

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'B2B SaaS reduces cost per trial signup by 31% in 90 days.',
  challenge:
    'A B2B SaaS company was spending $24,000 per month on Google Ads managed by a part-time contractor who checked the account twice a week. Bids were stale, the search terms report had not been reviewed in six weeks, and 23% of spend was going to irrelevant queries. Their CPA was $340, well above their $220 target.',
  solution:
    'We deployed the AI PPC Agent across all five campaigns. In the first week, the agent mined 847 negative keywords from six weeks of unreviewed search terms. Bids were reset based on 90-day conversion data by hour and device. The agent began daily optimization cycles. In week three, it surfaced 94 new keyword candidates from search terms with three or more conversions, 61 of which the client approved. Ad copy testing began in week four with twelve new RSA variants.',
  results: [
    {
      metric: 'Cost per trial signup',
      improvement: '-31%',
      timeframe: 'From $340 to $235 over 90 days',
    },
    {
      metric: 'Wasted spend recovered',
      improvement: '$3,840/mo',
      timeframe: 'From negative keyword mining in week one',
    },
    {
      metric: 'New converting keywords added',
      improvement: '61',
      timeframe: 'From search terms report analysis',
    },
    {
      metric: 'PPC management hours redirected',
      improvement: '~22hrs/mo',
      timeframe: 'Contractor now focused on landing page strategy',
    },
  ],
}

const faqItems = [
  {
    question: 'What bid strategies does the agent support?',
    answer:
      'The agent works with Manual CPC, Target CPA, Target ROAS, and Maximize Conversions strategies. For accounts using smart bidding, it monitors performance signals and adjusts target CPA or ROAS inputs based on rolling conversion data rather than letting Google Smart Bidding operate without oversight. For manual campaigns, it calculates bid adjustments at keyword level using 30-day conversion rate and average CPC data.',
  },
  {
    question: 'What happens when the agent wants to make a spend change above 20%?',
    answer:
      'The agent sends a Slack message with the proposed change, the rationale (e.g., "Campaign X CPA is 45% above target over the last 14 days; recommending budget reduction from $800/day to $550/day"), and a 4-hour approval window. If approved, the change executes. If no response within 4 hours, the change is held and retried the following day. You can also reply to cancel permanently.',
  },
  {
    question: 'Does this replace a PPC manager?',
    answer:
      'It replaces the execution layer of PPC management: daily bid pulls, search term review, negative mining, and copy rotation. What remains and gets more attention: landing page strategy, offer testing, campaign architecture decisions, audience strategy, and competitive positioning. Most clients find their PPC resource becomes more strategic rather than redundant.',
  },
  {
    question: 'How does the agent handle Performance Max campaigns?',
    answer:
      'Performance Max has limited levers: audience signals, asset groups, budget, and ROAS targets. The agent monitors asset group performance, flags underperforming creative, recommends audience signal updates from CRM data, and adjusts ROAS targets based on rolling 30-day performance. It cannot access the Search Themes feature without explicit configuration, which we set up during onboarding.',
  },
  {
    question: 'What conversion tracking setup is required?',
    answer:
      'The agent requires at minimum one primary conversion action with reliable data: 15 or more conversions in the last 30 days for the agent to make statistically sound bid decisions. If your account has fewer conversions, we configure the agent in a more conservative mode using micro-conversions and manual bid adjustments with wider approval gates.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Process Section                                                            */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Deployment Process</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from account audit to live optimization.
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
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                */
/* -------------------------------------------------------------------------- */

export default function AIPPCAgentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-agents/ai-ppc-agent',
          name: 'AI PPC Agent',
          description:
            'Autonomous Google Ads optimization agent running daily bid adjustments, keyword discovery, negative mining, and ad copy testing. Built on Claude Agent SDK with Google Ads API MCP integration.',
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
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.slice(0, 5).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <div className="bg-cream py-24">
        <Container>
          <FAQAccordion
            title="AI PPC agent frequently asked questions"
            items={faqItems}
          />
        </Container>
      </div>
      <CTAFormSection
        subheading="Ready to Deploy?"
        heading="Get your free Google Ads audit."
        lead="We review your account structure, conversion tracking, and last 90 days of spend before recommending the right agent configuration. No obligation."
        submitText="Deploy the PPC Agent"
      />
      <Footer />
    </main>
  )
}
