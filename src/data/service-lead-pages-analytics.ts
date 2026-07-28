import {
  createSearchServicePage,
  type SearchServiceSpec,
} from '@/data/service-lead-pages-scale'

const analyticsParent = { name: 'SEO analytics', href: '/services/analytics' }

const sources = {
  searchConsole: {
    label: 'Google Search Console: performance reports',
    url: 'https://support.google.com/webmasters/answer/7576553',
    description:
      'Google’s definitions for clicks, impressions, CTR, position, dimensions, filters, and report limitations.',
  },
  bulkExport: {
    label: 'Google Search Console: bulk data export',
    url: 'https://support.google.com/webmasters/answer/12918484',
    description:
      'Google’s process and table guidance for continuous daily Search Console export to BigQuery.',
  },
  gaAttribution: {
    label: 'Google Analytics: attribution models',
    url: 'https://support.google.com/analytics/answer/10596866',
    description:
      'Google’s definitions and scope for attribution models and conversion credit in Analytics.',
  },
  gaBigQuery: {
    label: 'Google Analytics: BigQuery Export',
    url: 'https://support.google.com/analytics/answer/9823238',
    description:
      'Google’s setup, data, billing, linking, and export documentation for GA4 and BigQuery.',
  },
  gaTraffic: {
    label: 'Google Analytics: traffic-source dimensions',
    url: 'https://support.google.com/analytics/answer/11242870',
    description:
      'Google’s user, session, and event-scoped source, medium, campaign, and channel definitions.',
  },
  aiSearch: {
    label: 'Google: AI features and Search measurement',
    url: 'https://developers.google.com/search/docs/appearance/ai-features',
    description:
      'Google’s guidance on how AI-feature traffic is included in Search Console and how to complement it with analytics.',
  },
  looker: {
    label: 'Looker Studio documentation',
    url: 'https://cloud.google.com/looker/docs/studio',
    description:
      'Google Cloud documentation for connectors, calculated fields, data sources, controls, sharing, and report administration.',
  },
  bigQuery: {
    label: 'BigQuery documentation',
    url: 'https://cloud.google.com/bigquery/docs',
    description:
      'Google Cloud’s official documentation for datasets, SQL, permissions, cost controls, scheduled queries, and monitoring.',
  },
}

function page(spec: SearchServiceSpec) {
  return createSearchServicePage({
    ...spec,
    parentBreadcrumb:
      spec.slug === 'analytics'
        ? { name: 'Services', href: '/services' }
        : analyticsParent,
  })
}

