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
      <body className={`${inter.className} m-0 p-0 overflow-x-hidden`}>
        <ClientNav />
        <main className="min-h-screen bg-white transition-all duration-300 ease-in-out">
          <div className="md:ml-20 p-6 md:p-8">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
