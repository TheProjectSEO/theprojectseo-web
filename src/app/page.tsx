import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Link } from '@/components/link'
import { Navbar } from '@/components/navbar'
import UnicornBackground from '@/components/unicorn-background'
import { Heading, Subheading } from '@/components/text'
import { ChevronRightIcon } from '@heroicons/react/16/solid'
import { 
  BarChart3, 
  Search, 
  Wrench, 
  FileText, 
  MapPin, 
  Settings,
  CheckCircle,
  Users,
  TrendingUp,
  Star
} from 'lucide-react'
import { FAQAccordion } from '@/components/faq-accordion'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  description:
    'TheProjectSEO helps you dominate search rankings by revealing the exact strategies your competitors use.',
}

function Hero() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-0 bottom-0" />
      <Container className="relative">
        <Navbar
          banner={
            <Link
              href="/blog/dominate-search-rankings-2025"
              className="flex items-center gap-1 rounded-full bg-gray-950/35 px-3 py-0.5 text-sm/6 font-medium text-white data-hover:bg-gray-950/30"
            >
              New: Advanced SEO Strategies for 2025
              <ChevronRightIcon className="size-4" />
            </Link>
          }
        />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            Dominate every search.
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            TheProjectSEO helps you dominate search rankings by revealing the exact 
            strategies your competitors use.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get started</Button>
            <Button variant="secondary" href="/pricing">
              See pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function FeatureSection() {
  return (
    <div className="overflow-hidden">
      <Container className="pb-24">
        <Heading as="h2" className="max-w-3xl">
          A complete view of your SEO performance.
        </Heading>
        <div className="mt-16 aspect-video w-full rounded-2xl bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">SEO Dashboard Screenshot</p>
        </div>
      </Container>
    </div>
  )
}

