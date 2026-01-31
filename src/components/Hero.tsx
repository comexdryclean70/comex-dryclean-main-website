"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Phone, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden pt-32 md:pt-0">

            {/* Background Texture - Subtle Grain/Paper feel suitable for editorial */}
            <div className="absolute inset-0 bg-[#fffdfa] z-0">
                <div className="absolute inset-0 opacity-[0.4] bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] mix-blend-multiply" />
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 h-full">

                {/* Text Content - Spans 7 cols on Desktop */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="col-span-1 lg:col-span-7 space-y-8 order-1 relative z-20 pt-8 lg:pt-0"
                >
                    {/* Badge - Minimalist Capsule */}
                    <div className="inline-flex items-center gap-2 bg-blue-50/50 border border-blue-100/50 px-4 py-1.5 rounded-full text-[#003366] text-xs font-bold tracking-widest uppercase mt-8 md:mt-12">
                        <Sparkles className="w-3 h-3 text-[#D32F2F]" />
                        <span>Premium Garment Care</span>
                    </div>

                    {/* Headline - "Magazine Cover" style */}
                    <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] font-sans font-black text-[#003366] leading-[0.9] tracking-tighter">
                        Freshness <br />
                        <span className="relative inline-block">
                            You Can Feel.
                            {/* Accent Underline */}
                            <svg className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-[#D32F2F] -z-10 opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h1>

                    {/* Subhead - Editorial Layout */}
                    <div className="flex flex-col md:flex-row gap-6 items-start md:items-center pt-2">
                        <div className="w-12 h-[1px] bg-[#D32F2F] hidden md:block mt-3" />
                        <p className="text-lg md:text-2xl text-slate-600 max-w-lg leading-relaxed font-serif italic">
                            "We don't just clean clothes. We restore the feeling of new. A Dwarka favorite for 30 years."
                        </p>
                    </div>

                    {/* CTAs - Prominent & Accessible */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 w-full sm:w-auto">
                        <Link href="/booking" className="group relative overflow-hidden bg-[#D32F2F] text-white text-lg font-bold rounded-full px-12 py-5 shadow-2xl shadow-red-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto text-center flex items-center justify-center gap-3">
                            <span className="relative z-10 flex items-center gap-2">
                                Book Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            {/* Button Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:animate-shine" />
                        </Link>

                        <a href="tel:9250885310" className="group bg-transparent text-[#003366] border border-blue-900/10 hover:border-blue-900/30 text-lg font-bold rounded-full px-8 py-5 transition-all w-full sm:w-auto text-center flex items-center justify-center gap-3 hover:bg-blue-50/50">
                            <Phone className="w-5 h-5 fill-current" /> 9250-885-310
                        </a>
                    </div>

                    {/* Trust Footnote */}
                    <div className="pt-8 flex gap-6 text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <span>• German Eco-Solvents</span>
                        <span>• 24hr Turnaround</span>
                    </div>

                </motion.div>

                {/* Editorial Image - Blended & Organic (No Box) */}
                {/* On Mobile: It sits below text as a background element. On Desktop: It takes the right side. */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-0 right-0 w-full h-[50vh] lg:static lg:col-span-5 lg:h-[85vh] lg:w-full order-2 -z-10 lg:z-10"
                >
                    {/* The Gradient Mask - The Key to "Blending" */}
                    <div className="relative w-full h-full">
                        {/* Mobile Fade Mask */}
                        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-20 lg:hidden" />

                        {/* Desktop Side Mask */}
                        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 hidden lg:block" />

                        <Image
                            src="/hero-fresh.png"
                            alt="Fresh laundry blowing in the wind"
                            fill
                            className="object-cover object-center lg:object-left opacity-40 lg:opacity-100"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
