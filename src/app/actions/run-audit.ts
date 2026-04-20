'use server'

/**
 * Live Audit server action — hits Google's Chrome UX Report API for real-user
 * Core Web Vitals and derives plain-English findings.
 *
 * Modes:
 *   - live:       CrUX returned real field data (primary happy path)
 *   - low-traffic: CrUX returned 404 (site too small for field data)
 *   - preview:    no API key configured — returns labeled sample data
 *   - error:      network or API failure
 *
 * CrUX API: https://developer.chrome.com/docs/crux/api
 *   - Free, <500ms response
 *   - Optional API key increases quota (anonymous works for demo volume)
 *   - Returns p75 LCP, INP, CLS, FCP, TTFB from real Chrome users (28-day window)
 */

const CRUX_ENDPOINT = 'https://chromeuxreport.googleapis.com/v1/records:queryRecord'

export type AuditMode = 'live' | 'low-traffic' | 'preview' | 'error'

export type AuditFinding = {
  severity: 'good' | 'warn' | 'bad'
  title: string
  detail: string
}

export type AuditResult = {
  mode: AuditMode
  normalizedUrl: string
  scores: {
    lcp: { p75Ms: number; rating: 'good' | 'needs-improvement' | 'poor' } | null
    inp: { p75Ms: number; rating: 'good' | 'needs-improvement' | 'poor' } | null
    cls: { p75: number; rating: 'good' | 'needs-improvement' | 'poor' } | null
    fcp: { p75Ms: number; rating: 'good' | 'needs-improvement' | 'poor' } | null
  }
  overallGrade: 'A' | 'B' | 'C' | 'D' | 'F'
  findings: AuditFinding[]
  fetchedAt: string
  message?: string
}

function normalizeUrl(raw: string): string {
  const trimmed = raw.trim()
  if (!trimmed) throw new Error('URL required')
  const withProtocol = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`
  const u = new URL(withProtocol) // throws if invalid
  return `${u.protocol}//${u.host}${u.pathname === '/' ? '' : u.pathname}`.replace(/\/$/, '') + '/'
}

function rateMs(value: number, good: number, poor: number): 'good' | 'needs-improvement' | 'poor' {
  if (value <= good) return 'good'
  if (value <= poor) return 'needs-improvement'
  return 'poor'
}

function deriveGrade(scores: AuditResult['scores']): AuditResult['overallGrade'] {
  const ratings = Object.values(scores)
    .filter((s): s is NonNullable<typeof s> => s !== null)
    .map((s) => s.rating)
  if (ratings.length === 0) return 'C'
  const good = ratings.filter((r) => r === 'good').length
  const poor = ratings.filter((r) => r === 'poor').length
  const ratio = good / ratings.length
  if (poor >= 2) return 'D'
  if (ratio === 1) return 'A'
  if (ratio >= 0.75) return 'B'
  if (ratio >= 0.5) return 'C'
  if (ratio >= 0.25) return 'D'
  return 'F'
}

function deriveFindings(scores: AuditResult['scores']): AuditFinding[] {
  const findings: AuditFinding[] = []

  if (scores.lcp) {
    if (scores.lcp.rating === 'poor') {
      findings.push({
        severity: 'bad',
        title: 'Largest Contentful Paint is slow',
        detail: `Real users wait ${(scores.lcp.p75Ms / 1000).toFixed(1)}s for the main content to load. Google recommends <2.5s — this likely hurts rankings and conversion.`,
      })
    } else if (scores.lcp.rating === 'needs-improvement') {
      findings.push({
        severity: 'warn',
        title: 'LCP is in the middle band',
        detail: `${(scores.lcp.p75Ms / 1000).toFixed(1)}s for 75th-percentile users. Shaving another 500ms would move this into Google's "good" bucket.`,
      })
    } else {
      findings.push({
        severity: 'good',
        title: 'LCP passes Core Web Vitals',
        detail: `${(scores.lcp.p75Ms / 1000).toFixed(1)}s for 75th-percentile users — well within Google's 2.5s threshold.`,
      })
    }
  }

  if (scores.inp) {
    if (scores.inp.rating !== 'good') {
      findings.push({
        severity: scores.inp.rating === 'poor' ? 'bad' : 'warn',
        title: 'Interaction responsiveness lagging',
        detail: `INP p75 is ${scores.inp.p75Ms}ms. Google wants <200ms — anything above feels sluggish when users click buttons or submit forms.`,
      })
    }
  }

  if (scores.cls && scores.cls.rating !== 'good') {
    findings.push({
      severity: scores.cls.rating === 'poor' ? 'bad' : 'warn',
      title: 'Layout shifts detected',
      detail: `CLS p75 is ${scores.cls.p75.toFixed(3)}. Elements are jumping around during page load — usually caused by unsized images, ads, or late-loading fonts.`,
    })
  }

  return findings.slice(0, 3)
}

