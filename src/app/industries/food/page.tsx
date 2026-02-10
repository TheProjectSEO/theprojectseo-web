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
import { CTAFormSection } from '@/components/service-page-sections'
import {
  MapPinIcon,
  StarIcon,
  DocumentTextIcon,
  MegaphoneIcon
} from '@heroicons/react/24/outline'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Restaurant & Food SEO Services | Food & Beverage SEO | TheProjectSEO',
  description:
    'Specialized SEO services for restaurants, food brands, and beverage companies. Drive local visibility, online reservations, and delivery orders with proven restaurant SEO strategies.',
  alternates: {
    canonical: '/industries/food',
  },
  openGraph: {
    title: 'Restaurant & Food SEO Services | Food & Beverage SEO',
    description:
      'Specialized SEO services for restaurants, food brands, and beverage companies. Drive local visibility, online reservations, and delivery orders with proven restaurant SEO strategies.',
    url: '/industries/food',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurant & Food SEO Services | Food & Beverage SEO',
    description:
      'Specialized SEO services for restaurants, food brands, and beverage companies. Drive local visibility, online reservations, and delivery orders with proven restaurant SEO strategies.',
  },
}

const challenges = [
  {
    challenge: 'Hyper-Local Competition',
    description: 'Restaurants compete fiercely for visibility in a small geographic radius where dozens of similar options fight for the same hungry customers.',
    solution: 'We build hyper-local SEO strategies that dominate your neighborhood, city, and surrounding areas with geo-targeted content and citations.',
    icon: MapPinIcon
  },
  {
    challenge: 'Review Management',
    description: 'Online reviews on Google, Yelp, and TripAdvisor directly impact your rankings and whether diners choose your restaurant over competitors.',
    solution: 'Our review strategy generates consistent positive reviews while professionally managing negative feedback to protect your reputation.',
    icon: StarIcon
  },
  {
    challenge: 'Menu & Price Visibility',
    description: 'Search engines struggle to index and display your menu items, prices, and specials, causing you to miss high-intent searches.',
    solution: 'We implement structured data and menu schema markup so your dishes, prices, and specials appear directly in search results.',
    icon: DocumentTextIcon
  },
  {
    challenge: 'Multi-Location Consistency',
    description: 'Restaurant groups and franchises struggle to maintain consistent NAP data, branding, and SEO performance across all locations.',
    solution: 'We create scalable multi-location SEO frameworks that keep every location optimized while maintaining brand consistency.',
    icon: MegaphoneIcon
  }
]

const services = [
  {
    name: 'Restaurant Local SEO',
    description: 'Dominate local search results and Google Maps to capture hungry customers searching for dining options nearby.',
    features: [
      'Google Business Profile optimization',
      'Local citation building & cleanup',
      'Geo-targeted keyword strategy',
      'Google Maps ranking optimization',
      'Local competitor analysis',
      'Neighborhood & city-level targeting'
    ]
  },
  {
    name: 'Menu Optimization & Schema',
    description: 'Make your menu items, prices, and specials visible in search results with structured data and optimized content.',
    features: [
      'Menu schema markup implementation',
      'Menu page SEO optimization',
      'Rich snippet optimization for dishes',
      'Seasonal & special menu updates',
      'Price markup & availability data',
      'Cuisine-specific keyword targeting'
    ]
  },
  {
    name: 'Review Strategy & Management',
    description: 'Build a strong online reputation that drives new customers and improves your local search rankings.',
    features: [
      'Review generation campaigns',
      'Multi-platform review monitoring',
      'Professional response management',
      'Negative review mitigation',
      'Review schema implementation',
      'Reputation score tracking & reporting'
    ]
  },
  {
    name: 'Food Content Marketing',
    description: "Create mouth-watering content that attracts food lovers and builds your restaurant's authority online.",
    features: [
      'Blog content & recipe publishing',
      'Food photography SEO optimization',
      'Chef spotlight & story content',
      'Seasonal & event-based content',
      'Social media integration strategy',
      'Food trend & keyword research'
    ]
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Restaurant Audit & Local Analysis',
    description: 'We analyze your current online presence, local rankings, Google Business Profile, review profiles, and competitor landscape to identify the biggest growth opportunities.'
  },
  {
    number: '02',
    title: 'Menu & Location Optimization',
    description: 'We optimize your menu pages with schema markup, fix NAP inconsistencies, build local citations, and ensure your restaurant appears correctly across all platforms.'
  },
  {
    number: '03',
    title: 'Content & Review Strategy',
    description: 'We launch targeted content campaigns, implement review generation systems, and create food-focused content that attracts diners and builds authority.'
  },
  {
    number: '04',
    title: 'Monitor, Report & Scale',
    description: 'We track local rankings, reservation and order conversions, review sentiment, and continuously optimize your strategy to fill more tables and drive more orders.'
  }
]

