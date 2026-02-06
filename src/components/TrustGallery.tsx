"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
    { label: "Happy Customers", value: "5,000+" },
    { label: "Years of Service", value: "30+" },
    { label: "Award Winning", value: "Top Rated" },
];

const TESTIMONIAL = {
    name: "Priya Sharma",
    role: "Resident, Dwarka Sector 10",
    quote: "Comex exceeded my expectations! They handled my wedding lehenga with such care. The embroidery looks as good as new. Highly recommend their premium service to anyone looking for top-notch cleaning!",
    rating: 5,
    avatar: "/trust-inspection.png" // using existing asset as avatar placeholder
};

export default function TrustGallery() {
    return (
        <section className="bg-[#FDF8F3] relative overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Side - Image */}
                    <div className="relative h-[500px] lg:h-[600px] w-full flex items-end justify-center lg:justify-start">
                        {/* Blob Background */}
                        <div className="absolute bottom-0 left-0 lg:left-10 w-[90%] h-[70%] bg-[#006A4E]/10 rounded-t-[100px] -z-10"></div>

                        <Image
                            src="/comex-shop-front-new.jpg"
                            alt="Comex Dry Cleaners Shop Front"
                            fill
                            className="object-cover drop-shadow-2xl rounded-tr-[100px]"
                            priority
                        />

                        {/* Floating Badge (Left) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="absolute top-20 -left-4 lg:left-0 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3 max-w-[200px]"
                        >
                            <div className="bg-orange-100 p-2 rounded-full">
                                <Star className="w-5 h-5 text-orange-500 fill-orange-500" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 font-bold uppercase">Rating</p>
                                <p className="text-lg font-bold text-slate-800">4.9/5.0</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="pb-20 lg:pb-0">
                        {/* Floating Avatars Header */}
                        <div className="flex items-center justify-end mb-6 gap-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden relative">
                                        <Image src={`/trust-expertise.png`} alt="Client" fill className="object-cover opacity-80" />
                                    </div>
                                ))}
                            </div>
                            <div className="flex bg-white px-3 py-1 rounded-full shadow-sm border border-slate-100 items-center gap-1">
                                <Star className="w-3 h-3 text-orange-500 fill-orange-500" />
                                <span className="text-xs font-bold text-slate-700">5.0</span>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-slate-500 uppercase tracking-widest font-bold text-sm mb-2">Client Success</h2>
                            <h3 className="text-4xl md:text-5xl font-serif text-[#003366] mb-12 font-bold">
                                Stories And Reviews
                            </h3>

                            {/* Main Testimonial Card */}
                            <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-slate-100">
                                {/* Large Quote Icon */}
                                <Quote className="absolute top-8 right-8 w-16 h-16 text-slate-100 fill-slate-100 -rotate-12" />

                                <div className="flex gap-1 mb-6">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                                    ))}
                                    <span className="ml-2 text-slate-800 font-bold">5.0</span>
                                </div>

                                <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10 font-medium">
                                    &quot;{TESTIMONIAL.quote}&quot;
                                </p>

                                <div className="flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-blue-50">
                                        <Image src={TESTIMONIAL.avatar} alt={TESTIMONIAL.name} fill className="object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#003366]">{TESTIMONIAL.name}</h4>
                                        <p className="text-sm text-slate-500">{TESTIMONIAL.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Stats Strip - Green/Emerald to match reference */}
            <div className="bg-[#006A4E] py-12 md:py-16 mt-[-40px] lg:mt-0 relative z-0">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {STATS.map((stat, idx) => (
                            <div key={idx} className="pt-8 md:pt-0 px-4">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-emerald-100 font-medium tracking-wide uppercase text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
