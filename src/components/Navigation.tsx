'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { FaHome, FaFileAlt, FaBullseye, FaPencilRuler, FaUsers, FaMapMarkedAlt, FaBuilding, FaHiking, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';

const navItems = [
  { name: 'Home', path: '/', icon: <FaHome /> },
  { name: '1. Executive Summary', path: '/executive-summary', icon: <FaFileAlt /> },
  { name: '2. Vision & Mission', path: '/vision-mission', icon: <FaBullseye /> },
  { name: '3. Concept & Design', path: '/concept-design', icon: <FaPencilRuler /> },
  { name: '4. Target Market', path: '/target-market', icon: <FaUsers /> },
  { name: '5. Site & Location', path: '/site-location', icon: <FaMapMarkedAlt /> },
  { name: '6. Facility Layout', path: '/facility-layout', icon: <FaBuilding /> },
  { name: '7. Activities', path: '/activities', icon: <FaHiking /> },
  { name: '8. Service Model', path: '/service-model', icon: <FaMoneyBillWave /> },
  { name: '9. Financial Projections', path: '/financial-projections', icon: <FaChartLine /> }
];

export default function Navigation() {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Toggle sidebar expansion
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  // Handle mouse enter/leave for automatic expansion (desktop only)
  const handleMouseEnter = () => {
    if (!isMobile) {
      setExpanded(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setExpanded(false);
    }
  };

  // Check if on mobile and handle resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setExpanded(false);
      }
    };
    
    // Set initial state
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <>
      {/* Mobile header with hamburger */}
      <header className="fixed top-0 left-0 w-full h-16 px-4 flex justify-between items-center z-50 bg-emerald-800 md:hidden">
        <div className="flex items-center">
          <Image 
            src="/images/zarda logo symbol wht.png" 
            alt="ZARDA Logo" 
            width={50} 
            height={50} 
            className="object-contain drop-shadow-md filter brightness-110" 
          />
        </div>
        <button 
          onClick={toggleSidebar}
          className="w-10 h-10 flex items-center justify-center text-white"
        >
          {expanded ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Sidebar - collapsible on desktop, full screen overlay on mobile */}
      <div 
        ref={sidebarRef}
        className={`fixed z-40 transition-all duration-300 ease-in-out
                   ${isMobile 
                     ? `top-0 bottom-0 ${expanded ? 'left-0' : '-left-full'} w-full h-full bg-emerald-800 pt-16` 
                     : `top-0 left-0 h-full bg-emerald-800 ${expanded ? 'w-64' : 'w-20'}`}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo section - only on desktop */}
        {!isMobile && (
          <div className="flex items-center justify-center p-4 border-b border-emerald-700">
            <div className={`logo transition-all duration-300 ${expanded ? 'scale-100 opacity-100' : 'scale-75 opacity-90'}`}>
              {expanded ? (
                <Link href="/" className="flex justify-center">
                  <Image 
                    src="/images/zarda logo txt.png" 
                    alt="ZARDA Logo" 
                    width={160} 
                    height={50} 
                    className="object-contain"
                  />
                </Link>
              ) : (
                <Link href="/" className="flex justify-center">
                  <Image 
                    src="/images/zarda logo symbol wht.png" 
                    alt="ZARDA Symbol" 
                    width={40} 
                    height={40} 
                    className="object-contain drop-shadow-md filter brightness-110"
                  />
                </Link>
              )}
            </div>
          </div>
        )}

        {/* Navigation links */}
        <ul className={`${isMobile ? 'mt-6 px-6' : 'mt-6 px-2'} space-y-2`}>
          {navItems.map((item) => (
            <li key={item.path} className="relative group">
              <Link
                href={item.path}
                className={`flex items-center p-3 rounded-lg transition-all duration-200
                           ${pathname === item.path
                              ? 'bg-emerald-700 text-white'
                              : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
                           }`}
              >
                <span className="text-xl min-w-[24px]">{item.icon}</span>
                <span className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${expanded || isMobile ? 'opacity-100' : 'opacity-0'}`}>
                  {item.name}
                </span>
              </Link>
              {/* Tooltip for collapsed state - desktop only */}
              {!expanded && !isMobile && (
                <div className="absolute left-full top-0 ml-2 p-2 bg-white text-emerald-800 rounded shadow-lg 
                                opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
                                transition-opacity duration-200 z-50 whitespace-nowrap">
                  {item.name}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Footer - desktop only */}
        {!isMobile && (
          <div className="absolute bottom-0 left-0 w-full p-4 border-t border-emerald-700">
            <div className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
              <div className="text-sm text-emerald-200">© {new Date().getFullYear()}</div>
              <div className="text-xs text-emerald-300">ZARDA</div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile overlay backdrop */}
      {isMobile && expanded && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setExpanded(false)}
        />
      )}

      {/* Main content padding adjustment based on sidebar state - desktop only */}
      {!isMobile && (
        <div className={`transition-all duration-300 ease-in-out ${expanded ? 'md:ml-64' : 'md:ml-20'} ml-0`}></div>
      )}
    </>
  );
} 