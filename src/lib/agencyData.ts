import { supabase, isSupabaseConfigured } from './supabase';
import { Project, Client, Payment, Invoice } from '@/types';
import { INITIAL_PROJECTS, INITIAL_CLIENTS, INITIAL_PAYMENTS, INITIAL_INVOICES } from '@/data/initialData';

const LOCAL_STORAGE_KEYS = {
  PROJECTS: 'avinay_studio_projects',
  CLIENTS: 'avinay_studio_clients',
  PAYMENTS: 'avinay_studio_payments',
  INVOICES: 'avinay_studio_invoices',
};

// Check if string is a valid UUID
function isValidUUID(str?: string): boolean {
  if (!str) return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(str);
}

function getLocal<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback;
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch (e) {
    return fallback;
  }
}

function setLocal<T>(key: string, val: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(val));
  } catch (e) {}
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
        setLocal(LOCAL_STORAGE_KEYS.PROJECTS, data);
        return data as Project[];
      }
    } catch (err) {
      console.warn('Supabase fetch projects error:', err);
    }
  }
  return getLocal<Project[]>(LOCAL_STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
}

export async function saveProject(project: Partial<Project> & { id?: string }): Promise<Project> {
  const isExistingUUID = isValidUUID(project.id);
  
  const payload: any = {
    title: project.title || 'Untitled Project',
    client_name: project.client_name || 'Client',
    category: project.category || 'Web Application',
    description: project.description || '',
    image_url: project.image_url || '/images/hero-laptop.jpg',
    live_url: project.live_url || '',
    tags: project.tags || ['Next.js', 'Digital'],
    results_metric: project.results_metric || '',
    featured: project.featured ?? true,
    order_index: project.order_index ?? 99,
  };

  if (isExistingUUID) {
    payload.id = project.id;
  }

  let savedProject: Project = {
    ...payload,
    id: project.id || `proj-${Date.now()}`,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      if (isExistingUUID) {
        const { data, error } = await supabase
          .from('projects')
          .update(payload)
          .eq('id', project.id)
          .select()
          .single();
        if (!error && data) savedProject = data as Project;
        else if (error) console.error('Supabase project update error:', error);
      } else {
        const { data, error } = await supabase
          .from('projects')
          .insert(payload)
          .select()
          .single();
        if (!error && data) savedProject = data as Project;
        else if (error) console.error('Supabase project insert error:', error);
      }
    } catch (err) {
      console.warn('Supabase save project error:', err);
    }
  }

  // Update local storage cache
  const current = getLocal<Project[]>(LOCAL_STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
  const exists = current.findIndex(p => p.id === savedProject.id || (project.id && p.id === project.id));
  let updated: Project[];
  if (exists >= 0) {
    updated = current.map(p => (p.id === current[exists].id ? savedProject : p));
  } else {
    updated = [savedProject, ...current];
  }
  setLocal(LOCAL_STORAGE_KEYS.PROJECTS, updated);
  return savedProject;
}

export async function deleteProject(id: string): Promise<boolean> {
  if (isSupabaseConfigured && isValidUUID(id)) {
    try {
      const { error } = await supabase.from('projects').delete().eq('id', id);
      if (error) console.error('Supabase delete error:', error);
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
        setLocal(LOCAL_STORAGE_KEYS.CLIENTS, data);
        return data as Client[];
      }
    } catch (err) {
      console.warn('Supabase clients error:', err);
    }
  }
  return getLocal<Client[]>(LOCAL_STORAGE_KEYS.CLIENTS, INITIAL_CLIENTS);
}

export async function saveClient(client: Partial<Client> & { id?: string }): Promise<Client> {
  const isExistingUUID = isValidUUID(client.id);

  const payload: any = {
    business_name: client.business_name || 'Business Name',
    contact_name: client.contact_name || 'Contact Person',
    phone: client.phone || '',
    email: client.email || '',
    location: client.location || 'Assam, India',
    package_selected: client.package_selected || 'Business Website',
    status: client.status || 'Active',
    total_billed: client.total_billed || 0,
    notes: client.notes || '',
  };

  if (isExistingUUID) {
    payload.id = client.id;
  }

  let savedClient: Client = {
    ...payload,
    id: client.id || `cli-${Date.now()}`,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      if (isExistingUUID) {
        const { data, error } = await supabase
          .from('clients')
          .update(payload)
          .eq('id', client.id)
          .select()
          .single();
        if (!error && data) savedClient = data as Client;
        else if (error) console.error('Supabase client update error:', error);
      } else {
        const { data, error } = await supabase
          .from('clients')
          .insert(payload)
          .select()
          .single();
        if (!error && data) savedClient = data as Client;
        else if (error) console.error('Supabase client insert error:', error);
      }
    } catch (err) {
      console.warn('Supabase client save error:', err);
    }
  }

  const current = getLocal<Client[]>(LOCAL_STORAGE_KEYS.CLIENTS, INITIAL_CLIENTS);
  const exists = current.findIndex(c => c.id === savedClient.id || (client.id && c.id === client.id));
  const updated = exists >= 0 ? current.map(c => (c.id === current[exists].id ? savedClient : c)) : [savedClient, ...current];
  setLocal(LOCAL_STORAGE_KEYS.CLIENTS, updated);
  return savedClient;
}

