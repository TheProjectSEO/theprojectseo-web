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
  Layers,
  FileText,
  Network,
  Database,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Generative Engine Optimization (GEO) Services | TheProjectSEO',
  description:
    'GEO services that make your content retrievable inside LLM-generated responses. Semantic depth, structured data, and content density built for AI synthesis pipelines.',
  alternates: {
    canonical: '/services/ai-search/geo',
  },
  openGraph: {
    title: 'Generative Engine Optimization (GEO) Services | TheProjectSEO',
    description:
      'GEO is about retrieval. When an LLM generates a response on your topic, your content needs to be in the pool it draws from. We build the signals that get you there.',
    url: 'https://theprojectseo.com/services/ai-search/geo',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Generative Engine Optimization',
  title: 'GEO: Be the source',
  accentWord: 'LLMs retrieve',
  titleAfterAccent: '',
  description:
    'When a generative AI assembles a response about your industry, it draws from a pool of sources it has indexed and determined trustworthy. GEO is the practice of ensuring your content is in that pool. Different from AEO in focus: less about being the single cited answer, more about being part of what gets built into the response.',
  ctaPrimaryText: 'Get a GEO Assessment',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Compare AEO vs GEO',
  ctaSecondaryHref: '/services/ai-search/aeo',
}

const statsData = [
  { value: '65%', label: 'Of LLM responses draw from 5+ sources' },
  { value: '3x', label: 'More retrieval for semantically dense content' },
  { value: '8wk', label: 'Typical time to first GEO retrieval gains' },
  { value: '0.71', label: 'Correlation: web mentions to AI visibility (Ahrefs)' },
]

