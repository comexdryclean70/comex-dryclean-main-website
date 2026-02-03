"use client";

import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative w-full bg-[#FDF8F3] overflow-hidden min-h-[90vh]">
            {/* Decorative Sparkles */}
            <div className="absolute top-32 left-[30%] text-emerald-600 text-2xl">✦</div>
            <div className="absolute top-48 right-[35%] text-emerald-600 text-lg">✦</div>
            <div className="absolute top-20 right-[20%] text-slate-300 text-3xl font-light">✧</div>
            <div className="absolute bottom-[30%] right-[15%] text-slate-300 text-2xl font-light">✧</div>
            <div className="absolute bottom-[40%] left-[5%] text-slate-300 text-xl font-light">✧</div>

            {/* Hero Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-5 pt-28 md:pt-36 pb-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-end">

                    {/* Text Content - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="space-y-6 text-left pb-12 lg:pb-24"
                    >
                        {/* Main Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight font-serif">
                            <span className="italic text-slate-800">Premium Care,</span>
                            <br />
                            <span className="relative inline-block">
                                <span className="font-bold text-red-600 relative z-10">Guaranteed Fresh.</span>
                                <svg className="absolute -bottom-2 left-0 w-full h-3 text-red-300 -z-10" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7501 2.99999 124.814 3.00003 166.085 4.30561C190.158 5.06716 195.034 5.25732 198.001 5.49997" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                            </span>
                        </h1>

                        {/* Subhead */}
                        <p className="text-base sm:text-lg text-slate-500 max-w-md leading-relaxed">
                            Not just cleaned. Properly cared for. Trusted dry cleaners serving Dwarka families for 30+ years.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link
                                href="/booking"
                                className="bg-[#D32F2F] hover:bg-red-800 text-white font-semibold rounded-lg px-6 py-3.5 shadow-lg shadow-red-900/20 transition-all hover:-translate-y-0.5"
                            >
                                Book Appointment
                            </Link>

                            <button className="flex items-center gap-3 group">
                                <div className="w-12 h-12 rounded-full bg-[#E8D5C4] flex items-center justify-center group-hover:bg-[#dcc7b3] transition-colors">
                                    <Play className="w-4 h-4 text-slate-700 ml-0.5" fill="currentColor" />
                                </div>
                                <span className="font-medium text-slate-700">How We Work</span>
                            </button>
                        </div>

                        {/* Stats Badge */}
                        <div className="flex items-center gap-4 pt-4">
                            <div className="bg-white rounded-xl px-5 py-3 shadow-lg border border-slate-100">
                                <div className="flex items-center gap-4">
                                    <div>
                                        <p className="text-2xl font-bold text-slate-900">5,000+</p>
                                        <p className="text-xs text-slate-500">Happy Customers</p>
                                    </div>
                                    {/* Avatar Stack */}
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
                                    </div>
                                    {/* Arrow */}
                                    <svg className="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 12c4-8 12-8 16 0" />
                                        <path d="M20 12l-3-3m3 3l-3 3" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Preview Images */}
                        <div className="flex gap-3 pt-4">
                            <div className="relative w-24 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                                <Image
                                    src="/step-cleaning.png"
                                    alt="Professional cleaning"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative w-24 h-20 rounded-xl overflow-hidden shadow-lg border-2 border-white">
                                <Image
                                    src="/step-delivery.png"
                                    alt="Fast delivery"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Hero Image - Right Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-end items-end"
                    >
                        {/* Decorative Background Shape */}
                        <div className="absolute bottom-0 right-0 w-[90%] h-[85%] bg-[#E8D5C4] rounded-tl-[80px] -z-10"></div>

                        {/* Person Image */}
                        <div className="relative w-full max-w-lg">
                            <Image
                                src="/hero-master-pressman.png"
                                alt="Master Pressman ironing a shirt"
                                width={500}
                                height={600}
                                className="object-cover rounded-2xl shadow-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
