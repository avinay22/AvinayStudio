'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Palette, Code2, Rocket, ArrowRight } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Understand',
      subtitle: 'Discovery & Blueprint',
      icon: Compass,
      desc: 'We map out your business objectives, target audience in Assam/India, competitive landscape, and the exact conversion action you want visitors to take.',
    },
    {
      num: '02',
      title: 'Design',
      subtitle: 'Visual Architecture',
      icon: Palette,
      desc: 'We craft high-fidelity, cinematic UI layouts with custom typography and rich aesthetics tailored specifically to command high pricing and immediate trust.',
    },
    {
      num: '03',
      title: 'Build',
      subtitle: 'Modern Engineering',
      icon: Code2,
      desc: 'We develop your system using clean, lightning-fast Next.js code, responsive mobile layouts, SEO structured metadata, and seamless WhatsApp inquiry channels.',
    },
    {
      num: '04',
      title: 'Deliver',
      subtitle: 'Launch & Growth',
      icon: Rocket,
      desc: 'We connect your domain, deploy on high-speed global CDNs, configure your Google Search presence, and ensure 100% operational readiness from day one.',
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121216] border border-[#C5A880]/30 text-xs uppercase tracking-widest text-[#DFC08F] font-semibold mb-4">
            Structured Execution
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F5F2ED] font-['Outfit'] mb-4">
            How We Work: <span className="gold-gradient-text">4 Seamless Steps</span>
          </h2>
          <p className="text-base text-[#B8B3AB]">
            From your initial idea to live commercial launch, every phase is transparent, fast, and driven by direct founder communication.
          </p>
        </div>

        {/* 4 Steps Grid (Strict requirement: Understand → Design → Build → Deliver) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                className="relative rounded-2xl p-7 bg-[#0E0E12] border border-[#D4C5B9]/15 hover:border-[#C5A880]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-black font-['Outfit'] text-[#DFC08F]/40 group-hover:text-[#DFC08F] transition-colors">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#16161C] border border-[#C5A880]/20 flex items-center justify-center text-[#DFC08F] group-hover:border-[#C5A880] transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-[#F5F2ED] mb-1 font-['Outfit']">
                    {step.title}
                  </h3>
                  <div className="text-xs text-[#DFC08F] font-semibold mb-4">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#B8B3AB] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow indicator for all except last */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-20 text-[#C5A880]/40">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
