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
 Terminal,
 FileCode,
 Zap,
 ShieldCheck,
 Users,
 GitMerge,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Claude Code Consulting | Adopt the Terminal-Native AI Engineer | TheProjectSEO',
 description:
 'Claude Code consulting for engineering teams. CLAUDE.md architecture, hooks, permissions, workflow design, and team onboarding from an agency that runs every client session in Claude Code CLI.',
 alternates: {
 canonical: '/services/claude/claude-code-consulting',
 },
 openGraph: {
 title: 'Claude Code Consulting. Terminal-Native AI Adoption | TheProjectSEO',
 description:
 'Claude Code consulting: CLAUDE.md design, hook configuration, permissions strategy, and team onboarding. From an agency that runs 15 client workflows entirely inside Claude Code CLI.',
 url: 'https://theprojectseo.com/services/claude/claude-code-consulting',
 siteName: 'TheProjectSEO',
 locale: 'en_US',
 type: 'website',
 },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
 label: 'Claude Code Consulting',
 title: 'Claude Code consulting. adopt the',
 accentWord: 'terminal-native',
 titleAfterAccent: 'AI engineer',
 description:
 'Claude Code is Anthropic\'s terminal-native coding agent. It reads your codebase, executes multi-step tasks, manages file changes, runs tests, and works with your git history. All of this from your terminal, without a separate editor or IDE. Most engineering teams that try it are productive within hours. Most teams that try without guidance waste those hours on the wrong patterns. We run every client engagement inside Claude Code. We know what works.',
 ctaPrimaryText: 'Start Claude Code Adoption',
 ctaPrimaryHref: '/contact',
 ctaSecondaryText: 'See All Claude Services',
 ctaSecondaryHref: '/services/claude',
}

const statsData = [
 { value: '15+', label: 'Client workflows in Claude Code' },
 { value: '67', label: 'Skills built via Claude Code CLI' },
 { value: '4', label: 'Hours average team onboarding' },
 { value: '0', label: 'Shortcut patterns. we teach it right' },
]

const servicesData = {
 subheading: 'What We Cover',
 heading: 'Six areas where guidance saves weeks.',
 lead: 'Claude Code is powerful out of the box. The teams that get 10x value from it invest 4 hours upfront getting the architecture right. We provide that foundation.',
 services: [
 {
 icon: FileCode,
 title: 'CLAUDE.md Architecture',
 description:
 'The CLAUDE.md file is Claude Code\'s context layer. it tells the model who it is, what codebase it is in, what rules apply, and what tools are available. A well-designed CLAUDE.md reduces token waste, improves output quality, and makes every session feel like working with someone who already knows the project.',
 features: [
 'Project identity and context design',
 'Tool declarations and MCP references',
 'Rule hierarchy (global vs. project vs. session)',
 'Sensitive path exclusions and security rules',
 ],
 },
 {
 icon: Terminal,
 title: 'Hook Configuration',
 description:
 'Hooks let you run automated logic before and after Claude Code actions. Pre-tool hooks can validate, block, or log. Post-tool hooks can trigger downstream tasks, format output, or update state. The teams using hooks see 30-50% fewer manual follow-up steps per session.',
 features: [
 'Pre-tool validation hooks',
 'Post-tool automation hooks',
 'Session logging and audit trails',
 'Integration hooks for Slack, Jira, and CI',
 ],
 },
 {
 icon: ShieldCheck,
 title: 'Permissions Strategy',
 description:
 'Claude Code\'s permission system determines which tools, directories, and commands are available in which contexts. Teams that skip this end up with either over-permissive sessions (security risk) or over-restrictive sessions (constant interruptions). We design the right tiered permission structure for your environment.',
 features: [
 'Global vs. project-level permission design',
 'Read-only vs. write scope definitions',
 'Sensitive data exclusions',
 'CI/CD permission profiles',
 ],
 },
 {
 icon: Zap,
 title: 'Workflow Design',
 description:
 'Claude Code works best when tasks are scoped properly and context is structured well. We help teams learn the difference between a task Claude Code handles in one pass and one that needs to be broken into smaller sub-tasks. and how to design prompts and CLAUDE.md files that make the difference automatic.',
 features: [
 'Task decomposition patterns',
 'Context window management',
 'Multi-file operation strategies',
 'Long-running task checkpointing',
 ],
 },
 {
 icon: GitMerge,
 title: 'CI/CD Integration',
 description:
 'Claude Code can run in non-interactive mode inside GitHub Actions, GitLab CI, or custom pipelines. We help teams configure automated code review, test generation, and documentation update workflows that run on every PR. without requiring human interaction at each step.',
 features: [
 'Non-interactive mode configuration',
 'GitHub Actions / GitLab CI setup',
 'Automated PR review workflows',
 'Cost and token usage controls',
 ],
 },
 {
 icon: Users,
 title: 'Team Onboarding',
 description:
 'Individual adoption and team-wide adoption are different problems. We run structured onboarding sessions that get 5-15 engineers productive in Claude Code simultaneously, covering the patterns that matter and the anti-patterns that waste time. Typically a 4-hour intensive session with follow-up office hours.',
 features: [
 '4-hour team onboarding workshop',
 'Hands-on with your actual codebase',
 'Pair sessions for complex use cases',
 '30-day follow-up office hours access',
 ],
 },
 ],
}

