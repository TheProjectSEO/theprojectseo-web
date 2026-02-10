import type { Metadata} from 'next'
import { Container } from '@/components/container'
import { FAQDarkSection } from '@/components/faq-dark-section'
import { Footer } from '@/components/footer'
import { JsonLd } from '@/components/json-ld'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  FeatureCardsSection,
  PricingSection,
  TestimonialSection,
  TestimonialQuoteSection,
  RelatedServicesSection,
  CTAFormSection,
} from '@/components/service-page-sections'
import { ProcessTabbedSection } from '@/components/process-tabbed-section'
import {
  Rocket,
  Code,
  Users,
  TrendingUp,
  Zap,
  Shield,
  Database,
  Globe,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'MVP Development Services | Build & Launch in 8 Weeks | TheProjectSEO',
  description:
    'Rapid MVP development for startups. Build and launch your minimum viable product in 8 weeks with Next.js, React, Node.js. Product strategy, design, development, and launch.',
  alternates: {
    canonical: '/services/mvp-development',
  },
  openGraph: {
    title: 'MVP Development Services | Build & Launch in 8 Weeks',
    description:
      'Rapid MVP development for startups. Build and launch your product in 8 weeks with proven tech stack and lean methodology.',
    url: 'https://theprojectseo.com/services/mvp-development',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVP Development Services | TheProjectSEO',
    description:
      'Build and launch your MVP in 8 weeks. Product strategy, design, development, and launch.',
  },
}

