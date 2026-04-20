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
  BookOpen,
  Users,
  Target,
  Layers,
  BarChart2,
  Workflow,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Claude Code Training | Team Enablement for Engineering Orgs | TheProjectSEO',
  description:
    'Team enablement and onboarding for Claude Code adoption at engineering organisations. Structured curriculum, hands-on labs with real codebases, and skill progression tracking. We run Claude Code ourselves.',
  alternates: {
    canonical: '/services/claude/claude-code-training',
  },
  openGraph: {
    title: 'Claude Code Training | Engineering Team Enablement | TheProjectSEO',
    description:
      'Claude Code training for engineering teams: structured curriculum, hands-on labs, and measurable skill progression. Built by the team that runs a 67-skill Claude Code system daily.',
    url: 'https://theprojectseo.com/services/claude/claude-code-training',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Claude Code Training',
  title: 'Claude Code training built on',
  accentWord: 'production',
  titleAfterAccent: 'experience',
  description:
    'Generic Claude Code training covers the documentation. Our training covers what the documentation does not: how to design CLAUDE.md files that actually guide behaviour, which hook patterns fail in CI, where the Agent SDK surprises teams at scale, how to structure a Skill library for a real workflow, and how to evaluate whether your team is adopting effectively. We have trained our own six-person team on a system with 67 Skills, 12 agents, and 15 active clients. That operating experience is what we teach.',
  ctaPrimaryText: 'Talk to Us About Training',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '6', label: 'Team members trained on our Claude system' },
  { value: '67', label: 'Skills they use daily across 15 clients' },
  { value: '3', label: 'Skill progression levels in our curriculum' },
  { value: '12', label: 'Agents in OpenClaw, all team-operated' },
]

