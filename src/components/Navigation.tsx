'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

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
  const navItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  
  // Initialize animation timeline
  useEffect(() => {
    // Set initial states
    gsap.set(line01Ref.current, { x: 40 });
    gsap.set(line03Ref.current, { x: -40 });
    gsap.set(navItemsRef.current, { x: -110 });
    
    // Create timeline
    timelineRef.current = gsap.timeline({ paused: true })
      .to(line01Ref.current, { duration: 0.4, x: '+=40' }, 0)
      .to(line03Ref.current, { duration: 0.4, x: '-=40' }, 0)
      .to(line02Ref.current, { duration: 0.4, autoAlpha: 0 }, 0)
      .to(menuRef.current, { duration: 0.4, autoAlpha: 1 }, 0)
      .to(navItemsRef.current, { 
        duration: 0.4, 
        x: 0, 
        ease: "sine.out", 
        stagger: 0.1 
      }, 0.5)
      .to(navItemsRef.current, { 
        duration: 0.8, 
        marginBottom: '20px', 
        ease: "power1.out" 
      });
    
    return () => {
      // Cleanup
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.reverse();
      } else {
        timelineRef.current.play();
      }
      setIsOpen(!isOpen);
    }
  };

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        if (timelineRef.current && isOpen) {
          timelineRef.current.reverse();
          setIsOpen(false);
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Close menu when navigating
  useEffect(() => {
    if (timelineRef.current && isOpen) {
      timelineRef.current.reverse();
      setIsOpen(false);
    }
  }, [pathname, isOpen]);

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

      {/* Full-screen Menu */}
      <div ref={menuRef} className="menu fixed top-0 left-0 w-screen h-screen bg-gradient-to-b from-emerald-800 to-emerald-700 invisible opacity-0 z-20 md:hidden">
        <nav className="navigation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <ul className="p-0 m-0">
            {navItems.map((item, index) => (
              <li 
                key={item.path} 
                ref={(el) => { navItemsRef.current[index] = el; }}
                className="list-none text-2xl mb-0"
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