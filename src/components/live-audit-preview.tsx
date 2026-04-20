'use client'

/**
 * LiveAuditPreview — interactive hero tile for theprojectseo.com
 *
 * Lets a visitor paste any URL and see real Core Web Vitals from Google's
 * Chrome UX Report in <1 second. Falls back to clearly-labeled preview mode
 * when no API key is configured.
 *
 * Design: matches the site's dark-header + paper-body + mono-font aesthetic.
 * States: idle → running → complete | low-traffic | error.
 */

import { useState, useTransition } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, CheckCircle2, AlertTriangle, XCircle, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { runAudit, type AuditResult } from '@/app/actions/run-audit'

const GRADE_COLOR: Record<AuditResult['overallGrade'], string> = {
  A: 'text-success',
  B: 'text-success',
  C: 'text-warning',
  D: 'text-warning',
  F: 'text-danger',
}

const SEVERITY_ICON = {
  good: CheckCircle2,
  warn: AlertTriangle,
  bad: XCircle,
}

const SEVERITY_COLOR = {
  good: 'text-success',
  warn: 'text-warning',
  bad: 'text-danger',
}

const RATING_LABEL = {
  good: 'GOOD',
  'needs-improvement': 'NEEDS WORK',
  poor: 'POOR',
} as const

const RATING_COLOR = {
  good: 'text-success',
  'needs-improvement': 'text-warning',
  poor: 'text-danger',
} as const

export function LiveAuditPreview() {
  const [url, setUrl] = useState('')
  const [result, setResult] = useState<AuditResult | null>(null)
  const [isPending, startTransition] = useTransition()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!url.trim()) return
    startTransition(async () => {
      const res = await runAudit(url)
      setResult(res)
    })
  }

  const statusLabel = isPending ? 'RUNNING' : result ? result.mode.toUpperCase() : 'READY'
  const statusDot = isPending
    ? 'bg-warning animate-pulse'
    : result?.mode === 'live'
      ? 'bg-success'
      : result?.mode === 'error'
        ? 'bg-danger'
        : result
          ? 'bg-warning'
          : 'bg-white/30'

  return (
    <div className="overflow-hidden rounded-lg border border-border-strong bg-white shadow-lg">
      {/* Terminal-style header */}
      <div className="flex items-center justify-between border-b border-white/5 bg-ink px-4 py-3">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-red-400/60" />
            <span className="size-2.5 rounded-full bg-yellow-400/60" />
            <span className="size-2.5 rounded-full bg-green-400/60" />
          </div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70">
            Live SEO Audit
          </p>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={`size-1.5 rounded-full ${statusDot}`} />
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-white/60">
            {statusLabel}
          </span>
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="border-b border-border p-4">
        <label className="sr-only" htmlFor="audit-url">
          Your website URL
        </label>
        <div className="flex items-stretch gap-2">
          <input
            id="audit-url"
            type="text"
            placeholder="yoursite.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={isPending}
            className="min-w-0 flex-1 rounded-md border border-border-strong bg-paper px-3 py-2.5 font-mono text-sm text-ink placeholder:text-ash focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={isPending || !url.trim()}
            className="flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 font-heading text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-px hover:bg-accent-hover hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
          >
            {isPending ? (
              <>
                <Loader2 className="size-3.5 animate-spin" />
                <span>Scanning</span>
              </>
            ) : (
              <>
                <span>Run Audit</span>
                <ArrowRight className="size-3.5" />
              </>
            )}
          </button>
        </div>
        <p className="mt-2 font-mono text-[10px] text-ash">
          Real Core Web Vitals from Chrome's 28-day field data — no email required.
        </p>
      </form>

      {/* Result area */}
      <div className="min-h-[220px]">
        <AnimatePresence mode="wait">
          {isPending ? <RunningView key="running" /> : result ? <ResultView key={result.fetchedAt} result={result} /> : <IdleView key="idle" />}
        </AnimatePresence>
      </div>
    </div>
  )
}

