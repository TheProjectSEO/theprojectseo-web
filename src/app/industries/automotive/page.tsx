import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import {
  MapPinIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Automotive SEO Services | Dealership & Auto Industry SEO | TheProjectSEO',
  description:
    'Specialized SEO services for automotive dealerships and the auto industry. Drive more traffic, test drives, and service appointments with proven automotive SEO strategies.',
  alternates: {
    canonical: '/industries/automotive',
  },
  openGraph: {
    title: 'Automotive SEO Services | Dealership & Auto Industry SEO',
    description:
      'Specialized SEO services for automotive dealerships and the auto industry. Drive more traffic, test drives, and service appointments with proven automotive SEO strategies.',
    url: '/industries/automotive',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automotive SEO Services | Dealership & Auto Industry SEO',
    description:
      'Specialized SEO services for automotive dealerships and the auto industry. Drive more traffic, test drives, and service appointments with proven automotive SEO strategies.',
  },
}

/* ── Data ─────────────────────────────────────────────────────────── */

const stats = [
  { value: '$2.7T', label: 'Global auto market' },
  { value: '92%', label: 'Research online before purchase' },
  { value: '2.1K/mo', label: 'Avg. search volume per model' },
  { value: '4.2%', label: 'Test drive conversion rate' },
]

const challenges = [
  {
    challenge: 'Local Dealer Competition',
    description:
      'Multiple dealerships compete for the same geographic keywords, making it difficult to stand out in local search results and Google Maps listings.',
    solution:
      'We implement hyper-local SEO strategies with geo-targeted content, optimized Google Business Profiles, and location-specific landing pages that outrank competitors.',
    icon: MapPinIcon,
  },
  {
    challenge: 'Vehicle Inventory SEO',
    description:
      'Constantly changing inventory makes it challenging to maintain optimized pages for every vehicle, leading to thin content and crawl budget waste.',
    solution:
      'Our dynamic inventory SEO framework automatically generates optimized titles, descriptions, and schema markup for every vehicle in your lot.',
    icon: TruckIcon,
  },
  {
    challenge: 'Multi-Location Management',
    description:
      'Managing SEO across multiple dealership locations creates consistency issues, duplicate content risks, and diluted local authority.',
    solution:
      'We build a scalable multi-location SEO architecture with unique content per location, centralized reporting, and consistent NAP citations.',
    icon: BuildingStorefrontIcon,
  },
  {
    challenge: 'Seasonal Demand Shifts',
    description:
      'Automotive search behavior fluctuates with seasons, model year releases, and economic conditions, requiring constant strategy adjustments.',
    solution:
      'Our data-driven approach anticipates seasonal trends and adjusts keyword targeting, content calendars, and ad spend to capture demand peaks.',
    icon: CalendarDaysIcon,
  },
]

