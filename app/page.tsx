'use client';

export default function Home() {
  return (
    <>
      {/* BG */}
      <div className="bg-wrap"></div>
      <div className="bg-grid"></div>
      <div className="orb orb1"></div>
      <div className="orb orb2"></div>
      <div className="orb orb3"></div>

      {/* NAV */}
      <nav>
        <div className="logo">CRICKLIVE</div>
        <div className="nav-right">
          <div className="live-badge">
            <div className="live-dot"></div> 
            IPL LIVE
          </div>
        </div>
      </nav>

      {/* LIVE TICKER */}
      <div style={{ position: 'relative', zIndex: 10, marginTop: '68px' }}>
        <div className="ticker-wrap">
          <div className="ticker-track">
            <div className="ticker-item">
              <div className="ticker-dot"></div> IND vs AUS • 4th T20I • IND: 186/4 (18.2)
            </div>
            <div className="ticker-item">
              <div className="ticker-dot"></div> MI vs CSK • IPL 2025 • MI: 142/6 (15.0)
            </div>
            <div className="ticker-item">
              <div className="ticker-dot"></div> ENG vs PAK • 2nd ODI • ENG: 312/8 (50)
            </div>
            <div className="ticker-item">
              <div className="ticker-dot"></div> RCB vs KKR • IPL 2025 • Starting at 7:30 PM
            </div>
            {/* duplicate for seamless loop */}
            <div className="ticker-item">
              <div className="ticker-dot"></div> IND vs AUS • 4th T20I • IND: 186/4 (18.2)
            </div>
            <div className="ticker-item">
              <div className="ticker-dot"></div> MI vs CSK • IPL 2025 • MI: 142/6 (15.0)
            </div>
            <div className="ticker-item">
              <div className="ticker-dot"></div> ENG vs PAK • 2nd ODI • ENG: 312/8 (50)
            </div>
            <div className="ticker-item">
              <div className="ticker-dot"></div> RCB vs KKR • IPL 2025 • Starting at 7:30 PM
            </div>
          </div>
        </div>
      </div>

      {/* HERO */}
      <section className="hero">
        <div className="hero-eyebrow">🏏 Cricket&apos;s #1 Streaming Platform</div>
        <h1>
          <span className="white">Watch</span>
          <br />
          <span className="grad">Live Streams</span>
        </h1>
        <p className="hero-sub">
          Your ultimate destination for live cricket — scores, highlights, and tournament updates, all in one place.
        </p>
        <div className="hero-ctas">
          <a href="/live" className="btn-primary">
            <span className="play-icon">▶</span> Watch Live Now
          </a>
        </div>
        
        {/* Matches Schedule Image */}
        <div style={{ maxWidth: '700px', width: '100%' }}>
          <img 
            src="/matches-schedule.png" 
            alt="Matches Schedule" 
            style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
          />
        </div>
      </section>
    </>
  );
}
