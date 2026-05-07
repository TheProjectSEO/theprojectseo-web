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
    'The operating system behind TheProjectSEO: 67-skill agent stack, fine-tuned SEO model, OpenClaw 12-agent framework, BigQuery data infrastructure, AEO citation tracking, and n8n automation. How we deliver for 15 clients using the same stack we sell.',
  alternates: {
    canonical: '/methodology',
  },
  openGraph: {
    title: 'Our Methodology: How We Win SEO in the AI-Native Era | TheProjectSEO',
    description:
      '67 skills, 12 agents, 1 fine-tuned SEO model, 100% citation rate. How a six-person agency runs 15 client engagements through an AI-native operating system built on Claude Code, BigQuery, and n8n.',
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
  const problems = [
    {
      stat: '3 wks',
      label: 'Data lag',
      line: 'Reports assembled monthly from 5 tools that don\'t talk to each other.',
      fix: 'BigQuery joins GSC + GA4 + Ads + CRM. Answer in one query.',
    },
    {
      stat: '10×',
      label: 'Wrong AI layer',
      line: 'Generic LLM produces content indistinct from the 10 pages already ranking.',
      fix: '12-stage pipeline. Data first, model second. Every claim cites a source.',
    },
    {
      stat: '$0',
      label: 'Attribution gap',
      line: 'Most agencies can\'t trace an organic visit to the deal that closed Tuesday.',
      fix: 'CRM ingestion pipeline joins organic sessions to pipeline and revenue.',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">The Problem We&apos;re Solving</Subheading>
          <Heading as="h3" className="mt-2 max-w-2xl mx-auto">
            Three gaps every SEO agency has. We closed them.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-3">
          {problems.map((p) => (
            <div key={p.label} className="bg-cream p-10">
              <div className="font-mono text-[56px] font-black text-accent leading-none mb-3">{p.stat}</div>
              <h3 className="font-heading text-lg font-semibold text-ink mb-2">{p.label}</h3>
              <p className="text-sm text-slate mb-5 leading-relaxed">{p.line}</p>
              <div className="border-l-2 border-accent pl-4">
                <p className="text-sm font-medium text-ink">{p.fix}</p>
              </div>
            </div>
          ))}
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
      number: '67',
      label: 'Skills in production',
      detail: 'Every task has a Skill. Every Skill loads the client\'s context, voice rules, and strategy before a word is written.',
    },
    {
      number: '80MB',
      label: 'SEO knowledge corpus',
      detail: 'Fine-tuned model trained on Ahrefs, Backlinko, Moz, SEJ, Google Search Central. 100% citation rate. Zero fabrication.',
    },
    {
      number: '12',
      label: 'Agents in OpenClaw',
      detail: 'Guardian runs every 60 seconds. SEO Sentinel every 6 hours. Competitor Watcher daily. Each on a fixed schedule with health checks.',
    },
    {
      number: '1',
      label: 'CLAUDE.md per client',
      detail: 'Keywords, positions, brand rules, banned terms, active strategy — loaded automatically before the first keystroke of every session.',
    },
    {
      number: '120',
      label: 'Automated workflows',
      detail: 'GSC weekly, GA4 nightly, Ads daily, rank tracking, crawl triggers, Slack reporting. Mechanical work is gone before analysis starts.',
    },
    {
      number: '3',
      label: 'AI platforms tracked',
      detail: 'Google AI Overview, ChatGPT, Perplexity. Citation presence per commercial query, per client. Reportable, not anecdotal.',
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

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-3">
          {stackItems.map((item) => (
            <div key={item.label} className="bg-paper p-8">
              <div className="font-mono text-[48px] font-black text-accent leading-none mb-3">{item.number}</div>
              <h3 className="font-heading text-base font-semibold text-ink mb-2">{item.label}</h3>
              <p className="text-sm leading-relaxed text-slate">{item.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section: Research protocol                                                   */
/* -------------------------------------------------------------------------- */

function ResearchProtocolSection() {
  const stages = [
    { n: '01', label: 'Keyword resolve', detail: 'BigQuery first. If no data history, DataForSEO. Never gut feel.' },
    { n: '02', label: 'Live SERP', detail: 'Top 10 via DataForSEO API — titles, lengths, SERP features, AI Overview presence.' },
    { n: '03', label: 'Scrape top 10', detail: 'Scrapling extracts heading hierarchy, entities, schema types. Structured JSON, not raw HTML.' },
    { n: '04', label: 'Content gap analysis', detail: 'What the top-10 pages have that ours doesn\'t. Content gap, not keyword gap.' },
    { n: '05', label: 'BigQuery historical context', detail: 'Client\'s own GSC + paid conversion data. This overrides external assumptions.' },
    { n: '06', label: 'SEO KB grounding', detail: 'seo_query_kb returns citation-grounded best practice. CONFIDENCE: ESCALATE → switch to live data.' },
    { n: '07', label: 'Evidence brief', detail: 'Stages 1–6 synthesised into a single brief. Writer drafts from this — never a vague prompt.' },
    { n: '08–09', label: 'Write + anti-AI edit', detail: 'Client writer skill drafts. 8-dimension validator strips 50+ AI-tell words and patterns.' },
    { n: '10', label: 'Brand voice edit', detail: 'Client editor enforces tone, banned terminology, competitor rules.' },
    { n: '11', label: 'Validation gate', detail: '85/100 minimum. Pipeline halts below threshold and lists specific fixes.' },
    { n: '12', label: 'Schema generation', detail: 'JSON-LD for the page type. 4-layer validation before deploy.' },
  ]

  return (
    <div className="bg-ink py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading dark as="h2">The Research Protocol</Subheading>
          <Heading as="h3" dark className="mt-2 max-w-3xl mx-auto">
            12 stages. Data first, model second. No shortcuts.
          </Heading>
          <p className="mt-6 text-lg leading-relaxed text-white/60 max-w-2xl mx-auto">
            Every piece of content runs this sequence in full. The order is fixed because each stage invalidates assumptions the previous one could not see. Skipping Stage 5 means you write for what ranks generally, not what converts for this specific client.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2">
          {stages.map((s) => (
            <div key={s.n} className="bg-ink p-8">
              <div className="flex items-start gap-4">
                <span className="font-mono text-xs font-black text-accent shrink-0 w-8 pt-0.5">{s.n}</span>
                <div>
                  <h3 className="font-heading text-sm font-semibold text-white mb-2">{s.label}</h3>
                  <p className="text-xs leading-relaxed text-white/55">{s.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-12 border border-white/10 p-8">
          <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent mb-4">BOFU Phase Gate</p>
          <p className="text-sm leading-relaxed text-white/70">
            Before any content enters Stage 1, we confirm a phase gate: does the client have live pages for at least two competitor alternatives articles, one head-to-head comparison, and one &ldquo;best [category] for [niche]&rdquo; listicle? If not, the requested content must be one of those types — or it is deferred. At any moment, only ~5% of your target market is actively in-market. BOFU content captures that 5%, which converts at 10x the rate of cold informational traffic. Informational content before BOFU is live is traffic without pipeline.
          </p>
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
      title: 'Baseline + audit',
      weeks: 'Weeks 1–4',
      deliverables: ['Screaming Frog crawl → CSV', 'GSC + GA4 → BigQuery', 'P0 / P1 / P2 issue list', '6-month roadmap'],
    },
    {
      number: '02',
      title: 'Technical fixes + data infra',
      weeks: 'Weeks 2–8',
      deliverables: ['P0 → P1 → P2 sequence', 'GA4 events fixed Week 1', 'Schema 4-layer validated', 'Internal linking reviewed'],
    },
    {
      number: '03',
      title: 'BOFU content first',
      weeks: 'Weeks 4–ongoing',
      deliverables: ['Competitor alternatives', 'Head-to-head comparisons', 'Category listicles', '12-stage pipeline starts'],
    },
    {
      number: '04',
      title: 'Link building: 2 tracks',
      weeks: 'Weeks 6–ongoing',
      deliverables: ['Track 2: external listicles (priority)', 'DA50+ links + LLM citations', 'Track 1: DR40+ outreach', 'Ahrefs competitor gap'],
    },
    {
      number: '05',
      title: 'Measurement + reporting',
      weeks: 'Weekly cadence',
      deliverables: ['GSC weekly → BigQuery', 'GA4 events nightly', 'CRM-organic join (if access)', 'Fixed weekly report'],
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">How an Engagement Flows</Subheading>
          <Heading as="h3" className="mt-2">
            5 phases. Fixed sequence. No exceptions.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-5">
          {phases.map((phase) => (
            <div key={phase.number} className="bg-cream p-6 flex flex-col">
              <div className="font-mono text-[40px] font-black text-accent leading-none mb-3">
                {phase.number}
              </div>
              <h3 className="font-heading text-sm font-semibold text-ink mb-1">{phase.title}</h3>
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-ash mb-4">{phase.weeks}</p>
              <div className="flex flex-col gap-1.5 mt-auto">
                {phase.deliverables.map((d) => (
                  <span key={d} className="inline-block bg-white border border-border px-2 py-0.5 font-mono text-[10px] text-slate leading-relaxed">
                    {d}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section: Quality gates                                                        */
/* -------------------------------------------------------------------------- */

function QualityGatesSection() {
  const gates = [
    {
      number: '01',
      title: 'Brand validation',
      threshold: '>75',
      unit: '/ 100',
      line: 'Voice, banned terms, CTA rules, ICP fit. Per-client validator — not a shared template.',
    },
    {
      number: '02',
      title: 'SEO compliance',
      threshold: '>80',
      unit: '/ 100',
      line: 'Title, meta, heading hierarchy, keyword density, schema type, OG tags. No critical failures.',
    },
    {
      number: '03',
      title: 'Anti-AI validation',
      threshold: '>85',
      unit: '/ 100',
      line: '50+ banned words, 8 dimensions. "leverage", "seamless", "meticulously" each trigger a block.',
    },
    {
      number: '04',
      title: '4-layer schema',
      threshold: '100%',
      unit: 'pass',
      line: 'JSON-LD parse → Rich Results rules → HTML embed → Search Console confirms. One fail = no deploy.',
    },
    {
      number: '05',
      title: 'Data traceability',
      threshold: 'Every',
      unit: 'number',
      line: 'Every stat traces to a Python script in the project directory. AI cannot estimate a measured number.',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">Quality Gates</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
            5 checks. <code className="font-mono text-[0.75em] bg-white border border-border px-2 py-0.5 not-italic">/deliver</code> blocks automatically.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-5">
          {gates.map((g) => (
            <div key={g.number} className="bg-cream p-6 flex flex-col">
              <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ash mb-3">{g.number}</p>
              <div className="mb-4">
                <span className="font-mono text-[32px] font-black text-accent leading-none">{g.threshold}</span>
                <span className="font-mono text-xs text-ash ml-1">{g.unit}</span>
              </div>
              <h3 className="font-heading text-sm font-semibold text-ink mb-3">{g.title}</h3>
              <p className="text-xs leading-relaxed text-slate mt-auto">{g.line}</p>
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
  const views = [
    {
      name: 'v_keyword_unified',
      question: 'Paid keyword → organic rank. One query.',
      flags: ['PAID_ORGANIC_OVERLAP', 'SEO_CONTENT_GAP', 'SEO_GROWTH_OPPORTUNITY', 'SEO_PUSH_TO_PAGE1'],
      value: 'Shows where paid budget is redundant and where content investment closes a proven gap.',
    },
    {
      name: 'v_url_performance',
      question: 'Every URL: paid spend + organic traffic + GA4 conversions.',
      flags: ['Paid spend redundant (strong organic rank)', 'Organic traffic, zero GA4 conversions', 'Conversions but no organic traffic', '15–30% paid overlap found on typical client'],
      value: 'Moves budget decisions from opinion to data. The 15–30% overlap usually funds the SEO retainer.',
    },
    {
      name: 'v_search_term_opportunities',
      question: 'Converting paid terms with no organic page. Build those.',
      flags: ['Converting terms with zero organic targeting', 'High conversion count + high CPA', 'Missing-intent: what buyers search vs what tools suggest'],
      value: 'The content roadmap. Every page idea traces to a term already proven to produce customers.',
    },
  ]

  return (
    <div className="bg-paper py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">How We Use BigQuery</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
            3 views. 5 sources joined. Answers no dashboard gives.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-3 mb-10">
          {views.map((v) => (
            <div key={v.name} className="bg-paper p-8">
              <p className="font-mono text-xs font-bold text-accent mb-3 break-all">{v.name}</p>
              <p className="font-heading text-sm font-semibold text-ink mb-5 leading-snug">{v.question}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {v.flags.map((f) => (
                  <span key={f} className="inline-block border border-border px-2 py-0.5 font-mono text-[10px] text-slate">
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-xs text-ash border-l-2 border-accent pl-3 leading-relaxed">{v.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-px bg-border-strong sm:grid-cols-5">
          {[
            { source: 'GSC', role: 'Rankings, CTR — weekly' },
            { source: 'GA4', role: 'Events, conversions — nightly' },
            { source: 'Google Ads', role: 'Spend, search terms' },
            { source: 'CRM', role: 'Pipeline + revenue' },
            { source: 'Ahrefs', role: 'Backlinks, rank tracking' },
          ].map((item) => (
            <div key={item.source} className="bg-paper p-5">
              <p className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1.5">{item.source}</p>
              <p className="text-xs text-slate leading-relaxed">{item.role}</p>
            </div>
          ))}
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
      stat: '15–30%',
      label: 'Paid overlap on typical onboard',
      line: 'v_keyword_unified flags every keyword you pay for where organic rank ≤ 3 already earns the click free.',
    },
    {
      stat: '0',
      label: 'Guesses on the content roadmap',
      line: 'Every page idea traces to a converting paid term in v_search_term_opportunities. Proven demand, not prediction.',
    },
    {
      stat: '5',
      label: 'Gates before anything reaches you',
      line: '/deliver blocks automatically on brand, SEO, anti-AI, schema, and data traceability.',
    },
    {
      stat: '10×',
      label: 'BOFU conversion rate vs informational',
      line: 'Competitor alternatives are live before blog posts start. At any moment, ~5% of your ICP is actively buying.',
    },
  ]

  return (
    <div className="bg-cream py-24">
      <Container>
        <div className="text-center mb-16">
          <Subheading as="h2">Why the Model Works</Subheading>
          <Heading as="h3" className="mt-2 max-w-3xl mx-auto">
            4 structural advantages. Each one measured.
          </Heading>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border-strong sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.label} className="bg-paper p-8">
              <div className="font-mono text-[48px] font-black text-accent leading-none mb-3">{p.stat}</div>
              <h3 className="font-heading text-sm font-semibold text-ink mb-3">{p.label}</h3>
              <p className="text-xs leading-relaxed text-slate">{p.line}</p>
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
            'The operating system behind TheProjectSEO: 67-skill agent stack, fine-tuned SEO model, OpenClaw 12-agent framework, BigQuery data infrastructure, and n8n automation. How we deliver for 15 clients using the same stack we sell.',
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
              We run the same stack we sell. A 12-stage content pipeline where data comes before LLM, not after. Three BigQuery cross-channel views that answer business questions no tool dashboard can formulate. Five quality gates that block every deliverable until it passes. This page describes exactly how it works — nothing held back.
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
              { value: '3', label: 'AI platforms tracked per client' },
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
      <ResearchProtocolSection />
      <EngagementFlowSection />
      <DataInfraSection />
      <QualityGatesSection />
      <HumanVsAgentSection />
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
