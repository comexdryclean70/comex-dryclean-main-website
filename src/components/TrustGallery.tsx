"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ArrowRight, X, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const TRUST_STORIES = [
    {
        id: "expertise",
        title: "30+ Years of Expertise",
        headline: "30+ Years of Doing This Right",
        desc: "We didn’t learn dry cleaning from manuals. We learned it from years behind the counter.",
        body: (
            <>
                <p className="mb-4">We didn’t learn dry cleaning from manuals. We learned it from years behind the counter — handling school uniforms, wedding lehengas, office suits, and clothes people brought in saying, 'Bas isko sambhaal lena.'</p>
                <p className="mb-4">Comex has been part of Dwarka since the 90s. Many of our regulars today are the children of customers we served years ago. Over time, you start recognising fabrics by touch, stains by smell, and mistakes before they happen.</p>
                <p>That kind of experience doesn’t come from machines. It comes from doing the work, every single day.</p>
            </>
        ),
        image: "/trust-expertise.png",
        alt: "Vintage dry cleaning shop",
    },
    {
        id: "inspection",
        title: "Personalized Inspection",
        headline: "Every Garment Gets Looked At. Properly.",
        desc: "Before anything goes into a machine, it goes through us. We check collars, cuffs, and buttons.",
        body: (
            <>
                <p className="mb-4">Before anything goes into a machine, it goes through us. We check collars, cuffs, linings, buttons, loose threads — the small things most people miss.</p>
                <p className="mb-4">If a stain looks tricky, we don’t guess. We decide the treatment based on the fabric, the age of the garment, and how often it’s been worn. If something needs extra care, we take that time.</p>
                <p>Your clothes aren’t just items to us. Someone chose them. Someone wears them. That matters.</p>
            </>
        ),
        image: "/trust-inspection.png",
        alt: "Magnifying glass inspecting fabric",
    },
    {
        id: "time",
        title: "On-Time, Every Time",
        headline: "We Respect Your Time",
        desc: "No follow-up calls. No 'kal ho jaayega.' If we give you a delivery date, we stick to it.",
        body: (
            <>
                <p className="mb-4">If we give you a delivery date, we stick to it. No follow-up calls. No 'kal ho jaayega.'</p>
                <p className="mb-4">We plan our work so your clothes are ready when we say they will be — whether it’s a daily office shirt or something you need for a function. People plan their days around this, and we don’t take that lightly.</p>
                <p>Reliability isn’t a feature. It’s a habit.</p>
            </>
        ),
        image: "/trust-delivery.png",
        alt: "Neat stack of clothes with clock",
    },
    {
        id: "solvents",
        title: "Premium Solvents Only",
        headline: "Clean Without Compromise",
        desc: "We use high-grade solvents that clean thoroughly without stripping colour or texture.",
        body: (
            <>
                <p className="mb-4">We use high-grade, fabric-safe solvents — the kind that clean thoroughly without stripping colour or texture. That’s why your clothes don’t come back smelling harsh or looking tired.</p>
                <p className="mb-4">Cheaper chemicals may save time, but they slowly ruin fabrics. We’ve seen it happen. That’s why we’ve always chosen quality over shortcuts, even when it costs us more.</p>
                <p>Good cleaning should make your clothes last longer, not wear them out faster.</p>
            </>
        ),
        image: "/trust-solvents.png",
        alt: "Premium clear solvent",
    },
    {
        id: "mixing",
        title: "Zero Mixing Policy",
        headline: "Your Clothes Stay With Your Clothes",
        desc: "Hygiene first. Your order is processed in its own batch, never mixed with others.",
        body: (
            <>
                <p className="mb-4">We never mix orders. Ever.</p>
                <p className="mb-4">Your garments are processed in their own batch, tagged and tracked from start to finish. No mixing with other customers’ clothes, no cross-handling, no confusion.</p>
                <p>It’s cleaner, more hygienic, and frankly — it’s how it should be. When you hand over your clothes, they remain yours until they’re back with you.</p>
            </>
        ),
        image: "/trust-packaging.png",
        alt: "Individually packaged garments",
    },
];

