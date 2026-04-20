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
} from '@/components/service-page-sections'
import { CheckIcon } from '@/components/check-icon'
import {
 Brain,
 GitBranch,
 Layers,
 Target,
 Workflow,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Claude Agency | AI-Native Strategy Partner | TheProjectSEO',
 description:
 'Your Claude agency. an AI-native strategy partner that runs on Claude Code, MCP servers, and a 67-skill agent system. Strategy, architecture, and execution for teams going AI-native.',
 alternates: {
 canonical: '/services/claude/claude-agency',
 },
 openGraph: {
 title: 'Claude Agency. AI-Native Strategy Partner | TheProjectSEO',
 description:
 'What a Claude agency actually means: a partner who runs the same stack they build for you. Claude Code, MCP, Agent SDK, custom Skills. in production, not in a slide deck.',
 url: 'https://theprojectseo.com/services/claude/claude-agency',
 siteName: 'TheProjectSEO',
 locale: 'en_US',
 type: 'website',
 },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
 label: 'Claude Agency',
 title: 'Your Claude agency. an',
 accentWord: 'AI-native',
 titleAfterAccent: 'strategy partner',
 description:
 'Most AI consulting firms advise on tools they have never shipped in production. We are the opposite. TheProjectSEO runs entirely on the Anthropic stack. Claude Code CLI, 67 custom Skills, OpenClaw (our 12-agent framework), MCP integrations, and n8n automation. serving 15 clients daily. That operating experience is what you hire when you engage us as your Claude agency.',
 ctaPrimaryText: 'Start the Conversation',
 ctaPrimaryHref: '/contact',
 ctaSecondaryText: 'Explore Claude Services',
 ctaSecondaryHref: '/services/claude',
}

const statsData = [
 { value: '67', label: 'Custom Skills operating daily' },
 { value: '15+', label: 'Active clients on the stack' },
 { value: '12', label: 'Agents in OpenClaw system' },
 { value: '100%', label: 'Citation rate, fine-tuned model' },
]

const whatWeDoData = {
 subheading: 'What a Claude Agency Does',
 heading: 'Three ways we work with AI-forward teams.',
 lead: 'The right engagement depends on where your team is in the adoption curve. We work across all three stages.',
 services: [
 {
 icon: Brain,
 title: 'Strategy & Architecture',
 description:
 'For teams that have executive buy-in for AI adoption but need a clear blueprint. We map your existing workflows, identify the 20% of processes that will get 80% of the value from Claude, and design the stack architecture. which tools, which patterns, which sequence.',
 features: [
 'AI readiness assessment (2-day engagement)',
 'Stack architecture document',
 'Workflow prioritization framework',
 'Build-vs-buy analysis for each component',
 ],
 },
 {
 icon: GitBranch,
 title: 'Build & Implement',
 description:
 'For teams that know what they want and need someone to build it. We scope, build, test, and hand over production-ready MCP servers, Skills libraries, and agent systems. Everything is documented and owned by your team from day one.',
 features: [
 'MCP server development',
 'Custom Skills library (10-50 Skills)',
 'Agent SDK application build',
 'Claude Code onboarding for engineering team',
 ],
 },
 {
 icon: Layers,
 title: 'Ongoing Partnership',
 description:
 'For teams that want a dedicated Claude partner as they expand their AI capabilities. Monthly retainer covering iteration on the stack, new Skills as new workflows emerge, performance monitoring, and model updates.',
 features: [
 'Monthly Skills and agent updates',
 'Performance monitoring and eval tracking',
 'Priority access to new Anthropic features',
 'Dedicated Slack channel with the build team',
 ],
 },
 {
 icon: Target,
 title: 'Positioning & Messaging',
 description:
 'For AI companies and AI-forward SaaS products that want to communicate their Anthropic stack integration to customers. We help translate technical architecture into buyer-facing positioning that earns trust.',
 features: [
 'Claude partnership positioning',
 'Technical capability messaging',
 'Website and sales material copy',
 'Competitive differentiation framework',
 ],
 },
 {
 icon: Workflow,
 title: 'Workflow Automation',
 description:
 'Claude alone handles generation. Claude wired into n8n, connected to your CRM, BigQuery, and Slack via MCP, running on scheduled triggers. that is a different category of productivity. We build that end-to-end system.',
 features: [
 'n8n + Claude workflow architecture',
 'MCP integrations for your tool stack',
 'Automated reporting and monitoring',
 'Webhook and trigger configuration',
 ],
 },
 ],
}

