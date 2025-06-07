import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/header";
import Footer from "@/components/layouts/footer";
import FloatingButton from "@/components/layouts/floating-button";
import Maintenance from "./maintenance/page";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Infonoble",
  description: "Infonoble",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true";

  if (maintenanceMode) {
    return (
      <html lang="en">
        <body>
          <Maintenance />
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div aria-hidden="true" className="h-[88px] md:h-[88px]"></div>
        <Header />
        {children}
        <Footer />
        <FloatingButton />
      </body>
    </html>
  );
}
