import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from 'next/dynamic';

// Use dynamic import with fallback for the Navigation component
const Navigation = dynamic(
  () => import('@/components/Navigation').catch(() => import('@/components/FallbackNavigation')),
  {
    ssr: false,
    loading: () => (
      <div className="fixed top-0 left-0 w-full h-16 flex items-center px-4 bg-emerald-800 md:w-64 md:h-full">
        <div className="text-xl font-bold text-white">Siwa Wellness Resort</div>
      </div>
    ),
  }
);

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
      <body className={`${inter.className} flex`}>
        <Navigation />
        <main className="flex-grow min-h-screen bg-white pl-0 md:pl-64 pt-16 md:pt-0 transition-all duration-300 ease-in-out">
          {children}
        </main>
      </body>
    </html>
  );
}
