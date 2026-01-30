"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar, Star, CheckCircle } from "lucide-react";

export default function HeroModern() {
    return (
        <section className="relative w-full h-auto min-h-[90vh] lg:min-h-[850px] bg-[#f9fafb] overflow-hidden flex items-center pt-20 lg:pt-0">

            {/* Background Blob - Subtle Blue */}
            <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-[#0890f1]/5 blur-3xl -z-10"></div>

            <div className="w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content */}
                <div className="space-y-8 order-2 lg:order-1">
                    {/* TrustPilot Style Badge */}
                    <div className="flex items-center gap-2">
                        <div className="flex bg-[#00b67a] text-white px-2 py-1 rounded text-sm font-bold items-center gap-1">
                            <Star className="w-4 h-4 fill-white" /> 4.9
                        </div>
                        <div className="text-slate-500 text-sm font-medium">
                            Excellent on <span className="font-bold text-slate-800">Trustpilot</span>
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.15] tracking-tight">
                        The easiest way to get your <span className="text-[#0890f1]">laundry</span> & <span className="text-[#0890f1]">dry cleaning</span> done.
                    </h1>

                    <p className="text-lg text-slate-600 max-w-lg leading-relaxed">
                        We collect, clean, and deliver your laundry in 24 hours. Free pickup and delivery in Dwarka & Palam.
                    </p>

                    {/* Booking Widget (Mobile/Desktop Hybrid) */}
                    <div className="bg-white p-2 rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col sm:flex-row gap-2 max-w-xl">

                        {/* Input Area */}
                        <div className="flex-1 flex items-center gap-3 px-6 py-4 border-b sm:border-b-0 sm:border-r border-slate-100">
                            <MapPin className="w-5 h-5 text-[#00cba9]" />
                            <div>
                                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Postcode / Area</label>
                                <input type="text" placeholder="e.g. Dwarka Sec 7" className="w-full outline-none text-slate-800 font-bold placeholder:font-normal" />
                            </div>
                        </div>

                        {/* Button */}
                        <Link href="/booking" className="bg-[#0890f1] hover:bg-[#007acc] text-white rounded-[1.5rem] px-8 py-4 font-bold transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2 whitespace-nowrap active:scale-[0.98]">
                            Book now
                        </Link>
                    </div>

                    {/* USPs */}
                    <div className="flex flex-wrap gap-4 pt-2">
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                            <CheckCircle className="w-4 h-4 text-[#00cba9]" /> 24h Turnaround
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                            <CheckCircle className="w-4 h-4 text-[#00cba9]" /> Lowest Price Guarantee
                        </div>
                        <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                            <CheckCircle className="w-4 h-4 text-[#00cba9]" /> Eco-friendly
                        </div>
                    </div>

                </div>

                {/* Right Image - Organic Blob */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[500px] aspect-square">
                        {/* Organic Blob Mask Container */}
                        <div className="absolute inset-0 bg-blue-100 rounded-[3rem] rotate-3 overflow-hidden shadow-2xl">
                            <Image
                                src="/hero-bright.png"
                                alt="Happy customer"
                                fill
                                className="object-cover object-top hover:scale-105 transition-transform duration-700"
                                priority
                            />
                        </div>

                        {/* Floating Elements for Depth */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 animate-bounce-slow">
                            <div className="w-10 h-10 rounded-full bg-[#e6fcf8] flex items-center justify-center text-[#00cba9]">
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <div>
                                <div className="font-bold text-slate-800">4.9/5 Rating</div>
                                <div className="text-xs text-slate-500">Based on 5000+ Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
