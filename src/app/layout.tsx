import type { Metadata } from "next";
import { fraunces, inter } from "@/lib/fonts";
import { CurrencyProvider } from "@/providers/currency-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppFAB } from "@/components/layout/whatsapp-fab";
import { MobileBottomBar } from "@/components/layout/mobile-bottom-bar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Denada | Premium Real Estate Investment in Nigeria",
    template: "%s | Denada",
  },
  description:
    "Invest in Nigeria's premium real estate. Buy outright, pay in installments, or own fractions of luxury properties in Lagos & Abuja.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <CurrencyProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <WhatsAppFAB />
          <MobileBottomBar />
        </CurrencyProvider>
      </body>
    </html>
  );
}