// ----------------- PAYMENTS -----------------
export async function fetchPayments(): Promise<Payment[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('payments')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        setLocal(LOCAL_STORAGE_KEYS.PAYMENTS, data);
        return data as Payment[];
      }
    } catch (err) {
      console.warn('Supabase payments error:', err);
    }
  }
  return getLocal<Payment[]>(LOCAL_STORAGE_KEYS.PAYMENTS, INITIAL_PAYMENTS);
}

export async function savePayment(payment: Partial<Payment> & { id?: string }): Promise<Payment> {
  const isExistingUUID = isValidUUID(payment.id);

  const payload: any = {
    client_name: payment.client_name || 'Client',
    project_title: payment.project_title || 'Project Scope',
    invoice_number: payment.invoice_number || `INV-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
    total_amount: Number(payment.total_amount) || 0,
    paid_amount: Number(payment.paid_amount) || 0,
    due_date: payment.due_date || new Date().toISOString().split('T')[0],
    payment_method: payment.payment_method || 'UPI (Google Pay / PhonePe)',
    status: payment.status || 'Pending',
  };

  if (isExistingUUID) {
    payload.id = payment.id;
  }

  let savedPayment: Payment = {
    ...payload,
    id: payment.id || `pay-${Date.now()}`,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      if (isExistingUUID) {
        const { data, error } = await supabase
          .from('payments')
          .update(payload)
          .eq('id', payment.id)
          .select()
          .single();
        if (!error && data) savedPayment = data as Payment;
        else if (error) console.error('Supabase payment update error:', error);
      } else {
        const { data, error } = await supabase
          .from('payments')
          .insert(payload)
          .select()
          .single();
        if (!error && data) savedPayment = data as Payment;
        else if (error) console.error('Supabase payment insert error:', error);
      }
    } catch (err) {
      console.warn('Supabase payment save error:', err);
    }
  }

  const current = getLocal<Payment[]>(LOCAL_STORAGE_KEYS.PAYMENTS, INITIAL_PAYMENTS);
  const exists = current.findIndex(p => p.id === savedPayment.id || (payment.id && p.id === payment.id));
  const updated = exists >= 0 ? current.map(p => (p.id === current[exists].id ? savedPayment : p)) : [savedPayment, ...current];
  setLocal(LOCAL_STORAGE_KEYS.PAYMENTS, updated);
  return savedPayment;
}

// ----------------- INVOICES -----------------
export async function fetchInvoices(): Promise<Invoice[]> {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error && data && data.length > 0) {
        setLocal(LOCAL_STORAGE_KEYS.INVOICES, data);
        return data as Invoice[];
      }
    } catch (err) {
      console.warn('Supabase invoices error:', err);
    }
  }
  return getLocal<Invoice[]>(LOCAL_STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
}

export async function saveInvoice(invoice: Partial<Invoice> & { id?: string }): Promise<Invoice> {
  const isExistingUUID = isValidUUID(invoice.id);

  const payload: any = {
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
    notes: invoice.notes || 'Thank you for choosing AvinayStudio.',
  };

  if (isExistingUUID) {
    payload.id = invoice.id;
  }

  let savedInvoice: Invoice = {
    ...payload,
    id: invoice.id || `inv-${Date.now()}`,
    created_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured) {
    try {
      if (isExistingUUID) {
        const { data, error } = await supabase
          .from('invoices')
          .update(payload)
          .eq('id', invoice.id)
          .select()
          .single();
        if (!error && data) savedInvoice = data as Invoice;
        else if (error) console.error('Supabase invoice update error:', error);
      } else {
        const { data, error } = await supabase
          .from('invoices')
          .insert(payload)
          .select()
          .single();
        if (!error && data) savedInvoice = data as Invoice;
        else if (error) console.error('Supabase invoice insert error:', error);
      }
    } catch (err) {
      console.warn('Supabase invoice save error:', err);
    }
  }

  const current = getLocal<Invoice[]>(LOCAL_STORAGE_KEYS.INVOICES, INITIAL_INVOICES);
  const exists = current.findIndex(i => i.id === savedInvoice.id || (invoice.id && i.id === invoice.id));
  const updated = exists >= 0 ? current.map(i => (i.id === current[exists].id ? savedInvoice : i)) : [savedInvoice, ...current];
  setLocal(LOCAL_STORAGE_KEYS.INVOICES, updated);
  return savedInvoice;
}
