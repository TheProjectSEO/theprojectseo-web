import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Services | SEO-Optimized Website Development | TheProjectSEO',
  description:
    'Professional web development services with built-in SEO optimization. Fast, mobile-responsive websites designed to rank higher and convert better.',
}

const services = [
  {
    name: 'SEO-Optimized Web Development',
    description: 'Custom websites built with SEO best practices from the ground up for maximum search visibility.',
    icon: CodeBracketIcon,
    features: [
      'SEO-friendly site architecture',
      'Clean, semantic HTML code',
      'Optimized URL structures',
      'Built-in schema markup',
      'Fast loading times',
      'Mobile-first responsive design'
    ],
    pricing: 'Starting at $4,997'
  },
  {
    name: 'Core Web Vitals Optimization',
    description: 'Optimize your website performance for Google\'s Core Web Vitals and better user experience.',
    icon: BoltIcon,
    features: [
      'Page speed optimization',
      'Largest Contentful Paint (LCP)',
      'First Input Delay (FID)',
      'Cumulative Layout Shift (CLS)',
      'Image optimization',
      'Code minification'
    ],
    pricing: 'Starting at $1,997'
  },
  {
    name: 'Mobile Optimization',
    description: 'Ensure your website performs perfectly on all mobile devices with responsive design.',
    icon: DevicePhoneMobileIcon,
    features: [
      'Mobile-first design approach',
      'Touch-friendly navigation',
      'Optimized mobile page speed',
      'Mobile SEO best practices',
      'Cross-device compatibility',
      'Mobile usability testing'
    ],
    pricing: 'Starting at $1,497'
  },
  {
    name: 'Website Security & SSL',
    description: 'Secure your website with SSL certificates and security measures that improve SEO rankings.',
    icon: ShieldCheckIcon,
    features: [
      'SSL certificate installation',
      'Security plugin setup',
      'Malware scanning & removal',
      'Firewall configuration',
      'Regular security updates',
      'Backup & recovery systems'
    ],
    pricing: 'Starting at $497'
  },
  {
    name: 'Analytics & Tracking Setup',
    description: 'Comprehensive analytics setup to track your website performance and SEO progress.',
    icon: ChartBarIcon,
    features: [
      'Google Analytics 4 setup',
      'Google Search Console',
      'Conversion tracking',
      'Goal & event configuration',
      'Custom dashboard creation',
      'Monthly reporting setup'
    ],
    pricing: 'Starting at $797'
  },
  {
    name: 'Website Maintenance & Updates',
    description: 'Ongoing website maintenance to keep your site secure, fast, and SEO-optimized.',
    icon: Cog6ToothIcon,
    features: [
      'Regular software updates',
      'Security monitoring',
      'Performance optimization',
      'Content management',
      'Bug fixes & improvements',
      'Monthly maintenance reports'
    ],
    pricing: 'Starting at $297/month'
  }
]

const packages = [
  {
    name: 'Web Essentials',
    price: '$4,997',
    period: 'one-time',
    description: 'Essential web services for small businesses',
    features: [
      'SEO-optimized website design',
      'Mobile responsive development',
      'Basic performance optimization',
      'SSL certificate setup',
      'Analytics integration',
      '30 days of support'
    ]
  },
  {
    name: 'Web Professional',
    price: '$9,997',
    period: 'one-time',
    description: 'Comprehensive web development for growing businesses',
    features: [
      'Everything in Web Essentials',
      'Advanced performance optimization',
      'E-commerce functionality',
      'CMS integration',
      'Advanced analytics setup',
      '90 days of support',
      '6 months maintenance included'
    ],
    featured: true
  },
  {
    name: 'Web Enterprise',
    price: 'Custom',
    period: '',
    description: 'Advanced web solutions for large organizations',
    features: [
      'Everything in Web Professional',
      'Custom web application development',
      'API integrations',
      'Multi-site management',
      'Enterprise security features',
      'Unlimited support',
      '12 months maintenance included'
    ]
  }
]

const technologies = [
  {
    category: 'Frontend Technologies',
    items: ['React', 'Next.js', 'Vue.js', 'HTML5/CSS3', 'TypeScript', 'Tailwind CSS']
  },
  {
    category: 'Backend Technologies',
    items: ['Node.js', 'Python', 'PHP', 'WordPress', 'Shopify', 'Database Design']
  },
  {
    category: 'SEO Tools & Analytics',
    items: ['Google Analytics', 'Search Console', 'Schema Markup', 'GTM', 'Hotjar', 'SEO Plugins']
  },
  {
    category: 'Performance & Security',
    items: ['CDN Setup', 'SSL Certificates', 'Caching Solutions', 'Security Plugins', 'Monitoring Tools', 'Backup Systems']
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
            Web Services Built for SEO
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Create websites that rank higher, load faster, and convert better with cutting-edge technology and SEO best practices.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Web Consultation</Button>
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
        <Subheading className="text-center">Web Development Services</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Everything you need for a high-performing website.
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
      <Subheading className="text-center">Web Development Packages</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Choose the right web solution for your business.
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
                {pkg.period && <span className="text-gray-500">{pkg.period}</span>}
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

function TechnologiesSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">Technologies We Use</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          Modern technology stack for optimal performance.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {technologies.map((tech, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-white mb-6">{tech.category}</h3>
              <ul className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">
                    {item}
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

function ProcessSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Our Development Process</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        How we build websites that perform.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 xl:grid-cols-4">
        {[
          {
            step: '1',
            title: 'Discovery & Planning',
            description: 'Understanding your business goals, target audience, and technical requirements for optimal planning.'
          },
          {
            step: '2',
            title: 'Design & Development',
            description: 'Creating SEO-optimized designs and developing with clean, fast code using modern technologies.'
          },
          {
            step: '3',
            title: 'Testing & Optimization',
            description: 'Comprehensive testing for performance, security, and SEO before launch to ensure everything works perfectly.'
          },
          {
            step: '4',
            title: 'Launch & Support',
            description: 'Smooth website launch with ongoing support, maintenance, and optimization for continued success.'
          }
        ].map((phase, index) => (
          <div key={index} className="text-center">
            <div className="size-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl font-bold text-gray-950">{phase.step}</span>
            </div>
            <h3 className="text-xl font-semibold mb-4">{phase.title}</h3>
            <p className="text-gray-600">{phase.description}</p>
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
        <Subheading>Ready to Build a High-Performance Website?</Subheading>
        <Heading as="h2" className="mt-2">
          Start your web development project.
        </Heading>
        <Lead className="mt-6">
          Create a website that drives results with our SEO-optimized web development services. 
          From design to launch, we build websites that rank higher and convert better.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get Web Development Consultation</Button>
          <Button variant="outline" href="/pricing">
            View Web Packages
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Free consultation includes technical assessment and project planning.
        </p>
      </div>
    </Container>
  )
}

export default function WebServices() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <ServicesSection />
      <PackagesSection />
      <TechnologiesSection />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  )
}