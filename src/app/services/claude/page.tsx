import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { FAQAccordion } from '@/components/faq-accordion'
import {
 ServiceHero,
 StatsBar,
 CaseStudyDark,
 CTAFormSection,
} from '@/components/service-page-sections'
import { CheckIcon } from '@/components/check-icon'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
 title: 'Claude Agency Services | Anthropic Stack Implementation | TheProjectSEO',
 description:
 'Claude agency services built by a team that runs on the Anthropic stack daily. Claude Code CLI, MCP servers, Agent SDK, custom Skills. from the agency that operates a 67-skill Claude-native system.',
 alternates: {
 canonical: '/services/claude',
 },
 openGraph: {
 title: 'Claude Agency Services | Built by a Claude-Native Team | TheProjectSEO',
 description:
 'Claude agency services from the agency that runs on Claude Code, MCP servers, and a 67-skill Agent SDK system. Adoption consulting, MCP development, custom Skills, and production agents.',
 url: 'https://theprojectseo.com/services/claude',
 siteName: 'TheProjectSEO',
 locale: 'en_US',
 type: 'website',
 },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
 label: 'Claude Agency Services',
 title: 'Claude agency services built by a',
 accentWord: 'Claude-native',
 titleAfterAccent: 'team',
 description:
 'We do not consult on the Anthropic stack in theory. We run on it. Our internal operating system is Claude Code CLI, a 67-skill agent system, OpenClaw (12-agent framework), fine-tuned models, and MCP servers wired into every client workflow.',
 ctaPrimaryText: 'Talk to a Claude Expert',
 ctaPrimaryHref: '/contact',
 ctaSecondaryText: 'See What We Build',
 ctaSecondaryHref: '#services',
}

const statsData = [
 { value: '67', label: 'Custom Skills in production' },
 { value: '12', label: 'Agents in OpenClaw framework' },
 { value: '15+', label: 'Clients on the Anthropic stack' },
 { value: '1', label: 'Fine-tuned SEO model (Qwen3.5-27B)' },
]

const builtServices = [
 {
 href: '/services/claude/claude-agency',
 title: 'Claude Agency',
 description: 'Strategic AI-native partner for teams adopting the Anthropic stack. Positioning, roadmap, and execution. not slides.',
 status: 'available' as const,
 },
 {
 href: '/services/claude/claude-code-consulting',
 title: 'Claude Code Consulting',
 description: 'Get your engineering team productive with Claude Code CLI. Onboarding, CLAUDE.md architecture, hooks, and workflow design.',
 status: 'available' as const,
 },
 {
 href: '/services/claude/claude-skills-development',
 title: 'Claude Skills Development',
 description: 'Custom Skills built to Anthropic\'s modular agent pattern. We have 67 in production. your team gets the same depth.',
 status: 'available' as const,
 },
 {
 href: '/services/claude/mcp-server-development',
 title: 'MCP Server Development',
 description: 'Build Model Context Protocol servers that give Claude secure, structured access to your databases, APIs, and internal tools.',
 status: 'available' as const,
 },
 {
 href: '/services/claude/claude-agent-sdk-development',
 title: 'Claude Agent SDK Development',
 description: 'Production-grade agents built on the Claude Agent SDK. Covers agent loops, tool use, prompt caching, extended thinking, and batch processing.',
 status: 'available' as const,
 },
]

