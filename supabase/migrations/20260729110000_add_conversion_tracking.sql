alter table public.leads
  add column if not exists cta_source text,
  add column if not exists landing_page text,
  add column if not exists session_id text;

comment on column public.leads.cta_source is
  'On-site conversion placement that sent the visitor to the lead form.';

comment on column public.leads.landing_page is
  'First page recorded for the browser session before the lead was submitted.';

comment on column public.leads.session_id is
  'Anonymous browser-session identifier used to join the lead to non-PII CRO events.';

create table if not exists public.conversion_events (
  id uuid primary key default gen_random_uuid(),
  session_id text not null,
  event_name text not null,
  page_path text not null,
  page_type text not null,
  placement text,
  label text,
  destination text,
  variant text,
  trigger text,
  value numeric,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  constraint conversion_events_event_name_length
    check (char_length(event_name) between 1 and 40),
  constraint conversion_events_session_id_length
    check (char_length(session_id) between 1 and 100)
);

comment on table public.conversion_events is
  'Anonymous, non-PII CRO events from TheProjectSEO website.';

alter table public.conversion_events enable row level security;

revoke all on table public.conversion_events from anon, authenticated;
grant all on table public.conversion_events to service_role;

create index if not exists conversion_events_created_at_idx
  on public.conversion_events (created_at desc);

create index if not exists conversion_events_event_name_idx
  on public.conversion_events (event_name, created_at desc);

create index if not exists conversion_events_session_id_idx
  on public.conversion_events (session_id, created_at);

create index if not exists conversion_events_page_path_idx
  on public.conversion_events (page_path, created_at desc);

notify pgrst, 'reload schema';
