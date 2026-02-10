import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  ProcessSection,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import {
  FileText,
  Heading1,
  Tag,
  Database,
  Users,
  Link2,
  Image,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'On-Page SEO Services | Content Optimization, E-E-A-T & Semantic SEO | TheProjectSEO',
  description: 'Expert on-page SEO services: title tag optimization, meta descriptions, E-E-A-T signals, schema markup, internal linking, semantic SEO. 600+ pages optimized with 220% avg conversion increase.',
  openGraph: {
    title: 'On-Page SEO Services | Content Optimization & E-E-A-T Experts',
    description: 'Expert on-page SEO services. Content optimization, keyword targeting, E-E-A-T, schema markup, semantic SEO. 220% average conversion increase.',
    url: 'https://theprojectseo.com/services/on-page-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'On-Page SEO Services | Content Optimization & E-E-A-T Experts',
    description: 'Expert on-page SEO services. Content optimization, E-E-A-T, schema markup, semantic SEO. 220% average conversion increase.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/on-page-seo',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'On-Page SEO Services',
  title: 'Optimize content that ranks and',
  accentWord: 'converts',
  titleAfterAccent: '',
  description:
    'On-page SEO is where search visibility meets revenue. We optimize every element visitors and search engines see: title tags, meta descriptions, content quality, E-E-A-T signals, schema markup, and internal linking to drive rankings and conversions simultaneously.',
  ctaPrimaryText: 'Get Your On-Page SEO Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '220%', label: 'Avg Conversion Increase' },
  { value: '165%', label: 'Avg Traffic Growth' },
  { value: '600+', label: 'Pages Optimized' },
  { value: '4.2x', label: 'Avg CTR Improvement' },
]

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive on-page SEO services.',
  lead: 'On-page SEO optimizes everything visitors and search engines encounter on your pages. It determines what you rank for and whether visitors convert.',
  services: [
    {
      icon: FileText,
      title: 'Title Tag & Meta Description Optimization',
      description:
        'Compelling, keyword-optimized title tags (50-60 characters) and persuasive meta descriptions (under 155 characters) that balance SEO targeting with click-through rate performance.',
      features: [
        'CTR-optimized formulas',
        'Unique titles for every page',
        '5-10% CTR improvement',
        'Search intent alignment',
      ],
    },
    {
      icon: Heading1,
      title: 'Header Tag Structure (H1-H6)',
      description:
        'Logical header hierarchy that communicates content structure to users and search engines. One H1 per page with primary keyword, H2s for major sections with related keywords.',
      features: [
        'Proper semantic hierarchy',
        'Keyword-targeted headers',
        'Featured snippet optimization',
        'Accessibility compliance',
      ],
    },
    {
      icon: FileText,
      title: 'Content Optimization & Quality',
      description:
        'Optimize existing content for search intent, topic coverage, readability, and keyword targeting. Analyze top-ranking competitors to identify content gaps and improve comprehensiveness.',
      features: [
        'Search intent matching',
        'Content gap analysis',
        'Topic comprehensiveness',
        'Readability optimization',
      ],
    },
    {
      icon: Users,
      title: 'E-E-A-T Optimization',
      description:
        'Strengthen Experience, Expertise, Authoritativeness, and Trustworthiness signals. Author bylines with credentials, cited sources, first-hand experience, editorial transparency.',
      features: [
        'Author credibility signals',
        'Cited sources & research',
        'Experience demonstrations',
        'Trust indicators',
      ],
    },
    {
      icon: Tag,
      title: 'Semantic SEO & Topical Authority',
      description:
        'Build content clusters around topic pillars. Incorporate semantically related entities using NLP analysis to match Google&apos;s understanding and establish topical authority.',
      features: [
        'Topic cluster strategy',
        'Entity optimization',
        'NLP-driven content',
        'Topical depth building',
      ],
    },
    {
      icon: Database,
      title: 'Schema Markup & Rich Results',
      description:
        'Structured data for rich result eligibility: FAQ, HowTo, Product, Review, BreadcrumbList schemas. Rich results increase CTR 20-30%.',
      features: [
        'FAQ schema implementation',
        'Product & Review markup',
        'Rich result eligibility',
        'AI Overview citations',
      ],
    },
    {
      icon: Link2,
      title: 'Internal Linking Strategy',
      description:
        'Strategic internal linking that distributes page authority, establishes topical relationships, guides conversion funnels, and helps Google prioritize important pages.',
      features: [
        'Authority distribution',
        'Contextual anchor text',
        'Hub-and-spoke models',
        'Conversion path optimization',
      ],
    },
    {
      icon: Image,
      title: 'Image SEO & Alt Text',
      description:
        'Comprehensive image optimization: descriptive alt text, proper file naming, size optimization, image schema markup, srcset for responsive images.',
      features: [
        'SEO-optimized alt text',
        'Image compression',
        'Visual search optimization',
        'Accessibility compliance',
      ],
    },
    {
      icon: BarChart3,
      title: 'Featured Snippet Optimization',
      description:
        'Structure content specifically to win featured snippets (position zero): paragraph, list, table, and FAQ snippets. Winning position zero can increase traffic 30-50%.',
      features: [
        'Snippet-targeted formatting',
        'People Also Ask optimization',
        'Position zero targeting',
        '30-50% traffic increase',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Methodology',
  heading: 'How we optimize on-page SEO.',
  steps: [
    {
      number: '01',
      title: 'Content & Keyword Audit',
      description:
        'Crawl your entire site to audit every on-page element: title tags, meta descriptions, headers, content quality, keyword targeting, internal links, schema markup, and images. Analyze your keyword portfolio to identify cannibalization, gaps, and intent mismatches. Benchmark against top-ranking competitors.',
    },
    {
      number: '02',
      title: 'Keyword Strategy & Content Mapping',
      description:
        'Develop comprehensive keyword map assigning unique primary and secondary keywords to each page. Use semantic SEO analysis to identify related entities and NLP terms. Create content briefs specifying word count, headings, questions to answer, and E-E-A-T elements.',
    },
    {
      number: '03',
      title: 'On-Page Optimization Execution',
      description:
        'Optimize every element systematically: rewrite title tags and meta descriptions for CTR, restructure header hierarchies, expand content depth, add E-E-A-T signals, implement schema markup, optimize images with alt text, build strategic internal links, improve readability.',
    },
    {
      number: '04',
      title: 'Schema & Rich Result Implementation',
      description:
        'Deploy structured data targeting specific rich result types: FAQ, HowTo, Product, Review, BreadcrumbList schemas. Validate with Google&apos;s Rich Results Test. Structure content formats specifically to win featured snippets at position zero.',
    },
    {
      number: '05',
      title: 'Conversion Path Optimization',
      description:
        'Optimize the entire on-page conversion path: CTA placement and copy based on heatmap data, user flow optimization, content structure addressing objections, page layout guiding toward desired actions. A/B test CTAs and layouts where appropriate.',
    },
    {
      number: '06',
      title: 'Monitoring & Iteration',
      description:
        'Track ranking changes, CTR improvements, organic traffic growth, engagement metrics, and conversion rates for every optimized page. Monthly reporting connects optimization work to business outcomes: leads, revenue, and ROI. Content freshness monitoring alerts when pages decay.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'B2B SaaS: 220% conversion increase through intent-aligned optimization.',
  challenge:
    'A B2B SaaS company generated decent organic traffic but conversion rates were poor. Content audit revealed severe keyword cannibalization with 14 pages competing for the same commercial keywords. Content did not align with search intent, CTAs were generic, and E-E-A-T signals were entirely absent. Blog posts had no internal links guiding readers toward product pages.',
  solution:
    'Comprehensive keyword mapping eliminated all cannibalization by assigning unique primary keywords to each page. Commercial intent pages were rewritten to match buyer search intent with comparison tables, pricing context, and social proof. Added author bios with industry credentials, cited customer data as evidence, and implemented FAQ schema on 35 key pages. Internal linking restructured into hub-and-spoke model connecting informational content to commercial landing pages through contextual anchor text.',
  results: [
    {
      metric: 'Organic Conversions',
      improvement: '+220%',
      timeframe: 'Within 5 months',
    },
    {
      metric: 'Average Keyword Position',
      improvement: 'Pos 12 → 6',
      timeframe: 'Across commercial terms',
    },
    {
      metric: 'Bounce Rate',
      improvement: '-35%',
      timeframe: 'Content matched intent',
    },
    {
      metric: 'Annual Organic Revenue',
      improvement: '+$1.8M',
      timeframe: '340% revenue increase',
    },
  ],
}

const toolsData = {
  subheading: 'Tools & Technologies',
  heading: 'The on-page SEO tools we use daily.',
  lead: 'Effective on-page SEO requires both creative expertise and data-driven tools. We combine content intelligence platforms with technical analysis tools.',
  cards: [
    {
      title: 'Content Optimization',
      items: [
        'Surfer SEO',
        'Clearscope',
        'Frase',
        'MarketMuse',
        'Grammarly / Hemingway',
      ],
    },
    {
      title: 'Keyword Research',
      items: [
        'Google Search Console',
        'Ahrefs',
        'Semrush',
        'Google Keyword Planner',
      ],
    },
    {
      title: 'Technical Analysis',
      items: [
        'Screaming Frog',
        'Google Rich Results Test',
        'Schema.org Validator',
      ],
    },
    {
      title: 'UX & Analytics',
      items: [
        'Google Analytics 4',
        'Hotjar',
        'Microsoft Clarity',
        'Google Looker Studio',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Cost & Pricing Guide',
  heading: 'How much does on-page SEO cost?',
  tiers: [
    {
      name: 'Starter',
      price: '$1,800',
      period: '/month',
      description: 'For small sites and local businesses with up to 50 pages.',
      features: [
        'Up to 20 pages optimized/month',
        'Keyword research & mapping',
        'Title tag & meta description optimization',
        'Header tag restructuring',
        'Content optimization',
        'Basic schema markup (FAQ, BreadcrumbList)',
        'Internal linking improvements',
        'Monthly reporting',
      ],
    },
    {
      name: 'Professional',
      price: '$3,800',
      period: '/month',
      description: 'For established businesses and e-commerce sites with 50-500 pages.',
      features: [
        'Everything in Starter',
        'Up to 50 pages optimized/month',
        'E-E-A-T signal implementation',
        'Semantic SEO & NLP optimization',
        'Advanced schema markup (Product, HowTo, Review)',
        'Content gap analysis',
        'Featured snippet optimization',
        'Conversion path optimization',
        'A/B testing for CTAs',
        'Weekly reporting',
        'Dedicated content strategist',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large sites with hundreds or thousands of pages.',
      features: [
        'Everything in Professional',
        'Unlimited page optimization',
        'Custom content strategy',
        'Multi-language on-page optimization',
        'Content freshness monitoring',
        'Advanced UX & CRO integration',
        'Priority support',
        'Quarterly strategy sessions',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What our clients say.',
  testimonials: [
    {
      quote:
        'They optimized our product pages and conversions tripled. Not just traffic -- actual paying customers from organic search. The ROI has been extraordinary.',
      author: 'Amanda Foster',
      role: 'E-commerce Director',
      company: 'Specialty Retailer',
    },
    {
      quote:
        'The content optimization combined with E-E-A-T improvements completely transformed our rankings. We went from page 3 to featured snippets in under 6 months.',
      author: 'James Liu',
      role: 'VP Marketing',
      company: 'B2B SaaS Company',
    },
    {
      quote:
        'Finally an SEO team that understands conversion optimization. They do not just get you traffic -- they restructure the entire on-page experience to generate revenue.',
      author: 'Christine Rodriguez',
      role: 'VP Growth',
      company: 'FinTech Startup',
    },
  ],
}

const faqData = [
  {
    question: 'What are on-page SEO services?',
    answer: 'On-page SEO services optimize the elements on your individual web pages to improve search rankings and conversion rates. This includes title tag and meta description optimization, header tag structure, content quality and keyword targeting, E-E-A-T signals, schema markup for rich results, internal linking strategy, image optimization, URL structure, and conversion path design. On-page SEO determines what queries you rank for and how visitors interact with your content after clicking through from search results.',
  },
  {
    question: 'How much do on-page SEO services cost?',
    answer: 'On-page SEO pricing typically ranges from $50-$300 per page for one-time optimization, or $1,000-$5,000 per month for ongoing retainers that include monitoring, updates, and iterative improvement. Our Starter plan begins at $1,800/month (20 pages), Professional at $3,800/month (50 pages with advanced optimization), and Enterprise is custom-quoted. Per-page pricing is available for specific optimization projects. The investment depends on the number of pages, competitive landscape, and whether new content creation is needed.',
  },
  {
    question: 'What is the difference between on-page and off-page SEO?',
    answer: 'On-page SEO optimizes elements on your website: content, meta tags, headers, schema markup, internal links, and user experience. Off-page SEO builds authority signals outside your website: backlinks, brand mentions, digital PR, and social signals. On-page SEO controls what you rank for and your conversion rate. Off-page SEO determines how high you rank against competitors. Both are essential -- strong on-page optimization maximizes your ranking potential from existing domain authority, while link building increases that authority ceiling.',
  },
  {
    question: 'What is E-E-A-T and why does it matter for on-page SEO?',
    answer: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It is Google&apos;s framework for evaluating content quality, especially for YMYL (Your Money or Your Life) topics. On-page E-E-A-T signals include: author bylines with verifiable credentials, first-hand experience demonstrations, cited sources and original data, editorial transparency, trust indicators like reviews and certifications, and comprehensive content that demonstrates deep topic knowledge. Pages with strong E-E-A-T signals consistently outrank those without them.',
  },
  {
    question: 'What are the most important on-page SEO factors in 2026?',
    answer: 'The most impactful on-page factors in 2026 are: (1) Search intent alignment -- content must match what users actually need, (2) Content comprehensiveness and topical authority -- semantic SEO and entity coverage, (3) E-E-A-T signals -- especially for commercial and YMYL queries, (4) Structured data for rich results and AI Overview citations, (5) Click-through rate optimization via compelling title tags and meta descriptions, (6) Internal linking architecture, and (7) Content freshness and update frequency. The shift toward entity-based ranking means topical authority matters more than individual keyword targeting.',
  },
  {
    question: 'How important is schema markup for on-page SEO?',
    answer: 'Schema markup is increasingly critical for on-page SEO. Pages with structured data are eligible for rich results that display star ratings, FAQ dropdowns, pricing, images, and other enhanced SERP features. Rich results increase click-through rates by 20-30%. In 2026, schema markup also plays a role in AI Overview citations -- search engines use structured data to understand and reference your content in AI-generated answers. We implement FAQ, Product, HowTo, Review, BreadcrumbList, and other relevant schema types based on your content.',
  },
  {
    question: 'How do you prevent keyword cannibalization?',
    answer: 'We prevent keyword cannibalization through systematic keyword mapping. Every page on your site receives a unique primary keyword assignment, with secondary keywords distributed to avoid overlap. When cannibalization already exists, we resolve it by consolidating competing pages (301 redirecting the weaker page to the stronger one), differentiating content to target distinct intents, implementing canonical tags where appropriate, and restructuring internal links to signal which page should rank for which query. We use Search Console data and Ahrefs to detect and monitor cannibalization ongoing.',
  },
  {
    question: 'What is semantic SEO and topical authority?',
    answer: 'Semantic SEO optimizes content for topics and entities rather than just individual keywords. Google uses NLP (natural language processing) to understand the semantic relationships between concepts. Topical authority is earned when your site comprehensively covers a topic cluster with depth and interlinking. For example, ranking for "on-page SEO" is easier if your site also has authoritative content about title tags, meta descriptions, schema markup, E-E-A-T, and content optimization -- all linked together. We build these topical clusters strategically to establish your site as the definitive resource on each target topic.',
  },
  {
    question: 'How do you optimize for featured snippets?',
    answer: 'Featured snippet optimization requires structuring content specifically for Google&apos;s extraction algorithms. For paragraph snippets: concise 40-50 word answers placed immediately after a question-format heading. For list snippets: ordered/unordered HTML lists under clear H2/H3 headings. For table snippets: properly formatted HTML tables with descriptive column headers. We also target "People Also Ask" boxes with FAQ-structured content. Our analysis of your competitors&apos; featured snippets reveals which format Google prefers for each query, allowing us to structure content accordingly.',
  },
  {
    question: 'Can on-page SEO work without backlinks?',
    answer: 'Yes, for low-competition keywords and local search queries. Strong on-page SEO can rank pages effectively when competition is limited. However, for competitive keywords, backlinks remain essential for reaching the top positions. On-page SEO maximizes your ranking potential from your current domain authority, while off-page SEO (link building) raises that authority ceiling. The most effective strategy combines both: optimize every on-page element to extract maximum value from your existing authority, then invest in link building to expand what is achievable.',
  },
  {
    question: 'How long does on-page SEO take to show results?',
    answer: 'On-page SEO improvements typically show initial ranking changes within 4-8 weeks as Google re-crawls and re-evaluates optimized pages. Full impact usually materializes within 3-6 months as engagement metrics improve and Google&apos;s algorithms recognize the enhanced relevance signals. Quick wins include CTR improvements from new title tags (visible within 1-2 weeks of re-indexing) and featured snippet captures (often within 2-4 weeks). Content expansion and E-E-A-T improvements take longer (2-4 months) because Google needs time to reassess content quality comprehensively.',
  },
]

const ctaData = {
  subheading: 'Ready to Optimize Content?',
  heading: 'Get your free on-page SEO audit.',
  lead: 'Discover content optimization opportunities, keyword targeting gaps, E-E-A-T weaknesses, and conversion blockers preventing your pages from reaching their full ranking and revenue potential.',
  submitText: 'Get Your Free Audit',
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function OnPageSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'On-Page SEO Services',
          description: 'Professional on-page SEO services including content optimization, title tag and meta description writing, E-E-A-T optimization, schema markup, internal linking strategy, and semantic SEO.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/on-page-seo',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection {...processData} />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="On-page SEO frequently asked questions" items={faqData} />
      </Container>
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
