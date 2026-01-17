import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Gradient } from '@/components/gradient'
import { Navbar } from '@/components/navbar'
import UnicornBackground from '@/components/unicorn-background'
import { Heading, Lead, Subheading } from '@/components/text'
import { FAQAccordion } from '@/components/faq-accordion'
import { 
  MagnifyingGlassIcon,
  ChatBubbleLeftRightIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CheckCircleIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AEO Services | Answer Engine Optimization | TheProjectSEO',
  description:
    'Answer Engine Optimization (AEO) services to dominate AI search results. Optimize for ChatGPT, Gemini, Claude and other AI-powered search engines.',
  keywords: 'AEO, Answer Engine Optimization, AI search optimization, ChatGPT SEO, Gemini optimization, Claude search, AI search results',
}

const aiEngines = [
  {
    name: 'ChatGPT',
    description: 'OpenAI\'s conversational AI with massive search influence',
    marketShare: '60%',
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Google Gemini',
    description: 'Google\'s AI integrated into search results',
    marketShare: '25%', 
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'Claude',
    description: 'Anthropic\'s AI assistant gaining rapid adoption',
    marketShare: '8%',
    color: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'Perplexity',
    description: 'AI-powered search engine with growing user base',
    marketShare: '7%',
    color: 'bg-orange-100 text-orange-800'
  }
]

const aeoFeatures = [
  {
    name: 'AI Search Optimization',
    description: 'Optimize your content to appear in AI-generated answers across ChatGPT, Gemini, Claude, and other AI search engines.',
    icon: SparklesIcon,
    benefits: [
      'AI answer snippet optimization',
      'Conversational query targeting',
      'AI-friendly content structure',
      'Answer engine ranking factors'
    ]
  },
  {
    name: 'Conversational Content Strategy',
    description: 'Create content that excels in natural language queries and conversational AI interactions.',
    icon: ChatBubbleLeftRightIcon,
    benefits: [
      'Natural language processing optimization',
      'Question-answer content formats',
      'Conversational keyword research',
      'Voice search optimization'
    ]
  },
  {
    name: 'Knowledge Graph Enhancement',
    description: 'Structure your content to feed AI knowledge bases and appear in authoritative AI responses.',
    icon: CpuChipIcon,
    benefits: [
      'Structured data implementation',
      'Entity relationship mapping',
      'Knowledge panel optimization',
      'AI source attribution'
    ]
  },
  {
    name: 'Semantic Content Optimization',
    description: 'Advanced semantic SEO that helps AI engines understand and recommend your content.',
    icon: DocumentTextIcon,
    benefits: [
      'Semantic keyword clustering',
      'Topic authority building',
      'Context-aware content creation',
      'AI comprehension optimization'
    ]
  },
  {
    name: 'Answer Engine Analytics',
    description: 'Track your performance across AI search platforms with specialized AEO analytics and reporting.',
    icon: ChartBarIcon,
    benefits: [
      'AI search performance tracking',
      'Answer position monitoring',
      'Conversational query analysis',
      'ROI measurement for AEO'
    ]
  },
  {
    name: 'Future-Proof Strategy',
    description: 'Stay ahead of the AI search evolution with strategies that adapt to new AI engines and features.',
    icon: RocketLaunchIcon,
    benefits: [
      'Emerging AI platform preparation',
      'Algorithm update adaptation',
      'Next-gen search optimization',
      'Competitive advantage building'
    ]
  }
]

const aeoPackages = [
  {
    name: 'AEO Starter',
    price: '$1,997',
    period: '/month',
    description: 'Essential answer engine optimization for growing businesses',
    features: [
      'AI search audit & analysis',
      'Basic conversational content optimization',
      'Core structured data implementation', 
      'Monthly AEO performance reports',
      'Optimization for 2 AI engines'
    ]
  },
  {
    name: 'AEO Professional', 
    price: '$3,997',
    period: '/month',
    description: 'Comprehensive answer engine optimization for established companies',
    features: [
      'Everything in AEO Starter',
      'Advanced conversational keyword research',
      'Knowledge graph optimization',
      'Multi-platform AI search tracking',
      'Optimization for all major AI engines',
      'Dedicated AEO specialist'
    ],
    featured: true
  },
  {
    name: 'AEO Enterprise',
    price: '$7,997',
    period: '/month',
    description: 'Full-scale answer engine domination for industry leaders',
    features: [
      'Everything in AEO Professional',
      'Custom AI search strategies',
      'Advanced semantic content creation',
      'Priority algorithm update support',
      'Custom AEO tool development',
      'White-glove implementation'
    ]
  }
]

