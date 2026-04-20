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
import { GitBranch, Layers, Target, Database, BarChart3, Search } from 'lucide-react'
import { Container } from '@/components/container'
import { Heading, Subheading } from '@/components/text'

export const metadata: Metadata = {
  title: 'SEO Attribution Services | Organic Revenue Attribution | TheProjectSEO',
  description:
    'Connect organic traffic to closed revenue. We implement first-touch, last-touch, and Markov-chain multi-touch attribution models that give SEO the credit it actually deserves in the buyer journey.',
  alternates: {
    canonical: '/services/analytics/seo-attribution',
  },
  openGraph: {
    title: 'SEO Attribution Services | Organic Revenue Attribution | TheProjectSEO',
    description:
      'Organic search drives the first touch in most B2B buyer journeys but gets credit for almost none of the revenue. We fix that with multi-touch Markov attribution built in BigQuery.',
    url: 'https://theprojectseo.com/services/analytics/seo-attribution',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'SEO Attribution',
  title: 'Organic drives the deal.',
  accentWord: 'Last-touch',
  titleAfterAccent: 'hides it.',
  description:
    'In B2B SaaS and considered purchases, organic search typically generates the first brand awareness touch. But last-touch attribution gives 100% of the revenue credit to whichever retargeting ad the buyer clicked immediately before converting. That distortion drives underinvestment in SEO for years. We implement multi-touch Markov attribution models that show organic\'s real contribution to pipeline.',
  ctaPrimaryText: 'Fix Your Attribution',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Analytics Services',
  ctaSecondaryHref: '/services/analytics',
}

const statsData = [
  { value: '15-40%', label: 'More credit organic gets under multi-touch vs. last-touch' },
  { value: '3', label: 'Attribution models we implement and compare' },
  { value: '100%', label: 'Built in BigQuery, fully auditable SQL' },
  { value: '90d', label: 'Typical B2B buying window we model across' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Three attribution models and the infrastructure to run them.',
  services: [
    {
      icon: GitBranch,
      title: 'First-Touch Attribution',
      description:
        'Credits the full revenue value to the channel that generated the first session. Systematically overvalues top-of-funnel channels including organic search and paid brand. Useful as one data point, dangerous as the only model.',
      features: [
        'Session stitching across returning visitors',
        'UTM parameter capture and standardization',
        'Organic vs. direct channel disambiguation (dark traffic adjustment)',
        'First-touch organic revenue by landing page',
      ],
    },
    {
      icon: Target,
      title: 'Last-Touch Attribution',
      description:
        'Credits the full revenue value to the final session before conversion. The GA4 default. Systematically undervalues organic search and overvalues retargeting and brand-direct channels. Required context for any attribution conversation.',
      features: [
        'GA4 last-click model as the baseline comparison',
        'Branded search disambiguation from non-branded',
        'Conversion path length distribution',
        'Last-touch organic revenue vs. multi-touch organic revenue comparison',
      ],
    },
    {
      icon: Layers,
      title: 'Multi-Touch Markov Attribution',
      description:
        'The most accurate model for B2B SaaS and considered purchases. Markov chain attribution uses removal-effect analysis to distribute revenue credit proportionally across all touchpoints based on their actual influence on conversion.',
      features: [
        'Markov chain model built in Python on BigQuery session data',
        'Transition probability matrix for your actual buyer journeys',
        'Removal-effect calculation per channel and per touchpoint position',
        'Organic share of pipeline under Markov vs. last-touch comparison',
      ],
    },
    {
      icon: Database,
      title: 'CRM and GA4 Data Join',
      description:
        'Attribution only works when your analytics data connects to actual closed revenue. We join GA4 session data with Salesforce or HubSpot opportunity data in BigQuery so attribution models run against real deal values, not proxy conversion events.',
      features: [
        'GA4 client_id to CRM contact matching pipeline',
        'Lead source standardization across CRM and GA4 naming conventions',
        'Deal value and close-date joined to originating sessions',
        'Pipeline attribution table updated daily',
      ],
    },
    {
      icon: Search,
      title: 'Dark Traffic Analysis',
      description:
        'A significant portion of organic branded traffic arrives as direct because users type the URL after a prior organic visit. Dark traffic analysis estimates the true organic contribution by modeling the branded organic-to-direct conversion pattern.',
      features: [
        'Dark social and dark organic traffic estimation methodology',
        'Branded search volume to direct session correlation',
        'Adjusted organic credit accounting for misclassified direct traffic',
        'Documented assumptions and confidence intervals',
      ],
    },
    {
      icon: BarChart3,
      title: 'Attribution Model Comparison Dashboard',
      description:
        'Put all three models side by side. This is where attribution conversations get productive: seeing first-touch, last-touch, and multi-touch organic credit in the same view immediately surfaces the distortion in your current model.',
      features: [
        'Side-by-side model comparison in Looker Studio',
        'Organic revenue delta: what last-touch is hiding vs. what Markov shows',
        'Channel revenue ranking under each model',
        'CFO-ready narrative explaining the difference between models',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Audit your current attribution setup',
    description:
      'We review your GA4 configuration, UTM parameter discipline across all channels, CRM lead source fields, and what attribution model you currently use by default. Most clients are on last-click GA4 attribution with incomplete UTM coverage, which means any attribution data they currently have understates organic by 20 to 40 percent before we even start fixing the model.',
  },
  {
    number: '02',
    title: 'Fix the data layer before modeling',
    description:
      'Attribution models are only as accurate as the session data they run on. If UTM parameters are missing on paid campaigns, if form submissions are not firing GA4 events, or if the GA4 client_id is not being captured in your CRM, the model output will be wrong. We fix these issues before we run the first model. Good attribution starts with good tracking, not good math.',
  },
  {
    number: '03',
    title: 'Build the BigQuery attribution pipeline',
    description:
      'We export GA4 data to BigQuery, join it to your CRM opportunity data, and build the session-path tables that the attribution models need. The Markov chain model runs in Python and writes results back to BigQuery as a table you can query directly. Every step is documented in SQL and Python that your team can audit and modify.',
  },
  {
    number: '04',
    title: 'Deliver the comparison dashboard and interpretation guide',
    description:
      'You receive a Looker Studio dashboard with all three models, a written interpretation guide explaining what the Markov model shows versus what your current last-touch model shows, and a recommended model for ongoing use based on your buyer journey data. We also deliver a one-page CFO summary suitable for a budget meeting.',
  },
]

const caseStudyData = {
  subheading: 'Attribution in Practice',
  heading: 'How multi-touch attribution changed how a SaaS company allocated its growth budget.',
  challenge:
    'A Series B SaaS company was allocating 70% of their marketing budget to paid acquisition and 30% to content and SEO, based on last-touch attribution that showed paid generating 68% of revenue. Their SEO team had circumstantial evidence that organic was driving more pipeline than the numbers showed. but no model to prove it.',
  solution:
    'We built a Markov chain attribution model using 14 months of GA4 session data joined to Salesforce opportunity data in BigQuery. The model analyzed 4,200 closed deals, mapped the full session history for each deal\'s associated contact, and calculated removal-effect values for each channel. The analysis took three weeks from data access to final dashboard.',
  results: [
    { metric: 'Organic pipeline share under last-touch attribution', improvement: '18%', timeframe: 'What they thought was true' },
    { metric: 'Organic pipeline share under Markov attribution', improvement: '41%', timeframe: 'What the data actually showed' },
    { metric: 'Budget reallocation to SEO after model delivery', improvement: '+$15K/mo', timeframe: 'Shifted from paid to content' },
    { metric: 'Paid CAC delta after reallocation', improvement: '-22%', timeframe: 'Paid channel less diluted by bottom-funnel only spend' },
  ],
}

const faqItems = [
  {
    question: 'Why does last-touch attribution undervalue organic search?',
    answer:
      'In most B2B buyer journeys, organic search drives the first touchpoint: someone searching for a solution category finds your content and reads it, but does not convert immediately. Over the next 30 to 90 days they see retargeting ads, get an email, and maybe get a sales call. When they finally convert, the last-touch model gives credit to whichever of those final touches preceded the form fill. The organic visit that started the entire relationship gets zero credit. Markov attribution shows how much the buyer journey depends on that first organic touch by measuring what happens to conversion rates when you remove organic from the path.',
  },
  {
    question: 'Do you need CRM data to build attribution models?',
    answer:
      'For proxy-conversion attribution (using a form fill or trial sign-up as the revenue event), you can run the models on GA4 data alone. For revenue-accurate attribution (where the model runs against actual closed deal values), you need the CRM. We can join GA4 client_ids to CRM contacts via email match (if your forms capture email) or via first-touch UTM fields in your CRM. The accuracy of the CRM join depends on how well your team has been capturing UTM parameters in lead records.',
  },
  {
    question: 'What is a Markov chain attribution model?',
    answer:
      'A Markov chain model represents the buyer journey as a set of states (channel touchpoints) and transition probabilities (the likelihood of moving from one state to another before converting or dropping off). The removal effect is calculated by removing each channel from the model and measuring how much the conversion probability drops. Channels with high removal effects get more credit because the buyer journey is more dependent on them. For most B2B SaaS companies, organic search has a higher removal effect than last-touch attribution suggests.',
  },
  {
    question: 'How long does it take to build a multi-touch attribution model?',
    answer:
      'Three to five weeks end-to-end, assuming your GA4 and CRM data are reasonably clean. The first week covers the data audit and tracking fixes. The second and third weeks cover the BigQuery pipeline build and model development. The fourth week covers the dashboard and interpretation guide. If your tracking has significant issues (missing UTMs across campaigns, broken form events, no CRM lead source capture), the timeline extends while we fix the foundation first.',
  },
  {
    question: 'Can you integrate with HubSpot as well as Salesforce?',
    answer:
      'Yes. We have built attribution pipelines against both. HubSpot has a cleaner API for historical contact and deal data, but Salesforce has more flexibility for custom attribution field structures. The BigQuery pipeline works with either. The key requirement on both sides is that your forms are capturing GA4 client_id or UTM parameters in a CRM field so we can match sessions to leads.',
  },
]

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="SEO attribution questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function SeoAttributionPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/analytics/seo-attribution',
          name: 'SEO Attribution Services',
          description:
            'First-touch, last-touch, and Markov multi-touch attribution models that connect organic traffic to closed revenue in BigQuery. Built for B2B SaaS and considered purchase buyer journeys.',
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
        subheading="How We Build Attribution Models"
        heading="Four steps from broken last-touch to accurate Markov attribution."
        steps={processSteps}
      />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Find Out What Organic Actually Drives?"
        heading="Book an attribution audit."
        lead="We start with a free review of your current attribution setup and give you an estimate of how much organic credit your current model is hiding before you commit to anything."
        benefits={[
          'Free attribution setup audit in the discovery call',
          'CRM and GA4 access required to start',
          'Full Markov model delivered within 5 weeks',
        ]}
        submitText="Book the Attribution Audit"
      />
      <Footer />
    </main>
  )
}
