import 'server-only'
import { createClient, type SupabaseClient } from '@supabase/supabase-js'

function createLeadsClient(): SupabaseClient {
  const url = process.env.LEADS_SUPABASE_URL
  const key = process.env.LEADS_SUPABASE_SERVICE_ROLE_KEY

  if (!url || !key) {
    throw new Error(
      'Missing LEADS_SUPABASE_URL or LEADS_SUPABASE_SERVICE_ROLE_KEY env vars',
    )
  }

  return createClient(url, key, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

let leadsClient: SupabaseClient | null = null

export function getLeadsSupabase(): SupabaseClient {
  if (!leadsClient) {
    leadsClient = createLeadsClient()
  }

  return leadsClient
}
