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
  Puzzle,
  Terminal,
  Layers,
  Zap,
  Code2,
  Users,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Claude Plugin Development | Claude Code CLI Extensions | TheProjectSEO',
  description:
    'Author Claude Code Plugins that extend the CLI with custom tools, slash commands, and agent templates. We have built 67 production Skills and the OpenClaw 12-agent framework on the same primitives.',
  alternates: {
    canonical: '/services/claude/claude-plugin-development',
  },
  openGraph: {
    title: 'Claude Plugin Development | Custom Claude Code Extensions | TheProjectSEO',
    description:
      'Custom Claude Code Plugin development: new tools, slash commands, and agent templates that make Claude Code do exactly what your workflow needs.',
    url: 'https://theprojectseo.com/services/claude/claude-plugin-development',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Claude Plugin Development',
  title: 'Claude Code Plugins that make the',
  accentWord: 'CLI',
  titleAfterAccent: 'work your way',
  description:
    'Claude Code ships with a powerful set of built-in tools. But your workflows have specific requirements that the defaults do not cover: a slash command that runs your exact research sequence, a tool that calls your internal API, an agent template that embeds your brand standards without requiring a prompt every time. Claude Code Plugins extend the CLI at the right layer. We have built this infrastructure for our own 67-skill system and we build it for clients.',
  ctaPrimaryText: 'Build Your Plugin',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '67', label: 'Custom Skills (plugin primitives) in production' },
  { value: '12', label: 'OpenClaw agents built on plugin architecture' },
  { value: '8', label: 'Slash commands used by our team daily' },
  { value: '15+', label: 'Client workflows extended via plugins' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Five plugin types that extend Claude Code for real workflows.',
  lead: 'Plugins are not cosmetic additions. They are the difference between a team that adapts to Claude Code and a Claude Code that adapts to the team.',
  services: [
    {
      icon: Terminal,
      title: 'Custom Slash Commands',
      description:
        'Slash commands turn multi-step workflows into single invocations. Our team runs /create-content, /morning-briefing, /weekly-report, and /deliver as daily commands. Each one encodes a specific workflow: the right sequence of tools, the right context injection, the right output format. We design and build slash commands that match your team\'s most repeated workflows exactly.',
      features: [
        'Workflow-specific command design',
        'Argument parsing and validation',
        'Context injection at invocation',
        'Output format specification',
      ],
    },
    {
      icon: Puzzle,
      title: 'Custom Tool Definitions',
      description:
        'Claude Code\'s built-in tools cover files, shell commands, and web search. Your team may need tools that are specific to your stack: a tool that queries your internal API, a tool that formats output for your CMS, a tool that validates against your schema definitions. We build custom tool definitions that slot into Claude\'s tool-use loop natively.',
      features: [
        'Internal API tool wrappers',
        'CMS and data system integrations',
        'Custom validation tools',
        'Async tool patterns for long-running tasks',
      ],
    },
    {
      icon: Layers,
      title: 'Agent Templates',
      description:
        'An agent template is a pre-configured Claude Code session: specific CLAUDE.md context, a defined set of tools, a starting prompt structure, and hooks pre-loaded. When a team member runs a template, they get a Claude Code session that already knows the client, the task type, and the quality standards. No setup, no prompt engineering required per session.',
      features: [
        'Client-specific context pre-loading',
        'Task-type tool configuration',
        'Hook pre-attachment per template',
        'Quality threshold enforcement built in',
      ],
    },
    {
      icon: Code2,
      title: 'Skill Libraries',
      description:
        'Skills are the modular, reusable capability units that follow Anthropic\'s agent pattern. Each Skill is a SKILL.md file with XML-structured instructions, a references directory for on-demand context, and optional scripts for validation. We build Skill libraries: 10-50 interconnected Skills covering a complete workflow domain, designed so they compose naturally within Claude\'s context window.',
      features: [
        'XML-structured Skill architecture',
        'References directory for on-demand context',
        'Validation script integration',
        'Cross-Skill composition design',
      ],
    },
    {
      icon: Zap,
      title: 'Workflow Automation Plugins',
      description:
        'Plugins that wire Claude Code into your broader automation stack. A plugin that triggers an n8n workflow when a task completes. A plugin that posts to Slack with a session summary. A plugin that writes structured output to a database for reporting. These automation plugins turn Claude Code sessions into events that your systems can respond to.',
      features: [
        'n8n and Zapier workflow triggers',
        'Slack and Teams notifications',
        'Database write on task completion',
        'Webhook-based external system integration',
      ],
    },
    {
      icon: Users,
      title: 'Team Collaboration Plugins',
      description:
        'Plugins that make Claude Code a shared team asset rather than an individual tool. Shared session templates that every team member starts from. Plugins that log team activity to a shared audit trail. Plugins that enforce naming conventions and output formats across the team. When a plugin enforces consistency, consistency stops being a management problem.',
      features: [
        'Shared session template distribution',
        'Team activity audit logging',
        'Naming convention enforcement',
        'Output format standardization',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Workflow audit and plugin opportunity identification',
    description:
      'We spend one session with your team mapping the Claude Code workflows you run most frequently. What steps do people repeat every session? Where do people forget to inject context? What manual steps happen after Claude finishes that could be automated? That audit produces a ranked list of plugin opportunities, ordered by time-to-value.',
  },
  {
    number: '02',
    title: 'Plugin architecture and interface design',
    description:
      'Before building, we design the interface: how the plugin is invoked, what arguments it accepts, what context it injects, what tools it exposes, and what output it produces. For slash commands, we write the command specification. For Skill libraries, we map the Skill dependency graph. The interface design document is reviewed and approved before build starts.',
  },
  {
    number: '03',
    title: 'Build and integration testing with real workflows',
    description:
      'We build against your actual workflow data. Custom tools get tested against your real API endpoints. Skill libraries get evaluated against your actual content and edge cases. Slash commands get tested with the full sequence of tool calls they trigger, not just the happy path. Plugins that fail on edge cases in production are worse than no plugin at all.',
  },
  {
    number: '04',
    title: 'Deployment, documentation, and team enablement',
    description:
      'We deploy the plugins to your team\'s settings.json, write usage documentation for every command and tool, and run a live session with your team demonstrating each plugin in context. Your team can modify and extend the plugins without us. The goal is capability transfer, not ongoing dependency.',
  },
]

const caseStudyData = {
  subheading: 'Our Plugin Stack in Practice',
  heading: 'How 67 Skills and 8 slash commands replaced manual workflow management.',
  challenge:
    'A 6-person agency managing 15 clients cannot rely on individual team members remembering the right process for every client and every task type. The wrong prompt, the wrong context, the wrong tool sequence. These are not theoretical risks. At scale, they happen. The question is whether they happen silently or whether the system catches them.',
  solution:
    'We built a plugin layer on top of Claude Code: 67 Skills that cover every workflow function (writing, editing, validation, schema, research, reporting), 8 slash commands that invoke the right Skill sequence for common tasks, and agent templates that pre-load client context for each of our 15 clients. A team member opens Claude Code, types /create-content mobilemodular "modular office buildings", and the plugin handles context loading, Skill sequencing, quality validation, and delivery notification. The team member handles judgment calls and client communication.',
  results: [
    { metric: 'Skills in production', improvement: '67', timeframe: 'Covering every client workflow function' },
    { metric: 'Slash commands used daily', improvement: '8', timeframe: 'Across 6 team members, 15 clients' },
    { metric: 'Session setup time per task', improvement: '~90%', timeframe: 'Reduction vs. manual prompt assembly' },
    { metric: 'Quality gate pass rate', improvement: '95%+', timeframe: 'On first submission via plugin workflow' },
  ],
}

const whoIsThisForData = [
  {
    profile: 'Engineering teams with repeated Claude Code workflows',
    problem: 'Your engineers run similar Claude Code sessions every day. Same context setup, same tool sequence, same output format. That repetition is a plugin waiting to be built.',
    fit: 'We map the repeated patterns and build slash commands and templates that eliminate the manual setup from every session.',
  },
  {
    profile: 'Agencies managing multiple clients with Claude',
    problem: 'Each client has different brand standards, different tools, different delivery requirements. Managing that context manually across sessions is error-prone and slow.',
    fit: 'We build per-client agent templates that pre-load the right context, enforce the right quality standards, and use the right tool configuration without any session setup.',
  },
  {
    profile: 'Product teams adding Claude to their internal tooling',
    problem: 'You want Claude Code available to your whole team, but you need the experience to be consistent. Different team members using different prompts produces inconsistent outputs.',
    fit: 'We build shared plugin libraries that standardize the Claude Code experience across your team without restricting individual flexibility.',
  },
  {
    profile: 'Teams building on top of Claude Code for clients',
    problem: 'You are an agency or consultancy that wants to offer Claude Code-powered services. You need a replicable delivery system, not one that depends on individual expertise.',
    fit: 'We design and build the plugin architecture that makes your delivery system systematic and trainable. You own the system; we build the foundation.',
  },
]

const faqItems = [
  {
    question: 'What exactly is a Claude Code Plugin?',
    answer:
      'Claude Code Plugins extend the CLI with new capabilities: custom slash commands that invoke specific workflows, custom tool definitions that let Claude call your internal systems, agent templates that pre-configure sessions for specific use cases, and Skill files that give Claude modular, reusable expertise. Plugins live in the .claude directory and are configured via settings.json.',
  },
  {
    question: 'What is the difference between a Plugin and an MCP server?',
    answer:
      'MCP servers give Claude access to external data sources and tools via the Model Context Protocol, typically for reading and writing to your systems. Claude Code Plugins extend the CLI interface itself. the commands available, the agent templates used, the Skills loaded. Think of MCP as the data layer and Plugins as the workflow layer. Most complete Claude Code deployments need both.',
  },
  {
    question: 'How do Plugins relate to the Skill files I have seen referenced?',
    answer:
      'Skills are the primary plugin primitive in Anthropic\'s Claude Code architecture. A Skill is a SKILL.md file with XML-structured instructions that Claude loads when invoked. Slash commands trigger Skill sequences. Agent templates pre-load specific Skills. We use the terms interchangeably in context, though technically a Plugin encompasses any CLI extension, while a Skill is specifically the SKILL.md pattern.',
  },
  {
    question: 'Can I maintain and extend plugins my team builds?',
    answer:
      'Yes. SKILL.md files are plain text with XML structure. Slash commands are configuration entries in settings.json. Any team member comfortable with text editing can modify a Skill or add a new slash command. We write documentation for every plugin we build so the extension process is clear. You own the code from day one.',
  },
  {
    question: 'How many plugins do most teams need?',
    answer:
      'The right number depends on workflow complexity. A single-product engineering team might start with 5-10 Skills and 2-3 slash commands. A multi-client agency like ours has 67 Skills and 8 slash commands covering 15 different client contexts. We recommend starting with the 3-5 most repeated manual workflows and building from there.',
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
            Four teams that need Claude Code Plugins.
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
          <Subheading>How We Build Plugins</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from workflow audit to deployed plugin library.
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
          title="Claude Code Plugin development frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudePluginDevelopmentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/claude-plugin-development',
          name: 'Claude Plugin Development',
          description:
            'Custom Claude Code Plugin development: slash commands, tool definitions, agent templates, and Skill libraries that extend Claude Code for your specific team workflows.',
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
        subheading="Ready to Extend Claude Code?"
        heading="Let's map your workflow and build your plugins."
        lead="A 60-minute workflow audit, a plugin design document, and a build. Your team goes from manually assembling Claude sessions to running structured, repeatable workflows from day one."
        benefits={[
          'Workflow audit and opportunity mapping included',
          'Integration tested against your real workflows',
          'Documentation and team enablement session',
        ]}
        submitText="Build Your Plugin"
      />
      <Footer />
    </main>
  )
}
