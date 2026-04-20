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
import {
  Award,
  Layers,
  Search,
  Network,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Gemini SEO | Get Cited in Google Gemini | TheProjectSEO',
  description:
    'Gemini SEO services that build your citation presence in Google Gemini AI responses. E-E-A-T signals, structured data, and Google index signals specifically for Gemini citation pathways.',
  alternates: {
    canonical: '/services/ai-search/gemini-seo',
  },
  openGraph: {
    title: 'Gemini SEO | Get Cited in Google Gemini | TheProjectSEO',
    description:
      'Google Gemini uses the same index as Google Search but applies different citation logic. We build the E-E-A-T signals, schema, and topical authority that Gemini weights for generated responses.',
    url: 'https://theprojectseo.com/services/ai-search/gemini-seo',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Gemini SEO',
  title: 'Get Cited in',
  accentWord: 'Google Gemini',
  titleAfterAccent: '',
  description:
    'Google Gemini uses the Google Search index as its retrieval backbone but applies citation logic that differs from organic ranking. Strong E-E-A-T signals, structured data quality, and topical authority depth matter more for Gemini citations than for organic positions alone. We build the signals Gemini weights.',
  ctaPrimaryText: 'Get a Gemini Citation Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Compare All LLM Services',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '25%', label: 'AI answer market share held by Google Gemini' },
  { value: 'Google', label: 'Primary index Gemini uses for citation retrieval' },
  { value: '99%', label: 'Of Gemini-cited pages have strong structured data' },
  { value: '8-16wk', label: 'Typical timeline for Gemini citation improvements' },
]

