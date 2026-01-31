"use client";

import { useState, useEffect, Suspense } from "react";
import { Calendar, Clock, MapPin, Phone, User, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { PRICING_DATA } from "@/lib/pricingData";

function BookingFormWithParams() {
    const searchParams = useSearchParams();
    const [formData, setFormData] = useState({
        date: "",
        time: "",
        name: "",
        phone: "",
        address: "",
        notes: "",
    });

    useEffect(() => {
        const itemsParam = searchParams.get('items');
        if (itemsParam) {
            const allItems = Object.values(PRICING_DATA).flat();
            const summary = itemsParam.split(',').map(pair => {
                const [id, qty] = pair.split(':');
                const item = allItems.find(i => i.id === id);
                return item ? `${item.name} x${qty}` : null;
            }).filter(Boolean).join('\n');

            if (summary) {
                setFormData(prev => ({ ...prev, notes: `Pricing Estimate Items:\n${summary}` }));
            }
        }
    }, [searchParams]);

    const [focusedField, setFocusedField] = useState<string | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Booking Request:", formData);
        alert("Pickup Scheduled! (Logged to console)");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputClasses = "w-full p-4 bg-white border border-slate-200 rounded-xl focus:outline-none transition-all duration-300";
    const focusClasses = "border-orange-500 ring-4 ring-orange-500/10 shadow-lg shadow-orange-500/5";

    return (
        <section id="booking" className="py-20 px-6 bg-[#FDF8F3] relative">
            <div className="max-w-xl mx-auto relative z-10">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-blue-950 font-serif mb-2">Schedule a Pickup</h2>
                    <p className="text-slate-500">Fill in the details and we'll be there.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="relative group">
                            <label
                                className={`absolute left-4 top-1 text-xs font-bold text-slate-400 uppercase tracking-wider transition-all pointer-events-none z-10 ${focusedField === 'date' || formData.date ? 'text-orange-500' : ''
                                    }`}
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                required
                                className={`${inputClasses} pt-6 pb-2 ${focusedField === 'date' ? focusClasses : ''}`}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('date')}
                                onBlur={() => setFocusedField(null)}
                                value={formData.date}
                            />
                            <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                        </div>

                        <div className="relative group">
                            <label
                                className={`absolute left-4 top-1 text-xs font-bold text-slate-400 uppercase tracking-wider transition-all pointer-events-none z-10 ${focusedField === 'time' || formData.time ? 'text-orange-500' : ''
                                    }`}
                            >
                                Time
                            </label>
                            <select
                                name="time"
                                required
                                className={`${inputClasses} pt-6 pb-2 appearance-none ${focusedField === 'time' ? focusClasses : ''}`}
                                onChange={handleChange}
                                onFocus={() => setFocusedField('time')}
                                onBlur={() => setFocusedField(null)}
                                value={formData.time}
                            >
                                <option value=""></option>
                                <option value="Morning">Morning (9AM - 12PM)</option>
                                <option value="Afternoon">Afternoon (12PM - 4PM)</option>
                                <option value="Evening">Evening (4PM - 8PM)</option>
                            </select>
                            <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                        </div>
                    </div>

                    {[
                        { name: "name", label: "Your Name", icon: User, type: "text" },
                        { name: "phone", label: "Phone Number", icon: Phone, type: "tel" },
                    ].map((field) => (
                        <div key={field.name} className="relative group">
                            <label
                                className={`absolute left-4 transition-all pointer-events-none z-10 ${focusedField === field.name || (formData as any)[field.name]
                                    ? "top-2 text-xs font-bold text-orange-500 uppercase tracking-wider"
                                    : "top-4 text-base text-slate-500 font-medium"
                                    }`}
                            >
                                {field.label}
                            </label>
                            <input
                                type={field.type}
                                name={field.name}
                                required
                                className={`${inputClasses} ${focusedField === field.name || (formData as any)[field.name] ? "pt-7 pb-3" : "pt-4 pb-4"
                                    } ${focusedField === field.name ? focusClasses : ''}`}
                                onChange={handleChange}
                                onFocus={() => setFocusedField(field.name)}
                                onBlur={() => setFocusedField(null)}
                                value={(formData as any)[field.name]}
                            />
                            <field.icon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-hover:text-orange-300 transition-colors" />
                        </div>
                    ))}

                    <div className="relative group">
                        <label
                            className={`absolute left-4 transition-all pointer-events-none z-10 ${focusedField === 'notes' || formData.notes
                                ? "top-2 text-xs font-bold text-orange-500 uppercase tracking-wider"
                                : "top-4 text-base text-slate-500 font-medium"
                                }`}
                        >
                            Order Details (e.g., 2 Suits, 1 Saree)
                        </label>
                        <textarea
                            name="notes"
                            rows={3}
                            placeholder="Note: We specialize in Dry Cleaning & Steam Press only. We do not accept regular kilo-laundry."
                            className={`${inputClasses} resize-none ${focusedField === 'notes' || formData.notes ? "pt-7 pb-3" : "pt-4 pb-4"
                                } ${focusedField === 'notes' ? focusClasses : ''} placeholder:text-slate-300 placeholder:text-sm pt-8`}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('notes')}
                            onBlur={() => setFocusedField(null)}
                            value={formData.notes}
                        />
                        <FileText className="absolute right-4 top-6 w-5 h-5 text-slate-300" />
                    </div>

                    <div className="relative group">
                        <label
                            className={`absolute left-4 transition-all pointer-events-none z-10 ${focusedField === 'address' || formData.address
                                ? "top-2 text-xs font-bold text-orange-500 uppercase tracking-wider"
                                : "top-4 text-base text-slate-500 font-medium"
                                }`}
                        >
                            Pickup Address
                        </label>
                        <textarea
                            name="address"
                            required
                            rows={3}
                            className={`${inputClasses} resize-none ${focusedField === 'address' || formData.address ? "pt-7 pb-3" : "pt-4 pb-4"
                                } ${focusedField === 'address' ? focusClasses : ''}`}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('address')}
                            onBlur={() => setFocusedField(null)}
                            value={formData.address}
                        />
                        <MapPin className="absolute right-4 top-6 w-5 h-5 text-slate-300" />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-blue-950 text-white font-bold py-5 rounded-xl text-lg shadow-xl shadow-blue-900/20 hover:bg-blue-900 transition-colors"
                    >
                        Confirm Pickup
                    </motion.button>
                </form>
            </div>
        </section>
    );
}

export default function BookingUI() {
    return (
        <Suspense fallback={<div className="py-20 text-center">Loading booking form...</div>}>
            <BookingFormWithParams />
        </Suspense>
    );
}
