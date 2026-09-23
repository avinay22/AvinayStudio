'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, Send, CheckCircle2, Clock, MapPin } from 'lucide-react';
import { saveClient } from '@/lib/agencyData';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    business: '',
    package: 'Business Website',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitting(true);

    try {
      await saveClient({
        business_name: formData.business || formData.name,
        contact_name: formData.name,
        phone: formData.phone,
        package_selected: formData.package,
        status: 'Lead',
        notes: `Inquiry message: ${formData.message}`,
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Failed to submit inquiry:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#08080A] border-t border-[#D4C5B9]/10 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/4 w-[450px] h-[450px] bg-[#C5A880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Direct Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121216] border border-[#C5A880]/30 text-xs uppercase tracking-widest text-[#DFC08F] font-semibold mb-4">
                Let’s Collaborate
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F2ED] font-['Outfit'] mb-6 leading-tight">
                Ready to Bring <br />
                <span className="gold-gradient-text">More Customers</span> to Your Business?
              </h2>

              <p className="text-base text-[#B8B3AB] leading-relaxed mb-8">
                Reach out directly to Avinay. Whether you need a brand-new website, an e-commerce catalogue, or a complete digital overhaul, we are ready to build it.
              </p>

              {/* Strict Contact Details */}
              <div className="space-y-4 mb-8">
                {/* Phone (Strict requirement: +91 7896554039) */}
                <a
                  href="tel:+917896554039"
                  className="p-4 rounded-xl bg-[#0E0E12] border border-[#D4C5B9]/15 hover:border-[#C5A880]/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#16161C] border border-[#C5A880]/30 flex items-center justify-center text-[#DFC08F] group-hover:bg-[#DFC08F] group-hover:text-[#050505] transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#75716B] font-semibold">
                      Direct Phone
                    </div>
                    <div className="text-base font-bold text-[#F5F2ED] font-mono group-hover:text-[#DFC08F] transition-colors">
                      +91 7896554039
                    </div>
                  </div>
                </a>

                {/* Email (Strict requirement: sharmaavinay0@gmail.com) */}
                <a
                  href="mailto:sharmaavinay0@gmail.com"
                  className="p-4 rounded-xl bg-[#0E0E12] border border-[#D4C5B9]/15 hover:border-[#C5A880]/50 transition-all flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-[#16161C] border border-[#C5A880]/30 flex items-center justify-center text-[#DFC08F] group-hover:bg-[#DFC08F] group-hover:text-[#050505] transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#75716B] font-semibold">
                      Direct Email
                    </div>
                    <div className="text-base font-bold text-[#F5F2ED] group-hover:text-[#DFC08F] transition-colors">
                      sharmaavinay0@gmail.com
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="p-4 rounded-xl bg-[#0E0E12] border border-[#D4C5B9]/15 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#16161C] border border-[#C5A880]/30 flex items-center justify-center text-[#DFC08F]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[#75716B] font-semibold">
                      Base Location
                    </div>
                    <div className="text-sm font-bold text-[#F5F2ED]">
                      Assam, India • Serving Clients Worldwide
                    </div>
                  </div>
                </div>
              </div>

              {/* Strict WhatsApp CTA Button */}
              <a
                href="https://wa.me/917896554039?text=Hi%20Avinay,%20I'd%20like%20to%20discuss%20a%20project%20with%20AvinayStudio."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#DFC08F] hover:bg-[#E8DFD8] transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(223,192,143,0.3)] transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp Now
              </a>
            </div>

            {/* Quick Note */}
            <div className="mt-8 flex items-center gap-2 text-xs text-[#75716B]">
              <Clock className="w-3.5 h-3.5 text-[#DFC08F]" />
              <span>We typically reply in 15–30 minutes during business hours.</span>
            </div>
          </div>

          {/* Right Column: Direct Fast Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#0E0E13] border border-[#D4C5B9]/15 shadow-2xl">
              <h3 className="text-2xl font-bold text-[#F5F2ED] mb-2 font-['Outfit']">
                Send a Direct Project Inquiry
              </h3>
              <p className="text-xs text-[#B8B3AB] mb-8">
                Fill this out and Avinay will personally review your business requirements and reply with a strategic proposal.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#181820] border-2 border-[#DFC08F] flex items-center justify-center mx-auto text-[#DFC08F]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#F5F2ED] font-['Outfit']">
                    Inquiry Received Successfully!
                  </h4>
                  <p className="text-sm text-[#B8B3AB] max-w-md mx-auto">
                    Thank you! Avinay will call or WhatsApp you shortly at <span className="text-[#DFC08F]">{formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', phone: '', business: '', package: 'Business Website', message: '' });
                    }}
                    className="text-xs text-[#DFC08F] underline hover:text-[#E8DFD8]"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3AB] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className="w-full px-4 py-3 rounded-xl bg-[#14141A] border border-[#D4C5B9]/15 text-[#F5F2ED] placeholder-[#75716B] text-sm focus:outline-none focus:border-[#DFC08F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3AB] mb-2">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#14141A] border border-[#D4C5B9]/15 text-[#F5F2ED] placeholder-[#75716B] text-sm focus:outline-none focus:border-[#DFC08F] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3AB] mb-2">
                        Business or Brand Name
                      </label>
                      <input
                        type="text"
                        value={formData.business}
                        onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                        placeholder="e.g. Maa Radio / Sharma Medicos"
                        className="w-full px-4 py-3 rounded-xl bg-[#14141A] border border-[#D4C5B9]/15 text-[#F5F2ED] placeholder-[#75716B] text-sm focus:outline-none focus:border-[#DFC08F] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3AB] mb-2">
                        Desired Package
                      </label>
                      <select
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#14141A] border border-[#D4C5B9]/15 text-[#F5F2ED] text-sm focus:outline-none focus:border-[#DFC08F] transition-colors"
                      >
                        <option value="Basic Website (₹7,999)">Basic Website (₹7,999)</option>
                        <option value="Business Website (₹14,999 – ₹19,999)">Business Website (₹14,999 – ₹19,999)</option>
                        <option value="Advanced Online Store (₹39,999 – ₹49,999)">Advanced Online Store (₹39,999 – ₹49,999)</option>
                        <option value="Custom Project Scope">Custom Project Scope</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[#B8B3AB] mb-2">
                      Tell us about your goals & requirements
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe what your business sells, your current setup, or any reference websites you like..."
                      className="w-full px-4 py-3 rounded-xl bg-[#14141A] border border-[#D4C5B9]/15 text-[#F5F2ED] placeholder-[#75716B] text-sm focus:outline-none focus:border-[#DFC08F] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#DFC08F] hover:bg-[#E8DFD8] transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                  >
                    {submitting ? 'Sending Request...' : 'Submit Project Inquiry'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
