"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronRight, ArrowLeft, Shirt, MapPin, Phone, User, Check, AlertTriangle, Trash2, Plus, Minus } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { PRICING_DATA } from "@/lib/pricingData";

// --- Types ---
type CartItem = {
    id: string;
    name: string;
    price: number;
    qty: number;
    category: string;
};

type FormData = {
    date: string;
    time: string;
    name: string;
    phone: string;
    houseNo: string;
    address: string;
    landmark: string;
    items: string;
    location: { lat: number | null, lng: number | null };
};

// --- Helpers ---
const getNext7Days = () => {
    const days = [];
    for (let i = 0; i < 7; i++) {
        const d = new Date();
        d.setDate(d.getDate() + i);
        days.push(d);
    }
    return days;
};

const TIME_SLOTS = [
    { id: "morning", label: "Morning", time: "10 AM - 1 PM" },
    { id: "afternoon", label: "Afternoon", time: "1 PM - 4 PM" },
    { id: "evening", label: "Evening", time: "4 PM - 7 PM" },
];

// --- Sub-Components ---
const FloatingLabelInput = ({ label, value, onChange, type = "text", required = false, icon: Icon }: any) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className={`relative border rounded-xl transition-all duration-300 ${focused || value ? 'border-blue-600 ring-1 ring-blue-100' : 'border-slate-200'
            } bg-white`}>
            <div className="flex items-center">
                {Icon && (
                    <div className="pl-4 text-slate-400">
                        <Icon className="w-5 h-5" />
                    </div>
                )}
                <div className="relative flex-1 py-1">
                    <input
                        type={type}
                        value={value}
                        onChange={onChange}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        required={required}
                        className="w-full h-14 px-4 pt-4 pb-1 text-slate-800 bg-transparent outline-none z-10 relative font-medium"
                    />
                    <label
                        className={`absolute left-4 transition-all duration-300 pointer-events-none text-slate-400 font-medium ${focused || value ? 'top-2 text-xs text-blue-600' : 'top-4 text-base'
                            }`}
                    >
                        {label} {required && '*'}
                    </label>
                </div>
            </div>
        </div>
    );
};

