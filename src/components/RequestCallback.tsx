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
        <section className="py-20 px-4 bg-[#FDF8F3] relative overflow-hidden">
            {/* Background Texture & Orbs */}
            <div className="absolute inset-0 opacity-[0.03]"
                style={{ backgroundImage: "radial-gradient(#003366 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
            </div>
            <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-[#003366]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="max-w-4xl mx-auto relative z-10">
                <div className="bg-[#003366] rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">

                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-500/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        {/* Text Side */}
                        <div className="flex-1 text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3 py-1 rounded-full mb-6">
                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                <span className="text-xs font-bold text-white uppercase tracking-widest">We respond in 5 mins</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif leading-tight">
                                Too Busy to Call? <br />
                                <span className="text-orange-400">We'll Call You.</span>
                            </h2>
                            <p className="text-blue-100 text-lg leading-relaxed">
                                Drop your number below. We'll answer all your questions about pricing, pickup slots, and specialized care.
                            </p>
                        </div>

                        {/* Form Side */}
                        <div className="w-full md:w-[400px] bg-white rounded-2xl p-6 shadow-xl">
                            {formState === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="text-center py-8"
                                >
                                    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle2 className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-[#003366] mb-2">Request Received!</h3>
                                    <p className="text-slate-500 text-sm">Our team will call you shortly on the number provided.</p>
                                    <button
                                        onClick={() => setFormState("idle")}
                                        className="mt-6 text-sm font-bold text-orange-500 hover:text-orange-600 underline decoration-2 underline-offset-4"
                                    >
                                        Send another request
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-1 ml-1">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            placeholder="Your Name"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 mb-1 ml-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            placeholder="+91 98765 43210"
                                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#003366] focus:ring-1 focus:ring-[#003366] outline-none transition-all placeholder:text-slate-400 font-medium"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        disabled={formState === "loading"}
                                        className="w-full bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-orange-500/20 hover:bg-orange-600 active:scale-95 transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:pointer-events-none"
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
                                    <p className="text-xs text-center text-slate-400 mt-4">
                                        We respect your privacy. No spam, ever.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
