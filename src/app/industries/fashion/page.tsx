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
  SparklesIcon,
  SwatchIcon,
  CameraIcon,
  ShoppingBagIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Fashion SEO Services | Apparel & Fashion Brand Optimization | TheProjectSEO',
  description:
    'Specialized SEO services for fashion and apparel brands. Increase online visibility with product optimization, visual search strategy, and trend-driven content.',
  alternates: { canonical: '/industries/fashion' },
  openGraph: {
    title: 'Fashion SEO Services | Apparel & Fashion Brand Optimization',
    description:
      'Specialized SEO services for fashion and apparel brands. Increase online visibility with product optimization, visual search strategy, and trend-driven content.',
    url: '/industries/fashion',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion SEO Services | Apparel & Fashion Brand Optimization',
    description:
      'Specialized SEO services for fashion and apparel brands. Increase online visibility with product optimization, visual search strategy, and trend-driven content.',
  },
}

const challenges = [
  {
    challenge: 'Fast-Moving Trends & Seasonality',
    description:
      'Fashion cycles move at breakneck speed. Collections rotate every season, trend-driven search volume spikes and drops within weeks, and evergreen keyword strategies alone can&apos;t keep pace. Brands that fail to adapt their SEO to seasonal calendars and micro-trends miss critical windows of buyer intent.',
    solution:
      'We build agile content calendars aligned to fashion weeks, seasonal drops, and real-time trend data, ensuring your pages are indexed and ranking before demand peaks.',
    icon: SparklesIcon,
  },
  {
    challenge: 'Visual-First Shopping Experience',
    description:
      'Fashion buyers make decisions with their eyes. Yet search engines still rely on text to understand and rank product imagery. Bridging the gap between a visually compelling storefront and a technically optimized one requires specialized expertise most agencies lack.',
    solution:
      'We optimize image alt text, implement visual search schema, and structure your media assets so search engines surface your products in image packs, Google Lens, and shopping carousels.',
    icon: CameraIcon,
  },
  {
    challenge: 'Size & Color Variant SEO',
    description:
      'A single style in five colors and eight sizes can generate dozens of near-duplicate URLs. Without deliberate canonicalization and variant-handling strategy, crawl budget is wasted, thin content penalties become a risk, and the wrong variant pages end up ranking.',
    solution:
      'We implement structured variant architecture with canonical tags, faceted navigation controls, and product schema that consolidates ranking signals while keeping every option discoverable.',
    icon: SwatchIcon,
  },
  {
    challenge: 'D2C vs Marketplace Competition',
    description:
      'Fashion brands compete against their own wholesale partners and marketplace listings on Amazon, Nordstrom, and ASOS. These platforms carry enormous domain authority, making it difficult for a brand&apos;s own site to claim the top organic positions for its own product names.',
    solution:
      'We strengthen your D2C site&apos;s topical authority through branded content hubs, editorial storytelling, and technical optimizations that help your domain outrank marketplace listings for branded and category terms.',
    icon: ShoppingBagIcon,
  },
]

