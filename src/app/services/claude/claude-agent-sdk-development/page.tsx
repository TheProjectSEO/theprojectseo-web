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
 Bot,
 Cpu,
 Repeat2,
 Banknote,
 Network,
 TestTube2,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Claude Agent SDK Development | Build Production-Grade AI Agents | TheProjectSEO',
 description:
 'Build production agents on the Claude Agent SDK. Agent loop design, tool use, prompt caching, extended thinking, batch processing, and multi-agent orchestration. from a team running a 12-agent system in production.',
 alternates: {
 canonical: '/services/claude/claude-agent-sdk-development',
 },
 openGraph: {
 title: 'Claude Agent SDK Development | Production AI Agents | TheProjectSEO',
 description:
 'Claude Agent SDK development: agent loops, tool use, prompt caching, extended thinking, batch API, and multi-agent systems. We run OpenClaw. a 12-agent production framework. on the same stack.',
 url: 'https://theprojectseo.com/services/claude/claude-agent-sdk-development',
 siteName: 'TheProjectSEO',
 locale: 'en_US',
 type: 'website',
 },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
 label: 'Claude Agent SDK Development',
 title: 'Production agents built on the',
 accentWord: 'Claude Agent SDK',
 description:
 'The Claude Agent SDK (Python and TypeScript) is Anthropic\'s framework for building agents that plan, use tools, and complete multi-step tasks autonomously. Building a working prototype is straightforward. Building a production system that handles errors gracefully, manages costs intelligently, passes evals consistently, and runs reliably at scale requires experience. We run OpenClaw. our 12-agent production framework. on this stack every day.',
 ctaPrimaryText: 'Build Your Agent',
 ctaPrimaryHref: '/contact',
 ctaSecondaryText: 'Explore Claude Services',
 ctaSecondaryHref: '/services/claude',
}

const statsData = [
 { value: '12', label: 'Agents in OpenClaw framework' },
 { value: '15+', label: 'Client workflows automated' },
 { value: '67', label: 'Skills wired into agents' },
 { value: '5-6', label: 'Tokens/sec. fine-tuned model latency' },
]

const servicesData = {
 subheading: 'What We Build',
 heading: 'Six agent capabilities we deliver.',
 services: [
 {
 icon: Bot,
 title: 'Agent Loop Design',
 description:
 'The agent loop. the cycle of perceive, plan, act, observe. is the core of any Claude agent. Getting it right means defining clear stopping conditions, handling ambiguous states, and knowing when to escalate to human review vs. retry autonomously. Poor loop design is the primary source of runaway costs and unreliable behavior.',
 features: [
 'Loop architecture and state management',
 'Stopping condition design',
 'Error classification and retry logic',
 'Human-in-the-loop escalation patterns',
 ],
 },
 {
 icon: Cpu,
 title: 'Tool Use & Function Calling',
 description:
 'Agents become powerful when they can act. search the web, query a database, write a file, call an API, send a message. We design tool schemas that Claude calls reliably, handle parallel tool calls, manage result parsing, and implement tool chaining for complex workflows.',
 features: [
 'Tool schema design and documentation',
 'Parallel tool call orchestration',
 'Result validation and error recovery',
 'Tool chaining for multi-step workflows',
 ],
 },
 {
 icon: Banknote,
 title: 'Prompt Caching',
 description:
 'Prompt caching is one of the highest-value optimizations in Claude API usage. Long system prompts, instruction sets, reference documents, and conversation context can be cached, reducing cost by up to 90% and latency by 80% for cache hits. We design cache-friendly prompt architectures and monitor cache hit rates to ensure you get the benefit in practice.',
 features: [
 'Cache-optimal prompt structure design',
 'Cache key management',
 'Hit rate monitoring and optimization',
 'Cost savings measurement and reporting',
 ],
 },
 {
 icon: Repeat2,
 title: 'Extended Thinking',
 description:
 'Claude\'s extended thinking mode lets the model reason through complex problems before producing a final answer. It is substantially more accurate for multi-step reasoning, code generation, and tasks requiring planning. We scope which workflows benefit from extended thinking (and which ones do not. it is slower and more expensive) and integrate it correctly.',
 features: [
 'Use case suitability assessment',
 'Budget allocation for thinking tokens',
 'Streaming thinking output handling',
 'Quality improvement measurement vs. standard mode',
 ],
 },
 {
 icon: Network,
 title: 'Multi-Agent Orchestration',
 description:
 'Complex tasks benefit from specialized agents. one for research, one for writing, one for validation. Our OpenClaw framework coordinates 12 specialized agents. We apply the same patterns to client builds: orchestrator agents that delegate to specialists, parallel agent runs for speed, state passing between agents, and fault isolation so one agent failure does not cascade.',
 features: [
 'Orchestrator and specialist agent design',
 'Parallel agent execution',
 'State and context passing between agents',
 'Fault isolation and partial failure recovery',
 ],
 },
 {
 icon: TestTube2,
 title: 'Evaluation & Testing',
 description:
 'Production agents need evals: automated test suites that measure output quality across a representative sample of real inputs. We design eval frameworks with pass/fail criteria and regression tests that run on every agent update, covering latency, cost, and output quality. Agents that cannot be measured cannot be trusted in production.',
 features: [
 'Eval dataset design from real examples',
 'Pass/fail criteria definition',
 'Regression test automation',
 'Latency and cost benchmarking',
 ],
 },
 ],
}

