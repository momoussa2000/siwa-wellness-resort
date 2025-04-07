import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Siwa Wellness Resort - Business Plan",
  description: "A comprehensive business plan presentation for Siwa Wellness Resort",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sidebarWidth = "w-64"; // Must match Navigation.tsx
  const mainPadding = "pl-64"; // Must correspond to sidebarWidth

  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Navigation />
        <main className={`flex-grow min-h-screen bg-white ${mainPadding}`}>
          {children}
        </main>
      </body>
    </html>
  );
}