const servicesData = {
  subheading: 'Training Programs',
  heading: 'Six training modules across two levels for engineering teams.',
  lead: 'The curriculum starts with fundamentals and progresses to the patterns that separate teams who use Claude well from teams who use it effectively at scale.',
  services: [
    {
      icon: BookOpen,
      title: 'Foundation: Claude Code Fundamentals',
      description:
        'The foundation module covers what Claude Code actually is (not the marketing version), how the agent loop works, what the CLI does that an API call does not, how context windows and CLAUDE.md files interact, and how to structure a first useful session. Engineers who complete this module stop treating Claude Code like a smart autocomplete and start using it as a reasoning partner.',
      features: [
        'Agent loop mechanics and context management',
        'CLAUDE.md architecture for your codebase',
        'Built-in tool use patterns (file, shell, web)',
        'When Claude Code is and is not the right tool',
      ],
    },
    {
      icon: Target,
      title: 'Foundation: Effective Prompt Patterns',
      description:
        'Prompt patterns that work reliably for engineering tasks are different from general prompt engineering. This module covers the patterns that matter for code: task decomposition for complex changes, step-back prompting for debugging, role assignment for code review, and structured output formatting for code generation. Each pattern is practised on real code from your codebase.',
      features: [
        'Task decomposition for complex engineering changes',
        'Debugging with step-back prompting',
        'Code review and architecture feedback patterns',
        'Structured output for code generation',
      ],
    },
    {
      icon: Layers,
      title: 'Intermediate: Hooks and Settings Architecture',
      description:
        'This module covers the hook system: PreToolUse, PostToolUse, UserPromptSubmit, and Stop events; exit code behavior; stdin/stdout interfaces; and the settings.json configuration model. Engineers build at least two hooks during the session: one policy enforcement hook and one notification hook. The hands-on component uses your actual workflows, not synthetic examples.',
      features: [
        'Hook event types and exit code behavior',
        'Policy enforcement hook design',
        'Notification and audit hook implementation',
        'settings.json scope management',
      ],
    },
    {
      icon: Workflow,
      title: 'Intermediate: Skill Development',
      description:
        'The Skill module covers Anthropic\'s agent pattern in depth: SKILL.md structure, XML tag architecture, the references directory pattern, validation script integration, and cross-Skill composition. Engineers design and build a Skill for a workflow they own. The Skill goes into review using the same process we use for our own 67-Skill library.',
      features: [
        'SKILL.md XML architecture design',
        'References directory for on-demand context',
        'Validation script integration',
        'Skill review and iteration process',
      ],
    },
    {
      icon: Users,
      title: 'Advanced: Multi-Agent Systems',
      description:
        'The advanced module covers multi-agent patterns: when to use multiple agents vs. a single agent with more context, handoff design, state management, error recovery, and the OpenClaw orchestration patterns we developed for our own 12-agent system. This module is for senior engineers and architects who will own the AI system design for their team.',
      features: [
        'Agent decomposition and handoff design',
        'State management across agent boundaries',
        'Error recovery and retry patterns',
        'OpenClaw orchestration patterns',
      ],
    },
    {
      icon: BarChart2,
      title: 'Advanced: Measurement and Improvement',
      description:
        'The measurement module covers how to know whether your team\'s Claude Code adoption is actually working: productivity metrics, output quality measurement, eval framework design, and the signals that indicate where to invest next. Most teams adopt Claude Code but few measure whether the adoption is producing the results they expected. This module fixes that.',
      features: [
        'Productivity metric design for AI-assisted work',
        'Output quality measurement framework',
        'Eval design for repeated workflow tasks',
        'Adoption health signals and intervention triggers',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Team assessment and curriculum customization',
    description:
      'We assess your team\'s current Claude Code familiarity, the specific workflows they want to improve, and the technical context of your codebase and stack. That assessment drives curriculum customization: we drop modules that are not relevant, add depth where your team has specific needs, and choose hands-on examples from your actual codebase and tools.',
  },
  {
    number: '02',
    title: 'Foundation cohort training',
    description:
      'Foundation modules run as live sessions with your team: presentation, demonstration, and hands-on lab time. The lab component uses your real code and workflows. Engineers leave each session with a working artifact: a CLAUDE.md file for their project, a hook they wrote, a Skill they designed. Not just notes.',
  },
  {
    number: '03',
    title: 'Intermediate and advanced workshops',
    description:
      'After foundation training, intermediate and advanced modules run in smaller groups. Engineers who will own hook architecture go deep on the hooks module. Engineers who will design the Skill library go deep on Skill development. The senior engineer or tech lead who owns the AI system design gets the multi-agent and measurement modules.',
  },
  {
    number: '04',
    title: 'Follow-up review and progression tracking',
    description:
      'At 4 weeks and 8 weeks post-training, we run follow-up sessions: reviewing what the team has built, answering the questions that have come up in practice, and identifying where adoption has stalled. The 8-week checkpoint produces a recommendation for next steps: advanced modules, Skill library review, or a transition to ongoing consulting.',
  },
]

const caseStudyData = {
  subheading: 'Training Our Own Team',
  heading: 'How we brought a six-person team to daily production use of a 67-skill Claude system.',
  challenge:
    'Claude Code is a power tool. A team member who understands it deeply produces 3-4x the output quality of a team member who treats it like an autocomplete. Getting a six-person team to the same level of depth, without pulling each person out of client work for extended training periods, requires a structured curriculum that moves from fundamentals to production patterns efficiently.',
  solution:
    'We built a three-level curriculum from our own adoption experience: Foundation (fundamentals and prompting patterns), Intermediate (hooks and Skill development), Advanced (multi-agent systems and measurement). Each level is 2-3 sessions of 90 minutes each, with hands-on lab time built in. Engineers built real artifacts in every session. By the end of the Intermediate level, every team member had at least 5 operational Skills and 2 working hooks. The Advanced module produced the architecture for our 12-agent OpenClaw system.',
  results: [
    { metric: 'Training levels completed by full team', improvement: '3', timeframe: 'Foundation through Advanced' },
    { metric: 'Skills per team member post-training', improvement: '5+', timeframe: 'Operational, not demo Skills' },
    { metric: 'Time to productive Claude Code use', improvement: '2 weeks', timeframe: 'After Foundation completion' },
    { metric: 'Agent system complexity reached', improvement: '12 agents', timeframe: 'OpenClaw, built by trained team' },
  ],
}

const whoIsThisForData = [
  {
    profile: 'Engineering teams starting Claude Code adoption',
    problem: 'Your engineers have access to Claude Code but are not sure how to use it well. The documentation covers the what. Your team needs the how: specific patterns for your workflow, hands-on practice with your actual code, and answers to the questions that only come up in real use.',
    fit: 'We run Foundation-level training that meets your team where they are and gets them to productive, consistent use within 2-3 weeks.',
  },
  {
    profile: 'Teams with intermediate adoption looking to go deeper',
    problem: 'Your team uses Claude Code but you know they are not using it at full depth. Nobody has set up hooks. The CLAUDE.md files are vague. No Skills have been built. The potential is visible but unrealized.',
    fit: 'We assess what foundation knowledge exists and run intermediate and advanced modules to close the gap. Most teams at this stage reach full depth within 4-6 weeks.',
  },
  {
    profile: 'CTOs and tech leads designing AI-native engineering culture',
    problem: 'You want Claude Code to be part of how your engineering team works, not an individual power user tool. That requires standards, shared Skills, shared hooks, and measurement. None of which come with the default Claude Code install.',
    fit: 'We train the full team and help you design the shared infrastructure: the Skills library, the hook policies, the CLAUDE.md standards. The culture builds on the infrastructure.',
  },
  {
    profile: 'Companies building AI capabilities before a product launch',
    problem: 'You are building a product that will use Claude internally. You need your engineering team to understand the full stack. Claude Code, MCP, Agent SDK, prompt engineering. before they start building the product integration.',
    fit: 'We run a compressed full-curriculum training ahead of your build sprint. Engineers leave with the working knowledge to make good architectural decisions from week one.',
  },
]

const faqItems = [
  {
    question: 'Is this training for non-technical teams too or just engineers?',
    answer:
      'The curriculum is designed for engineers and technical product managers. The hands-on labs involve writing SKILL.md files, configuring hooks in settings.json, and designing CLAUDE.md architectures. Non-technical team members can benefit from the Foundation modules, but the Intermediate and Advanced content assumes comfort with terminal commands, configuration files, and basic code reading.',
  },
  {
    question: 'How is this different from reading the Anthropic documentation?',
    answer:
      'The documentation tells you what each feature does. Training tells you what to actually build first, which patterns work in production, which common mistakes to skip, and how to adapt the standard patterns to your specific workflow. The hands-on lab component is where the real learning happens: you cannot get that from documentation alone.',
  },
  {
    question: 'Can training be done remotely or does it require in-person sessions?',
    answer:
      'All training is delivered remotely via video call with screen sharing. The hands-on lab components work well remotely. one screen shares the Claude Code session while the team follows along. For teams that prefer in-person delivery, we travel for engagements with 8+ engineers. Travel and accommodation costs are billed at cost.',
  },
  {
    question: 'How many engineers can participate in a single training cohort?',
    answer:
      'Foundation modules work well with up to 12 engineers. The hands-on lab component requires individual attention, so we cap cohorts at 12. Intermediate and Advanced workshops work best with 4-8 engineers: small enough for genuine back-and-forth on design decisions. For larger teams, we run multiple cohorts.',
  },
  {
    question: 'Do you offer ongoing coaching after the initial training?',
    answer:
      'Yes. For teams that want ongoing support as they build out their Claude Code infrastructure, we offer monthly coaching sessions: reviewing the Skills library, working through architectural questions, and adjusting the training based on what has and has not worked in practice. This is a separate engagement from the initial training curriculum.',
  },
]

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
            Four engineering team profiles we train.
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
/* Process Section */
/* -------------------------------------------------------------------------- */

function ProcessSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading>How Training Works</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from assessment to sustained adoption.
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
          title="Claude Code training frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeCodeTrainingPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/claude-code-training',
          name: 'Claude Code Training',
          description:
            'Team enablement and onboarding for Claude Code adoption at engineering organisations. Structured curriculum from fundamentals to multi-agent systems, with hands-on labs on your real codebase.',
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
      <WhoIsThisForSection />
      <FAQSection />
      <CTAFormSection
        subheading="Ready to Train Your Team?"
        heading="Let's assess where your team is and design the curriculum."
        lead="Team assessment, curriculum customization, and a structured training schedule. Your engineering team goes from Claude Code users to Claude Code practitioners."
        benefits={[
          'Team assessment before curriculum design',
          'Hands-on labs using your actual codebase',
          '4-week and 8-week follow-up sessions included',
        ]}
        submitText="Talk to Us About Training"
      />
      <Footer />
    </main>
  )
}
