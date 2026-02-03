"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full bg-[#0B1121] overflow-hidden min-h-screen flex flex-col lg:flex-row">

            {/* Left Content Side (50%) */}
            <div className="w-full lg:w-1/2 relative z-10 flex flex-col justify-center px-6 sm:px-12 lg:px-20 py-20 lg:py-0">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-xl"
                >
                    {/* Eyebrow */}
                    <div className="flex items-center gap-3">
                        <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                        <span className="text-[#D4AF37] uppercase tracking-[0.2em] text-xs font-bold">Est. 2010</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl sm:text-6xl lg:text-[5rem] leading-[1.1] font-serif text-white tracking-tight">
                        Mastery in <br />
                        <span className="text-[#D4AF37]">Fabric Care.</span>
                    </h1>

                    {/* Subhead */}
                    <p className="text-lg text-slate-400 font-sans leading-relaxed max-w-md">
                        We don't just clean clothes; we restore their original glory.
                        Experience the gold standard of dry cleaning in Dwarka.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-5 pt-4">
                        <Link
                            href="/booking"
                            className="bg-[#D4AF37] hover:bg-[#b89628] text-[#0B1121] font-bold rounded-sm px-8 py-4 shadow-lg shadow-amber-900/20 transition-all hover:-translate-y-0.5 uppercase tracking-wide text-sm"
                        >
                            Book Pickup
                        </Link>

                        <button className="flex items-center gap-3 group text-white hover:text-[#D4AF37] transition-colors">
                            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#D4AF37] transition-colors">
                                <Play className="w-4 h-4 ml-0.5 fill-current" />
                            </div>
                            <span className="font-medium tracking-wide text-sm uppercase">Our Process</span>
                        </button>
                    </div>

                    {/* Trust Indicator */}
                    <div className="pt-8 border-t border-white/10 flex items-center gap-6">
                        <div>
                            <p className="text-3xl font-serif text-white">5K+</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Clients</p>
                        </div>
                        <div className="h-8 w-[1px] bg-white/10"></div>
                        <div>
                            <p className="text-3xl font-serif text-white">15+</p>
                            <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Years</p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Right Image Side (50%) */}
            <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-screen bg-slate-900">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    className="absolute inset-0"
                >
                    <Image
                        src="/hero-tuxedo.png"
                        alt="Close up of premium tuxedo lapel showing fabric texture"
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121] via-transparent to-transparent opacity-80 lg:opacity-100"></div>
                </motion.div>
            </div>

        </section>
    );
}
