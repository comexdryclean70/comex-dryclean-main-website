"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MastersTouch() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/masters-touch.png"
                                alt="Master craftsman inspecting fabric by hand"
                                fill
                                className="object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur text-blue-950 px-6 py-3 rounded-xl shadow-lg border border-white">
                                <p className="font-serif font-bold text-lg">"No shortcuts."</p>
                            </div>
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-orange-200 rounded-3xl -z-10 bg-orange-50/50"></div>
                    </motion.div>

                    {/* Copy Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-serif mb-6 leading-tight">
                            Why We Do Things the <span className="text-orange-600">Old-Fashioned Way.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                            <p>
                                Machines are fast, but they can't see stains. That’s why we stick to what works.
                            </p>
                            <p>
                                We inspect every garment by hand and treat stains individually before the cleaning even starts. It takes longer, but it’s the only way to ensure your Zari, Silk, and Wool come back looking perfect.
                            </p>
                            <p className="font-bold text-blue-900">
                                No shortcuts. Just care.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
