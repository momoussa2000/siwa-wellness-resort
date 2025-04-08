'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: '1. Executive Summary', path: '/executive-summary' },
  { name: '2. Vision & Mission', path: '/vision-mission' },
  { name: '3. Concept & Design', path: '/concept-design' },
  { name: '4. Target Market', path: '/target-market' },
  { name: '5. Site & Location', path: '/site-location' },
  { name: '6. Facility Layout', path: '/facility-layout' },
  { name: '7. Activities', path: '/activities' },
  { name: '8. Service Model', path: '/service-model' },
  { name: '9. Financial Projections', path: '/financial-projections' }
];

export default function FallbackNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Mobile header with hamburger */}
      <header className="fixed top-0 left-0 w-full h-16 px-4 flex justify-between items-center z-30 bg-emerald-800 md:hidden">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/images/zarda logo txt.png" 
              alt="ZARDA Logo" 
              width={120} 
              height={40} 
              className="object-contain"
            />
          </Link>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-8 h-8 flex flex-col justify-center items-center space-y-1.5 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </header>

      {/* Mobile full-screen menu */}
      <div 
        className={`fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-emerald-800 to-emerald-700 z-20 md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="pt-20 px-6">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.path} className="list-none">
                <Link 
                  href={item.path}
                  className={`block py-2 text-xl text-white transition-colors hover:text-emerald-200 ${
                    pathname === item.path ? 'font-bold text-emerald-200' : ''
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Sidebar */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-emerald-800 to-emerald-700 text-white shadow-xl z-20 flex-col">
        <div className="p-6 mb-8 flex items-center justify-center">
          <Link href="/">
            <Image 
              src="/images/zarda logo txt.png" 
              alt="ZARDA Logo" 
              width={160} 
              height={50} 
              className="object-contain"
            />
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
        {/* Footer */}
        <div className="p-4 mt-auto text-xs text-emerald-300">
          © {new Date().getFullYear()} ZARDA
        </div>
      </nav>
    </>
  );
} 