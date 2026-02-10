import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { CheckIcon } from '@/components/check-icon'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { TestimonialQuoteSection } from '@/components/testimonial-quote-section'
import { HeroAnimation } from '@/components/hero-animation'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { CTAFormSection } from '@/components/service-page-sections'
import { JsonLd } from '@/components/json-ld'
import {
  AcademicCapIcon,
  GlobeAltIcon,
  UserGroupIcon,
  BookOpenIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education SEO Services | School & University SEO | TheProjectSEO',
  description:
    'Specialized SEO services for education institutions, online learning platforms, and EdTech companies. Drive enrollment with data-driven education SEO strategies.',
  alternates: {
    canonical: '/industries/education',
  },
  openGraph: {
    title: 'Education SEO Services | School & University SEO',
    description:
      'Specialized SEO services for education institutions, online learning platforms, and EdTech companies. Drive enrollment with data-driven education SEO strategies.',
    url: '/industries/education',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Education SEO Services | School & University SEO',
    description:
      'Specialized SEO services for education institutions, online learning platforms, and EdTech companies. Drive enrollment with data-driven education SEO strategies.',
  },
}

const challenges = [
  {
    challenge: 'Enrollment Cycle Seasonality',
    description: 'Education searches spike during enrollment periods and drop off-season, making consistent organic growth difficult.',
    solution: 'We build evergreen content foundations and seasonal campaign calendars that capture demand year-round.',
    icon: AcademicCapIcon
  },
  {
    challenge: 'Program Differentiation',
    description: 'Standing out among hundreds of similar programs and institutions competing for the same prospective students.',
    solution: 'We develop unique program pages with differentiated messaging and long-tail keyword strategies that highlight your strengths.',
    icon: BookOpenIcon
  },
  {
    challenge: 'Local vs Online Competition',
    description: 'Balancing local SEO for campus-based programs with national visibility for online offerings creates conflicting strategies.',
    solution: 'We create segmented SEO campaigns that target local and national audiences with tailored content and technical optimization.',
    icon: GlobeAltIcon
  },
  {
    challenge: 'Student Intent Targeting',
    description: 'Prospective students search with diverse intents from early research to ready-to-apply, requiring nuanced keyword strategies.',
    solution: 'We map the full student journey and create content that captures intent at every stage of the enrollment funnel.',
    icon: UserGroupIcon
  }
]

const services = [
  {
    name: 'Education Keyword Research',
    description: 'In-depth keyword research tailored to academic programs, student search behavior, and enrollment intent.',
    features: [
      'Program-specific keyword mapping',
      'Student intent and search journey analysis',
      'Seasonal enrollment keyword tracking',
      'Competitor institution gap analysis'
    ]
  },
  {
    name: 'Program Page Optimization',
    description: 'Optimize individual program and course pages to rank for high-intent enrollment keywords.',
    features: [
      'Degree and certificate page optimization',
      'Course catalog SEO structure',
      'Faculty and department page optimization',
      'Schema markup for educational programs'
    ]
  },
  {
    name: 'Enrollment Funnel SEO',
    description: 'Align your SEO strategy with the enrollment funnel to convert searchers into applicants.',
    features: [
      'Awareness-stage content strategy',
      'Consideration-stage program comparisons',
      'Decision-stage application page optimization',
      'Enrollment conversion tracking setup'
    ]
  },
  {
    name: 'EdTech Content Strategy',
    description: 'Build authoritative content that positions your institution as a leader in education.',
    features: [
      'Student resource and guide creation',
      'Industry trend and career outcome articles',
      'Alumni success story optimization',
      'Blog and knowledge base SEO'
    ]
  }
]

const processSteps = [
  {
    number: '01',
    title: 'Education SEO Audit',
    description: 'We analyze your current search presence, program pages, enrollment funnel, and competitive landscape to identify growth opportunities.'
  },
  {
    number: '02',
    title: 'Student Journey Mapping',
    description: 'We map the prospective student journey from initial research to application, identifying keyword opportunities at each stage.'
  },
  {
    number: '03',
    title: 'Program Page Optimization',
    description: 'We optimize your program pages, course listings, and enrollment content for maximum search visibility and conversion.'
  },
  {
    number: '04',
    title: 'Content & Link Building',
    description: 'We create authoritative education content and build high-quality backlinks from academic and industry sources.'
  }
]

