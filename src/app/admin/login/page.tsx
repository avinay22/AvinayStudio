'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { Lock, Mail, ArrowRight, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    // If Supabase configured, attempt Supabase Auth
    if (isSupabaseConfigured) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (!error && data.session) {
          localStorage.setItem('avinay_studio_auth', 'true');
          localStorage.setItem('avinay_studio_user', email);
          router.push('/admin');
          return;
        } else if (error) {
          // If auth fails, allow founder demo fallback if matching credentials
          if (email === 'sharmaavinay0@gmail.com' && password === 'avinay2026') {
            localStorage.setItem('avinay_studio_auth', 'true');
            localStorage.setItem('avinay_studio_user', email);
            router.push('/admin');
            return;
          }
          setErrorMsg(error.message || 'Invalid credentials');
        }
      } catch (err: any) {
        setErrorMsg(err.message || 'Authentication error');
      }
    } else {
      // Local demo mode credentials
      if (email === 'sharmaavinay0@gmail.com' && password === 'avinay2026') {
        localStorage.setItem('avinay_studio_auth', 'true');
        localStorage.setItem('avinay_studio_user', email);
        router.push('/admin');
        return;
      } else {
        setErrorMsg('Invalid demo credentials. Use the Demo Login button below.');
      }
    }

    setLoading(false);
  };

  const handleQuickDemoLogin = () => {
    localStorage.setItem('avinay_studio_auth', 'true');
    localStorage.setItem('avinay_studio_user', 'sharmaavinay0@gmail.com');
    router.push('/admin');
  };

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-[#C5A880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-md w-full relative z-10">
        
        {/* Brand Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-3 group mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#141418] border border-[#C5A880]/30 flex items-center justify-center text-[#DFC08F] font-bold text-xl group-hover:border-[#C5A880] transition-colors shadow-lg">
              AS
            </div>
            <div className="text-left">
              <div className="text-xl font-bold tracking-tight text-[#F5F2ED] font-['Outfit']">
                AvinayStudio
              </div>
              <div className="text-[10px] tracking-widest text-[#B8B3AB] uppercase font-semibold">
                Admin Control Suite
              </div>
            </div>
          </Link>
          <p className="text-xs text-[#B8B3AB]">
            Secure portal for project CMS, client CRM, payments, and PDF invoicing.
          </p>
        </div>

        {/* Login Card */}
        <div className="p-8 rounded-2xl bg-[#0D0D12] border border-[#D4C5B9]/15 shadow-2xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#DFC08F] mb-6">
            <ShieldCheck className="w-4 h-4" />
            <span>Admin Authentication</span>
          </div>

          {errorMsg && (
            <div className="p-3 mb-6 rounded-xl bg-[#1A1111] border border-[#552222] text-xs text-[#E8DFD8] flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-[#DFC08F] shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B8B3AB] font-semibold mb-2">
                Founder Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#75716B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sharmaavinay0@gmail.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#14141A] border border-[#D4C5B9]/15 text-[#F5F2ED] placeholder-[#75716B] text-sm focus:outline-none focus:border-[#DFC08F] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-[#B8B3AB] font-semibold mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#75716B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#14141A] border border-[#D4C5B9]/15 text-[#F5F2ED] placeholder-[#75716B] text-sm focus:outline-none focus:border-[#DFC08F] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#DFC08F] hover:bg-[#E8DFD8] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 mt-2"
            >
              {loading ? 'Authenticating...' : 'Sign In as Admin'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Access Button */}
          <div className="mt-6 pt-6 border-t border-[#D4C5B9]/10">
            <button
              type="button"
              onClick={handleQuickDemoLogin}
              className="w-full py-3 rounded-xl text-xs font-semibold text-[#DFC08F] bg-[#14141C] hover:bg-[#1A1A24] border border-[#C5A880]/30 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              One-Click Instant Founder Login (Demo)
            </button>
            <p className="text-[11px] text-[#75716B] text-center mt-2">
              Default password: <span className="font-mono text-[#B8B3AB]">avinay2026</span>
            </p>
          </div>
        </div>

        {/* Back Link */}
        <div className="text-center mt-6">
          <Link href="/" className="text-xs text-[#75716B] hover:text-[#DFC08F] transition-colors">
            ← Return to Public Portfolio
          </Link>
        </div>

      </div>
    </div>
  );
}