const services = [
  {
    name: 'Dealer SEO Strategy',
    description:
      'Comprehensive search engine optimization tailored to automotive dealerships that drives qualified traffic and increases showroom visits.',
    features: [
      'Dealership website audit & roadmap',
      'Automotive keyword research & mapping',
      'Competitor dealership analysis',
      'Monthly performance reporting',
    ],
  },
  {
    name: 'Vehicle Listing Optimization',
    description:
      'Optimize every vehicle listing page for maximum visibility in search results, from new inventory to certified pre-owned.',
    features: [
      'VDP title & meta optimization',
      'Vehicle schema markup (Auto schema)',
      'Inventory feed SEO automation',
      'Image alt text & optimization',
    ],
  },
  {
    name: 'Local Automotive SEO',
    description:
      'Dominate local search results so customers in your area find your dealership first when searching for vehicles and service.',
    features: [
      'Google Business Profile optimization',
      'Local citation building & cleanup',
      'Review generation & management',
      'Geo-targeted landing pages',
    ],
  },
  {
    name: 'Automotive Content Marketing',
    description:
      'Engage car buyers at every stage of the purchase journey with expert content that builds trust and drives conversions.',
    features: [
      'Model comparison & review articles',
      'Buying guide & financing content',
      'Service & maintenance blog posts',
      'Video SEO for vehicle walkarounds',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Dealership Audit & Discovery',
    description:
      'We perform a comprehensive audit of your dealership website, local listings, and competitor landscape to identify quick wins and long-term opportunities.',
  },
  {
    number: '02',
    title: 'Automotive Keyword Strategy',
    description:
      'We research and map high-intent automotive keywords across vehicle types, services, and local modifiers to build a targeted content plan.',
  },
  {
    number: '03',
    title: 'On-Site & Inventory Optimization',
    description:
      'We optimize your VDPs, SRPs, service pages, and location pages with automotive schema, compelling copy, and technical SEO best practices.',
  },
  {
    number: '04',
    title: 'Monitor, Report & Scale',
    description:
      'We track rankings, traffic, leads, and test drive bookings monthly, then iterate on the strategy to continuously improve ROI.',
  },
]

const caseStudy = {
  client: 'Multi-Location Auto Dealer Group',
  industry: 'Automotive Retail',
  challenge:
    'A regional auto dealer group with five locations was losing market share to competitors who dominated local search. Their vehicle detail pages had thin content, inconsistent NAP data across directories, and no structured data. Organic leads had plateaued, and paid search costs were climbing.',
  solution:
    'We rebuilt their SEO foundation from the ground up. Each location received a unique, content-rich landing page with localized inventory feeds and optimized Google Business Profiles. We implemented Automotive schema across all VDPs, created a model-comparison content hub, and launched a review generation campaign. Within 90 days, crawl errors dropped 85% and indexed pages doubled. By month six, the dealer group was ranking in the local 3-pack for 120+ high-intent terms across all five markets.',
  results: [
    { metric: 'Organic Leads', improvement: '+460%', timeframe: '12 months' },
    { metric: 'Local Keywords Ranked', improvement: '350+', timeframe: 'Top 10 positions' },
    { metric: 'Test Drive Bookings', improvement: '+210%', timeframe: 'From organic search' },
    { metric: 'Service Appointments', improvement: '+175%', timeframe: 'Online bookings' },
  ],
}

const keywordCategories = [
  {
    category: 'Vehicle Types',
    keywords: [
      'new SUVs for sale near me',
      'used trucks under $30K',
      'electric vehicles 2025',
      'certified pre-owned sedans',
    ],
  },
  {
    category: 'Dealer Keywords',
    keywords: [
      'Toyota dealership [city]',
      'best car dealership near me',
      'auto dealer with financing',
      'trade-in value calculator',
    ],
  },
  {
    category: 'Service & Parts',
    keywords: [
      'oil change near me',
      'brake repair [city]',
      'OEM parts online',
      'transmission service cost',
    ],
  },
  {
    category: 'Local Automotive',
    keywords: [
      'cars for sale in [city]',
      'auto repair shop near me',
      'car lease deals [state]',
      'test drive appointment',
    ],
  },
  {
    category: 'Comparison',
    keywords: [
      'RAV4 vs CR-V comparison',
      'best midsize SUV 2025',
      'lease vs buy calculator',
      'top rated family cars',
    ],
  },
  {
    category: 'Brand-Specific',
    keywords: [
      'Ford F-150 deals near me',
      'Honda Civic price [city]',
      'Chevrolet Silverado inventory',
      'BMW certified pre-owned',
    ],
  },
]

const faqItems = [
  {
    question: 'How long does it take to see results from automotive SEO?',
    answer:
      'Most dealerships see measurable improvements within 60-90 days, with significant traffic and lead increases by month six. Local SEO wins like Google Business Profile optimization and citation cleanup often produce results faster, while competitive vehicle-type keywords take longer to rank.',
  },
  {
    question: 'Can you optimize our constantly changing vehicle inventory?',
    answer:
      'Absolutely. We use automated inventory SEO frameworks that dynamically generate optimized titles, meta descriptions, and schema markup for every vehicle in your inventory. When vehicles sell and new ones arrive, the system updates automatically so every listing is search-ready.',
  },
  {
    question: 'Do you work with multi-location dealership groups?',
    answer:
      'Yes, multi-location SEO is one of our specialties. We create unique, locally optimized pages for each location, manage separate Google Business Profiles, and build location-specific citation profiles to ensure each dealership ranks independently in its market.',
  },
  {
    question: 'How do you handle SEO for both new and used vehicle pages?',
    answer:
      'We treat new and used inventory differently. New vehicle pages target model-level keywords with rich comparison content, while used vehicle pages focus on price-point and condition-based searches. Both receive automotive schema markup and optimized imagery.',
  },
  {
    question: 'What makes automotive SEO different from regular SEO?',
    answer:
      'Automotive SEO requires specialized knowledge of dealer management systems, inventory feeds, VDP/SRP architecture, and automotive schema types. It also demands a strong local SEO component since nearly all vehicle purchases happen within a defined radius of the buyer\u2019s location.',
  },
  {
    question: 'Do you integrate with our dealer management system (DMS)?',
    answer:
      'We integrate with all major DMS and inventory feed providers including vAuto, DealerSocket, CDK Global, and Reynolds & Reynolds. This allows us to automate SEO at scale across your entire inventory without manual intervention.',
  },
  {
    question: 'How do I do keyword research for automotive businesses?',
    answer:
      'Start by identifying your core offerings (vehicle types, brands, services) and combine them with local modifiers and buyer intent phrases. Use tools like Google Keyword Planner, Ahrefs, and SEMrush to find search volumes. Focus on high-intent terms like "near me," model names with pricing modifiers, and service-specific queries that indicate purchase readiness.',
  },
  {
    question: 'What are backlinks and why do they matter for automotive SEO?',
    answer:
      'Backlinks are links from other websites pointing to your dealership site. They signal trust and authority to Google. For automotive SEO, quality backlinks from local news sites, auto industry publications, manufacturer sites, and business directories significantly boost your rankings. We build these through content marketing, partnerships, and digital PR campaigns.',
  },
  {
    question: 'How important are Core Web Vitals for automotive websites?',
    answer:
      'Core Web Vitals are critical for automotive sites because dealership websites often have heavy vehicle imagery, third-party chat widgets, and inventory feeds that slow page load times. Google uses Core Web Vitals as a ranking factor, and faster sites convert better. We optimize images, implement lazy loading, and minimize render-blocking resources to pass all Core Web Vitals thresholds.',
  },
  {
    question: 'Should automotive dealerships invest in local SEO?',
    answer:
      'Absolutely. Nearly all vehicle purchases happen within 25 miles of the buyer&apos;s home, making local SEO essential. Optimizing your Google Business Profile, building local citations, generating reviews, and creating location-specific content ensures your dealership appears when nearby customers search for vehicles or services.',
  },
  {
    question: 'How do I track SEO performance for my automotive business?',
    answer:
      'Use Google Analytics 4 to track organic traffic, conversions, and user behavior. Google Search Console shows which keywords drive clicks and identifies technical issues. Automotive-specific metrics to monitor include VDP views, test drive form submissions, service appointment bookings, and finance application starts. We provide custom dashboards that tie SEO metrics directly to dealership revenue.',
  },
]

const relatedIndustries = [
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Real Estate', href: '/industries/realestate' },
  { name: 'Travel', href: '/industries/travel' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
]

/* ── Sections ─────────────────────────────────────────────────────── */

// Section 01: Hero
function HeroSection() {
  return (
    <div className="bg-paper">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-6">
            Automotive Industry
          </p>
          <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink max-w-3xl">
            Automotive SEO that <em className="not-italic text-accent">drives traffic</em> to your dealership
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-[1.65] text-slate">
            Specialized SEO strategies for dealerships and auto businesses that turn online searches into showroom visits, test drives, and service appointments.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Your Dealership SEO Audit</Button>
            <Button variant="ghost" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Section 02: Stats Bar
function StatsSection() {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[32px] font-semibold text-ink">{stat.value}</div>
              <div className="mt-1 text-sm text-slate">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

// Section 03: Challenges
function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Automotive SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            The unique challenges of automotive SEO.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
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
    </div>
  )
}

// Section 04: Services
function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Automotive SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for the automotive industry.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">{service.name}</h3>
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

// Section 05: Process
function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we accelerate your dealership&apos;s growth.
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="flex gap-8 border-b border-border py-8 last:border-b-0"
            >
              <div className="font-mono text-[28px] font-semibold text-accent leading-none pt-1">
                {step.number}
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-ink mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-slate">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

// Section 06: Technical SEO
function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Technical SEO Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            The technical foundation of automotive search success.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Core Web Vitals & Site Performance
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Automotive websites must load instantly to keep potential buyers engaged. We optimize every
              performance metric Google measures, from vehicle listing pages to service appointment forms.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Google PageSpeed Insights optimization for mobile & desktop
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                GTmetrix performance monitoring & CDN implementation
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Image optimization for high-resolution vehicle photos
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Lazy loading for inventory listings & gallery pages
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Third-party script optimization (chat, financing tools)
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Automotive Schema Markup
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Rich structured data helps Google understand your inventory and display enhanced search results
              with pricing, ratings, and availability directly in SERPs.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                schema.org Vehicle schema for every listing
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                AutoDealer schema with location & contact data
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                JSON-LD implementation for dynamic inventory
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Review & rating schema for testimonials
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Service schema for maintenance & repair offerings
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Link Building for Automotive Businesses
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              High-quality backlinks from automotive publications, local news sites, and industry directories
              establish your dealership as an authoritative source in your market.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Ahrefs & SEMrush backlink analysis & competitor research
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Automotive industry publication outreach
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Local news & sponsorship link opportunities
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Moz Domain Authority & link profile health tracking
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Manufacturer & supplier link partnerships
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">
              Automotive Analytics & Sales Tracking
            </h3>
            <p className="text-sm leading-relaxed text-slate mb-6">
              Measure what matters with custom dashboards that track SEO metrics alongside real dealership
              outcomes like test drive bookings and service appointments.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Google Analytics 4 with automotive event tracking
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Google Search Console performance monitoring
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Screaming Frog technical SEO audits & crawl analysis
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Conversion tracking for test drives, service bookings & leads
              </li>
              <li className="flex items-start gap-3 text-sm text-stone">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                Custom dashboards linking SEO to dealership revenue
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Section 07: Case Study (dark section)
function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Automotive Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a multi-location dealer group dominate local search.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">{caseStudy.challenge}</p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">Our Approach</h3>
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

// Section 08: Keywords
function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Automotive Keywords</Subheading>
          <Heading as="h2" className="mt-2">
            Examples of automotive keywords we target.
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
    </div>
  )
}

// Section 09: Testimonial
function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 font-display text-2xl leading-none text-accent">&ldquo;</div>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink mb-8">
            TheProjectSEO completely transformed our online presence. We went from barely showing up in local searches
            to dominating the first page for every model we carry. Test drive requests from organic search are up over
            200% and our service department is booked solid. They understand the automotive business in a way no other
            SEO agency we&apos;ve worked with ever has.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="size-10 rounded-full bg-ink/10" />
            <div className="text-left">
              <div className="font-heading text-sm font-semibold text-ink">Mike Trevino</div>
              <div className="text-xs text-ash">General Manager, Trevino Auto Group</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Section 10: Pricing
function PricingSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-none border border-border-strong bg-cream p-8 text-center">
          <Subheading>Automotive SEO Investment</Subheading>
          <div className="mt-4 flex items-baseline justify-center gap-2">
            <span className="font-mono text-[36px] font-bold text-ink">$1,997</span>
            <span className="text-ash">/month</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-slate max-w-lg mx-auto">
            Our automotive SEO packages start at $1,997/month and include dealer website optimization, inventory SEO,
            local search management, and monthly reporting. Custom enterprise plans available for multi-location groups.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Custom Quote</Button>
            <Button variant="outline" href="/pricing">
              View All Plans
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Section 11: FAQ
function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          items={faqItems}
          title="Automotive SEO frequently asked questions"
        />
      </Container>
    </div>
  )
}