const newlyBuiltServices = [
 {
   href: '/services/claude/claude-hooks-development',
   title: 'Claude Code Hooks Development',
   description: 'Pre/post-tool-use hooks that enforce team policies, run QA checks, inject context, and trigger external systems at defined points in the agent loop.',
 },
 {
   href: '/services/claude/claude-plugin-development',
   title: 'Claude Plugin Development',
   description: 'Custom Claude Code Plugins: slash commands, tool definitions, agent templates, and Skill libraries that extend the CLI for your specific team workflows.',
 },
 {
   href: '/services/claude/anthropic-api-consulting',
   title: 'Anthropic API Consulting',
   description: 'Full Anthropic API surface: prompt caching, extended thinking, tool use, batch API, files API, citations, and Claude 3.5 to 4.x migration.',
 },
 {
   href: '/services/claude/claude-prompt-engineering',
   title: 'Claude Prompt Engineering',
   description: 'Production-grade prompt design with evals. System prompts, caching strategy, example-based prompting, structured output, and eval frameworks.',
 },
 {
   href: '/services/claude/claude-workflows',
   title: 'Claude Agentic Workflows',
   description: 'Productized agentic workflows: research agents, content refresh agents, SEO monitoring, n8n orchestration, and automated reporting pipelines.',
 },
 {
   href: '/services/claude/anthropic-model-migration',
   title: 'Anthropic Model Migration',
   description: 'Migrate Claude integrations between model generations safely. Eval, regression detection, prompt adaptation, and staged rollout with rollback plans.',
 },
 {
   href: '/services/claude/claude-rag-systems',
   title: 'Claude RAG Systems',
   description: 'RAG pipelines on the Anthropic stack: Supabase pgvector, hybrid search, Anthropic citations. We run seo_query_kb at 100% citation rate.',
 },
 {
   href: '/services/claude/claude-code-training',
   title: 'Claude Code Training',
   description: 'Structured team enablement for engineering organisations adopting Claude Code. Three curriculum levels from fundamentals to multi-agent systems.',
 },
 {
   href: '/services/claude/agentic-seo-systems',
   title: 'Agentic SEO Systems',
   description: 'Claude-powered SEO operating systems for in-house teams. Reference our 67-skill system, seo_query_kb RAG, and 120 n8n automation workflows.',
 },
]

const caseStudyData = {
 subheading: 'Proof of Concept',
 heading: 'Our internal agency runs entirely on the Anthropic stack.',
 challenge:
 'Managing SEO for 15 clients across B2B SaaS, marketplaces, e-commerce, and travel requires consistent quality at a scale no traditional agency can sustain. Every client has different brand voices, keyword strategies, content pipelines, and reporting cadences.',
 solution:
 'We built an AI-native operating system on the Anthropic stack: 67 Skills covering every SEO function (research, writing, validation, schema, reporting), a 12-agent OpenClaw orchestration framework, a fine-tuned Qwen3.5-27B SEO model wired via MCP, and n8n automation workflows connecting GSC, GA4, BigQuery, and Ahrefs. Claude Code CLI powers every session. The system handles the execution. our team handles the strategy.',
 results: [
 { metric: 'Skills in production', improvement: '67', timeframe: 'Covering every client workflow' },
 { metric: 'Agent orchestration system', improvement: 'OpenClaw', timeframe: '12 specialized agents' },
 { metric: 'Fine-tuned model', improvement: 'Qwen3.5-27B', timeframe: 'SEO specialist, 100% citation rate' },
 { metric: 'Automation coverage', improvement: 'n8n', timeframe: '120 mapped SEO workflows' },
 ],
}

