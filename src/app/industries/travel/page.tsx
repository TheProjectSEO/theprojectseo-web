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
  GlobeAltIcon,
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Travel & Hospitality SEO Services | Tourism Marketing | TheProjectSEO',
  description:
    'Specialized SEO services for travel and hospitality businesses. Drive organic bookings for hotels, resorts, tour operators, and travel agencies with destination-focused strategies.',
  alternates: {
    canonical: '/industries/travel',
  },
  keywords:
    'travel SEO, hospitality SEO, hotel SEO, tourism marketing, destination SEO, tour operator optimization, travel agency SEO',
  openGraph: {
    title: 'Travel & Hospitality SEO Services | Tourism Marketing',
    description:
      'Specialized SEO services for travel and hospitality businesses. Drive organic bookings for hotels, resorts, tour operators, and travel agencies with destination-focused strategies.',
    url: '/industries/travel',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel & Hospitality SEO Services | Tourism Marketing',
    description:
      'Specialized SEO services for travel and hospitality businesses. Drive organic bookings for hotels, resorts, tour operators, and travel agencies with destination-focused strategies.',
  },
}

const stats = [
  { value: '$9.5T', label: 'Global travel market size' },
  { value: '74%', label: 'Travelers who book online' },
  { value: '1.8K', label: 'Avg. monthly search volume per destination' },
  { value: '2.6%', label: 'Average booking conversion rate' },
]

const challenges = [
  {
    challenge: 'Extreme Seasonality',
    description:
      'Travel demand fluctuates drastically by season, making consistent organic traffic a challenge year-round.',
    solution:
      'We build evergreen content strategies layered with seasonal campaigns to capture demand across peak and off-peak periods.',
    icon: CalendarDaysIcon,
  },
  {
    challenge: 'OTA Competition',
    description:
      'Booking.com, Expedia, and other OTAs dominate search results, making it difficult for independent brands to compete.',
    solution:
      'We target long-tail, intent-rich keywords and build direct-booking funnels that reduce dependency on third-party platforms.',
    icon: GlobeAltIcon,
  },
  {
    challenge: 'Visual Content Dependency',
    description:
      'Travel decisions are heavily visual, yet image and video content is often under-optimized for search engines.',
    solution:
      'We optimize visual assets with structured data, alt text strategies, and image SEO to drive discovery through Google Images and rich results.',
    icon: MagnifyingGlassIcon,
  },
  {
    challenge: 'Multi-Destination Targeting',
    description:
      'Targeting dozens or hundreds of destinations simultaneously requires scalable, location-aware SEO architecture.',
    solution:
      'We design programmatic SEO frameworks and templated landing pages that scale across destinations without sacrificing quality.',
    icon: MapPinIcon,
  },
]

