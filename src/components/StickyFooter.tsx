"use client";

import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function StickyFooter() {
    return (
        <div className="fixed bottom-4 left-4 right-4 md:hidden z-50">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                className="bg-white/80 backdrop-blur-lg border border-white/40 p-2 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)]"
            >
                <Link
                    href="#booking"
                    className="flex items-center justify-center gap-2 w-full bg-orange-500 text-white font-bold py-3.5 rounded-xl text-lg shadow-lg shadow-orange-500/30 active:scale-[0.98] transition-transform"
                >
                    <CalendarCheck className="w-5 h-5" /> Schedule Pickup
                </Link>
            </motion.div>
        </div>
    );
}