const faqItems = [
 {
 question: 'What makes TheProjectSEO a "Claude-native" agency?',
 answer:
 'We do not just recommend Claude to clients. we operate on it daily. Every client engagement runs through Claude Code CLI sessions. Our team uses 67 custom Skills, OpenClaw (our 12-agent framework), MCP servers wired to Ahrefs and GSC, and a fine-tuned SEO model accessible via our seo_query_kb MCP tool. The stack is not theoretical; it is our actual operating system.',
 },
 {
 question: 'Who are these Claude services for?',
 answer:
 'Primarily CMOs, CTOs, and founders at AI-forward companies who want to adopt the Anthropic stack properly. not just add an AI chatbot. Our clients typically have engineering capacity but need architectural guidance, or have strategy but no build capacity. We fill both gaps.',
 },
 {
 question: 'What is the difference between Claude Code, MCP, Skills, and the Agent SDK?',
 answer:
 'Claude Code is Anthropic\'s terminal-native coding assistant for engineers. MCP (Model Context Protocol) is the standard for giving Claude secure access to external tools and data. Skills are modular, reusable agent capabilities following Anthropic\'s pattern. The Agent SDK is the Python/TypeScript framework for building production multi-agent systems. Each solves a different layer of the AI adoption problem. we help clients figure out which layer they actually need.',
 },
 {
 question: 'Can you help us build something specific, not just consult?',
 answer:
 'Yes. Most of our Claude engagements are build projects, not advisory. We scope the work, write the Skills or MCP servers, test them against your real data, and hand over documented, production-ready code. Ongoing maintenance and iteration are available as a retainer.',
 },
 {
 question: 'Do you offer training for our team alongside the build?',
 answer:
 'Yes. Every build engagement includes a walkthrough and documentation session. For teams that want formal training. structured workshops on Claude Code, prompt engineering, or agent architecture. we offer a dedicated Claude Code Training service covering three curriculum levels from fundamentals to multi-agent systems.',
 },
 {
 question: 'How does pricing work for Claude services?',
 answer:
 'Claude service engagements are project-scoped, not monthly retainers. A typical MCP server build runs 2-4 weeks; a Skills development package for 10-15 custom Skills runs 3-6 weeks. We provide a fixed-scope proposal after a discovery call so there are no surprises. Retainer pricing is available for ongoing iteration and expansion.',
 },
]

/* -------------------------------------------------------------------------- */
/* Available Services Section */
/* -------------------------------------------------------------------------- */

function ServicesSection() {
 return (
 <div id="services" className="bg-paper py-24">
 <Container>
 <div className="text-center mb-16">
 <Subheading>Available Now</Subheading>
 <Heading as="h2" className="mt-2 max-w-3xl mx-auto">
 Five core Claude services ready to deploy.
 </Heading>
 <Lead className="mt-6 max-w-2xl mx-auto">
 Each service is built on direct operating experience with the Anthropic stack. not research, not documentation, not conference slides.
 </Lead>
 </div>

 <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2 xl:grid-cols-3">
 {builtServices.map((service) => (
 <Link
 key={service.href}
 href={service.href}
 className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
 >
 <h3 className="font-heading text-lg font-semibold text-ink group-hover:text-accent mb-3">
 {service.title}
 </h3>
 <p className="text-sm leading-relaxed text-slate mb-5">
 {service.description}
 </p>
 <div className="flex items-center gap-2 text-sm font-medium text-accent">
 Learn more
 <ArrowRight className="size-4" />
 </div>
 </Link>
 ))}
 </div>
 </Container>
 </div>
 )
}

/* -------------------------------------------------------------------------- */
/* New Services Section */
/* -------------------------------------------------------------------------- */

function NewServicesSection() {
 return (
 <div className="bg-cream py-24">
 <Container>
 <div className="text-center mb-16">
 <Subheading>Now Available</Subheading>
 <Heading as="h2" className="mt-2">
 Nine more Claude services, live now.
 </Heading>
 <Lead className="mt-6 max-w-2xl mx-auto">
 Each of these services was built internally before being offered to clients. All nine are in active production use across our 15-client stack.
 </Lead>
 </div>

 <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
 {newlyBuiltServices.map((service) => (
 <Link
 key={service.href}
 href={service.href}
 className="group bg-paper p-8 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
 >
 <h3 className="font-heading text-base font-semibold text-ink group-hover:text-accent mb-3">
 {service.title}
 </h3>
 <p className="text-sm leading-relaxed text-slate mb-5">
 {service.description}
 </p>
 <div className="flex items-center gap-2 text-sm font-medium text-accent">
 Learn more
 <ArrowRight className="size-4" />
 </div>
 </Link>
 ))}
 </div>
 </Container>
 </div>
 )
}

/* -------------------------------------------------------------------------- */
/* Why TPS Section */
/* -------------------------------------------------------------------------- */

