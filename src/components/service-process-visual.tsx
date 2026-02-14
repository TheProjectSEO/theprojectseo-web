/**
 * Service Process Visualization Component
 *
 * Displays workflow diagrams representing SEO service processes.
 * Used in the process section of service pages.
 *
 * Design: accent-soft tinted panel, accent first card, paper cards for subsequent steps
 */

interface ServiceProcessVisualProps {
  type: 'audit' | 'strategy' | 'implementation' | 'reporting' | 'optimization'
}

export function ServiceProcessVisual({ type }: ServiceProcessVisualProps) {
  const renderAudit = () => (
    <div className="space-y-6">
      {/* Magnifying Glass Analysis */}
      <div className="relative">
        <div className="rounded-none border-2 border-accent bg-accent p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-paper mb-1">Discover</div>
              <div className="text-sm font-medium text-paper">Technical Audit</div>
              <div className="text-xs text-white/60 mt-1">Crawl & analyze site</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Data Collection */}
      <div className="relative">
        <div className="rounded-none border border-accent/30 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent/30">
              <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Analyze</div>
              <div className="text-sm font-medium text-ink">Gather Data</div>
              <div className="text-xs text-ash mt-1">Metrics & insights</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Report Generation */}
      <div className="relative">
        <div className="rounded-none border border-accent/20 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-cream flex items-center justify-center flex-shrink-0 border border-accent/20">
              <svg className="size-6 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Report</div>
              <div className="text-sm font-medium text-ink">Findings</div>
              <div className="text-xs text-ash mt-1">Issues & recommendations</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderStrategy = () => (
    <div className="space-y-6">
      {/* Research */}
      <div className="relative">
        <div className="rounded-none border-2 border-accent bg-accent p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-paper mb-1">Research</div>
              <div className="text-sm font-medium text-paper">Keyword Analysis</div>
              <div className="text-xs text-white/60 mt-1">Competitor study</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Planning */}
      <div className="relative">
        <div className="rounded-none border border-accent/30 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent/30">
              <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Plan</div>
              <div className="text-sm font-medium text-ink">Content Strategy</div>
              <div className="text-xs text-ash mt-1">Topic clusters</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Roadmap */}
      <div className="relative">
        <div className="rounded-none border border-accent/20 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-cream flex items-center justify-center flex-shrink-0 border border-accent/20">
              <svg className="size-6 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Execute</div>
              <div className="text-sm font-medium text-ink">Roadmap</div>
              <div className="text-xs text-ash mt-1">Timeline & milestones</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderImplementation = () => (
    <div className="space-y-6">
      {/* Code/Build */}
      <div className="relative">
        <div className="rounded-none border-2 border-accent bg-accent p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-paper mb-1">Build</div>
              <div className="text-sm font-medium text-paper">Technical Implementation</div>
              <div className="text-xs text-white/60 mt-1">Code changes</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Content Creation */}
      <div className="relative">
        <div className="rounded-none border border-accent/30 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent/30">
              <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Create</div>
              <div className="text-sm font-medium text-ink">Content Production</div>
              <div className="text-xs text-ash mt-1">Write & optimize</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Deploy */}
      <div className="relative">
        <div className="rounded-none border border-accent/20 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-cream flex items-center justify-center flex-shrink-0 border border-accent/20">
              <svg className="size-6 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Launch</div>
              <div className="text-sm font-medium text-ink">Deploy</div>
              <div className="text-xs text-ash mt-1">Go live</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderReporting = () => (
    <div className="space-y-6">
      {/* Data Collection */}
      <div className="relative">
        <div className="rounded-none border-2 border-accent bg-accent p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-paper mb-1">Collect</div>
              <div className="text-sm font-medium text-paper">Track Metrics</div>
              <div className="text-xs text-white/60 mt-1">GA4, GSC, rankings</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Analysis */}
      <div className="relative">
        <div className="rounded-none border border-accent/30 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent/30">
              <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Analyze</div>
              <div className="text-sm font-medium text-ink">Performance Review</div>
              <div className="text-xs text-ash mt-1">Trend analysis</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Dashboard */}
      <div className="relative">
        <div className="rounded-none border border-accent/20 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-cream flex items-center justify-center flex-shrink-0 border border-accent/20">
              <svg className="size-6 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Report</div>
              <div className="text-sm font-medium text-ink">Dashboard</div>
              <div className="text-xs text-ash mt-1">Visual insights</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderOptimization = () => (
    <div className="space-y-6">
      {/* Test */}
      <div className="relative">
        <div className="rounded-none border-2 border-accent bg-accent p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0012 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-paper mb-1">Test</div>
              <div className="text-sm font-medium text-paper">A/B Testing</div>
              <div className="text-xs text-white/60 mt-1">Experiment & iterate</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Refine */}
      <div className="relative">
        <div className="rounded-none border border-accent/30 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent/30">
              <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Refine</div>
              <div className="text-sm font-medium text-ink">Continuous Improvement</div>
              <div className="text-xs text-ash mt-1">Apply learnings</div>
            </div>
          </div>
        </div>
        <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/30" />
      </div>

      {/* Scale */}
      <div className="relative">
        <div className="rounded-none border border-accent/20 bg-paper p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
          <div className="flex items-start gap-4">
            <div className="size-12 rounded-none bg-cream flex items-center justify-center flex-shrink-0 border border-accent/20">
              <svg className="size-6 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
              </svg>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Scale</div>
              <div className="text-sm font-medium text-ink">Growth</div>
              <div className="text-xs text-ash mt-1">Expand & multiply</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {type === 'audit' && renderAudit()}
      {type === 'strategy' && renderStrategy()}
      {type === 'implementation' && renderImplementation()}
      {type === 'reporting' && renderReporting()}
      {type === 'optimization' && renderOptimization()}

      {/* Decorative accent line */}
      <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent rounded-full opacity-40" />
    </div>
  )
}
