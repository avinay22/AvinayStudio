'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Zap, HeartHandshake, PhoneCall } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#09090C] relative overflow-hidden border-t border-[#D4C5B9]/10">
      {/* Background Gold Ambient Bloom */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-[#C5A880]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Standing Portrait with High-End Cinematic Blending */}
          <motion.div
            className="lg:col-span-5 relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ambient Backlight Halo behind Avinay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-[#C5A880]/15 to-transparent blur-3xl opacity-60" />

            <div className="relative rounded-2xl overflow-hidden border border-[#D4C5B9]/15 shadow-2xl shadow-black bg-[#060608]">
              {/* Image Frame */}
              <div className="relative aspect-[9/16] max-h-[640px] w-full">
                <Image
                  src="/images/about-avinay.png"
                  alt="Avinay Sharma - Founder of AvinayStudio"
                  fill
                  className="object-cover object-top filter contrast-[1.05] brightness-95"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />

                {/* Subtle vignette & seamless bottom blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#060608] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_90px_rgba(0,0,0,0.9)] pointer-events-none" />
              </div>

              {/* Founder Credibility Badge */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#0F0F14]/90 backdrop-blur-md border border-[#C5A880]/30 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-bold text-[#F5F2ED] font-['Outfit']">
                      Avinay Sharma
                    </div>
                    <div className="text-xs text-[#DFC08F]">
                      Founder & Digital Architect
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] tracking-widest uppercase px-2 py-0.5 rounded bg-[#1C1C24] text-[#E8DFD8] border border-[#D4C5B9]/15">
                      Direct Access
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* About Text Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#14141A] border border-[#C5A880]/30 text-xs uppercase tracking-widest text-[#DFC08F] font-semibold mb-6">
              Behind AvinayStudio
            </div>

            {/* Strict requirement quote text */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F2ED] font-['Outfit'] leading-tight mb-6">
              “Hi, I’m Avinay. <br className="hidden sm:inline" />
              <span className="gold-gradient-text">
                I help businesses grow online through websites, content, and digital presence.
              </span>”
            </h2>

            <p className="text-base sm:text-lg text-[#B8B3AB] leading-relaxed mb-6 font-normal">
              Most businesses don’t need another generic website template that sits quietly on the internet. They need an active sales machine that commands immediate respect, ranks high in local search, and turns curious visitors into paying customers.
            </p>

            <p className="text-sm sm:text-base text-[#B8B3AB] leading-relaxed mb-8">
              At AvinayStudio, every project is handled directly by me — no junior handoffs, no outsourced confusion. From high-conversion structure and bespoke design to lightning-fast hosting and WhatsApp client pipelines, I build digital assets that create real commercial growth.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              <div className="p-4 rounded-xl bg-[#0F0F14] border border-[#D4C5B9]/10 flex items-start gap-3">
                <Target className="w-5 h-5 text-[#DFC08F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F2ED]">Conversion Focused</h4>
                  <p className="text-xs text-[#B8B3AB] mt-0.5">Designed specifically to generate calls and WhatsApp enquiries.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F0F14] border border-[#D4C5B9]/10 flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#DFC08F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F2ED]">Modern Speed & SEO</h4>
                  <p className="text-xs text-[#B8B3AB] mt-0.5">Sub-second load times engineered for local Google dominance.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F0F14] border border-[#D4C5B9]/10 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#DFC08F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F2ED]">Human-Crafted Quality</h4>
                  <p className="text-xs text-[#B8B3AB] mt-0.5">Zero copy-paste AI layouts. Tailored brand identity.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#0F0F14] border border-[#D4C5B9]/10 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#DFC08F] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#F5F2ED]">Long-Term Partner</h4>
                  <p className="text-xs text-[#B8B3AB] mt-0.5">Direct phone support and updates as your business scales.</p>
                </div>
              </div>
            </div>

            {/* Direct Connect CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://wa.me/917896554039?text=Hi%20Avinay,%20I'd%20like%20to%20discuss%20working%20together."
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#DFC08F] hover:bg-[#E8DFD8] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#DFC08F]/20"
              >
                Talk Directly with Avinay
              </a>
              <a
                href="tel:+917896554039"
                className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#E8DFD8] bg-[#14141A] hover:bg-[#1A1A22] border border-[#D4C5B9]/20 transition-all flex items-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#DFC08F]" />
                +91 7896554039
              </a>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
