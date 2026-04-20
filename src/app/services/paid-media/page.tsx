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
  RelatedServicesSection,
} from '@/components/service-page-sections'
import {
  Target,
  TrendingUp,
  BarChart3,
  Users,
  Search,
  Play,
  Globe,
  MapPin,
  Zap,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Paid Media Management Services | Google Ads, LinkedIn, Meta | TheProjectSEO',
  description:
    'Full-funnel paid media management: Google Ads, LinkedIn Ads, Meta Ads, YouTube, Bing, and Google LSA. Data warehoused in BigQuery. Strategy grounded in real conversion data, not platform defaults.',
  alternates: {
    canonical: '/services/paid-media',
  },
  openGraph: {
    title: 'Paid Media Management Services | TheProjectSEO',
    description:
      'Paid media management built on real data infrastructure. We warehouse Google Ads into BigQuery, cross-reference with GA4 and GSC, and bid against revenue. Not vanity metrics.',
    url: 'https://theprojectseo.com/services/paid-media',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Paid Media Management',
  title: 'Paid media that works',
  accentWord: 'with',
  titleAfterAccent: 'your organic strategy',
  description:
    'Most paid media agencies bid toward platform metrics: ROAS, CTR, Quality Score. We bid toward revenue. Our Google Ads data flows into the same BigQuery warehouse as your GA4, GSC, and CRM data. Every bid decision is informed by what actually converts, not what Google recommends.',
  ctaPrimaryText: 'Get a Paid Media Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See Google Ads Services',
  ctaSecondaryHref: '/services/paid-media/google-ads',
}

const statsData = [
  { value: '3.2x', label: 'Average ROAS improvement, month 3' },
  { value: '18.06%', label: 'Ad CTR when paired with organic ranking' },
  { value: '40%', label: 'Typical wasted spend found in PPC audits' },
  { value: '6', label: 'Paid channels managed under one roof' },
]

const servicesGridData = {
  subheading: 'Our Paid Media Services',
  heading: 'Six channels. One connected strategy.',
  lead: 'Managed separately, each channel is a cost center. Managed together with your organic program, each channel compounds the others.',
  services: [
    {
      icon: Search,
      title: 'Google Ads Management',
      description:
        'Search, Performance Max, Shopping, Display, and YouTube in-stream. Our flagship paid offering. We ingest your Google Ads spend data into BigQuery daily and run every bid decision against actual revenue attribution.',
      features: [
        'Search campaign architecture and match-type strategy',
        'Performance Max asset group structure',
        'Shopping feed optimization and bidding',
        'Negative keyword management at scale',
      ],
    },
    {
      icon: Users,
      title: 'LinkedIn Ads Management',
      description:
        'B2B pipeline generation through Sponsored Content, Sponsored InMail, and Dynamic Ads. Account-based targeting using matched audiences, lookalike expansion, and the LinkedIn Insight Tag.',
      features: [
        'ABM audience build from CRM lists',
        'Sponsored InMail sequence architecture',
        'Lead Gen Form optimization',
        'Pipeline attribution to closed revenue',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Meta Ads Management',
      description:
        'Full-funnel Facebook and Instagram advertising for DTC, ecommerce, and B2C service brands. Prospecting through retargeting with clean audience segmentation and creative testing frameworks.',
      features: [
        'Prospecting and retargeting audience build',
        'Instagram Shopping and Reels creative',
        'Conversion API (CAPI) implementation',
        'Creative rotation and fatigue management',
      ],
    },
    {
      icon: Play,
      title: 'YouTube Ads Management',
      description:
        'In-stream, Discovery, Bumper, and Masthead campaigns. Video is the highest-attention ad format available. We script, brief, and manage video campaigns aligned to your content SEO strategy.',
      features: [
        'In-stream skippable and non-skippable campaigns',
        'Discovery and Shorts placement strategy',
        'Audience segmentation by funnel stage',
        'Brand lift and view-through attribution',
      ],
    },
    {
      icon: Globe,
      title: 'Microsoft Ads / Bing',
      description:
        'Lower CPCs, older demographics, and a disproportionate share of enterprise and government buyers. Microsoft Advertising reaches 30% of the search market Google misses. We import and adapt Google campaigns with platform-specific optimizations.',
      features: [
        'Campaign import from Google Ads with adjustments',
        'Microsoft Audience Network placements',
        'LinkedIn profile targeting integration',
        'CPC arbitrage against Google benchmarks',
      ],
    },
    {
      icon: MapPin,
      title: 'Google Local Services Ads',
      description:
        'Cost-per-lead advertising for local service businesses. LSA appears above standard PPC results and carries the Google Screened or Google Guaranteed badge. Different economics from traditional PPC.',
      features: [
        'LSA account setup and verification',
        'Google Guarantee badge application',
        'Lead dispute management',
        'Budget optimization by service type',
      ],
    },
    {
      icon: Zap,
      title: 'PPC + SEO Integration',
      description:
        'When your ad and your organic listing appear for the same query, total CTR rises from 5.66% to 18.06% (Moz). We coordinate paid and organic strategy so both channels reinforce each other rather than compete.',
      features: [
        'Shared keyword priority matrix',
        'Paid testing before organic content investment',
        'Branded PPC to defend top-of-SERP position',
        'Ad copy insights fed into meta descriptions',
      ],
    },
    {
      icon: BarChart3,
      title: 'PPC Account Audit',
      description:
        'One-off wasted spend analysis for accounts spending over $5,000/month. We audit match types, negative keyword gaps, Quality Score distribution, conversion tracking integrity, and audience overlap.',
      features: [
        'Wasted spend identification by campaign',
        'Match-type and negative keyword gap report',
        'Conversion tracking validation',
        'Written action plan with priority ranking',
      ],
    },
    {
      icon: Target,
      title: 'Data & Attribution',
      description:
        'We warehouse Google Ads, GA4, GSC, and CRM data into BigQuery. You get a single source of truth across organic and paid, with attribution that survives GA4 sampling and platform data discrepancies.',
      features: [
        'Google Ads to BigQuery daily pipeline',
        'Cross-channel attribution modeling',
        'GA4 + Ads data join for revenue view',
        'Custom dashboard in Looker Studio or Sheets',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Audit. find the waste before adding budget',
    description:
      'Week one is always a structural audit. We review match types, negative keyword gaps, Quality Scores, conversion tracking integrity, and audience overlap. In the average account spending $10,000 per month, we find $3,000-4,000 in recoverable waste before touching bids.',
  },
  {
    number: '02',
    title: 'Architecture. build the account structure that scales',
    description:
      'Campaign architecture determines performance ceiling. We redesign ad group structure, audience segmentation, and bidding strategy before launching new spend. This phase takes two weeks and prevents the structural debt that kills most accounts in month four.',
  },
  {
    number: '03',
    title: 'Integrate. connect paid to organic and CRM',
    description:
      'We connect your Google Ads account to BigQuery alongside your GA4 and GSC data. Every keyword we bid on is cross-referenced against your organic ranking position. Keywords where you rank in the top three organically get different bid strategies than keywords where you are invisible.',
  },
  {
    number: '04',
    title: 'Refine. weekly bid reviews, monthly strategy',
    description:
      'Paid media is not set-and-forget. We run weekly bid optimization against conversion data, monthly creative refreshes, and quarterly strategy reviews tied to your organic content calendar. You get a standing dashboard and a monthly summary with actual numbers.',
  },
]

const caseStudyData = {
  subheading: 'Internal Proof',
  heading: 'How we run paid media for agency clients using the same BigQuery infrastructure we built for our own operations.',
  challenge:
    'A modular buildings company was spending $18,000 per month on Google Ads with a 1.4x ROAS. Their GA4 showed conversions, but those conversions did not map to closed deals in their CRM. The paid team was optimizing for the wrong signal.',
  solution:
    'We connected Google Ads spend data to their BigQuery warehouse alongside Salesforce CRM records. Mapped ad clicks through to closed deals, not GA4 conversions. Discovered that their highest-volume campaign (broad match modifiers on generic queries) drove 38% of ad spend but 4% of revenue. Reallocated to branded terms and competitor campaigns. Rebuilt the account structure around the 12 keywords that drove 71% of closed deals.',
  results: [
    { metric: 'ROAS improvement after 90 days', improvement: '3.1x', timeframe: 'Same spend level' },
    { metric: 'Wasted spend recovered', improvement: '$6,800/mo', timeframe: 'First 30 days' },
    { metric: 'Cost per qualified lead reduction', improvement: '54%', timeframe: 'Month 2 vs baseline' },
    { metric: 'Revenue-attributed keywords identified', improvement: '12', timeframe: 'From 340 active terms' },
  ],
}

const whoIsThisForData = [
  {
    profile: 'B2B companies with $5,000+ monthly ad spend',
    problem: 'Your Google Ads account has grown organically for three years and nobody has cleaned it up. Match types are wrong, negatives are thin, and ROAS has been declining for two quarters.',
    fit: 'We audit, restructure, and rebuild. Most accounts see improvement within 30 days of restructuring.',
  },
  {
    profile: 'Ecommerce brands scaling past $100K monthly revenue',
    problem: 'You need Shopping and Performance Max to work together, not cannibalise each other. You want Meta and Google coordinated against the same funnel, not running independently.',
    fit: 'We design cross-channel paid strategy with shared audience pools, unified creative briefs, and attribution that connects ad spend to product margin.',
  },
  {
    profile: 'SEO clients adding a paid complement',
    problem: 'You rank for 30 keywords organically but competitors are buying ads above your listings and stealing branded traffic. You want to defend your SERPs and use paid to test keywords before investing in content.',
    fit: 'This is the paid-organic integration play. We coordinate both channels with a shared keyword matrix and shared reporting.',
  },
  {
    profile: 'Local service businesses setting up LSA',
    problem: 'You have tried Google Ads but cost-per-click economics do not work for your service category. You need the Google Screened badge and the cost-per-lead model that LSA provides.',
    fit: 'We handle LSA setup, badge application, and ongoing lead management. Different product, different team process, same data discipline.',
  },
]

const faqItems = [
  {
    question: 'What is the minimum ad spend you manage?',
    answer:
      'Our paid media management retainers start at clients spending $5,000 per month in ad budget. Below that threshold, the management fee percentage makes the engagement uneconomical for both sides. For accounts under $5,000, we offer the one-time PPC Audit instead.',
  },
  {
    question: 'Do you charge a percentage of ad spend?',
    answer:
      'We charge a fixed monthly management fee rather than a percentage of spend. Percentage-of-spend models create a conflict of interest where the agency earns more when you spend more. Our incentive is results, not budget growth. Pricing depends on the number of channels, campaign complexity, and reporting requirements.',
  },
  {
    question: 'How is your paid media management different from just hiring a Google Ads specialist?',
    answer:
      'A Google Ads specialist optimises inside the platform. We optimise against your revenue data. We warehouse your ad spend in BigQuery alongside GA4 and your CRM, which means we can see which campaigns drive closed deals versus which ones just drive GA4 conversions. That distinction is worth more than any bid optimisation.',
  },
  {
    question: 'Can you manage paid and SEO for the same client?',
    answer:
      'Yes, and this is where the compounding effect is strongest. When we manage both, we use paid data to inform organic content investment and organic ranking data to inform paid bidding. Queries where we rank in the top three organically get different bid treatment than queries where we are on page two.',
  },
  {
    question: 'What reporting do we get?',
    answer:
      'You get a standing Looker Studio or Google Sheets dashboard updated daily, plus a monthly written summary covering spend, ROAS, key changes made, and next-month plan. For clients with BigQuery pipelines, you also get access to raw data exports.',
  },
]

/* -------------------------------------------------------------------------- */
/* Who Is This For Section */
/* -------------------------------------------------------------------------- */

function WhoIsThisForSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Who This Is For</Subheading>
          <Heading as="h2" className="mt-2">
            Four paid media profiles we work with.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {whoIsThisForData.map((item, index) => (
            <div key={index} className="bg-paper p-10">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">
                {item.profile}
              </h3>
              <div className="mb-4">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">The situation</p>
                <p className="text-sm leading-relaxed text-slate">{item.problem}</p>
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-2">How we help</p>
                <p className="text-sm leading-relaxed text-slate">{item.fit}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

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
            Four stages. No wasted budget on a bad foundation.
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
          title="Paid media management: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function PaidMediaPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media',
          name: 'Paid Media Management Services',
          description:
            'Full-funnel paid media management: Google Ads, LinkedIn Ads, Meta Ads, YouTube, Microsoft Advertising, and Google LSA. Data warehoused in BigQuery for revenue-level attribution.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Paid Media Services',
            itemListElement: [
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Ads Management' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'LinkedIn Ads Management' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Meta Ads Management' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'YouTube Ads Management' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Microsoft Advertising' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Google Local Services Ads' } },
              { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'PPC Account Audit' } },
            ],
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
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesGridData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <WhoIsThisForSection />
      <FAQSection />
      <RelatedServicesSection
        subheading="Related Services"
        heading="You might also need"
        services={[
          {
            title: 'SEO Services',
            description: 'Organic growth that reduces your dependence on paid spend over time.',
            href: '/services/seo',
          },
          {
            title: 'AI Search Optimization',
            description: 'Capture zero-click and AI-driven impressions that paid ads cannot buy.',
            href: '/services/ai-search',
          },
          {
            title: 'Analytics & Reporting',
            description: 'Unified paid + organic reporting in BigQuery so you see true channel ROI.',
            href: '/services/analytics',
          },
        ]}
      />
      <CTAFormSection
        subheading="Ready to Audit Your Paid Accounts?"
        heading="Tell us where your budget is going. We will tell you where it should go."
        lead="One call, a structured audit, and a written action plan. No retainer required to start."
        benefits={[
          'Free 30-minute paid media account review',
          'Wasted spend estimate in the first session',
          'Written proposal within 48 hours',
        ]}
        submitText="Request a Paid Media Review"
      />
      <Footer />
    </main>
  )
}
