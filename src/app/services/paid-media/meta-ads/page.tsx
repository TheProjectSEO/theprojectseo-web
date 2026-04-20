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
import { Target, TrendingUp, ShoppingBag, BarChart3, RefreshCw, Layers } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Meta Ads Management | Facebook & Instagram Advertising | TheProjectSEO',
  description:
    'Meta Ads management for DTC brands and ecommerce. Facebook and Instagram full-funnel campaigns with Conversion API, Instagram Shopping, Reels creative, and server-side attribution.',
  alternates: {
    canonical: '/services/paid-media/meta-ads',
  },
  openGraph: {
    title: 'Meta Ads Management | TheProjectSEO',
    description:
      'Full-funnel Meta Ads for Facebook and Instagram. Prospecting through retargeting with CAPI, Instagram Shopping, and creative testing frameworks that reduce fatigue.',
    url: 'https://theprojectseo.com/services/paid-media/meta-ads',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Meta Ads Management',
  title: 'Facebook and Instagram ads',
  accentWord: 'built around',
  titleAfterAccent: 'margin, not revenue',
  description:
    'Meta gives you the largest social audience in the world and the most sophisticated targeting and bidding algorithms in consumer advertising. Most brands waste it by optimising for purchase revenue instead of purchase margin, running creative until it fatigues, and losing attribution signal to iOS privacy changes. We fix all three.',
  ctaPrimaryText: 'Get a Meta Ads Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See Full Paid Media Services',
  ctaSecondaryHref: '/services/paid-media',
}

const statsData = [
  { value: '2.9B', label: 'Monthly active users across Meta platforms' },
  { value: '37%', label: 'Average CTR lift with Reels-first creative strategy' },
  { value: '70%', label: 'Attribution signal recovered with Conversion API' },
  { value: '3-4x', label: 'ROAS improvement from margin-based bidding' },
]

