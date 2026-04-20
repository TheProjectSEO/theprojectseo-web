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
  Shield,
  GitBranch,
  Bell,
  Workflow,
  Code2,
  Lock,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Claude Code Hooks Development | Pre/Post-Tool-Use Automation | TheProjectSEO',
  description:
    'Build production-grade Claude Code Hooks that enforce team policies, run QA checks, inject context, and trigger external systems before and after every agent action. We run hooks in our own 15-client workflow daily.',
  alternates: {
    canonical: '/services/claude/claude-hooks-development',
  },
  openGraph: {
    title: 'Claude Code Hooks Development | TheProjectSEO',
    description:
      'Custom Claude Code Hooks for policy enforcement, QA automation, context injection, and audit logging. Built by the team that runs a 67-skill Claude system across 15 clients.',
    url: 'https://theprojectseo.com/services/claude/claude-hooks-development',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'website',
  },
}

/* -------------------------------------------------------------------------- */
/* Page Data */
/* -------------------------------------------------------------------------- */

const heroData = {
  label: 'Claude Code Hooks Development',
  title: 'Claude Code Hooks that enforce what',
  accentWord: 'matters',
  titleAfterAccent: 'before anything ships',
  description:
    'Claude Code Hooks are shell commands that fire at defined points in the agent loop: before a tool is called, after it completes, on session start, and when the agent stops. The right hooks turn Claude Code from a capable assistant into a system that cannot bypass your team\'s quality standards, security policies, or audit requirements. We build hooks in production and use them daily across our own 67-skill agent system.',
  ctaPrimaryText: 'Build Your Hooks',
  ctaPrimaryHref: '/contact',
  ctaSecondaryText: 'Explore Claude Services',
  ctaSecondaryHref: '/services/claude',
}

const statsData = [
  { value: '4', label: 'Hook event types in production use' },
  { value: '67', label: 'Skills protected by hook policies' },
  { value: '15+', label: 'Client workflows with hook enforcement' },
  { value: '0', label: 'Policy bypasses since hooks deployed' },
]

const servicesData = {
  subheading: 'What We Build',
  heading: 'Six hook categories that solve real production problems.',
  lead: 'Hooks are not a novelty. They are the mechanism that makes AI-powered workflows trustworthy enough to run without a human watching every step.',
  services: [
    {
      icon: Shield,
      title: 'Policy Enforcement Hooks',
      description:
        'Pre-tool-use hooks that validate every agent action against your team\'s written policies before execution. The hook reads the proposed tool call, checks it against a rule set you define, and blocks or modifies the call if it violates policy. Sensitive file patterns, restricted API endpoints, write-access controls on production systems.',
      features: [
        'Rule-based pre-execution validation',
        'Configurable block vs. warn behavior',
        'Policy file version control integration',
        'Human-readable rejection messages for Claude',
      ],
    },
    {
      icon: Code2,
      title: 'QA and Validation Hooks',
      description:
        'Post-tool-use hooks that run automated quality checks on outputs before they reach the next step in the agent loop. Our own content delivery pipeline uses a post-tool hook that runs an 8-dimension anti-AI scoring check on every written output before it can be saved or sent. If the score is below 85, the hook fails and Claude gets the specific failure reasons.',
      features: [
        'Content quality scoring integration',
        'Schema validation on structured outputs',
        'Format compliance checking',
        'Regression test execution on code changes',
      ],
    },
    {
      icon: Workflow,
      title: 'Context Injection Hooks',
      description:
        'Pre-tool-use hooks that dynamically inject relevant context into the agent\'s environment before specific tools fire. When Claude is about to call a write tool on a client file, a context hook can fetch that client\'s brand voice configuration, recent decisions log, and style rules, making them available without requiring the user to remember to include them.',
      features: [
        'Dynamic client context injection',
        'Environment-based configuration loading',
        'Session state enrichment',
        'Real-time data fetch before tool execution',
      ],
    },
    {
      icon: Bell,
      title: 'Notification and Alerting Hooks',
      description:
        'Post-tool-use hooks that trigger Slack messages, email alerts, or webhook calls based on what the agent just did. When a file is written to a client delivery folder, a hook fires the notification. When a database write completes, the hook logs it to your audit trail and pings the relevant team channel. No polling, no manual check-ins.',
      features: [
        'Slack and Teams webhook integration',
        'Email notification on defined triggers',
        'Audit log writes on every state change',
        'Escalation hooks for error conditions',
      ],
    },
    {
      icon: GitBranch,
      title: 'Git and Version Control Hooks',
      description:
        'Hooks that gate code-related agent actions behind version control checks. Before Claude writes to a file, verify the working tree is clean. After a batch of writes, auto-stage and checkpoint. On session stop, generate a commit summary of everything Claude touched. These hooks make Claude Code\'s file operations part of your actual Git workflow, not parallel to it.',
      features: [
        'Pre-write working tree validation',
        'Auto-stage and checkpoint after writes',
        'Session-stop commit summary generation',
        'Branch policy enforcement before edits',
      ],
    },
    {
      icon: Lock,
      title: 'Security and Compliance Hooks',
      description:
        'Hooks that enforce data handling requirements, PII detection, and access control for regulated environments. A pre-tool hook scans proposed tool calls for patterns that match sensitive data types (PII, credentials, financial data) and either strips them, flags them, or blocks the call. Post-tool hooks verify that outputs do not contain data that should not leave the system.',
      features: [
        'PII pattern detection before tool execution',
        'Credential leak prevention',
        'Data residency compliance checks',
        'Full audit trail for regulated workflows',
      ],
    },
  ],
}

