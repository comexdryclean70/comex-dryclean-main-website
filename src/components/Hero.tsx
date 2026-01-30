import Link from "next/link";
import Image from "next/image";
import { Calendar, Phone } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-28 pb-12 px-6 lg:pt-36 lg:pb-24 overflow-hidden bg-blue-950">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-50"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* Left: Text Content */}
                <div className="text-center lg:text-left order-2 lg:order-1">
                    <div className="inline-flex items-center gap-2 bg-blue-900/50 backdrop-blur-md text-blue-100 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase mb-8 border border-blue-800">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        Premium Garment Care
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] text-white font-serif">
                        Expert Dry Cleaning for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400 italic">Your Premium Wear.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-blue-100/90 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-sans">
                        Traditional hand-care for modern fabrics. Serving Dwarka since 2010. We specialize in delicate handling and restoration.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                            href="#booking"
                            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl transition-all text-lg shadow-lg shadow-orange-500/30 hover:-translate-y-1 hover:shadow-orange-500/50"
                        >
                            <Calendar className="w-5 h-5" /> Book Pickup
                        </Link>

                        <a
                            href="tel:9250885310"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-bold py-4 px-8 rounded-xl transition-all text-lg border border-white/20"
                        >
                            <Phone className="w-5 h-5" /> 9250-885-310
                        </a>
                    </div>

                    {/* Trust Icons (Light/Transparent) */}
                    <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-6 text-white/60 text-sm font-medium">
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> 30+ Years Exp</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> German Technology</span>
                        <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div> Premium Handling</span>
                    </div>
                </div>

                {/* Right: Pictorial Visual */}
                <div className="flex justify-center lg:justify-end order-1 lg:order-2 mb-2 lg:mb-0">
                    <div className="relative w-full max-w-[500px] lg:max-w-none aspect-[4/3] lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
                        <Image
                            src="/premium-tuxedo.png"
                            alt="Premium Dry Cleaning for Suits and Tuxedos"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Gradient Overlay for Mobile Fade if needed, but border radius looks cleaner */}
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent lg:hidden opacity-60"></div>

                        {/* Floating Badge */}
                        <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/20 max-w-[220px]">
                            <p className="text-[10px] text-orange-200 uppercase tracking-wider font-bold mb-1">Service Spotlight</p>
                            <div className="text-lg font-bold text-white leading-tight">Suits & Couture Care</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
                                ★ Specialist Handling
                            </p >
                        </div >
                    </div >
                </div >
            </div >
        </section >
    );
}
