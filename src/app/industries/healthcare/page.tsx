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
import type { Metadata } from 'next'
import {
  ShieldCheckIcon,
  DocumentCheckIcon,
  MapPinIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Healthcare SEO Services | Medical Practice SEO | TheProjectSEO',
  description:
    'HIPAA-compliant SEO services for healthcare providers. Drive patient acquisition with medical keyword optimization, local healthcare SEO, and trusted content strategies.',
  alternates: {
    canonical: '/industries/healthcare',
  },
  openGraph: {
    title: 'Healthcare SEO Services | Medical Practice SEO',
    description:
      'HIPAA-compliant SEO services for healthcare providers. Drive patient acquisition with medical keyword optimization, local healthcare SEO, and trusted content strategies.',
    url: '/industries/healthcare',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare SEO Services | Medical Practice SEO',
    description:
      'HIPAA-compliant SEO services for healthcare providers. Drive patient acquisition with medical keyword optimization, local healthcare SEO, and trusted content strategies.',
  },
}

const challenges = [
  {
    challenge: 'HIPAA Compliance',
    description:
      'Healthcare organizations must navigate strict regulatory requirements when publishing online content. Every page, blog post, and patient resource must comply with HIPAA regulations and other healthcare privacy laws, ensuring that no protected health information is inadvertently exposed while still providing the informative content that search engines reward.',
    solution:
      'We build SEO strategies with HIPAA compliance baked into every step, from content creation workflows to technical implementation, so your online presence grows without regulatory risk.',
    icon: ShieldCheckIcon,
  },
  {
    challenge: 'Medical Content Accuracy',
    description:
      'Search engines hold healthcare content to the highest E-E-A-T standards. Inaccurate or misleading medical information can harm patients and destroy trust, making expert-reviewed content essential for ranking.',
    solution:
      'Our content process includes medical review checkpoints and structured authorship attribution to satisfy both Google&apos;s quality guidelines and patient expectations.',
    icon: DocumentCheckIcon,
  },
  {
    challenge: 'Local Patient Acquisition',
    description:
      'Most patients search for providers within their geographic area. Winning the local map pack and near-me queries requires a fundamentally different strategy than traditional organic SEO.',
    solution:
      'We deploy hyperlocal SEO campaigns targeting service-area pages, Google Business Profile optimization, and citation management tailored to each practice location.',
    icon: MapPinIcon,
  },
  {
    challenge: 'Competitive Medical Keywords',
    description:
      'High-value healthcare keywords like "best cardiologist near me" or "urgent care open now" face intense competition from hospital systems, aggregators, and national directories.',
    solution:
      'We identify specialty-specific long-tail opportunities and create topical authority clusters that let smaller practices compete with large hospital networks.',
    icon: MagnifyingGlassIcon,
  },
]

