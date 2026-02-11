import { Button } from '@/components/button'
import { CheckIcon } from '@/components/check-icon'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import { Heading, Lead, Subheading } from '@/components/text'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import { ServiceProcessVisual } from '@/components/service-process-visual'
import { FAQAccordion } from '@/components/faq-accordion'
import { Container } from '@/components/container'
import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Code,
  Smartphone,
  Zap,
  ShieldCheck,
  BarChart3,
  Settings,
  Database,
  Cloud,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Web Application Development Services | Custom Web Apps | TheProjectSEO',
  description:
    'Professional web application development services. Build scalable, secure web apps with REST APIs, microservices architecture, WCAG accessibility, and modern tech stack. From SaaS platforms to enterprise applications.',
  alternates: {
    canonical: '/services/web-app-development',
  },
  openGraph: {
    title: 'Web Application Development Services | TheProjectSEO',
    description:
      'Build scalable web applications with microservices, REST APIs, accessibility compliance, and modern technology. Enterprise-grade quality with rapid delivery.',
    url: 'https://theprojectseo.com/services/web-app-development',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Application Development Services | TheProjectSEO',
    description:
      'Build scalable web applications with enterprise-grade quality. Modern tech stack, security-first approach, and rapid delivery.',
  },
}

/* -------------------------------------------------------------------------- */
/*  Page Data                                                                 */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Web Application Development',
  title: 'Build web applications that',
  accentWord: 'scale',
  titleAfterAccent: 'from day one',
  description:
    'Custom web applications with microservices architecture, REST APIs, mobile-first design, and WCAG accessibility. From SaaS platforms to enterprise systems, delivered on time.',
  ctaPrimaryText: 'Start Your Project',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '/pricing',
}

const statsData = [
  { value: '150+', label: 'Applications Built' },
  { value: '<1.5s', label: 'Average Load Time' },
  { value: '99.9%', label: 'Uptime Guarantee' },
  { value: '98%', label: 'Client Satisfaction' },
]

