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
import {
  Brain,
  Cpu,
  Database,
  Zap,
  Code,
  Shield,
  TrendingUp,
  FileText,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Development Services | Custom AI Solutions & Generative AI | TheProjectSEO',
  description:
    'Enterprise-grade AI development services. Build custom AI applications, generative AI systems, LLM fine-tuning, RAG pipelines, and ML models. Responsible AI practices.',
  alternates: {
    canonical: '/services/ai-development',
  },
  openGraph: {
    title: 'AI Development Services | Custom AI & Generative AI Solutions',
    description:
      'Fast, scalable AI development. Generative AI, LLM fine-tuning, RAG systems, prompt engineering, and responsible AI practices.',
    url: 'https://theprojectseo.com/services/ai-development',
    siteName: 'TheProjectSEO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Development Services | Custom AI Solutions | TheProjectSEO',
    description:
      'Build custom AI applications, generative AI systems, and ML models. Enterprise-grade quality at startup speed.',
  },
}

const heroData = {
  label: 'AI Development Services',
  title: 'Build production-ready',
  accentWord: 'AI applications',
  titleAfterAccent: '',
  description:
    'Custom AI development for generative AI, LLM fine-tuning, RAG systems, ML models, and intelligent automation. Enterprise-grade quality at startup speed.',
  ctaPrimaryText: 'Start Your AI Project',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'View Pricing',
  ctaSecondaryHref: '#pricing',
}

