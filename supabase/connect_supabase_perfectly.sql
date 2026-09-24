-- =========================================================================
-- RUN THIS IN SUPABASE SQL EDITOR TO MAKE SUPABASE 100% DIRECTLY EDITABLE
-- =========================================================================

-- 1. Disable Row Level Security (RLS) on all 4 agency tables:
-- This allows your website and admin panel to directly ADD, EDIT, and DELETE in real-time.

alter table public.projects disable row level security;
alter table public.clients disable row level security;
alter table public.payments disable row level security;
alter table public.invoices disable row level security;

-- 2. Verify all tables exist and have permissions
grant all on public.projects to anon, authenticated, service_role;
grant all on public.clients to anon, authenticated, service_role;
grant all on public.payments to anon, authenticated, service_role;
grant all on public.invoices to anon, authenticated, service_role;

-- Done! Once you click Run, you will see 'Success. No rows returned'.
