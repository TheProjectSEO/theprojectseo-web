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
  Brain,
  Award,
  FileText,
  Globe,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Claude SEO | Get Cited in Claude AI | TheProjectSEO',
  description:
    'Claude SEO services that build the web presence and editorial authority that influences Claude AI citations. Training data footprint, high-authority publication mentions, and entity recognition.',
  alternates: {
    canonical: '/services/ai-search/claude-seo',
  },
  openGraph: {
    title: 'Claude SEO | Get Cited in Claude AI | TheProjectSEO',
    description:
      'Claude projects from training data and partner integrations rather than real-time web search. We build the editorial presence and entity signals that influence how Claude describes your brand.',
    url: 'https://theprojectseo.com/services/ai-search/claude-seo',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Claude SEO',
  title: 'Get Cited in',
  accentWord: 'Claude AI',
  titleAfterAccent: '',
  description:
    'Claude does not run real-time web searches by default. It generates responses from training data and partner integrations. Influencing Claude citations means building the web presence, editorial authority, and entity signals that are well-represented in the sources Claude learns from. This is a distinctly different program from Perplexity or ChatGPT citation work.',
  ctaPrimaryText: 'Get a Claude Presence Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Compare All LLM Services',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '8%', label: 'Claude AI share of AI assistant queries' },
  { value: 'Growing', label: 'Enterprise adoption rate for Claude' },
  { value: 'Training', label: 'Primary citation source, not real-time web' },
  { value: '12mo', label: 'Typical training data lag before web content is incorporated' },
]

const servicesData = {
  subheading: 'Claude Citation Pathway',
  heading: 'How Claude learns about brands and how we build your presence.',
  lead: 'Because Claude draws from training data, the optimization playbook is different. We focus on building the kind of web presence that gets incorporated into training datasets: high-authority publications, entity verification, and consistent authoritative coverage in sources Claude trusts.',
  services: [
    {
      icon: Award,
      title: 'High-Authority Publication Placement',
      description:
        'Claude\'s training data is weighted toward high-quality, editorial-reviewed publications: major news outlets, peer-reviewed sources, respected industry publications, and well-known wikis. Building your brand\'s presence in these sources is the most direct path to influencing how Claude describes your company and products.',
      features: [
        'Target publication identification (training-data weighted)',
        'PR and editorial pitch strategy',
        'Expert contributor placement in industry press',
        'Media mention campaign for brand authority',
      ],
    },
    {
      icon: Globe,
      title: 'Wikipedia and Wikidata Presence',
      description:
        'Wikipedia is one of the most heavily represented sources in LLM training datasets, including Claude. A Wikipedia article about your organization, or citations to your work in relevant Wikipedia articles, directly influences what Claude knows about your brand. We assess notability requirements and pursue both Wikipedia and Wikidata as foundational presence.',
      features: [
        'Wikipedia notability assessment',
        'Wikidata entity creation and maintenance',
        'Wikipedia citation building for existing articles',
        'Infobox and reference list optimization',
      ],
    },
    {
      icon: FileText,
      title: 'Authoritative Content Creation',
      description:
        'Original research, expert guides, and definitional content from authoritative domains are disproportionately represented in training datasets. We create and place the kind of content that AI companies consider training-worthy: original data, in-depth guides on well-defined topics, and expert analyses that other sources cite.',
      features: [
        'Original research and survey design',
        'Definitional and reference content creation',
        'Expert analysis pieces for authority publications',
        'Data-driven content for high-citation potential',
      ],
    },
    {
      icon: Brain,
      title: 'Entity Consistency Across the Web',
      description:
        'Claude learns about entities from consistent, corroborating signals across many sources. Inconsistent information (different founding years, different product names, different descriptions in different publications) creates uncertainty in the model\'s representation. We audit your entity consistency and build a correction campaign where information is wrong or contradictory.',
      features: [
        'Entity consistency audit across major web sources',
        'Correction requests for inaccurate third-party descriptions',
        'Consistent attribute building across web properties',
        'sameAs schema for entity disambiguation',
      ],
    },
    {
      icon: BarChart3,
      title: 'Claude Citation Baseline and Monitoring',
      description:
        'We establish a baseline of how Claude currently describes your organization, products, and leadership, then track changes over time. Because Claude does not update in real time, we monitor at longer intervals (quarterly for model updates) and track which publications are most likely influencing Claude\'s current knowledge about your brand.',
      features: [
        'Claude description baseline across topic areas',
        'Attribute accuracy assessment',
        'Source attribution analysis',
        'Quarterly model update tracking',
      ],
    },
  ],
}

