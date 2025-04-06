'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Executive Summary', path: '/executive-summary' },
  { name: 'Company Overview', path: '/company-overview' },
  { name: 'Market Analysis', path: '/market-analysis' },
  { name: 'Marketing Strategy', path: '/marketing-strategy' },
  { name: 'Operations Plan', path: '/operations-plan' },
  { name: 'Financial Projections', path: '/financial-projections' },
  { name: 'Facility Layout', path: '/facility-layout' },
  { name: 'Management Team', path: '/management-team' },
  { name: 'Implementation Timeline', path: '/implementation-timeline' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-900">
                Siwa Wellness Resort
              </Link>
            </div>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    pathname === item.path
                      ? 'border-blue-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 