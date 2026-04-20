import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Heading, Subheading, Lead } from '@/components/text'
import { Footer } from '@/components/footer'
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
  FileSearch,
  PenTool,
  ShieldCheck,
  Image,
  Upload,
  BarChart2,
  BookOpen,
  CheckSquare,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Content Agent | Brief to Publish Content Production | TheProjectSEO',
  description:
    'AI content agent that takes a keyword from brief to published post: SERP research, citation-grounded drafting, eight-dimension quality validation, image briefs, and CMS staging. Built on Claude Agent SDK.',
  alternates: {
    canonical: '/services/ai-agents/ai-content-agent',
  },
  openGraph: {
    title: 'AI Content Agent | Brief to Publish | TheProjectSEO',
    description:
      'Content production agent covering research, drafting, fact-checking, quality validation, and CMS staging. Backed by our seo-kb RAG layer for citation accuracy.',
    url: 'https://theprojectseo.com/services/ai-agents/ai-content-agent',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Content Agent | TheProjectSEO',
    description:
      'Brief to publish in a single agent loop. Research, draft, validate, image brief, CMS stage.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                  */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI Content Agent',
  title: 'From keyword brief to',
  accentWord: 'published post',
  titleAfterAccent: 'in one agent loop',
  description:
    'A single qualified writer can produce two to three validated articles per week. Our AI Content Agent runs the same pipeline at four times that rate: SERP research, outline generation, citation-grounded drafting, fact-check, eight-dimension quality validation, image brief, and CMS staging. Your editor reviews and approves. The agent handles everything up to that point.',
  ctaPrimaryText: 'Deploy the Content Agent',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'See All Agents',
  ctaSecondaryHref: '/services/ai-agents',
}

const statsData = [
  { value: '8-12', label: 'Articles per week per agent instance' },
  { value: '85+', label: 'Required quality validation score' },
  { value: '100%', label: 'Citation-grounded from seo-kb RAG' },
  { value: '~35hrs', label: 'Content ops time redirected monthly' },
]

