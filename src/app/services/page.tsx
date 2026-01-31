"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, MoveRight } from "lucide-react";
import Logo from "@/components/Logo";
import MainFooter from "@/components/MainFooter";
import StickyFooter from "@/components/StickyFooter";

const SERVICES = [
    {
        id: "dry-cleaning",
        title: "Dry Cleaning",
        subtitle: "Men & Women",
        desc: "From bespoke suits to delicate evening wear, we treat your fabrics with the respect they deserve. Hand-finished for that perfect drape.",
        image: "/services/dry-cleaning.png",
        cols: "md:col-span-2",
        rows: "md:row-span-2",
        dark: true
    },
    {
        id: "steam-pressing",
        title: "Steam Pressing",
        subtitle: "Crisp & Professional",
        desc: "The perfect finish. High-pressure steam pressing that restores structure and crispness to your daily wear.",
        image: "/services/steam-pressing.png",
        cols: "md:col-span-1",
        rows: "md:row-span-1",
        dark: false
    },
    {
        id: "shoe-laundry",
        title: "Shoe Laundry",
        subtitle: "Sneaker Care",
        desc: "Deep cleaning for your premium kicks. We remove dirt, stains, and odors, making them look brand new.",
        image: "/services/shoe-laundry.png",
        cols: "md:col-span-1",
        rows: "md:row-span-1",
        dark: false
    },
    {
        id: "home-care",
        title: "Carpet & Sofa",
        subtitle: "Home Revival",
        desc: "Breathe new life into your living space. Deep extraction cleaning that removes dust, allergens, and stains.",
        image: "/services/home-care.png",
        cols: "md:col-span-1",
        rows: "md:row-span-2",
        dark: false
    },
    {
        id: "heavy-items",
        title: "Blankets & Curtains",
        subtitle: "Heavy Care",
        desc: "Big items need big care. We handle your heavy comforters and delicate drapes with specialized large-format machines.",
        image: "/services/heavy-items.png",
        cols: "md:col-span-2",
        rows: "md:row-span-1",
        dark: true
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#fffdfa] selection:bg-red-100 selection:text-[#D32F2F] pb-20 md:pb-0">
            {/* Header */}
            <nav className="absolute top-0 left-0 w-full p-6 md:p-8 z-30 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                <Link href="/" className="relative hover:scale-105 transition-transform">
                    <Logo variant="brand" className="w-40 md:w-48" />
                </Link>

                <div className="hidden md:flex items-center gap-8 bg-white/80 backdrop-blur-sm pl-6 pr-2 py-2 rounded-full border border-slate-100 shadow-sm">
                    <Link href="/" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors">Home</Link>
                    <Link href="/pricing" className="text-sm font-extrabold text-[#003366]/70 hover:text-[#003366] uppercase tracking-wider transition-colors mr-2">Pricing</Link>
                    <Link href="/booking" className="text-sm font-bold bg-[#D32F2F] text-white px-6 py-3 rounded-full shadow-lg shadow-red-900/20 hover:bg-[#b91c1c] transition-all transform hover:-translate-y-0.5">
                        Book Now
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6">
                <div className="max-w-7xl mx-auto text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 bg-blue-50/80 px-4 py-1.5 rounded-full text-[#003366] text-xs font-bold tracking-widest uppercase border border-blue-100"
                    >
                        <Sparkles className="w-3 h-3 text-[#D32F2F]" />
                        <span>Comex Premium Services</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-sans font-black text-[#003366] tracking-tight"
                    >
                        Beyond Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D32F2F] to-[#b91c1c]">Laundry.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 max-w-2xl mx-auto font-serif italic"
                    >
                        "We offer specialized care for every fabric in your life. From your favorite sneakers to your living room sofa."
                    </motion.p>
                </div>
            </section>

            {/* Services Bento Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative group rounded-[2.5rem] overflow-hidden ${service.cols} ${service.rows}`}
                        >
                            <Link href="/booking" className="block h-full w-full">
                                {/* Image Background */}
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />

                                {/* Overlay Gradient */}
                                <div className={`absolute inset-0 transition-opacity duration-500 ${service.dark ? 'bg-gradient-to-t from-[#003366]/90 via-[#003366]/20 to-transparent opacity-80 group-hover:opacity-90' : 'bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80'}`} />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-2">
                                            {service.subtitle}
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-sans font-bold text-white mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-white/90 text-sm md:text-base max-w-md line-clamp-2 md:line-clamp-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                            {service.desc}
                                        </p>

                                        <div className="mt-4 inline-flex items-center gap-2 text-white font-bold text-sm bg-white/20 backdrop-blur-md px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 hover:bg-white hover:text-[#003366]">
                                            Book This Service <MoveRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </section>

            <StickyFooter />
            <MainFooter />
        </main>
    );
}