const processSteps = [
 {
 number: '01',
 title: 'Codebase and workflow audit',
 description:
 'We review your existing development workflow, repo structure, CI/CD setup, and current AI tooling. We identify the top five use cases where Claude Code will deliver the most immediate value. not the most impressive demo use case, but the most productive one for your team specifically.',
 },
 {
 number: '02',
 title: 'CLAUDE.md and permissions architecture',
 description:
 'We design and write your CLAUDE.md files (global and project-level), configure the permission schema, set up MCP connections for any relevant integrations, and write the initial hook library. This is delivered as files in your repo, not documentation.',
 },
 {
 number: '03',
 title: 'Team onboarding session',
 description:
 'A structured 4-hour workshop with your engineering team. We cover the fundamentals, walk through your specific CLAUDE.md architecture, run hands-on exercises with your actual codebase, and address the questions that always come up in the first two weeks of adoption.',
 },
 {
 number: '04',
 title: '30-day follow-up',
 description:
 'Teams do not run into the hard problems on day one. We schedule two 30-minute check-in calls during the first month to address issues that surface in real use. Most teams find they need one. We include both just in case.',
 },
]

const caseStudyData = {
 subheading: 'Our Internal Proof',
 heading: 'How we run 15 client engagements entirely inside Claude Code CLI.',
 challenge:
 'An SEO agency managing 15 clients across B2B SaaS, e-commerce, and marketplaces needs consistent, high-quality output across dozens of weekly tasks. keyword research, content briefs, technical audits, schema markup, reporting. Every task requires deep client context. Switching between clients mid-session is expensive. Generic prompting produces generic results.',
 solution:
 'We designed a CLAUDE.md architecture with two layers: a global agency context file (team roles, SOPs, quality standards) and per-client CLAUDE.md files (brand voice, keyword strategy, competitive positioning, active deliverables). Hooks automate logging, validate output scores, and trigger downstream n8n workflows. MCP servers connect Claude Code to Ahrefs, Google Search Console, and BigQuery. Every session starts with full context. No warm-up time. No context re-explaining.',
 results: [
 { metric: 'Client CLAUDE.md files', improvement: '15', timeframe: 'One per client, always current' },
 { metric: 'Hook automations', improvement: '8', timeframe: 'Validation, logging, downstream triggers' },
 { metric: 'MCP integrations', improvement: '4', timeframe: 'Ahrefs, GSC, BigQuery, n8n' },
 { metric: 'Context re-setup time', improvement: '0 min', timeframe: 'Per session, vs. 10-15 min before' },
 ],
}

const pitfallsData = [
 {
 pitfall: 'Skipping CLAUDE.md entirely',
 consequence: 'Claude Code operates without project context. Every session requires extensive re-explaining. Output quality is generic. Teams conclude Claude Code "does not work for our codebase" and abandon it.',
 },
 {
 pitfall: 'Over-permissive sessions',
 consequence: 'Claude Code can modify any file, run any command, and access any directory. Without a proper permissions schema, this creates security risk in production repos and unpredictable behavior in complex codebases.',
 },
 {
 pitfall: 'Single-turn task design',
 consequence: 'Teams write prompts as if they were writing a single ChatGPT message. Claude Code is built for multi-step tasks. Teams that do not learn the task decomposition patterns get shallow, one-pass results.',
 },
 {
 pitfall: 'No cost controls',
 consequence: 'Claude Code sessions with large context windows are expensive. Teams without token budgets and session limits quickly accumulate unexpected API costs. We configure usage controls from day one.',
 },
]

