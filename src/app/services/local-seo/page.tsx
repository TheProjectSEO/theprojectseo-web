import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import { Footer } from '@/components/footer'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  MapPin,
  Star,
  Building2,
  Search,
  Smartphone,
  FileText,
  BarChart3,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Local SEO Services | Google Business Profile Optimization, NAP Consistency & Citations | TheProjectSEO',
  description:
    'Expert local SEO services. Google Business Profile optimization, NAP consistency, local citations, Google Reviews management, near me search optimization, and mobile-first local strategies. 8+ years experience.',
  openGraph: {
    title: 'Local SEO Services | Dominate Local Search & Google Maps',
    description:
      'Expert local SEO services. Google Business Profile optimization, local citations, review management, near me searches, and geo-modified keyword strategies.',
    url: 'https://theprojectseo.com/services/local-seo',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Local SEO Services | Dominate Local Search & Google Maps',
    description:
      'Expert local SEO services. Google Business Profile optimization, local citations, review management, and mobile-first local strategies.',
  },
  alternates: {
    canonical: 'https://theprojectseo.com/services/local-seo',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Local SEO Services',
  title: 'Dominate local search and Google',
  accentWord: 'Maps',
  titleAfterAccent: '',
  description:
    'Local SEO gets your business found by nearby customers. We optimize Google Business Profile, build local citations, manage reviews, and implement mobile-first strategies that drive foot traffic, calls, and local conversions from near me searches.',
  ctaPrimaryText: 'Get Your Local SEO Audit',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '300%', label: 'Avg Local Visibility Increase' },
  { value: '47%', label: 'More Store Visits' },
  { value: '8+', label: 'Years Experience' },
  { value: '500+', label: 'Local Businesses Helped' },
]

