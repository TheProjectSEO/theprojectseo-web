import 'server-only'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

function getClient(): SupabaseClient {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error(
      'Missing SUPABASE_SERVICE_ROLE_KEY or NEXT_PUBLIC_SUPABASE_URL env vars'
    )
  }

  return createClient(url, key)
}

// Lazy-init: only throws when actually used at runtime, not at build time
let _client: SupabaseClient | null = null

export function getSupabaseAdmin(): SupabaseClient {
  if (!_client) _client = getClient()
  return _client
}