const processSteps = [
 {
 number: '01',
 title: 'Discovery. understand your workflow reality',
 description:
 'One 60-minute call covering your current tools, team structure, highest-friction workflows, and AI adoption history. We come in with specific questions, not a generic intake form. Within 48 hours you receive a scoping document outlining what we recommend and why.',
 },
 {
 number: '02',
 title: 'Architecture. design before you build',
 description:
 'We map the full stack before writing a line of code. Which workflows get Skills, which need MCP connections, what the agent loop looks like, how data flows through the system. Teams that skip this step rebuild 60% of their implementation. We do it right the first time.',
 },
 {
 number: '03',
 title: 'Build. production code, not prototypes',
 description:
 'We build against real data from your systems. MCP servers get tested against your actual API endpoints. Skills get evaluated against your real content and edge cases. Agent loops run against your actual workflows, not synthetic scenarios. The handover is tested code, not a proof of concept.',
 },
 {
 number: '04',
 title: 'Handover & enablement. your team owns it',
 description:
 'Every engagement closes with documentation, a walkthrough session, and a runbook. Your team can modify and extend the system without us. If you want ongoing iteration, that is a separate retainer. but dependency on us is never the goal.',
 },
]

const caseStudyData = {
 subheading: 'The Proof is Internal',
 heading: 'How our own 67-skill Claude system works. and why it matters for your team.',
 challenge:
 'Running SEO for 15 clients across five industries requires the same quality, the same brand knowledge, and the same research rigor every time. whether the task is a content brief for a B2B SaaS company or a schema audit for a travel marketplace. A team of six cannot do this consistently with general-purpose tools.',
 solution:
 'We built a Claude-native operating system: CLAUDE.md context files for every client, 67 Skills covering every function from keyword research to schema generation, a fine-tuned Qwen3.5-27B model accessible via our seo_query_kb MCP tool, OpenClaw (our 12-agent orchestration framework), and n8n workflows connecting Google Search Console, GA4, BigQuery, and Ahrefs. Every session runs through Claude Code CLI. Every output is validated through our anti-AI content scoring system before delivery.',
 results: [
 { metric: 'Client workflows automated', improvement: '15+', timeframe: 'Across 5 industries' },
 { metric: 'Skills deployed', improvement: '67', timeframe: 'All in active production use' },
 { metric: 'Model knowledge base', improvement: '100%', timeframe: 'Citation-grounded SEO answers' },
 { metric: 'Content validation', improvement: '8-dim', timeframe: 'Automated anti-AI scoring' },
 ],
}

const whoIsThisForData = [
 {
 profile: 'CMOs at AI-forward companies',
 problem: 'You have budget for AI tooling but no internal expertise to adopt the Anthropic stack properly. Every vendor tells you they can do it. Few have shipped anything real.',
 fit: 'We scope what actually makes sense for your marketing workflows and build it. No shelfware.',
 },
 {
 profile: 'CTOs evaluating Anthropic tools',
 problem: 'The documentation is good. The models are excellent. But the architectural decisions. which patterns to use, how to structure prompts at scale, when to use Claude Code vs the Agent SDK. require experience that Google cannot give you.',
 fit: 'We have made those decisions in production. Our consulting is grounded in code that runs, not whitepapers.',
 },
 {
 profile: 'Founders building with Claude',
 problem: 'You are building a product that uses Claude. You want to get the architecture right from the start: prompt caching, tool use patterns, multi-turn state management, evaluation frameworks. One wrong early decision costs months.',
 fit: 'We help you get the foundation right in week one, not rewrite it in week eight.',
 },
 {
 profile: 'Agencies adding Claude capabilities',
 problem: 'Your clients are asking about AI. You want to add Claude-native services to your offering. but you need to actually understand what you are selling before you sell it.',
 fit: 'White-label Claude agency services are available for qualified agency partners. Let us build the capability; you deliver it.',
 },
]

