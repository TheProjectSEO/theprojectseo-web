import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import UnicornBackground from '@/components/unicorn-background'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'E-commerce SEO Services | Online Store Optimization | TheProjectSEO',
  description:
    'Specialized SEO services for e-commerce businesses. Increase online sales with product optimization, category SEO, and conversion-focused strategies.',
}

const services = [
  {
    name: 'Product Page SEO',
    description: 'Optimize individual product pages for maximum visibility and conversions.',
    icon: ShoppingCartIcon,
    features: [
      'Product title optimization',
      'Meta descriptions for products',
      'Product schema markup',
      'Image optimization & alt text',
      'Product review optimization',
      'Related product suggestions'
    ]
  },
  {
    name: 'Category Page Optimization',
    description: 'Structure and optimize category pages to capture high-value commercial keywords.',
    icon: MagnifyingGlassIcon,
    features: [
      'Category hierarchy optimization',
      'Faceted navigation SEO',
      'Category description content',
      'Breadcrumb optimization',
      'Filter & sorting SEO',
      'Category-specific meta tags'
    ]
  },
  {
    name: 'E-commerce Analytics',
    description: 'Track and optimize your online store performance with advanced analytics.',
    icon: ChartBarIcon,
    features: [
      'E-commerce tracking setup',
      'Conversion funnel analysis',
      'Product performance tracking',
      'Revenue attribution',
      'Shopping behavior analysis',
      'ROI optimization'
    ]
  },
  {
    name: 'Mobile Commerce SEO',
    description: 'Optimize your store for mobile shoppers and voice search.',
    icon: DevicePhoneMobileIcon,
    features: [
      'Mobile-first optimization',
      'Page speed for mobile',
      'Touch-friendly navigation',
      'Mobile checkout optimization',
      'App store optimization',
      'Voice search optimization'
    ]
  }
]

const results = [
  { metric: 'Revenue Increase', value: '+340%', description: 'From organic traffic in 12 months' },
  { metric: 'Product Page Rankings', value: '2,500+', description: 'Products ranking in top 10' },
  { metric: 'Conversion Rate', value: '+85%', description: 'Improvement in organic conversions' },
  { metric: 'Average Order Value', value: '+45%', description: 'Increase from SEO traffic' }
]

function Header() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            E-commerce SEO That Drives Sales
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Increase your online store's visibility and revenue with specialized e-commerce SEO that converts browsers into buyers.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get E-commerce SEO Audit</Button>
            <Button variant="secondary" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ServicesSection() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-0 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Subheading className="text-center">E-commerce SEO Services</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Comprehensive optimization for online stores.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <service.icon className="size-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold">{service.name}</h3>
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

function ResultsSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">E-commerce Success Results</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Real revenue growth from our e-commerce clients.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-4">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-white mb-4">{result.value}</div>
              <div className="text-lg font-medium text-gray-300 mb-2">{result.metric}</div>
              <div className="text-sm text-gray-400">{result.description}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Subheading>Ready to Boost Your Online Sales?</Subheading>
        <Heading as="h2" className="mt-2">
          Start your e-commerce SEO strategy.
        </Heading>
        <Lead className="mt-6">
          Transform your online store with SEO strategies that drive qualified traffic and increase revenue. 
          Let's optimize your e-commerce site for maximum visibility and conversions.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get E-commerce SEO Audit</Button>
          <Button variant="outline" href="/pricing">
            View Pricing
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default function EcommerceSEO() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <ServicesSection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </main>
  )
}