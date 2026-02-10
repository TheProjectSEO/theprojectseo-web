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
  RelatedServicesSection,
  CTASection,
  TextContentSection,
} from '@/components/service-page-sections'
import {
  ShoppingCart,
  Search,
  Image,
  Tag,
  Layers,
  Globe,
  FileCode,
  Filter,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-commerce SEO Services | Product Page Optimization & Technical SEO | TheProjectSEO',
  description:
    'Expert e-commerce SEO services for Shopify, WooCommerce, and Magento. Product page SEO, Core Web Vitals optimization, breadcrumb schema, review schema, and Google Shopping integration. 10+ years driving online store revenue.',
  openGraph: {
    title: 'E-commerce SEO Services | Drive Revenue Through Organic Search',
    description:
      'Expert e-commerce SEO services. Product page optimization, platform-specific SEO for Shopify, WooCommerce, and Magento, technical SEO, and Google Shopping integration.',
    url: 'https://theprojectseo.com/services/ecommerce-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce SEO Services | Drive Revenue Through Organic Search',
    description:
      'Expert e-commerce SEO services. Product page optimization, technical SEO, Google Shopping integration, and platform-specific optimization.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/ecommerce-seo',
  },
}

/* -------------------------------------------------------------------------- */
/*  Data                                                                       */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'E-commerce SEO Services',
  title: 'Drive',
  accentWord: 'revenue',
  titleAfterAccent: 'through organic search',
  description:
    'E-commerce SEO is the practice of optimizing online stores to rank higher in search engine results, driving qualified organic traffic that converts into revenue. Our expert e-commerce SEO services optimize product pages, category architecture, and technical infrastructure across Shopify, WooCommerce, and Magento to increase organic traffic and deliver sustainable revenue growth.',
  ctaPrimaryText: 'Get E-commerce SEO Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '320%', label: 'Average Revenue Growth' },
  { value: '280%', label: 'Organic Traffic Increase' },
  { value: '10+', label: 'Years E-commerce SEO Experience' },
  { value: '200+', label: 'Online Stores Optimized' },
]

