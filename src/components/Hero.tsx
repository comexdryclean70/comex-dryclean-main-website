"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[95vh] flex items-center bg-white overflow-hidden pt-36 md:pt-48">

            {/* Background Pattern - Dot Grid for Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-60 z-0" />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-0" />

            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-10 order-2 lg:order-1 pt-8 lg:pt-0"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 px-5 py-2.5 rounded-full text-[#003366] text-sm font-bold tracking-wide shadow-sm hover:shadow-md transition-shadow cursor-default">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span>Generic Dry Cleaners? No. We are Comex.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-[5.5rem] font-sans font-extrabold text-[#003366] leading-[1.05] tracking-tighter">
                        Freshness You <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#b91c1c] drop-shadow-sm">Can Feel.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-600 max-w-lg leading-relaxed font-medium">
                        We don't just clean clothes. We restore them. Experience Dwarka's favorite premium care delivery.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link href="/booking" className="group bg-[#D32F2F] hover:bg-[#b91c1c] text-white text-lg font-bold rounded-full px-10 py-4 shadow-xl shadow-red-600/30 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                            Book Pickup <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <a href="tel:9250885310" className="bg-white text-[#003366] border-2 border-[#003366]/20 hover:border-[#003366] text-lg font-extrabold rounded-full px-10 py-4 transition-all flex items-center justify-center gap-3 hover:bg-blue-50">
                            <Phone className="w-5 h-5 fill-current" /> 9250-885-310
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="pt-8 border-t border-slate-100 mt-2">
                        <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-bold text-slate-500 uppercase tracking-wider">
                            <div className="flex items-center gap-2 hover:text-[#003366] transition-colors cursor-default">
                                <CheckCircle className="w-5 h-5 text-[#D32F2F]" /> German Eco-Solvents
                            </div>
                            <div className="flex items-center gap-2 hover:text-[#003366] transition-colors cursor-default">
                                <CheckCircle className="w-5 h-5 text-[#D32F2F]" /> 24hr Turnaround
                            </div>
                            <div className="flex items-center gap-2 hover:text-[#003366] transition-colors cursor-default">
                                <CheckCircle className="w-5 h-5 text-[#D32F2F]" /> Free Collection
                            </div>
                        </div>
                    </div>

                </motion.div>

                {/* Hero Image - Dynamic & Windy */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full flex items-center justify-center"
                >
                    {/* Abstract Shape Background - "Wind Swish" */}
                    <div className="absolute top-[10%] right-[-10%] w-[90%] h-[90%] bg-gradient-to-bl from-blue-50 to-transparent rounded-[4rem] -z-10 rotate-3" />

                    <div className="relative w-full h-[95%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/15 border-4 border-white ring-1 ring-slate-100">
                        <Image
                            src="/hero-fresh.png"
                            alt="Fresh laundry blowing in the wind"
                            fill
                            className="object-cover object-top hover:scale-105 transition-transform duration-[1.5s]"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Floating 'Fresh' Card - Top Right */}
                        <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-white/50 animate-bounce-slow hidden sm:block">
                            <div className="flex items-center gap-2 text-[#003366] font-bold">
                                <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                                <span>#1 in Dwarka</span>
                            </div>
                        </div>

                        {/* Floating 'Fresh' Card - Bottom Left */}
                        <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-xs hidden sm:block hover:scale-105 transition-transform cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-[#E3F2FD] flex items-center justify-center text-[#003366] font-bold text-lg">
                                    0%
                                </div>
                                <div>
                                    <div className="font-exrabold text-[#003366] text-lg leading-none mb-1">Odorless</div>
                                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">Harmful Chemicals</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
