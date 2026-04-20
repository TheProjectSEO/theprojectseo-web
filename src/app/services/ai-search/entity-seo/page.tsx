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
  Network,
  Database,
  Link2,
  Search,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Entity SEO & Knowledge Graph Optimization | TheProjectSEO',
  description:
    'Entity SEO services that build your Knowledge Graph presence, sameAs connections, and co-citation network. AI systems reason about entities. We make sure yours is recognized.',
  alternates: {
    canonical: '/services/ai-search/entity-seo',
  },
  openGraph: {
    title: 'Entity SEO & Knowledge Graph Optimization | TheProjectSEO',
    description:
      'AI systems do not rank pages. They reason about entities. We build the Knowledge Graph connections, sameAs markup, and co-citation network that make your brand an entity AI systems trust.',
    url: 'https://theprojectseo.com/services/ai-search/entity-seo',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Entity SEO',
  title: 'Entity SEO and',
  accentWord: 'Knowledge Graph',
  titleAfterAccent: 'Optimization',
  description:
    'AI systems reason about entities, not pages. Your brand either exists as a recognized entity in the Knowledge Graph, with verified attributes and co-citation signals, or it is an anonymous web page that AI models cannot confidently attribute. Entity SEO fixes the latter.',
  ctaPrimaryText: 'Get an Entity Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore AI Search Services',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '30%', label: 'Higher AI citation rate for entities with Wikidata presence' },
  { value: '4x', label: 'More Knowledge Panel appearances after entity build' },
  { value: '0.71', label: 'Branded mentions to AI visibility correlation (Ahrefs)' },
  { value: '12wk', label: 'Typical timeline for Knowledge Graph recognition' },
]

