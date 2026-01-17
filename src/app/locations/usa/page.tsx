import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  MapPinIcon,
  ClockIcon,
  LanguageIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'USA SEO Services | Search Engine Optimization United States | TheProjectSEO',
  description:
    'Professional SEO services for businesses in the United States. Local market expertise, Google algorithm updates, and proven strategies for US search rankings.',
}

const advantages = [
  {
    title: 'Local Market Expertise',
    description: 'Deep understanding of US search behavior, consumer preferences, and market dynamics.',
    icon: MapPinIcon,
    details: [
      'US consumer search behavior analysis',
      'Regional market variations',
      'Local business directory optimization',
      'State-specific SEO strategies'
    ]
  },
  {
    title: 'Google Algorithm Expertise',
    description: 'Stay ahead of Google updates with strategies tailored for the US market.',
    icon: ChartBarIcon,
    details: [
      'Real-time algorithm update monitoring',
      'US-specific ranking factor analysis',
      'Core Web Vitals optimization',
      'Mobile-first indexing strategies'
    ]
  },
  {
    title: 'Timezone Aligned Support',
    description: 'US business hours support for real-time communication and faster response.',
    icon: ClockIcon,
    details: [
      'EST/PST business hours support',
      'Same-day response guarantee',
      'Live chat during US hours',
      'Emergency SEO support available'
    ]
  },
  {
    title: 'Cultural Understanding',
    description: 'Native understanding of American culture, language nuances, and content preferences.',
    icon: LanguageIcon,
    details: [
      'American English optimization',
      'Cultural content relevance',
      'US holiday and seasonal trends',
      'Regional dialect considerations'
    ]
  }
]

const services = [
  {
    name: 'Local SEO USA',
    description: 'Optimize for local search across all US states and cities.',
    features: ['Google Business Profile optimization', 'Local citation building', 'Review management', 'Local keyword targeting']
  },
  {
    name: 'Enterprise SEO',
    description: 'Large-scale SEO for Fortune 500 and enterprise companies.',
    features: ['Multi-location optimization', 'Technical SEO at scale', 'Content strategy', 'Advanced analytics']
  },
  {
    name: 'E-commerce SEO',
    description: 'Drive sales for US online retailers and marketplaces.',
    features: ['Product page optimization', 'Category structuring', 'Shopping campaign integration', 'Conversion optimization']
  },
  {
    name: 'SaaS SEO',
    description: 'Specialized SEO for US software companies and startups.',
    features: ['Technical content marketing', 'Developer-focused SEO', 'Product-led growth strategies', 'Freemium model optimization']
  }
]

const cities = [
  { name: 'New York', state: 'NY', population: '8.3M', businesses: '200K+' },
  { name: 'Los Angeles', state: 'CA', population: '4.0M', businesses: '150K+' },
  { name: 'Chicago', state: 'IL', population: '2.7M', businesses: '120K+' },
  { name: 'Houston', state: 'TX', population: '2.3M', businesses: '110K+' },
  { name: 'Phoenix', state: 'AZ', population: '1.7M', businesses: '85K+' },
  { name: 'Philadelphia', state: 'PA', population: '1.6M', businesses: '80K+' },
  { name: 'San Antonio', state: 'TX', population: '1.5M', businesses: '75K+' },
  { name: 'San Diego', state: 'CA', population: '1.4M', businesses: '70K+' }
]

function Header() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            SEO Services in the United States
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Drive organic growth for your US business with local market expertise and proven SEO strategies.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get US Market Analysis</Button>
            <Button variant="secondary" href="/pricing">
              View SEO Packages
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AdvantagesSection() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-0 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Subheading className="text-center">Why Choose US-Based SEO</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Local expertise for maximum impact.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {advantages.map((advantage, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <advantage.icon className="size-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold">{advantage.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{advantage.description}</p>
              
              <ul className="space-y-2">
                {advantage.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckIcon className="size-4 shrink-0 fill-gray-600 mt-0.5" />
                    {detail}
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

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
    </svg>
  )
}

function ServicesSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">SEO Services for US Businesses</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Tailored strategies for the American market.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
            <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="size-4 shrink-0 fill-gray-600 mt-0.5" />
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

function CitiesSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">Major US Cities We Serve</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Local SEO expertise across America.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cities.map((city, index) => (
            <div key={index} className="text-center bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{city.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{city.state}</p>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">
                  Population: <span className="text-white">{city.population}</span>
                </div>
                <div className="text-sm text-gray-400">
                  Businesses: <span className="text-white">{city.businesses}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            We provide SEO services to businesses across all 50 states and major metropolitan areas.
          </p>
          <Button href="/contact" variant="outline">
            Find Your Local SEO Expert
          </Button>
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Subheading>Ready to Dominate US Search Results?</Subheading>
        <Heading as="h2" className="mt-2">
          Start your US SEO strategy today.
        </Heading>
        <Lead className="mt-6">
          Partner with SEO experts who understand the US market inside and out. 
          Let's create a winning strategy that drives qualified US traffic to your business.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get Free US Market Analysis</Button>
          <Button variant="outline" href="/pricing">
            View US SEO Packages
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Free analysis includes US competitor research and market opportunity assessment.
        </p>
      </div>
    </Container>
  )
}

export default function USASEOServices() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <AdvantagesSection />
      <ServicesSection />
      <CitiesSection />
      <CTASection />
      <Footer />
    </main>
  )
}