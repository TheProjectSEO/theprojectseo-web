// Competitor comparison data for /vs/[competitor]/ pages.
// Framing: fair, data-driven, no trash-talking.
// We lean on unique strengths: Claude-native stack, Python/BigQuery infra, 67-skill system.

export type ComparisonRow = {
  dimension: string
  them: string
  us: string
}

export type Competitor = {
  slug: string
  name: string
  category: 'tool' | 'agency'
  tagline: string
  description: string
  theirStrengths: string[]
  ourStrengths: string[]
  comparisonTable: ComparisonRow[]
  whenToPickThem: string
  whenToPickUs: string
  faqs: { question: string; answer: string }[]
}

export const competitors: Competitor[] = [
  {
    slug: 'semrush',
    name: 'SEMrush',
    category: 'tool',
    tagline: 'SEMrush vs TheProjectSEO',
    description:
      'SEMrush is a data platform with keyword research, rank tracking, site auditing, and competitor analysis tools. TheProjectSEO is a managed SEO agency. The comparison is not tool vs tool — it is platform vs execution partner.',
    theirStrengths: [
      'Large keyword database (25+ billion keywords)',
      'Self-serve rank tracking and site audits',
      'Broad toolset covering PPC, social, and content',
      'Fixed monthly SaaS pricing starting at $139/mo',
    ],
    ourStrengths: [
      'Managed execution — strategy, content, and links delivered, not just reported',
      'Claude-native AI stack: 67 custom Skills, OpenClaw 12-agent framework',
      'BigQuery + Python data infrastructure for client-specific attribution',
      'Fine-tuned SEO model (Qwen3.5-27B) for citation-grounded recommendations',
      'Direct accountability: a named team, not a dashboard',
    ],
    comparisonTable: [
      { dimension: 'What it is', them: 'Self-serve SaaS data platform', us: 'Managed SEO agency' },
      { dimension: 'Execution', them: 'You do the work using their data', us: 'We do the work and show you the data' },
      { dimension: 'Keyword database', them: '25B+ keywords, global coverage', us: 'Powered by Ahrefs + DataForSEO via MCP' },
      { dimension: 'AI integration', them: 'AI writing add-ons (extra cost)', us: 'Claude-native stack across every workflow' },
      { dimension: 'Reporting', them: 'Dashboards you configure yourself', us: 'Weekly reports with GSC + BigQuery attribution' },
      { dimension: 'Pricing model', them: 'Monthly SaaS from $139/mo', us: 'Retainer from $2,500/mo' },
      { dimension: 'Best for', them: 'In-house teams that want data access', us: 'Teams that want results without hiring' },
      { dimension: 'Dedicated strategist', them: 'No', us: 'Yes — named contact, weekly syncs' },
    ],
    whenToPickThem:
      'You have a capable in-house SEO team and primarily need a data platform to support their research, rank tracking, and competitor analysis. SEMrush is one of the best tools for that job.',
    whenToPickUs:
      'You want organic growth but do not want to hire, train, and manage an in-house SEO team. We bring the strategy, the execution, and the tooling. You measure results.',
    faqs: [
      {
        question: 'Do you use SEMrush internally?',
        answer:
          'We use Ahrefs as our primary data platform, paired with DataForSEO for SERP intelligence and Google Search Console for first-party data. We do not resell SEMrush subscriptions.',
      },
      {
        question: 'Can you manage our existing SEMrush account?',
        answer:
          'Yes. If your team already pays for SEMrush, we can work within that environment for reporting and keyword research while running our own infrastructure for execution and automation.',
      },
      {
        question: 'Is TheProjectSEO more expensive than SEMrush?',
        answer:
          'Per month, yes. The comparison does not hold at the same level: SEMrush gives you data access; we give you outcomes. A single content piece or technical fix from our team typically exceeds what a SaaS subscription alone can produce in the same period.',
      },
    ],
  },
  {
    slug: 'ahrefs',
    name: 'Ahrefs',
    category: 'tool',
    tagline: 'Ahrefs vs TheProjectSEO',
    description:
      'Ahrefs is the industry-leading backlink and keyword research platform. We use Ahrefs internally via MCP integration every day. This page is not "us vs Ahrefs" — it is a practical guide to what a tool does vs what an agency does, and when you need one or the other.',
    theirStrengths: [
      'Best-in-class backlink index (35 trillion+ links)',
      'Highly accurate keyword difficulty and traffic estimates',
      'Site audit tool with 170+ SEO checks',
      'Content Explorer for link prospecting and topical research',
    ],
    ourStrengths: [
      'We use Ahrefs every day — you get the data AND the interpretation',
      'Managed execution: we act on Ahrefs findings, not just report them',
      'Claude-native automation layer on top of Ahrefs data via MCP',
      'Link building campaigns backed by Ahrefs prospecting, not just analysis',
      'Dedicated team accountable for ranking improvements, not data access',
    ],
    comparisonTable: [
      { dimension: 'What it is', them: 'Backlink and keyword research SaaS', us: 'Managed SEO agency using Ahrefs daily' },
      { dimension: 'Execution', them: 'Data for your team to act on', us: 'We act on the data for you' },
      { dimension: 'Backlink index', them: '35T+ links — best in industry', us: 'We query Ahrefs via MCP on every client' },
      { dimension: 'AI layer', them: 'No native AI automation', us: 'Claude MCP integration with Ahrefs data' },
      { dimension: 'Link building', them: 'Prospecting tool only', us: 'Full outreach execution using Ahrefs data' },
      { dimension: 'Pricing', them: 'From $129/mo (Lite plan)', us: 'Retainer from $2,500/mo' },
      { dimension: 'Monthly reports', them: 'You pull your own', us: 'Delivered with GSC + GA4 attribution' },
      { dimension: 'Strategy input', them: 'None — tool only', us: 'Named strategist, weekly comms' },
    ],
    whenToPickThem:
      'Your in-house team needs the best possible backlink and keyword data. Ahrefs is the strongest research platform available and worth every cent for skilled users.',
    whenToPickUs:
      'You want the insights Ahrefs provides — plus the execution to turn them into rankings. We bring Ahrefs into every client workflow as part of a managed service.',
    faqs: [
      {
        question: 'Do you use Ahrefs for your clients?',
        answer:
          'Yes. Ahrefs is our primary SEO data platform. Every client benefits from Ahrefs data via our MCP integration, which lets us query keyword data, backlink profiles, and site audit results inside every strategy session.',
      },
      {
        question: 'Can TheProjectSEO replace our Ahrefs subscription?',
        answer:
          'We would not recommend cancelling Ahrefs if your in-house team uses it actively. When you engage us, you gain access to our Ahrefs data workflows on top of any internal tools you already have.',
      },
      {
        question: 'What is an MCP integration with Ahrefs?',
        answer:
          'MCP (Model Context Protocol) is Anthropic\'s standard for giving AI agents secure, structured access to external tools. Our Claude Code sessions can query Ahrefs keyword and backlink data directly inside a strategy session, which removes the manual copy-paste step between research and decision-making.',
      },
    ],
  },
  {
    slug: 'moz',
    name: 'Moz',
    category: 'tool',
    tagline: 'Moz vs TheProjectSEO',
    description:
      'Moz Pro is a well-established SEO platform known for Domain Authority (DA), keyword research, and on-page optimization guidance. TheProjectSEO is a managed agency. This page explains what each does and when each is the right fit.',
    theirStrengths: [
      'Domain Authority (DA) — the most recognized SEO metric in client communications',
      'MozBar browser extension for quick on-page checks',
      'Strong educational content and SEO learning resources',
      'Affordable entry-level pricing from $99/mo',
    ],
    ourStrengths: [
      'Managed execution — we run the strategy, not just report metrics',
      'We use Ahrefs DR alongside Moz DA in reporting so clients get full picture',
      'Claude-native AI stack with 67 production Skills',
      'Technical SEO execution with before/after evidence on every fix',
      'Content pipeline from brief to published, not just recommendations',
    ],
    comparisonTable: [
      { dimension: 'What it is', them: 'SEO software platform', us: 'Managed SEO agency' },
      { dimension: 'Primary metric', them: 'Domain Authority (DA)', us: 'GSC-verified traffic and rankings' },
      { dimension: 'Site audit', them: 'Automated crawl reports', us: 'Manual + automated audit with fix execution' },
      { dimension: 'Content tools', them: 'On-page recommendations', us: 'Full content production and optimization' },
      { dimension: 'Link building', them: 'Link prospecting data', us: 'Full outreach campaigns with execution' },
      { dimension: 'AI integration', them: 'Limited AI features', us: 'Claude-native stack across every workflow' },
      { dimension: 'Pricing', them: 'From $99/mo (Starter)', us: 'Retainer from $2,500/mo' },
      { dimension: 'Accountability', them: 'Software tracks progress', us: 'Named team delivers progress' },
    ],
    whenToPickThem:
      'You need an affordable entry-level SEO toolset and your team is comfortable reading crawl reports and interpreting keyword data without external support.',
    whenToPickUs:
      'You want organic search results and do not have the in-house capacity to execute a full SEO program. We handle the strategy, content, links, and technical work.',
    faqs: [
      {
        question: 'Do you report Domain Authority to clients?',
        answer:
          'We report Ahrefs Domain Rating (DR) as our primary authority metric, alongside GSC-sourced impressions, clicks, and ranking data. We include DA when clients request it for communications with stakeholders familiar with the metric.',
      },
      {
        question: 'Is Moz a good fit for beginners?',
        answer:
          'Moz has strong educational resources and is often recommended as a starting point for teams new to SEO tooling. If your team is ready to self-serve their SEO research, Moz Pro is a reasonable choice.',
      },
    ],
  },
  {
    slug: 'webfx',
    name: 'WebFX',
    category: 'agency',
    tagline: 'WebFX vs TheProjectSEO',
    description:
      'WebFX is a large US-based digital marketing agency with 500+ employees, serving primarily mid-market US businesses. TheProjectSEO is a boutique AI-native agency. This is a genuine agency-vs-agency comparison — strengths differ by scale, approach, and focus.',
    theirStrengths: [
      'Scale: 500+ employees, broad service coverage',
      'Established US market presence and case studies',
      'MarketingCloudFX proprietary analytics platform',
      'Large content production capacity',
    ],
    ourStrengths: [
      'AI-native operating system — 67 Skills, 12-agent framework, fine-tuned SEO model',
      'Boutique: named strategist on every account, no account switching',
      'BigQuery + Python data infrastructure that most agencies cannot match',
      'Claude Code CLI automation reduces overhead so more budget goes to strategy',
      'AEO (Answer Engine Optimization) built into every engagement — not an upsell',
      'Transparent attribution: GSC + GA4 + BigQuery, not a proprietary black box',
    ],
    comparisonTable: [
      { dimension: 'Agency size', them: '500+ employees', us: 'Boutique, 6-person core team' },
      { dimension: 'Account model', them: 'Account manager + team rotation', us: 'Named strategist, no handoffs' },
      { dimension: 'AI stack', them: 'Standard tools + custom reporting', us: 'Claude-native: 67 Skills, OpenClaw agents' },
      { dimension: 'AEO / AI search', them: 'Emerging offering', us: 'Core service, built into every retainer' },
      { dimension: 'Data infrastructure', them: 'MarketingCloudFX (proprietary)', us: 'BigQuery + Python, client-owned data' },
      { dimension: 'Entry price', them: '$1,500–$2,500/mo (SEO)', us: 'From $2,500/mo' },
      { dimension: 'Best market', them: 'US mid-market, traditional industries', us: 'B2B SaaS, marketplaces, AI-forward companies' },
      { dimension: 'Reporting', them: 'Client portal', us: 'Monthly PDF + BigQuery export, always auditable' },
    ],
    whenToPickThem:
      'You are a US mid-market business wanting a large agency with broad service coverage, an established brand, and an in-house content team at scale.',
    whenToPickUs:
      'You want a boutique AI-native agency where the founder is active on your account, the data infrastructure is transparent, and AEO is built into the strategy from day one.',
    faqs: [
      {
        question: 'How does TheProjectSEO compare on content volume?',
        answer:
          'WebFX has larger raw content capacity. Our advantage is content that goes through a 10-stage validation pipeline — brand-voice scoring, SEO checks, anti-AI detection — before it publishes. Volume without quality has a measurable negative impact on rankings.',
      },
      {
        question: 'Do you serve US clients?',
        answer:
          'Yes. We serve clients across the US, India, Europe, and Southeast Asia. Our data infrastructure (BigQuery, GSC, GA4) works identically regardless of geography.',
      },
      {
        question: 'What is AEO and why is it important?',
        answer:
          'AEO (Answer Engine Optimization) is the practice of optimizing content to be cited in AI-generated answers from ChatGPT, Perplexity, Gemini AI Overviews, and similar platforms. It is no longer optional — AI answers now appear above organic results for a growing share of commercial queries. We build AEO into every SEO engagement, not as a separate service.',
      },
    ],
  },
  {
    slug: 'victorious',
    name: 'Victorious',
    category: 'agency',
    tagline: 'Victorious vs TheProjectSEO',
    description:
      'Victorious is a San Francisco-based SEO-only agency serving mostly US SMBs and mid-market companies, known for structured processes and monthly reporting. This page compares their model to ours honestly.',
    theirStrengths: [
      'SEO-only focus with structured onboarding and delivery process',
      'US-based team with English-first content strength',
      'Well-documented service tiers with transparent pricing',
      'Strong review profile and established case studies',
    ],
    ourStrengths: [
      'Claude-native AI stack with 67 production Skills and an internal fine-tuned SEO model',
      'AEO / AI search optimization built into every engagement',
      'BigQuery + Python data infrastructure for enterprise-grade attribution',
      'Direct access to founding team, no tiered account management',
      'Automation layer that reduces manual overhead and improves consistency across clients',
    ],
    comparisonTable: [
      { dimension: 'Agency focus', them: 'SEO only', us: 'SEO + AEO + AI search + automation' },
      { dimension: 'AI integration', them: 'Standard content tools', us: '67-skill Claude-native system' },
      { dimension: 'Data infrastructure', them: 'Standard GSC + GA4 reporting', us: 'BigQuery + Python, custom attribution' },
      { dimension: 'AEO capability', them: 'Not a core offering', us: 'Built into every retainer' },
      { dimension: 'Account access', them: 'Account manager model', us: 'Direct strategist access, founder-led' },
      { dimension: 'Pricing', them: 'Published tiers from ~$1,500/mo', us: 'Custom retainers from $2,500/mo' },
      { dimension: 'Geography', them: 'US-focused', us: 'Global — US, India, UK, EU, SEA' },
      { dimension: 'Automation', them: 'Standard workflow tools', us: 'n8n automation, OpenClaw agents, MCP servers' },
    ],
    whenToPickThem:
      'You want a US-based SEO agency with published pricing, a structured onboarding process, and a clean service scope limited to traditional SEO.',
    whenToPickUs:
      'You want traditional SEO plus AI search optimization, with a data infrastructure that supports attribution beyond standard GA4 dashboards — and direct access to the people doing the work.',
    faqs: [
      {
        question: 'Do you have published pricing like Victorious?',
        answer:
          'We publish a starting price (from $2,500/mo) but scope each retainer to the client\'s actual needs. A custom proposal typically takes 48 hours after an initial call.',
      },
      {
        question: 'What makes your AI approach different from using AI writing tools?',
        answer:
          'Most agencies use AI to generate first drafts. Our system is different: we have 67 custom Skills built to Anthropic\'s agent pattern, a fine-tuned SEO model with 100% citation rate, and an automated validation pipeline that scores content on brand voice, SEO quality, and anti-AI detection before a human reviews it. The AI is the infrastructure, not just the writing tool.',
      },
    ],
  },
  {
    slug: 'tripledart',
    name: 'TripleDart',
    category: 'agency',
    tagline: 'TripleDart vs TheProjectSEO',
    description:
      'TripleDart is a B2B SaaS marketing agency based in India, focused on performance marketing, SEO, and demand generation for SaaS companies. Both agencies are India-based and serve similar client types, so this comparison matters.',
    theirStrengths: [
      'Deep B2B SaaS demand generation expertise',
      'Strong paid media + SEO integrated offering',
      'Established presence with US and European SaaS clients',
      'Focused on pipeline and revenue metrics, not just traffic',
    ],
    ourStrengths: [
      'Claude-native AI stack — TripleDart does not operate a comparable AI system',
      'AEO / AI search optimization built into every SEO engagement',
      'BigQuery + Python infrastructure for multi-source attribution (Salesforce, GA4, GSC, Ads)',
      '67 production Skills covering every SEO function from research to schema',
      'Fine-tuned SEO specialist model for citation-grounded recommendations',
    ],
    comparisonTable: [
      { dimension: 'Primary market', them: 'B2B SaaS (US + EU)', us: 'B2B SaaS, B2C marketplaces, e-commerce, travel' },
      { dimension: 'SEO approach', them: 'Content-led SEO for SaaS', us: 'Technical + content + AEO in parallel' },
      { dimension: 'AI stack', them: 'Standard marketing tools', us: 'Claude-native: 67 Skills, OpenClaw, fine-tuned model' },
      { dimension: 'Paid media', them: 'Core service (Google + LinkedIn)', us: 'Not a core service — we focus on organic + AEO' },
      { dimension: 'Attribution', them: 'Standard CRM + GA4', us: 'BigQuery + Salesforce + GSC + GA4 + Ads cross-source' },
      { dimension: 'AEO / AI search', them: 'Limited offering', us: 'Built into every SEO retainer' },
      { dimension: 'Data engineering', them: 'Standard dashboards', us: 'Python + BigQuery custom pipelines' },
      { dimension: 'Geography', them: 'Bengaluru, India (global clients)', us: 'Ranchi, India (global clients)' },
    ],
    whenToPickThem:
      'You are a B2B SaaS company that wants a combined paid media and SEO partner with a strong track record in SaaS demand generation specifically.',
    whenToPickUs:
      'You want organic + AI search optimization with a data infrastructure that goes deeper than standard dashboards — and you value AI-native execution over a mixed-channel retainer.',
    faqs: [
      {
        question: 'Can TheProjectSEO handle B2B SaaS SEO?',
        answer:
          'Yes. B2B SaaS is one of our core verticals. We have Skills and frameworks purpose-built for BOFU content, product-led SEO, technical documentation SEO, and the long consideration cycles typical of B2B buyers. We also have an AEO vertical specifically for AI-driven B2B research queries.',
      },
      {
        question: 'Do you offer paid media alongside SEO?',
        answer:
          'We are an organic-first agency. Paid media is not a core service. Where clients need integrated paid + organic strategies, we can coordinate with a paid media partner or provide SEO data that informs ad copy and landing page decisions.',
      },
      {
        question: 'What is the difference between AEO and traditional SEO for SaaS?',
        answer:
          'Traditional SEO targets Google\'s organic 10 blue links. AEO targets AI-generated answers in ChatGPT, Perplexity, Gemini, and AI Overviews — where SaaS buyers increasingly research tools. For B2B SaaS, where the buying journey is research-heavy, AEO visibility in those AI responses is becoming a direct pipeline driver.',
      },
    ],
  },
]

export const competitorSlugs = competitors.map((c) => c.slug)

export function getCompetitorBySlug(slug: string): Competitor | undefined {
  return competitors.find((c) => c.slug === slug)
}
