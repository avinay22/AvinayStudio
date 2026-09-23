import { Project, Client, Payment, Invoice } from '@/types';

export const INITIAL_PROJECTS: Project[] = [
  {
    id: 'proj-1',
    title: 'Maa Radio Mart',
    client_name: 'Maa Radio Mart',
    category: 'Electronics & Commerce',
    description: 'High-performance digital catalogue for eastern Assam’s premier electronics and gadget retail brand. Engineered with seamless WhatsApp inquiry checkout and high local SEO reach.',
    image_url: '/images/maa-radio-store.png',
    live_url: 'http://localhost:3000',
    tags: ['Next.js', 'E-Commerce', 'Assam', 'WhatsApp API'],
    results_metric: '300+ Monthly Inquiries',
    featured: true,
    order_index: 1,
  },
  {
    id: 'proj-2',
    title: 'Sharma Medicos & Healthcare',
    client_name: 'Sharma Medicos',
    category: 'Healthcare & Pharmacy',
    description: 'Clean, trust-first pharmaceutical platform allowing patients to check genuine medicine stock, request prescription orders, and schedule verified health consultations.',
    image_url: '/images/hero-laptop.jpg',
    live_url: '#',
    tags: ['Healthcare', 'Local SEO', 'Prescription Hub'],
    results_metric: 'Top 3 Google Search Rank',
    featured: true,
    order_index: 2,
  },
  {
    id: 'proj-3',
    title: 'The Beauty Salon & Boutique',
    client_name: 'The Beauty Salon & Boutique',
    category: 'Salon & Bridal Studio',
    description: 'High-end visual showcase for premium bridal packages, hair artistry, and direct booking slots with luxury warm-gold visual aesthetics.',
    image_url: '/images/about-avinay.png',
    live_url: '#',
    tags: ['Luxury Brand', 'Bridal Gallery', 'Appointment Engine'],
    results_metric: '4.9★ Brand Reputation',
    featured: true,
    order_index: 3,
  },
  {
    id: 'proj-4',
    title: 'Style Hub Apparel',
    client_name: 'Style Hub',
    category: 'Fashion & Retail',
    description: 'Dynamic fashion lookbook with instant social commerce integration, optimized for lightning-fast mobile loading across 4G and 5G networks.',
    image_url: '/images/hero-laptop.jpg',
    live_url: '#',
    tags: ['Fashion', 'Mobile First', 'Conversion UI'],
    results_metric: '2.4x Footfall Boost',
    featured: true,
    order_index: 4,
  }
];

export const INITIAL_CLIENTS: Client[] = [
  {
    id: 'cli-1',
    business_name: 'Maa Radio Mart',
    contact_name: 'Rajesh Sharma',
    phone: '+91 98765 43210',
    email: 'maaradiomart@gmail.com',
    location: 'Gogamukh, Assam',
    package_selected: 'Advanced Online Store',
    status: 'Active',
    total_billed: 44999,
    notes: 'Primary electronics dealer. Complete catalog synced.'
  },
  {
    id: 'cli-2',
    business_name: 'Sharma Medicos',
    contact_name: 'Dr. D. Sharma',
    phone: '+91 94350 12345',
    email: 'sharmamedicos@gmail.com',
    location: 'Dhemaji, Assam',
    package_selected: 'Business Website',
    status: 'Active',
    total_billed: 18999,
    notes: 'Pharmacy prescription inquiries & local SEO.'
  },
  {
    id: 'cli-3',
    business_name: 'The Beauty Salon & Boutique',
    contact_name: 'Priyanka Borah',
    phone: '+91 70020 98765',
    email: 'thebeautysalon@gmail.com',
    location: 'North Lakhimpur, Assam',
    package_selected: 'Business Website',
    status: 'Active',
    total_billed: 16999,
    notes: 'Bridal salon booking platform.'
  },
  {
    id: 'cli-4',
    business_name: 'Style Hub Fashion',
    contact_name: 'Bikash Das',
    phone: '+91 88760 55432',
    email: 'stylehub.fashion@gmail.com',
    location: 'Guwahati, Assam',
    package_selected: 'Basic Website',
    status: 'Completed',
    total_billed: 7999,
    notes: 'Landing page + product showcase.'
  }
];

export const INITIAL_PAYMENTS: Payment[] = [
  {
    id: 'pay-1',
    client_name: 'Maa Radio Mart',
    project_title: 'Advanced Online Store & Catalog',
    invoice_number: 'INV-2026-001',
    total_amount: 44999,
    paid_amount: 44999,
    due_date: '2026-08-15',
    payment_method: 'UPI (Google Pay)',
    status: 'Paid'
  },
  {
    id: 'pay-2',
    client_name: 'Sharma Medicos',
    project_title: 'Business Website & Google Presence',
    invoice_number: 'INV-2026-002',
    total_amount: 18999,
    paid_amount: 15000,
    due_date: '2026-09-30',
    payment_method: 'Bank Transfer (NEFT)',
    status: 'Partial'
  },
  {
    id: 'pay-3',
    client_name: 'The Beauty Salon & Boutique',
    project_title: 'Luxury Bridal Studio Showcase',
    invoice_number: 'INV-2026-003',
    total_amount: 16999,
    paid_amount: 16999,
    due_date: '2026-09-10',
    payment_method: 'UPI (PhonePe)',
    status: 'Paid'
  },
  {
    id: 'pay-4',
    client_name: 'Style Hub Fashion',
    project_title: 'Starter Single-Page Experience',
    invoice_number: 'INV-2026-004',
    total_amount: 7999,
    paid_amount: 7999,
    due_date: '2026-07-28',
    payment_method: 'UPI',
    status: 'Paid'
  }
];

export const INITIAL_INVOICES: Invoice[] = [
  {
    id: 'inv-1',
    invoice_number: 'INV-2026-001',
    client_name: 'Maa Radio Mart',
    client_phone: '+91 98765 43210',
    client_email: 'maaradiomart@gmail.com',
    client_address: 'Main Road, Gogamukh, Dhemaji, Assam 787056',
    issue_date: '2026-08-01',
    due_date: '2026-08-15',
    items: [
      { description: 'Full-Stack Electronics Catalog & CMS Portal', quantity: 1, rate: 35000, amount: 35000 },
      { description: 'WhatsApp Order Integration & Cloudinary Asset Engine', quantity: 1, rate: 5000, amount: 5000 },
      { description: 'High-Impact Local SEO & Google Business Setup', quantity: 1, rate: 4999, amount: 4999 }
    ],
    subtotal: 44999,
    discount: 0,
    total_amount: 44999,
    status: 'Paid',
    notes: 'Paid in full via UPI. Deployment and hosting managed by AvinayStudio.'
  },
  {
    id: 'inv-2',
    invoice_number: 'INV-2026-002',
    client_name: 'Sharma Medicos',
    client_phone: '+91 94350 12345',
    client_email: 'sharmamedicos@gmail.com',
    client_address: 'Court Road, Dhemaji, Assam 787057',
    issue_date: '2026-09-01',
    due_date: '2026-09-30',
    items: [
      { description: 'Healthcare & Pharmacy Website Development', quantity: 1, rate: 15000, amount: 15000 },
      { description: 'Prescription Upload Query System', quantity: 1, rate: 3999, amount: 3999 }
    ],
    subtotal: 18999,
    discount: 0,
    total_amount: 18999,
    status: 'Issued',
    notes: 'Advance ₹15,000 received. Balance ₹3,999 due upon final domain handoff.'
  }
];