const analytics = page({
  slug: 'analytics',
  name: 'SEO Analytics',
  schemaName: 'SEO analytics, measurement, data quality, and reporting services',
  serviceType:
    'SEO analytics for Search Console, Bing, GA4, BigQuery, AI search, dashboards, attribution, forecasting, data quality, and commercial measurement',
  metaTitle: 'SEO Analytics & Reporting Services',
  metaDescription:
    'SEO analytics across Search Console, GA4, BigQuery, AI search, attribution, forecasting and reporting—with definitions, QA and commercial context.',
  eyebrow: 'SEO analytics · Data quality + decisions + accountability',
  title: 'Make organic data answerable.',
  titleAccent: 'Turn the report into a decision.',
  definition:
    'SEO analytics is the governed collection, modeling, validation, interpretation, and communication of search, website, AI-answer, customer, and commercial data so a team can make better organic-growth decisions.',
  bestFit:
    'Organizations that have meaningful search investment but cannot reliably connect queries and landing pages to customer journeys, lead quality, pipeline, orders, revenue, or implementation decisions.',
  heroChecks: [
    'Search Console, Bing, GA4, BigQuery, CRM, commerce, rank, crawl, and AI-answer data',
    'Metric dictionary, identity and attribution boundaries, QA, ownership, and access controls',
    'Dashboards paired with analyst commentary, annotations, and recommended actions',
    'No invented $77M gaps, automatic revenue credit, or “100% accurate” attribution claims',
  ],
  examples: ['how to measure SEO beyond traffic', 'SEO analytics service for a B2B company', 'Search Console versus GA4 organic data', 'how to connect SEO landing pages to pipeline'],
  pageAssets: ['measurement plans, KPI trees, metric dictionaries, and source inventories', 'SEO dashboards, executive scorecards, QBRs, and decision reports', 'query, landing, template, topic, market, and journey cohort analysis', 'data-quality tests, release annotations, attribution comparisons, and forecast scenarios', 'ownership, access, consent, retention, privacy, and governance documentation'],
  technicalFocus: 'A source-to-report audit of tags, events, consent, channel rules, Search Console properties, exports, APIs, warehouses, joins, identities, time zones, currencies, filters, permissions, sampling, and broken pipelines.',
  contentFocus: 'A reporting information architecture that defines each metric, denominator, scope, owner, comparison, annotation, audience, decision, and limitation rather than filling dashboards with disconnected charts.',
  authorityFocus: 'An evidence layer that keeps first-party platform data, third-party estimates, AI-response samples, analyst interpretations, and causal claims distinguishable and reviewable.',
  operationsFocus: 'A monthly and quarterly reporting cadence with data-quality alerts, ownership, access reviews, metric-change logs, stakeholder commentary, decision records, and follow-up accountability.',
  measurementFocus: 'The analytics service is measured through data completeness, freshness, reconciliation, decision adoption, reduced manual work, resolved blind spots, and better prioritization—not by claiming that a dashboard created revenue.',
  boundary: 'Search Console, GA4, rank trackers, backlink tools, AI visibility platforms, CRM systems, and finance data use different definitions and scopes. They should be reconciled where possible, not forced to match or added together.',
  sources: [sources.searchConsole, sources.gaAttribution, sources.gaTraffic, sources.bulkExport, sources.aiSearch],
  customFaqs: [
    { question: 'Why do Search Console and GA4 organic numbers differ?', answer: 'They measure different things. Search Console records Google Search clicks and impressions under its own processing rules; GA4 records consented site or app events and assigns sessions or conversions through channel and attribution rules. Time zones, filters, identity, consent, referrers, redirects, and implementation can widen the gap.' },
    { question: 'Does an SEO dashboard prove ROI?', answer: 'Not by itself. A dashboard can organize observed search, behavior, lead, pipeline, and revenue data. ROI also requires agreed cost, value, attribution, time horizon, counterfactual assumptions, and finance-approved definitions. We expose those inputs and limitations rather than styling an estimate as audited fact.' },
  ],
  relatedLinks: [
    { href: '/services/analytics/seo-reporting', label: 'SEO reporting', description: 'Create decision-ready monthly and executive reports.' },
    { href: '/services/analytics/gsc-bigquery-setup', label: 'GSC + BigQuery', description: 'Retain and query bulk Search Console data.' },
    { href: '/services/analytics/seo-attribution', label: 'SEO attribution', description: 'Compare credit models and preserve uncertainty.' },
    { href: '/services/analytics/seo-forecasting', label: 'SEO forecasting', description: 'Plan scenarios without presenting a prediction as a promise.' },
  ],
})

