import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientNav from "@/components/ClientNav";

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
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClientNav />
        <main className="min-h-screen bg-white transition-all duration-300 ease-in-out pt-0 md:pt-0 px-4 md:px-8">
          <div className="md:ml-20 pt-6 md:pt-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
