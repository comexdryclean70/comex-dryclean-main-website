import { Leaf, Clock, MapPin, ShieldCheck } from "lucide-react";

export default function TrustStrip() {
    const badges = [
        { icon: Leaf, text: "Petrol Wash Only", color: "text-emerald-700", bg: "bg-emerald-50" },
        { icon: Clock, text: "Vacuum Steam Press", color: "text-[#003366]", bg: "bg-blue-50" },
        { icon: ShieldCheck, text: "Stain Removal Experts", color: "text-red-600", bg: "bg-red-50" },
        { icon: MapPin, text: "Individual Packaging", color: "text-orange-600", bg: "bg-orange-50" },
    ];

    return (
        <section className="py-8 bg-[#FDF8F3] border-b border-slate-100 shadow-sm relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left p-2 hover:bg-slate-50 transition-colors">
                        <div className="p-3 rounded-full bg-[#0B1121] text-[#D4AF37]">
                            <Leaf className="w-5 h-5" strokeWidth={2} />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-700 leading-tight">Petrol Wash Only</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left p-2 hover:bg-slate-50 transition-colors">
                        <div className="p-3 rounded-full bg-[#0B1121] text-[#D4AF37]">
                            <Clock className="w-5 h-5" strokeWidth={2} />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-700 leading-tight">Vacuum Steam Press</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left p-2 hover:bg-slate-50 transition-colors">
                        <div className="p-3 rounded-full bg-[#0B1121] text-[#D4AF37]">
                            <ShieldCheck className="w-5 h-5" strokeWidth={2} />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-700 leading-tight">Stain Removal Experts</span>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 text-center md:text-left p-2 hover:bg-slate-50 transition-colors">
                        <div className="p-3 rounded-full bg-[#0B1121] text-[#D4AF37]">
                            <MapPin className="w-5 h-5" strokeWidth={2} />
                        </div>
                        <span className="text-sm md:text-base font-bold text-slate-700 leading-tight">Individual Packaging</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
