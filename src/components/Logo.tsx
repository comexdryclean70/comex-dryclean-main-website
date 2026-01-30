import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoProps = {
    variant?: "light" | "dark"; // dark = for dark backgrounds (white text), light = for light backgrounds (blue text)
    className?: string;
};

export default function Logo({ variant = "dark", className }: LogoProps) {
    const isDark = variant === "dark";

    return (
        <div className={cn("relative", className)}>
            <Image
                src="/logo-official.png"
                alt="Comex Dry Cleaners"
                width={200}
                height={80}
                className={cn("w-auto h-auto object-contain", isDark && "brightness-0 invert")}
                priority
            />
        </div>
    );
}
