-- Run this in Supabase SQL Editor to enable Photo Uploads into Supabase Cloud Storage

-- 1. Create a public storage bucket named 'portfolio'
insert into storage.buckets (id, name, public)
values ('portfolio', 'portfolio', true)
on conflict (id) do update set public = true;

-- 2. Drop existing policies if any
drop policy if exists "Public Access" on storage.objects;
drop policy if exists "Public Upload" on storage.objects;
drop policy if exists "Public Update" on storage.objects;
drop policy if exists "Public Delete" on storage.objects;

-- 3. Set policies to allow viewing and uploading photos
create policy "Public Access" on storage.objects for select using (bucket_id = 'portfolio');
create policy "Public Upload" on storage.objects for insert with check (bucket_id = 'portfolio');
create policy "Public Update" on storage.objects for update using (bucket_id = 'portfolio');
create policy "Public Delete" on storage.objects for delete using (bucket_id = 'portfolio');
