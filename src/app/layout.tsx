import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientNav from "@/components/ClientNav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ZARDA - Business Plan",
  description: "A comprehensive business plan presentation for ZARDA wellness resort",
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
          <div className="md:ml-20">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
