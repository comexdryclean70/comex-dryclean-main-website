import React from "react";
import Image from "next/image";

export const Logo = ({ variant = "brand", className = "" }: { variant?: "brand" | "light" | "dark", className?: string }) => {
    // Determine dimensions based on className or default
    // We'll use object-contain to make sure it fits within the parent's constraints

    // For "light" variant usage (on dark backgrounds), we might technically need a white version of the logo.
    // However, the provided logo is Red/Blue. 
    // If exact color manipulation is needed later we can use CSS filters or require a white asset.
    // For now, we assume the Red/Blue logo is desired everywhere as per the "Brand Energy" overhaul.

    return (
        <div className={`relative ${className} min-w-[120px] min-h-[40px]`}>
            <Image
                src="/comex-logo.png"
                alt="Comex Dry Cleaner"
                fill
                className="object-contain object-left"
                priority
            />
        </div>
    );
};

export default Logo;
