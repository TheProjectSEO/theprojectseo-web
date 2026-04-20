'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'
import { LeadForm } from '@/components/lead-form'

interface AuditResult {
  check: string
  status: 'pass' | 'fail' | 'warn' | 'info'
  detail: string
}

interface AuditData {
  url: string
  checks: AuditResult[]
  score: number
  fetchedAt: string
}

function statusColor(status: AuditResult['status']) {
  switch (status) {
    case 'pass': return 'text-green-600'
    case 'fail': return 'text-red-600'
    case 'warn': return 'text-amber-600'
    case 'info': return 'text-blue-600'
  }
}

function statusBg(status: AuditResult['status']) {
  switch (status) {
    case 'pass': return 'bg-green-50 border-green-200'
    case 'fail': return 'bg-red-50 border-red-200'
    case 'warn': return 'bg-amber-50 border-amber-200'
    case 'info': return 'bg-blue-50 border-blue-200'
  }
}

function statusLabel(status: AuditResult['status']) {
  switch (status) {
    case 'pass': return 'Pass'
    case 'fail': return 'Fail'
    case 'warn': return 'Warning'
    case 'info': return 'Info'
  }
}

function countSyllables(word: string): number {
  word = word.toLowerCase()
  if (word.length <= 3) return 1
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
  word = word.replace(/^y/, '')
  const matches = word.match(/[aeiouy]{1,2}/g)
  return matches ? matches.length : 1
}