const caseStudy = {
  client: 'Multi-Location Restaurant Group',
  industry: 'Full-Service Dining',
  challenge: 'A restaurant group with 8 locations was virtually invisible on Google Maps and losing market share to competitors with stronger online presence.',
  solution: 'Comprehensive local SEO overhaul including Google Business Profile optimization, menu schema markup, review generation campaigns, and location-specific content strategy.',
  results: [
    { metric: 'Google Maps Visibility', improvement: '+520%', timeframe: '9 months' },
    { metric: 'Local Keywords Ranking', improvement: '150+ keywords', timeframe: 'Top 10 positions' },
    { metric: 'Online Reservations', improvement: '+340%', timeframe: 'From organic search' },
    { metric: 'Delivery Orders', improvement: '+280%', timeframe: 'From search traffic' }
  ]
}

const keywordGroups = [
  {
    category: 'Restaurant Types',
    keywords: ['best Italian restaurant near me', 'fine dining [city]', 'family restaurant [neighborhood]', 'farm-to-table restaurant']
  },
  {
    category: 'Local Dining',
    keywords: ['restaurants open now near me', 'lunch spots downtown', 'outdoor dining [city]', 'restaurants with private dining']
  },
  {
    category: 'Menu Items',
    keywords: ['best pizza in [city]', 'vegan restaurants near me', 'gluten-free menu options', 'brunch spots [neighborhood]']
  },
  {
    category: 'Delivery & Takeout',
    keywords: ['food delivery near me', 'best takeout [city]', 'restaurant curbside pickup', 'late night delivery options']
  },
  {
    category: 'Events & Catering',
    keywords: ['catering services [city]', 'private event venue restaurant', 'wedding catering near me', 'corporate lunch catering']
  },
  {
    category: 'Food Trends',
    keywords: ['sustainable restaurant [city]', 'craft cocktail bar near me', 'locally sourced dining', "chef's tasting menu"]
  }
]

