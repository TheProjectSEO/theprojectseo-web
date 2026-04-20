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
  FileText,
  MessageSquare,
  BarChart3,
  Network,
  Award,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Answer Engine Optimization (AEO) Services | TheProjectSEO',
  description:
    'Answer Engine Optimization services that get your brand cited in ChatGPT, Perplexity, Gemini, and other AI systems. Content architecture, citation signals, and E-E-A-T built for AI retrieval.',
  alternates: {
    canonical: '/services/ai-search/aeo',
  },
  openGraph: {
    title: 'Answer Engine Optimization (AEO) Services | TheProjectSEO',
    description:
      'AEO is not about ranking. It is about being the cited answer. We build the content structure, entity signals, and authoritative sourcing that make AI systems choose your brand.',
    url: 'https://theprojectseo.com/services/ai-search/aeo',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Answer Engine Optimization',
  title: 'Answer Engine Optimization',
  accentWord: '(AEO) Services',
  titleAfterAccent: '',
  description:
    'AEO is a specific problem: when someone asks an AI system a question relevant to your business, your brand either appears as the cited answer or it does not. We build the content architecture, authority signals, and citation pathways that move you into the cited column.',
  ctaPrimaryText: 'Get an AEO Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See the Full AI Search Pillar',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '47%', label: 'Max AI citation rate achieved for clients' },
  { value: '2-4mo', label: 'Typical time to first measurable citation gains' },
  { value: '+1,200%', label: 'Brand mentions increase across LLMs' },
  { value: '75K', label: 'Brands analyzed in Ahrefs AI citation study' },
]

