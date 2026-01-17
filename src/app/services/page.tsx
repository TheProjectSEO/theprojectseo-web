import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  ChartBarIcon,
  CogIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Services | TheProjectSEO',
  description:
    'Comprehensive SEO services including audits, keyword research, technical SEO, content optimization, local SEO, and link building. Dominate search rankings.',
}

const services = [
  {
    name: 'SEO Audit & Analysis',
    description: 'Comprehensive website analysis to identify opportunities and issues affecting your search rankings.',
    icon: ChartBarIcon,
    features: [
      'Technical SEO assessment',
      'Content gap analysis',
      'Competitor benchmarking',
      'Core Web Vitals evaluation',
      'Mobile-first indexing review',
      'Site architecture analysis'
    ],
    pricing: 'Starting at $497',
    href: '/contact',
    featured: true
  },
  {
    name: 'Keyword Research & Strategy',
    description: 'Advanced keyword research to discover high-value opportunities and create winning content strategies.',
    icon: MagnifyingGlassIcon,
    features: [
      'Search intent analysis',
      'Competitor keyword mapping',
      'Long-tail keyword discovery',
      'Keyword difficulty assessment',
      'Search volume analysis',
      'Content cluster planning'
    ],
    pricing: 'Starting at $297',
    href: '/contact'
  },
  {
    name: 'Technical SEO Optimization',
    description: 'Fix technical issues that prevent search engines from properly crawling and indexing your website.',
    icon: WrenchScrewdriverIcon,
    features: [
      'Site speed optimization',
      'Schema markup implementation',
      'XML sitemap creation',
      'Robots.txt optimization',
      'Canonical tag setup',
      'Internal linking structure'
    ],
    pricing: 'Starting at $697',
    href: '/contact'
  },
  {
    name: 'Content Optimization',
    description: 'Create and optimize content that ranks higher and converts visitors into customers.',
    icon: DocumentTextIcon,
    features: [
      'On-page SEO optimization',
      'Content creation & writing',
      'Meta tag optimization',
      'Featured snippet optimization',
      'Content refresh & updates',
      'User experience improvements'
    ],
    pricing: 'Starting at $397',
    href: '/contact'
  },
  {
    name: 'Local SEO',
    description: 'Dominate local search results and drive more customers to your physical business locations.',
    icon: MapPinIcon,
    features: [
      'Google Business Profile optimization',
      'Local citation building',
      'Review management strategy',
      'Local keyword optimization',
      'NAP consistency audit',
      'Local link building'
    ],
    pricing: 'Starting at $597',
    href: '/contact'
  },
  {
    name: 'SEO Automation & Tools',
    description: 'Advanced SEO tools and automation to scale your search engine optimization efforts.',
    icon: CogIcon,
    features: [
      'Rank tracking setup',
      'Automated reporting',
      'SEO workflow automation',
      'Custom dashboard creation',
      'Performance monitoring',
      'Alert system configuration'
    ],
    pricing: 'Starting at $197',
    href: '/contact'
  }
]

function Header() {
  return (
    <Container className="mt-16">
      <Heading as="h1">Complete SEO services to dominate search.</Heading>
      <Lead className="mt-6 max-w-3xl">
        From technical audits to content optimization, we provide all the SEO services 
        your business needs to rank #1 on Google and drive sustainable organic growth.
      </Lead>
    </Container>
  )
}

function ServicesGrid() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-0 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, serviceIndex) => (
            <ServiceCard key={serviceIndex} service={service} />
          ))}
        </div>
      </Container>
    </div>
  )
}

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const IconComponent = service.icon
  
  return (
    <div className={`-m-2 grid grid-cols-1 rounded-4xl shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md ${
      service.featured ? 'lg:col-span-2 xl:col-span-1' : ''
    }`}>
      <div className="grid grid-cols-1 rounded-4xl p-2 shadow-md shadow-black/5">
        <div className="rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-black/5">
          <div className="flex items-center gap-4 mb-6">
            <div className="size-12 rounded-xl bg-gray-50 flex items-center justify-center">
              <IconComponent className="size-6 text-gray-600" />
            </div>
            <div>
              <Subheading as="h3">{service.name}</Subheading>
              <p className="text-sm text-gray-600 font-medium">{service.pricing}</p>
            </div>
          </div>
          
          <p className="text-sm/6 text-gray-950/75 mb-6">{service.description}</p>
          
          <div className="mb-8">
            <h4 className="text-sm/6 font-medium text-gray-950 mb-3">What's included:</h4>
            <ul className="space-y-2">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-sm/6 text-gray-950/75">
                  <CheckIcon className="size-4 shrink-0 fill-green-600 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <Button href={service.href} className="w-full">
            Get Started
          </Button>
        </div>
      </div>
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

function ProcessSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Our Process</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        How we deliver SEO results.
      </Heading>
      <Lead className="mt-6 text-center max-w-3xl mx-auto">
        Our proven 4-step process ensures your SEO campaign delivers measurable results 
        and sustainable growth for your business.
      </Lead>
      
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4">
        <div className="text-center">
          <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-gray-950">1</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Audit & Analysis</h3>
          <p className="text-gray-600">
            Comprehensive website audit to identify opportunities and create a data-driven strategy.
          </p>
        </div>
        
        <div className="text-center">
          <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-gray-950">2</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Strategy Development</h3>
          <p className="text-gray-600">
            Custom SEO strategy based on your business goals, competition, and market opportunities.
          </p>
        </div>
        
        <div className="text-center">
          <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-gray-950">3</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Implementation</h3>
          <p className="text-gray-600">
            Execute technical optimizations, content creation, and link building with precision.
          </p>
        </div>
        
        <div className="text-center">
          <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl font-bold text-gray-950">4</span>
          </div>
          <h3 className="text-xl font-semibold mb-4">Monitor & Optimize</h3>
          <p className="text-gray-600">
            Continuous monitoring and optimization to maintain and improve your search rankings.
          </p>
        </div>
      </div>
    </Container>
  )
}

function ResultsSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <Subheading dark className="text-center">Proven Results</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          SEO success stories from our clients.
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
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8">
            <blockquote className="text-xl text-white mb-6">
              "TheProjectSEO's technical SEO audit identified issues we never knew existed. 
              After implementing their recommendations, our organic traffic doubled in 6 months."
            </blockquote>
            <div className="flex items-center">
              <div className="size-12 rounded-full bg-gray-600"></div>
              <div className="ml-4">
                <div className="text-sm font-medium text-white">Sarah Johnson</div>
                <div className="text-sm text-gray-300">Marketing Director, TechCorp</div>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8">
            <blockquote className="text-xl text-white mb-6">
              "Their local SEO service helped us dominate our market. We now appear #1 
              for all our target keywords and get 50+ leads per month from Google."
            </blockquote>
            <div className="flex items-center">
              <div className="size-12 rounded-full bg-gray-600"></div>
              <div className="ml-4">
                <div className="text-sm font-medium text-white">Mike Rodriguez</div>
                <div className="text-sm text-gray-300">Owner, Local Business Pro</div>
              </div>
            </div>
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
        <Subheading>Ready to get started?</Subheading>
        <Heading as="h2" className="mt-2">
          Let's dominate your search rankings.
        </Heading>
        <Lead className="mt-6">
          Choose the SEO services that fit your business needs, or let us create 
          a custom strategy during your free consultation.
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

export default function Services() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Container>
        <Navbar />
      </Container>
      <Header />
      <ServicesGrid />
      <ProcessSection />
      <ResultsSection />
      <CTASection />
      <Footer />
    </main>
  )
}