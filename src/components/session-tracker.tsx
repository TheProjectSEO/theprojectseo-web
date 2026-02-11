'use client'

import { useEffect, useRef } from 'react'
import { supabase } from '@/lib/supabase'
import { getPageType, getDeviceType } from '@/lib/page-utils'

const SESSION_KEY = 'st_session_id'
const MIN_PAGE_TIME_MS = 500

function generateId(): string {
  return crypto.randomUUID()
}

function getOrCreateSessionId(): string {
  let id = sessionStorage.getItem(SESSION_KEY)
  if (!id) {
    id = generateId()
    sessionStorage.setItem(SESSION_KEY, id)
  }
  return id
}

interface ReferrerInfo {
  source: string
  query: string | null
}

function parseReferrer(ref: string): ReferrerInfo {
  if (!ref) return { source: 'direct', query: null }

  let url: URL
  try {
    url = new URL(ref)
  } catch {
    return { source: 'direct', query: null }
  }

  const host = url.hostname.toLowerCase()

  // Internal navigation
  if (host.includes('theprojectseo.com')) {
    return { source: 'internal', query: null }
  }

  // Search engines
  if (host.includes('google.')) {
    return { source: 'google', query: url.searchParams.get('q') }
  }
  if (host.includes('bing.com')) {
    return { source: 'bing', query: url.searchParams.get('q') }
  }
  if (host.includes('yahoo.com') || host.includes('search.yahoo.')) {
    return { source: 'yahoo', query: url.searchParams.get('p') }
  }
  if (host.includes('duckduckgo.com')) {
    return { source: 'duckduckgo', query: url.searchParams.get('q') }
  }
  if (host.includes('baidu.com')) {
    return { source: 'baidu', query: url.searchParams.get('wd') }
  }
  if (host.includes('yandex.')) {
    return { source: 'yandex', query: url.searchParams.get('text') }
  }

  // Social
  if (host.includes('facebook.com') || host.includes('fb.com')) return { source: 'facebook', query: null }
  if (host.includes('twitter.com') || host.includes('x.com') || host.includes('t.co')) return { source: 'twitter', query: null }
  if (host.includes('linkedin.com')) return { source: 'linkedin', query: null }
  if (host.includes('reddit.com')) return { source: 'reddit', query: null }

  return { source: 'referral', query: null }
}

function getMaxScrollDepth(): (() => number) {
  let maxDepth = 0

  const handler = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    )
    const winHeight = window.innerHeight
    const scrollable = docHeight - winHeight

    if (scrollable > 0) {
      const pct = Math.round((scrollTop / scrollable) * 100)
      if (pct > maxDepth) maxDepth = pct
    }
  }

  window.addEventListener('scroll', handler, { passive: true })

  return () => {
    window.removeEventListener('scroll', handler)
    return Math.min(maxDepth, 100)
  }
}

function flushPageView(
  sessionId: string,
  pagePath: string,
  pageType: string,
  enteredAt: number,
  getScrollDepth: () => number
) {
  const timeOnPage = Date.now() - enteredAt
  if (timeOnPage < MIN_PAGE_TIME_MS) return

  const scrollDepth = getScrollDepth()

  const payload = {
    session_id: sessionId,
    page_path: pagePath,
    page_type: pageType,
    time_on_page_ms: timeOnPage,
    scroll_depth: scrollDepth,
  }

  // Use fetch + keepalive for reliability during page unload
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!supabaseUrl || !anonKey) return

  const url = `${supabaseUrl}/rest/v1/tps_page_views`
  const body = JSON.stringify(payload)

  try {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: anonKey,
        Authorization: `Bearer ${anonKey}`,
        Prefer: 'return=minimal',
      },
      body,
      keepalive: true,
    })
  } catch {
    // Silently fail — tracking should never break the site
  }
}

export function SessionTracker() {
  const flushedRef = useRef(false)

  useEffect(() => {
    const sessionId = getOrCreateSessionId()
    const pagePath = window.location.pathname
    const pageType = getPageType(pagePath)
    const enteredAt = Date.now()
    const cleanupScrollDepth = getMaxScrollDepth()

    // Record session on first page of this tab
    const isNewSession = !sessionStorage.getItem('st_session_recorded')
    if (isNewSession) {
      sessionStorage.setItem('st_session_recorded', '1')

      const { source, query } = parseReferrer(document.referrer)
      const deviceType = getDeviceType(window.innerWidth)

      supabase.from('tps_sessions').insert({
        session_id: sessionId,
        landing_page: pagePath,
        referrer: document.referrer || null,
        referrer_source: source,
        search_query: query,
        device_type: deviceType,
        screen_width: window.innerWidth,
      }).then(() => {}, () => {})
    }

    flushedRef.current = false

    const flush = () => {
      if (flushedRef.current) return
      flushedRef.current = true
      flushPageView(sessionId, pagePath, pageType, enteredAt, cleanupScrollDepth)
    }

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') flush()
    }

    window.addEventListener('beforeunload', flush)
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      flush()
      window.removeEventListener('beforeunload', flush)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return null
}
