"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ChevronRight, ArrowLeft, Shirt, MapPin, Phone, User, Check, AlertTriangle } from "lucide-react";
import { useSearchParams } from "next/navigation";

// --- Types ---
type FormData = {
    date: string;
    time: string;
    name: string;
    phone: string;
    address: string;
    items: string;
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
        address: "",
        items: "",
    });

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
    const isStep2Valid = formData.name && formData.phone.length >= 10 && formData.address;
    const isStep3Valid = formData.items.length > 0;

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
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert("Booking Confirmed! We will contact you shortly.");
        setIsSubmitting(false);
        // Reset or redirect
    };

    return (
        <section id="booking" className="py-20 px-4 bg-slate-50 relative">
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">

                    {/* Progress Bar */}
                    <div className="relative h-1.5 bg-slate-100 w-full">
                        <motion.div
                            className="absolute left-0 top-0 bottom-0 bg-blue-600"
                            initial={{ width: "33%" }}
                            animate={{ width: `${(step / 3) * 100}%` }}
                            transition={{ duration: 0.5 }}
                        />
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
                                            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-2 px-2">
                                                {days.map((d, i) => {
                                                    const isSelected = formData.date === d.toDateString();
                                                    const label = i === 0 ? "Today" : i === 1 ? "Tmrw" : d.toLocaleDateString('en-US', { weekday: 'short' });
                                                    const subLabel = d.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });

                                                    return (
                                                        <button
                                                            key={i}
                                                            onClick={() => setFormData({ ...formData, date: d.toDateString() })}
                                                            className={`shrink-0 min-w-[80px] p-3 rounded-2xl border transition-all duration-200 flex flex-col items-center gap-1 ${isSelected
                                                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                                                                    : 'bg-white border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50'
                                                                }`}
                                                        >
                                                            <span className="text-xs font-bold opacity-80">{label}</span>
                                                            <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-blue-900'}`}>{subLabel}</span>
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
                                            <FloatingLabelInput
                                                label="Complete Address (House No, Street, Landmark)"
                                                icon={MapPin}
                                                value={formData.address}
                                                onChange={(e: any) => setFormData({ ...formData, address: e.target.value })}
                                                required
                                            />
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

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-slate-700 uppercase tracking-wide flex items-center gap-2">
                                                <Shirt className="w-4 h-4 text-orange-500" /> Items for Pickup
                                            </label>
                                            <textarea
                                                className="w-full h-32 p-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-none text-slate-700 placeholder:text-slate-400"
                                                placeholder="e.g., 2 Suits, 1 Lehenga, 3 Silk Sarees..."
                                                value={formData.items}
                                                onChange={(e) => setFormData({ ...formData, items: e.target.value })}
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