function previewResult(normalizedUrl: string): AuditResult {
  // Deterministic sample seeded by the URL's length so the same URL
  // always returns the same preview (not random). Clearly labeled.
  const seed = normalizedUrl.length
  const lcpMs = 2200 + (seed % 9) * 180
  const inpMs = 160 + (seed % 7) * 20
  const cls = 0.06 + (seed % 10) * 0.012
  const scores: AuditResult['scores'] = {
    lcp: { p75Ms: lcpMs, rating: rateMs(lcpMs, 2500, 4000) },
    inp: { p75Ms: inpMs, rating: rateMs(inpMs, 200, 500) },
    cls: { p75: cls, rating: cls <= 0.1 ? 'good' : cls <= 0.25 ? 'needs-improvement' : 'poor' },
    fcp: { p75Ms: 1400 + (seed % 5) * 200, rating: rateMs(1400 + (seed % 5) * 200, 1800, 3000) },
  }
  return {
    mode: 'preview',
    normalizedUrl,
    scores,
    overallGrade: deriveGrade(scores),
    findings: deriveFindings(scores),
    fetchedAt: new Date().toISOString(),
    message: 'Preview mode — connect PAGESPEED_API_KEY for real field data.',
  }
}

export async function runAudit(rawUrl: string): Promise<AuditResult> {
  let normalizedUrl: string
  try {
    normalizedUrl = normalizeUrl(rawUrl)
  } catch {
    return {
      mode: 'error',
      normalizedUrl: rawUrl,
      scores: { lcp: null, inp: null, cls: null, fcp: null },
      overallGrade: 'F',
      findings: [],
      fetchedAt: new Date().toISOString(),
      message: 'Invalid URL. Try something like example.com or https://example.com/pricing.',
    }
  }

  const apiKey = process.env.PAGESPEED_API_KEY
  if (!apiKey) return previewResult(normalizedUrl)

  try {
    const res = await fetch(`${CRUX_ENDPOINT}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: normalizedUrl, formFactor: 'PHONE' }),
      next: { revalidate: 60 * 30 }, // cache same URL for 30 min
    })

    if (res.status === 404) {
      return {
        mode: 'low-traffic',
        normalizedUrl,
        scores: { lcp: null, inp: null, cls: null, fcp: null },
        overallGrade: 'C',
        findings: [],
        fetchedAt: new Date().toISOString(),
        message: 'This site has too little Chrome traffic for CrUX field data. Book a full synthetic audit to get a Lighthouse report.',
      }
    }

    if (!res.ok) {
      return {
        mode: 'error',
        normalizedUrl,
        scores: { lcp: null, inp: null, cls: null, fcp: null },
        overallGrade: 'F',
        findings: [],
        fetchedAt: new Date().toISOString(),
        message: `CrUX API returned ${res.status}. Try again or book a full audit.`,
      }
    }

    const data = await res.json()
    const metrics = data?.record?.metrics ?? {}

    const lcpP75 = metrics?.largest_contentful_paint?.percentiles?.p75
    const inpP75 = metrics?.interaction_to_next_paint?.percentiles?.p75
    const clsP75 = metrics?.cumulative_layout_shift?.percentiles?.p75
    const fcpP75 = metrics?.first_contentful_paint?.percentiles?.p75

    const scores: AuditResult['scores'] = {
      lcp: lcpP75 != null ? { p75Ms: Number(lcpP75), rating: rateMs(Number(lcpP75), 2500, 4000) } : null,
      inp: inpP75 != null ? { p75Ms: Number(inpP75), rating: rateMs(Number(inpP75), 200, 500) } : null,
      cls:
        clsP75 != null
          ? {
              p75: Number(clsP75),
              rating: Number(clsP75) <= 0.1 ? 'good' : Number(clsP75) <= 0.25 ? 'needs-improvement' : 'poor',
            }
          : null,
      fcp: fcpP75 != null ? { p75Ms: Number(fcpP75), rating: rateMs(Number(fcpP75), 1800, 3000) } : null,
    }

    return {
      mode: 'live',
      normalizedUrl,
      scores,
      overallGrade: deriveGrade(scores),
      findings: deriveFindings(scores),
      fetchedAt: new Date().toISOString(),
    }
  } catch (err) {
    return {
      mode: 'error',
      normalizedUrl,
      scores: { lcp: null, inp: null, cls: null, fcp: null },
      overallGrade: 'F',
      findings: [],
      fetchedAt: new Date().toISOString(),
      message: err instanceof Error ? err.message : 'Audit failed. Try again.',
    }
  }
}
