'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowDown, MessageCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Cinematic Radial Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#C5A880]/10 blur-[130px]" />
        <div className="absolute bottom-10 left-10 w-[400px] h-[400px] rounded-full bg-[#18181D]/60 blur-[100px]" />
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #DFC08F 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121216] border border-[#C5A880]/30 mb-6 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#DFC08F] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#DFC08F] font-semibold">
                Available for New Projects • Assam & Beyond
              </span>
            </div>

            {/* Bold Headline (Strict requirement) */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F2ED] leading-[1.1] mb-6 font-['Outfit']">
              We Build <span className="gold-gradient-text">Digital Presence</span> That Brings Customers
            </h1>

            {/* Subtext (Strict requirement) */}
            <p className="text-lg sm:text-xl text-[#B8B3AB] max-w-2xl font-normal leading-relaxed mb-8">
              Websites. Content. Growth. Everything your business needs.
            </p>

            {/* CTA Buttons: View Work & Contact Now (Strict requirement) */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#050505] bg-[#DFC08F] hover:bg-[#E8DFD8] transition-all transform hover:-translate-y-0.5 shadow-[0_0_25px_rgba(223,192,143,0.35)]"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider text-[#F5F2ED] bg-[#121216] hover:bg-[#18181D] border border-[#D4C5B9]/20 hover:border-[#DFC08F]/50 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Contact Now
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="mt-10 pt-8 border-t border-[#D4C5B9]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-[#B8B3AB]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC08F] shrink-0" />
                <span>100% Custom Tailored</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC08F] shrink-0" />
                <span>Fast WhatsApp Inquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC08F] shrink-0" />
                <span>Guaranteed Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Hero Laptop Image with Cinematic Blending */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Ambient Outer Halo */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-[#DFC08F]/15 via-transparent to-transparent blur-2xl opacity-70" />

            {/* Cinematic Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-[#D4C5B9]/15 shadow-2xl shadow-black bg-[#0A0A0C]">
              {/* Laptop Photo with radial shadow and bottom fade */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                <Image
                  src="/images/hero-laptop.jpg"
                  alt="Avinay building modern digital systems"
                  fill
                  priority
                  className="object-cover object-center filter contrast-[1.05] brightness-95"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* Cinematic Vignette & Bottom Blending Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-black/30 pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.85)] pointer-events-none" />
              </div>

              {/* Floating Live Badge inside frame */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#09090C]/85 backdrop-blur-md border border-[#D4C5B9]/15 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#DFC08F] font-bold">
                    Founder Focused
                  </div>
                  <div className="text-sm font-semibold text-[#F5F2ED]">
                    Avinay Sharma • Lead Developer
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-[#75716B]">Response Time</div>
                  <div className="text-xs font-bold text-[#E8DFD8]">Under 30 Mins</div>
                </div>
              </div>
            </div>

            {/* Floating Trust Accent Tag */}
            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#121216]/95 border border-[#C5A880]/40 backdrop-blur-md shadow-xl text-xs font-semibold text-[#DFC08F]">
              <Sparkles className="w-3.5 h-3.5" />
              Assam’s Trusted Creator
            </div>
          </motion.div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#trust"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#75716B] hover:text-[#DFC08F] transition-colors p-2"
        aria-label="Scroll to trust section"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
