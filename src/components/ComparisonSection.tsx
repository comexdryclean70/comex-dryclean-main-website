import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";

const COMPARISON_POINTS = [
    {
        feature: "The Solvent",
        them: { text: "Industrial Detergents", sub: "Harsh, fades color", negative: true },
        us: { text: "Petrol Wash & PERC", sub: "Revives fabric luster", negative: false }
    },
    {
        feature: "The Process",
        them: { text: "Batch Washing", sub: "Mixed with strangers' clothes", negative: true },
        us: { text: "Individual Processing", sub: "Tagged & treated separately", negative: false }
    },
    {
        feature: "The Finish",
        them: { text: "Machine Ironing", sub: "Flattens texture", negative: true },
        us: { text: "Vacuum Steam Press", sub: "Restores 3D shape & fall", negative: false }
    }
];

export default function ComparisonSection() {
    return (
        <section className="py-20 px-4 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 font-serif mb-4">
                        Why "Old School" is Better <br /> for Your Expensive Clothes.
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Modern apps prioritize speed. We prioritize the fabric. Here’s the difference.
                    </p>
                </div>

                {/* Mobile: Stacked Cards */}
                <div className="md:hidden space-y-6">
                    {COMPARISON_POINTS.map((point, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-green-500"></div>

                            <h3 className="font-bold text-slate-800 text-lg mb-4 uppercase tracking-wider">{point.feature}</h3>

                            {/* Them */}
                            <div className="mb-4 pl-4 border-l-2 border-red-200 opacity-70">
                                <div className="flex items-start gap-2 text-red-700 font-bold text-sm">
                                    <X className="w-4 h-4 mt-0.5 shrink-0" /> {point.them.text}
                                </div>
                                <div className="text-xs text-slate-500 mt-1 pl-6">{point.them.sub}</div>
                            </div>

                            {/* Us */}
                            <div className="pl-4 border-l-2 border-green-400 bg-white/50 py-2 rounded-r-lg">
                                <div className="flex items-start gap-2 text-green-700 font-bold text-lg">
                                    <Check className="w-5 h-5 mt-1 shrink-0" /> {point.us.text}
                                </div>
                                <div className="text-sm text-slate-600 mt-1 pl-7 font-medium">{point.us.sub}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Desktop: Comparison Table */}
                <div className="hidden md:block bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-slate-50 p-6 border-b border-slate-100 text-sm font-bold uppercase tracking-widest text-slate-500">
                        <div className="pl-8">Feature</div>
                        <div className="text-center text-red-500">Generic Apps</div>
                        <div className="text-center text-blue-900">Comex Drycleaners</div>
                    </div>

                    {/* Rows */}
                    {COMPARISON_POINTS.map((point, idx) => (
                        <div key={idx} className="grid grid-cols-3 p-8 border-b border-slate-50 hover:bg-slate-50/50 transition-colors items-center group">
                            {/* Feature */}
                            <div className="font-bold text-slate-800 text-lg pl-8 group-hover:text-blue-900 transition-colors">
                                {point.feature}
                            </div>

                            {/* Them */}
                            <div className="text-center opacity-60 group-hover:opacity-100 transition-opacity">
                                <div className="flex flex-col items-center gap-1">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 mb-2">
                                        <X className="w-5 h-5" />
                                    </div>
                                    <div className="font-bold text-slate-700">{point.them.text}</div>
                                    <div className="text-xs text-slate-400">{point.them.sub}</div>
                                </div>
                            </div>

                            {/* Us */}
                            <div className="text-center relative">
                                <div className="absolute inset-0 bg-blue-50/0 group-hover:bg-blue-50/50 -mx-4 -my-8 z-0 transition-colors rounded-xl"></div>
                                <div className="relative z-10 flex flex-col items-center gap-1">
                                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 shadow-sm mb-2 scale-100 group-hover:scale-110 transition-transform">
                                        <Check className="w-6 h-6" strokeWidth={3} />
                                    </div>
                                    <div className="font-bold text-blue-950 text-xl">{point.us.text}</div>
                                    <div className="text-sm text-blue-600 font-medium">{point.us.sub}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
