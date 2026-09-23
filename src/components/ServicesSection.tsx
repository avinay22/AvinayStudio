'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Briefcase, ShoppingBag, ArrowRight, Check } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      id: 'basic',
      icon: Layout,
      title: 'Basic Website',
      subtitle: 'Fast, sleek, single-page presence',
      description: 'Ideal for small local establishments wanting an instant digital identity, mobile speed, and direct WhatsApp customer inquiries.',
      points: [
        'Single-page modern showcase',
        'Mobile-first responsive architecture',
        'Instant WhatsApp chat integration',
        'Google Maps & basic local indexing',
      ],
      tag: 'Starter Tier',
      popular: false,
    },
    {
      id: 'business',
      icon: Briefcase,
      title: 'Business Website',
      subtitle: 'High-authority multi-page platform',
      description: 'Engineered for growing businesses wanting to outshine competitors, rank on Google Search, and convert visitors into high-paying clients.',
      points: [
        'Multi-page custom brand architecture',
        'Google SEO & local visibility strategy',
        'Interactive inquiry & lead capture engine',
        'Fast CDN hosting & performance optimization',
      ],
      tag: 'Most Popular',
      popular: true,
    },
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      title: 'Advanced Online Store',
      subtitle: 'Full-featured digital sales powerhouse',
      description: 'Complete e-commerce & catalogue system with automated inventory sync, payment gateway integration, and WhatsApp order checkout.',
      points: [
        'Dynamic product catalogue & filters',
        'Online payment gateways (UPI, Cards, Netbanking)',
        'Admin dashboard to manage products & stock',
        'Order tracking & automated WhatsApp notifications',
      ],
      tag: 'Enterprise & Retail',
      popular: false,
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121216] border border-[#C5A880]/30 text-xs uppercase tracking-widest text-[#DFC08F] font-semibold mb-4">
            Tailored Engineering
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F2ED] font-['Outfit'] mb-4">
            Services Built For <span className="gold-gradient-text">Real Results</span>
          </h2>
          <p className="text-base text-[#B8B3AB]">
            No fluff. No bloated code. Just clean, conversion-focused digital systems designed to bring paying customers to your doorstep.
          </p>
        </div>

        {/* 3 Service Cards (Strict requirement) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  service.popular
                    ? 'bg-[#121217] border-2 border-[#DFC08F]/50 shadow-[0_0_40px_rgba(197,168,128,0.12)]'
                    : 'bg-[#0E0E12] border border-[#D4C5B9]/10 hover:border-[#C5A880]/30'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#DFC08F] text-[#050505] text-[11px] font-extrabold uppercase tracking-widest shadow-md">
                    Recommended Choice
                  </div>
                )}

                <div>
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#181820] border border-[#C5A880]/25 flex items-center justify-center text-[#DFC08F]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-[#B8B3AB] bg-[#16161C] px-3 py-1 rounded-md border border-[#D4C5B9]/10">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-[#F5F2ED] mb-2 font-['Outfit']">
                    {service.title}
                  </h3>
                  <div className="text-xs text-[#DFC08F] font-medium mb-4">
                    {service.subtitle}
                  </div>

                  {/* Short impactful description (Strict requirement) */}
                  <p className="text-sm text-[#B8B3AB] leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 pt-6 border-t border-[#D4C5B9]/10 mb-8">
                    {service.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#E8DFD8]">
                        <Check className="w-4 h-4 text-[#DFC08F] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <a
                  href={`https://wa.me/917896554039?text=Hi%20Avinay,%20I'm%20interested%20in%20the%20${encodeURIComponent(service.title)}%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-2 ${
                    service.popular
                      ? 'bg-[#DFC08F] text-[#050505] hover:bg-[#E8DFD8]'
                      : 'bg-[#181820] text-[#E8DFD8] hover:bg-[#20202A] border border-[#D4C5B9]/15'
                  }`}
                >
                  Select This Package
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