function WhyTPSSection() {
 const reasons = [
 {
 title: 'We run on the stack we sell',
 body: 'Every service we offer is something we use internally. The 67-skill system, OpenClaw, the fine-tuned model, the MCP integrations. these are not demos. They run our actual agency. When we build your Skills, we are drawing from a system that handles 15 client workflows daily.',
 },
 {
 title: 'We have made the mistakes already',
 body: 'We know which Claude Code hook patterns fail in CI. We know which MCP server architectures leak tokens. We know where the Agent SDK timeout behavior surprises teams. Our consulting is grounded in production failure, not documentation reading.',
 },
 {
 title: 'We scope work precisely',
 body: 'AI consulting has a reputation for vague deliverables. We work differently. Every engagement produces something specific: a documented CLAUDE.md architecture, a working MCP server with test coverage, a Skills library with eval results. You know exactly what you are paying for before we start.',
 },
 {
 title: 'We measure output, not effort',
 body: 'For each build engagement we define target metrics upfront: agent task completion rate, latency benchmarks, eval pass rates. You should be able to measure whether what we built actually works. That accountability is non-negotiable for us.',
 },
 ]

 return (
 <div className="bg-paper py-24">
 <Container>
 <div className="text-center mb-16">
 <Subheading>Why TheProjectSEO</Subheading>
 <Heading as="h2" className="mt-2">
 Four things that separate us from generic AI consultants.
 </Heading>
 </div>

 <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
 {reasons.map((reason, index) => (
 <div key={index} className="bg-paper p-10">
 <div className="flex items-start gap-4">
 <CheckIcon className="size-5 shrink-0 fill-accent mt-1" />
 <div>
 <h3 className="font-heading text-lg font-semibold text-ink mb-3">
 {reason.title}
 </h3>
 <p className="text-sm leading-relaxed text-slate">{reason.body}</p>
 </div>
 </div>
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
 title="Claude agency frequently asked questions"
 items={faqItems}
 />
 </Container>
 </div>
 )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudePillarPage() {
 return (
 <main className="overflow-hidden">
 <JsonLd
 data={{
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': 'https://theprojectseo.com/services/claude',
 name: 'Claude Agency Services',
 description:
 'Claude agency services built by a team that runs on the Anthropic stack daily. Claude Code CLI, MCP servers, Agent SDK development, custom Skills, and production multi-agent systems.',
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
 hasOfferCatalog: {
 '@type': 'OfferCatalog',
 name: 'Claude & Anthropic Stack Services',
 itemListElement: [
 {
 '@type': 'Offer',
 itemOffered: {
 '@type': 'Service',
 name: 'Claude Code Consulting',
 url: 'https://theprojectseo.com/services/claude/claude-code-consulting',
 },
 },
 {
 '@type': 'Offer',
 itemOffered: {
 '@type': 'Service',
 name: 'MCP Server Development',
 url: 'https://theprojectseo.com/services/claude/mcp-server-development',
 },
 },
 {
 '@type': 'Offer',
 itemOffered: {
 '@type': 'Service',
 name: 'Claude Skills Development',
 url: 'https://theprojectseo.com/services/claude/claude-skills-development',
 },
 },
 {
 '@type': 'Offer',
 itemOffered: {
 '@type': 'Service',
 name: 'Claude Agent SDK Development',
 url: 'https://theprojectseo.com/services/claude/claude-agent-sdk-development',
 },
 },
 ],
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
 <ServicesSection />
 <CaseStudyDark {...caseStudyData} />
 <NewServicesSection />
 <WhyTPSSection />
 <FAQSection />
 <CTAFormSection
 subheading="Ready to Adopt the Anthropic Stack?"
 heading="Tell us what you want to build."
 lead="We scope Claude engagements quickly. One call, a clear proposal, and a fixed-scope build. No retainer commitments until you see what we deliver."
 benefits={[
 'Free 30-minute scoping call',
 'Fixed-scope proposal within 48 hours',
 'Production-ready deliverables, not slides',
 ]}
 submitText="Talk to a Claude Expert"
 />
 <Footer />
 </main>
 )
}