async function runAudit(rawUrl: string): Promise<AuditData> {
  let url = rawUrl.trim()
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = 'https://' + url
  }

  const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`
  const res = await fetch(proxyUrl, { signal: AbortSignal.timeout(15000) })
  if (!res.ok) throw new Error('Failed to fetch page')
  const json = await res.json() as { contents: string; status: { http_code: number } }
  const html = json.contents || ''

  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')

  const checks: AuditResult[] = []

  // Title tag
  const title = doc.querySelector('title')?.textContent?.trim() || ''
  const titleLen = title.length
  if (!title) {
    checks.push({ check: 'Title tag', status: 'fail', detail: 'No title tag found.' })
  } else if (titleLen < 30) {
    checks.push({ check: 'Title tag', status: 'warn', detail: `Title is ${titleLen} chars (too short, target 50-60).` })
  } else if (titleLen > 70) {
    checks.push({ check: 'Title tag', status: 'warn', detail: `Title is ${titleLen} chars (too long, target 50-60). May truncate in SERPs.` })
  } else {
    checks.push({ check: 'Title tag', status: 'pass', detail: `Title is ${titleLen} chars: "${title.slice(0, 60)}${titleLen > 60 ? '...' : ''}"` })
  }

  // Meta description
  const metaDesc = doc.querySelector('meta[name="description"]')?.getAttribute('content')?.trim() || ''
  const descLen = metaDesc.length
  if (!metaDesc) {
    checks.push({ check: 'Meta description', status: 'fail', detail: 'No meta description found.' })
  } else if (descLen < 70) {
    checks.push({ check: 'Meta description', status: 'warn', detail: `Description is ${descLen} chars (too short, target 120-160).` })
  } else if (descLen > 165) {
    checks.push({ check: 'Meta description', status: 'warn', detail: `Description is ${descLen} chars (too long, may truncate).` })
  } else {
    checks.push({ check: 'Meta description', status: 'pass', detail: `Description is ${descLen} chars.` })
  }

  // H1 count
  const h1s = doc.querySelectorAll('h1')
  if (h1s.length === 0) {
    checks.push({ check: 'H1 tag', status: 'fail', detail: 'No H1 tag found. Every page needs exactly one H1.' })
  } else if (h1s.length > 1) {
    checks.push({ check: 'H1 tag', status: 'warn', detail: `${h1s.length} H1 tags found. Best practice: exactly one per page.` })
  } else {
    checks.push({ check: 'H1 tag', status: 'pass', detail: `One H1 found: "${h1s[0]?.textContent?.trim().slice(0, 60) || ''}"` })
  }

  // Heading hierarchy
  const h2s = doc.querySelectorAll('h2').length
  const h3s = doc.querySelectorAll('h3').length
  if (h1s.length > 0 && h2s === 0) {
    checks.push({ check: 'Heading hierarchy', status: 'warn', detail: 'H1 present but no H2 tags found. Add H2 subheadings to structure content.' })
  } else {
    checks.push({ check: 'Heading hierarchy', status: 'pass', detail: `H1: ${h1s.length}, H2: ${h2s}, H3: ${h3s}` })
  }

  // Canonical tag
  const canonical = doc.querySelector('link[rel="canonical"]')?.getAttribute('href')
  if (!canonical) {
    checks.push({ check: 'Canonical tag', status: 'warn', detail: 'No canonical tag found. Add one to prevent duplicate content issues.' })
  } else {
    checks.push({ check: 'Canonical tag', status: 'pass', detail: `Canonical: ${canonical.slice(0, 80)}` })
  }

  // Robots meta
  const robotsMeta = doc.querySelector('meta[name="robots"]')?.getAttribute('content')
  if (!robotsMeta) {
    checks.push({ check: 'Robots meta', status: 'info', detail: 'No robots meta tag (defaults to index, follow).' })
  } else if (robotsMeta.includes('noindex')) {
    checks.push({ check: 'Robots meta', status: 'fail', detail: `Page is set to noindex: "${robotsMeta}". Search engines will not index this page.` })
  } else {
    checks.push({ check: 'Robots meta', status: 'pass', detail: `Robots: "${robotsMeta}"` })
  }

  // OG tags
  const ogTitle = doc.querySelector('meta[property="og:title"]')?.getAttribute('content')
  const ogDesc = doc.querySelector('meta[property="og:description"]')?.getAttribute('content')
  const ogImage = doc.querySelector('meta[property="og:image"]')?.getAttribute('content')
  const ogMissing = [!ogTitle && 'og:title', !ogDesc && 'og:description', !ogImage && 'og:image'].filter(Boolean)
  if (ogMissing.length === 3) {
    checks.push({ check: 'Open Graph tags', status: 'warn', detail: 'No Open Graph tags found. Add og:title, og:description, og:image for better social sharing.' })
  } else if (ogMissing.length > 0) {
    checks.push({ check: 'Open Graph tags', status: 'warn', detail: `Missing: ${ogMissing.join(', ')}` })
  } else {
    checks.push({ check: 'Open Graph tags', status: 'pass', detail: 'og:title, og:description, og:image all present.' })
  }

  // Schema / JSON-LD
  const jsonLd = doc.querySelectorAll('script[type="application/ld+json"]')
  if (jsonLd.length === 0) {
    checks.push({ check: 'Structured data (schema)', status: 'warn', detail: 'No JSON-LD schema found. Schema helps search engines understand your content.' })
  } else {
    const types: string[] = []
    jsonLd.forEach((el) => {
      try {
        const parsed = JSON.parse(el.textContent || '{}') as Record<string, unknown>
        if (parsed['@type']) types.push(String(parsed['@type']))
      } catch {
        // ignore parse errors
      }
    })
    checks.push({ check: 'Structured data (schema)', status: 'pass', detail: `${jsonLd.length} JSON-LD block(s) found. Types: ${types.join(', ') || 'unknown'}` })
  }

  // Image alt coverage
  const images = doc.querySelectorAll('img')
  const imagesWithAlt = Array.from(images).filter((img) => img.getAttribute('alt') !== null && img.getAttribute('alt') !== '')
  if (images.length === 0) {
    checks.push({ check: 'Image alt text', status: 'info', detail: 'No images found on page.' })
  } else {
    const pct = Math.round((imagesWithAlt.length / images.length) * 100)
    if (pct < 80) {
      checks.push({ check: 'Image alt text', status: 'warn', detail: `${imagesWithAlt.length}/${images.length} images have alt text (${pct}%). Target: 100%.` })
    } else {
      checks.push({ check: 'Image alt text', status: 'pass', detail: `${imagesWithAlt.length}/${images.length} images have alt text (${pct}%).` })
    }
  }

  // Internal links
  const links = doc.querySelectorAll('a[href]')
  let internalCount = 0
  let externalCount = 0
  try {
    const parsedUrl = new URL(url)
    links.forEach((a) => {
      const href = a.getAttribute('href') || ''
      if (href.startsWith('/') || href.includes(parsedUrl.hostname)) {
        internalCount++
      } else if (href.startsWith('http')) {
        externalCount++
      }
    })
  } catch {
    internalCount = links.length
  }

  if (internalCount === 0) {
    checks.push({ check: 'Internal links', status: 'warn', detail: 'No internal links detected. Internal linking helps distribute PageRank across your site.' })
  } else {
    checks.push({ check: 'Internal links', status: 'pass', detail: `${internalCount} internal link(s), ${externalCount} external link(s) found.` })
  }

  // Page size estimate
  const htmlSize = new TextEncoder().encode(html).length
  const htmlKb = Math.round(htmlSize / 1024)
  if (htmlKb > 500) {
    checks.push({ check: 'Page HTML size', status: 'warn', detail: `HTML is ${htmlKb}KB. Large pages can slow initial parsing. Target under 100KB.` })
  } else {
    checks.push({ check: 'Page HTML size', status: 'pass', detail: `HTML is ${htmlKb}KB (good).` })
  }

  const passed = checks.filter((c) => c.status === 'pass').length
  const score = Math.round((passed / checks.length) * 100)

  return { url, checks, score, fetchedAt: new Date().toISOString() }
}

const inputClass =
  'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent'

export default function SeoAuditToolPage() {
  const [urlInput, setUrlInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState<AuditData | null>(null)

  async function handleAudit() {
    if (!urlInput.trim()) return
    setError('')
    setLoading(true)
    setResult(null)
    try {
      const data = await runAudit(urlInput)
      setResult(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch page. Check the URL and try again.')
    } finally {
      setLoading(false)
    }
  }

  const passes = result?.checks.filter((c) => c.status === 'pass').length ?? 0
  const fails = result?.checks.filter((c) => c.status === 'fail').length ?? 0
  const warns = result?.checks.filter((c) => c.status === 'warn').length ?? 0

  return (
    <main className="overflow-hidden">
      <div className="relative overflow-hidden">
        <HeroAnimation />
        <Container className="relative">
          <Navbar />
          <div className="pt-16 pb-12 sm:pt-24 sm:pb-16">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/tools" className="font-mono text-xs text-ash uppercase tracking-wider hover:text-accent">
                Tools
              </Link>
              <span className="text-ash">/</span>
              <span className="font-mono text-xs text-accent uppercase tracking-wider">SEO Audit Tool</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Tool</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              SEO Audit Tool
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
              Enter any URL to get an instant on-page SEO audit. We check title tags, meta descriptions,
              headings, canonical tags, Open Graph, schema markup, image alt coverage, and more.
            </p>
            <p className="mt-2 font-mono text-xs text-ash">Free. No signup. Runs in your browser via a public proxy.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="flex gap-3">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAudit()}
                placeholder="https://yourwebsite.com/page"
                className={inputClass}
              />
              <button
                onClick={handleAudit}
                disabled={loading || !urlInput.trim()}
                className="shrink-0 px-6 py-2 bg-accent text-white font-heading font-semibold text-sm rounded-md hover:bg-accent/90 disabled:opacity-50 transition-colors"
              >
                {loading ? 'Auditing...' : 'Run Audit'}
              </button>
            </div>

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 text-sm text-red-700">
                {error}
              </div>
            )}

            {loading && (
              <div className="mt-8 text-center py-16">
                <div className="font-mono text-sm text-ash animate-pulse">Fetching page and running checks...</div>
              </div>
            )}

            {result && (
              <div className="mt-8">
                <div className="grid grid-cols-3 gap-px bg-border-strong mb-8">
                  <div className="bg-green-50 p-6 text-center">
                    <div className="font-mono text-4xl font-black text-green-600">{passes}</div>
                    <div className="font-mono text-xs uppercase tracking-wider text-green-700 mt-1">Passed</div>
                  </div>
                  <div className="bg-amber-50 p-6 text-center">
                    <div className="font-mono text-4xl font-black text-amber-600">{warns}</div>
                    <div className="font-mono text-xs uppercase tracking-wider text-amber-700 mt-1">Warnings</div>
                  </div>
                  <div className="bg-red-50 p-6 text-center">
                    <div className="font-mono text-4xl font-black text-red-600">{fails}</div>
                    <div className="font-mono text-xs uppercase tracking-wider text-red-700 mt-1">Failed</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {result.checks.map((check, i) => (
                    <div key={i} className={`p-4 border ${statusBg(check.status)}`}>
                      <div className="flex items-start gap-3">
                        <span className={`font-mono text-xs uppercase tracking-wider shrink-0 mt-0.5 ${statusColor(check.status)}`}>
                          [{statusLabel(check.status)}]
                        </span>
                        <div>
                          <div className="font-heading text-sm font-semibold text-ink">{check.check}</div>
                          <div className="text-xs text-slate mt-0.5">{check.detail}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 bg-cream border border-border p-4">
                  <p className="text-xs text-slate leading-relaxed">
                    <strong className="text-ink">Methodology:</strong> This audit fetches your page HTML via a public proxy (allorigins.win) and parses it client-side. Results reflect the raw HTML returned at the time of the request. Dynamic JavaScript-rendered content may not be included. For a full technical audit including crawl data, Core Web Vitals, and backlink analysis, book an audit with us.
                  </p>
                </div>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* How it works */}
      <div className="bg-cream py-16 border-t border-border">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="font-mono text-sm uppercase tracking-wider text-accent mb-3">How It Works</p>
            <h2 className="font-heading text-2xl font-semibold text-ink mb-6">11 on-page checks in seconds</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { name: 'Title tag', desc: 'Length check: 50-60 chars is the optimal range for SERP display.' },
                { name: 'Meta description', desc: 'Length check: 120-160 chars. Missing descriptions hurt CTR.' },
                { name: 'H1 tag', desc: 'Exactly one H1 per page. Multiple H1s dilute topical focus.' },
                { name: 'Heading hierarchy', desc: 'Checks for H2 subheadings. Proper structure aids crawlability.' },
                { name: 'Canonical tag', desc: 'Prevents duplicate content penalties across similar URLs.' },
                { name: 'Robots meta', desc: 'Detects noindex tags that could block search engine indexing.' },
                { name: 'Open Graph tags', desc: 'og:title, og:description, og:image for social sharing previews.' },
                { name: 'Structured data', desc: 'JSON-LD schema blocks detected and schema types identified.' },
                { name: 'Image alt text', desc: 'Coverage rate for all img tags. Target 100% for accessibility and SEO.' },
                { name: 'Internal links', desc: 'Count of internal vs. external links found on the page.' },
                { name: 'HTML size', desc: 'Large HTML payloads slow browser parsing. Target under 100KB.' },
              ].map((item) => (
                <div key={item.name} className="bg-paper p-4 border border-border">
                  <div className="font-heading text-sm font-semibold text-ink mb-1">{item.name}</div>
                  <div className="text-xs text-slate">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-20 border-t border-border">
        <Container>
          <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-2">
            <div className="lg:sticky lg:top-8">
              <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-3">Want a Full Audit?</p>
              <h2 className="font-heading text-[clamp(24px,3vw,40px)] font-semibold text-ink leading-tight mb-4">
                This checks one page. We audit your entire site.
              </h2>
              <p className="text-base leading-relaxed text-slate">
                A real technical SEO audit covers crawl data, redirect chains, Core Web Vitals, log file analysis, backlink profile, and content gaps. We deliver it as a prioritized action plan with clear before/after tracking.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Full crawl of every page (not just one URL)',
                  'Core Web Vitals from real Chrome UX data',
                  'Backlink profile and toxic link flags',
                  'Keyword ranking baseline and gap analysis',
                  'Prioritized fix list with business impact estimates',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-stone">
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm variant="compact" submitText="Request a Full SEO Audit" />
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
