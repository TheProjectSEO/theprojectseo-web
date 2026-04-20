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
 Package,
 Sliders,
 FlaskConical,
 BookOpen,
 RefreshCw,
 LayoutGrid,
} from 'lucide-react'

export const metadata: Metadata = {
 title: 'Custom Claude Skills Development | Build Modular AI Capabilities | TheProjectSEO',
 description:
 'Build custom Claude Skills. modular, reusable AI capabilities following Anthropic\'s Skills pattern. We have 67 Skills in production. Your team gets the same depth, built for your specific workflows.',
 alternates: {
 canonical: '/services/claude/claude-skills-development',
 },
 openGraph: {
 title: 'Custom Claude Skills Development | TheProjectSEO',
 description:
 'Custom Skills built to Anthropic\'s modular agent pattern. 67 in production across SEO, content, and automation workflows. We build yours to the same standard.',
 url: 'https://theprojectseo.com/services/claude/claude-skills-development',
 siteName: 'TheProjectSEO',
 locale: 'en_US',
 type: 'website',
 },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
 label: 'Claude Skills Development',
 title: 'Custom Claude Skills. built for',
 accentWord: 'your',
 titleAfterAccent: 'specific workflow',
 description:
 'A Claude Skill is a modular, reusable agent capability: a structured system prompt plus workflow logic that gives Claude a specific, repeatable function. Our agency runs on 67 custom Skills. They handle everything from SEO keyword research to content validation to schema markup generation. We build them for clients with the same depth and specificity we use internally.',
 ctaPrimaryText: 'Build Your Skill Library',
 ctaPrimaryHref: '/contact',
 ctaSecondaryText: 'Explore Claude Services',
 ctaSecondaryHref: '/services/claude',
}

const statsData = [
 { value: '67', label: 'Skills in our production library' },
 { value: '15+', label: 'Clients with custom Skills' },
 { value: '8', label: 'Quality dimensions per Skill' },
 { value: '<250', label: 'Lines per Skill (V2 standard)' },
]

const servicesData = {
 subheading: 'What We Build',
 heading: 'Six skill types that cover most business workflows.',
 services: [
 {
 icon: BookOpen,
 title: 'Research Skills',
 description:
 'Skills that gather, analyze, and structure information from defined sources. Competitor research, market analysis, customer persona development, product positioning review. Each Skill knows exactly what sources to check, what format to produce, and what quality threshold to meet.',
 features: [
 'Source-grounded research output',
 'Structured data extraction',
 'Competitive analysis patterns',
 'Citation and attribution built in',
 ],
 },
 {
 icon: Package,
 title: 'Writing Skills',
 description:
 'Brand-specific content generation Skills with voice, tone, format, and vocabulary locked in. Blog posts, email sequences, ad copy, landing pages, product descriptions. The output reads like your brand wrote it, not like a generic AI model was prompted once.',
 features: [
 'Brand voice encoding in system prompt',
 'Format-specific output rules',
 'Vocabulary control (allowed and forbidden)',
 'Length and structure enforcement',
 ],
 },
 {
 icon: FlaskConical,
 title: 'Validation Skills',
 description:
 'Skills that review output from other Skills against defined quality dimensions. Anti-AI content detection, brand voice compliance, factual accuracy checking, SEO element validation. Our internal validate_content.py system scores across 8 dimensions. We build equivalent systems for your content operations.',
 features: [
 'Multi-dimension quality scoring',
 'Pass/Revise/Reject verdict logic',
 'Brand compliance checking',
 'Automated feedback generation',
 ],
 },
 {
 icon: Sliders,
 title: 'Optimization Skills',
 description:
 'Skills that take existing content or code and improve specific dimensions without changing the whole: SEO optimization, readability improvements, CTA testing, conversion copy refinement, code refactoring with defined constraints.',
 features: [
 'Single-dimension optimization focus',
 'Before/after diff output',
 'Constraint-respecting edits',
 'Measurable improvement targets',
 ],
 },
 {
 icon: RefreshCw,
 title: 'Workflow Orchestration Skills',
 description:
 'Skills that manage multi-step processes: intake a brief, call a Research Skill, pass output to a Writing Skill, route to a Validation Skill, format for delivery. These are the Skills that turn a single-agent capability into a production content or operations pipeline.',
 features: [
 'Multi-Skill orchestration logic',
 'Conditional routing patterns',
 'Error handling and fallback behavior',
 'State passing between Skill calls',
 ],
 },
 {
 icon: LayoutGrid,
 title: 'Schema & Structured Output Skills',
 description:
 'Skills that generate structured data outputs: JSON-LD schema markup, API payloads, database record drafts, structured content for headless CMS systems. Output is always validated against the target schema before delivery.',
 features: [
 'JSON-LD schema generation',
 'CMS-specific content structure',
 'API payload formatting',
 'Schema validation and error catching',
 ],
 },
 ],
}

