export type EvidenceAsset = {
  src: string
  alt: string
  source: 'Ahrefs' | 'Google Search Console' | 'Google Analytics 4' | 'Bing Webmaster Tools'
  captureDate: string
  reportingWindow: string
  width: number
  height: number
}

export const expresswayEvidenceAssets = {
  ahrefsAiResponses: {
    src: '/evidence/expressway/ahrefs-ai-response-visibility-july-2026.webp',
    alt: 'Ahrefs AI responses overview for Expressway.PH showing visibility in Google AI Overviews, ChatGPT, Google AI Mode, Gemini, Perplexity, Copilot, and Grok.',
    source: 'Ahrefs',
    captureDate: '28 July 2026',
    reportingWindow: 'Point-in-time visibility snapshot',
    width: 581,
    height: 700,
  },
  ahrefsOrganicKeywords: {
    src: '/evidence/expressway/ahrefs-organic-keyword-growth-2-years-july-2026.webp',
    alt: 'Ahrefs two-year organic keyword chart for Expressway.PH showing growth across ranking-position groups.',
    source: 'Ahrefs',
    captureDate: '28 July 2026',
    reportingWindow: 'Two years · monthly',
    width: 639,
    height: 755,
  },
  ahrefsOrganicTraffic: {
    src: '/evidence/expressway/ahrefs-organic-traffic-trend-2-years-july-2026.webp',
    alt: 'Ahrefs two-year average organic traffic chart for Expressway.PH showing a strong upward trend.',
    source: 'Ahrefs',
    captureDate: '28 July 2026',
    reportingWindow: 'Two years · monthly',
    width: 639,
    height: 643,
  },
  bingPerformance: {
    src: '/evidence/expressway/bing-search-performance-3-months-july-2026.webp',
    alt: 'Bing Webmaster Tools search performance for Expressway.PH showing 16 thousand clicks and 496.5 thousand impressions over three months.',
    source: 'Bing Webmaster Tools',
    captureDate: '28 July 2026',
    reportingWindow: 'Three months',
    width: 611,
    height: 710,
  },
  bingKeywords: {
    src: '/evidence/expressway/bing-top-keywords-3-months-july-2026.webp',
    alt: 'Bing Webmaster Tools top search keywords for Expressway.PH over three months.',
    source: 'Bing Webmaster Tools',
    captureDate: '28 July 2026',
    reportingWindow: 'Three months',
    width: 611,
    height: 710,
  },
  bingPages: {
    src: '/evidence/expressway/bing-top-pages-3-months-july-2026.webp',
    alt: 'Bing Webmaster Tools top landing pages for Expressway.PH over three months.',
    source: 'Bing Webmaster Tools',
    captureDate: '28 July 2026',
    reportingWindow: 'Three months',
    width: 611,
    height: 710,
  },
  ga4LandingPages: {
    src: '/evidence/expressway/ga4-top-landing-pages-28-days-july-2026.webp',
    alt: 'Google Analytics 4 landing-page report for Expressway.PH showing the leading pages by sessions over 28 days.',
    source: 'Google Analytics 4',
    captureDate: '28 July 2026',
    reportingWindow: '30 June–27 July 2026',
    width: 584,
    height: 690,
  },
  ga4TrafficAcquisition: {
    src: '/evidence/expressway/ga4-traffic-acquisition-28-days-july-2026.webp',
    alt: 'Google Analytics 4 traffic-acquisition report for Expressway.PH showing Organic Search as the leading channel and a separate AI Assistant channel.',
    source: 'Google Analytics 4',
    captureDate: '28 July 2026',
    reportingWindow: '30 June–27 July 2026',
    width: 584,
    height: 690,
  },
  gscPerformance: {
    src: '/evidence/expressway/gsc-search-performance-3-months-july-2026.webp',
    alt: 'Google Search Console performance for Expressway.PH showing 141 thousand clicks and 11.1 million impressions over three months.',
    source: 'Google Search Console',
    captureDate: '28 July 2026',
    reportingWindow: 'Three months',
    width: 615,
    height: 690,
  },
  gscLandingPages: {
    src: '/evidence/expressway/gsc-top-landing-pages-3-months-july-2026.webp',
    alt: 'Google Search Console top landing pages for Expressway.PH over three months.',
    source: 'Google Search Console',
    captureDate: '28 July 2026',
    reportingWindow: 'Three months',
    width: 615,
    height: 690,
  },
  gscQueries: {
    src: '/evidence/expressway/gsc-top-queries-3-months-july-2026.webp',
    alt: 'Google Search Console top search queries for Expressway.PH over three months.',
    source: 'Google Search Console',
    captureDate: '28 July 2026',
    reportingWindow: 'Three months',
    width: 615,
    height: 690,
  },
} satisfies Record<string, EvidenceAsset>

const evidenceAssetsByLabel: Record<string, EvidenceAsset> = {
  'Expressway.PH — Ahrefs organic traffic and keyword trend':
    expresswayEvidenceAssets.ahrefsOrganicTraffic,
  'Reporting layer — Google Search Console and organic growth':
    expresswayEvidenceAssets.gscPerformance,
  'Reporting layer — AI mention and citation observations':
    expresswayEvidenceAssets.ahrefsAiResponses,
  'Ahrefs organic traffic trend': expresswayEvidenceAssets.ahrefsOrganicTraffic,
  'Ahrefs organic keyword trend': expresswayEvidenceAssets.ahrefsOrganicKeywords,
  'Ahrefs AI responses overview': expresswayEvidenceAssets.ahrefsAiResponses,
}

export function getEvidenceAsset(label: string): EvidenceAsset | undefined {
  return evidenceAssetsByLabel[label]
}
