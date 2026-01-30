import Image from "next/image";
import { cn } from "@/lib/utils";

export default function StorySection() {
    return (
        <section className="relative py-20 px-6 bg-[#f7f5f2] overflow-hidden">
            {/* Grain Texture */}
            <div className="absolute inset-0 z-0 opacity-[0.6] pointer-events-none mix-blend-multiply" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.5\"/%3E%3C/svg%3E')" }}></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Column 1: The Visual Scrapbook */}
                    <div className="relative">
                        {/* Photo 1: "The Old Days" - Rotated & Taped */}
                        <div className="absolute -top-10 -left-6 w-48 h-48 md:w-64 md:h-64 bg-white p-2 shadow-xl transform -rotate-6 z-10 rounded-sm">
                            <div className="relative w-full h-full bg-sepia-200 grayscale contrast-125 overflow-hidden">
                                {/* Placeholder for Founder Photo */}
                                <div className="w-full h-full bg-stone-300 flex items-center justify-center text-stone-500 font-bold text-xs uppercase tracking-widest text-center px-4">
                                    [Insert Photo: Founder in 90s]
                                </div>
                            </div>
                            {/* Tape Effect */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-8 bg-white/40 backdrop-blur-sm rotate-2 shadow-sm"></div>
                        </div>

                        {/* Photo 2: "Modern Day" - Clean & Straight */}
                        <div className="relative ml-auto mt-24 md:mt-32 w-64 h-64 md:w-80 md:h-80 bg-white p-2 shadow-2xl rounded-2xl transform rotate-2 z-20">
                            <div className="relative w-full h-full overflow-hidden rounded-xl">
                                {/* Placeholder for Storefront */}
                                <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-400 font-bold text-xs uppercase tracking-widest text-center px-4">
                                    [Insert Photo: Modern Storefront]
                                </div>
                            </div>
                        </div>

                        {/* Decor: Hand-drawn arrow */}
                        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 text-stone-400 opacity-50 transform -rotate-12 z-0 hidden md:block" viewBox="0 0 100 100">
                            <path d="M10,50 Q50,20 90,50" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>

                    {/* Column 2: The Narrative */}
                    <div className="space-y-8">
                        <div>
                            <span className="font-handwriting text-3xl text-orange-600 rotate-2 inline-block mb-2">Since 1990</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-stone-800 font-serif leading-tight">
                                From Gorakhpur to Dwarka: <br className="hidden md:block" />
                                <span className="italic text-stone-600">A 30-Year Journey.</span>
                            </h2>
                        </div>

                        <div className="space-y-6 text-stone-600 text-lg leading-relaxed font-medium">
                            <p>
                                <span className="text-4xl float-left mr-2 mt-[-10px] font-serif text-stone-400">"</span>
                                In the early 90s, I arrived in Delhi from Gorakhpur with just one skill: I knew how to treat fabric.
                                It wasn't about 'startups' or 'apps' back then. It was about survival. I started small, ironing clothes by hand,
                                learning that every fabric—from cotton to silk—speaks a different language.
                            </p>
                            <p>
                                Three decades later, Dwarka has changed. The buildings are taller, the fashion is faster. But my method hasn't changed.
                                We still spot-clean by hand. We still treat your saree like it's our own. We aren't a franchise run by spreadsheets;
                                we are a family business built on trust.
                            </p>
                        </div>

                        <div>
                            <div className="font-handwriting text-4xl text-blue-900 transform -rotate-2">
                                - The Founder
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
