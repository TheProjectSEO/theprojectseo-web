import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
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
  CTAFormSection,
} from '@/components/service-page-sections'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  Search,
  Zap,
  Link2,
  FileText,
  Code,
  BarChart3,
  Shield,
  Target,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'SEO Audit Services | Comprehensive Technical, On-Page & Off-Page Analysis | TheProjectSEO',
  description:
    'Expert SEO audit services. Comprehensive technical SEO analysis, on-page optimization review, backlink profile audit, competitor analysis, and actionable recommendations. Identify every issue holding back your rankings.',
  openGraph: {
    title: 'SEO Audit Services | Comprehensive Technical & Content Analysis',
    description:
      'Expert SEO audit services. Technical SEO analysis, on-page review, backlink audit, competitor analysis. Identify every issue holding back rankings.',
    url: 'https://theprojectseo.com/services/seo-audit',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Audit Services | Comprehensive SEO Analysis',
    description:
      'Expert SEO audit services. Technical SEO, on-page, backlinks, competitors. Actionable recommendations.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/seo-audit',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'SEO Audit Services',
  title: 'Discover every issue holding back your',
  accentWord: 'rankings',
  titleAfterAccent: '',
  description:
    'Comprehensive SEO audit covering technical infrastructure, on-page optimization, backlink profile, content quality, and competitive positioning. We identify every issue impacting your rankings and provide a prioritized roadmap for improvement.',
  ctaPrimaryText: 'Get Your SEO Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '500+', label: 'SEO Audits Delivered' },
  { value: '200+', label: 'Issues Identified per Audit' },
  { value: '10+', label: 'Years Experience' },
  { value: '100%', label: 'Actionable Recommendations' },
]

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive SEO audit services.',
  lead: 'An SEO audit is the foundation of every successful optimization strategy. We identify technical issues, content gaps, and competitive opportunities across your entire site.',
  services: [
    {
      icon: Zap,
      title: 'Technical SEO Audit',
      description:
        'Full-site crawl using Screaming Frog and Lumar analyzing crawlability, indexation, Core Web Vitals, site speed, mobile optimization, structured data, HTTPS, JavaScript rendering, and XML sitemaps.',
      features: [
        'Crawlability analysis',
        'Core Web Vitals assessment',
        'Site speed analysis',
        'Mobile optimization review',
      ],
    },
    {
      icon: FileText,
      title: 'On-Page SEO Audit',
      description:
        'Comprehensive review of title tags, meta descriptions, header structure, content quality, keyword targeting, internal linking, image optimization, and E-E-A-T signals.',
      features: [
        'Title & meta tag review',
        'Content quality analysis',
        'Keyword mapping',
        'E-E-A-T assessment',
      ],
    },
    {
      icon: Link2,
      title: 'Backlink Profile Audit',
      description:
        'Complete analysis of backlink profile using Ahrefs and Semrush: referring domain quality, anchor text distribution, toxic link identification, link gap analysis vs. competitors.',
      features: [
        'Referring domain analysis',
        'Toxic link identification',
        'Anchor text review',
        'Competitor link gap',
      ],
    },
    {
      icon: Search,
      title: 'Content Gap Analysis',
      description:
        'Identify content opportunities by analyzing what keywords competitors rank for that you do not. Find missing topics, underserved queries, and content expansion opportunities.',
      features: [
        'Keyword gap identification',
        'Topic opportunity analysis',
        'Competitor content audit',
        'Search intent alignment',
      ],
    },
    {
      icon: Code,
      title: 'Site Architecture Review',
      description:
        'Analyze information architecture, URL structure, internal linking patterns, pagination handling, canonicalization strategy, and navigation hierarchy.',
      features: [
        'URL structure analysis',
        'Internal linking audit',
        'Site hierarchy review',
        'Canonicalization check',
      ],
    },
    {
      icon: BarChart3,
      title: 'Analytics & Performance Audit',
      description:
        'Review Google Analytics setup, conversion tracking, Search Console configuration, keyword rankings, organic traffic patterns, and engagement metrics.',
      features: [
        'Analytics configuration',
        'Conversion tracking review',
        'Ranking analysis',
        'Traffic pattern insights',
      ],
    },
    {
      icon: Target,
      title: 'Competitive Analysis',
      description:
        'Deep dive into top 5-10 competitors analyzing their backlink profiles, content strategies, keyword targeting, technical implementations, and ranking patterns.',
      features: [
        'Competitor backlink analysis',
        'Content strategy review',
        'Keyword overlap analysis',
        'Technical benchmark',
      ],
    },
    {
      icon: Shield,
      title: 'Penalty Risk Assessment',
      description:
        'Identify potential penalty risks including toxic backlinks, thin content, keyword stuffing, duplicate content, cloaking, and link scheme violations.',
      features: [
        'Manual action check',
        'Algorithmic penalty risk',
        'Toxic link assessment',
        'Compliance review',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Methodology',
  heading: 'How we conduct comprehensive SEO audits.',
  steps: [
    {
      number: '01',
      title: 'Discovery & Data Collection',
      description:
        'Gather access to Google Search Console, Google Analytics, and any existing SEO tools. Crawl entire site using Screaming Frog and Lumar. Export backlink data from Ahrefs and Semrush. Review historical performance data and identify business goals and priority pages.',
    },
    {
      number: '02',
      title: 'Technical Infrastructure Analysis',
      description:
        'Analyze crawlability, indexation coverage, Core Web Vitals, site speed, mobile optimization, JavaScript rendering, structured data, HTTPS configuration, XML sitemaps, robots.txt, canonicalization, redirect chains, and server response codes. Test across desktop and mobile.',
    },
    {
      number: '03',
      title: 'On-Page & Content Audit',
      description:
        'Review title tags, meta descriptions, header structure, content quality and depth, keyword targeting and cannibalization, internal linking architecture, image optimization, URL structure, and E-E-A-T signals. Identify thin content, duplicate content, and content gaps.',
    },
    {
      number: '04',
      title: 'Off-Page & Backlink Analysis',
      description:
        'Audit backlink profile including referring domain quality, anchor text distribution, toxic links, link velocity, and nofollow vs. dofollow ratio. Conduct competitor backlink analysis and link gap analysis to identify acquisition opportunities.',
    },
    {
      number: '05',
      title: 'Competitive Benchmarking',
      description:
        'Analyze top 5-10 competitors: their backlink profiles, content strategies, keyword targeting, technical implementations, and ranking patterns. Identify competitive advantages and gaps. Benchmark performance metrics against industry standards.',
    },
    {
      number: '06',
      title: 'Prioritized Recommendations',
      description:
        'Deliver comprehensive audit report with findings categorized by severity (critical, high, medium, low). Provide actionable recommendations prioritized by estimated traffic impact and implementation effort. Include implementation roadmap with timelines and expected outcomes.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'E-commerce audit: 200+ issues identified, 380% traffic increase after fixes.',
  challenge:
    'An e-commerce site with 5,000+ products was experiencing declining organic traffic despite regular content updates. Previous agencies had failed to diagnose the core issues. The site had good content but rankings continued to drop across all product categories.',
  solution:
    'Comprehensive SEO audit revealed 200+ issues across technical, on-page, and off-page. Critical findings: 40% of product pages had noindex tags from staging migration error, Core Web Vitals failing (LCP 4.8s, CLS 0.6), 3,000+ duplicate canonical tags, severe keyword cannibalization (200+ pages competing for same terms), 15% of backlink profile was toxic from old PBN campaign. Provided prioritized 90-day implementation roadmap.',
  results: [
    {
      metric: 'Critical Issues Identified',
      improvement: '200+',
      timeframe: 'Across technical & content',
    },
    {
      metric: 'Organic Traffic',
      improvement: '+380%',
      timeframe: 'After implementing fixes',
    },
    {
      metric: 'Indexed Pages',
      improvement: '2,000+',
      timeframe: 'Previously blocked',
    },
    {
      metric: 'Core Web Vitals',
      improvement: '100%',
      timeframe: 'Pass rate achieved',
    },
  ],
}

const toolsData = {
  subheading: 'Tools & Technologies',
  heading: 'The SEO audit stack we use.',
  lead: 'We use industry-leading tools for comprehensive technical, on-page, and off-page analysis.',
  cards: [
    {
      title: 'Crawling & Technical',
      items: [
        'Screaming Frog SEO Spider',
        'Lumar (DeepCrawl)',
        'Google PageSpeed Insights',
        'Lighthouse CI',
      ],
    },
    {
      title: 'Backlink Analysis',
      items: [
        'Ahrefs',
        'Semrush',
        'Moz Link Explorer',
        'Majestic SEO',
      ],
    },
    {
      title: 'Content & On-Page',
      items: [
        'Surfer SEO',
        'Clearscope',
        'Google Rich Results Test',
      ],
    },
    {
      title: 'Analytics & Data',
      items: [
        'Google Search Console',
        'Google Analytics 4',
        'Google Looker Studio',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Cost & Pricing Guide',
  heading: 'How much does an SEO audit cost?',
  tiers: [
    {
      name: 'Foundation',
      price: '$1,800',
      period: '/month',
      description: 'For small sites (under 500 pages).',
      features: [
        'Technical SEO audit',
        'On-page review (up to 50 pages)',
        'Backlink profile analysis',
        'Basic competitor analysis',
        'Google Analytics review',
        'Prioritized recommendations',
        '30-page audit report',
      ],
    },
    {
      name: 'Growth',
      price: '$3,500',
      period: '/month',
      description: 'For established sites (500-5,000 pages).',
      features: [
        'Everything in Foundation',
        'Comprehensive technical audit',
        'Full-site on-page review',
        'Deep backlink audit with toxic link report',
        'Competitor deep dive (5+ competitors)',
        'Content gap analysis',
        'Implementation roadmap',
        '60-page audit report',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large sites (5,000+ pages).',
      features: [
        'Everything in Growth',
        'Enterprise-scale crawling',
        'Multi-site audit',
        'International SEO audit',
        'Log file analysis',
        'Custom competitive intelligence',
        'Executive presentation',
        'Priority support',
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
        'We successfully migrated our blog from Medium to Goodnotes.com/blog without losing traffic. We also solved tech SEO problems for the Thailand, Japan, Taiwan, and Hong Kong sites, doubling the traffic with minimal efforts.',
      author: 'Elizabeth Ching',
      role: 'Marketing',
      company: 'Goodnotes',
    },
    {
      quote:
        'He helped us with market research, define the right topics along with the content brief and SEO framework. He did an extensive site audit and helped us weed out the loopholes. This helped us scale our traffic and also improved our Google ranking. Aditya was always ready to help and introduced me to a lot of concepts in SEO.',
      author: 'Shubhangi',
      role: 'Content',
      company: 'Adapt.io',
    },
    {
      quote:
        'I had the pleasure of working with Aditya. He is a true SEO specialist. He knows how to layout the SEO strategy together with a timeline and a list of tasks to be done.',
      author: 'Eyal Gerber',
      role: 'Founder & CEO',
      company: 'Novodes',
    },
  ],
}

const faqData = [
  {
    question: 'What is an SEO audit?',
    answer: 'An SEO audit is a comprehensive analysis of your website&apos;s search optimization across technical infrastructure, on-page elements, content quality, backlink profile, and competitive positioning. It identifies every issue preventing your site from ranking well and provides prioritized, actionable recommendations for improvement. A thorough audit examines 150-300+ factors including crawlability, indexation, Core Web Vitals, content optimization, keyword targeting, internal linking, backlinks, and more.',
  },
  {
    question: 'How much does an SEO audit cost?',
    answer: 'SEO audit pricing typically ranges from $1,800-$3,500 per month depending on site size and audit depth. Our Foundation plan for small sites (under 500 pages) is $1,800/month, Growth for established sites (500-5,000 pages) is $3,500/month, and Enterprise audits for large or complex sites are custom-quoted. The investment pays for itself quickly as implementing audit recommendations typically produces 100-300% traffic increases within 3-6 months.',
  },
  {
    question: 'How long does an SEO audit take?',
    answer: 'A comprehensive SEO audit takes 1-3 weeks depending on site size and complexity. Small sites (under 500 pages) typically take 1 week, mid-size sites (500-5,000 pages) take 2 weeks, and large enterprise sites take 3 weeks or more. This includes time for full-site crawling, data collection, analysis across technical/on-page/off-page factors, competitive benchmarking, and report preparation with prioritized recommendations.',
  },
  {
    question: 'What is included in a technical SEO audit?',
    answer: 'A technical SEO audit examines: site crawlability (robots.txt, XML sitemaps), indexation coverage (index status, canonical tags, noindex issues), Core Web Vitals (LCP, INP, CLS), site speed and performance, mobile optimization, JavaScript rendering, structured data implementation, HTTPS configuration, internal linking architecture, URL structure, redirect chains, server response codes, and log file analysis. We use Screaming Frog, Lumar, PageSpeed Insights, and Google Search Console for analysis.',
  },
  {
    question: 'What is a backlink audit?',
    answer: 'A backlink audit analyzes your site&apos;s backlink profile to assess link quality, identify toxic links that could cause penalties, evaluate anchor text distribution for over-optimization risks, and benchmark against competitor backlink profiles. We use Ahrefs, Semrush, Moz, and Majestic to examine referring domains, link quality metrics (DR/DA), spam scores, and anchor text patterns. The audit includes disavow file recommendations for toxic links and identifies link gap opportunities.',
  },
  {
    question: 'Do I need an SEO audit if my site is new?',
    answer: 'Yes, especially for new sites. An SEO audit before launch identifies technical issues, ensures proper indexation configuration, validates structured data implementation, confirms mobile optimization, and establishes baseline performance metrics. For existing sites launching redesigns or migrations, pre-launch audits are critical to prevent ranking losses. New sites benefit from audits that establish proper SEO foundation before content creation and link building efforts begin.',
  },
  {
    question: 'What is a content gap analysis?',
    answer: 'Content gap analysis identifies topics and keywords that competitors rank for but you do not. Using tools like Ahrefs and Semrush, we compare your keyword portfolio against top competitors to find high-value opportunities you&apos;re missing. This reveals underserved topics, search intent gaps, and content expansion opportunities that can drive significant new traffic. Content gap analysis typically uncovers 50-200+ keyword opportunities per competitor analyzed.',
  },
  {
    question: 'How often should I get an SEO audit?',
    answer: 'Comprehensive SEO audits should be conducted annually at minimum, or after major site changes like redesigns, migrations, or CMS platform changes. Quarterly audits are recommended for larger sites or competitive industries. Ongoing monitoring for technical issues (monthly crawls) and backlink profile health (monthly reviews) should happen between comprehensive audits. Many of our clients start with a full audit then transition to monthly retainer services for continuous optimization.',
  },
  {
    question: 'What happens after the SEO audit?',
    answer: 'After the audit, we deliver a comprehensive report with all findings categorized by severity (critical, high, medium, low priority). The report includes specific implementation recommendations with step-by-step instructions, estimated traffic impact for each fix, and a prioritized roadmap. Many clients use the audit to guide in-house implementation, while others engage us for ongoing SEO services to execute the recommendations. We provide follow-up support to answer questions about audit findings.',
  },
  {
    question: 'Can an SEO audit guarantee ranking improvements?',
    answer: 'While we cannot guarantee specific ranking positions (no ethical SEO can), implementing audit recommendations consistently produces measurable traffic improvements. Our audits identify technical issues, content gaps, and optimization opportunities that directly impact rankings. Clients who implement audit recommendations typically see 100-300% organic traffic increases within 3-6 months. The audit provides a data-driven roadmap for improvement based on proven SEO best practices and competitive analysis.',
  },
]

const ctaData = {
  subheading: 'Ready to Discover What&apos;s Holding You Back?',
  heading: 'Get your comprehensive SEO audit.',
  lead: 'Our audit identifies every technical issue, content gap, and optimization opportunity across your entire site. Receive a prioritized roadmap with actionable recommendations that drive measurable ranking improvements.',
  submitText: 'Get Your SEO Audit',
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function SEOAuditPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'SEO Audit Services',
          description: 'Professional SEO audit services including comprehensive technical SEO analysis, on-page optimization review, backlink profile audit, content gap analysis, competitor analysis, and prioritized recommendations.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/seo-audit',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="audit" />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="SEO audit frequently asked questions" items={faqData} />
      </Container>
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