const faqItems = [
 {
 question: 'What does "Claude agency" mean exactly?',
 answer:
 'It means we are an agency whose primary operating environment is the Anthropic stack. We use Claude Code CLI as our development environment, build on the Agent SDK for automation systems, and have a live production skill library of 67 custom Skills. When we say we are Claude-native, it is verifiable. We can show you the system that runs our own business.',
 },
 {
 question: 'How is this different from a general AI consulting firm?',
 answer:
 'Most AI consultants advise on tools they read about. We build tools we use. There is a meaningful difference between a team that has studied Claude\'s documentation and a team that has shipped 67 production Skills, debugged MCP server timeouts at 2am, and dealt with Agent SDK edge cases in real workflows. We are the latter.',
 },
 {
 question: 'What size companies do you work with?',
 answer:
 'Typically Series A through Series C companies with 20-200 person teams who have committed to AI adoption and want to do it properly. We also work with larger enterprise teams running pilot programs and smaller AI-native startups that want the architecture right from day one. The common thread is seriousness about production deployment. not experimentation for its own sake.',
 },
 {
 question: 'Do you sign NDAs and work under enterprise procurement?',
 answer:
 'Yes. Standard NDA, SOW-based engagements, invoice terms up to Net-30, and we can work through your procurement system. For enterprise builds we can also discuss IP assignment and source code escrow arrangements.',
 },
 {
 question: 'What is the minimum engagement size?',
 answer:
 'Strategy and architecture engagements start at $4,500 (2-day scoping and blueprint). Build engagements are scoped per project. a single MCP server typically runs $5,000-$12,000 depending on complexity. Retainer partnerships start at $3,500 per month. We do not do free audits or speculative work.',
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
 <Subheading>How We Work</Subheading>
 <Heading as="h2" className="mt-2">
 Four stages, no ambiguity.
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
/* Who Is This For Section */
/* -------------------------------------------------------------------------- */

function WhoIsThisForSection() {
 return (
 <div className="bg-paper py-24">
 <Container>
 <div className="text-center mb-16">
 <Subheading>Who This Is For</Subheading>
 <Heading as="h2" className="mt-2">
 Four profiles we work with regularly.
 </Heading>
 </div>

 <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
 {whoIsThisForData.map((item, index) => (
 <div key={index} className="bg-paper p-10">
 <h3 className="font-heading text-lg font-semibold text-ink mb-4">
 {item.profile}
 </h3>
 <div className="mb-4">
 <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">The problem</p>
 <p className="text-sm leading-relaxed text-slate">{item.problem}</p>
 </div>
 <div>
 <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent mb-2">How we help</p>
 <p className="text-sm leading-relaxed text-slate">{item.fit}</p>
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

export default function ClaudeAgencyPage() {
 return (
 <main className="overflow-hidden">
 <JsonLd
 data={{
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': 'https://theprojectseo.com/services/claude/claude-agency',
 name: 'Claude Agency. AI-Native Strategy Partner',
 description:
 'Claude agency services for CMOs, CTOs, and founders adopting the Anthropic stack. Strategy, architecture, build, and ongoing partnership from a team that runs Claude Code and a 67-skill agent system in daily production.',
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
 <ServicesGrid {...whatWeDoData} />
 <ProcessSection />
 <CaseStudyDark {...caseStudyData} />
 <WhoIsThisForSection />
 <FAQSection />
 <CTAFormSection
 subheading="Ready to Go Claude-Native?"
 heading="Let's scope your engagement."
 lead="One call, a specific proposal, and a fixed-scope build. We do not do vague retainers for vague outcomes."
 benefits={[
 'Free 60-minute discovery and scoping call',
 'Written proposal within 48 hours',
 'Fixed-scope builds. no scope creep',
 ]}
 submitText="Start the Conversation"
 />
 <Footer />
 </main>
 )
}