const processSteps = [
  {
    number: '01',
    title: 'Workflow mapping and hook point identification',
    description:
      'We spend one session mapping your Claude Code workflow in detail: which tools fire in which order, where human-in-the-loop checkpoints currently exist, what policies your team enforces manually today, and which failure modes have actually happened. That mapping drives the hook design. We do not build generic hooks; we build hooks for your specific workflow.',
  },
  {
    number: '02',
    title: 'Hook architecture and event selection',
    description:
      'Each hook fires on a specific event: PreToolUse, PostToolUse, UserPromptSubmit, or Stop. Getting this wrong means hooks that fire too often (performance overhead) or too rarely (missed enforcement). We design the event map, the exit code behavior (block vs. warn vs. pass), and the stdin/stdout interface for each hook before writing a line of shell script or Python.',
  },
  {
    number: '03',
    title: 'Build, test, and adversarial validation',
    description:
      'Hooks need adversarial testing. We write test cases that attempt to bypass each policy, test edge cases where the tool call is ambiguous, and verify that hook failures produce error messages clear enough for Claude to understand and respond to usefully. A hook that fails silently is worse than no hook.',
  },
  {
    number: '04',
    title: 'Deployment and settings.json integration',
    description:
      'We integrate your hooks into settings.json at the appropriate scope (project or user), verify the configuration with your team, and document every hook: what it does, what triggers it, what the exit codes mean, and how to modify or disable it safely. Your team inherits a system they can operate without us.',
  },
]

const caseStudyData = {
  subheading: 'Hooks in Our Own Stack',
  heading: 'How we use Claude Code Hooks to enforce quality across 15 client workflows.',
  challenge:
    'Running a 67-skill agent system across 15 clients creates a specific problem: Claude is powerful enough to complete tasks autonomously, but that autonomy creates risk. A content write to the wrong client folder, a schema output that skips a required field, a delivery that bypasses the quality score check. These are low-probability events in any single session but near-certainties at scale.',
  solution:
    'We built a hook layer that runs across all client workflows. A PostToolUse hook fires after every content write and runs our validate_content.py scorer (8 dimensions, PASS threshold 85). A PreToolUse hook blocks file writes to client folders when the session context does not match the target client. A Stop hook logs every session to our activity trail and notifies the responsible team member. None of these checks required changes to our Skills or prompts. The hooks enforce correctness at the infrastructure layer.',
  results: [
    { metric: 'Quality gate hook coverage', improvement: '100%', timeframe: 'All content outputs checked before save' },
    { metric: 'Client folder miswrite incidents', improvement: '0', timeframe: 'Since pre-write context check deployed' },
    { metric: 'Manual QA reviews eliminated', improvement: '~60%', timeframe: 'Automated by PostToolUse scoring hook' },
    { metric: 'Session audit coverage', improvement: '100%', timeframe: 'Every session logged via Stop hook' },
  ],
}

