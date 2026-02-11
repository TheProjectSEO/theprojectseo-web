import { createClient, SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''

function createNoopClient(): SupabaseClient {
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handler: ProxyHandler<any> = {
    get: (_target, prop) => {
      if (prop === 'then') return undefined
      return () => new Proxy({}, handler)
    },
  }
  /* eslint-enable @typescript-eslint/no-explicit-any */
  return new Proxy({} as SupabaseClient, handler)
}

export const supabase: SupabaseClient = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : createNoopClient()