const servicesData = {
  subheading: 'Our Services',
  heading: 'Comprehensive web development solutions.',
  lead: 'End-to-end web application development covering every aspect of modern web applications, from API design to cloud deployment.',
  services: [
    {
      icon: Code,
      title: 'Custom Web Applications',
      description: 'Tailored solutions built from scratch to match your exact business requirements and workflows.',
      features: ['Full-stack development', 'RESTful & GraphQL APIs', 'Real-time features', 'Cloud deployment'],
    },
    {
      icon: Smartphone,
      title: 'Progressive Web Apps',
      description: 'Offline-capable, app-like experiences that work seamlessly across all devices.',
      features: ['Mobile-first design', 'Offline functionality', 'Push notifications', 'App store quality UX'],
    },
    {
      icon: Database,
      title: 'Microservices Architecture',
      description: 'Scalable, independently deployable services for enterprise applications.',
      features: ['Service decomposition', 'API gateway design', 'Container orchestration', 'Event-driven systems'],
    },
    {
      icon: ShieldCheck,
      title: 'Security & Compliance',
      description: 'OWASP protection, SSL/TLS encryption, OAuth/JWT authentication, and regulatory compliance.',
      features: ['Security audits', 'GDPR/HIPAA compliance', 'Penetration testing', 'Access control'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Sub-1.5s load times with CDN caching, database optimization, and modern frameworks.',
      features: ['Core Web Vitals tuning', 'CDN integration', 'Code splitting', 'Lazy loading'],
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment pipelines, monitoring, and infrastructure as code.',
      features: ['GitHub Actions', 'Docker & Kubernetes', 'Terraform', 'Real-time monitoring'],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build web applications.',
  steps: [
    {
      number: '01',
      title: 'Discovery & Planning',
      description:
        'Deep discovery of business requirements, user workflows, and technical constraints. Includes wireframes, architecture design, and a detailed project roadmap with 2-week sprint milestones.',
    },
    {
      number: '02',
      title: 'Agile Development',
      description:
        'Build your application in 2-week sprints with daily standups, continuous integration, and weekly stakeholder demos. Code reviews and pair programming ensure quality.',
    },
    {
      number: '03',
      title: 'Testing & QA',
      description:
        'Comprehensive testing including unit tests, integration tests, end-to-end tests, accessibility audits, and performance benchmarking before production deployment.',
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description:
        'Zero-downtime deployment with CI/CD pipelines, comprehensive documentation, team training, and ongoing support with performance monitoring.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'FinTech platform handles 10x user growth with rebuilt architecture.',
  challenge:
    'A growing fintech company was struggling with a legacy PHP monolith that could not scale. Page load times exceeded 8 seconds, the system crashed during peak hours, and adding new features took months. They needed a complete rebuild to support projected 10x user growth over 18 months while maintaining regulatory compliance.',
  solution:
    'We architected and built a new platform using Next.js with server-side rendering, Node.js microservices, PostgreSQL with Redis caching, and real-time WebSocket connections. Deployed on AWS with auto-scaling, CI/CD pipelines via GitHub Actions, and comprehensive monitoring through DataDog.',
  results: [
    {
      metric: 'Page Load Time',
      improvement: '-85%',
      timeframe: 'From 8.2s to 1.2s average',
    },
    {
      metric: 'User Capacity',
      improvement: '10x',
      timeframe: 'Handles 50K concurrent users',
    },
    {
      metric: 'Feature Deployment Speed',
      improvement: '+200%',
      timeframe: 'New features in days, not months',
    },
    {
      metric: 'Annual Revenue Impact',
      improvement: '+$1.8M',
      timeframe: 'From improved UX and reliability',
    },
  ],
}

const accessibilityData = {
  subheading: 'Accessibility & Compliance',
  heading: 'WCAG-compliant web applications for everyone.',
  lead: 'Web accessibility is both a legal requirement and a business opportunity. We build WCAG 2.2 AA compliant applications by default, ensuring your application reaches the broadest possible audience.',
  cards: [
    {
      title: 'WCAG 2.2 Compliance',
      items: [
        'Semantic HTML structure',
        'ARIA labels and roles',
        'Keyboard navigation',
        'Color contrast ratios',
        'Focus management',
      ],
    },
    {
      title: 'Screen Reader Support',
      items: [
        'VoiceOver optimization',
        'NVDA compatibility',
        'Descriptive alt text',
        'Logical reading order',
        'Live region announcements',
      ],
    },
    {
      title: 'Legal Compliance',
      items: [
        'Section 508 compliance',
        'ADA requirements',
        'EU Accessibility Act',
        'Accessibility audits',
        'Remediation support',
      ],
    },
  ],
}

const technologyData = {
  subheading: 'Technology Stack',
  heading: 'Modern technologies for robust applications.',
  cards: [
    {
      title: 'Frontend',
      items: ['React / Next.js', 'Vue.js / Nuxt', 'TypeScript', 'Tailwind CSS', 'Playwright / Cypress'],
    },
    {
      title: 'Backend',
      items: ['Node.js / Express', 'Python / FastAPI', 'Go', 'Ruby on Rails', 'PHP / Laravel'],
    },
    {
      title: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Elasticsearch'],
    },
    {
      title: 'Cloud & DevOps',
      items: ['AWS / Google Cloud / Azure', 'Docker / Kubernetes', 'Vercel / Netlify', 'CI/CD (GitHub Actions)', 'Terraform'],
    },
    {
      title: 'Testing & QA',
      items: ['Jest / Vitest', 'Playwright / Cypress', 'pytest / PHPUnit', 'axe-core (accessibility)', 'Lighthouse'],
    },
    {
      title: 'Monitoring & Tools',
      items: ['Git / Version Control', 'Sentry (error tracking)', 'DataDog / New Relic', 'PostHog (analytics)', 'Linear / Jira'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'Transparent pricing for every stage.',
  tiers: [
    {
      name: 'MVP Launch',
      price: '$15,000',
      description: 'For startups validating ideas',
      features: [
        'Core features development',
        'Responsive mobile-first design',
        'Database setup (PostgreSQL/MongoDB)',
        'User authentication (OAuth/JWT)',
        'Cloud deployment (Vercel/AWS)',
        'Basic documentation',
        'Unit testing setup',
        '3 months support',
      ],
    },
    {
      name: 'Professional',
      price: '$35,000',
      description: 'For growing businesses',
      features: [
        'Everything in MVP Launch',
        'REST API development',
        'Admin dashboard',
        'Third-party integrations',
        'CI/CD pipeline (GitHub Actions)',
        'SEO optimization',
        'WCAG accessibility compliance',
        'Performance optimization',
        '6 months support',
        'Training sessions',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large-scale applications',
      features: [
        'Everything in Professional',
        'Microservices architecture',
        'Multi-region deployment',
        'Advanced security & compliance',
        'Load balancing & auto-scaling',
        'Dedicated DevOps support',
        'Custom integrations',
        'Full test coverage (unit, integration, E2E)',
        '12 months support',
        'SLA guarantee',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Testimonials',
  heading: 'Trusted by companies worldwide.',
  testimonials: [
    {
      quote:
        'TheProjectSEO delivered a complex web application 2 weeks ahead of schedule. The code quality and attention to performance is exceptional.',
      author: 'Sarah Chen',
      role: 'CTO',
      company: 'HealthTech Solutions',
    },
    {
      quote:
        'We tried 3 other agencies before finding TheProjectSEO. They understood our requirements immediately and built exactly what we needed.',
      author: 'Michael Rodriguez',
      role: 'Founder',
      company: 'RetailHub',
    },
    {
      quote:
        'The application handles 50,000 concurrent users without breaking a sweat. Their architecture decisions were spot-on.',
      author: 'Jennifer Park',
      role: 'VP of Engineering',
      company: 'Financial Insights Inc',
    },
  ],
}

const faqData = [
  {
    question: 'How long does it take to build a web application?',
    answer:
      'Timeline depends on complexity. Simple applications take 4-8 weeks, medium complexity apps take 8-14 weeks, complex enterprise applications take 14-24 weeks, and large-scale platforms take 24+ weeks. We provide detailed timeline estimates after the discovery phase.',
  },
  {
    question: 'What technologies do you recommend for my project?',
    answer:
      'We recommend technology based on your requirements, team expertise, and scalability needs. For modern web apps, we typically use Next.js/React for frontend, Node.js or Python for backend, and PostgreSQL for database. For real-time features, we add WebSocket and Redis. Technology choices are always project-specific.',
  },
  {
    question: 'How do you handle web application security?',
    answer:
      'We follow OWASP security guidelines, implement SSL/TLS encryption, OAuth 2.0 and JWT authentication, role-based authorization, input validation, CSRF protection, and rate limiting. For regulated industries, we add HIPAA, SOC 2, or GDPR compliance measures. Security audits are conducted before every production deployment.',
  },
  {
    question: 'What is the difference between a web app and a website?',
    answer:
      'A website is primarily informational and static. A web application is interactive software that runs in the browser, allowing users to create accounts, manage data, process transactions, collaborate with others, and perform complex tasks. Web apps require backend servers, databases, APIs, and authentication systems.',
  },
  {
    question: 'Do you build REST APIs and GraphQL APIs?',
    answer:
      'Yes, we build both RESTful and GraphQL APIs with comprehensive documentation, versioning, authentication, rate limiting, and error handling. We choose REST for standard CRUD operations and GraphQL for complex data relationships where clients need flexible query capabilities. All APIs include automated testing.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer:
      'Absolutely. We have extensive experience integrating with CRMs (Salesforce, HubSpot), ERPs (SAP, Oracle), payment gateways (Stripe, PayPal), marketing tools, and custom internal systems. We work with REST APIs, GraphQL, webhooks, or direct database connections depending on the integration requirements.',
  },
  {
    question: 'Do you build accessible web applications?',
    answer:
      'Yes, we build WCAG 2.2 AA compliant applications by default. This includes semantic HTML, ARIA labels, keyboard navigation, color contrast compliance, screen reader optimization, and focus management. We test with both automated tools (axe-core, Lighthouse) and manual screen reader testing.',
  },
  {
    question: 'What is microservices architecture?',
    answer:
      'Microservices architecture decomposes a web application into small, independently deployable services. Each service handles a specific domain (user management, payments, analytics) and communicates via REST APIs or message queues. This enables independent scaling, faster development, and easier maintenance compared to monolithic architectures.',
  },
  {
    question: 'Do you provide ongoing maintenance and support?',
    answer:
      'Yes, all packages include post-launch support (3-12 months depending on tier). We offer maintenance plans covering bug fixes, security updates, feature enhancements, performance optimization, and technical support with guaranteed response times. Maintenance plans start at $1,500/month.',
  },
  {
    question: 'How do you ensure application quality?',
    answer:
      'We follow a comprehensive testing strategy: unit tests (Jest/pytest), integration tests (API testing), end-to-end tests (Playwright/Cypress), accessibility audits, performance testing, and security audits. Code reviews via Git, pair programming for complex features, and CI/CD pipelines ensure every deployment is production-ready.',
  },
  {
    question: 'Can you handle the entire project from design to deployment?',
    answer:
      'Yes, we offer end-to-end services including UX/UI design (wireframes, prototypes), development, testing, deployment, documentation, and training. We can also work with your existing design team or integrate with your in-house developers through pair programming and code reviews.',
  },
  {
    question: 'What makes your web applications different from competitors?',
    answer:
      'Three things: performance (sub-1.5s load times, optimized Core Web Vitals), scalability (microservices architecture built for growth), and maintainability (clean code with comprehensive testing and documentation). We also emphasize security, accessibility, and SEO from day one rather than treating them as afterthoughts.',
  },
]

const ctaData = {
  subheading: 'Ready to Build Your Web Application?',
  heading: 'Let&apos;s build intelligent systems that scale.',
  lead: 'Start with a free consultation to discuss your project requirements, technical architecture, and timeline. No obligation, just expert guidance.',
  submitText: 'Start Your Project',
  note: 'Free consultation includes technical assessment, architecture recommendations, and project estimate.',
}

/* -------------------------------------------------------------------------- */
/*  Related Services Section                                                 */
/* -------------------------------------------------------------------------- */

function RelatedServicesSection() {
  const services = [
    { title: 'AI Development', description: 'Add AI capabilities to your web application.', href: '/services/ai-development' },
    { title: 'MVP Development', description: 'Validate your idea fast with lean methodology.', href: '/services/mvp-development' },
    { title: 'E-commerce Development', description: 'Custom online stores with advanced features.', href: '/services/ecommerce-development' },
    { title: 'SEO Services', description: 'Ensure your web application ranks in search.', href: '/services/seo' },
  ]

  return (
    <div className="bg-cream py-16 border-t border-border">
      <Container>
        <div className="text-center mb-10">
          <Subheading>Related Services</Subheading>
          <Heading as="h2" className="mt-2">
            Explore more development services.
          </Heading>
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong md:grid-cols-4">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="bg-paper p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="font-heading text-base font-semibold text-ink hover:text-accent">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate">{service.description}</p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Page Export                                                               */
/* -------------------------------------------------------------------------- */

export default function WebAppDevelopment() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/web-app-development',
          name: 'Web Application Development Services',
          description:
            'Professional web application development with REST APIs, microservices architecture, WCAG accessibility, and modern technology stack.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: { '@type': 'Country', name: 'Worldwide' },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How much does web app development cost?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Simple web apps cost $10K-$25K, medium complexity $25K-$75K, complex applications $75K-$150K, and enterprise platforms $200K+.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does web application development take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Simple apps take 4-8 weeks, medium 8-14 weeks, complex 14-24 weeks, enterprise 24+ weeks.',
              },
            },
          ],
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="implementation" />} visualBg="ink" />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...accessibilityData} />
      <FeatureCardsSection {...technologyData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <Container className="py-24">
        <FAQAccordion title="Web application development FAQ" items={faqData} />
      </Container>
      <RelatedServicesSection />
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