const services = [
  {
    name: 'Fashion Keyword Research',
    description:
      'In-depth keyword research built around the fashion buyer journey, from trend discovery and style inspiration to product comparison and purchase.',
    features: [
      'Seasonal and trend-cycle keyword mapping',
      'Category, style, and fabric-level keyword clusters',
      'Competitor keyword gap analysis across D2C and marketplace',
      'Search volume forecasting for upcoming collections',
    ],
  },
  {
    name: 'Product & Collection Page SEO',
    description:
      'Optimize every product listing and collection page so search engines and shoppers find exactly what they&apos;re looking for.',
    features: [
      'Product title and meta description optimization',
      'Collection page hierarchy and internal linking',
      'Variant canonicalization and structured data markup',
      'Breadcrumb and faceted navigation SEO',
    ],
  },
  {
    name: 'Visual Search Optimization',
    description:
      'Make your product imagery work as hard as your copy. We optimize for Google Images, Lens, and Pinterest visual search to capture discovery-driven traffic.',
    features: [
      'Image alt text and file naming conventions',
      'Product image schema and Open Graph markup',
      'Google Lens and Pinterest visual search optimization',
      'Lookbook and editorial image SEO',
    ],
  },
  {
    name: 'Fashion Content & Lookbook Strategy',
    description:
      'Editorial content that builds brand authority, captures top-of-funnel search traffic, and drives shoppers deeper into your catalog.',
    features: [
      'Trend reports and seasonal style guides',
      'Lookbook and editorial landing page optimization',
      'Fashion blog content strategy and production',
      'Influencer collaboration content amplification',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Fashion SEO Audit',
    description:
      'We conduct a full audit of your fashion site, analyzing product page architecture, collection taxonomy, image optimization, variant handling, and competitive positioning. This includes a crawl analysis to identify duplicate content, thin pages, and missed schema opportunities across your entire catalog.',
  },
  {
    number: '02',
    title: 'Seasonal Strategy & Roadmap',
    description:
      'We build a fashion-specific SEO strategy aligned with your collection calendar, seasonal campaigns, and trend cycles. The roadmap includes a prioritized keyword plan, content calendar tied to fashion weeks and shopping seasons, and technical fixes ranked by revenue impact.',
  },
  {
    number: '03',
    title: 'Content & Technical Execution',
    description:
      'We execute across product pages, collection pages, editorial content, and technical infrastructure. Every optimization is designed to drive both rankings and conversions, from enriched product descriptions to lookbook landing pages that capture aspirational search queries.',
  },
  {
    number: '04',
    title: 'Measure, Refine & Scale',
    description:
      'Using revenue attribution and conversion data, we continuously refine the strategy. We scale high-performing categories, refresh seasonal content ahead of trend cycles, and adapt to algorithm updates. Monthly reporting tracks organic revenue, product visibility, and new customer acquisition from search.',
  },
]

const caseStudy = {
  client: 'D2C Fashion Brand',
  industry: 'Contemporary Womenswear',
  challenge:
    'A direct-to-consumer fashion brand with a strong social media presence was struggling to convert that brand awareness into organic search traffic. Their product pages lacked optimization, collection pages were thin on content, and marketplace listings consistently outranked their own site for branded terms. Organic revenue accounted for less than 12% of total e-commerce sales, and the brand was over-reliant on paid social for customer acquisition.',
  solution:
    'We restructured the entire product catalog with SEO-driven taxonomy, implemented comprehensive product and collection page optimization, and built a content hub featuring seasonal style guides, trend reports, and lookbook editorials. Technical fixes included variant canonicalization, image optimization across 2,000+ SKUs, and structured data for every product. We also executed a targeted link building campaign focused on fashion publications and style blogs.',
  results: [
    { metric: 'Organic Revenue', improvement: '+380%', timeframe: '12 months' },
    { metric: 'Product Keywords in Top 10', improvement: '400+', timeframe: 'From 58 to 458' },
    { metric: 'New Customer Acquisition', improvement: '+240%', timeframe: 'From organic search' },
    { metric: 'Average Order Value (Organic)', improvement: '+160%', timeframe: 'Vs. paid social traffic' },
  ],
}

const keywordCategories = [
  {
    category: 'Product Categories',
    keywords: ["women's linen blazer", "men's slim fit jeans", 'sustainable cotton t-shirt', 'silk midi dress'],
  },
  {
    category: 'Style & Trend',
    keywords: ['quiet luxury outfit ideas', 'capsule wardrobe essentials', 'coastal grandmother style', 'old money aesthetic clothing'],
  },
  {
    category: 'Size & Fit',
    keywords: ['petite wide-leg trousers', 'plus size evening dresses', "tall women's workwear", 'oversized blazer styling'],
  },
  {
    category: 'Brand',
    keywords: ['[brand] new arrivals', '[brand] sale dresses', '[brand] vs [competitor]', '[brand] size guide'],
  },
  {
    category: 'Seasonal',
    keywords: ['spring fashion trends 2025', 'winter coat guide', 'summer wedding guest dresses', 'fall layering outfits'],
  },
  {
    category: 'Sustainable Fashion',
    keywords: ['ethical fashion brands', 'organic cotton clothing', 'recycled fabric activewear', 'slow fashion essentials'],
  },
]

const faqItems = [
  {
    question: 'How long does it take to see results from fashion SEO?',
    answer:
      'Most fashion brands begin seeing measurable improvements in organic traffic and product visibility within 3-4 months, with significant revenue gains by month 6-8. Fashion SEO has seasonal dynamics, so we prioritize optimizing for upcoming high-demand periods first. Quick wins like fixing product schema and optimizing top-selling collection pages often deliver early results while the broader strategy compounds over time.',
  },
  {
    question: 'How do you handle seasonal content and trend-driven keywords?',
    answer:
      'We build a rolling content calendar aligned to your collection drops, fashion weeks, and seasonal shopping peaks. Trend-driven content is created and optimized 6-8 weeks before anticipated demand spikes, giving pages time to index and gain authority before search volume peaks. We also maintain and refresh evergreen style guides that capture year-round search traffic.',
  },
  {
    question: 'Can you help our brand outrank marketplace listings for our own products?',
    answer:
      'Yes, this is a core focus for D2C fashion brands. We strengthen your domain authority through editorial content, fashion publication backlinks, and technical optimizations that signal to Google your site is the authoritative source for your brand. We also optimize branded search terms, implement comprehensive product schema, and build content moats around your collections that marketplaces can&apos;t replicate.',
  },
  {
    question: 'How do you optimize product pages with many size and color variants?',
    answer:
      'We implement a structured variant architecture using canonical tags to consolidate ranking signals, prevent duplicate content issues, and ensure crawl budget is spent efficiently. Each variant combination is handled through parameterized URLs with proper canonicalization, and we deploy product schema that presents all available options to search engines without creating thin content.',
  },
  {
    question: 'Do you work with both luxury and fast fashion brands?',
    answer:
      'We work with fashion brands across all segments, from luxury and contemporary to fast fashion and emerging D2C labels. Our strategies adapt to each segment&apos;s unique search landscape. Luxury brands require different keyword targeting, content tone, and competitive strategies compared to accessible fashion, and we tailor every element accordingly.',
  },
  {
    question: 'How do you measure fashion SEO success beyond traffic?',
    answer:
      'We track metrics that matter to fashion businesses: organic revenue and revenue per session, product page conversion rates, new customer acquisition from search, average order value from organic visitors, and category-level visibility. Monthly reporting connects SEO performance directly to your sales data, so you can see exactly how organic search contributes to your bottom line.',
  },
  {
    question: 'How do I do keyword research for fashion brands?',
    answer:
      'Fashion keyword research requires understanding the full buyer journey, from trend discovery to purchase. Start by identifying your core product categories (dresses, shoes, accessories), then layer in trend-driven terms (quiet luxury, coastal grandmother), seasonal keywords (spring fashion trends 2025), and long-tail variations including size, fit, and fabric. Use tools like Google Keyword Planner, Ahrefs, and SEMrush to analyze search volume and competition, and study what keywords your competitors rank for. Fashion keyword research is ongoing because trends evolve constantly.',
  },
  {
    question: 'What are backlinks and why do they matter for fashion SEO?',
    answer:
      'Backlinks are links from other websites to your fashion site, and they&apos;re one of Google&apos;s strongest ranking signals. When reputable fashion publications, style blogs, or influencers link to your products or content, it signals to search engines that your site is authoritative and trustworthy. Quality backlinks from fashion-relevant sites drive referral traffic, improve domain authority, and help your pages rank higher in search results. For fashion brands, earning links from Vogue, Refinery29, or popular style blogs can significantly boost organic visibility.',
  },
  {
    question: 'How important are Core Web Vitals for fashion e-commerce sites?',
    answer:
      'Core Web Vitals are critical for fashion e-commerce sites because they directly impact both rankings and conversions. Fashion sites are typically image-heavy, which can slow load times and hurt user experience. Google measures metrics like Largest Contentful Paint (LCP), Cumulative Layout Shift (CLS), and First Input Delay (FID). If your product images load slowly or the page shifts while loading, shoppers bounce and Google ranks you lower. Optimizing Core Web Vitals improves both search visibility and conversion rates.',
  },
  {
    question: 'Should fashion brands invest in local SEO?',
    answer:
      'If you have physical retail locations, pop-up shops, or showrooms, local SEO is essential. Claiming and optimizing your Google Business Profile, building location-specific landing pages, and earning local citations help customers find your physical stores through searches like "boutique near me" or "fashion stores in [city]". Even primarily online fashion brands benefit from local SEO if they host trunk shows, participate in fashion weeks, or have a flagship location. Local SEO drives foot traffic and supports omnichannel strategies.',
  },
  {
    question: 'How do I track SEO performance for my fashion business?',
    answer:
      'Use Google Analytics 4 to track organic traffic, product-level revenue, and conversion rates from search. Google Search Console shows which keywords drive impressions and clicks, and identifies technical issues. For fashion brands, track metrics like organic revenue by collection, new vs. returning customer acquisition from search, average order value from organic traffic, and keyword rankings for your top products. Tools like Ahrefs and SEMrush provide competitive benchmarking and backlink tracking. Monthly SEO reporting should connect search performance directly to your revenue and business goals.',
  },
]

const relatedIndustries = [
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Travel', href: '/industries/travel' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Food & Beverage', href: '/industries/food' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
  { name: 'Cannabis', href: '/industries/cannabis' },
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
            Fashion & Apparel
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Fashion SEO that puts your brand on{' '}
            <em className="text-accent italic">every wishlist</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Turn search into your strongest runway. We help fashion brands rank for the styles, trends, and products your customers are actively searching for.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Fashion SEO Strategy</Button>
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
    { value: '$1.7T', label: 'Global fashion market size' },
    { value: '71%', label: 'Discover brands through search' },
    { value: '6.8K/mo', label: 'Avg volume per style keyword' },
    { value: '2.8%', label: 'Purchase conversion from search' },
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
          <Subheading>Fashion SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Why fashion brands need specialized SEO.
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
          <Subheading>Fashion SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for fashion brands.
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

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we drive fashion SEO results.
          </Heading>
        </div>

        <div className="mx-auto max-w-3xl">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Technical SEO Section                                           */
/* -------------------------------------------------------------------------- */

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Technical SEO for Fashion</Subheading>
          <Heading as="h2" className="mt-2">
            The technical foundation for fashion e-commerce success.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Image Optimization</h3>
            <p className="text-slate mb-4">
              Fashion sites are image-heavy, which makes Core Web Vitals optimization critical. We use Google PageSpeed Insights and GTmetrix to audit site speed, optimize product images without sacrificing visual quality, and implement lazy loading and CDN strategies that keep your site fast while maintaining the visual impact fashion buyers expect.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product image compression and format optimization (WebP, AVIF)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Lazy loading and CDN implementation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">LCP, CLS, and FID optimization</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Fashion E-commerce Schema Markup</h3>
            <p className="text-slate mb-4">
              Structured data helps search engines understand your products, collections, and brand. We implement schema.org markup using JSON-LD for Product schema, Organization schema, and BreadcrumbList, ensuring your products appear with rich snippets, ratings, and pricing in search results and Google Shopping.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product schema with variants, prices, and availability</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Organization and Brand schema markup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Review and rating schema implementation</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building for Fashion Brands</h3>
            <p className="text-slate mb-4">
              Authority and visibility come from earning backlinks from fashion publications, style blogs, and influencers. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor link profiles, and execute white-hat link building campaigns that build domain authority and drive referral traffic from relevant fashion audiences.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Fashion publication and blog outreach</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Influencer collaboration and editorial features</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR and lookbook syndication</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Fashion Analytics & Revenue Tracking</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4, Google Search Console, and Screaming Frog to monitor keyword rankings, organic revenue, and product performance. You&apos;ll get monthly reports showing exactly how SEO drives sales, which collections perform best in search, and where to invest your content and optimization efforts.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Custom GA4 e-commerce tracking and attribution</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Product-level keyword and revenue analysis</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Seasonal performance and trend reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 7: Case Study + Results (Dark Section)                             */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Fashion Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a D2C fashion brand achieve breakthrough organic growth.
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
/*  Section 8: Industry Keyword Examples                                       */
/* -------------------------------------------------------------------------- */

function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Fashion Keyword Examples</Subheading>
          <Heading as="h2" className="mt-2">
            The types of keywords we target for fashion brands.
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
/*  Section 9: Client Testimonial                                              */
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
            &ldquo;TheProjectSEO understood something our previous agencies never did: fashion SEO
            isn&apos;t just about keywords, it&apos;s about timing, visual storytelling, and
            understanding how people actually discover style online. Within six months, organic
            became our fastest-growing channel and our customer acquisition cost dropped by
            40%.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">Priya Mehta</p>
            <p className="text-sm text-slate mt-1">Founder & Creative Director, Maison Soleil</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Pricing Context                                                */
/* -------------------------------------------------------------------------- */

function PricingContextSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-10">
            <Subheading>Fashion SEO Investment</Subheading>
            <Heading as="h2" className="mt-2">
              Built for fashion brand economics.
            </Heading>
          </div>

          <p className="text-sm leading-relaxed text-slate text-center mb-8">
            Our fashion SEO engagements are structured to deliver measurable ROI against your
            customer acquisition cost and revenue targets. We price based on catalog size, competitive
            landscape, and growth ambitions, ensuring the investment drives profitable organic growth.
          </p>

          <div className="border border-border-strong rounded-none p-8 mb-8">
            <p className="font-heading text-lg font-semibold text-ink mb-4">
              Starting at $2,200/month
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Fashion keyword research, seasonal content strategy, and monthly content creation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Product and collection page optimization, visual search setup, and structured data
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                Monthly reporting with organic revenue tracking, product visibility, and new customer attribution
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
/*  Section 11: FAQ                                                            */
/* -------------------------------------------------------------------------- */

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Fashion SEO frequently asked questions" items={faqItems} />
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 12: Related Industries                                             */
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
/*  Section 13: Industry-Specific CTA                                          */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function FashionIndustrySEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Fashion SEO Services | Apparel & Fashion Brand Optimization',
          description:
            'Specialized SEO services for fashion and apparel brands. Increase online visibility with product optimization, visual search strategy, and trend-driven content.',
          url: 'https://theprojectseo.com/industries/fashion',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Backlink, Fashion, Keyword research, Brand',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            },
            {
              '@type': 'Thing',
              name: 'Fashion',
              sameAs: 'https://www.wikidata.org/wiki/Q12684',
            },
            {
              '@type': 'Thing',
              name: 'Keyword research',
              sameAs: 'https://www.wikidata.org/wiki/Q6398555',
            },
            {
              '@type': 'Thing',
              name: 'Brand',
              sameAs: 'https://www.wikidata.org/wiki/Q431289',
            }
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ChallengesSection />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we drive fashion SEO results"
        steps={processSteps}
        visual={<IndustryProcessVisual type="fashion" />}
        visualBg="ink"
      />
      <TechnicalSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingContextSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection
        subheading="Ready to Make Your Fashion Brand Unforgettable in Search?"
        heading="Let's build your fashion SEO strategy."
        lead="Partner with SEO experts who understand fashion cycles, visual commerce, and the modern shopper's journey. We'll help you turn organic search into your most profitable acquisition channel."
        submitText="Get Fashion SEO Strategy"
      />
      <Footer />
    </main>
  )
}
