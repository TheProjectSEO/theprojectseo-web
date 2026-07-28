import { createSearchServicePage } from '@/data/service-lead-pages-scale'

const officialSources = [
  {
    label: 'Google Search Essentials',
    url: 'https://developers.google.com/search/docs/essentials',
    description:
      'Google’s technical requirements, spam policies, and foundational Search recommendations.',
  },
  {
    label: 'Google guidance on AI-generated content',
    url: 'https://developers.google.com/search/blog/2023/02/google-search-and-ai-content',
    description:
      'Google’s guidance that appropriate use of automation is not prohibited while content created primarily to manipulate rankings violates policy.',
  },
  {
    label: 'Google Search spam policies',
    url: 'https://developers.google.com/search/docs/essentials/spam-policies',
    description:
      'Google’s current definitions of scaled content abuse, site reputation abuse, link spam, doorway abuse, and other prohibited practices.',
  },
  {
    label: 'OpenAI API data usage policies',
    url: 'https://platform.openai.com/docs/models/how-we-use-your-data',
    description:
      'OpenAI’s documentation for API data use, retention, controls, and product-specific considerations.',
  },
  {
    label: 'Anthropic privacy and trust documentation',
    url: 'https://privacy.anthropic.com/',
    description:
      'Anthropic’s official collection of privacy, data, security, and trust information relevant to workflow design.',
  },
]

const aiSeoAgent = createSearchServicePage({
  slug: 'ai-agents/ai-seo-agent',
  name: 'AI SEO Agent',
  schemaName: 'Governed AI SEO agent design and operations services',
  serviceType:
    'AI SEO agents for research, crawling, briefs, monitoring, internal links, reporting, QA, workflow orchestration, approvals, logs, and human oversight',
  metaTitle: 'AI SEO Agent With Human Governance',
  metaDescription:
    'Design an AI SEO agent for research, monitoring, briefs, QA and reporting with approved data, permissions, human review, logs and rollback controls.',
  eyebrow: 'AI SEO agent · Tools + permissions + human accountability',
  title: 'Give the agent a narrow job.',
  titleAccent: 'Keep a human responsible.',
  definition:
    'An AI SEO agent is a goal-directed software workflow that uses approved models, tools, data, rules, and memory to perform or prepare defined SEO tasks, while permissions, review gates, logs, budgets, monitoring, and rollback keep consequential decisions accountable.',
  bestFit:
    'Teams with recurring, measurable SEO workflows and reliable source data that want to reduce repetitive work without delegating strategy, factual approval, publishing, outreach, or production access blindly.',
  heroChecks: [
    'Start with read-only research, monitoring, QA, and draft preparation',
    'Least-privilege tools, approved sources, secrets management, budgets, and rate limits',
    'Human gates for claims, publishing, links, schema, redirects, robots, and high-risk changes',
    'Audit logs, evaluation sets, false-positive review, alerts, rollback, and incident response',
  ],
  examples: ['how to build an AI SEO agent safely', 'AI SEO agent service for an in-house team', 'autonomous SEO versus governed workflow', 'which SEO tasks need human approval'],
  pageAssets: ['agent charter, goal, scope, permissions, owners, and prohibited actions', 'research, crawl, monitoring, brief, internal-link, and reporting workflows', 'approved source registry, prompt and tool versions, evaluation sets, and QA rules', 'run logs, cost and latency reports, error taxonomy, overrides, and incident evidence', 'data classification, privacy, access, retention, security, publishing, and rollback policies'],
  technicalFocus: 'An architecture and security audit covering models, tools, APIs, credentials, data sources, retrieval, memory, context, permissions, network access, sandboxes, budgets, rate limits, timeouts, observability, and failure handling.',
  contentFocus: 'A controlled workflow for research, clustering, briefs, drafts, metadata, internal links, structured fields, refresh detection, and QA using approved sources, fact registers, expert review, and canonical page ownership.',
  authorityFocus: 'Agents may discover sources, prospects, citations, mentions, or lost links, but relationship judgment, editorial value, disclosure, outreach approval, and reputational decisions remain human-owned.',
  operationsFocus: 'Tool allowlists, least privilege, human-in-the-loop checkpoints, dry runs, evaluation tests, samples, audit logs, cost controls, exception queues, alerts, rollback, incident response, and named ownership.',
  measurementFocus: 'Coverage, precision, false positives, reviewer acceptance, time and cost saved, defects prevented or introduced, completion latency, search and AI visibility, conversions, and incident recovery.',
  boundary: 'An agent that can publish, edit robots or canonicals, redirect URLs, contact people, buy placements, or access customer data can cause material harm. Those capabilities require explicit authority and controls; some should remain unavailable.',
  sources: officialSources,
  customFaqs: [
    { question: 'Can an AI SEO agent replace an SEO team?', answer: 'Not responsibly for an organization with meaningful risk. An agent can accelerate repeatable research, collection, drafting, validation, monitoring, and reporting. Humans still define goals, judge customer intent, verify facts, approve claims, manage relationships, accept production risk, and interpret business outcomes.' },
    { question: 'What should an AI SEO agent automate first?', answer: 'Begin with reversible, read-only work: scheduled crawls, change detection, Search Console summaries, page inventories, issue clustering, internal-link suggestions, content refresh alerts, brief preparation, and reporting drafts. Measure precision and reviewer acceptance before granting write access.' },
  ],
  relatedLinks: [
    { href: '/services/seo-automation', label: 'SEO automation', description: 'Automate repeatable checks with QA and rollback.' },
    { href: '/services/claude/agentic-seo-systems', label: 'Agentic SEO systems', description: 'Design the wider architecture and governance model.' },
    { href: '/services/analytics/automated-technical-reporting', label: 'Automated reporting', description: 'Start with a high-value read-only workflow.' },
    { href: '/services/enterprise-seo', label: 'Enterprise SEO', description: 'Embed agents into accountable organizational governance.' },
  ],
})