const faqItems = [
 {
 question: 'What is Claude Code exactly?',
 answer:
 'Claude Code is Anthropic\'s terminal-based coding agent. It runs as a CLI tool inside your existing development environment and handles complex multi-step programming tasks with full project awareness: reading the codebase, executing shell commands, modifying files, running tests, and managing git operations. It also supports a non-interactive mode designed for CI/CD pipelines.',
 },
 {
 question: 'How is Claude Code different from GitHub Copilot?',
 answer:
 'Copilot is an autocomplete tool that suggests code as you type. Claude Code is a task-completion agent. you give it a goal, and it figures out the steps, reads the relevant files, makes the changes, and runs verification. The difference in scope is significant: Copilot helps you write a function; Claude Code can refactor a module, add tests, update documentation, and create a PR description.',
 },
 {
 question: 'We already use Cursor. Should we switch to Claude Code?',
 answer:
 'They address overlapping but distinct use cases. Cursor is a full IDE replacement with good autocomplete. Claude Code is a task-oriented CLI agent that works in your existing terminal and integrates with your existing editor. Some teams run both. Cursor for inline completion, Claude Code for larger task execution. We help you decide what makes sense given your workflow.',
 },
 {
 question: 'What is CLAUDE.md and why does it matter so much?',
 answer:
 'CLAUDE.md is a markdown file in your project root that Claude Code reads at the start of every session. It contains the context Claude needs to work effectively in your codebase: project description, coding conventions, tool commands, sensitive paths, team-specific rules. A well-designed CLAUDE.md eliminates the need to re-explain your codebase every session and produces measurably better output quality. It is the single highest-value configuration decision in Claude Code adoption.',
 },
 {
 question: 'How much does Claude Code cost to run?',
 answer:
 'Claude Code uses the Claude API (Sonnet or Opus depending on task complexity). Costs depend on context window size, session length, and frequency. A typical engineering team running 2-4 hours of Claude Code daily spends $200-$600 per engineer per month. We configure cost controls and monitoring as part of every onboarding engagement so you know exactly what you are spending.',
 },
 {
 question: 'Can Claude Code work with our internal proprietary codebase?',
 answer:
 'Yes. Claude Code runs locally in your terminal. Your code never leaves your machine unless you explicitly share it via API calls. For teams with strict data policies, we can configure Claude Code to route through Anthropic\'s Amazon-hosted or Google Cloud endpoints, which keep data within your existing cloud environment and comply with enterprise data residency requirements.',
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
 <Subheading>Our Engagement Process</Subheading>
 <Heading as="h2" className="mt-2">
 From zero to productive in four steps.
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
/* Common Pitfalls Section */
/* -------------------------------------------------------------------------- */

function PitfallsSection() {
 return (
 <div className="bg-paper py-24">
 <Container>
 <div className="text-center mb-16">
 <Subheading>What Goes Wrong Without Guidance</Subheading>
 <Heading as="h2" className="mt-2">
 Four adoption mistakes that kill teams&apos; Claude Code trials.
 </Heading>
 <Lead className="mt-6 max-w-2xl mx-auto">
 Teams that fail with Claude Code almost always make one of these four mistakes. All four are preventable. All four are what our consulting engagement specifically addresses.
 </Lead>
 </div>

 <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
 {pitfallsData.map((item, index) => (
 <div key={index} className="bg-paper p-8">
 <h3 className="font-heading text-base font-semibold text-ink mb-3">
 {item.pitfall}
 </h3>
 <p className="text-sm leading-relaxed text-slate">{item.consequence}</p>
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
 title="Claude Code consulting frequently asked questions"
 items={faqItems}
 />
 </Container>
 </div>
 )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeCodeConsultingPage() {
 return (
 <main className="overflow-hidden">
 <JsonLd
 data={{
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': 'https://theprojectseo.com/services/claude/claude-code-consulting',
 name: 'Claude Code Consulting',
 description:
 'Claude Code consulting for engineering teams. CLAUDE.md architecture, hook configuration, permissions strategy, CI/CD integration, and team onboarding from a team that runs every client engagement inside Claude Code CLI.',
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
 <PitfallsSection />
 <FAQSection />
 <CTAFormSection
 subheading="Ready to Adopt Claude Code?"
 heading="Get your team productive in one week."
 lead="We design your CLAUDE.md architecture, configure hooks and permissions, and run a hands-on team onboarding. Most teams are fully self-sufficient within 30 days."
 benefits={[
 'CLAUDE.md architecture delivered in your repo',
 '4-hour team onboarding workshop',
 '30-day follow-up office hours',
 ]}
 submitText="Start Claude Code Adoption"
 />
 <Footer />
 </main>
 )
}
