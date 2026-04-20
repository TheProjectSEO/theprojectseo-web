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
import {
  Zap,
  FileText,
  Award,
  Globe,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Perplexity SEO | Get Cited in Perplexity AI | TheProjectSEO',
  description:
    'Perplexity SEO services that get your brand cited in Perplexity AI answers. Open web indexing, fresh structured content, and source authority signals built for Perplexity citation.',
  alternates: {
    canonical: '/services/ai-search/perplexity-seo',
  },
  openGraph: {
    title: 'Perplexity SEO | Get Cited in Perplexity AI | TheProjectSEO',
    description:
      'Perplexity indexes the open web broadly and cites fresh, well-structured sources. We build the signals that Perplexity weights: freshness, structure, and source credibility.',
    url: 'https://theprojectseo.com/services/ai-search/perplexity-seo',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Perplexity SEO',
  title: 'Get Cited',
  accentWord: 'in Perplexity',
  titleAfterAccent: 'AI',
  description:
    'Perplexity AI indexes the open web more aggressively than most AI systems and cites recent, well-structured sources with less deference to domain authority than ChatGPT. That creates opportunity: a well-structured piece on a mid-authority domain can out-cite a poorly structured piece on a high-authority domain.',
  ctaPrimaryText: 'Get a Perplexity Citation Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore All LLM Services',
  ctaSecondaryHref: '/services/ai-search',
}

const statsData = [
  { value: '15M+', label: 'Monthly active Perplexity users' },
  { value: 'Daily', label: 'Perplexity re-indexes fresh web content' },
  { value: '4wk', label: 'Fastest typical path to first Perplexity citation' },
  { value: '7%', label: 'AI answer market share and growing fast' },
]

const servicesData = {
  subheading: 'Perplexity Citation Optimization',
  heading: 'What drives Perplexity citations and how we build each signal.',
  lead: 'Perplexity is the most accessible AI citation platform for brands without massive domain authority. It values recency, structure, and source credibility over raw domain power. We build all three.',
  services: [
    {
      icon: Zap,
      title: 'Content Freshness Strategy',
      description:
        'Perplexity heavily weights recent content. Pages updated or published within the last 30-90 days get preferential retrieval for time-relevant queries. We build a freshness strategy: which pages to update on what cadence, how to signal freshness through structured data, and how to maintain topical authority without creating thin update content.',
      features: [
        'Content update schedule and priority ranking',
        'Freshness signal implementation (dateModified schema)',
        'New content publication calendar for target queries',
        'Update depth guidelines (substance, not cosmetic changes)',
      ],
    },
    {
      icon: FileText,
      title: 'Structured Q&A Content',
      description:
        'Perplexity frequently cites sources that directly answer the query being asked. Question-answer formatted content, explicit definitions, and step-by-step explanations outperform discursive editorial content in Perplexity retrieval. We build the Q&A content formats that Perplexity citations favor.',
      features: [
        'Q&A content creation for target query clusters',
        'FAQ schema implementation across content pages',
        'Direct-answer paragraph optimization',
        'HowTo and step-by-step content structuring',
      ],
    },
    {
      icon: Globe,
      title: 'Open Web Accessibility',
      description:
        'Perplexity crawls the open web and cites sources it can access cleanly. Crawl blocks, JavaScript-rendered content, aggressive anti-bot measures, and slow page speeds all reduce Perplexity\'s ability to retrieve and cite your content. We audit and fix accessibility barriers.',
      features: [
        'Perplexity bot crawler access audit',
        'robots.txt review and configuration',
        'JavaScript rendering assessment',
        'Page speed optimization for crawler accessibility',
      ],
    },
    {
      icon: Award,
      title: 'Source Credibility Signals',
      description:
        'Perplexity evaluates source credibility through a combination of domain signals, backlink profile, and content quality cues. It gives more weight to sources that are cited themselves elsewhere on the web. We build the backlink and co-citation profile that signals credibility to Perplexity\'s retrieval system.',
      features: [
        'Domain credibility audit vs Perplexity-cited competitors',
        'Backlink acquisition for credibility signals',
        'Co-citation campaign for authority association',
        'Author credential signaling',
      ],
    },
    {
      icon: BarChart3,
      title: 'Perplexity Citation Monitoring',
      description:
        'We run structured prompt sets through Perplexity monthly, tracking citation frequency, citation accuracy, and competitive share of voice. Perplexity\'s real-time indexing means results can shift faster than other platforms, making monthly tracking particularly valuable for catching both gains and competitive threats early.',
      features: [
        'Monthly Perplexity-specific prompt testing',
        'Citation frequency and accuracy tracking',
        'Competitor citation monitoring',
        'Freshness impact measurement',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Perplexity Citation Audit',
    description:
      'We run 50 prompts through Perplexity covering the queries your buyers ask, document which sources are cited and why, and compare your current presence against competitors. The audit tells us whether the gap is freshness, structure, crawl accessibility, or authority.',
  },
  {
    number: '02',
    title: 'Accessibility and Freshness Fixes',
    description:
      'Crawl accessibility and freshness are the fastest-moving levers for Perplexity. If your content is being blocked, is stale, or is JavaScript-rendered in a way Perplexity cannot parse, fixing those issues can produce citation gains in 3-4 weeks. We address these before moving to content and authority work.',
  },
  {
    number: '03',
    title: 'Content Structure and Q&A Build',
    description:
      'Once the accessibility and freshness foundation is solid, we build the Q&A content formats and direct-answer structures that Perplexity prefers. This phase typically takes 6-10 weeks depending on content volume and whether we are restructuring existing pages or creating new ones.',
  },
  {
    number: '04',
    title: 'Monthly Tracking and Refinement',
    description:
      'Perplexity\'s daily re-indexing means citation changes show up faster than other platforms. Monthly tracking gives us a clear read on what is working. The freshness of Perplexity\'s index also means competitive positions shift more frequently, making active monitoring more valuable than with slower-updating platforms.',
  },
]

const caseStudyData = {
  subheading: 'Perplexity SEO in Practice',
  heading: 'How a cybersecurity company earned Perplexity citations in 5 weeks.',
  challenge:
    'A cybersecurity company published thorough, well-researched content on a weekly cadence. When their team started using Perplexity to research the industry, competitors with smaller audiences and fewer resources kept appearing as cited sources. Our client was absent. The problem: their site had a robots.txt configuration left over from a previous CMS migration that was blocking Perplexity\'s crawler. None of their content could be indexed.',
  solution:
    'Robots.txt fix and full Perplexity crawler access audit completed in week 1. Content freshness signals (dateModified schema, update cadence standardization) implemented in weeks 2-3. Direct-answer paragraph restructuring on their 20 highest-traffic content pages in weeks 3-6. FAQ schema deployment across all content. By week 5, citations started appearing for freshness-weighted queries.',
  results: [
    { metric: 'Time to First Perplexity Citation', improvement: '5 weeks', timeframe: 'From crawl fix' },
    { metric: 'Perplexity Citation Rate at Month 3', improvement: '0 to 29%', timeframe: 'Target cybersecurity queries' },
    { metric: 'Perplexity Referral Traffic', improvement: '+340%', timeframe: 'Month 1 to month 6' },
    { metric: 'Content Pages with Active Citations', improvement: '0 to 18', timeframe: 'Six-month period' },
  ],
}

const faqItems = [
  {
    question: 'How does Perplexity decide what to cite?',
    answer:
      'Perplexity runs live web searches for every query and assembles a response from the top retrieved sources. It weights recency (recently published or updated content scores higher for time-relevant queries), crawl accessibility (it cannot cite what it cannot read), source credibility (backlink profile and co-citation signals), and content structure (direct-answer content is easier to extract and attribute). Unlike ChatGPT Browse, Perplexity is less dependent on high domain authority, which means newer brands and mid-authority sites have a genuine shot at citations with the right content signals.',
  },
  {
    question: 'Why is Perplexity easier to get cited in than ChatGPT?',
    answer:
      'ChatGPT Browse defaults to Bing authority signals, which heavily favor established, high-authority domains. Perplexity runs its own crawl and applies different scoring logic that gives more weight to content freshness and structural quality. A well-structured, recently published piece on a DR 40 domain can outperform a poorly structured piece on a DR 80 domain in Perplexity retrieval. That creates an opening for brands that have not built massive link profiles.',
  },
  {
    question: 'How important is content freshness for Perplexity citations?',
    answer:
      'Very important for any query with a time dimension. "Best CRM for small business in 2025" will heavily favor recently updated content. "How does SSL encryption work" is less sensitive to freshness. Our first step in any Perplexity program is to categorize target queries by freshness sensitivity, then build an update schedule that keeps time-sensitive content current. For evergreen content, we focus on structural quality rather than update frequency.',
  },
  {
    question: 'Does Perplexity cite paywalled or gated content?',
    answer:
      'No. Perplexity only cites content its crawler can access without authentication. Paywalled articles, gated resources requiring email signup, and content behind login walls are not indexed or cited. If your most authoritative content sits behind a gate, we recommend creating ungated summary or excerpt pages that give Perplexity enough substance to cite while preserving the gated asset.',
  },
  {
    question: 'How does Perplexity SEO interact with traditional Google SEO?',
    answer:
      'Most Perplexity optimization work also benefits Google SEO. Content freshness signals improve Google crawl priority. FAQ schema helps Google featured snippets. Direct-answer paragraph structure improves Google snippet extraction. Crawl accessibility improvements benefit all search crawlers. The few areas that are Perplexity-specific (bot access whitelisting, freshness-first content calendars for time-sensitive queries) do not conflict with Google SEO.',
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
          <Subheading>Our Perplexity SEO Process</Subheading>
          <Heading as="h2" className="mt-2">
            Fix access, build freshness, structure for extraction.
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
          title="Perplexity SEO frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function PerplexitySEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-search/perplexity-seo',
          name: 'Perplexity SEO Services',
          description:
            'Perplexity citation optimization: content freshness, open web accessibility, structured Q&A content, and source credibility signals for Perplexity AI.',
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
            { '@type': 'Thing', name: 'Perplexity AI', sameAs: 'https://www.wikidata.org/wiki/Q117813757' },
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
        subheading="Get Cited in Perplexity"
        heading="Start with a free Perplexity citation audit."
        lead="We check whether your content is accessible to Perplexity's crawler, run your brand through 50 target prompts, and return a gap analysis with specific fixes prioritized by citation impact."
        benefits={[
          'Free Perplexity crawler access audit',
          'Citation gap analysis vs competitors',
          'Freshness and structure recommendations',
        ]}
        submitText="Request the Perplexity Audit"
      />
      <Footer />
    </main>
  )
}
