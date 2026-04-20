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
 Globe,
 BarChart2,
 Shield,
 Plug,
 Code2,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'MCP Server Development | Connect Claude to Your Systems | TheProjectSEO',
 description:
 'Build custom Model Context Protocol (MCP) servers that give Claude secure, structured access to your databases, APIs, CRM, and internal tools. We build MCP servers for production use. not prototypes.',
 alternates: {
 canonical: '/services/claude/mcp-server-development',
 },
 openGraph: {
 title: 'MCP Server Development. Connect Claude to Your Systems | TheProjectSEO',
 description:
 'Custom MCP server development. Give Claude secure access to your databases, APIs, analytics platforms, and internal tools. We build and run MCP servers ourselves. Ahrefs, GSC, BigQuery, n8n.',
 url: 'https://theprojectseo.com/services/claude/mcp-server-development',
 siteName: 'TheProjectSEO',
 locale: 'en_US',
 type: 'website',
 },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
 label: 'MCP Server Development',
 title: 'MCP servers that give Claude access to',
 accentWord: 'your',
 titleAfterAccent: 'systems',
 description:
 'The Model Context Protocol (MCP) is Anthropic\'s open standard for connecting AI models to external data sources and tools. An MCP server sits between Claude and your systems. your database, CRM, analytics platform, internal API. and gives Claude secure, structured read and write access. We build MCP servers in production. Our own stack includes servers for Ahrefs, Google Search Console, BigQuery, and n8n. We know the patterns that work at scale.',
 ctaPrimaryText: 'Build Your MCP Server',
 ctaPrimaryHref: '/contact',
 ctaSecondaryText: 'Explore Claude Services',
 ctaSecondaryHref: '/services/claude',
}

const statsData = [
 { value: '4+', label: 'MCP servers running in production' },
 { value: '15+', label: 'Client workflows served via MCP' },
 { value: '100%', label: 'Citation rate. seo_query_kb MCP' },
 { value: '0', label: 'Data leaves your infra without auth' },
]

const servicesData = {
 subheading: 'What We Build',
 heading: 'Six MCP server types for common enterprise needs.',
 lead: 'MCP works for any system that has a structured API or query interface. These are the six categories we build most frequently.',
 services: [
 {
 icon: Database,
 title: 'Database MCP Servers',
 description:
 'Give Claude read (and optionally write) access to your internal databases. SQL, BigQuery, Postgres, MongoDB, Supabase. Claude can query your data in response to natural language, generate reports, identify anomalies, and take action. all within defined permission boundaries.',
 features: [
 'Read-only or write-enabled access',
 'Query authorization layer',
 'Row-level security enforcement',
 'Sensitive column masking',
 ],
 },
 {
 icon: Globe,
 title: 'API Integration MCP Servers',
 description:
 'Wrap any REST or GraphQL API in an MCP server so Claude can call it natively. CRM APIs, payment systems, logistics platforms, third-party data providers. The MCP server handles auth, rate limiting, error handling, and response normalization. Claude just uses the tools.',
 features: [
 'OAuth and API key auth management',
 'Rate limit handling and retry logic',
 'Response normalization to Claude-friendly format',
 'Tool documentation auto-generation',
 ],
 },
 {
 icon: BarChart2,
 title: 'Analytics Platform MCP Servers',
 description:
 'Connect Claude to your analytics stack: Google Analytics 4, Mixpanel, Amplitude, Segment, Snowflake. Claude can pull reports, identify trends, surface anomalies, and explain performance changes without requiring a data analyst to mediate every query.',
 features: [
 'GA4, Mixpanel, Amplitude integrations',
 'Natural language to analytics query translation',
 'Automated report generation',
 'Anomaly detection and alerting',
 ],
 },
 {
 icon: Plug,
 title: 'CRM & Sales Tool MCP Servers',
 description:
 'Salesforce, HubSpot, Freshsales, Pipedrive. Claude can query deal stages, pull contact records, generate follow-up drafts based on interaction history, and update field values. all from a conversation, with full audit logging.',
 features: [
 'Contact and deal record access',
 'Field update with change logging',
 'Interaction history summarization',
 'Follow-up draft generation in context',
 ],
 },
 {
 icon: Shield,
 title: 'Internal Knowledge Base MCP Servers',
 description:
 'Give Claude structured access to your internal documentation, SOPs, policy docs, and knowledge base. The MCP server handles document chunking, semantic retrieval, relevance ranking, and source attribution so Claude retrieves the right context for each query rather than relying on what fits in its context window.',
 features: [
 'Vector search over internal docs',
 'Relevance-ranked retrieval',
 'Document freshness tracking',
 'Role-based access control',
 ],
 },
 {
 icon: Code2,
 title: 'Custom Tool MCP Servers',
 description:
 'Not everything fits a standard category. We build MCP servers for custom internal tools: proprietary data pipelines, legacy systems with non-standard APIs, multi-system aggregation servers that combine data from several sources into one Claude-accessible interface.',
 features: [
 'Legacy API adapter patterns',
 'Multi-source aggregation servers',
 'Custom authentication schemes',
 'Async tool call support',
 ],
 },
 ],
}

