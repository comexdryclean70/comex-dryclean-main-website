"use client";

import { Suspense } from "react";
import HeroAppStyle from "@/components/HeroAppStyle";
import Logo from "@/components/Logo";
import TrustStrip from "@/components/TrustStrip";
import MastersTouch from "@/components/MastersTouch";
import ProcessSteps from "@/components/ProcessSteps";
import PriceCards from "@/components/PriceCards";
import CallToAction from "@/components/CallToAction";
import StorySection from "@/components/StorySection";
import ComparisonSection from "@/components/ComparisonSection";
import MainFooter from "@/components/MainFooter";
import StickyFooter from "@/components/StickyFooter";
import MobileStickyNav from "@/components/MobileStickyNav";

export default function Home() {
  return (
    <main className="min-h-screen pb-24 md:pb-0 font-sans text-slate-800 bg-white selection:bg-[#ccf5ee] selection:text-[#00cba9]">
      {/* Header */}
      <nav className="absolute top-0 left-0 w-full p-6 z-30 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="w-44 md:w-56 relative">
          <Logo variant="dark" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="/pricing" className="text-slate-600 font-bold hover:text-[#00cba9] transition-colors">Pricing</a>
          <a href="tel:9250885310" className="text-sm font-bold bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-100 shadow-sm hover:text-[#00cba9] transition-colors">
            📞 9250-885-310
          </a>
        </div>
      </nav>

      <HeroAppStyle />

      {/* Mobile Sticky Nav (Replaces StickyFooter on Mobile) */}
      <MobileStickyNav />

      <StorySection />
      <ComparisonSection />

      <TrustStrip />
      <MastersTouch />
      <ProcessSteps />
      <PriceCards />

      <CallToAction />
      <MainFooter />
      {/* StickyFooter hidden on mobile via CSS usually, ensuring MobileStickyNav takes precedence */}
      <div className="hidden md:block">
        <StickyFooter />
      </div>
    </main>
  );
}
