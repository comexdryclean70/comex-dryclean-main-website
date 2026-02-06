"use client";

import { Check, X } from "lucide-react";
import { motion } from "framer-motion";

const COMPARISON_POINTS = [
    {
        feature: "The Solvent",
        them: {
            text: "Industrial detergents",
            sub: "Aggressive chemicals meant for volume."
        },
        us: {
            text: "Petrol Wash & PERC",
            sub: "Cleans deeper, preserves colour.",
            footnote: "Quiet flex: It's just better."
        }
    },
    {
        feature: "The Process",
        them: {
            text: "Batch washing",
            sub: "Mixed with dozens of others."
        },
        us: {
            text: "Individual processing",
            sub: "Tagged & treated on its own.",
            footnote: "No mix-ups. No shortcuts."
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
            sub: "Restores shape & fall.",
            footnote: "Noticeable on suits & sarees."
        }
    }
];

export default function ComparisonSection() {
    return (
        <section className="py-10 px-4 relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Compact Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-2 tracking-tight font-serif">
                        Why We Still Do It the Old Way
                    </h2>
                    <p className="text-sm md:text-base text-slate-500 italic font-serif">
                        (Because modern shortcuts ruin good clothes)
                    </p>
                </motion.div>

                {/* Mobile: Dense Cards */}
                <div className="md:hidden space-y-4">
                    {COMPARISON_POINTS.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 overflow-hidden relative"
                        >
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#006A4E]"></div>

                            <div className="flex justify-between items-center mb-4 border-b border-slate-50 pb-2">
                                <h3 className="font-bold text-[#003366] text-lg font-serif">{point.feature}</h3>
                                <div className="text-xs font-bold text-slate-300">0{idx + 1}</div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="pr-2 border-r border-slate-50">
                                    <p className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1">Others</p>
                                    <p className="font-medium text-slate-700 text-sm">{point.them.text}</p>
                                    <p className="text-[10px] text-slate-400 mt-1 leading-tight">{point.them.sub}</p>
                                </div>

                                <div>
                                    <p className="text-[10px] font-bold text-[#006A4E] uppercase tracking-wider mb-1">Comex</p>
                                    <p className="font-bold text-[#003366] text-sm">{point.us.text}</p>
                                    <p className="text-[10px] text-slate-600 mt-1 leading-tight">{point.us.sub}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop: Streamlined Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="hidden md:block bg-white rounded-2xl shadow-lg ring-1 ring-slate-900/5 overflow-hidden"
                >
                    {/* Header Row */}
                    <div className="grid grid-cols-[1fr_1fr_1.2fr] bg-[#001F2B] px-6 py-4 border-b border-slate-100">
                        <div className="text-slate-400 font-bold text-xs uppercase tracking-widest">Feature</div>
                        <div className="text-red-400 font-bold text-xs uppercase tracking-widest pl-4">Generic Apps</div>
                        <div className="text-emerald-400 font-bold text-xs uppercase tracking-widest pl-4">Comex Drycleaners</div>
                    </div>

                    {/* Data Rows */}
                    <div className="divide-y divide-slate-50">
                        {COMPARISON_POINTS.map((point, idx) => (
                            <div key={idx} className="grid grid-cols-[1fr_1fr_1.2fr] px-6 py-6 group hover:bg-slate-50/50 transition-colors">
                                {/* Feature */}
                                <div className="flex flex-col justify-center">
                                    <span className="font-bold text-[#003366] text-lg font-serif">{point.feature}</span>
                                </div>

                                {/* Them */}
                                <div className="flex flex-col justify-center pl-4 pr-8 opacity-60 group-hover:opacity-100 transition-opacity">
                                    <div className="flex items-start gap-2">
                                        <X className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                                        <div>
                                            <div className="font-semibold text-slate-700 text-sm">{point.them.text}</div>
                                            <div className="text-xs text-slate-400 mt-0.5">{point.them.sub}</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Us */}
                                <div className="flex flex-col justify-center pl-4 relative">
                                    <div className="flex items-start gap-3">
                                        <div className="mt-0.5 bg-[#006A4E] rounded-full p-0.5 shrink-0">
                                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-[#003366] text-sm">{point.us.text}</div>
                                            <div className="text-xs text-slate-600 mt-0.5 mb-2">{point.us.sub}</div>
                                            <span className="inline-block bg-emerald-50 text-emerald-700 text-[10px] font-bold px-2 py-0.5 rounded border border-emerald-100">
                                                {point.us.footnote}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
