-- ==========================================================
-- AvinayStudio - Supabase Production Schema & Seed Data
-- ==========================================================

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. PORTFOLIO PROJECTS TABLE
create table if not exists public.projects (
    id uuid primary key default gen_random_uuid(),
    title text not null,
    client_name text not null,
    category text not null, -- 'E-Commerce', 'Local Business', 'Healthcare', 'Salon & Lifestyle'
    description text not null,
    image_url text not null,
    live_url text,
    tags text[] default '{}',
    results_metric text, -- e.g. "3.8x Lead Increase", "10,000+ Monthly Visitors"
    featured boolean default true,
    order_index int default 0,
    created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 2. CLIENT CRM TABLE
create table if not exists public.clients (
    id uuid primary key default gen_random_uuid(),
    business_name text not null,
    contact_name text not null,
    phone text not null,
    email text,
    location text default 'Assam, India',
    package_selected text default 'Business Website', -- 'Basic Website', 'Business Website', 'Advanced Online Store'
    status text default 'Active', -- 'Lead', 'In Progress', 'Active', 'Completed'
    total_billed numeric default 0,
    notes text,
    created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 3. PAYMENTS TRACKER TABLE
create table if not exists public.payments (
    id uuid primary key default gen_random_uuid(),
    client_id uuid references public.clients(id) on delete set null,
    client_name text not null,
    project_title text not null,
    invoice_number text not null,
    total_amount numeric not null,
    paid_amount numeric default 0,
    due_date date,
    payment_method text default 'UPI / Bank Transfer',
    status text default 'Pending', -- 'Paid', 'Partial', 'Pending'
    created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 4. INVOICES TABLE (For PDF Generation & Records)
create table if not exists public.invoices (
    id uuid primary key default gen_random_uuid(),
    invoice_number text not null unique,
    client_name text not null,
    client_phone text,
    client_email text,
    client_address text default 'Assam, India',
    issue_date date default current_date,
    due_date date,
    items jsonb not null default '[]'::jsonb,
    subtotal numeric not null default 0,
    discount numeric not null default 0,
    total_amount numeric not null default 0,
    status text default 'Issued', -- 'Draft', 'Issued', 'Paid', 'Cancelled'
    notes text default 'Thank you for choosing AvinayStudio. Bank transfer / UPI details provided on invoice.',
    created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 5. ROW LEVEL SECURITY (RLS) POLICIES
alter table public.projects enable row level security;
alter table public.clients enable row level security;
alter table public.payments enable row level security;
alter table public.invoices enable row level security;

-- Public can read projects
create policy "Allow public read access to projects"
    on public.projects for select
    using (true);

-- Authenticated admin can perform all actions
create policy "Allow authenticated all access on projects"
    on public.projects for all
    to authenticated
    using (true)
    with check (true);

create policy "Allow authenticated all access on clients"
    on public.clients for all
    to authenticated
    using (true)
    with check (true);

create policy "Allow authenticated all access on payments"
    on public.payments for all
    to authenticated
    using (true)
    with check (true);

create policy "Allow authenticated all access on invoices"
    on public.invoices for all
    to authenticated
    using (true)
    with check (true);

-- ==========================================================
-- SEED INITIAL REAL-WORLD LOCAL PROJECTS
-- ==========================================================
insert into public.projects (title, client_name, category, description, image_url, live_url, tags, results_metric, featured, order_index)
values
(
    'Maa Radio Mart',
    'Maa Radio Mart',
    'Electronics & Retail',
    'Modern electronic appliance and smartphone catalogue with WhatsApp quick-enquiry and local Google visibility.',
    '/images/maa-radio-store.png',
    'http://localhost:3000',
    array['Next.js', 'Supabase', 'Catalog', 'Assam'],
    '300+ Local Inquiries / Month',
    true,
    1
),
(
    'Sharma Medicos',
    'Sharma Medicos & Healthcare',
    'Healthcare & Pharmacy',
    'Clean, patient-first pharmacy web presence with prescription upload, doctor consultation connect, and medicine availability queries.',
    '/images/hero-laptop.jpg',
    '#',
    array['Healthcare', 'Web Platform', 'Local SEO'],
    'Top 3 Local Search Ranking',
    true,
    2
),
(
    'The Beauty Salon & Boutique',
    'The Beauty Salon & Boutique',
    'Salon & Lifestyle',
    'High-end visual showcase for premium bridal packages, hair artistry, and direct booking slots.',
    '/images/about-avinay.png',
    '#',
    array['Branding', 'Booking Flow', 'Luxury UI'],
    '4.9 Star Brand Reputation',
    true,
    3
),
(
    'Style Hub Fashion',
    'Style Hub Apparel',
    'Fashion & Apparel',
    'Dynamic trend lookbook with instant social media shopping redirection and influencer-grade mobile speed.',
    '/images/hero-laptop.jpg',
    '#',
    array['Fashion', 'Mobile First', 'Fast Commerce'],
    '2.4x Higher Footfall',
    true,
    4
)
on conflict do nothing;

-- SEED CLIENTS
insert into public.clients (business_name, contact_name, phone, email, location, package_selected, status, total_billed, notes)
values
('Maa Radio Mart', 'Rajesh Sharma', '+91 98765 43210', 'maaradiomart@gmail.com', 'Gogamukh, Assam', 'Advanced Online Store', 'Active', 44999, 'Flagship store portal + catalog sync'),
('Sharma Medicos', 'Dr. D. Sharma', '+91 94350 12345', 'sharmamedicos@gmail.com', 'Dhemaji, Assam', 'Business Website', 'Active', 18999, 'Pharmacy web presence & SEO ranking'),
('The Beauty Salon & Boutique', 'Priyanka Borah', '+91 70020 98765', 'thebeautysalon@gmail.com', 'North Lakhimpur, Assam', 'Business Website', 'Active', 16999, 'Bridal booking gallery'),
('Style Hub Fashion', 'Bikash Das', '+91 88760 55432', 'stylehub.fashion@gmail.com', 'Guwahati, Assam', 'Basic Website', 'Completed', 7999, 'Fast single-page storefront')
on conflict do nothing;

-- SEED PAYMENTS
insert into public.payments (client_name, project_title, invoice_number, total_amount, paid_amount, due_date, payment_method, status)
values
('Maa Radio Mart', 'Advanced Electronics Catalog', 'INV-2026-001', 44999, 44999, '2026-08-15', 'UPI (Google Pay)', 'Paid'),
('Sharma Medicos', 'Pharmacy Web Platform', 'INV-2026-002', 18999, 15000, '2026-09-30', 'Bank Transfer (NEFT)', 'Partial'),
('The Beauty Salon & Boutique', 'Luxury Salon Presence', 'INV-2026-003', 16999, 16999, '2026-09-10', 'UPI (PhonePe)', 'Paid'),
('Style Hub Fashion', 'Modern Lookbook Site', 'INV-2026-004', 7999, 7999, '2026-07-28', 'UPI', 'Paid')
on conflict do nothing;