const reporting = page({
  slug: 'analytics/seo-reporting',
  name: 'SEO Reporting',
  schemaName: 'SEO reporting and executive dashboard services',
  serviceType: 'SEO reporting for search visibility, AI answers, analytics, conversions, implementation, forecasts, executive decisions, and data quality',
  metaTitle: 'SEO Reporting Built for Decisions',
  metaDescription: 'SEO reporting that defines metrics, reconciles sources, annotates releases and connects search visibility to qualified customer and commercial outcomes.',
  eyebrow: 'SEO reporting · Definitions + commentary + next actions',
  title: 'Stop sending chart collections.',
  titleAccent: 'Report the decision.',
  definition: 'SEO reporting turns validated search, website, AI-answer, implementation, and commercial data into a recurring account of what changed, why it may have changed, what remains uncertain, and what the team should do next.',
  bestFit: 'Teams with recurring SEO work and multiple stakeholders who need a trusted operational report, an executive summary, and enough source detail to audit important conclusions.',
  heroChecks: ['Metric definitions, source owners, comparison periods, and annotations', 'Search, AI-answer, landing-page, conversion, lead, pipeline, and implementation cohorts', 'Analyst interpretation separated from platform facts and causal confidence', 'Role-based dashboards, monthly decisions, QBRs, and source-level drill-down'],
  examples: ['what should an SEO report include', 'SEO reporting service for executives', 'monthly SEO report versus live dashboard', 'how to report AI search visibility'],
  pageAssets: ['executive summary, KPI tree, decision log, and risk register', 'monthly operating report, QBR, live dashboard, and source appendix', 'query, page, template, market, product, funnel, and AI prompt cohorts', 'release timeline, experiment register, forecast scenarios, and evidence notes', 'metric dictionary, data owners, access rules, privacy notes, and report archive'],
  technicalFocus: 'A reporting-pipeline review covering connectors, exports, refreshes, schemas, joins, filters, calculated fields, channel definitions, time zones, permissions, broken charts, and data-quality alerts.',
  contentFocus: 'A report narrative that leads with business questions and decisions, shows the minimum evidence needed, explains movement and uncertainty, and links every recommendation to an owner and follow-up.',
  authorityFocus: 'Clear provenance for first-party observations, third-party estimates, AI-response samples, benchmark sources, analyst judgments, and stakeholder-provided context.',
  operationsFocus: 'Automated preparation paired with human analysis, stakeholder review, commentary deadlines, version history, delivery schedules, action assignment, and next-report follow-through.',
  measurementFocus: 'Report usefulness assessed through data freshness, stakeholder comprehension, decision completion, issue detection, implementation follow-through, and reduced reconciliation effort.',
  boundary: 'A polished dashboard does not fix bad instrumentation, missing consent, changing definitions, biased prompts, or incomplete CRM data. Material gaps remain visible instead of being filled with invented estimates.',
  sources: [sources.searchConsole, sources.gaTraffic, sources.looker, sources.aiSearch, sources.gaAttribution],
  customFaqs: [
    { question: 'How often should SEO reports be delivered?', answer: 'Operational monitoring may be daily or weekly, decision reports are commonly monthly, and strategic reviews often work quarterly. The cadence should match decision speed, data latency, seasonality, and implementation volume. Sending the same full report every week usually adds noise.' },
    { question: 'Should an SEO report include rankings?', answer: 'Yes when the rank set has a declared market, device, location, query cohort, and decision purpose. Rankings should sit beside Search Console visibility, landing behavior, conversions, releases, and business context rather than act as the sole outcome.' },
  ],
  relatedLinks: [
    { href: '/services/analytics', label: 'SEO analytics', description: 'Design the underlying measurement and governance system.' },
    { href: '/services/analytics/automated-technical-reporting', label: 'Automated technical reporting', description: 'Monitor repeatable site and release conditions.' },
    { href: '/services/analytics/seo-attribution', label: 'SEO attribution', description: 'Explain credit models and source limitations.' },
    { href: '/services/ai-search/llm-visibility-tracking', label: 'AI visibility tracking', description: 'Preserve prompt, response, citation, and accuracy context.' },
  ],
})