const faqItems = [
  {
    question: 'How long does it take for restaurant SEO to show results?',
    answer: 'Most restaurants start seeing improvements in local search visibility within 30-60 days, with significant increases in reservations and orders within 3-6 months. Local SEO for restaurants can move faster than other industries because of the high-intent nature of food-related searches.'
  },
  {
    question: 'Do you help with Google Business Profile optimization?',
    answer: 'Absolutely. Google Business Profile optimization is a cornerstone of our restaurant SEO strategy. We optimize your profile with accurate categories, compelling descriptions, menu integration, photo optimization, Google Posts, Q&A management, and review response strategies to maximize your visibility in Maps and local results.'
  },
  {
    question: 'Can you help restaurants with multiple locations?',
    answer: 'Yes, multi-location restaurant SEO is one of our specialties. We create unique, optimized profiles and landing pages for each location while maintaining brand consistency. Our scalable framework ensures every location gets the attention it needs to rank in its local market.'
  },
  {
    question: 'How do online reviews affect restaurant SEO?',
    answer: 'Reviews are one of the most important local ranking factors for restaurants. Google uses review quantity, quality, recency, and your response rate to determine rankings. Our review strategy helps you generate consistent positive reviews and professionally manage feedback to boost both rankings and customer trust.'
  },
  {
    question: 'Do you optimize for food delivery platforms like DoorDash and Uber Eats?',
    answer: 'While our primary focus is on your own website and Google presence, we do help optimize your visibility across third-party delivery platforms. We ensure your restaurant information, menu items, and descriptions are optimized for discoverability on these platforms as part of our comprehensive strategy.'
  },
  {
    question: 'What makes restaurant SEO different from regular SEO?',
    answer: 'Restaurant SEO is heavily focused on local search, Google Maps, review management, and menu optimization. Unlike traditional SEO, it requires expertise in local citation building, food-specific schema markup, photo optimization, and managing presence across platforms like Yelp, TripAdvisor, and delivery apps. The search intent is also uniquely high-conversion since people searching for restaurants are often ready to visit or order immediately.'
  },
  {
    question: 'How do I do keyword research for restaurants and food businesses?',
    answer: 'Restaurant keyword research focuses on local search intent combined with cuisine types, meal times, and dining occasions. Start with tools like Google Keyword Planner, Ahrefs, or SEMrush to identify high-volume local searches like "best Italian restaurant [city]" or "brunch spots near me." Analyze competitor rankings, Google autocomplete suggestions, and "People Also Ask" sections. Focus on long-tail keywords that include your location, cuisine type, menu specialties, and dining attributes like "outdoor dining," "vegan options," or "private events." Local keywords typically have lower search volumes but much higher conversion rates.'
  },
  {
    question: 'What are backlinks and why do they matter for food SEO?',
    answer: 'Backlinks are links from other websites pointing to your restaurant website. They act as "votes of confidence" that signal to Google your site is trustworthy and authoritative. Quality backlinks from local news sites, food blogs, chamber of commerce directories, and industry publications significantly boost your domain authority and search rankings. For restaurants, backlinks from local publications covering your opening, food bloggers reviewing your dishes, or event listings can drive both SEO value and direct referral traffic. Focus on earning natural links through great food, community involvement, and media outreach rather than buying low-quality links.'
  },
  {
    question: 'How important are Core Web Vitals for restaurant websites?',
    answer: 'Core Web Vitals are critical for restaurant websites because hungry customers expect fast, smooth mobile experiences. Google uses metrics like Largest Contentful Paint (loading speed), First Input Delay (interactivity), and Cumulative Layout Shift (visual stability) as ranking factors. For restaurants, slow-loading menu pages or clunky mobile ordering can directly hurt both your rankings and conversion rates. Most restaurant searches happen on mobile devices, often while customers are actively looking for a place to eat or order from. We optimize your Core Web Vitals using tools like Google PageSpeed Insights and GTmetrix to ensure your site loads quickly and converts visitors into customers.'
  },
  {
    question: 'Should food businesses invest in local SEO?',
    answer: 'Absolutely. Local SEO is the most important investment for any restaurant or food business serving a geographic area. Over 90% of consumers search for restaurants online, and "near me" searches have grown exponentially. Local SEO ensures you appear in Google Maps, local pack results, and location-based searches when customers are actively looking for places to eat. This includes optimizing your Google Business Profile, building local citations, managing reviews, and creating location-specific content. Unlike broader SEO strategies, local SEO delivers customers who are ready to visit or order right now, making it one of the highest-ROI marketing channels for food businesses.'
  },
  {
    question: 'How do I track SEO performance for my restaurant or food business?',
    answer: 'Track restaurant SEO performance using Google Analytics 4 to monitor website traffic, reservation conversions, and online order completions. Google Search Console shows which keywords drive clicks, your average search rankings, and technical issues affecting visibility. For local SEO, monitor your Google Business Profile insights to see search queries, map views, direction requests, and phone calls. Track rankings for target keywords using tools like Ahrefs or SEMrush. Measure review quantity, average rating, and response rate across platforms. Set up conversion tracking for reservations, delivery orders, and contact form submissions. Monthly reporting should connect SEO activities directly to business outcomes like foot traffic, online orders, and revenue growth.'
  }
]

const relatedIndustries = [
  { name: 'Travel & Hospitality', href: '/industries/travel' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'Real Estate', href: '/industries/realestate' },
  { name: 'Nonprofit', href: '/industries/nonprofit' },
  { name: 'AI & Machine Learning', href: '/industries/ai' }
]

