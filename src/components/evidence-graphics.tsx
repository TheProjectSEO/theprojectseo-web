import type { ReactNode } from 'react'
import Image from 'next/image'
import {
  type LucideIcon,
  Activity,
  ArrowRight,
  BarChart3,
  Blocks,
  Bot,
  Braces,
  Building2,
  CheckCircle2,
  CircleDot,
  Code2,
  Compass,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Globe2,
  Layers3,
  Link2,
  MapPin,
  Network,
  Route,
  Search,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react'
import {
  RiGeminiFill,
  RiGoogleFill,
  RiGrokAiFill,
  RiMicrosoftCopilotFill,
  RiOpenaiFill,
  RiPerplexityFill,
} from 'react-icons/ri'

export type EvidenceGraphic = {
  source: string
  captureDate: string
  reportingWindow: string
  badgeLabel?: string
  dateLabel?: string
  content: ReactNode
}

type GraphicIcon = LucideIcon

type VisualKind =
  | 'ai'
  | 'authority'
  | 'commerce'
  | 'content'
  | 'local'
  | 'measurement'
  | 'roadmap'
  | 'technical'

type EditorialPhoto = {
  src: string
  alt: string
  width: number
  height: number
}

const decisionSteps = [
  {
    number: '01',
    label: 'Evidence',
    title: 'Real driver tasks',
    detail: 'Tolls, routes, RFID, exits, restrictions, traffic and policy.',
  },
  {
    number: '02',
    label: 'Decision',
    title: 'Task-led architecture',
    detail: 'Give each recurring journey a clear page owner and search job.',
  },
  {
    number: '03',
    label: 'Implementation',
    title: 'Connected source system',
    detail: 'Direct facts, supporting context, internal links and update ownership.',
  },
  {
    number: '04',
    label: 'Validation',
    title: 'Multi-surface evidence',
    detail: 'Keep Google, Bing, analytics and tracked AI responses separate.',
  },
]

function ExpresswayDecisionGraphic() {
  return (
    <div
      role="img"
      aria-label="Expressway.PH decision artifact showing how driver-task evidence led to task-led architecture, implementation, and measured validation."
      className="relative overflow-hidden bg-paper p-5 text-ink sm:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute -right-16 -top-16 size-48 rounded-full border border-signal/20 shadow-[0_0_0_28px_rgba(73,103,122,0.05),0_0_0_56px_rgba(122,38,58,0.035)]"
      />

      <div className="relative flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            Expressway.PH · Decision record
          </p>
          <p className="mt-2 max-w-md font-heading text-2xl font-semibold leading-tight text-ink">
            Turn fragmented road information into a usable search product.
          </p>
        </div>
        <span className="bg-action px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.11em] text-ink">
          Owned project
        </span>
      </div>

      <div className="relative mt-7 grid gap-px bg-border-strong sm:grid-cols-2">
        {decisionSteps.map((step) => (
          <div key={step.number} className="relative bg-paper p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent font-mono text-[10px] font-semibold text-white">
                {step.number}
              </span>
              <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.12em] text-ash">
                {step.label}
              </span>
            </div>
            <p className="mt-4 font-heading text-lg font-semibold text-ink">{step.title}</p>
            <p className="mt-2 text-sm leading-6 text-slate">{step.detail}</p>
          </div>
        ))}
      </div>

      <div className="relative mt-5 grid gap-px bg-white/15 sm:grid-cols-3">
        <div className="bg-ink p-4 text-white">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/50">
            Estimated organic traffic
          </p>
          <p className="mt-2 font-display text-3xl font-medium">49.2K</p>
          <p className="mt-1 text-[11px] text-white/50">Ahrefs · July 2026</p>
        </div>
        <div className="bg-ink p-4 text-white">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/50">
            Organic keywords
          </p>
          <p className="mt-2 font-display text-3xl font-medium">6.8K</p>
          <p className="mt-1 text-[11px] text-white/50">Ahrefs · all locations</p>
        </div>
        <div className="bg-action p-4 text-ink">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/55">
            Evidence rule
          </p>
          <p className="mt-2 font-heading text-base font-semibold leading-5">
            Observation, not a guarantee.
          </p>
          <p className="mt-1 text-[11px] text-ink/55">Source and window stay visible.</p>
        </div>
      </div>
    </div>
  )
}

