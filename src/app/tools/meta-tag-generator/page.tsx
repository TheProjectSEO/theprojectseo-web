'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

interface MetaFields {
  title: string
  description: string
  canonical: string
  ogTitle: string
  ogDescription: string
  ogImage: string
  ogType: string
  twitterCard: string
  twitterTitle: string
  twitterDescription: string
  twitterImage: string
  twitterSite: string
  robots: string
}

function buildMetaOutput(f: MetaFields): string {
  const lines: string[] = []

  // Basic meta
  if (f.title) lines.push(`<title>${f.title}</title>`)
  if (f.description) lines.push(`<meta name="description" content="${f.description}" />`)
  if (f.canonical) lines.push(`<link rel="canonical" href="${f.canonical}" />`)
  if (f.robots) lines.push(`<meta name="robots" content="${f.robots}" />`)

  // Open Graph
  if (f.ogTitle || f.ogDescription || f.ogImage || f.ogType) {
    lines.push('')
    lines.push('<!-- Open Graph -->')
    if (f.ogType) lines.push(`<meta property="og:type" content="${f.ogType}" />`)
    if (f.ogTitle) lines.push(`<meta property="og:title" content="${f.ogTitle}" />`)
    if (f.ogDescription) lines.push(`<meta property="og:description" content="${f.ogDescription}" />`)
    if (f.ogImage) lines.push(`<meta property="og:image" content="${f.ogImage}" />`)
    if (f.canonical) lines.push(`<meta property="og:url" content="${f.canonical}" />`)
  }

  // Twitter Card
  if (f.twitterCard || f.twitterTitle || f.twitterDescription || f.twitterImage) {
    lines.push('')
    lines.push('<!-- Twitter Card -->')
    if (f.twitterCard) lines.push(`<meta name="twitter:card" content="${f.twitterCard}" />`)
    if (f.twitterSite) lines.push(`<meta name="twitter:site" content="${f.twitterSite}" />`)
    if (f.twitterTitle) lines.push(`<meta name="twitter:title" content="${f.twitterTitle}" />`)
    if (f.twitterDescription) lines.push(`<meta name="twitter:description" content="${f.twitterDescription}" />`)
    if (f.twitterImage) lines.push(`<meta name="twitter:image" content="${f.twitterImage}" />`)
  }

  return lines.join('\n')
}

function countBytes(str: string): number {
  return new TextEncoder().encode(str).length
}

function TitlePreview({ title, description }: { title: string; description: string }) {
  const titleLen = title.length
  const descLen = description.length
  const titleStatus =
    titleLen === 0 ? 'empty' : titleLen < 30 ? 'short' : titleLen <= 60 ? 'good' : 'long'
  const descStatus =
    descLen === 0 ? 'empty' : descLen < 70 ? 'short' : descLen <= 160 ? 'good' : 'long'

  const statusColor = (s: string) =>
    s === 'good' ? 'text-green-600' : s === 'long' ? 'text-red-500' : s === 'short' ? 'text-amber-500' : 'text-ash'

  return (
    <div className="bg-cream border border-border p-5">
      <p className="font-mono text-xs uppercase tracking-wider text-ash mb-4">SERP Preview</p>
      <div className="border border-border bg-paper p-4 rounded-sm">
        <div
          className="text-[#1a0dab] text-lg font-normal truncate"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {title || 'Your page title here'}
        </div>
        <div
          className="text-[#006621] text-sm mt-0.5 truncate"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          https://example.com/page
        </div>
        <div
          className="text-[#545454] text-sm mt-1 leading-relaxed line-clamp-2"
          style={{ fontFamily: 'Arial, sans-serif' }}
        >
          {description || 'Your meta description appears here. Make it compelling.'}
        </div>
      </div>
      <div className="mt-3 flex gap-6 text-xs">
        <span>
          Title: <span className={statusColor(titleStatus)}>{titleLen} chars</span>
          {titleStatus === 'good' && ' (optimal)'}
          {titleStatus === 'long' && ' (too long — truncated in SERPs)'}
          {titleStatus === 'short' && ' (short — use available space)'}
        </span>
        <span>
          Description: <span className={statusColor(descStatus)}>{descLen} chars</span>
          {descStatus === 'good' && ' (optimal)'}
          {descStatus === 'long' && ' (too long — may truncate)'}
          {descStatus === 'short' && ' (short)'}
        </span>
      </div>
    </div>
  )
}

