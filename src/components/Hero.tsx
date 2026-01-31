"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full bg-gradient-to-b from-white to-slate-50 overflow-hidden">

            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-30" />

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pt-24 pb-8 md:pt-32 md:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full">
                            <Sparkles className="w-4 h-4 text-orange-500" />
                            <span className="text-sm font-bold text-blue-900 uppercase tracking-wider">Premium Garment Care</span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] tracking-tight">
                            Freshness{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                                You Can Feel.
                            </span>
                        </h1>

                        {/* Subhead */}
                        <p className="text-base sm:text-lg text-slate-600 max-w-md mx-auto lg:mx-0 leading-relaxed">
                            We don't just clean clothes. We restore the feeling of new.
                            <span className="font-semibold text-slate-800"> A Dwarka favorite for 30+ years.</span>
                        </p>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                                <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
                                <span className="font-semibold text-slate-700">German Eco-Solvents</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
                                <span className="text-lg">⏱️</span>
                                <span className="font-semibold text-slate-700">24hr Turnaround</span>
                            </div>
                        </div>

                        {/* CTA Buttons - Desktop Only */}
                        <div className="hidden md:flex flex-col sm:flex-row gap-4 pt-4">
                            <Link
                                href="/booking"
                                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-bold rounded-2xl px-8 py-4 shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                            >
                                Book Pickup
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <a
                                href="tel:9250885310"
                                className="bg-white text-slate-800 border-2 border-slate-200 hover:border-slate-300 text-lg font-bold rounded-2xl px-8 py-4 transition-all flex items-center justify-center gap-2 hover:bg-slate-50"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us
                            </a>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative order-1 lg:order-2"
                    >
                        <div className="relative aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent z-10" />

                            <Image
                                src="/hero-fresh.png"
                                alt="Fresh laundry blowing in the wind"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Trusted by</p>
                                        <p className="text-lg font-bold text-slate-900">5000+ Families</p>
                                    </div>
                                    <div className="flex -space-x-2">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">R</div>
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">S</div>
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center text-white text-xs font-bold">A</div>
                                        <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-600 text-xs font-bold">+</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
