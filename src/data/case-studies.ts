import type { LaunchPhase, PageStatus } from './types'

export type CaseStudyMetric = {
  label: string
  value: string
  source: string
  window: string
  interpretation: string
}

export type CaseStudyEvidence = {
  label: string
  description: string
}

export type CaseStudy = {
  slug: string
  client: string
  industry: string
  industryLabel: string
  headline: string
  headlineMetric: string
  status: PageStatus
  launchPhase: LaunchPhase
  permissionsStatus: 'approved'
  ownership: string
  reportingDate: string
  summary: string
  challenge: string
  approach: string[]
  system: Array<{ title: string; body: string }>
  metrics: CaseStudyMetric[]
  interpretation: string
  limitations: string[]
  evidence: CaseStudyEvidence[]
  sourceLinks: Array<{ label: string; href: string; note: string }>
  faqs: Array<{ question: string; answer: string }>
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'expressway-ph',
    client: 'Expressway.PH',
    industry: 'automotive',
    industryLabel: 'Philippine transport publishing',
    headline:
      'Building a Philippine road-information source visible in Google and tracked AI responses',
    headlineMetric: '49.2K estimated monthly organic traffic',
    status: 'live',
    launchPhase: 'M1',
    permissionsStatus: 'approved',
    ownership: 'First-party project owned and operated by the project owner',
    reportingDate: 'July 2026',
    summary:
      'Expressway.PH is a Philippine information product built around real driver tasks: expressway tolls, routes, exits, RFID systems, restrictions, traffic, and policy updates. A July 2026 Ahrefs snapshot supplied by the project owner showed 49.2K estimated monthly organic traffic, 6.8K organic keywords, 3.4K AI Overview responses, and 2.4K ChatGPT responses. These are point-in-time third-party observations, not audited revenue or a guaranteed client outcome.',
    challenge:
      'Philippine expressway information is fragmented across operator notices, government sources, maps, news reports, and social posts. Facts change, terminology varies, and a driver usually needs a specific answer rather than a generic automotive article. The product had to turn those recurring tasks into a coherent, maintainable information architecture while making the relevant facts accessible to people, search crawlers, and answer systems.',
    approach: [
      'Mapped pages to driver tasks such as choosing a route, checking tolls, understanding RFID coverage, finding exits, and verifying restrictions.',
      'Separated route, toll, RFID, traffic, and policy intent so one page could own a useful question instead of several pages competing with each other.',
      'Connected supporting pages through contextual internal links based on the next question a driver would realistically ask.',
      'Used direct factual answers, descriptive headings, tables, definitions, and page structure that make changing information easier to inspect.',
      'Established a maintenance need for high-change topics rather than treating publication as the end of the workflow.',
      'Reviewed conventional search visibility and tracked AI-response datasets as separate observation layers.',
    ],
    system: [
      {
        title: 'Task-led architecture',
        body: 'The page system starts with what a driver needs to decide or verify. That gives route, toll, RFID, exit, traffic, and policy pages distinct jobs and clearer internal relationships.',
      },
      {
        title: 'Retrievable facts',
        body: 'Important facts are stated directly and placed near the context needed to interpret them. This improves usefulness and makes extraction less dependent on an assistant inferring meaning from a long narrative.',
      },
      {
        title: 'Freshness governance',
        body: 'Topics with operational or policy change require sources, review triggers, visible context, and update ownership. The case does not claim that every page or answer is permanently current.',
      },
      {
        title: 'Multi-surface measurement',
        body: 'Google-oriented metrics and Ahrefs AI-response observations are reported separately. A response count does not establish causality, user satisfaction, referral traffic, or revenue.',
      },
    ],
    metrics: [
      {
        label: 'Estimated monthly organic traffic',
        value: '49.2K',
        source: 'Ahrefs Site Explorer',
        window: 'July 2026 point-in-time snapshot',
        interpretation:
          'A third-party estimate of monthly organic search traffic, not first-party analytics sessions.',
      },
      {
        label: 'Organic keywords',
        value: '6.8K',
        source: 'Ahrefs Site Explorer',
        window: 'July 2026 · all locations',
        interpretation:
          'The number of keywords observed in Ahrefs’ organic database at the capture date.',
      },
      {
        label: 'AI Overview responses',
        value: '3.4K',
        source: 'Ahrefs AI responses index',
        window: 'July 2026 point-in-time snapshot',
        interpretation:
          'Tracked AI Overview responses associated with the domain in Ahrefs’ sampled index.',
      },
      {
        label: 'ChatGPT responses',
        value: '2.4K',
        source: 'Ahrefs AI responses index',
        window: 'July 2026 point-in-time snapshot',
        interpretation:
          'Tracked ChatGPT responses associated with the domain in Ahrefs’ sampled index, not all real user conversations.',
      },
    ],
    interpretation:
      'The snapshot shows that a focused information product can build a substantial conventional search footprint while also appearing repeatedly in sampled AI-answer datasets. It does not prove that one page pattern or optimization caused every ranking, mention, or citation. The defensible lesson is narrower: specific, maintained, well-connected information can serve both link-based search and answer systems without creating separate low-quality content for each platform.',
    limitations: [
      'Ahrefs organic traffic is an estimate derived from its keyword database and click model; it is not the same as first-party analytics.',
      'The AI-response counts represent Ahrefs’ tracked prompts and responses, not every prompt submitted by every user.',
      'A domain-level response count does not show which source text materially influenced an answer or whether the answer drove a visit or conversion.',
      'The supplied snapshot is point-in-time. Rankings, traffic estimates, interfaces, prompts, citations, and platform behavior can change.',
      'This owned-project result is not a forecast, average, or promise for a client site with a different market, product, domain, team, or history.',
    ],
    evidence: [
      {
        label: 'Ahrefs organic traffic trend',
        description:
          'Add the approved two-year monthly chart with Avg. organic traffic selected. Keep the domain, date range, legend, current value, and axes visible.',
      },
      {
        label: 'Ahrefs organic keyword trend',
        description:
          'Add the approved Organic Search chart with ranking-position groups, current keyword total, and the same reporting window.',
      },
      {
        label: 'Ahrefs AI responses overview',
        description:
          'Add the approved AI responses panel showing AI Overviews, ChatGPT, platform rows, response counts, pages, domain, and capture date.',
      },
    ],
    sourceLinks: [
      {
        label: 'Ahrefs: organic traffic definition',
        href: 'https://help.ahrefs.com/en/articles/1863206-what-does-organic-traffic-in-site-explorer-mean',
        note: 'Ahrefs’ explanation of the estimated organic traffic metric used in Site Explorer.',
      },
      {
        label: 'Google Search Essentials',
        href: 'https://developers.google.com/search/docs/essentials',
        note: 'Google’s technical, spam-policy, and core Search guidance.',
      },
      {
        label: 'Google: AI features and your website',
        href: 'https://developers.google.com/search/docs/appearance/ai-features',
        note: 'Google’s published requirements and measurement guidance for AI Overviews and AI Mode.',
      },
    ],
    faqs: [
      {
        question: 'Is 49.2K the site’s exact monthly Google Analytics traffic?',
        answer:
          'No. It is an Ahrefs estimate captured in July 2026. The case labels it as estimated monthly organic traffic and does not present it as first-party analytics.',
      },
      {
        question: 'Do 2.4K ChatGPT responses mean 2.4K ChatGPT visitors?',
        answer:
          'No. The figure comes from Ahrefs’ tracked AI-response index. It is an observation of sampled responses associated with the domain, not referral sessions, users, leads, or sales.',
      },
      {
        question: 'Which single tactic caused the result?',
        answer:
          'The evidence does not support a single-cause claim. The product combines task-led architecture, specific factual pages, internal linking, technical accessibility, maintenance, and accumulated domain history. Other market and platform factors also affect visibility.',
      },
      {
        question: 'Can TheProjectSEO reproduce this result for another publisher?',
        answer:
          'No provider can responsibly promise the same scale or timetable. The transferable part is the research, architecture, source, maintenance, implementation, and measurement method. Outcomes depend on the market, site, product, evidence, authority, team, and platform behavior.',
      },
    ],
  },
  {
    slug: 'taxcalculator-com-ph',
    client: 'TaxCalculator.com.ph',
    industry: 'finance',
    industryLabel: 'Philippine tax utility',
    headline:
      'Growing a Philippine tax calculator from a clean Google Search baseline',
    headlineMetric: '32.3K GSC impressions in three months',
    status: 'live',
    launchPhase: 'M1',
    permissionsStatus: 'approved',
    ownership: 'First-party project owned and operated by the project owner',
    reportingDate: 'July 2026',
    summary:
      'TaxCalculator.com.ph is a focused Philippine tax utility launched in June 2026. A Google Search Console performance view supplied by the project owner showed 32.3K impressions and 335 clicks over the selected three-month range as of July 2026. The result represents early Google Search exposure from a new-domain baseline; it does not establish revenue, completed tax filings, or a stable long-term growth rate.',
    challenge:
      'A tax calculator has to solve an immediate numerical task while explaining assumptions, inputs, and context clearly enough for a user to judge the output. A new domain also begins without historical search performance or an established link profile. The project needed to make the utility usable first, keep the supporting content narrow and coherent, remain technically accessible, and measure early discovery without inflating what a short reporting window proves.',
    approach: [
      'Made the calculator the primary product experience rather than hiding the interactive task beneath a generic long-form article.',
      'Added explanatory content around inputs, outputs, calculation assumptions, and relevant Philippine tax concepts.',
      'Kept the initial information architecture narrow so indexable pages reinforce a coherent entity and topic set.',
      'Ensured the interactive experience is supported by crawlable, server-rendered context and descriptive page elements.',
      'Measured launch visibility directly in Google Search Console rather than reporting only third-party estimates.',
      'Separated observed impressions and clicks from claims about rankings, authority, revenue, or future growth.',
    ],
    system: [
      {
        title: 'Utility-first experience',
        body: 'The calculator performs the primary user task. Supporting explanations reduce ambiguity and help users understand the inputs and output without displacing the tool.',
      },
      {
        title: 'Narrow topical scope',
        body: 'The launch architecture avoids publishing a broad finance library before the core product and its immediate supporting questions have a clear, maintainable foundation.',
      },
      {
        title: 'Technical accessibility',
        body: 'Search crawlers need stable URLs, server-rendered context, meaningful status codes, internal links, metadata, and content that remains understandable outside the interactive state.',
      },
      {
        title: 'First-party baseline',
        body: 'Search Console supplies direct Google impressions and clicks for the verified property. The short window is retained rather than extrapolated into an annual forecast.',
      },
    ],
    metrics: [
      {
        label: 'Google Search impressions',
        value: '32.3K',
        source: 'Google Search Console',
        window: 'Supplied three-month performance view · July 2026',
        interpretation:
          'The number of times a result from the property was shown in Google Search within the selected view.',
      },
      {
        label: 'Google Search clicks',
        value: '335',
        source: 'Google Search Console',
        window: 'Supplied three-month performance view · July 2026',
        interpretation:
          'Clicks from Google Search results recorded for the property within the selected view.',
      },
      {
        label: 'Launch baseline',
        value: 'June 2026',
        source: 'Project owner',
        window: 'Project launch context',
        interpretation:
          'The site was new during the reporting period, so the figures describe early visibility rather than a mature baseline.',
      },
    ],
    interpretation:
      'The supplied Search Console view shows that a narrowly scoped utility can earn measurable Google exposure soon after launch. It does not prove that links are unimportant, that the growth rate will continue, or that every impression was commercially valuable. The useful lesson is that product usefulness, clear supporting context, technical accessibility, and focused topic architecture can create an observable starting point for later content, authority, and conversion work.',
    limitations: [
      'The selected three-month Search Console range includes a site that launched during the period, so period-over-period comparisons require care.',
      'Impressions and clicks do not establish calculator completion, user satisfaction, tax accuracy, leads, or revenue.',
      'The case does not publish personal tax data, user inputs, or any claim that the utility replaces professional tax advice.',
      'No AI-response result is claimed for this case because the supplied first-party proof is the Google Search Console view.',
      'Early visibility can change as Google discovers more pages, competitors change, the site earns or loses authority, and tax information is updated.',
    ],
    evidence: [
      {
        label: 'Google Search Console performance',
        description:
          'Add the approved three-month Performance screenshot with Total clicks and Total impressions selected, the full chart visible, and the capture date documented.',
      },
      {
        label: 'Search query and page cohorts',
        description:
          'Add an approved, privacy-safe table showing the leading non-sensitive query and landing-page groups without exposing user-level information.',
      },
      {
        label: 'Calculator product experience',
        description:
          'Add a clean desktop product screenshot showing the calculator inputs, output state, and supporting explanation without personal data.',
      },
    ],
    sourceLinks: [
      {
        label: 'Google Search Console performance report',
        href: 'https://support.google.com/webmasters/answer/7576553',
        note: 'Google’s definition and documentation for clicks, impressions, CTR, position, queries, pages, countries, and devices.',
      },
      {
        label: 'Google Search Essentials',
        href: 'https://developers.google.com/search/docs/essentials',
        note: 'Google’s technical requirements, spam policies, and core Search practices.',
      },
      {
        label: 'Google structured data policies',
        href: 'https://developers.google.com/search/docs/appearance/structured-data/sd-policies',
        note: 'Google’s requirement that structured data be accurate, visible, representative, and policy compliant.',
      },
    ],
    faqs: [
      {
        question: 'Does 32.3K impressions mean 32.3K visits?',
        answer:
          'No. Search Console impressions count eligible result appearances under Google’s reporting rules. The supplied view recorded 335 clicks in the same selected range.',
      },
      {
        question: 'Why report a three-month view if the site launched in June?',
        answer:
          'That is the date range shown in the supplied Search Console evidence. The case also states the June 2026 launch so readers do not mistake the range for three full mature months or extrapolate it without context.',
      },
      {
        question: 'Does the case prove that a new site does not need backlinks?',
        answer:
          'No. It shows early impressions and clicks from a focused utility. It does not isolate link effects or predict what will be needed to sustain and expand visibility in more competitive query groups.',
      },
      {
        question: 'Is TaxCalculator.com.ph a tax-advice service?',
        answer:
          'This case study describes search-product and measurement work. It does not claim that a calculator replaces official guidance or advice from a qualified tax professional.',
      },
    ],
  },
]

export const caseStudySlugs = caseStudies.map((caseStudy) => caseStudy.slug)

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug)
}
