import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  BarChart3,
  Search,
  Wrench,
  FileText,
  MapPin,
  Settings,
  CheckCircle,
} from 'lucide-react'
import { FAQAccordion } from '@/components/faq-accordion'
import { JsonLd } from '@/components/json-ld'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'TheProjectSEO helps you dominate search rankings by revealing the exact strategies your competitors use.',
  alternates: { canonical: '/' },
}

function Hero() {
  return (
    <div className="relative">
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-5 lg:gap-16">
          {/* Left content - 60% */}
          <div className="lg:col-span-3">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-6">
              Data-Driven SEO Agency
            </p>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink">
              We help brands{' '}
              <em className="text-accent not-italic font-display font-light italic">dominate</em>{' '}
              every search result.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-[1.65] text-slate">
              TheProjectSEO reveals the exact strategies your competitors use
              and builds a roadmap to outrank them — consistently.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact">
                Get Your Free SEO Audit
              </Button>
              <Button variant="ghost" href="/pricing">
                View Pricing
              </Button>
            </div>

          </div>

          {/* Right floating card - 40% */}
          <div className="lg:col-span-2">
            <div className="rounded-lg border border-border-strong bg-white p-6 shadow-lg">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-md bg-accent-soft">
                  <BarChart3 className="size-5 text-accent" />
                </div>
                <div>
                  <div className="font-heading text-sm font-semibold text-ink">Performance Gap</div>
                  <div className="font-mono text-xs text-ash">vs. top competitor</div>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex justify-between text-xs text-slate">
                    <span>Your site</span>
                    <span className="font-mono">34%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-cream">
                    <div className="h-2 rounded-full bg-ash/40" style={{ width: '34%' }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex justify-between text-xs text-slate">
                    <span>After TheProjectSEO</span>
                    <span className="font-mono text-accent">92%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-cream">
                    <div className="h-2 rounded-full bg-accent" style={{ width: '92%' }} />
                  </div>
                </div>
              </div>
              <p className="mt-4 text-xs text-ash">
                Average visibility score improvement across our clients
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TrustSection() {
  return (
    <div className="bg-cream border-y border-border">
      <Container className="py-14">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-10 text-center">
          Trusted by businesses worldwide
        </p>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { metric: '4.7/5', label: 'Client Rating' },
            { metric: '10K+', label: 'Keywords Ranked' },
            { metric: '90%', label: 'Client Retention' },
            { metric: '10+', label: 'Years Experience' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <div className="font-mono text-[32px] font-semibold text-ink leading-none mb-2">{item.metric}</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">{item.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ServicesSection() {
  const services = [
    { icon: BarChart3, title: 'SEO Audit', desc: 'Comprehensive analysis of your website\'s SEO health, identifying opportunities and issues affecting your search rankings.', features: ['Technical SEO assessment', 'Content gap analysis', 'Competitor benchmarking', 'Performance recommendations'] },
    { icon: Search, title: 'Keyword Research', desc: 'Advanced keyword research to discover high-value opportunities and create winning content strategies.', features: ['Search intent analysis', 'Competitor keyword mapping', 'Long-tail opportunities', 'Content cluster planning'] },
    { icon: Wrench, title: 'Technical SEO', desc: 'Fix technical issues that prevent search engines from properly crawling and indexing your website.', features: ['Site speed optimization', 'Schema markup implementation', 'Mobile optimization', 'Core Web Vitals improvement'] },
    { icon: FileText, title: 'Content Optimization', desc: 'Create and optimize content that ranks higher and converts visitors into customers.', features: ['On-page SEO optimization', 'Content creation & writing', 'Meta tag optimization', 'Featured snippet targeting'] },
    { icon: MapPin, title: 'Local SEO', desc: 'Dominate local search results and drive more customers to your physical business locations.', features: ['Google Business Profile optimization', 'Local citation building', 'Review management', 'Local keyword optimization'] },
    { icon: Settings, title: 'Link Building', desc: 'Build high-quality backlinks that improve your domain authority and search engine rankings.', features: ['High-authority link acquisition', 'Content marketing outreach', 'Digital PR campaigns', 'Competitor link analysis'] },
  ]

  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Services</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
          Everything you need to rank #1 on Google.
        </Heading>
        <p className="mt-6 text-lg leading-[1.65] text-slate max-w-2xl mx-auto">
          Our comprehensive SEO services cover every aspect of search engine optimization.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex size-12 items-center justify-center rounded-md bg-accent-soft">
                <Icon className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink mb-3">{service.title}</h3>
              <p className="text-sm leading-relaxed text-slate mb-5">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate">
                    <CheckCircle className="size-3.5 text-accent flex-shrink-0" />
                    {f}
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

function StatsSection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-white/50 mb-4">
              Growth Rate
            </p>
            <div className="font-mono text-[72px] font-semibold leading-none text-white mb-4">
              +340%
            </div>
            <p className="text-xl font-heading font-medium text-white/80 mb-4">
              increase in organic traffic within 6 months
            </p>
            <p className="text-sm leading-relaxed text-white/50 max-w-md">
              Our data-driven SEO strategies consistently deliver exceptional results,
              with most clients seeing significant improvements within the first 90 days.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              { val: '50+', label: 'Pages Built' },
              { val: '10K+', label: 'Keywords Ranked' },
              { val: '30', label: 'Days to First Results' },
              { val: '90%', label: 'Client Retention Rate' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-[36px] font-semibold text-white mb-2">{stat.val}</div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-white/40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function TestimonialsSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Testimonials</Subheading>
      <Heading as="h3" className="mt-2 text-center">
        Trusted by industry leaders.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {[
          {
            quote: 'TheProjectSEO helped us achieve #1 rankings for our most important keywords. Our organic traffic increased by 240% in just 6 months.',
            name: 'Sarah Johnson',
            role: 'CEO, TechStartup Inc.',
          },
          {
            quote: 'The ROI from their SEO work has been incredible. We\'ve closed deals worth $2M+ directly from organic search traffic.',
            name: 'Michael Chen',
            role: 'Founder, E-commerce Pro',
          },
          {
            quote: 'Their local SEO strategies helped us dominate our market. We now get 50+ qualified leads per month from Google.',
            name: 'Lisa Rodriguez',
            role: 'Owner, Local Business',
          },
        ].map((t) => (
          <div key={t.name} className="border border-border-strong p-8">
            <div className="mb-4 font-display text-2xl leading-none text-accent">&ldquo;</div>
            <blockquote className="font-display text-lg italic leading-relaxed text-ink mb-6">
              {t.quote}
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="size-10 rounded-full bg-cream" />
              <div>
                <div className="font-heading text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-ash">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TeamSection() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 gap-16 items-center lg:grid-cols-2">
        <div>
          <Subheading>Meet the Team</Subheading>
          <Heading as="h2" className="mt-2">
            We don&apos;t just grow traffic — we grow businesses.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate">
            Our team combines technical expertise with creative strategy to deliver SEO results
            that drive real business growth.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <div className="font-mono text-[28px] font-semibold text-ink">10+</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Years Experience</div>
            </div>
            <div>
              <div className="font-mono text-[28px] font-semibold text-ink">10K+</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Keywords Ranked</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-square bg-cream border border-border" />
            <div className="aspect-[4/3] bg-cream border border-border" />
          </div>
          <div className="mt-8 space-y-4">
            <div className="aspect-[4/3] bg-cream border border-border" />
            <div className="aspect-square bg-cream border border-border" />
          </div>
        </div>
      </div>
    </Container>
  )
}

function IndustriesSection() {
  const industries = [
    { name: 'E-commerce', href: '/industries/ecommerce' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Real Estate', href: '/industries/realestate' },
    { name: 'Technology', href: '/industries/technology' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Legal', href: '/industries/legal' },
    { name: 'Automotive', href: '/industries/automotive' },
    { name: 'Travel', href: '/industries/travel' },
    { name: 'Food & Beverage', href: '/industries/food' },
    { name: 'Non-profit', href: '/industries/nonprofit' },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Industries We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            You&apos;ve got the vision. We&apos;ve got the strategy.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
            Our industry expertise spans across multiple sectors, allowing us to create
            targeted SEO strategies that understand your unique market challenges.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              href={industry.href}
              className="flex flex-col items-center bg-cream p-6 text-center transition-all hover:-translate-y-1 hover:bg-paper hover:shadow-md"
            >
              <div className="mb-3 size-8 rounded-md bg-accent-soft" />
              <h3 className="font-heading text-sm font-medium text-ink">{industry.name}</h3>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate mb-6">Don&apos;t see your industry? We work with businesses across all sectors.</p>
          <Button href="/contact">Discuss Your Industry</Button>
        </div>
      </Container>
    </div>
  )
}

function ContactFormSection() {
  return (
    <div className="bg-cream">
      <Container className="py-24">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div>
          <Subheading>Ready to get started?</Subheading>
          <Heading as="h2" className="mt-2">
            Let&apos;s work with your most profitable channel.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate">
            Get a free SEO audit and discover how we can help you dominate your search market.
          </p>

          <div className="mt-8 space-y-4">
            {['Free comprehensive SEO audit', 'Custom strategy roadmap', 'Competitive analysis report'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle className="size-4 text-accent flex-shrink-0" />
                <span className="text-sm text-slate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-border-strong bg-white p-8 shadow-lg">
          <form className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-stone">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-stone">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                  placeholder="Smith"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-stone">
                Business Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label htmlFor="website" className="mb-1.5 block text-sm font-medium text-stone">
                Website URL *
              </label>
              <input
                type="url"
                id="website"
                name="website"
                required
                className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                placeholder="https://yourwebsite.com"
              />
            </div>

            <div>
              <label htmlFor="budget" className="mb-1.5 block text-sm font-medium text-stone">
                Monthly SEO Budget
              </label>
              <select id="budget" name="budget" className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft">
                <option value="">Select budget range</option>
                <option value="1000-5000">$1,000 - $5,000</option>
                <option value="5000-10000">$5,000 - $10,000</option>
                <option value="10000-25000">$10,000 - $25,000</option>
                <option value="25000+">$25,000+</option>
              </select>
            </div>

            <Button className="w-full">
              Get Your Free SEO Audit
            </Button>

            <p className="text-xs text-ash text-center">
              By submitting this form, you agree to our privacy policy. We&apos;ll never spam you.
            </p>
          </form>

          {/* Social proof below form */}
          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs text-ash">
              <div className="size-1.5 rounded-full bg-green-500 animate-pulse" />
              <span>Average response time: <span className="font-semibold text-ink">under 2 hours</span></span>
            </div>
            <div className="flex items-center gap-2 text-xs text-ash">
              <CheckCircle className="size-3.5 text-accent flex-shrink-0" />
              <span>Rated <span className="font-semibold text-ink">4.7/5</span> by our clients</span>
            </div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  )
}


export default function Home() {
  return (
    <div className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'TheProjectSEO',
          url: 'https://theprojectseo.com',
          logo: 'https://theprojectseo.com/logos/wordmark_A_full.svg',
          sameAs: [
            'https://facebook.com/theprojectseo',
            'https://x.com/theprojectseo',
            'https://linkedin.com/company/theprojectseo',
          ],
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'sales',
            url: 'https://theprojectseo.com/contact',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'TheProjectSEO',
          url: 'https://theprojectseo.com',
        }}
      />
      <Navbar />
      <Hero />
      <main>
        <TrustSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <IndustriesSection />
        <ContactFormSection />
        <Container className="py-16">
          <FAQAccordion />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
