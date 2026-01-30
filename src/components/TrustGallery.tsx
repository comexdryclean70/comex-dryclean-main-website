"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const TRUST_CARDS = [
    {
        title: "30+ Years of Expertise",
        desc: "We’ve been serving Dwarka since the 90s. We know fabrics inside out—from vintage silks to modern synthetics.",
        image: "/trust-expertise.png",
        alt: "Vintage dry cleaning shop",
    },
    {
        title: "Personalized Inspection",
        desc: "We don't just toss clothes in a machine. We inspect every stain, check every button, and choose the right treatment for it.",
        image: "/trust-inspection.png",
        alt: "Magnifying glass inspecting fabric",
    },
    {
        title: "On-Time, Every Time",
        desc: "No chasing us for your delivery. We stick to the schedule we give you, so you can plan your day.",
        image: "/trust-delivery.png",
        alt: "Neat stack of clothes with clock",
    },
    {
        title: "Premium Solvents Only",
        desc: "We use safe, high-grade solvents that protect color and texture. No harsh chemicals that fade your favorites.",
        image: "/trust-solvents.png",
        alt: "Premium clear solvent",
    },
    {
        title: "Zero Mixing Policy",
        desc: "Hygiene first. Your clothes are processed in their own batch, never mixed with other orders.",
        image: "/trust-packaging.png",
        alt: "Individually packaged garments",
    },
];

export default function TrustGallery() {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Fabric Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-orange-100/50 border border-orange-200 px-4 py-1.5 rounded-full text-orange-800 text-sm font-bold shadow-sm backdrop-blur-sm">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />)}
                        </div>
                        Rated 4.9/5 by 500+ Local Families
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-serif">
                        Why Neighbors Trust Comex.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Your clothes deserve more than just a wash. They deserve care.
                    </p>
                </div>

                {/* Mobile: Snap Scrolling Carousel */}
                <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide">
                    {TRUST_CARDS.map((card, idx) => (
                        <motion.div
                            key={idx}
                            className="snap-center shrink-0 w-[85vw] max-w-sm bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative h-56 w-full bg-slate-200">
                                <Image
                                    src={card.image}
                                    alt={card.alt}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-blue-950 mb-3 font-serif">{card.title}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{card.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop: Masonry-style Grid */}
                <div className="hidden md:grid grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {/* Card 1: Large Span */}
                    <div className="col-span-2 row-span-1 group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-default">
                        <Image src={TRUST_CARDS[0].image} alt={TRUST_CARDS[0].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent flex flex-col justify-end p-8">
                            <h3 className="text-2xl font-bold text-white mb-2 font-serif">{TRUST_CARDS[0].title}</h3>
                            <p className="text-blue-100 text-lg max-w-lg shadow-black drop-shadow-md">{TRUST_CARDS[0].desc}</p>
                        </div>
                    </div>

                    {/* Card 2: Vertical */}
                    <div className="col-span-1 row-span-1 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className="h-48 relative overflow-hidden">
                            <Image src={TRUST_CARDS[1].image} alt={TRUST_CARDS[1].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-blue-950 mb-2 font-serif">{TRUST_CARDS[1].title}</h3>
                            <p className="text-slate-600 text-sm">{TRUST_CARDS[1].desc}</p>
                        </div>
                    </div>

                    {/* Card 3: Standard */}
                    <div className="col-span-1 row-span-1 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className="h-48 relative overflow-hidden">
                            <Image src={TRUST_CARDS[2].image} alt={TRUST_CARDS[2].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-blue-950 mb-2 font-serif">{TRUST_CARDS[2].title}</h3>
                            <p className="text-slate-600 text-sm">{TRUST_CARDS[2].desc}</p>
                        </div>
                    </div>

                    {/* Card 4: Standard */}
                    <div className="col-span-1 row-span-1 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className="h-48 relative overflow-hidden">
                            <Image src={TRUST_CARDS[3].image} alt={TRUST_CARDS[3].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-blue-950 mb-2 font-serif">{TRUST_CARDS[3].title}</h3>
                            <p className="text-slate-600 text-sm">{TRUST_CARDS[3].desc}</p>
                        </div>
                    </div>

                    {/* Card 5: Standard */}
                    <div className="col-span-1 row-span-1 bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                        <div className="h-48 relative overflow-hidden">
                            <Image src={TRUST_CARDS[4].image} alt={TRUST_CARDS[4].alt} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-blue-950 mb-2 font-serif">{TRUST_CARDS[4].title}</h3>
                            <p className="text-slate-600 text-sm">{TRUST_CARDS[4].desc}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