export default function BookingWizard() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState(1);
    const [direction, setDirection] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        date: "",
        time: "",
        name: "",
        phone: "",
        houseNo: "",
        address: "",
        landmark: "",
        items: "",
        location: { lat: null, lng: null }
    });
    const [isLocating, setIsLocating] = useState(false);

    // --- Cart State ---
    const [cart, setCart] = useState<CartItem[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<keyof typeof PRICING_DATA>("Men");
    const [selectedItemId, setSelectedItemId] = useState(PRICING_DATA["Men"][0].id);
    const [currentQty, setCurrentQty] = useState(1);
    const [notes, setNotes] = useState("");

    const handleAddItem = () => {
        const categoryItems = PRICING_DATA[selectedCategory];
        const item = categoryItems.find(i => i.id === selectedItemId);
        if (!item) return;

        setCart(prev => {
            const existing = prev.find(i => i.id === item.id);
            if (existing) {
                return prev.map(i => i.id === item.id ? { ...i, qty: i.qty + currentQty } : i);
            }
            return [...prev, { id: item.id, name: item.name, price: item.minPrice, qty: currentQty, category: selectedCategory }];
        });
        setCurrentQty(1);
    };

    const handleRemoveItem = (id: string) => {
        setCart(prev => prev.filter(i => i.id !== id));
    };

    const totalEstimate = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    // Sync Cart to FormData Items String
    useEffect(() => {
        if (cart.length === 0 && !notes) {
            setFormData(prev => ({ ...prev, items: "" }));
            return;
        }
        const cartText = cart.map(i => `${i.name} (x${i.qty})`).join(", ");
        const finalNote = notes ? `\nNotes: ${notes}` : "";
        setFormData(prev => ({ ...prev, items: cartText + finalNote }));
    }, [cart, notes]);

    const days = useMemo(() => getNext7Days(), []);

    // Prefill items from URL
    useEffect(() => {
        const itemsParam = searchParams.get('items');
        if (itemsParam) {
            // Rough parsing for display
            // id:qty,id:qty -> "2 Suits, 1 Saree" logic would require mapping IDs. 
            // For now, just setting it as raw text or better, placeholder.
            // Let's just set a flag or keep it empty for user to fill but specific logic could be added here.
            // Simplified:
            setFormData(prev => ({ ...prev, items: "Items from Pricing Cart selected. Please confirm details." }));
        }
    }, [searchParams]);

    const handleNext = () => {
        setDirection(1);
        setStep(prev => Math.min(prev + 1, 3));
    };

    const handleBack = () => {
        setDirection(-1);
        setStep(prev => Math.max(prev - 1, 1));
    };

    const isStep1Valid = formData.date && formData.time;
    const isStep2Valid = formData.name && formData.phone.length >= 10 && formData.houseNo && formData.address;
    const isStep3Valid = cart.length > 0;

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -50 : 50,
            opacity: 0
        })
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch("/api/book", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Booking failed");

            // Success Logic
            const fullAddress = `${formData.houseNo}, ${formData.address}, ${formData.landmark ? 'Landmark: ' + formData.landmark : ''}`;
            const whatsappMsg = `*New Pickup Request*\n\nName: ${formData.name}\nPhone: ${formData.phone}\nAddress: ${fullAddress}\n\nDate: ${formData.date}\nTime: ${formData.time}\n\nItems:\n${formData.items}${formData.location.lat ? `\n\n📍 Location: https://maps.google.com/?q=${formData.location.lat},${formData.location.lng}` : ''}`;

            // Redirect to WhatsApp
            window.open(`https://wa.me/919250625681?text=${encodeURIComponent(whatsappMsg)}`, '_blank');

            alert("Booking Confirmed! Redirecting to WhatsApp...");
            // Optional: Reset form or redirect to success page
            setStep(1);
            setCart([]);
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="booking" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-blue-100 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></div>

            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">

                    <div className="relative h-1.5 bg-slate-100 w-full mb-2">
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 bg-blue-600"
                            initial={{ width: "33%" }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                    {/* Step Labels */}
                    <div className="grid grid-cols-3 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-6 px-2">
                        <span className={step >= 1 ? "text-blue-600" : ""}>Time</span>
                        <span className={step >= 2 ? "text-blue-600" : ""}>Details</span>
                        <span className={step >= 3 ? "text-blue-600" : ""}>Confirm</span>
                    </div>

                    <div className="p-8 md:p-10">
                        {/* Header */}
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-blue-950 font-serif">
                                    {step === 1 && "Pick a Schedule"}
                                    {step === 2 && "Personal Details"}
                                    {step === 3 && "Order Confirmation"}
                                </h2>
                                <p className="text-slate-500 text-sm mt-1">
                                    Step {step} of 3
                                </p>
                            </div>
                            {step > 1 && (
                                <button onClick={handleBack} className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors">
                                    <ArrowLeft className="w-5 h-5" />
                                </button>
                            )}
                        </div>

                        {/* Wizard Content */}
                        <div className="min-h-[300px] relative">
                            <AnimatePresence mode="wait" custom={direction}>
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="space-y-8"
                                    >
                                        {/* Date Selection */}
                                        <div className="space-y-4">
                                            <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm uppercase tracking-wide">
                                                <Calendar className="w-4 h-4 text-orange-500" /> Select Date
                                            </h3>
                                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                                {days.map((d, i) => {
                                                    const isSelected = formData.date === d.toDateString();
                                                    const label = i === 0 ? "Today" : i === 1 ? "Tmrw" : d.toLocaleDateString('en-US', { weekday: 'short' });
                                                    const subLabel = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

                                                    return (
                                                        <button
                                                            key={i}
                                                            onClick={() => setFormData({ ...formData, date: d.toDateString() })}
                                                            className={`w-full p-4 rounded-2xl border transition-all duration-200 flex flex-col items-center gap-1 ${isSelected
                                                                ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 ring-2 ring-blue-200 ring-offset-2'
                                                                : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'
                                                                }`}
                                                        >
                                                            <span className="text-xs font-bold opacity-80 uppercase tracking-widest">{label}</span>
                                                            <span className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-blue-900'}`}>{subLabel}</span>
                                                        </button>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                        {/* Time Selection */}
                                        <div className="space-y-4">
                                            <h3 className="font-bold text-slate-700 flex items-center gap-2 text-sm uppercase tracking-wide">
                                                <Clock className="w-4 h-4 text-orange-500" /> Select Time Slot
                                            </h3>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                                {TIME_SLOTS.map((slot) => (
                                                    <button
                                                        key={slot.id}
                                                        onClick={() => setFormData({ ...formData, time: slot.label })}
                                                        className={`p-4 rounded-xl border text-left transition-all relative overflow-hidden ${formData.time === slot.label
                                                            ? 'bg-blue-50 border-blue-500 text-blue-800 ring-1 ring-blue-500'
                                                            : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300'
                                                            }`}
                                                    >
                                                        <div className="text-sm font-bold">{slot.label}</div>
                                                        <div className="text-xs opacity-70 mt-1">{slot.time}</div>
                                                        {formData.time === slot.label && (
                                                            <div className="absolute top-2 right-2 text-blue-600">
                                                                <Check className="w-4 h-4" />
                                                            </div>
                                                        )}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="space-y-4">
                                            <FloatingLabelInput
                                                label="Full Name"
                                                icon={User}
                                                value={formData.name}
                                                onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                                                required
                                            />
                                            <FloatingLabelInput
                                                label="Phone Number"
                                                type="tel"
                                                icon={Phone}
                                                value={formData.phone}
                                                onChange={(e: any) => setFormData({ ...formData, phone: e.target.value })}
                                                required
                                            />
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <FloatingLabelInput
                                                    label="House / Flat No. *"
                                                    icon={MapPin}
                                                    value={formData.houseNo}
                                                    onChange={(e: any) => setFormData({ ...formData, houseNo: e.target.value })}
                                                    required
                                                />
                                                <FloatingLabelInput
                                                    label="Landmark (Optional)"
                                                    icon={MapPin}
                                                    value={formData.landmark}
                                                    onChange={(e: any) => setFormData({ ...formData, landmark: e.target.value })}
                                                />
                                            </div>

                                            <FloatingLabelInput
                                                label="Street Address / Colony / Area *"
                                                icon={MapPin}
                                                value={formData.address}
                                                onChange={(e: any) => setFormData({ ...formData, address: e.target.value })}
                                                required
                                            />

                                            {/* Location Detection Block */}
                                            <div className="bg-blue-50/50 rounded-xl p-4 border border-blue-100 flex items-center justify-between">
                                                <div>
                                                    <p className="text-sm font-bold text-blue-900">Exact Location</p>
                                                    <p className="text-xs text-blue-700/70 mt-0.5">
                                                        {formData.location.lat
                                                            ? "✅ GPS Location Successfully Pinned"
                                                            : "Pin your location to help us find you faster."}
                                                    </p>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        if (!navigator.geolocation) {
                                                            alert("Geolocation is not supported by your browser");
                                                            return;
                                                        }
                                                        setIsLocating(true);
                                                        navigator.geolocation.getCurrentPosition(
                                                            async (position) => {
                                                                const { latitude, longitude } = position.coords;
                                                                setFormData(prev => ({
                                                                    ...prev,
                                                                    location: { lat: latitude, lng: longitude }
                                                                    // removed address overwriting
                                                                }));
                                                                setIsLocating(false);
                                                            },
                                                            (error) => {
                                                                console.error(error);
                                                                alert("Unable to retrieve your location");
                                                                setIsLocating(false);
                                                            }
                                                        );
                                                    }}
                                                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${formData.location.lat
                                                        ? "bg-green-100 text-green-700 border border-green-200"
                                                        : "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                                                        }`}
                                                >
                                                    {isLocating ? (
                                                        <span className="animate-spin">⌛</span>
                                                    ) : (
                                                        <MapPin className="w-3 h-3" />
                                                    )}
                                                    {formData.location.lat ? "Pinned" : "Detect Location"}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        custom={direction}
                                        variants={variants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        {/* Disclaimer Alert */}
                                        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 flex gap-3 text-yellow-800">
                                            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                                            <div>
                                                <h4 className="font-bold text-sm">Specialist Dry Cleaning Only</h4>
                                                <p className="text-xs mt-1 leading-relaxed opacity-90">
                                                    Note: We strictly handle dry cleaning and steam press. We do not accept regular daily laundry (underwear, socks, washable cottons).
                                                </p>
                                            </div>
                                        </div>

                                        {/* Item Calculator */}
                                        <div className="bg-white border rounded-2xl p-4 shadow-sm space-y-4">
                                            <div className="flex flex-col sm:flex-row gap-3">
                                                <select
                                                    className="p-3 border rounded-xl bg-slate-50 font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-100"
                                                    value={selectedCategory}
                                                    onChange={(e) => {
                                                        setSelectedCategory(e.target.value as any);
                                                        setSelectedItemId(PRICING_DATA[e.target.value as keyof typeof PRICING_DATA][0].id);
                                                    }}
                                                >
                                                    {Object.keys(PRICING_DATA).map(cat => (
                                                        <option key={cat} value={cat}>{cat}</option>
                                                    ))}
                                                </select>

                                                <select
                                                    className="flex-1 p-3 border rounded-xl bg-slate-50 font-medium text-slate-700 outline-none focus:ring-2 focus:ring-blue-100"
                                                    value={selectedItemId}
                                                    onChange={(e) => setSelectedItemId(e.target.value)}
                                                >
                                                    {PRICING_DATA[selectedCategory].map(item => (
                                                        <option key={item.id} value={item.id}>{item.name} - ₹{item.minPrice}+</option>
                                                    ))}
                                                </select>

                                                <div className="flex items-center gap-2 bg-slate-50 border rounded-xl px-2">
                                                    <button onClick={() => setCurrentQty(Math.max(1, currentQty - 1))} className="p-1 hover:text-blue-600"><Minus className="w-4 h-4" /></button>
                                                    <span className="w-8 text-center font-bold text-slate-700">{currentQty}</span>
                                                    <button onClick={() => setCurrentQty(currentQty + 1)} className="p-1 hover:text-blue-600"><Plus className="w-4 h-4" /></button>
                                                </div>

                                                <button
                                                    onClick={handleAddItem}
                                                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-bold transition-colors shadow-sm"
                                                >
                                                    Add
                                                </button>
                                            </div>

                                            {/* Cart List */}
                                            {cart.length > 0 ? (
                                                <div className="border-t pt-4 space-y-2">
                                                    {cart.map((item) => (
                                                        <div key={item.id} className="flex justify-between items-center text-sm p-2 hover:bg-slate-50 rounded-lg group">
                                                            <div className="font-medium text-slate-700">
                                                                {item.name} <span className="text-slate-400 text-xs ml-1">x{item.qty}</span>
                                                            </div>
                                                            <div className="flex items-center gap-4">
                                                                <span className="font-bold text-slate-900">₹{item.price * item.qty}</span>
                                                                <button onClick={() => handleRemoveItem(item.id)} className="text-slate-300 group-hover:text-red-500 transition-colors">
                                                                    <Trash2 className="w-4 h-4" />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    ))}

                                                    <div className="border-t border-dashed pt-3 mt-3 flex justify-between items-end">
                                                        <div>
                                                            <div className="text-xs text-slate-500 font-medium">Base Estimate</div>
                                                            <div className="text-2xl font-bold text-blue-950">₹{totalEstimate}*</div>
                                                        </div>
                                                        <div className="text-right max-w-[200px]">
                                                            <p className="text-[10px] text-slate-400 leading-tight">
                                                                *Final price varies based on fabric type (Silk/Zari) & work. Confirmed at pickup.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className="text-center py-6 text-slate-400 text-sm">
                                                    Select items above to estimate cost.
                                                </div>
                                            )}
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                                                Additional Notes (Optional)
                                            </label>
                                            <textarea
                                                className="w-full h-20 p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none text-slate-700 placeholder:text-slate-400 text-sm"
                                                placeholder="e.g., The white shirt has a coffee stain..."
                                                value={notes}
                                                onChange={(e) => setNotes(e.target.value)}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
                        {step < 3 ? (
                            <button
                                onClick={handleNext}
                                disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                                className={`px-8 py-3 rounded-xl font-bold flex items-center gap-2 transition-all ${(step === 1 ? isStep1Valid : isStep2Valid)
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700 hover:translate-x-1'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    }`}
                            >
                                Next Step <ChevronRight className="w-5 h-5" />
                            </button>
                        ) : (
                            <button
                                onClick={handleSubmit}
                                disabled={!isStep3Valid || isSubmitting}
                                className={`w-full md:w-auto px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg text-lg ${isStep3Valid
                                    ? 'bg-orange-500 text-white shadow-orange-200 hover:bg-orange-600 active:scale-95'
                                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                                    }`}
                            >
                                {isSubmitting ? 'Scheduling...' : 'Confirm Pickup'}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
