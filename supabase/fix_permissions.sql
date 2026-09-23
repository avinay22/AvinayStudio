-- Run this in Supabase SQL Editor to grant full CRUD permissions for the Admin Panel

drop policy if exists "Allow authenticated all access on projects" on public.projects;
drop policy if exists "Allow authenticated all access on clients" on public.clients;
drop policy if exists "Allow authenticated all access on payments" on public.payments;
drop policy if exists "Allow authenticated all access on invoices" on public.invoices;

drop policy if exists "Allow all access on projects" on public.projects;
drop policy if exists "Allow all access on clients" on public.clients;
drop policy if exists "Allow all access on payments" on public.payments;
drop policy if exists "Allow all access on invoices" on public.invoices;

create policy "Allow all access on projects" on public.projects for all using (true) with check (true);
create policy "Allow all access on clients" on public.clients for all using (true) with check (true);
create policy "Allow all access on payments" on public.payments for all using (true) with check (true);
create policy "Allow all access on invoices" on public.invoices for all using (true) with check (true);
