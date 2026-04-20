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
import { Play, Target, BarChart3, Layers, TrendingUp, Eye } from 'lucide-react'

export const metadata: Metadata = {
  title: 'YouTube Ads Management | In-Stream, Discovery, Bumper | TheProjectSEO',
  description:
    'YouTube Ads management across In-Stream, Discovery, Bumper, and Shorts formats. Video advertising coordinated with your organic video SEO strategy for compounding visibility.',
  alternates: {
    canonical: '/services/paid-media/youtube-ads',
  },
  openGraph: {
    title: 'YouTube Ads Management | TheProjectSEO',
    description:
      'YouTube advertising managed with a video SEO lens. In-stream, Discovery, and Bumper campaigns built around audience intent, not just reach.',
    url: 'https://theprojectseo.com/services/paid-media/youtube-ads',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'YouTube Ads Management',
  title: 'YouTube Ads that',
  accentWord: 'earn attention,',
  titleAfterAccent: 'not just impressions',
  description:
    'YouTube is the second-largest search engine in the world and the highest-attention ad format in digital. Most brands treat it as a reach channel. The ones winning use YouTube to move buyers through a documented decision process: awareness through In-Stream, consideration through Discovery, and retention through Shorts and Bumpers. We build that system.',
  ctaPrimaryText: 'Build a YouTube Ad Strategy',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See Paid Media Services',
  ctaSecondaryHref: '/services/paid-media',
}

const statsData = [
  { value: '2B+', label: 'Monthly logged-in YouTube users' },
  { value: '59%', label: 'Marketers say YouTube video ads beat TV for ROI' },
  { value: '500hrs', label: 'Of video uploaded to YouTube every minute' },
  { value: '4x', label: 'Higher attention vs social video ads (Nielsen)' },
]

const servicesGridData = {
  subheading: 'YouTube Ad Formats',
  heading: 'Four formats. One connected video strategy.',
  lead: 'Each YouTube ad format reaches a different audience in a different mindset. Running all four without a connecting strategy wastes budget. Running them as a system compounds results.',
  services: [
    {
      icon: Play,
      title: 'In-Stream Skippable',
      description:
        'The format most advertisers default to, and the one most misused. Skippable In-Stream requires a hook that earns the viewer\'s decision to stay past five seconds. We script, brief, and test In-Stream creative focused on hook performance, with clear audience segmentation by funnel stage.',
      features: [
        'Hook script review and testing framework',
        'Skip rate and view rate optimisation',
        'Audience segmentation by intent stage',
        'Placement targeting on relevant channels and videos',
      ],
    },
    {
      icon: Eye,
      title: 'In-Stream Non-Skippable',
      description:
        'Fifteen-second guaranteed impressions. Best for brand recall, product launches, and audiences who have already engaged. We use non-skippable In-Stream selectively, not as a default, because forced attention without earned relevance damages brand perception.',
      features: [
        '15-second creative brief optimised for brand recall',
        'Frequency capping to prevent oversaturation',
        'Audience targeting limited to warm or high-intent viewers',
        'Brand lift measurement setup',
      ],
    },
    {
      icon: Target,
      title: 'Video Discovery Ads',
      description:
        'Discovery ads appear in YouTube search results and the watch page suggestion panel. They reach viewers actively searching for or browsing related content. Unlike In-Stream, Discovery ads only charge when someone clicks to watch. High intent, lower waste.',
      features: [
        'Thumbnail and title optimisation for search intent',
        'Keyword targeting aligned with organic video SEO',
        'Placement in YouTube search results',
        'Click-through rate optimisation and A/B testing',
      ],
    },
    {
      icon: Layers,
      title: 'Bumper Ads',
      description:
        'Six-second non-skippable ads for brand recall and retargeting. We use Bumpers as the final layer in a retargeting sequence for viewers who have already seen longer content and visited the site but not converted. Short, specific, and action-driven.',
      features: [
        '6-second creative optimised for single message recall',
        'Retargeting sequence placement after In-Stream exposure',
        'Frequency management within broader campaign sequence',
        'Brand recall lift measurement',
      ],
    },
    {
      icon: TrendingUp,
      title: 'YouTube Shorts Ads',
      description:
        'Shorts reaches mobile-first viewers in a vertical, swipe-driven context. We brief Shorts-specific creative with mobile aspect ratios, fast hooks under two seconds, and vertical framing. Shorts placements integrate with the broader campaign through audience sharing.',
      features: [
        'Vertical 9:16 creative brief and review',
        'Sub-2-second hook framework for swipe context',
        'Mobile audience segmentation',
        'Integration with broader YouTube campaign structure',
      ],
    },
    {
      icon: BarChart3,
      title: 'Audience Targeting and Attribution',
      description:
        'YouTube targeting goes beyond demographics. We use custom intent audiences (people searching specific terms on Google), in-market segments, remarketing from your website, and customer match lists. Attribution connects video views to downstream search and conversion behaviour.',
      features: [
        'Custom intent audience build from Google search data',
        'Customer match from CRM for existing customer exclusion',
        'View-through attribution to search conversion',
        'Brand lift and search lift measurement where available',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Creative brief. the ad has to work before it runs',
    description:
      'YouTube creative is the biggest lever in YouTube advertising. We write a detailed brief for each ad format covering hook, narrative arc, call to action, and duration. We review scripts and storyboards before production begins. Bad creative produces bad results regardless of targeting precision.',
  },
  {
    number: '02',
    title: 'Audience architecture. intent-based targeting',
    description:
      'We build targeting stacks using custom intent audiences (searchers of specific Google keywords), in-market segments, placement targeting on competitor channels, and remarketing audiences from website visitors. Each audience gets a distinct creative matched to where they are in the buying process.',
  },
  {
    number: '03',
    title: 'Campaign launch. format-by-funnel stage',
    description:
      'In-Stream for awareness and consideration. Discovery for active search intent. Bumpers for retargeting. Each campaign has a specific objective, budget allocation, and success metric. We launch with a minimum two-creative test per format and optimise based on view rate, click rate, and downstream conversion data.',
  },
  {
    number: '04',
    title: 'Attribution. connect video to search behaviour',
    description:
      'YouTube ads influence behaviour beyond the video view. We track view-through conversions, search lift (increased branded searches after video exposure), and the contribution of YouTube touch points to conversion paths that complete on other channels. Monthly review with downstream attribution data.',
  },
]

const caseStudyData = {
  subheading: 'Video Advertising Case',
  heading: 'YouTube awareness campaign that produced 34% branded search lift in 60 days.',
  challenge:
    'A B2B software company had no video presence and was invisible in branded search outside their existing customer base. Competitors were running YouTube ads on their brand terms and category terms. They needed to build awareness quickly without a large creative budget.',
  solution:
    'Produced four 30-second In-Stream ads (two for awareness, two for competitor conquesting) and six 6-second Bumper retargeting ads. Targeted custom intent audiences searching competitor brand terms and category terms on Google. Ran Discovery ads in YouTube search results for the same keyword set. Used Bumpers to retarget anyone who clicked from a Discovery ad but had not converted.',
  results: [
    { metric: 'Branded search lift', improvement: '34%', timeframe: '60 days post-launch' },
    { metric: 'View-through conversions', improvement: '128', timeframe: 'Month 2' },
    { metric: 'Cost per completed view', improvement: '$0.08', timeframe: 'Across In-Stream campaigns' },
    { metric: 'Website sessions from YouTube', improvement: '+210%', timeframe: 'Organic + paid combined' },
  ],
}

const faqItems = [
  {
    question: 'Do we need to already have video content to run YouTube Ads?',
    answer:
      'You need video creative. If you do not have it, we brief and review the production rather than produce it ourselves. We work with your internal team or a video production partner to ensure the creative is briefed correctly for YouTube-specific performance. Starting without good creative is the most common reason YouTube ad campaigns fail in the first 30 days.',
  },
  {
    question: 'What is the minimum budget for YouTube Ads?',
    answer:
      'YouTube has a relatively low minimum CPV (cost per view), often under $0.10 for skippable In-Stream. In practice, we recommend a minimum $2,000 per month in ad spend to generate meaningful data across multiple formats and audience tests. For brand awareness campaigns with a single creative, smaller budgets can work if the creative and targeting are well defined.',
  },
  {
    question: 'How does YouTube Ads management connect to video SEO?',
    answer:
      'YouTube search works differently from Google search, but the intent signals are complementary. Queries that show high commercial intent in YouTube search can inform which paid formats to use. Organic videos that rank for high-intent queries can be boosted with Discovery ads to expand their reach faster. We coordinate YouTube paid and organic strategy when managing both.',
  },
  {
    question: 'How do you measure YouTube Ads performance for B2B where the sales cycle is long?',
    answer:
      'For long sales cycles, view-through attribution and brand lift measurement are more relevant than direct conversion attribution. We set up brand lift studies where budget allows, track increases in branded search volume as a proxy for awareness, and use view-through conversion windows matched to your average sales cycle length. We also track the YouTube touchpoint contribution in multi-touch attribution paths.',
  },
  {
    question: 'Can YouTube Ads work for lead generation, not just brand awareness?',
    answer:
      'Yes. Lead generation on YouTube works best with Discovery ads (high intent audience actively searching) paired with a strong landing page, or with In-Stream ads targeted to custom intent audiences using Google search query data. We set clear CPL targets and optimise against them. YouTube lead generation CPLs are typically 30-50% higher than Google Search but reach audiences that Search misses.',
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
            Four stages from creative brief to attribution.
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
          title="YouTube Ads: frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function YouTubeAdsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/paid-media/youtube-ads',
          name: 'YouTube Ads Management',
          description:
            'YouTube Ads management across In-Stream, Discovery, Bumper, and Shorts formats. Custom intent audience targeting, view-through attribution, and brand lift measurement.',
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
        subheading="Start With a Video Strategy"
        heading="Good creative + right audience = YouTube that works."
        lead="Most YouTube campaigns fail at the creative brief stage, before a dollar is spent. We start there."
        benefits={[
          'Free YouTube Ads creative and targeting review',
          'Audience strategy recommendation within 48 hours',
          'Written proposal for full campaign management',
        ]}
        submitText="Build a YouTube Ad Strategy"
      />
      <Footer />
    </main>
  )
}
