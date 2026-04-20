import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
  ServiceHero,
  StatsBar,
  ServicesGrid,
  CaseStudyDark,
  CTAFormSection,
  FeatureCardsSection,
} from '@/components/service-page-sections'
import { CheckIcon } from '@/components/check-icon'
import {
  Database,
  Search,
  FileText,
  Shield,
  Layers,
  BarChart2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Claude RAG Systems | Supabase pgvector + Hybrid Search | TheProjectSEO',
  description:
    'Build RAG pipelines on the Anthropic stack with Supabase pgvector or Postgres full-text, hybrid search, and citations. Our own seo_query_kb delivers 100% citation rate on a 27B fine-tuned model.',
  alternates: {
    canonical: '/services/claude/claude-rag-systems',
  },
  openGraph: {
    title: 'Claude RAG Systems | Retrieval-Augmented Generation for Claude | TheProjectSEO',
    description:
      'Claude RAG system development: Supabase pgvector, hybrid search, citations, and 100% grounded outputs. We built and run the seo_query_kb RAG system powering our fine-tuned SEO model.',
    url: 'https://theprojectseo.com/services/claude/claude-rag-systems',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Claude RAG Systems',
  title: 'RAG pipelines that make Claude answer',
  accentWord: 'from',
  titleAfterAccent: 'your knowledge, not its training',
  description:
    'Retrieval-Augmented Generation lets Claude answer questions from your specific knowledge base rather than generic training data. The architecture is well-understood. The execution. chunking strategy, embedding model selection, retrieval scoring, hybrid search configuration, and citation implementation. determines whether your RAG system produces trustworthy, grounded answers or plausible-sounding hallucinations. We built and run the seo_query_kb RAG system that powers our fine-tuned Qwen3.5-27B model, delivering 100% citation rate across all knowledge base queries.',
  ctaPrimaryText: 'Build Your RAG System',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '100%', label: 'Citation rate on seo_query_kb queries' },
  { value: '5-6', label: 'Tok/s on our Qwen3.5-27B fine-tuned model' },
  { value: '4', label: 'Knowledge sources indexed in our RAG system' },
  { value: '0', label: 'Uncited claims in KB-grounded answers' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Six components of a production-grade Claude RAG system.',
  lead: 'A RAG system that works in a demo and a RAG system that works reliably in production require different decisions at every layer.',
  services: [
    {
      icon: Database,
      title: 'Vector Database Architecture',
      description:
        'Supabase pgvector is our primary recommendation for teams already on Postgres. It puts vector search inside your existing database, eliminating a separate vector store with its own auth, scaling, and operational overhead. We design the schema: the documents table, the embeddings column, the HNSW or IVFFlat index configuration, and the similarity search functions. For teams with specific requirements, we also build on Pinecone, Weaviate, or Chroma.',
      features: [
        'Supabase pgvector schema design',
        'HNSW index configuration for performance',
        'Similarity search function optimization',
        'Multi-tenant document isolation',
      ],
    },
    {
      icon: Layers,
      title: 'Document Processing Pipeline',
      description:
        'How you chunk your documents determines retrieval quality more than any other factor. Chunks that are too large retrieve too much context. Chunks that are too small lose the semantic coherence that makes retrieval work. We design chunking strategies specific to your document type: markdown documents, PDFs, structured data, code files, and web content each have different optimal chunking patterns.',
      features: [
        'Document-type-specific chunking strategies',
        'Semantic coherence preservation',
        'Metadata extraction and indexing',
        'Incremental update pipeline design',
      ],
    },
    {
      icon: Search,
      title: 'Hybrid Search Implementation',
      description:
        'Pure vector search misses exact keyword matches. Pure keyword search misses semantic equivalents. Hybrid search combines both. a weighted combination of cosine similarity (vector) and BM25 or Postgres full-text search (keyword). The right weighting depends on your query patterns. We implement hybrid search, tune the weighting against your real queries, and measure the retrieval quality improvement over single-mode search.',
      features: [
        'Cosine similarity + Postgres full-text combination',
        'Weight tuning against representative queries',
        'Retrieval quality measurement',
        'Query-time relevance scoring',
      ],
    },
    {
      icon: FileText,
      title: 'Citation Integration',
      description:
        'A RAG system without citations is a hallucination risk. When Claude cannot see what it is citing, it sometimes fills gaps with training data instead of retrieved content. We implement Claude\'s native citations feature alongside our RAG retrieval layer: Claude receives retrieved chunks with source metadata and is instructed to cite every factual claim. Our seo_query_kb system achieves 100% citation rate on all knowledge base queries using this pattern.',
      features: [
        'Anthropic citations API integration',
        'Source metadata preservation through chunking',
        'Citation formatting for different output types',
        '100% citation enforcement via system prompt',
      ],
    },
    {
      icon: Shield,
      title: 'Access Control and Document Governance',
      description:
        'Multi-tenant RAG systems need to ensure that queries from one user or team only retrieve documents they are authorized to access. We design the access control layer: document-level permission tags, query-time permission filtering, and audit logging for every retrieval operation. For regulated industries, we add data residency controls and retrieval audit trails.',
      features: [
        'Document-level permission tagging',
        'Query-time permission filtering',
        'Retrieval audit logging',
        'Data residency compliance controls',
      ],
    },
    {
      icon: BarChart2,
      title: 'Retrieval Quality Evaluation',
      description:
        'Retrieval quality is measurable. For a given test question, did the system retrieve the chunk that actually contains the answer? We build retrieval eval frameworks: a ground-truth set of questions with known source documents, precision and recall measurement against that ground truth, and a monitoring pipeline that runs the eval as your document corpus evolves. You should know your retrieval quality number, not just trust that it works.',
      features: [
        'Ground-truth retrieval test set design',
        'Precision and recall measurement',
        'Retrieval quality dashboarding',
        'Ongoing monitoring as corpus changes',
      ],
    },
  ],
}

const ragStackData = {
  subheading: 'Our RAG Stack',
  heading: 'The exact stack powering seo_query_kb with 100% citation rate.',
  lead: 'We do not recommend tools we have not used in production. This is the stack we run.',
  cards: [
    {
      title: 'Data Layer',
      items: [
        'Supabase pgvector for vector storage',
        'Postgres full-text for keyword search',
        'HNSW index for approximate nearest neighbor',
        'Document metadata in structured columns',
      ],
    },
    {
      title: 'Processing Layer',
      items: [
        'Document chunking by semantic unit',
        'Embedding generation with text-embedding models',
        'Metadata extraction and preservation',
        'Incremental index update on new documents',
      ],
    },
    {
      title: 'Retrieval Layer',
      items: [
        'Hybrid search: vector + keyword combination',
        'Query-time permission filtering',
        'Relevance re-ranking before context injection',
        'Context window budget management',
      ],
    },
    {
      title: 'Generation Layer',
      items: [
        'Claude with retrieved chunks in context',
        'Anthropic citations API for source attribution',
        'System prompt enforcing citation requirement',
        'Confidence signaling on low-retrieval queries',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Knowledge base audit and architecture design',
    description:
      'We review your document corpus: volume, document types, update frequency, and query patterns. This drives every design decision: chunking strategy, embedding model choice, index configuration, and whether hybrid search adds enough value for your query distribution to justify the additional complexity.',
  },
  {
    number: '02',
    title: 'Chunking and embedding pipeline build',
    description:
      'We build the document processing pipeline: ingestion, chunking, embedding generation, metadata extraction, and index insertion. For document types you already have, we run the first full ingestion and validate chunk quality by reviewing the retrieved results on a sample of representative queries.',
  },
  {
    number: '03',
    title: 'Retrieval optimization and hybrid search tuning',
    description:
      'We build the retrieval layer, implement hybrid search if the query distribution warrants it, and tune the weighting against your representative queries. Retrieval quality is measured against a ground-truth set before we connect Claude to the system.',
  },
  {
    number: '04',
    title: 'Citation integration and production deployment',
    description:
      'We connect Claude to the retrieval layer, implement citations, and validate the end-to-end system on your actual queries. The deployment includes monitoring for retrieval quality, citation rate, and response latency. Documentation covers how to add new documents, modify the chunking strategy, and debug retrieval failures.',
  },
]

const caseStudyData = {
  subheading: 'seo_query_kb in Production',
  heading: 'How we built a RAG system that achieves 100% citation rate on 15 daily client workflows.',
  challenge:
    'Our team needs to answer SEO questions that are grounded in specific, citable research: Ahrefs data studies, Moz methodology documentation, Google Search Central guidance, Search Engine Journal analysis. Generic Claude responses, while often correct, lack the citation accountability that professional SEO advice requires. We needed a system where every factual claim pointed to a specific source.',
  solution:
    'We built seo_query_kb: a RAG system with Supabase pgvector backing a corpus from Ahrefs, Backlinko, Moz, Search Engine Journal, and Google Search Central. The system uses hybrid search (vector similarity plus keyword matching) to retrieve the most relevant chunks, feeds them to our fine-tuned Qwen3.5-27B model running at 5-6 tok/s on an M4 Pro, and enforces citation via Anthropic\'s citations API plus a system prompt that blocks any uncited factual claim. The system is exposed via an MCP tool called seo_query_kb, accessible to Claude in every client session.',
  results: [
    { metric: 'Citation rate on all queries', improvement: '100%', timeframe: 'Enforced at system prompt level' },
    { metric: 'Knowledge sources indexed', improvement: '4', timeframe: 'Ahrefs, Backlinko, Moz, Google SC' },
    { metric: 'Inference speed on fine-tuned model', improvement: '5-6 tok/s', timeframe: 'Qwen3.5-27B on M4 Pro' },
    { metric: 'Client sessions using seo_query_kb', improvement: 'Every session', timeframe: 'Across all 15 clients' },
  ],
}

const faqItems = [
  {
    question: 'Why build a RAG system instead of just fine-tuning a model?',
    answer:
      'RAG and fine-tuning solve different problems. Fine-tuning improves how a model reasons and responds. RAG gives the model access to specific, current information it was not trained on. For most business knowledge base use cases, RAG is the right choice: your documents change, your model weights should not need to change every time they do. We actually use both in our stack. a fine-tuned model for reasoning style, RAG for knowledge retrieval.',
  },
  {
    question: 'Why Supabase pgvector over dedicated vector databases like Pinecone?',
    answer:
      'Supabase pgvector puts vector search in the same database as your other application data. One auth system, one operational footprint, one query interface. For most teams, this simplicity outweighs the marginal performance advantages of dedicated vector databases at their scale. If you are searching hundreds of millions of vectors with sub-10ms latency requirements, the calculus changes. Most business knowledge bases are not in that category.',
  },
  {
    question: 'What is hybrid search and when does it matter?',
    answer:
      'Hybrid search combines vector similarity search (which finds semantically similar content) with keyword search (which finds exact term matches). Vector search alone misses exact terms: a query for "BM25" may not retrieve documents with a high vector similarity score because the term is specific. Keyword search alone misses semantic equivalents: "click-through rate" and "CTR" would not match. Hybrid search covers both. It adds complexity but meaningfully improves retrieval quality for knowledge bases with specific terminology.',
  },
  {
    question: 'How do you ensure Claude only answers from retrieved content and does not hallucinate?',
    answer:
      'Three mechanisms working together: first, the system prompt instructs Claude to base every factual claim on retrieved content and cite the source. Second, we implement Anthropic\'s citations API, which ties Claude\'s output to specific retrieved chunks. Third, the system prompt instructs Claude to express uncertainty or decline to answer when retrieved content does not cover a query, rather than filling the gap with training data. The combination produces 100% citation rate in our own system.',
  },
  {
    question: 'How does the document update process work?',
    answer:
      'We build an incremental update pipeline: new documents are split into chunks, converted to embeddings, and written to the index without requiring a full re-index of the existing corpus. For frequently updated documents, we implement a document version system that soft-deletes old chunks when new versions are ingested. You can add documents to your knowledge base without downtime or complex maintenance procedures.',
  },
]

/* -------------------------------------------------------------------------- */
/* Process Section */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>How We Build RAG Systems</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from document audit to citation-grounded production system.
          </Heading>
        </div>
        <div className="max-w-3xl mx-auto">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`py-8 ${index < processSteps.length - 1 ? 'border-b border-border' : ''}`}
            >
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium mb-3">
                Step {step.number}
              </p>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* FAQ Section */
/* -------------------------------------------------------------------------- */

function FAQSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <FAQAccordion
          title="Claude RAG system frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeRagSystemsPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/claude-rag-systems',
          name: 'Claude RAG Systems',
          description:
            'RAG pipeline development on the Anthropic stack with Supabase pgvector, hybrid search, and Anthropic citations. We build and run the seo_query_kb RAG system delivering 100% citation rate.',
          provider: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          areaServed: {
            '@type': 'Country',
            name: 'Worldwide',
          },
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: faqItems.slice(0, 5).map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        }}
      />
      <ServiceHero {...heroData} />
      <StatsBar stats={statsData} />
      <ServicesGrid {...servicesData} />
      <ProcessSection />
      <CaseStudyDark {...caseStudyData} />
      <FeatureCardsSection {...ragStackData} />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Build Your Knowledge Base?"
        heading="Let's design your RAG system."
        lead="Document audit, architecture design, retrieval pipeline build, and citation integration. Your knowledge base, accessible to Claude, with 100% grounded answers."
        benefits={[
          'Document corpus audit and chunking strategy included',
          'Hybrid search tuned to your query patterns',
          'Citation integration for grounded, auditable outputs',
        ]}
        submitText="Build Your RAG System"
      />
      <Footer />
    </main>
  )
}
