import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { FAQAccordion } from '@/components/faq-accordion'
import { ChevronLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react'
import dayjs from 'dayjs'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce SEO Strategy: Increase Online Store Traffic by 300% | TheProjectSEO',
  description:
    'Learn proven e-commerce SEO strategies to dramatically increase your online store traffic. Expert tactics for product pages, category optimization, and revenue growth.',
  alternates: {
    canonical: '/blog/e-commerce-seo-strategy',
  },
  openGraph: {
    title: 'E-commerce SEO Strategy: Increase Online Store Traffic by 300%',
    description: 'Learn proven e-commerce SEO strategies to dramatically increase your online store traffic.',
    type: 'article',
    publishedTime: '2024-11-20T00:00:00.000Z',
    authors: ['David Park'],
  },
}

const post = {
  title: 'E-commerce SEO Strategy: Increase Online Store Traffic by 300%',
  publishedAt: '2024-11-20',
  author: {
    name: 'David Park',
    role: 'E-commerce SEO Specialist',
    image: 'bg-blue-500'
  },
  category: 'E-commerce SEO',
  readTime: '14 min read'
}

const relatedPosts = [
  {
    slug: 'dominate-search-rankings-2025',
    title: 'How to Dominate Search Rankings in 2025: The Complete Guide',
    excerpt: 'Discover the latest SEO strategies and algorithm updates that will help your website rank #1 on Google in 2025.'
  },
  {
    slug: 'keyword-research-tools-2025',
    title: 'Best Keyword Research Tools for 2025: Complete Comparison',
    excerpt: 'Compare the top keyword research tools and find the perfect one for your SEO strategy.'
  }
]

