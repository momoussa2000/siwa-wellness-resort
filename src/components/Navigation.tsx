'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
// Import GSAP with direct modules for better compatibility
import { gsap } from 'gsap';

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
  const [isOpen, setIsOpen] = useState(false);
  const line01Ref = useRef<SVGLineElement>(null);
  const line02Ref = useRef<SVGLineElement>(null);
  const line03Ref = useRef<SVGLineElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  
  // Handle menu toggle directly without GSAP first
  const toggleMenu = () => {
    console.log('Toggle menu clicked, isOpen:', isOpen);
    
    setIsOpen(!isOpen);
    
    if (!menuRef.current) return;
    
    if (!isOpen) {
      // Opening the menu
      menuRef.current.style.visibility = 'visible';
      menuRef.current.style.opacity = '1';
      
      if (line01Ref.current) {
        line01Ref.current.style.transform = 'translateX(0) rotate(45deg)';
      }
      if (line02Ref.current) {
        line02Ref.current.style.opacity = '0';
      }
      if (line03Ref.current) {
        line03Ref.current.style.transform = 'translateX(0) rotate(-45deg)';
      }
    } else {
      // Closing the menu
      menuRef.current.style.opacity = '0';
      
      setTimeout(() => {
        if (menuRef.current) {
          menuRef.current.style.visibility = 'hidden';
        }
      }, 300);
      
      if (line01Ref.current) {
        line01Ref.current.style.transform = 'translateX(40px) rotate(0deg)';
      }
      if (line02Ref.current) {
        line02Ref.current.style.opacity = '1';
      }
      if (line03Ref.current) {
        line03Ref.current.style.transform = 'translateX(-40px) rotate(0deg)';
      }
    }
  };

  // Set initial states
  useEffect(() => {
    if (line01Ref.current) {
      line01Ref.current.style.transform = 'translateX(40px)';
    }
    if (line03Ref.current) {
      line03Ref.current.style.transform = 'translateX(-40px)';
    }
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
        
        if (menuRef.current) {
          menuRef.current.style.visibility = 'hidden';
          menuRef.current.style.opacity = '0';
        }
        
        if (line01Ref.current) {
          line01Ref.current.style.transform = 'translateX(40px) rotate(0deg)';
        }
        if (line02Ref.current) {
          line02Ref.current.style.opacity = '1';
        }
        if (line03Ref.current) {
          line03Ref.current.style.transform = 'translateX(-40px) rotate(0deg)';
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Close menu when navigating
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
      
      if (menuRef.current) {
        menuRef.current.style.visibility = 'hidden';
        menuRef.current.style.opacity = '0';
      }
      
      if (line01Ref.current) {
        line01Ref.current.style.transform = 'translateX(40px) rotate(0deg)';
      }
      if (line02Ref.current) {
        line02Ref.current.style.opacity = '1';
      }
      if (line03Ref.current) {
        line03Ref.current.style.transform = 'translateX(-40px) rotate(0deg)';
      }
    }
  }, [pathname, isOpen]);

  // Set up refs for nav items
  const setNavItemRef = (el: HTMLLIElement | null, index: number) => {
    if (el) {
      navItemsRef.current[index] = el;
    }
  };

  return (
    <>
      {/* Header with logo and hamburger */}
      <header className="fixed top-0 left-0 w-full h-16 px-4 flex justify-between items-center z-30 bg-emerald-800 md:hidden">
        <div id="navLogo" className="text-xl font-bold text-white">
          <Link href="/">Siwa Wellness Resort</Link>
        </div>
        <svg className="hamburger w-8 h-8 cursor-pointer" viewBox="0 0 80 80" onClick={toggleMenu}>
          <line ref={line01Ref} className="line01" x1="0" y1="3" x2="80" y2="3" stroke="white" strokeWidth="6" />
          <line ref={line02Ref} className="line02" x1="0" y1="40" x2="80" y2="40" stroke="white" strokeWidth="6" />
          <line ref={line03Ref} className="line03" x1="0" y1="77" x2="80" y2="77" stroke="white" strokeWidth="6" />
        </svg>
      </header>

      {/* Full-screen Menu with transitions */}
      <div 
        ref={menuRef} 
        className="menu fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-emerald-800 to-emerald-700 z-20 md:hidden"
        style={{ 
          visibility: 'hidden', 
          opacity: 0,
          transition: 'opacity 0.3s ease'
        }}
      >
        <nav className="navigation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="p-0 m-0">
            {navItems.map((item, index) => (
              <li 
                key={item.path} 
                ref={(el) => setNavItemRef(el, index)} 
                className="list-none text-2xl mb-4"
                style={{ 
                  transform: isOpen ? 'translateX(0)' : 'translateX(-110px)',
                  transition: `transform 0.5s ease ${index * 0.1}s`
                }}
              >
                <Link 
                  href={item.path}
                  className={`block py-2 text-white transition-colors hover:text-emerald-200 ${
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

      {/* Desktop Sidebar - only visible on md+ screens */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-emerald-800 to-emerald-700 text-white shadow-xl z-20 flex-col">
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
    </>
  );
} 