const statsData = [
  { value: '50+', label: 'AI Projects Delivered' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<8 wks', label: 'Avg Time to Production' },
  { value: '24/7', label: 'Monitoring' },
]

const challengesData = {
  subheading: 'Common Challenges',
  heading: 'AI development pain points we solve',
  lead: 'Stop wasting time on failed AI experiments. Build production-ready AI applications with proven architecture and engineering.',
  cards: [
    {
      title: 'Proof-of-Concept Hell',
      items: [
        'POCs never reach production',
        'No clear path to scale',
        'Technical debt accumulates',
        'Team lacks AI expertise',
      ],
    },
    {
      title: 'LLM Hallucinations',
      items: [
        'AI generates incorrect information',
        'No source attribution',
        'Unreliable outputs',
        'Trust issues with stakeholders',
      ],
    },
    {
      title: 'Cost & Performance',
      items: [
        'API costs spiral out of control',
        'Slow response times',
        'Poor user experience',
        'No optimization strategy',
      ],
    },
    {
      title: 'Data & Privacy',
      items: [
        'PII leakage concerns',
        'No data governance',
        'Compliance requirements unclear',
        'Security vulnerabilities',
      ],
    },
  ],
}

const servicesData = {
  subheading: 'Our Services',
  heading: 'Complete AI development solutions',
  lead: 'From concept to production, we build AI applications that scale and deliver measurable ROI.',
  services: [
    {
      icon: Brain,
      title: 'Generative AI Applications',
      description: 'Build production-ready generative AI apps using GPT-4, Claude, Gemini. Content generation, chatbots, copywriting, and summarization.',
      features: [
        'Custom GPT-4 applications',
        'Claude/Gemini integration',
        'Prompt engineering',
        'Output validation',
      ],
    },
    {
      icon: FileText,
      title: 'RAG Systems',
      description: 'Retrieval-Augmented Generation systems that ground AI responses in your data. Vector databases, embeddings, semantic search.',
      features: [
        'Vector database setup',
        'Semantic search',
        'Document ingestion',
        'Source attribution',
      ],
    },
    {
      icon: Cpu,
      title: 'LLM Fine-Tuning',
      description: 'Fine-tune open-source models (Llama, Mistral) on your data for domain-specific performance and cost reduction.',
      features: [
        'Custom dataset preparation',
        'Model fine-tuning',
        'Evaluation frameworks',
        'Deployment optimization',
      ],
    },
    {
      icon: Zap,
      title: 'AI Agents & Automation',
      description: 'Build autonomous AI agents that execute multi-step workflows, make decisions, and integrate with your tools.',
      features: [
        'LangChain/LlamaIndex',
        'Tool integration',
        'Multi-agent orchestration',
        'Workflow automation',
      ],
    },
    {
      icon: Database,
      title: 'ML Model Development',
      description: 'Custom machine learning models for classification, prediction, anomaly detection, and recommendation systems.',
      features: [
        'Supervised learning',
        'Unsupervised learning',
        'Model training & tuning',
        'MLOps pipeline',
      ],
    },
    {
      icon: Code,
      title: 'AI API Development',
      description: 'Design and build scalable AI APIs with proper authentication, rate limiting, caching, and monitoring.',
      features: [
        'RESTful API design',
        'GraphQL endpoints',
        'Authentication & security',
        'Rate limiting & caching',
      ],
    },
    {
      icon: Shield,
      title: 'Responsible AI & Safety',
      description: 'Implement guardrails, content filtering, bias detection, and compliance frameworks for ethical AI deployment.',
      features: [
        'Content moderation',
        'Bias detection',
        'PII redaction',
        'Audit logging',
      ],
    },
    {
      icon: TrendingUp,
      title: 'AI Performance Optimization',
      description: 'Reduce latency, lower costs, and improve accuracy through model optimization, caching, and prompt engineering.',
      features: [
        'Prompt optimization',
        'Response caching',
        'Model quantization',
        'Cost reduction strategies',
      ],
    },
  ],
}

const processData = {
  subheading: 'Our Process',
  heading: 'How we build AI applications',
  steps: [
    {
      number: '01',
      title: 'Discovery & Requirements',
      description:
        'We understand your use case, define success metrics, assess data availability, and design the AI architecture.',
    },
    {
      number: '02',
      title: 'Prototype Development',
      description:
        'We build a working prototype in 2-3 weeks to validate the approach, test with real data, and gather feedback.',
    },
    {
      number: '03',
      title: 'Production Engineering',
      description:
        'We productionize the system with proper error handling, monitoring, security, scalability, and documentation.',
    },
    {
      number: '04',
      title: 'Deploy & Monitor',
      description:
        'We deploy to production, set up monitoring dashboards, provide team training, and offer ongoing support.',
    },
  ],
}

const caseStudyData = {
  subheading: 'Case Study',
  heading: 'Legal tech: AI-powered document analysis',
  challenge:
    'A legal tech company needed to analyze thousands of contracts to extract key clauses, identify risks, and summarize terms. Manual review took paralegals 2-3 hours per contract. They needed an AI solution that was accurate, fast, and compliant with data privacy regulations.',
  solution:
    'We built a RAG system using GPT-4 with fine-tuned prompt engineering, document chunking and embedding with Pinecone vector database, semantic search for clause extraction, custom validation layer to reduce hallucinations, and PII redaction for compliance. The system processes contracts in under 2 minutes with 95% accuracy.',
  results: [
    {
      metric: 'Processing Time',
      improvement: '2 minutes',
      timeframe: 'From 2-3 hours',
    },
    {
      metric: 'Accuracy',
      improvement: '95%',
      timeframe: 'Validated extraction',
    },
    {
      metric: 'Cost Savings',
      improvement: '$500K/yr',
      timeframe: 'Labor cost reduction',
    },
  ],
}

const toolsData = {
  subheading: 'Technology Stack',
  heading: 'AI platforms & frameworks we use',
  lead: 'We work with the latest AI technologies and proven production infrastructure.',
  cards: [
    {
      title: 'LLM Providers',
      items: ['OpenAI GPT-4', 'Anthropic Claude', 'Google Gemini', 'Cohere', 'Together AI'],
    },
    {
      title: 'Open Source Models',
      items: ['Llama 2/3', 'Mistral', 'Falcon', 'MPT', 'Vicuna'],
    },
    {
      title: 'AI Frameworks',
      items: ['LangChain', 'LlamaIndex', 'Haystack', 'Semantic Kernel', 'AutoGen'],
    },
    {
      title: 'Vector Databases',
      items: ['Pinecone', 'Weaviate', 'Qdrant', 'Milvus', 'ChromaDB'],
    },
    {
      title: 'ML Frameworks',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'Hugging Face', 'JAX'],
    },
    {
      title: 'Infrastructure',
      items: ['AWS', 'Google Cloud', 'Azure', 'Modal', 'Replicate'],
    },
  ],
}

