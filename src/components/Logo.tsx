import React from "react";
import { Caveat } from "next/font/google"; // Using Caveat as a proxy for the script font if needed, but we'll use SVG paths for better control or just standard text with a class if the font is loaded globally. 
// Actually, let's keep it simple and use an SVG that approximates the look or standard text if we can't load fonts dynamically here easily.
// I'll use standard SVG text elements with system cursive fallback for now to ensure it renders immediately without complex font loading in this component file.

export const Logo = ({ variant = "brand", className = "" }: { variant?: "brand" | "light" | "dark", className?: string }) => {

    // Brand Colors
    const red = "#D32F2F"; // Spark Red
    const blue = "#003366"; // Deep Navy

    const isLight = variant === "light";
    const textColor = isLight ? "white" : blue;
    const accentColor = isLight ? "white" : red;

    return (
        <div className={`flex flex-col items-center leading-none select-none ${className}`}>
            {/* Comex - Red Script Style */}
            <div className="text-[2.5rem] md:text-[3rem] font-bold italic tracking-tighter" style={{ fontFamily: '"Brush Script MT", "Caveat", cursive', color: accentColor }}>
                Comex
            </div>

            {/* DRY CLEANER - Blue Sans Style */}
            <div className="text-[0.6rem] md:text-[0.75rem] font-black tracking-[0.2em] uppercase mt-[-0.2em]" style={{ fontFamily: 'Inter, sans-serif', color: textColor }}>
                Dry Cleaner
            </div>
        </div>
    );
};

export default Logo;
