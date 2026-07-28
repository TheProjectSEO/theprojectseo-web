create table public.leads (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  company text,
  phone text,
  website_url text,
  service_interest text,
  selected_plan text,
  selected_plan_label text,
  discovery_source text,
  discovery_detail text,
  message text,
  source_page text not null,
  source_url text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_term text,
  utm_content text,
  referrer text,
  status text not null default 'new'
    check (status in ('new', 'contacted', 'qualified', 'won', 'lost', 'spam')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.leads is
  'Lead submissions from TheProjectSEO website forms.';

comment on column public.leads.phone is
  'Optional phone number submitted on the full contact form.';

alter table public.leads enable row level security;

revoke all on table public.leads from anon, authenticated;
grant all on table public.leads to service_role;

create index leads_created_at_idx on public.leads (created_at desc);
create index leads_status_idx on public.leads (status);
create index leads_email_idx on public.leads (lower(email));

notify pgrst, 'reload schema';
