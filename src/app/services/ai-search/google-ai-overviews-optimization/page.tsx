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
  FileText,
  Search,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Google AI Overviews Optimization | TheProjectSEO',
  description:
    'Google AI Overviews optimization services. Align your content with E-E-A-T signals, featured snippet eligibility, and schema markup that Google uses to select AI Overview sources.',
  alternates: {
    canonical: '/services/ai-search/google-ai-overviews-optimization',
  },
  openGraph: {
    title: 'Google AI Overviews Optimization | TheProjectSEO',
    description:
      'Google AI Overviews appear above organic results. We build the E-E-A-T signals, schema, and content structure that Google uses to select sources for its AI-generated summaries.',
    url: 'https://theprojectseo.com/services/ai-search/google-ai-overviews-optimization',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Google AI Overviews Optimization',
  title: 'Rank inside',
  accentWord: 'Google AI Overviews',
  titleAfterAccent: '',
  description:
    'Google AI Overviews appear above all organic results for an increasing share of queries. Getting cited there is not the same as ranking #1 organically. It requires a specific combination of E-E-A-T depth, featured snippet eligibility, and schema markup that signals to Google your content is reliable enough to draw from.',
  ctaPrimaryText: 'Get an AI Overviews Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore All AI Search Services',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '40%', label: 'Of Google queries now trigger AI Overviews' },
  { value: '#8.4', label: 'Avg organic ranking position of AI Overview sources' },
  { value: '99%', label: 'Of AI Overview sources have strong E-E-A-T signals' },
  { value: '3x', label: 'Higher CTR for brands cited in AI Overviews' },
]

