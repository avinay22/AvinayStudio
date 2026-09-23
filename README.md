# AvinayStudio • Agency Portfolio & Operations Suite

> **“We Build Digital Presence That Brings Customers”**  
> *Tagline: Build • Create • Grow*

AvinayStudio is a bespoke, cinematic dark-themed agency portfolio platform engineered with Next.js, Tailwind CSS, Framer Motion, and a Supabase-powered Admin Operations Suite.

---

## 🎨 Key Features

- **Cinematic Visual Identity**: Rich dark theme (`#050505`, charcoal, warm beige, and subtle gold accents).
- **Hero & About Visual Blending**: Ambient backlight halo, radial vignette, and custom responsive frame blending.
- **Agency Showcase**:
  - Hero Section with high-conversion messaging
  - Trust section highlighting regional commercial projects in Assam (Maa Radio Mart, Sharma Medicos, The Beauty Parlour, Style Hub)
  - 3 Core Services (Basic Website, Business Website, Advanced Online Store)
  - Founder Story & Direct Access
  - Portfolio Case Studies Gallery with live filters
  - Transparent Pricing (₹7,999 / ₹14,999–₹19,999 / ₹39,999–₹49,999)
  - 4-Step Delivery Process
  - Direct WhatsApp & Inquiry Conversion Engine
- **Admin Control Suite (`/admin`)**:
  - Supabase Authentication
  - Portfolio CMS (Full Add/Edit/Delete CRUD)
  - Client Directory & CRM with instant WhatsApp chat trigger
  - Payment & Milestone Tracking
  - Dynamic Invoice Builder & Instant Branded PDF Download

---

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Database & Auth**: Supabase
- **Invoicing**: jsPDF

---

## 🚀 Getting Started

1. **Clone repository**:
   ```bash
   git clone https://github.com/avinay22/AvinayStudio.git
   cd AvinayStudio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Create `.env.local` and add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser.
