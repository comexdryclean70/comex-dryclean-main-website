"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ScanEye, Sparkles, Layers } from "lucide-react";

export default function MastersTouch() {
    return (
        <section className="py-20 md:py-24 bg-[#FDF8F3] relative overflow-hidden">
            {/* Background Texture - Thread Pattern */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(#003366 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
            </div>

            <div className="max-w-7xl mx-auto px-5 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left: Visual Side (Layered & Cool) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full lg:w-1/2 relative order-1"
                    >
                        {/* Back Layer - Decorative */}
                        <div className="absolute top-8 -right-8 w-full h-full bg-[#E8F0FE] rounded-3xl -z-10 rotate-3 transform transition-transform duration-500 hover:rotate-6"></div>

                        {/* Main Image Container */}
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#003366]/10 border border-white/50 group">
                            <Image
                                src="/lehenga-inspection.png"
                                alt="Expert inspecting premium lehenga with magnifying glass"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* "Cool" Overlay - Lens Effect */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/30 backdrop-blur-[2px] shadow-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10">
                                <ScanEye className="w-8 h-8 text-white drop-shadow-md" />
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-5 py-4 rounded-2xl shadow-lg border border-white/50 max-w-[200px]">
                                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Attention to Detail</p>
                                <p className="text-[#003366] font-bold text-lg leading-none">100% Manual Inspection</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Content Side (UI Friendly) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full lg:w-1/2 order-2"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 px-4 py-1.5 rounded-full mb-8">
                            <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">The Human Element</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl lg:text-5xl font-bold font-serif text-[#003366] mb-8 leading-[1.1] tracking-tight">
                            Machines are fast. <br />
                            <span className="relative inline-block text-red-600 font-serif italic pr-2">
                                <span className="relative z-10">Humans are careful.</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-300 -z-10 transform -rotate-1" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99999 124.814 3.00003 166.085 4.30561C190.158 5.06716 195.034 5.25732 198.001 5.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                            </span>
                        </h2>

                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            We don't just "process" clothes. We open them up, check the seams, test the fabric, and
                            <span className="font-semibold text-[#003366]"> actually look at what we're cleaning.</span>
                        </p>

                        {/* Visual Cards - Replaces the Text Block */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                            {/* Card 1: Silk */}
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 h-10 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 mb-3 group-hover:scale-110 transition-transform">
                                    <Sparkles className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-[#003366] mb-1">Silk isn't Wool</h4>
                                <p className="text-sm text-slate-500">Different fibers need different solvents. One size fits nothing.</p>
                            </div>

                            {/* Card 2: Zari */}
                            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                                <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mb-3 group-hover:scale-110 transition-transform">
                                    <Layers className="w-5 h-5" />
                                </div>
                                <h4 className="font-bold text-[#003366] mb-1">Zari isn't Cotton</h4>
                                <p className="text-sm text-slate-500">Intricate work requires hand-finishing, not machine pressing.</p>
                            </div>
                        </div>

                        {/* Bottom Quote / Signoff */}
                        <div className="pl-6 border-l-4 border-[#003366]">
                            <p className="text-slate-600 italic font-serif text-lg">
                                "Treating them the same ensures they lose their shape. Treating them differently ensures they last."
                            </p>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
