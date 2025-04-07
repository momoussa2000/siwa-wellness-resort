'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: '1. Executive Summary', path: '/executive-summary' },
  { name: '2. Vision & Mission', path: '/vision-mission' },
  { name: '3. Concept & Design', path: '/concept-design' },
  { name: '4. Target Market & Opportunity', path: '/target-market' },
  { name: '5. Site & Location', path: '/site-location' },
  { name: '6. Facility Layout', path: '/facility-layout' },
  { name: '7. Activities & Experiences', path: '/activities' },
  { name: '8. Service Model & Revenue', path: '/service-model' },
  { name: '9. Financial Projections', path: '/financial-projections' }
];

export default function Navigation() {
  const pathname = usePathname();
  const sidebarWidth = "w-64"; // Define sidebar width

  return (
    <nav className={`fixed top-0 left-0 h-full ${sidebarWidth} bg-gradient-to-b from-emerald-800 to-emerald-700 text-white shadow-xl z-10 flex flex-col`}>
      <div className="p-6 mb-8">
        <Link href="/" className="text-2xl font-bold text-emerald-50 hover:text-white transition-colors">
          Siwa Wellness Resort
        </Link>
      </div>
      <div className="flex-grow overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-6 py-3 text-sm font-medium transition-colors duration-150 ${
              pathname === item.path
                ? 'bg-emerald-600 text-white border-l-4 border-emerald-300'
                : 'text-emerald-100 hover:bg-emerald-600 hover:text-white'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* Optional Footer in Sidebar */}
      <div className="p-4 mt-auto text-xs text-emerald-300">
        © {new Date().getFullYear()} Siwa Wellness Resort
      </div>
    </nav>
  );
} 