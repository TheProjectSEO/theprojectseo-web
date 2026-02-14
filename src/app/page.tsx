import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { HeroAnimation } from '@/components/hero-animation'
import {
  BarChart3,
  Search,
  Wrench,
  FileText,
  MapPin,
  Settings,
  CheckCircle,
  ShoppingCart,
  Cloud,
  HeartPulse,
  Landmark,
  Building2,
  Cpu,
  GraduationCap,
  Scale,
  Car,
  Plane,
  UtensilsCrossed,
  Heart,
  Linkedin,
} from 'lucide-react'
import Image from 'next/image'
import { AgentAvatar } from '@/components/agent-avatar'
import { StarRating } from '@/components/star-rating'
import { testimonials } from '@/data/testimonials'
import { getAggregateRatingSchema } from '@/data/schema'
import { CTAFormSection } from '@/components/service-page-sections'
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
    <div className="relative overflow-hidden">
      <HeroAnimation />
      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-12 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-5 lg:gap-16">
          {/* Left content - 60% */}
          <div className="lg:col-span-3">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Data-Driven SEO Agency
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              We help brands{' '}
              <em className="text-accent italic">dominate</em>{' '}
              every search result.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
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
            <div className="space-y-3">
              {/* Main results card */}
              <div className="rounded-lg border border-border-strong bg-white p-6 shadow-lg">
                <div className="flex items-center justify-between mb-5">
                  <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">Client Results</div>
                  <div className="flex items-center gap-1.5">
                    <StarRating size="sm" />
                    <span className="font-mono text-xs text-ash">9 reviews</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: '243%', label: 'Revenue growth', client: 'E-commerce' },
                    { value: '$2.1M', label: 'Pipeline from organic', client: 'B2B SaaS' },
                    { value: '3x', label: 'More organic leads', client: 'Helpling' },
                    { value: '60%', label: 'Lower acquisition cost', client: 'Home Services' },
                  ].map((r) => (
                    <div key={r.label} className="border-l-2 border-accent/30 pl-3">
                      <div className="font-mono text-xl font-bold text-ink leading-none">{r.value}</div>
                      <div className="text-[11px] text-slate mt-1">{r.label}</div>
                      <div className="font-mono text-[10px] text-ash">{r.client}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Mini testimonial */}
              <div className="rounded-lg border border-border-strong bg-white p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <Image src="/testimonials/james-lim.png" alt="James Lim" width={36} height={36} className="size-9 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <p className="font-display text-sm italic leading-snug text-ink">
                      &ldquo;We hit our KPIs in less than 3 months. Moved key pages to #1 and #2.&rdquo;
                    </p>
                    <p className="mt-1.5 font-mono text-[10px] text-ash">James Lim, CEO — Helpling APAC</p>
                  </div>
                </div>
              </div>
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
            <p className="font-mono text-xs font-medium uppercase tracking-[0.15em] text-white/50 mb-4">
              Growth Rate
            </p>
            <div className="font-mono text-[72px] font-black leading-none text-white mb-4">
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
                <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-white mb-2">{stat.val}</div>
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-white/40 mt-3">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

function AIAgentsSection() {
  const agents = [
    { type: 'nexus' as const, name: 'NEXUS', role: 'Internal Links Agent', desc: 'Maps and builds internal link architecture for maximum topical relevance and crawl efficiency.' },
    { type: 'atlas' as const, name: 'ATLAS', role: 'Schema Markup Agent', desc: 'Generates and validates JSON-LD structured data for every page type automatically.' },
    { type: 'vector' as const, name: 'VECTOR', role: 'Content Optimization Agent', desc: 'Uses embeddings and semantic analysis to optimize content for topical completeness.' },
    { type: 'herald' as const, name: 'HERALD', role: 'Digital PR Agent', desc: 'Identifies high-authority outreach targets and tracks placement success for link acquisition.' },
    { type: 'sentinel' as const, name: 'SENTINEL', role: 'Technical SEO Agent', desc: 'Monitors site health, Core Web Vitals, and indexation issues around the clock.' },
    { type: 'oracle' as const, name: 'ORACLE', role: 'Keyword Intelligence Agent', desc: 'Discovers untapped keyword opportunities and prioritizes targets by traffic potential.' },
    { type: 'phantom' as const, name: 'PHANTOM', role: 'Competitor Intelligence Agent', desc: 'Monitors competitor rankings, content changes, and backlink acquisitions silently.' },
    { type: 'forge' as const, name: 'FORGE', role: 'Content Strategy Agent', desc: 'Builds topical authority maps, plans content clusters, and identifies content gaps.' },
  ]

  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>AI-Powered SEO</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
          8 AI agents working on your SEO — around the clock.
        </Heading>
        <p className="mt-6 text-lg leading-[1.65] text-slate max-w-2xl mx-auto">
          Our proprietary AI agents augment the team&apos;s expertise, handling repetitive analysis
          and monitoring so we can focus on strategy that moves the needle.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border-strong lg:grid-cols-4">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="bg-paper p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-4 flex size-12 items-center justify-center rounded-md bg-accent-soft">
              <AgentAvatar type={agent.type} />
            </div>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-accent">
              {agent.name}
            </p>
            <h3 className="font-heading text-sm font-semibold text-ink mt-1">{agent.role}</h3>
            <p className="text-xs leading-relaxed text-slate mt-2">{agent.desc}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TestimonialsSection() {
  const featured = [
    testimonials.find((t) => t.id === 'james-lim')!,
    testimonials.find((t) => t.id === 'elizabeth-ching')!,
    testimonials.find((t) => t.id === 'sho-dewan')!,
  ]

  return (
    <Container className="py-24">
      <Subheading className="text-center">Testimonials</Subheading>
      <Heading as="h3" className="mt-2 text-center">
        Trusted by industry leaders.
      </Heading>

      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        {featured.map((t) => (
          <div key={t.id} className="flex flex-col border border-border-strong p-8">
            <StarRating size="sm" />
            <blockquote className="mt-5 font-display text-lg italic leading-relaxed text-ink">
              {t.quote}
            </blockquote>
            <div className="mt-auto flex items-center gap-3 pt-8">
              <Image src={t.image} alt={t.author} width={44} height={44} className="size-11 rounded-full object-cover" />
              <div>
                <div className="font-heading text-sm font-medium text-ink">{t.author}</div>
                <div className="text-xs text-ash">{t.role}, {t.company}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TeamSection() {
  const team = [
    { name: 'Aditya Aman', role: 'Founder & SEO Consultant', focus: 'Systems & Processes', image: '/team/aditya-aman.png', linkedin: 'https://www.linkedin.com/in/adityaaman/' },
    { name: 'Siraj Akmal', role: 'Technical Lead', focus: 'Technical SEO', image: '/team/siraj-akmal.png', linkedin: 'https://www.linkedin.com/in/shiraz100/' },
    { name: 'Vaibhav Singh', role: 'Project Lead', focus: 'Strategy & Delivery', image: '/team/vaibhav-singh.png', linkedin: 'https://www.linkedin.com/in/vaibhav-singh-2522b3174/' },
    { name: 'Smit Dholakiya', role: 'SEO Executive', focus: 'On-Page & Content', image: '/team/smit-dholakiya.png', linkedin: 'https://www.linkedin.com/in/smit-dholakiya/' },
    { name: 'Mohd. Rushan', role: 'SEO Executive', focus: 'Link Building & Outreach', image: '/team/mohd-rushan.jpeg', linkedin: 'https://www.linkedin.com/in/mohd-rushan/' },
  ]

  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Meet the Team</Subheading>
        <Heading as="h2" className="mt-2">
          We don&apos;t just grow traffic — we grow businesses.
        </Heading>
        <p className="mt-6 text-lg leading-[1.65] text-slate max-w-2xl mx-auto">
          A lean team of SEO specialists who combine technical expertise
          with strategic thinking to deliver measurable results.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-3 lg:grid-cols-5">
        {team.map((member) => (
          <div key={member.name} className="group bg-paper p-6 text-center">
            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative mx-auto mb-4 size-24 overflow-hidden rounded-full border-2 border-accent/20">
                <Image src={member.image} alt={member.name} width={96} height={96} className="size-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 transition-all group-hover:bg-ink/40">
                  <Linkedin className="size-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
              <h3 className="font-heading text-sm font-semibold text-ink">{member.name}</h3>
            </a>
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-accent mt-1">{member.role}</p>
            <p className="text-xs text-ash mt-1">{member.focus}</p>
          </div>
        ))}
      </div>
    </Container>
  )
}

function IndustriesSection() {
  const industries = [
    { name: 'E-commerce', href: '/industries/ecommerce', icon: ShoppingCart },
    { name: 'SaaS', href: '/industries/saas', icon: Cloud },
    { name: 'Healthcare', href: '/industries/healthcare', icon: HeartPulse },
    { name: 'Finance', href: '/industries/finance', icon: Landmark },
    { name: 'Real Estate', href: '/industries/realestate', icon: Building2 },
    { name: 'Technology', href: '/industries/technology', icon: Cpu },
    { name: 'Education', href: '/industries/education', icon: GraduationCap },
    { name: 'Legal', href: '/industries/legal', icon: Scale },
    { name: 'Automotive', href: '/industries/automotive', icon: Car },
    { name: 'Travel', href: '/industries/travel', icon: Plane },
    { name: 'Food & Beverage', href: '/industries/food', icon: UtensilsCrossed },
    { name: 'Non-profit', href: '/industries/nonprofit', icon: Heart },
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
          {industries.map((industry) => {
            const Icon = industry.icon
            return (
              <Link
                key={industry.name}
                href={industry.href}
                className="flex flex-col items-center bg-cream p-6 text-center transition-all hover:-translate-y-1 hover:bg-paper hover:shadow-md"
              >
                <div className="mb-3 flex size-10 items-center justify-center rounded-md bg-accent-soft">
                  <Icon className="size-5 text-accent" />
                </div>
                <h3 className="font-heading text-sm font-medium text-ink">{industry.name}</h3>
              </Link>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate mb-6">Don&apos;t see your industry? We work with businesses across all sectors.</p>
          <Button href="/contact">Discuss Your Industry</Button>
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
          legalName: 'TheProjectSEO Digital (OPC) Private Limited',
          url: 'https://theprojectseo.com',
          logo: 'https://theprojectseo.com/logos/wordmark_A_full.svg',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'No. 808, Mahabir Tower, Main Road, P.S. Hindpiri',
            addressLocality: 'Ranchi',
            addressRegion: 'Jharkhand',
            postalCode: '834001',
            addressCountry: 'IN',
          },
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
          aggregateRating: getAggregateRatingSchema(),
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
        <AIAgentsSection />
        <TestimonialsSection />
        <TeamSection />
        <IndustriesSection />
        <CTAFormSection
          subheading="Ready to get started?"
          heading="Let's work with your most profitable channel."
          lead="Get a free SEO audit and discover how we can help you dominate your search market."
        />
        <Container className="py-16">
          <FAQAccordion />
        </Container>
      </main>
      <Footer />
    </div>
  )
}
