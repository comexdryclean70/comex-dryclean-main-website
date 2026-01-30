import Link from "next/link";
import Logo from "@/components/Logo";
import BookingWizard from "@/components/BookingWizard";
import MainFooter from "@/components/MainFooter";

export default function BookingPage() {
    return (
        <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
            {/* Simple Header */}
            <nav className="fixed top-0 inset-x-0 p-6 z-50 flex justify-between items-center max-w-7xl mx-auto bg-white/80 backdrop-blur-md md:bg-transparent md:backdrop-blur-none">
                <Link href="/" className="hover:opacity-80 transition-opacity">
                    <Logo variant="dark" />
                </Link>
                <Link
                    href="/"
                    className="text-sm font-bold text-slate-500 hover:text-blue-900 transition-colors flex items-center gap-2"
                >
                    ← Back to Home
                </Link>
            </nav>

            <div className="pt-32 pb-20 px-4 min-h-screen flex flex-col items-center justify-center">
                <div className="w-full max-w-3xl">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 font-serif mb-2">Schedule Pickup</h1>
                        <p className="text-slate-500">We'll collect your clothes at your convenience.</p>
                    </div>
                    <BookingWizard />
                </div>
            </div>

            <MainFooter />
        </main>
    );
}
