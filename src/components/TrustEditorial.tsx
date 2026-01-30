"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const CARDS = [
    {
        id: 1,
        title: "The Legacy",
        subtitle: "30 Years of Craftsmanship",
        desc: "It starts with hands that know the difference between silk and satin.",
        img: "/trust-legacy.png",
        color: "bg-stone-100" // Light Warm Beige
    },
    {
        id: 2,
        title: "The Inspection",
        subtitle: "Obsessive Detail",
        desc: "We check every inch of fabric weave before a single drop of solvent touches it.",
        img: "/trust-inspection.png",
        color: "bg-orange-50" // Soft Warmth
    },
    {
        id: 3,
        title: "The Science",
        subtitle: "Gentle Chemistry",
        desc: "Petrol-wash technology that revives luster without harsh industrial detergents.",
        img: "/trust-science.png",
        color: "bg-blue-50" // Cool Clean
    },
    {
        id: 4,
        title: "The Respect",
        subtitle: "Final Presentation",
        desc: "Returned to you crisp, hung, and ready to wear. Treated like an investment.",
        img: "/trust-respect.png",
        color: "bg-slate-50" // Neutral
    }
];

export default function TrustEditorial() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 md:px-6">

                {/* Header */}
                <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-serif mb-6">
                        The Life of a Garment
                    </h2>
                    <p className="text-lg text-slate-500 font-medium">
                        We don't just "wash" clothes. We restore them through a 4-stage ritual of care.
                    </p>
                </div>

                {/* Mobile: Sticky Stack Layout */}
                <div className="md:hidden flex flex-col gap-4 pb-12">
                    {CARDS.map((card, i) => (
                        <div key={card.id} className="sticky top-24 pt-4">
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                whileInView={{ scale: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className={`relative rounded-3xl overflow-hidden shadow-2xl ${card.color} border border-white/50 aspect-[4/5]`}
                            >
                                <Image
                                    src={card.img}
                                    alt={card.title}
                                    fill
                                    className="object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                                    <div className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">{card.subtitle}</div>
                                    <h3 className="text-3xl font-serif font-bold mb-3">{card.title}</h3>
                                    <p className="text-sm opacity-90 leading-relaxed font-light">{card.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>


                {/* Desktop: Asymmetrical Masonry */}
                <div className="hidden md:grid grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[300px]">
                    {/* Card 1: Legacy (Large Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 row-span-2 relative rounded-3xl overflow-hidden group shadow-xl"
                    >
                        <Image src={CARDS[0].img} alt="Legacy" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                        <div className="absolute bottom-10 left-10 text-white max-w-md">
                            <div className="font-handwriting text-3xl text-orange-400 -rotate-2 mb-2">Since 1990</div>
                            <h3 className="text-5xl font-serif font-bold mb-4">{CARDS[0].title}</h3>
                            <p className="text-lg opacity-90">{CARDS[0].desc}</p>
                        </div>
                    </motion.div>

                    {/* Card 2: Inspection (Tall Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="lg:col-span-5 row-span-2 relative rounded-3xl overflow-hidden group shadow-xl"
                    >
                        <Image src={CARDS[1].img} alt="Inspection" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 text-white">
                            <h3 className="text-3xl font-serif font-bold mb-2">{CARDS[1].title}</h3>
                            <p className="opacity-90">{CARDS[1].desc}</p>
                        </div>
                    </motion.div>

                    {/* Card 3: Science (Small Left) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 relative rounded-3xl overflow-hidden group shadow-xl"
                    >
                        <Image src={CARDS[2].img} alt="Science" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-transparent transition-colors"></div>
                        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-6 bg-black/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <h3 className="text-2xl font-serif font-bold mb-2">{CARDS[2].title}</h3>
                            <p className="text-sm">{CARDS[2].desc}</p>
                        </div>
                    </motion.div>

                    {/* Card 4: Respect (Wide Right) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-7 relative rounded-3xl overflow-hidden group shadow-xl bg-slate-900"
                    >
                        <Image src={CARDS[3].img} alt="Respect" fill className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-100" />
                        <div className="absolute bottom-8 right-8 text-white text-right">
                            <h3 className="text-2xl font-serif font-bold mb-1">{CARDS[3].title}</h3>
                            <p className="text-sm opacity-80">{CARDS[3].subtitle}</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
