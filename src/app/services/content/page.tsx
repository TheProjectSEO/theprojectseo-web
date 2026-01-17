import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  DocumentTextIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  ChartBarIcon,
  BoltIcon,
  TagIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Services | SEO Content Creation & Optimization | TheProjectSEO',
  description:
    'Professional SEO content services including content strategy, creation, optimization, and performance tracking. Drive organic traffic with high-quality content.',
}

const services = [
  {
    name: 'Content Strategy Development',
    description: 'Comprehensive content strategies aligned with your business goals and target audience search behavior.',
    icon: ChartBarIcon,
    features: [
      'Content audit & gap analysis',
      'Topic cluster planning',
      'Content calendar development',
      'Competitor content analysis',
      'User journey mapping',
      'Content performance KPIs'
    ],
    pricing: 'Starting at $497/month'
  },
  {
    name: 'SEO Content Creation',
    description: 'High-quality, SEO-optimized content that ranks well and converts visitors into customers.',
    icon: PencilSquareIcon,
    features: [
      'Blog posts & articles',
      'Landing page copy',
      'Product descriptions',
      'Service page content',
      'FAQ & help content',
      'Email sequences'
    ],
    pricing: 'Starting at $297/article'
  },
  {
    name: 'Content Optimization',
    description: 'Optimize existing content for better search rankings and user engagement.',
    icon: BoltIcon,
    features: [
      'On-page SEO optimization',
      'Keyword integration',
      'Meta tags & descriptions',
      'Header structure optimization',
      'Internal linking strategy',
      'Content freshness updates'
    ],
    pricing: 'Starting at $197/page'
  },
  {
    name: 'Keyword Research for Content',
    description: 'Advanced keyword research to identify content opportunities and search demand.',
    icon: MagnifyingGlassIcon,
    features: [
      'Topic-based keyword research',
      'Search intent analysis',
      'Long-tail keyword discovery',
      'Question-based keywords',
      'Seasonal keyword opportunities',
      'Content keyword mapping'
    ],
    pricing: 'Starting at $397/month'
  },
  {
    name: 'Content Performance Tracking',
    description: 'Monitor and analyze your content performance to optimize for better results.',
    icon: DocumentTextIcon,
    features: [
      'Content analytics setup',
      'Traffic & engagement tracking',
      'Ranking position monitoring',
      'Conversion tracking',
      'Content ROI analysis',
      'Performance optimization recommendations'
    ],
    pricing: 'Starting at $297/month'
  },
  {
    name: 'Content Refresh & Updates',
    description: 'Keep your content fresh and relevant with regular updates and improvements.',
    icon: TagIcon,
    features: [
      'Content freshness audits',
      'Outdated content updates',
      'New information integration',
      'Improved optimization',
      'Enhanced user experience',
      'Republishing strategies'
    ],
    pricing: 'Starting at $147/page'
  }
]

const packages = [
  {
    name: 'Content Starter',
    price: '$997',
    period: '/month',
    description: 'Essential content services for small businesses',
    features: [
      '4 blog posts per month',
      'Basic keyword research',
      'On-page optimization',
      'Content strategy consultation',
      'Monthly performance report'
    ]
  },
  {
    name: 'Content Growth',
    price: '$1,997',
    period: '/month',
    description: 'Comprehensive content marketing for growing businesses',
    features: [
      '8 blog posts per month',
      'Advanced keyword research',
      'Content optimization',
      'Topic cluster development',
      'Landing page content',
      'Content performance tracking'
    ],
    featured: true
  },
  {
    name: 'Content Enterprise',
    price: '$4,997',
    period: '/month',
    description: 'Full-scale content marketing for large organizations',
    features: [
      '16+ blog posts per month',
      'Comprehensive content strategy',
      'Multi-format content creation',
      'Advanced optimization',
      'Custom content calendar',
      'Dedicated content manager'
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
            SEO Content Services
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Create content that ranks, engages, and converts with strategic, high-quality content services.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Content Strategy</Button>
            <Button variant="secondary" href="/pricing">
              View Packages
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
        <Subheading className="text-center">Content Services</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Everything you need for content success.
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
      <Subheading className="text-center">Content Packages</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Choose your content marketing level.
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
            
            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="size-4 shrink-0 fill-gray-600 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button href="/contact" className="w-full">
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ProcessSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">Our Content Process</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          How we create content that ranks and converts.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4">
          {[
            {
              step: '1',
              title: 'Strategy & Research',
              description: 'Comprehensive keyword research and content strategy development aligned with your business goals.'
            },
            {
              step: '2',
              title: 'Content Creation',
              description: 'Expert writers create engaging, SEO-optimized content that resonates with your target audience.'
            },
            {
              step: '3',
              title: 'Optimization & Publishing',
              description: 'Technical optimization, proper formatting, and strategic publishing for maximum search visibility.'
            },
            {
              step: '4',
              title: 'Monitor & Improve',
              description: 'Continuous performance monitoring and optimization to ensure your content achieves its goals.'
            }
          ].map((phase, index) => (
            <div key={index} className="text-center">
              <div className="size-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">{phase.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
              <p className="text-gray-300">{phase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ContentTypesSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Content Types We Create</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Diverse content formats for every need.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {[
          {
            title: 'Blog Posts & Articles',
            description: 'Informative, engaging blog content that drives organic traffic and establishes thought leadership.',
            examples: ['How-to guides', 'Industry insights', 'News & updates', 'Case studies']
          },
          {
            title: 'Landing Pages',
            description: 'High-converting landing page copy optimized for both search engines and conversions.',
            examples: ['Service pages', 'Product pages', 'Campaign pages', 'About pages']
          },
          {
            title: 'E-commerce Content',
            description: 'Compelling product descriptions and category pages that drive sales and rankings.',
            examples: ['Product descriptions', 'Category pages', 'Buying guides', 'Comparison pages']
          },
          {
            title: 'Technical Content',
            description: 'In-depth technical content that demonstrates expertise and answers complex questions.',
            examples: ['White papers', 'Technical guides', 'API documentation', 'Tutorials']
          }
        ].map((type, index) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold mb-4">{type.title}</h3>
            <p className="text-gray-600 mb-6">{type.description}</p>
            <ul className="space-y-2">
              {type.examples.map((example, exampleIndex) => (
                <li key={exampleIndex} className="text-sm text-gray-500">
                  • {example}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}

function CTASection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Subheading>Ready to Create Content That Converts?</Subheading>
        <Heading as="h2" className="mt-2">
          Start your content marketing journey.
        </Heading>
        <Lead className="mt-6">
          Transform your content strategy with SEO-optimized content that ranks, engages, and drives results. 
          Let's create content that helps your business achieve its goals.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get Content Strategy Consultation</Button>
          <Button variant="outline" href="/pricing">
            View Content Packages
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Free consultation includes content audit and strategy recommendations.
        </p>
      </div>
    </Container>
  )
}

export default function ContentServices() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <ServicesSection />
      <PackagesSection />
      <ProcessSection />
      <ContentTypesSection />
      <CTASection />
      <Footer />
    </main>
  )
}