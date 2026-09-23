import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import PricingSection from '@/components/PricingSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F2ED] selection:bg-[#C5A880] selection:text-[#050505]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections (Strict Structure) */}
      <main>
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Trust Section */}
        <TrustSection />

        {/* 3. Services Section */}
        <ServicesSection />

        {/* 4. About Section */}
        <AboutSection />

        {/* 5. Portfolio Section */}
        <PortfolioSection />

        {/* 6. Pricing Section */}
        <PricingSection />

        {/* 7. Process Section */}
        <ProcessSection />

        {/* 8. Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
