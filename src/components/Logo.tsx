import { cn } from "@/lib/utils";

type LogoProps = {
    variant?: "light" | "dark"; // dark = for dark backgrounds (white text), light = for light backgrounds (blue text)
    className?: string;
};

export default function Logo({ variant = "dark", className }: LogoProps) {
    const isDark = variant === "dark";

    return (
        <div className={cn("flex flex-col leading-none select-none", className)}>
            <span className="font-great-vibes text-[#D32F2F] text-4xl md:text-5xl">
                Comex
            </span>
            <span className={cn(
                "font-sans font-bold text-[10px] md:text-xs tracking-[0.2em] -mt-1 ml-1",
                isDark ? "text-white/90" : "text-blue-900"
            )}>
                DRY CLEANER
            </span>
        </div>
    );
}
