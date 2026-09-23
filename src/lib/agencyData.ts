import { supabase, isSupabaseConfigured } from './supabase';
import { Project, Client, Payment, Invoice } from '@/types';
import { INITIAL_PROJECTS, INITIAL_CLIENTS, INITIAL_PAYMENTS, INITIAL_INVOICES } from '@/data/initialData';

const LOCAL_STORAGE_KEYS = {
  PROJECTS: 'avinay_studio_projects',
  CLIENTS: 'avinay_studio_clients',
  PAYMENTS: 'avinay_studio_payments',
  INVOICES: 'avinay_studio_invoices',
  AUTH: 'avinay_studio_auth',
};

// Helper for local storage
function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    console.error('LocalStorage get error', e);
    return fallback;
  }
}

function setLocal<T>(key: string, val: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {
    console.error('LocalStorage set error', e);
  }
}

// ----------------- PROJECTS -----------------
export async function fetchProjects(): Promise<Project[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('order_index', { ascending: true });
      if (!error && data && data.length > 0) {
        return data as Project[];
      }
    } catch (err) {
      console.warn('Supabase fetch projects error, falling back:', err);
    }
  }
  return getLocal<Project[]>(LOCAL_STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
}

export async function saveProject(project: Partial<Project> & { id?: string }): Promise<Project> {
  const newProject: Project = {
    id: project.id || `proj-${Date.now()}`,
    title: project.title || 'Untitled Project',
    client_name: project.client_name || 'Client',
    category: project.category || 'Web Application',
    description: project.description || '',
    image_url: project.image_url || '/images/hero-laptop.jpg',
    live_url: project.live_url || '#',
    tags: project.tags || ['Next.js', 'Digital'],
    results_metric: project.results_metric || '',
    featured: project.featured ?? true,
    order_index: project.order_index ?? 99,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('projects')
        .upsert(newProject)
        .select()
        .single();
      if (!error && data) {
        return data as Project;
      }
    } catch (err) {
      console.warn('Supabase save project error, saving locally:', err);
    }
  }

  // Local storage fallback
  const current = getLocal<Project[]>(LOCAL_STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
  const exists = current.findIndex(p => p.id === newProject.id);
  let updated: Project[];
  if (exists >= 0) {
    updated = current.map(p => (p.id === newProject.id ? { ...p, ...newProject } : p));
  } else {
    updated = [newProject, ...current];
  }
  setLocal(LOCAL_STORAGE_KEYS.PROJECTS, updated);
  return newProject;
}

export async function deleteProject(id: string): Promise<boolean> {
  if (isSupabaseConfigured) {
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (!error) return true;
    } catch (err) {
      console.warn('Supabase delete error:', err);
    }
  }
  const current = getLocal<Project[]>(LOCAL_STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
  const updated = current.filter(p => p.id !== id);
  setLocal(LOCAL_STORAGE_KEYS.PROJECTS, updated);
  return true;
}

// ----------------- CLIENTS -----------------
export async function fetchClients(): Promise<Client[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('clients')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        return data as Client[];
      }
    } catch (err) {
      console.warn('Supabase clients error:', err);
    }
  }
  return getLocal<Client[]>(LOCAL_STORAGE_KEYS.CLIENTS, INITIAL_CLIENTS);
}

export async function saveClient(client: Partial<Client> & { id?: string }): Promise<Client> {
  const newClient: Client = {
    id: client.id || `cli-${Date.now()}`,
    business_name: client.business_name || 'Business Name',
    contact_name: client.contact_name || 'Contact Person',
    phone: client.phone || '',
    email: client.email || '',
    location: client.location || 'Assam, India',
    package_selected: client.package_selected || 'Business Website',
    status: client.status || 'Active',
    total_billed: client.total_billed || 0,
    notes: client.notes || '',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('clients').upsert(newClient).select().single();
      if (!error && data) return data as Client;
    } catch (err) {
      console.warn('Supabase client save error:', err);
    }
  }

  const current = getLocal<Client[]>(LOCAL_STORAGE_KEYS.CLIENTS, INITIAL_CLIENTS);
  const exists = current.findIndex(c => c.id === newClient.id);
  const updated = exists >= 0 ? current.map(c => (c.id === newClient.id ? newClient : c)) : [newClient, ...current];
  setLocal(LOCAL_STORAGE_KEYS.CLIENTS, updated);
  return newClient;
}

