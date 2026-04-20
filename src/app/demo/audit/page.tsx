import { Container } from '@/components/container'
import { LiveAuditPreview } from '@/components/live-audit-preview'

export const metadata = {
  title: 'Live Audit Preview — Demo',
  robots: { index: false, follow: false },
}

export default function AuditDemoPage() {
  return (
    <div className="min-h-screen bg-paper">
      <Container className="py-16">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-accent">
            Component Demo
          </p>
          <h1 className="mt-2 font-display text-3xl font-medium leading-tight text-ink">
            Live Audit Preview
          </h1>
          <p className="mt-3 text-base leading-relaxed text-slate">
            Interactive hero tile. Paste any URL → real Core Web Vitals from Chrome&apos;s 28-day field data in under a second. Falls back to a clearly-labeled preview when <code className="font-mono text-xs">PAGESPEED_API_KEY</code> is not configured.
          </p>

          <div className="mt-10">
            <LiveAuditPreview />
          </div>

          <div className="mt-10 border-t border-border pt-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.15em] text-ash">
              Try these
            </p>
            <ul className="mt-3 space-y-1.5 font-mono text-sm text-slate">
              <li>• google.com — always returns live data</li>
              <li>• vercel.com — high-traffic, clean Core Web Vitals</li>
              <li>• theprojectseo.com — real data if CrUX has it, low-traffic fallback otherwise</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}
