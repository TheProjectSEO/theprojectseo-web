'use client'

/**
 * Interactive N8n Workflow Visualization
 *
 * Click each node to see data flow through the automation pipeline.
 * Performance-optimized: Uses CSS transforms and native browser APIs only.
 * No heavy libraries - just React state + CSS animations.
 */

import { useState } from 'react'

export function N8nWorkflowInteractive() {
  const [activeNode, setActiveNode] = useState<number | null>(null)
  const [completedNodes, setCompletedNodes] = useState<number[]>([])

  const nodes = [
    {
      id: 0,
      label: 'Trigger',
      title: 'Webhook Received',
      description: 'HTTP POST request',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'accent',
    },
    {
      id: 1,
      label: 'Process',
      title: 'Parse & Filter Data',
      description: 'Extract fields',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'stone',
    },
    {
      id: 2,
      label: 'API Call',
      title: 'Slack API',
      description: 'POST /chat.postMessage',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      ),
      color: 'stone',
    },
    {
      id: 3,
      label: 'Transform',
      title: 'Format Response',
      description: 'Map to schema',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      color: 'stone',
    },
    {
      id: 4,
      label: 'Complete',
      title: 'Workflow Success',
      description: 'Notification sent',
      icon: (
        <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'ink',
    },
  ]

  const handleNodeClick = (nodeId: number) => {
    if (activeNode === nodeId) return // Already active

    setActiveNode(nodeId)

    // Mark all previous nodes as completed
    const completed = Array.from({ length: nodeId + 1 }, (_, i) => i)
    setCompletedNodes(completed)

    // Auto-advance to next node after animation
    if (nodeId < nodes.length - 1) {
      setTimeout(() => {
        setActiveNode(null)
      }, 1000)
    }
  }

  const isCompleted = (nodeId: number) => completedNodes.includes(nodeId)
  const isActive = (nodeId: number) => activeNode === nodeId

  return (
    <div className="relative w-full max-w-md mx-auto lg:mx-0">
      {/* Instructions */}
      <div className="mb-6 text-center lg:text-left">
        <p className="font-mono text-xs uppercase tracking-wider text-accent font-semibold mb-2">
          Interactive Demo
        </p>
        <p className="text-sm text-slate">
          Click each node to see data flow through the pipeline
        </p>
      </div>

      {/* Workflow container */}
      <div className="space-y-6">
        {nodes.map((node, index) => {
          const isFirst = index === 0
          const isLast = index === nodes.length - 1
          const showConnector = index < nodes.length - 1

          return (
            <div key={node.id} className="relative">
              {/* Node Card */}
              <button
                onClick={() => handleNodeClick(node.id)}
                className={`
                  w-full rounded-none p-6 shadow-sm text-left
                  transition-all duration-300
                  ${
                    isFirst
                      ? 'border-2 border-accent bg-paper'
                      : isLast
                      ? 'border-2 border-stone bg-ink'
                      : 'border border-border-strong bg-paper'
                  }
                  ${isActive(node.id) ? 'scale-105 shadow-xl ring-2 ring-accent ring-offset-2' : ''}
                  ${!isActive(node.id) && !isLast ? 'hover:-translate-y-1 hover:shadow-lg' : ''}
                  ${isCompleted(node.id) && !isActive(node.id) ? 'opacity-60' : ''}
                `}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`
                      size-12 rounded-none flex items-center justify-center flex-shrink-0
                      transition-all duration-300
                      ${
                        isFirst
                          ? 'bg-accent-soft'
                          : isLast
                          ? 'bg-stone'
                          : 'bg-cream border border-border'
                      }
                      ${isActive(node.id) ? 'animate-pulse' : ''}
                    `}
                  >
                    <div className={isFirst ? 'text-accent' : isLast ? 'text-paper' : 'text-stone'}>
                      {node.icon}
                    </div>
                  </div>
                  <div>
                    <div
                      className={`
                        font-mono text-xs uppercase tracking-[0.1em] mb-1 font-medium
                        ${isFirst ? 'text-accent' : isLast ? 'text-ash' : 'text-ash'}
                      `}
                    >
                      {node.label}
                    </div>
                    <div
                      className={`
                        text-sm font-medium
                        ${isLast ? 'text-paper' : 'text-ink'}
                      `}
                    >
                      {node.title}
                    </div>
                    <div
                      className={`
                        text-xs mt-1
                        ${isLast ? 'text-ash' : 'text-slate'}
                      `}
                    >
                      {node.description}
                    </div>
                  </div>
                </div>

                {/* Active indicator */}
                {isActive(node.id) && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                    <div className="size-4 rounded-full bg-accent animate-ping" />
                    <div className="absolute inset-0 size-4 rounded-full bg-accent" />
                  </div>
                )}

                {/* Completed checkmark */}
                {isCompleted(node.id) && !isActive(node.id) && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                    <div className="size-6 rounded-full bg-accent flex items-center justify-center">
                      <svg className="size-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </button>

              {/* Animated Connector Line */}
              {showConnector && (
                <div className="absolute left-[38px] top-full h-6 w-0.5 bg-border-strong overflow-hidden">
                  {isActive(node.id) && (
                    <div
                      className="w-full bg-accent animate-data-flow"
                      style={{
                        height: '100%',
                        animation: 'dataFlow 1s ease-out forwards',
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Decorative accent line */}
      <div className="absolute -right-4 top-0 bottom-0 w-1 bg-gradient-to-b from-accent via-accent/40 to-transparent rounded-full opacity-40" />

      {/* CSS Keyframes */}
      <style jsx>{`
        @keyframes dataFlow {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
