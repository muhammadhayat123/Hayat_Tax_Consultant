import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hayat Tax Consultants & Co. | Tax, Corporate & Legal Advisors",
    template: "%s | Hayat Tax Consultants & Co."
  },
  description: "Hayat Tax Consultants & Co. is a premium tax and corporate law consultancy firm in PECHS. Expert advice in Income Tax, Sales Tax, SECP registrations, property taxation & legal services.",
  keywords: [
    "Tax Consultant Pakistan",
    "Income Tax Consultant",
    "Sales Tax Consultant",
    "SECP Registration",
    "Legal Consultant",
    "Property Tax Consultant",
    "FBR Tax Return filing",
    "AOP registration Karachi",
    "Corporate compliance services",
    "Karachi tax advisor"
  ],
  authors: [{ name: "Hayat Tax Consultants & Co." }],
  creator: "Hayat Tax Consultants & Co.",
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: "https://hayattax.com",
    title: "Hayat Tax Consultants & Co. | Tax & Legal Consultancy",
    description: "Trusted Chartered Accountant & Tax consultant services in Karachi. SECP company registration, tax audits, sales tax filing, and property compliance.",
    siteName: "Hayat Tax Consultants & Co."
  },
  metadataBase: new URL("https://hayattax.com"),
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema Markup (JSON-LD) for Local Business / Legal Service
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Hayat Tax Consultants & Co.",
    "image": "/founder.png",
    "@id": "https://hayattax.com/#firm",
    "url": "https://hayattax.com",
    "telephone": "+923183608176",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "PECHS",
      "addressLocality": "Karachi",
      "addressRegion": "Sindh",
      "postalCode": "75400",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "24.8607",
      "longitude": "67.0011"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://wa.me/923341537350"
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-body bg-luxury-bg text-luxury-white antialiased flex flex-col min-h-screen`}>
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow pt-[80px]">
          {children}
        </main>
        <WhatsAppCTA />
        <BackToTop />
        <Footer />
      </body>
    </html>
  );
}
