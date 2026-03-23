'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Live() {
  const [quality, setQuality] = useState('1080p');
  const [videoSrc, setVideoSrc] = useState('');

  useEffect(() => {
    const encodedLink = "aHR0cHM6Ly9wbGF5ZXIudmRvY2lwaGVyLmNvbS9saXZlLXYyP2xpdmVJZD1mMmIwNzg4YzVmMDQ0ZTYwOTA2M2IxZjc4OGE3NWE3Yg==";
    const decodedLink = atob(encodedLink);
    setVideoSrc(decodedLink);
  }, []);

  return (
    <>
      {/* Navigation - Responsive */}
      <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md border-b border-orange-600/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition">
              CRICKLIVE
            </h1>
          </Link>
          <Link href="/">
            <button className="text-orange-500 hover:text-orange-400 transition text-sm sm:text-base font-semibold flex items-center gap-1">
              ← Back
            </button>
          </Link>
        </div>
      </nav>

      {/* Live Stream Section - Fully Responsive */}
      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black pt-20 sm:pt-24 pb-10 sm:pb-16 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 -left-20 sm:left-10 w-40 sm:w-72 h-40 sm:h-72 bg-orange-600 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

        <div className="max-w-7xl mx-auto relative z-10">

          {/* Video Player Container - Mobile Optimized */}
          <div className="relative w-full bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl mb-6 sm:mb-8 border border-orange-600/30">
            {/* VDocipher Live Stream Player */}
            <div className="w-full bg-black flex items-center justify-center" style={{ aspectRatio: '16 / 9' }}>
              {videoSrc && (
                <iframe
                  id="videoFrame"
                  src={videoSrc}
                  style={{
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    aspectRatio: '16/9'
                  }}
                  allow="autoplay,fullscreen"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Matches Schedule Image - Centered */}
          <div className="w-full mb-10 sm:mb-14 md:mb-16 flex justify-center py-8 sm:py-12">
            <div className="w-full max-w-5xl flex items-center justify-center">
              <div className="hidden w-full text-center p-8">
                <p className="text-gray-400 text-sm">Matches schedule image will appear here</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-orange-600/30 to-transparent mb-8 sm:mb-10"></div>

          {/* Stream Info - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-600/30 hover:border-orange-600/50 transition">
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">👥 Viewers</h3>
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">12.5K+</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">People watching</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-600/30">
              <h3 className="text-white font-bold mb-3 text-sm sm:text-base">⚙️ Quality</h3>
              <select 
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="w-full bg-gray-700/80 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-600 text-sm sm:text-base transition"
              >
                <option>Auto (1080p)</option>
                <option>720p</option>
                <option>480p</option>
                <option>360p</option>
              </select>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-orange-600/30 hover:border-orange-600/50 transition">
              <h3 className="text-white font-bold mb-2 text-sm sm:text-base">📊 Bitrate</h3>
              <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">5.2 Mbps</p>
              <p className="text-gray-400 text-xs sm:text-sm mt-1">Excellent speed</p>
            </div>
          </div>

          {/* Stream Details - Responsive */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-600/30 mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Stream Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Title</p>
                <p className="text-white font-bold text-base sm:text-lg">Live Stream Event</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Duration</p>
                <p className="text-white font-bold text-base sm:text-lg">Live • 2h 15m</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Category</p>
                <p className="text-white font-bold text-base sm:text-lg">Sports & Entertainment</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs sm:text-sm mb-1">Status</p>
                <p className="text-green-400 font-bold text-base sm:text-lg flex items-center gap-2">🟢 Live</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              This is your live streaming page. Add your embedded stream code, video URL, or iframe embed to display the live content.
            </p>
          </div>

          {/* Chat Section - Responsive */}
          <div className="bg-slate-800/40 backdrop-blur-md rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-orange-600/30 mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">💬 Live Chat</h3>
            <div className="space-y-3 mb-4">
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-orange-600/30 transition">
                <p className="text-xs sm:text-sm text-gray-400">User123 • just now</p>
                <p className="text-white text-sm sm:text-base mt-1">Great stream quality! 🎉</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-orange-600/30 transition">
                <p className="text-xs sm:text-sm text-gray-400">StreamViewer • 2m ago</p>
                <p className="text-white text-sm sm:text-base mt-1">Loving this! Keep it up!</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3 sm:p-4 border border-gray-700/50 hover:border-orange-600/30 transition">
                <p className="text-xs sm:text-sm text-gray-400">FanClub • 5m ago</p>
                <p className="text-white text-sm sm:text-base mt-1">Excellent broadcast! 👏</p>
              </div>
            </div>
            <input
              type="text"
              placeholder="Add your comment..."
              className="w-full bg-gray-700/50 text-white rounded-lg px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-orange-600 text-sm sm:text-base placeholder-gray-500 transition border border-gray-700/50 focus:border-orange-600/50"
            />
          </div>
        </div>
      </section>

      {/* Footer - Responsive */}
      <footer className="w-full bg-black/95 border-t border-orange-600/30 py-6 sm:py-8 px-4 sm:px-6 text-center text-gray-400 text-xs sm:text-sm backdrop-blur-sm">
        <p>© 2026 CRICKLIVE. All rights reserved.</p>
      </footer>
    </>
  );
}