const heroData = {
  label: 'MVP Development',
  title: 'Ship your MVP in',
  accentWord: '8 weeks',
  titleAfterAccent: '',
  description:
    'Rapid MVP development for startups and new ventures. We design, build, and launch production-ready products using Next.js, React, and Node.js. From idea to paying customers fast.',
  ctaPrimaryText: 'Start Your MVP',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '8 weeks', label: 'Avg Launch Time' },
  { value: '30+', label: 'MVPs Launched' },
  { value: '90%', label: 'Raise Funding' },
  { value: '$75K', label: 'Starting Price' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'MVP development pain points we solve',
  lead: 'Stop wasting months building features nobody wants. Launch fast, learn from users, and iterate based on real feedback.',
  cards: [
    {
      title: 'Analysis Paralysis',
      items: [
        'Too many features planned',
        'Perfect product syndrome',
        'Months spent on requirements',
        'No customer validation',
      ],
    },
    {
      title: 'Technical Complexity',
      items: [
        'Wrong tech stack chosen',
        'Over-engineered architecture',
        'Scalability issues ignored',
        'Technical debt from day one',
      ],
    },
    {
      title: 'Budget & Timeline Overruns',
      items: [
        'Development takes 6-12 months',
        'Budget doubles from estimate',
        'Market opportunity missed',
        'Runway burns too fast',
      ],
    },
    {
      title: 'Post-Launch Failure',
      items: [
        'No users at launch',
        'Product-market fit unclear',
        'No feedback loop',
        'Unable to iterate quickly',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete MVP development solutions',
  lead: 'From strategy to launch, we handle everything needed to get your product into users hands.',
  services: [
    {
      icon: Rocket,
      title: 'Product Strategy & Validation',
      description: 'Define core value proposition, identify target users, prioritize features using lean methodology, and create product roadmap.',
      features: [
        'User research & interviews',
        'Competitor analysis',
        'Feature prioritization',
        'MVP scope definition',
      ],
    },
    {
      icon: Users,
      title: 'UX/UI Design',
      description: 'User-centered design, wireframes, high-fidelity mockups, and design system creation for consistent brand.',
      features: [
        'User flow mapping',
        'Wireframe prototypes',
        'High-fidelity designs',
        'Design system',
      ],
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Production-ready code using Next.js, React, Node.js, TypeScript. Clean architecture, proper testing, and documentation.',
      features: [
        'Next.js 15 + React 19',
        'TypeScript codebase',
        'API development',
        'Database design',
      ],
    },
    {
      icon: Shield,
      title: 'Authentication & Security',
      description: 'Secure user authentication, role-based access control, payment processing, and data encryption.',
      features: [
        'Auth0 / Clerk integration',
        'Role-based permissions',
        'Stripe payment processing',
        'GDPR compliance',
      ],
    },
    {
      icon: Database,
      title: 'Backend Infrastructure',
      description: 'Scalable backend with PostgreSQL/MongoDB, RESTful APIs, serverless functions, and proper data modeling.',
      features: [
        'PostgreSQL / MongoDB',
        'RESTful API design',
        'Serverless architecture',
        'Data migrations',
      ],
    },
    {
      icon: Globe,
      title: 'Deployment & DevOps',
      description: 'Production deployment on Vercel/AWS, CI/CD pipelines, monitoring, and staging environments.',
      features: [
        'Vercel / AWS deployment',
        'CI/CD with GitHub Actions',
        'Error monitoring (Sentry)',
        'Analytics integration',
      ],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Fast page loads, SEO optimization, Core Web Vitals compliance, and mobile responsiveness.',
      features: [
        'Sub-1s page loads',
        'SEO optimization',
        'Core Web Vitals',
        'Mobile-first design',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Growth Features',
      description: 'Analytics tracking, A/B testing setup, email marketing integration, and user onboarding flows.',
      features: [
        'Google Analytics 4',
        'Mixpanel / Amplitude',
        'Email automation',
        'Onboarding flows',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build MVPs',
  steps: [
    {
      number: '01',
      title: 'Discovery & Planning (Week 1)',
      description:
        'Define product vision, validate assumptions, identify target users, prioritize features, and create technical architecture.',
    },
    {
      number: '02',
      title: 'Design Sprint (Week 2-3)',
      description:
        'User flows, wireframes, high-fidelity mockups, design system, and clickable prototype for validation.',
    },
    {
      number: '03',
      title: 'Development Sprint (Week 4-7)',
      description:
        'Build core features, implement authentication, develop APIs, integrate third-party services, and continuous testing.',
    },
    {
      number: '04',
      title: 'Launch & Iterate (Week 8+)',
      description:
        'Deploy to production, monitor performance, gather user feedback, and iterate based on real usage data.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'SaaS startup: MVP to $50K MRR in 6 months',
  challenge:
    'A founder had a SaaS idea but no technical team. They needed to validate product-market fit quickly, launch within budget constraints, and attract beta users for feedback. Traditional agencies quoted 6-12 months and $200K+.',
  solution:
    'We ran a 2-week discovery sprint to validate the concept and define MVP scope. Built a Next.js application with authentication, Stripe billing, core features, and admin dashboard in 8 weeks. Launched with 10 beta users. Iterated based on feedback for 3 months.',
  results: [
    {
      metric: 'Time to Launch',
      improvement: '8 weeks',
      timeframe: 'Idea to production',
    },
    {
      metric: 'Monthly Recurring Revenue',
      improvement: '$50K MRR',
      timeframe: '6 months post-launch',
    },
    {
      metric: 'Funding Raised',
      improvement: '$1.5M',
      timeframe: 'Seed round after traction',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'Proven MVP tech stack',
  lead: 'We use battle-tested technologies that enable rapid development and easy scaling.',
  cards: [
    {
      title: 'Frontend',
      items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
      title: 'Backend',
      items: ['Node.js', 'Express', 'tRPC', 'Prisma ORM', 'GraphQL'],
    },
    {
      title: 'Database',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'Supabase', 'PlanetScale'],
    },
    {
      title: 'Authentication',
      items: ['Auth0', 'Clerk', 'NextAuth', 'Supabase Auth', 'Passport.js'],
    },
    {
      title: 'Payments & Services',
      items: ['Stripe', 'SendGrid', 'Twilio', 'AWS S3', 'Cloudinary'],
    },
    {
      title: 'Infrastructure',
      items: ['Vercel', 'AWS', 'Google Cloud', 'GitHub Actions', 'Sentry'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'MVP development packages',
  tiers: [
    {
      name: 'Landing Page + Waitlist',
      price: '$5K',
      description: 'Validate demand before building',
      features: [
        '1-2 week delivery',
        'Landing page design',
        'Email waitlist signup',
        'Analytics tracking',
        'Basic SEO',
      ],
    },
    {
      name: 'Full MVP',
      price: '$75K',
      description: 'Complete product launch',
      features: [
        '8-10 week delivery',
        'Product strategy & design',
        'Full-stack development',
        'Authentication & payments',
        'Admin dashboard',
        'API integration',
        '30-day post-launch support',
        'Source code & documentation',
      ],
      featured: true,
    },
    {
      name: 'MVP + Growth',
      price: '$125K',
      description: 'Launch with growth features',
      features: [
        '12-14 week delivery',
        'Everything in Full MVP',
        'A/B testing framework',
        'Email automation',
        'Analytics & dashboards',
        'SEO optimization',
        'Mobile app (React Native)',
        '90-day support & iteration',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What founders say',
  testimonials: [
    {
      quote:
        'They launched our MVP in 8 weeks. 6 months later we hit $50K MRR and raised $1.5M. Best decision we made.',
      author: 'Jessica Chen',
      role: 'Founder & CEO',
      company: 'SaaS Startup',
    },
    {
      quote:
        'The team moved fast but never sacrificed quality. Clean code, great design, and they understood our vision perfectly.',
      author: 'Ryan Cooper',
      role: 'Co-Founder',
      company: 'FinTech Platform',
    },
    {
      quote:
        'We tried building in-house for 9 months and made zero progress. They delivered in 10 weeks and we launched to customers.',
      author: 'Sarah Martinez',
      role: 'Founder',
      company: 'EdTech Startup',
    },
  ],
}

const faqData = [
  {
    question: 'What is an MVP and why do I need one?',
    answer:
      'An MVP (Minimum Viable Product) is the simplest version of your product that solves the core problem for early users. Instead of spending 12-18 months building every feature you imagine, an MVP launches in 6-10 weeks with only essential features. This lets you validate product-market fit, gather real user feedback, demonstrate traction to investors, and iterate based on data instead of assumptions. MVPs reduce risk, save money, and accelerate learning.',
  },
  {
    question: 'How do you define what features to include in the MVP?',
    answer:
      'We use lean startup methodology. We identify the core value proposition (what is the one thing users desperately need), map user journeys to find the minimum steps required, prioritize using the MoSCoW method (Must-have, Should-have, Could-have, Won&apos;t-have), and validate assumptions through user interviews. The MVP should solve one problem exceptionally well, not many problems poorly. Typical MVPs have 5-8 core features, not 50.',
  },
  {
    question: 'How long does MVP development take?',
    answer:
      'Full MVP development takes 8-12 weeks on average. Week 1-2: Discovery, strategy, and design sprint. Week 3-4: Design refinement and development planning. Week 5-10: Development sprints with weekly demos. Week 11-12: Testing, deployment, and launch. Timeline varies based on complexity, integrations, and scope. Landing page + waitlist MVPs take 1-2 weeks. Complex MVPs with multiple integrations take 12-14 weeks.',
  },
  {
    question: 'What tech stack do you use for MVPs?',
    answer:
      'We use Next.js 15, React 19, TypeScript, and Tailwind CSS for frontend (fast, SEO-friendly, modern). Node.js or serverless functions for backend. PostgreSQL or MongoDB for database. Auth0/Clerk for authentication. Stripe for payments. Vercel or AWS for hosting. This stack enables rapid development, scales easily, and is familiar to most developers if you hire a team later. We avoid niche frameworks that lock you in.',
  },
  {
    question: 'Do I need a technical co-founder or can you be my CTO?',
    answer:
      'We can serve as your technical partner during MVP development, handling all technology decisions, architecture, and development. Many founders launch successful MVPs without a technical co-founder. After launch, you have options: hire a CTO or tech lead, retain us for ongoing development, or transition to an in-house team. We provide clean code, documentation, and knowledge transfer to make transitions smooth.',
  },
  {
    question: 'What happens after the MVP launches?',
    answer:
      'Post-launch, we monitor performance, gather user feedback, track analytics, and identify improvements. We provide 30-day support included in all packages. After that, you can: hire us for ongoing development (monthly retainer), transition to an in-house team (we help with hiring), or handle updates yourself (we provide documentation). Most clients retain us for 3-6 months post-launch to iterate based on user feedback.',
  },
  {
    question: 'How much does MVP development cost?',
    answer:
      'Full MVPs start at $75K for 8-10 weeks of work. Landing page + waitlist starts at $5K. Complex MVPs with multiple integrations, mobile apps, or advanced features cost $100K-$150K. Enterprise MVPs with compliance requirements (HIPAA, SOC 2) cost $150K-$300K. Cost depends on feature complexity, integrations, design requirements, and timeline. We provide fixed-price quotes after discovery.',
  },
  {
    question: 'Can you help with product strategy and validation?',
    answer:
      'Yes. Our MVP process starts with strategy: user research, competitive analysis, value proposition definition, and feature prioritization. We validate assumptions through user interviews and clickable prototypes before writing code. Many clients come with a rough idea and we help shape it into a clear product vision. This ensures we build something users actually want, not just what you think they want.',
  },
  {
    question: 'Do you provide design as part of MVP development?',
    answer:
      'Yes. All MVP packages include UX/UI design: user flows, wireframes, high-fidelity mockups, and design system. We focus on user-centered design that solves problems elegantly. Design is not an afterthought - it is integrated throughout the process. We conduct design sprints to validate concepts early and iterate quickly. You receive Figma files and a complete design system.',
  },
  {
    question: 'What if I need changes after the MVP is launched?',
    answer:
      'All packages include 30 days of post-launch support for bug fixes and minor adjustments. For feature additions and major changes, we offer monthly retainer options ($10K-$25K/month) or project-based pricing. Most founders iterate heavily post-launch based on user feedback - this is expected and encouraged. We provide clear documentation so you can make changes yourself or hire another team if preferred.',
  },
]

const relatedServicesData = [
  {
    title: 'AI Development',
    description: 'Custom AI applications, generative AI, and ML models.',
    href: '/services/ai-development',
  },
  {
    title: 'Web Development',
    description: 'Custom web applications with Next.js, React, and Node.js.',
    href: '/services/web',
  },
  {
    title: 'E-commerce Development',
    description: 'Shopify, WooCommerce, and custom e-commerce platforms.',
    href: '/services/ecommerce-development',
  },
  {
    title: 'N8n Automation',
    description: 'Workflow automation connecting 400+ apps and services.',
    href: '/services/n8n-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Launch?',
  heading: 'Ship your MVP in 8 weeks',
  lead: 'Let&apos;s discuss your product idea and create a roadmap to launch. From strategy to paying customers, we handle everything.',
  submitText: 'Start Your MVP',
}

export default function MVPDevelopmentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'MVP Development Services',
          description:
            'Rapid MVP development for startups. Build and launch your minimum viable product in 8 weeks with Next.js, React, and Node.js.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/mvp-development',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...toolsData} />
      <PricingSection {...pricingData} />
      <TestimonialSection {...testimonialsData} />
      <TestimonialQuoteSection
        quote="TheProjectSEO increased our organic traffic by 340% in just 8 months. The ROI has been incredible."
        author="David Thompson"
        role="CEO"
        company="GrowthTech Solutions"
      />
      <FAQDarkSection title="MVP development FAQ" items={faqData} />
      <RelatedServicesSection
        subheading="Related Services"
        heading="Explore more development services"
        services={relatedServicesData}
      />
      <CTAFormSection {...ctaData} />
      <Footer />
    </main>
  )
}
