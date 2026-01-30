import type { Metadata } from "next";
import { Inter, Playfair_Display, Great_Vibes } from "next/font/google"; // [NEW] Import Playfair
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-great-vibes",
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
  "telephone": "+91 0000000000",
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
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
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
      <body className={`${inter.variable} ${playfair.variable} ${greatVibes.variable} font-sans bg-slate-50 text-slate-900 antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

