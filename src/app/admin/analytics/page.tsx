import type { Metadata } from 'next'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export const metadata: Metadata = {
  title: 'Analytics | Admin',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

// ── helpers ──────────────────────────────────────────────────────────────

function formatMs(ms: number): string {
  if (ms < 1000) return `${Math.round(ms)}ms`
  const s = ms / 1000
  if (s < 60) return `${s.toFixed(1)}s`
  const m = Math.floor(s / 60)
  const remainder = Math.round(s % 60)
  return `${m}m ${remainder}s`
}

function pct(n: number, total: number): string {
  if (total === 0) return '0%'
  return `${((n / total) * 100).toFixed(1)}%`
}

// ── data fetching ────────────────────────────────────────────────────────

interface PeriodStats {
  sessions: number
  pageViews: number
  uniquePages: number
  avgTimeMs: number
  avgScrollDepth: number
}

async function getStats(daysAgo: number): Promise<PeriodStats> {
  const since = new Date()
  since.setDate(since.getDate() - daysAgo)
  const sinceIso = since.toISOString()

  const [sessionsRes, pvRes] = await Promise.all([
    getSupabaseAdmin()
      .from('tps_sessions')
      .select('session_id', { count: 'exact', head: true })
      .gte('created_at', sinceIso),
    getSupabaseAdmin()
      .from('tps_page_views')
      .select('page_path, time_on_page_ms, scroll_depth')
      .gte('created_at', sinceIso),
  ])

  const sessions = sessionsRes.count ?? 0
  const rows = pvRes.data ?? []
  const pageViews = rows.length
  const uniquePages = new Set(rows.map((r) => r.page_path)).size
  const avgTimeMs =
    pageViews > 0
      ? rows.reduce((s, r) => s + (r.time_on_page_ms ?? 0), 0) / pageViews
      : 0
  const avgScrollDepth =
    pageViews > 0
      ? rows.reduce((s, r) => s + (r.scroll_depth ?? 0), 0) / pageViews
      : 0

  return { sessions, pageViews, uniquePages, avgTimeMs, avgScrollDepth }
}

interface SourceRow {
  source: string
  count: number
}

async function getTrafficSources(): Promise<SourceRow[]> {
  const { data } = await getSupabaseAdmin()
    .from('tps_sessions')
    .select('referrer_source')

  if (!data) return []

  const counts: Record<string, number> = {}
  for (const row of data) {
    const src = row.referrer_source ?? 'unknown'
    counts[src] = (counts[src] ?? 0) + 1
  }

  return Object.entries(counts)
    .map(([source, count]) => ({ source, count }))
    .sort((a, b) => b.count - a.count)
}

interface TopPage {
  path: string
  views: number
  avgTimeMs: number
  avgScrollDepth: number
}

async function getTopPages(): Promise<TopPage[]> {
  const { data } = await getSupabaseAdmin()
    .from('tps_page_views')
    .select('page_path, time_on_page_ms, scroll_depth')

  if (!data) return []

  const map: Record<string, { views: number; totalTime: number; totalScroll: number }> = {}
  for (const row of data) {
    const p = row.page_path
    if (!map[p]) map[p] = { views: 0, totalTime: 0, totalScroll: 0 }
    map[p].views++
    map[p].totalTime += row.time_on_page_ms ?? 0
    map[p].totalScroll += row.scroll_depth ?? 0
  }

  return Object.entries(map)
    .map(([path, d]) => ({
      path,
      views: d.views,
      avgTimeMs: d.totalTime / d.views,
      avgScrollDepth: d.totalScroll / d.views,
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 30)
}

interface DeviceRow {
  type: string
  count: number
}

async function getDeviceBreakdown(): Promise<DeviceRow[]> {
  const { data } = await getSupabaseAdmin()
    .from('tps_sessions')
    .select('device_type')

  if (!data) return []

  const counts: Record<string, number> = {}
  for (const row of data) {
    const d = row.device_type ?? 'unknown'
    counts[d] = (counts[d] ?? 0) + 1
  }

  return Object.entries(counts)
    .map(([type, count]) => ({ type, count }))
    .sort((a, b) => b.count - a.count)
}

interface RecentSession {
  session_id: string
  landing_page: string
  referrer_source: string
  device_type: string
  created_at: string
}

async function getRecentSessions(): Promise<RecentSession[]> {
  const { data } = await getSupabaseAdmin()
    .from('tps_sessions')
    .select('session_id, landing_page, referrer_source, device_type, created_at')
    .order('created_at', { ascending: false })
    .limit(20)

  return (data as RecentSession[]) ?? []
}

// ── components ───────────────────────────────────────────────────────────

function Card({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-border-strong bg-white p-5">
      <p className="text-xs uppercase tracking-wider text-slate">{label}</p>
      <p className="mt-1 font-mono text-2xl font-semibold text-ink">{value}</p>
    </div>
  )
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 font-heading text-lg font-semibold text-ink">
      {children}
    </h2>
  )
}

// ── page ─────────────────────────────────────────────────────────────────

export default async function AnalyticsPage() {
  const [today, week, month, sources, topPages, devices, recent] =
    await Promise.all([
      getStats(1),
      getStats(7),
      getStats(30),
      getTrafficSources(),
      getTopPages(),
      getDeviceBreakdown(),
      getRecentSessions(),
    ])

  const totalDevices = devices.reduce((s, d) => s + d.count, 0)
  const totalSources = sources.reduce((s, r) => s + r.count, 0)

  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-12 lg:px-12">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-3xl font-bold text-ink">
            Analytics Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate">
            Data from <span className="font-mono">tps_sessions</span> &amp;{' '}
            <span className="font-mono">tps_page_views</span> &mdash;
            server-rendered at{' '}
            <span className="font-mono">
              {new Date().toISOString().slice(0, 19).replace('T', ' ')} UTC
            </span>
          </p>
        </div>

        {/* ── Summary Cards ── */}
        {[
          { label: 'Today', stats: today },
          { label: 'Last 7 days', stats: week },
          { label: 'Last 30 days', stats: month },
        ].map(({ label, stats }) => (
          <div key={label} className="mb-8">
            <SectionTitle>{label}</SectionTitle>
            <div className="grid grid-cols-2 gap-px bg-border-strong sm:grid-cols-3 lg:grid-cols-5">
              <Card label="Sessions" value={stats.sessions.toLocaleString()} />
              <Card
                label="Page Views"
                value={stats.pageViews.toLocaleString()}
              />
              <Card label="Unique Pages" value={String(stats.uniquePages)} />
              <Card label="Avg Time" value={formatMs(stats.avgTimeMs)} />
              <Card
                label="Avg Scroll"
                value={`${Math.round(stats.avgScrollDepth)}%`}
              />
            </div>
          </div>
        ))}

        {/* ── Traffic Sources ── */}
        <div className="mb-8">
          <SectionTitle>Traffic Sources (all time)</SectionTitle>
          <div className="overflow-x-auto border border-border-strong">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-strong bg-cream text-left">
                  <th className="px-4 py-2 font-medium text-slate">Source</th>
                  <th className="px-4 py-2 text-right font-medium text-slate">
                    Sessions
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-slate">
                    Share
                  </th>
                  <th className="px-4 py-2 font-medium text-slate">Bar</th>
                </tr>
              </thead>
              <tbody>
                {sources.map((row) => (
                  <tr
                    key={row.source}
                    className="border-b border-border-strong last:border-0"
                  >
                    <td className="px-4 py-2 font-mono text-ink">
                      {row.source}
                    </td>
                    <td className="px-4 py-2 text-right font-mono">
                      {row.count}
                    </td>
                    <td className="px-4 py-2 text-right font-mono text-slate">
                      {pct(row.count, totalSources)}
                    </td>
                    <td className="px-4 py-2">
                      <div className="h-3 w-full bg-cream">
                        <div
                          className="h-full bg-accent"
                          style={{
                            width: `${totalSources > 0 ? (row.count / totalSources) * 100 : 0}%`,
                          }}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
                {sources.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-ash">
                      No session data yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Top Pages ── */}
        <div className="mb-8">
          <SectionTitle>Top Pages (all time, top 30)</SectionTitle>
          <div className="overflow-x-auto border border-border-strong">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-strong bg-cream text-left">
                  <th className="px-4 py-2 font-medium text-slate">Page</th>
                  <th className="px-4 py-2 text-right font-medium text-slate">
                    Views
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-slate">
                    Avg Time
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-slate">
                    Avg Scroll
                  </th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((row) => (
                  <tr
                    key={row.path}
                    className="border-b border-border-strong last:border-0"
                  >
                    <td className="max-w-[300px] truncate px-4 py-2 font-mono text-ink">
                      {row.path}
                    </td>
                    <td className="px-4 py-2 text-right font-mono">
                      {row.views}
                    </td>
                    <td className="px-4 py-2 text-right font-mono text-slate">
                      {formatMs(row.avgTimeMs)}
                    </td>
                    <td className="px-4 py-2 text-right font-mono text-slate">
                      {Math.round(row.avgScrollDepth)}%
                    </td>
                  </tr>
                ))}
                {topPages.length === 0 && (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-ash">
                      No page view data yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Device Breakdown ── */}
        <div className="mb-8">
          <SectionTitle>Device Breakdown (all time)</SectionTitle>
          <div className="overflow-x-auto border border-border-strong">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-strong bg-cream text-left">
                  <th className="px-4 py-2 font-medium text-slate">Device</th>
                  <th className="px-4 py-2 text-right font-medium text-slate">
                    Sessions
                  </th>
                  <th className="px-4 py-2 text-right font-medium text-slate">
                    Share
                  </th>
                </tr>
              </thead>
              <tbody>
                {devices.map((row) => (
                  <tr
                    key={row.type}
                    className="border-b border-border-strong last:border-0"
                  >
                    <td className="px-4 py-2 font-mono capitalize text-ink">
                      {row.type}
                    </td>
                    <td className="px-4 py-2 text-right font-mono">
                      {row.count}
                    </td>
                    <td className="px-4 py-2 text-right font-mono text-slate">
                      {pct(row.count, totalDevices)}
                    </td>
                  </tr>
                ))}
                {devices.length === 0 && (
                  <tr>
                    <td colSpan={3} className="px-4 py-6 text-center text-ash">
                      No session data yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Recent Sessions ── */}
        <div className="mb-8">
          <SectionTitle>Recent Sessions (last 20)</SectionTitle>
          <div className="overflow-x-auto border border-border-strong">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border-strong bg-cream text-left">
                  <th className="px-4 py-2 font-medium text-slate">Time</th>
                  <th className="px-4 py-2 font-medium text-slate">
                    Landing Page
                  </th>
                  <th className="px-4 py-2 font-medium text-slate">Source</th>
                  <th className="px-4 py-2 font-medium text-slate">Device</th>
                  <th className="px-4 py-2 font-medium text-slate">
                    Session ID
                  </th>
                </tr>
              </thead>
              <tbody>
                {recent.map((row) => (
                  <tr
                    key={row.session_id}
                    className="border-b border-border-strong last:border-0"
                  >
                    <td className="whitespace-nowrap px-4 py-2 font-mono text-xs text-slate">
                      {new Date(row.created_at)
                        .toISOString()
                        .slice(0, 16)
                        .replace('T', ' ')}
                    </td>
                    <td className="max-w-[200px] truncate px-4 py-2 font-mono text-ink">
                      {row.landing_page}
                    </td>
                    <td className="px-4 py-2 font-mono">{row.referrer_source}</td>
                    <td className="px-4 py-2 font-mono capitalize">
                      {row.device_type}
                    </td>
                    <td className="px-4 py-2 font-mono text-xs text-ash">
                      {row.session_id.slice(0, 8)}
                    </td>
                  </tr>
                ))}
                {recent.length === 0 && (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-ash">
                      No sessions yet
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
