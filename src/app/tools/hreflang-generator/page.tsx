'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Container } from '@/components/container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { HeroAnimation } from '@/components/hero-animation'

interface HreflangEntry {
  locale: string
  url: string
}

const COMMON_LOCALES = [
  { code: 'en', label: 'English (global)' },
  { code: 'en-US', label: 'English (US)' },
  { code: 'en-GB', label: 'English (UK)' },
  { code: 'en-AU', label: 'English (AU)' },
  { code: 'es', label: 'Spanish (global)' },
  { code: 'es-ES', label: 'Spanish (Spain)' },
  { code: 'es-MX', label: 'Spanish (Mexico)' },
  { code: 'fr', label: 'French (global)' },
  { code: 'fr-FR', label: 'French (France)' },
  { code: 'de', label: 'German' },
  { code: 'pt', label: 'Portuguese (global)' },
  { code: 'pt-BR', label: 'Portuguese (Brazil)' },
  { code: 'it', label: 'Italian' },
  { code: 'nl', label: 'Dutch' },
  { code: 'ja', label: 'Japanese' },
  { code: 'ko', label: 'Korean' },
  { code: 'zh-Hans', label: 'Chinese (Simplified)' },
  { code: 'zh-Hant', label: 'Chinese (Traditional)' },
  { code: 'ar', label: 'Arabic' },
  { code: 'hi', label: 'Hindi' },
  { code: 'ru', label: 'Russian' },
  { code: 'tr', label: 'Turkish' },
  { code: 'pl', label: 'Polish' },
  { code: 'sv', label: 'Swedish' },
  { code: 'da', label: 'Danish' },
  { code: 'fi', label: 'Finnish' },
  { code: 'nb', label: 'Norwegian' },
  { code: 'x-default', label: 'x-default (fallback)' },
]

function buildHreflangOutput(entries: HreflangEntry[], format: 'html' | 'xml'): string {
  const validEntries = entries.filter((e) => e.locale && e.url)
  if (validEntries.length === 0) return ''

  if (format === 'html') {
    return validEntries
      .map((e) => `<link rel="alternate" hreflang="${e.locale}" href="${e.url}" />`)
      .join('\n')
  }

  // XML sitemap format
  return validEntries
    .map(
      (entry) =>
        `<xhtml:link\n  rel="alternate"\n  hreflang="${entry.locale}"\n  href="${entry.url}"\n/>`
    )
    .join('\n')
}

const inputClass =
  'w-full rounded-md border border-border-emphasis bg-paper px-3 py-2 text-sm text-ink focus:outline-2 focus:-outline-offset-1 focus:outline-accent'
const labelClass = 'block font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1.5'

