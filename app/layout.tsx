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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://buniaga-hidroponik.my.id";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/my-favicon.ico?v=1" },
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
    images: ["/favicon-32x32.png"],
  },
  twitter: {
    card: "summary",
    title: "Supplier Hidroponik Jakarta | Buniaga Hidroponik",
    description:
      "Supply sayur stabil, langsung dari kebun khusus Anda. Produksi sayur hidroponik berbasis kontrak untuk bisnis di Jakarta.",
    images: ["/favicon-32x32.png"],
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