const servicesData = {
  subheading: 'What AEO Covers',
  heading: 'Five components that move the needle on AI citations.',
  lead: 'AEO is not one tactic. It is a program of interconnected signals that, together, increase the probability an AI system selects your content as the cited answer.',
  services: [
    {
      icon: FileText,
      title: 'Question-Answer Content Architecture',
      description:
        'AI systems extract citations from content that is structured to answer specific questions directly. We audit your existing content for answer-readiness and rebuild it into formats AI systems can parse, attribute, and cite.',
      features: [
        'Conversational query research for your industry',
        'Q&A content structure implementation',
        'Direct-answer paragraph optimization',
        'FAQ schema markup on all key pages',
      ],
    },
    {
      icon: Award,
      title: 'E-E-A-T Signal Building',
      description:
        'Experience, Expertise, Authoritativeness, and Trustworthiness are not just Google ranking factors. They are the signals AI systems use to decide which sources are reliable enough to cite. We build the on-page and off-page proof of E-E-A-T that AI systems weigh.',
      features: [
        'Author bio and credential optimization',
        'Original research and data publication',
        'Third-party mention and citation campaigns',
        'Trust signal architecture (awards, press, certifications)',
      ],
    },
    {
      icon: Network,
      title: 'Entity and Citation Infrastructure',
      description:
        'Being cited requires being recognized as an entity. We build the Knowledge Graph connections, sameAs markup, and co-citation network that establish your brand as a known, trusted entity in your domain rather than an anonymous web page.',
      features: [
        'Organization and product schema implementation',
        'Wikidata and Wikipedia presence building',
        'Co-citation campaigns alongside recognized authorities',
        'Brand entity consolidation across web properties',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Conversational Query Targeting',
      description:
        'The queries people type into AI systems are different from the queries they type into Google. Longer, more specific, phrased as questions or tasks. We build content that targets the exact conversational query patterns your buyers use with AI assistants.',
      features: [
        'Conversational keyword research',
        'Long-tail question cluster mapping',
        'Intent alignment per AI platform',
        'Semantic content clustering',
      ],
    },
    {
      icon: BarChart3,
      title: 'Citation Monitoring and Iteration',
      description:
        'You cannot improve what you cannot measure. We run structured prompt sets across major LLMs monthly, track where your brand is cited versus where competitors are cited, and use that data to rank the next round of work by citation opportunity size.',
      features: [
        'Monthly LLM citation audits',
        'Competitor citation gap analysis',
        'Citation frequency trending',
        'Optimization priority scoring',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'AI Citation Audit',
    description:
      'We run your brand and your top 5 competitors through structured prompt sets across ChatGPT, Perplexity, Gemini, and Claude. The output is a citation map: which queries cite you, which cite competitors, and which return no citations at all. This tells us exactly where the opportunity is before we write a single word.',
  },
  {
    number: '02',
    title: 'Content and Entity Architecture',
    description:
      'We assess your existing content for answer-readiness: Are pages structured with direct-answer paragraphs? Is there FAQ schema? Are author credentials visible? Do Knowledge Graph connections exist? The gap analysis becomes the build list for Phase 3.',
  },
  {
    number: '03',
    title: 'AEO Implementation',
    description:
      'Content restructuring, schema implementation, entity markup, author credentialing, and co-citation outreach all happen in parallel sprints. We sequence by citation opportunity size: the queries where competitors are getting cited and you are not are worth more than queries where nobody is being cited yet.',
  },
  {
    number: '04',
    title: 'Monthly Measurement and Refinement',
    description:
      'Every month we re-run the structured prompt audit, compare to baseline, and report citation frequency changes. Results drive the next sprint. AEO is not a one-time project. The brands that dominate AI citation are the ones running continuous optimization cycles.',
  },
]

const caseStudyData = {
  subheading: 'AEO Case Study',
  heading: 'Zero to 47% citation rate in 6 months for a B2B software brand.',
  challenge:
    'A cloud infrastructure software company had 40,000 monthly organic visitors and no AI search presence. Their DevOps and CTO buyers were using ChatGPT and Perplexity daily to research tooling decisions. Competitors appeared in every generated answer. Our client did not appear in any. They were winning SEO and losing the conversation that happened before anyone clicked a result.',
  solution:
    'Full AEO program: structured prompt audit to map the citation gap, content architecture rebuild for 80 pages, FAQ schema on all product and comparison pages, entity markup connecting them to cloud infrastructure concepts in Wikidata, and a co-citation campaign placing them in roundup content alongside already-cited authorities. Parallel Bing optimization work for ChatGPT Browse and E-E-A-T signal building for Gemini.',
  results: [
    { metric: 'AI Citation Rate', improvement: '0 to 47%', timeframe: 'Cited in nearly half of relevant queries' },
    { metric: 'ChatGPT Mentions', improvement: '+890%', timeframe: 'Browse mode, tracked query set' },
    { metric: 'Perplexity Citations', improvement: '+1,100%', timeframe: '6-month tracking period' },
    { metric: 'Pipeline from AI-assisted search', improvement: '+62%', timeframe: 'Compared to pre-AEO baseline' },
  ],
}

const faqItems = [
  {
    question: 'What exactly is Answer Engine Optimization?',
    answer:
      'AEO is the practice of optimizing content and brand signals so that AI systems choose your content as the cited source when answering questions relevant to your business. Unlike traditional SEO, which places you in a ranked list, AEO gets you cited inside the generated answer itself. The buyer reads the AI response, sees your brand named as the source, and arrives at your site with high purchase intent.',
  },
  {
    question: 'How is AEO different from GEO (Generative Engine Optimization)?',
    answer:
      'AEO focuses on being the cited answer to specific questions. The buyer intent is "I want an answer" and you want to be that answer. GEO focuses on being retrievable as a source when an AI assembles a broader topic response. The buyer intent is "I want to understand a subject" and you want to be part of what gets assembled. Similar tools, different framing. We build both programs but target them at different content types and query intents.',
  },
  {
    question: 'How do you measure whether AEO is working?',
    answer:
      'We run structured prompt sets monthly across all major LLMs. Typically 50-100 queries per client, covering the core questions their buyers ask AI assistants. We track citation frequency (what percentage of queries return your brand), citation position (are you the primary source or a secondary mention), and share of voice versus named competitors. This is direct measurement, not a proxy.',
  },
  {
    question: 'Can guaranteed citations be provided?',
    answer:
      'No. AI citation patterns are not fully deterministic, and no agency that claims guaranteed placements is being honest with you. What we can guarantee is a methodology grounded in how AI systems actually select sources: content structure, E-E-A-T signals, entity recognition, and authority signals. Our clients typically see citation rates rise from near-zero to 30-50% of relevant queries within 6 months.',
  },
  {
    question: 'Which AI platforms does AEO optimization cover?',
    answer:
      'The foundational AEO program covers ChatGPT (including Browse mode), Perplexity, Google Gemini, and Claude. Each platform has distinct citation mechanisms that we address: Bing optimization for ChatGPT, open web freshness for Perplexity, E-E-A-T and schema for Gemini, training data footprint for Claude. The platforms are addressed through one unified strategy with platform-specific execution layers.',
  },
  {
    question: 'How long does AEO take to show results?',
    answer:
      'Perplexity and ChatGPT with Browse are the fastest movers: typically 4-8 weeks after content and technical implementation. Gemini and Google AI Overviews run on Google crawl cycles, so meaningful movement is 8-16 weeks. Claude operates on training cycles with no publicly documented update frequency. We set realistic timelines per platform at the start of every engagement so you know what to expect and when.',
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
            Four phases. Audit, architecture, implementation, iteration.
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
          title="Answer engine optimization frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function AEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/aeo',
          name: 'Answer Engine Optimization (AEO) Services',
          description:
            'AEO services that get your brand cited in ChatGPT, Perplexity, Gemini, and other AI systems. Content architecture, E-E-A-T signals, and citation infrastructure built for AI retrieval.',
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
          areaServed: { '@type': 'Country', name: 'Worldwide' },
          about: [
            { '@type': 'Thing', name: 'Answer Engine Optimization', sameAs: 'https://en.wikipedia.org/wiki/Answer_engine' },
            { '@type': 'Thing', name: 'ChatGPT', sameAs: 'https://www.wikidata.org/wiki/Q115564437' },
            { '@type': 'Thing', name: 'Perplexity AI', sameAs: 'https://www.wikidata.org/wiki/Q117813757' },
          ],
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
        subheading="Ready to Be the Cited Answer?"
        heading="Start with a free AEO audit of your brand."
        lead="We will run your brand through structured prompts across ChatGPT, Perplexity, Gemini, and Claude, map where you are and are not being cited, and return a prioritized action plan within 5 business days."
        benefits={[
          'Free multi-LLM citation audit',
          'Competitor citation gap report',
          'Prioritized 90-day AEO roadmap',
        ]}
        submitText="Request the AEO Audit"
      />
      <Footer />
    </main>
  )
}
