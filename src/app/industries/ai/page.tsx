import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import UnicornBackground from '@/components/unicorn-background'
import { Navbar } from '@/components/navbar'
import { Heading, Lead, Subheading } from '@/components/text'
import { 
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI & Machine Learning SEO Services | TheProjectSEO',
  description:
    'Specialized SEO services for AI and machine learning companies. Drive organic growth for AI startups, ML platforms, and tech innovators.',
}

const challenges = [
  {
    challenge: 'Technical Complexity',
    description: 'AI concepts are complex and require specialized content that both technical and non-technical audiences can understand.',
    solution: 'We create multi-layered content strategies that address different technical knowledge levels.',
    icon: CpuChipIcon
  },
  {
    challenge: 'Rapidly Evolving Field',
    description: 'AI technology changes quickly, making it difficult to maintain current and relevant content.',
    solution: 'Our content refresh strategies keep your site updated with the latest AI developments.',
    icon: RocketLaunchIcon
  },
  {
    challenge: 'Competitive Keywords',
    description: 'High competition for AI-related keywords makes it difficult to rank for valuable terms.',
    solution: 'We identify long-tail opportunities and niche AI topics with lower competition.',
    icon: ChartBarIcon
  },
  {
    challenge: 'Trust & Credibility',
    description: 'Building trust in AI solutions requires demonstrating expertise and addressing concerns.',
    solution: 'We develop thought leadership content and case studies that build credibility.',
    icon: ShieldCheckIcon
  }
]

const services = [
  {
    name: 'AI Keyword Research',
    description: 'Specialized keyword research for AI terminology, use cases, and emerging technologies.',
    features: [
      'AI & ML-specific keyword mapping',
      'Technical vs. commercial keyword analysis',
      'Emerging technology opportunity identification',
      'Competitor AI keyword gap analysis'
    ]
  },
  {
    name: 'Technical Content Creation',
    description: 'Expert content creation that explains complex AI concepts in accessible ways.',
    features: [
      'AI technology explainer articles',
      'Use case and application guides',
      'Technical documentation optimization',
      'Research paper summaries'
    ]
  },
  {
    name: 'Thought Leadership SEO',
    description: 'Establish your AI company as an industry leader through strategic content.',
    features: [
      'Industry trend analysis content',
      'AI ethics and responsibility articles',
      'Future prediction and insight pieces',
      'Expert interview content'
    ]
  },
  {
    name: 'Product SEO for AI Tools',
    description: 'Optimize your AI products and platforms for maximum search visibility.',
    features: [
      'AI tool landing page optimization',
      'API documentation SEO',
      'Product comparison content',
      'Integration guide optimization'
    ]
  }
]

const caseStudy = {
  client: 'AI Analytics Platform',
  industry: 'Machine Learning SaaS',
  challenge: 'New AI platform struggling to rank for competitive ML keywords',
  solution: 'Comprehensive content strategy focusing on long-tail AI use cases and technical tutorials',
  results: [
    { metric: 'Organic Traffic', improvement: '+520%', timeframe: '8 months' },
    { metric: 'AI-related Keywords', improvement: '150+ rankings', timeframe: 'Top 10' },
    { metric: 'Technical Content Engagement', improvement: '+340%', timeframe: 'Average time on page' },
    { metric: 'Developer Sign-ups', improvement: '+280%', timeframe: 'From organic search' }
  ]
}

function Header() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-2 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
            AI & Machine Learning SEO
          </h1>
          <p className="mt-8 max-w-lg text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
            Specialized SEO strategies for AI companies that explain complex technologies and convert technical audiences.
          </p>
          <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
            <Button href="/contact">Get AI SEO Strategy</Button>
            <Button variant="secondary" href="/pricing">
              View Pricing
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