const servicesGridData = {
  subheading: 'Meta Ads Services',
  heading: 'Full-funnel Facebook and Instagram. One integrated account.',
  lead: 'Meta advertising requires three things to work: clean audience segmentation, fresh creative on a consistent schedule, and server-side attribution that survives iOS restrictions. We deliver all three.',
  services: [
    {
      icon: Target,
      title: 'Prospecting Campaigns',
      description:
        'Top-of-funnel campaigns to reach new audiences who match your best customers. We build prospecting using Advantage+ audience (Meta\'s AI targeting), interest and behaviour stacks, and lookalike audiences sourced from your highest-value customers, not just any purchaser.',
      features: [
        'Lookalike audiences from LTV-weighted customer lists',
        'Interest and behaviour targeting for cold audiences',
        'Advantage+ Shopping Campaign architecture for ecommerce',
        'Geographic and demographic refinement by market',
      ],
    },
    {
      icon: RefreshCw,
      title: 'Retargeting and Retention',
      description:
        'Bottom-of-funnel campaigns for visitors, add-to-cart abandoners, past purchasers, and lapsed customers. We build retargeting audiences with precise time windows, suppression lists to avoid wasting spend on recent purchasers, and creative sequences that advance the conversation.',
      features: [
        'Website visitor segmentation by page and time window',
        'Add-to-cart and checkout abandonment sequences',
        'Past purchaser cross-sell and upsell campaigns',
        'Win-back campaigns for lapsed customers',
      ],
    },
    {
      icon: ShoppingBag,
      title: 'Instagram Shopping',
      description:
        'Product catalogue campaigns that put your products directly in the Instagram Shopping tab, Stories, and Reels. We manage the product feed, set up the catalogue, configure dynamic product ads, and optimise by product margin rather than revenue.',
      features: [
        'Product catalogue setup and ongoing feed management',
        'Dynamic product ads with audience-based creative',
        'Instagram Shopping tab and checkout configuration',
        'Product-level ROAS segmentation by margin category',
      ],
    },
    {
      icon: Layers,
      title: 'Reels and Video Creative',
      description:
        'Reels is the highest-engagement format on Instagram and Facebook. We brief, review, and test Reels creative against static creative for every campaign. Hook rate and hold rate are our primary creative metrics. If the first three seconds do not perform, we test new hooks before adding budget.',
      features: [
        'Reels creative brief and hook testing framework',
        'Hook rate and hold rate optimisation',
        'UGC and brand content testing framework',
        'Creative fatigue monitoring with auto-refresh triggers',
      ],
    },
    {
      icon: BarChart3,
      title: 'Conversion API (CAPI) Implementation',
      description:
        'iOS 14 and subsequent privacy changes broke pixel-based attribution across Meta. Conversion API sends conversion events from your server rather than the browser, recovering 60-70% of lost attribution signal. We implement CAPI via GTM server-side or direct API integration.',
      features: [
        'CAPI via GTM server-side or direct API',
        'Event deduplication between pixel and CAPI',
        'Enhanced matching with hashed customer data',
        'Attribution window configuration by campaign type',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Margin-Based Bidding',
      description:
        'Optimising for purchase revenue ignores product margin. A 3x ROAS on a 20% margin product and a 3x ROAS on a 60% margin product are very different outcomes. We implement custom conversion values based on product margin, so Meta\'s algorithm optimises for profit, not top-line revenue.',
      features: [
        'Custom conversion value mapping by product margin',
        'Profit ROAS calculation and target setting',
        'Product exclusion for negative-margin items',
        'LTV-weighted bidding for subscription products',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Attribution first. fix the data before spending',
    description:
      'Before we change a single campaign, we audit your pixel setup, CAPI configuration, and event deduplication. If your attribution data is wrong, every optimisation decision will be wrong. We spend the first week making sure the data layer is clean. This is not glamorous, but it is the work that determines whether month three looks like month one.',
  },
  {
    number: '02',
    title: 'Audience architecture. build the segmentation layer',
    description:
      'We build the full audience stack: customer lists segmented by LTV, retargeting windows by funnel stage, lookalike audiences from your best customers, and suppression lists to prevent wasted spend. This architecture becomes the operating system for every campaign we run.',
  },
  {
    number: '03',
    title: 'Campaign launch. clear funnel stages',
    description:
      'Top-of-funnel prospecting with fresh creative. Mid-funnel retargeting with educational content. Bottom-of-funnel retargeting with direct offer. Each stage has a distinct audience, creative brief, and optimisation objective. We launch with a creative testing matrix and rotate based on hook rate and hold rate data.',
  },
  {
    number: '04',
    title: 'Creative cadence. refresh before fatigue hits',
    description:
      'Creative fatigue is the number one reason Meta accounts plateau. We monitor frequency and creative performance weekly, brief new creative variations before fatigue sets in, and maintain a rotation library so the algorithm always has fresh material to work with. Monthly creative review and quarterly full refresh.',
  },
]

const caseStudyData = {
  subheading: 'DTC Ecommerce Case',
  heading: 'From 1.8x ROAS to 4.2x after margin-based bidding and CAPI implementation.',
  challenge:
    'A DTC skincare brand was running Meta Ads with a reported 2.4x ROAS. After iOS 14, their attribution dropped significantly and they believed their ROAS had fallen to 1.8x. They were about to cut Meta budget. What actually happened: their pixel was severely under-reporting, and they were optimising for revenue on products with 25% gross margin while their highest-margin SKUs were getting almost no ad spend.',
  solution:
    'Implemented Conversion API with server-side GTM container. Attribution signal recovered 67% of previously lost events. Rebuilt bidding using custom conversion values weighted by product margin. Shifted 60% of budget toward the four SKUs with 65%+ gross margin. Rebuilt the creative strategy around short-form Reels with direct product demonstrations, replacing the existing brand lifestyle creative.',
  results: [
    { metric: 'Profit ROAS improvement', improvement: '4.2x', timeframe: 'Up from 1.8x effective' },
    { metric: 'Attribution signal recovered', improvement: '67%', timeframe: 'Via CAPI vs pixel-only' },
    { metric: 'Revenue from high-margin SKUs', improvement: '+134%', timeframe: 'Month 3 vs baseline' },
    { metric: 'Creative hook rate improvement', improvement: '+89%', timeframe: 'Reels vs static baseline' },
  ],
}

const faqItems = [
  {
    question: 'How do you handle iOS 14 and Meta attribution issues?',
    answer:
      'Conversion API is the primary fix. We implement CAPI via server-side Google Tag Manager or direct API integration, configure event deduplication between pixel and CAPI, and enable enhanced matching with hashed customer data. This typically recovers 60-70% of attribution signal lost to iOS privacy changes. We also configure the right attribution window for your business model: 7-day click for most ecommerce, 1-day click for impulse purchases.',
  },
  {
    question: 'What creative formats perform best on Meta right now?',
    answer:
      'Reels consistently outperform static images on both Facebook and Instagram for cold audiences. The key metrics are hook rate (percentage of viewers who watch past 3 seconds) and hold rate (percentage who watch past 15 seconds). For retargeting, carousel and collection formats outperform Reels because engaged users want to browse products. We test across formats and let data drive the allocation.',
  },
  {
    question: 'How do you prevent creative fatigue?',
    answer:
      'We monitor frequency per audience and CPM trends weekly. When frequency exceeds 3 for a cold audience or CPM increases more than 20% over two weeks, we flag for creative refresh before performance drops. We maintain a creative brief template that makes it fast for your team to produce new variations, and we rotate creative on a fortnightly cycle for high-budget campaigns.',
  },
  {
    question: 'Do you use Advantage+ Shopping Campaigns or manual campaigns?',
    answer:
      'Both, depending on account size and data volume. Advantage+ Shopping works well for ecommerce accounts with high purchase volume because Meta has enough signal to optimise effectively. For smaller accounts or newer products, manual campaign structures give us more control over budget allocation and audience testing. We start with manual, collect data, and migrate to Advantage+ once we have enough conversion signal.',
  },
  {
    question: 'What is the minimum monthly ad spend for Meta Ads management?',
    answer:
      'Our Meta Ads management retainers start at clients spending $3,000 per month in ad budget. Below that level, there is not enough data volume for the Meta algorithm to learn effectively across multiple campaigns. For smaller budgets, we recommend starting with one or two campaigns rather than trying to cover the full funnel.',
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
            Four stages. Attribution, audiences, campaigns, creative.
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
          title="Meta Ads management: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function MetaAdsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/meta-ads',
          name: 'Meta Ads Management',
          description:
            'Full-funnel Meta Ads management for Facebook and Instagram. DTC and ecommerce focus. CAPI implementation, Instagram Shopping, Reels creative, and margin-based bidding.',
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
        subheading="Fix Your Meta Attribution First"
        heading="We start with data, not ad spend."
        lead="If your Meta attribution is broken, every dollar you spend is going into a black box. We fix the data layer before touching the campaigns."
        benefits={[
          'Free pixel and CAPI audit',
          'Attribution recovery estimate',
          'Written Meta Ads strategy within 48 hours',
        ]}
        submitText="Get a Meta Ads Audit"
      />
      <Footer />
    </main>
  )
}
