"use client";

import { Check, X, Star } from "lucide-react";
import { motion } from "framer-motion";

const COMPARISON_POINTS = [
    {
        feature: "The Solvent",
        them: {
            text: "Industrial detergents",
            sub: "Aggressive chemicals designed for volume, not fabric life."
        },
        us: {
            text: "Petrol Wash & PERC",
            sub: "Cleans deeper, preserves colour, and keeps the fabric alive.",
            footnote: "Quiet flex: Petrol wash isn't faster. It's just better."
        }
    },
    {
        feature: "The Process",
        them: {
            text: "Batch washing",
            sub: "Your clothes go in with dozens of others."
        },
        us: {
            text: "Individual processing",
            sub: "Every garment is tagged, checked, and treated on its own.",
            footnote: "No mix-ups. No shortcuts. No 'good enough'."
        }
    },
    {
        feature: "The Finish",
        them: {
            text: "Machine ironing",
            sub: "Fast, flat, and lifeless."
        },
        us: {
            text: "Vacuum steam press",
            sub: "Restores shape, fall, and the way the garment was meant to sit.",
            footnote: "Especially noticeable on suits, sarees, dresses, and structured wear."
        }
    }
];

export default function ComparisonSection() {
    return (
        <section className="py-20 px-4 bg-[#FDF8F3] relative overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#003366] mb-4 tracking-tight font-serif">
                        Why We Still Do It the Old Way
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 italic mb-8 font-serif">
                        (And why your best clothes thank us for it)
                    </p>
                    <p className="text-slate-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-base">
                        Most modern cleaners optimise for speed and scale. We optimise for fabric, finish, and longevity.
                        <span className="font-bold text-[#003366]"> That difference shows up over time.</span>
                    </p>
                </motion.div>

                {/* Mobile: Elegant Cards */}
                <div className="md:hidden space-y-6">
                    {COMPARISON_POINTS.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-900/5 border border-slate-100 overflow-hidden relative"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#006A4E]"></div>

                            {/* Feature Name */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-slate-300 font-bold text-lg">0{idx + 1}</span>
                                <h3 className="font-bold text-[#003366] text-xl font-serif">{point.feature}</h3>
                            </div>

                            {/* Comparison */}
                            <div className="space-y-6">
                                {/* Them */}
                                <div className="pl-4 border-l-2 border-red-100 relative">
                                    <div className="absolute -left-[9px] top-0 bg-white">
                                        <X className="w-4 h-4 text-red-400" />
                                    </div>
                                    <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-1">Generic Apps</p>
                                    <p className="font-semibold text-slate-700">{point.them.text}</p>
                                    <p className="text-sm text-slate-500 mt-1">{point.them.sub}</p>
                                </div>

                                {/* Us */}
                                <div className="pl-4 border-l-2 border-emerald-500 relative bg-emerald-50/30 -mx-6 py-4 px-6">
                                    <div className="absolute left-[15px] top-4 bg-[#006A4E] rounded-full p-0.5">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                    <p className="text-xs font-bold text-[#006A4E] uppercase tracking-wider mb-1">Comex Drycleaners</p>
                                    <p className="font-bold text-[#003366] text-lg">{point.us.text}</p>
                                    <p className="text-sm text-slate-600 mt-1">{point.us.sub}</p>

                                    <div className="mt-3 inline-block bg-white border border-emerald-100 rounded-full px-3 py-1 text-[11px] font-medium text-emerald-700 italic">
                                        {point.us.footnote}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop: Full Width Table Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="hidden md:block bg-white rounded-t-3xl rounded-b-3xl shadow-2xl shadow-slate-900/5 overflow-hidden border border-slate-100"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-[0.8fr_1fr_1.2fr] bg-[#001F2B] p-5 py-6">
                        <div className="text-slate-400 font-bold text-xs uppercase tracking-widest pl-8 flex items-center">Feature</div>
                        <div className="text-center text-red-400 font-bold text-xs uppercase tracking-widest">Generic Apps</div>
                        <div className="text-center text-white font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                            Comex Drycleaners
                        </div>
                    </div>

                    {/* Rows */}
                    {COMPARISON_POINTS.map((point, idx) => (
                        <div
                            key={idx}
                            className={`grid grid-cols-[0.8fr_1fr_1.2fr] p-8 border-b border-slate-50 items-center hover:bg-slate-50/50 transition-colors ${idx === COMPARISON_POINTS.length - 1 ? 'border-b-0' : ''}`}
                        >
                            {/* Feature */}
                            <div className="pl-8 flex items-center gap-4">
                                <span className="text-slate-200 font-bold text-xl font-serif">0{idx + 1}</span>
                                <span className="font-bold text-[#003366] text-xl font-serif">
                                    {point.feature}
                                </span>
                            </div>

                            {/* Them */}
                            <div className="text-center px-8 opacity-60 hover:opacity-100 transition-opacity">
                                <div className="inline-flex flex-col items-center">
                                    <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center text-red-400 mb-3">
                                        <X className="w-4 h-4" strokeWidth={3} />
                                    </div>
                                    <div className="font-semibold text-slate-700 mb-1">{point.them.text}</div>
                                    <div className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{point.them.sub}</div>
                                </div>
                            </div>

                            {/* Us */}
                            <div className="text-center px-8 relative">
                                <div className="inline-flex flex-col items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#006A4E] flex items-center justify-center text-white shadow-lg shadow-emerald-900/20 mb-3 scale-110">
                                        <Check className="w-5 h-5" strokeWidth={3} />
                                    </div>
                                    <div className="font-bold text-[#003366] text-lg mb-1">{point.us.text}</div>
                                    <div className="text-sm text-slate-600 leading-relaxed max-w-[280px] mb-3">{point.us.sub}</div>

                                    <div className="bg-emerald-50 text-emerald-700 text-xs font-medium italic px-4 py-1.5 rounded-full border border-emerald-100">
                                        {point.us.footnote}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
