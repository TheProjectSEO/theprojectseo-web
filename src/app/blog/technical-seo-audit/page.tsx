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
  title: 'Technical SEO Audit: Find & Fix Issues Hurting Your Rankings | TheProjectSEO',
  description:
    'Learn how to perform a comprehensive technical SEO audit to identify and fix crawlability, indexation, site speed, and security issues that are hurting your search rankings.',
  alternates: {
    canonical: '/blog/technical-seo-audit',
  },
  openGraph: {
    title: 'Technical SEO Audit: Find & Fix Issues Hurting Your Rankings',
    description: 'Learn how to perform a comprehensive technical SEO audit to identify and fix crawlability, indexation, site speed, and security issues that are hurting your search rankings.',
    type: 'article',
    publishedTime: '2024-11-01T00:00:00.000Z',
    authors: ['Robert Martinez'],
  },
}

const post = {
  title: 'Technical SEO Audit: Find & Fix Issues Hurting Your Rankings',
  publishedAt: '2024-11-01',
  author: {
    name: 'Robert Martinez',
    role: 'Technical SEO Lead',
    image: 'bg-blue-500'
  },
  category: 'Technical SEO',
  readTime: '16 min read'
}

const relatedPosts = [
  {
    slug: 'core-web-vitals-optimization',
    title: 'Core Web Vitals Optimization: Boost Your Page Speed & Rankings',
    excerpt: 'Learn how to optimize your Core Web Vitals to improve user experience and search rankings.'
  },
  {
    slug: 'dominate-search-rankings-2025',
    title: 'How to Dominate Search Rankings in 2025: The Complete Guide',
    excerpt: 'Discover the latest SEO strategies and algorithm updates that will help your website rank #1 on Google in 2025.'
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
              A technical SEO audit is the foundation of any successful search strategy. Hidden
              crawl errors, broken redirects, slow page speeds, and misconfigured tags can silently
              erode your rankings. This guide walks you through every critical area to inspect and fix.
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
    question: "How often should I perform a technical SEO audit?",
    answer: "A comprehensive technical SEO audit should be performed at least once per quarter. However, you should continuously monitor key metrics like crawl errors, page speed, and indexation status using tools like Google Search Console. Major site changes such as redesigns, migrations, or CMS updates warrant an immediate audit."
  },
  {
    question: "What tools do I need for a technical SEO audit?",
    answer: "Essential tools include Google Search Console (free), Google PageSpeed Insights (free), Screaming Frog SEO Spider (free up to 500 URLs), and a site crawling tool like Ahrefs, SEMrush, or Sitebulb. For schema validation, use Google's Rich Results Test and Schema.org's validator. GTmetrix and WebPageTest are excellent for in-depth performance analysis."
  },
  {
    question: "What are the most critical technical SEO issues to fix first?",
    answer: "Prioritize issues that prevent search engines from crawling and indexing your content: blocked pages in robots.txt, noindex tags on important pages, broken redirects, and server errors (5xx). Next, address page speed problems affecting Core Web Vitals, then move on to duplicate content, missing canonical tags, and structured data errors."
  },
  {
    question: "Can technical SEO issues cause a sudden drop in rankings?",
    answer: "Yes, certain technical issues can cause dramatic ranking drops. Common culprits include accidental noindex directives deployed to production, robots.txt blocking critical pages, server downtime or persistent 5xx errors, a sudden spike in 404 errors from deleted pages, and HTTPS migration issues like mixed content or incorrect redirects."
  },
  {
    question: "How long does a full technical SEO audit take?",
    answer: "The duration depends on the size and complexity of the website. A small site (under 500 pages) can be audited in 1-2 days. Medium sites (500-5,000 pages) typically take 3-5 days. Large enterprise sites (10,000+ pages) may require 1-3 weeks for a thorough audit. Automated crawling tools significantly speed up the data collection phase, but manual analysis of findings always requires dedicated time."
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
              <a href="#what-is-technical-seo-audit" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                What is a Technical SEO Audit?
              </a>
              <a href="#crawlability-indexation" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Crawlability and Indexation Issues
              </a>
              <a href="#site-architecture" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Site Architecture and URL Structure
              </a>
              <a href="#sitemaps-robots" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                XML Sitemaps and Robots.txt
              </a>
              <a href="#https-security" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                HTTPS and Security
              </a>
              <a href="#page-speed" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Page Speed and Performance
              </a>
              <a href="#mobile-optimization" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Mobile Optimization
              </a>
              <a href="#structured-data" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Structured Data and Schema Markup
              </a>
              <a href="#canonical-tags" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Canonical Tags and Duplicate Content
              </a>
              <a href="#international-seo" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                International SEO Technical Considerations
              </a>
              <a href="#audit-process" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Step-by-Step Audit Process
              </a>
            </nav>
          </div>

          <h2 id="what-is-technical-seo-audit">What is a Technical SEO Audit?</h2>

          <p>
            A technical SEO audit is a systematic examination of your website's infrastructure to identify
            issues that prevent search engines from effectively crawling, indexing, and ranking your content.
            Unlike content audits or backlink analysis, technical SEO focuses on the behind-the-scenes
            elements that form the backbone of your search visibility.
          </p>

          <p>
            Think of it as a health check for your website. Just as a doctor examines vital signs to
            diagnose underlying conditions, a technical SEO audit evaluates your site's critical systems
            to uncover hidden problems that may be silently hurting your rankings.
          </p>

          <p>
            A thorough technical audit covers server configuration, site architecture, crawlability,
            page speed, mobile friendliness, security, structured data, and much more. The goal is to
            ensure that search engine bots can access, understand, and properly index every page that
            matters to your business.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="crawlability-indexation">Crawlability and Indexation Issues</h2>

          <p>
            If search engines cannot crawl your pages, they cannot index them. If they cannot index them,
            your pages will never appear in search results. Crawlability is the single most fundamental
            aspect of technical SEO.
          </p>

          <h3>Common Crawlability Problems</h3>

          <ul>
            <li><strong>Blocked resources:</strong> CSS, JavaScript, or image files blocked by robots.txt prevent search engines from fully rendering your pages</li>
            <li><strong>Orphan pages:</strong> Pages with no internal links pointing to them are difficult for crawlers to discover</li>
            <li><strong>Crawl budget waste:</strong> Search engines allocate a limited crawl budget to each site; wasting it on low-value pages means important pages may not get crawled</li>
            <li><strong>Redirect chains:</strong> Multiple consecutive redirects slow down crawling and dilute link equity</li>
            <li><strong>Server errors (5xx):</strong> Persistent server errors signal to search engines that your site is unreliable</li>
          </ul>

          <h3>Indexation Diagnostics</h3>

          <p>
            Use Google Search Console's Index Coverage report to identify pages that are indexed, excluded,
            or encountering errors. Pay close attention to:
          </p>

          <ul>
            <li><strong>Crawled but not indexed:</strong> Google found your page but decided it was not valuable enough to index</li>
            <li><strong>Discovered but not crawled:</strong> Google knows the URL exists but has not yet visited it, often a crawl budget issue</li>
            <li><strong>Excluded by noindex:</strong> Verify that no important pages have been accidentally tagged with a noindex directive</li>
            <li><strong>Duplicate without canonical:</strong> Pages Google considers duplicates that lack a proper canonical tag</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="site-architecture">Site Architecture and URL Structure</h2>

          <p>
            Your site's architecture determines how efficiently search engines can discover and understand
            your content hierarchy. A well-organized site architecture improves both crawlability and user
            experience.
          </p>

          <h3>Flat vs. Deep Architecture</h3>

          <p>
            Aim for a flat site architecture where every important page is reachable within three clicks
            from the homepage. Deep architectures bury content under many layers of navigation, making
            it harder for both users and search engines to find.
          </p>

          <h3>URL Best Practices</h3>

          <ul>
            <li><strong>Keep URLs short and descriptive:</strong> Use readable words rather than cryptic parameters or IDs</li>
            <li><strong>Use hyphens as separators:</strong> Hyphens are the standard word separator in URLs; avoid underscores or spaces</li>
            <li><strong>Maintain consistent structure:</strong> Follow a logical pattern like /category/subcategory/page-name</li>
            <li><strong>Avoid dynamic parameters when possible:</strong> Clean, static URLs are easier for search engines to process</li>
            <li><strong>Use lowercase letters only:</strong> Mixed case URLs can create duplicate content issues on case-sensitive servers</li>
          </ul>

          <h3>Internal Linking</h3>

          <p>
            Internal links distribute link equity throughout your site and help search engines understand
            content relationships. Audit your internal linking structure to ensure:
          </p>

          <ul>
            <li>Every important page receives internal links from relevant pages</li>
            <li>Anchor text is descriptive and includes relevant keywords naturally</li>
            <li>No important pages are orphaned (zero internal links pointing to them)</li>
            <li>Navigation menus and breadcrumbs provide clear pathways to key content</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="sitemaps-robots">XML Sitemaps and Robots.txt</h2>

          <p>
            XML sitemaps and robots.txt are your primary tools for communicating with search engine crawlers.
            They tell bots what to crawl, what to skip, and where to find your most important content.
          </p>

          <h3>XML Sitemap Best Practices</h3>

          <ul>
            <li><strong>Include only indexable pages:</strong> Do not list pages blocked by robots.txt or tagged with noindex</li>
            <li><strong>Keep sitemaps under 50,000 URLs:</strong> Use sitemap index files for larger sites</li>
            <li><strong>Update lastmod dates accurately:</strong> Only change the lastmod when page content actually changes</li>
            <li><strong>Submit sitemaps in Search Console:</strong> Manually submit your sitemap and monitor for errors</li>
            <li><strong>Use dynamic sitemaps:</strong> Auto-generate sitemaps to keep them in sync with your actual content</li>
          </ul>

          <h3>Robots.txt Configuration</h3>

          <p>
            A misconfigured robots.txt file can block search engines from your most important content.
            Review your robots.txt to ensure:
          </p>

          <ul>
            <li>Critical pages and resources (CSS, JS, images) are not blocked</li>
            <li>Low-value pages (admin panels, internal search results, staging URLs) are properly blocked</li>
            <li>The sitemap location is specified with a Sitemap directive</li>
            <li>There are no conflicting rules that might confuse crawlers</li>
          </ul>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Robots.txt Quick Check:</h4>
            <ul className="space-y-2">
              <li>&#9744; Robots.txt is accessible at /robots.txt</li>
              <li>&#9744; No critical pages or directories are blocked</li>
              <li>&#9744; CSS, JS, and image files are crawlable</li>
              <li>&#9744; Sitemap URL is referenced in robots.txt</li>
              <li>&#9744; Staging or development environments are properly blocked</li>
            </ul>
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="https-security">HTTPS and Security</h2>

          <p>
            HTTPS has been a confirmed Google ranking signal since 2014, and its importance continues
            to grow. Beyond rankings, users and browsers now expect secure connections as standard.
          </p>

          <h3>SSL/TLS Configuration</h3>

          <ul>
            <li><strong>Valid SSL certificate:</strong> Ensure your certificate is current, properly installed, and covers all subdomains</li>
            <li><strong>Force HTTPS:</strong> All HTTP URLs should 301 redirect to their HTTPS equivalents</li>
            <li><strong>No mixed content:</strong> Every resource on your pages (images, scripts, stylesheets) must be loaded over HTTPS</li>
            <li><strong>HSTS headers:</strong> Implement HTTP Strict Transport Security to prevent protocol downgrade attacks</li>
          </ul>

          <h3>Security Headers</h3>

          <p>
            While not direct ranking factors, security headers protect your users and signal a
            well-maintained website:
          </p>

          <ul>
            <li><strong>Content-Security-Policy:</strong> Prevents cross-site scripting (XSS) and data injection attacks</li>
            <li><strong>X-Content-Type-Options:</strong> Prevents MIME type sniffing</li>
            <li><strong>X-Frame-Options:</strong> Protects against clickjacking attacks</li>
            <li><strong>Referrer-Policy:</strong> Controls how much referrer information is shared</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="page-speed">Page Speed and Performance</h2>

          <p>
            Page speed is both a ranking factor and a critical user experience metric. Slow pages lead
            to higher bounce rates, lower conversions, and reduced crawl efficiency. Google's Core Web
            Vitals make performance a measurable, directly impactful component of SEO.
          </p>

          <h3>Core Web Vitals Targets</h3>

          <ul>
            <li><strong>Largest Contentful Paint (LCP):</strong> Under 2.5 seconds for a "good" rating</li>
            <li><strong>Interaction to Next Paint (INP):</strong> Under 200 milliseconds for responsive interactions</li>
            <li><strong>Cumulative Layout Shift (CLS):</strong> Under 0.1 to prevent unexpected layout shifts</li>
          </ul>

          <h3>Performance Optimization Checklist</h3>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Speed Optimization Tasks:</h4>
            <ul className="space-y-2">
              <li>&#9744; Compress and serve images in next-gen formats (WebP, AVIF)</li>
              <li>&#9744; Minify and bundle CSS and JavaScript files</li>
              <li>&#9744; Enable browser caching with appropriate cache-control headers</li>
              <li>&#9744; Implement a Content Delivery Network (CDN)</li>
              <li>&#9744; Defer non-critical JavaScript and CSS</li>
              <li>&#9744; Reduce server response time (TTFB under 200ms)</li>
              <li>&#9744; Eliminate render-blocking resources</li>
              <li>&#9744; Preload critical assets (fonts, hero images)</li>
            </ul>
          </div>

          <p>
            Use Google PageSpeed Insights, Lighthouse, and WebPageTest to measure performance. Test on
            both mobile and desktop, and prioritize mobile performance since Google uses mobile-first
            indexing.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="mobile-optimization">Mobile Optimization</h2>

          <p>
            With Google's mobile-first indexing, the mobile version of your website is the primary version
            used for ranking and indexing. A site that performs poorly on mobile devices is at a significant
            disadvantage in search results.
          </p>

          <h3>Mobile-Friendly Requirements</h3>

          <ul>
            <li><strong>Responsive design:</strong> Your site must adapt seamlessly to all screen sizes without horizontal scrolling</li>
            <li><strong>Tap targets:</strong> Buttons and links must be at least 48x48 pixels with adequate spacing between them</li>
            <li><strong>Readable text:</strong> Font sizes should be at least 16px for body text without requiring zoom</li>
            <li><strong>Viewport meta tag:</strong> Ensure your pages include a properly configured viewport meta tag</li>
            <li><strong>No intrusive interstitials:</strong> Avoid pop-ups that cover the main content on mobile, as Google penalizes this</li>
          </ul>

          <h3>Mobile Performance Considerations</h3>

          <p>
            Mobile devices typically have slower processors and network connections than desktop computers.
            Optimize specifically for mobile by:
          </p>

          <ul>
            <li>Reducing JavaScript execution time</li>
            <li>Using responsive images with srcset for different screen sizes</li>
            <li>Implementing lazy loading for below-the-fold images and videos</li>
            <li>Minimizing DOM size to reduce rendering time</li>
            <li>Testing on real devices, not just desktop simulators</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="structured-data">Structured Data and Schema Markup</h2>

          <p>
            Structured data helps search engines understand the meaning and context of your content.
            Properly implemented schema markup can earn rich snippets, knowledge panels, and other
            enhanced search features that dramatically increase click-through rates.
          </p>

          <h3>Essential Schema Types</h3>

          <ul>
            <li><strong>Organization:</strong> Establishes your brand identity in search results</li>
            <li><strong>WebSite:</strong> Enables sitelinks search box and site name in results</li>
            <li><strong>BreadcrumbList:</strong> Displays breadcrumb navigation in search snippets</li>
            <li><strong>Article / BlogPosting:</strong> Enhances how blog content appears in search</li>
            <li><strong>Product:</strong> Enables price, availability, and review stars in results</li>
            <li><strong>LocalBusiness:</strong> Critical for local SEO and Google Maps visibility</li>
            <li><strong>FAQPage:</strong> Generates expandable FAQ sections directly in search results</li>
            <li><strong>HowTo:</strong> Displays step-by-step instructions in rich results</li>
          </ul>

          <h3>Structured Data Validation</h3>

          <p>
            Always validate your structured data implementation using these tools:
          </p>

          <ul>
            <li>Google's Rich Results Test to verify eligibility for rich features</li>
            <li>Schema Markup Validator (schema.org) for syntax validation</li>
            <li>Google Search Console's Enhancements reports for ongoing monitoring</li>
            <li>Structured Data Testing Tool for detailed error diagnostics</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="canonical-tags">Canonical Tags and Duplicate Content</h2>

          <p>
            Duplicate content confuses search engines and dilutes ranking signals across multiple
            versions of the same page. Canonical tags are your primary defense against duplicate
            content issues, telling search engines which version of a page is the authoritative one.
          </p>

          <h3>Common Duplicate Content Scenarios</h3>

          <ul>
            <li><strong>WWW vs. non-WWW:</strong> Both example.com and www.example.com resolve to the same content</li>
            <li><strong>HTTP vs. HTTPS:</strong> Both protocols serving identical pages</li>
            <li><strong>Trailing slash variations:</strong> /page and /page/ both returning content</li>
            <li><strong>URL parameters:</strong> Sorting, filtering, or tracking parameters creating multiple URLs for the same content</li>
            <li><strong>Pagination:</strong> Paginated content that overlaps or duplicates across pages</li>
            <li><strong>Print-friendly pages:</strong> Separate print versions duplicating main content</li>
          </ul>

          <h3>Canonical Tag Best Practices</h3>

          <ul>
            <li>Every page should have a self-referencing canonical tag, even if it is not duplicated</li>
            <li>Use absolute URLs in canonical tags, not relative paths</li>
            <li>Ensure canonical tags point to pages that return a 200 status code</li>
            <li>Do not canonical a page to a URL that is noindexed or blocked by robots.txt</li>
            <li>Be consistent: canonical tags should match the URL in your sitemap</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="international-seo">International SEO Technical Considerations</h2>

          <p>
            If your website targets multiple countries or languages, proper technical implementation
            is essential to ensure search engines serve the right version of your content to the right
            audience.
          </p>

          <h3>Hreflang Implementation</h3>

          <p>
            Hreflang tags tell search engines which language and regional version of a page to show
            to users in different locations. Common implementation mistakes include:
          </p>

          <ul>
            <li><strong>Missing return tags:</strong> Every hreflang annotation must be reciprocal; if page A references page B, page B must reference page A</li>
            <li><strong>Incorrect language codes:</strong> Use ISO 639-1 language codes and ISO 3166-1 Alpha 2 country codes</li>
            <li><strong>Missing x-default:</strong> Always include an x-default tag for users who do not match any specified language or region</li>
            <li><strong>Conflicting canonicals:</strong> Canonical tags should not point to a different language version of the page</li>
          </ul>

          <h3>URL Structure for International Sites</h3>

          <ul>
            <li><strong>ccTLDs (example.fr, example.de):</strong> Strongest geo-targeting signal but most expensive to maintain</li>
            <li><strong>Subdirectories (example.com/fr/):</strong> Easy to implement and maintain, shares domain authority</li>
            <li><strong>Subdomains (fr.example.com):</strong> More separation than subdirectories but may dilute domain authority</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="audit-process">Step-by-Step Audit Process</h2>

          <p>
            Follow this structured process to conduct a thorough technical SEO audit from start to finish.
            Breaking the audit into distinct phases ensures nothing is overlooked.
          </p>

          <h3>Phase 1: Crawl and Data Collection</h3>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Data Collection Checklist:</h4>
            <ul className="space-y-2">
              <li>&#9744; Run a full site crawl with Screaming Frog or Sitebulb</li>
              <li>&#9744; Export Google Search Console data (coverage, performance, Core Web Vitals)</li>
              <li>&#9744; Run PageSpeed Insights tests on key page templates</li>
              <li>&#9744; Check robots.txt and XML sitemap for errors</li>
              <li>&#9744; Test mobile usability across multiple devices</li>
              <li>&#9744; Validate structured data on key pages</li>
            </ul>
          </div>

          <h3>Phase 2: Issue Identification and Prioritization</h3>

          <p>
            Organize discovered issues by severity and impact. Use this priority framework:
          </p>

          <ul>
            <li><strong>Critical (fix immediately):</strong> Issues preventing crawling or indexing of important pages, server errors, security vulnerabilities</li>
            <li><strong>High (fix within 1 week):</strong> Broken redirects, missing canonical tags on high-traffic pages, Core Web Vitals failures</li>
            <li><strong>Medium (fix within 1 month):</strong> Missing structured data, suboptimal internal linking, image optimization</li>
            <li><strong>Low (fix when possible):</strong> Minor duplicate title tags, non-critical redirect chains, cosmetic URL issues</li>
          </ul>

          <h3>Phase 3: Implementation and Verification</h3>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Implementation Workflow:</h4>
            <ul className="space-y-2">
              <li>&#9744; Document each issue with its current state and expected fix</li>
              <li>&#9744; Implement fixes in a staging environment first</li>
              <li>&#9744; Verify fixes do not introduce new issues</li>
              <li>&#9744; Deploy to production and re-crawl affected pages</li>
              <li>&#9744; Monitor Google Search Console for improvement signals</li>
              <li>&#9744; Re-test Core Web Vitals and page speed after changes</li>
            </ul>
          </div>

          <h3>Phase 4: Ongoing Monitoring</h3>

          <p>
            A technical SEO audit is not a one-time event. Establish ongoing monitoring to catch
            issues before they impact rankings:
          </p>

          <ul>
            <li>Set up automated crawls on a weekly or bi-weekly schedule</li>
            <li>Configure Google Search Console alerts for coverage issues</li>
            <li>Monitor Core Web Vitals trends in the CrUX dashboard</li>
            <li>Track server uptime and response times</li>
            <li>Review crawl stats regularly to detect budget waste</li>
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
            A technical SEO audit is not optional; it is a necessity for any website that depends on
            organic search traffic. The issues uncovered during an audit often represent the difference
            between a site that ranks on page one and one that languishes in obscurity.
          </p>

          <p>
            Start with the highest-impact issues first: crawlability, indexation, and page speed.
            Then methodically work through site architecture, security, structured data, and
            internationalization. By following the step-by-step process outlined in this guide,
            you will have a clear roadmap for turning technical liabilities into ranking advantages.
          </p>

          <p>
            Remember that technical SEO is an ongoing discipline. Search engines evolve, your site
            changes, and new issues emerge. Build regular audits into your workflow, and you will
            maintain the technical foundation your rankings depend on.
          </p>

          <div className="not-prose bg-cream border border-border-strong rounded-none p-8 my-12">
            <h3 className="font-heading text-xl font-semibold mb-4">Need a Professional Technical SEO Audit?</h3>
            <p className="text-slate mb-6">
              Our technical SEO specialists will crawl your entire site, identify every issue holding
              back your rankings, and deliver a prioritized action plan. Get a comprehensive audit
              tailored to your website.
            </p>
            <Button href="/contact">
              Get Your Free Technical Audit
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
          headline: 'Technical SEO Audit: Find & Fix Issues Hurting Your Rankings | TheProjectSEO',
          description:
            'Learn how to perform a comprehensive technical SEO audit to identify and fix crawlability, indexation, site speed, and security issues that are hurting your search rankings.',
          url: 'https://theprojectseo.com/blog/technical-seo-audit',
          author: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
          },
          publisher: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          datePublished: '2024-11-01',
          dateModified: '2025-01-15',
          keywords: 'Search engine optimization, Web crawler, Sitemaps, Search engine, Computing',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Web crawler',
              sameAs: 'https://www.wikidata.org/wiki/Q45842',
            },
            {
              '@type': 'Thing',
              name: 'Sitemaps',
              sameAs: 'https://www.wikidata.org/wiki/Q1343954',
            },
            {
              '@type': 'Thing',
              name: 'Search engine',
              sameAs: 'https://www.wikidata.org/wiki/Q4182287',
            },
            {
              '@type': 'Thing',
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
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
