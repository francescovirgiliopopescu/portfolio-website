import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"], // You can add 'latin-ext', 'cyrillic', etc.
  weight: ["400", "500", "600", "700"], // Pick the font weights you need
  variable: "--font-montserrat", // Optional: add CSS variable
});

export const metadata: Metadata = {
  title: "FRANCESCO · ENGINEER",
  description:
    "Software engineer adept in all stages of advanced web development with 7+ years of powerful experience in web development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
