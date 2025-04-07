'use client';

import dynamic from 'next/dynamic';

// Use dynamic import with fallback for the Navigation component
const DynamicNavigation = dynamic(
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

export default function ClientNav() {
  return <DynamicNavigation />;
} 