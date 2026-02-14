import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supplier Hidroponik Jakarta | Buniaga Hidroponik - Supply Sayur Stabil B2B",
  description:
    "Supplier hidroponik Jakarta untuk restaurant, hotel, catering & supermarket. Supply sayur hidroponik berbasis kontrak, lahan khusus B2B. Sayur hidroponik Jakarta - kualitas konsisten, harga predictable.",
  keywords: [
    "supplier hidroponik jakarta",
    "sayur hidroponik jakarta",
    "supply sayur hidroponik",
    "supplier sayur hidroponik B2B",
    "kontrak supply sayur jakarta",
    "supplier sayur hotel jakarta",
    "sayur hidroponik untuk restaurant",
    "supply sayur stabil",
    "Buniaga Hidroponik",
  ],
  openGraph: {
    title: "Supplier Hidroponik Jakarta | Buniaga Hidroponik",
    description:
      "Supply sayur stabil, langsung dari kebun khusus Anda. Produksi sayur hidroponik berbasis kontrak untuk bisnis di Jakarta.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
