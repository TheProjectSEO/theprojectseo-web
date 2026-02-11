import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { CTAFormSection } from '@/components/service-page-sections'
import { FAQAccordion } from '@/components/faq-accordion'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  Code,
  Smartphone,
  Zap,
  ShieldCheck,
  BarChart3,
  Settings,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Web Services | SEO-Optimized Website Development | TheProjectSEO',
  description:
    'Professional web development services with built-in SEO optimization. Fast, mobile-responsive websites designed to rank higher and convert better.',
  alternates: {
    canonical: '/services/web',
  },
}

const services = [
  {
    name: 'SEO-Optimized Web Development',
    description:
      'Custom websites built with SEO best practices from the ground up for maximum search visibility.',
    icon: Code,
    features: [
      'SEO-friendly site architecture',
      'Clean, semantic HTML code',
      'Optimized URL structures',
      'Built-in schema markup',
      'Fast loading times',
      'Mobile-first responsive design',
    ],
    pricing: 'Starting at $4,997',
  },
  {
    name: 'Core Web Vitals Optimization',
    description:
      'Optimize your website performance for Google&apos;s Core Web Vitals and better user experience.',
    icon: Zap,
    features: [
      'Page speed optimization',
      'Largest Contentful Paint (LCP)',
      'First Input Delay (FID)',
      'Cumulative Layout Shift (CLS)',
      'Image optimization',
      'Code minification',
    ],
    pricing: 'Starting at $1,997',
  },
  {
    name: 'Mobile Optimization',
    description:
      'Ensure your website performs perfectly on all mobile devices with responsive design.',
    icon: Smartphone,
    features: [
      'Mobile-first design approach',
      'Touch-friendly navigation',
      'Optimized mobile page speed',
      'Mobile SEO best practices',
      'Cross-device compatibility',
      'Mobile usability testing',
    ],
    pricing: 'Starting at $1,497',
  },
  {
    name: 'Website Security & SSL',
    description:
      'Secure your website with SSL certificates and security measures that improve SEO rankings.',
    icon: ShieldCheck,
    features: [
      'SSL certificate installation',
      'Security plugin setup',
      'Malware scanning & removal',
      'Firewall configuration',
      'Regular security updates',
      'Backup & recovery systems',
    ],
    pricing: 'Starting at $497',
  },
  {
    name: 'Analytics & Tracking Setup',
    description:
      'Comprehensive analytics setup to track your website performance and SEO progress.',
    icon: BarChart3,
    features: [
      'Google Analytics 4 setup',
      'Google Search Console',
      'Conversion tracking',
      'Goal & event configuration',
      'Custom dashboard creation',
      'Monthly reporting setup',
    ],
    pricing: 'Starting at $797',
  },
  {
    name: 'Website Maintenance & Updates',
    description:
      'Ongoing website maintenance to keep your site secure, fast, and SEO-optimized.',
    icon: Settings,
    features: [
      'Regular software updates',
      'Security monitoring',
      'Performance optimization',
      'Content management',
      'Bug fixes & improvements',
      'Monthly maintenance reports',
    ],
    pricing: 'Starting at $297/month',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description:
      'Understanding your business goals, target audience, and technical requirements for optimal planning. We audit your existing site, analyze competitors, and create a comprehensive project roadmap that aligns web development with your SEO and conversion objectives.',
  },
  {
    number: '02',
    title: 'Design & Development',
    description:
      'Creating SEO-optimized designs and developing with clean, fast code using modern technologies. Every page is architected for crawlability, semantic structure, and Core Web Vitals performance from the first line of code.',
  },
  {
    number: '03',
    title: 'Testing & Optimization',
    description:
      'Comprehensive testing for performance, security, and SEO before launch. We validate structured data, run Lighthouse audits, test across devices and browsers, and ensure every page meets our quality benchmarks for speed and accessibility.',
  },
  {
    number: '04',
    title: 'Launch & Support',
    description:
      'Smooth website launch with ongoing support, maintenance, and optimization for continued success. We monitor Core Web Vitals, handle post-launch technical SEO, and provide regular performance reports to ensure your site keeps ranking.',
  },
]

