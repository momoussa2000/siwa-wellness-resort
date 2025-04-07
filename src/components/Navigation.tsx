'use client';

import Link from 'next/link';
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
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Toggle sidebar expansion
  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  // Handle mouse enter/leave for automatic expansion
  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  // Close sidebar when navigating on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setExpanded(false);
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div 
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-full bg-emerald-800 text-white z-40 transition-all duration-300 ease-in-out
                   ${expanded ? 'w-64' : 'w-20'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Logo and toggle button */}
        <div className="flex items-center justify-between p-4 border-b border-emerald-700">
          <div className={`logo transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
            <Link href="/" className="text-xl font-bold whitespace-nowrap">
              Siwa Wellness
            </Link>
          </div>
          <button 
            onClick={toggleSidebar}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 
                       hover:bg-emerald-700 ${expanded ? 'absolute right-4' : 'mx-auto'}`}
          >
            {expanded ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation links */}
        <ul className="mt-6 space-y-2 px-2">
          {navItems.map((item) => (
            <li key={item.path} className="relative">
              <Link
                href={item.path}
                className={`flex items-center p-3 rounded-lg transition-all duration-200
                           ${pathname === item.path
                              ? 'bg-emerald-700 text-white'
                              : 'text-emerald-100 hover:bg-emerald-700 hover:text-white'
                           }`}
              >
                <span className="text-xl min-w-[24px]">{item.icon}</span>
                <span className={`ml-3 whitespace-nowrap transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
                  {item.name}
                </span>
              </Link>
              {/* Tooltip for collapsed state */}
              {!expanded && (
                <div className="absolute left-full top-0 ml-2 p-2 bg-white text-emerald-800 rounded shadow-lg 
                                opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto 
                                transition-opacity duration-200 z-50 whitespace-nowrap hidden md:block">
                  {item.name}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-emerald-700">
          <div className={`transition-opacity duration-300 ${expanded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-sm text-emerald-200">© {new Date().getFullYear()}</div>
            <div className="text-xs text-emerald-300">Siwa Wellness Resort</div>
          </div>
        </div>
      </div>

      {/* Main content padding adjustment based on sidebar state */}
      <div className={`transition-all duration-300 ease-in-out ${expanded ? 'md:ml-64' : 'md:ml-20'} ml-0`}></div>
    </>
  );
} 