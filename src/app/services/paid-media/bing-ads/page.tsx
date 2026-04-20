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
import { Globe, Users, TrendingDown, Building2, BarChart3, Search } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Microsoft Ads / Bing Ads Management | Lower CPC B2B Advertising | TheProjectSEO',
  description:
    'Microsoft Advertising management for B2B, enterprise, and technical buyers. Lower CPCs, LinkedIn profile targeting, and 30% of search volume Google misses. Imported from Google Ads with platform-specific optimisations.',
  alternates: {
    canonical: '/services/paid-media/bing-ads',
  },
  openGraph: {
    title: 'Microsoft Ads / Bing Ads Management | TheProjectSEO',
    description:
      'Bing Ads and Microsoft Advertising management. Lower CPCs, enterprise buyer demographics, LinkedIn profile targeting, and Microsoft Audience Network extension.',
    url: 'https://theprojectseo.com/services/paid-media/bing-ads',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Microsoft Ads Management',
  title: 'Bing Ads: the',
  accentWord: 'overlooked channel',
  titleAfterAccent: 'with better unit economics',
  description:
    'Most advertisers focus exclusively on Google and ignore a channel that reaches 30% of the US search market, skews toward higher-income older professionals, and delivers CPCs 20-35% lower than equivalent Google campaigns. Microsoft Advertising is not Google\'s consolation prize. For B2B, enterprise, and technical verticals, it is often the better ROI channel.',
  ctaPrimaryText: 'Add Microsoft Advertising',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See Google Ads Services',
  ctaSecondaryHref: '/services/paid-media/google-ads',
}

const statsData = [
  { value: '30%', label: 'US search market share on Bing/Microsoft' },
  { value: '35%', label: 'Average CPC discount vs equivalent Google terms' },
  { value: '38%', label: 'Bing searchers have household income over $100K' },
  { value: '58%', label: 'B2B purchase decisions influenced by Bing search' },
]