const services = [
  {
    name: 'Destination Keyword Research',
    description:
      'Uncover high-intent travel queries across destinations, activities, and traveler segments.',
    icon: MagnifyingGlassIcon,
    features: [
      'Destination-specific keyword mapping',
      'Traveler intent segmentation',
      'Seasonal demand forecasting',
      'Competitor keyword gap analysis',
      'Long-tail destination phrases',
      'Multi-language keyword expansion',
    ],
  },
  {
    name: 'Travel Content Strategy',
    description:
      'Create inspiring, search-optimized content that moves travelers from research to booking.',
    icon: GlobeAltIcon,
    features: [
      'Destination guide creation',
      'Itinerary and trip planning content',
      'Travel blog editorial calendars',
      'User-generated content optimization',
      'Visual storytelling for SEO',
      'FAQ and "best time to visit" pages',
    ],
  },
  {
    name: 'Hotel & Resort SEO',
    description:
      'Maximize direct bookings for hotels and resorts with property-level optimization.',
    icon: CalendarDaysIcon,
    features: [
      'Property page optimization',
      'Hotel schema markup implementation',
      'Google Business Profile management',
      'Review acquisition strategies',
      'Room type and amenity pages',
      'Local SEO for nearby attractions',
    ],
  },
  {
    name: 'Tour Operator Optimization',
    description:
      'Help tours, activities, and experiences get discovered by the right travelers at the right time.',
    icon: MapPinIcon,
    features: [
      'Tour and activity page SEO',
      'Experience schema markup',
      'Seasonal tour promotion strategies',
      'Multi-destination tour pages',
      'Booking funnel optimization',
      'Affiliate and partner SEO alignment',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Travel Market Audit',
    description:
      'We analyze your current organic presence, competitor landscape, and destination-level search opportunities to build a complete picture of your market position.',
  },
  {
    number: '02',
    title: 'Destination Strategy',
    description:
      'We develop a keyword and content strategy organized by destination, traveler segment, and booking intent, prioritized by revenue potential and seasonal timing.',
  },
  {
    number: '03',
    title: 'Content & Technical Execution',
    description:
      'Our team implements on-page optimization, creates destination content, deploys structured data, and ensures your site architecture supports scalable growth.',
  },
  {
    number: '04',
    title: 'Booking Performance Tracking',
    description:
      'We monitor organic booking revenue, destination keyword rankings, and conversion metrics, refining the strategy monthly to maximize direct bookings.',
  },
]

const caseStudy = {
  client: 'Boutique Hotel Chain',
  industry: 'Hospitality & Lodging',
  challenge:
    'A 12-property boutique hotel chain relying heavily on OTAs for bookings, with minimal organic visibility and high commission costs eroding margins.',
  solution:
    'We implemented a property-level SEO strategy with destination landing pages, hotel schema markup, review optimization, and a content hub targeting "best hotels in" and "where to stay" queries for each location.',
  results: [
    { metric: 'Organic Bookings', improvement: '+390%', timeframe: '12 months' },
    { metric: 'Destination Keywords', improvement: '200+', timeframe: 'Top 10 rankings' },
    { metric: 'Direct Bookings', improvement: '+280%', timeframe: 'Year-over-year' },
    { metric: 'OTA Dependency', improvement: '-45%', timeframe: 'Commission reduction' },
  ],
}

const keywordCategories = [
  {
    category: 'Destination',
    keywords: [
      'best places to visit in Bali',
      'things to do in Santorini',
      'Paris travel guide 2025',
      'hidden gems in Portugal',
    ],
  },
  {
    category: 'Accommodation',
    keywords: [
      'boutique hotels near me',
      'best resorts in Maldives',
      'budget hotels Tokyo',
      'luxury villas Tuscany',
    ],
  },
  {
    category: 'Activities',
    keywords: [
      'snorkeling tours Cancun',
      'wine tasting Napa Valley',
      'safari packages Kenya',
      'walking tours Rome',
    ],
  },
  {
    category: 'Seasonal',
    keywords: [
      'best winter sun destinations',
      'summer beach vacations Europe',
      'fall foliage road trips',
      'spring break deals 2025',
    ],
  },
  {
    category: 'Luxury Travel',
    keywords: [
      'private island resorts',
      'first class flight deals',
      'luxury cruise Mediterranean',
      'exclusive travel experiences',
    ],
  },
  {
    category: 'Business Travel',
    keywords: [
      'corporate retreat venues',
      'business hotels downtown',
      'conference hotel packages',
      'bleisure travel destinations',
    ],
  },
]

const faqs = [
  {
    question: 'How long does it take to see results from travel SEO?',
    answer:
      'Travel SEO typically shows initial improvements within 60-90 days, with significant booking increases appearing within 4-6 months. Seasonal destinations may see faster results when campaigns are timed ahead of peak booking windows. We focus on quick wins like Google Business Profile optimization and schema markup while building long-term content authority.',
  },
  {
    question: 'Can SEO really compete with OTAs like Booking.com and Expedia?',
    answer:
      'Absolutely. While OTAs dominate broad terms like "hotels in Paris," independent brands can win on long-tail, intent-rich queries such as "boutique hotel near Eiffel Tower with rooftop bar." These queries convert at higher rates and drive direct bookings without commission fees. Our strategies specifically target the gaps OTAs leave open.',
  },
  {
    question: 'How do you handle seasonality in travel SEO?',
    answer:
      'We build a year-round content calendar that targets evergreen destination content alongside seasonal campaigns launched 3-4 months ahead of peak demand. This ensures your site captures early-stage research traffic that converts during booking windows. We also optimize for shoulder-season queries to smooth revenue throughout the year.',
  },
  {
    question: 'Do you work with hotels, tour operators, or travel agencies?',
    answer:
      'We work with all segments of the travel and hospitality industry, including boutique and chain hotels, resorts, tour operators, DMOs (destination marketing organizations), travel agencies, and experience platforms. Each segment gets a tailored strategy based on its unique booking funnel and competitive landscape.',
  },
  {
    question: 'What makes travel SEO different from regular SEO?',
    answer:
      'Travel SEO requires expertise in visual content optimization, multi-destination targeting, seasonal demand patterns, hotel and experience schema markup, Google Business Profile management, and booking funnel optimization. The competitive landscape with OTAs and aggregators also demands specialized long-tail and local SEO strategies that general SEO agencies often overlook.',
  },
  {
    question: 'How do you measure the ROI of travel SEO?',
    answer:
      'We track organic booking revenue, direct booking conversion rates, cost-per-acquisition compared to OTA commissions, destination keyword rankings, and organic traffic by traveler segment. You receive monthly reports showing exactly how SEO is reducing your OTA dependency and increasing direct revenue.',
  },
  {
    question: 'How do I do keyword research for travel and tourism businesses?',
    answer:
      'Travel keyword research requires understanding destination-specific queries, seasonal patterns, and traveler intent. Use tools like Ahrefs, SEMrush, and Google Keyword Planner to identify high-intent keywords combining destinations with activities, accommodations, or travel styles. Focus on long-tail phrases like "best boutique hotels in Bali" or "family-friendly tours in Iceland" that signal strong booking intent and face less competition from major OTAs.',
  },
  {
    question: 'What are backlinks and why do they matter for travel SEO?',
    answer:
      'Backlinks are links from other websites pointing to yours. They signal authority and trustworthiness to search engines like Google. For travel companies, backlinks from authoritative travel blogs, tourism boards, destination guides, and industry publications dramatically improve domain authority and rankings. Quality matters more than quantity—one link from Lonely Planet or a major travel publication is worth hundreds of low-quality directory links.',
  },
  {
    question: 'How important are Core Web Vitals for travel booking sites?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) are Google ranking factors that measure page speed and user experience. Travel and booking sites with heavy imagery, booking widgets, or interactive maps must optimize aggressively. Poor Core Web Vitals lead to higher bounce rates, lower rankings, and abandoned bookings. We use Google PageSpeed Insights and GTmetrix to achieve "Good" ratings across all metrics, ensuring fast load times that keep travelers engaged through the booking funnel.',
  },
  {
    question: 'Should travel companies invest in local SEO?',
    answer:
      'Absolutely. If your travel company has physical locations (hotels, tour offices, travel agencies), local SEO is critical. Optimize your Google Business Profile, build local citations (NAP consistency), and create location-specific content. Local SEO helps travel companies appear in "near me" searches and Google&apos;s local pack, especially important for destination-based businesses targeting travelers already in the area or planning visits to specific regions.',
  },
  {
    question: 'How do I track SEO performance and booking attribution?',
    answer:
      'Use Google Analytics 4 to track organic traffic, user behavior, and booking conversions. Google Search Console shows keyword rankings, click-through rates, and indexation status. Tools like Ahrefs and SEMrush provide competitor analysis and backlink monitoring. Set up custom events in GA4 to track travel-specific actions (booking requests, itinerary downloads, tour inquiries) and tie them back to organic search channels to measure true booking attribution and ROI.',
  },
]

const relatedIndustries = [
  { name: 'Food & Restaurant', href: '/industries/food' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Real Estate', href: '/industries/realestate' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Automotive', href: '/industries/automotive' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
]

/* ─────────────────── 1. Hero ─────────────────── */

function HeroSection() {
  return (
    <div className="bg-paper">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-40">
          <div className="max-w-4xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Travel & Hospitality
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Travel SEO that inspires wanderlust and fills bookings
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-stone">
              Specialized SEO strategies for hotels, resorts, tour operators, and travel brands that turn
              search traffic into direct bookings and reduce OTA dependency.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="/contact">Get Travel SEO Audit</Button>
              <Button variant="ghost" href="#services">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ─────────────────── 2. Stats ─────────────────── */

function StatsSection() {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ─────────────────── 3. Challenges ─────────────────── */

function ChallengesSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Travel Industry Challenges</Subheading>
        <Heading as="h2" className="mt-2">
          Unique SEO challenges in travel & hospitality.
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
              <h3 className="font-heading text-lg font-semibold text-ink">{item.challenge}</h3>
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
  )
}

/* ─────────────────── 4. Services ─────────────────── */

function ServicesSection() {
  return (
    <div className="bg-cream py-24" id="services">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Travel SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Comprehensive optimization for travel brands.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
            From destination keyword research to booking funnel optimization, our travel SEO services
            cover every aspect of your organic growth strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <service.icon className="size-6 text-accent" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-ink">{service.name}</h3>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-6">{service.description}</p>

              <ul className="space-y-2">
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

/* ─────────────────── 5. Process ─────────────────── */

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we drive organic bookings for travel brands.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
            A proven four-step methodology built for the unique demands of travel and hospitality SEO.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="border-b border-border py-8 flex gap-8 items-start">
              <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium shrink-0 pt-1">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-slate text-[15px] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ─────────────────── 6. Technical SEO ─────────────────── */

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Core technical SEO for travel websites
          </Heading>
          <Lead className="mt-6">
            Travel websites need fast load times, mobile-first design, and proper structured data to rank well and convert bookings. We optimize every technical aspect to ensure search engines can crawl, index, and rank your content effectively.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Site Speed</h3>
            <p className="text-slate mb-4">
              Page speed directly impacts both rankings and booking conversions. Slow-loading travel sites lose bookings to faster competitors. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your booking flow loads fast on all devices.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Image optimization for destination photos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Booking widget performance optimization</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">CDN implementation for global audiences</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Travel Schema Markup</h3>
            <p className="text-slate mb-4">
              We implement JSON-LD schema markup from schema.org to help search engines understand your travel products, destinations, and services. Proper structured data enables rich snippets, hotel ratings, tour pricing, and better visibility in travel search results including TravelAction, Hotel, and TouristAttraction schemas.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Hotel and lodging property markup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Tour and activity structured data</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">TouristAttraction and Place schemas</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building for Travel Companies</h3>
            <p className="text-slate mb-4">
              Quality backlinks from authoritative travel blogs, tourism boards, and destination guides build domain authority and topical relevance. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute white-hat link acquisition strategies through travel blog partnerships and industry collaborations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest posting on travel and lifestyle blogs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Destination guide partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Tourism board and industry collaborations</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Travel Analytics & Booking Attribution</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4 and Google Search Console to monitor keyword rankings, organic traffic growth, and booking conversion rates. You&apos;ll get monthly reports showing exactly how SEO drives bookings and revenue for your travel business, with Screaming Frog audits ensuring technical health.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Custom GA4 booking event tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console performance monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Conversion attribution and ROI measurement</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ─────────────────── 7. Case Study ─────────────────── */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Travel Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a boutique hotel chain dominate direct bookings.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-white/40 mb-4">
                {caseStudy.client} &mdash; {caseStudy.industry}
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">{caseStudy.challenge}</p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">Our Solution</h3>
              <p className="text-sm leading-relaxed text-white/60">{caseStudy.solution}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Results Achieved</h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">{result.improvement}</div>
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

/* ─────────────────── 8. Keywords ─────────────────── */

function KeywordsSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Travel Industry Keywords</Subheading>
        <Heading as="h2" className="mt-2">
          Examples of travel keywords we target.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {keywordCategories.map((group, index) => (
          <div key={index} className="text-center">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.keywords.map((keyword, keywordIndex) => (
                <li key={keywordIndex} className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* ─────────────────── 9. Testimonial ─────────────────── */

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 font-display text-3xl leading-none text-accent">&ldquo;</div>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink">
            There&apos;s not enough room here for me to write about all the amazing things Aditya did for our
            Workhap website & Marketing team! He&apos;s an expert when it comes to everything SEO-related
            and went above & beyond our initial scope of work. He is someone you can absolutely trust and
            know has your best interest in mind. 10/10 highly recommend Aditya for all your SEO and marketing needs.
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center">
              <span className="font-heading text-sm font-semibold text-accent">SD</span>
            </div>
            <div className="text-left">
              <div className="font-heading text-sm font-semibold text-ink">Sho Dewan</div>
              <div className="text-xs text-ash">CEO, Workhap</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ─────────────────── 10. Pricing ─────────────────── */

function PricingSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Travel SEO Investment</Subheading>
          <Heading as="h2" className="mt-2">
            Transparent pricing for travel brands.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate">
            Our travel SEO engagements are designed to deliver measurable booking revenue
            and reduce OTA commission costs.
          </p>

          <div className="mt-12 rounded-none border border-border-strong bg-white p-8">
            <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">
              Travel SEO packages
            </p>
            <div className="font-mono text-4xl font-bold text-ink">
              Starting at $2,200<span className="text-base font-normal text-ash">/month</span>
            </div>
            <p className="mt-4 text-sm text-slate max-w-md mx-auto">
              Includes destination keyword research, content strategy, technical optimization,
              schema markup, and monthly performance reporting.
            </p>

            <ul className="mt-8 space-y-3 text-left max-w-sm mx-auto">
              {[
                'Destination-level keyword strategy',
                'Travel content creation & optimization',
                'Hotel & tour schema implementation',
                'Google Business Profile management',
                'Monthly booking attribution reports',
                'Dedicated travel SEO specialist',
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-stone">
                  <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button href="/contact">Get Custom Quote</Button>
              <Button variant="outline" href="/pricing">
                Compare Plans
              </Button>
            </div>
          </div>

          <p className="mt-6 text-xs text-ash">
            All plans include a free initial travel SEO audit and 30-day performance guarantee.
          </p>
        </div>
      </Container>
    </div>
  )
}

/* ─────────────────── 11. FAQ ─────────────────── */

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="We successfully migrated our blog from Medium to Goodnotes.com/blog without losing traffic. We also solved tech SEO problems for the Thailand, Japan, Taiwan, and Hong Kong sites, doubling the traffic with minimal efforts."
        author="Elizabeth Ching"
        role="Marketing"
        company="Goodnotes"
      />
      <FAQDarkSection title="Travel SEO frequently asked questions" items={faqs} />
    </>
  )
}

/* ─────────────────── 12. Related Industries ─────────────────── */

function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO solutions for every industry.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong sm:grid-cols-3 lg:grid-cols-6">
          {relatedIndustries.map((industry, index) => (
            <a
              key={index}
              href={industry.href}
              className="bg-paper px-4 py-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="font-heading text-sm font-semibold text-ink">{industry.name}</span>
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ─────────────────── 13. CTA ─────────────────── */


export default function TravelSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Travel & Hospitality SEO Services | Tourism Marketing',
          description:
            'Specialized SEO services for travel and hospitality businesses. Drive organic bookings for hotels, resorts, tour operators, and travel agencies with destination-focused strategies.',
          url: 'https://theprojectseo.com/industries/travel',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Backlink, Computing, Technology, World Wide Web',
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
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
            },
            {
              '@type': 'Thing',
              name: 'Technology',
              sameAs: 'https://www.wikidata.org/wiki/Q4884546',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            }
          ],
        }}
      />
      <HeroSection />
      <StatsSection />
      <ChallengesSection />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we drive organic bookings for travel brands"
        steps={processSteps}
        visual={<IndustryProcessVisual type="travel" />}
        visualBg="ink"
      />
      <TechnicalSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection subheading="Ready to fill your rooms and tours with organic traffic?" heading="Let's build your travel SEO strategy." lead="Partner with SEO experts who understand the travel industry. We'll help you capture destination search demand, increase direct bookings, and reduce OTA dependency." submitText="Get Travel SEO Audit" />
      <Footer />
    </main>
  )
}
