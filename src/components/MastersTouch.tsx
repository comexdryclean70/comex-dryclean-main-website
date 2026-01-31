"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MastersTouch() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-5">

                {/* Mobile: Image First, Then Content */}
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full lg:w-1/2 relative order-1"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10">
                            <Image
                                src="/lehenga-inspection.png"
                                alt="Expert inspecting premium lehenga with magnifying glass"
                                fill
                                className="object-cover"
                            />
                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />

                            {/* Floating Badge */}
                            <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:bottom-6">
                                <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg inline-flex items-center gap-3">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                    <p className="font-bold text-slate-900 text-sm sm:text-base">Careful work, done properly.</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Frame - Desktop Only */}
                        <div className="hidden lg:block absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-200 rounded-3xl -z-10 bg-amber-50/30" />
                    </motion.div>

                    {/* Copy Side */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="w-full lg:w-1/2 order-2"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-full mb-6">
                            <span className="text-lg">✋</span>
                            <span className="text-sm font-bold text-slate-700 uppercase tracking-wider">Hand Inspection</span>
                        </div>

                        {/* Headline */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
                            Because Some Things{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">
                                Shouldn't Be Automated
                            </span>
                        </h2>

                        {/* Content */}
                        <div className="space-y-5 text-base sm:text-lg text-slate-600 leading-relaxed">
                            <p>
                                <span className="font-semibold text-slate-800">Machines are fast.</span>
                                {' '}They just don't notice the details that matter.
                            </p>

                            <p>
                                Before any garment is cleaned, it's opened up and checked by hand.
                                We look for stains that don't show up at first glance, weak seams,
                                colour bleed, and how the fabric will react.
                            </p>

                            <p className="font-medium text-slate-700">
                                Only then do we decide how it should be treated.
                            </p>
                        </div>

                        {/* Fabric Callout */}
                        <div className="my-6 p-5 bg-slate-900 rounded-2xl text-white">
                            <p className="text-lg font-medium leading-relaxed">
                                <span className="text-amber-400">Silk</span> isn't <span className="text-amber-400">Wool</span>.<br />
                                <span className="text-amber-400">Zari</span> isn't <span className="text-amber-400">Cotton</span>.<br />
                                <span className="text-slate-400 text-base">And treating them the same way is how clothes lose their shape, colour, and life.</span>
                            </p>
                        </div>

                        {/* Closing */}
                        <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed">
                            <p>
                                Yes, this takes more time. But it's also why your clothes come back
                                looking the way they're supposed to.
                            </p>

                            <p className="font-bold text-slate-900 text-lg sm:text-xl">
                                No shortcuts. Just careful work, done properly.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