function IdleView() {
  const checks = [
    'Largest Contentful Paint (LCP)',
    'Interaction to Next Paint (INP)',
    'Cumulative Layout Shift (CLS)',
    'First Contentful Paint (FCP)',
  ]
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4">
      <p className="mb-3 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-ash">
        Will check
      </p>
      <ul className="space-y-2">
        {checks.map((c) => (
          <li key={c} className="flex items-center gap-2 font-mono text-xs text-slate">
            <span className="size-1.5 rounded-full bg-border-emphasis" />
            {c}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

function RunningView() {
  const steps = [
    'Resolving hostname',
    'Fetching Chrome UX Report',
    'Parsing Core Web Vitals',
    'Deriving findings',
  ]
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4">
      <ul className="space-y-2.5">
        {steps.map((s, i) => (
          <motion.li
            key={s}
            initial={{ opacity: 0, x: -4 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.25 }}
            className="flex items-center gap-2.5 font-mono text-xs"
          >
            <Loader2 className="size-3 animate-spin text-accent" />
            <span className="text-slate">{s}...</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

function ResultView({ result }: { result: AuditResult }) {
  if (result.mode === 'error' || result.mode === 'low-traffic') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4">
        <div className="flex items-start gap-2.5">
          <AlertTriangle className="mt-0.5 size-4 flex-shrink-0 text-warning" />
          <div>
            <p className="font-heading text-sm font-semibold text-ink">
              {result.mode === 'low-traffic' ? 'Not enough field data' : 'Audit failed'}
            </p>
            <p className="mt-1 text-xs text-slate">{result.message}</p>
          </div>
        </div>
        <div className="mt-4 border-t border-border pt-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent hover:text-accent-hover"
          >
            Book a synthetic audit
            <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </motion.div>
    )
  }

  const metrics: Array<[string, string | null, 'good' | 'needs-improvement' | 'poor' | null]> = [
    ['LCP', result.scores.lcp ? `${(result.scores.lcp.p75Ms / 1000).toFixed(1)}s` : null, result.scores.lcp?.rating ?? null],
    ['INP', result.scores.inp ? `${result.scores.inp.p75Ms}ms` : null, result.scores.inp?.rating ?? null],
    ['CLS', result.scores.cls ? result.scores.cls.p75.toFixed(3) : null, result.scores.cls?.rating ?? null],
    ['FCP', result.scores.fcp ? `${(result.scores.fcp.p75Ms / 1000).toFixed(1)}s` : null, result.scores.fcp?.rating ?? null],
  ]

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="p-4">
      {/* Grade + preview badge */}
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-ash">Overall Grade</p>
          <p className={`font-display text-4xl font-black leading-none ${GRADE_COLOR[result.overallGrade]}`}>
            {result.overallGrade}
          </p>
        </div>
        {result.mode === 'preview' && (
          <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-warning border border-warning/40 bg-warning-soft rounded px-1.5 py-0.5">
            Preview
          </span>
        )}
      </div>

      {/* Metric grid */}
      <div className="mb-4 grid grid-cols-4 gap-2">
        {metrics.map(([label, value, rating], i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="border-l-2 border-border-emphasis pl-2"
          >
            <p className="font-mono text-[9px] font-semibold uppercase tracking-[0.1em] text-ash">{label}</p>
            <p className="font-mono text-sm font-bold text-ink leading-tight mt-0.5">{value ?? '—'}</p>
            {rating && (
              <p className={`font-mono text-[9px] font-semibold uppercase tracking-[0.05em] mt-0.5 ${RATING_COLOR[rating]}`}>
                {RATING_LABEL[rating]}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* Findings */}
      {result.findings.length > 0 && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
          <p className="mb-2 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-ash">Findings</p>
          <ul className="space-y-2">
            {result.findings.map((f, i) => {
              const Icon = SEVERITY_ICON[f.severity]
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-start gap-2"
                >
                  <Icon className={`mt-0.5 size-3.5 flex-shrink-0 ${SEVERITY_COLOR[f.severity]}`} />
                  <div className="min-w-0">
                    <p className="font-heading text-xs font-semibold text-ink">{f.title}</p>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate">{f.detail}</p>
                  </div>
                </motion.li>
              )
            })}
          </ul>
        </motion.div>
      )}

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 flex items-center justify-between border-t border-border pt-3"
      >
        <p className="font-mono text-[10px] text-ash">
          {new URL(result.normalizedUrl).host}
        </p>
        <Link
          href="/contact"
          className="group inline-flex items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.1em] text-accent hover:text-accent-hover"
        >
          Full audit
          <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </motion.div>
  )
}
