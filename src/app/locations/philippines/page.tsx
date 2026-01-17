import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  LanguageIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Philippines SEO Services | Search Engine Optimization | TheProjectSEO',
  description:
    'Professional SEO services for businesses in the Philippines. Local market expertise, Filipino search behavior, and proven strategies for Philippine search rankings.',
}

const marketInsights = [
  {
    title: 'Growing Digital Market',
    description: 'The Philippines has one of the fastest-growing digital markets in Southeast Asia.',
    icon: ChartBarIcon,
    stats: [
      '76M+ internet users',
      '15% annual growth rate',
      '4.5 hours average daily usage',
      '95% mobile internet access'
    ]
  },
  {
    title: 'Mobile-First Country',
    description: 'Filipino consumers primarily use mobile devices for search and online activities.',
    icon: DevicePhoneMobileIcon,
    stats: [
      '95% mobile internet usage',
      '3+ hours daily mobile usage',
      'Mobile-first purchasing behavior',
      'Voice search adoption growing'
    ]
  },
  {
    title: 'E-commerce Boom',
    description: 'Rapid growth in online shopping and digital business adoption.',
    icon: BuildingOfficeIcon,
    stats: [
      '$12B+ e-commerce market',
      '25% annual growth',
      'Social commerce trending',
      'Digital payment adoption rising'
    ]
  },
  {
    title: 'Local Search Behavior',
    description: 'Unique search patterns and cultural preferences in the Philippine market.',
    icon: LanguageIcon,
    stats: [
      'English + Filipino searches',
      'Local brand preference',
      'Price-sensitive searches',
      'Review-driven decisions'
    ]
  }
]

const services = [
  {
    name: 'Local Philippine SEO',
    description: 'Optimize for local search across major Philippine cities and regions.',
    features: [
      'Google My Business optimization for PH',
      'Local citation building',
      'Philippine directory listings',
      'Regional keyword targeting'
    ]
  },
  {
    name: 'E-commerce SEO Philippines',
    description: 'Drive online sales for Philippine retailers and marketplaces.',
    features: [
      'Product page optimization',
      'Lazada & Shopee optimization',
      'Local e-commerce keywords',
      'Mobile commerce optimization'
    ]
  },
  {
    name: 'BPO & Services SEO',
    description: 'Specialized SEO for Philippine business process outsourcing companies.',
    features: [
      'B2B service optimization',
      'International client targeting',
      'Industry expertise content',
      'Lead generation optimization'
    ]
  },
  {
    name: 'Filipino Content Marketing',
    description: 'Culturally relevant content that resonates with Filipino audiences.',
    features: [
      'Taglish content optimization',
      'Cultural trend integration',
      'Local holiday & event content',
      'Filipino consumer insights'
    ]
  }
]

const cities = [
  { name: 'Manila', region: 'NCR', population: '1.8M', businessHub: 'Finance & Government' },
  { name: 'Quezon City', region: 'NCR', population: '2.9M', businessHub: 'Media & Entertainment' },
  { name: 'Cebu City', region: 'Central Visayas', population: '980K', businessHub: 'IT & Tourism' },
  { name: 'Davao City', region: 'Davao', population: '1.7M', businessHub: 'Agriculture & Mining' },
  { name: 'Makati', region: 'NCR', population: '630K', businessHub: 'Business District' },
  { name: 'Taguig', region: 'NCR', population: '900K', businessHub: 'BGC & IT' }
]

function Header() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            SEO Services in the Philippines
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Drive organic growth for your Philippine business with local market expertise and culturally relevant SEO strategies.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Philippine Market Analysis</Button>
            <Button variant="secondary" href="/pricing">
              View SEO Packages
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function MarketInsightsSection() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-0 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Subheading className="text-center">Philippine Digital Market</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Understanding the Philippine online landscape.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {marketInsights.map((insight, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <insight.icon className="size-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold">{insight.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{insight.description}</p>
              
              <div className="grid grid-cols-2 gap-4">
                {insight.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center bg-gray-50 rounded-lg p-3">
                    <div className="text-sm font-medium text-gray-900">{stat}</div>
                  </div>
                ))}
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
      <Subheading className="text-center">SEO Services for Philippine Businesses</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Tailored strategies for the Filipino market.
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

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
    </svg>
  )
}

function CitiesSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">Major Philippine Cities We Serve</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Local SEO expertise across the Philippines.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city, index) => (
            <div key={index} className="text-center bg-white/10 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-white mb-2">{city.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{city.region}</p>
              <div className="space-y-2">
                <div className="text-sm text-gray-400">
                  Population: <span className="text-white">{city.population}</span>
                </div>
                <div className="text-sm text-gray-400">
                  Hub: <span className="text-white">{city.businessHub}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            We provide SEO services to businesses across Luzon, Visayas, and Mindanao.
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
        <Subheading>Ready to Dominate Philippine Search Results?</Subheading>
        <Heading as="h2" className="mt-2">
          Start your Philippine SEO strategy today.
        </Heading>
        <Lead className="mt-6">
          Partner with SEO experts who understand the Philippine market, culture, and digital landscape. 
          Let's create a winning strategy that drives qualified Filipino traffic to your business.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get Free Philippine Market Analysis</Button>
          <Button variant="outline" href="/pricing">
            View SEO Packages
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Free analysis includes Philippine competitor research and local market opportunities.
        </p>
      </div>
    </Container>
  )
}

export default function PhilippinesSEOServices() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <MarketInsightsSection />
      <ServicesSection />
      <CitiesSection />
      <CTASection />
      <Footer />
    </main>
  )
}