function ChallengesSection() {
  return (
    <div className="relative py-24">
      <Gradient className="absolute inset-x-2 top-0 bottom-0 rounded-4xl ring-1 ring-black/5 ring-inset" />
      <Container className="relative">
        <Subheading className="text-center">AI Industry Challenges</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Unique SEO challenges in the AI space.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {challenges.map((item, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <item.icon className="size-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold">{item.challenge}</h3>
              </div>
              
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="border-l-4 border-gray-200 pl-4">
                <p className="text-sm font-medium text-gray-900 mb-1">Our Solution:</p>
                <p className="text-sm text-gray-700">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function ServicesSection() {
  return (
    <Container className="py-24">
      <Subheading className="text-center">Specialized AI SEO Services</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Tailored strategies for AI companies.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
            <h3 className="text-xl font-semibold mb-4">{service.name}</h3>
            <p className="text-gray-600 mb-6">{service.description}</p>
            
            <ul className="space-y-3">
              {service.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3 text-sm">
                  <CheckIcon className="size-4 shrink-0 fill-gray-600 mt-0.5" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  )
}

function CheckIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path d="M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.75.75 0 0 1 1.06-1.06L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z" />
    </svg>
  )
}

function CaseStudySection() {
  return (
    <div className="mx-2 mt-2 rounded-4xl bg-gray-900 py-24">
      <Container>
        <Subheading dark className="text-center">AI Success Story</Subheading>
        <Heading as="h2" dark className="mt-2 text-center">
          How we helped an AI platform achieve breakthrough growth.
        </Heading>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">The Challenge</h3>
              <p className="text-gray-300 mb-6">{caseStudy.challenge}</p>
              
              <h3 className="text-xl font-semibold text-white mb-4">Our Solution</h3>
              <p className="text-gray-300">{caseStudy.solution}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-6">Results Achieved</h3>
              <div className="space-y-6">
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="border-l-4 border-white/20 pl-6">
                    <div className="text-2xl font-bold text-white">{result.improvement}</div>
                    <div className="text-sm text-gray-300">{result.metric}</div>
                    <div className="text-xs text-gray-400">{result.timeframe}</div>
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
      <Subheading className="text-center">AI Industry Keywords</Subheading>
      <Heading as="h2" className="mt-2 text-center">
        Examples of AI keywords we target.
      </Heading>
      
      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            category: 'Core AI Terms',
            keywords: ['machine learning platform', 'artificial intelligence software', 'AI development tools', 'neural network solutions']
          },
          {
            category: 'AI Applications',
            keywords: ['computer vision API', 'natural language processing', 'predictive analytics', 'automated decision making']
          },
          {
            category: 'Industry-Specific',
            keywords: ['AI for healthcare', 'fintech machine learning', 'retail AI solutions', 'manufacturing automation']
          },
          {
            category: 'Technical Terms',
            keywords: ['deep learning framework', 'model deployment', 'AI model training', 'MLOps platform']
          },
          {
            category: 'Business Focused',
            keywords: ['AI ROI calculator', 'enterprise AI adoption', 'AI implementation strategy', 'AI consulting services']
          },
          {
            category: 'Emerging Tech',
            keywords: ['generative AI platform', 'conversational AI', 'edge AI computing', 'responsible AI practices']
          }
        ].map((group, index) => (
          <div key={index} className="text-center">
            <h3 className="text-lg font-semibold mb-4">{group.category}</h3>
            <ul className="space-y-2">
              {group.keywords.map((keyword, keywordIndex) => (
                <li key={keywordIndex} className="text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full">
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

function CTASection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Subheading>Ready to Accelerate Your AI Company's Growth?</Subheading>
        <Heading as="h2" className="mt-2">
          Let's build your AI SEO strategy.
        </Heading>
        <Lead className="mt-6">
          Partner with SEO experts who understand the AI industry. We'll help you navigate 
          the unique challenges of marketing AI technology and drive qualified traffic to your platform.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Get AI SEO Strategy</Button>
          <Button variant="outline" href="/pricing">
            View Pricing
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Free consultation includes AI-specific keyword research and competitor analysis.
        </p>
      </div>
    </Container>
  )
}

export default function AIMachineLearning() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <ChallengesSection />
      <ServicesSection />
      <CaseStudySection />
      <KeywordsSection />
      <CTASection />
      <Footer />
    </main>
  )
}