import type { Metadata } from 'next'
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
import { ServiceProcessVisual } from '@/components/service-process-visual'
import {
  ShoppingCart,
  CreditCard,
  Package,
  TrendingUp,
  Search,
  Zap,
  Shield,
  Globe,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'E-commerce Development Services | Shopify, WooCommerce & Custom | TheProjectSEO',
  description:
    'Expert e-commerce development services. Build high-converting Shopify, WooCommerce, or custom e-commerce platforms. Conversion optimization, payment integration, and SEO.',
  alternates: {
    canonical: '/services/ecommerce-development',
  },
  openGraph: {
    title: 'E-commerce Development Services | Shopify, WooCommerce & Custom',
    description:
      'Build high-converting e-commerce stores. Shopify, WooCommerce, custom platforms. Conversion optimization and SEO built-in.',
    url: 'https://theprojectseo.com/services/ecommerce-development',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'E-commerce Development Services | TheProjectSEO',
    description:
      'Build high-converting e-commerce stores with Shopify, WooCommerce, or custom platforms.',
  },
}

const heroData = {
  label: 'E-commerce Development',
  title: 'Build e-commerce stores that',
  accentWord: 'convert',
  titleAfterAccent: '',
  description:
    'Expert e-commerce development for Shopify, WooCommerce, and custom platforms. Conversion-optimized design, seamless checkout, payment integration, and SEO built-in. Launch in 6-8 weeks.',
  ctaPrimaryText: 'Start Your Store',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '3.5%', label: 'Avg Conversion Rate' },
  { value: '6-8 wks', label: 'Launch Time' },
  { value: '50+', label: 'Stores Built' },
  { value: '99.9%', label: 'Uptime' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'E-commerce pain points we solve',
  lead: 'Stop losing sales to slow sites, complicated checkout, and poor mobile experience. Build a store that converts.',
  cards: [
    {
      title: 'Low Conversion Rates',
      items: [
        'Industry average 1-2%',
        'Cart abandonment 70%+',
        'Complicated checkout',
        'Poor mobile experience',
      ],
    },
    {
      title: 'Slow Page Speed',
      items: [
        '4-5 second load times',
        'Heavy themes and apps',
        'Unoptimized images',
        'Lost sales from impatience',
      ],
    },
    {
      title: 'Technical Issues',
      items: [
        'Payment gateway failures',
        'Inventory sync problems',
        'Shipping calculation errors',
        'No technical support',
      ],
    },
    {
      title: 'Poor SEO',
      items: [
        'Products not ranking',
        'Duplicate content issues',
        'Missing schema markup',
        'No organic traffic',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete e-commerce solutions',
  lead: 'From design to launch, we build e-commerce stores that scale and convert.',
  services: [
    {
      icon: ShoppingCart,
      title: 'Shopify Development',
      description: 'Custom Shopify themes, app integration, checkout optimization, and conversion rate optimization. Shopify Plus for enterprise.',
      features: [
        'Custom theme development',
        'Shopify Plus setup',
        'App integration',
        'Checkout customization',
      ],
    },
    {
      icon: Package,
      title: 'WooCommerce Development',
      description: 'WordPress + WooCommerce stores with custom themes, payment gateways, shipping plugins, and performance optimization.',
      features: [
        'Custom WooCommerce theme',
        'Payment gateway setup',
        'Shipping integration',
        'Performance tuning',
      ],
    },
    {
      icon: CreditCard,
      title: 'Payment Integration',
      description: 'Stripe, PayPal, Apple Pay, Google Pay, and alternative payment methods. Multi-currency and subscription billing.',
      features: [
        'Stripe integration',
        'PayPal setup',
        'Apple/Google Pay',
        'Multi-currency support',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Conversion Optimization',
      description: 'A/B testing, checkout flow optimization, product page design, trust signals, and abandoned cart recovery.',
      features: [
        'A/B testing setup',
        'Checkout optimization',
        'Trust badge placement',
        'Cart abandonment flows',
      ],
    },
    {
      icon: Search,
      title: 'E-commerce SEO',
      description: 'Product schema markup, category optimization, site speed, mobile-first design, and technical SEO for rankings.',
      features: [
        'Product schema markup',
        'Category page SEO',
        'Technical optimization',
        'Content strategy',
      ],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Sub-2s load times, image optimization, lazy loading, CDN setup, and Core Web Vitals compliance.',
      features: [
        'Image optimization',
        'Lazy loading',
        'CDN configuration',
        'Cache optimization',
      ],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'SSL certificates, PCI DSS compliance, GDPR cookie consent, fraud prevention, and secure checkout.',
      features: [
        'SSL/TLS setup',
        'PCI compliance',
        'GDPR compliance',
        'Fraud detection',
      ],
    },
    {
      icon: Globe,
      title: 'Custom E-commerce Platforms',
      description: 'Fully custom e-commerce platforms built with Next.js, Node.js, and headless commerce architecture.',
      features: [
        'Headless commerce',
        'Custom backend',
        'Advanced features',
        'Unlimited flexibility',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build e-commerce stores',
  steps: [
    {
      number: '01',
      title: 'Discovery & Strategy',
      description:
        'Define business goals, analyze target audience, research competitors, and plan product catalog structure.',
    },
    {
      number: '02',
      title: 'Design & Prototyping',
      description:
        'Create conversion-optimized designs, mobile-first layouts, brand identity, and clickable prototypes.',
    },
    {
      number: '03',
      title: 'Development & Integration',
      description:
        'Build the store, integrate payment gateways, set up shipping, configure inventory, and optimize performance.',
    },
    {
      number: '04',
      title: 'Launch & Optimize',
      description:
        'Deploy to production, set up analytics, train your team, and continuously optimize based on data.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Fashion brand: 3.5% conversion rate achieved',
  challenge:
    'A fashion brand was getting 50K monthly visitors but converting only 0.9%. Their Shopify store had slow load times (5+ seconds), complicated checkout, poor mobile experience, and no abandoned cart recovery. They were losing $150K+ in monthly revenue.',
  solution:
    'We rebuilt their Shopify theme from scratch with conversion optimization, implemented sub-2s load times through image optimization and CDN, simplified checkout to 3 steps, added trust signals and social proof, set up abandoned cart email flows, and implemented product schema for SEO.',
  results: [
    {
      metric: 'Conversion Rate',
      improvement: '3.5%',
      timeframe: 'From 0.9%',
    },
    {
      metric: 'Revenue Increase',
      improvement: '+290%',
      timeframe: 'Within 4 months',
    },
    {
      metric: 'Page Load Time',
      improvement: '1.8s',
      timeframe: 'From 5+ seconds',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'E-commerce platforms & tools',
  lead: 'We work with the leading e-commerce platforms and technologies.',
  cards: [
    {
      title: 'E-commerce Platforms',
      items: ['Shopify', 'Shopify Plus', 'WooCommerce', 'BigCommerce', 'Magento'],
    },
    {
      title: 'Payment Gateways',
      items: ['Stripe', 'PayPal', 'Square', 'Authorize.net', 'Braintree'],
    },
    {
      title: 'Shipping & Fulfillment',
      items: ['ShipStation', 'ShipBob', 'EasyPost', 'Shippo', 'FedEx/UPS APIs'],
    },
    {
      title: 'Marketing & Analytics',
      items: ['Google Analytics 4', 'Klaviyo', 'Mailchimp', 'Facebook Pixel', 'Google Tag Manager'],
    },
    {
      title: 'Custom Development',
      items: ['Next.js', 'React', 'Node.js', 'PostgreSQL', 'Stripe API'],
    },
    {
      title: 'Performance & SEO',
      items: ['Cloudflare', 'Shopify CDN', 'Yoast SEO', 'Schema markup', 'Core Web Vitals'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'E-commerce development packages',
  tiers: [
    {
      name: 'Shopify Starter',
      price: '$15K',
      description: 'For new stores',
      features: [
        'Custom Shopify theme',
        'Up to 50 products',
        'Payment gateway setup',
        'Mobile-optimized design',
        'Basic SEO setup',
        '30-day support',
      ],
    },
    {
      name: 'WooCommerce Pro',
      price: '$25K',
      description: 'For WordPress users',
      features: [
        'Custom WooCommerce theme',
        'Unlimited products',
        'Advanced payment options',
        'Shipping integration',
        'Performance optimization',
        'SEO optimization',
        '60-day support',
        'Training included',
      ],
      featured: true,
    },
    {
      name: 'Custom Platform',
      price: 'Custom',
      description: 'For unique requirements',
      features: [
        'Headless commerce',
        'Custom backend',
        'Advanced features',
        'Multi-vendor support',
        'Subscription billing',
        'Dedicated team',
        '90-day support',
        'SLA guarantee',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What store owners say',
  testimonials: [
    {
      quote:
        'They rebuilt our Shopify store and conversion jumped from 0.9% to 3.5%. Revenue increased 290% in 4 months. Incredible ROI.',
      author: 'Emily Carter',
      role: 'Founder',
      company: 'Fashion Brand',
    },
    {
      quote:
        'The WooCommerce store they built handles 1,000+ orders daily without any issues. Performance is exceptional.',
      author: 'Michael Zhang',
      role: 'CEO',
      company: 'Electronics Retailer',
    },
    {
      quote:
        'Best e-commerce developers we have worked with. They understand conversion optimization and SEO deeply.',
      author: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'Beauty Brand',
    },
  ],
}

const faqData = [
  {
    question: 'Should I use Shopify, WooCommerce, or a custom platform?',
    answer:
      'Use Shopify for ease of use, fast setup, and built-in features (recommended for most stores). Use WooCommerce if you need WordPress integration, complete control, and lower transaction fees. Use a custom platform if you have unique requirements that Shopify/WooCommerce cannot handle (multi-vendor marketplace, complex subscription logic, custom inventory systems). 80% of stores are best served by Shopify or WooCommerce.',
  },
  {
    question: 'How long does e-commerce development take?',
    answer:
      'Shopify stores with custom themes take 4-6 weeks. WooCommerce stores take 6-8 weeks. Custom e-commerce platforms take 10-16 weeks. Timeline depends on product catalog size, custom features, integrations, and design complexity. We launch with core features first, then add advanced features post-launch based on user feedback.',
  },
  {
    question: 'What is conversion rate optimization (CRO)?',
    answer:
      'CRO is the process of improving your store to convert more visitors into customers. We optimize checkout flow (reduce steps, add trust signals), improve product pages (better images, reviews, descriptions), add urgency (limited stock, countdown timers), implement abandoned cart recovery, and A/B test changes. Industry average conversion is 1-2%; we target 3-5%. A 1% increase in conversion with 10K visitors and $50 AOV equals $5,000 more monthly revenue.',
  },
  {
    question: 'Do you provide e-commerce SEO services?',
    answer:
      'Yes. E-commerce SEO is included in all packages: product schema markup for rich results, category page optimization, technical SEO (site speed, mobile-first, crawlability), content strategy for blog and guides, image optimization with alt text, and internal linking structure. We ensure your products rank in Google search. E-commerce SEO typically delivers 30-50% of total traffic within 6-12 months.',
  },
  {
    question: 'What payment gateways do you integrate?',
    answer:
      'We integrate Stripe (most popular, lowest fees), PayPal (trusted by customers), Apple Pay and Google Pay (mobile users), Square (for in-person sales), Authorize.net (enterprise), Klarna (buy now, pay later), and crypto payment processors. Multi-currency support for international sales. Shopify Payments is recommended for Shopify stores (no transaction fees). We handle all technical integration and testing.',
  },
  {
    question: 'How do you optimize e-commerce site speed?',
    answer:
      'We optimize images (WebP format, lazy loading, proper sizing), use CDNs (Cloudflare, Shopify CDN), minimize JavaScript and CSS, implement caching, optimize database queries, use efficient themes (no bloat), remove unnecessary apps/plugins, and implement Core Web Vitals best practices. Target load time is under 2 seconds. Site speed directly impacts conversion (1-second delay reduces conversion by 7%).',
  },
  {
    question: 'Can you migrate my existing store to Shopify or WooCommerce?',
    answer:
      'Yes. We migrate from any platform (WooCommerce to Shopify, Magento to Shopify, custom platform to WooCommerce, etc.). Migration includes products, customers, orders, images, and SEO redirects. We preserve SEO rankings through proper 301 redirects and URL structure. Typical migration takes 2-4 weeks depending on catalog size. We test thoroughly in staging before switching over.',
  },
  {
    question: 'Do you offer ongoing support and maintenance?',
    answer:
      'Yes. All packages include 30-60 days of post-launch support. After that, we offer monthly retainer plans ($1,000-$5,000/month) covering updates, bug fixes, performance monitoring, security patches, app updates, and minor feature additions. We also offer pay-per-project pricing for specific updates. Most clients retain us for 6-12 months post-launch as their store grows.',
  },
  {
    question: 'What is the ROI of conversion optimization?',
    answer:
      'Conversion optimization delivers 200-400% ROI on average. Example: Store with 10,000 monthly visitors, $50 average order value, 1.5% conversion rate generates $7,500 monthly revenue. Improving conversion to 3% generates $15,000 monthly revenue. That is $7,500 more per month ($90K annually) from the same traffic. CRO investment of $25K pays for itself in 3-4 months.',
  },
  {
    question: 'Can you integrate with my inventory management system?',
    answer:
      'Yes. We integrate with inventory systems like ShipStation, ShipBob, TradeGecko, Cin7, NetSuite, QuickBooks, and custom systems via API. Real-time inventory sync ensures accurate stock levels across all channels. Order data flows automatically to your fulfillment system. We handle all technical integration, testing, and error handling. If your system has an API, we can connect it.',
  },
]

const relatedServicesData = [
  {
    title: 'E-commerce SEO',
    description: 'Product page optimization, category SEO, and technical SEO.',
    href: '/services/ecommerce-seo',
  },
  {
    title: 'Web Development',
    description: 'Custom web applications with Next.js, React, and Node.js.',
    href: '/services/web',
  },
  {
    title: 'MVP Development',
    description: 'Rapid product development for startups and new ventures.',
    href: '/services/mvp-development',
  },
  {
    title: 'N8n Automation',
    description: 'Workflow automation for e-commerce operations.',
    href: '/services/n8n-automation',
  },
]

const ctaData = {
  subheading: 'Ready to Launch?',
  heading: 'Build a store that converts',
  lead: 'Let&apos;s discuss your e-commerce goals and design a store that turns visitors into customers. From strategy to launch in 6-8 weeks.',
  submitText: 'Start Your Store',
}

export default function EcommerceDevelopmentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'E-commerce Development Services',
          description:
            'Expert e-commerce development services. Build high-converting Shopify, WooCommerce, or custom e-commerce platforms.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/ecommerce-development',
          areaServed: 'Worldwide',
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <FeatureCardsSection {...challengesData} />
      <ServicesGrid {...servicesData} />
      <ProcessTabbedSection {...processData} visual={<ServiceProcessVisual type="implementation" />} visualBg="ink" />
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
      <FAQDarkSection title="E-commerce development FAQ" items={faqData} />
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
