import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  CheckCircle,
  BarChart3,
  Search,
  Settings,
  Presentation,
  Phone,
  Mail,
  CalendarDays,
} from 'lucide-react'
import { JsonLd } from '@/components/json-ld'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expert SEO Consulting Services | Aditya Aman | TheProjectSEO',
  description:
    'Get personalized SEO consulting from Aditya Aman, leading SEO expert. Strategic SEO guidance, audits, and consulting services to dominate search rankings and drive revenue.',
  keywords: 'SEO consulting, SEO consultant, Aditya Aman SEO, SEO strategy, search engine optimization consultant',
  alternates: {
    canonical: '/services/seo-consulting',
  },
}

const faqItems = [
  {
    question: 'How is SEO consulting different from managed SEO services?',
    answer:
      'SEO consulting provides strategic guidance, audits, and training so your team can execute with confidence. Managed SEO services involve us handling implementation directly. Consulting is ideal if you have an internal team that needs expert direction, while managed services are better if you want us to handle execution end-to-end.',
  },
  {
    question: 'What does a typical SEO consulting engagement look like?',
    answer:
      'We start with a comprehensive audit and discovery session, then develop a tailored strategy and roadmap. From there, we provide ongoing guidance through regular sessions, priority action plans, implementation reviews, and performance monitoring. Engagements range from one-time strategy sessions to ongoing monthly consulting.',
  },
  {
    question: 'How quickly can we expect to see results from consulting?',
    answer:
      'Quick wins from audit recommendations often show impact within 30-60 days. Strategic initiatives typically deliver measurable improvements in 3-6 months. The advantage of consulting is that your team can begin executing immediately with expert guidance, accelerating time to results.',
  },
  {
    question: 'Can you train our in-house team on SEO best practices?',
    answer:
      'Absolutely. Our intensive workshops and ongoing consulting packages include hands-on training for your team. We cover technical SEO, content strategy, keyword research, analytics, and tool proficiency. Many clients use consulting specifically to build internal SEO capabilities.',
  },
  {
    question: 'What industries do you have consulting experience in?',
    answer:
      'We have consulting experience across SaaS, e-commerce, healthcare, finance, legal, technology, and more. Our strategic frameworks adapt to any industry, and we bring cross-industry insights that often reveal untapped opportunities your competitors miss.',
  },
]

const relatedServices = [
  { name: 'SEO Services', href: '/services/seo' },
  { name: 'Answer Engine Optimization', href: '/services/aeo' },
  { name: 'Content Marketing', href: '/services/content' },
  { name: 'Web Development', href: '/services/web' },
  { name: 'All Services', href: '/services' },
]

/* -------------------------------------------------------------------------- */
/*  Section 1: Hero                                                            */
/* -------------------------------------------------------------------------- */

function Hero() {
  return (
    <div className="relative">
      <Container className="relative">
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 md:pt-32 md:pb-40">
          <div className="max-w-4xl">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.1em] text-ash mb-6">
              SEO Consulting by Aditya Aman
            </p>
            <h1 className="font-display text-[clamp(36px,5vw,56px)] font-light leading-[1.1] tracking-tight text-ink">
              Expert{' '}
              <em className="text-accent not-italic font-display font-light italic">SEO Consulting</em>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-[1.65] text-slate">
              Get personalized SEO strategy and consulting from Aditya Aman, a leading SEO expert
              who has helped hundreds of businesses dominate search rankings and drive millions in revenue.
            </p>
            <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="/contact">Schedule Consultation</Button>
              <Button variant="ghost" href="#services">
                View Services
              </Button>
            </div>
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
    { value: '500+', label: 'Businesses consulted' },
    { value: '340%', label: 'Average traffic increase' },
    { value: '98%', label: 'Client satisfaction rate' },
    { value: '$50M+', label: 'Revenue driven for clients' },
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
/*  Section 3: Consultant Profile                                              */
/* -------------------------------------------------------------------------- */

function ConsultantProfile() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Photo */}
        <div className="relative">
          <div className="aspect-[4/5] bg-cream rounded-none border border-border-strong flex items-center justify-center">
            <div className="text-center">
              <div className="size-24 bg-accent rounded-none mx-auto mb-4 flex items-center justify-center">
                <span className="font-heading text-2xl font-semibold text-white">AA</span>
              </div>
              <p className="font-heading text-sm font-medium text-ink">Aditya Aman</p>
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash">SEO Expert & Consultant</p>
            </div>
          </div>
        </div>

        {/* Right side - Bio */}
        <div>
          <Subheading>Meet Your SEO Expert</Subheading>
          <Heading as="h2" className="mt-2">
            Aditya Aman - Leading SEO Consultant
          </Heading>

          <div className="mt-6 space-y-6 text-lg leading-[1.65] text-slate">
            <p>
              With over 8+ years of hands-on SEO experience, Aditya Aman has helped businesses
              across industries achieve dominant search rankings and drive substantial organic growth.
            </p>

            <p>
              As the founder of TheProjectSEO, Aditya has developed and executed winning SEO strategies
              for startups, enterprises, and everything in between. His data-driven approach has
              consistently delivered results that translate to real business value.
            </p>

            <p>
              Whether you need strategic guidance, technical expertise, or hands-on implementation,
              Aditya provides personalized consulting tailored to your unique business goals and challenges.
            </p>
          </div>

          {/* Achievement Stats */}
          <div className="mt-8 grid grid-cols-2 gap-8 border-t border-border pt-8">
            <div>
              <div className="font-mono text-[28px] font-semibold text-ink">500+</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Websites Optimized</div>
            </div>
            <div>
              <div className="font-mono text-[28px] font-semibold text-ink">340%</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Average Traffic Increase</div>
            </div>
            <div>
              <div className="font-mono text-[28px] font-semibold text-ink">8+</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Years Experience</div>
            </div>
            <div>
              <div className="font-mono text-[28px] font-semibold text-ink">98%</div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash">Client Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 4: Consulting Services                                             */
