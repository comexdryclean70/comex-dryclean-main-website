"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

export default function RequestCallback() {
    const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("loading");

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormState("success");
    };

    return (
        <section className="py-20 px-6 bg-[#0B1121] relative overflow-hidden border-b border-white/5">
            {/* Elegant Background - Minimal */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-[#121b33] rounded-sm p-8 md:p-12 border border-white/5 relative">

                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* Text Side */}
                        <div className="flex-1 text-center md:text-left">
                            <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] block mb-4">Concierge Service</span>

                            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4 leading-tight">
                                Too Busy to Call? <br />
                                We'll Call You.
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-sans">
                                Drop your number below. We'll answer all your questions about pricing and premium care.
                            </p>
                        </div>

                        {/* Form Side */}
                        <div className="w-full md:w-[400px]">
                            {formState === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8 bg-white/5 rounded-sm border border-white/10"
                                >
                                    <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-serif text-white mb-2">Request Received</h3>
                                    <p className="text-slate-400 text-sm">We'll be in touch shortly.</p>
                                    <button
                                        onClick={() => setFormState("idle")}
                                        className="mt-6 text-sm font-bold text-[#D4AF37] hover:text-white transition-colors uppercase tracking-wider"
                                    >
                                        Send another request
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 rounded-sm bg-[#0B1121] border border-white/10 focus:border-[#D4AF37] outline-none text-white placeholder:text-slate-600 font-sans transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            placeholder="Phone Number"
                                            className="w-full px-4 py-3 rounded-sm bg-[#0B1121] border border-white/10 focus:border-[#D4AF37] outline-none text-white placeholder:text-slate-600 font-sans transition-all"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formState === "loading"}
                                        className="w-full bg-[#D4AF37] text-[#0B1121] font-bold py-4 rounded-sm hover:bg-[#b89628] active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none uppercase tracking-wide text-sm"
                                    >
                                        {formState === "loading" ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" /> Sending...
                                            </>
                                        ) : (
                                            <>
                                                Request Call Back <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
