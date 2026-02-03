import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function MainFooter() {
    return (
        <footer className="bg-[#0B1121] border-t border-white/5 relative">
            <div className="relative z-10 pt-16 pb-24 md:pb-8 px-6 text-white">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 border-b border-white/5 pb-12">

                    {/* Column 1: About */}
                    <div>
                        <div className="mb-8">
                            <Logo variant="dark" />
                        </div>
                        <p className="text-slate-400 leading-relaxed mb-6 max-w-sm font-sans">
                            Providing premium dry cleaning and laundry services in Dwarka and Palam since 2010. We use eco-friendly chemicals and state-of-the-art machinery.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1121] transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#0B1121] transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[#D4AF37] font-serif tracking-wide border-b border-[#D4AF37]/20 pb-2 inline-block">Our Services</h3>
                        <ul className="space-y-4 text-sm text-slate-400">
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span> Dry Cleaning
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span> Steam Pressing
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span> Carpet & Sofa Care
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-[#D4AF37]"></span> Shoe Laundry
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-[#D4AF37] font-serif tracking-wide border-b border-[#D4AF37]/20 pb-2 inline-block">Concierge</h3>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <p className="font-semibold text-white font-serif tracking-wide">Main Outlet</p>
                                    <p className="text-sm text-slate-400 mt-1 font-sans">
                                        Shop No. G-5, Ground Floor, Vardhman Plaza, Sec-6, Dwarka.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <p className="font-semibold text-white font-serif tracking-wide">Mahavir Enclave</p>
                                    <p className="text-sm text-slate-400 mt-1 font-sans">
                                        Shop A-1A, Yadav Estate, Old Som Bazar Rd, Mahavir Enclave Part 1.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <Phone className="w-6 h-6 text-[#D4AF37] shrink-0" />
                                <div>
                                    <p className="font-semibold text-white font-serif tracking-wide">Direct Line</p>
                                    <a href="tel:9250885310" className="block text-sm text-slate-400 hover:text-white mt-1 font-sans">9250-885-310</a>
                                    <a href="tel:9818590800" className="block text-sm text-slate-400 hover:text-white font-sans">9818-590-800</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                    <p>&copy; {new Date().getFullYear()} Comex Drycleaners. Luxury Heritage Care.</p>
                </div>
            </div>
        </footer>
    );
}