function Header() {
  return (
    <div className="relative">
      <Gradient className="absolute inset-0 bottom-0" />
      <Container className="relative">
        <Navbar />
        <div className="pt-16 pb-24 sm:pt-24 sm:pb-32 md:pt-32 md:pb-48">
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl/[0.9] font-medium tracking-tight text-balance text-gray-950 sm:text-8xl/[0.8] md:text-9xl/[0.8]">
              Answer Engine Optimization
            </h1>
            <p className="mt-8 max-w-2xl text-xl/7 font-medium text-gray-950/75 sm:text-2xl/8">
              Dominate AI search results with Answer Engine Optimization (AEO). Get your content featured 
              in ChatGPT, Google Gemini, Claude, and other AI-powered search engines.
            </p>
            <div className="mt-12 flex flex-col gap-x-6 gap-y-4 sm:flex-row">
              <Button href="/contact">Get AEO Strategy</Button>
              <Button variant="secondary" href="#ai-engines">
                See AI Coverage
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

function AIEnginesSection() {
  return (
    <div id="ai-engines">
      <Container className="py-24">
        <div className="text-center mb-16">
        <Subheading>AI Search Landscape</Subheading>
        <Heading as="h2" className="mt-2">
          The future of search is already here.
        </Heading>
        <Lead className="mt-6 max-w-3xl mx-auto">
          AI-powered search engines are rapidly changing how people find information. 
          Over 70% of search queries now involve AI-generated answers.
        </Lead>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 mb-16">
        {aiEngines.map((engine, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg ring-1 ring-black/5 text-center">
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${engine.color}`}>
              {engine.marketShare} market share
            </div>
            <h3 className="text-lg font-semibold mb-2">{engine.name}</h3>
            <p className="text-gray-600 text-sm">{engine.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 rounded-2xl p-8 text-center">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="text-4xl font-bold text-gray-950 mb-2">2.1B</div>
            <div className="text-sm text-gray-600">Monthly AI search queries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-950 mb-2">340%</div>
            <div className="text-sm text-gray-600">Growth in AI search usage</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-gray-950 mb-2">65%</div>
            <div className="text-sm text-gray-600">Users prefer AI-generated answers</div>
          </div>
        </div>
      </div>
      </Container>
    </div>
  )
}

function FeaturesSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">AEO Services</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Optimize for the next generation of search.
        </Heading>
        <Lead className="mt-6 text-center max-w-3xl mx-auto">
          Our Answer Engine Optimization services ensure your content appears prominently 
          in AI-generated search results across all major AI platforms.
        </Lead>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {aeoFeatures.map((feature, index) => (
            <div key={index} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="size-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <feature.icon className="size-6 text-gray-600" />
                </div>
                <h3 className="text-lg font-semibold">{feature.name}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{feature.description}</p>
              
              <ul className="space-y-2">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircleIcon className="size-4 shrink-0 text-gray-400 mt-0.5" />
                    {benefit}
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

function PackagesSection() {
  return (
    <div className="bg-gray-50 py-24">
      <Container>
        <Subheading className="text-center">AEO Packages</Subheading>
        <Heading as="h2" className="mt-2 text-center">
          Choose your answer engine optimization level.
        </Heading>
        
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {aeoPackages.map((pkg, index) => (
            <div 
              key={index} 
              className={`rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 ${
                pkg.featured ? 'relative ring-2 ring-gray-900 transform scale-105' : ''
              }`}
            >
              {pkg.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gray-900 text-white px-4 py-2 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{pkg.price}</span>
                  <span className="text-gray-500">{pkg.period}</span>
                </div>
                <p className="text-gray-600 mt-4">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 text-sm">
                    <CheckCircleIcon className="size-4 shrink-0 text-gray-400 mt-0.5" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button href="/contact" className="w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

function CTASection() {
  return (
    <Container className="py-24">
      <div className="mx-auto max-w-2xl text-center">
        <Subheading>Ready for AI Search?</Subheading>
        <Heading as="h2" className="mt-2">
          Dominate answer engines before your competitors do.
        </Heading>
        <Lead className="mt-6">
          AI search is growing 340% year-over-year. The businesses that optimize for answer engines now 
          will dominate the future of search. Don't get left behind.
        </Lead>
        <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button href="/contact">Start AEO Strategy</Button>
          <Button variant="outline" href="/services/seo-consulting">
            Expert Consultation
          </Button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Free consultation includes AI search audit and custom AEO strategy recommendations.
        </p>
      </div>
    </Container>
  )
}

export default function AEOServices() {
  return (
    <main className="overflow-hidden">
      <UnicornBackground />
      <Header />
      <AIEnginesSection />
      <FeaturesSection />
      <PackagesSection />
      <CTASection />
      <FAQAccordion />
      <Footer />
    </main>
  )
}