const servicesData = {
  subheading: 'Gemini Citation Optimization',
  heading: 'How Gemini citations work and what we build.',
  lead: 'Gemini retrieves from the Google index but applies evaluation criteria that go beyond ranking position: E-E-A-T depth, structured data richness, and topical authority signals specific to generative response quality.',
  services: [
    {
      icon: Award,
      title: 'E-E-A-T Signal Depth',
      description:
        'Gemini applies E-E-A-T criteria strictly for generative responses. Because Gemini is generating content that users trust, Google holds its citation sources to a higher standard than organic ranking. Author credentials, original research, third-party verification, and trust signals all influence whether Gemini selects your content.',
      features: [
        'Author expertise credentialing per content area',
        'Original research and primary source publication',
        'Third-party verification signals (awards, press, certifications)',
        'Review and testimonial schema implementation',
      ],
    },
    {
      icon: Layers,
      title: 'Structured Data for Gemini Parsing',
      description:
        'Gemini uses structured data to confirm content type, authorship, entity relationships, and factual claims. Rich schema implementation reduces ambiguity and increases the confidence with which Gemini can attribute content to your brand. We implement the full stack of relevant schema types for your content.',
      features: [
        'Article and NewsArticle schema with author attribution',
        'Organization schema with verified attributes',
        'FAQ and HowTo schema for conversational queries',
        'Dataset schema for original research pages',
      ],
    },
    {
      icon: Search,
      title: 'Google Index Optimization',
      description:
        'Gemini draws from the Google Search index, which means organic SEO fundamentals still matter. But the citation layer applies additional selection criteria. We address both dimensions: ensuring your content ranks in the right positions to be in the retrieval pool, and ensuring it has the E-E-A-T and schema signals that Gemini applies when selecting sources from that pool.',
      features: [
        'Ranking position analysis for Gemini-triggering queries',
        'Core Web Vitals and technical SEO audit',
        'Crawl efficiency optimization',
        'Index coverage review for target content',
      ],
    },
    {
      icon: Network,
      title: 'Topical Authority for Gemini',
      description:
        'Gemini shows a strong preference for sources with demonstrated topical authority: domains that cover a subject consistently, comprehensively, and from multiple angles. We build the topical authority architecture that signals to Gemini you are a reliable expert source rather than a page that happens to rank for a query.',
      features: [
        'Topical cluster audit vs Gemini-cited competitors',
        'Content depth and coverage gap analysis',
        'Pillar and cluster architecture design',
        'Internal linking for authority signal concentration',
      ],
    },
    {
      icon: BarChart3,
      title: 'Gemini Citation Monitoring',
      description:
        'We track Gemini citation rates monthly using structured prompt sets across the queries your buyers are most likely to use. Because Gemini operates on Google indexing cycles, results move on 8-12 week timescales. Monthly tracking catches directional movement and helps us assess whether optimization work is translating into citation gains.',
      features: [
        'Monthly Gemini-specific prompt testing',
        'Citation frequency and accuracy tracking',
        'Google AI Overview cross-reference',
        'Competitor citation comparison',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Gemini Citation Audit',
    description:
      'We run structured prompts through Gemini covering your category, then compare the cited sources against your content. We assess your E-E-A-T signals, structured data, and ranking positions for queries that trigger Gemini citations. The gap analysis is what we build from.',
  },
  {
    number: '02',
    title: 'Dual-Layer Analysis: Ranking Plus E-E-A-T',
    description:
      'Gemini requires both: being in the ranking pool AND having the E-E-A-T and schema signals that pass Gemini\'s secondary citation filter. We assess both dimensions separately and identify which is the binding constraint. For some sites it is ranking position. For others they rank fine but lack the E-E-A-T depth Gemini requires.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Technical schema and Core Web Vitals work completes in the first 4-6 weeks. E-E-A-T signal building (author credentialing, original research, external citations) takes 3-6 months to compound meaningfully. Content depth expansion for topical authority is ongoing. We sequence these by speed of impact and resource requirements.',
  },
  {
    number: '04',
    title: 'Monthly Tracking and Refinement',
    description:
      'Gemini citation changes operate on Google indexing cycles, so we track monthly with the expectation that significant movements appear on 8-12 week cycles. Monthly tracking is valuable for catching directional signals early and for assessing competitive movements before they become pipeline threats.',
  },
]

const caseStudyData = {
  subheading: 'Gemini SEO in Practice',
  heading: 'How a logistics software company earned Gemini citations despite smaller domain authority.',
  challenge:
    'A logistics technology company held top-5 rankings for their core keywords but had minimal Gemini citation presence. Major logistics software companies with DR 60-80 domains were cited in Gemini responses for queries where our client ranked #2-4 organically. The analysis showed the gap was E-E-A-T: the cited competitors had named software engineers authoring technical content, published original supply chain research, and full Organization schema. Our client had anonymous authorship and no structured data.',
  solution:
    'Author credentialing: identified four supply chain specialists and two software architects within the company, built author bio pages with credentials and LinkedIn links, retroactively attributed existing content. Organization and Article schema implemented across the full site. Two original research pieces published in Supply Chain Dive and Logistics Management. FAQ schema on all product and comparison pages.',
  results: [
    { metric: 'Gemini Citation Rate', improvement: '0 to 22%', timeframe: 'Target logistics queries' },
    { metric: 'Google AI Overviews appearances', improvement: '+180%', timeframe: 'Parallel benefit from same signals' },
    { metric: 'Time to First Gemini Citation', improvement: '13 weeks', timeframe: 'From schema implementation' },
    { metric: 'Organic Traffic Lift', improvement: '+34%', timeframe: 'Combined E-E-A-T and schema effect' },
  ],
}

const faqItems = [
  {
    question: 'How does Gemini decide what to cite?',
    answer:
      'Gemini retrieves from the Google Search index, applies relevance ranking, then applies a secondary citation filter that weighs E-E-A-T signals, structured data quality, and topical authority. A page needs to be in the ranking pool (not necessarily #1, but reasonably well-ranked) and then pass the citation quality filter. This two-stage process means organic ranking and Gemini citation are correlated but not identical. We target both stages.',
  },
  {
    question: 'If I already rank well on Google, will I automatically be cited by Gemini?',
    answer:
      'Not automatically. Ranking gets you into the retrieval pool, but Gemini applies additional criteria when selecting which pool members to actually cite in a generated response. E-E-A-T signals (especially author expertise documentation), structured data richness, and topical authority depth are the differentiators. We frequently work with brands that rank #2-5 organically but have zero Gemini citation presence because they lack the E-E-A-T and schema signals Gemini applies at the citation selection stage.',
  },
  {
    question: 'How is Gemini SEO different from Google AI Overviews optimization?',
    answer:
      'They overlap in meaningful ways. Both use the Google index and both apply E-E-A-T and schema criteria. The difference: Google AI Overviews appear in the standard Google Search interface and are triggered by specific query types in SERP. Gemini citations appear in the Gemini AI interface directly. Users who go to Gemini.google.com are typically in a different research mode than users who encounter AI Overviews in a standard Google search. We track both separately because the query sets and user intents differ.',
  },
  {
    question: 'Does Gemini use real-time data or training data?',
    answer:
      'Both. Gemini has a training data component and a live retrieval component via Google Search. For most queries, Gemini retrieves from Google\'s live index, which means recent content is accessible and optimization changes can affect Gemini citations within weeks of Google indexing them. This makes Gemini faster to respond to optimization than Claude (which relies primarily on training data with long update cycles) and similar in speed to Google AI Overviews.',
  },
  {
    question: 'What structured data types matter most for Gemini?',
    answer:
      'Article schema with author attribution (Gemini uses this to evaluate E-E-A-T), Organization schema for entity recognition, FAQ schema for conversational query matching, and HowTo schema for instructional content. BreadcrumbList helps Gemini understand your site structure and topical organization. Dataset schema is particularly valuable if you publish original research. The most important single schema investment for most brands is Article schema with proper author markup.',
  },
  {
    question: 'How does Gemini SEO interact with traditional Google SEO?',
    answer:
      'All Gemini SEO work also benefits traditional Google SEO. E-E-A-T signal building improves organic rankings in addition to Gemini citation selection. Structured data implementation improves rich results and featured snippets in addition to Gemini parsing. Core Web Vitals improvements affect both ranking and citation pool eligibility. Gemini SEO is not a separate track from Google SEO. It is an additional optimization layer applied on top of the traditional SEO foundation.',
  },
]

/* -------------------------------------------------------------------------- */
/* Gemini vs Traditional SEO Section */
/* -------------------------------------------------------------------------- */

function GeminiVsTraditionalSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Subheading>Understanding Gemini Citation Logic</Subheading>
          <Heading as="h2" className="mt-2">
            Why ranking #1 on Google does not guarantee Gemini citations.
          </Heading>
          <Lead className="mt-8">
            Gemini uses the Google index as its starting point but applies a two-stage selection process. Stage one: ranking pool eligibility. Stage two: E-E-A-T and schema quality filter. Most SEO programs only address stage one. We address both.
          </Lead>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
            <div className="bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-4">Stage One: Ranking Pool</p>
              <ul className="space-y-3 text-sm text-slate">
                <li>Keyword relevance and search intent match</li>
                <li>Domain authority and backlink profile</li>
                <li>Core Web Vitals and technical SEO</li>
                <li>Content quality and depth</li>
                <li>Crawl accessibility and indexing status</li>
              </ul>
            </div>
            <div className="bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-4">Stage Two: Citation Filter</p>
              <ul className="space-y-3 text-sm text-slate">
                <li>Author credentials and expertise documentation</li>
                <li>Structured data richness and accuracy</li>
                <li>Topical authority depth at domain level</li>
                <li>Original research and primary source status</li>
                <li>Third-party trust signals and co-citations</li>
              </ul>
            </div>
          </div>
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
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Gemini SEO Process</Subheading>
          <Heading as="h2" className="mt-2">
            Audit both stages. Build both signals. Track citations.
          </Heading>
        </div>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Phase {step.number}
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
          title="Gemini SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function GeminiSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/gemini-seo',
          name: 'Gemini SEO Services',
          description:
            'Google Gemini citation optimization: E-E-A-T signal building, structured data implementation, and topical authority development for Gemini AI responses.',
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
          about: [
            { '@type': 'Thing', name: 'Google Gemini', sameAs: 'https://www.wikidata.org/wiki/Q117261474' },
          ],
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
      <GeminiVsTraditionalSection />
      <ServicesGrid {...servicesData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Get Cited in Google Gemini"
        heading="Start with a free Gemini citation audit."
        lead="We run your brand through structured Gemini prompts, check ranking pool eligibility for target queries, and assess your E-E-A-T and schema signals against sources Gemini is already citing."
        benefits={[
          'Free Gemini citation presence audit',
          'Dual-stage gap analysis (ranking + E-E-A-T)',
          'Prioritized schema and content recommendations',
        ]}
        submitText="Request the Gemini Audit"
      />
      <Footer />
    </main>
  )
}
