import { ShieldCheck, ScanFace, Clock, Sparkles, Layers } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustSection() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 font-serif mb-4">
                        Why Neighbors Trust Comex.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Your clothes deserve more than just a wash. They deserve care.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Card 1: Expertise - Large Spanning Card */}
                    <div className="md:col-span-2 bg-blue-50/50 p-8 rounded-3xl border border-blue-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                            <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-900 group-hover:scale-110 transition-transform duration-300">
                                <ShieldCheck className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-blue-950 mb-3">30+ Years of Expertise</h3>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    We’ve been serving Dwarka since the 90s. We know fabrics inside out—from vintage silks to modern synthetics.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Inspection */}
                    <div className="bg-orange-50/50 p-8 rounded-3xl border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-900 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                            <ScanFace className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-950 mb-3">Personalized Inspection</h3>
                        <p className="text-slate-700 leading-relaxed">
                            We don't just toss clothes in a machine. We inspect every stain, check every button, and choose the right treatment.
                        </p>
                    </div>

                    {/* Card 3: Timeliness */}
                    <div className="bg-green-50/50 p-8 rounded-3xl border border-green-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-900 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Clock className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-950 mb-3">On-Time, Every Time</h3>
                        <p className="text-slate-700 leading-relaxed">
                            No chasing us for your delivery. We stick to the schedule we give you, so you can plan your day.
                        </p>
                    </div>

                    {/* Card 4: Specialized Chemicals - Spanning */}
                    <div className="md:col-span-2 bg-purple-50/50 p-8 rounded-3xl border border-purple-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row-reverse gap-6 items-start md:items-center">
                            <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-900 group-hover:scale-110 transition-transform duration-300 md:ml-auto">
                                <Sparkles className="w-10 h-10" strokeWidth={1.5} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-blue-950 mb-3">Premium Solvents Only</h3>
                                <p className="text-slate-700 leading-relaxed text-lg">
                                    We use safe, high-grade solvents that protect color and texture. No harsh chemicals that fade your favorites.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Hygiene */}
                    <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                        <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-900 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Layers className="w-8 h-8" strokeWidth={1.5} />
                        </div>
                        <h3 className="text-xl font-bold text-blue-950 mb-3">Zero Mixing Policy</h3>
                        <p className="text-slate-700 leading-relaxed">
                            Hygiene first. Your clothes are processed in their own batch, never mixed.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
