'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

interface Metric {
  name: string
  value: string
  verdict: 'PASS' | 'NEEDS IMPROVEMENT' | 'FAIL' | 'NO DATA'
  threshold: string
}

export default function CoreWebVitalsCheckerPage() {
  const [url, setUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [metrics, setMetrics] = useState<Metric[] | null>(null)
  const [strategy, setStrategy] = useState<'mobile' | 'desktop'>('mobile')

  const verdictFor = (value: number, good: number, poor: number): 'PASS' | 'NEEDS IMPROVEMENT' | 'FAIL' => {
    if (value <= good) return 'PASS'
    if (value <= poor) return 'NEEDS IMPROVEMENT'
    return 'FAIL'
  }

  const run = async () => {
    setError(null)
    setMetrics(null)
    if (!url.trim()) {
      setError('Enter a URL first.')
      return
    }
    setLoading(true)
    try {
      const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&category=performance&strategy=${strategy}`
      const res = await fetch(api)
      if (!res.ok) throw new Error(`PageSpeed API returned ${res.status}. This is usually rate limiting — wait 30 seconds and try again.`)
      const data = await res.json()
      const audits = data?.lighthouseResult?.audits ?? {}
      const fieldData = data?.loadingExperience?.metrics ?? {}

      const lcpFieldMs = fieldData.LARGEST_CONTENTFUL_PAINT_MS?.percentile
      const inpFieldMs = fieldData.INTERACTION_TO_NEXT_PAINT?.percentile
      const clsFieldVal = fieldData.CUMULATIVE_LAYOUT_SHIFT_SCORE?.percentile
      const fcpFieldMs = fieldData.FIRST_CONTENTFUL_PAINT_MS?.percentile
      const ttfbFieldMs = fieldData.EXPERIMENTAL_TIME_TO_FIRST_BYTE?.percentile

      const lcpLabMs = audits['largest-contentful-paint']?.numericValue
      const clsLabVal = audits['cumulative-layout-shift']?.numericValue

      const pickLcp = lcpFieldMs ?? lcpLabMs
      const pickCls = clsFieldVal !== undefined ? clsFieldVal / 100 : clsLabVal

      const out: Metric[] = [
        {
          name: 'LCP (Largest Contentful Paint)',
          value: pickLcp ? `${(pickLcp / 1000).toFixed(2)}s` : 'no data',
          verdict: pickLcp ? verdictFor(pickLcp, 2500, 4000) : 'NO DATA',
          threshold: 'Good ≤ 2.5s, Poor > 4.0s',
        },
        {
          name: 'INP (Interaction to Next Paint)',
          value: inpFieldMs ? `${inpFieldMs}ms` : 'no data',
          verdict: inpFieldMs ? verdictFor(inpFieldMs, 200, 500) : 'NO DATA',
          threshold: 'Good ≤ 200ms, Poor > 500ms',
        },
        {
          name: 'CLS (Cumulative Layout Shift)',
          value: pickCls !== undefined ? pickCls.toFixed(3) : 'no data',
          verdict: pickCls !== undefined ? verdictFor(pickCls, 0.1, 0.25) : 'NO DATA',
          threshold: 'Good ≤ 0.1, Poor > 0.25',
        },
        {
          name: 'FCP (First Contentful Paint)',
          value: fcpFieldMs ? `${(fcpFieldMs / 1000).toFixed(2)}s` : 'no data',
          verdict: fcpFieldMs ? verdictFor(fcpFieldMs, 1800, 3000) : 'NO DATA',
          threshold: 'Good ≤ 1.8s, Poor > 3.0s',
        },
        {
          name: 'TTFB (Time to First Byte)',
          value: ttfbFieldMs ? `${ttfbFieldMs}ms` : 'no data',
          verdict: ttfbFieldMs ? verdictFor(ttfbFieldMs, 800, 1800) : 'NO DATA',
          threshold: 'Good ≤ 800ms, Poor > 1800ms',
        },
      ]
      setMetrics(out)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Request failed.')
    } finally {
      setLoading(false)
    }
  }

  const verdictColor = (v: Metric['verdict']) => v === 'PASS' ? 'text-emerald-700' : v === 'NEEDS IMPROVEMENT' ? 'text-amber-600' : v === 'FAIL' ? 'text-red-600' : 'text-ash'

  const inputClass = 'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent'
  const labelClass = 'block font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1.5'

  return (
    <main className="overflow-hidden">
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/tools" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">Tools</Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Core Web Vitals Checker</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Checker</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">Core Web Vitals Checker</h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">Instant CWV report via Google PageSpeed Insights. Real user data (CrUX) when available, lab data fallback. LCP, INP, CLS, FCP, TTFB.</p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. Uses Google&apos;s public PSI API.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="max-w-2xl mb-12">
            <div className="space-y-4">
              <div>
                <label className={labelClass}>URL to check</label>
                <input type="url" placeholder="https://example.com/page" value={url} onChange={(e) => setUrl(e.target.value)} className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Strategy</label>
                <select value={strategy} onChange={(e) => setStrategy(e.target.value as typeof strategy)} className={inputClass}>
                  <option value="mobile">Mobile (recommended — Google indexes mobile-first)</option>
                  <option value="desktop">Desktop</option>
                </select>
              </div>
              <button onClick={run} disabled={loading} className="inline-flex items-center justify-center bg-ink text-paper px-6 py-3 font-mono text-xs uppercase tracking-[0.1em] hover:bg-accent transition-colors disabled:opacity-50">
                {loading ? 'Running…' : 'Check Core Web Vitals'}
              </button>
              {error && <p className="text-sm text-red-600">{error}</p>}
            </div>
          </div>

          {metrics && (
            <div className="space-y-4">
              <h2 className="font-heading text-2xl font-semibold text-ink mb-6">Results for {url}</h2>
              <div className="grid grid-cols-1 gap-px bg-border-strong lg:grid-cols-2">
                {metrics.map((m) => (
                  <div key={m.name} className="bg-paper p-6">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-heading text-sm font-semibold text-ink">{m.name}</div>
                      <div className={`font-mono text-xs uppercase tracking-[0.1em] font-semibold ${verdictColor(m.verdict)}`}>{m.verdict}</div>
                    </div>
                    <div className="font-display text-3xl font-medium text-accent mb-2">{m.value}</div>
                    <p className="text-xs text-ash">{m.threshold}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-xs text-ash">Field data reflects real Chrome users over the last 28 days. When field data is missing the page either has insufficient traffic or the API returned lab-data only. Need help improving scores? <Link href="/services/technical-seo/core-web-vitals" className="text-accent hover:underline">See our CWV optimization service →</Link></p>
            </div>
          )}
        </Container>
      </div>
      <Footer />
    </main>
  )
}