export default function HreflangGeneratorPage() {
  const [entries, setEntries] = useState<HreflangEntry[]>([
    { locale: 'en', url: 'https://example.com/' },
    { locale: 'x-default', url: 'https://example.com/' },
  ])
  const [format, setFormat] = useState<'html' | 'xml'>('html')
  const [copied, setCopied] = useState(false)

  function updateEntry(index: number, field: keyof HreflangEntry, value: string) {
    const updated = [...entries]
    updated[index] = { ...updated[index], [field]: value }
    setEntries(updated)
  }

  function removeEntry(index: number) {
    setEntries(entries.filter((_, i) => i !== index))
  }

  function addEntry() {
    setEntries([...entries, { locale: '', url: '' }])
  }

  const output = buildHreflangOutput(entries, format)

  function handleCopy() {
    const wrapped =
      format === 'html'
        ? `<!-- Place inside <head> -->\n${output}`
        : `<!-- Place inside <url> block in sitemap.xml -->\n${output}`
    navigator.clipboard.writeText(wrapped)
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
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Hreflang Generator</span>
            </div>
            <p className="font-mono text-sm font-semibold uppercase tracking-[0.15em] text-accent mb-4">Free Generator</p>
            <h1 className="font-display text-[clamp(36px,5vw,72px)] font-medium leading-[0.95] tracking-[-0.02em] text-ink">
              Hreflang Tag Generator
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone">
              Build hreflang tags for international sites. Enter your URLs and language/region
              codes, select HTML or XML sitemap format, and copy the output.
            </p>
            <p className="mt-2 font-mono text-xs text-ash">
              Supports all ISO 639-1 language codes and ISO 3166-1 country codes. Free, no signup.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-paper py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Inputs */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-heading text-lg font-semibold text-ink">URL + locale pairs</h2>
                <div className="flex gap-2">
                  {(['html', 'xml'] as const).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFormat(f)}
                      className={`px-3 py-1.5 font-mono text-xs uppercase tracking-wider rounded-sm transition-colors ${
                        format === f
                          ? 'bg-accent text-white'
                          : 'border border-border-emphasis text-stone hover:border-accent hover:text-accent'
                      }`}
                    >
                      {f === 'html' ? 'HTML tags' : 'XML sitemap'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {entries.map((entry, i) => (
                  <div key={i} className="border border-border p-4">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <div>
                        <label className={labelClass}>Locale / hreflang code</label>
                        <select
                          className={inputClass}
                          value={entry.locale}
                          onChange={(e) => updateEntry(i, 'locale', e.target.value)}
                        >
                          <option value="">Select or type below</option>
                          {COMMON_LOCALES.map((l) => (
                            <option key={l.code} value={l.code}>
                              {l.code} — {l.label}
                            </option>
                          ))}
                        </select>
                        <input
                          type="text"
                          className={`${inputClass} mt-2`}
                          value={entry.locale}
                          onChange={(e) => updateEntry(i, 'locale', e.target.value)}
                          placeholder="Custom: e.g. en-SG"
                        />
                      </div>
                      <div>
                        <label className={labelClass}>Canonical URL</label>
                        <input
                          type="url"
                          className={inputClass}
                          value={entry.url}
                          onChange={(e) => updateEntry(i, 'url', e.target.value)}
                          placeholder="https://example.com/en/"
                        />
                      </div>
                    </div>
                    {entries.length > 1 && (
                      <button
                        onClick={() => removeEntry(i)}
                        className="mt-3 font-mono text-xs text-ash hover:text-red-500 uppercase tracking-wider"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={addEntry}
                className="mt-4 font-mono text-xs text-accent uppercase tracking-wider hover:text-accent/80"
              >
                + Add locale
              </button>

              <div className="mt-8 bg-cream border border-border p-5">
                <p className="font-mono text-xs uppercase tracking-wider text-ash mb-3">Implementation rules</p>
                <ul className="space-y-2 text-xs leading-relaxed text-slate">
                  <li>Always include x-default to handle unmatched locales.</li>
                  <li>Every page in the group must link to every other page.</li>
                  <li>URLs must be absolute (include https://).</li>
                  <li>Each language/region variant must be a real page, not a redirect.</li>
                  <li>HTML tags go in &lt;head&gt;; XML tags go inside each &lt;url&gt; block.</li>
                </ul>
              </div>
            </div>

            {/* Output */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-heading text-lg font-semibold text-ink">
                  Output ({format === 'html' ? 'HTML' : 'XML'})
                </h2>
                <button
                  onClick={handleCopy}
                  disabled={!output}
                  className="font-mono text-xs uppercase tracking-wider px-4 py-2 bg-accent text-white hover:bg-accent/90 transition-colors disabled:opacity-40"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
              {output ? (
                <pre className="bg-ink text-white/80 text-xs leading-relaxed p-6 overflow-x-auto rounded-sm whitespace-pre-wrap break-all">
                  {format === 'html'
                    ? `<!-- Place inside <head> -->\n${output}`
                    : `<!-- Place inside <url> block in sitemap.xml -->\n${output}`}
                </pre>
              ) : (
                <div className="bg-ink text-white/30 text-xs p-6 rounded-sm h-40 flex items-center justify-center">
                  Add locale + URL pairs to generate output
                </div>
              )}

              <div className="mt-6 space-y-4">
                <div className="bg-cream border border-border p-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-ash mb-2">Validate your implementation</p>
                  <p className="text-xs text-slate">
                    Use{' '}
                    <a
                      href="https://www.google.com/webmasters/tools/robots.txt"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-accent"
                    >
                      Google Search Console
                    </a>{' '}
                    International Targeting report to check for hreflang errors after deployment.
                    Common errors: missing return tags, wrong locale codes, URLs returning non-200 status.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-cream py-16 border-t border-border">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <p className="font-mono text-sm uppercase tracking-wider text-accent mb-3">International SEO</p>
            <h2 className="font-heading text-2xl font-semibold text-ink mb-4">
              Hreflang at scale needs infrastructure.
            </h2>
            <p className="text-sm leading-relaxed text-slate mb-6">
              For sites with hundreds of localized pages, hreflang requires systematic implementation
              and ongoing validation. We handle international SEO architecture as part of our
              technical SEO service.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Link
                href="/services/international-seo"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-accent text-white font-heading font-semibold text-base transition-all duration-200 hover:bg-accent/90"
              >
                International SEO Service
              </Link>
              <Link
                href="/tools"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-border-emphasis text-stone font-heading font-medium text-base transition-all duration-200 hover:bg-paper"
              >
                Browse All Tools
              </Link>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </main>
  )
}
