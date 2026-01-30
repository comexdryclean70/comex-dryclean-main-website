import Image from "next/image";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProcessSteps from "@/components/ProcessSteps";
import PriceCards from "@/components/PriceCards";
import BookingUI from "@/components/BookingUI";
import MainFooter from "@/components/MainFooter";
import StickyFooter from "@/components/StickyFooter";

export default function Home() {
  return (
    <main className="min-h-screen pb-20 md:pb-0 font-sans text-slate-800 selection:bg-orange-100 selection:text-orange-900">
      {/* Header */}
      <nav className="absolute top-0 left-0 w-full p-6 z-30 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
        <div className="w-32 md:w-40 relative h-12 md:h-14">
          <Image
            src="/comex-logo.png"
            alt="Comex Drycleaners"
            fill
            className="object-contain object-left mix-blend-multiply"
            priority
          />
        </div>
        <div className="hidden md:block">
          <a href="tel:9250885310" className="text-sm font-bold bg-white/80 backdrop-blur-md px-4 py-2 rounded-full border border-white shadow-sm hover:text-orange-600 transition-colors">
            📞 9250-885-310
          </a>
        </div>
      </nav>

      <Hero />
      <TrustStrip />
      <ProcessSteps />
      <PriceCards />
      <BookingUI />
      <MainFooter />
      <StickyFooter />
    </main>
  );
}