const caseStudy = {
  client: 'E-commerce Brand',
  industry: 'Direct-to-Consumer Retail',
  challenge:
    'A growing DTC e-commerce brand was losing potential customers due to a slow, outdated website built on a legacy platform. Page load times averaged 8.2 seconds on mobile, Core Web Vitals were failing across every metric, and the site&apos;s poor technical foundation was suppressing organic rankings. Despite strong products and brand recognition, the site converted at just 0.8% and ranked on page one for fewer than 15 keywords.',
  solution:
    'We rebuilt the entire site on a modern headless architecture with server-side rendering, implementing a mobile-first responsive design with sub-second time-to-interactive. Our team restructured the site architecture around SEO-optimized category hierarchies, deployed comprehensive schema markup for products and reviews, and migrated 2,400+ URLs with zero traffic loss. We also implemented advanced image optimization, lazy loading, and edge caching to achieve perfect Core Web Vitals scores.',
  results: [
    { metric: 'Page Load Time', improvement: '1.2s', timeframe: 'Down from 8.2s' },
    { metric: 'Core Web Vitals', improvement: '100%', timeframe: 'All metrics passing' },
    { metric: 'Organic Traffic', improvement: '+340%', timeframe: '6 months post-launch' },
    { metric: 'Conversion Rate', improvement: '3.4%', timeframe: 'Up from 0.8%' },
  ],
}