const pricingData = {
  subheading: 'Pricing',
  heading: 'AI development packages',
  tiers: [
    {
      name: 'POC/Prototype',
      price: '$25K',
      description: 'Validate your AI use case',
      features: [
        '2-3 week timeline',
        'Working prototype',
        'Architecture design',
        'Data pipeline setup',
        'Performance evaluation',
        'Technical documentation',
      ],
    },
    {
      name: 'Production MVP',
      price: '$75K',
      description: 'Launch to production',
      features: [
        '6-8 week timeline',
        'Production-ready system',
        'API development',
        'Security & compliance',
        'Monitoring & alerting',
        'User interface',
        '30-day support',
        'Training included',
      ],
      featured: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Full-scale AI platform',
      features: [
        'Custom timeline',
        'Multi-model architecture',
        'Advanced fine-tuning',
        'High-availability setup',
        'SOC 2 compliance',
        'Dedicated engineering team',
        'Ongoing support',
        'SLA guarantee',
      ],
    },
  ],
}

const testimonialsData = {
  subheading: 'Client Testimonials',
  heading: 'What AI clients say',
  testimonials: [
    {
      quote:
        'They built our RAG system in 8 weeks. It processes contracts in 2 minutes with 95% accuracy and saved us $500K annually.',
      author: 'Sarah Johnson',
      role: 'VP Product',
      company: 'Legal Tech Platform',
    },
    {
      quote:
        'The AI agent they built automates 70% of our customer support. Response quality is exceptional and customers are happier.',
      author: 'Michael Chen',
      role: 'CTO',
      company: 'SaaS Company',
    },
    {
      quote:
        'Best AI development team we have worked with. They understand both the technology and our business requirements deeply.',
      author: 'Emily Rodriguez',
      role: 'Chief Innovation Officer',
      company: 'Financial Services',
    },
  ],
}