const servicesData = {
  subheading: 'What GEO Covers',
  heading: 'Five disciplines that drive LLM retrieval.',
  lead: 'LLMs retrieve content that is deep, structured, authoritative, and topically dense. GEO builds all four qualities into your content architecture.',
  services: [
    {
      icon: FileText,
      title: 'Semantic Content Density',
      description:
        'Shallow content does not get retrieved. GEO requires pages that cover a topic with the kind of depth an LLM needs to generate a useful response. We build content clusters with the semantic density that makes your domain authoritative to AI retrieval systems.',
      features: [
        'Topic cluster architecture design',
        'Content depth audits against retrieved competitors',
        'Semantic keyword clustering per cluster',
        'Supporting page development at scale',
      ],
    },
    {
      icon: Layers,
      title: 'Structured Data for Synthesis',
      description:
        'LLMs parse structured data more reliably than unstructured prose. We implement the schema markup patterns that make your content machine-readable: Article, HowTo, FAQ, Dataset, and structured product and service markup that AI systems can extract and attribute.',
      features: [
        'Article and HowTo schema implementation',
        'Dataset and Table markup for data-heavy pages',
        'Product and Service schema optimization',
        'BreadcrumbList and SiteLinksSearchBox',
      ],
    },
    {
      icon: Network,
      title: 'Topical Authority Architecture',
      description:
        'AI systems evaluate sources at the domain level. A site that covers one topic deeply is more likely to be retrieved than a site that covers many topics shallowly. We design topical authority structures that signal domain expertise to retrieval pipelines.',
      features: [
        'Topical silo architecture design',
        'Internal linking for authority consolidation',
        'Pillar and cluster content planning',
        'Competing page consolidation and redirects',
      ],
    },
    {
      icon: Database,
      title: 'Original Data and Research',
      description:
        'LLMs preferentially retrieve primary sources. Original survey data, original research, proprietary statistics. If your content cites industry reports, you are competing with the reports themselves. If you publish original data, you become the primary source.',
      features: [
        'Original research design and publication',
        'Data visualization for shareability',
        'Statistics page architecture',
        'Research syndication for co-citation building',
      ],
    },
    {
      icon: BarChart3,
      title: 'GEO Performance Tracking',
      description:
        'We track retrieval through structured prompt testing: multi-part questions that require synthesis rather than direct answers. These prompts mirror the real queries where GEO matters most, giving us a direct read on whether your content is entering the retrieval pool.',
      features: [
        'Synthesis prompt test sets',
        'Retrieval frequency tracking',
        'Source attribution monitoring',
        'Competitive share of retrieval reporting',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Retrieval Gap Analysis',
    description:
      'We build a set of synthesis-type prompts for your category and run them across major LLMs. The output tells us what sources are currently being retrieved, which of those are competitors, and what those sources have that you do not. That gap becomes the brief.',
  },
  {
    number: '02',
    title: 'Content Architecture Audit',
    description:
      'We assess your existing content cluster structure, semantic depth, and schema implementation against the sources that are currently getting retrieved. Most gaps fall into three categories: insufficient depth, poor structure for machine parsing, or missing topical coverage.',
  },
  {
    number: '03',
    title: 'GEO Content Build',
    description:
      'Content depth expansion, structured data implementation, and original research publication happen in parallel sprints. We sequence by retrieval gap size: topics where the gap is largest and where your domain has existing credibility to build on move first.',
  },
  {
    number: '04',
    title: 'Monthly Retrieval Tracking',
    description:
      'Every month we re-run the synthesis prompt set and report changes in retrieval frequency. GEO progress is measured in whether your content enters the retrieval pool more often, whether it appears alongside more authoritative sources, and whether attribution accuracy improves.',
  },
]

const caseStudyData = {
  subheading: 'GEO in Practice',
  heading: 'How a HR tech company went from absent to retrieved in 5 months.',
  challenge:
    'An HR technology company published solid blog content for three years. When we ran retrieval prompts about workforce planning, employee onboarding, and HR software selection across ChatGPT and Perplexity, competitors appeared in every generated response. Our client did not appear once. The content existed. It was not retrievable. Shallow topic coverage, no structured data, no original research, and no topical authority architecture.',
  solution:
    'Complete GEO program: restructured 45 existing articles with semantic depth expansion, implemented Article and FAQ schema across the content cluster, published two original research pieces (survey of 500 HR managers) that became primary sources, built a topical silo around "HR technology selection" with 12 supporting cluster pages, and added structured data to all product comparison pages.',
  results: [
    { metric: 'LLM Retrieval Rate', improvement: '0 to 38%', timeframe: 'Synthesis prompts on target topics' },
    { metric: 'Perplexity Citations', improvement: '+720%', timeframe: 'Original research pieces alone' },
    { metric: 'Organic Traffic to Content Cluster', improvement: '+240%', timeframe: 'Traditional SEO lift from same work' },
    { metric: 'Qualified Leads from AI-assisted research', improvement: '+55%', timeframe: 'Quarter 2 vs Quarter 1' },
  ],
}

const faqItems = [
  {
    question: 'What is the difference between AEO and GEO?',
    answer:
      'AEO targets being cited as the direct answer to specific questions. The buyer asks "What is the best CRM for small businesses?" and you want to be the named recommendation. GEO targets being retrieved as part of a generated response to broader topics. The buyer asks "Help me understand how to choose CRM software" and your content is woven into the generated explanation. Both matter. The difference is the type of query and how AI systems use your content.',
  },
  {
    question: 'Why does content depth matter for GEO?',
    answer:
      'LLMs retrieve sources that can contribute meaningfully to a generated response. Shallow content does not have enough substance to contribute. A 500-word overview of a topic competes with 3,000-word deep dives from authoritative publishers. The shallow page loses every time. GEO requires the kind of depth that gives an AI system something worth incorporating into a generated answer.',
  },
  {
    question: 'Does GEO work differently across ChatGPT, Perplexity, and Gemini?',
    answer:
      'Yes, with a shared foundation. Perplexity indexes the open web broadly and retrieves based on recency, structure, and source authority. ChatGPT Browse uses Bing signals. Gemini uses the Google index with emphasis on E-E-A-T. The GEO foundation (depth, structure, original research) benefits all three. The platform-specific work happens at the edges: Bing optimization for ChatGPT, freshness signals for Perplexity, E-E-A-T depth for Gemini.',
  },
  {
    question: 'How does original research factor into GEO?',
    answer:
      'Original data is the most powerful GEO asset you can create. When you publish original survey data or original research, you become the primary source rather than a secondary cite. LLMs preferentially retrieve primary sources because they provide information not available elsewhere. Two or three well-distributed original research pieces can do more for your retrieval rate than 20 well-optimized blog posts.',
  },
  {
    question: 'How long does GEO take to show measurable results?',
    answer:
      'Content depth expansion and structured data show results in 6-10 weeks as LLMs re-index and update their retrieval pools. Original research shows results faster, often 4-6 weeks for Perplexity, which prioritizes recent, citable sources. The full retrieval rate improvement from a complete GEO program typically materializes over 4-6 months. We track against a baseline from day one so you can see progress at each monthly reporting cycle.',
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
          <Subheading>Our GEO Process</Subheading>
          <Heading as="h2" className="mt-2">
            From retrieval gap to retrieval presence.
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
          title="Generative engine optimization frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function GEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/geo',
          name: 'Generative Engine Optimization (GEO) Services',
          description:
            'GEO services that make your content retrievable inside LLM-generated responses. Semantic depth, structured data, and content density built for AI synthesis pipelines.',
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
        subheading="Start with a GEO Assessment"
        heading="Find out whether your content is being retrieved by LLMs."
        lead="We run synthesis prompts for your category across major AI systems and show you exactly what is being retrieved, why, and what it would take to get your content into that pool."
        benefits={[
          'Free LLM retrieval gap analysis',
          'Competitive source attribution report',
          'Content architecture recommendations',
        ]}
        submitText="Request the GEO Assessment"
      />
      <Footer />
    </main>
  )
}