const whatIsASkillData = {
 subheading: 'Understanding Claude Skills',
 heading: 'What a Skill actually is. and why the pattern matters.',
 lead: 'The difference between a well-built Skill and a saved ChatGPT prompt is the difference between a reliable function and a fragile string.',
 cards: [
 {
 title: 'Structured system prompt',
 items: [
 'Persona definition (who Claude is for this task)',
 'Purpose and scope boundaries',
 'Voice and writing rules',
 'Decision trees for edge cases',
 'Output format specification',
 ],
 },
 {
 title: 'Validation thresholds',
 items: [
 'Scoring dimensions and weights',
 'Pass/Revise/Reject verdict criteria',
 'Override conditions',
 'Automated quality check hooks',
 'Human review escalation triggers',
 ],
 },
 {
 title: 'Reference architecture',
 items: [
 'SKILL.md under 250 lines',
 'On-demand reference files for depth',
 'Executable scripts for data tasks',
 'MCP tool calls for live data',
 'Token-efficient context loading',
 ],
 },
 {
 title: 'Version control',
 items: [
 'Skills live in your repo, not a dashboard',
 'Git history tracks every change',
 'Rollback to any previous version',
 'Team review before Skill updates go live',
 'Eval runs on every version change',
 ],
 },
 ],
}

const processSteps = [
 {
 number: '01',
 title: 'Workflow mapping and Skill scoping',
 description:
 'We interview your team to understand the specific tasks that happen most often, that take the most time, or that produce the most inconsistent results. From that list we identify the 10-20 workflows that are best candidates for Skills. clear scope, repeatable structure, measurable output quality.',
 },
 {
 number: '02',
 title: 'Skill architecture and persona design',
 description:
 'For each Skill we design the system prompt structure: persona, purpose, workflow steps, decision trees, output format, and validation thresholds. This architecture document is reviewed and approved before we write a single line of the Skill itself.',
 },
 {
 number: '03',
 title: 'Build, test, and evaluate',
 description:
 'We write each Skill, run it against 20-50 real examples from your workflow, score the output against the validation thresholds, and iterate until the pass rate exceeds our quality bar. You see the eval results for every Skill before it goes into your library.',
 },
 {
 number: '04',
 title: 'Integration and documentation',
 description:
 'Skills are delivered in your chosen format: SKILL.md files in a repo, integrated into Claude Code CLI, or callable via the Agent SDK. Every Skill comes with usage documentation and an example gallery showing the expected inputs and outputs.',
 },
]

const caseStudyData = {
 subheading: 'Built in Production',
 heading: 'How a 67-Skill library powers 15 client SEO engagements.',
 challenge:
 'Fifteen clients, five industries, six team members. Every client has a different brand voice, different keyword strategy, different content format requirements. Without a Skill-based system, every task requires re-explaining context, re-establishing voice, and re-checking quality manually. The inconsistency compounds over hundreds of monthly tasks.',
 solution:
 'We built 67 Skills covering every function in our SEO workflows: industry-specific researchers (travel, SaaS, B2B, e-commerce), per-client writers with brand voice encoded, multi-dimension validators, schema generators, and pipeline orchestration Skills. Each Skill follows our V2 XML standard: under 250 lines, structured XML tags, MCP references where live data is needed, executable scripts for data tasks. The library runs every client engagement with consistent quality.',
 results: [
 { metric: 'Total Skills deployed', improvement: '67', timeframe: 'V2 XML standard, all in production' },
 { metric: 'Functions covered', improvement: '8', timeframe: 'Research, write, validate, generate schema, and more' },
 { metric: 'Validation dimensions', improvement: '8', timeframe: 'Per Skill. Pass/Revise/Reject verdicts' },
 { metric: 'Clients served by the system', improvement: '15+', timeframe: 'Across 5 industries' },
 ],
}

