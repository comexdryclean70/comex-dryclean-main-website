import { Suspense } from "react";
import Image from "next/image";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import TrustStrip from "@/components/TrustStrip";
import MastersTouch from "@/components/MastersTouch";
import ProcessSteps from "@/components/ProcessSteps";
import PriceCards from "@/components/PriceCards";
import TrustEditorial from "@/components/TrustEditorial";
import CallToAction from "@/components/CallToAction";
import StorySection from "@/components/StorySection";
import ComparisonSection from "@/components/ComparisonSection";
import MainFooter from "@/components/MainFooter";
import StickyFooter from "@/components/StickyFooter";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0 font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">
      {/* Header */}
      <nav className="absolute top-0 left-0 w-full p-6 z-30 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="w-44 md:w-56 relative">
          <Logo variant="dark" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="/pricing" className="text-slate-600 font-bold hover:text-blue-600 transition-colors">Pricing</a>
          <a href="tel:9250885310" className="text-sm font-bold bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-sm hover:text-orange-600 transition-colors">
            📞 9250-885-310
          </a>
        </div>
      </nav>

      <Hero />
      <StorySection />
      <ComparisonSection />

      {/* Removed Redundant Sections if Story/Comparison replace them, but keeping TrustStrip for stats if needed */}
      <TrustStrip />
      <MastersTouch />
      <ProcessSteps />
      <PriceCards />

      <TrustEditorial />
      <CallToAction />
      <MainFooter />
      <StickyFooter />
    </main>
  );
}