const servicesData = {
  subheading: 'What We Deliver',
  heading: 'Comprehensive local SEO services.',
  lead: 'Local SEO is critical for businesses serving specific geographic areas. 76% of local searches happen on mobile devices, and 28% of local searches result in a purchase within 24 hours.',
  services: [
    {
      icon: MapPin,
      title: 'Google Business Profile Optimization',
      description:
        'Complete optimization of Google Business Profile including category selection, attribute configuration, photo uploads, Google Posts, Q&A management, service area setup, and product/service listings.',
      features: [
        'Full profile optimization',
        'Category & attribute setup',
        'Photo & video uploads',
        'Google Posts scheduling',
      ],
    },
    {
      icon: Building2,
      title: 'NAP Consistency & Local Citation Building',
      description:
        'Build and optimize local citations across 50+ high-authority directories including Yelp, Yellow Pages, Apple Maps, Bing Places. Audit and correct NAP consistency issues.',
      features: [
        '50+ directory citations',
        'NAP consistency audit',
        'Duplicate listing cleanup',
        'Industry-specific directories',
      ],
    },
    {
      icon: Star,
      title: 'Google Reviews Management',
      description:
        'Systematic review generation campaigns, review monitoring and response strategies, and reputation management. Reviews are a top-3 local ranking factor.',
      features: [
        'Review generation campaigns',
        'Response management',
        'Review monitoring',
        'Negative review mitigation',
      ],
    },
    {
      icon: Search,
      title: 'Near Me Search Optimization',
      description:
        'Optimize for near me searches and geo-modified keywords. Implement local schema markup, optimize for mobile voice search, and improve local pack rankings.',
      features: [
        'Near me keyword targeting',
        'Local pack optimization',
        'Voice search optimization',
        'Geo-modified content',
      ],
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Local Optimization',
      description:
        'With 76% of local searches on mobile, optimize mobile experience with click-to-call functionality, mobile-friendly local landing pages, and fast load times.',
      features: [
        'Click-to-call optimization',
        'Mobile landing pages',
        'Fast mobile load times',
        'Location-based mobile UX',
      ],
    },
    {
      icon: FileText,
      title: 'Local Content Strategy',
      description:
        'Create location-specific content including city/neighborhood pages, local blog content, locally relevant case studies, and geo-targeted landing pages.',
      features: [
        'Location landing pages',
        'Local blog content',
        'Area-specific case studies',
        'Neighborhood targeting',
      ],
    },
    {
      icon: BarChart3,
      title: 'Local Pack Ranking Improvement',
      description:
        'Strategic optimization to improve rankings in Google&apos;s local 3-pack. Includes proximity optimization, category optimization, and competitive analysis.',
      features: [
        'Local pack targeting',
        'Proximity optimization',
        'Category strategy',
        'Competitor tracking',
      ],
    },
    {
      icon: Users,
      title: 'Multi-Location SEO',
      description:
        'For businesses with multiple locations, implement scalable local SEO strategies including separate GMB profiles, location-specific pages, and centralized review management.',
      features: [
        'Multiple GMB profiles',
        'Location page templates',
        'Centralized monitoring',
        'Brand consistency',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Methodology',
  heading: 'How we dominate local search.',
  steps: [
    {
      number: '01',
      title: 'Local SEO Audit',
      description:
        'Comprehensive audit of your current local search presence: Google Business Profile completeness, NAP consistency across citations, review profile analysis, local pack rankings, mobile optimization assessment, and competitor local SEO analysis. Identify every opportunity for local visibility improvement.',
    },
    {
      number: '02',
      title: 'Google Business Profile Optimization',
      description:
        'Optimize every element of your Google Business Profile: accurate business category selection, complete service/product listings, high-quality photos and videos, service area definition, business hours and special hours, Google Posts creation, Q&A seeding and management, and attribute selection.',
    },
    {
      number: '03',
      title: 'Local Citation Building & NAP Cleanup',
      description:
        'Build citations across 50+ high-authority local directories. Audit existing citations for NAP consistency issues. Correct inconsistencies and duplicates. Claim unclaimed profiles. Submit to industry-specific directories. Monitor citation health ongoing.',
    },
    {
      number: '04',
      title: 'Review Generation & Management',
      description:
        'Implement systematic review generation campaigns via email and SMS. Set up review monitoring alerts. Respond to all reviews (positive and negative) professionally. Implement reputation management for negative reviews. Track review velocity and sentiment.',
    },
    {
      number: '05',
      title: 'Local Content & On-Page Optimization',
      description:
        'Create location-specific landing pages for each service area. Optimize existing pages with geo-modified keywords. Implement local schema markup (LocalBusiness, Organization). Create locally relevant blog content. Optimize for near me and voice search queries.',
    },
    {
      number: '06',
      title: 'Monitoring & Reporting',
      description:
        'Track local pack rankings for target geo-modified keywords. Monitor Google Business Profile insights (views, calls, direction requests). Measure review acquisition and sentiment. Report on local organic traffic, phone calls, and foot traffic attribution.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Multi-location retailer: 300% increase in store visits from local search.',
  challenge:
    'A specialty retailer with 12 locations across three states had virtually no local search visibility. Individual store pages were not optimized for local keywords, Google Business Profiles were incomplete and inconsistent, NAP data varied across locations, and the business had minimal reviews across all locations. Competitors dominated the local pack for all target service areas.',
  solution:
    'Implemented comprehensive multi-location local SEO strategy. Optimized all 12 Google Business Profiles with complete information, photos, and regular Google Posts. Built and standardized 50+ citations per location across local directories. Launched review generation campaign across all locations achieving 15-25 new reviews per month per location. Created location-specific landing pages optimized for geo-modified keywords. Implemented LocalBusiness schema on all pages. Set up centralized review monitoring and response workflow.',
  results: [
    {
      metric: 'Local Pack Rankings',
      improvement: '9 of 12',
      timeframe: 'Locations in local 3-pack',
    },
    {
      metric: 'Store Visits',
      improvement: '+300%',
      timeframe: 'From local search',
    },
    {
      metric: 'Google Reviews',
      improvement: '2,400+',
      timeframe: 'New reviews generated',
    },
    {
      metric: 'Direction Requests',
      improvement: '+450%',
      timeframe: 'Via Google Maps',
    },
  ],
}

const toolsData = {
  subheading: 'Tools & Technologies',
  heading: 'The local SEO stack we rely on.',
  lead: 'We use specialized tools for local search monitoring, citation building, and review management.',
  cards: [
    {
      title: 'Local Search Tracking',
      items: [
        'BrightLocal',
        'Whitespark',
        'Local Falcon',
        'Google Business Profile Insights',
      ],
    },
    {
      title: 'Citation Management',
      items: [
        'Yext',
        'Moz Local',
        'BrightLocal Citations',
        'Manual directory submission',
      ],
    },
    {
      title: 'Review Management',
      items: [
        'Podium',
        'Birdeye',
        'Grade.us',
        'Google Business Profile API',
      ],
    },
    {
      title: 'Analytics & Reporting',
      items: [
        'Google Analytics 4',
        'Call tracking software',
        'Google Looker Studio',
      ],
    },
  ],
}

const pricingData = {
  subheading: 'Cost & Pricing Guide',
  heading: 'How much does local SEO cost?',
  tiers: [
    {
      name: 'Starter',
      price: '$2,200',
      period: '/month',
      description: 'For single-location businesses building local presence.',
      features: [
        'Google Business Profile optimization',
        'NAP consistency audit',
        '25 local citation submissions',
        'Review generation setup',
        'Monthly review monitoring',
        'Local schema implementation',
        'Monthly reporting',
      ],
    },
    {
      name: 'Professional',
      price: '$2,500',
      period: '/month',
      description: 'For established local businesses or 2-3 locations.',
      features: [
        'Everything in Starter',
        '50+ local citation submissions',
        'Review response management',
        'Local content creation (2 pages)',
        'Google Posts (weekly)',
        'Competitor local tracking',
        'Call tracking integration',
        'Weekly reporting',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For multi-location businesses (4+ locations).',
      features: [
        'Everything in Professional',
        'Unlimited locations',
        'Custom location page strategy',
        'Centralized review management',
        'Multi-location reporting dashboard',
        'Priority support',
        'Quarterly strategy sessions',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What our clients say.',
  testimonials: [
    {
      quote:
        'We went from invisible on Google Maps to dominating the local pack for every neighborhood we serve. Store visits from local search tripled in six months.',
      author: 'David Thompson',
      role: 'Owner',
      company: 'Multi-Location Retailer',
    },
    {
      quote:
        'The review generation strategy transformed our online reputation. We went from 40 reviews to 300+ with a 4.7-star average, and our phone calls increased dramatically.',
      author: 'Maria Gonzalez',
      role: 'Marketing Director',
      company: 'Professional Services Firm',
    },
    {
      quote:
        'They optimized our Google Business Profile and built citations we did not even know existed. Our local pack rankings improved from position 8 to position 2 for our primary service area.',
      author: 'James Park',
      role: 'Owner',
      company: 'Home Services Business',
    },
  ],
}

const faqData = [
  {
    question: 'What is local SEO and why is it important?',
    answer: 'Local SEO optimizes your online presence to attract customers in your specific geographic area. It includes Google Business Profile optimization, local citation building, review management, and location-specific content. It is critical because 46% of all Google searches have local intent, 76% of local searches happen on mobile devices, and 28% of local searches result in a purchase within 24 hours. Local SEO puts your business in front of high-intent customers actively searching for your services nearby.',
  },
  {
    question: 'How much do local SEO services cost?',
    answer: 'Local SEO services typically range from $2,200-$5,000 per month depending on the number of locations and competitive landscape. Our Starter plan begins at $2,200/month for single-location businesses, Professional at $2,500/month for 2-3 locations with advanced features, and Enterprise is custom-quoted for multi-location businesses. One-time local SEO audits range from $500-$1,500. The investment delivers strong ROI as local search drives high-intent traffic with immediate purchase intent.',
  },
  {
    question: 'What is Google Business Profile and why does it matter?',
    answer: 'Google Business Profile (formerly Google My Business) is your business listing that appears in Google Search, Google Maps, and the local 3-pack. It displays your business name, address, phone, hours, reviews, photos, and more. It matters because it is the primary way customers discover local businesses, influences local pack rankings, drives phone calls and direction requests, and displays social proof through Google Reviews. An optimized GBP can increase visibility 300% or more.',
  },
  {
    question: 'What are local citations and why do I need them?',
    answer: 'Local citations are online mentions of your business Name, Address, and Phone number (NAP) on directories like Yelp, Yellow Pages, Apple Maps, and industry-specific sites. They matter because Google uses citation consistency to verify your business location and legitimacy. Inconsistent NAP data confuses search engines and damages rankings. Building 50+ high-quality citations across authoritative directories establishes trust signals that improve local pack rankings.',
  },
  {
    question: 'What is NAP consistency and why is it important?',
    answer: 'NAP consistency means your business Name, Address, and Phone number are identical across all online citations, directories, and your website. It is important because inconsistent NAP data creates confusion for search engines trying to verify your business location, directly damages local rankings, and reduces customer trust when they see conflicting information. We audit all existing citations, correct inconsistencies, and ensure every new citation uses standardized NAP formatting.',
  },
  {
    question: 'How do Google Reviews affect local SEO?',
    answer: 'Google Reviews are one of the top 3 local ranking factors. They provide social proof, influence local pack rankings, impact click-through rates from search results, and directly affect conversion rates. Businesses with more reviews and higher ratings rank higher in local search. Review velocity (frequency of new reviews) and review response rates also matter. We implement systematic review generation campaigns that typically produce 15-30 new reviews per month per location.',
  },
  {
    question: 'What is the local 3-pack and how do I rank in it?',
    answer: 'The local 3-pack is the map section showing three business listings that appears at the top of Google search results for local queries. Ranking in the local pack requires: fully optimized Google Business Profile, consistent NAP across citations, strong review profile, proximity to the searcher, relevant categories and services, website optimization for local keywords, and backlinks to your website. Local pack visibility drives significant traffic, calls, and foot traffic.',
  },
  {
    question: 'Do I need local SEO if I serve multiple cities?',
    answer: 'Yes, especially if you serve multiple cities. Multi-location local SEO requires creating separate Google Business Profiles for each location, building location-specific landing pages optimized for each city, generating citations for each location, and implementing a scalable review management strategy. We specialize in multi-location SEO that maintains brand consistency while optimizing each location independently for its geographic area.',
  },
  {
    question: 'How is local SEO different from regular SEO?',
    answer: 'Local SEO targets geographic-specific queries and local pack rankings, while regular SEO targets national/global organic rankings. Local SEO prioritizes Google Business Profile optimization, local citations, reviews, and NAP consistency. Regular SEO focuses more on content depth, backlinks, and technical optimization. However, they overlap significantly -- local businesses still need strong on-page SEO, technical SEO, and quality content. Most local businesses benefit from both local and traditional SEO strategies.',
  },
  {
    question: 'How long does local SEO take to show results?',
    answer: 'Local SEO typically shows initial results faster than traditional SEO. Google Business Profile optimizations can improve visibility within 2-4 weeks. Citation building and NAP consistency improvements show impact within 1-3 months. Review generation campaigns produce immediate social proof benefits with cumulative ranking impact over 3-6 months. Full local pack dominance typically takes 4-8 months in moderately competitive markets. The key is consistency -- ongoing optimization compounds results over time.',
  },
]

const ctaData = {
  subheading: 'Ready to Dominate Local Search?',
  heading: 'Get your free local SEO audit.',
  lead: 'Discover exactly what is holding back your local search visibility. Our audit covers Google Business Profile optimization, NAP consistency issues, review profile gaps, and local pack ranking opportunities.',
  submitText: 'Get Your Free Audit',
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function LocalSEOPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Local SEO Services',
          description: 'Professional local SEO services including Google Business Profile optimization, NAP consistency, local citation building, review management, near me search optimization, and multi-location strategies.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/local-seo',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="audit" />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="Local SEO frequently asked questions" items={faqData} />
      </Container>
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
