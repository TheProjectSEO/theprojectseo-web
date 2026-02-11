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
  Globe,
  Languages,
  MapPin,
  Search,
  Link2,
  FileText,
  Users,
  BarChart3,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'International SEO Services | Hreflang, Multilingual SEO & Global Expansion | TheProjectSEO',
  description: 'Expert international SEO services: hreflang implementation, multilingual content localization, Baidu/Yandex/Naver optimization, domain strategy, country targeting. 40+ countries served.',
  openGraph: {
    title: 'International SEO Services | Hreflang & Global SEO Experts',
    description: 'Expert international SEO services. Hreflang implementation, multilingual content, Baidu/Yandex/Naver optimization. 40+ countries served.',
    url: 'https://theprojectseo.com/services/international-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'International SEO Services | Hreflang & Global SEO Experts',
    description: 'Expert international SEO services. Hreflang implementation, multilingual content, Baidu/Yandex/Naver optimization. 40+ countries served.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/international-seo',
  },
}

const heroData = {
  label: 'International SEO Services',
  title: 'Expand globally with multilingual',
  accentWord: 'SEO',
  titleAfterAccent: '',
  description:
    'International SEO expands your reach across borders and languages. We implement hreflang tags, optimize multilingual content, manage country targeting, and navigate region-specific search engines like Baidu, Yandex, and Naver to drive global organic growth.',
  ctaPrimaryText: 'Get Your International SEO Strategy',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '40+', label: 'Countries Served' },
  { value: '25+', label: 'Languages Optimized' },
  { value: '320%', label: 'Avg International Traffic Growth' },
  { value: '10+', label: 'Years Experience' },
]

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive international SEO services.',
  lead: 'International SEO requires technical implementation, cultural localization, and region-specific strategies. We help brands expand globally with optimized multilingual presence.',
  services: [
    {
      icon: Languages,
      title: 'Hreflang Implementation',
      description:
        'Proper hreflang tag implementation ensuring search engines serve the correct language and regional version of your content to each user. Prevents duplicate content issues across international versions.',
      features: [
        'Hreflang tag implementation',
        'Language targeting setup',
        'Regional URL structure',
        'Duplicate content prevention',
      ],
    },
    {
      icon: Globe,
      title: 'Multilingual Content Optimization',
      description:
        'Professional content localization beyond machine translation. Cultural adaptation, local keyword research, native speaker review, and region-specific content strategies.',
      features: [
        'Cultural localization',
        'Local keyword research',
        'Native speaker review',
        'Regional content strategy',
      ],
    },
    {
      icon: MapPin,
      title: 'Domain & URL Structure Strategy',
      description:
        'Strategic guidance on international URL structure: ccTLDs (.fr, .de), subdomains (fr.site.com), or subdirectories (site.com/fr/). Each approach has SEO implications we help you navigate.',
      features: [
        'ccTLD vs subdomain vs subdirectory',
        'Geotargeting in Search Console',
        'URL structure recommendations',
        'Migration planning',
      ],
    },
    {
      icon: Search,
      title: 'Regional Search Engine Optimization',
      description:
        'Optimization for region-specific search engines including Baidu (China), Yandex (Russia), Naver (South Korea), and Seznam (Czech Republic). Each requires unique strategies beyond Google optimization.',
      features: [
        'Baidu optimization',
        'Yandex optimization',
        'Naver optimization',
        'Regional search engine strategies',
      ],
    },
    {
      icon: Link2,
      title: 'International Link Building',
      description:
        'Country-specific link building campaigns targeting regional publications, directories, and industry sites. Build authority signals in each target market with locally relevant backlinks.',
      features: [
        'Country-specific outreach',
        'Regional publication placements',
        'Local directory submissions',
        'Multi-language link acquisition',
      ],
    },
    {
      icon: FileText,
      title: 'International Keyword Research',
      description:
        'In-depth keyword research for each target market. Local search behavior often differs significantly from direct translations. We identify what users actually search for in each region.',
      features: [
        'Local search behavior analysis',
        'Cultural search intent research',
        'Competitor analysis by region',
        'Search volume by country',
      ],
    },
    {
      icon: Users,
      title: 'Technical International SEO',
      description:
        'Technical implementation including proper hreflang syntax, CDN configuration for regional speed, currency and language switchers, and international schema markup.',
      features: [
        'Hreflang validation',
        'CDN regional optimization',
        'Language switcher implementation',
        'International schema markup',
      ],
    },
    {
      icon: BarChart3,
      title: 'International SEO Analytics',
      description:
        'Track performance across regions with segmented reporting. Monitor rankings, traffic, and conversions by country and language. Identify which markets deliver strongest ROI.',
      features: [
        'Country-level reporting',
        'Language-specific tracking',
        'Regional ranking monitoring',
        'Market ROI analysis',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Methodology',
  heading: 'How we implement international SEO.',
  steps: [
    {
      number: '01',
      title: 'Market & Opportunity Analysis',
      description:
        'Identify target markets with highest opportunity based on search volume, competition, and business viability. Conduct market research for each region including cultural considerations, local competitors, and search behavior patterns.',
    },
    {
      number: '02',
      title: 'Domain & Technical Strategy',
      description:
        'Determine optimal URL structure (ccTLD, subdomain, or subdirectory) based on resources, SEO goals, and technical constraints. Plan hreflang implementation, geotargeting configuration, and CDN setup for regional performance.',
    },
    {
      number: '03',
      title: 'International Keyword Research',
      description:
        'Conduct localized keyword research for each target market. Identify search terms, analyze local search intent, benchmark against regional competitors, and create keyword maps for each language/region combination.',
    },
    {
      number: '04',
      title: 'Content Localization & Optimization',
      description:
        'Localize content with native speakers ensuring cultural appropriateness. Optimize for local keywords, implement region-specific schema markup, and create locally relevant content that resonates with each market.',
    },
    {
      number: '05',
      title: 'Technical Implementation',
      description:
        'Implement hreflang tags correctly across all international versions. Configure Search Console geotargeting, set up language/currency switchers, optimize CDN for regional performance, and validate all technical elements.',
    },
    {
      number: '06',
      title: 'International Link Building',
      description:
        'Execute region-specific link building campaigns. Target local publications, directories, and industry sites in each market. Build authority signals that resonate with regional search engines and audiences.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'SaaS expansion: 320% international traffic growth across 8 countries.',
  challenge:
    'A US-based B2B SaaS company wanted to expand to European markets but had no international SEO infrastructure. Their website was English-only, had no hreflang implementation, and international visitors were all served the same US-focused content.',
  solution:
    'Implemented comprehensive international SEO strategy. Created localized versions for UK, France, Germany, Spain, Netherlands, Sweden, Norway, and Denmark using subdirectory structure. Implemented hreflang tags correctly, conducted keyword research for each market, professionally translated and culturally localized all content. Built region-specific backlinks through local outreach campaigns. Optimized for regional search engines and configured CDN for fast loading across Europe.',
  results: [
    {
      metric: 'International Traffic',
      improvement: '+320%',
      timeframe: 'Across 8 markets',
    },
    {
      metric: 'Markets Launched',
      improvement: '8',
      timeframe: 'European countries',
    },
    {
      metric: 'International Revenue',
      improvement: '€2.4M',
      timeframe: 'First year',
    },
    {
      metric: 'Hreflang Coverage',
      improvement: '100%',
      timeframe: 'No errors',
    },
  ],
}

const toolsData = {
  subheading: 'Tools & Technologies',
  heading: 'The international SEO stack we use.',
  lead: 'We use specialized tools for hreflang validation, multilingual keyword research, and international performance tracking.',
  cards: [
    {
      title: 'Hreflang & Technical',
      items: [
        'Hreflang Tags Testing Tool',
        'Screaming Frog (hreflang validation)',
        'Google Search Console',
      ],
    },
    {
      title: 'Keyword Research',
      items: [
        'Ahrefs (multi-country)',
        'Semrush (international)',
        'Google Keyword Planner',
      ],
    },
    {
      title: 'Translation & Localization',
      items: [
        'Native speaker network',
        'Professional translation services',
        'Cultural consultants',
      ],
    },
    {
      title: 'Analytics & Tracking',
      items: [
        'Google Analytics 4',
        'Country-specific ranking tools',
        'Google Looker Studio',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Cost & Pricing Guide',
  heading: 'How much does international SEO cost?',
  tiers: [
    {
      name: 'Starter',
      price: '$3,500',
      period: '/month',
      description: 'For businesses expanding to 2-3 countries.',
      features: [
        'Hreflang implementation',
        'Technical setup for 2-3 markets',
        'Keyword research per market',
        'Content localization guidance',
        'Monthly reporting',
      ],
    },
    {
      name: 'Professional',
      price: '$6,500',
      period: '/month',
      description: 'For businesses expanding to 4-8 countries.',
      features: [
        'Everything in Starter',
        'Up to 8 markets',
        'Full content localization',
        'International link building',
        'Regional search engine optimization',
        'Dedicated international SEO specialist',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For global enterprises (9+ countries).',
      features: [
        'Everything in Professional',
        'Unlimited markets',
        'Custom domain strategy',
        'Multi-language content strategy',
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
        'They handled our European expansion flawlessly. Hreflang implementation was perfect, content localization was culturally appropriate, and we&apos;re now generating 40% of revenue from international markets.',
      author: 'Mark Stevens',
      role: 'VP International',
      company: 'B2B SaaS Company',
    },
    {
      quote:
        'The international keyword research revealed massive opportunities we would have missed with direct translation. Each market has unique search behavior that they understood perfectly.',
      author: 'Sophie Dubois',
      role: 'Marketing Director',
      company: 'E-commerce Brand',
    },
    {
      quote:
        'They optimized our site for Baidu and Yandex, not just Google. That expertise in regional search engines was critical for our Asia and Russia expansion.',
      author: 'James Park',
      role: 'Global SEO Manager',
      company: 'Enterprise Technology',
    },
  ],
}

const faqData = [
  {
    question: 'What is international SEO?',
    answer: 'International SEO optimizes your website to rank in multiple countries and languages. It includes hreflang tag implementation, multilingual content optimization, domain strategy (ccTLDs, subdomains, or subdirectories), country targeting configuration, regional keyword research, and optimization for regional search engines like Baidu, Yandex, and Naver. International SEO ensures users in each target market find the appropriate language and regional version of your content.',
  },
  {
    question: 'What are hreflang tags and why do I need them?',
    answer: 'Hreflang tags are HTML attributes that tell search engines which language and regional version of a page to serve to users based on their location and language preferences. They prevent duplicate content issues across international versions and ensure German users see German content, French users see French content, etc. Incorrect hreflang implementation is one of the most common international SEO mistakes and can severely harm rankings.',
  },
  {
    question: 'Should I use ccTLDs, subdomains, or subdirectories for international sites?',
    answer: 'Each approach has pros and cons. ccTLDs (.fr, .de) provide strongest local signals but require separate domain authority building for each. Subdomains (fr.site.com) are easier to manage but harder to rank. Subdirectories (site.com/fr/) consolidate authority on one domain and are often the best balance for most businesses. The right choice depends on resources, technical capabilities, and market priorities. We provide strategic guidance based on your specific situation.',
  },
  {
    question: 'How much does international SEO cost?',
    answer: 'International SEO services typically range from $3,000-$10,000+ per month depending on number of countries and languages. Our Starter plan for 2-3 markets is $3,500/month, Professional for 4-8 markets is $6,500/month, and Enterprise for global expansion is custom-quoted. Costs include hreflang implementation, content localization, international keyword research, technical setup, and ongoing optimization. Investment scales with market complexity and content volume.',
  },
  {
    question: 'Do I need native speakers for content localization?',
    answer: 'Yes, professional content localization requires native speakers. Machine translation produces grammatically awkward content that lacks cultural nuance and often targets wrong keywords. Native speakers ensure content resonates with local audiences, captures regional idioms, and optimizes for how people actually search in each market. We work with a network of native speaker SEO consultants who understand both language and search behavior in each target market.',
  },
  {
    question: 'What is the difference between translation and localization?',
    answer: 'Translation converts text from one language to another word-for-word. Localization adapts content for cultural context, local idioms, regional search behavior, currency, date formats, and legal requirements. For SEO, localization is critical because direct translation often targets wrong keywords (French users may search different terms than literal French translations of English keywords). Effective international SEO requires full localization, not just translation.',
  },
  {
    question: 'How do I optimize for Baidu, Yandex, or Naver?',
    answer: 'Regional search engines have different ranking factors than Google. Baidu prioritizes having an ICP license, prefers Simplified Chinese content, and values backlinks from .cn domains. Yandex weighs behavioral signals heavily and has different technical requirements. Naver requires optimization for their unique search features and blog platform. Each regional search engine needs specialized strategies beyond standard Google SEO. We have experience optimizing for all major regional search engines.',
  },
  {
    question: 'Should I target all countries in a language or separate by country?',
    answer: 'It depends. Spanish speakers in Spain vs. Mexico vs. Argentina have different search behavior, vocabulary, and cultural references. For major markets, separate optimization per country is ideal (es-ES for Spain, es-MX for Mexico). For smaller markets, a single version per language may suffice (de for all German speakers). The decision depends on market size, resource constraints, and how significantly search behavior varies across regions. We provide strategic guidance based on market analysis.',
  },
  {
    question: 'How long does international SEO take to show results?',
    answer: 'International SEO timelines are typically longer than domestic SEO. Initial technical setup (hreflang, URL structure) takes 1-3 months. Content localization and optimization adds 2-4 months. Ranking improvements typically appear 4-6 months after launch as search engines index and rank localized content. Link building and authority development in new markets adds another 3-6 months for full impact. Most businesses see meaningful international traffic within 6-12 months.',
  },
]

const ctaData = {
  subheading: 'Ready to Expand Globally?',
  heading: 'Get your international SEO strategy.',
  lead: 'Discover which markets offer the strongest opportunity for your business. Our international SEO audit includes market analysis, technical recommendations, and a roadmap for global expansion.',
  submitText: 'Get Your Strategy',
}

export default function InternationalSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'International SEO Services',
          description: 'Professional international SEO services including hreflang implementation, multilingual content localization, domain strategy consulting, country targeting, international keyword research, and global expansion strategy.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/international-seo',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="strategy" />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="International SEO frequently asked questions" items={faqData} />
      </Container>
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
