'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);
  
  // Close menu when navigating
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when clicking outside on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    // Set initial state based on screen size
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {/* Hamburger button - only visible on mobile */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-20 p-2 rounded-md bg-emerald-700 text-white"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Overlay that appears when menu is open on mobile */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Navigation sidebar */}
      <nav className={`fixed top-0 left-0 h-full ${sidebarWidth} bg-gradient-to-b from-emerald-800 to-emerald-700 text-white shadow-xl z-20 flex flex-col transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
      }`}>
        <div className="p-6 mb-8 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-emerald-50 hover:text-white transition-colors">
            Siwa Wellness Resort
          </Link>
          <button 
            onClick={() => setIsOpen(false)}
            className="md:hidden text-white"
            aria-label="Close menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
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
    </>
  );
} 