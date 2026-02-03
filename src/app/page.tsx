"use client";

import { useState } from "react";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import TrustGallery from "@/components/TrustGallery";
import RequestCallback from "@/components/RequestCallback";
import CallToAction from "@/components/CallToAction";
import ComparisonSection from "@/components/ComparisonSection";
import MainFooter from "@/components/MainFooter";
import StickyFooter from "@/components/StickyFooter";
import MastersTouch from "@/components/MastersTouch";
import ProcessSteps from "@/components/ProcessSteps";
import PriceCards from "@/components/PriceCards";
import TrustStrip from "@/components/TrustStrip";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen pb-20 md:pb-0 font-sans text-[#003366] bg-[#FDF8F3] selection:bg-red-100 selection:text-[#D32F2F]">
      {/* Header - White & Clean */}
      <nav className="absolute top-0 left-0 w-full p-5 md:p-8 z-50 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="relative md:-ml-6 md:-mt-4">
          <Logo variant="brand" className="w-44 h-14 md:w-80 md:h-28" />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 bg-white/50 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-slate-100/50">
          <a href="/pricing" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors">Pricing</a>
          <a href="/services" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors mr-2">Services</a>
          <a href="tel:9250885310" className="text-sm font-bold bg-[#003366] text-white px-6 py-3 rounded-full shadow-lg shadow-blue-900/10 hover:shadow-blue-900/20 hover:bg-[#002244] transition-all transform hover:-translate-y-0.5">
            Call Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-slate-800 active:scale-95 transition-transform"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[60] shadow-2xl p-6 md:hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-2">
                {[
                  { label: "Our Services", href: "/services" },
                  { label: "Pricing", href: "/pricing" },
                  { label: "Book Pickup", href: "/booking" },
                  { label: "Contact Us", href: "/contact" }
                ].map((link, i) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-bold text-slate-800 py-3 border-b border-slate-50 flex items-center justify-between group"
                  >
                    {link.label}
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-600 -translate-x-2 group-hover:translate-x-0 transition-all opacity-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>

              {/* Footer Actions */}
              <div className="mt-auto pt-8">
                <a href="tel:9250885310" className="flex items-center justify-center gap-2 w-full bg-blue-950 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/20 active:scale-95 transition-transform">
                  <Phone className="w-5 h-5" />
                  Call 9250-885-310
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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

      <RequestCallback />

      <CallToAction />
      <MainFooter />
      <StickyFooter />
    </main>
  );
}
