"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Clock } from "lucide-react";

export default function HeroAppStyle() {
    return (
        <section className="relative w-full h-auto min-h-[90vh] lg:min-h-[800px] bg-white overflow-hidden flex items-center">

            {/* Background Image - High Key Lifestyle */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bright.png"
                    alt="Happy customer with fresh dry cleaning"
                    fill
                    className="object-cover object-center lg:object-right opacity-90"
                    priority
                />
                {/* Clean White Gradient for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-[90%] lg:w-[60%]"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 pt-24 pb-12">

                <div className="max-w-xl">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e6fcf8] text-[#00cba9] text-sm font-bold mb-6">
                        <Clock className="w-4 h-4" /> 24h Turnaround Time
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold text-slate-800 leading-tight mb-6 tracking-tight">
                        Dry Cleaning & <br />
                        Laundry, <span className="text-[#00cba9]">Delivered.</span>
                    </h1>

                    <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                        The easiest way to get your laundry done. We pick up, clean, and deliver. Free pickup in Dwarka.
                    </p>

                    {/* Desktop Widget (Hidden on Mobile) */}
                    <div className="hidden lg:block bg-white p-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-slate-100 max-w-2xl">
                        <div className="flex items-center">
                            {/* Input 1: Location */}
                            <div className="flex-1 px-6 border-r border-slate-100 flex items-center gap-3">
                                <MapPin className="w-5 h-5 text-[#00cba9]" />
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Area</div>
                                    <div className="font-bold text-slate-800">Dwarka & Palam</div>
                                </div>
                            </div>

                            {/* Input 2: Date */}
                            <div className="flex-1 px-6 flex items-center gap-3">
                                <Calendar className="w-5 h-5 text-[#00cba9]" />
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Pickup Date</div>
                                    <div className="font-bold text-slate-800">Today, 2 PM - 4 PM</div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <Link href="/booking" className="bg-[#00cba9] hover:bg-[#00b596] text-white rounded-full px-8 py-4 font-bold transition-colors flex items-center gap-2 shadow-lg shadow-[#00cba9]/30">
                                Book Now <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Button (Simple Link, Sticky bar handles the rest) */}
                    <div className="lg:hidden">
                        <Link href="/booking" className="w-full bg-[#00cba9] text-white rounded-full py-4 px-8 font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-[#00cba9]/20">
                            Schedule Pickup Now
                        </Link>
                        <p className="text-center text-sm text-slate-400 mt-4">
                            4.9/5 Average Rating • 30 Years Experience
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}
