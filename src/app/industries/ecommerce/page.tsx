import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { IndustryProcessVisual } from '@/components/industry-process-visual'
import { CTAFormSection } from '@/components/service-page-sections'
import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  CogIcon,
  LinkIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-commerce SEO Services | Online Store Optimization | TheProjectSEO',
  description:
    'Specialized SEO services for e-commerce businesses. Increase online sales with product optimization, category SEO, and conversion-focused strategies.',
  alternates: {
    canonical: '/industries/ecommerce',
  },
  openGraph: {
    title: 'E-commerce SEO Services | Online Store Optimization',
    description:
      'Specialized SEO services for e-commerce businesses. Increase online sales with product optimization, category SEO, and conversion-focused strategies.',
    url: '/industries/ecommerce',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce SEO Services | Online Store Optimization',
    description:
      'Specialized SEO services for e-commerce businesses. Increase online sales with product optimization, category SEO, and conversion-focused strategies.',
  },
}

const challenges = [
  {
    challenge: 'Product Page SEO Complexity',
    description:
      'E-commerce stores often have thousands of product pages competing for visibility. Each page needs unique, optimized content, structured data, and compelling meta descriptions, yet most platforms generate duplicate or thin content by default, leaving massive ranking potential on the table.',
    solution:
      'We implement scalable product page optimization frameworks that generate unique, keyword-rich content at scale while deploying proper schema.org Product markup in JSON-LD format to win rich snippets and shopping carousels.',
    icon: ShoppingCartIcon,
  },
  {
    challenge: 'Faceted Navigation & Crawl Budget',
    description:
      'Faceted navigation creates exponential URL combinations from filters like size, color, and price. Without proper handling, search engines waste crawl budget on duplicate pages, dilute link equity, and index thousands of low-value filter URLs that cannibalize your core category pages.',
    solution:
      'We use Google Search Console and Screaming Frog to identify crawl budget waste, then architect a precise faceted navigation strategy using canonical tags, robots directives, and internal linking patterns that preserve crawl budget while keeping high-value filter combinations indexable.',
    icon: MagnifyingGlassIcon,
  },
  {
    challenge: 'Product Catalog Scale',
    description:
      'Managing SEO across catalogs with hundreds or thousands of SKUs is an operational challenge. Products come and go seasonally, descriptions vary in quality, and maintaining consistent optimization across a constantly changing inventory demands automated workflows and governance.',
    solution:
      'We build templated optimization systems and automated audit pipelines that scale with your catalog, ensuring every new product launches with optimized titles, descriptions, schema, and internal links.',
    icon: CogIcon,
  },
  {
    challenge: 'Seasonal & Trend-Driven SEO',
    description:
      'E-commerce traffic is heavily influenced by seasons, holidays, and trends. Missing the optimization window for Black Friday, back-to-school, or a viral product trend means losing revenue you can never recover. Planning must happen months in advance.',
    solution:
      'We develop a seasonal SEO calendar aligned to your product lines, pre-building landing pages and content clusters months ahead of peak demand so you capture traffic at the exact moment shoppers are ready to buy.',
    icon: LinkIcon,
  },
]

