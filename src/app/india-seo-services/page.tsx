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
  title: 'India SEO Services | Top-Ranked SEO Agency | TheProjectSEO',
  description:
    'Leading SEO agency in India helping businesses dominate Google search results. Expert SEO services for Mumbai, Delhi, Bangalore & nationwide. Drive real business growth.',
  keywords: 'India SEO, Mumbai SEO services, Delhi SEO agency, Bangalore SEO expert, Indian digital marketing, Google India ranking',
  openGraph: {
    title: 'India SEO Services | Top-Ranked SEO Agency',
    description: 'Leading SEO agency in India helping businesses dominate Google search results nationwide.',
    url: 'https://theprojectseo.com/india-seo-services',
  },
}

const indianCities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Hyderabad', 'Pune',
  'Kolkata', 'Ahmedabad', 'Jaipur', 'Surat', 'Lucknow', 'Kanpur',
  'Nagpur', 'Indore', 'Thane', 'Bhopal', 'Visakhapatnam', 'Patna'
]

const localStats = [
  { metric: '750+', label: 'Indian Businesses Ranked #1' },
  { metric: '220%', label: 'Average Traffic Increase' },
  { metric: '28+', label: 'States & UTs Served' },
  { metric: '98%', label: 'Client Retention Rate' }
]

