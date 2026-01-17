import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  ChartBarIcon,
  LinkIcon,
  MagnifyingGlassIcon,
  WrenchScrewdriverIcon,
  MapPinIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Services | Complete Search Engine Optimization | TheProjectSEO',
  description:
    'Comprehensive SEO services including keyword research, on-page optimization, technical SEO, link building, and local SEO. Drive organic traffic and rankings.',
}

const services = [
  {
    name: 'Keyword Research & Strategy',
    description: 'Discover high-value keywords and create data-driven content strategies that drive targeted organic traffic.',
    icon: MagnifyingGlassIcon,
    features: [
      'Competitor keyword analysis',
      'Search intent mapping',
      'Long-tail keyword discovery',
      'Keyword difficulty assessment',
      'Content gap analysis',
      'Monthly keyword tracking'
    ],
    pricing: 'Starting at $497/month'
  },
  {
    name: 'On-Page Optimization',
    description: 'Optimize your website pages for maximum search engine visibility and user experience.',
    icon: DocumentTextIcon,
    features: [
      'Title tag optimization',
      'Meta description writing',
      'Header structure optimization',
      'Internal linking strategy',
      'Image optimization & alt text',
      'Schema markup implementation'
    ],
    pricing: 'Starting at $397/month'
  },
  {
    name: 'Technical SEO',
    description: 'Fix technical issues that prevent search engines from properly crawling and indexing your website.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Site speed optimization',
      'Mobile responsiveness fixes',
      'Crawl error resolution',
      'XML sitemap optimization',
      'Robots.txt configuration',
      'Core Web Vitals improvement'
    ],
    pricing: 'Starting at $697/month'
  },
  {
    name: 'Link Building',
    description: 'Build high-quality backlinks from authoritative websites to increase your domain authority and rankings.',
    icon: LinkIcon,
    features: [
      'High-authority link acquisition',
      'Guest posting campaigns',
      'Broken link building',
      'Resource page outreach',
      'Competitor backlink analysis',
      'Link quality monitoring'
    ],
    pricing: 'Starting at $897/month'
  },
  {
    name: 'Local SEO',
    description: 'Dominate local search results and drive more customers to your physical business locations.',
    icon: MapPinIcon,
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review management',
      'Local keyword optimization',
      'NAP consistency audit',
      'Local content strategy'
    ],
    pricing: 'Starting at $597/month'
  },
  {
    name: 'SEO Analytics & Reporting',
    description: 'Track your SEO performance with detailed analytics and transparent monthly reporting.',
    icon: ChartBarIcon,
    features: [
      'Monthly performance reports',
      'Keyword ranking tracking',
      'Traffic analysis & insights',
      'Conversion tracking setup',
      'Competitor monitoring',
      'ROI measurement'
    ],
    pricing: 'Included with all plans'
  }
]

const packages = [
  {
    name: 'SEO Starter',
    price: '$997',
    period: '/month',
    description: 'Essential SEO services for small businesses',
    services: ['Keyword Research', 'On-Page Optimization', 'Basic Technical SEO', 'Monthly Reporting'],
    features: [
      '50 target keywords',
      '10 pages optimized monthly',
      'Basic technical fixes',
      'Monthly progress reports',
      'Email support'
    ]
  },
  {
    name: 'SEO Growth',
    price: '$1,997',
    period: '/month', 
    description: 'Comprehensive SEO for growing businesses',
    services: ['Everything in Starter', 'Advanced Technical SEO', 'Link Building', 'Local SEO'],
    features: [
      '200 target keywords',
      '25 pages optimized monthly',
      'Advanced technical optimization',
      'Monthly link building',
      'Local SEO optimization',
      'Phone & email support'
    ],
    featured: true
  },
  {
    name: 'SEO Enterprise',
    price: '$4,997',
    period: '/month',
    description: 'Advanced SEO solutions for large businesses',
    services: ['Everything in Growth', 'Advanced Link Building', 'Multi-Location SEO', 'Custom Strategy'],
    features: [
      'Unlimited keywords',
      'Unlimited page optimization',
      'Advanced link building campaign',
      'Multi-location optimization',
      'Custom reporting dashboard',
      'Dedicated SEO manager'
    ]
  }
]

function Header() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Complete SEO Services
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Drive organic traffic and dominate search rankings with our comprehensive SEO services for every business.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get SEO Strategy</Button>
            <Button variant="secondary" href="/pricing">
              View Packages
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ServicesGrid() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-0 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Subheading className="text-center">Our SEO Services</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Everything you need to rank higher.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <service.icon className="size-6 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{service.name}</h3>
                  <p className="text-sm text-gray-600 font-medium">{service.pricing}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckIcon className="size-4 shrink-0 fill-gray-600 mt-0.5" />
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

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
    </svg>
  )
}

function PackagesSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">SEO Packages</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Choose the right SEO package for your business.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <div 
            key={index} 
            className={`rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 ${
              pkg.featured ? 'relative ring-2 ring-gray-900 transform scale-105' : ''
            }`}
          >
            {pkg.featured && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">{pkg.price}</span>
                <span className="text-gray-500">{pkg.period}</span>
              </div>
              <p className="text-gray-600 mt-4">{pkg.description}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3">Services included:</h4>
              <ul className="space-y-2">
                {pkg.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckIcon className="size-4 shrink-0 fill-gray-600 mt-0.5" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3">Features:</h4>
              <ul className="space-y-2">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <CheckIcon className="size-4 shrink-0 fill-gray-600 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <Button href="/contact" className="w-full">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ResultsSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">Proven SEO Results</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Real success stories from our clients.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-4">340%</div>
            <div className="text-lg font-medium text-gray-300 mb-2">Traffic Increase</div>
            <div className="text-sm text-gray-400">E-commerce client in 8 months</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-4">#1</div>
            <div className="text-lg font-medium text-gray-300 mb-2">Google Rankings</div>
            <div className="text-sm text-gray-400">For 15+ high-value keywords</div>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-4">$2.1M</div>
            <div className="text-lg font-medium text-gray-300 mb-2">Revenue Generated</div>
            <div className="text-sm text-gray-400">From organic traffic in 12 months</div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <blockquote className="text-xl text-white mb-8">
            "TheProjectSEO's comprehensive SEO strategy helped us achieve first page rankings for all our target keywords. 
            Our organic traffic has increased by 400% and we're generating 50+ qualified leads per month from Google."
          </blockquote>
          <div>
            <div className="text-sm font-medium text-white">Sarah Johnson</div>
            <div className="text-sm text-gray-300">Marketing Director, TechCorp</div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Subheading>Ready to Dominate Search Results?</Subheading>
        <Heading as="h2" className="mt-2">
          Start your SEO journey today.
        </Heading>
        <Lead className="mt-6">
          Join hundreds of businesses that trust TheProjectSEO to drive their organic growth. 
          Get your free SEO audit and discover exactly what it takes to rank #1 on Google.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get Your Free SEO Audit</Button>
          <Button variant="outline" href="/pricing">
            View All Pricing
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Free audit includes technical analysis, keyword opportunities, and competitive insights.
        </p>
      </div>
    </Container>
  )
}

export default function SEOServices() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <ServicesGrid />
      <PackagesSection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </main>
  )
}