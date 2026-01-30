import { Leaf, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function TrustStrip() {
    const badges = [
        { icon: Leaf, text: "Petrol Wash Only", color: "text-amber-600", bg: "bg-amber-50" },
        { icon: Clock, text: "Vacuum Steam Press", color: "text-blue-600", bg: "bg-blue-50" },
        { icon: ShieldCheck, text: "Stain Removal Experts", color: "text-purple-600", bg: "bg-purple-50" },
        { icon: MapPin, text: "Individual Packaging", color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <section className="py-8 bg-white border-b border-slate-100 shadow-sm relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {badges.map((badge, idx) => (
                        <div key={idx} className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left p-2 rounded-xl hover:bg-slate-50 transition-colors">
                            <div className={`p-3 rounded-full ${badge.bg} ${badge.color}`}>
                                <badge.icon className="w-6 h-6" strokeWidth={2} />
                            </div>
                            <span className="text-sm md:text-base font-bold text-slate-700 leading-tight">
                                {badge.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
