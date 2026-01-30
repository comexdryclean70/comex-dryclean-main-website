import Link from "next/link";
import Image from "next/image";
import { Calendar, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-12 px-6 lg:pt-32 lg:pb-20 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left: Text Content */}
                <div className="relative z-10 text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 bg-blue-100/50 text-blue-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 border border-blue-200">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Serving Dwarka, Mahavir Enclave & Palam
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] text-blue-950 font-serif">
                        Expert Care for Your <br />
                        <span className="text-orange-500 italic">Favourite Clothes.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
                        Free pickup & delivery at your doorstep. We treat every fabric with the care it deserves.
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
                    <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white/50">
                        <Image
                            src="/hero-illustration.png"
                            alt="Friendly delivery person handing clothes to customer"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-white/50 max-w-[200px]">
                            <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">Response Time</p>
                            <div className="text-2xl font-bold text-blue-950">24 Hours</div>
                            <p className="text-xs text-green-600 mt-1 font-medium flex items-center gap-1">
                                ✓ Express Delivery
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
