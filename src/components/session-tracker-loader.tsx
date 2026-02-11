'use client'

import dynamic from 'next/dynamic'

const SessionTracker = dynamic(
  () => import('@/components/session-tracker').then(mod => ({ default: mod.SessionTracker })),
  { ssr: false }
)

export function SessionTrackerLoader() {
  return <SessionTracker />
}