function Header() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Food &amp; Beverage
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Restaurant SEO that puts you on the map and fills every table
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Specialized SEO strategies for restaurants and food brands that drive local visibility, online reservations, and delivery orders.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Restaurant SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">$898B</div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">US FOOD SERVICE INDUSTRY REVENUE</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">90%</div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">OF CONSUMERS SEARCH FOR RESTAURANTS NEARBY</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">3.6K</div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">AVG MONTHLY SEARCHES PER RESTAURANT KEYWORD</div>
          </div>
          <div className="text-center">
            <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">5.2%</div>
            <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">AVERAGE SEARCH-TO-VISIT CONVERSION RATE</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ChallengesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Restaurant Industry Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Unique SEO challenges in the food &amp; beverage space.
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

function ServicesSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Restaurant SEO Services</Subheading>
        <Heading as="h2" className="mt-2">
          Tailored strategies for restaurants &amp; food brands.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
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
  )
}

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we grow your restaurant&apos;s online presence.
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

function TechnicalSEOSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Technical Excellence</Subheading>
        <Heading as="h2" className="mt-2">
          Advanced SEO fundamentals that drive food business growth.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
        <div className="bg-paper p-8">
          <h3 className="font-heading text-xl font-semibold text-ink mb-4">
            Core Web Vitals &amp; Mobile Performance
          </h3>
          <p className="text-sm leading-relaxed text-slate mb-6">
            Fast-loading, mobile-optimized websites are critical for restaurants. We ensure your menu loads quickly on smartphones so hungry customers can order without friction.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Google PageSpeed Insights optimization for mobile ordering
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              GTmetrix performance monitoring for menu pages
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Image compression for food photography
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Mobile-first responsive design testing
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Third-party delivery platform integration optimization
            </li>
          </ul>
        </div>

        <div className="bg-paper p-8">
          <h3 className="font-heading text-xl font-semibold text-ink mb-4">
            Food Business Schema Markup
          </h3>
          <p className="text-sm leading-relaxed text-slate mb-6">
            Structured data markup helps search engines understand your menu, hours, location, and cuisine type so your restaurant appears in rich search results.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              schema.org Restaurant schema implementation
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              JSON-LD markup for Menu and Recipe pages
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              LocalBusiness and OpeningHours schema
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Review and AggregateRating markup
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Event schema for special dining events and catering
            </li>
          </ul>
        </div>

        <div className="bg-paper p-8">
          <h3 className="font-heading text-xl font-semibold text-ink mb-4">
            Link Building for Food Businesses
          </h3>
          <p className="text-sm leading-relaxed text-slate mb-6">
            Quality backlinks from food blogs, local publications, and industry sites boost your domain authority and search rankings for competitive restaurant keywords.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Ahrefs backlink analysis and competitor research
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              SEMrush link gap identification for restaurant keywords
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Moz Domain Authority tracking and improvement
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Food blogger and local publication outreach
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Industry association and chamber of commerce links
            </li>
          </ul>
        </div>

        <div className="bg-paper p-8">
          <h3 className="font-heading text-xl font-semibold text-ink mb-4">
            Food Analytics &amp; Order Tracking
          </h3>
          <p className="text-sm leading-relaxed text-slate mb-6">
            Track how diners find your restaurant online, which keywords drive reservations, and optimize your strategy based on real conversion data.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Google Analytics 4 e-commerce tracking for online orders
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Google Search Console local search performance monitoring
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Screaming Frog technical audits for menu structure
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Reservation and delivery conversion rate tracking
            </li>
            <li className="flex items-start gap-3 text-sm text-stone">
              <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
              Google Business Profile insights and action tracking
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Restaurant Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a restaurant group dominate local search.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
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

function KeywordsSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Restaurant Industry Keywords</Subheading>
        <Heading as="h2" className="mt-2">
          Examples of food &amp; beverage keywords we target.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {keywordGroups.map((group, index) => (
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

function TestimonialSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <Subheading>What Our Clients Say</Subheading>
          <div className="mt-8 mb-4 font-display text-2xl leading-none text-accent">&ldquo;</div>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink mb-8">
            TheProjectSEO completely transformed our online presence. Before working with them, we were buried on page three of Google.
            Now we&apos;re the top result for every major dining keyword in our area. Our reservations have tripled and delivery orders
            keep climbing month after month. They truly understand the restaurant business.
          </blockquote>
          <div className="flex items-center justify-center gap-3">
            <div className="size-10 rounded-full bg-ink/10" />
            <div className="text-left">
              <div className="font-heading text-sm font-semibold text-ink">Marco Pellegrini</div>
              <div className="text-xs text-ash">Owner, Pellegrini Restaurant Group</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function PricingSection() {
  return (
    <Container className="py-24">
      <div className="max-w-3xl mx-auto text-center">
        <Subheading>Restaurant SEO Pricing</Subheading>
        <Heading as="h2" className="mt-2">
          Invest in your restaurant&apos;s online growth.
        </Heading>
        <Lead className="mt-6">
          Our restaurant SEO packages are designed to deliver measurable results for single and multi-location food businesses.
        </Lead>
        <div className="mt-10 inline-block border border-border-strong bg-white p-8">
          <div className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-2">Starting at</div>
          <div className="flex items-baseline justify-center gap-1">
            <span className="font-mono text-[48px] font-bold text-ink">$997</span>
            <span className="text-ash">/month</span>
          </div>
          <p className="text-sm text-slate mt-4 max-w-md">
            Includes local SEO, Google Business Profile optimization, review management, and monthly reporting. Custom packages available for multi-location restaurant groups.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Custom Quote</Button>
            <Button variant="outline" href="/pricing">
              View All Plans
            </Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Restaurant SEO questions answered" items={faqItems} />
    </>
  )
}

function RelatedIndustriesSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Related Industries</Subheading>
        <Heading as="h2" className="mt-2">
          SEO solutions for every industry.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
        {relatedIndustries.map((industry, index) => (
          <a
            key={index}
            href={industry.href}
            className="bg-paper p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="font-heading text-lg font-semibold text-ink">{industry.name}</h3>
            <p className="text-sm text-accent mt-2">Learn more &rarr;</p>
          </a>
        ))}
      </div>
    </Container>
  )
}


export default function FoodBeverageSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Restaurant & Food SEO Services | Food & Beverage SEO',
          description:
            'Specialized SEO services for restaurants, food brands, and beverage companies. Drive local visibility, online reservations, and delivery orders with proven restaurant SEO strategies.',
          url: 'https://theprojectseo.com/industries/food',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Restaurant, Local search (Internet), Menu, Search engine results page',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Restaurant',
              sameAs: 'https://www.wikidata.org/wiki/Q11707',
            },
            {
              '@type': 'Thing',
              name: 'Local search (Internet)',
              sameAs: 'https://www.wikidata.org/wiki/Q616553',
            },
            {
              '@type': 'Thing',
              name: 'Menu',
              sameAs: 'https://www.wikidata.org/wiki/Q658274',
            },
            {
              '@type': 'Thing',
              name: 'Search engine results page',
              sameAs: 'https://www.wikidata.org/wiki/Q2704141',
            }
          ],
        }}
      />
      {/* Section 1: Hero */}
      <Header />
      {/* Section 2: Stats Bar */}
      <StatsSection />
      {/* Section 3: Challenges */}
      <ChallengesSection />
      {/* Section 4: Services */}
      <ServicesSection />
      {/* Section 5: Process */}
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we grow your restaurant's online presence"
        steps={processSteps}
      />
      {/* Section 6: Technical SEO */}
      <TechnicalSEOSection />
      {/* Section 7: Case Study (dark) */}
      <CaseStudySection />
      {/* Section 8: Keywords */}
      <KeywordsSection />
      {/* Section 9: Testimonial */}
      <TestimonialSection />
      {/* Section 10: Pricing */}
      <PricingSection />
      {/* Section 11: FAQ */}
      <TestimonialAndFAQSection />
      {/* Section 12: Related Industries */}
      <RelatedIndustriesSection />
      {/* Section 13: CTA */}
      <CTAFormSection subheading="Ready to Fill Every Seat with SEO?" heading="Let's put your restaurant on the map." lead="Partner with SEO experts who understand the food & beverage industry. We'll help you dominate local search, drive more reservations, and grow your delivery orders." submitText="Get Restaurant SEO Strategy" />
      <Footer />
    </main>
  )
}
