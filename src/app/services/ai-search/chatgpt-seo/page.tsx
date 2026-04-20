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
  Search,
  Award,
  Network,
  FileText,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'ChatGPT SEO Services | Get Cited in ChatGPT | TheProjectSEO',
  description:
    'ChatGPT citation services. We build your Bing presence, strengthen E-E-A-T signals, and create the content structure that gets your brand cited in ChatGPT Browse and ChatGPT responses.',
  alternates: {
    canonical: '/services/ai-search/chatgpt-seo',
  },
  openGraph: {
    title: 'ChatGPT SEO Services | Get Cited in ChatGPT | TheProjectSEO',
    description:
      'ChatGPT cites from Bing Search and curated authority sources. We build the Bing presence, domain authority, and content signals that put your brand in ChatGPT answers.',
    url: 'https://theprojectseo.com/services/ai-search/chatgpt-seo',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'ChatGPT SEO',
  title: 'Get Cited',
  accentWord: 'in ChatGPT',
  titleAfterAccent: '',
  description:
    'ChatGPT Browse pulls citations from Bing Search and a curated set of high-authority sources. Getting cited in ChatGPT requires a specific combination: strong Bing indexing, content structured for direct-answer extraction, and domain-level authority signals that OpenAI trusts. We build all three.',
  ctaPrimaryText: 'Get a ChatGPT Citation Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore All LLM Services',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '100M+', label: 'ChatGPT weekly active users' },
  { value: '60%', label: 'AI answer market share held by ChatGPT' },
  { value: 'Bing', label: 'Primary index ChatGPT Browse uses for citations' },
  { value: '4-8wk', label: 'Typical time to first citation improvements' },
]

