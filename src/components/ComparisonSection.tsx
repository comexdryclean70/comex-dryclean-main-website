"use client";

import { Check, X } from "lucide-react";
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
        <section className="py-12 md:py-16 px-4 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-100/40 to-transparent rounded-full blur-3xl -z-10" />

            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                        Why We Still Do It the Old Way
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 italic mb-6">
                        (And why your best clothes thank us for it)
                    </p>
                    <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Most modern cleaners optimise for speed and scale. We optimise for fabric, finish, and longevity.
                        <span className="font-semibold text-slate-800"> That difference shows up over time.</span>
                    </p>
                </motion.div>

                {/* Mobile: Premium Stacked Cards */}
                <div className="md:hidden space-y-4">
                    {COMPARISON_POINTS.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-5 shadow-lg shadow-slate-900/5 border border-slate-100"
                        >
                            {/* Feature Name */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">{String(idx + 1).padStart(2, '0')}</span>
                                </div>
                                <h3 className="font-bold text-slate-900 text-lg">{point.feature}</h3>
                            </div>

                            {/* Comparison Grid */}
                            <div className="grid grid-cols-2 gap-3">
                                {/* Them */}
                                <div className="bg-red-50/50 rounded-xl p-4 border border-red-100/50">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center">
                                            <X className="w-3.5 h-3.5 text-red-500" strokeWidth={3} />
                                        </div>
                                        <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Generic</span>
                                    </div>
                                    <p className="font-semibold text-slate-700 text-sm mb-1">{point.them.text}</p>
                                    <p className="text-xs text-slate-500 leading-relaxed">{point.them.sub}</p>
                                </div>

                                {/* Us */}
                                <div className="bg-green-50/50 rounded-xl p-4 border border-green-200/50 ring-2 ring-green-500/20">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/30">
                                            <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="text-xs font-bold text-green-600 uppercase tracking-wider">Comex</span>
                                    </div>
                                    <p className="font-bold text-slate-900 text-sm mb-1">{point.us.text}</p>
                                    <p className="text-xs text-slate-600 leading-relaxed">{point.us.sub}</p>
                                </div>
                            </div>

                            {/* Footnote */}
                            <div className="mt-4 pt-3 border-t border-dashed border-slate-200">
                                <p className="text-xs text-slate-500 italic text-center">{point.us.footnote}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop: Premium Comparison Table */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="hidden md:block bg-white rounded-3xl shadow-2xl shadow-slate-900/10 overflow-hidden border border-slate-100"
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_1.2fr_1.5fr] bg-slate-900 p-6 text-sm font-bold uppercase tracking-widest">
                        <div className="text-slate-400 pl-4">Feature</div>
                        <div className="text-center text-red-400">Generic Apps</div>
                        <div className="text-center text-white flex items-center justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            Comex Drycleaners
                        </div>
                    </div>

                    {/* Rows */}
                    {COMPARISON_POINTS.map((point, idx) => (
                        <div
                            key={idx}
                            className={`grid grid-cols-[1fr_1.2fr_1.5fr] p-8 border-b border-slate-100 hover:bg-slate-50/50 transition-all items-start group ${idx === COMPARISON_POINTS.length - 1 ? 'border-b-0' : ''}`}
                        >
                            {/* Feature */}
                            <div className="pl-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all">
                                        <span className="font-bold text-sm">{String(idx + 1).padStart(2, '0')}</span>
                                    </div>
                                    <span className="font-bold text-slate-800 text-lg group-hover:text-slate-900 transition-colors">
                                        {point.feature}
                                    </span>
                                </div>
                            </div>

                            {/* Them */}
                            <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity px-4">
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 border border-red-100">
                                        <X className="w-5 h-5" strokeWidth={2.5} />
                                    </div>
                                    <div className="font-semibold text-slate-700">{point.them.text}</div>
                                    <div className="text-sm text-slate-400 leading-relaxed max-w-[200px]">{point.them.sub}</div>
                                </div>
                            </div>

                            {/* Us */}
                            <div className="text-center relative px-6">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -mx-4" />
                                <div className="relative z-10 flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                                        <Check className="w-6 h-6" strokeWidth={3} />
                                    </div>
                                    <div className="font-bold text-slate-900 text-lg">{point.us.text}</div>
                                    <div className="text-sm text-slate-600 leading-relaxed max-w-[280px]">{point.us.sub}</div>
                                    <div className="text-xs text-green-600 font-medium italic mt-1 bg-green-50 px-3 py-1 rounded-full">
                                        {point.us.footnote}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Footer Closer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <div className="inline-block bg-slate-900 text-white px-8 py-6 rounded-2xl shadow-xl shadow-slate-900/20">
                        <p className="text-lg md:text-xl font-medium leading-relaxed">
                            <span className="text-slate-400">If it's replaceable, any cleaner will do.</span>
                            <br />
                            <span className="text-white font-bold">If it isn't, that's where we come in.</span>
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
