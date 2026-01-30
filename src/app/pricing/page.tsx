"use client";

import { useState, useMemo } from 'react';
import { PRICING_DATA, PricingItem } from '@/lib/pricingData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Minus, Plus, ShoppingBag, ArrowRight, Info, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PricingPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<keyof typeof PRICING_DATA>('Men');
    const [cart, setCart] = useState<{ [key: string]: number }>({});

    // Flatten data for easier lookup
    const allItems = useMemo(() => {
        return Object.values(PRICING_DATA).flat();
    }, []);

    const cartTotal = useMemo(() => {
        return Object.entries(cart).reduce((total, [id, qty]) => {
            const item = allItems.find(i => i.id === id);
            return total + (item ? item.minPrice * qty : 0);
        }, 0);
    }, [cart, allItems]);

    const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

    const updateQuantity = (id: string, delta: number) => {
        setCart(prev => {
            const current = prev[id] || 0;
            const next = Math.max(0, current + delta);
            if (next === 0) {
                const { [id]: _, ...rest } = prev;
                return rest;
            }
            return { ...prev, [id]: next };
        });
    };

    const handleBookNow = () => {
        // Generate URL params
        // Format: ?items=id:qty,id:qty
        const itemsParam = Object.entries(cart)
            .map(([id, qty]) => `${id}:${qty}`)
            .join(',');

        // Check if Booking Page exists, otherwise assume main page with query or log
        router.push(`/?booking=true&items=${itemsParam}#booking`);
    };

    return (
        <div className="min-h-screen bg-slate-50 font-sans pb-32 md:pb-0">
            {/* Navigation Helper (Back to Home) */}
            <div className="bg-white p-4 sticky top-0 z-40 border-b flex justify-between items-center shadow-sm">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => router.push('/')}>
                    <div className="w-8 h-8 relative">
                        <Image src="/comex-logo.png" fill alt="Comex" className="object-contain" />
                    </div>
                    <span className="font-bold text-blue-950">Pricing</span>
                </div>
                {cartCount > 0 && (
                    <button
                        onClick={() => setCart({})}
                        className="text-xs text-red-500 font-medium hover:underline"
                    >
                        Clear Cart
                    </button>
                )}
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 p-4 md:p-8">

                {/* Main Content: Tabs & List */}
                <div className="flex-1">
                    {/* Tabs */}
                    <div className="flex overflow-x-auto gap-2 pb-4 mb-4 scrollbar-hide sticky top-16 bg-slate-50 z-30 py-2">
                        {Object.keys(PRICING_DATA).map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category as keyof typeof PRICING_DATA)}
                                className={`px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap transition-all shadow-sm ${activeTab === category
                                        ? 'bg-blue-600 text-white shadow-blue-200'
                                        : 'bg-white text-slate-600 hover:bg-blue-50'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <AnimatePresence mode="wait">
                            {PRICING_DATA[activeTab].map((item) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className={`bg-white p-4 rounded-2xl border flex items-center justify-between transition-all ${cart[item.id] ? 'border-blue-500 shadow-md ring-1 ring-blue-500 bg-blue-50/10' : 'border-slate-100 shadow-sm'
                                        }`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-3 rounded-xl ${cart[item.id] ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-slate-800">{item.name}</h3>
                                            <p className="text-sm font-medium text-blue-600">{item.displayPrice}</p>
                                        </div>
                                    </div>

                                    {/* Add/Remove Controls */}
                                    <div className="flex items-center gap-3 bg-slate-50 rounded-lg p-1 border border-slate-200">
                                        <button
                                            onClick={() => updateQuantity(item.id, -1)}
                                            className={`w-8 h-8 flex items-center justify-center rounded-md transition-colors ${!cart[item.id] ? 'text-slate-300 pointer-events-none' : 'hover:bg-white text-slate-600 shadow-sm'}`}
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="w-4 text-center font-bold text-slate-700 text-sm">
                                            {cart[item.id] || 0}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.id, 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-white text-blue-600 shadow-sm transition-colors"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Cart Sidebar (Desktop) */}
                <div className="hidden md:block w-96">
                    <div className="sticky top-24 bg-white rounded-3xl shadow-xl border border-slate-100 p-6">
                        <h2 className="text-xl font-bold text-blue-950 mb-6 flex items-center gap-2">
                            <ShoppingBag className="w-5 h-5 text-orange-500" />
                            Estimate Summary
                        </h2>

                        {cartCount === 0 ? (
                            <div className="text-center py-12 text-slate-400">
                                <ShoppingBag className="w-12 h-12 mx-auto mb-3 opacity-20" />
                                <p>Select items to calculate price</p>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="max-h-[60vh] overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                                    {Object.entries(cart).map(([id, qty]) => {
                                        const item = allItems.find(i => i.id === id);
                                        if (!item) return null;
                                        return (
                                            <div key={id} className="flex justify-between text-sm items-center py-2 border-b border-dashed border-slate-100 last:border-0">
                                                <span className="text-slate-600">{item.name} x {qty}</span>
                                                <span className="font-bold text-slate-800">₹{item.minPrice * qty}</span>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
                                    <div className="flex justify-between items-end mb-1">
                                        <span className="text-slate-600 font-medium">Total Estimate</span>
                                        <span className="text-2xl font-bold text-blue-950">₹{cartTotal}</span>
                                    </div>
                                    <p className="text-[10px] text-orange-800/70 flex items-start gap-1 leading-tight">
                                        <Info className="w-3 h-3 shrink-0 mt-0.5" />
                                        Final price depends on fabric type (e.g., Silk/Zari) and heavy stains.
                                    </p>
                                </div>

                                <button
                                    onClick={handleBookNow}
                                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-transform active:scale-95 flex items-center justify-center gap-2"
                                >
                                    Book Pickup <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Mobile Bottom Bar */}
                <AnimatePresence>
                    {cartCount > 0 && (
                        <motion.div
                            initial={{ y: 200 }}
                            animate={{ y: 0 }}
                            exit={{ y: 200 }}
                            className="fixed bottom-6 left-6 right-6 z-50 md:hidden"
                        >
                            <div className="bg-blue-950 text-white rounded-2xl shadow-2xl p-4 flex items-center justify-between border border-blue-800/50 backdrop-blur-xl bg-blue-950/90" onClick={handleBookNow}>
                                <div className="flex flex-col">
                                    <span className="text-xs text-blue-300 font-medium">{cartCount} Items Selected</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="font-bold text-xl">₹{cartTotal}</span>
                                        <span className="text-xs text-blue-400">(approx)</span>
                                    </div>
                                </div>
                                <button className="bg-orange-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg shadow-orange-900/20 flex items-center gap-2">
                                    Book Now <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="text-center mt-2">
                                <p className="text-[10px] text-slate-500 bg-white/90 inline-block px-2 py-0.5 rounded-full shadow-sm backdrop-blur">
                                    Final price may vary based on fabric.
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
