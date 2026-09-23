export interface Project {
  id: string;
  title: string;
  client_name: string;
  category: string;
  description: string;
  image_url: string;
  live_url?: string;
  tags: string[];
  results_metric?: string;
  featured: boolean;
  order_index: number;
  created_at?: string;
}

export interface Client {
  id: string;
  business_name: string;
  contact_name: string;
  phone: string;
  email?: string;
  location: string;
  package_selected: string;
  status: 'Lead' | 'In Progress' | 'Active' | 'Completed';
  total_billed: number;
  notes?: string;
  created_at?: string;
}

export interface Payment {
  id: string;
  client_id?: string;
  client_name: string;
  project_title: string;
  invoice_number: string;
  total_amount: number;
  paid_amount: number;
  due_date: string;
  payment_method: string;
  status: 'Paid' | 'Partial' | 'Pending';
  created_at?: string;
}

export interface InvoiceItem {
  description: string;
  quantity: number;
  rate: number;
  amount: number;
}

export interface Invoice {
  id: string;
  invoice_number: string;
  client_name: string;
  client_phone?: string;
  client_email?: string;
  client_address?: string;
  issue_date: string;
  due_date: string;
  items: InvoiceItem[];
  subtotal: number;
  discount: number;
  total_amount: number;
  status: 'Draft' | 'Issued' | 'Paid' | 'Cancelled';
  notes?: string;
  created_at?: string;
}
