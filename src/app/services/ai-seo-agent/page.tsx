import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Heading, Subheading, Lead } from '@/components/text'
import Link from 'next/link'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  TestimonialQuoteSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import { AIAgentsShowcase } from '@/components/ai-agents-showcase'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  Type,
  Search,
  Layers,
  Waypoints,
  MousePointerClick,
  Code,
  LayoutGrid,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI SEO Agent Services | Generative Engine Optimization (GEO) | TheProjectSEO',
  description:
    'Deploy AI SEO agents that automate content optimization, SERP analysis, keyword research, and CTR optimization at scale. Generative engine optimization (GEO) for AI search visibility. 250% average traffic increase.',
  alternates: {
    canonical: '/services/ai-seo-agent',
  },
  openGraph: {
    title: 'AI SEO Agent Services | Generative Engine Optimization | TheProjectSEO',
    description:
      'Deploy AI agents that optimize content, analyze SERPs, and build internal links automatically. Generative engine optimization for ChatGPT, Perplexity, and Google AI Overviews.',
    url: 'https://theprojectseo.com/services/ai-seo-agent',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI SEO Agent Services | TheProjectSEO',
    description:
      'Deploy AI agents that optimize content, analyze SERPs, and build internal links automatically. Generative engine optimization for AI search visibility.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'AI SEO Agent Services',
  title: 'AI SEO agents that optimize your',
  accentWord: 'rankings',
  titleAfterAccent: '24/7',
  description:
    'Deploy intelligent AI agents that optimize content, analyze SERPs, research keywords, optimize CTR, and build internal links automatically. SEO that scales without limits.',
  ctaPrimaryText: 'Deploy Your AI Agent',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '150+', label: 'AI Agents Deployed' },
  { value: '250%', label: 'Avg Traffic Increase' },
  { value: '50K+', label: 'Pages Optimized' },
  { value: '<5min', label: 'Processing Time' },
]

