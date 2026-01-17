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
  title: 'Philippines SEO Services | Top-Ranked SEO Agency | TheProjectSEO',
  description:
    'Leading SEO agency in Philippines helping businesses dominate Google search results. Expert SEO services for Manila, Cebu, Davao & nationwide. Get results that drive revenue.',
  keywords: 'Philippines SEO, Manila SEO services, Cebu SEO agency, Davao SEO expert, Philippine digital marketing, Google Philippines ranking',
  openGraph: {
    title: 'Philippines SEO Services | Top-Ranked SEO Agency',
    description: 'Leading SEO agency in Philippines helping businesses dominate Google search results nationwide.',
    url: 'https://theprojectseo.com/philippines-seo-services',
  },
}

const philippinesCities = [
  'Manila', 'Cebu City', 'Davao City', 'Quezon City', 'Makati', 'Pasig',
  'Taguig', 'Antipolo', 'Zamboanga City', 'Cagayan de Oro', 'Paranaque',
  'Dasmarinas', 'Valenzuela', 'Bacoor', 'General Santos', 'Las Pinas'
]

const localStats = [
  { metric: '500+', label: 'Philippine Businesses Ranked #1' },
  { metric: '180%', label: 'Average Traffic Increase' },
  { metric: '25+', label: 'Cities Served Nationwide' },
  { metric: '95%', label: 'Client Retention Rate' }
]

const services = [
  {
    icon: ChartBarIcon,
    title: 'Philippine Market SEO Audit',
    description: 'Comprehensive analysis of your website\'s performance in Philippine search results, including local competitors and market opportunities.',
    features: [
      'Local SERP analysis for Philippine keywords',
      'Competitor analysis vs. top PH companies',
      'Technical SEO assessment',
      'Mobile-first optimization review',
      'Local search visibility analysis'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Local Philippines SEO',
    description: 'Dominate local search results in Manila, Cebu, Davao, and other major Philippine cities.',
    features: [
      'Google My Business optimization',
      'Local citation building (PH directories)',
      'Filipino keyword optimization',
      'Location-based landing pages',
      'Local review management'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'E-commerce SEO Philippines',
    description: 'Specialized SEO for Philippine e-commerce businesses competing against Shopee, Lazada, and local stores.',
    features: [
      'Product page optimization',
      'Category page SEO strategy',
      'Shopping keyword targeting',
      'Conversion rate optimization',
      'Local delivery area targeting'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Enterprise SEO Philippines',
    description: 'Advanced SEO strategies for large Philippine corporations and multinational companies.',
    features: [
      'Multi-location SEO management',
      'International SEO (PH + global)',
      'Large-scale content optimization',
      'Technical SEO at scale',
      'Corporate brand visibility'
    ]
  }
]

const testimonials = [
  {
    quote: "TheProjectSEO helped our Manila-based startup achieve #1 rankings for competitive keywords. Our organic traffic increased 320% in 8 months, leading to ₱2.5M in additional revenue.",
    author: "Maria Santos",
    company: "TechStart Manila",
    role: "CEO & Founder"
  },
  {
    quote: "As a Cebu-based e-commerce company, we needed SEO experts who understood the Philippine market. TheProjectSEO delivered beyond expectations - we now outrank national competitors.",
    author: "Carlos Reyes",
    company: "Island Commerce Co.",
    role: "Marketing Director"
  },
  {
    quote: "Working with TheProjectSEO transformed our Davao law firm's online presence. We now dominate local legal searches and get 50+ qualified leads monthly from Google.",
    author: "Attorney Jennifer Cruz",
    company: "Cruz & Associates Law",
    role: "Senior Partner"
  }
]

const caseStudies = [
  {
    client: "Philippine E-commerce Retailer",
    industry: "Online Retail",
    challenge: "Competing against Shopee and Lazada for product searches",
    results: [
      "340% increase in organic traffic",
      "₱5.2M additional revenue in 12 months",
      "#1 rankings for 150+ product keywords",
      "2.5x improvement in conversion rate"
    ]
  },
  {
    client: "Manila Real Estate Agency",
    industry: "Real Estate",
    challenge: "Dominating competitive Manila property market",
    results: [
      "280% increase in local search visibility",
      "600+ qualified property leads monthly",
      "#1 for 'Manila condos for sale'",
      "45% increase in property inquiries"
    ]
  }
]

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🇵🇭</span>
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              #1 SEO Agency in Philippines
            </span>
          </div>
          
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Philippines SEO Services That Drive Results
          </h1>
          
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Help your Philippine business dominate Google search results nationwide. 
            From Manila to Cebu to Davao - we get you found by your customers.
          </p>
          
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Free Philippines SEO Audit</Button>
            <Button variant="secondary" href="/pricing">
              View Pricing Plans
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-600">
            <span className="font-medium text-green-600">✓</span> Serving businesses across all Philippine regions
            <span className="mx-3">•</span>
            <span className="font-medium text-green-600">✓</span> Local market expertise since 2012
            <span className="mx-3">•</span>
            <span className="font-medium text-green-600">✓</span> Filipino & English SEO specialists
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Philippine SEO Success</Subheading>
          <Heading as="h2" className="mt-2">
            Trusted by 500+ Philippine businesses.
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
        Specialized SEO services for the Philippine market.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our deep understanding of Philippine search behavior, local competition, 
        and market dynamics gives your business the edge it needs to succeed.
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

function TestimonialsSection() {
  return (
    <div className="bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">Client Success Stories</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Philippine businesses that dominate search.
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
        Real results for Philippine businesses.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <div key={index} className="rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
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
        SEO services across the Philippines.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We serve businesses in all major Philippine cities and provinces, with specialized 
        local SEO strategies for each market.
      </Lead>
      
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
        {philippinesCities.map((city) => (
          <div key={city} className="text-center p-4 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors">
            <div className="text-sm font-medium text-gray-900">{city}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Don't see your city? We serve businesses nationwide across all Philippine regions.
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
          <Subheading>Ready to dominate Philippine search results?</Subheading>
          <Heading as="h2" className="mt-2">
            Get your free Philippines SEO audit today.
          </Heading>
          <Lead className="mt-6">
            Discover exactly what it takes to outrank your competitors and dominate 
            Google search results for your target Philippine market.
          </Lead>
          
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Free SEO Audit</Button>
            <Button variant="outline" href="/pricing">
              View Pricing Plans
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-600">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              No obligations
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

export default function PhilippinesSEO() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <TestimonialsSection />
      <CaseStudiesSection />
      <LocationsSection />
      <CTASection />
      <Footer />
    </main>
  )
}