/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shirt, Scissors, Disc, User, Armchair, Blinds } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const CATEGORIES = ["Men's Formal", "Ladies' Couture", "Household Care"];

const SERVICES = {
    "Men's Formal": [
        { id: 1, name: "Suit (2pc)", dc: "₹350", sp: "₹150", icon: User },
        { id: 2, name: "Blazer/Coat", dc: "₹250", sp: "₹100", icon: Shirt },
        { id: 3, name: "Sherwani", dc: "₹350+", sp: "₹200", icon: User },
        { id: 4, name: "Formal Shirt", dc: "₹100", sp: "₹50", icon: Scissors },
    ],
    "Ladies' Couture": [
        { id: 5, name: "Lehenga", dc: "₹350+", sp: "₹250", icon: Disc },
        { id: 6, name: "Silk Saree", dc: "₹250", sp: "₹100", icon: Disc },
        { id: 7, name: "Embroidered Gown", dc: "₹350+", sp: "₹200", icon: User },
        { id: 8, name: "Designer Blouse", dc: "₹70", sp: "₹40", icon: Scissors },
    ],
    "Household Care": [
        { id: 9, name: "Blanket (Double)", dc: "₹300", sp: "-", icon: Disc },
        { id: 10, name: "Curtains (Panel)", dc: "₹130", sp: "₹60", icon: Blinds },
        { id: 11, name: "Sofa (Seat)", dc: "₹150", sp: "-", icon: Armchair },
    ],
};

export default function PriceCards() {
    const [activeTab, setActiveTab] = useState("Men's Formal");

    return (
        <section className="py-12 px-6 relative overflow-hidden bg-slate-50">
            {/* Dot Pattern Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-white/80 z-0"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-950 font-serif mb-4">Transparent Pricing</h2>
                    <p className="text-slate-500 mb-6">Premium Care. Honest Rates.</p>

                    {/* Segmented Control */}
                    <div className="inline-flex flex-wrap justify-center gap-2 bg-slate-50 p-2 rounded-2xl border border-slate-100">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={cn(
                                    "px-6 py-3 rounded-xl text-base font-bold transition-all duration-300 min-w-[120px]",
                                    activeTab === cat
                                        ? "bg-blue-950 text-white shadow-lg shadow-blue-900/20 scale-105"
                                        : "text-slate-500 hover:text-slate-800 hover:bg-white"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Headers */}
                <div className="hidden md:flex justify-end px-4 mb-2 text-xs font-bold text-slate-400 uppercase tracking-wider gap-8">
                    <span className="w-20 text-right">Dry Clean</span>
                    <span className="w-20 text-right">Steam Press</span>
                </div>

                {/* Menu Card Grid */}
                <motion.div layout className="flex flex-col gap-3">
                    <AnimatePresence mode="wait">
                        {SERVICES[activeTab as keyof typeof SERVICES].map((service) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 10 }}
                                className="flex items-center justify-between p-4 rounded-xl border border-slate-100 bg-white hover:border-orange-100 hover:shadow-sm transition-all group"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 group-hover:text-orange-500 transition-colors">
                                        <service.icon className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <span className="font-bold text-slate-700">{service.name}</span>
                                </div>

                                <div className="flex items-center gap-2 md:gap-8 text-sm">
                                    <div className="w-20 text-right">
                                        <span className="block md:hidden text-[10px] text-slate-400 font-bold uppercase">DC</span>
                                        <span className="font-bold text-blue-950">{service.dc}</span>
                                    </div>
                                    <div className="w-20 text-right">
                                        <span className="block md:hidden text-[10px] text-slate-400 font-bold uppercase">Press</span>
                                        <span className="font-medium text-slate-500">{service.sp}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center mt-8 space-y-4">
                    <p className="text-xs text-slate-400 font-medium">
                        * Prices exclude GST. Saree polishing and rolling ("Charak") available separately.
                    </p>
                    <Link href="/pricing" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                        View Full Price List &rarr;
                    </Link>
                </div>
            </div>
        </section>
    );
}