const servicesData = {
  subheading: 'ChatGPT Citation Pathway',
  heading: 'How ChatGPT citations work and what we build.',
  lead: 'ChatGPT does not pull citations randomly. Browse mode uses Bing Search. The higher your Bing authority and the better your content is structured for answer extraction, the more often ChatGPT cites you.',
  services: [
    {
      icon: Search,
      title: 'Bing Search Optimization',
      description:
        'ChatGPT Browse retrieves sources via Bing. Most SEO programs focus exclusively on Google and leave Bing as an afterthought. We target Bing indexing specifically: Bing Webmaster Tools setup, IndexNow protocol, Bing-specific crawl improvements, and Bing\'s content quality signals which differ from Google in meaningful ways.',
      features: [
        'Bing Webmaster Tools audit and setup',
        'IndexNow protocol implementation',
        'Bing crawl accessibility fixes',
        'Bing-specific content quality signals',
      ],
    },
    {
      icon: FileText,
      title: 'Direct-Answer Content Structure',
      description:
        'ChatGPT extracts answers from content that gives clear, attributable statements. Content written as flowing prose is harder to extract from than content structured with direct-answer paragraphs, defined terms, and explicit factual claims. We restructure your content for ChatGPT extractability.',
      features: [
        'Direct-answer paragraph optimization',
        'Explicit factual claim formatting',
        'Definition and explanation structure',
        'FAQ and Q&A content for high-intent queries',
      ],
    },
    {
      icon: Award,
      title: 'Domain Authority and Trust Signals',
      description:
        'ChatGPT Browse prioritizes sources that Bing already trusts: high domain authority, clean link profiles, established publication history. We audit the trust signals that Bing uses to evaluate your domain and build the ones that are missing or weak.',
      features: [
        'Domain authority audit vs ChatGPT-cited competitors',
        'Link profile analysis and cleanup',
        'Publication history signals',
        'Author and brand credentialing',
      ],
    },
    {
      icon: Network,
      title: 'Entity Recognition for ChatGPT',
      description:
        'ChatGPT\'s model has entity knowledge baked in from training data, separate from Browse. If your brand is not a recognized entity in OpenAI\'s training corpus, model-only responses (without Browse) will not cite you. We build the web footprint that increases your presence in training-relevant sources.',
      features: [
        'High-authority publication mentions',
        'Wikipedia and Wikidata presence building',
        'Training-data source targeting',
        'Brand entity consistency across the web',
      ],
    },
    {
      icon: BarChart3,
      title: 'ChatGPT Citation Monitoring',
      description:
        'We run structured prompt sets through ChatGPT monthly, with Browse enabled, covering the queries your buyers are most likely to ask. Citation frequency, citation accuracy, and competitive share of voice are tracked month over month.',
      features: [
        'Monthly ChatGPT-specific prompt testing',
        'Browse mode citation frequency tracking',
        'Competitor citation comparison',
        'Citation accuracy and attribute monitoring',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'ChatGPT Citation Audit',
    description:
      'We run 50 targeted prompts through ChatGPT with Browse enabled, covering the queries most relevant to your buyers. We document every citation, check whether you appear, check what competitors are cited, and analyze why those competitors are being chosen over you.',
  },
  {
    number: '02',
    title: 'Bing Gap Analysis',
    description:
      'We compare your Bing presence to the domains ChatGPT is currently citing. Bing authority gaps, crawl issues, indexing lag, and content structure weaknesses become visible through this comparison. The gap list becomes the build plan.',
  },
  {
    number: '03',
    title: 'Implementation',
    description:
      'Bing technical fixes, content restructuring for extractability, and authority signal building happen in parallel. Bing-specific technical work typically completes in weeks 2-4. Content restructuring rolls out over 6-10 weeks depending on site size. Authority building is ongoing.',
  },
  {
    number: '04',
    title: 'Monthly Citation Tracking',
    description:
      'Every month we re-run the structured prompt set and report changes in ChatGPT citation frequency. The data tells us which interventions are working and which queries still need more work. The next sprint is sequenced by citation opportunity size.',
  },
]

const caseStudyData = {
  subheading: 'ChatGPT SEO in Practice',
  heading: 'From zero ChatGPT citations to primary source in high-value queries.',
  challenge:
    'A legal tech company serving law firms had strong Google SEO rankings but zero ChatGPT presence. Their buyers, partners and associates at mid-size law firms, were using ChatGPT to research legal technology purchasing decisions daily. Every relevant ChatGPT answer cited Clio, MyCase, and PracticePanther. Our client was absent. The problem was a near-zero Bing presence: they had optimized exclusively for Google for four years and never touched Bing Webmaster Tools.',
  solution:
    'Bing Webmaster Tools setup and IndexNow implementation got indexing current within two weeks. We then restructured their product comparison pages and feature explanation pages for direct-answer extraction, added FAQ schema, and built their Bing authority through high-domain publication placements in legal technology publications that Bing weighted heavily. Parallel work on their knowledge panel and Wikipedia citation for the legal tech category.',
  results: [
    { metric: 'ChatGPT Citation Rate', improvement: '0 to 34%', timeframe: 'Relevant legal tech queries' },
    { metric: 'Bing Organic Traffic', improvement: '+410%', timeframe: 'Six-month period' },
    { metric: 'ChatGPT Demo Requests', improvement: '+29%', timeframe: 'Attribution via UTM on chatbot referrals' },
    { metric: 'Time to First ChatGPT Citation', improvement: '6 weeks', timeframe: 'From program start' },
  ],
}

const faqItems = [
  {
    question: 'How does ChatGPT decide what to cite?',
    answer:
      'ChatGPT has two citation modes. In Browse mode (the default for paid accounts), it uses Bing Search to retrieve real-time sources, then composes a response from those results. The citation logic mirrors Bing\'s ranking signals: domain authority, content relevance, and content structure for answer extraction. In non-Browse mode, ChatGPT generates responses from training data only, with no real-time citations. Most actionable work focuses on Browse mode since that is where attributable citations happen.',
  },
  {
    question: 'Why does ChatGPT SEO require Bing optimization?',
    answer:
      'Because ChatGPT Browse uses Bing\'s index, not Google\'s. A site that ranks #1 on Google but poorly on Bing gets very few ChatGPT Browse citations. Most SEO programs have ignored Bing for years because Google dominates traditional search. That creates a real opportunity: brands that improve their Bing presence gain ChatGPT citation advantages that competitors with Google-only programs do not have.',
  },
  {
    question: 'Does content need to be written differently for ChatGPT?',
    answer:
      'Structurally, yes. ChatGPT extracts answers from content that makes clear attributable claims. Prose that flows naturally but does not make explicit statements is harder to extract from and attribute. Direct-answer paragraphs, defined terms, and structured factual claims improve extractability. FAQ schema further helps. The content does not need to read robotically, but it needs to have extractable statements that ChatGPT can attribute to your brand.',
  },
  {
    question: 'How is ChatGPT SEO different from Perplexity SEO?',
    answer:
      'ChatGPT Browse relies heavily on Bing authority signals and tends to cite established, high-domain authority sources. Perplexity indexes the open web more broadly and more recently, giving newer content and more niche sources a better shot at citations. A piece published two weeks ago on a DR 40 site can get cited by Perplexity; ChatGPT Browse would be less likely to pick it up. Both platforms benefit from content structure and E-E-A-T, but the authority threshold differs meaningfully.',
  },
  {
    question: 'How long does it take to get cited by ChatGPT?',
    answer:
      'For brands with existing Bing presence that just needs optimization: 4-6 weeks for the first measurable citation improvement. For brands starting Bing optimization from scratch: typically 8-12 weeks for Bing to index, evaluate, and assign authority, then ChatGPT citations follow Bing rankings. Content changes appear faster than authority changes. We give realistic timelines at the start of every engagement based on your current Bing status.',
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
          <Subheading>Our ChatGPT SEO Process</Subheading>
          <Heading as="h2" className="mt-2">
            Audit, improve Bing presence, structure content, track citations.
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
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="ChatGPT SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ChatGPTSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/chatgpt-seo',
          name: 'ChatGPT SEO Services',
          description:
            'ChatGPT citation optimization services. Bing presence building, direct-answer content structure, and E-E-A-T signals for ChatGPT Browse citation.',
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
            { '@type': 'Thing', name: 'ChatGPT', sameAs: 'https://www.wikidata.org/wiki/Q115564437' },
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
      <ServicesGrid {...servicesData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Get Cited in ChatGPT"
        heading="Start with a free ChatGPT citation audit."
        lead="We run your brand through 50 structured prompts in ChatGPT Browse mode, map your citation gaps against competitors, and return a prioritized Bing optimization plan within 5 business days."
        benefits={[
          'Free ChatGPT Browse citation audit',
          'Bing presence gap analysis',
          'Competitor citation comparison report',
        ]}
        submitText="Request the ChatGPT Audit"
      />
      <Footer />
    </main>
  )
}