const whatIsMCPData = {
 subheading: 'Understanding MCP',
 heading: 'What the Model Context Protocol actually does.',
 lead: 'MCP is not a plugin system or an API wrapper. It is an open standard that defines how AI models discover, access, call, and receive results from external capabilities in a consistent way.',
 cards: [
 {
 title: 'Tools',
 items: [
 'Functions Claude can call to take action',
 'Read database, call API, write file',
 'Parameters are typed and validated',
 'Results returned in structured format',
 'Errors handled gracefully',
 ],
 },
 {
 title: 'Resources',
 items: [
 'Data sources Claude can read from',
 'Files, database records, API responses',
 'Streamed or one-shot retrieval',
 'URI-based addressing scheme',
 'Version-aware for changing data',
 ],
 },
 {
 title: 'Prompts',
 items: [
 'Pre-built prompt templates exposed by the server',
 'Include dynamic context at call time',
 'Reusable across different Claude sessions',
 'Can chain multiple tools in a workflow',
 'Discoverable by Claude automatically',
 ],
 },
 {
 title: 'Security',
 items: [
 'Local transport (stdio) or remote (HTTP/SSE)',
 'Auth token management server-side',
 'Explicit tool permission declarations',
 'Claude cannot access undeclared endpoints',
 'Full request and response logging',
 ],
 },
 ],
}

const processSteps = [
 {
 number: '01',
 title: 'System mapping and access design',
 description:
 'We map the systems you want Claude to access, the specific operations Claude should be able to perform, and the access controls that need to be in place. This design document defines every tool the MCP server will expose. what it does, what parameters it accepts, what auth it uses, and what it returns.',
 },
 {
 number: '02',
 title: 'Security and permission architecture',
 description:
 'Before we write the server, we design the permission layer. Read-only vs. read-write access per tool. Role-based access control if multiple users will share the server. Sensitive field masking. Audit log schema. We treat security as a first-class concern, not an afterthought.',
 },
 {
 number: '03',
 title: 'Build and integration testing',
 description:
 'We build the MCP server against your actual system. your real API endpoints, your real database schema. Integration tests verify every tool under both success and failure conditions. We test with Claude Code to validate that the tool descriptions are clear enough for Claude to use them correctly without explicit instruction.',
 },
 {
 number: '04',
 title: 'Deployment and monitoring',
 description:
 'We handle deployment to your preferred environment (local, cloud VM, serverless). We configure logging, error alerting, and usage monitoring. You get a runbook covering how to update credentials, add new tools, and debug common failures. so your team is not dependent on us for ongoing operations.',
 },
]

const caseStudyData = {
 subheading: 'Running in Production',
 heading: 'How four MCP servers power our agency\'s daily operations.',
 challenge:
 'An SEO agency working across 15 clients needs live data. current keyword rankings, traffic trends, backlink changes, content performance. Without live data, every analysis is stale by the time it is delivered. Switching between Ahrefs, Google Search Console, BigQuery, and n8n dashboards to pull that data manually costs 2-4 hours per client per week.',
 solution:
 'We built four MCP servers: one for Ahrefs (keyword data, backlink analysis, competitor research), one for Google Search Console (ranking, impressions, CTR by page), one for BigQuery (aggregated performance data, Salesforce cross-references), and one for n8n (workflow triggering and status monitoring). Claude Code CLI sessions connect to all four. Analysts ask questions in natural language. The MCP layer retrieves the right data, formatted for immediate use.',
 results: [
 { metric: 'MCP servers in production', improvement: '4', timeframe: 'Ahrefs, GSC, BigQuery, n8n' },
 { metric: 'Manual data pulls eliminated', improvement: '~40%', timeframe: 'Per analyst per week' },
 { metric: 'Data freshness', improvement: 'Real-time', timeframe: 'vs. weekly CSV exports previously' },
 { metric: 'Fine-tuned model access via MCP', improvement: 'seo_query_kb', timeframe: '100% citation rate, KB-grounded' },
 ],
}

