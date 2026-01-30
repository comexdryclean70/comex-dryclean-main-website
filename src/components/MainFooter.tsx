import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";
import Image from "next/image";

export default function MainFooter() {
    return (
        <footer className="bg-blue-950 text-white pt-16 pb-24 md:pb-8 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 border-b border-blue-900/50 pb-12">

                {/* Column 1: About */}
                <div>
                    <div className="mb-6">
                        <div className="relative w-40 h-12">
                            <Image src="/logo-transparent.png" alt="Comex" fill className="object-contain object-left" />
                        </div>
                    </div>
                    <p className="text-blue-200/80 leading-relaxed mb-6 max-w-sm">
                        Providing premium dry cleaning and laundry services in Dwarka and Palam since 2010. We use eco-friendly chemicals and state-of-the-art machinery to give your clothes the care they deserve.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Column 2: Services */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-widest text-xs">Our Services</h3>
                    <ul className="space-y-4 text-sm text-blue-100/70">
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Dry Cleaning (Men & Women)
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Steam Pressing
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Carpet & Sofa Cleaning
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Blanket & Curtain Care
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span> Shoe Laundry
                        </li>
                    </ul>
                </div>

                {/* Column 3: Contact */}
                <div>
                    <h3 className="text-lg font-bold mb-6 text-orange-400 uppercase tracking-widest text-xs">Reach Us</h3>
                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <MapPin className="w-6 h-6 text-orange-500 shrink-0" />
                            <div>
                                <p className="font-semibold text-white">Main Outlet</p>
                                <p className="text-sm text-blue-200/70 mt-1">
                                    Shop No. G-5, Ground Floor, Vardhman Plaza, Sec-6, Dwarka.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Phone className="w-6 h-6 text-orange-500 shrink-0" />
                            <div>
                                <p className="font-semibold text-white">Call Us</p>
                                <a href="tel:9250885310" className="block text-sm text-blue-200/70 hover:text-white mt-1">9250-885-310</a>
                                <a href="tel:9818590800" className="block text-sm text-blue-200/70 hover:text-white">9818-590-800</a>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Clock className="w-6 h-6 text-orange-500 shrink-0" />
                            <div>
                                <p className="font-semibold text-white">Working Hours</p>
                                <p className="text-sm text-blue-200/70 mt-1">Mon - Sun: 10:00 AM - 9:00 PM</p>
                                <p className="text-xs text-green-400 mt-1">Open 7 Days a Week</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-blue-400/50">
                <p>&copy; {new Date().getFullYear()} Comex Drycleaners. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
