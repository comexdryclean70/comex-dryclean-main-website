"use client";

import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CallToAction() {
    return (
        <section className="relative py-12 px-6 bg-slate-900 overflow-hidden">
            {/* Background Illustration - Subtle Line Art */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="absolute right-[-10%] top-[-10%] w-[600px] h-[600px] stroke-white fill-none" viewBox="0 0 200 200" strokeWidth="0.5">
                    <path d="M40,80 C40,40 160,40 160,80 L180,100 L20,100 L40,80 Z" />
                    <path d="M100,40 L100,20 C100,10 90,10 90,20" />
                    <path d="M40,80 L40,180 L160,180 L160,80" />
                    <path d="M100,80 L100,180" />
                </svg>
                <svg className="absolute left-[-10%] bottom-[-20%] w-[500px] h-[500px] stroke-white fill-none rotate-12" viewBox="0 0 24 24" strokeWidth="0.5">
                    <path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
                </svg>
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6 leading-tight">
                        Ready to Restore Your Wardrobe?
                    </h2>
                    <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed font-sans">
                        Experience the difference of premium dry cleaning. Free pickup and delivery in Dwarka & Palam.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/booking" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-[#D4AF37] text-[#0B1121] px-8 py-4 rounded-sm font-bold text-lg shadow-lg shadow-amber-900/20 flex items-center justify-center gap-3 transition-colors hover:bg-[#b89628] uppercase tracking-wide text-sm"
                            >
                                Schedule Pickup Now <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </Link>

                        <a href="tel:9250885310" className="w-full sm:w-auto">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-sm font-bold text-lg flex items-center justify-center gap-3 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors uppercase tracking-wide text-sm"
                            >
                                <Phone className="w-5 h-5" /> Call 9250-885-310
                            </motion.button>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
