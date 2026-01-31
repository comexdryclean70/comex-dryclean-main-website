"use client";

import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import TrustGallery from "@/components/TrustGallery";
import CallToAction from "@/components/CallToAction";
import StorySection from "@/components/StorySection";
import ComparisonSection from "@/components/ComparisonSection";
import MainFooter from "@/components/MainFooter";
import StickyFooter from "@/components/StickyFooter";
import MastersTouch from "@/components/MastersTouch";
import ProcessSteps from "@/components/ProcessSteps";
import PriceCards from "@/components/PriceCards";
import TrustStrip from "@/components/TrustStrip";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0 font-sans text-[#003366] bg-white selection:bg-red-100 selection:text-[#D32F2F]">
      {/* Header - White & Clean */}
      <nav className="absolute top-0 left-0 w-full p-6 md:p-8 z-30 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="relative">
          <Logo variant="brand" className="w-72 md:w-96" />
        </div>
        <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-slate-100/50">
          <a href="/pricing" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors">Pricing</a>
          <a href="/booking" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors mr-2">Services</a>
          <a href="tel:9250885310" className="text-sm font-bold bg-[#003366] text-white px-6 py-3 rounded-full shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:bg-[#002244] transition-all transform hover:-translate-y-0.5">
            Call Us
          </a>
        </div>
      </nav>

      {/* Brand Energy Hero */}
      <Hero />

      {/* Sections - Light & Airy Backgrounds */}
      <div className="bg-slate-50">
        <TrustStrip />
      </div>

      <StorySection />

      <div className="bg-slate-50">
        <ComparisonSection />
      </div>

      <MastersTouch />

      <div className="bg-slate-50">
        <ProcessSteps />
      </div>

      <PriceCards />

      <TrustGallery />

      <CallToAction />
      <MainFooter />
      <StickyFooter />
    </main>
  );
}
