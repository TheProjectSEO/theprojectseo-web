import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Heading, Lead, Subheading } from '@/components/text'
import { JsonLd } from '@/components/json-ld'
import { CTAFormSection } from '@/components/service-page-sections'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { CheckIcon } from '@/components/check-icon'

export const metadata: Metadata = {
  title: 'Our Methodology: How We Win SEO in the AI-Native Era | TheProjectSEO',
  description:
    'The operating system behind TheProjectSEO: 67-skill agent stack, fine-tuned Qwen3.5-27B SEO model, OpenClaw 12-agent framework, BigQuery data infrastructure, and n8n automation. How we deliver for 15 clients using the same stack we sell.',
  alternates: {
    canonical: '/methodology',
  },
  openGraph: {
    title: 'Our Methodology: How We Win SEO in the AI-Native Era | TheProjectSEO',
    description:
      '67 skills, 12 agents, 1 fine-tuned model, 100% citation rate. How a six-person agency runs 15 client engagements through an AI-native operating system built on Claude Code, Qwen3.5-27B, and n8n.',
    url: 'https://theprojectseo.com/methodology',
    siteName: 'TheProjectSEO',
    locale: 'en_US',
    type: 'article',
  },
}

/* -------------------------------------------------------------------------- */
/* Section: Why traditional playbooks are breaking                              */
/* -------------------------------------------------------------------------- */

