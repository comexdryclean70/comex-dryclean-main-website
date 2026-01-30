import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative w-full h-auto min-h-[90vh] bg-[#0a0f1c] overflow-hidden flex items-center">

            {/* Background Image - The "Atmospheric Blend" */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Desktop: Right-side blend with gradient mask */}
                <div className="hidden lg:block absolute inset-0">
                    <div className="absolute top-0 right-0 w-[65%] h-full">
                        <div style={{ maskImage: "linear-gradient(to right, transparent, black 40%)", WebkitMaskImage: "linear-gradient(to right, transparent, black 40%)" }} className="w-full h-full relative">
                            <Image
                                src="/hero-cinematic.png"
                                alt="Dark Fabric Texture"
                                fill
                                className="object-cover object-center opacity-90"
                                priority
                            />
                        </div>
                    </div>
                    {/* Seamless Gradient Overlay from Left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1c] via-[#0a0f1c] to-transparent z-10 w-[60%]"></div>
                </div>

                {/* Mobile: Top overlay with dimming */}
                <div className="lg:hidden absolute inset-0 h-[65%]">
                    <Image
                        src="/hero-cinematic.png"
                        alt="Dark Fabric Texture"
                        fill
                        className="object-cover object-top opacity-60"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c]/30 via-[#0a0f1c]/80 to-[#0a0f1c]"></div>
                </div>
            </div>

            {/* Content Container */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 pt-24 lg:pt-0">

                {/* Text Content */}
                <div className="space-y-8 lg:pr-10">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-orange-400 text-xs font-bold uppercase tracking-widest shadow-lg animate-pulse">
                        <Sparkles className="w-3 h-3" />
                        <span>German Eco-Solvents</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                        Expert Care for <br />
                        <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Premium Wear</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-300 max-w-xl font-light leading-relaxed">
                        Traditional hand-finishing meets modern eco-technology.
                        We don't just clean your clothes; we extend their lifespan.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Link
                            href="/booking"
                            className="group inline-flex items-center justify-center gap-3 bg-white text-[#0a0f1c] font-bold py-4 px-8 rounded-full transition-all text-lg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105"
                        >
                            <Calendar className="w-5 h-5 text-orange-600 group-hover:rotate-12 transition-transform" />
                            <span>Book Pickup</span>
                        </Link>

                        <a
                            href="tel:9250885310"
                            className="inline-flex items-center justify-center gap-3 bg-transparent border border-white/20 hover:border-white/50 text-white font-medium py-4 px-8 rounded-full transition-all text-lg backdrop-blur-sm hover:bg-white/5"
                        >
                            <span>9250-885-310</span>
                            <ArrowRight className="w-4 h-4 opacity-50" />
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex items-center gap-6 pt-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <span className="text-xs uppercase tracking-widest text-slate-400 border-l px-4 border-slate-700">Trusted by 5000+ Families in Dwarka</span>
                    </div>
                </div>

                {/* Desktop Right Side - Empty for Image Blend, but holds the Floating Badge */}
                <div className="hidden lg:flex items-center justify-center relative">
                    {/* Floating Glassmorphism Badge */}
                    <div className="absolute right-10 bottom-20 w-64 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl animate-bounce-slow">
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-8 h-8 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            <span className="text-white font-bold text-sm">Eco-Friendly</span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            We use biodegradable solvents that are tough on stains but gentle on skin and fabric.
                        </p>
                    </div>
                </div>

            </div>

            {/* Soft bottom fade to merge with next section */}
            <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-[#0a0f1c] to-transparent z-10"></div>
        </section>
    );
}
