"use client";

import { useState, useMemo } from 'react';
import { PRICING_DATA } from '@/lib/pricingData';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Minus, Plus, ShoppingBag, ArrowRight, Info, Sparkles, ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PricingPage() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<keyof typeof PRICING_DATA>('Men');
    const [cart, setCart] = useState<{ [key: string]: number }>({});

    const allItems = useMemo(() => Object.values(PRICING_DATA).flat(), []);

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
        const itemsParam = Object.entries(cart)
            .map(([id, qty]) => `${id}:${qty}`)
            .join(',');
        router.push(`/booking?items=${itemsParam}`);
    };

    const tabs = Object.keys(PRICING_DATA) as (keyof typeof PRICING_DATA)[];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30 font-sans pb-40 md:pb-0">

            {/* Premium Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
                    <button
                        onClick={() => router.push('/')}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                            <ChevronLeft className="w-5 h-5 text-slate-600 group-hover:text-blue-600" />
                        </div>
                        <div className="w-12 h-12 relative">
                            <Image src="/comex-logo.png" fill alt="Comex" className="object-contain" />
                        </div>
                    </button>

                    {cartCount > 0 && (
                        <button
                            onClick={() => setCart({})}
                            className="text-sm text-slate-500 hover:text-red-500 font-medium transition-colors"
                        >
                            Clear All
                        </button>
                    )}
                </div>
            </header>

            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 text-center relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                    >
                        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                            <Sparkles className="w-4 h-4" />
                            Transparent Pricing
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
                            Premium Care,{' '}
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Fair Prices
                            </span>
                        </h1>
                        <p className="text-lg text-slate-500 max-w-xl mx-auto">
                            Select your garments and get an instant estimate. No hidden fees, ever.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-8">

                {/* Main Content */}
                <div className="flex-1">
                    {/* Category Tabs */}
                    <div className="sticky top-[73px] bg-white/90 backdrop-blur-lg z-30 py-4 -mx-4 px-4 md:-mx-8 md:px-8 border-b border-slate-100">
                        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                            {tabs.map((category, idx) => (
                                <motion.button
                                    key={category}
                                    onClick={() => setActiveTab(category)}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className={`relative px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${activeTab === category
                                            ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                        }`}
                                >
                                    {category}
                                </motion.button>
                            ))}
                        </div>
                    </div>

                    {/* Items Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
                        <AnimatePresence mode="popLayout">
                            {PRICING_DATA[activeTab].map((item, idx) => {
                                const priceParts = item.displayPrice.replace(/₹/g, '').split('-');
                                const min = parseInt(priceParts[0]);
                                const max = priceParts.length > 1 ? parseInt(priceParts[1]) : min;
                                const isVariable = max > (min * 2);
                                const isInCart = cart[item.id] > 0;

                                return (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: idx * 0.03 }}
                                        className={`group relative bg-white p-5 rounded-2xl border-2 transition-all duration-300 ${isInCart
                                                ? 'border-blue-500 shadow-xl shadow-blue-500/10 scale-[1.02]'
                                                : 'border-transparent shadow-lg shadow-slate-900/5 hover:shadow-xl hover:border-slate-200'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between gap-4">
                                            {/* Left: Icon + Info */}
                                            <div className="flex items-center gap-4 flex-1 min-w-0">
                                                <div className={`shrink-0 p-4 rounded-2xl transition-all duration-300 ${isInCart
                                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                                        : 'bg-slate-100 text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600'
                                                    }`}>
                                                    <item.icon className="w-6 h-6" />
                                                </div>
                                                <div className="min-w-0">
                                                    <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2 flex-wrap">
                                                        <span className="truncate">{item.name}</span>
                                                        {isVariable && (
                                                            <span className="shrink-0 text-[10px] bg-amber-100 text-amber-700 px-2 py-1 rounded-md font-bold uppercase tracking-wide">
                                                                Varies
                                                            </span>
                                                        )}
                                                    </h3>
                                                    <p className={`text-lg font-bold mt-1 transition-colors ${isInCart ? 'text-blue-600' : 'text-slate-900'
                                                        }`}>
                                                        {item.displayPrice}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Right: Quantity Controls */}
                                            <div className={`shrink-0 flex items-center gap-1 p-1.5 rounded-xl transition-all ${isInCart
                                                    ? 'bg-blue-50 border-2 border-blue-200'
                                                    : 'bg-slate-100 border-2 border-transparent'
                                                }`}>
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    disabled={!isInCart}
                                                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${!isInCart
                                                            ? 'text-slate-300 cursor-not-allowed'
                                                            : 'text-slate-700 hover:bg-white active:scale-90 shadow-sm'
                                                        }`}
                                                >
                                                    <Minus className="w-4 h-4" strokeWidth={2.5} />
                                                </button>
                                                <span className={`w-8 text-center font-bold text-lg ${isInCart ? 'text-blue-600' : 'text-slate-400'
                                                    }`}>
                                                    {cart[item.id] || 0}
                                                </span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-900 text-white hover:bg-slate-800 active:scale-90 transition-all shadow-lg shadow-slate-900/20"
                                                >
                                                    <Plus className="w-4 h-4" strokeWidth={2.5} />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-[380px] shrink-0">
                    <div className="sticky top-[100px]">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden"
                        >
                            {/* Sidebar Header */}
                            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-6">
                                <h2 className="text-xl font-bold flex items-center gap-3">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                                        <ShoppingBag className="w-5 h-5" />
                                    </div>
                                    Your Estimate
                                </h2>
                            </div>

                            <div className="p-6">
                                {cartCount === 0 ? (
                                    <div className="text-center py-12 text-slate-400">
                                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <ShoppingBag className="w-8 h-8 opacity-40" />
                                        </div>
                                        <p className="font-medium">Select items to get started</p>
                                        <p className="text-sm mt-1 text-slate-400">Prices will appear here</p>
                                    </div>
                                ) : (
                                    <div className="space-y-5">
                                        {/* Cart Items */}
                                        <div className="max-h-[35vh] overflow-y-auto space-y-3 pr-2">
                                            {Object.entries(cart).map(([id, qty]) => {
                                                const item = allItems.find(i => i.id === id);
                                                if (!item) return null;
                                                return (
                                                    <div key={id} className="flex justify-between items-center py-3 border-b border-dashed border-slate-200 last:border-0">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                                                                <item.icon className="w-4 h-4 text-slate-500" />
                                                            </div>
                                                            <div>
                                                                <span className="text-slate-800 font-medium">{item.name}</span>
                                                                <span className="text-slate-400 ml-2">×{qty}</span>
                                                            </div>
                                                        </div>
                                                        <span className="font-bold text-slate-900">₹{item.minPrice * qty}</span>
                                                    </div>
                                                )
                                            })}
                                        </div>

                                        {/* Total */}
                                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-100">
                                            <div className="flex justify-between items-end">
                                                <div>
                                                    <span className="text-sm text-slate-500 font-medium block">Estimated Total</span>
                                                    <span className="text-xs text-slate-400">(Starting from)</span>
                                                </div>
                                                <span className="text-3xl font-bold text-slate-900">₹{cartTotal}</span>
                                            </div>
                                        </div>

                                        {/* Info */}
                                        <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-xl border border-amber-100">
                                            <Info className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                                            <p className="text-sm text-amber-800">
                                                Final price confirmed after fabric inspection during pickup.
                                            </p>
                                        </div>

                                        {/* CTA */}
                                        <button
                                            onClick={handleBookNow}
                                            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                                        >
                                            Book Pickup
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Mobile Bottom Bar */}
            <AnimatePresence>
                {cartCount > 0 && (
                    <motion.div
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        className="fixed bottom-0 left-0 right-0 z-50 lg:hidden p-4 bg-gradient-to-t from-white via-white to-transparent pt-8"
                    >
                        <div className="bg-slate-900 text-white rounded-2xl shadow-2xl shadow-slate-900/50 overflow-hidden">
                            <div className="p-4 flex items-center justify-between">
                                <div>
                                    <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">{cartCount} Items Selected</span>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-2xl font-bold">₹{cartTotal}</span>
                                        <span className="text-sm text-slate-500">estimated</span>
                                    </div>
                                </div>
                                <button
                                    onClick={handleBookNow}
                                    className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold shadow-lg flex items-center gap-2 active:scale-95 transition-transform"
                                >
                                    Book Pickup
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
                                <Info className="w-4 h-4 text-slate-500 shrink-0" />
                                <p className="text-xs text-slate-400">
                                    Final price depends on fabric type & inspection
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