const attribution = page({
  slug: 'analytics/seo-attribution',
  name: 'SEO Attribution',
  schemaName: 'SEO attribution and organic customer journey analysis services',
  serviceType: 'SEO attribution for organic landing pages, assisted journeys, leads, pipeline, orders, revenue, model comparison, and measurement boundaries',
  metaTitle: 'SEO Attribution Without False Certainty',
  metaDescription: 'SEO attribution services connecting organic landing and assisted journeys to leads, pipeline or revenue while comparing models and preserving limitations.',
  eyebrow: 'SEO attribution · Customer journeys + model boundaries',
  title: 'Assign credit carefully.',
  titleAccent: 'Keep evidence stronger than the claim.',
  definition: 'SEO attribution is the structured analysis of how organic search discovery and landing pages participate in customer journeys and conversions under explicitly defined identity, channel, lookback, model, and data-quality rules.',
  bestFit: 'Organizations with meaningful conversion volume, reasonably governed analytics or CRM data, and stakeholders who need to compare organic contribution without pretending one model reveals perfect causality.',
  heroChecks: ['First-touch, last-touch, data-driven, assisted, landing-cohort, and scenario views', 'User, session, event, lead, opportunity, order, and revenue scopes kept explicit', 'Consent, identity, offline conversion, CRM, channel, and lookback limitations documented', 'No automatic “+$15K/month” or revenue credit created from a model change'],
  examples: ['how to attribute pipeline to organic search', 'SEO attribution service for B2B', 'first touch versus data driven attribution', 'why GA4 and CRM organic revenue differ'],
  pageAssets: ['channel and conversion definitions, identity map, and measurement plan', 'landing cohorts, path analyses, model comparisons, and assisted-journey views', 'lead, opportunity, order, revenue, and customer-quality segments', 'sensitivity tests, reconciliation tables, exclusions, and limitation notes', 'data ownership, consent, retention, access, finance approval, and change logs'],
  technicalFocus: 'An instrumentation and join audit covering UTMs, referrers, redirects, cross-domain behavior, channel rules, event scopes, consent, user identity, lead capture, CRM lifecycle, offline conversions, duplicates, currencies, and time zones.',
  contentFocus: 'An attribution dictionary and stakeholder narrative that explains what each model credits, which decisions it can support, what evidence is missing, and how landing-page or query cohorts relate to the customer journey.',
  authorityFocus: 'Source and model provenance for every attributed value, with platform-generated credit, warehouse transformations, analyst rules, and finance-approved commercial fields kept distinguishable.',
  operationsFocus: 'Ongoing channel classification QA, CRM mapping review, conversion-definition governance, model-change logs, reconciliation, anomaly alerts, privacy review, and stakeholder sign-off.',
  measurementFocus: 'Model stability, unclassified traffic, reconciliation gaps, path coverage, conversion quality, stakeholder decisions, and sensitivity across attribution rules—not a single “true” organic revenue number.',
  boundary: 'Attribution allocates observed credit under a model; it does not recreate the counterfactual world in which SEO did not happen. Causal lift requires a suitable experiment or stronger inference design and still carries assumptions.',
  sources: [sources.gaAttribution, sources.gaTraffic, sources.searchConsole, sources.gaBigQuery, sources.bigQuery],
  customFaqs: [
    { question: 'Which SEO attribution model is best?', answer: 'No model is universally best. The right view depends on the decision, journey length, conversion volume, identity quality, channels, and stakeholder need. We commonly compare several models and landing cohorts, then explain how the conclusion changes rather than selecting the model that gives organic the most credit.' },
    { question: 'Can SEO attribution include offline sales?', answer: 'Yes when consent, identifiers, CRM stages, data quality, governance, and import or warehouse processes support it. Matching must be privacy-conscious and duplicates, sales overrides, long cycles, and missing identifiers should remain visible.' },
  ],
  relatedLinks: [
    { href: '/services/analytics', label: 'SEO analytics', description: 'Audit the full data and metric system.' },
    { href: '/services/analytics/gsc-bigquery-setup', label: 'GSC + BigQuery', description: 'Retain granular search data for cohort analysis.' },
    { href: '/services/analytics/seo-reporting', label: 'SEO reporting', description: 'Communicate model comparisons and decisions clearly.' },
    { href: '/services/analytics/seo-forecasting', label: 'SEO forecasting', description: 'Keep forecasts separate from attributed actuals.' },
  ],
})

