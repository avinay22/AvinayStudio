'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Sparkles, CheckCircle2, ShieldCheck, ChevronRight } from 'lucide-react';
import ThreeDCard from './ThreeDCard';

export default function HeroSection() {
  const { scrollY } = useScroll();
  const backgroundParallax = useTransform(scrollY, [0, 800], [0, 150]);
  const textParallax = useTransform(scrollY, [0, 800], [0, 50]);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic 3D Ambient Background Atmosphere */}
      <motion.div
        style={{ y: backgroundParallax }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Soft Warm Gold Radial Lights */}
        <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] rounded-full bg-[#C5A880]/12 blur-[150px]" />
        <div className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full bg-[#18181D]/70 blur-[130px]" />
        
        {/* Subtle Luxury Geometric Grid Overlay */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #DFC08F 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subtext, CTAs */}
          <motion.div
            style={{ y: textParallax }}
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#121216]/90 border border-[#C5A880]/30 mb-6 backdrop-blur-md shadow-[0_0_20px_rgba(197,168,128,0.1)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#DFC08F] animate-pulse" />
              <span className="text-[11px] uppercase tracking-widest text-[#DFC08F] font-bold">
                Available for New Projects • Assam & Worldwide
              </span>
            </motion.div>

            {/* Bold Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F5F2ED] leading-[1.12] mb-6 font-['Outfit']">
              We Build <span className="gold-gradient-text">Digital Presence</span> That Brings Customers
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-[#B8B3AB] max-w-2xl font-normal leading-relaxed mb-8">
              Websites. Content. Growth. Everything your business needs.
            </p>

            {/* Interactive CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#050505] bg-[#DFC08F] hover:bg-[#E8DFD8] transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(223,192,143,0.35)] flex items-center justify-center gap-2"
              >
                <span>View Work</span>
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full text-xs font-bold uppercase tracking-wider text-[#F5F2ED] bg-[#121216] hover:bg-[#18181D] border border-[#D4C5B9]/25 hover:border-[#DFC08F]/60 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Contact Now
              </a>
            </div>

            {/* Trust Micro-Bullets */}
            <div className="mt-10 pt-8 border-t border-[#D4C5B9]/10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-xs text-[#B8B3AB]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC08F] shrink-0" />
                <span>100% Bespoke Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC08F] shrink-0" />
                <span>Sub-Second Load Times</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#DFC08F] shrink-0" />
                <span>Direct WhatsApp Inquiries</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: 3D Floating Interactive Laptop Visual */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Soft 3D Floor Shadow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.35, 0.65, 0.35],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-black/90 blur-2xl rounded-full pointer-events-none"
            />

            {/* 3D Interactive Tilt & Floating Bobbing Wrapper */}
            <motion.div
              animate={{
                y: [-7, 7, -7],
              }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <ThreeDCard depth={14} className="w-full">
                {/* Outer Glassmorphic Border */}
                <div className="relative rounded-2xl overflow-hidden border border-[#D4C5B9]/20 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-[#09090C] backdrop-blur-xl group">
                  
                  {/* Laptop Photo with Cinematic Depth & Vignette */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full [transform:translateZ(20px)]">
                    <Image
                      src="/images/hero-laptop.jpg"
                      alt="Avinay building modern digital systems"
                      fill
                      priority
                      className="object-cover object-center filter contrast-[1.05] brightness-95"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* Ambient Gradients for Seamless Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090C] via-transparent to-black/30 pointer-events-none" />
                    <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.85)] pointer-events-none" />
                  </div>

                  {/* Floating 3D Badge Layer with Higher translateZ */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#09090C]/90 backdrop-blur-md border border-[#D4C5B9]/20 flex items-center justify-between [transform:translateZ(50px)] shadow-2xl">
                    <div>
                      <div className="text-[10px] uppercase tracking-wider text-[#DFC08F] font-bold">
                        Lead Developer & Founder
                      </div>
                      <div className="text-sm font-bold text-[#F5F2ED] font-['Outfit']">
                        Avinay Sharma
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-[#75716B]">Response Time</div>
                      <div className="text-xs font-bold text-[#E8DFD8]">Under 30 Mins</div>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Accent Pill */}
                <div className="absolute -top-3.5 -right-3.5 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#121216]/95 border border-[#C5A880]/40 backdrop-blur-md shadow-2xl text-xs font-semibold text-[#DFC08F] [transform:translateZ(65px)]">
                  <Sparkles className="w-3.5 h-3.5" />
                  Assam’s Trusted Creator
                </div>
              </ThreeDCard>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <a
        href="#trust"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[#75716B] hover:text-[#DFC08F] transition-colors p-2"
        aria-label="Scroll to trust section"
      >
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
}
