import { Button } from '@/components/button'
import { HeroAnimation } from '@/components/hero-animation'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { FAQAccordion } from '@/components/faq-accordion'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { ChevronLeft, ChevronRight, Calendar, Clock, User } from 'lucide-react'
import dayjs from 'dayjs'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Local SEO Complete Guide: Dominate Local Search Results | TheProjectSEO',
  description:
    'Master local SEO with our complete guide. Learn Google Business Profile optimization, local keyword research, citation building, review management, and more.',
  alternates: {
    canonical: '/blog/local-seo-complete-guide',
  },
  openGraph: {
    title: 'Local SEO Complete Guide: Dominate Local Search Results',
    description: 'Master local SEO with our complete guide. Learn Google Business Profile optimization, local keyword research, citation building, review management, and more.',
    type: 'article',
    publishedTime: '2024-12-05T00:00:00.000Z',
    authors: ['Jessica Taylor'],
  },
}

const post = {
  title: 'Local SEO Complete Guide: Dominate Local Search Results',
  publishedAt: '2024-12-05',
  author: {
    name: 'Jessica Taylor',
    role: 'Local SEO Specialist',
    image: 'bg-blue-500'
  },
  category: 'Local SEO',
  readTime: '15 min read'
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
        <HeroAnimation />
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
              Local SEO is the key to attracting nearby customers who are actively searching for
              your products and services. With nearly half of all Google searches having local
              intent, mastering local SEO is no longer optional — it is essential for business growth.
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
    question: "How long does it take to see results from local SEO?",
    answer: "Most businesses start seeing improvements in local search visibility within 4-8 weeks of implementing local SEO changes. However, achieving a consistent position in the Local Pack typically takes 3-6 months depending on competition in your market and the current state of your online presence."
  },
  {
    question: "Do I need a physical address to rank in local search?",
    answer: "For Google Business Profile, you need either a physical storefront or a verified service area. Service-area businesses can hide their physical address while still appearing in local results. However, having a verifiable physical location does provide a ranking advantage in many cases."
  },
  {
    question: "How many citations do I need to rank locally?",
    answer: "There is no magic number. Focus on quality over quantity. Start with the major data aggregators (Data Axle, Neustar Localeze, Foursquare) and top industry-specific directories. For most businesses, 40-60 high-quality, consistent citations provide a strong foundation."
  },
  {
    question: "How important are Google reviews for local SEO?",
    answer: "Google reviews are one of the most influential local ranking factors. They impact both your Local Pack rankings and your click-through rate. Businesses with more positive reviews and higher average ratings tend to rank higher and attract more clicks than competitors with fewer or lower-rated reviews."
  },
  {
    question: "Can I do local SEO without a Google Business Profile?",
    answer: "While technically you can optimize for local search through on-page SEO, citations, and local content, not having a Google Business Profile means you cannot appear in the Local Pack or Google Maps results. Since the Local Pack appears in 93% of local searches, claiming and optimizing your GBP is strongly recommended."
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
              <a href="#what-is-local-seo" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                What is Local SEO and Why It Matters
              </a>
              <a href="#google-business-profile" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Google Business Profile Optimization
              </a>
              <a href="#local-keyword-research" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Local Keyword Research Strategies
              </a>
              <a href="#nap-consistency" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                NAP Consistency and Citation Building
              </a>
              <a href="#local-link-building" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Local Link Building Tactics
              </a>
              <a href="#online-reviews" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Managing Online Reviews
              </a>
              <a href="#local-content-strategy" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Local Content Strategy
              </a>
              <a href="#technical-local-seo" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Technical Local SEO
              </a>
              <a href="#tracking-performance" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Tracking Local SEO Performance
              </a>
            </nav>
          </div>

          <h2 id="what-is-local-seo">What is Local SEO and Why It Matters</h2>

          <p>
            Local SEO is the practice of optimizing your online presence to attract more business from
            relevant local searches. These searches take place on Google and other search engines, and
            they often include geographic qualifiers like city names, "near me," or zip codes.
          </p>

          <p>
            The importance of local SEO cannot be overstated. Consider these statistics:
          </p>

          <ul>
            <li><strong>46% of all Google searches</strong> have local intent</li>
            <li><strong>76% of people</strong> who search for something nearby visit a business within a day</li>
            <li><strong>28% of local searches</strong> result in a purchase</li>
            <li><strong>88% of consumers</strong> trust online reviews as much as personal recommendations</li>
          </ul>

          <p>
            Local SEO differs from traditional SEO in several key ways. While organic SEO focuses on
            ranking in search results across the country or worldwide, local SEO targets a specific
            geographic area. The goal is to appear in the Local Pack — the map and three-listing block
            that appears at the top of Google results for local queries — as well as in organic
            local results.
          </p>

          <p>
            Google uses three primary factors to determine local rankings: <strong>relevance</strong> (how well
            your business matches the search query), <strong>distance</strong> (how far your business is from the
            searcher), and <strong>prominence</strong> (how well-known and trusted your business is online).
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="google-business-profile">Google Business Profile Optimization</h2>

          <p>
            Your Google Business Profile (formerly Google My Business) is the single most important
            element of your local SEO strategy. It directly controls how your business appears in the
            Local Pack, Google Maps, and the knowledge panel that shows up when someone searches for
            your brand.
          </p>

          <h3>Claiming and Verifying Your Profile</h3>

          <p>
            If you have not claimed your Google Business Profile yet, this should be your first step. Go
            to business.google.com and follow the verification process. Google typically verifies
            businesses via postcard, phone, email, or instant verification for eligible businesses.
          </p>

          <h3>Completing Every Section</h3>

          <p>
            A fully completed profile ranks significantly better than an incomplete one. Make sure to fill out:
          </p>

          <ul>
            <li><strong>Business name:</strong> Use your exact legal business name — no keyword stuffing</li>
            <li><strong>Primary and secondary categories:</strong> Choose the most specific category that applies</li>
            <li><strong>Business description:</strong> Write a compelling 750-character description with natural keyword usage</li>
            <li><strong>Hours of operation:</strong> Keep these accurate, including holiday hours</li>
            <li><strong>Phone number and website URL:</strong> Ensure these match your other listings</li>
            <li><strong>Service areas:</strong> Define the geographic areas you serve</li>
            <li><strong>Products and services:</strong> List all of your offerings with descriptions and pricing</li>
            <li><strong>Attributes:</strong> Add all relevant attributes (wheelchair accessible, free Wi-Fi, etc.)</li>
          </ul>

          <h3>Optimizing Photos and Visual Content</h3>

          <p>
            Businesses with photos receive 42% more requests for driving directions and 35% more
            click-throughs to their websites. Upload high-quality photos regularly, including:
          </p>

          <ul>
            <li>Exterior photos showing your storefront from different angles</li>
            <li>Interior photos showcasing your space and atmosphere</li>
            <li>Product photos highlighting what you sell</li>
            <li>Team photos to put faces to your brand</li>
            <li>Photos of your work, especially for service-based businesses</li>
          </ul>

          <h3>Posting Regular Updates</h3>

          <p>
            Google Business Profile posts keep your listing fresh and engaging. Post weekly updates
            including offers, events, product highlights, and general business news. Posts expire after
            seven days, so consistency matters.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="local-keyword-research">Local Keyword Research Strategies</h2>

          <p>
            Local keyword research is the foundation of every successful local SEO campaign. Unlike
            traditional keyword research, local keyword research focuses on terms that include
            geographic modifiers or imply local intent.
          </p>

          <h3>Types of Local Keywords</h3>

          <p>
            Understanding the different types of local keywords helps you target the right searches:
          </p>

          <ul>
            <li><strong>Explicit local keywords:</strong> Include a location modifier (e.g., "plumber in Austin" or "best pizza Chicago")</li>
            <li><strong>Implicit local keywords:</strong> Have local intent without a location (e.g., "plumber near me" or "pizza delivery")</li>
            <li><strong>Industry + service keywords:</strong> Target specific services you offer (e.g., "emergency roof repair" or "same-day dental implants")</li>
            <li><strong>Long-tail local keywords:</strong> More specific phrases with lower competition (e.g., "affordable family dentist in north Austin")</li>
          </ul>

          <h3>Research Tools and Methods</h3>

          <p>
            Use a combination of these tools and methods to find the best local keywords:
          </p>

          <ul>
            <li>Google Keyword Planner with location targeting enabled</li>
            <li>Google Autocomplete — start typing your service and see what location-based suggestions appear</li>
            <li>Google Business Profile Insights — see what search queries are driving views to your profile</li>
            <li>Competitor analysis — identify keywords your top local competitors are ranking for</li>
            <li>"People also ask" boxes in local search results</li>
          </ul>

          <h3>Mapping Keywords to Pages</h3>

          <p>
            Once you have your keyword list, map each keyword group to a specific page on your website.
            Create dedicated location pages for each service area and dedicated service pages for each
            offering. Avoid targeting the same keyword on multiple pages to prevent cannibalization.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="nap-consistency">NAP Consistency and Citation Building</h2>

          <p>
            NAP stands for Name, Address, and Phone number. Maintaining consistent NAP information
            across the internet is one of the most fundamental aspects of local SEO. Search engines
            cross-reference your business information across multiple sources, and inconsistencies
            can hurt your rankings and confuse potential customers.
          </p>

          <h3>Why NAP Consistency Matters</h3>

          <p>
            When Google finds conflicting information about your business across different websites,
            it loses confidence in the accuracy of your data. This can lead to lower rankings in the
            Local Pack and organic results. Even small differences — like "St." versus "Street" or
            a missing suite number — can create issues.
          </p>

          <h3>Building High-Quality Citations</h3>

          <p>
            Citations are online mentions of your business name, address, and phone number. They are
            a key local ranking factor. Focus on these citation sources:
          </p>

          <ul>
            <li><strong>Data aggregators:</strong> Data Axle (formerly Infogroup), Neustar Localeze, Foursquare, and Factual</li>
            <li><strong>Major directories:</strong> Yelp, Yellow Pages, Better Business Bureau, Apple Maps, Bing Places</li>
            <li><strong>Industry-specific directories:</strong> Avvo for lawyers, Healthgrades for doctors, Houzz for contractors</li>
            <li><strong>Local directories:</strong> Chamber of Commerce, local business associations, community websites</li>
            <li><strong>Social media profiles:</strong> Facebook, LinkedIn, Instagram, Twitter</li>
          </ul>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">NAP Audit Checklist:</h4>
            <ul className="space-y-2">
              <li>&#9744; Business name is identical across all listings</li>
              <li>&#9744; Address format is consistent (abbreviations, suite numbers)</li>
              <li>&#9744; Phone number uses the same format everywhere</li>
              <li>&#9744; Website URL is consistent (with or without www)</li>
              <li>&#9744; Duplicate listings have been merged or removed</li>
              <li>&#9744; Old or outdated listings have been updated</li>
            </ul>
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="local-link-building">Local Link Building Tactics</h2>

          <p>
            Backlinks remain one of the strongest ranking signals for both organic and local search.
            For local SEO, the quality and local relevance of your links matter more than sheer
            quantity. A single link from a respected local organization can be worth more than dozens
            of generic directory links.
          </p>

          <h3>Effective Local Link Building Strategies</h3>

          <ul>
            <li><strong>Local sponsorships:</strong> Sponsor local events, sports teams, charities, or school programs in exchange for a link on their website</li>
            <li><strong>Community involvement:</strong> Participate in local events and get featured on event pages and local news sites</li>
            <li><strong>Local partnerships:</strong> Partner with complementary local businesses for cross-promotion and reciprocal linking</li>
            <li><strong>Local press and media:</strong> Build relationships with local journalists and bloggers — offer expert commentary for local stories</li>
            <li><strong>Scholarships:</strong> Create a local scholarship program that gets linked from .edu websites</li>
            <li><strong>Resource pages:</strong> Get listed on local resource pages maintained by libraries, government sites, and community organizations</li>
          </ul>

          <h3>Guest Posting for Local Audiences</h3>

          <p>
            Contribute articles to local blogs, news outlets, and business publications. Focus on
            topics that provide genuine value to the local community. This builds both links and
            brand awareness within your target geographic area.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="online-reviews">Managing Online Reviews</h2>

          <p>
            Online reviews are a powerful local ranking factor and a critical trust signal for potential
            customers. Google has confirmed that reviews impact local search rankings, and businesses
            with strong review profiles consistently outperform competitors in the Local Pack.
          </p>

          <h3>Building a Review Generation Strategy</h3>

          <p>
            Generating a steady stream of authentic reviews requires a systematic approach:
          </p>

          <ul>
            <li><strong>Ask at the right time:</strong> Request reviews immediately after a positive interaction or completed service</li>
            <li><strong>Make it easy:</strong> Share a direct link to your Google review page — you can create a short URL from your GBP dashboard</li>
            <li><strong>Use multiple channels:</strong> Ask via email, SMS, in-person, and through follow-up communications</li>
            <li><strong>Train your team:</strong> Ensure every customer-facing team member knows how and when to request reviews</li>
            <li><strong>Follow up:</strong> Send a gentle reminder to customers who have not left a review after the initial ask</li>
          </ul>

          <h3>Responding to Reviews</h3>

          <p>
            Responding to every review — positive and negative — shows customers and Google that you
            are engaged and care about customer satisfaction. For positive reviews, thank the customer
            and reference specific details. For negative reviews, respond professionally, acknowledge
            the issue, and offer to resolve it offline.
          </p>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Review Response Best Practices:</h4>
            <ul className="space-y-2">
              <li>&#9744; Respond to all reviews within 24-48 hours</li>
              <li>&#9744; Personalize each response — avoid copy-paste templates</li>
              <li>&#9744; Include keywords naturally in your responses</li>
              <li>&#9744; Never argue with negative reviewers publicly</li>
              <li>&#9744; Flag fake or spam reviews for removal</li>
            </ul>
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="local-content-strategy">Local Content Strategy</h2>

          <p>
            Creating content that resonates with your local audience is essential for building
            topical and geographic relevance. Local content helps you rank for local keywords and
            establishes your business as an authority in your community.
          </p>

          <h3>Types of Local Content</h3>

          <ul>
            <li><strong>Location pages:</strong> Create dedicated pages for each city, neighborhood, or service area you cover</li>
            <li><strong>Local guides:</strong> Write comprehensive guides about your area (e.g., "Best Neighborhoods in [City] for Families")</li>
            <li><strong>Local news and events:</strong> Cover local events, news, and happenings relevant to your industry</li>
            <li><strong>Case studies:</strong> Showcase work you have done for local clients (with their permission)</li>
            <li><strong>Local resource pages:</strong> Create helpful resources for your community</li>
            <li><strong>FAQ content:</strong> Answer common questions specific to your local market</li>
          </ul>

          <h3>Optimizing Location Pages</h3>

          <p>
            If your business serves multiple locations, each location page should contain:
          </p>

          <ul>
            <li>Unique, substantial content specific to that location (at least 500 words)</li>
            <li>An embedded Google Map showing your business or service area</li>
            <li>Location-specific testimonials and reviews</li>
            <li>NAP information for that specific location</li>
            <li>Driving directions from major local landmarks</li>
            <li>Photos of the local team or office</li>
          </ul>

          <p>
            Avoid creating thin, cookie-cutter location pages where only the city name changes. Google
            can detect this pattern and it may hurt your rankings rather than help them.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="technical-local-seo">Technical Local SEO</h2>

          <p>
            Technical SEO provides the foundation that allows all of your other local SEO efforts to
            succeed. Without a technically sound website, even the best content and citation strategy
            will underperform.
          </p>

          <h3>Local Business Schema Markup</h3>

          <p>
            Schema markup helps search engines understand your business information in a structured
            format. For local businesses, implementing the right schema types is critical:
          </p>

          <ul>
            <li><strong>LocalBusiness schema:</strong> Include your business name, address, phone, hours, and geo-coordinates</li>
            <li><strong>Organization schema:</strong> Add your logo, social profiles, and founding date</li>
            <li><strong>Service schema:</strong> Mark up individual services with descriptions and pricing</li>
            <li><strong>Review schema:</strong> Display star ratings in search results with aggregate review markup</li>
            <li><strong>FAQ schema:</strong> Get expanded SERP real estate with FAQ rich results</li>
            <li><strong>BreadcrumbList schema:</strong> Help search engines understand your site structure</li>
          </ul>

          <h3>Hreflang Tags for Multi-Location Businesses</h3>

          <p>
            If your business serves customers in different language regions or countries, hreflang tags
            tell search engines which version of a page to show to users based on their language and
            location. This prevents duplicate content issues and ensures the right audience sees the
            right content.
          </p>

          <h3>Mobile Optimization</h3>

          <p>
            The majority of local searches happen on mobile devices. Your website must be fully optimized
            for mobile, including:
          </p>

          <ul>
            <li>Responsive design that adapts to all screen sizes</li>
            <li>Click-to-call phone numbers</li>
            <li>Click-to-map address links</li>
            <li>Fast page load times (under 3 seconds on mobile)</li>
            <li>Easy-to-use navigation and forms on touchscreens</li>
          </ul>

          <h3>Site Speed and Core Web Vitals</h3>

          <p>
            Google has confirmed that page speed is a ranking factor for both desktop and mobile
            searches. Optimize your Core Web Vitals — Largest Contentful Paint (LCP), First Input
            Delay (FID), Cumulative Layout Shift (CLS), and Interaction to Next Paint (INP) — to
            provide a fast and stable user experience.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="tracking-performance">Tracking Local SEO Performance</h2>

          <p>
            Measuring the results of your local SEO efforts is essential for understanding what is
            working and where to focus your resources. Track these key metrics regularly:
          </p>

          <h3>Key Metrics to Monitor</h3>

          <ul>
            <li><strong>Local Pack rankings:</strong> Track your position in the Local Pack for target keywords</li>
            <li><strong>Google Business Profile insights:</strong> Monitor search queries, views, actions (calls, direction requests, website visits)</li>
            <li><strong>Organic traffic from local keywords:</strong> Use Google Analytics to segment traffic by geographic location</li>
            <li><strong>Citation accuracy:</strong> Regularly audit your citations for consistency and completeness</li>
            <li><strong>Review velocity and rating:</strong> Track the number and quality of new reviews over time</li>
            <li><strong>Conversion rates:</strong> Measure phone calls, form submissions, and direction requests from local search</li>
          </ul>

          <h3>Essential Tools for Local SEO Tracking</h3>

          <ul>
            <li><strong>Google Search Console:</strong> Monitor search performance, indexing issues, and Core Web Vitals</li>
            <li><strong>Google Analytics:</strong> Track website traffic, user behavior, and conversions by location</li>
            <li><strong>Google Business Profile dashboard:</strong> View search queries, customer actions, and profile performance</li>
            <li><strong>Local rank tracking tools:</strong> BrightLocal, Whitespark, or SE Ranking for grid-based local rank tracking</li>
            <li><strong>Citation management tools:</strong> Moz Local, BrightLocal, or Yext for citation monitoring and cleanup</li>
          </ul>

          <h3>Reporting and Optimization Cadence</h3>

          <p>
            Establish a regular reporting cadence to stay on top of your local SEO performance. Review
            your Google Business Profile insights weekly, conduct a full performance review monthly,
            and perform a comprehensive local SEO audit quarterly. Use your findings to adjust your
            strategy and prioritize the tactics that deliver the best results for your business.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <div className="not-prose my-12">
            <FAQAccordion items={faqItems} />
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            Local SEO is a multifaceted discipline that requires consistent effort across multiple
            channels. From optimizing your Google Business Profile and building citations to generating
            reviews and creating local content, every element works together to strengthen your
            visibility in local search results.
          </p>

          <p>
            The businesses that succeed in local search are those that commit to a long-term strategy,
            maintain consistent NAP information, actively engage with their community, and continuously
            monitor and refine their approach. Start with the fundamentals outlined in this guide, build
            a strong foundation, and then layer in advanced tactics as your local presence grows.
          </p>

          <p>
            Remember, local SEO is not a one-time project. It is an ongoing process that requires
            regular attention and adaptation to algorithm changes, competitor actions, and evolving
            consumer behaviors. The investment you make today will compound over time, delivering a
            steady stream of local customers to your business.
          </p>

          <div className="not-prose bg-cream border border-border-strong rounded-none p-8 my-12">
            <h3 className="font-heading text-xl font-semibold mb-4">Ready to Dominate Local Search?</h3>
            <p className="text-slate mb-6">
              Get a free local SEO audit and discover exactly how your business can rank higher in the
              Local Pack. Our specialists will analyze your Google Business Profile, citations, reviews,
              and local rankings to build a custom strategy.
            </p>
            <Button href="/contact">
              Get Your Free Local SEO Audit
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
          headline: 'Local SEO Complete Guide: Dominate Local Search Results | TheProjectSEO',
          description:
            'Master local SEO with our complete guide. Learn Google Business Profile optimization, local keyword research, citation building, review management, and more.',
          url: 'https://theprojectseo.com/blog/local-seo-complete-guide',
          author: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
          },
          publisher: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          datePublished: '2024-12-05',
          dateModified: '2025-01-15',
          keywords: 'Search engine optimization, Local search (Internet), Search engine results page, Keyword research, World Wide Web',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Local search (Internet)',
              sameAs: 'https://www.wikidata.org/wiki/Q616553',
            },
            {
              '@type': 'Thing',
              name: 'Search engine results page',
              sameAs: 'https://www.wikidata.org/wiki/Q2704141',
            },
            {
              '@type': 'Thing',
              name: 'Keyword research',
              sameAs: 'https://www.wikidata.org/wiki/Q6398555',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            }
          ],
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <ArticleHeader />
      <ArticleContent />
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <RelatedPosts />
      <Footer />
    </main>
  )
}