const services = [
  {
    name: 'Product Page SEO',
    description:
      'Optimize individual product pages for maximum visibility and conversions. We craft unique, keyword-rich product content and deploy structured data that wins rich results in search.',
    features: [
      'Product title and meta description optimization at scale',
      'Product schema markup for rich snippets and shopping carousels',
      'Image optimization, alt text, and visual search readiness',
      'Product review and UGC optimization for E-E-A-T and social proof signals',
    ],
  },
  {
    name: 'Category Page Optimization',
    description:
      'Structure and optimize category pages to capture high-value commercial keywords. We turn your category architecture into a powerful ranking engine.',
    features: [
      'Category hierarchy and taxonomy optimization',
      'Faceted navigation SEO and crawl budget management',
      'Category description content and keyword targeting using Ahrefs and SEMrush',
      'Breadcrumb and internal linking architecture',
    ],
  },
  {
    name: 'Technical E-commerce SEO',
    description:
      'Enterprise-grade technical SEO for online stores. We solve the platform-specific challenges of Shopify, Magento, WooCommerce, and headless commerce architectures.',
    features: [
      'Site speed and Core Web Vitals for large catalogs',
      'Crawl budget optimization and index management',
      'Structured data for products, reviews, and offers',
      'International SEO and hreflang for multi-region stores with Google Analytics 4 revenue tracking',
    ],
  },
  {
    name: 'E-commerce Link Building',
    description:
      'Strategic link acquisition from shopping publications, industry blogs, and product review sites. We build authority through genuine editorial relationships.',
    features: [
      'Product-led digital PR and review outreach',
      'Guest posting on e-commerce and retail publications',
      'Supplier and manufacturer link building partnerships using Ahrefs for keyword gap analysis',
      'Seasonal campaign link acquisition for peak periods',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'E-commerce SEO Audit',
    description:
      'We conduct a comprehensive audit of your online store, analyzing product page optimization, category architecture, technical infrastructure, and competitive landscape. This includes a deep-dive into crawl efficiency, index bloat, structured data coverage, and conversion funnel performance to identify quick wins and long-term growth opportunities.',
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description:
      'Based on audit findings, we build a tailored e-commerce SEO strategy aligned with your revenue targets and seasonal calendar. This includes a prioritized keyword roadmap by product category, content plan for category and buying guide pages, technical optimization timeline, and link building strategy with clear KPIs.',
  },
  {
    number: '03',
    title: 'Optimization & Content',
    description:
      'We execute the strategy with product page optimization at scale, category content creation, and technical improvements. Every optimization is designed to increase visibility and conversion rates, from schema markup deployment to internal linking restructuring and seasonal landing page creation.',
  },
  {
    number: '04',
    title: 'Scale & Iterate',
    description:
      'Using data-driven insights, we continuously refine the strategy. We scale what drives revenue, prune what doesn&apos;t, and adapt to algorithm changes and market trends. Monthly reporting tracks organic revenue, product rankings, conversion rates, and average order value from SEO traffic.',
  },
]

const caseStudy = {
  client: 'Multi-brand Fashion Retailer',
  industry: 'Online Fashion & Apparel',
  challenge:
    'A mid-market online fashion retailer with over 8,000 SKUs was struggling to compete against major marketplaces and fast-fashion giants. Their Shopify store had severe technical issues: thousands of duplicate pages from faceted navigation, thin product descriptions copied from manufacturers, and no structured data implementation. Organic traffic had stagnated at 25,000 monthly sessions, with organic revenue accounting for less than 15% of total sales. Their paid acquisition costs were climbing quarterly, and leadership needed a sustainable channel to reduce dependence on Facebook and Google Ads.',
  solution:
    'We rebuilt their technical SEO foundation by implementing a custom faceted navigation strategy that eliminated 12,000 duplicate URLs, deployed product and review schema across the entire catalog, and restructured the category taxonomy around high-intent search terms. Our content strategy focused on commercial intent: we created 60 optimized category pages targeting "buy" and "shop" keywords, 25 seasonal buying guides, and rewrote product descriptions for the top 500 revenue-driving SKUs. We also launched a digital PR campaign around seasonal fashion trends that earned links from 40+ lifestyle and fashion publications.',
  results: [
    { metric: 'Organic Revenue', improvement: '+340%', timeframe: '12 months' },
    { metric: 'Product Rankings in Top 10', improvement: '2,500+', timeframe: 'From 180 to 2,500+' },
    { metric: 'Conversion Rate', improvement: '+85%', timeframe: 'Organic visitors' },
    { metric: 'Average Order Value', improvement: '+45%', timeframe: 'From SEO traffic' },
  ],
}

const keywordCategories = [
  {
    category: 'Core E-commerce',
    keywords: ['buy running shoes online', 'best price electronics', 'shop organic skincare', 'online furniture store'],
  },
  {
    category: 'Product Keywords',
    keywords: ['Nike Air Max 90 white', 'wireless noise cancelling headphones', 'organic cotton bed sheets', 'standing desk converter'],
  },
  {
    category: 'Category Keywords',
    keywords: ['women&apos;s winter coats', 'men&apos;s leather wallets', 'kids educational toys', 'home office furniture'],
  },
  {
    category: 'Technical E-commerce',
    keywords: ['Shopify SEO optimization', 'e-commerce site speed', 'product schema markup', 'faceted navigation SEO'],
  },
  {
    category: 'Seasonal Keywords',
    keywords: ['Black Friday deals 2025', 'Christmas gift ideas', 'back to school supplies', 'summer sale clothing'],
  },
  {
    category: 'Long-tail E-commerce',
    keywords: ['best running shoes for flat feet under $100', 'organic baby clothes free shipping', 'handmade leather bag for women', 'eco-friendly kitchen products'],
  },
]

const faqItems = [
  {
    question: 'How long does it take to rank product pages?',
    answer:
      'Product page rankings typically begin improving within 3-4 months, with significant gains by month 6-8. The timeline depends on your domain authority, competition level, and the current state of your technical SEO. We prioritize quick wins early, such as optimizing your top-selling products and fixing technical issues, while building toward long-term category dominance. Seasonal pages may see faster results if launched well ahead of peak demand.',
  },
  {
    question: 'How do you handle thousands of products?',
    answer:
      'We build scalable optimization frameworks rather than optimizing each product manually. This includes templated title and meta description structures, automated schema markup deployment, and prioritization matrices that focus deep optimization on your highest-revenue and highest-potential products. We also implement automated monitoring to catch new product launches, out-of-stock issues, and content quality problems across your entire catalog.',
  },
  {
    question: 'Which e-commerce platforms do you work with?',
    answer:
      'We work with all major e-commerce platforms including Shopify, Shopify Plus, Magento, WooCommerce, BigCommerce, and headless commerce architectures using frameworks like Next.js or Hydrogen. Each platform has unique SEO challenges and opportunities, and our team has deep technical expertise across all of them. We also work with custom-built stores and enterprise platforms.',
  },
  {
    question: 'How does e-commerce SEO differ from regular SEO?',
    answer:
      'E-commerce SEO requires specialized expertise in product schema markup, faceted navigation management, crawl budget optimization for large catalogs, and conversion-focused content strategies. Unlike informational SEO, we optimize for transactional intent and buying keywords, manage seasonal fluctuations, and track success through revenue metrics rather than just traffic. The technical complexity of managing thousands of dynamic product URLs also demands platform-specific knowledge.',
  },
  {
    question: 'Can you help with international e-commerce SEO?',
    answer:
      'Absolutely. We have extensive experience with multi-region and multi-language e-commerce stores. This includes hreflang implementation, international keyword research, localized content strategy, and market-specific optimization. We help you decide between ccTLDs, subdirectories, and subdomains based on your business model, and ensure proper geo-targeting across all product and category pages.',
  },
  {
    question: 'How do you measure e-commerce SEO success?',
    answer:
      'We go beyond vanity metrics like raw traffic. Our e-commerce SEO reporting tracks organic revenue, product page rankings, conversion rates, average order value from organic traffic, and return on SEO investment. We integrate with your analytics and e-commerce platform to provide full revenue attribution, so you can see exactly which SEO initiatives are driving sales and how organic compares to paid channels.',
  },
  {
    question: 'How do I do keyword research for an e-commerce store?',
    answer:
      'E-commerce keyword research focuses on product-specific, transactional keywords with commercial intent. Use Google Keyword Planner, Ahrefs, and SEMrush to identify keywords like "buy [product]", "[product] online", and "best [product] for [use case]". Analyze search volume, keyword difficulty, and competitor rankings. Long-tail keywords with lower competition often convert better than broad terms.',
  },
  {
    question: 'What are backlinks and why do they matter for e-commerce SEO?',
    answer:
      'Backlinks are links from other websites to your store. They signal authority to Google and drive referral traffic. For e-commerce, backlinks from product review sites, shopping guides, and industry blogs improve domain authority and product page rankings. Quality matters—one link from Wirecutter or Consumer Reports is worth hundreds of directory links. Use Ahrefs or Moz to analyze your backlink profile.',
  },
  {
    question: 'How important are Core Web Vitals for online stores?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) directly impact e-commerce rankings and conversion rates. Slow product pages lead to cart abandonment—every 100ms delay costs 1% in conversions. Google PageSpeed Insights and GTmetrix help identify issues. Optimize product images, implement lazy loading, use a CDN, and minimize JavaScript to achieve "Good" Core Web Vitals scores.',
  },
  {
    question: 'Should e-commerce stores use local SEO?',
    answer:
      'If you have physical retail locations or offer local pickup/delivery, local SEO is essential. Optimize your Google Business Profile, build local citations with consistent NAP (Name, Address, Phone), and create location-specific landing pages. Local SEO helps you appear in "near me" searches and Google\'s local pack, driving foot traffic and online orders from nearby customers.',
  },
  {
    question: 'How do I track e-commerce SEO performance?',
    answer:
      'Use Google Analytics 4 with enhanced e-commerce tracking to monitor organic traffic, product revenue, and conversion rates by keyword. Google Search Console shows product page rankings and click-through rates. Tools like Ahrefs and SEMrush track keyword positions and competitor performance. Set up custom GA4 events for add-to-cart, checkout initiated, and purchase completion from organic search.',
  },
]

const relatedIndustries = [
  { name: 'SaaS', href: '/industries/saas' },
  { name: 'Fashion', href: '/industries/fashion' },
  { name: 'Food & Beverage', href: '/industries/food' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
  { name: 'Healthcare', href: '/industries/healthcare' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Header / Hero                                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            E-commerce
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            SEO that drives{' '}
            <em className="text-accent italic">e-commerce revenue</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Turn your online store into an organic revenue engine. We help e-commerce brands rank for high-intent product and category keywords that convert browsers into buyers.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get E-commerce SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 2: Industry Statistics Bar                                         */
/* -------------------------------------------------------------------------- */

function StatsBar() {
  const stats = [
    { value: '$6.3T', label: 'Global e-commerce market' },
    { value: '93%', label: 'Online experiences start with search' },
    { value: '44%', label: 'Shoppers start on search engines' },
    { value: '400%', label: 'Average ROI from e-commerce SEO' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: Industry SEO Challenges                                         */
/* -------------------------------------------------------------------------- */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>E-commerce SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why online stores need specialized SEO.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <item.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">
                  {item.challenge}
                </h3>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-4">{item.description}</p>

              <div className="border-l-4 border-border-emphasis pl-4">
                <p className="text-sm font-medium text-ink mb-1">Our Solution:</p>
                <p className="text-sm text-stone">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 4: Services Tailored for Industry                                  */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>E-commerce SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for online store growth.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">
                {service.name}
              </h3>
              <p className="text-sm leading-relaxed text-slate mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-stone">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 5: Process Steps                                                   */
/* -------------------------------------------------------------------------- */

// Section 05: Process

/* -------------------------------------------------------------------------- */
/*  Section 5.5: Advanced E-commerce SEO Tactics                               */
/* -------------------------------------------------------------------------- */

function AdvancedSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Advanced Optimization</Subheading>
          <Heading as="h2" className="mt-2">
            Technical SEO for e-commerce at scale
          </Heading>
          <Lead className="mt-6">
            E-commerce sites require specialized technical SEO. We optimize Core Web Vitals for product-heavy pages, implement comprehensive schema markup, build high-quality backlinks, and set up advanced tracking to measure every conversion.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Page Speed</h3>
            <p className="text-slate mb-4">
              Product pages with high-resolution images and interactive elements must load fast. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights, GTmetrix, and WebPageTest to ensure mobile-first performance that converts.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product image optimization and WebP conversion</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Lazy loading for below-the-fold content</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">CDN implementation and aggressive caching</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">E-commerce Schema Markup</h3>
            <p className="text-slate mb-4">
              Structured data from schema.org is critical for e-commerce. We implement JSON-LD Product schema with pricing, availability, reviews, and ratings. Proper markup enables rich snippets in Google, product cards in ChatGPT and Perplexity, and merchant listings in Google Shopping.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product schema with offers and reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">BreadcrumbList for navigation hierarchy</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Organization and LocalBusiness markup</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building for E-commerce</h3>
            <p className="text-slate mb-4">
              Quality backlinks from shopping guides, product review sites, and industry blogs drive domain authority and referral traffic. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute sustainable white-hat link acquisition campaigns.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product review and comparison site outreach</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Shopping guide and gift guide placements</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR for product launches</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">E-commerce Analytics & Tracking</h3>
            <p className="text-slate mb-4">
              We set up Google Analytics 4 with enhanced e-commerce tracking, Google Search Console for keyword monitoring, and custom dashboards that show revenue attribution by organic channel. Track product performance, cart abandonment from search, and customer lifetime value from SEO.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">GA4 enhanced e-commerce implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console performance by product category</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Revenue attribution and ROI reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Case Study + Results (Dark Section)                             */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>E-commerce Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a fashion retailer achieve breakthrough organic revenue.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                {caseStudy.challenge}
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Our Solution
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {caseStudy.solution}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Results Achieved
              </h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">
                      {result.improvement}
                    </div>
                    <div className="text-sm text-white/80">{result.metric}</div>
                    <div className="text-xs text-white/40">{result.timeframe}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 7: Industry Keyword Examples                                       */
/* -------------------------------------------------------------------------- */

function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>E-commerce Keyword Examples</Subheading>
          <Heading as="h2" className="mt-2">
            The types of keywords we target for online stores.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keywordCategories.map((group, index) => (
            <div key={index} className="text-center">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.keywords.map((keyword, keywordIndex) => (
                  <li
                    key={keywordIndex}
                    className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none"
                  >
                    {keyword}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: Client Testimonial                                              */
/* -------------------------------------------------------------------------- */

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-8">
            Client Testimonial
          </p>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink">
            &ldquo;Working with Aditya in our journey to rank our website has been a great pleasure.
            Aditya possesses an exceptional skill set and a deep understanding of SEO strategies
            and techniques. He has an uncanny ability to analyze complex data and identify critical
            opportunities to improve organic search rankings and drive targeted website traffic.
            I wholeheartedly recommend Aditya for any SEO-related position or project.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Caleb Hoon</p>
            <p className="text-sm text-slate mt-1">Head of Community and Operations, OFFEO</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: Pricing Context                                                 */
/* -------------------------------------------------------------------------- */

function PricingContextSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Subheading>E-commerce SEO Investment</Subheading>
            <Heading as="h2" className="mt-2">
              Built for e-commerce revenue growth.
            </Heading>
          </div>

          <p className="text-sm leading-relaxed text-slate text-center mb-8">
            Our e-commerce SEO engagements are structured to deliver measurable return on investment
            tied directly to your online revenue. We price based on catalog size, competitive
            landscape, and growth targets, ensuring the investment drives profitable organic growth.
          </p>

          <div className="border border-border-strong rounded-none p-8 mb-8">
            <p className="font-heading text-lg font-semibold text-ink mb-4">
              Investment starts at $1,800/month
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Product and category page optimization, keyword research, and monthly content creation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Technical SEO audits, Core Web Vitals optimization, and structured data implementation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Monthly reporting with organic revenue tracking, product rankings, and conversion analysis
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button href="/pricing">View Full Pricing Details</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Testimonial Quote & FAQ                                        */
/* -------------------------------------------------------------------------- */

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="Aditya went above and beyond when he helped us with our SEO strategy. Everything from keyword research to on-page optimization was extremely helpful. He was proactive and has the technical SEO knowledge that any business looking to grow their online presence would benefit from."
        author="Wendy Chan"
        role="Co-Founder &amp; CEO"
        company="PackMojo"
      />
      <FAQDarkSection title="E-commerce SEO frequently asked questions" items={faqItems} />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 11: Related Industries                                             */
/* -------------------------------------------------------------------------- */

function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO for other industries.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
          {relatedIndustries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="bg-paper p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-lg font-semibold text-ink">{industry.name}</h3>
              <p className="mt-2 text-sm text-accent font-medium">View Industry SEO &rarr;</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 12: Industry-Specific CTA                                          */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function EcommerceSEO() {
  return (
    <main className="overflow-hidden">
      {/* Service Schema with Entity Enrichment */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'E-commerce SEO Services',
          description:
            'Specialized SEO services for e-commerce businesses. Increase online sales with product optimization, category SEO, and conversion-focused strategies.',
          url: 'https://theprojectseo.com/industries/ecommerce',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, E-commerce, Backlink, Google PageSpeed Tools, Computing, Product optimization, Category SEO, Conversion optimization',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'E-commerce',
              sameAs: 'https://www.wikidata.org/wiki/Q484847',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            },
          ],
        }}
      />

      {/* FAQ Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />

      {/* Breadcrumb Schema */}
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://theprojectseo.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Industries',
              item: 'https://theprojectseo.com/industries',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'E-commerce SEO',
              item: 'https://theprojectseo.com/industries/ecommerce',
            },
          ],
        }}
      />

      <Header />
      <StatsBar />
      <ChallengesSection />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we drive e-commerce SEO results"
        steps={processSteps}
        visual={<IndustryProcessVisual type="ecommerce" />}
        visualBg="ink"
      />
      <AdvancedSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingContextSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection
        subheading="Ready to Grow Your Online Revenue?"
        heading="Let's build your e-commerce SEO growth engine."
        lead="Partner with SEO experts who understand e-commerce metrics, product discovery, and the online shopping journey. We'll help you turn organic search into your most profitable acquisition channel."
        submitText="Get E-commerce SEO Strategy"
      />
      <Footer />
    </main>
  )
}
