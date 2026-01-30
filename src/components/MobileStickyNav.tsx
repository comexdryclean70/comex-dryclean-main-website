"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, X, ChevronRight, Clock } from "lucide-react";

export default function MobileStickyNav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sticky Bottom Bar */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-lg border-t border-slate-100 safe-area-bottom">

                {/* Slot Indicator */}
                <div className="flex justify-center mb-3">
                    <div className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        Next Slot: Today, 2 PM
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(true)}
                    className="w-full bg-[#0890f1] text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-500/30 active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
                >
                    <Calendar className="w-5 h-5" /> Schedule Pickup
                </button>
            </div>

            {/* Bottom Sheet Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm md:hidden"
                        />

                        {/* Sheet */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed bottom-0 left-0 right-0 bg-white z-[70] rounded-t-3xl p-6 pb-12 md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)]"
                        >
                            {/* Drag Handle */}
                            <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-6"></div>

                            {/* Header */}
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-xl font-bold text-slate-800">Select Service</h3>
                                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full text-slate-500">
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Selection Grid */}
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <Link href="/booking?items=dryclean" className="bg-blue-50 hover:bg-blue-100 p-4 rounded-2xl border border-blue-100 text-center transition-colors group">
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">👔</div>
                                    <div className="font-bold text-slate-800">Dry Clean</div>
                                    <div className="text-xs text-slate-500">Suits, Dresses</div>
                                </Link>
                                <Link href="/booking?items=laundry" className="bg-cyan-50 hover:bg-cyan-100 p-4 rounded-2xl border border-cyan-100 text-center transition-colors group">
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🧺</div>
                                    <div className="font-bold text-slate-800">Laundry</div>
                                    <div className="text-xs text-slate-500">Wash & Fold</div>
                                </Link>
                                <Link href="/booking?items=steam" className="bg-orange-50 hover:bg-orange-100 p-4 rounded-2xl border border-orange-100 text-center transition-colors group">
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💨</div>
                                    <div className="font-bold text-slate-800">Steam Press</div>
                                    <div className="text-xs text-slate-500">Ironing Only</div>
                                </Link>
                                <Link href="/booking?items=shoes" className="bg-purple-50 hover:bg-purple-100 p-4 rounded-2xl border border-purple-100 text-center transition-colors group">
                                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">👟</div>
                                    <div className="font-bold text-slate-800">Shoe Clean</div>
                                    <div className="text-xs text-slate-500">Sneakers, Boots</div>
                                </Link>
                            </div>

                            <Link
                                href="/booking"
                                className="w-full bg-[#0890f1] text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20"
                            >
                                Continue to Booking <ChevronRight className="w-5 h-5" />
                            </Link>

                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