const caseStudy = {
  client: 'Online Learning Platform',
  industry: 'EdTech / Online Education',
  challenge: 'An online learning platform with 200+ programs struggled to rank against established universities and large course marketplaces.',
  solution: 'We implemented a comprehensive program page optimization strategy combined with enrollment funnel SEO and targeted content creation for high-intent student keywords.',
  results: [
    { metric: 'Organic Enrollment Inquiries', improvement: '+380%', timeframe: '10 months' },
    { metric: 'Program Keywords Ranked', improvement: '200+', timeframe: 'Top 10 positions' },
    { metric: 'Course Page Views', improvement: '+220%', timeframe: 'From organic search' },
    { metric: 'Application Starts', improvement: '+150%', timeframe: 'Year over year' }
  ]
}

const educationFAQs = [
  {
    question: 'How long does education SEO take to show enrollment results?',
    answer: 'Most education institutions begin seeing improved rankings and traffic within 60-90 days. Meaningful enrollment impact typically appears within 4-6 months as program pages gain authority and visibility during key enrollment windows.'
  },
  {
    question: 'Do you work with both traditional universities and online learning platforms?',
    answer: 'Yes. We work with community colleges, universities, trade schools, online course platforms, and EdTech companies. Our strategies are customized based on your institution type, program offerings, and target student demographics.'
  },
  {
    question: 'How do you handle seasonal enrollment fluctuations in SEO?',
    answer: 'We build a dual strategy: evergreen content that captures year-round research traffic and seasonal campaigns timed to enrollment windows. This ensures consistent visibility while maximizing impact during peak application periods.'
  },
  {
    question: 'Can you help with SEO for individual course and program pages?',
    answer: 'Absolutely. Program and course page optimization is one of our core services. We optimize titles, descriptions, structured data, and on-page content for each program to ensure they rank for relevant student searches.'
  },
  {
    question: 'What metrics do you track for education SEO success?',
    answer: 'We track program page rankings, organic traffic to enrollment pages, application starts from organic search, inquiry form submissions, and overall enrollment attribution. You receive monthly reports connecting SEO performance to enrollment outcomes.'
  },
  {
    question: 'How does local SEO fit into an education SEO strategy?',
    answer: 'For campus-based programs, local SEO is critical. We optimize your Google Business Profile, build local citations, create location-specific landing pages, and target geographic keywords to capture nearby prospective students searching for programs.'
  },
  {
    question: 'How do I do keyword research for educational institutions?',
    answer: 'Education keyword research involves identifying program-specific terms, student intent queries, and enrollment-focused searches. Use tools like Ahrefs, SEMrush, and Google Keyword Planner to find keywords like "online MBA programs," "nursing degree near me," or "computer science certificate programs." Focus on long-tail keywords that signal enrollment intent and match your program offerings.'
  },
  {
    question: 'What are backlinks and why do they matter for education SEO?',
    answer: 'Backlinks are links from other websites pointing to your institution&apos;s site. They signal authority and trustworthiness to search engines. For education institutions, backlinks from .edu domains, accreditation organizations, industry publications, and educational directories significantly improve domain authority and rankings. Quality backlinks help you compete against larger universities.'
  },
  {
    question: 'How important are Core Web Vitals for educational websites?',
    answer: 'Core Web Vitals (LCP, INP, CLS) are critical Google ranking factors that measure page speed and user experience. Educational websites with slow-loading program pages, heavy images, or poor mobile performance suffer from higher bounce rates and lower rankings. We use Google PageSpeed Insights and GTmetrix to optimize Core Web Vitals and ensure fast, smooth experiences for prospective students.'
  },
  {
    question: 'Should schools and universities invest in local SEO?',
    answer: 'Yes, local SEO is essential for institutions with physical campuses. Optimize your Google Business Profile, ensure NAP (Name, Address, Phone) consistency across directories, and create location-specific landing pages. Local SEO helps you appear in "near me" searches and Google&apos;s local pack, capturing students searching for nearby programs and campus visits.'
  },
  {
    question: 'How do I track SEO performance and enrollment attribution?',
    answer: 'Use Google Analytics 4 to track organic traffic, user behavior, and enrollment conversions from search. Google Search Console shows keyword rankings, click-through rates, and indexation status. Tools like Screaming Frog help audit technical issues. Set up custom events in GA4 to track program page views, application starts, and form submissions, then tie them back to organic search channels for clear enrollment attribution.'
  }
]

const relatedIndustries = [
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Healthcare', href: '/industries/healthcare' },
  { name: 'SaaS', href: '/industries/saas' },
  { name: 'AI & Machine Learning', href: '/industries/ai' },
  { name: 'Nonprofit', href: '/industries/nonprofit' },
  { name: 'Legal', href: '/industries/legal' }
]

