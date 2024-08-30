"use client";
import { useState, useEffect, useRef } from 'react';
import Link from "next/link";
import { Roboto } from 'next/font/google'; // Importing Roboto font

// Load the Roboto font
const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={roboto.className}>
      <header className="bg-white text-black pt-10 pr-4 pb-7 pl-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href={"/"}><p className="text-2xl font-bold">EngiTrack</p></Link>
          {isMobile ? (
            <button onClick={toggleSidebar} className="md:hidden">
              ☰ Menu
            </button>
          ) : (
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="hover:underline"
                >
                  Career ▾
                </button>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md p-2">
                    <li>
                      <Link href="/career/internships" className="hover:underline">
                        Internships
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </nav>
      </header>

      {/* Improved Sidebar */}
      {isMobile && (
        <div 
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-auto bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="p-4">
            <button onClick={closeSidebar} className="mb-4">
              ✕
            </button>
            <ul className="space-y-4">
              <li><Link href="/" className="hover:underline" onClick={closeSidebar}>Home</Link></li>
              <li><Link href="/about" className="hover:underline" onClick={closeSidebar}>About</Link></li>
              <li><Link href="/contact" className="hover:underline" onClick={closeSidebar}>Contact</Link></li>
              <li className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="hover:underline"
                >
                  Career ▾
                </button>
                {isDropdownOpen && (
                  <ul className="mt-2 bg-white shadow-lg rounded-md p-2">
                    <li>
                      <Link href="/career/internships" className="hover:underline" onClick={closeSidebar}>
                        Internships
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