const servicesData = {
  subheading: 'What Entity SEO Covers',
  heading: 'Five pillars of Knowledge Graph presence.',
  lead: 'A recognized entity has verified attributes, authoritative references, and co-citation signals that AI systems use to confirm identity and trustworthiness. We build all five pillars.',
  services: [
    {
      icon: Database,
      title: 'Wikidata and Wikipedia Presence',
      description:
        'Wikidata is the machine-readable backbone of the web\'s entity graph. Google, ChatGPT, and other AI systems pull entity attributes from it. We build and maintain accurate Wikidata entries for your organization, key products, and leadership, and where applicable, pursue Wikipedia notability.',
      features: [
        'Wikidata entity creation and attribute population',
        'sameAs cross-linking to authoritative databases',
        'Wikipedia article assessment and editing support',
        'Annual entity attribute maintenance',
      ],
    },
    {
      icon: Network,
      title: 'Structured Data Density',
      description:
        'Schema.org markup is how you communicate entity attributes to AI systems in a machine-readable format. We implement full structured data coverage across your site: Organization, Product, Person, Service, and Event schemas with the attribute depth that feeds AI knowledge bases.',
      features: [
        'Organization schema with full attribute coverage',
        'Product and Service schema implementation',
        'Person schema for key team members',
        'sameAs attribute linking to verified sources',
      ],
    },
    {
      icon: Link2,
      title: 'Co-Citation Strategy',
      description:
        'AI systems derive entity trustworthiness partly from co-citation signals: being mentioned alongside recognized authorities in relevant contexts. We build your co-citation presence through strategic content placement, roundup inclusions, and industry publication mentions.',
      features: [
        'Co-citation target research and mapping',
        'Industry publication mention campaigns',
        'Roundup and "best of" content placement',
        'Brand mention monitoring and attribution',
      ],
    },
    {
      icon: Search,
      title: 'Knowledge Panel Optimization',
      description:
        'Google Knowledge Panels are a direct signal that your entity is recognized in the Knowledge Graph. We improve the attributes Google surfaces in your panel: description, social profiles, founding information, key products, and associated entities.',
      features: [
        'Knowledge Panel claim and verification',
        'Panel attribute accuracy audit',
        'Social profile cross-linking',
        'Entity attribute correction campaigns',
      ],
    },
    {
      icon: BarChart3,
      title: 'Entity Recognition Monitoring',
      description:
        'We track Knowledge Graph presence through direct monitoring of how AI systems describe your entity. Monthly prompt tests ask major LLMs to describe your organization, identify your key products, and name your leadership. Accuracy and completeness improve as entity signals strengthen.',
      features: [
        'Monthly entity recognition prompt testing',
        'Attribute accuracy tracking',
        'Knowledge Graph connection monitoring',
        'Competitive entity gap analysis',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Entity Audit',
    description:
      'We test how AI systems currently describe your organization: ask ChatGPT, Perplexity, and Gemini about your company, products, and leadership. The accuracy and confidence of those responses tells us the current state of your entity recognition. We also audit your existing structured data, Wikidata presence, and sameAs connections.',
  },
  {
    number: '02',
    title: 'Entity Architecture Design',
    description:
      'We map the full entity graph you need: organization, products, services, leadership, and their interconnections. Then we identify the authoritative external sources (Wikidata, Crunchbase, LinkedIn, industry databases) that should hold sameAs references to each entity, and the co-citation contexts where your brand should be present.',
  },
  {
    number: '03',
    title: 'Implementation and Outreach',
    description:
      'Structured data implementation happens in one sprint. External entity work, Wikidata editing, sameAs link building, and co-citation campaigns require ongoing outreach. We run both in parallel, with technical implementation first to give Google and LLMs something accurate to parse.',
  },
  {
    number: '04',
    title: 'Entity Recognition Tracking',
    description:
      'Monthly prompt testing tracks whether AI systems describe your entity more accurately over time. We measure attribute completeness (does the AI know your founding year, primary service, key clients?), co-citation frequency, and Knowledge Panel completeness. These metrics compound: stronger entity signals create more accurate AI descriptions, which reinforce the entity further.',
  },
]

const caseStudyData = {
  subheading: 'Entity SEO in Practice',
  heading: 'How a fintech company became a recognized entity in 4 months.',
  challenge:
    'A fintech company with strong product-market fit and 15,000 monthly organic visitors had zero Knowledge Graph presence. When asked about payment processing companies, every major LLM named their competitors. Our client was either ignored or described inaccurately. The problem was not brand awareness. It was entity recognition: no Wikidata entry, no sameAs markup, no structured data, no co-citation signals that would let AI systems confidently attribute information to them.',
  solution:
    'We built their entity architecture from the ground up: Wikidata entry with full attribute population, Organization schema with sameAs links to Crunchbase, LinkedIn, and their industry association profiles, Person schemas for the leadership team, Product schemas for their three core offerings, and a co-citation campaign placing them in fintech comparison articles alongside Stripe, Adyen, and Braintree.',
  results: [
    { metric: 'Knowledge Panel Appearance', improvement: 'None to active', timeframe: 'Full attribute panel at 10 weeks' },
    { metric: 'AI Entity Accuracy', improvement: '0% to 78%', timeframe: 'Attribute accuracy in LLM responses' },
    { metric: 'LLM Co-citations with Competitors', improvement: '+340%', timeframe: 'Named alongside known entities' },
    { metric: 'Branded Organic Traffic', improvement: '+65%', timeframe: 'Knowledge Panel driving direct navigational search' },
  ],
}

const faqItems = [
  {
    question: 'What is entity SEO and why does it matter for AI search?',
    answer:
      'Entity SEO is the practice of establishing your brand, products, and key individuals as recognized entities in AI and machine-learning knowledge bases, principally the Knowledge Graph. Traditional SEO treats your site as a collection of pages. AI systems treat the web as a collection of entities. A brand that exists as a recognized entity with verified attributes gets cited more consistently and accurately than a brand that AI systems can only infer from page content.',
  },
  {
    question: 'What is the Knowledge Graph and how does it affect AI citations?',
    answer:
      'The Knowledge Graph is Google\'s structured database of entities and their relationships. It powers Knowledge Panels, Featured Snippets, and the entity understanding that feeds into Google Gemini and AI Overviews. It also connects to Wikidata, which is a primary source for many other LLMs. If your organization is not in the Knowledge Graph as a verified entity, AI systems that rely on it will either ignore you or describe you inaccurately when asked directly.',
  },
  {
    question: 'What is a sameAs markup and why does it matter?',
    answer:
      'sameAs is a Schema.org property that links your entity on one platform to its representation on authoritative external databases: Wikidata, Wikipedia, Crunchbase, government company registries. When AI systems encounter your brand, they use sameAs links to pull verified attributes from those external sources. A brand with rich sameAs connections gets described with more accuracy and confidence than one without them.',
  },
  {
    question: 'How is co-citation different from regular link building?',
    answer:
      'Traditional link building chases PageRank. Co-citation chases entity association. When authoritative sources mention your brand alongside recognized entities in your space, AI systems learn that you belong in the same category. A piece in TechCrunch that mentions your payment processing company alongside Stripe and Adyen tells the AI "this is a credible player in the payment processing space." That association signal feeds entity trust independently of whether the link passes PageRank.',
  },
  {
    question: 'Do I need a Wikipedia page for entity SEO to work?',
    answer:
      'No. Wikipedia helps, but Wikidata is more important and more achievable. Wikidata has no notability requirements and accepts any organization. A complete, accurate Wikidata entry with sameAs connections to your other profiles is the foundation. Wikipedia adds a credibility signal and additional attribute data, but it requires passing notability guidelines. We start with Wikidata, then assess Wikipedia eligibility.',
  },
  {
    question: 'How long does entity SEO take to show results?',
    answer:
      'Technical structured data implementation shows in Google\'s understanding within 4-6 weeks. Wikidata entries typically get picked up within 6-8 weeks. Knowledge Panel changes from entity attribute improvements take 8-12 weeks. The full effect on LLM entity recognition compounds over 3-6 months as new sameAs connections, co-citations, and entity signals accumulate and get incorporated into LLM knowledge bases.',
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
          <Subheading>Our Entity SEO Process</Subheading>
          <Heading as="h2" className="mt-2">
            Audit, architecture, build, track.
          </Heading>
          <Lead className="mt-6 max-w-2xl mx-auto">
            Entity recognition does not happen by accident. It requires deliberate infrastructure: structured data, verified external references, and co-citation signals built over time.
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
          title="Entity SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function EntitySEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/entity-seo',
          name: 'Entity SEO and Knowledge Graph Optimization',
          description:
            'Entity SEO services that build Knowledge Graph presence, sameAs connections, and co-citation networks for AI-driven search visibility.',
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
            { '@type': 'Thing', name: 'Knowledge Graph', sameAs: 'https://www.wikidata.org/wiki/Q648625' },
            { '@type': 'Thing', name: 'Wikidata', sameAs: 'https://www.wikidata.org/wiki/Q2013' },
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
        subheading="Start with a Free Entity Audit"
        heading="Find out how AI systems currently describe your brand."
        lead="We run your brand, products, and leadership through structured prompts across major LLMs and test attribute accuracy. Then we show you what it would take to become a confidently recognized entity."
        benefits={[
          'Free entity recognition audit across 4 LLMs',
          'Knowledge Graph gap assessment',
          'sameAs connection inventory and recommendations',
        ]}
        submitText="Request the Entity Audit"
      />
      <Footer />
    </main>
  )
}