const processSteps = [
 {
 number: '01',
 title: 'Task and workflow specification',
 description:
 'We work with your team to define the agent\'s scope precisely: what triggers it, what it does at each step, what a correct output looks like, what the acceptable failure modes are, and where human review is required. Agents built to a vague spec fail in vague ways. We insist on precision before we write code.',
 },
 {
 number: '02',
 title: 'Architecture and cost modeling',
 description:
 'Before implementation, we design the agent architecture and model the expected API costs. What model tier? Where does caching apply? Which tasks justify extended thinking? What is the expected token usage per run at the target volume? Teams that skip cost modeling get surprise bills. We eliminate the surprises.',
 },
 {
 number: '03',
 title: 'Build with progressive testing',
 description:
 'We build incrementally: core agent loop first, basic tool use, then progressive complexity. Each stage is tested against real inputs before the next layer is added. This approach catches architectural problems early, when they are cheap to fix, rather than after the full system is built.',
 },
 {
 number: '04',
 title: 'Eval framework and production handover',
 description:
 'We build the eval framework alongside the agent, not after. At handover, you receive the agent code, the eval suite, a cost monitoring setup, and a runbook covering common failure modes and how to debug them. Your team can operate and extend the agent without us.',
 },
]

const agentPatternsData = {
 subheading: 'Agent Architecture Patterns',
 heading: 'The patterns behind reliable production agents.',
 lead: 'Most agent failures trace to a small set of architectural mistakes. These are the patterns we apply to prevent them.',
 cards: [
 {
 title: 'Minimal footprint principle',
 items: [
 'Request only the permissions the task requires',
 'Prefer reversible actions over irreversible ones',
 'Confirm before irreversible writes',
 'Log every action with full context',
 'Surface ambiguity to humans, do not guess',
 ],
 },
 {
 title: 'Structured output design',
 items: [
 'Define the output schema before the system prompt',
 'Use JSON mode for all structured data',
 'Validate every output against the schema',
 'Include confidence scores where applicable',
 'Never let the agent self-report success without validation',
 ],
 },
 {
 title: 'Cost control patterns',
 items: [
 'Cache long system prompts and reference docs',
 'Use Haiku for classification, Sonnet for generation',
 'Set token budgets per task tier',
 'Monitor cost per run, not just total spend',
 'Alert on budget overruns before they compound',
 ],
 },
 {
 title: 'Eval-driven development',
 items: [
 'Define eval criteria before writing the agent',
 'Sample at least 50 real examples per use case',
 'Run evals on every prompt change',
 'Track pass rate over time, not just current run',
 'Fail builds that drop below the quality threshold',
 ],
 },
 ],
}

const caseStudyData = {
 subheading: 'OpenClaw in Production',
 heading: 'How a 12-agent system runs 15 client SEO workflows daily.',
 challenge:
 'High-quality SEO work requires coordinated execution across research, content strategy, technical analysis, and reporting. A single agent handling all of these functions produces shallow results. A team of human specialists is expensive and slow. There had to be a better architecture.',
 solution:
 'We built OpenClaw: a 12-agent Claude-based orchestration system where each agent is a specialist. The orchestrator receives a client task, decomposes it, routes subtasks to the right specialist agent (researcher, writer, validator, schema generator, reporter), collects results, and produces the final deliverable. Agents run in parallel where the task structure allows. Costs are managed through aggressive prompt caching and model tier selection. Quality is measured through an 8-dimension automated scoring system.',
 results: [
 { metric: 'Specialized agents', improvement: '12', timeframe: 'Each with defined scope and evals' },
 { metric: 'Parallel agent runs', improvement: 'Yes', timeframe: 'For independent subtask clusters' },
 { metric: 'Quality validation', improvement: '8-dim', timeframe: 'Automated, every output' },
 { metric: 'Client workflows automated', improvement: '15+', timeframe: 'Across B2B SaaS, e-commerce, travel' },
 ],
}