function HeroSection() {
  return (
    <div className="bg-paper">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Education
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Education SEO that <em className="not-italic text-accent">connects learners</em> with your programs
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            Specialized SEO strategies for education institutions and EdTech companies that drive enrollment and connect students with the right programs.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Education SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function StatsSection() {
  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {[
            { value: '$7.3T', label: 'Global education market' },
            { value: '85%', label: 'Search for courses online' },
            { value: '1.4K/mo', label: 'Avg. program keyword volume' },
            { value: '3.1%', label: 'Education search conversion' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">{stat.value}</div>
              <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ChallengesSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Education Industry Challenges</Subheading>
        <Heading as="h2" className="mt-2">
          Unique SEO challenges in the education space.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
        {challenges.map((item, index) => (
          <div key={index} className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex size-12 items-center justify-center rounded-none bg-accent-soft">
                <item.icon className="size-6 text-accent" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-ink">{item.challenge}</h3>
            </div>

            <p className="text-sm leading-relaxed text-slate mb-4">{item.description}</p>
            <div className="border-l-4 border-border-emphasis pl-4">
              <p className="text-sm font-medium text-ink mb-1">Our Solution:</p>
              <p className="text-sm text-stone">{item.solution}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Specialized Education SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Tailored strategies for education institutions.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div key={index} className="bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <h3 className="font-heading text-xl font-semibold text-ink mb-4">{service.name}</h3>
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

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            How we grow education enrollment through SEO.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              <div className="font-mono text-5xl font-bold text-border-strong mb-4">{step.number}</div>
              <h3 className="font-heading text-lg font-semibold text-ink mb-3">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Core technical SEO for educational institutions
          </Heading>
          <Lead className="mt-6">
            Educational institutions need robust technical foundations to compete in search rankings. We optimize Core Web Vitals, implement education-specific schema markup, and build crawlable site architectures that help prospective students find your programs.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & Site Performance</h3>
            <p className="text-slate mb-4">
              Page speed and user experience directly impact rankings and enrollment conversions. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your program pages load fast for prospective students on all devices.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Image optimization and lazy loading for program photos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Mobile-first optimization for campus and program pages</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">CDN implementation and browser caching strategies</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Education Schema Markup</h3>
            <p className="text-slate mb-4">
              We implement JSON-LD schema markup from schema.org to help search engines understand your educational programs, courses, and institutional information. Proper structured data enables rich snippets and better visibility in ChatGPT, Perplexity, and Google&apos;s education features.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Course and EducationalOrganization schema</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Event schema for campus tours and open houses</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQ and Program rich snippets for SERPs</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Link Building for Educational Institutions</h3>
            <p className="text-slate mb-4">
              Quality backlinks from .edu domains, accreditation organizations, and educational publications build domain authority and credibility. We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute white-hat link building strategies specific to education.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Educational directory and accreditation citations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Partnership and industry resource page links</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR and local news outreach</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Education Analytics & Enrollment Tracking</h3>
            <p className="text-slate mb-4">
              We set up comprehensive tracking using Google Analytics 4, Google Search Console, and Screaming Frog to monitor keyword rankings, organic traffic, and enrollment attribution. You&apos;ll get monthly reports showing exactly how SEO drives application starts and enrollment for your institution.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Custom GA4 event tracking for applications</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console performance monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Enrollment attribution and ROI measurement</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Education Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped an online learning platform achieve breakthrough growth.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-sm leading-relaxed text-white/60 mb-6">{caseStudy.challenge}</p>

              <h3 className="font-heading text-xl font-semibold text-white mb-4">Our Solution</h3>
              <p className="text-sm leading-relaxed text-white/60">{caseStudy.solution}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">Results Achieved</h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">{result.improvement}</div>
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

function KeywordsSection() {
  return (
    <Container className="py-24">
      <div className="text-center mb-16">
        <Subheading>Education Industry Keywords</Subheading>
        <Heading as="h2" className="mt-2">
          Examples of education keywords we target.
        </Heading>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            category: 'Program Types',
            keywords: ['online MBA programs', 'nursing degree programs', 'computer science certificate', 'data analytics bootcamp']
          },
          {
            category: 'Student Intent',
            keywords: ['best colleges for engineering', 'affordable online degrees', 'accredited online programs', 'how to apply for college']
          },
          {
            category: 'Location-Based',
            keywords: ['universities near me', 'community colleges in [city]', 'trade schools in [state]', 'local coding bootcamps']
          },
          {
            category: 'Online Learning',
            keywords: ['online degree programs', 'self-paced courses', 'virtual classroom platform', 'remote learning programs']
          },
          {
            category: 'Certification',
            keywords: ['professional certification courses', 'IT certification programs', 'teaching certification online', 'project management certification']
          },
          {
            category: 'Higher Education',
            keywords: ['graduate school programs', 'PhD programs online', 'master&apos;s degree requirements', 'university admission requirements']
          }
        ].map((group, index) => (
          <div key={index} className="text-center">
            <h3 className="font-heading text-lg font-semibold text-ink mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.keywords.map((keyword, keywordIndex) => (
                <li key={keywordIndex} className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none">
                  {keyword}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Subheading>What Our Clients Say</Subheading>
          <blockquote className="mt-8">
            <p className="font-display text-xl font-light leading-relaxed text-ink sm:text-2xl">
              &ldquo;TheProjectSEO transformed our digital enrollment strategy. Within six months, our program pages were ranking on the first page for competitive education keywords. We&apos;ve seen a measurable increase in qualified inquiries and application starts directly from organic search.&rdquo;
            </p>
            <footer className="mt-8">
              <p className="font-heading text-base font-semibold text-ink">Sarah Mitchell</p>
              <p className="text-sm text-slate">Director of Marketing, Westbridge University</p>
            </footer>
          </blockquote>
        </div>
      </Container>
    </div>
  )
}

function PricingSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Education SEO Pricing</Subheading>
          <Heading as="h2" className="mt-2">
            Investment that drives enrollment growth.
          </Heading>
          <Lead className="mt-6">
            Our education SEO packages are designed to deliver measurable enrollment results for institutions and EdTech companies of all sizes.
          </Lead>
          <div className="mt-8">
            <p className="font-display text-4xl font-medium text-ink">Starting at $1,497/month</p>
            <p className="mt-3 text-sm text-slate">Custom plans available based on program count, target markets, and enrollment goals.</p>
          </div>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="/contact">Get Custom Quote</Button>
            <Button variant="outline" href="/pricing">
              View All Plans
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Education SEO frequently asked questions" items={educationFAQs} />
    </>
  )
}

function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO services for other industries.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {relatedIndustries.map((industry, index) => (
            <a
              key={index}
              href={industry.href}
              className="block border border-border-strong bg-paper px-4 py-3 text-center text-sm font-heading font-semibold text-ink transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              {industry.name}
            </a>
          ))}
        </div>
      </Container>
    </div>
  )
}


export default function EducationSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Education SEO Services | School & University SEO',
          description:
            'Specialized SEO services for education institutions, online learning platforms, and EdTech companies. Drive enrollment with data-driven education SEO strategies.',
          url: 'https://theprojectseo.com/industries/education',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Backlink, World Wide Web, Cyberspace, Information technology',
          about: [
            {
              '@type': 'Thing',
              name: 'Search engine optimization',
              sameAs: 'https://www.wikidata.org/wiki/Q180711',
            },
            {
              '@type': 'Thing',
              name: 'Backlink',
              sameAs: 'https://www.wikidata.org/wiki/Q373952',
            },
            {
              '@type': 'Thing',
              name: 'World Wide Web',
              sameAs: 'https://www.wikidata.org/wiki/Q4897839',
            },
            {
              '@type': 'Thing',
              name: 'Cyberspace',
              sameAs: 'https://www.wikidata.org/wiki/Q7215645',
            },
            {
              '@type': 'Thing',
              name: 'Information technology',
              sameAs: 'https://www.wikidata.org/wiki/Q7214259',
            }
          ],
        }}
      />
      {/* Section 1: Hero */}
      <HeroSection />
      {/* Section 2: Stats Bar */}
      <StatsSection />
      {/* Section 3: Challenges */}
      <ChallengesSection />
      {/* Section 4: Services */}
      <ServicesSection />
      {/* Section 5: Process */}
      <ProcessTabbedSection
        subheading="Our Process"
        heading="How we grow education enrollment through SEO"
        steps={processSteps}
      />
      {/* Section 6: Technical SEO */}
      <TechnicalSEOSection />
      {/* Section 7: Case Study (Dark) */}
      <CaseStudySection />
      {/* Section 8: Keywords */}
      <KeywordsSection />
      {/* Section 9: Testimonial */}
      <TestimonialSection />
      {/* Section 10: Pricing */}
      <PricingSection />
      {/* Section 11: FAQ */}
      <TestimonialAndFAQSection />
      {/* Section 12: Related Industries */}
      <RelatedIndustriesSection />
      {/* Section 13: CTA */}
      <CTAFormSection
        subheading="Ready to Fill Your Classrooms with SEO?"
        heading="Let's build your education SEO strategy."
        lead="Partner with SEO experts who understand the education industry. We'll help you attract more qualified prospective students and drive enrollment growth through organic search."
        submitText="Get Education SEO Strategy"
      />
      <Footer />
    </main>
  )
}