const servicesGridData = {
  subheading: 'Microsoft Advertising Services',
  heading: 'Four reasons B2B brands get more from Bing.',
  lead: 'Microsoft Advertising is not just Google with less volume. It has unique targeting capabilities, a distinct audience profile, and better economics in specific verticals.',
  services: [
    {
      icon: TrendingDown,
      title: 'Lower CPC Arbitrage',
      description:
        'Bing search CPCs run 20-35% lower than Google for the same keywords in most verticals. That gap is largest in competitive B2B categories: software, financial services, legal, and professional services. We import Google Ads campaigns and apply Bing-specific bid adjustments to capture the same search intent at materially lower cost.',
      features: [
        'Google Ads campaign import with CPC adjustment',
        'Competitive CPC benchmarking by keyword',
        'Bid strategy optimisation for Bing\'s algorithm',
        'ROAS comparison reporting vs Google equivalents',
      ],
    },
    {
      icon: Users,
      title: 'LinkedIn Profile Targeting',
      description:
        'Microsoft owns LinkedIn. Microsoft Advertising is the only search platform that lets you layer LinkedIn profile data onto search targeting: company, job function, industry, and seniority. This is transformative for B2B. You can target people searching your keywords who also work at companies on your target account list.',
      features: [
        'Company targeting from CRM account list',
        'Job function and seniority filter on search campaigns',
        'Industry vertical targeting layer',
        'Bid adjustments by LinkedIn audience segment',
      ],
    },
    {
      icon: Building2,
      title: 'Enterprise and Government Buyers',
      description:
        'Windows is the dominant enterprise operating system. Bing is the default search engine on Windows and Microsoft Edge in corporate environments. Government agencies, large enterprise IT buyers, and regulated industries skew disproportionately toward Bing. If you sell to enterprise or government, this audience profile matters.',
      features: [
        'Enterprise demographic targeting',
        'Device targeting (Windows desktop for corporate intent)',
        'Edge browser audience focus for corporate environments',
        'Bid adjustments by company size signals',
      ],
    },
    {
      icon: Globe,
      title: 'Microsoft Audience Network',
      description:
        'The Microsoft Audience Network extends Bing reach to MSN, Microsoft Start, Outlook.com, and Edge news tabs. Native ad placements in Microsoft-owned properties with the same audience targeting capabilities as search campaigns. Effective for remarketing and brand awareness at CPMs below Meta.',
      features: [
        'Native ad placement on MSN and Microsoft Start',
        'Outlook.com audience targeting',
        'Remarketing from Bing search visitors',
        'CPM benchmarking vs Meta equivalent placements',
      ],
    },
    {
      icon: Search,
      title: 'Campaign Import and Adaptation',
      description:
        'We import your Google Ads campaigns into Microsoft Advertising as a starting point, then adapt them for platform differences. Match type behaviour differs on Bing, Quality Score factors differ, and audience network placements require separate creative review. Copy-paste from Google is a fast path to mediocre Bing performance.',
      features: [
        'Google Ads import with platform-specific review',
        'Match type strategy adjustment for Bing behaviour',
        'Negative keyword adaptation for Bing query patterns',
        'Extension setup (Bing has sitelinks, callouts, structured snippets)',
      ],
    },
    {
      icon: BarChart3,
      title: 'Unified Reporting with Google',
      description:
        'We manage Microsoft Advertising reporting alongside Google Ads in the same BigQuery warehouse. You get a single view of search performance across both platforms: total impression share, combined CPL, cross-platform ROAS, and keyword performance comparison between Google and Bing for the same terms.',
      features: [
        'Microsoft Ads API export to BigQuery',
        'Cross-platform performance comparison dashboard',
        'Combined search impression share reporting',
        'Keyword-level CPC and conversion comparison',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Google Ads import. start fast, then adapt',
    description:
      'We import your existing Google Ads campaigns into Microsoft Advertising as a baseline. This gets ads running in the first week. Then we audit and adapt: match types, negative keywords, bid strategies, and ad extensions all require Bing-specific review. The import is week one. The adaptation is week two through four.',
  },
  {
    number: '02',
    title: 'LinkedIn targeting layer. the Bing advantage',
    description:
      'For B2B clients, we add LinkedIn profile targeting to the campaign structure. This typically means creating bid adjustment layers for your target company size, industry, and job function. This is a Bing-exclusive capability and the primary reason B2B advertisers should have Bing campaigns running separately from their Google campaigns.',
  },
  {
    number: '03',
    title: 'Microsoft Audience Network setup',
    description:
      'We extend the campaign footprint to the Microsoft Audience Network for native placements. Separate creative review, separate bidding strategy, and separate audience lists from the search campaigns. Most advertisers run Audience Network as a brand awareness and retargeting layer at lower CPMs than Meta.',
  },
  {
    number: '04',
    title: 'Unified reporting and optimisation',
    description:
      'Monthly review of Microsoft Advertising performance against Google benchmarks. We report on CPC differential, ROAS comparison, and audience quality by platform. For clients where Bing outperforms Google on a specific keyword set, we shift budget accordingly. The goal is the best return across both platforms combined, not channel loyalty.',
  },
]

const caseStudyData = {
  subheading: 'B2B Search Expansion Case',
  heading: 'Adding Bing to a B2B SaaS account reduced blended CPL by 22% in 60 days.',
  challenge:
    'A B2B HR software company was spending $15,000 per month on Google Ads with a $180 CPL. They had saturated their target keywords on Google and CPC was rising quarter over quarter as competitors increased bids. They needed to expand search reach without sacrificing lead quality.',
  solution:
    'Imported Google Ads campaigns to Microsoft Advertising with Bing-specific bid adjustments. Added LinkedIn profile targeting layers for HR director and CHRO job functions at companies with 500-5,000 employees. Set up Microsoft Audience Network retargeting for Bing search visitors who did not convert. Added $4,000 per month in Bing spend, directing it at the same keywords and audiences as the highest-performing Google campaigns.',
  results: [
    { metric: 'Blended CPL across Google + Bing', improvement: '$140', timeframe: 'Down from $180' },
    { metric: 'Total lead volume increase', improvement: '+38%', timeframe: 'Same total budget' },
    { metric: 'Bing CPL vs Google for same keywords', improvement: '32% lower', timeframe: 'Month 2 benchmark' },
    { metric: 'LinkedIn-targeted leads quality', improvement: '2.1x higher', timeframe: 'Opportunity rate' },
  ],
}

const faqItems = [
  {
    question: 'Is it worth managing Bing Ads separately from Google?',
    answer:
      'For most B2B accounts and verticals with deal sizes above $3,000, yes. The CPL differential is typically 25-35% in Bing\'s favour for the same keywords, and the LinkedIn profile targeting layer is a capability that Google does not offer. The management overhead is lower than running a separate Google campaign because the keyword and audience structure mirrors Google. We typically add Bing to existing Google Ads clients rather than running it standalone.',
  },
  {
    question: 'How much of the Google Ads strategy transfers directly to Bing?',
    answer:
      'The keyword list, negative keywords, and ad copy transfer well. Match type behaviour is slightly different on Bing, and their broad match tends to match more aggressively than Google\'s, so we add more negatives in the first month. Quality Score factors also differ: Bing weights landing page relevance more heavily than Google. Bidding strategy typically needs recalibration because Bing\'s automated bidding has less data volume than Google\'s.',
  },
  {
    question: 'Does Bing make sense for ecommerce?',
    answer:
      'Less so than for B2B. Bing Shopping campaigns work and have lower CPCs, but the volume differential is more significant for ecommerce than for B2B. The LinkedIn targeting advantage does not apply to consumer purchases. For ecommerce, Bing is worth running if your Google Shopping ROAS is above 4x and you have exhausted scaling options on Google. For B2B SaaS and professional services, the case is much stronger.',
  },
  {
    question: 'What is the LinkedIn profile targeting setup process?',
    answer:
      'You connect your Microsoft Advertising account to your LinkedIn account (requires admin access to both). Microsoft then allows you to layer LinkedIn profile attributes onto search campaigns as bid adjustments, not as standalone targeting. You can increase or decrease bids by company size, industry, job function, and seniority. You cannot exclude LinkedIn audiences, only adjust bids. We map your ICP attributes to the available LinkedIn targeting dimensions.',
  },
  {
    question: 'How long does Bing campaign setup take?',
    answer:
      'For clients with existing Google Ads accounts, the import and initial adaptation takes about one week. LinkedIn profile targeting setup requires connecting accounts and is typically done in the first three days. The Microsoft Audience Network setup for remarketing takes another week because the UET tag (Bing\'s pixel equivalent) needs implementation and data collection time. First campaigns are usually live by day seven to ten.',
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
            Four stages from Google import to unified reporting.
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
          title="Microsoft Ads / Bing Ads: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function BingAdsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/bing-ads',
          name: 'Microsoft Ads / Bing Ads Management',
          description:
            'Microsoft Advertising management for B2B, enterprise, and technical buyers. Lower CPCs, LinkedIn profile targeting, Microsoft Audience Network, and unified reporting with Google Ads.',
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
        subheading="Add Bing to Your Search Mix"
        heading="30% of search volume at 35% lower CPCs. Hard to ignore."
        lead="If you are running Google Ads and not Bing, you are leaving a meaningful channel unused. We set it up alongside your Google campaigns."
        benefits={[
          'Free Microsoft Advertising account setup review',
          'CPL improvement estimate based on your Google data',
          'Campaign live within 7 days of engagement start',
        ]}
        submitText="Add Microsoft Advertising"
      />
      <Footer />
    </main>
  )
}