const challengesData = {
  subheading: 'E-commerce SEO Challenges',
  heading: 'Why most online stores struggle with SEO',
  lead: 'E-commerce sites face unique technical challenges that standard SEO cannot address. Without specialized e-commerce SEO expertise, stores waste crawl budget, lose rankings to duplicate content, and fail to capture high-intent commercial queries.',
  cards: [
    {
      title: 'Duplicate Content from Product Variations',
      items: [
        'Product variations, color options, size filters, and manufacturer descriptions create massive duplicate content problems that dilute rankings and waste crawl budget across thousands of URL combinations.',
      ],
    },
    {
      title: 'Poor Site Architecture & Thin Content',
      items: [
        'Deep product burial, unclear category hierarchy, and minimal product descriptions mean search engines cannot discover or value your most important pages. Thin product pages cannot compete with Amazon and major retailers.',
      ],
    },
    {
      title: 'Faceted Navigation & Crawl Budget Waste',
      items: [
        'Faceted navigation generates exponential URL combinations from filters and sorting options. A category with 100 products and 5 filter types can produce thousands of crawlable pages, wasting crawl budget on low-value content.',
      ],
    },
    {
      title: 'Missing Schema & Slow Core Web Vitals',
      items: [
        'Without Product schema, review schema, and breadcrumb schema, your listings lack rich snippets in search results. Poor Core Web Vitals (LCP, CLS, INP) from heavy product images and JavaScript further suppress rankings.',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive e-commerce SEO services',
  lead: 'From product page SEO and Shopify optimization to Google Shopping integration and Core Web Vitals performance, we cover every aspect of e-commerce search visibility.',
  services: [
    {
      icon: ShoppingCart,
      title: 'Product Page SEO Optimization',
      description:
        'Optimize product pages with unique content, compelling descriptions, and internal linking for long-tail keywords and commercial queries.',
      features: ['Unique product descriptions', 'Title & meta optimization', 'Image alt text strategy', 'Internal linking framework'],
    },
    {
      icon: Layers,
      title: 'Category Page & Site Architecture',
      description:
        'Transform category pages into ranking powerhouses with optimized content, strategic internal linking, and breadcrumb navigation.',
      features: ['Site architecture restructuring', 'Breadcrumb navigation', 'Internal link distribution', 'Orphan page elimination'],
    },
    {
      icon: Filter,
      title: 'Faceted Navigation & URL Parameter Management',
      description:
        'Implement strategic indexation for faceted navigation using canonical tags, robots directives, and AJAX-based filtering.',
      features: ['Strategic indexation control', 'Canonical tag implementation', 'Robots directives', 'AJAX filtering setup'],
    },
    {
      icon: Tag,
      title: 'Product Schema & Review Schema Implementation',
      description:
        'Deploy comprehensive structured data for products, reviews, breadcrumbs, and FAQs. Rich snippets increase CTR by 20-30%.',
      features: ['Product markup', 'Review schema', 'Breadcrumb schema', 'FAQ schema'],
    },
    {
      icon: Search,
      title: 'E-commerce Keyword Research & Strategy',
      description:
        'Deep keyword research targeting commercial intent keywords, long-tail product queries, and informational content opportunities.',
      features: ['Commercial intent targeting', 'Long-tail discovery', 'Competitor gap analysis', 'Content strategy mapping'],
    },
    {
      icon: Image,
      title: 'Product Image Optimization',
      description:
        'Optimize product images for search visibility and Core Web Vitals with alt text, modern formats, lazy loading, and CDN delivery.',
      features: ['Alt text templates', 'WebP/AVIF conversion', 'Lazy loading', 'CDN delivery'],
    },
    {
      icon: Globe,
      title: 'Google Shopping & Merchant Center Integration',
      description:
        'Optimize your Google Merchant Center product feed for maximum visibility in Google Shopping and free product listings.',
      features: ['Feed optimization', 'Merchant Center setup', 'Supplemental feeds', 'Feed health monitoring'],
    },
    {
      icon: FileCode,
      title: 'Platform-Specific Technical SEO',
      description:
        'Expert optimization for Shopify, WooCommerce, and Magento accounting for each platform&apos;s unique constraints.',
      features: ['Shopify optimization', 'WooCommerce tuning', 'Magento configuration', 'Platform-specific fixes'],
    },
  ],
}

const toolsData = {
  subheading: 'Platforms & Tools',
  heading: 'E-commerce SEO tools we use',
  paragraphs: [
    'We leverage platform-specific expertise and industry-leading tools to optimize every aspect of your e-commerce SEO:',
    '**Shopify** — Shopify SEO optimization including theme customization, app integration, Liquid template modification, and URL structure management for online stores of all sizes.',
    '**WooCommerce** — WooCommerce SEO leveraging WordPress flexibility for custom permalink structures, advanced product schema, Yoast/RankMath integration, and database query optimization.',
    '**Magento / Adobe Commerce** — Magento SEO for enterprise catalogs including layered navigation management, URL rewrite optimization, Varnish cache configuration, and Elasticsearch tuning.',
    '**Google Merchant Center** — Product feed optimization for Google Shopping free listings and paid ads. Feed diagnostics, supplemental feeds, and structured data alignment for maximum product visibility.',
    '**Screaming Frog** — Technical crawling for duplicate content detection, redirect chain analysis, canonical tag auditing, and structured data validation across large product catalogs.',
    '**Semrush & Ahrefs** — E-commerce keyword research, competitor product page analysis, content gap identification, backlink analysis, and organic market share tracking for commercial intent queries.',
    '**Google Analytics 4** — E-commerce event tracking, conversion attribution modeling, product performance reporting, and organic revenue measurement to tie SEO directly to revenue outcomes.',
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we optimize e-commerce sites for revenue growth',
  steps: [
    {
      number: '01',
      title: 'E-commerce SEO Audit & Product Catalog Analysis',
      description:
        'We begin with a comprehensive e-commerce technical SEO audit analyzing your entire product catalog, category structure, faceted navigation, internal linking, and Core Web Vitals. We crawl every product and category page, identify duplicate content from product variations and URL parameters, assess schema implementation gaps, and benchmark against top-ranking competitors in your vertical.',
    },
    {
      number: '02',
      title: 'Keyword Strategy & Site Architecture Optimization',
      description:
        'We develop a comprehensive e-commerce keyword research strategy mapping commercial intent keywords, long-tail product queries, and informational content opportunities to your catalog structure. We optimize site architecture to ensure logical category hierarchies, implement breadcrumb navigation for both users and search engines, and restructure internal linking to distribute authority to your most important revenue-generating pages.',
    },
    {
      number: '03',
      title: 'Product & Category Page Optimization',
      description:
        'We optimize priority product pages with unique content, compelling descriptions targeting product search queries, image optimization with descriptive alt text, and comprehensive Product schema with review schema. Category pages receive optimized content, breadcrumb schema, strategic internal linking, and faceted navigation management using canonical tags and robots directives to control crawl budget.',
    },
    {
      number: '04',
      title: 'Google Shopping & Feed Optimization',
      description:
        'We optimize your Google Merchant Center product feed to maximize visibility in free product listings and Shopping results. This includes product title optimization, accurate categorization, image quality improvement, supplemental feed creation for custom attributes, and ongoing feed health monitoring to catch disapprovals and data quality issues before they impact visibility.',
    },
    {
      number: '05',
      title: 'Monitoring, Seasonal Optimization & Revenue Scaling',
      description:
        'Continuous monitoring of product page rankings, organic revenue attribution, Core Web Vitals performance, and crawl health. We implement seasonal SEO strategies for peak shopping periods, manage out-of-stock page handling to preserve rankings, and scale optimization across your expanding product catalog. Every optimization ties directly to revenue impact measurement.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Fashion Retailer: 320% Revenue Increase in 10 Months',
  challenge:
    'A fashion retail brand with 5,000+ products on Shopify was generating minimal organic traffic. Product pages had thin manufacturer descriptions copy-pasted from suppliers, product variations created thousands of duplicate URLs, faceted navigation was fully indexable (wasting 65% of crawl budget on filter pages), Product schema was missing from all pages, and Core Web Vitals failed on mobile due to unoptimized product images averaging 2MB each.',
  solution:
    'We restructured the Shopify site architecture to surface key products and categories within 2 clicks. We wrote unique product descriptions for 500+ priority products targeting long-tail keywords and product search queries. We implemented proper faceted navigation control using Shopify metafields and canonical tags. We deployed comprehensive Product schema with review schema across all products, optimized all product images to WebP format with lazy loading, and built high-quality backlinks to category pages through digital PR campaigns.',
  results: [
    { metric: 'Organic Revenue Growth', improvement: '+320%', timeframe: 'Within 10 months' },
    { metric: 'Organic Traffic Increase', improvement: '+280%', timeframe: 'Within 10 months' },
    { metric: 'Product Pages with Rich Snippets', improvement: '4,800+ pages', timeframe: 'Complete deployment' },
    { metric: 'Average Order Value', improvement: '+15%', timeframe: 'From organic traffic' },
  ],
}

const pricingData = {
  subheading: 'E-commerce SEO Pricing',
  heading: 'Cost & pricing guide',
  lead: 'E-commerce SEO investment varies by catalog size, platform complexity, and competitive landscape. With average CPCs of $8-14 for commercial e-commerce keywords, organic rankings deliver substantial ROI compared to paid acquisition. Most clients see 5-10x return on their e-commerce SEO investment within 12 months.',
  tiers: [
    {
      name: 'Starter',
      price: '$2,500',
      period: '/month',
      description: 'Perfect for small to mid-size online stores with up to 1,000 products.',
      features: [
        'Up to 1,000 products optimized',
        'Product page SEO & unique descriptions',
        'Product schema & breadcrumb schema',
        'Core Web Vitals optimization',
        'Google Merchant Center setup',
        'Technical e-commerce audit',
        'Site architecture optimization',
        'Monthly reporting with revenue attribution',
      ],
      ctaText: 'Get Started',
      ctaHref: '/contact',
    },
    {
      name: 'Professional',
      price: '$5,500',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses with 1,000-5,000 products.',
      features: [
        'Everything in Starter',
        'Up to 5,000 products optimized',
        'Advanced schema (Product, Review, FAQ)',
        'Faceted navigation optimization',
        'Content strategy & buying guides',
        'Seasonal SEO calendar management',
        'Conversion rate optimization',
        'Weekly reporting',
        'Dedicated e-commerce SEO specialist',
      ],
      featured: true,
      ctaText: 'Get Started',
      ctaHref: '/contact',
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large catalogs (10,000+ products) and complex multi-platform setups.',
      features: [
        'Everything in Professional',
        'Unlimited products',
        'Multi-region / multi-language optimization',
        'Custom platform integrations',
        'Advanced technical solutions',
        'Link building campaigns',
        'Google Shopping feed optimization',
        'Priority support',
        'Quarterly strategy sessions',
      ],
      ctaText: 'Get Started',
      ctaHref: '/contact',
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Results',
  heading: 'What e-commerce clients say',
  testimonials: [
    {
      quote:
        'Our organic revenue tripled in less than a year. They understand Shopify SEO at a level we have never seen from other agencies. Product pages now rank with rich snippets and organic is our top revenue channel.',
      author: 'Sarah Thompson',
      role: 'CEO, Fashion E-commerce Brand',
    },
    {
      quote:
        'They fixed Core Web Vitals issues our dev team could not figure out, optimized our WooCommerce product feed, and got us into Google Shopping free listings. Traffic and conversions are through the roof.',
      author: 'Mike Anderson',
      role: 'E-commerce Director, Electronics Retailer',
    },
    {
      quote:
        'Finally an SEO team that understands faceted navigation, product schema, and e-commerce platform constraints. Revenue grew 260% in Q4 alone thanks to their seasonal SEO strategy.',
      author: 'Jennifer Lee',
      role: 'VP Marketing, Home Goods Store',
    },
  ],
}

const faqData = [
  {
    question: 'How is e-commerce SEO different from regular SEO?',
    answer:
      'E-commerce SEO deals with unique challenges that standard SEO does not address: massive product catalogs creating crawl budget issues, duplicate content from product variations and faceted navigation filters, thin product pages competing with Amazon and major retailers, complex technical requirements like Product schema and review schema implementation, platform-specific constraints from Shopify, WooCommerce, or Magento, and the need to balance SEO optimization with conversion rate optimization. Every decision must serve two goals simultaneously: improving search visibility and maximizing revenue per visitor.',
  },
  {
    question: 'How much does e-commerce SEO cost?',
    answer:
      'E-commerce SEO pricing typically ranges from $2,500/month for small stores (under 1,000 products) to $5,500/month for mid-size catalogs (1,000-5,000 products) and custom pricing for enterprise catalogs with 10,000+ products. The average CPC for e-commerce SEO keywords ranges from $8-14, meaning organic rankings deliver substantial ROI compared to paid advertising. Our clients typically see 5-10x return on their e-commerce SEO investment within the first 12 months.',
  },
  {
    question: 'Which e-commerce platform is best for SEO: Shopify, WooCommerce, or Magento?',
    answer:
      'Each platform has SEO strengths and limitations. Shopify SEO offers simplicity and fast load times but has URL structure constraints (forced /collections/ paths) and limited server-side customization. WooCommerce SEO provides maximum flexibility through WordPress but requires careful database optimization for large catalogs. Magento SEO handles enterprise-scale catalogs best but demands significant technical expertise. We optimize all three platforms and recommend based on your catalog size, technical resources, and growth plans.',
  },
  {
    question: 'What is product page SEO and how do you optimize product pages?',
    answer:
      'Product page SEO involves optimizing every element of your product pages for both search engines and conversions. This includes writing unique product descriptions targeting specific product search queries and long-tail keywords, optimizing title tags and meta descriptions for click-through rate, adding descriptive image alt text for image search visibility, implementing Product schema with price, availability, and review data for rich snippets, building internal links from category and related product pages, and ensuring fast Core Web Vitals performance. Each optimized product page becomes a standalone ranking asset.',
  },
  {
    question: 'How do you handle duplicate content from product variations?',
    answer:
      'We use a multi-layered strategy: canonical tags pointing to the primary product version, URL parameter handling configuration in Google Search Console, strategic noindex for filter combinations that lack unique search value, consolidated product pages with variant selectors rather than separate URLs for each color or size, and optimized internal linking to signal priority versions to search engines. For platforms like Shopify where variants create separate URLs, we implement canonical consolidation at the theme level.',
  },
  {
    question: 'What is breadcrumb schema and why does my e-commerce site need it?',
    answer:
      'Breadcrumb schema (BreadcrumbList structured data) tells search engines about your site hierarchy and navigation path. For e-commerce sites, this creates enhanced breadcrumb trails in search results showing paths like "Home > Electronics > Headphones > Wireless Headphones" which improves click-through rates by 10-15% and helps Google understand your category structure. It also aids internal link equity distribution and helps users navigate large product catalogs more efficiently.',
  },
  {
    question: 'How does Google Shopping work with e-commerce SEO?',
    answer:
      'Google Shopping and organic e-commerce SEO are complementary strategies. Through Google Merchant Center, your products can appear in Google Shopping free listings, the Shopping tab, and image search results. We optimize your product feed with accurate titles, descriptions, images, and pricing data that align with your on-page SEO strategy. Products with strong organic rankings and well-optimized Merchant Center feeds receive maximum visibility across multiple Google surfaces.',
  },
  {
    question: 'What are Core Web Vitals and why do they matter for e-commerce?',
    answer:
      'Core Web Vitals measure page experience through three metrics: LCP (Largest Contentful Paint, typically your main product image), CLS (Cumulative Layout Shift, often caused by dynamic pricing or late-loading review widgets), and INP (Interaction to Next Paint, impacted by add-to-cart button responsiveness). Google uses these as ranking signals. E-commerce sites face unique challenges because product images are large, JavaScript-heavy features are common, and third-party scripts (reviews, chat, analytics) degrade performance. We optimize product images, implement lazy loading, and minimize render-blocking resources.',
  },
  {
    question: 'How do you handle out-of-stock and seasonal product pages for SEO?',
    answer:
      'Out-of-stock pages and seasonal SEO require careful handling to preserve ranking equity. For temporarily out-of-stock products, we keep the page live with a "notify me" option and maintain all SEO elements. For permanently discontinued products, we implement 301 redirects to the most relevant alternative. For seasonal products (holiday decor, summer furniture), we implement a seasonal SEO calendar that pre-optimizes pages 90 days before peak season and maintains URLs year-round to preserve accumulated rankings and backlinks.',
  },
  {
    question: 'How long does e-commerce SEO take to show results?',
    answer:
      'Initial improvements from technical fixes and quick-win product optimizations typically appear within 30-60 days. Meaningful revenue growth takes 6-12 months as we optimize the full catalog, build domain authority through link building, and compound ranking improvements across thousands of product and category pages. E-commerce SEO is a compounding investment: each month of optimization builds on previous gains, and once ranking momentum establishes, results accelerate. Our clients average 320% organic revenue growth within 10-12 months.',
  },
]

const relatedServicesData = {
  subheading: 'Related Services',
  heading: 'Complement your e-commerce SEO',
  services: [
    { title: 'SEO Audit', description: 'Comprehensive technical SEO audit for e-commerce sites', href: '/services/seo-audit' },
    { title: 'Link Building', description: 'Build authority backlinks to product and category pages', href: '/services/link-building' },
    { title: 'Enterprise SEO', description: 'Scale SEO across enterprise e-commerce catalogs', href: '/services/enterprise-seo' },
    { title: 'Content Marketing', description: 'Buying guides and comparison content for organic traffic', href: '/services/content' },
    { title: 'Local SEO', description: 'Local e-commerce SEO for stores with physical locations', href: '/services/local-seo' },
    { title: 'Web Development', description: 'Custom e-commerce development and performance optimization', href: '/services/web' },
  ],
}

const ctaData = {
  subheading: 'Ready to Grow E-commerce Revenue?',
  heading: 'Let&apos;s drive sustainable organic growth for your online store',
  lead: 'Get a free e-commerce SEO audit. Discover how to optimize product pages, fix Core Web Vitals issues, implement Product schema, and drive sustainable revenue growth through organic search.',
  ctaPrimaryText: 'Get E-commerce SEO Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View All Pricing',
  ctaSecondaryHref: '/pricing',
}

/* -------------------------------------------------------------------------- */
/*  Page Component                                                             */
/* -------------------------------------------------------------------------- */

export default function EcommerceSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'E-commerce SEO Services',
          description:
            'Professional e-commerce SEO services including product page optimization, Shopify SEO, WooCommerce SEO, Magento SEO, Google Shopping integration, and technical e-commerce SEO.',
          provider: {
            '@type': 'Organization',
            name: 'The Project SEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'E-commerce SEO Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Product Page SEO Optimization' },
              },
              {
                '@type': 'Offer',
                itemOffered: { '@type': 'Service', name: 'Platform-Specific E-commerce SEO' },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Google Shopping & Merchant Center Optimization',
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
          mainEntity: faqData.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
          })),
        }}
      />

      <ServiceHero {...heroData} />

      <StatsBar stats={statsData} />

      <FeatureCardsSection {...challengesData} />

      <ServicesGrid {...servicesData} />

      <TextContentSection {...toolsData} />

      <ProcessSection {...processData} />

      <CaseStudyDark {...caseStudyData} />

      <PricingSection {...pricingData} />

      <div className="bg-cream py-24">
        <Container>
          <div className="text-center mb-16">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-2">
              {testimonialsData.subheading}
            </p>
            <h2 className="font-display text-[clamp(28px,4vw,40px)] font-light leading-[1.1] tracking-tight text-ink">
              {testimonialsData.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-px bg-border-strong md:grid-cols-3">
            {testimonialsData.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-paper p-8">
                <p className="text-sm leading-relaxed text-slate mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="border-t border-border pt-4">
                  <div className="font-heading text-sm font-semibold text-ink">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-ash mt-1">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <Container className="py-24 bg-paper">
        <FAQAccordion title="E-commerce SEO questions answered" items={faqData} />
      </Container>

      <RelatedServicesSection {...relatedServicesData} />

      <CTASection {...ctaData} />

      <Footer />
    </main>
  )
}