function ServicesSection() {
  return (
    <Container>
      <div className="text-center mb-16">
        <Subheading>It all starts with search.</Subheading>
        <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
          Everything you need to rank #1 on Google.
        </Heading>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Our comprehensive SEO services cover every aspect of search engine optimization, 
          from technical audits to content strategy and link building.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
        {/* SEO Audit */}
        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 ring-1 ring-black/5">
            <BarChart3 className="size-6 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">SEO Audit</h3>
          <p className="text-gray-500 mb-6">
            Comprehensive analysis of your website's SEO health, identifying opportunities 
            and issues affecting your search rankings.
          </p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• Technical SEO assessment</li>
            <li>• Content gap analysis</li>
            <li>• Competitor benchmarking</li>
            <li>• Performance recommendations</li>
          </ul>
        </div>

        {/* Keyword Research */}
        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 ring-1 ring-black/5">
            <Search className="size-6 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Keyword Research</h3>
          <p className="text-gray-500 mb-6">
            Advanced keyword research to discover high-value opportunities and 
            create winning content strategies.
          </p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• Search intent analysis</li>
            <li>• Competitor keyword mapping</li>
            <li>• Long-tail opportunities</li>
            <li>• Content cluster planning</li>
          </ul>
        </div>

        {/* Technical SEO */}
        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 ring-1 ring-black/5">
            <Wrench className="size-6 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Technical SEO</h3>
          <p className="text-gray-500 mb-6">
            Fix technical issues that prevent search engines from properly 
            crawling and indexing your website.
          </p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• Site speed optimization</li>
            <li>• Schema markup implementation</li>
            <li>• Mobile optimization</li>
            <li>• Core Web Vitals improvement</li>
          </ul>
        </div>

        {/* Content Optimization */}
        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 ring-1 ring-black/5">
            <FileText className="size-6 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Content Optimization</h3>
          <p className="text-gray-500 mb-6">
            Create and optimize content that ranks higher and converts 
            visitors into customers.
          </p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• On-page SEO optimization</li>
            <li>• Content creation & writing</li>
            <li>• Meta tag optimization</li>
            <li>• Featured snippet targeting</li>
          </ul>
        </div>

        {/* Local SEO */}
        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 ring-1 ring-black/5">
            <MapPin className="size-6 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Local SEO</h3>
          <p className="text-gray-500 mb-6">
            Dominate local search results and drive more customers to 
            your physical business locations.
          </p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• Google Business Profile optimization</li>
            <li>• Local citation building</li>
            <li>• Review management</li>
            <li>• Local keyword optimization</li>
          </ul>
        </div>

        {/* Link Building */}
        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
          <div className="size-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 ring-1 ring-black/5">
            <Settings className="size-6 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Link Building</h3>
          <p className="text-gray-500 mb-6">
            Build high-quality backlinks that improve your domain authority 
            and search engine rankings.
          </p>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>• High-authority link acquisition</li>
            <li>• Content marketing outreach</li>
            <li>• Digital PR campaigns</li>
            <li>• Competitor link analysis</li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

function StatsSection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-32">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Main stat */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-4 mb-8">
              <div className="size-16 bg-gray-800 rounded-2xl flex items-center justify-center">
                <div className="size-8 bg-white rounded"></div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-400 uppercase tracking-wide">Growth Rate</div>
                <div className="text-lg font-semibold text-white">Average Client Results</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="text-8xl font-bold text-white leading-none">+340%</div>
              <div className="text-xl text-gray-300 font-medium">
                increase in organic traffic within 6 months
              </div>
              <p className="text-gray-400 max-w-md">
                Our data-driven SEO strategies consistently deliver exceptional results, 
                with most clients seeing significant improvements within the first 90 days.
              </p>
            </div>
          </div>
          
          {/* Right side - Supporting stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-sm text-gray-400">Websites Ranked #1</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150%</div>
              <div className="text-sm text-gray-400">Average Traffic Increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">30</div>
              <div className="text-sm text-gray-400">Days to First Results</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-sm text-gray-400">Client Retention Rate</div>
            </div>
          </div>
        </div>
        
        {/* Bottom testimonial highlight */}
        <div className="mt-16 text-center">
          <blockquote className="text-xl text-white font-medium mb-6 max-w-3xl mx-auto">
            "TheProjectSEO's strategies helped us achieve the impossible - we're now ranking #1 for our most competitive keywords and our revenue from organic search has increased by 340%."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="size-12 bg-gray-700 rounded-full"></div>
            <div className="text-left">
              <div className="text-white font-medium">Jennifer Martinez</div>
              <div className="text-gray-400 text-sm">CEO, GrowthTech Solutions</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TrustSection() {
  return (
    <Container className="py-16">
      <div className="text-center">
        <Subheading className="mb-12">Trusted by 500+ businesses worldwide</Subheading>
        
        {/* Client Logos */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center opacity-60">
          {[
            { name: "Google", width: "w-20" },
            { name: "Microsoft", width: "w-24" },
            { name: "Amazon", width: "w-20" },
            { name: "Meta", width: "w-16" },
            { name: "Apple", width: "w-18" },
            { name: "Netflix", width: "w-20" }
          ].map((company, index) => (
            <div key={index} className={`${company.width} h-12 bg-gray-100 rounded-lg flex items-center justify-center ring-1 ring-black/5`}>
              <span className="text-xs font-medium text-gray-500">{company.name}</span>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          <div className="flex items-center gap-3">
            <CheckCircle className="size-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Google Partner</span>
          </div>
          <div className="flex items-center gap-3">
            <Star className="size-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">Certified Experts</span>
          </div>
          <div className="flex items-center gap-3">
            <TrendingUp className="size-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">5-Star Rated</span>
          </div>
          <div className="flex items-center gap-3">
            <Users className="size-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-600">24/7 Support</span>
          </div>
        </div>
      </div>
    </Container>
  )
}

function ValuePropositionSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Why Choose TheProjectSEO</Subheading>
        <Heading as="h2" className="mt-2">
          Online visibility is just the beginning.
        </Heading>
      </div>
      
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="text-center">
          <div className="size-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-black/5">
            <BarChart3 className="size-8 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Data-Driven Strategies</h3>
          <p className="text-gray-500">
            Every SEO decision we make is backed by comprehensive data analysis and proven methodologies 
            that deliver measurable results for your business.
          </p>
        </div>
        
        <div className="text-center">
          <div className="size-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-black/5">
            <FileText className="size-8 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Transparent Reporting</h3>
          <p className="text-gray-500">
            Get detailed monthly reports showing exactly how your SEO investment is performing, 
            with clear metrics and actionable insights.
          </p>
        </div>
        
        <div className="text-center">
          <div className="size-16 bg-gray-50 rounded-2xl flex items-center justify-center mx-auto mb-6 ring-1 ring-black/5">
            <TrendingUp className="size-8 text-gray-600" />
          </div>
          <h3 className="text-xl font-semibold mb-4 text-gray-950">Long-Term Growth</h3>
          <p className="text-gray-500">
            We focus on sustainable SEO practices that deliver long-term growth, 
            not quick fixes that could harm your site's future performance.
          </p>
        </div>
      </div>
    </Container>
  )
}

function TestimonialsSection() {
  return (
    <Container className="mt-24 mb-24">
      <Subheading className="text-center">Testimonials</Subheading>
      <Heading as="h3" className="mt-2 text-center">
        Trusted by industry leaders.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          <blockquote className="text-lg font-medium text-gray-950">
            &ldquo;TheProjectSEO helped us achieve #1 rankings for our most important keywords. 
            Our organic traffic increased by 240% in just 6 months.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center">
            <div className="size-12 rounded-full bg-gray-100 ring-1 ring-black/5"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-950">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, TechStartup Inc.</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          <blockquote className="text-lg font-medium text-gray-950">
            &ldquo;The ROI from their SEO work has been incredible. We&apos;ve closed deals worth 
            $2M+ directly from organic search traffic.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center">
            <div className="size-12 rounded-full bg-gray-100 ring-1 ring-black/5"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-950">Michael Chen</div>
              <div className="text-sm text-gray-500">Founder, E-commerce Pro</div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
          <blockquote className="text-lg font-medium text-gray-950">
            &ldquo;Their local SEO strategies helped us dominate our market. We now get 
            50+ qualified leads per month from Google.&rdquo;
          </blockquote>
          <div className="mt-6 flex items-center">
            <div className="size-12 rounded-full bg-gray-100 ring-1 ring-black/5"></div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-950">Lisa Rodriguez</div>
              <div className="text-sm text-gray-500">Owner, Local Business</div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function TeamSection() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left side - Content */}
        <div>
          <Subheading>Meet the Team</Subheading>
          <Heading as="h2" className="mt-2">
            We don't just grow traffic — we grow businesses.
          </Heading>
          <p className="mt-6 text-xl text-gray-500">
            Our team combines technical expertise with creative strategy to deliver SEO results 
            that drive real business growth. With over 50 years of combined experience, 
            we've helped hundreds of businesses dominate their search markets.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <div className="text-2xl font-bold text-gray-950">15+</div>
              <div className="text-sm text-gray-500">Years Average Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-950">500+</div>
              <div className="text-sm text-gray-500">Successful Projects</div>
            </div>
          </div>
        </div>
        
        {/* Right side - Team photos */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-2xl ring-1 ring-black/5"></div>
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl ring-1 ring-black/5"></div>
          </div>
          <div className="space-y-4 mt-8">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl ring-1 ring-black/5"></div>
            <div className="aspect-square bg-gray-100 rounded-2xl ring-1 ring-black/5"></div>
          </div>
        </div>
      </div>
    </Container>
  )
}

function IndustriesSection() {
  const industries = [
    { name: "E-commerce", href: "/industries/ecommerce" },
    { name: "SaaS", href: "/industries/saas" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Finance", href: "/industries/finance" },
    { name: "Real Estate", href: "/industries/realestate" },
    { name: "Technology", href: "/industries/technology" },
    { name: "Education", href: "/industries/education" },
    { name: "Legal", href: "/industries/legal" },
    { name: "Automotive", href: "/industries/automotive" },
    { name: "Travel", href: "/industries/travel" },
    { name: "Food & Beverage", href: "/industries/food" },
    { name: "Non-profit", href: "/industries/nonprofit" }
  ]

  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Industries We Serve</Subheading>
          <Heading as="h2" className="mt-2">
            You've got the vision. We've got the strategy.
          </Heading>
          <p className="mt-6 text-xl text-gray-500 max-w-3xl mx-auto">
            Our industry expertise spans across multiple sectors, allowing us to create 
            targeted SEO strategies that understand your unique market challenges.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {industries.map((industry, index) => (
            <Link 
              key={index} 
              href={industry.href}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow ring-1 ring-black/5 block"
            >
              <div className="size-8 bg-gray-50 rounded-lg mx-auto mb-3 ring-1 ring-black/5"></div>
              <h3 className="font-medium text-gray-950">{industry.name}</h3>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">Don't see your industry? We work with businesses across all sectors.</p>
          <Button href="/contact">Discuss Your Industry</Button>
        </div>
      </Container>
    </div>
  )
}

function ContactFormSection() {
  return (
    <Container className="py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left side - Content */}
        <div>
          <Subheading>Ready to get started?</Subheading>
          <Heading as="h2" className="mt-2">
            Let's work with your most profitable channel.
          </Heading>
          <p className="mt-6 text-xl text-gray-600">
            Get a free SEO audit and discover how we can help you dominate your search market. 
            We'll analyze your current performance and show you exactly what opportunities you're missing.
          </p>
          
          <div className="mt-8 space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="size-5 text-gray-600" />
              <span className="text-gray-500">Free comprehensive SEO audit</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="size-5 text-gray-600" />
              <span className="text-gray-500">Custom strategy roadmap</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="size-5 text-gray-600" />
              <span className="text-gray-500">Competitive analysis report</span>
            </div>
          </div>
        </div>
        
        {/* Right side - Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-black/5">
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
                Monthly SEO Budget
              </label>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent">
                <option>Select budget range</option>
                <option>$1,000 - $5,000</option>
                <option>$5,000 - $10,000</option>
                <option>$10,000 - $25,000</option>
                <option>$25,000+</option>
              </select>
            </div>
            
            <Button className="w-full">
              Get Your Free SEO Audit
            </Button>
            
            <p className="text-xs text-gray-500 text-center">
              By submitting this form, you agree to our privacy policy. We'll never spam you.
            </p>
          </form>
        </div>
      </div>
    </Container>
  )
}


export default function Home() {
  return (
    <div className="overflow-hidden">
      <UnicornBackground />
      <Hero />
      <main>
        <TrustSection />
        <ValuePropositionSection />
        <div className="bg-linear-to-b from-white from-50% to-gray-100 py-32">
          <FeatureSection />
          <ServicesSection />
        </div>
        <StatsSection />
        <TestimonialsSection />
        <TeamSection />
        <IndustriesSection />
        <ContactFormSection />
        <FAQAccordion />
      </main>
      <Footer />
    </div>
  )
}