const services = [
  {
    name: 'Medical Keyword Research',
    description:
      'Data-driven keyword strategies tailored to medical specialties, patient intent, and local search behavior.',
    features: [
      'Specialty-specific keyword mapping across 50+ medical fields',
      'Patient intent analysis for symptom, condition, and treatment queries',
      'Competitor keyword gap analysis against local and national providers',
      'Search volume and difficulty scoring for medical terms',
    ],
  },
  {
    name: 'HIPAA-Compliant Content',
    description:
      'Expert-reviewed medical content that ranks well and builds patient trust without compliance risk.',
    features: [
      'Physician-reviewed blog posts and patient education pages',
      'E-E-A-T-optimized author bios and credentials display',
      'HIPAA-safe testimonial and review integration',
      'Medical accuracy review workflow before publication',
    ],
  },
  {
    name: 'Local Healthcare SEO',
    description:
      'Dominate local search results and map packs to drive foot traffic to your practice locations.',
    features: [
      'Google Business Profile optimization for each location',
      'Service-area pages targeting neighborhood-level queries',
      'Medical citation building across healthcare directories',
      'Review generation and reputation management strategy',
    ],
  },
  {
    name: 'Medical Schema Markup',
    description:
      'Structured data implementation that helps search engines understand and showcase your medical services.',
    features: [
      'MedicalOrganization and Physician schema markup',
      'FAQ and HowTo schema for patient education content',
      'LocalBusiness schema for multi-location practices',
      'MedicalCondition and MedicalProcedure structured data',
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Healthcare SEO Audit',
    description:
      'We conduct a comprehensive audit of your current online presence, analyzing technical SEO health, content gaps, local visibility, and HIPAA compliance across all digital touchpoints.',
  },
  {
    number: '02',
    title: 'Strategy & Keyword Mapping',
    description:
      'Based on audit findings, we develop a custom strategy mapping high-value medical keywords to service lines, locations, and patient journey stages.',
  },
  {
    number: '03',
    title: 'Content & Technical Implementation',
    description:
      'Our team executes on-page optimizations, creates physician-reviewed content, implements medical schema markup, and builds local citations simultaneously.',
  },
  {
    number: '04',
    title: 'Monitoring & Optimization',
    description:
      'We continuously track rankings, patient acquisition metrics, and conversion data, refining the strategy monthly to maximize ROI and adapt to algorithm changes.',
  },
]

const caseStudy = {
  client: 'Multi-Location Orthopedic Clinic',
  industry: 'Healthcare / Orthopedics',
  narrative:
    'A five-location orthopedic clinic in the Southeast was losing ground to a large hospital system that had recently invested heavily in digital marketing. Despite strong clinical outcomes and high patient satisfaction scores, their website was buried on page three for key terms like "orthopedic surgeon near me" and "knee replacement [city]." They had no structured local SEO strategy, inconsistent Google Business Profiles across locations, and a blog that hadn&apos;t been updated in over a year. Within three months of our engagement, we rebuilt their local presence from the ground up: optimized each location&apos;s Google Business Profile with specialty-specific categories, launched 25+ physician-reviewed condition pages, and implemented MedicalOrganization schema across the site. By month eight, they were ranking in the local map pack for 40+ high-intent keywords and had seen a dramatic increase in new patient appointment requests originating from organic search.',
  results: [
    {
      metric: 'Organic Traffic Growth',
      value: '+385%',
      timeframe: '12 months',
      benchmark: 'Industry avg: +45% YoY',
    },
    {
      metric: 'New Patient Appointments',
      value: '+210%',
      timeframe: 'From organic search',
      benchmark: 'Industry avg: +30% YoY',
    },
    {
      metric: 'Local Map Pack Rankings',
      value: '40+',
      timeframe: 'High-intent keywords in top 3',
      benchmark: 'Industry avg: 8-12 keywords',
    },
    {
      metric: 'Cost Per Acquisition',
      value: '-62%',
      timeframe: 'vs. paid search campaigns',
      benchmark: 'Industry avg CPA: $285',
    },
  ],
}

const keywordCategories = [
  {
    category: 'Core Medical',
    keywords: [
      'best doctor near me',
      'primary care physician',
      'medical clinic open today',
      'healthcare provider reviews',
    ],
  },
  {
    category: 'Specialty Keywords',
    keywords: [
      'orthopedic surgeon [city]',
      'pediatric dentist near me',
      'dermatologist accepting patients',
      'cardiologist consultation',
    ],
  },
  {
    category: 'Local Healthcare',
    keywords: [
      'urgent care near me open now',
      'walk-in clinic [neighborhood]',
      'same-day doctor appointment',
      'weekend medical clinic',
    ],
  },
  {
    category: 'Patient Education',
    keywords: [
      'symptoms of [condition]',
      'treatment options for [condition]',
      'what to expect during [procedure]',
      'recovery time after [surgery]',
    ],
  },
  {
    category: 'Medical Procedures',
    keywords: [
      'knee replacement surgery cost',
      'LASIK eye surgery near me',
      'colonoscopy preparation guide',
      'physical therapy after surgery',
    ],
  },
  {
    category: 'Telehealth',
    keywords: [
      'online doctor consultation',
      'telehealth appointment booking',
      'virtual urgent care visit',
      'remote patient monitoring',
    ],
  },
]

const healthcareFAQs = [
  {
    question: 'How do you ensure HIPAA compliance in SEO content?',
    answer:
      'Every piece of content goes through our HIPAA compliance workflow before publication. We never use real patient data, avoid identifiable case details, and ensure all testimonials are properly consented and de-identified. Our content team is trained on healthcare privacy regulations, and we work with your compliance officer to review sensitive topics.',
  },
  {
    question: 'How does the medical content review process work?',
    answer:
      'We draft content based on peer-reviewed medical sources and clinical guidelines, then route each piece through a physician or licensed provider for accuracy review. This ensures clinical correctness while maintaining the readability and SEO optimization needed to rank. Typical turnaround for reviewed content is 5-7 business days.',
  },
  {
    question: 'How do you help with local patient acquisition?',
    answer:
      'Our local SEO strategy includes Google Business Profile optimization for each location, service-area page creation targeting neighborhood-level keywords, medical directory citation building, and a review generation framework. We focus on "near me" and geo-modified queries that signal high patient intent.',
  },
  {
    question: 'How long does it take to see results for healthcare SEO?',
    answer:
      'Most healthcare clients see measurable improvements in local visibility within 60-90 days. Significant organic traffic growth typically occurs between months 4-6, and meaningful new patient acquisition increases are usually evident by month 6-8. Healthcare SEO is a long-term investment that compounds over time.',
  },
  {
    question: 'Can you work with multi-location healthcare practices?',
    answer:
      'Absolutely. Multi-location SEO is one of our core strengths. We create unique strategies for each location, avoiding duplicate content issues while ensuring every office has optimized local pages, accurate citations, and a well-managed Google Business Profile.',
  },
  {
    question: 'Do you work with hospital systems or only private practices?',
    answer:
      'We work with healthcare organizations of all sizes, from solo practitioners and small group practices to multi-location clinics and hospital systems. Our strategies scale to match the complexity and scope of your organization while maintaining personalized attention to each service line.',
  },
  {
    question: 'How do I do keyword research for healthcare?',
    answer:
      'Healthcare keyword research requires understanding patient search behavior and medical terminology. Use tools like Ahrefs, SEMrush, and Google Keyword Planner to identify keywords like "best [specialty] near me", "[condition] treatment", and "[procedure] cost". Focus on long-tail keywords with high commercial intent, local search modifiers, and symptom-based queries that patients actually use. Analyze search volume, keyword difficulty, and competitor rankings to prioritize opportunities.',
  },
  {
    question: 'What are backlinks and why do they matter for medical SEO?',
    answer:
      'Backlinks are links from other websites pointing to your medical practice site. They signal authority and trustworthiness to search engines like Google. For healthcare providers, backlinks from authoritative medical journals, health blogs, and healthcare directories dramatically improve domain authority and rankings. Quality matters more than quantity—one link from WebMD or the Mayo Clinic is worth hundreds of low-quality directory links. Use Ahrefs or Moz to analyze your backlink profile.',
  },
  {
    question: 'How important are Core Web Vitals for healthcare websites?',
    answer:
      'Core Web Vitals (LCP, INP, CLS) are Google ranking factors that measure page speed and user experience. Healthcare websites must load fast on mobile devices where most patients search for providers. Poor Core Web Vitals lead to higher bounce rates, lower rankings, and lost patient appointments. We use Google PageSpeed Insights and GTmetrix to optimize medical sites and achieve "Good" ratings across all metrics, which improves both rankings and patient experience.',
  },
  {
    question: 'Should medical practices invest in local SEO?',
    answer:
      'Yes, local SEO is essential for medical practices. Most patients search for healthcare providers within their geographic area using "near me" searches. Optimize your Google Business Profile for each location, build local citations with consistent NAP (Name, Address, Phone), and create service-area pages targeting neighborhood-level keywords. Local SEO helps you appear in Google&apos;s local pack and map results, driving patient appointments from nearby searches.',
  },
  {
    question: 'How do I track healthcare SEO performance?',
    answer:
      'Use Google Analytics 4 to track organic traffic, patient behavior, and appointment requests from search. Google Search Console shows keyword rankings, click-through rates, and indexation status for your medical content. Tools like Ahrefs and SEMrush provide competitor analysis and backlink monitoring. Set up HIPAA-compliant custom events in GA4 to track patient actions (appointment bookings, contact form submissions, phone calls) and tie them back to organic search channels for complete ROI visibility.',
  },
]

const relatedIndustries = [
  { name: 'AI & Machine Learning', href: '/industries/ai' },
  { name: 'E-commerce', href: '/industries/ecommerce' },
  { name: 'Finance', href: '/industries/finance' },
  { name: 'Legal', href: '/industries/legal' },
  { name: 'Technology', href: '/industries/technology' },
  { name: 'Education', href: '/industries/education' },
]

/* ──────────────────────────── 1. Hero ──────────────────────────── */

function HeroSection() {
  return (
    <div className="bg-paper">
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-20 sm:pt-24 sm:pb-28">
          <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
            Healthcare Industry
          </p>
          <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
            Healthcare SEO that builds trust and{' '}
            <em className="text-accent italic">drives patients</em>
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
            HIPAA-compliant SEO strategies designed for healthcare providers. We help clinics,
            hospitals, and medical practices attract more patients through organic search.
          </p>
          <div className="mt-8 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get Healthcare SEO Strategy</Button>
            <Button variant="outline" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ──────────────────────────── 2. Stats Bar ──────────────────────────── */

function StatsBar() {
  const stats = [
    { value: '$4.5T', label: 'Global healthcare market' },
    { value: '77%', label: 'Patients who search online before booking' },
    { value: '5.4K/mo', label: 'Healthcare SEO search volume' },
    { value: '3.2%', label: 'Average healthcare conversion rate' },
  ]

  return (
    <div className="bg-cream border-y border-border py-14">
      <Container>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">{stat.value}</div>
              <div className="mt-1 text-sm text-slate">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ──────────────────────────── 3. Challenges ──────────────────────────── */

function ChallengesSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Healthcare SEO Challenges</Subheading>
          <Heading as="h2" className="mt-2">
            Unique obstacles in healthcare marketing.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
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
    </div>
  )
}

/* ──────────────────────────── 4. Services ──────────────────────────── */

function ServicesSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Healthcare SEO Services</Subheading>
          <Heading as="h2" className="mt-2">
            Comprehensive SEO for medical practices.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cream p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
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

/* ──────────────────────────── 5. Process ──────────────────────────── */

function ProcessSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Our Process</Subheading>
          <Heading as="h2" className="mt-2">
            A proven healthcare SEO methodology.
          </Heading>
        </div>

        <div className="mx-auto max-w-3xl">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="font-mono text-xs text-accent mb-3">{step.number}</div>
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ──────────────────────────── 6. Healthcare Technical SEO Excellence ──────────────────────────── */

function TechnicalSEOSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Subheading>Technical Excellence</Subheading>
          <Heading as="h2" className="mt-2">
            Healthcare Technical SEO Excellence
          </Heading>
          <Lead className="mt-6">
            Medical websites require specialized technical optimization. We optimize Core Web Vitals for fast mobile performance, implement comprehensive medical schema markup, build authoritative backlinks from health publications, and set up HIPAA-compliant tracking to measure patient acquisition.
          </Lead>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Core Web Vitals & HIPAA-Compliant Speed</h3>
            <p className="text-slate mb-4">
              Patient experience starts with fast-loading pages. We optimize Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) using Google PageSpeed Insights and GTmetrix to ensure your medical website loads quickly on all devices while maintaining HIPAA compliance. Fast sites rank higher and convert more patients.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Medical image optimization and lazy loading</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Mobile-first optimization for patient searches</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">HIPAA-compliant CDN and secure caching</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Medical Schema Markup</h3>
            <p className="text-slate mb-4">
              Structured data from schema.org helps search engines understand your medical services, physicians, and specialties. We implement JSON-LD schema markup for Physician, MedicalOrganization, and FAQPage to enable rich snippets in Google, knowledge panels, and better visibility in ChatGPT, Perplexity, and medical search results.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Physician and MedicalOrganization schema</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">MedicalCondition and MedicalProcedure markup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">FAQPage and LocalBusiness structured data</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Healthcare Link Building</h3>
            <p className="text-slate mb-4">
              Quality backlinks from authoritative medical journals, health blogs, and healthcare directories build domain authority and demonstrate E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). We use Ahrefs, SEMrush, and Moz to identify link opportunities, analyze competitor backlink profiles, and execute white-hat link acquisition strategies that comply with medical marketing regulations.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Guest posting on health and medical blogs</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Medical directory citations and partnerships</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Digital PR for medical expertise and research</span>
              </li>
            </ul>
          </div>

          <div className="bg-paper p-8">
            <h3 className="font-heading text-xl font-semibold text-ink mb-4">Medical Analytics & Patient Journey Tracking</h3>
            <p className="text-slate mb-4">
              We set up HIPAA-compliant tracking using Google Analytics 4 and Google Search Console to monitor keyword rankings, organic patient appointments, and conversion rates. You&apos;ll get monthly reports showing exactly how SEO drives patient acquisition, with custom dashboards that track the complete patient journey from search to appointment while maintaining strict HIPAA compliance.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">HIPAA-compliant GA4 event tracking setup</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Search Console medical keyword monitoring</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon className="size-5 flex-shrink-0 fill-accent" />
                <span className="text-slate text-sm">Patient acquisition attribution and ROI analysis</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ──────────────────────────── 7. Case Study + Results ──────────────────────────── */

function CaseStudySection() {
  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark>Healthcare Success Story</Subheading>
          <Heading as="h2" dark className="mt-2">
            How we helped a multi-location clinic dominate local search.
          </Heading>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-2">
                {caseStudy.client}
              </h3>
              <p className="font-mono text-xs text-white/40 uppercase tracking-wide mb-6">
                {caseStudy.industry}
              </p>
              <p className="text-sm leading-relaxed text-white/60">{caseStudy.narrative}</p>
            </div>

            <div>
              <h3 className="font-heading text-xl font-semibold text-white mb-6">
                Results Achieved
              </h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="font-mono text-2xl font-bold text-white">{result.value}</div>
                    <div className="text-sm text-white/80">{result.metric}</div>
                    <div className="text-xs text-white/40">{result.timeframe}</div>
                    <div className="mt-1 text-xs text-white/30 italic">{result.benchmark}</div>
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

/* ──────────────────────────── 8. Keywords ──────────────────────────── */

function KeywordsSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>Healthcare Keywords</Subheading>
          <Heading as="h2" className="mt-2">
            Examples of healthcare keywords we target.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {keywordCategories.map((group, index) => (
            <div key={index} className="text-center">
              <h3 className="font-heading text-lg font-semibold text-ink mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.keywords.map((keyword, keywordIndex) => (
                  <li
                    key={keywordIndex}
                    className="text-sm text-slate bg-cream px-3 py-1.5 rounded-none"
                  >
                    {keyword}
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

/* ──────────────────────────── 9. Testimonial ──────────────────────────── */

function TestimonialSection() {
  return (
    <div className="bg-cream py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <blockquote>
            <p className="font-display text-xl italic leading-relaxed text-ink">
              &ldquo;TheProjectSEO transformed our online presence. Within six months we went from
              invisible to ranking in the top three for our most important local keywords. New
              patient inquiries from organic search have more than tripled, and their team
              understands the compliance nuances that other agencies simply don&apos;t.&rdquo;
            </p>
          </blockquote>
          <div className="mt-8">
            <p className="font-heading text-sm font-semibold text-ink">Dr. Sarah Mitchell</p>
            <p className="text-sm text-slate">Chief Medical Officer, Pacific Coast Medical Group</p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ──────────────────────────── 10. Pricing Context ──────────────────────────── */

function PricingContextSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <Subheading>Investment</Subheading>
          <Heading as="h2" className="mt-2">
            Investment starts at $2,497/month
          </Heading>
          <ul className="mt-8 space-y-3">
            {[
              'Dedicated healthcare SEO strategist',
              'HIPAA-compliant content creation & physician review',
              'Monthly reporting with patient acquisition metrics',
            ].map((feature, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-3 text-sm text-stone"
              >
                <CheckIcon className="size-4 shrink-0 fill-accent" />
                {feature}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href="/pricing">View Full Pricing Details</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* ──────────────────────────── 11. FAQ ──────────────────────────── */

function TestimonialAndFAQSection() {
  return (
    <>
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="Healthcare SEO frequently asked questions" items={healthcareFAQs} />
    </>
  )
}

/* ──────────────────────────── 12. Related Industries ──────────────────────────── */

function RelatedIndustriesSection() {
  return (
    <div className="bg-cream py-16">
      <Container>
        <div className="text-center mb-8">
          <Subheading>Related Industries</Subheading>
          <Heading as="h2" className="mt-2">
            SEO services for other industries.
          </Heading>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          {relatedIndustries.map((industry, index) => (
            <Link
              key={index}
              href={industry.href}
              className="rounded-none border border-border-strong bg-paper px-5 py-2.5 text-sm font-heading font-medium text-stone transition-all duration-200 hover:bg-accent-soft hover:text-accent hover:-translate-y-0.5"
            >
              {industry.name}
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* ──────────────────────────── 13. CTA ──────────────────────────── */


/* ──────────────────────────── Page Export ──────────────────────────── */

export default function HealthcareSEO() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Healthcare SEO Services',
          description:
            'HIPAA-compliant SEO services for healthcare providers. Drive patient acquisition with medical keyword optimization, local healthcare SEO, and trusted content strategies.',
          url: 'https://theprojectseo.com/industries/healthcare',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: 'Worldwide',
          serviceType: 'Search Engine Optimization',
          keywords: 'Search engine optimization, Backlink, Search engine, Technology, Computing',
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
              name: 'Search engine',
              sameAs: 'https://www.wikidata.org/wiki/Q4182287',
            },
            {
              '@type': 'Thing',
              name: 'Technology',
              sameAs: 'https://www.wikidata.org/wiki/Q4884546',
            },
            {
              '@type': 'Thing',
              name: 'Computing',
              sameAs: 'https://www.wikidata.org/wiki/Q5330456',
            }
          ],
        }}
      />
      <HeroSection />
      <StatsBar />
      <ChallengesSection />
      <ServicesSection />
      <ProcessTabbedSection
        subheading="Our Process"
        heading="A proven healthcare SEO methodology"
        steps={processSteps}
      />
      <TechnicalSEOSection />
      <CaseStudySection />
      <KeywordsSection />
      <TestimonialSection />
      <PricingContextSection />
      <TestimonialAndFAQSection />
      <RelatedIndustriesSection />
      <CTAFormSection subheading="Ready to grow your healthcare practice?" heading="Ready to grow your healthcare practice?" lead="Partner with SEO specialists who understand healthcare. We'll help you reach more patients, build trust online, and grow your practice sustainably." submitText="Get Healthcare SEO Strategy" />
      <Footer />
    </main>
  )
}