const technologies = [
  {
    category: 'Frontend Technologies',
    items: ['React', 'Next.js', 'Vue.js', 'HTML5/CSS3', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'Backend Technologies',
    items: ['Node.js', 'Python', 'PHP', 'WordPress', 'Shopify', 'Database Design'],
  },
  {
    category: 'SEO Tools & Analytics',
    items: ['Google Analytics', 'Search Console', 'Schema Markup', 'GTM', 'Hotjar', 'SEO Plugins'],
  },
  {
    category: 'Performance & Security',
    items: ['CDN Setup', 'SSL Certificates', 'Caching Solutions', 'Security Plugins', 'Monitoring Tools', 'Backup Systems'],
  },
]

const faqItems = [
  {
    question: 'How does web development impact SEO?',
    answer:
      'Web development is the foundation of SEO success. Site architecture, page speed, mobile responsiveness, clean code, structured data, and crawlability are all technical factors that directly influence how search engines index and rank your pages. A poorly built website can undermine even the best content and link-building strategies. We build every site with SEO as a first-class requirement, not an afterthought.',
  },
  {
    question: 'What platforms do you build on?',
    answer:
      'We work across a wide range of platforms and frameworks depending on your needs. For custom high-performance sites, we use React and Next.js with server-side rendering. For content-driven sites, we work with WordPress with custom themes. For e-commerce, we build on Shopify, WooCommerce, or headless commerce solutions. Every platform choice is guided by your SEO goals, performance requirements, and long-term scalability needs.',
  },
  {
    question: 'How long does a website redesign take?',
    answer:
      'Timeline depends on project scope and complexity. A standard business website typically takes 6-10 weeks from discovery to launch. E-commerce sites and custom web applications range from 10-16 weeks. Enterprise-level projects with complex integrations may take 16-24 weeks. We provide a detailed project timeline during the discovery phase and keep you updated at every milestone.',
  },
  {
    question: 'Do you optimize for Core Web Vitals?',
    answer:
      'Absolutely. Core Web Vitals are a confirmed Google ranking factor, and we treat them as a non-negotiable performance standard. Every site we build is optimized for Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS). We use server-side rendering, optimized asset delivery, lazy loading, and modern image formats to achieve passing scores across all metrics.',
  },
  {
    question: 'Can you migrate my existing website?',
    answer:
      'Yes, we handle full website migrations with meticulous attention to SEO preservation. This includes comprehensive URL mapping and 301 redirect planning, content migration with metadata preservation, structured data transfer, backlink audit and redirect validation, and post-migration monitoring to catch any traffic drops early. We have migrated hundreds of sites without losing organic rankings.',
  },
  {
    question: 'Do you provide ongoing maintenance?',
    answer:
      'Yes. We offer monthly maintenance plans starting at $297/month that include regular software and security updates, performance monitoring and optimization, content updates and minor feature additions, monthly reporting on Core Web Vitals and uptime, and priority support for any issues. Ongoing maintenance ensures your site stays fast, secure, and SEO-optimized long after launch.',
  },
]

const relatedServices = [
  { name: 'SEO', href: '/services/seo' },
  { name: 'AEO', href: '/services/aeo' },
  { name: 'Content', href: '/services/content' },
  { name: 'SEO Consulting', href: '/services/consulting' },
  { name: 'All Services', href: '/services' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Header / Hero                                                   */
/* -------------------------------------------------------------------------- */

function Header() {
  return (
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Web Development
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Websites engineered for{' '}
            <em className="text-accent italic">search performance</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Create websites that rank higher, load faster, and convert better.
            We build with SEO as a first-class requirement, not an afterthought.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Web Consultation</Button>
            <Button variant="outline" href="/pricing">
              View Packages
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 2: Stats Bar                                                       */
/* -------------------------------------------------------------------------- */

function StatsBar() {
  const stats = [
    { value: '53%', label: 'Traffic lost to slow load times' },
    { value: '200ms', label: 'Speed improvement = +1% conversions' },
    { value: '70%', label: 'Of rankings depend on technical SEO' },
    { value: '3.8x', label: 'ROI from SEO-first web builds' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[32px] font-semibold text-ink">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 3: Services Section                                                */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Web Development Services</Subheading>
          <Heading as="h2" className="mt-2">
            Everything you need for a high-performing website.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                  <service.icon className="size-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-base font-semibold text-ink">{service.name}</h3>
                  <p className="font-mono text-xs text-ash">{service.pricing}</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-slate mb-6">{service.description}</p>

              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm text-stone">
                    <CheckIcon className="size-4 shrink-0 fill-accent mt-0.5" />
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

/* -------------------------------------------------------------------------- */
/*  Section 4: Process Section                                                 */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Development Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we build websites that perform.
          </Heading>
        </div>

        <div className="mx-auto max-w-3xl">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 5: Case Study (Dark Section)                                       */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Web Development Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we rebuilt an e-commerce site for speed, SEO, and conversions.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                {caseStudy.challenge}
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Our Solution
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                {caseStudy.solution}
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Results Achieved
              </h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">
                      {result.improvement}
                    </div>
                    <div className="text-sm text-white/80">{result.metric}</div>
                    <div className="text-xs text-white/40">{result.timeframe}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Technologies Section                                            */
/* -------------------------------------------------------------------------- */

function TechnologiesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Technologies We Use</Subheading>
          <Heading as="h2" className="mt-2">
            Modern technology stack for optimal performance.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong md:grid-cols-2 lg:grid-cols-4">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-paper p-8 text-center">
              <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink mb-6">
                {tech.category}
              </h3>
              <ul className="space-y-3">
                {tech.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-slate">
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

/* -------------------------------------------------------------------------- */
/*  Section 7: Testimonial Section                                             */
/* -------------------------------------------------------------------------- */

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-8">
            Client Testimonial
          </p>
          <blockquote className="font-display text-xl italic leading-relaxed text-ink">
            &ldquo;TheProjectSEO rebuilt our website from the ground up, and the results were
            immediate. Page speed went from 8 seconds to under 2, our Core Web Vitals all pass
            now, and organic traffic has tripled in six months. They don&apos;t just build
            websites &mdash; they build growth engines.&rdquo;
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-base font-semibold text-ink">James Rivera</p>
            <p className="text-sm text-slate mt-1">CTO, Meridian Commerce</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: FAQ Section                                                     */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="Web development frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: Related Services Section                                        */
/* -------------------------------------------------------------------------- */

function RelatedServicesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Explore More Services</Subheading>
          <Heading as="h2" className="mt-2">
            Complement your web development with expert SEO.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-5">
          {relatedServices.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className="bg-paper p-4 text-center text-sm font-heading font-medium text-stone transition-colors hover:text-accent hover:bg-cream"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: CTA Section                                                    */
/* -------------------------------------------------------------------------- */


/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function WebServices() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Web Development Services',
          description:
            'Professional web development services with built-in SEO optimization. Fast, mobile-responsive websites designed to rank higher and convert better.',
          url: 'https://theprojectseo.com/services/web',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          keywords: 'Search engine optimization, Web development, Website, Hypertext, Digital media',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Web development',
              sameAs: 'https://www.wikidata.org/wiki/Q386275',
            },
            {
              '@type': 'Thing',
              name: 'Website',
              sameAs: 'https://www.wikidata.org/wiki/Q35127',
            },
          ],
        }}
      />
      <Header />
      <StatsBar />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we build websites that perform"
        steps={processSteps}
        visual={<ServiceProcessVisual type="implementation" />}
        visualBg="ink"
      />
      <CaseStudySection />
      <TechnologiesSection />
      <TestimonialSection />
      <FAQSection />
      <RelatedServicesSection />
      <CTAFormSection
        subheading="Ready to Build a High-Performance Website?"
        heading="Start your web development project."
        lead="Create a website that drives results with our SEO-optimized web development services. From design to launch, we build websites that rank higher and convert better."
        submitText="Get Web Consultation"
      />
      <Footer />
    </main>
  )
}
