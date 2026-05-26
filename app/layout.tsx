import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ScrollAnimations from "@/components/ScrollAnimations";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CityStack | Contract Offer Platform",
  description:
    "CityStack connects businesses with top-tier contractors. Find the right talent, manage contracts, and scale your projects with confidence.",
  keywords:
    "contracts, contractors, business platform, talent acquisition, project management",
  openGraph: {
    title: "CityStack | Contract Offer Platform",
    description: "Connect with top contractors and scale your business.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        <ScrollAnimations />
        {children}
      </body>
    </html>
  );
}