const servicesData = {
  subheading: 'What Our AI Agent Optimizes',
  heading: 'Comprehensive AI-powered SEO at scale.',
  lead: 'Our AI SEO agents handle every aspect of on-page optimization, from title tags to entity coverage, processing hundreds of pages per day with consistent quality.',
  services: [
    {
      icon: Type,
      title: 'Title Tag Optimization',
      description:
        'AI-driven A/B testing and optimization of title tags for higher click-through rates. Analyzes SERP competitors and identifies patterns that drive CTR improvements.',
      features: [
        'Automated A/B testing at scale',
        '15-25% CTR improvement average',
        'Competitor pattern analysis',
        'Brand voice consistency',
      ],
    },
    {
      icon: Search,
      title: 'SERP Analysis & Monitoring',
      description:
        'Continuous automated SERP analysis tracking competitor movements, SERP feature changes, ranking volatility, and new opportunities.',
      features: [
        'Real-time SERP monitoring',
        'Featured snippet tracking',
        'AI Overview opportunity detection',
        'Ranking volatility alerts',
      ],
    },
    {
      icon: Layers,
      title: 'Content Entity Coverage',
      description:
        'Embeddings-based analysis of entity coverage compared to top-ranking pages. Identifies missing entities, subtopics, and semantic gaps.',
      features: [
        'Semantic embeddings analysis',
        'Entity gap identification',
        'Topical completeness scoring',
        '80%+ entity coverage targets',
      ],
    },
    {
      icon: Waypoints,
      title: 'Internal Linking Architecture',
      description:
        'Smart internal link recommendations based on topic relevance, anchor text optimization, and link equity distribution across topical clusters.',
      features: [
        'Topical cluster building',
        'Anchor text optimization',
        'Link equity distribution',
        'Orphan page elimination',
      ],
    },
    {
      icon: MousePointerClick,
      title: 'Meta Description Optimization',
      description:
        'Generates and tests meta descriptions optimized for click-through rate, incorporating keywords, calls to action, and emotional triggers.',
      features: [
        'CTR-optimized copy generation',
        'Keyword-rich descriptions',
        'Competitor outperformance',
        'Consistent brand messaging',
      ],
    },
    {
      icon: Code,
      title: 'Schema Markup & Structured Data',
      description:
        'Automated generation of FAQ, Article, Service, Product, and Organization schema. Ensures structured data compliance for rich results.',
      features: [
        'JSON-LD auto-generation',
        'Rich result eligibility',
        'Schema validation testing',
        'All major schema types',
      ],
    },
    {
      icon: LayoutGrid,
      title: 'Header Structure Optimization',
      description:
        'Analyzes and restructures H1-H6 hierarchy for semantic clarity, keyword targeting, and improved crawlability aligned with search intent.',
      features: [
        'Semantic hierarchy analysis',
        'Search intent alignment',
        'Keyword targeting optimization',
        'Crawlability improvements',
      ],
    },
    {
      icon: Target,
      title: 'Content Gap Identification',
      description:
        'AI-powered competitor content analysis revealing keywords, topics, and questions your competitors rank for but you do not.',
      features: [
        'Competitor content analysis',
        'Question-based gap discovery',
        'Priority by traffic potential',
        'Topical authority mapping',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'SEO Audit & Agent Strategy',
    description:
      'We analyze your content library, current rankings, SERP landscape, and entity coverage. We identify optimization opportunities, define agent objectives, and create a deployment roadmap aligned with your SEO goals.',
  },
  {
    number: '02',
    title: 'AI Agent Development & Training',
    description:
      'We build custom AI agents trained on your brand voice and editorial guidelines, connect SERP analysis APIs and SEO data sources, and configure CMS integration for automated deployment.',
  },
  {
    number: '03',
    title: 'Testing, Validation & A/B Testing',
    description:
      'We test agents on a sample of pages, validate output quality against editorial standards, run A/B tests on title tag and meta description optimizations, and fine-tune agent behavior based on results.',
  },
  {
    number: '04',
    title: 'Production Deployment & Monitoring',
    description:
      'We deploy agents to your full content library with batch processing, set up continuous monitoring dashboards tracking rankings, CTR, traffic, and entity coverage, and establish a feedback loop for ongoing improvement.',
  },
]

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Content publisher increases organic traffic 250% with AI SEO agents.',
  challenge:
    'A B2B content publisher with 5,200+ articles had accumulated years of SEO debt. Title tags were generic, internal linking was sparse, entity coverage averaged just 34%, and meta descriptions were either missing or auto-generated. Manual optimization would have required 3 full-time SEO specialists working for 18+ months.',
  solution:
    'We deployed a custom multi-agent AI system. The SERP analysis agent processed 12,000+ target keywords. The content optimization agent rewrote 5,200 title tags and meta descriptions, restructured headers on 3,100 pages, and added missing entities to 4,800 articles. The internal linking agent added 18,000+ contextual internal links. All changes were validated through automated quality scoring and human sample audits.',
  results: [
    {
      metric: 'Organic Traffic',
      improvement: '+250%',
      timeframe: 'From 85K to 297K monthly sessions',
    },
    {
      metric: 'New Keywords Ranking',
      improvement: '12,400',
      timeframe: 'Previously unranked terms in top 100',
    },
    {
      metric: 'Average CTR Improvement',
      improvement: '+38%',
      timeframe: 'From optimized title tags and meta descriptions',
    },
    {
      metric: 'Annual Revenue Impact',
      improvement: '+$1.2M',
      timeframe: 'Attributed to organic traffic growth',
    },
  ],
}

const geoData = {
  subheading: 'Generative Engine Optimization (GEO)',
  heading: 'Optimize for ChatGPT, Perplexity, and Google AI Overviews.',
  lead: 'As AI-powered search engines become primary information sources, GEO ensures your brand appears in AI-generated answers, not just traditional search results.',
  cards: [
    {
      title: 'AI Overview Optimization',
      items: [
        'Clear definitions for AI extraction',
        'Bulleted lists and specific data points',
        'Content format analysis per niche',
        'Position zero targeting strategies',
      ],
    },
    {
      title: 'ChatGPT & Perplexity Visibility',
      items: [
        'Entity-rich content optimization',
        'Authoritative source positioning',
        'Conversational query targeting',
        'LLM retrieval optimization',
      ],
    },
    {
      title: 'Featured Snippet Capture',
      items: [
        '40-60 word definition paragraphs',
        'Numbered process lists',
        'Comparison tables',
        'Structured FAQ content',
      ],
    },
    {
      title: 'Entity & Knowledge Graph',
      items: [
        'Semantic entity analysis',
        'Structured data deployment',
        'Entity relationship mapping',
        'Knowledge panel eligibility',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'AI SEO agent packages.',
  tiers: [
    {
      name: 'AI Content Optimizer',
      price: '$5,000',
      description: 'Optimize existing content with AI agents.',
      features: [
        'Content analysis AI agent',
        'Up to 500 pages optimized',
        'Title tag & meta description optimization',
        'Header structure improvements',
        'Entity coverage analysis',
        'Internal link suggestions',
        'Performance report',
        '2 months support',
      ],
    },
    {
      name: 'Full AI SEO Agent',
      price: '$12,000',
      description: 'Complete AI SEO automation at scale.',
      features: [
        'Everything in Content Optimizer',
        'Unlimited page optimization',
        'AI keyword research agent',
        'Content gap analysis',
        'Automated internal linking',
        'CMS integration (WordPress, Shopify, etc.)',
        'CTR optimization with A/B testing',
        'Monthly optimization reports',
        '4 months support',
      ],
      featured: true,
    },
    {
      name: 'Enterprise AI Platform',
      price: '$30,000+',
      description: 'Custom AI SEO platform for enterprise.',
      features: [
        'Everything in Full AI Agent',
        'Multi-domain support',
        'Custom AI agent development',
        'GEO (Generative Engine Optimization)',
        'White-label platform option',
        'Full API access',
        'Dedicated AI engineer',
        '6 months support + SLA',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Results',
  heading: 'What our clients say.',
  testimonials: [
    {
      quote:
        'The AI agent optimized our entire content library in 3 months. Organic traffic tripled and we saved countless hours of manual work.',
      author: 'Lauren Mitchell',
      role: 'Head of Content',
      company: 'TechInsights',
    },
    {
      quote:
        'Best SEO investment we have ever made. The AI finds opportunities we would have never discovered manually and the quality is exceptional.',
      author: 'Ryan Patterson',
      role: 'VP of Marketing',
      company: 'CloudScale SaaS',
    },
    {
      quote:
        'We scaled from optimizing 10 articles per week to 100 per day. The AI maintains our brand voice perfectly while improving SEO performance.',
      author: 'Amanda Zhao',
      role: 'Editor-in-Chief',
      company: 'HealthNews Daily',
    },
  ],
}

const faqData = [
  {
    question: 'What is an AI SEO agent?',
    answer:
      'An AI SEO agent is an autonomous software system powered by large language models and NLP that performs search engine optimization tasks at scale. Unlike traditional SEO tools that provide data for humans to act on, AI agents analyze content, make optimization decisions, and execute changes automatically. They handle title tag optimization, entity coverage analysis, internal linking, SERP monitoring, meta description writing, and content gap identification.',
  },
  {
    question: 'What is generative engine optimization (GEO)?',
    answer:
      'Generative engine optimization is the practice of optimizing content to appear in AI-generated answers from ChatGPT, Perplexity, Google AI Overviews, and Claude. GEO focuses on comprehensive entity coverage, structured factual statements, authoritative sourcing, and content formats that generative AI systems prefer to cite. Our AI SEO agents include GEO capabilities as a core feature.',
  },
  {
    question: 'Will AI-optimized content hurt my search rankings?',
    answer:
      'No, when implemented properly. Our AI agents enhance existing content rather than generating new content from scratch. They improve title tags, restructure headers, add missing entities, build internal links, and optimize meta descriptions. Google does not penalize AI-assisted optimization; they penalize low-quality, thin content. Our quality assurance framework ensures every optimization improves content quality.',
  },
  {
    question: 'Can the AI agent maintain my brand voice and editorial standards?',
    answer:
      'Yes. We train custom agents on your brand guidelines, writing style, tone of voice, and editorial standards. The agent learns your preferences through fine-tuning and few-shot examples. We include human review checkpoints for critical pages and a quality scoring system that flags content deviating from your standards.',
  },
  {
    question: 'How many pages can the AI agent optimize per day?',
    answer:
      'Typically 100-500 pages per day depending on optimization depth. Title tag and meta description optimization processes 300-500 pages daily. Deep content analysis with entity coverage, internal linking, and semantic optimization handles 100-200 pages daily. We can scale further with additional compute resources for enterprise deployments.',
  },
  {
    question: 'What CMS platforms do you integrate with?',
    answer:
      'We integrate with all major CMS platforms including WordPress, Shopify, Webflow, Contentful, Sanity, Prismic, and custom headless CMS solutions via REST API or GraphQL. The agent can stage changes for human review or apply optimizations automatically based on your approval settings.',
  },
  {
    question: 'What results can I expect from an AI SEO agent?',
    answer:
      'Most clients see 150-250% organic traffic increase within 6 months. Typical outcomes include 30-50% more keywords ranking in the top 100, 20-40% ranking improvement for existing keywords, 15-25% CTR improvement from title tag optimization, and 2-3x increase in internal link equity distribution. Results vary by content quality, competition, and starting point.',
  },
  {
    question: 'How do you measure AI SEO agent ROI?',
    answer:
      'We track incremental organic traffic, revenue attribution, keyword ranking improvements, CTR changes, and cost comparison against equivalent manual SEO effort. Monthly reports include traffic growth, ranking changes, pages optimized, entity coverage improvements, and estimated revenue impact. Most clients achieve positive ROI by month 4 and 3-5x ROI by month 12.',
  },
  {
    question: 'What happens if the AI agent makes a mistake?',
    answer:
      'Every change is version-controlled with instant rollback capability. We deploy optimizations in batches with quality scoring, sample human review before mass deployment, and continuous performance monitoring. Mistakes are rare but caught early through automated alerts for negative ranking or traffic impact.',
  },
  {
    question: 'Do I still need a human SEO team with an AI agent?',
    answer:
      'Yes, but their role evolves. AI agents handle execution at scale (optimization, monitoring, analysis) while your human team focuses on strategy, creative content ideation, relationship building for link acquisition, and high-level decision-making. Most clients find their existing SEO team becomes 5-10x more productive with AI agent support.',
  },
]

const ctaData = {
  subheading: 'Ready to Deploy Your AI Agent?',
  heading: 'Get your free AI SEO audit.',
  lead: 'Discover how AI agents can optimize your content at scale. Includes SEO audit, entity coverage analysis, and AI agent deployment plan.',
  submitText: 'Deploy Your AI Agent',
}

/* -------------------------------------------------------------------------- */
/*  AI vs Manual Comparison Table (custom section)                            */
/* -------------------------------------------------------------------------- */

function ComparisonTableSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Subheading>AI Agent vs. Manual SEO</Subheading>
          <Heading as="h2" className="mt-2">
            Why AI SEO agents outperform manual optimization.
          </Heading>
          <Lead className="mt-6">
            AI SEO agents do not replace human strategists. They amplify what humans can accomplish
            by automating repetitive analysis and optimization at a speed that manual work cannot achieve.
          </Lead>
        </div>
        <div className="mx-auto max-w-5xl overflow-x-auto">
          <table className="w-full border-collapse border border-border-strong text-sm">
            <thead>
              <tr className="bg-ink text-paper">
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">Dimension</th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">AI SEO Agent</th>
                <th className="border border-border-strong p-4 text-left font-heading font-semibold">Manual SEO</th>
              </tr>
            </thead>
            <tbody>
              {[
                { dimension: 'Pages optimized per day', ai: '100-500 pages', manual: '3-5 pages' },
                { dimension: 'Keyword research speed', ai: '1,000 keywords in minutes', manual: '50-100 keywords per day' },
                { dimension: 'Internal link analysis', ai: 'Entire site in hours', manual: 'Weeks for large sites' },
                { dimension: 'SERP monitoring', ai: 'Continuous (real-time)', manual: 'Weekly or monthly' },
                { dimension: 'Entity coverage analysis', ai: 'Automated embeddings', manual: 'Manual competitor review' },
                { dimension: 'Title tag A/B testing', ai: 'Systematic, data-driven', manual: 'Ad hoc, intuition-based' },
                { dimension: 'Consistency', ai: '100% consistent quality', manual: 'Varies by team member' },
                { dimension: 'Cost at scale (1,000+ pages)', ai: '$0.50-$2 per page', manual: '$15-$50 per page' },
              ].map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-paper' : 'bg-cream'}>
                  <td className="border border-border-strong p-4 font-heading font-semibold text-ink">{row.dimension}</td>
                  <td className="border border-border-strong p-4 text-accent font-medium">{row.ai}</td>
                  <td className="border border-border-strong p-4 text-slate">{row.manual}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                */
/* -------------------------------------------------------------------------- */

export default function AISEOAgentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/ai-seo-agent',
          name: 'AI SEO Agent Services',
          description:
            'Professional AI SEO agent services with generative engine optimization (GEO). AI-powered content optimization, SERP analysis, automated keyword research, CTR optimization, and intelligent internal linking at scale.',
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
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'AI SEO Agent Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'AI Content Optimization',
                  description: 'Automated content analysis and optimization using AI at scale.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Generative Engine Optimization (GEO)',
                  description: 'Optimize for ChatGPT, Perplexity, Google AI Overviews, and Claude.',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'SERP Analysis & CTR Optimization',
                  description: 'Automated SERP monitoring and title tag A/B testing for higher CTR.',
                },
              },
            ],
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqData.slice(0, 5).map((item) => ({
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
      <ProcessTabbedSection
        subheading="Our Process"
        heading="From manual to AI-powered in 8 weeks."
        steps={processSteps}
        visual={<ServiceProcessVisual type="implementation" />}
        visualBg="ink"
      />
      <CaseStudyDark {...caseStudyData} />
      <AIAgentsShowcase
        subheading="AI-Powered Infrastructure"
        heading="8 proprietary AI agents powering every optimization."
        lead="Our AI agents handle the heavy lifting — analyzing SERPs, mapping entities, building links, and monitoring rankings — so your content performs at its best."
      />
      <FeatureCardsSection {...geoData} />
      <ComparisonTableSection />
      <div id="pricing">
        <PricingSection {...pricingData} />
      </div>
      <TestimonialSection {...testimonialsData} />
      <TestimonialQuoteSection
        quote="The AI agent optimized 5,000+ articles in 14 weeks. Our organic traffic went from 85K to 297K monthly sessions. The ROI has been extraordinary."
        author="Lauren Mitchell"
        role="Head of Content"
        company="TechInsights"
      />
      <FAQDarkSection title="AI SEO agent frequently asked questions" items={faqData} />
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