const faqItems = [
 {
 question: 'What is a Claude Skill, technically?',
 answer:
 'A Claude Skill is a structured system prompt plus associated workflow logic that gives Claude a specific, repeatable capability. At minimum it is a SKILL.md file with defined persona, purpose, workflow steps, output format, and validation thresholds. In our V2 standard, Skills use XML tags for structured sections, stay under 250 lines (with on-demand reference files for depth), and include scoring criteria that define Pass/Revise/Reject verdicts.',
 },
 {
 question: 'How is this different from just writing good prompts?',
 answer:
 'A prompt is written for a single use. A Skill is engineered for repeated use across different inputs, different team members, and evolving requirements. Skills include edge case handling, validation thresholds, version control, and documentation. A good prompt helps one person do one task. A good Skill handles a workflow reliably for an entire team.',
 },
 {
 question: 'How many Skills does a typical team need?',
 answer:
 'Most teams see the highest value from 10-30 core Skills covering their 10-15 most frequent, most time-consuming workflows. We recommend starting with a focused library of 10-15 Skills with deep quality investment rather than 50 shallow Skills. Once the core library proves its value, expansion is fast because the architecture patterns are established.',
 },
 {
 question: 'Do Skills work with Claude Code CLI, Agent SDK, or both?',
 answer:
 'We build Skills to work in whichever environment your team uses. For Claude Code CLI users, Skills are SKILL.md files that Claude reads at session start. For Agent SDK applications, Skills are structured system prompts integrated into agent configurations. For both, Skills can reference MCP tools for live data and executable scripts for data-heavy tasks.',
 },
 {
 question: 'How do you handle brand voice in Writing Skills?',
 answer:
 'Brand voice is encoded directly in the Skill\'s system prompt through four mechanisms: vocabulary lists (words to use and words to avoid), sentence rhythm rules (short sentence frequency, punctuation patterns), format rules (heading style, list use, call-to-action patterns), and example galleries (5-10 annotated examples of on-brand output). We validate the encoding by scoring Skill output against your existing approved content.',
 },
 {
 question: 'Who owns the Skills after the engagement?',
 answer:
 'You own them fully. Skills are delivered as files in your repo. You can modify, extend, or deprecate them without us. We encourage this. Skills should evolve with your workflows. If you want ongoing Skill development and iteration, that is available as a retainer.',
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
 <Subheading>How We Build Skills</Subheading>
 <Heading as="h2" className="mt-2">
 Four stages from workflow to production library.
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
 title="Claude Skills development frequently asked questions"
 items={faqItems}
 />
 </Container>
 </div>
 )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeSkillsDevelopmentPage() {
 return (
 <main className="overflow-hidden">
 <JsonLd
 data={{
 '@context': 'https://schema.org',
 '@type': 'Service',
 '@id': 'https://theprojectseo.com/services/claude/claude-skills-development',
 name: 'Custom Claude Skills Development',
 description:
 'Build custom Claude Skills: modular, reusable AI capabilities following Anthropic\'s Skills pattern. Research, writing, validation, schema generation, and orchestration Skills built to the same standard as our 67-Skill internal library.',
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
 <FeatureCardsSection {...whatIsASkillData} />
 <FAQSection />
 <CTAFormSection
 subheading="Ready to Build Your Skill Library?"
 heading="Tell us your highest-friction workflows."
 lead="We map your workflows, design the Skill architecture, build against real examples, and deliver a documented library your team owns and operates."
 benefits={[
 'Workflow mapping session included',
 'Eval results for every Skill before delivery',
 'Full ownership. files in your repo',
 ]}
 submitText="Build Your Skill Library"
 />
 <Footer />
 </main>
 )
}
