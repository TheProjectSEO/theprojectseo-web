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
  title: 'Core Web Vitals Optimization: Boost Your Page Speed & Rankings | TheProjectSEO',
  description:
    'Learn how to optimize Core Web Vitals (LCP, INP, CLS) to improve page speed, user experience, and search engine rankings. Expert technical SEO guide.',
  alternates: {
    canonical: '/blog/core-web-vitals-optimization',
  },
  openGraph: {
    title: 'Core Web Vitals Optimization: Boost Your Page Speed & Rankings',
    description: 'Learn how to optimize Core Web Vitals (LCP, INP, CLS) to improve page speed, user experience, and search engine rankings.',
    type: 'article',
    publishedTime: '2024-12-10T00:00:00.000Z',
    authors: ['Sarah Kim'],
  },
}

const post = {
  title: 'Core Web Vitals Optimization: Boost Your Page Speed & Rankings',
  publishedAt: '2024-12-10',
  author: {
    name: 'Sarah Kim',
    role: 'Technical SEO Specialist',
    image: 'bg-green-500'
  },
  category: 'Technical SEO',
  readTime: '10 min read'
}

const relatedPosts = [
  {
    slug: 'dominate-search-rankings-2025',
    title: 'How to Dominate Search Rankings in 2025: The Complete Guide',
    excerpt: 'Discover the latest SEO strategies and algorithm updates that will help your website rank #1 on Google in 2025.'
  },
  {
    slug: 'technical-seo-audit',
    title: 'Technical SEO Audit: The Complete Step-by-Step Guide',
    excerpt: 'Learn how to perform a comprehensive technical SEO audit to identify and fix issues hurting your rankings.'
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
              Core Web Vitals are Google's key metrics for measuring real-world user experience on the web.
              Optimizing LCP, INP, and CLS can dramatically improve both your page speed and your search
              engine rankings. Here's everything you need to know.
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
    question: "What are good Core Web Vitals scores?",
    answer: "Google considers the following scores as 'good': Largest Contentful Paint (LCP) under 2.5 seconds, Interaction to Next Paint (INP) under 200 milliseconds, and Cumulative Layout Shift (CLS) under 0.1. Scores between good and poor are considered 'needs improvement.' You should aim for the 75th percentile of your real user data to meet these thresholds."
  },
  {
    question: "Do Core Web Vitals directly affect search rankings?",
    answer: "Yes, Core Web Vitals are a confirmed Google ranking factor as part of the page experience signals. However, they are one of many ranking factors. High-quality, relevant content can still rank well even with suboptimal vitals, but improving your scores gives you a competitive edge, especially when content quality is similar between competing pages."
  },
  {
    question: "What is the difference between FID and INP?",
    answer: "First Input Delay (FID) measured only the delay of the first user interaction on a page, while Interaction to Next Paint (INP) measures the responsiveness of all interactions throughout the entire page lifecycle. Google replaced FID with INP as a Core Web Vital in March 2024 because INP provides a more comprehensive picture of a page's overall interactivity and responsiveness."
  },
  {
    question: "How often should I check my Core Web Vitals?",
    answer: "You should monitor Core Web Vitals continuously using tools like Google Search Console and real user monitoring (RUM) solutions. At a minimum, check your scores weekly. After making significant site changes, deployments, or content updates, always verify that your Core Web Vitals haven't regressed. Set up automated alerts if possible."
  },
  {
    question: "Can a slow hosting provider hurt my Core Web Vitals?",
    answer: "Absolutely. Your hosting provider's server response time directly impacts Time to First Byte (TTFB), which in turn affects Largest Contentful Paint (LCP). A slow server can add seconds to your page load time. Consider upgrading to a faster hosting plan, using a CDN to serve content from edge locations closer to users, or switching to a provider with better infrastructure for your traffic levels."
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
              <a href="#what-are-core-web-vitals" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                What Are Core Web Vitals?
              </a>
              <a href="#why-core-web-vitals-matter" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Why Core Web Vitals Matter for SEO Rankings
              </a>
              <a href="#measuring-core-web-vitals" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                How to Measure Your Core Web Vitals
              </a>
              <a href="#optimizing-lcp" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Optimizing Largest Contentful Paint (LCP)
              </a>
              <a href="#optimizing-inp" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Optimizing Interaction to Next Paint (INP)
              </a>
              <a href="#optimizing-cls" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Optimizing Cumulative Layout Shift (CLS)
              </a>
              <a href="#advanced-techniques" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Advanced Performance Optimization Techniques
              </a>
              <a href="#common-mistakes" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Common Core Web Vitals Mistakes
              </a>
              <a href="#tools-resources" className="block text-accent hover:text-accent-hover font-medium transition-colors">
                Tools & Resources
              </a>
            </nav>
          </div>

          <h2 id="what-are-core-web-vitals">What Are Core Web Vitals?</h2>

          <p>
            Core Web Vitals are a set of specific metrics that Google uses to evaluate the real-world
            user experience of a web page. Introduced as part of Google's page experience update, these
            metrics focus on three critical aspects of user experience: loading performance, interactivity,
            and visual stability.
          </p>

          <p>
            As of 2024, the three Core Web Vitals are:
          </p>

          <ul>
            <li><strong>Largest Contentful Paint (LCP):</strong> Measures loading performance. LCP marks the point in the page load timeline when the largest content element becomes visible in the viewport. A good LCP score is 2.5 seconds or less.</li>
            <li><strong>Interaction to Next Paint (INP):</strong> Measures interactivity and responsiveness. INP observes the latency of all user interactions during the page lifecycle and reports a single value that all (or nearly all) interactions fell below. A good INP score is 200 milliseconds or less. INP replaced First Input Delay (FID) as a Core Web Vital in March 2024.</li>
            <li><strong>Cumulative Layout Shift (CLS):</strong> Measures visual stability. CLS quantifies how much the visible content of a page shifts unexpectedly during its entire lifespan. A good CLS score is 0.1 or less.</li>
          </ul>

          <p>
            Together, these three metrics give you a comprehensive picture of how users actually experience
            your website. Optimizing for them means creating faster, more responsive, and more visually
            stable pages.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="why-core-web-vitals-matter">Why Core Web Vitals Matter for SEO Rankings</h2>

          <p>
            Google has officially confirmed that Core Web Vitals are a ranking signal. They form a key part
            of the broader page experience signals that Google uses to evaluate and rank web pages. Here's
            why they matter:
          </p>

          <ul>
            <li><strong>Direct ranking impact:</strong> Pages with better Core Web Vitals scores have a measurable ranking advantage, especially in competitive SERPs where content quality is similar across top results.</li>
            <li><strong>User experience correlation:</strong> Pages that load faster and respond to interactions quickly see lower bounce rates, higher engagement, and more conversions.</li>
            <li><strong>Mobile-first indexing:</strong> Since Google primarily uses the mobile version of your site for indexing, mobile Core Web Vitals scores are particularly important.</li>
            <li><strong>Top Stories and visual indicators:</strong> Good Core Web Vitals are required for eligibility in certain Google Search features like Top Stories on mobile.</li>
          </ul>

          <p>
            Research from Google shows that when a site meets the Core Web Vitals thresholds, users are 24%
            less likely to abandon page loads. That translates directly into more traffic, more engagement,
            and more revenue.
          </p>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="measuring-core-web-vitals">How to Measure Your Core Web Vitals</h2>

          <p>
            Before you can optimize, you need to understand where you stand. There are two types of Core
            Web Vitals data: field data (from real users) and lab data (from simulated environments). Both
            are valuable, but Google uses field data for ranking purposes.
          </p>

          <h3>Field Data Tools (Real User Metrics)</h3>

          <ul>
            <li><strong>Google Search Console:</strong> The Core Web Vitals report in GSC shows how your pages perform based on real user data from the Chrome User Experience Report (CrUX). This is the most authoritative source for understanding your ranking impact.</li>
            <li><strong>PageSpeed Insights:</strong> Provides both field data (from CrUX) and lab data (from Lighthouse) for any URL. The field data section shows your real-world performance.</li>
            <li><strong>Chrome User Experience Report (CrUX):</strong> The underlying dataset that powers field data in other tools. You can query it directly via BigQuery or the CrUX API for granular analysis.</li>
          </ul>

          <h3>Lab Data Tools (Simulated Testing)</h3>

          <ul>
            <li><strong>Lighthouse:</strong> Built into Chrome DevTools, Lighthouse runs a simulated page load and provides detailed performance diagnostics along with specific optimization recommendations.</li>
            <li><strong>WebPageTest:</strong> An advanced testing tool that allows you to test from different locations, devices, and network conditions. Provides waterfall charts and filmstrip views for deep analysis.</li>
            <li><strong>GTmetrix:</strong> Combines Lighthouse data with additional performance metrics and provides historical tracking so you can monitor changes over time.</li>
          </ul>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Pro Tip:</h4>
            <p className="text-slate text-sm">
              Always prioritize field data over lab data when assessing your Core Web Vitals for SEO purposes.
              Lab data is useful for debugging and testing changes, but Google uses field data (the 75th
              percentile of real user experiences) as its ranking signal.
            </p>
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="optimizing-lcp">Optimizing Largest Contentful Paint (LCP)</h2>

          <p>
            LCP is often the most impactful Core Web Vital to optimize because it directly measures how
            quickly users see your main content. The LCP element is typically a hero image, a large text
            block, or a video poster image.
          </p>

          <h3>Image Optimization</h3>

          <p>
            Images are the most common LCP element. Optimizing them can yield massive improvements:
          </p>

          <ul>
            <li><strong>Use modern formats:</strong> Serve images in WebP or AVIF format, which offer significantly better compression than JPEG or PNG while maintaining quality.</li>
            <li><strong>Responsive images:</strong> Use the srcset attribute to serve appropriately sized images for each device viewport, avoiding unnecessarily large downloads on mobile.</li>
            <li><strong>Preload critical images:</strong> Add a &lt;link rel="preload"&gt; tag for your LCP image so the browser starts downloading it as early as possible.</li>
            <li><strong>Compress aggressively:</strong> Use tools like Squoosh, ImageOptim, or automated build pipelines to reduce file sizes without perceptible quality loss.</li>
          </ul>

          <h3>Server Response Time</h3>

          <ul>
            <li><strong>Use a CDN:</strong> Serve content from edge locations geographically close to your users to minimize network latency.</li>
            <li><strong>Optimize server-side rendering:</strong> Reduce Time to First Byte (TTFB) by optimizing database queries, using caching layers, and streamlining server-side logic.</li>
            <li><strong>Enable HTTP/2 or HTTP/3:</strong> Modern protocols allow multiplexed connections and header compression, reducing page load times.</li>
          </ul>

          <h3>Render-Blocking Resources</h3>

          <ul>
            <li><strong>Inline critical CSS:</strong> Extract and inline the CSS needed for above-the-fold content so it renders without waiting for external stylesheets.</li>
            <li><strong>Defer non-critical JavaScript:</strong> Use async or defer attributes on script tags to prevent JavaScript from blocking the initial render.</li>
            <li><strong>Eliminate unused CSS:</strong> Use tools like PurgeCSS to remove CSS rules that aren't used on the page, reducing stylesheet size.</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="optimizing-inp">Optimizing Interaction to Next Paint (INP)</h2>

          <p>
            INP measures how quickly your page responds to user interactions like clicks, taps, and keyboard
            inputs throughout the entire page session. Unlike FID, which only measured the first interaction,
            INP captures the overall responsiveness of your page.
          </p>

          <h3>JavaScript Optimization</h3>

          <ul>
            <li><strong>Break up long tasks:</strong> Any JavaScript task that runs for more than 50ms blocks the main thread and delays interaction responses. Use requestIdleCallback or setTimeout to break long tasks into smaller chunks.</li>
            <li><strong>Reduce JavaScript payload:</strong> Audit your bundles and remove unused libraries, polyfills, and code. Smaller bundles parse and execute faster.</li>
            <li><strong>Avoid layout thrashing:</strong> Batch DOM reads and writes to prevent forced synchronous layouts that slow down interaction handling.</li>
          </ul>

          <h3>Code Splitting</h3>

          <ul>
            <li><strong>Route-based splitting:</strong> Load JavaScript only for the current page or route, deferring code for other parts of your application.</li>
            <li><strong>Component-level splitting:</strong> Use dynamic imports to lazy-load components that aren't immediately visible, such as modals, carousels, and below-the-fold sections.</li>
            <li><strong>Third-party script management:</strong> Load analytics, chat widgets, and other third-party scripts asynchronously or after the main content has loaded.</li>
          </ul>

          <h3>Event Handler Optimization</h3>

          <ul>
            <li><strong>Debounce and throttle:</strong> For frequent events like scroll, resize, and input, use debouncing or throttling to limit how often handlers execute.</li>
            <li><strong>Use passive event listeners:</strong> For scroll and touch events, mark listeners as passive to tell the browser they won't call preventDefault(), allowing smoother scrolling.</li>
            <li><strong>Offload work to web workers:</strong> Move computationally expensive operations off the main thread using Web Workers so they don't block user interactions.</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="optimizing-cls">Optimizing Cumulative Layout Shift (CLS)</h2>

          <p>
            CLS measures unexpected layout shifts that occur during the entire lifespan of a page. Nothing
            frustrates users more than clicking a button only to have the page shift and accidentally
            clicking something else. Here's how to eliminate layout shifts.
          </p>

          <h3>Set Explicit Dimensions</h3>

          <ul>
            <li><strong>Images and videos:</strong> Always include width and height attributes on img and video elements. Modern browsers use these to reserve the correct amount of space before the media loads.</li>
            <li><strong>Ad slots and embeds:</strong> Reserve space for dynamically loaded content like ads, iframes, and social media embeds using CSS aspect-ratio or min-height.</li>
            <li><strong>Use CSS aspect-ratio:</strong> The aspect-ratio property lets you define a preferred aspect ratio for elements, preventing layout shifts when content loads.</li>
          </ul>

          <h3>Font Loading Strategy</h3>

          <ul>
            <li><strong>Use font-display: swap:</strong> This CSS property tells the browser to show a fallback font immediately and swap in the web font once it loads, preventing invisible text.</li>
            <li><strong>Preload critical fonts:</strong> Add &lt;link rel="preload"&gt; for fonts used above the fold to start downloading them early.</li>
            <li><strong>Match fallback font metrics:</strong> Use tools like the Font Style Matcher to choose fallback fonts with similar metrics to your web fonts, minimizing the visual shift when fonts swap.</li>
            <li><strong>Self-host fonts:</strong> Hosting fonts on your own domain (or CDN) eliminates the extra DNS lookup and connection required when loading from Google Fonts or other external services.</li>
          </ul>

          <h3>Dynamic Content Handling</h3>

          <ul>
            <li><strong>Avoid inserting content above existing content:</strong> When dynamically adding elements to the page, insert them below the current viewport or use CSS transforms/animations that don't trigger layout shifts.</li>
            <li><strong>Use CSS containment:</strong> The contain property can limit the layout impact of dynamic changes within a specific container, preventing shifts from propagating.</li>
            <li><strong>Skeleton screens:</strong> Display placeholder layouts while content loads to reserve space and provide a better perceived loading experience.</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="advanced-techniques">Advanced Performance Optimization Techniques</h2>

          <h3>Resource Hints and Preloading</h3>

          <ul>
            <li><strong>Preconnect to origins:</strong> Use &lt;link rel="preconnect"&gt; to establish early connections to important third-party domains, reducing latency for subsequent requests.</li>
            <li><strong>Prefetch next-page resources:</strong> If you can predict which page a user will navigate to next, use &lt;link rel="prefetch"&gt; to load its resources in advance.</li>
            <li><strong>DNS prefetch:</strong> Use &lt;link rel="dns-prefetch"&gt; for domains you'll need later but don't need to fully preconnect to yet.</li>
          </ul>

          <h3>Caching Strategies</h3>

          <ul>
            <li><strong>Set proper Cache-Control headers:</strong> Use long cache lifetimes for static assets with content-based hashing in filenames, and shorter lifetimes for dynamic content.</li>
            <li><strong>Implement service workers:</strong> Use a service worker to cache critical resources and serve them from the cache on repeat visits, dramatically improving load times.</li>
            <li><strong>Stale-while-revalidate:</strong> This caching strategy serves cached content immediately while fetching an updated version in the background, balancing freshness and speed.</li>
          </ul>

          <h3>Modern Web Technologies</h3>

          <ul>
            <li><strong>Use native lazy loading:</strong> The loading="lazy" attribute on images and iframes defers loading of offscreen content until the user scrolls near it.</li>
            <li><strong>Implement priority hints:</strong> The fetchpriority attribute lets you signal to the browser which resources are most important, helping it allocate bandwidth more effectively.</li>
            <li><strong>Adopt a modern image CDN:</strong> Services like Cloudinary, Imgix, or Cloudflare Images can automatically optimize, resize, and serve images in the best format for each user's browser.</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="common-mistakes">Common Core Web Vitals Mistakes</h2>

          <p>
            Even experienced developers and SEO professionals make these frequent mistakes when optimizing
            Core Web Vitals. Avoid these pitfalls to ensure your optimization efforts are effective:
          </p>

          <ul>
            <li><strong>Optimizing only for lab data:</strong> Lab data (Lighthouse) can look great while real users still experience poor performance. Always validate improvements with field data from CrUX or real user monitoring.</li>
            <li><strong>Lazy loading the LCP image:</strong> Adding loading="lazy" to your hero or LCP image actually hurts performance because it delays loading the most important visual element on the page.</li>
            <li><strong>Ignoring third-party scripts:</strong> Analytics, chat widgets, advertising scripts, and social media embeds often introduce significant main thread blocking and layout shifts. Audit and manage them carefully.</li>
            <li><strong>Not testing on real devices:</strong> Lab tests on powerful developer machines don't reflect the experience of users on mid-range mobile devices with slower processors and network connections.</li>
            <li><strong>Fixing one metric at the expense of another:</strong> For example, aggressively lazy loading everything might improve LCP but cause more CLS as content pops in later. Always consider the holistic impact of changes.</li>
            <li><strong>Using excessive client-side rendering:</strong> Heavy reliance on client-side JavaScript frameworks can delay LCP and hurt INP. Consider server-side rendering or static generation for content-heavy pages.</li>
            <li><strong>Neglecting mobile performance:</strong> Since Google uses mobile-first indexing, your mobile Core Web Vitals scores are what count for rankings. Don't just optimize for desktop.</li>
          </ul>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="tools-resources">Tools & Resources</h2>

          <p>
            Here is a curated list of tools and resources to help you measure, monitor, and optimize your
            Core Web Vitals effectively:
          </p>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Measurement & Monitoring:</h4>
            <ul className="space-y-2">
              <li><strong>Google Search Console</strong> - Free Core Web Vitals reports based on real user data</li>
              <li><strong>PageSpeed Insights</strong> - Detailed field and lab data analysis for any URL</li>
              <li><strong>Chrome DevTools Performance Panel</strong> - Deep dive into runtime performance and interactions</li>
              <li><strong>Web Vitals Chrome Extension</strong> - Real-time Core Web Vitals metrics as you browse</li>
              <li><strong>WebPageTest</strong> - Advanced performance testing from multiple locations and devices</li>
            </ul>
          </div>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Optimization Tools:</h4>
            <ul className="space-y-2">
              <li><strong>Squoosh</strong> - Google's open-source image compression tool</li>
              <li><strong>Bundlephobia</strong> - Analyze the cost of adding npm packages to your bundle</li>
              <li><strong>PurgeCSS</strong> - Remove unused CSS from your stylesheets</li>
              <li><strong>Webpack Bundle Analyzer</strong> - Visualize your JavaScript bundle composition</li>
              <li><strong>Font Style Matcher</strong> - Match fallback font metrics to reduce CLS from font loading</li>
            </ul>
          </div>

          <div className="bg-cream border border-border-strong rounded-none p-6 my-8">
            <h4 className="font-semibold mb-4">Learning Resources:</h4>
            <ul className="space-y-2">
              <li><strong>web.dev/vitals</strong> - Google's official Core Web Vitals documentation</li>
              <li><strong>Chrome Developers Blog</strong> - Latest updates on web performance standards</li>
              <li><strong>Web Almanac</strong> - Annual state of the web report with performance insights</li>
              <li><strong>CrUX Dashboard</strong> - Create custom dashboards to track your site's field data over time</li>
            </ul>
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <div className="not-prose my-12">
            <FAQAccordion items={faqItems} />
          </div>

          {/* Section Divider */}
          <div className="border-t border-border my-16"></div>

          <h2 id="conclusion">Conclusion</h2>

          <p>
            Optimizing Core Web Vitals is not just about chasing better scores in testing tools. It's about
            creating a genuinely better experience for every person who visits your website. When pages load
            fast, respond instantly to interactions, and remain visually stable, users stay longer, engage
            more, and convert at higher rates.
          </p>

          <p>
            The key is to approach optimization systematically: measure your current performance with real
            user data, identify the biggest opportunities, implement changes, and verify the impact. Focus
            on LCP first since it has the most visible impact on perceived load speed, then address INP
            and CLS to round out the experience.
          </p>

          <p>
            Remember that Core Web Vitals optimization is an ongoing process, not a one-time project. As
            your site evolves with new features and content, continuously monitor your metrics and address
            regressions quickly. The competitive advantage goes to teams that build performance into their
            development culture.
          </p>

          <div className="not-prose bg-cream border border-border-strong rounded-none p-8 my-12">
            <h3 className="font-heading text-xl font-semibold mb-4">Need Help Optimizing Your Core Web Vitals?</h3>
            <p className="text-slate mb-6">
              Our technical SEO team can audit your site's performance, identify the highest-impact
              optimizations, and implement changes that improve both your Core Web Vitals scores and
              your search rankings.
            </p>
            <Button href="/contact">
              Get a Free Performance Audit
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
          headline: 'Core Web Vitals Optimization: Boost Your Page Speed & Rankings | TheProjectSEO',
          description:
            'Learn how to optimize Core Web Vitals (LCP, INP, CLS) to improve page speed, user experience, and search engine rankings. Expert technical SEO guide.',
          url: 'https://theprojectseo.com/blog/core-web-vitals-optimization',
          author: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
          },
          publisher: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          datePublished: '2024-12-10',
          dateModified: '2025-01-15',
          keywords: 'Web performance, CSS, Search engine optimization, World Wide Web, Digital media',
          about: [
            {
              '@type': 'Thing',
              name: 'Web performance',
              sameAs: 'https://www.wikidata.org/wiki/Q7978612',
            },
            {
              '@type': 'Thing',
              name: 'CSS',
              sameAs: 'https://www.wikidata.org/wiki/Q46441',
            },
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            },
            {
              '@type': 'Thing',
              name: 'Digital media',
              sameAs: 'https://www.wikidata.org/wiki/Q8064942',
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
