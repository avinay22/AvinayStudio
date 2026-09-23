'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, Users, TrendingUp } from 'lucide-react';

export default function TrustSection() {
  const clients = [
    {
      name: 'Maa Radio Mart',
      type: 'Electronics & Retail Store',
      location: 'Gogamukh, Assam',
      highlight: 'Full Digital Catalog & WhatsApp Connect',
    },
    {
      name: 'Sharma Medicos',
      type: 'Healthcare & Pharmacy Portal',
      location: 'Dhemaji, Assam',
      highlight: 'Google Search Top Ranking & Prescription Lead Hub',
    },
    {
      name: 'The Beauty Parlour',
      type: 'Luxury Salon & Bridal Boutique',
      location: 'North Lakhimpur, Assam',
      highlight: 'Bridal Package Showcase & Direct Booking Engine',
    },
    {
      name: 'Style Hub',
      type: 'Apparel & Trends Lookbook',
      location: 'Assam',
      highlight: 'Mobile-First Fast Social Commerce',
    },
  ];

  return (
    <section id="trust" className="py-20 bg-[#08080A] border-y border-[#D4C5B9]/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#DFC08F] font-semibold mb-2">
              <Award className="w-3.5 h-3.5" />
              Proven Local Credibility
            </div>
            {/* Strict requirement headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F5F2ED] font-['Outfit']">
              Worked with local businesses in Assam
            </h2>
          </div>
          <p className="text-sm text-[#B8B3AB] max-w-md">
            Real commercial track record delivering measurable sales inquiries and high-converting websites for trusted regional brands.
          </p>
        </div>

        {/* Client Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-[#0F0F13] border border-[#D4C5B9]/10 hover:border-[#C5A880]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded bg-[#16161C] text-[#DFC08F] border border-[#C5A880]/20">
                  {client.location}
                </span>
                <span className="text-xs text-[#75716B] font-mono">0{index + 1}</span>
              </div>

              <h3 className="text-lg font-bold text-[#F5F2ED] group-hover:text-[#DFC08F] transition-colors mb-1 font-['Outfit']">
                {client.name}
              </h3>
              
              <div className="text-xs text-[#B8B3AB] mb-4">
                {client.type}
              </div>

              <div className="pt-3 border-t border-[#D4C5B9]/10 text-xs text-[#DFC08F] font-medium flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 shrink-0" />
                <span>{client.highlight}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-12 pt-8 border-t border-[#D4C5B9]/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#DFC08F] font-['Outfit']">100%</div>
            <div className="text-xs text-[#B8B3AB] mt-1">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#DFC08F] font-['Outfit']">&lt; 7 Days</div>
            <div className="text-xs text-[#B8B3AB] mt-1">Typical Launch Turnaround</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#DFC08F] font-['Outfit']">3.5x</div>
            <div className="text-xs text-[#B8B3AB] mt-1">Average Inquiry Growth</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-[#DFC08F] font-['Outfit']">24/7</div>
            <div className="text-xs text-[#B8B3AB] mt-1">Assam-Based Direct Support</div>
          </div>
        </div>

      </div>
    </section>
  );
}