const aiSurfaces = [
  { label: 'Google AI Overviews', value: 3400, display: '3.4K', Icon: RiGoogleFill },
  { label: 'ChatGPT', value: 2400, display: '2.4K', Icon: RiOpenaiFill },
  { label: 'Google AI Mode', value: 2200, display: '2.2K', Icon: RiGoogleFill },
  { label: 'Microsoft Copilot', value: 1800, display: '1.8K', Icon: RiMicrosoftCopilotFill },
  { label: 'Perplexity', value: 1700, display: '1.7K', Icon: RiPerplexityFill },
  { label: 'Grok', value: 715, display: '715', Icon: RiGrokAiFill },
  { label: 'Gemini', value: 672, display: '672', Icon: RiGeminiFill },
]

function ExpresswayVisibilityGraphic() {
  return (
    <div
      role="img"
      aria-label="Expressway.PH visibility validation showing Google Search Console, Bing Webmaster Tools, Google Analytics, and Ahrefs tracked AI response observations."
      className="relative overflow-hidden bg-paper p-5 text-ink sm:p-7"
    >
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-5">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.14em] text-accent">
            Expressway.PH · Visibility validation
          </p>
          <p className="mt-2 font-heading text-2xl font-semibold leading-tight">
            One source system, measured across search and AI.
          </p>
        </div>
        <p className="font-mono text-[9px] uppercase leading-4 tracking-[0.1em] text-ash">
          Captured
          <br />
          July 2026
        </p>
      </div>

      <div className="mt-5 grid gap-px bg-border-strong sm:grid-cols-3">
        <div className="bg-ink p-4 text-white">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/50">
            Google Search · 3 months
          </p>
          <p className="mt-2 font-display text-3xl font-medium">141K</p>
          <p className="mt-1 text-xs text-white/55">clicks · 11.1M impressions</p>
        </div>
        <div className="bg-signal p-4 text-white">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/60">
            Bing Search · 3 months
          </p>
          <p className="mt-2 font-display text-3xl font-medium">16K</p>
          <p className="mt-1 text-xs text-white/65">clicks · 496.5K impressions</p>
        </div>
        <div className="bg-action p-4 text-ink">
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ink/55">
            GA4 · 28 days
          </p>
          <p className="mt-2 font-display text-3xl font-medium">69,196</p>
          <p className="mt-1 text-xs text-ink/60">Organic Search sessions</p>
        </div>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex items-center justify-between gap-4">
          <p className="font-heading text-sm font-semibold text-ink">Tracked AI responses</p>
          <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ash">
            Ahrefs response index
          </p>
        </div>
        <div className="grid gap-x-7 gap-y-3 lg:grid-cols-2">
          {aiSurfaces.map(({ label, value, display, Icon }) => (
            <div key={label} className="grid grid-cols-[22px_minmax(0,1fr)_42px] items-center gap-2">
              <Icon aria-hidden="true" className="size-4 text-accent" />
              <div>
                <div className="mb-1 flex items-center justify-between gap-2">
                  <span className="truncate text-[11px] font-medium text-stone">{label}</span>
                </div>
                <div className="h-1.5 overflow-hidden bg-cream">
                  <div
                    className="h-full bg-accent"
                    style={{ width: `${Math.max(8, (value / 3400) * 100)}%` }}
                  />
                </div>
              </div>
              <span className="text-right font-mono text-[10px] font-semibold text-ink">{display}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 border border-border-strong bg-white p-4 sm:p-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-full bg-ink text-white">
              <RiOpenaiFill aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-ink">ChatGPT citation example</p>
              <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-ash">
                Observed 28 July 2026
              </p>
            </div>
          </div>
          <span className="bg-action px-2.5 py-1 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink">
            Live source
          </span>
        </div>
        <p className="mt-4 text-[11px] font-medium leading-5 text-stone">
          Prompt: Compare Autosweep and Easytrip coverage across Philippine expressways.
        </p>
        <p className="mt-3 border-l-2 border-accent pl-3 text-xs leading-5 text-slate">
          The route comparison cited Expressway.PH for the Manila-to-Tagaytay example and
          distinguished the CALAX and SLEX RFID segments.
        </p>
        <a
          href="https://www.expressway.ph/guides/autosweep-vs-easytrip"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 bg-accent-soft px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.08em] text-accent transition-colors hover:bg-action-soft"
        >
          Expressway.ph
          <span aria-hidden="true">↗</span>
          /guides/autosweep-vs-easytrip
        </a>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <p className="text-[11px] leading-5 text-ash">
          AI totals are third-party tracked responses—not users, visits or guaranteed rankings.
        </p>
        <span className="bg-accent-soft px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-accent">
          AI Assistant · 1,172 GA4 sessions
        </span>
      </div>
    </div>
  )
}

const contextualVisualMeta: Record<
  VisualKind,
  {
    eyebrow: string
    source: string
    reportingWindow: string
    Icon: GraphicIcon
  }
> = {
  ai: {
    eyebrow: 'AI discovery system',
    source: 'AI search',
    reportingWindow: 'Prompt, answer and citation workflow',
    Icon: Bot,
  },
  authority: {
    eyebrow: 'Authority system',
    source: 'Authority',
    reportingWindow: 'Source, mention and destination model',
    Icon: Network,
  },
  commerce: {
    eyebrow: 'Commercial search system',
    source: 'Commerce',
    reportingWindow: 'Demand-to-outcome journey',
    Icon: ShoppingBag,
  },
  content: {
    eyebrow: 'Search journey system',
    source: 'Content',
    reportingWindow: 'Intent, page and conversion model',
    Icon: FileSearch,
  },
  local: {
    eyebrow: 'Market discovery system',
    source: 'Local search',
    reportingWindow: 'Market, proof and lead-route model',
    Icon: MapPin,
  },
  measurement: {
    eyebrow: 'Evidence system',
    source: 'Measurement',
    reportingWindow: 'Baseline, observation and decision model',
    Icon: BarChart3,
  },
  roadmap: {
    eyebrow: 'Delivery system',
    source: 'Roadmap',
    reportingWindow: 'Priority, ownership and validation model',
    Icon: Route,
  },
  technical: {
    eyebrow: 'Technical search system',
    source: 'Technical SEO',
    reportingWindow: 'Discover, render, index and monitor model',
    Icon: Braces,
  },
}

const editorialPhotos = {
  strategy: {
    src: '/images/human/seo-strategy-team-collaboration.webp',
    alt: 'A diverse SEO strategy team collaborating around printed page maps and a laptop.',
    width: 1600,
    height: 900,
  },
  technical: {
    src: '/images/human/technical-seo-analysis-workstation.webp',
    alt: 'Two technical SEO specialists reviewing website diagnostics at a workstation.',
    width: 1600,
    height: 900,
  },
  commerce: {
    src: '/images/human/ecommerce-search-merchandising-session.webp',
    alt: 'Two ecommerce specialists reviewing products and a digital catalog together.',
    width: 1600,
    height: 911,
  },
  local: {
    src: '/images/human/local-business-seo-consultation.webp',
    alt: 'A local business owner and an SEO advisor working through a marketing plan.',
    width: 1536,
    height: 1024,
  },
  ai: {
    src: '/images/human/ai-search-research-workshop.webp',
    alt: 'A search researcher and product marketer discussing an AI discovery workflow.',
    width: 1600,
    height: 878,
  },
  consultant: {
    src: '/images/human/seo-consultant-strategy-call.webp',
    alt: 'An experienced SEO consultant taking notes during a remote strategy session.',
    width: 1600,
    height: 840,
  },
} satisfies Record<string, EditorialPhoto>

const editorialPhotoByLabel: Record<string, EditorialPhoto> = {
  'Editorial evidence board': editorialPhotos.strategy,
  'Article-to-service conversion path': editorialPhotos.strategy,
  'SEO prioritization matrix': editorialPhotos.strategy,
  'AI-company case study image': editorialPhotos.ai,
  'Education case study image': editorialPhotos.strategy,
  'Fashion ecommerce case study image': editorialPhotos.commerce,
  'Food or restaurant case study image': editorialPhotos.local,
  'Nonprofit case study image': editorialPhotos.strategy,
  'Technology pipeline case study image': editorialPhotos.ai,
  'Travel booking case study image': editorialPhotos.local,
  'Automotive lead-quality example': editorialPhotos.local,
  'Local profile and lead example': editorialPhotos.local,
  'Calculator product experience': editorialPhotos.commerce,
  'Technical audit evidence architecture': editorialPhotos.technical,
  'Core Web Vitals evidence map': editorialPhotos.technical,
  'Technical before-and-after': editorialPhotos.technical,
  'Example scoped roadmap': editorialPhotos.consultant,
  'Example measurement view': editorialPhotos.consultant,
}

function subjectFromLabel(label: string) {
  const primary = label.includes(' · ') ? label.split(' · ')[0] : label

  return primary
    .replace(/\s+implementation visual$/i, '')
    .replace(/\s+case study image$/i, '')
    .replace(/\s+evidence map$/i, '')
    .trim()
}

function EditorialPhotoVisual({
  label,
  photo,
}: {
  label: string
  photo: EditorialPhoto
}) {
  return (
    <div className="bg-ink text-white">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="size-full object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(23,19,21,0.88)_100%)]"
        />
        <span className="absolute bottom-4 left-4 bg-action px-3 py-2 font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ink">
          Human context
        </span>
      </div>
      <div className="grid gap-2 border-t border-white/10 p-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <p className="font-heading text-sm font-semibold text-white">{subjectFromLabel(label)}</p>
        <p className="font-mono text-[8px] uppercase tracking-[0.1em] text-white/45 sm:text-right">
          Illustrative photography
          <br />
          Not client evidence
        </p>
      </div>
    </div>
  )
}

function visualKindFor(label: string): VisualKind {
  const normalized = label.toLowerCase()

  if (
    /\bai\b|answer|citation|chatgpt|claude|gemini|perplexity|copilot|grok|llm|generative|aeo|entity|knowledge graph|featured snippet|people also ask|rich result/.test(
      normalized,
    )
  ) {
    return 'ai'
  }

  if (
    /backlink|referring domain|anchor text|domain rating|link building|off-page|authority|digital pr/.test(
      normalized,
    )
  ) {
    return 'authority'
  }

  if (
    /ecommerce|shopify|shopping|product|catalog|fashion|revenue|calculator product|faceted/.test(
      normalized,
    )
  ) {
    return 'commerce'
  }

  if (
    /local|multi-location|india|philippines|travel|automotive|restaurant|real estate|law firm|profile/.test(
      normalized,
    )
  ) {
    return 'local'
  }

  if (
    /technical|crawl|index|robot|canonical|schema|hreflang|duplicate|core web|lcp|inp|cls|migration|release/.test(
      normalized,
    )
  ) {
    return 'technical'
  }

  if (
    /content|keyword|search intent|pillar|pruning|article|editorial|topic|serp|on-page/.test(
      normalized,
    )
  ) {
    return 'content'
  }

  if (
    /roadmap|methodology|prioritization|workflow|scoped|audit finding|automation|agentic|forecasting/.test(
      normalized,
    )
  ) {
    return 'roadmap'
  }

  return 'measurement'
}

function VisualShell({
  label,
  subject,
  eyebrow,
  Icon,
  children,
}: {
  label: string
  subject: string
  eyebrow: string
  Icon: GraphicIcon
  children: ReactNode
}) {
  return (
    <div
      role="img"
      aria-label={`${label}. Page-specific explanatory visual; it does not represent client performance data.`}
      className="relative min-h-[320px] overflow-hidden bg-paper p-5 text-ink sm:min-h-[360px] sm:p-7"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -top-20 size-56 rounded-full border border-signal/20 shadow-[0_0_0_28px_rgba(73,103,122,0.05),0_0_0_56px_rgba(122,38,58,0.035)]"
      />
      <div className="relative flex items-start justify-between gap-4 border-b border-border pb-5">
        <div className="min-w-0">
          <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.14em] text-accent">
            {eyebrow}
          </p>
          <p className="mt-2 max-w-lg font-heading text-xl font-semibold leading-tight text-ink sm:text-2xl">
            {subject}
          </p>
        </div>
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
          <Icon aria-hidden="true" className="size-4" />
        </span>
      </div>
      <div className="relative mt-5">{children}</div>
    </div>
  )
}

function AiDiscoveryVisual({ label, subject }: { label: string; subject: string }) {
  const platforms = [
    { label: 'Google', Icon: RiGoogleFill },
    { label: 'ChatGPT', Icon: RiOpenaiFill },
    { label: 'Gemini', Icon: RiGeminiFill },
    { label: 'Perplexity', Icon: RiPerplexityFill },
    { label: 'Copilot', Icon: RiMicrosoftCopilotFill },
    { label: 'Grok', Icon: RiGrokAiFill },
  ]

  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="AI discovery system"
      Icon={Bot}
    >
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
        {[
          { number: '01', title: 'Prompt set', note: 'Questions buyers actually ask', Icon: Search },
          { number: '02', title: 'Answer review', note: 'Entities, claims and competitors', Icon: Sparkles },
          { number: '03', title: 'Citation check', note: 'Source, date and destination', Icon: Link2 },
        ].map((item, index) => (
          <div key={item.number} className="contents">
            <div className="border border-border-strong bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[9px] font-semibold text-accent">{item.number}</span>
                <item.Icon aria-hidden="true" className="size-4 text-signal" />
              </div>
              <p className="mt-5 font-heading text-sm font-semibold text-ink">{item.title}</p>
              <p className="mt-1 text-[11px] leading-5 text-ash">{item.note}</p>
            </div>
            {index < 2 ? (
              <ArrowRight
                aria-hidden="true"
                className="mx-auto hidden size-4 self-center text-accent sm:block"
              />
            ) : null}
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-3 gap-px bg-border-strong sm:grid-cols-6">
        {platforms.map(({ label: platform, Icon }) => (
          <div
            key={platform}
            className="flex min-w-0 flex-col items-center justify-center gap-2 bg-cream/55 px-2 py-3 text-center"
          >
            <Icon aria-hidden="true" className="size-4 text-accent" />
            <span className="truncate text-[9px] font-medium text-stone">{platform}</span>
          </div>
        ))}
      </div>
      <p className="mt-4 border-l-2 border-action pl-3 text-[10px] leading-5 text-ash">
        Observe prompts and citations by platform. Never combine response counts with visits or
        rankings.
      </p>
    </VisualShell>
  )
}

function TechnicalSystemVisual({ label, subject }: { label: string; subject: string }) {
  const stages = [
    { title: 'Discover', detail: 'Routes + rules', Icon: FileSearch },
    { title: 'Render', detail: 'HTML + assets', Icon: Code2 },
    { title: 'Index', detail: 'Canonical owner', Icon: Database },
    { title: 'Monitor', detail: 'Change + impact', Icon: Activity },
  ]

  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="Technical search system"
      Icon={Braces}
    >
      <div className="grid gap-px bg-border-strong sm:grid-cols-4">
        {stages.map(({ title, detail, Icon }, index) => (
          <div key={title} className="bg-white p-4">
            <div className="flex items-center justify-between gap-2">
              <Icon aria-hidden="true" className="size-4 text-accent" />
              <span className="font-mono text-[9px] text-ash">0{index + 1}</span>
            </div>
            <p className="mt-4 font-heading text-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-[10px] text-ash">{detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 border border-border-strong bg-ink p-4 text-white">
        <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-white/50">
            Validation layer
          </span>
          <span className="flex items-center gap-1.5 text-[9px] text-action">
            <CircleDot aria-hidden="true" className="size-3" />
            observable
          </span>
        </div>
        <div className="mt-4 grid gap-2 font-mono text-[10px] sm:grid-cols-3">
          {[
            ['01', 'Expected state'],
            ['02', 'Released state'],
            ['03', 'Measured result'],
          ].map(([number, text]) => (
            <div key={number} className="flex items-center gap-2 bg-white/[0.06] px-3 py-2.5">
              <span className="text-action">{number}</span>
              <span className="text-white/70">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </VisualShell>
  )
}

function ContentJourneyVisual({ label, subject }: { label: string; subject: string }) {
  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="Search journey system"
      Icon={FileSearch}
    >
      <div className="flex items-center gap-3 border border-border-strong bg-white px-4 py-3">
        <Search aria-hidden="true" className="size-4 shrink-0 text-accent" />
        <span className="min-w-0 truncate text-xs text-stone">
          Search need → clear page owner → useful next step
        </span>
        <span className="ml-auto hidden bg-action px-2 py-1 font-mono text-[8px] font-semibold uppercase tracking-[0.1em] text-ink sm:block">
          Intent first
        </span>
      </div>
      <div className="mt-4 grid gap-px bg-border-strong sm:grid-cols-3">
        {[
          {
            stage: 'Explore',
            page: 'Guide or definition',
            signal: 'Clarify the problem',
            Icon: Compass,
          },
          {
            stage: 'Evaluate',
            page: 'Comparison or use case',
            signal: 'Reduce uncertainty',
            Icon: Layers3,
          },
          { stage: 'Act', page: 'Service or product', signal: 'Make the next step clear', Icon: Target },
        ].map(({ stage, page, signal, Icon }, index) => (
          <div key={stage} className="bg-paper p-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[9px] font-semibold text-accent">0{index + 1}</span>
              <Icon aria-hidden="true" className="size-4 text-signal" />
            </div>
            <p className="mt-5 font-heading text-sm font-semibold text-ink">{stage}</p>
            <p className="mt-2 text-[11px] font-medium text-stone">{page}</p>
            <p className="mt-1 text-[10px] leading-4 text-ash">{signal}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 bg-accent-soft px-4 py-3">
        <span className="text-[10px] font-medium text-accent">One intent. One page owner.</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-accent">
          Discover → decide
        </span>
      </div>
    </VisualShell>
  )
}

function AuthorityNetworkVisual({ label, subject }: { label: string; subject: string }) {
  const nodes = [
    { title: 'Original source', Icon: Database },
    { title: 'Editorial mention', Icon: FileSearch },
    { title: 'Relevant link', Icon: Link2 },
    { title: 'Entity context', Icon: Blocks },
  ]

  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="Authority system"
      Icon={Network}
    >
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
        <div className="grid gap-3">
          {nodes.slice(0, 2).map(({ title, Icon }) => (
            <div key={title} className="border border-border-strong bg-white p-3">
              <Icon aria-hidden="true" className="size-4 text-accent" />
              <p className="mt-2 text-[10px] font-medium leading-4 text-stone">{title}</p>
            </div>
          ))}
        </div>
        <div className="flex size-24 flex-col items-center justify-center rounded-full bg-ink p-3 text-center text-white shadow-[0_0_0_8px_rgba(122,38,58,0.08)] sm:size-28">
          <ShieldCheck aria-hidden="true" className="size-5 text-action" />
          <span className="mt-2 font-mono text-[9px] uppercase tracking-[0.08em] text-white/75">
            Trusted
            <br />
            destination
          </span>
        </div>
        <div className="grid gap-3">
          {nodes.slice(2).map(({ title, Icon }) => (
            <div key={title} className="border border-border-strong bg-white p-3">
              <Icon aria-hidden="true" className="size-4 text-accent" />
              <p className="mt-2 text-[10px] font-medium leading-4 text-stone">{title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 grid gap-px bg-border-strong sm:grid-cols-3">
        {['Relevance checked', 'Placement reviewed', 'Destination verified'].map((item) => (
          <div key={item} className="flex items-center gap-2 bg-cream/55 px-3 py-2.5">
            <CheckCircle2 aria-hidden="true" className="size-3.5 shrink-0 text-accent" />
            <span className="text-[9px] font-medium text-stone">{item}</span>
          </div>
        ))}
      </div>
    </VisualShell>
  )
}

function CommerceJourneyVisual({ label, subject }: { label: string; subject: string }) {
  const stages = [
    { title: 'Demand', detail: 'Category need', Icon: Search },
    { title: 'Discovery', detail: 'Collection path', Icon: GitBranch },
    { title: 'Decision', detail: 'Product evidence', Icon: ShoppingBag },
    { title: 'Outcome', detail: 'Qualified action', Icon: Target },
  ]

  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="Commercial search system"
      Icon={ShoppingBag}
    >
      <div className="grid gap-3 sm:grid-cols-4">
        {stages.map(({ title, detail, Icon }, index) => (
          <div key={title} className="relative border border-border-strong bg-white p-4">
            <div className="flex items-center justify-between">
              <span className="flex size-7 items-center justify-center rounded-full bg-accent text-[9px] font-semibold text-white">
                {index + 1}
              </span>
              <Icon aria-hidden="true" className="size-4 text-signal" />
            </div>
            <p className="mt-5 font-heading text-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-[10px] leading-4 text-ash">{detail}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 border border-border-strong bg-ink p-4 text-white">
        <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-center">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/45">
              Search evidence
            </p>
            <p className="mt-1 text-xs font-medium text-white/80">Query and landing-page cohort</p>
          </div>
          <ArrowRight aria-hidden="true" className="hidden size-4 text-action sm:block" />
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.1em] text-white/45">
              Business evidence
            </p>
            <p className="mt-1 text-xs font-medium text-white/80">Action and revenue cohort</p>
          </div>
        </div>
      </div>
    </VisualShell>
  )
}

function LocalMarketVisual({ label, subject }: { label: string; subject: string }) {
  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="Market discovery system"
      Icon={MapPin}
    >
      <div className="grid gap-px bg-border-strong sm:grid-cols-2">
        {[
          { title: 'Market intent', detail: 'How people describe the need', Icon: Search },
          { title: 'Service coverage', detail: 'Where the business can deliver', Icon: Globe2 },
          { title: 'Local proof', detail: 'Location-specific trust signals', Icon: Building2 },
          { title: 'Lead route', detail: 'The next useful commercial step', Icon: Target },
        ].map(({ title, detail, Icon }, index) => (
          <div key={title} className="flex items-start gap-3 bg-white p-4">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="font-heading text-sm font-semibold text-ink">
                <span className="mr-2 font-mono text-[9px] text-ash">0{index + 1}</span>
                {title}
              </p>
              <p className="mt-1 text-[10px] leading-4 text-ash">{detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 bg-action px-4 py-3 text-ink">
        <Compass aria-hidden="true" className="size-4 shrink-0" />
        <p className="text-[10px] font-medium leading-4">
          Keep service reality, geographic relevance and conversion ownership aligned.
        </p>
      </div>
    </VisualShell>
  )
}

function RoadmapVisual({ label, subject }: { label: string; subject: string }) {
  const columns = [
    { phase: 'Now', title: 'Prove the constraint', items: ['Evidence', 'Owner'], tone: 'bg-ink text-white' },
    {
      phase: 'Next',
      title: 'Release the change',
      items: ['Acceptance', 'QA'],
      tone: 'bg-accent text-white',
    },
    {
      phase: 'Scale',
      title: 'Measure and repeat',
      items: ['Impact', 'Decision'],
      tone: 'bg-action text-ink',
    },
  ]

  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="Delivery system"
      Icon={Route}
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {columns.map((column, index) => (
          <div key={column.phase} className="border border-border-strong bg-white p-3">
            <div className={`${column.tone} p-3`}>
              <p className="font-mono text-[9px] uppercase tracking-[0.1em] opacity-65">
                0{index + 1} · {column.phase}
              </p>
              <p className="mt-2 font-heading text-sm font-semibold">{column.title}</p>
            </div>
            <div className="mt-3 grid gap-2">
              {column.items.map((item) => (
                <div key={item} className="flex items-center gap-2 bg-cream/55 px-3 py-2">
                  <CheckCircle2 aria-hidden="true" className="size-3 text-accent" />
                  <span className="text-[10px] font-medium text-stone">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
        <span className="flex items-center gap-2 text-[10px] font-medium text-stone">
          <Workflow aria-hidden="true" className="size-4 text-accent" />
          Priority → ownership → validation
        </span>
        <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-ash">
          Decision-ready
        </span>
      </div>
    </VisualShell>
  )
}

function MeasurementVisual({ label, subject }: { label: string; subject: string }) {
  return (
    <VisualShell
      label={label}
      subject={subject}
      eyebrow="Evidence system"
      Icon={BarChart3}
    >
      <div className="border border-border-strong bg-white p-4">
        <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
          <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-ash">
            Illustrative comparison
          </span>
          <Gauge aria-hidden="true" className="size-4 text-accent" />
        </div>
        <div className="mt-4 grid gap-4">
          {[
            { label: 'Search visibility', width: 'w-[78%]' },
            { label: 'Qualified visits', width: 'w-[58%]' },
            { label: 'Commercial outcomes', width: 'w-[42%]' },
          ].map((row, index) => (
            <div key={row.label} className="grid grid-cols-[112px_1fr] items-center gap-3">
              <span className="text-[10px] font-medium text-stone">{row.label}</span>
              <div className="h-2 overflow-hidden bg-cream">
                <div
                  className={`h-full ${row.width} ${index === 2 ? 'bg-action' : 'bg-accent'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-px bg-border-strong sm:grid-cols-3">
        {[
          ['01', 'Baseline', 'State the source and window'],
          ['02', 'Observation', 'Separate metrics by meaning'],
          ['03', 'Decision', 'Connect evidence to action'],
        ].map(([number, title, detail]) => (
          <div key={number} className="bg-paper p-4">
            <span className="font-mono text-[9px] font-semibold text-accent">{number}</span>
            <p className="mt-2 font-heading text-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-[10px] leading-4 text-ash">{detail}</p>
          </div>
        ))}
      </div>
    </VisualShell>
  )
}

function ContextualEvidenceGraphic({ label }: { label: string }) {
  const kind = visualKindFor(label)
  const subject = subjectFromLabel(label)

  switch (kind) {
    case 'ai':
      return <AiDiscoveryVisual label={label} subject={subject} />
    case 'authority':
      return <AuthorityNetworkVisual label={label} subject={subject} />
    case 'commerce':
      return <CommerceJourneyVisual label={label} subject={subject} />
    case 'content':
      return <ContentJourneyVisual label={label} subject={subject} />
    case 'local':
      return <LocalMarketVisual label={label} subject={subject} />
    case 'roadmap':
      return <RoadmapVisual label={label} subject={subject} />
    case 'technical':
      return <TechnicalSystemVisual label={label} subject={subject} />
    default:
      return <MeasurementVisual label={label} subject={subject} />
  }
}

export function getEvidenceGraphic(label: string): EvidenceGraphic {
  if (label === 'Consulting decision artifact') {
    return {
      source: 'Expressway.PH case study',
      captureDate: '28 July 2026',
      reportingWindow: 'Owned project · documented decision system',
      badgeLabel: 'Verified example',
      content: <ExpresswayDecisionGraphic />,
    }
  }

  if (label === 'Implementation validation') {
    return {
      source: 'GSC · GA4 · Bing · Ahrefs',
      captureDate: '28 July 2026',
      reportingWindow: 'First-party performance + third-party visibility',
      badgeLabel: 'Verified example',
      content: <ExpresswayVisibilityGraphic />,
    }
  }

  const editorialPhoto = editorialPhotoByLabel[label]

  if (editorialPhoto) {
    return {
      source: 'Editorial photography',
      captureDate: 'July 2026',
      dateLabel: 'Created',
      reportingWindow: 'Human context · illustrative photography',
      badgeLabel: 'Editorial image',
      content: <EditorialPhotoVisual label={label} photo={editorialPhoto} />,
    }
  }

  const kind = visualKindFor(label)
  const meta = contextualVisualMeta[kind]

  return {
    source: meta.source,
    captureDate: 'July 2026',
    dateLabel: 'Prepared',
    reportingWindow: meta.reportingWindow,
    badgeLabel: 'Visual explainer',
    content: <ContextualEvidenceGraphic label={label} />,
  }
}
