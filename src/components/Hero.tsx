"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[90vh] flex items-center bg-white overflow-hidden pt-20 md:pt-0">

            {/* Background Gradient - Subtle Freshness */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white to-red-50/30 z-0" />

            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8 order-2 lg:order-1"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full text-blue-800 text-sm font-bold tracking-wide">
                        <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                        <span>Generic Dry Cleaners? No. We are Comex.</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-[#003366] leading-[1.1] tracking-tight">
                        Freshness You <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#b91c1c]">Can Feel.</span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        We don't just clean clothes. We restore the feeling of new. Experience the Dwarka favorite that treats your fabrics with respect.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                        <Link href="/booking" className="bg-[#D32F2F] hover:bg-[#b91c1c] text-white text-lg font-bold rounded-full px-10 py-4 shadow-lg shadow-red-600/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2">
                            Book Pickup <ArrowRight className="w-5 h-5" />
                        </Link>
                        <a href="tel:9250885310" className="bg-white text-[#003366] border-2 border-[#003366]/10 hover:border-[#003366] text-lg font-bold rounded-full px-10 py-4 transition-all flex items-center justify-center gap-2">
                            📞 9250-885-310
                        </a>
                    </div>

                    {/* Trust Signals */}
                    <div className="pt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#D32F2F]" /> German Eco-Solvents
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#D32F2F]" /> 24hr Turnaround
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-[#D32F2F]" /> Free Collection
                        </div>
                    </div>

                </motion.div>

                {/* Hero Image - Dynamic & Windy */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative order-1 lg:order-2 h-[50vh] lg:h-[80vh] w-full"
                >
                    {/* Abstract Shape Background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#003366]/5 rounded-full blur-3xl" />

                    <div className="relative w-full h-full rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 border-[6px] border-white">
                        <Image
                            src="/hero-fresh.png"
                            alt="Fresh laundry blowing in the wind"
                            fill
                            className="object-cover object-top"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />

                        {/* Floating 'Fresh' Card */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 max-w-xs hidden sm:block">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#E3F2FD] flex items-center justify-center text-[#003366] font-bold">
                                    100%
                                </div>
                                <div>
                                    <div className="font-bold text-[#003366]">Odorless Cleaning</div>
                                    <div className="text-xs text-slate-600">No harsh chemical smells. Ever.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
