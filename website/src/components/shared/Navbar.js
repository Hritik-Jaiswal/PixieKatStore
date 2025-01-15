"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#0a0b1a]/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center group hover:opacity-90 transition-opacity">
            <div className="w-16 h-16 relative rounded-full overflow-hidden">
              <Image
                src="/assets/logos/logo.png"
                alt="PixieKat Store Logo"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
            <span className="ml-4 text-2xl font-bold text-white">
              PixieKat Store
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className={`text-white hover:text-[#ff4d4d] transition-colors ${
                isActive('/') ? 'font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link 
              href="/games" 
              className={`text-white hover:text-[#ff4d4d] transition-colors ${
                isActive('/games') ? 'font-semibold' : ''
              }`}
            >
              Games
            </Link>
            <Link 
              href="/about" 
              className={`text-white hover:text-[#ff4d4d] transition-colors ${
                isActive('/about') ? 'font-semibold' : ''
              }`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`text-white hover:text-[#ff4d4d] transition-colors ${
                isActive('/contact') ? 'font-semibold' : ''
              }`}
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth/login"
                className="px-6 py-2 text-white hover:text-[#ff4d4d] transition-colors font-medium"
              >
                Login
              </Link>
              <Link
                href="/auth/signup"
                className="px-6 py-2 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-full font-medium hover:opacity-90 transition-opacity shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Sign Up
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              className="text-white hover:text-[#ff4d4d]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`text-white hover:text-[#ff4d4d] transition-colors ${
                  isActive('/') ? 'font-semibold' : ''
                }`}
              >
                Home
              </Link>
              <Link 
                href="/games" 
                className={`text-white hover:text-[#ff4d4d] transition-colors ${
                  isActive('/games') ? 'font-semibold' : ''
                }`}
              >
                Games
              </Link>
              <Link 
                href="/about" 
                className={`text-white hover:text-[#ff4d4d] transition-colors ${
                  isActive('/about') ? 'font-semibold' : ''
                }`}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className={`text-white hover:text-[#ff4d4d] transition-colors ${
                  isActive('/contact') ? 'font-semibold' : ''
                }`}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-2 border-t border-gray-700">
                <Link
                  href="/auth/login"
                  className="px-6 py-2 text-white hover:text-[#ff4d4d] transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  href="/auth/signup"
                  className="px-6 py-2 bg-gradient-to-r from-[#ff4d4d] to-[#ff1a1a] text-white rounded-full font-medium hover:opacity-90 transition-opacity text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