function ArticleHeader() {
  return (
    <div className="relative py-16">
      <Container>
        <div className="mx-auto max-w-4xl">
          <nav className="font-mono text-xs uppercase tracking-[0.1em] text-ash">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-ash hover:text-ink transition-colors"
            >
              <ChevronLeft className="size-4" />
              Back to Blog
            </Link>
          </nav>

          <div className="mt-8">
            <div className="flex items-center gap-4 text-sm text-ash">
              <span className="inline-flex items-center rounded-none bg-cream px-3 py-1 text-xs font-medium text-ink border border-border-strong">
                {post.category}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="size-3" />
                <span>{dayjs(post.publishedAt).format('MMMM D, YYYY')}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="size-3" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <Heading as="h1" className="mt-6">
              {post.title}
            </Heading>

            <Lead className="mt-6">
              E-commerce SEO is one of the highest-ROI marketing channels available to online retailers.
              With the right strategy, you can drive massive organic traffic growth, reduce customer
              acquisition costs, and build a sustainable revenue engine for your online store.
            </Lead>

            <div className="mt-8 flex items-center gap-4">
              <div className="size-12 bg-accent-soft rounded-full flex items-center justify-center">
                <User className="size-6 text-accent" />
              </div>
              <div>
                <div className="font-medium text-ink">{post.author.name}</div>
                <div className="text-sm text-ash">{post.author.role}</div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

const faqItems = [
  {
    question: "How long does it take to see results from e-commerce SEO?",
    answer: "E-commerce SEO typically shows initial results within 3-6 months, with significant traffic and revenue gains appearing between 6-12 months. Product pages targeting long-tail keywords can rank faster, while competitive category pages may take longer. Consistent optimization and content creation accelerate the timeline."
  },
  {
    question: "Should I focus on product pages or category pages for SEO?",
    answer: "Both are important, but category pages often drive more traffic because they target broader, higher-volume keywords. Start by optimizing your top-level category pages, then work on individual product pages. Category pages also serve as powerful internal linking hubs that distribute authority to product pages."
  },
  {
    question: "How do I handle SEO for products that go out of stock?",
    answer: "Never delete out-of-stock product pages that have SEO value. Instead, keep the page live with a clear out-of-stock notice, suggest alternative products, and offer an email notification option for when the product returns. If the product is permanently discontinued, 301 redirect the URL to the most relevant alternative product or category page."
  },
  {
    question: "Is it worth investing in product schema markup?",
    answer: "Absolutely. Product schema markup enables rich snippets in search results, displaying price, availability, ratings, and review counts directly in the SERP. Studies show that rich snippets can increase click-through rates by 20-30%, making schema markup one of the highest-impact e-commerce SEO tactics available."
  },
  {
    question: "How do I handle duplicate content caused by faceted navigation?",
    answer: "Use a combination of canonical tags, robots meta noindex directives, and crawl budget management. Set canonical tags on filtered pages pointing to the main category page, use noindex for low-value filter combinations, and block unnecessary faceted URLs in robots.txt. Google Search Console's URL Parameters tool can also help manage crawling of faceted URLs."
  }
]

function ArticleContent() {
  return (
    <Container className="py-16">
      <div className="mx-auto max-w-4xl">
        <div className="prose prose-lg max-w-none
          [&_h2]:font-heading [&_h2]:text-3xl [&_h2]:font-semibold [&_h2]:mt-16 [&_h2]:mb-6 [&_h2]:text-ink
          [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:mt-12 [&_h3]:mb-4 [&_h3]:text-ink
          [&_p]:text-slate [&_p]:leading-relaxed [&_p]:mb-6
          [&_ul]:my-6 [&_ul]:space-y-3 [&_li]:text-slate
          [&_a]:text-accent [&_a]:font-medium [&_a]:underline [&_a]:decoration-2 [&_a]:underline-offset-2 [&_a]:hover:text-accent-hover
          [&_strong]:text-ink [&_strong]:font-semibold">

          <div className="aspect-video w-full rounded-none bg-cream flex items-center justify-center mb-16 border border-border-strong">
            <p className="text-ash font-medium">Featured Article Image</p>
          </div>

          {/* Table of Contents */}
          <div className="not-prose border border-border-strong rounded-none p-8 my-12">
            <h3 className="font-heading text-xl font-semibold text-ink mb-6">
              Table of Contents
            </h3>
            <nav className="space-y-3 font-sans text-sm">
              <a href="#ecommerce-seo-fundamentals" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                E-commerce SEO Fundamentals
              </a>
              <a href="#product-page-optimization" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Product Page Optimization
              </a>
              <a href="#category-page-seo" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Category Page SEO Strategy
              </a>
              <a href="#technical-seo-ecommerce" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Technical SEO for E-commerce
              </a>
              <a href="#content-marketing" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                E-commerce Content Marketing
              </a>
              <a href="#product-schema" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Product Schema and Rich Snippets
              </a>
              <a href="#international-ecommerce-seo" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                International E-commerce SEO
              </a>
              <a href="#ecommerce-link-building" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                E-commerce Link Building
              </a>
              <a href="#measuring-success" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Measuring E-commerce SEO Success
              </a>
            </nav>
          </div>

          <h2 id="ecommerce-seo-fundamentals">E-commerce SEO Fundamentals</h2>

          <p>
            E-commerce SEO is fundamentally different from traditional website optimization. With thousands
            of product pages, complex site architectures, and constantly changing inventory, online stores
            face unique challenges that require specialized strategies.
          </p>

          <p>
            The core principle of e-commerce SEO is aligning your product catalog with how customers
            actually search. This means understanding the full buyer journey, from initial research
            queries to product-specific searches with high purchase intent.
          </p>

          <ul>
            <li><strong>Search intent mapping:</strong> Match every page to a specific stage in the buying funnel</li>
            <li><strong>Keyword segmentation:</strong> Separate informational, commercial, and transactional keywords</li>
            <li><strong>Competitor gap analysis:</strong> Identify where competitors rank that you do not</li>
            <li><strong>Revenue prioritization:</strong> Focus SEO efforts on your highest-margin products first</li>
          </ul>

          <p>
            Unlike content websites where traffic alone is the goal, e-commerce SEO must be measured
            against revenue. Every optimization decision should be evaluated through the lens of
            potential revenue impact and return on investment.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="product-page-optimization">Product Page Optimization</h2>

          <h3>Crafting High-Converting Product Titles</h3>

          <p>
            Product titles are the single most important on-page element for e-commerce SEO. They
            directly influence both rankings and click-through rates from search results. A well-crafted
            product title follows a specific formula.
          </p>

          <ul>
            <li><strong>Primary keyword first:</strong> Place the most important search term at the beginning of the title</li>
            <li><strong>Brand name inclusion:</strong> Include the brand name for branded search queries</li>
            <li><strong>Key attributes:</strong> Add size, color, material, or model number where relevant</li>
            <li><strong>Character limit:</strong> Keep titles under 60 characters to avoid truncation in search results</li>
          </ul>

          <h3>Writing Product Descriptions That Rank</h3>

          <p>
            Product descriptions serve dual purposes: they must convince shoppers to buy while also
            providing search engines with enough context to rank the page. Avoid manufacturer-provided
            descriptions at all costs, as duplicate content across retailers will tank your rankings.
          </p>

          <ul>
            <li>Write unique descriptions of at least 300 words for every product</li>
            <li>Include primary and secondary keywords naturally throughout the copy</li>
            <li>Address common customer questions and objections directly in the description</li>
            <li>Use bullet points for specifications and features to improve scannability</li>
            <li>Incorporate customer review language and terminology to match real search queries</li>
          </ul>

          <h3>Product Image Optimization</h3>

          <p>
            Images drive e-commerce conversions and can generate significant traffic through Google
            Image Search. Proper image optimization is essential for both performance and visibility.
          </p>

          <ul>
            <li>Use descriptive file names with keywords instead of generic names like IMG_001.jpg</li>
            <li>Write unique alt text for every product image describing the product accurately</li>
            <li>Compress images to WebP format to reduce page load times</li>
            <li>Implement lazy loading for images below the fold</li>
            <li>Add multiple high-quality images showing different angles and use cases</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="category-page-seo">Category Page SEO Strategy</h2>

          <p>
            Category pages are the workhorses of e-commerce SEO. They typically target higher-volume,
            more competitive keywords than individual product pages and serve as critical entry points
            for organic traffic.
          </p>

          <h3>Category Page Content Architecture</h3>

          <p>
            The most successful e-commerce sites treat category pages as comprehensive topic pages
            rather than simple product listings. This approach provides search engines with the content
            depth needed to rank for competitive terms.
          </p>

          <ul>
            <li><strong>Above-the-fold intro:</strong> Include a 100-150 word introduction with primary keywords above product listings</li>
            <li><strong>Product grid optimization:</strong> Display 20-40 products per page with clear pagination</li>
            <li><strong>Below-the-fold content:</strong> Add 500-1000 words of supporting content below product listings</li>
            <li><strong>Internal linking:</strong> Link to relevant subcategories and related category pages</li>
            <li><strong>Buying guides:</strong> Include brief buying guide content to capture informational queries</li>
          </ul>

          <h3>Subcategory Strategy</h3>

          <p>
            Your subcategory structure should mirror how customers think about and search for products.
            A well-planned taxonomy creates natural keyword targeting opportunities and improves user
            navigation simultaneously.
          </p>

          <ul>
            <li>Research search volume data to validate subcategory naming decisions</li>
            <li>Limit category depth to three levels maximum to preserve link equity</li>
            <li>Create cross-category links for products that belong to multiple categories</li>
            <li>Use breadcrumb navigation with structured data for every category level</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="technical-seo-ecommerce">Technical SEO for E-commerce</h2>

          <h3>Site Architecture and Crawl Efficiency</h3>

          <p>
            E-commerce websites often have thousands or even millions of pages, making crawl budget
            management critical. Search engines need to efficiently discover and index your most
            important pages without wasting resources on low-value URLs.
          </p>

          <ul>
            <li><strong>Flat architecture:</strong> Keep every product page within 3-4 clicks from the homepage</li>
            <li><strong>XML sitemaps:</strong> Create separate sitemaps for products, categories, and blog content</li>
            <li><strong>Internal linking:</strong> Build strong internal linking paths from category pages to products</li>
            <li><strong>Orphan page detection:</strong> Regularly audit for product pages with no internal links</li>
          </ul>

          <h3>Faceted Navigation and URL Management</h3>

          <p>
            Faceted navigation is one of the most complex technical SEO challenges for e-commerce sites.
            Filters for size, color, price, brand, and other attributes can generate thousands of
            duplicate or near-duplicate URLs that waste crawl budget and dilute ranking signals.
          </p>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Faceted Navigation Best Practices:</h4>
            <ul className="space-y-2">
              <li>&#9744; Set canonical tags on all filtered URLs pointing to the parent category</li>
              <li>&#9744; Use noindex, follow for filter combinations with low search value</li>
              <li>&#9744; Implement AJAX-based filtering to prevent URL generation where possible</li>
              <li>&#9744; Allow indexing only for high-value filter combinations with search demand</li>
              <li>&#9744; Block parameter-heavy URLs in robots.txt as a safety net</li>
              <li>&#9744; Monitor crawl stats in Google Search Console for budget waste</li>
            </ul>
          </div>

          <h3>Site Speed for E-commerce</h3>

          <p>
            Page speed has a direct impact on e-commerce conversion rates. Research shows that every
            additional second of load time reduces conversions by up to 7%. For an online store doing
            $100,000 per day, that translates to $2.5 million in lost sales annually.
          </p>

          <ul>
            <li>Implement a CDN to serve assets from edge locations closest to users</li>
            <li>Use next-gen image formats like WebP and AVIF for product images</li>
            <li>Defer non-critical JavaScript including analytics and chat widgets</li>
            <li>Enable server-side caching for category and product pages</li>
            <li>Optimize third-party scripts that are common in e-commerce platforms</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="content-marketing">E-commerce Content Marketing</h2>

          <p>
            Content marketing for e-commerce goes beyond blogging. A comprehensive content strategy
            captures customers at every stage of the buying journey and builds topical authority
            that lifts rankings across your entire product catalog.
          </p>

          <h3>Buying Guides and Comparison Content</h3>

          <p>
            Buying guides target commercial-intent keywords and directly bridge the gap between
            research and purchase. They capture traffic from shoppers who are actively evaluating
            products but have not yet decided what to buy.
          </p>

          <ul>
            <li>Create detailed buying guides for each major product category</li>
            <li>Build comparison pages for your top-selling products versus competitors</li>
            <li>Develop "best of" roundup content targeting high-volume keywords</li>
            <li>Link directly to product pages from within guide content</li>
          </ul>

          <h3>User-Generated Content Strategy</h3>

          <p>
            Customer reviews, Q&A sections, and user-submitted photos create a continuous stream
            of fresh, unique content that search engines value highly. This content also naturally
            includes long-tail keywords that customers use in real search queries.
          </p>

          <ul>
            <li><strong>Product reviews:</strong> Implement a structured review system with star ratings and schema markup</li>
            <li><strong>Q&A sections:</strong> Add question and answer sections to product pages to capture FAQ-style searches</li>
            <li><strong>Customer photos:</strong> Enable user photo uploads to add unique visual content to product pages</li>
            <li><strong>Community forums:</strong> Consider building a community section for complex product categories</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="product-schema">Product Schema and Rich Snippets</h2>

          <p>
            Structured data is a competitive advantage in e-commerce search results. Product schema
            markup enables rich snippets that display pricing, availability, ratings, and review
            counts directly in the SERP, significantly increasing click-through rates.
          </p>

          <h3>Essential E-commerce Schema Types</h3>

          <ul>
            <li><strong>Product schema:</strong> Name, description, image, SKU, brand, price, availability, and condition</li>
            <li><strong>AggregateRating:</strong> Average rating score and total review count for social proof in SERPs</li>
            <li><strong>Review schema:</strong> Individual review markup for detailed review rich results</li>
            <li><strong>Offer schema:</strong> Pricing details, currency, availability, and sale pricing</li>
            <li><strong>BreadcrumbList:</strong> Breadcrumb navigation markup for enhanced SERP display</li>
            <li><strong>FAQ schema:</strong> Frequently asked questions on product and category pages</li>
          </ul>

          <h3>Implementation Best Practices</h3>

          <p>
            Proper schema implementation requires attention to detail and ongoing maintenance as
            Google's requirements evolve. Follow these practices to maximize your rich snippet
            visibility.
          </p>

          <ul>
            <li>Use JSON-LD format for all structured data implementation</li>
            <li>Validate markup using Google's Rich Results Test tool before deployment</li>
            <li>Keep pricing and availability data synchronized with your live inventory</li>
            <li>Monitor rich result performance in Google Search Console's Enhancements reports</li>
            <li>Implement schema programmatically through your CMS or e-commerce platform</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="international-ecommerce-seo">International E-commerce SEO</h2>

          <p>
            Expanding your e-commerce store internationally opens massive growth opportunities,
            but it also introduces complex SEO challenges around language, currency, and regional
            search behavior.
          </p>

          <h3>Hreflang and International Targeting</h3>

          <p>
            Hreflang tags tell search engines which language and regional version of a page to show
            to users in different locations. Incorrect implementation is one of the most common and
            costly e-commerce SEO mistakes.
          </p>

          <ul>
            <li><strong>Country-specific domains:</strong> Use ccTLDs like .co.uk or .de for strong regional signals</li>
            <li><strong>Subdirectory approach:</strong> Use /en/, /fr/, /de/ subdirectories on a single domain for consolidated authority</li>
            <li><strong>Hreflang implementation:</strong> Add hreflang annotations for every language and region variation</li>
            <li><strong>x-default tag:</strong> Always include an x-default hreflang for users not matching any specified region</li>
          </ul>

          <h3>Localized Content and Keyword Research</h3>

          <p>
            Direct translation of product content rarely works for international SEO. Each market
            requires localized keyword research because search behavior differs significantly across
            regions, even those sharing the same language.
          </p>

          <ul>
            <li>Conduct separate keyword research for each target market using local search data</li>
            <li>Hire native speakers to create or review product descriptions for each locale</li>
            <li>Adapt product names and descriptions to local terminology and cultural preferences</li>
            <li>Localize currency, sizing, and measurement units on product pages</li>
            <li>Build market-specific content that addresses regional needs and trends</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="ecommerce-link-building">E-commerce Link Building</h2>

          <p>
            Link building for e-commerce sites requires creative strategies that go beyond traditional
            outreach. The challenge is that most sites are reluctant to link directly to product or
            category pages, making an indirect approach essential.
          </p>

          <h3>Linkable Asset Creation</h3>

          <ul>
            <li><strong>Industry research and data:</strong> Publish original research, surveys, or data studies related to your product niche</li>
            <li><strong>Interactive tools:</strong> Build product configurators, size guides, or comparison calculators that earn links naturally</li>
            <li><strong>Resource guides:</strong> Create comprehensive guides that become reference material in your industry</li>
            <li><strong>Infographics:</strong> Design data-driven visual content that other sites want to embed and share</li>
          </ul>

          <h3>E-commerce-Specific Link Tactics</h3>

          <ul>
            <li>Partner with complementary brands for co-marketing content and cross-linking</li>
            <li>Sponsor industry events and secure backlinks from event and organization pages</li>
            <li>Provide products for honest reviews on authoritative blogs in your niche</li>
            <li>Leverage supplier and manufacturer relationships for links from their retailer directories</li>
            <li>Create shareable discount codes that bloggers and influencers naturally link to</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="measuring-success">Measuring E-commerce SEO Success</h2>

          <p>
            E-commerce SEO measurement goes beyond traffic and rankings. The ultimate metric is
            revenue attribution, understanding exactly how much revenue your organic search channel
            generates and how to optimize for maximum return.
          </p>

          <h3>Revenue Attribution Model</h3>

          <p>
            Implement a robust revenue attribution model that connects organic search performance
            to actual sales data. This allows you to calculate the true ROI of your SEO investment
            and justify continued spending.
          </p>

          <ul>
            <li><strong>Organic revenue tracking:</strong> Segment e-commerce revenue by traffic source in Google Analytics</li>
            <li><strong>Assisted conversions:</strong> Track how organic search assists conversions that close through other channels</li>
            <li><strong>Landing page revenue:</strong> Measure revenue per landing page to identify your highest-value SEO content</li>
            <li><strong>Customer lifetime value:</strong> Calculate the long-term value of customers acquired through organic search</li>
          </ul>

          <h3>Key E-commerce SEO Metrics</h3>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Essential KPIs to Track:</h4>
            <ul className="space-y-2">
              <li>&#9744; Organic revenue and revenue growth rate month-over-month</li>
              <li>&#9744; Organic traffic by page type (product, category, blog)</li>
              <li>&#9744; Keyword rankings for priority commercial terms</li>
              <li>&#9744; Organic conversion rate compared to other channels</li>
              <li>&#9744; Average order value from organic traffic</li>
              <li>&#9744; Product page indexation rate and crawl coverage</li>
              <li>&#9744; Rich snippet impression share for product queries</li>
            </ul>
          </div>

          <h3>Reporting and Optimization Cadence</h3>

          <p>
            Establish a regular reporting cadence to track progress and identify optimization
            opportunities. E-commerce SEO requires continuous iteration based on performance data,
            seasonal trends, and inventory changes.
          </p>

          <ul>
            <li><strong>Weekly:</strong> Monitor rankings, traffic anomalies, and crawl errors</li>
            <li><strong>Monthly:</strong> Review revenue attribution, conversion rates, and content performance</li>
            <li><strong>Quarterly:</strong> Conduct comprehensive technical audits and competitive analysis</li>
            <li><strong>Annually:</strong> Reassess overall strategy, keyword targets, and site architecture</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <div className="not-prose my-12">
            <FAQAccordion items={faqItems} />
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            E-commerce SEO is a complex but incredibly rewarding discipline. By systematically
            optimizing your product pages, category architecture, technical foundation, and content
            strategy, you can achieve sustainable organic traffic growth that translates directly
            into revenue.
          </p>

          <p>
            The stores that win in organic search are those that treat SEO as a core business function
            rather than a one-time project. Invest in the fundamentals, measure everything against
            revenue, and continuously iterate based on data. The 300% traffic increase is not a
            fantasy; it is the documented result of disciplined, strategic e-commerce SEO execution.
          </p>

          <div className="not-prose bg-cream border border-border-strong rounded-none p-8 my-12">
            <h3 className="font-heading text-xl font-semibold mb-4">Ready to Scale Your E-commerce Traffic?</h3>
            <p className="text-slate mb-6">
              Get a free e-commerce SEO audit and discover exactly where your online store is leaving
              organic revenue on the table. Our specialists will analyze your product pages, site
              architecture, and competitive landscape to build a custom growth plan.
            </p>
            <Button href="/contact">
              Get Your Free E-commerce SEO Audit
            </Button>
          </div>

        </div>
      </div>
    </Container>
  )
}

function RelatedPosts() {
  return (
    <div className="relative py-16 bg-cream border-t border-border">
      <Container>
        <div className="mx-auto max-w-4xl">
          <Subheading>Related Articles</Subheading>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            {relatedPosts.map((post) => (
              <div key={post.slug} className="rounded-none bg-paper p-6 border border-border-strong transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <h3 className="text-lg font-semibold mb-3">
                  <Link href={`/blog/${post.slug}`} className="text-ink hover:text-slate transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-ash text-sm">
                  {post.excerpt}
                </p>
                <div className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-hover transition-colors"
                  >
                    Read article
                    <ChevronRight className="size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function BlogPost() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: 'E-commerce SEO Strategy: Increase Online Store Traffic by 300% | TheProjectSEO',
          description:
            'Learn proven e-commerce SEO strategies to dramatically increase your online store traffic. Expert tactics for product pages, category optimization, and revenue growth.',
          url: 'https://theprojectseo.com/blog/e-commerce-seo-strategy',
          author: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
          },
          publisher: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          datePublished: '2024-11-20',
          dateModified: '2025-01-15',
          keywords: 'Search engine optimization, Search engine results page, World Wide Web, Computing, Websites',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Search engine results page',
              sameAs: 'https://www.wikidata.org/wiki/Q2704141',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            },
            {
              '@type': 'Thing',
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
            },
            {
              '@type': 'Thing',
              name: 'Websites',
              sameAs: 'https://www.wikidata.org/wiki/Q5635640',
            }
          ],
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <ArticleHeader />
      <ArticleContent />
      <RelatedPosts />
      <Footer />
    </main>
  )
}