// Section 12: Related Industries
function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-8">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO solutions for every industry.
          </Heading>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {relatedIndustries.map((industry) => (
            <Button key={industry.name} variant="outline" href={industry.href}>
              {industry.name}
            </Button>
          ))}
        </div>
      </Container>
    </div>
  )
}

// Section 13: CTA
function CTASection() {
  return (
    <div className="bg-paper border-t border-border py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-xl">
            <Subheading>Ready to drive more customers to your dealership?</Subheading>
            <Heading as="h2" className="mt-2">
              Let&apos;s build your automotive SEO strategy.
            </Heading>
            <Lead className="mt-6">
              Partner with SEO experts who understand the automotive industry. We&apos;ll help you turn online
              searches into showroom visits, test drives, and long-term service customers.
            </Lead>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row shrink-0">
            <Button href="/contact">Get Dealership SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
        <p className="mt-6 text-xs text-ash text-center lg:text-left">
          Free consultation includes automotive keyword research, local SEO audit, and competitor analysis.
        </p>
      </Container>
    </div>
  )
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default function AutomotiveSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Automotive SEO Services | Dealership & Auto Industry SEO',
          description:
            'Specialized SEO services for automotive dealerships and the auto industry. Drive more traffic, test drives, and service appointments with proven automotive SEO strategies.',
          url: 'https://theprojectseo.com/industries/automotive',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Technology, Computing, Information technology, Backlink',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Technology',
              sameAs: 'https://www.wikidata.org/wiki/Q4884546',
            },
            {
              '@type': 'Thing',
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
            },
            {
              '@type': 'Thing',
              name: 'Information technology',
              sameAs: 'https://www.wikidata.org/wiki/Q7214259',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            }
          ],
        }}
      />
      <HeroSection />
      <StatsSection />
      <ChallengesSection />
      <ServicesSection />
      <ProcessSection />
      <TechnicalSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingSection />
      <FAQSection />
      <RelatedIndustriesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
