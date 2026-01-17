import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import {
  ChartBarIcon,
  GlobeAltIcon,
  TrophyIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'USA SEO Services | Top-Ranked SEO Agency | TheProjectSEO',
  description:
    'Leading SEO agency in USA helping businesses dominate Google search results. Expert SEO services for New York, Los Angeles, Chicago & nationwide. Drive real revenue growth.',
  keywords: 'USA SEO, New York SEO services, Los Angeles SEO agency, Chicago SEO expert, American digital marketing, Google USA ranking',
  openGraph: {
    title: 'USA SEO Services | Top-Ranked SEO Agency',
    description: 'Leading SEO agency in USA helping businesses dominate Google search results nationwide.',
    url: 'https://theprojectseo.com/usa-seo-services',
  },
}

const usCities = [
  'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia',
  'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville',
  'Fort Worth', 'Columbus', 'Charlotte', 'San Francisco', 'Indianapolis', 'Seattle',
  'Denver', 'Washington DC', 'Boston', 'Nashville', 'Baltimore', 'Oklahoma City'
]

const usStates = [
  'California', 'Texas', 'Florida', 'New York', 'Pennsylvania', 'Illinois',
  'Ohio', 'Georgia', 'North Carolina', 'Michigan', 'New Jersey', 'Virginia',
  'Washington', 'Arizona', 'Massachusetts', 'Tennessee', 'Indiana', 'Maryland'
]

const localStats = [
  { metric: '1,200+', label: 'US Businesses Ranked #1' },
  { metric: '285%', label: 'Average Traffic Increase' },
  { metric: '50', label: 'States Served Nationwide' },
  { metric: '99%', label: 'Client Retention Rate' }
]