const faqItems = [
 {
 question: 'What is the Model Context Protocol (MCP)?',
 answer:
 'MCP is an open standard published by Anthropic that defines how AI models communicate with external systems. An MCP server exposes a set of "tools" (functions Claude can call), "resources" (data sources Claude can read), and "prompts" (reusable prompt templates). Claude discovers these capabilities automatically and can use them during a conversation or task without additional user instruction.',
 },
 {
 question: 'How is MCP different from a RAG system or fine-tuning?',
 answer:
 'RAG (Retrieval-Augmented Generation) retrieves text from a knowledge base and puts it into the context window. Fine-tuning bakes knowledge into model weights. MCP is different from both. it gives Claude real-time access to live systems and the ability to take actions (write to a database, call an API) not just read static data. The three approaches complement each other and serve different needs.',
 },
 {
 question: 'Is MCP secure for enterprise use?',
 answer:
 'Yes, with proper design. MCP servers run under your control. on your infrastructure, behind your auth. Claude can only access the tools the server explicitly exposes. We design a permission layer that defines exactly what Claude can read, what it can write, and what it cannot touch. Everything is logged. For regulated industries we implement field-level masking, row-level security, and access control that maps to your existing identity management system.',
 },
 {
 question: 'What systems can you integrate via MCP?',
 answer:
 'Any system with a structured API or query interface: databases (Postgres, MySQL, BigQuery, MongoDB, Supabase), REST and GraphQL APIs, analytics platforms (GA4, Mixpanel, Amplitude), CRM systems (Salesforce, HubSpot, Freshsales), document stores, and internal tools. We have built servers for all of these. The pattern is the same; the integration details vary.',
 },
 {
 question: 'Do MCP servers require a running server process?',
 answer:
 'MCP supports two transport modes. Local transport (stdio) runs the server as a subprocess on the same machine as Claude Code. no network exposure, zero infrastructure overhead, ideal for developer use cases. Remote transport (HTTP/SSE) runs as a persistent server that multiple Claude instances can connect to. better for shared team use and production deployments. We build for whichever mode fits your needs.',
 },
 {
 question: 'How long does it take to build an MCP server?',
 answer:
 'A straightforward read-only API integration takes 5-10 business days: system mapping (1 day), security design (1 day), build and testing (3-5 days), deployment and documentation (1-2 days). More complex servers. multi-system aggregators, write-enabled servers with permission logic, legacy system adapters. run 2-4 weeks. We provide a specific timeline estimate after reviewing your system documentation.',
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
 <Subheading>How We Build MCP Servers</Subheading>
 <Heading as="h2" className="mt-2">
 Four stages from system access to production server.
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
 title="MCP server development frequently asked questions"
 items={faqItems}
 />
 </Container>
 </div>
 )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function MCPServerDevelopmentPage() {
 return (
 <main className="overflow-hidden">
 <JsonLd
 data={{
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': 'https://theprojectseo.com/services/claude/mcp-server-development',
 name: 'MCP Server Development',
 description:
 'Custom Model Context Protocol (MCP) server development. Connect Claude to your databases, APIs, analytics platforms, CRM, and internal tools with secure, structured access. We build and run MCP servers in production.',
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
 <FeatureCardsSection {...whatIsMCPData} />
 <FAQSection />
 <CTAFormSection
 subheading="Ready to Connect Claude to Your Systems?"
 heading="Let's scope your MCP server build."
 lead="Tell us what systems you want Claude to access and what operations matter most. We design the permission architecture, build the server, and deploy it to your infrastructure."
 benefits={[
 'Security and permission design included',
 'Integration tested against your real systems',
 'Deployment to your infrastructure. you own it',
 ]}
 submitText="Build Your MCP Server"
 />
 <Footer />
 </main>
 )
}
