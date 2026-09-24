import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://lgvzjajozqldwodzmrcl.supabase.co';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxndnpqYWpvenFsZHdvZHptcmNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAxNDg1ODIsImV4cCI6MjEwNTcyNDU4Mn0.IAQTV0SUNWICAhJ7aRibvA8tW2qmWmNNVyufQR0mzcc';

export async function GET() {
  return handleSync();
}

export async function POST() {
  return handleSync();
}

async function handleSync() {
  try {
    const supabase = createClient(supabaseUrl, supabaseKey);

    // 1. Fetch live data from Supabase
    const [pRes, cRes, payRes, invRes] = await Promise.all([
      supabase.from('projects').select('*').order('order_index', { ascending: true }),
      supabase.from('clients').select('*').order('created_at', { ascending: false }),
      supabase.from('payments').select('*').order('created_at', { ascending: false }),
      supabase.from('invoices').select('*').order('created_at', { ascending: false }),
    ]);

    const projects = pRes.data || [];
    const clients = cRes.data || [];
    const payments = payRes.data || [];
    const invoices = invRes.data || [];

    // 2. Generate clean TypeScript code for initialData.ts
    const fileContent = `import { Project, Client, Payment, Invoice } from '@/types';

// Auto-synchronized with Supabase database (AvinayStudio)
// Last synced: ${new Date().toISOString()}

export const INITIAL_PROJECTS: Project[] = ${JSON.stringify(projects, null, 2)};

export const INITIAL_CLIENTS: Client[] = ${JSON.stringify(clients, null, 2)};

export const INITIAL_PAYMENTS: Payment[] = ${JSON.stringify(payments, null, 2)};

export const INITIAL_INVOICES: Invoice[] = ${JSON.stringify(invoices, null, 2)};
`;

    // 3. Write directly to src/data/initialData.ts in VS Code workspace
    const filePath = path.join(process.cwd(), 'src', 'data', 'initialData.ts');
    await fs.writeFile(filePath, fileContent, 'utf-8');

    return NextResponse.json({
      success: true,
      message: 'Successfully synchronized Supabase data to VS Code (src/data/initialData.ts)',
      timestamp: new Date().toISOString(),
      counts: {
        projects: projects.length,
        clients: clients.length,
        payments: payments.length,
        invoices: invoices.length,
      },
    });
  } catch (error: any) {
    console.error('Sync API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Unknown error occurred while syncing' },
      { status: 500 }
    );
  }
}