/* -------------------------------------------------------------------------- */

function ConsultingServices() {
  const services = [
    {
      icon: BarChart3,
      title: 'SEO Strategy & Audits',
      description: 'Comprehensive SEO audits and strategic roadmaps to identify opportunities and create winning strategies.',
      features: [
        'Technical SEO analysis',
        'Competitive landscape assessment',
        'Keyword opportunity mapping',
        'Content gap analysis',
        'Strategic recommendations'
      ]
    },
    {
      icon: Search,
      title: 'Advanced Keyword Research',
      description: 'Deep keyword research and content planning to target high-value search opportunities.',
      features: [
        'Search intent analysis',
        'Competitor keyword gaps',
        'Long-tail opportunity discovery',
        'Content cluster planning',
        'Seasonal trend analysis'
      ]
    },
    {
      icon: Settings,
      title: 'Technical SEO Consulting',
      description: 'Expert guidance on technical SEO implementations and website optimization.',
      features: [
        'Site architecture planning',
        'Core Web Vitals optimization',
        'Schema markup strategy',
        'International SEO setup',
        'Migration planning'
      ]
    },
    {
      icon: Presentation,
      title: 'SEO Training & Workshops',
      description: 'Hands-on SEO training for your team to build internal capabilities.',
      features: [
        'Custom SEO workshops',
        'Team training programs',
        'Best practices documentation',
        'Tool training sessions',
        'Ongoing support & mentoring'
      ]
    }
  ]

  return (
    <div className="bg-cream py-24" id="services">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Consulting Services</Subheading>
          <Heading as="h2" className="mt-2">
            Personalized SEO consulting for every need.
          </Heading>
          <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
            Whether you need strategic guidance, hands-on implementation, or team training,
            get expert SEO consulting tailored to your specific business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex items-start gap-6">
                  <div className="flex size-12 items-center justify-center rounded-md bg-accent-soft flex-shrink-0">
                    <Icon className="size-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-semibold text-ink mb-3">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-slate mb-6">{service.description}</p>

                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-sm text-slate">
                          <CheckCircle className="size-3.5 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 5: Process                                                         */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Discovery & Analysis",
      description: "We start with an in-depth analysis of your business, current SEO performance, and competitive landscape to understand your unique challenges and opportunities."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Based on our analysis, we develop a customized SEO strategy that aligns with your business goals and provides a clear roadmap for success."
    },
    {
      number: "03",
      title: "Implementation Guidance",
      description: "Get hands-on guidance and support during implementation, whether you&apos;re executing internally or need our team to handle the work."
    },
    {
      number: "04",
      title: "Monitoring & Optimization",
      description: "Ongoing monitoring, reporting, and optimization recommendations to ensure your SEO efforts continue to deliver results."
    }
  ]

  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Our Process</Subheading>
        <Heading as="h2" className="mt-2">
          How our SEO consulting works.
        </Heading>
        <p className="mt-6 text-lg leading-[1.65] text-slate max-w-3xl mx-auto">
          A proven methodology that has helped hundreds of businesses achieve
          sustainable SEO success and dominate their search markets.
        </p>
      </div>

      <div className="space-y-0">
        {steps.map((step, index) => (
          <div key={index} className="border-b border-border py-8">
            <div className="flex gap-6">
              <span className="font-mono text-sm font-semibold text-accent flex-shrink-0 mt-1">
                {step.number}
              </span>
              <div>
                <h3 className="font-heading text-xl font-semibold text-ink mb-3">{step.title}</h3>
                <p className="font-sans text-ash">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 6: Case Study (Dark)                                               */
/* -------------------------------------------------------------------------- */

function CaseStudySection() {
  const results = [
    { metric: 'Organic Traffic Growth', improvement: '+420%', timeframe: '12 months' },
    { metric: 'Revenue from Organic', improvement: '$1.8M', timeframe: 'Annual attributed revenue' },
    { metric: 'Keywords in Top 10', improvement: '180+', timeframe: 'From 22 to 202' },
    { metric: 'Domain Authority', improvement: '+34', timeframe: 'Points gained in 12 months' },
  ]

  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Consulting Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How strategic SEO consulting transformed a company&apos;s organic channel.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                The Challenge
              </h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">
                A growing B2B technology company had invested heavily in paid acquisition but was seeing diminishing returns. Their organic search presence was virtually nonexistent: fewer than 25 keywords in the top 10, organic traffic stagnating at 8,000 monthly sessions, and no internal SEO expertise on the team. Leadership recognized they needed a strategic shift but lacked the knowledge to build an effective organic growth program from scratch.
              </p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">
                Our Approach
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                Through our monthly consulting engagement, we conducted a comprehensive audit that uncovered critical technical issues suppressing crawlability and indexation. We developed a full SEO roadmap prioritizing quick wins alongside long-term authority-building initiatives. Our team trained their content writers on SEO-driven content creation, guided their developers through technical fixes, and provided ongoing strategic direction through weekly check-ins. Within six months, the client&apos;s internal team was executing confidently, and within twelve months, organic search had become their most efficient acquisition channel, surpassing paid in both volume and cost-effectiveness.
              </p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Results Achieved
              </h3>
              <div className="space-y-6">
                {results.map((result, index) => (
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
/*  Section 7: Testimonials                                                    */
/* -------------------------------------------------------------------------- */

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Aditya&apos;s SEO expertise transformed our business. His strategic approach helped us achieve #1 rankings for our most competitive keywords, resulting in 340% increase in organic traffic.",
      author: "Sarah Johnson",
      title: "CEO, TechStartup Inc.",
      results: "+340% Traffic"
    },
    {
      quote: "The ROI from Aditya&apos;s consulting has been incredible. We&apos;ve closed deals worth $2M+ directly from the organic search traffic his strategies generated.",
      author: "Michael Chen",
      title: "Founder, E-commerce Pro",
      results: "$2M+ Revenue"
    },
    {
      quote: "Aditya doesn&apos;t just provide recommendations - he ensures you understand the &apos;why&apos; behind every strategy. His training helped our team become SEO-capable internally.",
      author: "Lisa Rodriguez",
      title: "Marketing Director, SaaS Company",
      results: "+250% Rankings"
    }
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Client Success</Subheading>
          <Heading as="h2" className="mt-2">
            Results that speak for themselves.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-border-strong bg-paper p-8">
              <div className="mb-4 font-display text-2xl leading-none text-accent">&ldquo;</div>
              <blockquote className="font-display text-lg italic leading-relaxed text-ink mb-6">
                {testimonial.quote}
              </blockquote>

              <div className="flex items-center justify-between border-t border-border pt-6">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-none bg-cream flex items-center justify-center">
                    <span className="font-heading text-xs font-medium text-ink">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-heading text-sm font-semibold text-ink">{testimonial.author}</div>
                    <div className="text-xs text-ash">{testimonial.title}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-mono text-lg font-semibold text-ink">{testimonial.results}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 8: Consulting Packages                                             */
/* -------------------------------------------------------------------------- */

function ConsultingPackages() {
  const packages = [
    {
      name: "Strategy Session",
      price: "$497",
      duration: "2 hours",
      description: "One-time strategic consultation to audit your current SEO and provide actionable recommendations.",
      features: [
        "Complete SEO audit",
        "Competitive analysis",
        "Strategic recommendations",
        "Priority action plan",
        "Q&A session"
      ]
    },
    {
      name: "Monthly Consulting",
      price: "$1,997",
      duration: "Per month",
      description: "Ongoing monthly consulting with strategic guidance and implementation support.",
      features: [
        "Monthly strategy sessions",
        "Implementation guidance",
        "Progress monitoring",
        "Email & phone support",
        "Performance reporting"
      ],
      featured: true
    },
    {
      name: "Intensive Workshop",
      price: "$2,997",
      duration: "Full day",
      description: "Intensive full-day workshop for your team with hands-on SEO training and strategy development.",
      features: [
        "8-hour intensive training",
        "Custom SEO strategy",
        "Team training materials",
        "Implementation templates",
        "3-month follow-up support"
      ]
    }
  ]

  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Consulting Packages</Subheading>
        <Heading as="h2" className="mt-2">
          Choose the right consulting option for your needs.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {packages.map((pkg, index) => (
          <div key={index} className={`rounded-none p-8 border ${
            pkg.featured ? 'bg-ink text-white border-white/10' : 'bg-paper border-border-strong'
          }`}>
            {pkg.featured && (
              <div className="mb-6">
                <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center">
              <h3 className={`font-heading text-xl font-semibold mb-2 ${pkg.featured ? 'text-white' : 'text-ink'}`}>
                {pkg.name}
              </h3>
              <div className={`font-mono text-4xl font-bold mb-2 ${pkg.featured ? 'text-white' : 'text-ink'}`}>
                {pkg.price}
              </div>
              <div className={`font-mono text-xs uppercase tracking-[0.1em] mb-6 ${pkg.featured ? 'text-white/50' : 'text-ash'}`}>
                {pkg.duration}
              </div>
              <p className={`text-sm leading-relaxed mb-8 ${pkg.featured ? 'text-white/70' : 'text-slate'}`}>
                {pkg.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <CheckCircle className={`size-3.5 flex-shrink-0 ${
                    pkg.featured ? 'text-white/50' : 'text-accent'
                  }`} />
                  <span className={`text-sm ${pkg.featured ? 'text-white/70' : 'text-slate'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              href="/contact"
              variant={pkg.featured ? "ghost" : "outline"}
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </Container>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 9: FAQ                                                             */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <FAQAccordion
          title="SEO consulting frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section 10: Related Services                                               */
/* -------------------------------------------------------------------------- */

function RelatedServicesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Explore More Services</Subheading>
          <Heading as="h2" className="mt-2">
            Related services to grow your business.
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
/*  Section 11: CTA / Contact                                                  */
/* -------------------------------------------------------------------------- */

function ContactSection() {
  return (
    <div className="bg-paper py-24 border-t border-border">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Content */}
          <div>
            <Subheading>Ready to start?</Subheading>
            <Heading as="h2" className="mt-2">
              Let&apos;s discuss your SEO goals.
            </Heading>
            <p className="mt-6 text-lg leading-[1.65] text-slate">
              Get expert SEO consulting from Aditya Aman. Schedule a consultation
              to discuss your challenges and discover how we can help you dominate search rankings.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-md bg-accent-soft">
                  <CalendarDays className="size-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-ink">Free 30-minute consultation</h4>
                  <p className="text-xs text-ash">Discuss your SEO challenges and goals</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-md bg-accent-soft">
                  <Phone className="size-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-ink">Phone & video calls available</h4>
                  <p className="text-xs text-ash">Choose your preferred consultation method</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex size-10 items-center justify-center rounded-md bg-accent-soft">
                  <Mail className="size-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-heading text-sm font-semibold text-ink">Email: aditya@theprojectseo.com</h4>
                  <p className="text-xs text-ash">Reach out directly for questions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="rounded-none border border-border-strong bg-white p-8 shadow-lg">
            <h3 className="font-heading text-xl font-semibold text-ink mb-6">Schedule Your Consultation</h3>

            <form className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-stone">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-stone">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-stone">
                  Business Email *
                </label>
                <input
                  type="email"
                  className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-stone">
                  Website URL *
                </label>
                <input
                  type="url"
                  className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-stone">
                  Current SEO Challenge
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-md border border-border-emphasis bg-paper px-4 py-2.5 text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent-soft"
                  placeholder="Describe your main SEO challenges or goals..."
                />
              </div>

              <Button className="w-full">
                Schedule Free Consultation
              </Button>

              <p className="text-xs text-ash text-center">
                By submitting this form, you agree to our privacy policy. We&apos;ll never spam you.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                                 */
/* -------------------------------------------------------------------------- */

export default function SEOConsulting() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'SEO Consulting Services',
          description:
            'Get personalized SEO consulting from Aditya Aman, leading SEO expert. Strategic SEO guidance, audits, and consulting services to dominate search rankings and drive revenue.',
          url: 'https://theprojectseo.com/services/seo-consulting',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          keywords: 'Search engine optimization, Technology, Economy, Management, Business',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Technology',
              sameAs: 'https://www.wikidata.org/wiki/Q4884546',
            },
            {
              '@type': 'Thing',
              name: 'Economy',
              sameAs: 'https://www.wikidata.org/wiki/Q9715089',
            },
          ],
        }}
      />
      <Container>
        <Navbar />
      </Container>
      <Hero />
      <StatsBar />
      <ConsultantProfile />
      <ConsultingServices />
      <ProcessSection />
      <CaseStudySection />
      <TestimonialsSection />
      <ConsultingPackages />
      <FAQSection />
      <RelatedServicesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
