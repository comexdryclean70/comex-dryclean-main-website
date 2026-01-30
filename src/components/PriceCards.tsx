"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shirt, Scissors, Disc, Baby, Home, Armchair, Projector } from "lucide-react"; // Projector as placeholder for Curtains
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

const CATEGORIES = ["Men", "Women", "Kids", "Household"];

// Icons mapped to real services
const SERVICES = {
    Men: [
        { id: 1, name: "Shirt", price: "₹100 (DC) / ₹50 (Iron)", icon: Shirt },
        { id: 2, name: "Trousers", price: "₹100", icon: Scissors }, // Assuming Trousers price similar to shirt if not specified, but user didn't specify trousers price in "Men", user said Suit 2Pc 350, Coat 250. Let's stick to what user gave or logical defaults.
        { id: 3, name: "Coat", price: "₹250", icon: Shirt }, // Coat icon
        { id: 4, name: "Suit (2Pc)", price: "₹350", icon: Disc },
    ],
    Women: [
        { id: 5, name: "Saree (Cotton)", price: "₹200", icon: Projector }, // Saree placeholder
        { id: 6, name: "Saree (Heavy)", price: "₹250+", icon: Disc },
        { id: 7, name: "Ladies Suit", price: "₹250", icon: Shirt },
        { id: 8, name: "Blouse/Top", price: "₹100", icon: Scissors },
    ],
    Kids: [
        { id: 9, name: "School Uniform", price: "₹100", icon: Baby },
        { id: 10, name: "Frock / Dress", price: "₹150+", icon: Shirt },
    ],
    Household: [
        { id: 11, name: "Blanket (Double)", price: "₹300", icon: Disc },
        { id: 12, name: "Curtains", price: "₹130/panel", icon: Projector },
        { id: 13, name: "Sofa", price: "₹150/seat", icon: Armchair },
    ],
};

export default function PriceCards() {
    const [activeTab, setActiveTab] = useState("Men");

    return (
        <section className="py-20 px-6 relative overflow-hidden bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-950 font-serif mb-4">Transparent Pricing</h2>
                    <p className="text-slate-500 mb-6">Expert dry cleaning at affordable rates.</p>

                    {/* Segmented Control */}
                    <div className="inline-flex bg-slate-100 p-1.5 rounded-full overflow-hidden shadow-inner">
                        {CATEGORIES.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveTab(cat)}
                                className={cn(
                                    "px-6 py-2 rounded-full text-sm font-bold transition-all duration-300",
                                    activeTab === cat
                                        ? "bg-white text-orange-600 shadow-sm ring-1 ring-black/5"
                                        : "text-slate-500 hover:text-slate-700"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Menu Card Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {SERVICES[activeTab as keyof typeof SERVICES].map((service) => (
                            <motion.div
                                key={service.id}
                                layout
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2 }}
                                className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:border-orange-100 hover:shadow-md transition-all group"
                            >
                                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-500 group-hover:text-orange-500 group-hover:scale-110 transition-all shadow-sm">
                                    <service.icon className="w-5 h-5" strokeWidth={2} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-bold text-slate-800 text-base">{service.name}</h3>
                                </div>
                                <div className="text-right">
                                    <p className="font-bold text-blue-950 font-serif text-lg">{service.price}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center mt-8">
                    <p className="text-xs text-slate-400 font-medium bg-slate-50 inline-block px-3 py-1 rounded-full border border-slate-100">
                        * Prices may vary based on fabric type and ornamentation.
                    </p>
                </div>
            </div>
        </section>
    );
}