const services = [
  {
    icon: ChartBarIcon,
    title: 'Indian Market SEO Audit',
    description: 'Comprehensive analysis tailored for Indian search behavior, local competitors, and diverse market opportunities across different regions.',
    features: [
      'Multi-language SEO assessment (Hindi, English, regional)',
      'Competitor analysis vs. top Indian companies',
      'Mobile-first optimization for Indian users',
      'Local SERP analysis for Indian keywords',
      'Voice search optimization for Indian accent/queries'
    ]
  },
  {
    icon: GlobeAltIcon,
    title: 'Local India SEO',
    description: 'Dominate local search results in Mumbai, Delhi, Bangalore, Chennai, and other major Indian cities.',
    features: [
      'Google My Business optimization for India',
      'Local citation building (Indian directories)',
      'Multi-language keyword optimization',
      'Regional landing page optimization',
      'Indian review management strategy'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'E-commerce SEO India',
    description: 'Specialized SEO for Indian e-commerce businesses competing against Flipkart, Amazon India, and local marketplaces.',
    features: [
      'Product page optimization for Indian buyers',
      'Festival season SEO strategies',
      'Regional delivery optimization',
      'Price comparison optimization',
      'Indian payment method integration SEO'
    ]
  },
  {
    icon: UsersIcon,
    title: 'Enterprise SEO India',
    description: 'Advanced SEO strategies for large Indian corporations, startups, and multinational companies with Indian operations.',
    features: [
      'Multi-city SEO management',
      'International + local SEO strategy',
      'Large-scale content optimization',
      'Enterprise technical SEO',
      'Brand visibility across India'
    ]
  }
]

const testimonials = [
  {
    quote: "TheProjectSEO transformed our Mumbai-based fintech startup's online presence. We achieved #1 rankings for competitive financial keywords and increased organic traffic by 450%, generating ₹8.5 crores in additional revenue.",
    author: "Rajesh Sharma",
    company: "FinTech Innovations Pvt Ltd",
    role: "CEO & Co-founder"
  },
  {
    quote: "As a Bangalore-based SaaS company, we needed SEO experts who understood both the Indian market and global reach. TheProjectSEO delivered exceptional results - we now rank higher than international competitors.",
    author: "Priya Patel",
    company: "CloudTech Solutions",
    role: "Head of Marketing"
  },
  {
    quote: "Our Delhi healthcare clinic's online visibility skyrocketed after working with TheProjectSEO. We now dominate local medical searches and receive 100+ qualified patient inquiries monthly from Google.",
    author: "Dr. Arjun Singh",
    company: "Advanced Medical Care",
    role: "Medical Director"
  }
]

const caseStudies = [
  {
    client: "Indian E-learning Platform",
    industry: "EdTech",
    challenge: "Competing with BYJU'S and Unacademy for educational searches",
    results: [
      "400% increase in organic traffic",
      "₹12 crores additional revenue in 18 months",
      "#1 rankings for 200+ education keywords",
      "3x improvement in course enrollment conversion"
    ]
  },
  {
    client: "Mumbai Real Estate Group",
    industry: "Real Estate",
    challenge: "Dominating competitive Mumbai property market",
    results: [
      "350% increase in local search visibility",
      "800+ qualified property leads monthly",
      "#1 for 'Mumbai flats for sale'",
      "60% increase in property site visits"
    ]
  }
]

const industries = [
  'IT & Software', 'E-commerce', 'Healthcare', 'Education', 'Real Estate',
  'Finance & Banking', 'Manufacturing', 'Retail', 'Hospitality', 'Automotive'
]

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl">🇮🇳</span>
            <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              #1 SEO Agency in India
            </span>
          </div>
          
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            India SEO Services That Drive Business Growth
          </h1>
          
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Help your Indian business dominate Google search results nationwide. 
            From Mumbai to Bangalore to Delhi - we connect you with your customers.
          </p>
          
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Free India SEO Audit</Button>
            <Button variant="secondary" href="/pricing">
              View Pricing Plans
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-gray-600">
            <span className="font-medium text-green-600">✓</span> Serving businesses across all Indian states
            <span className="mx-3">•</span>
            <span className="font-medium text-green-600">✓</span> Multi-language SEO expertise
            <span className="mx-3">•</span>
            <span className="font-medium text-green-600">✓</span> Indian market specialists since 2012
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-gradient-to-r from-orange-50 to-red-50 py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Indian SEO Success</Subheading>
          <Heading as="h2" className="mt-2">
            Trusted by 750+ Indian businesses nationwide.
          </Heading>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {localStats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-orange-600 sm:text-5xl">{stat.metric}</div>
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
        Specialized SEO services for the diverse Indian market.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        Our deep understanding of Indian search patterns, regional preferences, 
        multi-language requirements, and local competition gives your business the advantage.
      </Lead>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, index) => {
          const IconComponent = service.icon
          return (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-orange-50 flex items-center justify-center">
                  <IconComponent className="size-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <span className="inline-block w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
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
    <Container className="py-24 bg-gray-50">
      <div className="text-center mb-16">
        <Subheading>Industries We Serve</Subheading>
        <Heading as="h2" className="mt-2">
          SEO expertise across all major Indian industries.
        </Heading>
        <Lead className="mt-6 max-w-3xl mx-auto">
          From startups to enterprise companies, we&apos;ve helped businesses across 
          every major industry dominate their market through strategic SEO.
        </Lead>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {industries.map((industry) => (
          <div key={industry} className="text-center p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="text-sm font-medium text-gray-900">{industry}</div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TestimonialsSection() {
  return (
    <div className="bg-gradient-to-r from-orange-900 to-red-900 py-24">
      <Container>
        <Subheading dark className="text-center">Client Success Stories</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Indian businesses that dominate their markets.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl bg-white/10 backdrop-blur-sm p-8">
              <blockquote className="text-lg text-white mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="size-12 rounded-full bg-orange-600 flex items-center justify-center">
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
        Real results for Indian businesses.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {caseStudies.map((study, index) => (
          <div key={index} className="rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 p-8">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">{study.client}</h3>
              <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
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
        SEO services across India.
      </Heading>
      <Lead className="mt-6 max-w-3xl">
        We serve businesses in all major Indian cities and states, with specialized 
        local SEO strategies adapted for each regional market.
      </Lead>
      
      <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {indianCities.map((city) => (
          <div key={city} className="text-center p-4 rounded-lg bg-gradient-to-br from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-colors">
            <div className="text-sm font-medium text-gray-900">{city}</div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Serving all 28 states and 8 union territories across India. 
          Don't see your city? We work with businesses nationwide.
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
          <Subheading>Ready to dominate Indian search results?</Subheading>
          <Heading as="h2" className="mt-2">
            Get your free India SEO audit today.
          </Heading>
          <Lead className="mt-6">
            Discover exactly what it takes to outrank your competitors and dominate 
            Google search results for your target Indian market segments.
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
              Multi-language support
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Regional expertise
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

export default function IndiaSEO() {
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