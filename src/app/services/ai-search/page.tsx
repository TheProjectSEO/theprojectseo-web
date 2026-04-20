import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  CaseStudyDark,
  CTAFormSection,
} from '@/components/service-page-sections'
import { CheckIcon } from '@/components/check-icon'
import {
  Brain,
  Eye,
  Network,
  BarChart3,
  MessageSquare,
  Search,
  Layers,
  Cpu,
  Sparkles,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Search Optimization Services | TheProjectSEO',
  description:
    'AI search optimization services covering AEO, GEO, entity SEO, LLM visibility tracking, and citation optimization for ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
  alternates: {
    canonical: '/services/ai-search',
  },
  openGraph: {
    title: 'AI Search Optimization Services | TheProjectSEO',
    description:
      'Get cited across every major AI system. TheProjectSEO builds the content architecture, entity signals, and structured data that make your brand the cited answer.',
    url: 'https://theprojectseo.com/services/ai-search',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI Search Optimization',
  title: 'Your brand, cited in every',
  accentWord: 'AI answer',
  titleAfterAccent: '',
  description:
    'Traditional SEO gets you a blue link. AI Search Optimization gets you cited as the answer. We build the content architecture, entity presence, and structured signals that position your brand as the authoritative source across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.',
  ctaPrimaryText: 'Get an AI Search Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Services',
  ctaSecondaryHref: '#services',
}

const statsData = [
  { value: '75K', label: 'Brands analyzed for AI citation patterns' },
  { value: '0.71', label: 'Correlation: branded mentions to AI visibility' },
  { value: '40%', label: 'Of Google queries now show AI Overviews' },
  { value: '6mo', label: 'Typical timeline to measurable AI citation gains' },
]

const subServices = [
  {
    icon: MessageSquare,
    title: 'Answer Engine Optimization (AEO)',
    description:
      'AEO is about being the cited answer when someone asks a question. We restructure your content into the question-answer formats, E-E-A-T signals, and citation pathways that make AI systems choose your brand as the source.',
    href: '/services/ai-search/aeo',
    tags: ['Content restructuring', 'Citation signals', 'E-E-A-T'],
  },
  {
    icon: Brain,
    title: 'Generative Engine Optimization (GEO)',
    description:
      'GEO focuses on retrieval. When an LLM generates a response from multiple sources, your content needs to be in that retrieval pool. We build the depth, density, and structural signals that make you retrievable at generation time.',
    href: '/services/ai-search/geo',
    tags: ['LLM retrieval', 'Content depth', 'Semantic density'],
  },
  {
    icon: Network,
    title: 'Entity SEO & Knowledge Graph',
    description:
      'AI systems reason about entities, not pages. We build your Knowledge Graph presence through sameAs markup, Wikidata connections, co-citation strategies, and structured data density that makes your brand a recognized entity in every model.',
    href: '/services/ai-search/entity-seo',
    tags: ['Knowledge Graph', 'sameAs markup', 'Co-citations'],
  },
  {
    icon: BarChart3,
    title: 'LLM Visibility Tracking',
    description:
      'A monthly retainer that monitors where your brand appears across ChatGPT, Perplexity, Claude, and Gemini. We run structured prompt sets, track citation frequency, and report share-of-voice trends month over month.',
    href: '/services/ai-search/llm-visibility-tracking',
    tags: ['Monthly tracking', 'Citation rate', 'Share of voice'],
  },
  {
    icon: Cpu,
    title: 'ChatGPT SEO',
    description:
      'ChatGPT pulls citations from Bing Search and a curated set of high-authority sources. We improve your Bing presence, strengthen domain signals that OpenAI weights in Browse mode, and build the authoritative content patterns that surface in ChatGPT answers.',
    href: '/services/ai-search/chatgpt-seo',
    tags: ['Bing optimization', 'Browse mode', 'Authority signals'],
  },
  {
    icon: Search,
    title: 'Perplexity SEO',
    description:
      'Perplexity indexes the open web aggressively and cites recent, well-structured sources. We build Perplexity citation signals through freshness cues, structured Q&A content, and the technical accessibility that makes your pages easy to parse and cite.',
    href: '/services/ai-search/perplexity-seo',
    tags: ['Open web indexing', 'Freshness', 'Q&A structure'],
  },
  {
    icon: Layers,
    title: 'Google AI Overviews Optimization',
    description:
      'Google AI Overviews draw from featured snippet candidates, strong E-E-A-T signals, and schema-rich pages. We align your content directly with the signals Google uses to select AI Overview sources, giving you presence at the top of the SERP before the organic links.',
    href: '/services/ai-search/google-ai-overviews-optimization',
    tags: ['Featured snippets', 'E-E-A-T', 'Schema markup'],
  },
  {
    icon: Eye,
    title: 'Claude SEO',
    description:
      'Claude does not have real-time web access by default, but projects from training data and partner integrations. We build the web footprint and editorial presence that increases your probability of appearing in Claude training corpora and tool-use contexts.',
    href: '/services/ai-search/claude-seo',
    tags: ['Training data presence', 'Editorial authority', 'Web footprint'],
  },
  {
    icon: Sparkles,
    title: 'Gemini SEO',
    description:
      'Google Gemini uses the same index as Google Search but applies different ranking logic for generative responses. We build the specific citation signals Gemini uses: structured data, authoritative sourcing, and E-E-A-T depth at page and domain level.',
    href: '/services/ai-search/gemini-seo',
    tags: ['Google index', 'Structured data', 'E-E-A-T signals'],
  },
]

const whyAISearchDistinct = [
  {
    traditional: 'Rank for a keyword',
    aiSearch: 'Be cited as the answer',
  },
  {
    traditional: 'Tune the page title and meta description',
    aiSearch: 'Structure content for LLM parsing and extraction',
  },
  {
    traditional: 'Build links for PageRank',
    aiSearch: 'Build entity co-citations for Knowledge Graph presence',
  },
  {
    traditional: 'Target search volume',
    aiSearch: 'Target conversational query intent',
  },
  {
    traditional: 'Measure impressions and clicks',
    aiSearch: 'Measure citation frequency and share of voice across LLMs',
  },
]

const caseStudyData = {
  subheading: 'AI Search in Practice',
  heading: 'From invisible in AI answers to cited in 47% of relevant queries.',
  challenge:
    'A B2B SaaS company serving DevOps teams had strong traditional SEO. Top-10 rankings for their core keywords, 40,000 monthly organic visitors. Zero presence in AI search. When their buyers asked ChatGPT, Perplexity, or Gemini about cloud infrastructure tools, competitor brands appeared in every generated answer. Ours did not. The gap was not content quality. It was content architecture: unstructured prose, no entity markup, no FAQ schema, no conversational query targeting.',
  solution:
    'We ran a full AI search audit across all four major LLMs, documenting exactly which sources were being cited and why. Then we rebuilt their content architecture: entity markup connecting them to Wikidata concepts in their space, 60+ Q&A format articles targeting conversational queries, FAQ schema on every product page, co-citation campaigns placing them alongside already-cited authorities. Parallel work on their Bing presence (for ChatGPT Browse) and Google E-E-A-T signals (for Gemini and AI Overviews).',
  results: [
    { metric: 'AI Citation Rate', improvement: '0 to 47%', timeframe: 'Cited in nearly half of relevant queries' },
    { metric: 'Brand Mentions Across LLMs', improvement: '+1,200%', timeframe: 'ChatGPT, Perplexity, Gemini combined' },
    { metric: 'Google AI Overview appearances', improvement: '+380%', timeframe: 'Tracked query set, 6 months' },
    { metric: 'Organic pipeline from AI-assisted search', improvement: '+85%', timeframe: 'Lead quality score vs paid channels' },
  ],
}

const faqItems = [
  {
    question: 'How is AI Search Optimization different from traditional SEO?',
    answer:
      'Traditional SEO targets rankings in a list of blue links. AI Search Optimization targets citations inside generated answers. The signals overlap partly (authority, structured data, content quality) but the logic is different. AI systems draw from multiple sources to assemble a response. Your content needs to be parseable, authoritative, and structured so the model can extract and attribute it. Most content built for SEO was designed for crawlers, not LLM retrieval pipelines.',
  },
  {
    question: 'Do I need to pick one LLM to target, or can I cover all of them?',
    answer:
      'You build for all of them through a shared foundation. Entity SEO, E-E-A-T signals, structured data, and content depth benefit every LLM. The platform-specific work happens at the edges: Bing presence for ChatGPT Browse, Google index signals for Gemini and AI Overviews, open web accessibility for Perplexity. A good AI search strategy addresses the foundation first, then layers in the platform-specific signals.',
  },
  {
    question: 'How do you measure AI search visibility?',
    answer:
      'We run structured prompt sets across each major LLM monthly, tracking which queries return your brand as a citation, which return competitors, and which return no citations at all. We report citation frequency, share of voice against named competitors, and trend lines month over month. This is not a proxy metric. it is direct measurement of whether AI systems are citing your brand.',
  },
  {
    question: 'What is the typical timeline for seeing results?',
    answer:
      'Perplexity and ChatGPT with Browse show changes fastest, typically 4-8 weeks after content and technical work is complete. Gemini and Google AI Overviews run on Google indexing cycles, 8-16 weeks for meaningful movement. Claude-specific improvements depend on training update cycles and partner integrations. We set expectations based on which LLMs matter most to your buyer journey.',
  },
  {
    question: 'Does AI Search Optimization replace traditional SEO?',
    answer:
      'No. They compound each other. Domain authority from traditional link building influences which sources AI systems trust. Topical authority from content clustering improves LLM retrieval. Technical SEO signals (crawlability, schema, page structure) feed both ranking algorithms and LLM parsing pipelines. The brands that dominate the next five years of search will run both programs in parallel, not choose between them.',
  },
  {
    question: 'How much does AI Search Optimization cost?',
    answer:
      'Engagements start at $2,500 per month for LLM visibility tracking plus foundational optimization. Full pillar programs covering AEO, entity SEO, and multi-platform citation optimization run $4,500 to $8,000 per month depending on content volume and competitive density. We scope every engagement with a free AI search audit first so you know what you are buying before you commit.',
  },
]

/* -------------------------------------------------------------------------- */
/* Sub-Services Section */
/* -------------------------------------------------------------------------- */

function SubServicesSection() {
  return (
    <div id="services" className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Nine Specialized Services</Subheading>
          <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
            Every AI citation pathway, covered.
          </Heading>
          <Lead className="mt-6 max-w-2xl mx-auto">
            Each LLM has a distinct mechanism for deciding what to cite. We build the signals that work for each one, on a foundation that lifts all of them.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-3">
          {subServices.map((service) => {
            const Icon = service.icon
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg block"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <Icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate mb-5">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs uppercase tracking-[0.08em] text-ash bg-cream px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Why AI Search Is Distinct */
/* -------------------------------------------------------------------------- */

function WhyDistinctSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <Subheading>Traditional SEO vs AI Search</Subheading>
            <Heading as="h2" className="mt-2">
              Different goal. Different signals. Different measurement.
            </Heading>
            <Lead className="mt-6">
              Ahrefs analyzed 75,000 brands and found a 0.66-0.71 correlation between branded web mentions and AI visibility. The brands with the strongest AI presence are not necessarily the ones ranking #1 on Google. They are the ones with the deepest entity footprints, the most citable content structures, and the widest co-citation networks.
            </Lead>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
            <div className="bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-6">
                Traditional SEO
              </p>
              <ul className="space-y-4">
                {whyAISearchDistinct.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate">
                    <span className="text-ash mt-0.5">-</span>
                    {item.traditional}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-6">
                AI Search Optimization
              </p>
              <ul className="space-y-4">
                {whyAISearchDistinct.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {item.aiSearch}
                  </li>
                ))}
              </ul>
            </div>
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
          title="AI search optimization frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function AISearchPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search',
          name: 'AI Search Optimization Services',
          description:
            'AI search optimization services covering AEO, GEO, entity SEO, LLM visibility tracking, and citation optimization for ChatGPT, Perplexity, Gemini, and Google AI Overviews.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI Search Services',
            itemListElement: subServices.map((s, i) => ({
              '@type': 'Offer',
              position: i + 1,
              itemOffered: {
                '@type': 'Service',
                name: s.title,
                url: `https://theprojectseo.com${s.href}`,
              },
            })),
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
      <SubServicesSection />
      <WhyDistinctSection />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Start with a Free AI Search Audit"
        heading="Find out where your brand stands across every major LLM."
        lead="We run your brand through structured prompt sets across ChatGPT, Perplexity, Gemini, and Claude, then report which queries cite you, which cite competitors, and what it would take to shift the balance."
        benefits={[
          'Free AI search audit across 4 major LLMs',
          'Citation gap analysis vs named competitors',
          'Prioritized 90-day action plan',
        ]}
        submitText="Request the AI Search Audit"
      />
      <Footer />
    </main>
  )
}