const services = [
  {
    icon: ChartBarIcon,
    title: 'US Market SEO Audit',
    description: 'Comprehensive analysis tailored for highly competitive US search landscape, including national and local competitor assessment.',
    features: [
      'National vs. local SERP analysis',
      'Competitor analysis vs. top US companies',
      'Voice search optimization for US market',
      'Mobile-first optimization for US users',
      'Conversion rate optimization focus'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Local US SEO',
    description: 'Dominate local search results in major US metropolitan areas and compete effectively against national chains.',
    features: [
      'Google My Business optimization for US market',
      'Local citation building (US directories)',
      'State and city-specific landing pages',
      'Local review management strategy',
      'Multi-location SEO for franchises'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'E-commerce SEO USA',
    description: 'Specialized SEO for US e-commerce businesses competing against Amazon, major retailers, and D2C brands.',
    features: [
      'Product page optimization for US buyers',
      'Holiday season SEO strategies',
      'Shopping intent keyword targeting',
      'Amazon SEO integration',
      'B2B e-commerce optimization'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Enterprise SEO USA',
    description: 'Advanced SEO strategies for Fortune 500 companies, large corporations, and fast-growing US businesses.',
    features: [
      'Multi-state SEO management',
      'Enterprise-scale content optimization',
      'Technical SEO at scale',
      'International + domestic SEO',
      'Corporate brand authority building'
    ]
  }
]

const testimonials = [
  {
    quote: "TheProjectSEO helped our NYC-based SaaS company achieve #1 rankings for highly competitive B2B keywords. Our organic traffic increased 380% in 10 months, generating $4.2M in additional ARR.",
    author: "Michael Thompson",
    company: "CloudScale Technologies",
    role: "VP of Marketing"
  },
  {
    quote: "As a Los Angeles-based e-commerce brand, we needed SEO experts who could compete with Amazon and major retailers. TheProjectSEO delivered exceptional results - we now rank #1 for our primary product categories.",
    author: "Sarah Johnson",
    company: "West Coast Lifestyle Co.",
    role: "CEO & Founder"
  },
  {
    quote: "Our Chicago law firm's online presence was transformed by TheProjectSEO. We now dominate local legal searches across the Midwest and generate 150+ qualified leads monthly from organic search.",
    author: "Attorney David Rodriguez",
    company: "Rodriguez & Partners LLP",
    role: "Managing Partner"
  }
]

const caseStudies = [
  {
    client: "National Healthcare Provider",
    industry: "Healthcare",
    challenge: "Competing with WebMD and major health systems for medical searches",
    results: [
      "425% increase in organic traffic",
      "$8.5M additional revenue in 24 months",
      "#1 rankings for 300+ medical keywords",
      "4x improvement in patient appointment bookings"
    ]
  },
  {
    client: "Texas-based B2B Manufacturing",
    industry: "Industrial Manufacturing",
    challenge: "Competing nationally while maintaining local Texas market dominance",
    results: [
      "310% increase in B2B lead generation",
      "1,200+ qualified manufacturing leads monthly",
      "#1 for 'industrial equipment manufacturing'",
      "75% increase in enterprise client inquiries"
    ]
  }
]

const industries = [
  'Technology & Software', 'Healthcare', 'Finance & Banking', 'E-commerce & Retail',
  'Real Estate', 'Legal Services', 'Manufacturing', 'Professional Services',
  'Education', 'Automotive', 'Hospitality', 'Non-Profit'
]

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🇺🇸</span>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              #1 SEO Agency in USA
            </span>
          </div>
          
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            USA SEO Services That Dominate Competition
          </h1>
          
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Help your American business outrank competitors and dominate Google search results nationwide. 
            From coast to coast - we drive revenue through search.
          </p>
          
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Free USA SEO Audit</Button>
            <Button variant="secondary" href="/pricing">
              View Enterprise Pricing
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-600">
            <span className="font-medium text-green-600">✓</span> Serving all 50 states nationwide
            <span className="mx-3">•</span>
            <span className="font-medium text-green-600">✓</span> Fortune 500 experience
            <span className="mx-3">•</span>
            <span className="font-medium text-green-600">✓</span> US market leaders since 2012
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>USA SEO Success</Subheading>
          <Heading as="h2" className="mt-2">
            Trusted by 1,200+ American businesses nationwide.
          </Heading>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {localStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600 sm:text-5xl">{stat.metric}</div>
              <div className="mt-2 text-sm font-medium text-gray-600">{stat.label}</div>
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
      <Subheading>SEO Services</Subheading>
      <Heading as="h2" className="mt-2 max-w-3xl">
        Advanced SEO services for the competitive US market.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our expertise in the highly competitive US search landscape, consumer behavior, 
        and enterprise-level SEO strategies gives your business the competitive advantage.
      </Lead>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <IconComponent className="size-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </Container>
  )
}

function IndustriesSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Industries We Dominate</Subheading>
          <Heading as="h2" className="mt-2">
            SEO expertise across all major US industries.
          </Heading>
          <Lead className="mt-6 max-w-3xl mx-auto">
            From Fortune 500 enterprises to fast-growing startups, we&apos;ve helped American 
            businesses across every major industry achieve search dominance.
          </Lead>
        </div>
        
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="text-sm font-medium text-gray-900">{industry}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function TestimonialsSection() {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 py-24">
      <Container>
        <Subheading dark className="text-center">Client Success Stories</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          American businesses that dominate their markets.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-white/10 backdrop-blur-sm p-8">
              <blockquote className="text-lg text-white mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="size-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-300">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CaseStudiesSection() {
  return (
    <Container className="py-24">
      <Subheading>Case Studies</Subheading>
      <Heading as="h2" className="mt-2">
        Proven results for American enterprises.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <div key={index} className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{study.client}</h3>
              <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                {study.industry}
              </span>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-900 mb-2">Challenge:</h4>
              <p className="text-gray-600">{study.challenge}</p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-3">Results:</h4>
              <ul className="space-y-2">
                {study.results.map((result, resultIndex) => (
                  <li key={resultIndex} className="flex items-start gap-3">
                    <span className="text-green-600 font-bold">✓</span>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function LocationsSection() {
  return (
    <Container className="py-24">
      <Subheading>Service Areas</Subheading>
      <Heading as="h2" className="mt-2">
        SEO services across the United States.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We serve businesses in all 50 states, with specialized strategies for major 
        metropolitan areas and understanding of regional market dynamics.
      </Lead>
      
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-6">Major Cities</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6">
          {usCities.map((city) => (
            <div key={city} className="text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-colors">
              <div className="text-sm font-medium text-gray-900">{city}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12">
        <h3 className="text-lg font-semibold mb-6">States We Serve</h3>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {usStates.map((state) => (
            <div key={state} className="text-center p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
              <div className="text-sm font-medium text-gray-900">{state}</div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Serving all 50 states, Washington DC, and US territories. 
          Nationwide coverage with local market expertise.
        </p>
      </div>
    </Container>
  )
}

function CTASection() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Ready to dominate US search results?</Subheading>
          <Heading as="h2" className="mt-2">
            Get your free USA SEO audit today.
          </Heading>
          <Lead className="mt-6">
            Discover exactly what it takes to outrank your toughest competitors and dominate 
            Google search results in the highly competitive US market.
          </Lead>
          
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Enterprise Pricing
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Enterprise-grade solutions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Fortune 500 experience
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Results within 30 days
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function USASEO() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <IndustriesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <LocationsSection />
      <CTASection />
      <Footer />
    </main>
  )
}