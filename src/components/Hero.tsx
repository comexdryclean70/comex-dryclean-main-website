import Link from "next/link";
import Image from "next/image";
import { Calendar, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-12 px-6 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-6 border border-orange-100">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Premium Garment Care
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-blue-950 font-serif">
                        Traditional Care for <br />
                        <span className="text-orange-600 italic">Modern Wear.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
                        Serving Dwarka since the 90s. We use time-tested, hand-finish techniques to protect your most expensive fabrics.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="#booking"
                            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                        >
                            <Calendar className="w-5 h-5" /> Book Pickup
                        </Link>

                        <a
                            href="tel:9250885310"
                            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-blue-900 font-bold py-4 px-8 rounded-xl transition-all text-lg border-2 border-blue-100 hover:border-blue-200"
                        >
                            <Phone className="w-5 h-5" /> 9250-885-310
                        </a>
                    </div>
                </div>

                {/* Right: Pictorial Visual */}
                <div className="relative z-10 flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
                    <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                        <Image
                            src="/premium-tuxedo.png"
                            alt="Premium Dry Cleaning for Suits and Tuxedos"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-slate-100 max-w-[220px]">
                            <p className="text-[10px] text-slate-400 uppercase tracking-wider font-bold mb-1">Service Spotlight</p>
                            <div className="text-lg font-bold text-blue-950 leading-tight">Suits & Couture Care</div>
                            <p className="text-xs text-orange-600 mt-1 font-bold flex items-center gap-1">
                                ★ Specialist Handling
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