const faqItems = [
 {
 question: 'What is the Claude Agent SDK?',
 answer:
 'The Claude Agent SDK is Anthropic\'s Python and TypeScript library for building AI agents on top of Claude. It provides the primitives for agent loops, tool use, multi-turn conversations, and integrations with external systems. It is the programmatic alternative to Claude Code CLI. where Claude Code is for interactive developer use, the Agent SDK is for building applications and automation systems that run agents in production.',
 },
 {
 question: 'When does a workflow need an agent vs. a simple API call?',
 answer:
 'A simple API call is appropriate when the task is single-step, the input and output are fully specified, and no tool use or intermediate reasoning is needed. An agent is appropriate when the task has multiple steps where each step depends on the result of the previous one, when the system needs to call external tools, when the path through the task is not fully predictable in advance, or when the task requires planning before acting. Most production AI use cases that go beyond content generation need agents.',
 },
 {
 question: 'What is prompt caching and how much does it save?',
 answer:
 'Prompt caching is an Anthropic API feature that stores the key-value cache of a prompt prefix (your system prompt, instructions, reference documents) so it does not need to be reprocessed on subsequent calls. For agents with long system prompts, this reduces cost by up to 90% and latency by up to 80% for cache hits. The savings are significant at scale. a team sending 1,000 agent calls per day can reduce API spend by 60-80% with proper cache design.',
 },
 {
 question: 'What is extended thinking and when should we use it?',
 answer:
 'Extended thinking gives Claude a dedicated token budget to reason through a problem before producing its final response. It substantially improves performance on tasks requiring multi-step reasoning, planning, architecture design, and complex code generation. The tradeoff is cost (thinking tokens are billed) and latency (reasoning takes time). We use it selectively for tasks where accuracy matters more than speed.',
 },
 {
 question: 'Can agents handle failures gracefully?',
 answer:
 'With proper design, yes. We implement failure classification (tool error vs. API error vs. logical error), retry logic with exponential backoff, partial success handling, and escalation to human review for failures the agent cannot resolve. The key is designing the error states explicitly before building. agents that encounter errors they were not designed to handle tend to loop or produce garbage output.',
 },
 {
 question: 'How do you evaluate agent quality before production?',
 answer:
 'We build an eval dataset from 50-100 real examples of the target task and define explicit pass/fail criteria for each output dimension. The eval runs on every significant code change. We use automated scoring where the output has a checkable property, and LLM-as-judge scoring where quality requires interpretation. Agents go to production only after hitting the agreed threshold: typically an 85-90% pass rate.',
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
 <Subheading>How We Build Agents</Subheading>
 <Heading as="h2" className="mt-2">
 Four stages from spec to production.
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
 title="Claude Agent SDK development frequently asked questions"
 items={faqItems}
 />
 </Container>
 </div>
 )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeAgentSDKDevelopmentPage() {
 return (
 <main className="overflow-hidden">
 <JsonLd
 data={{
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': 'https://theprojectseo.com/services/claude/claude-agent-sdk-development',
 name: 'Claude Agent SDK Development',
 description:
 'Production agent development on the Claude Agent SDK. Agent loop design, tool use, prompt caching, extended thinking, batch processing, multi-agent orchestration, and eval framework design. We run OpenClaw. a 12-agent production system. on the same stack.',
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
 <FeatureCardsSection {...agentPatternsData} />
 <FAQSection />
 <CTAFormSection
 subheading="Ready to Build a Production Agent?"
 heading="Tell us what you want to automate."
 lead="We scope agent builds quickly. A 30-minute call is enough to determine whether what you want is feasible, what it will cost to run, and how long it will take to build."
 benefits={[
 'Free cost modeling before we start',
 'Eval framework included in every build',
 'Full ownership. your code, your infrastructure',
 ]}
 submitText="Build Your Agent"
 />
 <Footer />
 </main>
 )
}
