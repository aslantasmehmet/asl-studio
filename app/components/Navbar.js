'use client';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          {/* Logo ve Tagline */}
          <div className="flex items-center space-x-3">
            <div className="animate-pulse">
              <Image 
                src="/logo.png" 
                alt="ASL Studio Logo" 
                width={180} 
                height={60} 
                className="h-48 w-auto mt-10 transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-gray-600 text-xl font-bold">—    Design & Development Studio</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="https://cal.com/madebyasl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-gray-700 transition-all duration-300 font-bold text-md border-b-2 border-transparent hover:border-gray-900"
            >
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}