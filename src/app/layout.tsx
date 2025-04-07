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

  return (
    <html lang="en">
      <body className={`${inter.className} flex`}>
        <Navigation />
        <main className="flex-grow min-h-screen bg-white pl-0 md:pl-64 pt-16 md:pt-0 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </body>
    </html>
  );
}
