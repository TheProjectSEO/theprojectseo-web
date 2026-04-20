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
import { BarChart3, PieChart, TrendingUp, Share2, FileText, RefreshCw } from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'SEO Reporting Services | Board-Ready SEO Dashboards | TheProjectSEO',
  description:
    'Board-ready SEO reports built on pipeline contribution, share-of-voice, and keyword momentum. Not rank-tracker screenshots. Automated weekly data pulls, executive dashboards, and competitive delta reporting.',
  alternates: {
    canonical: '/services/analytics/seo-reporting',
  },
  openGraph: {
    title: 'SEO Reporting Services | Board-Ready SEO Dashboards | TheProjectSEO',
    description:
      'SEO reports your leadership team can read without a glossary. We design the reporting layer, automate the data pull, and deliver the story.',
    url: 'https://theprojectseo.com/services/analytics/seo-reporting',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'SEO Reporting',
  title: 'Reports that show',
  accentWord: 'pipeline,',
  titleAfterAccent: 'not just positions',
  description:
    'The average SEO report shows keyword rankings, organic sessions, and a traffic trend chart. None of those tell your CFO whether SEO is worth the investment. We build reporting that answers the question your board is actually asking: how much pipeline did organic generate this quarter, and is it growing?',
  ctaPrimaryText: 'Build Your Reporting Stack',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Analytics Services',
  ctaSecondaryHref: '/services/analytics',
}