export default function TrustGallery() {
    const [selectedStory, setSelectedStory] = useState<typeof TRUST_STORIES[0] | null>(null);

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Fabric Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'6\' height=\'6\' viewBox=\'0 0 6 6\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\' fill-rule=\'evenodd\'%3E%3Cpath d=\'M5 0h1L0 6V5zM6 5v1H5z\'/%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 bg-orange-100/50 border border-orange-200 px-4 py-1.5 rounded-full text-orange-800 text-sm font-bold shadow-sm backdrop-blur-sm">
                        <div className="flex gap-0.5">
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />)}
                        </div>
                        Rated 4.9/5 by 500+ Local Families
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold text-blue-950 font-serif">
                        Why Neighbors Trust Comex.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                        Your clothes deserve more than just a wash. They deserve care.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                    {TRUST_STORIES.map((story, index) => {
                        const isLarge = index === 0;
                        return (
                            <motion.div
                                key={story.id}
                                layoutId={`card-${story.id}`}
                                onClick={() => setSelectedStory(story)}
                                className={`
                                    group relative rounded-3xl overflow-hidden shadow-md border border-slate-100 cursor-pointer text-left
                                    ${isLarge ? 'md:col-span-2 md:row-span-1 h-[400px] md:h-auto' : 'col-span-1 h-[400px]'}
                                `}
                                whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 z-0">
                                    <Image
                                        src={story.image}
                                        alt={story.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${isLarge ? 'from-blue-950/90 via-blue-950/40 to-transparent' : 'from-blue-950/90 via-blue-950/20 to-transparent'}`} />
                                </div>

                                <div className="absolute inset-0 flex flex-col justify-end p-8 z-10 text-white">
                                    <h3 className="text-2xl font-bold font-serif mb-2 group-hover:text-amber-200 transition-colors">
                                        {story.title}
                                    </h3>
                                    <p className="text-blue-100/90 text-sm md:text-base line-clamp-3 mb-4 max-w-lg">
                                        {story.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
                                        Read Story <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Modal / Bottom Sheet Overlay */}
            <AnimatePresence>
                {selectedStory && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedStory(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Modal Container */}
                        <div className="fixed inset-0 z-[60] flex items-end md:items-center justify-center pointer-events-none p-4">
                            <motion.div
                                layoutId={`card-${selectedStory.id}`}
                                className="w-full max-w-2xl bg-white rounded-t-3xl md:rounded-3xl shadow-2xl overflow-hidden pointer-events-auto max-h-[90vh] flex flex-col"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "100%" }}
                                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            >
                                {/* Header Image */}
                                <div className="relative h-48 md:h-64 shrink-0">
                                    <Image
                                        src={selectedStory.image}
                                        alt={selectedStory.alt}
                                        fill
                                        className="object-cover"
                                    />
                                    <button
                                        onClick={() => setSelectedStory(null)}
                                        className="absolute top-4 right-4 bg-black/20 hover:bg-black/40 backdrop-blur-md text-white p-2 rounded-full transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Content */}
                                <div className="p-8 overflow-y-auto">
                                    <div className="mb-6">
                                        <div className="text-xs font-bold text-amber-600 uppercase tracking-widest mb-2">{selectedStory.title}</div>
                                        <h3 className="text-3xl md:text-4xl font-bold font-serif text-blue-950 leading-tight">
                                            {selectedStory.headline}
                                        </h3>
                                    </div>

                                    <div className="text-slate-600 text-lg leading-relaxed space-y-4">
                                        {selectedStory.body}
                                    </div>

                                    <div className="mt-8 pt-8 border-t border-slate-100">
                                        <p className="flex items-start gap-3 italic text-slate-400 text-sm">
                                            <Quote className="w-4 h-4 shrink-0 text-amber-400 fill-current" />
                                            This isn’t marketing. This is how we’ve always worked.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