// ----------------- PAYMENTS -----------------
export async function fetchPayments(): Promise<Payment[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('payments').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data as Payment[];
    } catch (err) {
      console.warn('Supabase payments error:', err);
    }
  }
  return getLocal<Payment[]>(LOCAL_STORAGE_KEYS.PAYMENTS, INITIAL_PAYMENTS);
}

export async function savePayment(payment: Partial<Payment> & { id?: string }): Promise<Payment> {
  const newPayment: Payment = {
    id: payment.id || `pay-${Date.now()}`,
    client_name: payment.client_name || 'Client',
    project_title: payment.project_title || 'Project Scope',
    invoice_number: payment.invoice_number || `INV-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    total_amount: Number(payment.total_amount) || 0,
    paid_amount: Number(payment.paid_amount) || 0,
    due_date: payment.due_date || new Date().toISOString().split('T')[0],
    payment_method: payment.payment_method || 'UPI (Google Pay / PhonePe)',
    status: payment.status || 'Pending',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('payments').upsert(newPayment).select().single();
      if (!error && data) return data as Payment;
    } catch (err) {
      console.warn('Supabase payment save error:', err);
    }
  }

  const current = getLocal<Payment[]>(LOCAL_STORAGE_KEYS.PAYMENTS, INITIAL_PAYMENTS);
  const exists = current.findIndex(p => p.id === newPayment.id);
  const updated = exists >= 0 ? current.map(p => (p.id === newPayment.id ? newPayment : p)) : [newPayment, ...current];
  setLocal(LOCAL_STORAGE_KEYS.PAYMENTS, updated);
  return newPayment;
}

// ----------------- INVOICES -----------------
export async function fetchInvoices(): Promise<Invoice[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('invoices').select('*').order('created_at', { ascending: false });
      if (!error && data && data.length > 0) return data as Invoice[];
    } catch (err) {
      console.warn('Supabase invoices error:', err);
    }
  }
  return getLocal<Invoice[]>(LOCAL_STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
}

export async function saveInvoice(invoice: Partial<Invoice> & { id?: string }): Promise<Invoice> {
  const newInvoice: Invoice = {
    id: invoice.id || `inv-${Date.now()}`,
    invoice_number: invoice.invoice_number || `INV-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    client_name: invoice.client_name || 'Valued Client',
    client_phone: invoice.client_phone || '',
    client_email: invoice.client_email || '',
    client_address: invoice.client_address || 'Assam, India',
    issue_date: invoice.issue_date || new Date().toISOString().split('T')[0],
    due_date: invoice.due_date || new Date(Date.now() + 14 * 86400000).toISOString().split('T')[0],
    items: invoice.items || [{ description: 'Web Development Services', quantity: 1, rate: 15000, amount: 15000 }],
    subtotal: Number(invoice.subtotal) || 15000,
    discount: Number(invoice.discount) || 0,
    total_amount: Number(invoice.total_amount) || 15000,
    status: invoice.status || 'Issued',
    notes: invoice.notes || 'Thank you for partnering with AvinayStudio. Bank Transfer / UPI details on invoice.',
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('invoices').upsert(newInvoice).select().single();
      if (!error && data) return data as Invoice;
    } catch (err) {
      console.warn('Supabase invoice save error:', err);
    }
  }

  const current = getLocal<Invoice[]>(LOCAL_STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
  const exists = current.findIndex(i => i.id === newInvoice.id);
  const updated = exists >= 0 ? current.map(i => (i.id === newInvoice.id ? newInvoice : i)) : [newInvoice, ...current];
  setLocal(LOCAL_STORAGE_KEYS.INVOICES, updated);
  return newInvoice;
}
