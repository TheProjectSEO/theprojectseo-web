/**
 * N8n Workflow Visualization Component
 *
 * Displays a semantic workflow diagram representing automation processes.
 * Used in the hero section of the N8n automation landing page.
 *
 * Design: rounded-none borders, accent colors, connected nodes showing workflow progression
 */

export function N8nWorkflowVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Workflow container */}
      <div className="space-y-6">
        {/* Trigger Node */}
        <div className="relative">
          <div className="rounded-none border-2 border-accent bg-accent p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-ink flex items-center justify-center flex-shrink-0">
                <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-paper mb-1">Trigger</div>
                <div className="text-sm font-medium text-paper">Webhook Received</div>
                <div className="text-xs text-ash mt-1">HTTP POST request</div>
              </div>
            </div>
          </div>
          {/* Connector line */}
          <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/20" />
        </div>

        {/* Process Node */}
        <div className="relative">
          <div className="rounded-none border border-accent bg-ink p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent">
                <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Process</div>
                <div className="text-sm font-medium text-paper">Parse & Filter Data</div>
                <div className="text-xs text-ash mt-1">Extract fields</div>
              </div>
            </div>
          </div>
          {/* Connector line */}
          <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/20" />
        </div>

        {/* API Call Node */}
        <div className="relative">
          <div className="rounded-none border border-accent bg-ink p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent">
                <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">API Call</div>
                <div className="text-sm font-medium text-paper">Slack API</div>
                <div className="text-xs text-ash mt-1">POST /chat.postMessage</div>
              </div>
            </div>
          </div>
          {/* Connector line */}
          <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/20" />
        </div>

        {/* Transform Node */}
        <div className="relative">
          <div className="rounded-none border border-accent bg-ink p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-accent-soft flex items-center justify-center flex-shrink-0 border border-accent">
                <svg className="size-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Transform</div>
                <div className="text-sm font-medium text-paper">Format Response</div>
                <div className="text-xs text-ash mt-1">Map to schema</div>
              </div>
            </div>
          </div>
          {/* Connector line */}
          <div className="absolute left-[38px] top-full h-6 w-0.5 bg-accent/20" />
        </div>

        {/* Output Node */}
        <div className="relative">
          <div className="rounded-none border-2 border-stone bg-ink p-6 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="size-12 rounded-none bg-stone flex items-center justify-center flex-shrink-0">
                <svg className="size-6 text-paper" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.1em] text-ash mb-1">Complete</div>
                <div className="text-sm font-medium text-paper">Workflow Success</div>
                <div className="text-xs text-ash mt-1">Notification sent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative accent line */}
      <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent rounded-full opacity-40" />
    </div>
  )
}