const faqData = [
  {
    question: 'What types of AI applications can you build?',
    answer:
      'We build generative AI applications (chatbots, content generation, copywriting), RAG systems for document analysis and Q&A, AI agents for workflow automation, ML models for classification and prediction, recommendation systems, sentiment analysis, anomaly detection, computer vision applications, voice AI, and custom LLM-powered tools. If it involves machine learning or large language models, we can build it.',
  },
  {
    question: 'What is RAG and when should I use it?',
    answer:
      'RAG (Retrieval-Augmented Generation) grounds AI responses in your proprietary data. Instead of relying on the LLM training data (which causes hallucinations), RAG retrieves relevant documents from your knowledge base and uses them to generate accurate, source-attributed responses. Use RAG when you need AI to answer questions about your documents, product catalogs, support articles, legal contracts, or any proprietary information. RAG dramatically reduces hallucinations and improves accuracy.',
  },
  {
    question: 'Should I use GPT-4 or fine-tune an open-source model?',
    answer:
      'Use GPT-4 (or Claude/Gemini) for general-purpose tasks, complex reasoning, and rapid prototyping. Fine-tune open-source models (Llama, Mistral) when you need domain-specific expertise, lower costs at scale (no per-token fees), data privacy (self-hosted), or specialized behavior. Fine-tuning requires training data and infrastructure but offers 10-100x cost savings at high volume. We typically start with GPT-4 for validation, then fine-tune if cost or privacy drives the decision.',
  },
  {
    question: 'How do you prevent AI hallucinations?',
    answer:
      'We use multiple strategies: RAG systems that ground responses in source documents, prompt engineering with explicit instructions and examples, output validation that checks for factual consistency, temperature tuning to reduce creativity where accuracy matters, chain-of-thought prompting for step-by-step reasoning, source attribution so users can verify claims, and human-in-the-loop review for critical applications. Proper engineering reduces hallucinations by 80-90%.',
  },
  {
    question: 'What does responsible AI mean?',
    answer:
      'Responsible AI ensures your system is safe, ethical, and compliant. We implement content moderation to filter harmful outputs, bias detection and mitigation, PII redaction to protect privacy, audit logging for accountability, GDPR/SOC 2 compliance frameworks, transparency features (source attribution, confidence scores), rate limiting to prevent abuse, and ethical guidelines for AI usage. Responsible AI builds trust and reduces legal/reputational risk.',
  },
  {
    question: 'How long does AI development take?',
    answer:
      'POC/prototypes take 2-3 weeks. Production MVPs take 6-8 weeks. Enterprise AI platforms take 3-6 months. Timeline depends on complexity, data availability, and integration requirements. We work iteratively, delivering working software every 2 weeks, so you see progress continuously. Most clients launch a production AI feature within 2 months.',
  },
  {
    question: 'What are the ongoing costs of running AI applications?',
    answer:
      'Costs include LLM API fees (OpenAI, Anthropic charge per token), vector database hosting ($50-$500/month), cloud infrastructure ($200-$2,000/month), monitoring tools ($50-$200/month), and fine-tuned model hosting if applicable. We optimize costs through prompt compression, response caching, batch processing, and switching to cheaper models for simple tasks. Typical production system costs $500-$5,000/month depending on volume. We provide cost projections during planning.',
  },
  {
    question: 'Do I need my own data to build AI applications?',
    answer:
      'It depends. Generative AI applications using GPT-4/Claude can work with general knowledge (no custom data needed). RAG systems require your documents/knowledge base. Fine-tuned models need training data (thousands of examples). ML models need labeled datasets. We can help you collect, label, and prepare data if you do not have it yet. Many successful AI applications start with publicly available data or synthetic data generation.',
  },
  {
    question: 'Can you integrate AI into our existing application?',
    answer:
      'Yes. We build AI features that integrate with your existing product via APIs or SDKs. We work with any tech stack (Node.js, Python, Java, .NET). Integration patterns include REST APIs for AI features, webhooks for async processing, SDKs for frontend embedding, serverless functions for event-driven AI, and microservices architecture for scalability. We ensure AI features feel native to your product, not bolted-on.',
  },
  {
    question: 'What happens after the AI system is deployed?',
    answer:
      'We provide monitoring dashboards showing latency, error rates, token usage, and user engagement. We set up alerting for anomalies and failures. We offer ongoing support packages for bug fixes, performance tuning, and feature additions. We document the entire system so your team can maintain it. Many clients start with a 30-day support period, then transition to monthly retainers for optimization and new features.',
  },
]

const relatedServicesData = [
  {
    title: 'MVP Development',
    description: 'Rapid product development for startups and new ventures.',
    href: '/services/mvp-development',
  },
  {
    title: 'N8n Automation',
    description: 'Workflow automation connecting 400+ apps and services.',
    href: '/services/n8n-automation',
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
]

const ctaData = {
  subheading: 'Ready to Build?',
  heading: 'Launch your AI application',
  lead: 'Let&apos;s discuss your AI use case and design a solution that delivers measurable ROI. From POC to production in weeks, not months.',
  submitText: 'Start Your AI Project',
}

export default function AIDevelopmentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'AI Development Services',
          description:
            'Enterprise-grade AI development services. Build custom AI applications, generative AI systems, LLM fine-tuning, and ML models.',
          provider: {
            '@type': 'Organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/services/ai-development',
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
      <FAQDarkSection title="AI development FAQ" items={faqData} />
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