const forecasting = page({
  slug: 'analytics/seo-forecasting',
  name: 'SEO Forecasting',
  schemaName: 'SEO forecasting and organic growth scenario planning services',
  serviceType: 'SEO forecasting for traffic, clicks, conversions, leads, pipeline, revenue scenarios, uncertainty, prioritization, and capacity planning',
  metaTitle: 'SEO Forecasting With Scenarios & Ranges',
  metaDescription: 'SEO forecasting for traffic and commercial scenarios using explicit assumptions, ranges, sensitivities and actual-versus-forecast learning.',
  eyebrow: 'SEO forecasting · Assumptions + ranges + decisions',
  title: 'Plan with scenarios.',
  titleAccent: 'Never sell the model as a promise.',
  definition: 'SEO forecasting estimates a range of possible future search and commercial outcomes under explicit assumptions about demand, visibility, click behavior, conversion, implementation, timing, competition, and external conditions.',
  bestFit: 'Teams choosing among SEO investments, planning capacity or budgets, evaluating market potential, or aligning leadership around uncertainty and measurable leading indicators.',
  heroChecks: ['Baseline, conservative, expected, and upside scenarios with explicit assumptions', 'Query, page, template, market, product, and journey cohorts', 'CTR, conversion, value, seasonality, implementation, and timing sensitivity', 'Actual-versus-forecast review—no $30K average, $75K pipeline, or 3x budget promise'],
  examples: ['how to forecast SEO traffic and leads', 'SEO forecasting service for budgeting', 'ranking scenario versus market demand forecast', 'how to validate an SEO forecast'],
  pageAssets: ['forecast question, scope, baseline, assumptions, and data dictionary', 'query and landing cohorts, demand curves, CTR scenarios, and implementation roadmap', 'conversion, lead-quality, pipeline, revenue, margin, or approved value ranges', 'sensitivity tables, confidence notes, actual-versus-forecast, and model revisions', 'owners, update cadence, decision thresholds, exclusions, and approval record'],
  technicalFocus: 'A data-readiness audit covering Search Console history, query anonymization, rank and SERP features, demand sources, landing cohorts, analytics and CRM conversions, seasonality, site changes, outliers, market events, and missing values.',
  contentFocus: 'A transparent model narrative that states the forecast question, cohort logic, assumptions, dependencies, ranges, exclusions, decision thresholds, and which observable indicators should update the plan.',
  authorityFocus: 'Documented provenance for demand, CTR, conversion, commercial value, competitor, and implementation assumptions, with first-party data preferred and third-party estimates labeled.',
  operationsFocus: 'Versioned models, locked assumptions, scenario review, implementation annotations, actual-versus-forecast updates, variance explanations, and decisions triggered by leading indicators.',
  measurementFocus: 'Forecast usefulness assessed through calibration, variance, assumption accuracy, decision quality, resource planning, and learning—not whether one optimistic point estimate happened to be close.',
  boundary: 'A forecast is conditional. Rankings, AI features, click behavior, demand, competition, conversion, implementation, and market conditions can change. We use ranges and sensitivity analysis and never guarantee the output.',
  sources: [sources.searchConsole, sources.bulkExport, sources.gaTraffic, sources.bigQuery, sources.aiSearch],
  customFaqs: [
    { question: 'How accurate is an SEO forecast?', answer: 'Accuracy depends on horizon, history, cohort stability, implementation confidence, market volatility, SERP changes, and conversion data. A useful forecast reports ranges, sensitivities, and calibration over time. A precise-looking number without those elements is false confidence.' },
    { question: 'Can SEO revenue be forecast before analytics is fixed?', answer: 'A rough scenario may be possible using clearly labeled external assumptions, but it should not be presented as a reliable business case. Improving conversion definitions, landing cohorts, CRM mappings, and value inputs generally creates a more defensible model.' },
  ],
  relatedLinks: [
    { href: '/services/analytics', label: 'SEO analytics', description: 'Improve the baseline and source quality first.' },
    { href: '/services/analytics/seo-attribution', label: 'SEO attribution', description: 'Define actual conversion credit separately.' },
    { href: '/services/analytics/seo-reporting', label: 'SEO reporting', description: 'Review assumptions, variance, and decisions.' },
    { href: '/pricing', label: 'Pricing', description: 'Understand current engagement structures and scope factors.' },
  ],
})