const servicesData = {
  subheading: 'What AI Overviews Optimization Covers',
  heading: 'Five signals that determine AI Overview inclusion.',
  lead: 'Google selects AI Overview sources through a specific lens: the signals that proved most important in internal testing are E-E-A-T depth, featured snippet eligibility, structured data quality, and topical authority. We build each one deliberately.',
  services: [
    {
      icon: Award,
      title: 'E-E-A-T Signal Architecture',
      description:
        'Experience, Expertise, Authoritativeness, Trustworthiness. Google uses these signals to decide which sources are reliable enough to draw from in AI Overviews. We audit your current E-E-A-T signals and build the ones that are missing: author credentials, original research, external citations, and trust indicators.',
      features: [
        'Author bio and credential optimization',
        'Original data and research publication',
        'Expert contribution and interview content',
        'Third-party citation and review building',
      ],
    },
    {
      icon: Search,
      title: 'Featured Snippet Alignment',
      description:
        'AI Overview sources overlap heavily with featured snippet candidates. Google selects snippets from pages that give concise, direct answers to specific queries. We audit your pages for snippet eligibility and restructure content to answer target queries directly, concisely, and citable.',
      features: [
        'Featured snippet eligibility audit',
        'Direct-answer paragraph optimization',
        'Numbered list and table content for snippet capture',
        'Query-to-content alignment mapping',
      ],
    },
    {
      icon: Layers,
      title: 'Schema Markup for AI Parsing',
      description:
        'Structured data helps Google understand page content with less interpretation. Pages with rich schema have a measurable advantage in AI Overview inclusion because Google can verify content type, authorship, and entity relationships through markup rather than inference. We implement the full schema stack relevant to your content type.',
      features: [
        'Article, HowTo, and FAQ schema implementation',
        'Organization and Person schema with full attributes',
        'Product and Service schema where applicable',
        'BreadcrumbList and SiteLinksSearchBox',
      ],
    },
    {
      icon: FileText,
      title: 'Topical Authority Development',
      description:
        'Google prefers AI Overview sources that have demonstrated topical authority: covering a subject in depth, from multiple angles, with consistent quality over time. We audit your topical coverage against queries that trigger AI Overviews in your category and build the content gaps that would strengthen your authority signal.',
      features: [
        'AI Overview query identification in your category',
        'Topical coverage gap analysis',
        'Supporting content cluster development',
        'Internal linking for authority consolidation',
      ],
    },
    {
      icon: BarChart3,
      title: 'AI Overview Inclusion Monitoring',
      description:
        'We track AI Overview appearance rates monthly: which queries trigger AI Overviews, whether your content is included, and which sources Google is choosing over yours. This direct monitoring tells us faster than ranking data whether optimization work is translating into AI Overview presence.',
      features: [
        'Monthly AI Overview query tracking',
        'Source inclusion monitoring',
        'Competitor citation frequency',
        'E-E-A-T signal effectiveness reporting',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'AI Overview Presence Audit',
    description:
      'We identify 50-100 queries in your category that trigger AI Overviews, then check which sources Google is including and whether your content appears. We assess your featured snippet eligibility, E-E-A-T signal depth, and schema coverage against the sources Google is already using.',
  },
  {
    number: '02',
    title: 'E-E-A-T and Schema Gap Analysis',
    description:
      'We compare your E-E-A-T signals (author credentials, original research, external citations, trust indicators) against the pages Google is citing in AI Overviews for your target queries. The gaps become the build list. E-E-A-T is the most influential variable in AI Overview selection for most categories.',
  },
  {
    number: '03',
    title: 'Implementation: Content and Technical',
    description:
      'E-E-A-T improvements (author credentialing, research publication, expert contributions) and schema implementation happen in parallel. Content restructuring for featured snippet eligibility runs simultaneously. The technical schema work is faster; E-E-A-T signal building compounds over 3-6 months.',
  },
  {
    number: '04',
    title: 'Monthly AI Overview Tracking',
    description:
      'We track AI Overview inclusion rates monthly and compare to the baseline established in the audit. Google updates its AI Overview source selection continuously, so monthly tracking gives us a direct read on directional movement and helps us sequence the next sprint.',
  },
]

const caseStudyData = {
  subheading: 'AI Overviews in Practice',
  heading: 'From zero AI Overview citations to 14 queries in four months.',
  challenge:
    'A B2B accounting software company was ranking in the top 5 organically for 40+ keywords. Zero of those keywords had them appearing in Google AI Overviews. Competitors with lower organic rankings were appearing in AI Overviews for the same queries. The difference: the competitors had stronger author credentials on their content (CPAs and CFOs named on articles), published original research on accounting trends, and had schema markup throughout their site. Our client had good content but anonymous authorship and no structured data.',
  solution:
    'Author credentialing program: identified four CPAs and two CFOs within the company who contributed to the existing content, added proper author bios and credential documentation, and retroactively attributed content appropriately. Full schema implementation across 80 pages. Published one original research piece on accounting software adoption trends. Featured snippet restructuring on the 30 pages targeting queries that triggered AI Overviews.',
  results: [
    { metric: 'AI Overview Inclusions', improvement: '0 to 14 queries', timeframe: 'Four-month period' },
    { metric: 'Featured Snippet Capture Rate', improvement: '+220%', timeframe: 'Target query set' },
    { metric: 'Branded AI-Assisted Traffic', improvement: '+78%', timeframe: 'Sessions from AI-related referrals' },
    { metric: 'Time to First AI Overview Appearance', improvement: '11 weeks', timeframe: 'From author credentialing' },
  ],
}

const faqItems = [
  {
    question: 'What determines whether Google includes my content in AI Overviews?',
    answer:
      'Google has not published definitive selection criteria, but analysis of AI Overview source pages reveals a consistent pattern: strong E-E-A-T signals (especially author expertise credentials), featured snippet eligibility (direct-answer paragraph structure), schema markup (Article, FAQ, HowTo), and topical authority at the domain level. Pages ranking at #8.4 on average in AI Overview sources, which means you do not need to be ranking #1, but you do need the content and authority signals that Google considers reliable enough to draw from.',
  },
  {
    question: 'Is AI Overview optimization different from traditional featured snippet optimization?',
    answer:
      'Related but distinct. Featured snippet targeting focuses on a single query returning a single snippet from a single page. AI Overview targeting is broader: Google draws from multiple sources and may include your page as one of several cited sources. The content structure principles overlap (direct answers, clear formatting, schema), but AI Overviews additionally weight E-E-A-T depth and topical authority at the domain level in ways that featured snippet selection does not.',
  },
  {
    question: 'My page ranks #1. Why am I not in the AI Overview?',
    answer:
      'Ranking position is one signal among many for AI Overview selection. Google appears to evaluate E-E-A-T depth and content citeability separately from ranking position. A #1 ranking without clear author credentials, without original research, and without schema markup can lose AI Overview inclusion to a #7 ranking that has all three. We see this frequently: strong traditional SEO, weak AI Overview presence. The fix is specific E-E-A-T and schema work, not ranking improvement.',
  },
  {
    question: 'Do AI Overviews hurt organic click-through rates?',
    answer:
      'The data is mixed. Some categories see organic CTR decline as AI Overviews satisfy queries without a click. Others see AI Overview citations drive higher-quality clicks because users arrive having already read a generated answer and are ready for deeper engagement. For brands cited in AI Overviews, the net effect tends to be positive: the additional impressions from AI Overview appearances outweigh the CTR reduction on individual organic results. Brands not cited lose impressions without the offsetting benefit.',
  },
  {
    question: 'How quickly does E-E-A-T improvement affect AI Overview inclusion?',
    answer:
      'Author credentialing and schema markup show results in 8-12 weeks as Google re-crawls and re-evaluates pages. Original research publication is faster for Perplexity and slower for Google: expect 10-14 weeks for Google to incorporate research content into its evaluation of your topical authority. External citation building takes longest, 3-6 months for backlinks and co-citations to compound into a meaningful E-E-A-T signal improvement. We sequence the fastest-moving levers first.',
  },
  {
    question: 'Can small brands appear in Google AI Overviews?',
    answer:
      'Yes. Domain Rating is not the primary selector. We have seen DR 35 domains appear in AI Overviews for competitive queries because their content had strong author credentials, clear schema, and direct-answer structure that DR 70 competitors lacked. The brands that dominate AI Overviews are the ones that invested in E-E-A-T signals early, not necessarily the ones with the most link equity.',
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
          <Subheading>Our AI Overviews Process</Subheading>
          <Heading as="h2" className="mt-2">
            Audit, build E-E-A-T, implement schema, track inclusion.
          </Heading>
          <Lead className="mt-6 max-w-2xl mx-auto">
            AI Overview optimization is not a one-sprint project. E-E-A-T signals compound over months. We build the foundation, then track inclusion rates to know when the signals are landing.
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
          title="Google AI Overviews frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function GoogleAIOverviewsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/google-ai-overviews-optimization',
          name: 'Google AI Overviews Optimization',
          description:
            'Google AI Overviews optimization: E-E-A-T signal building, featured snippet alignment, schema markup, and topical authority development for AI-generated search results.',
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
            { '@type': 'Thing', name: 'Google AI Overviews', sameAs: 'https://www.wikidata.org/wiki/Q6534' },
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
        subheading="Get into Google AI Overviews"
        heading="Find out which of your target queries trigger AI Overviews and whether you appear."
        lead="We audit your AI Overview presence across 50+ target queries, compare your E-E-A-T signals to sources Google is already using, and return a specific action plan within 5 business days."
        benefits={[
          'Free AI Overview presence audit',
          'E-E-A-T gap analysis vs current sources',
          'Prioritized schema and content recommendations',
        ]}
        submitText="Request the AI Overviews Audit"
      />
      <Footer />
    </main>
  )
}