const statsData = [
  { value: '4hr', label: 'Saved per week on manual report builds' },
  { value: '100%', label: 'Automated data pulls, zero manual exports' },
  { value: '15+', label: 'Clients on weekly automated reporting' },
  { value: '3', label: 'Report formats: exec, team, and technical' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Six reporting components that replace rank-tracker screenshots.',
  services: [
    {
      icon: BarChart3,
      title: 'Executive SEO Dashboard',
      description:
        'A single-page Looker Studio dashboard showing organic pipeline contribution, share-of-voice against top three competitors, and keyword momentum score. Designed for a 90-second read by a CMO or CEO who does not want to scroll through tables.',
      features: [
        'Organic pipeline vs. paid pipeline vs. direct pipeline comparison',
        'Month-over-month and quarter-over-quarter trend lines',
        'Top 10 pages by organic revenue contribution',
        'Alert indicators when a key metric falls below threshold',
      ],
    },
    {
      icon: Share2,
      title: 'Share-of-Voice Reporting',
      description:
        'Share-of-voice measures the percentage of total search impressions for your target keyword set that your domain captures. It is a leading indicator: SOV gains today become traffic gains in 90 days.',
      features: [
        'SOV tracked weekly across your full target keyword universe',
        'Competitor SOV comparison: who is gaining, who is losing',
        'SOV by keyword intent cluster (top-of-funnel vs. bottom-of-funnel)',
        'SOV trend correlated with ranking position changes',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Keyword Momentum Scoring',
      description:
        'Not all ranking changes are equally important. A keyword moving from position 12 to 9 has higher revenue impact than the same keyword moving from 40 to 37. Momentum scoring weights changes by revenue relevance.',
      features: [
        'Weekly position change data from GSC and Ahrefs',
        'Revenue-weighted momentum score per keyword cluster',
        'Quick-win identification: keywords 1 position from a CTR step change',
        'Declining keyword alerts before traffic loss materializes',
      ],
    },
    {
      icon: PieChart,
      title: 'Competitive Delta Reporting',
      description:
        'What changed in your competitive landscape this week? Which competitor gained ground on your highest-value keywords, and what content did they publish to do it?',
      features: [
        'Top 10 competitor position changes vs. your positions',
        'New competitor content identified weekly',
        'Keyword gaps: queries where competitors rank, you do not',
        'Action items: which competitor gains need a response',
      ],
    },
    {
      icon: FileText,
      title: 'Weekly Team Report',
      description:
        'The internal report your SEO team uses to stay aligned and prioritize work. Different from the executive dashboard. More data, more granularity, same automated delivery.',
      features: [
        'Full keyword position table with week-over-week changes',
        'Page-level traffic and engagement metrics',
        'Technical issue tracker: new crawl errors or indexation drops',
        'Content performance: new posts ranked, traffic gained',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Automated Report Delivery',
      description:
        'We wire the reporting stack to auto-deliver every Monday morning. No one manually exports a CSV or copies numbers into a slide deck. The report lands in Slack or email with context already written.',
      features: [
        'Slack or email delivery at scheduled time every week',
        'Automated narrative: what changed and why it matters',
        'Anomaly flagging: unusual drops or spikes with likely cause',
        'PDF export for board packs on monthly cadence',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Audit your current reporting state',
    description:
      'We start by reviewing what your team currently produces: what format, what data sources, how long it takes to build, and who reads it. Most teams have at least one report that takes two or more hours to compile weekly and gets skimmed in two minutes. That is the report we automate first.',
  },
  {
    number: '02',
    title: 'Define the metrics that match your business model',
    description:
      'The right metrics depend on your business. An e-commerce company needs organic revenue by category. A B2B SaaS company needs organic pipeline by lead source. A marketplace needs organic GMV contribution. We map your SEO metrics to your business model before designing a single dashboard.',
  },
  {
    number: '03',
    title: 'Build the data pipeline and dashboard',
    description:
      'We connect your data sources (GSC, GA4, Ahrefs, CRM if applicable), build the BigQuery tables, and design the Looker Studio or Google Sheets report. Every metric has a definition written into the dashboard so no one has to ask what it means.',
  },
  {
    number: '04',
    title: 'Automate delivery and train the team',
    description:
      'We configure the scheduled delivery, write the Slack or email integration, and run a 45-minute handover session with whoever owns reporting. The session covers how to read the report, what to do when a metric moves, and how to add or modify metrics as priorities change.',
  },
]

const caseStudyData = {
  subheading: 'Reporting in Practice',
  heading: 'How automated SEO reporting changed the budget conversation for a B2B services firm.',
  challenge:
    'An SEO executive at a B2B professional services firm spent six hours every Friday compiling a monthly SEO report that pulled data from four different tools, formatted it in PowerPoint, and emailed it to six stakeholders who each had different questions. The report covered traffic and rankings. It did not connect to revenue. Leadership treated SEO as a cost center.',
  solution:
    'We built an automated reporting stack: GSC data in BigQuery joined to Salesforce opportunity data, a Looker Studio executive dashboard with organic pipeline as the lead metric, and a weekly Slack digest delivered Monday at 8am with the top three insights automatically written. The six-hour monthly process became a weekly five-minute review of a report that already existed.',
  results: [
    { metric: 'Hours per month saved on report production', improvement: '24', timeframe: 'From 6 hours weekly to zero' },
    { metric: 'Organic pipeline visibility achieved', improvement: '100%', timeframe: 'First time leadership saw organic revenue' },
    { metric: 'SEO budget increase after first quarter of pipeline reporting', improvement: '2.2x', timeframe: 'From $6K to $13K per month' },
    { metric: 'Stakeholders who now read the weekly report', improvement: '11', timeframe: 'Up from 6 who skimmed the old one' },
  ],
}

const faqItems = [
  {
    question: 'What is wrong with standard SEO reports?',
    answer:
      'Standard SEO reports show organic sessions, keyword rankings, and sometimes impressions. None of these tell a business leader whether SEO is generating revenue. The problem is not the metrics themselves. it is that they are disconnected from business outcomes. A good SEO report starts with pipeline or revenue contribution and works backward to the traffic and keyword data that explains it.',
  },
  {
    question: 'What data sources does the reporting stack use?',
    answer:
      'The core sources are Google Search Console (clicks, impressions, positions by URL and query), GA4 (sessions, events, conversions by source and landing page), and Ahrefs (competitive position data and share-of-voice). For clients with CRM integration, we also connect Salesforce or HubSpot pipeline data to organic attribution. All sources are joined in BigQuery before surfacing in dashboards.',
  },
  {
    question: 'How is share-of-voice calculated?',
    answer:
      'Share-of-voice for a keyword set is your domain\'s total impressions for that keyword set divided by the total estimated impressions available across positions 1 through 10, expressed as a percentage. We calculate this weekly using GSC impression data and Ahrefs rank data for competitors. A rising SOV against a flat traffic trend usually means your rankings are improving on keywords that do not yet drive volume. it is the early-warning metric for traffic gains 60 to 90 days out.',
  },
  {
    question: 'Can you take over reporting from an existing agency or freelancer?',
    answer:
      'Yes. We request access to whatever existing data sources and report formats exist, review them, identify what is worth keeping, and redesign from there. Most transition projects take four to six weeks from access grant to first automated delivery. We run old and new reports in parallel for the first two months so stakeholders can calibrate against familiar formats before fully switching.',
  },
  {
    question: 'What is keyword momentum scoring?',
    answer:
      'Keyword momentum scoring is a composite metric we build to prioritize reporting attention. It combines three factors: the magnitude of a recent position change, the revenue relevance of the keyword cluster (how close to conversion intent), and the CTR sensitivity at the current position (a move from position 10 to 9 has higher CTR impact than a move from 25 to 24). The output is a ranked list of keyword movements worth attention each week, sorted by business impact rather than raw position change.',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="SEO reporting questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function SeoReportingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics/seo-reporting',
          name: 'SEO Reporting Services',
          description:
            'Board-ready SEO reporting built on pipeline contribution, share-of-voice, and keyword momentum. Automated weekly delivery, executive dashboards, and competitive delta tracking.',
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
        subheading="How We Build Reporting Stacks"
        heading="Four steps from spreadsheets to automated dashboards."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Automate Your SEO Reporting?"
        heading="Let's audit your current reporting and design something better."
        lead="We start by reviewing what you have now. Most clients have their first automated dashboard live within three weeks."
        benefits={[
          'Free audit of your current SEO reporting in the discovery call',
          'First automated report delivered within 21 days',
          'No lock-in: your data, your dashboards, your ownership',
        ]}
        submitText="Book the Reporting Audit"
      />
      <Footer />
    </main>
  )
}