const inputClass =
  'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent'
const labelClass = 'block font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1.5'

export default function MetaTagGeneratorPage() {
  const [fields, setFields] = useState<MetaFields>({
    title: '',
    description: '',
    canonical: '',
    ogTitle: '',
    ogDescription: '',
    ogImage: '',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: '',
    twitterDescription: '',
    twitterImage: '',
    twitterSite: '',
    robots: 'index, follow',
  })
  const [copied, setCopied] = useState(false)

  function update(key: keyof MetaFields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }))
  }

  // Auto-populate OG/Twitter from primary fields when empty
  function getEffective(primaryKey: keyof MetaFields, fallbackKey: keyof MetaFields): string {
    return fields[primaryKey] || fields[fallbackKey] || ''
  }

  const effectiveFields: MetaFields = {
    ...fields,
    ogTitle: fields.ogTitle || fields.title,
    ogDescription: fields.ogDescription || fields.description,
    twitterTitle: fields.twitterTitle || fields.ogTitle || fields.title,
    twitterDescription: fields.twitterDescription || fields.ogDescription || fields.description,
    twitterImage: fields.twitterImage || fields.ogImage,
  }

  const output = buildMetaOutput(effectiveFields)

  function handleCopy() {
    navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Meta Tag Generator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Generator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Meta Tag Generator
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
              Generate title tags, meta descriptions, Open Graph tags, Twitter Cards, canonical
              URLs, and robots directives. SERP preview updates as you type.
            </p>
            <p className="mt-2 font-mono text-xs text-ash">Free forever. No signup. All processing runs in your browser.</p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-8">
              {/* Basic */}
              <div>
                <h2 className="font-heading text-base font-semibold text-ink mb-5 pb-2 border-b border-border">
                  Basic meta tags
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>
                      Title tag <span className="text-ash">(aim 30-60 chars)</span>
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      value={fields.title}
                      onChange={(e) => update('title', e.target.value)}
                      placeholder="SEO Agency India | TheProjectSEO"
                      maxLength={100}
                    />
                    <p className="mt-1 text-xs text-ash">{fields.title.length} characters</p>
                  </div>
                  <div>
                    <label className={labelClass}>
                      Meta description <span className="text-ash">(aim 70-160 chars)</span>
                    </label>
                    <textarea
                      className="w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent resize-none"
                      rows={3}
                      value={fields.description}
                      onChange={(e) => update('description', e.target.value)}
                      placeholder="AI-native SEO agency based in India. We run on Claude Code, serve 15 clients globally, and deliver measurable organic growth."
                      maxLength={320}
                    />
                    <p className="mt-1 text-xs text-ash">{fields.description.length} characters</p>
                  </div>
                  <div>
                    <label className={labelClass}>Canonical URL</label>
                    <input
                      type="url"
                      className={inputClass}
                      value={fields.canonical}
                      onChange={(e) => update('canonical', e.target.value)}
                      placeholder="https://example.com/page/"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>Robots directive</label>
                    <select
                      className={inputClass}
                      value={fields.robots}
                      onChange={(e) => update('robots', e.target.value)}
                    >
                      <option value="index, follow">index, follow (default)</option>
                      <option value="noindex, follow">noindex, follow</option>
                      <option value="index, nofollow">index, nofollow</option>
                      <option value="noindex, nofollow">noindex, nofollow</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Open Graph */}
              <div>
                <h2 className="font-heading text-base font-semibold text-ink mb-5 pb-2 border-b border-border">
                  Open Graph{' '}
                  <span className="font-sans font-normal text-sm text-ash">(auto-populated from basic — override if needed)</span>
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>og:type</label>
                    <select
                      className={inputClass}
                      value={fields.ogType}
                      onChange={(e) => update('ogType', e.target.value)}
                    >
                      <option value="website">website</option>
                      <option value="article">article</option>
                      <option value="product">product</option>
                      <option value="profile">profile</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>og:title override</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={fields.ogTitle}
                      onChange={(e) => update('ogTitle', e.target.value)}
                      placeholder={fields.title || 'Inherits from title tag'}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>og:description override</label>
                    <textarea
                      className="w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent resize-none"
                      rows={2}
                      value={fields.ogDescription}
                      onChange={(e) => update('ogDescription', e.target.value)}
                      placeholder={fields.description || 'Inherits from meta description'}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>og:image URL (min 1200x630 recommended)</label>
                    <input
                      type="url"
                      className={inputClass}
                      value={fields.ogImage}
                      onChange={(e) => update('ogImage', e.target.value)}
                      placeholder="https://example.com/og-image.jpg"
                    />
                  </div>
                </div>
              </div>

              {/* Twitter Card */}
              <div>
                <h2 className="font-heading text-base font-semibold text-ink mb-5 pb-2 border-b border-border">
                  Twitter Card{' '}
                  <span className="font-sans font-normal text-sm text-ash">(auto-populated — override if needed)</span>
                </h2>
                <div className="space-y-5">
                  <div>
                    <label className={labelClass}>twitter:card type</label>
                    <select
                      className={inputClass}
                      value={fields.twitterCard}
                      onChange={(e) => update('twitterCard', e.target.value)}
                    >
                      <option value="summary_large_image">summary_large_image (recommended)</option>
                      <option value="summary">summary</option>
                      <option value="app">app</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>twitter:site handle</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={fields.twitterSite}
                      onChange={(e) => update('twitterSite', e.target.value)}
                      placeholder="@theprojectseo"
                    />
                  </div>
                  <div>
                    <label className={labelClass}>twitter:title override</label>
                    <input
                      type="text"
                      className={inputClass}
                      value={fields.twitterTitle}
                      onChange={(e) => update('twitterTitle', e.target.value)}
                      placeholder={fields.ogTitle || fields.title || 'Inherits from og:title'}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>twitter:image override</label>
                    <input
                      type="url"
                      className={inputClass}
                      value={fields.twitterImage}
                      onChange={(e) => update('twitterImage', e.target.value)}
                      placeholder={fields.ogImage || 'Inherits from og:image'}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: preview + output */}
            <div className="space-y-6">
              <TitlePreview title={fields.title} description={fields.description} />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-lg font-semibold text-ink">Output</h2>
                  <button
                    onClick={handleCopy}
                    disabled={!output}
                    className="font-mono text-xs uppercase tracking-wider px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors disabled:opacity-40"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                {output ? (
                  <pre className="bg-ink text-white/80 text-xs leading-relaxed p-6 overflow-x-auto rounded-sm whitespace-pre-wrap max-h-[500px] overflow-y-auto">
                    {output}
                  </pre>
                ) : (
                  <div className="bg-ink text-white/30 text-xs p-6 rounded-sm h-40 flex items-center justify-center">
                    Fill in the fields above to generate tags
                  </div>
                )}
              </div>

              <div className="bg-cream border border-border p-4">
                <p className="font-mono text-xs uppercase tracking-wider text-ash mb-2">Next steps</p>
                <ul className="space-y-1.5 text-xs leading-relaxed text-slate">
                  <li>Paste into your HTML &lt;head&gt; before &lt;/head&gt;.</li>
                  <li>Test Open Graph with the <a href="https://developers.facebook.com/tools/debug/" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Meta Sharing Debugger</a>.</li>
                  <li>Test Twitter Card with the <a href="https://cards-dev.twitter.com/validator" target="_blank" rel="noopener noreferrer" className="underline hover:text-accent">Twitter Card Validator</a>.</li>
                  <li>Use Google Search Console to monitor title/description performance.</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-cream py-16 border-t border-border">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <p className="font-mono text-sm uppercase tracking-wider text-accent mb-3">Scale meta optimization</p>
            <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
              Hundreds of pages need a systematic approach.
            </h2>
            <p className="text-sm leading-relaxed text-slate mb-6">
              This tool handles one page at a time. For sites with 50+ pages, we run systematic
              title tag and meta description audits, rewrite at scale, and track CTR impact in
              GSC before/after.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
            >
              Talk to Us
            </Link>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