const servicesData = {
  subheading: 'The Production Pipeline',
  heading: 'Eight stages from keyword to CMS-ready draft.',
  lead: 'Content quality failures happen at handoff points between stages. The agent owns the full pipeline from research to staging, with a single editorial review gate before publish. No context gets lost between steps.',
  services: [
    {
      icon: FileSearch,
      title: 'SERP Research and Brief Generation',
      description:
        'For each target keyword, the agent analyzes the top 10 ranking pages: content structure, entity coverage, word count patterns, heading distribution, and questions answered. It generates a grounded brief with recommended outline, target word count, required entities, and questions to address.',
      features: [
        'Top-10 SERP structure analysis',
        'Entity coverage gap identification',
        'Question extraction from PAA and forums',
        'Keyword-to-intent classification',
      ],
    },
    {
      icon: BookOpen,
      title: 'Citation-Grounded Research',
      description:
        'The agent queries our seo_query_kb MCP tool before writing any factual claim. This connects to a fine-tuned knowledge base grounded in Ahrefs, Moz, Backlinko, SEJ, and Google Search Central. Claims without citations get flagged for human verification rather than fabricated.',
      features: [
        'seo_query_kb MCP integration for SEO claims',
        'External source citation with URL tracking',
        'Fabrication prevention via KB-only sourcing',
        'Citation confidence scoring per claim',
      ],
    },
    {
      icon: PenTool,
      title: 'Brand-Voice Draft Production',
      description:
        'Drafts are produced using your client-specific Skills file, which encodes brand voice, vocabulary restrictions, sentence length preferences, and structural patterns. The agent never uses generic output. Every draft reflects the specific voice profile for that client.',
      features: [
        'Per-client Skills file for voice consistency',
        'Vocabulary restriction enforcement',
        'Anti-AI language pattern avoidance',
        'Structural templates per content type',
      ],
    },
    {
      icon: ShieldCheck,
      title: 'Eight-Dimension Quality Validation',
      description:
        'Before any draft reaches an editor, it passes through our validation engine scoring eight dimensions: authenticity, specificity, data grounding, brand voice compliance, readability, structural integrity, keyword coverage, and entity completeness. Threshold: 85. Drafts below 75 are rewritten automatically.',
      features: [
        'Minimum 85 score required for editor delivery',
        'Auto-rewrite loop for scores below 75',
        'Dimension-level failure reporting',
        'AI language pattern detection across 200+ patterns',
      ],
    },
    {
      icon: CheckSquare,
      title: 'Fact-Check and Accuracy Pass',
      description:
        'A dedicated accuracy pass reviews all statistics, quotes, study citations, and named examples. Claims are cross-referenced against KB sources. Statistics missing a source URL are flagged in the draft as [VERIFY] rather than passed through. The editor sees exactly what needs a second look.',
      features: [
        'Statistic source URL verification',
        'Named example accuracy check',
        'Study citation cross-referencing',
        '[VERIFY] flagging for unverifiable claims',
      ],
    },
    {
      icon: Image,
      title: 'Image Brief Generation',
      description:
        'For each approved section, the agent generates a structured image brief: subject, style, suggested alt text, dimensions, and placement rationale. For data-heavy sections, it flags where a custom chart would outperform a stock photo and generates the underlying data table.',
      features: [
        'Section-level image briefs with alt text',
        'Chart data table generation for data sections',
        'Stock photo search queries for image teams',
        'Image placement rationale per section',
      ],
    },
    {
      icon: Upload,
      title: 'CMS Staging and Metadata',
      description:
        'Validated drafts are staged to your CMS with full metadata: title tag, meta description, canonical URL, category assignment, internal link placements, and schema type recommendation. For WordPress and Webflow, staging is automated via API. Other CMS platforms get a structured hand-off document.',
      features: [
        'Title tag and meta description generation',
        'Internal link placement recommendations',
        'Schema type recommendation per content type',
        'WordPress and Webflow API staging',
      ],
    },
    {
      icon: BarChart2,
      title: 'Post-Publish Performance Tracking',
      description:
        'At week two and week four post-publish, the agent pulls GSC impressions, clicks, and ranking position for the target keyword. Content below ranking threshold gets flagged for an optimization pass. The agent tracks its own output and surfaces what is not working.',
      features: [
        'Week-2 and week-4 GSC ranking checks',
        'Below-threshold ranking alerts',
        'Content update recommendations from SERP shift',
        'Output quality correlation tracking',
      ],
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Travel marketplace grows organic traffic 180% with AI content production.',
  challenge:
    'A travel marketplace needed 40 destination guides to support a seasonal SEO push. With one in-house writer and a 6-week window, they could produce eight articles. Agency quotes came in at $280-$380 per article, putting the full project at over $15,000. Quality was unpredictable. Brand voice was inconsistent across articles from different freelancers.',
  solution:
    'We deployed the AI Content Agent against their 40 destination keyword targets. The agent produced SERP-grounded briefs for all 40 within 24 hours. Drafts for the first 20 were ready in 72 hours, each with citations, image briefs, and CMS metadata. Their editor reviewed and approved each article in 15-20 minutes rather than 3 hours. All 40 guides were live within three weeks.',
  results: [
    {
      metric: 'Time to 40 articles live',
      improvement: '3 weeks',
      timeframe: 'vs 6+ months with in-house writer alone',
    },
    {
      metric: 'Content cost per article',
      improvement: '$40-60',
      timeframe: 'vs $280-380 agency quote',
    },
    {
      metric: 'Validation scores',
      improvement: '88 avg',
      timeframe: 'Across all 40 articles (threshold: 85)',
    },
    {
      metric: 'Organic traffic at 90 days',
      improvement: '+180%',
      timeframe: 'For targeted destination keywords',
    },
  ],
}

const faqItems = [
  {
    question: 'How does the agent avoid producing generic AI content?',
    answer:
      'Three mechanisms prevent generic output. First, every draft is grounded in SERP research specific to the target keyword, so the structure reflects what actually ranks, not what a generic prompt would produce. Second, the client-specific Skills file enforces brand voice, banned vocabulary, and structural preferences that override the model defaults. Third, the eight-dimension validation engine scans for 200 AI language patterns and rewrites sections that fail authenticity or specificity thresholds.',
  },
  {
    question: 'What happens when the agent cannot verify a factual claim?',
    answer:
      'Unverifiable claims are flagged inline as [VERIFY] with the agent noting what source it would need to confirm the claim. The editor sees a clean draft with explicit verification flags rather than a draft where uncertain facts are presented with false confidence. This is preferable to hallucination and makes the editorial review faster and more targeted.',
  },
  {
    question: 'Can the agent match an established brand voice?',
    answer:
      'Yes. We build the brand voice profile from three sources: your existing high-performing content, your brand guide if you have one, and a structured interview with your editor covering specific vocabulary preferences, structural patterns, and what you actively want to avoid. The Skills file encoding this profile is tested against sample content before production begins.',
  },
  {
    question: 'What CMS platforms does the agent stage to directly?',
    answer:
      'WordPress and Webflow support direct API staging with full metadata population. For Contentful, Sanity, and Prismic, we build the MCP connector during the deployment engagement. Custom headless CMS platforms are assessed during scoping. When direct staging is not available, the agent produces a structured handoff document that a team member can paste in under five minutes.',
  },
  {
    question: 'How does the agent handle content requiring subject matter expertise?',
    answer:
      'The agent is not a subject matter expert. For content requiring domain expertise (medical, legal, financial), the pipeline includes an SME review gate before editorial sign-off. The agent handles research, structure, and SEO grounding. The SME reviews for accuracy. The editor reviews for voice. This three-gate model produces quality output in specialized fields without expecting the agent to know things it cannot know.',
  },
  {
    question: 'What is the editor review workload?',
    answer:
      'Based on our production data, editors spend 15-25 minutes per article reviewing agent output at the 85-threshold level. That includes reading for voice, checking [VERIFY] flags, approving the image brief, and clicking publish. A typical editor managing 10 articles per week goes from 25-30 hours of writing and editing to 3-4 hours of review and publishing. The 20+ hours freed go to content strategy, topic research, and editorial direction.',
  },
]

/* -------------------------------------------------------------------------- */
/*  Validation Score Explainer                                                 */
/* -------------------------------------------------------------------------- */

function ValidationSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>Quality Gate</Subheading>
          <Heading as="h2" className="mt-2">
            How the eight-dimension validation engine works.
          </Heading>
          <Lead className="mt-6">
            Every article runs through a validation pass before reaching an editor. Scores below 85
            trigger an automatic rewrite loop. Scores below 75 trigger escalation to a human reviewer.
          </Lead>
        </div>

        <div className="mx-auto max-w-4xl grid gap-px bg-border-strong grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              dimension: 'Authenticity',
              weight: '20%',
              detail: 'AI language pattern detection. 200+ patterns scanned including em-dash overuse, filler phrases, and hollow qualifiers.',
            },
            {
              dimension: 'Specificity',
              weight: '20%',
              detail: 'Ratio of specific claims (numbers, named examples, dates) to generic assertions. Generic assertions over 40% trigger rewrite.',
            },
            {
              dimension: 'Data grounding',
              weight: '15%',
              detail: 'Percentage of factual claims with citation. Uncited claims flagged as [VERIFY] rather than failed silently.',
            },
            {
              dimension: 'Brand voice',
              weight: '15%',
              detail: 'Vocabulary compliance, sentence length distribution, and structural pattern match against client Skills file.',
            },
            {
              dimension: 'Readability',
              weight: '10%',
              detail: 'Flesch-Kincaid score relative to target audience. B2B SaaS targets differ from B2C travel. Calibrated per client.',
            },
            {
              dimension: 'Structure',
              weight: '10%',
              detail: 'Heading hierarchy, section length balance, introduction hook quality, and conclusion action orientation.',
            },
            {
              dimension: 'Keyword coverage',
              weight: '5%',
              detail: 'Primary and secondary keyword presence across title, H2s, and body without keyword stuffing patterns.',
            },
            {
              dimension: 'Entity completeness',
              weight: '5%',
              detail: 'Coverage of required entities identified during SERP research. Missing entities flagged for editorial addition.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-paper p-6">
              <div className="font-mono text-2xl font-black text-accent mb-1">{item.weight}</div>
              <h3 className="font-heading text-sm font-semibold text-ink mb-2">{item.dimension}</h3>
              <p className="text-xs leading-relaxed text-slate">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                */
/* -------------------------------------------------------------------------- */

export default function AIContentAgentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-agents/ai-content-agent',
          name: 'AI Content Agent',
          description:
            'Brief-to-publish AI content production agent. SERP research, citation-grounded drafting, eight-dimension quality validation, image briefs, and CMS staging. Built on Claude Agent SDK with seo_query_kb MCP integration.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Worldwide',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.slice(0, 5).map((item) => ({
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
      <ServicesGrid {...servicesData} />
      <ValidationSection />
      <CaseStudyDark {...caseStudyData} />
      <div className="bg-paper py-24">
        <Container>
          <FAQAccordion
            title="AI content agent frequently asked questions"
            items={faqItems}
          />
        </Container>
      </div>
      <CTAFormSection
        subheading="Ready to Deploy?"
        heading="Get a sample article produced by the agent."
        lead="Give us a target keyword. We run one article through the full pipeline and send you the output with the validation score. No commitment required."
        submitText="Deploy the Content Agent"
      />
      <Footer />
    </main>
  )
}
