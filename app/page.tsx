'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navigation - Optimized for Mobile */}
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          mounted && isScrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-orange-600/50 shadow-lg' 
            : 'bg-gradient-to-b from-black via-black/80 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
            CRICKLIVE
          </h1>
          <div className="text-orange-500 text-xs sm:text-sm font-semibold">🔴 IPL LIVE</div>
        </div>
      </nav>

      {/* Hero Section - Mobile First Responsive */}
      <section className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-black px-4 sm:px-6 pt-20 sm:pt-24 pb-12 sm:pb-20 relative overflow-hidden">
        {/* Animated Background Orbs - Mobile Optimized */}
        <div className="absolute top-20 sm:top-40 -left-20 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20"></div>
        <div className="absolute bottom-20 sm:bottom-40 -right-20 sm:right-10 w-40 sm:w-72 h-40 sm:h-72 bg-red-600 rounded-full mix-blend-screen filter blur-3xl opacity-15 sm:opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-60 sm:w-96 h-60 sm:h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-5 sm:opacity-10"></div>
        
        <div className="text-center w-full max-w-6xl relative z-10 flex flex-col items-center">
          {/* Main Heading - Responsive Text */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 sm:mb-12 md:mb-16 lg:mb-24 leading-tight tracking-tight">
            Watch <span className="bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent">Live Streams</span>
          </h1>

          {/* About Section - Fully Responsive */}
          <div className="relative w-full mb-10 sm:mb-12 md:mb-16 px-0">
            {/* Gradient Border - Responsive */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 rounded-2xl sm:rounded-3xl opacity-50 sm:opacity-70 blur-sm"></div>
            
            {/* Main Content Box */}
            <div className="relative bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-black/95 rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 lg:p-20 border border-orange-600/40 backdrop-blur-xl shadow-2xl">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-t-2xl sm:rounded-t-3xl"></div>
              
              {/* Title - Responsive */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-600 bg-clip-text text-transparent mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-tight px-2">
                About CRICKLIVE
              </h2>
              
              {/* Content - Responsive Typography */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4">
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed sm:leading-relaxed md:leading-relaxed font-light">
                  CRICKLIVE is a web application created for cricket fans who want quick, reliable, and easy access to cricket information. Our platform is designed to bring all important cricket updates into one place so users can follow matches and stay connected with the game anytime and anywhere.
                </p>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed sm:leading-relaxed md:leading-relaxed font-light">
                  Cricket is one of the most popular sports in the world, and millions of fans want to stay updated with live scores, match details, and tournament information. CRICKLIVE was developed to make this information easily available through a simple and user-friendly web platform.
                </p>
              </div>

              {/* Bottom Accent Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 rounded-b-2xl sm:rounded-b-3xl"></div>
            </div>
          </div>

          {/* CTA Button - Mobile Touch Optimized */}
          <Link href="/live" className="w-full sm:w-auto">
            <button className="relative group w-full sm:w-auto text-white font-bold py-4 sm:py-5 md:py-6 px-6 sm:px-12 md:px-16 rounded-xl sm:rounded-lg text-lg sm:text-xl md:text-2xl transition-all duration-300 transform active:scale-95 hover:scale-105 shadow-2xl overflow-hidden border border-orange-600/50">
              {/* Button Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-red-600 to-orange-700 rounded-xl sm:rounded-lg"></div>
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-xl sm:rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              {/* Button Text */}
              <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-xl sm:text-2xl">▶</span>
                <span>Watch Live Now</span>
              </span>
            </button>
          </Link>
        </div>
      </section>

      {/* Matches Schedule Section - Image */}
      <section className="w-full bg-gradient-to-b from-black via-slate-950 to-slate-900 py-16 sm:py-20 md:py-24 px-4 sm:px-6 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-5xl">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              Upcoming <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">Matches</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">Browse all cricket matches and join the live stream</p>
          </div>

          {/* Image Container - Centered */}
          <div className="relative w-full flex justify-center">
            <div className="w-full">
              <img 
                src="/matches-schedule.png" 
                alt="Cricket Matches Schedule" 
                className="w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl border border-orange-600/20 hover:border-orange-600/50 transition"
                onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                  const img = e.currentTarget;
                  img.style.display = 'none';

                  const parent = img.parentElement;
                  if (parent) {
                    parent.innerHTML = `<div class="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-orange-600/30 p-12 text-center">
                      Image not available
                    </div>`;
                  }
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="w-full bg-black/90 border-t border-orange-600/30 py-6 sm:py-8 px-4 sm:px-6 text-center text-gray-400 text-xs sm:text-sm backdrop-blur-sm">
        <p>© 2026 CRICKLIVE. All rights reserved.</p>
      </footer>
    </>
  );
}
