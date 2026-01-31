"use client";

import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import TrustGallery from "@/components/TrustGallery";
import CallToAction from "@/components/CallToAction";
import ComparisonSection from "@/components/ComparisonSection";
import MainFooter from "@/components/MainFooter";
import StickyFooter from "@/components/StickyFooter";
import MastersTouch from "@/components/MastersTouch";
import ProcessSteps from "@/components/ProcessSteps";
import PriceCards from "@/components/PriceCards";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0 font-sans text-[#003366] bg-[#FDF8F3] selection:bg-red-100 selection:text-[#D32F2F]">
      {/* Header - White & Clean */}
      <nav className="absolute top-0 left-0 w-full p-5 md:p-8 z-30 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="relative md:-ml-6 md:-mt-4">
          <Logo variant="brand" className="w-44 h-14 md:w-80 md:h-28" />
        </div>
        <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-slate-100/50">
          <a href="/pricing" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors">Pricing</a>
          <a href="/services" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors mr-2">Services</a>
          <a href="tel:9250885310" className="text-sm font-bold bg-[#003366] text-white px-6 py-3 rounded-full shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:bg-[#002244] transition-all transform hover:-translate-y-0.5">
            Call Us
          </a>
        </div>
      </nav>

      {/* Brand Energy Hero */}
      <Hero />

      {/* How It Works - Right below hero */}
      <ProcessSteps />

      {/* Sections - Light & Airy Backgrounds */}
      <TrustStrip />

      <MastersTouch />

      <ComparisonSection />

      <PriceCards />

      <TrustGallery />

      <CallToAction />
      <MainFooter />
      <StickyFooter />
    </main>
  );
}
