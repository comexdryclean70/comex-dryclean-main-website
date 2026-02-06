import type { Metadata } from "next";
import { Inter, Playfair_Display, Lobster, Caveat } from "next/font/google"; // [NEW] Import Playfair
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Comex Drycleaners | Fresh Clothes, Zero Stress",
  description: "The easiest way to get your laundry done. We pick up your dirty clothes and bring them back clean. Simple.",
  openGraph: {
    title: "Comex Drycleaners",
    description: "Fresh Clothes, Zero Stress. Book a pickup today.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Comex Drycleaners",
  "image": "",
  "telephone": "+91 9250625681",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Moti Nagar",
    "addressLocality": "New Delhi",
    "postalCode": "110015",
    "addressCountry": "IN"
  },
  "priceRange": "₹₹",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "21:00"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${lobster.variable} font-sans bg-[#FDF8F3] text-slate-900 antialiased relative`}>
        {/* Global Dot Pattern Overlay */}
        <div className="fixed inset-0 z-0 opacity-[0.4] pointer-events-none" style={{ backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", backgroundSize: "32px 32px" }}></div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}