const agenticSystems = createSearchServicePage({
  slug: 'claude/agentic-seo-systems',
  name: 'Agentic SEO Systems',
  schemaName: 'Agentic SEO system architecture and implementation services',
  serviceType:
    'Agentic SEO systems using Claude or other models for orchestrated research, analysis, content operations, monitoring, QA, approvals, observability, and governance',
  metaTitle: 'Agentic SEO Systems With Guardrails',
  metaDescription:
    'Design agentic SEO systems with scoped tools, source data, evaluations, approvals, observability, security, cost controls and human accountability.',
  eyebrow: 'Agentic SEO systems · Architecture + evaluation + governance',
  title: 'Build a dependable SEO system.',
  titleAccent: 'Do not automate ambiguity.',
  definition:
    'An agentic SEO system coordinates one or more model-driven workers with tools, approved data, state, evaluation, and review gates to complete bounded search workflows across research, technical analysis, content operations, monitoring, and reporting.',
  bestFit:
    'Organizations with mature SEO processes, recurring work at meaningful scale, engineering support, clear data ownership, and a need for custom orchestration beyond a single prompt or off-the-shelf dashboard.',
  heroChecks: [
    'Workflow and risk selection before model or framework selection',
    'Tool contracts, schemas, memory, retrieval, permissions, and deterministic validation',
    'Evaluation datasets, human review, audit logs, cost and latency budgets, and alerts',
    'Claude can be one implementation choice; architecture should not depend on marketing claims',
  ],
  examples: ['agentic SEO system architecture', 'Claude SEO workflow with human review', 'multi-agent technical SEO monitoring', 'how to evaluate an SEO agent'],
  pageAssets: ['system charter, business case, risk register, architecture, and responsibility model', 'research, technical, content, authority, analytics, and reporting workflow graphs', 'tool contracts, structured outputs, source registries, memory, and evaluation datasets', 'traces, logs, error analysis, cost and latency, human overrides, and incidents', 'security, privacy, access, retention, model, vendor, change, and recovery policies'],
  technicalFocus: 'A system design covering orchestration, model routing, structured outputs, tools, APIs, retrieval, memory, queues, state, retries, idempotency, permissions, isolation, secrets, budgets, observability, evaluation, and rollback.',
  contentFocus: 'A production model that separates research, source collection, factual claims, expert input, drafting, editing, SEO checks, brand review, legal or clinical review, publishing, and refresh ownership.',
  authorityFocus: 'A human-governed research and outreach layer where agents can map sources and prepare opportunities but cannot fabricate experts, mass-contact publishers, conceal commercial relationships, or self-approve claims.',
  operationsFocus: 'Architecture decisions, tool contracts, versioning, approval gates, evaluation suites, test and production separation, canary runs, traces, alerts, cost controls, incident response, vendor review, and change management.',
  measurementFocus: 'Task success, factuality, source quality, structured-output validity, precision and recall, reviewer acceptance, time and cost, latency, retries, incidents, SEO outcomes, and business adoption.',
  boundary: 'Agentic behavior increases the number of decisions a system can make between human checkpoints. That makes observability, explicit authority, deterministic tests, and safe failure more important—not optional.',
  sources: officialSources,
  customFaqs: [
    { question: 'Does an agentic SEO system have to use Claude?', answer: 'No. Claude may be suitable for particular reasoning, tool-use, coding, or context requirements, but model choice should follow evaluations, privacy and security needs, cost, latency, tool support, reliability, and vendor risk. The architecture should allow controlled substitution where practical.' },
    { question: 'When is a simple automation better than an agent?', answer: 'Use deterministic automation when the inputs, rules, and expected outputs are stable—such as checking status codes, comparing sitemap inventories, or validating required fields. Add model judgment only where ambiguity creates enough value to justify evaluation, cost, variance, and review.' },
  ],
  relatedLinks: [
    { href: '/services/ai-agents/ai-seo-agent', label: 'AI SEO agent', description: 'Scope a narrower goal-directed implementation.' },
    { href: '/services/seo-automation', label: 'SEO automation', description: 'Use deterministic rules where they are sufficient.' },
    { href: '/services/content', label: 'SEO content', description: 'Design accountable research, expert, editorial, and refresh gates.' },
    { href: '/services/analytics', label: 'SEO analytics', description: 'Create the governed source and evaluation data layer.' },
  ],
})

export const agenticServiceLeadPages = {
  aiSeoAgent,
  agenticSystems,
} as const