const bigQuery = page({
  slug: 'analytics/gsc-bigquery-setup',
  name: 'GSC BigQuery Setup',
  schemaName: 'Google Search Console bulk export and BigQuery setup services',
  serviceType: 'Google Search Console bulk data export, BigQuery datasets, SQL models, data quality, permissions, cost controls, dashboards, and search analysis',
  metaTitle: 'GSC BigQuery Setup & Search Data Models',
  metaDescription: 'Set up Search Console bulk export to BigQuery with permissions, validation, SQL models, cost controls, dashboards and query/page cohort analysis.',
  eyebrow: 'GSC + BigQuery · Retention + SQL + governed search data',
  title: 'Keep the search data.',
  titleAccent: 'Make every query reproducible.',
  definition: 'GSC BigQuery setup configures Search Console bulk data export and a governed warehouse layer so teams can retain daily search data, query it with SQL, build stable cohorts, validate reports, and support dashboards or models beyond the web interface.',
  bestFit: 'Sites with enough Search Console volume, properties, markets, templates, or reporting complexity to justify retained granular data and an owner for Google Cloud access, costs, modeling, and maintenance.',
  heroChecks: ['Search Console property and export setup, dataset, tables, permissions, and billing review', 'Query, page, country, device, search appearance, property, and date models', 'Validation against interface totals with documented privacy and aggregation differences', 'No invented +28% uplift: infrastructure enables analysis but does not create rankings'],
  examples: ['how to export Search Console data to BigQuery', 'GSC BigQuery setup service', 'retain more than Search Console interface history', 'join query and landing data for SEO reporting'],
  pageAssets: ['property inventory, export runbook, project, dataset, and access design', 'raw tables, modeled views, SQL definitions, and data dictionary', 'query, page, market, device, search-appearance, brand, and template cohorts', 'validation reports, freshness checks, cost monitors, and dashboard sources', 'permissions, owners, billing, privacy, retention, incident, and handoff documentation'],
  technicalFocus: 'A Google Cloud and Search Console setup covering property ownership, project and dataset selection, export configuration, service access, IAM, billing, table availability, time partitions, scheduled SQL, testing, monitoring, and recovery.',
  contentFocus: 'A search-data model and dictionary that defines dimensions, metrics, aggregation, anonymized queries, canonical URL handling, brand rules, cohorts, joins, and the questions each view can answer.',
  authorityFocus: 'Data lineage from Google’s source tables through transformations and dashboards, with SQL versioning, owner review, and third-party data clearly separated from Search Console facts.',
  operationsFocus: 'Freshness and row-count tests, permission reviews, query cost controls, scheduled jobs, schema monitoring, documentation, incident handling, and analyst handoff.',
  measurementFocus: 'Export continuity, freshness, reconciliation, query cost, model reuse, dashboard reliability, analysis coverage, and decisions enabled—not a traffic percentage attributed to warehouse setup.',
  boundary: 'Bulk export expands retention and query flexibility but still follows Search Console processing, privacy, aggregation, and query-anonymization rules. It does not expose every individual search or make Search Console equal GA4.',
  sources: [sources.bulkExport, sources.searchConsole, sources.bigQuery, sources.looker, sources.gaBigQuery],
  customFaqs: [
    { question: 'Does Search Console bulk export include all queries?', answer: 'Google applies privacy protections and may omit anonymized queries from query-level tables. Site-level totals and grouped query data can therefore differ. The model should document which table and aggregation supports each report.' },
    { question: 'Is BigQuery expensive for Search Console data?', answer: 'Cost depends on storage, query volume, scan size, transformations, dashboards, retention, and wider data joined to it. Partition-aware SQL, selected columns, materialized or scheduled models, quotas, and billing alerts can keep usage controlled.' },
  ],
  relatedLinks: [
    { href: '/services/analytics', label: 'SEO analytics', description: 'Design the metrics and decision framework.' },
    { href: '/services/analytics/seo-reporting', label: 'SEO reporting', description: 'Surface governed search cohorts to stakeholders.' },
    { href: '/services/analytics/automated-technical-reporting', label: 'Automated reporting', description: 'Add crawl and release monitoring to warehouse data.' },
    { href: '/services/analytics/seo-forecasting', label: 'SEO forecasting', description: 'Build scenarios from retained search history.' },
  ],
})