const howClaudeWorks = {
  heading: 'How Claude Citations Actually Work',
  description:
    'Claude (Anthropic\'s AI) generates responses primarily from its training data, not from real-time web retrieval. This makes Claude citation structurally different from Perplexity or ChatGPT Browse citation work. The levers are different: editorial presence in training-weighted sources, entity consistency, and building a web footprint in high-quality publications that training pipelines weight heavily. The timeline is also different: changes to your web presence today may not appear in Claude responses until the next training cycle, which can be 6-18 months depending on the model version.',
}

const processSteps = [
  {
    number: '01',
    title: 'Claude Knowledge Baseline',
    description:
      'We query Claude across 30-50 prompts covering your brand, products, industry position, and key competitors. The output tells us what Claude currently knows about your brand: which facts it gets right, which it gets wrong, which it is uncertain about, and which it does not know at all. This baseline is the foundation for everything that follows.',
  },
  {
    number: '02',
    title: 'Source Analysis',
    description:
      'We trace where Claude\'s current knowledge about your brand likely comes from: which publications, which Wikipedia articles, which research papers or industry reports. This tells us which source categories matter most for your category and which publication relationships are worth pursuing.',
  },
  {
    number: '03',
    title: 'Presence Building',
    description:
      'High-authority publication placement, Wikidata development, original research, and entity consistency correction all happen in parallel long-term sprints. Claude SEO is a sustained program. We scope 6-12 month engagements because training data cycles require that timeline to show meaningful impact.',
  },
  {
    number: '04',
    title: 'Quarterly Baseline Updates',
    description:
      'We re-run the Claude knowledge baseline quarterly, tracking whether description accuracy is improving and whether new facts about your brand are being correctly incorporated. Major Claude model releases trigger additional baseline audits to capture how training updates have affected your brand\'s representation.',
  },
]

const caseStudyData = {
  subheading: 'Claude SEO in Practice',
  heading: 'How a healthcare AI company corrected Claude\'s description of their product.',
  challenge:
    'A healthcare AI company used Claude as their primary AI assistant internally and recommended it to clients. When they queried Claude about their own product, Claude described it incorrectly: conflated it with a competitor, described features they did not have, and omitted their primary differentiator. The source of the confusion was inconsistent coverage in healthcare IT press where two products with similar names were described in ambiguous ways.',
  solution:
    'Entity disambiguation campaign: consistent naming and description across all web properties, Wikidata entity creation with precise attribute population, correction requests to three healthcare IT publications that had inaccurate descriptions, Wikipedia citation building in relevant medical AI articles, and two original research pieces published in high-authority healthcare publications that established the correct product description in well-cited sources.',
  results: [
    { metric: 'Claude Description Accuracy', improvement: '40% to 91%', timeframe: 'Over two model update cycles' },
    { metric: 'Inaccurate Citations Corrected', improvement: '7 of 9', timeframe: 'Third-party source corrections' },
    { metric: 'Wikipedia Citations Earned', improvement: '0 to 4', timeframe: 'Relevant medical AI articles' },
    { metric: 'High-Authority Publication Mentions', improvement: '+12 new', timeframe: 'Healthcare and AI press' },
  ],
}