function WhyPlaybooksBreakSection() {
  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="max-w-3xl">
          <Subheading as="h2" className="mb-6">
            The Shifting Ground
          </Subheading>
          <div className="space-y-6 text-base leading-relaxed text-slate">
            <p>
              The SEO playbook that worked from 2015 to 2022 was a content volume game. Publish enough articles on enough keywords, build enough links, fix enough technical issues, and organic traffic eventually follows. Teams that did this well and consistently won. The underlying system rewarded persistence and scale.
            </p>
            <p>
              That system is still partly intact. Technical SEO fundamentals have not changed: crawlability, indexability, Core Web Vitals, schema markup, internal linking architecture. Google still needs pages to load fast and make structural sense. But the content side of the equation has shifted in ways that most agencies have not internalized yet.
            </p>
            <p>
              Two things happened in close succession. First, large language models got good enough that generating competent, generic content became trivially cheap. This flooded the index with material that was technically adequate but structurally indistinct from ten other pages ranking on the same keyword. Second, Google started adjusting its quality signals to respond to this. EEAT requirements, helpfulness signals, and the increasing weight of first-hand expertise are not coincidental. They are direct responses to a world where the cost of content production hit zero.
            </p>
            <p>
              The result: generic content is getting harder to rank, not easier. Which means the agencies still competing on content volume are running faster on a treadmill that is tilting against them. The advantage now lives in specificity, depth, and demonstrable expertise. These are things that require actual knowledge of the subject and the client.
            </p>
            <p>
              We built TheProjectSEO's operating system around this reality. Not by avoiding AI, but by using it at the layer where it actually helps: research synthesis, structured output, data analysis, and workflow automation. The parts that require genuine expertise and client knowledge stay with humans. The parts that are genuinely mechanical get automated. If you want to see how this looks applied to an actual client, the <Link href="/case-studies" className="text-accent underline underline-offset-2 hover:text-ink transition-colors">case studies section</Link> has eight active engagements worth reviewing.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section: The operating system                                                */
/* -------------------------------------------------------------------------- */

function OperatingSystemSection() {
  const stackItems = [
    {
      label: '67-Skill Agent Stack',
      detail:
        'Every repeatable function in our workflow has a corresponding Skill: keyword research, content brief generation, on-page optimization, schema markup, competitor gap analysis, blog writing, validation scoring, schema generation, and reporting. Each Skill is a self-contained agent module with a defined input format, a defined output format, and built-in quality checks. When a team member starts a task, they invoke the Skill, not a blank context window.',
    },
    {
      label: 'seo_query_kb: Fine-Tuned SEO Model',
      detail:
        'We trained a Qwen3.5-27B model on curated SEO knowledge from Ahrefs, Backlinko, Moz, Search Engine Journal, and Google Search Central documentation. It runs locally on our M4 Pro at 5-6 tokens per second and is accessible via an MCP server called seo_query_kb. Every SEO question routes through it before general knowledge. The model returns citation-grounded answers with a 100% citation rate, which means nothing gets fabricated. When confidence is low, it flags for escalation to live data sources.',
    },
    {
      label: 'OpenClaw: 12-Agent Orchestration',
      detail:
        'OpenClaw is our internal 12-agent framework built on the Claude Agent SDK. Each agent handles a specific domain: technical audit, content research, content writing, content editing, schema generation, link prospecting, reporting, and several others. Agents pass structured context to each other rather than starting fresh each time. This is what allows us to run complex multi-step campaigns without losing thread continuity between sessions.',
    },
    {
      label: 'Claude Code as the CLI Backbone',
      detail:
        'Every client session runs through Claude Code CLI. CLAUDE.md files at both the project root and client level inject the right context automatically: client ICP, keyword targets, brand voice rules, technical configuration, active strategy, and current deliverables. A team member opening a session for any client has the full context loaded before they type a single command.',
    },
    {
      label: 'n8n Automation Workflows',
      detail:
        'We have mapped 120 SEO workflows to n8n automation blueprints covering GSC data pulls, GA4 ingestion, BigQuery loading, Ahrefs rank tracking, Slack reporting, and content pipeline triggers. The automation layer does not replace judgment. It removes the tedious data-gathering and formatting work that used to consume hours before any actual analysis could begin.',
    },
  ]

  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">The Operating System</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
            Five components that run our agency daily.
          </Heading>
          <Lead className="mt-6 max-w-2xl mx-auto">
            The stack is not theoretical. It handles 15 active client engagements across B2B SaaS, real estate, travel, HR tech, and AI verticals. Every component listed here is in daily production use.
          </Lead>
        </div>

        <div className="max-w-4xl mx-auto space-y-0 divide-y divide-border">
          {stackItems.map((item, i) => (
            <div key={i} className="py-10 first:pt-0">
              <div className="flex items-start gap-6">
                <div className="font-mono text-2xl font-black text-accent shrink-0 w-8">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">{item.detail}</p>
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
/* Section: How a typical engagement flows                                      */
/* -------------------------------------------------------------------------- */

function EngagementFlowSection() {
  const phases = [
    {
      number: '01',
      title: 'Baseline and audit',
      weeks: 'Weeks 1-4',
      description:
        'Technical audit using our automated audit skill plus Screaming Frog for crawl data. GSC and GA4 baseline pulled via OAuth scripts and loaded into BigQuery. Keyword clustering run against the client\'s existing ranking keywords plus competitor gap analysis. The output is a prioritized issue list and a 6-month roadmap. No recommendations before the data is in.',
    },
    {
      number: '02',
      title: 'Technical fixes and architecture',
      weeks: 'Weeks 2-8',
      description:
        'Technical issues addressed in priority order: crawl efficiency first, then indexability, then on-page structure. Internal linking architecture review. Schema markup implementation for the relevant entity types. Where content structure is the underlying problem, we fix the architecture before adding new content.',
    },
    {
      number: '03',
      title: 'Content production',
      weeks: 'Weeks 4-ongoing',
      description:
        'Content brief generated by our brief-generator skill using the fine-tuned SEO model. Brief goes to the client-specific writer skill, which has the client\'s ICP, brand voice, and competitor context loaded. Output goes through our anti-AI validator (8 dimensions, pass threshold of 85/100). Content that does not pass does not go to the client. Editor reviews the validated draft. No generic articles go out under our name.',
    },
    {
      number: '04',
      title: 'Link building',
      weeks: 'Weeks 6-ongoing',
      description:
        'BOFU-first approach: external listicle placements in industry directories before any outreach. Competitor backlink gap analysis using Ahrefs via MCP. Outreach email drafts generated by our outreach skill with personalization pulled from live prospect research. Volume is secondary to relevance and domain quality.',
    },
    {
      number: '05',
      title: 'Measurement and reporting',
      weeks: 'Weekly cadence',
      description:
        'Automated weekly GSC pull into BigQuery. Rank tracking via Ahrefs. Attribution views connecting organic sessions to CRM pipeline data where integrations exist. Reports generated by our reporting automation, reviewed by the account lead, and delivered on a fixed schedule. No manual assembly, no missed weeks.',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">How an Engagement Flows</Subheading>
          <Heading as="h3" className="mt-2">
            Five phases, no ambiguity.
          </Heading>
        </div>

        <div className="max-w-3xl mx-auto">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className={`py-8 ${index < phases.length - 1 ? 'border-b border-border' : ''}`}
            >
              <div className="flex items-center gap-3 mb-3">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-accent font-medium">
                  Phase {phase.number}
                </p>
                <span className="font-mono text-xs text-ash">{phase.weeks}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold text-ink mb-3">
                {phase.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate">{phase.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section: Human vs agent division                                             */
/* -------------------------------------------------------------------------- */

function HumanVsAgentSection() {
  const humanTasks = [
    'Client strategy and priority calls',
    'Interpreting what data means for a specific client',
    'Brand voice decisions and editorial judgment',
    'Recognizing when a keyword cluster does not match buyer intent',
    'Competitive positioning recommendations',
    'Client relationship and communication',
    'Deciding what not to build',
  ]

  const agentTasks = [
    'Keyword research and clustering at scale',
    'Content brief generation with SEO scoring',
    'Schema markup generation and validation',
    'GSC and GA4 data ingestion and warehousing',
    'Weekly rank tracking and reporting',
    'Backlink gap analysis and prospect research',
    'Anti-AI content validation (8-dimension scoring)',
    'Internal linking opportunity identification',
    'Technical audit crawl data processing',
  ]

  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark as="h2">Human Work vs Agent Work</Subheading>
          <Heading as="h3" dark className="mt-2">
            We are not replacing strategists with agents.
          </Heading>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-px bg-white/10 lg:grid-cols-2">
          <div className="bg-ink p-10">
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              What humans handle
            </h3>
            <ul className="space-y-3">
              {humanTasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon className="size-3.5 shrink-0 fill-white/40 mt-0.5" />
                  {task}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ink p-10">
            <h3 className="font-heading text-lg font-semibold text-white mb-6">
              What agents handle
            </h3>
            <ul className="space-y-3">
              {agentTasks.map((task, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-white/70">
                  <CheckIcon className="size-3.5 shrink-0 fill-accent mt-0.5" />
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center">
          <p className="text-white/50 text-sm leading-relaxed">
            The ratio shifts over time. As we build deeper context for a client, more judgment work gets encoded into Skills and the fine-tuned model. But the loop always has a human reviewing the output before anything leaves the agency.
          </p>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section: Data infrastructure                                                 */
/* -------------------------------------------------------------------------- */

function DataInfraSection() {
  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="max-w-4xl">
          <Subheading as="h2" className="mb-6">
            Data Infrastructure
          </Subheading>
          <div className="space-y-6 text-base leading-relaxed text-slate">
            <p>
              Most SEO reporting is assembled manually, once a month, from five different tools that do not talk to each other. By the time the report arrives, the data is three weeks old and no one knows which metric actually moved the needle. We built a different system.
            </p>
            <p>
              Every client with sufficient data access gets a BigQuery warehouse. GSC data pulls weekly via OAuth scripts into structured tables. GA4 events land in a separate dataset. Where CRM access exists (Freshsales, Salesforce), we run ingestion pipelines that create attribution views connecting organic sessions to actual pipeline and revenue. Google Ads data pipes in for clients running paid alongside organic.
            </p>
            <p>
              The result is a single queryable source of truth. When a client asks whether a title tag change improved CTR, we do not eyeball a GSC screenshot. We run a before/after query against the BigQuery table and produce a specific number. When a campaign lead asks which location pages are generating the most pipeline, we join GSC page data with Salesforce opportunity data and produce a ranked list.
            </p>
            <p>
              This infrastructure takes 4-6 weeks to build for a new client. It is not optional for us. An engagement without data infrastructure is an engagement where we are guessing at impact, and we will not operate that way. If you want to understand how this fits into <Link href="/services/claude/claude-agency" className="text-accent underline underline-offset-2 hover:text-ink transition-colors">a full Claude-native engagement</Link>, the services section covers it in detail.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-border-strong sm:grid-cols-4">
            {[
              { source: 'Google Search Console', role: 'Rankings, CTR, impressions' },
              { source: 'Google Analytics 4', role: 'Session, event, conversion data' },
              { source: 'BigQuery', role: 'Central warehouse, attribution views' },
              { source: 'Ahrefs', role: 'Backlinks, competitor keywords, rank tracking' },
            ].map((item) => (
              <div key={item.source} className="bg-paper p-6">
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-2">{item.source}</p>
                <p className="text-sm text-slate">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section: Why we can deliver what larger agencies cannot                      */
/* -------------------------------------------------------------------------- */

function WhyWeWinSection() {
  const points = [
    {
      title: 'The stack eliminates the scale problem',
      body: 'A traditional six-person SEO team handling 15 clients would be underwater on reporting alone. The automation layer absorbs the mechanical work so the team focuses on judgment work. We can take on a client at a complexity level that a 20-person agency would need double the headcount to match.',
    },
    {
      title: 'We built for consistency, not for heroics',
      body: 'Every function has a Skill. Every Skill has a quality check. The content validation system scores against 8 dimensions and blocks output that does not pass. This is not about individual brilliance. It is about a system that produces consistent work regardless of which team member runs the session.',
    },
    {
      title: 'We can measure what we claim',
      body: 'The BigQuery infrastructure means we can show before/after on any metric we claim to have moved. When we say CTR improved, we can show the query. When we say location page traffic grew, we can show the GSC pull with timestamps. This keeps us honest and gives clients a number to hold us to.',
    },
    {
      title: 'Our AI knowledge is grounded in citations',
      body: 'The seo_query_kb model returns 100% citation-grounded answers from our curated knowledge base. This means no fabricated stats, no outdated algorithm claims, no generic advice dressed up as expertise. When the model does not know, it says so and flags for live data lookup. That is a materially different information quality than an agency asking a general LLM.',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">Why the Model Works</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
            Four structural advantages over a conventional agency.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
          {points.map((point, i) => (
            <div key={i} className="bg-paper p-10">
              <div className="flex items-start gap-4">
                <CheckIcon className="size-5 shrink-0 fill-accent mt-1" />
                <div>
                  <h3 className="font-heading text-lg font-semibold text-ink mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate">{point.body}</p>
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
/* Page                                                                         */
/* -------------------------------------------------------------------------- */

export default function MethodologyPage() {
  return (
    <main className="overflow-hidden">
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://theprojectseo.com/methodology',
          headline: 'Our Methodology: How We Win SEO in the AI-Native Era',
          description:
            'The operating system behind TheProjectSEO: 67-skill agent stack, fine-tuned Qwen3.5-27B SEO model, OpenClaw 12-agent framework, BigQuery data infrastructure, and n8n automation. How we deliver for 15 clients using the same stack we sell.',
          author: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://theprojectseo.com/#organization',
            name: 'TheProjectSEO',
            url: 'https://theprojectseo.com',
          },
          url: 'https://theprojectseo.com/methodology',
          about: {
            '@type': 'Thing',
            name: 'AI-Native SEO Methodology',
          },
        }}
      />

      {/* Hero */}
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-20 sm:pt-24 sm:pb-28 max-w-4xl">
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-6">
              Methodology
            </p>
            <h1 className="font-display text-[clamp(48px,6vw,96px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              How We Win SEO in the{' '}
              <em className="text-accent italic">AI-Native</em> Era
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-stone">
              We run the same stack we sell. A 67-skill agent system, a fine-tuned SEO model with 100% citation rate, a 12-agent orchestration framework, and BigQuery data infrastructure connecting GSC, GA4, and CRM data. This page explains how the system works and why it produces better results than a conventional agency model.
            </p>
          </div>
        </Container>
      </div>

      {/* Stats */}
      <div className="bg-cream border-y border-border py-14">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: '67', label: 'Skills in production' },
              { value: '12', label: 'Agents in OpenClaw' },
              { value: '100%', label: 'Citation rate, SEO model' },
              { value: '120', label: 'Automated workflows mapped' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-mono text-[clamp(36px,5vw,56px)] font-black text-accent">
                  {stat.value}
                </div>
                <div className="font-mono text-xs uppercase tracking-[0.15em] text-stone mt-3">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      <WhyPlaybooksBreakSection />
      <OperatingSystemSection />
      <EngagementFlowSection />
      <HumanVsAgentSection />
      <DataInfraSection />
      <WhyWeWinSection />

      {/* Link to case studies */}
      <div className="bg-paper py-16 border-y border-border">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.12em] text-ash mb-2">See it in practice</p>
              <p className="text-base leading-relaxed text-slate">
                Eight active client engagements running on this methodology, spanning five industries.
              </p>
            </div>
            <Link
              href="/case-studies"
              className="shrink-0 inline-flex items-center gap-2 bg-ink text-white px-6 py-3 font-mono text-sm font-medium uppercase tracking-[0.1em] hover:bg-accent transition-colors"
            >
              View case studies
            </Link>
          </div>
        </Container>
      </div>

      {/* CTA */}
      <CTAFormSection
        subheading="Ready to Work Together?"
        heading="See this methodology applied to your site."
        lead="We start with a technical audit and data infrastructure setup before making any promises. If the foundation is not in place, we build it first."
        benefits={[
          'Free 30-minute audit call',
          'Technical baseline review included',
          'Fixed-scope proposal within 48 hours',
        ]}
        submitText="Start the Audit"
      />

      <Footer />
    </main>
  )
}
