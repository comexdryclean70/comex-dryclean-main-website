import { CalendarCheck, Truck, Waves, Shirt } from "lucide-react";
import Image from "next/image";

export default function ProcessSteps() {
    const steps = [
        {
            id: 1,
            title: "Book a Slot",
            desc: "Schedule online or call us.",
            icon: CalendarCheck,
            image: "https://placehold.co/400x300/e2e8f0/1e293b?text=Book+Slot"
        },
        {
            id: 2,
            title: "We Pickup",
            desc: "From your doorstep.",
            icon: Truck,
            image: "https://placehold.co/400x300/fed7aa/9a3412?text=Pickup"
        },
        {
            id: 3,
            title: "Expert Cleaning",
            desc: "Eco-friendly processing.",
            icon: Waves,
            image: "https://placehold.co/400x300/bfdbfe/1e3a8a?text=Cleaning"
        },
        {
            id: 4,
            title: "Fast Delivery",
            desc: "Fresh, folded & ironed.",
            icon: Shirt,
            image: "https://placehold.co/400x300/bbf7d0/166534?text=Delivery"
        },
    ];

    return (
        <section className="py-24 px-6 bg-slate-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-blue-300 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-950 font-serif mb-4">How It Works</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        Experience the easiest way to get your laundry done.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step) => (
                        <div key={step.id} className="group relative">
                            {/* Connecting Line (Desktop) */}
                            {step.id !== 4 && (
                                <div className="hidden lg:block absolute top-[8rem] left-1/2 w-full h-0.5 border-t-2 border-dashed border-blue-200 -z-10"></div>
                            )}

                            <div className="flex flex-col items-center text-center gap-6">
                                {/* Image/Icon Container */}
                                <div className="relative w-48 h-48 rounded-full border-4 border-white shadow-xl overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-blue-900/10 z-10 group-hover:bg-transparent transition-colors"></div>
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Floating Icon */}
                                    <div className="absolute bottom-4 right-4 bg-white p-3 rounded-full shadow-lg z-20 text-orange-500">
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                </div>

                                {/* Text */}
                                <div>
                                    <div className="inline-block bg-blue-50 text-blue-800 text-xs font-bold px-2 py-1 rounded-md mb-2">
                                        STEP {step.id}
                                    </div>
                                    <h3 className="text-xl font-bold text-blue-950 mb-1">{step.title}</h3>
                                    <p className="text-slate-500 text-sm">{step.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