const technicalReporting = page({
  slug: 'analytics/automated-technical-reporting',
  name: 'Automated Technical SEO Reporting',
  schemaName: 'Automated technical SEO monitoring and reporting services',
  serviceType: 'Automated technical SEO reporting for crawls, rendering, index signals, sitemaps, templates, performance, releases, alerts, QA, and incident response',
  metaTitle: 'Automated Technical SEO Reporting',
  metaDescription: 'Automated technical SEO monitoring for crawl, render, index, sitemap, template, performance and release conditions—with alerts and human review.',
  eyebrow: 'Technical SEO reporting · Monitoring + alerts + accountable response',
  title: 'Find regressions before they spread.',
  titleAccent: 'Alert the right owner.',
  definition: 'Automated technical SEO reporting repeatedly tests defined crawl, rendering, index, sitemap, template, link, performance, and release conditions, then routes meaningful exceptions to an accountable owner with context and response rules.',
  bestFit: 'Sites with frequent releases, many templates or URLs, significant search dependence, recurring technical defects, or teams that need early warning and evidence beyond a periodic audit.',
  heroChecks: ['Scheduled crawls, rendered checks, sitemap and Search Console monitoring', 'Template, cohort, severity, reach, confidence, owner, and release context', 'Thresholds, deduplication, anomaly review, false-positive management, and escalation', 'Automation finds conditions; people approve priorities, releases, and incident response'],
  examples: ['automated technical SEO reporting service', 'monitor SEO regressions after deployments', 'scheduled crawl and index alerts', 'technical SEO dashboard for enterprise sites'],
  pageAssets: ['monitoring inventory, URL samples, templates, rules, and ownership matrix', 'crawl, render, status, canonical, robots, sitemap, link, and schema checks', 'Core Web Vitals, performance, Search Console, log, and release cohorts', 'incident evidence, annotations, trend baselines, false positives, and recovery checks', 'access, retention, alert, escalation, maintenance, and handoff runbooks'],
  technicalFocus: 'A monitoring design covering representative URL samples, crawl sources, rendering, response and header checks, canonical and robots rules, sitemap inventories, schema validation, internal links, performance, Search Console, releases, alert channels, and rate limits.',
  contentFocus: 'A decision-ready exception report that explains the affected cohort, first observed time, severity, reach, evidence, likely owner, recent releases, validation steps, and recommended response.',
  authorityFocus: 'Reliable system and data provenance: raw observations, rule version, crawler configuration, source timestamp, transformation, threshold, and analyst interpretation remain auditable.',
  operationsFocus: 'Scheduled jobs, secrets and access, health checks, deduplication, severity rules, alert routing, acknowledgement, escalation, maintenance, false-positive review, recovery verification, and incident retrospectives.',
  measurementFocus: 'Monitoring coverage, detection latency, alert precision, acknowledgement and resolution time, recurrence, escaped defects, search impact, system cost, and owner adoption.',
  boundary: 'Automated tools report observable conditions and can generate false positives or miss business context. They do not replace log, code, platform, policy, customer, or stakeholder investigation when the issue is consequential.',
  sources: [sources.bulkExport, sources.searchConsole, sources.bigQuery, sources.looker, sources.aiSearch],
  customFaqs: [
    { question: 'How is automated reporting different from an SEO audit?', answer: 'An audit is a point-in-time investigation across a broad scope. Monitoring repeatedly tests selected conditions and alerts on change. Strong programs use audits to discover and prioritize risks, then turn repeatable high-value checks into monitoring.' },
    { question: 'What should trigger a technical SEO alert?', answer: 'Examples include unexpected noindex or robots changes, canonical shifts, status spikes, sitemap divergence, missing internal links, rendered-content loss, schema breakage, performance regression, template anomalies, or Search Console movement beyond a reviewed threshold. The exact rules depend on site risk and normal variance.' },
  ],
  relatedLinks: [
    { href: '/services/technical-seo', label: 'Technical SEO', description: 'Diagnose architecture, rendering, index, and performance issues.' },
    { href: '/services/seo-automation', label: 'SEO automation', description: 'Design controlled workflows, QA, and rollback.' },
    { href: '/services/analytics/gsc-bigquery-setup', label: 'GSC + BigQuery', description: 'Retain search data and build stable cohorts.' },
    { href: '/services/analytics/seo-reporting', label: 'SEO reporting', description: 'Connect technical exceptions to stakeholder decisions.' },
  ],
})

export const analyticsServiceLeadPages = {
  analytics,
  reporting,
  attribution,
  forecasting,
  bigQuery,
  technicalReporting,
} as const
