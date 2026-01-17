import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import UnicornBackground from '@/components/unicorn-background'
import { Heading, Lead, Subheading } from '@/components/text'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  CheckCircleIcon,
  ChartBarIcon,
  MagnifyingGlassIcon,
  CogIcon,
  PresentationChartLineIcon,
  UserGroupIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Expert SEO Consulting Services | Aditya Aman | TheProjectSEO',
  description:
    'Get personalized SEO consulting from Aditya Aman, leading SEO expert. Strategic SEO guidance, audits, and consulting services to dominate search rankings and drive revenue.',
  keywords: 'SEO consulting, SEO consultant, Aditya Aman SEO, SEO strategy, search engine optimization consultant',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-0 bottom-0" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-7xl/[0.8] md:text-8xl/[0.8]">
              Expert SEO Consulting
            </h1>
            <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Get personalized SEO strategy and consulting from Aditya Aman, a leading SEO expert 
              who has helped hundreds of businesses dominate search rankings and drive millions in revenue.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="/contact">Schedule Consultation</Button>
              <Button variant="secondary" href="#services">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ConsultantProfile() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Photo */}
        <div className="relative">
          <div className="aspect-[4/5] bg-gray-100 rounded-2xl ring-1 ring-black/5 flex items-center justify-center">
            <div className="text-center">
              <div className="size-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <p className="text-gray-500 font-medium">Aditya Aman</p>
              <p className="text-gray-400 text-sm">SEO Expert & Consultant</p>
            </div>
          </div>
        </div>
        
        {/* Right side - Bio */}
        <div>
          <Subheading>Meet Your SEO Expert</Subheading>
          <Heading as="h2" className="mt-2">
            Aditya Aman - Leading SEO Consultant
          </Heading>
          
          <div className="mt-6 space-y-6 text-lg text-gray-600">
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
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <div className="text-3xl font-bold text-gray-950">500+</div>
              <div className="text-sm text-gray-500">Websites Optimized</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-950">340%</div>
              <div className="text-sm text-gray-500">Average Traffic Increase</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-950">8+</div>
              <div className="text-sm text-gray-500">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-950">98%</div>
              <div className="text-sm text-gray-500">Client Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ConsultingServices() {
  const services = [
    {
      icon: ChartBarIcon,
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
      icon: MagnifyingGlassIcon,
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
      icon: CogIcon,
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
      icon: PresentationChartLineIcon,
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
    <div className="bg-gray-50 py-24" id="services">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Consulting Services</Subheading>
          <Heading as="h2" className="mt-2">
            Personalized SEO consulting for every need.
          </Heading>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you need strategic guidance, hands-on implementation, or team training, 
            get expert SEO consulting tailored to your specific business objectives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-start gap-6">
                <div className="size-12 bg-gray-50 rounded-xl flex items-center justify-center ring-1 ring-black/5 flex-shrink-0">
                  <service.icon className="size-6 text-gray-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-950">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm text-gray-600">
                        <CheckCircleIcon className="size-4 text-gray-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

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
      description: "Get hands-on guidance and support during implementation, whether you're executing internally or need our team to handle the work."
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
        <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
          A proven methodology that has helped hundreds of businesses achieve 
          sustainable SEO success and dominate their search markets.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6">
            <div className="size-16 bg-gray-950 text-white rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0">
              {step.number}
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-950">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Aditya's SEO expertise transformed our business. His strategic approach helped us achieve #1 rankings for our most competitive keywords, resulting in 340% increase in organic traffic.",
      author: "Sarah Johnson",
      title: "CEO, TechStartup Inc.",
      results: "+340% Traffic"
    },
    {
      quote: "The ROI from Aditya's consulting has been incredible. We've closed deals worth $2M+ directly from the organic search traffic his strategies generated.",
      author: "Michael Chen", 
      title: "Founder, E-commerce Pro",
      results: "$2M+ Revenue"
    },
    {
      quote: "Aditya doesn't just provide recommendations - he ensures you understand the 'why' behind every strategy. His training helped our team become SEO-capable internally.",
      author: "Lisa Rodriguez",
      title: "Marketing Director, SaaS Company",
      results: "+250% Rankings"
    }
  ]

  return (
    <div className="bg-gray-900 py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading className="text-gray-400">Client Success</Subheading>
          <Heading as="h2" className="mt-2 text-white">
            Results that speak for themselves.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white/5 rounded-2xl p-8 ring-1 ring-white/10">
              <blockquote className="text-white text-lg mb-6">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-medium">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.title}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-white">{testimonial.results}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

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
          <div key={index} className={`rounded-2xl p-8 shadow-lg ring-1 ring-black/5 ${
            pkg.featured ? 'bg-gray-950 text-white ring-gray-800' : 'bg-white'
          }`}>
            <div className="text-center">
              <h3 className={`text-xl font-semibold mb-2 ${pkg.featured ? 'text-white' : 'text-gray-950'}`}>
                {pkg.name}
              </h3>
              <div className={`text-4xl font-bold mb-2 ${pkg.featured ? 'text-white' : 'text-gray-950'}`}>
                {pkg.price}
              </div>
              <div className={`text-sm mb-6 ${pkg.featured ? 'text-gray-300' : 'text-gray-500'}`}>
                {pkg.duration}
              </div>
              <p className={`mb-8 ${pkg.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                {pkg.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <CheckCircleIcon className={`size-4 flex-shrink-0 ${
                    pkg.featured ? 'text-gray-300' : 'text-gray-400'
                  }`} />
                  <span className={`text-sm ${pkg.featured ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              href="/contact" 
              variant={pkg.featured ? "secondary" : "outline"}
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

function ContactSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left side - Content */}
          <div>
            <Subheading>Ready to start?</Subheading>
            <Heading as="h2" className="mt-2">
              Let's discuss your SEO goals.
            </Heading>
            <p className="mt-6 text-xl text-gray-600">
              Get expert SEO consulting from Aditya Aman. Schedule a consultation 
              to discuss your challenges and discover how we can help you dominate search rankings.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <CalendarDaysIcon className="size-6 text-gray-400" />
                <div>
                  <h4 className="font-medium text-gray-950">Free 30-minute consultation</h4>
                  <p className="text-gray-600 text-sm">Discuss your SEO challenges and goals</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <PhoneIcon className="size-6 text-gray-400" />
                <div>
                  <h4 className="font-medium text-gray-950">Phone & video calls available</h4>
                  <p className="text-gray-600 text-sm">Choose your preferred consultation method</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="size-6 text-gray-400" />
                <div>
                  <h4 className="font-medium text-gray-950">Email: aditya@theprojectseo.com</h4>
                  <p className="text-gray-600 text-sm">Reach out directly for questions</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
            <h3 className="text-xl font-semibold mb-6">Schedule Your Consultation</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="john@company.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website URL *
                </label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="https://yourwebsite.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Current SEO Challenge
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent"
                  placeholder="Describe your main SEO challenges or goals..."
                />
              </div>
              
              <Button className="w-full">
                Schedule Free Consultation
              </Button>
              
              <p className="text-xs text-gray-500 text-center">
                By submitting this form, you agree to our privacy policy. We'll never spam you.
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function SEOConsulting() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Hero />
      <ConsultantProfile />
      <ConsultingServices />
      <ProcessSection />
      <TestimonialsSection />
      <ConsultingPackages />
      <ContactSection />
      <FAQAccordion />
      <Footer />
    </main>
  )
}