const faqItems = [
  {
    question: 'How does Claude decide what it knows about a brand?',
    answer:
      'Claude\'s knowledge comes from its training data, which includes a curated subset of the web, books, and other text sources, processed before the model\'s training cutoff date. Unlike Perplexity or ChatGPT Browse, Claude does not search the web in real time when answering most queries. What it knows about your brand is what was well-represented in the sources Anthropic used to train the model. Building Claude visibility means building presence in those source categories.',
  },
  {
    question: 'Can I get Claude to cite my website in real time?',
    answer:
      'Not in the standard Claude interface, which does not have real-time web search. Claude with tools (available via the API and some integrations) can perform web searches and cite current sources, but the base Claude model generates from training data. Our Claude SEO program focuses on the training data pathway for the base model and, separately, on ensuring your content is accessible and well-structured for Claude when tool-use contexts do involve web retrieval.',
  },
  {
    question: 'How is Claude SEO different from Perplexity SEO?',
    answer:
      'Perplexity indexes the open web daily and cites current sources in real time. Citation changes can appear in 4-8 weeks. Claude draws from training data with a cutoff that may be 6-18 months behind the current date. The pathway for Perplexity is freshness, structure, and open web accessibility. The pathway for Claude is high-authority publication presence, Wikidata coverage, and entity consistency across the web: signals that compound over a longer timeframe.',
  },
  {
    question: 'How long does Claude SEO take to show results?',
    answer:
      'Longer than any other LLM. The core constraint is that Claude\'s training data has a cutoff date, and even newly published content may take 6-18 months to influence Claude\'s responses after the next model training cycle. We set that expectation at the start: Claude SEO is a long-duration investment in editorial authority, not a quick-win program. The brands that start this work now will have the strongest Claude presence 12-18 months from now.',
  },
  {
    question: 'Is Claude SEO worth investing in given the long timeline?',
    answer:
      'That depends on your buyer profile. If your buyers use Claude as their primary AI assistant for research and decision-making, building Claude visibility has high strategic value even with the long timeline. Enterprise buyers in particular tend to use Claude through Anthropic\'s API or enterprise integrations. If your buyers primarily use ChatGPT or Perplexity, those programs should take priority. We assess your buyer AI usage profile at the start of every engagement to advise on platform prioritization.',
  },
  {
    question: 'What can I do if Claude is describing my brand incorrectly right now?',
    answer:
      'The most effective correction strategy is to build accurate, authoritative coverage in the sources Claude trusts: high-authority publications, Wikipedia, Wikidata. Correcting inaccurate third-party descriptions is also important. Direct channels to Anthropic for knowledge corrections exist but are limited in scope. Our entity consistency program addresses the root cause of Claude inaccuracies rather than trying to correct a symptom while the underlying source problem persists.',
  },
]

/* -------------------------------------------------------------------------- */
/* How Claude Works Section */
/* -------------------------------------------------------------------------- */

function HowClaudeWorksSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="max-w-4xl mx-auto">
          <Subheading>Understanding the Claude Citation Mechanism</Subheading>
          <Heading as="h2" className="mt-2">
            {howClaudeWorks.heading}
          </Heading>
          <p className="mt-8 text-base leading-relaxed text-slate">
            {howClaudeWorks.description}
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-3">
            <div className="bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-3">ChatGPT</p>
              <h3 className="font-heading text-base font-semibold text-ink mb-3">Real-time Bing retrieval</h3>
              <p className="text-sm text-slate">Cites sources from Bing Search in Browse mode. Current content, authority-weighted.</p>
            </div>
            <div className="bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-3">Perplexity</p>
              <h3 className="font-heading text-base font-semibold text-ink mb-3">Real-time open web</h3>
              <p className="text-sm text-slate">Indexes the open web daily. Cites fresh, accessible, structured sources.</p>
            </div>
            <div className="bg-paper p-8">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-3">Claude</p>
              <h3 className="font-heading text-base font-semibold text-ink mb-3">Training data projection</h3>
              <p className="text-sm text-slate">Generates from training data. What it knows is what was in its training corpus at cutoff.</p>
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
          <Subheading>Our Claude SEO Process</Subheading>
          <Heading as="h2" className="mt-2">
            Baseline, source analysis, presence building, quarterly tracking.
          </Heading>
          <Lead className="mt-6 max-w-2xl mx-auto">
            Claude SEO is a long-duration program. We scope 6-12 month engagements because training data cycles require that timeline to show meaningful impact.
          </Lead>
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
          title="Claude SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/claude-seo',
          name: 'Claude SEO Services',
          description:
            'Claude citation services: high-authority publication presence, Wikidata entity building, entity consistency, and training data footprint development for Claude AI.',
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
            { '@type': 'Thing', name: 'Claude (AI)', sameAs: 'https://www.wikidata.org/wiki/Q120180616' },
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
      <HowClaudeWorksSection />
      <ServicesGrid {...servicesData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <FAQSection />
      <CTAFormSection
        subheading="Start with a Claude Knowledge Baseline"
        heading="Find out what Claude currently knows, and does not know, about your brand."
        lead="We query Claude across 50 prompts covering your brand, products, competitors, and industry position, then report current accuracy, key gaps, and the source-building priorities that would improve your Claude representation over the next 12 months."
        benefits={[
          'Free Claude knowledge baseline audit',
          'Entity accuracy assessment and gap report',
          'Source-building priority recommendations',
        ]}
        submitText="Request the Claude Baseline Audit"
      />
      <Footer />
    </main>
  )
}