const whoIsThisForData = [
  {
    profile: 'Engineering teams using Claude Code at scale',
    problem: 'Claude Code is productive for individual developers. At team scale, you need policy consistency. The hooks in settings.json are the mechanism that makes your policies machine-enforced rather than human-remembered.',
    fit: 'We design and build a hook layer that matches your security requirements, workflow patterns, and existing tooling.',
  },
  {
    profile: 'Agencies running multi-client Claude workflows',
    problem: 'Every client has different constraints. Different brand requirements, different delivery folders, different quality thresholds. Managing those manually as your team grows is a quality risk. Hooks make the constraints structural.',
    fit: 'We build per-client hook configurations that fire the right checks for the right client without requiring your team to remember them.',
  },
  {
    profile: 'Regulated industries deploying Claude',
    problem: 'Healthcare, finance, and legal workflows have hard requirements around data handling that Claude cannot enforce on its own. Hooks are where compliance meets the agent loop.',
    fit: 'We build PII detection hooks, access control enforcement, and audit trail generation that satisfy your compliance requirements at the infrastructure level.',
  },
  {
    profile: 'Teams that have had a Claude Code incident',
    problem: 'You have already had a bad session. Wrong file written, a confidential output delivered to the wrong place, a quality failure that reached a client. You need the infrastructure to prevent recurrence.',
    fit: 'We do a post-incident hook design: specific hooks targeted at the failure mode you experienced, with adversarial test cases that verify the hook would have caught it.',
  },
]

const faqItems = [
  {
    question: 'What are Claude Code Hooks and how do they work?',
    answer:
      'Claude Code Hooks are shell commands configured in settings.json that fire at four defined points in the agent loop: PreToolUse (before a tool call executes), PostToolUse (after a tool call completes), UserPromptSubmit (when a user message is submitted), and Stop (when the agent finishes). Hooks receive tool call data via stdin and communicate back via exit codes and stdout. Exit code 0 means proceed; non-zero means block or warn, depending on your configuration.',
  },
  {
    question: 'Can hooks actually block Claude from taking an action?',
    answer:
      'Yes. A PreToolUse hook with a non-zero exit code blocks the tool call from executing. Claude receives the hook\'s stdout as feedback and can adjust its approach. This is how policy enforcement hooks work: Claude proposes an action, the hook checks it against policy, and if it violates policy, the hook blocks execution and explains why. Claude then attempts a compliant alternative.',
  },
  {
    question: 'What is the difference between hooks and Skills?',
    answer:
      'Skills are modular agent capabilities that define what Claude can do. Hooks are infrastructure-layer controls that govern how Claude does it. A Skill might define a content writing workflow. A hook enforces that the output meets quality standards before it is saved. They are complementary. most production Claude Code deployments need both.',
  },
  {
    question: 'How do hooks affect Claude Code performance?',
    answer:
      'Hooks add latency equal to their own execution time on every matching tool call. A Python script that reads a config file and runs a regex check adds 50-200ms per call. A hook that calls an external API adds more. We design hooks for minimal overhead: fast languages (shell or Python with no heavy imports), cached configurations, and event filters that limit which tool calls trigger each hook.',
  },
  {
    question: 'Can hooks integrate with external systems?',
    answer:
      'Yes. Hooks are shell commands. They can call any system accessible from the shell: REST APIs, databases, Slack webhooks, logging systems, CI pipelines. Our notification hooks call the Slack API directly. Our audit hooks write to a JSONL file that feeds into our BigQuery pipeline. The integration depth is limited only by what your infrastructure exposes.',
  },
  {
    question: 'What is the minimum engagement for hook development?',
    answer:
      'A focused hook engagement starts with a 60-minute workflow mapping session, followed by a design document and a build. Simple hook sets (2-4 hooks for a single workflow) typically take 1-2 weeks. Complex hook systems with external integrations, multiple policy rule sets, and test coverage run 3-4 weeks. All engagements include documentation and a handover session.',
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
            Four teams that need Claude Code Hooks.
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
          <Subheading>How We Build Hooks</Subheading>
          <Heading as="h2" className="mt-2">
            Four stages from workflow audit to enforced system.
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
          title="Claude Code Hooks frequently asked questions"
          items={faqItems}
        />
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Page Export */
/* -------------------------------------------------------------------------- */

export default function ClaudeHooksDevelopmentPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://theprojectseo.com/services/claude/claude-hooks-development',
          name: 'Claude Code Hooks Development',
          description:
            'Build pre/post-tool-use Claude Code Hooks that enforce team policies, run QA checks, inject context, and trigger external systems at defined points in the agent loop.',
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
        subheading="Ready to Enforce What Matters?"
        heading="Let's design your hook layer."
        lead="One workflow mapping session, a hook design document, and a build. Your Claude Code sessions run with enforceable policy from day one."
        benefits={[
          'Workflow audit and hook point identification included',
          'Adversarial test cases for every policy hook',
          'Documentation and handover session',
        ]}
        submitText="Build Your Hooks"
      />
      <Footer />
    </main>
  )
}
