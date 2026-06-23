import React, { useEffect, useRef } from 'react';

const skills = [
  {
    name: 'C++',
    color: '#00599C',
    icon: (
      /* C++ hexagon logo — light blue hex, diagonal split, white C, ++ */
      <svg viewBox="0 0 100 115" width="54" height="62" xmlns="http://www.w3.org/2000/svg">
        {/* Hexagon light blue background */}
        <polygon points="50,2 95,27 95,88 50,113 5,88 5,27" fill="currentColor" opacity="0.75"/>
        {/* Dark blue bottom-right triangle split */}
        <polygon points="95,27 95,88 50,113 5,88 50,57" fill="currentColor" opacity="0.55"/>
        {/* White C letter */}
        <path fill="white" d="M46,32 C33,32 24,41 24,57 C24,73 33,82 46,82 C52,82 57,80 61,76 L54,69 C52,72 49,73 46,73 C38,73 33,66 33,57 C33,48 38,41 46,41 C49,41 52,42 54,45 L61,38 C57,34 52,32 46,32z"/>
        {/* ++ symbols */}
        <g fill="white">
          {/* First + */}
          <rect x="65" y="50" width="14" height="3.5" rx="1"/>
          <rect x="70.25" y="44.75" width="3.5" height="14" rx="1"/>
          {/* Second + */}
          <rect x="80" y="50" width="14" height="3.5" rx="1"/>
          <rect x="85.25" y="44.75" width="3.5" height="14" rx="1"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'Java',
    color: '#f89820',
    icon: (
      /* Official Java steaming cup logo */
      <svg viewBox="0 0 128 128" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
        <path fill="currentColor" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0-.001-42.731 10.67-22.324 34.187z"/>
        <path fill="currentColor" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 0 .367-.328.468-.617z"/>
        <path fill="currentColor" d="M76.491 1s14.961 14.966-14.198 37.972c-23.448 18.517-5.346 29.093-.007 41.157-13.699-12.357-23.745-23.244-17.007-33.384C55.09 33.216 81.538 26.514 76.491 1z"/>
        <path fill="currentColor" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 0 2.875 2.381 17.647 3.331z"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    icon: (
      /* The iconic yellow square JS badge everyone knows */
      <svg viewBox="0 0 256 256" width="58" height="58" xmlns="http://www.w3.org/2000/svg">
        <rect width="256" height="256" rx="16" fill="currentColor" opacity="0.12"/>
        <rect x="8" y="8" width="240" height="240" rx="12" fill="none" stroke="currentColor" strokeWidth="6" opacity="0.4"/>
        <text x="128" y="188" textAnchor="middle" fontSize="148" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="currentColor">JS</text>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    icon: (
      /* Official Node.js hexagon with N logo */
      <svg viewBox="0 0 256 289" width="54" height="54" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.65-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.155.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.228c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915L128.795 19.2c-1.06-.53-2.385-.53-3.18 0L19.874 80.165c-1.06.53-1.59 1.856-1.59 2.915v122.456c0 1.06.53 2.385 1.59 2.915l28.887 16.696c15.635 7.95 25.44-1.325 25.44-10.6V93.68c0-1.59 1.325-3.18 3.18-3.18h13.78c1.59 0 3.18 1.325 3.18 3.18V214.6c0 20.936-11.396 32.86-31.27 32.86-6.095 0-10.865 0-24.38-6.625L9.8 223.346C3.71 219.9 0 213.545 0 206.655V84.2c0-6.89 3.71-13.245 9.8-16.695L115.54 6.49c5.83-3.18 13.78-3.18 19.61 0l105.74 61.228c6.095 3.445 9.8 9.8 9.8 16.695v122.456c0 6.89-3.71 13.245-9.8 16.695L139.4 285.55c-3.445 1.856-7.155 2.915-11.4 2.915z"/>
        <path fill="currentColor" d="M161.97 205.33c-46.28 0-55.82-21.2-55.82-39.015 0-1.59 1.325-3.18 3.18-3.18h14.045c1.59 0 2.915 1.06 2.915 2.65 2.12 14.045 8.215 20.935 35.8 20.935 22.26 0 31.8-5.035 31.8-16.96 0-6.89-2.65-11.925-37.39-15.37-29.15-2.915-47.075-9.27-47.075-32.595 0-21.466 18.085-34.18 48.4-34.18 34.18 0 51.05 11.66 53.17 37.125 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-14.045c-1.325 0-2.65-1.06-2.915-2.385-3.445-14.84-11.395-19.61-33.39-19.61-24.645 0-27.56 8.48-27.56 14.84 0 7.685 3.445 10.07 36.33 14.31 32.595 4.24 48.135 10.335 48.135 33.39-.265 23.32-19.345 36.6-51.67 36.6z"/>
      </svg>
    ),
  },
  {
    name: 'React',
    color: '#61DAFB',
    icon: (
      /* Classic React atom — 3 ellipses + centre dot */
      <svg viewBox="-14 -13 28 26" width="62" height="62" xmlns="http://www.w3.org/2000/svg">
        <circle cx="0" cy="0" r="2.4" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ),
  },
  {
    name: 'MySQL',
    color: '#4479A1',
    icon: (
      /* MySQL logo — leaping dolphin outline + My(blue) SQL(orange) wordmark */
      <svg viewBox="0 0 120 80" width="72" height="48" xmlns="http://www.w3.org/2000/svg">
        {/* Dolphin outline — leaping upward to the right */}
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          {/* Body */}
          <path d="M72,8 C76,5 83,4 87,8 C91,13 89,20 85,24 C81,28 76,29 72,32 C68,35 66,40 68,45 C70,50 75,52 72,56"/>
          {/* Dorsal fin */}
          <path d="M83,6 C86,2 92,1 94,5 C92,8 87,9 83,6z"/>
          {/* Tail */}
          <path d="M68,54 C65,58 60,60 62,64 M68,54 C70,58 72,62 68,65"/>
          {/* Snout */}
          <path d="M72,32 C69,34 65,33 63,36 C65,38 70,37 72,32z"/>
        </g>
        {/* "My" in blue */}
        <text x="4" y="72" fontSize="22" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="currentColor">My</text>
        {/* "SQL" in orange */}
        <text x="30" y="72" fontSize="22" fontWeight="900" fontFamily="Arial Black,sans-serif" fill="#F29111">SQL</text>
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    icon: (
      /* Official Git diamond/branch logo */
      <svg viewBox="0 0 97 97" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M92.71 44.408L52.591 4.291c-2.31-2.311-6.057-2.311-8.369 0l-8.33 8.332L46.459 23.19c2.456-.83 5.272-.273 7.229 1.685 1.969 1.97 2.521 4.81 1.67 7.275l10.186 10.185c2.465-.85 5.307-.3 7.275 1.671 2.75 2.75 2.75 7.206 0 9.958-2.752 2.751-7.208 2.751-9.961 0-2.068-2.07-2.58-5.11-1.531-7.658l-9.5-9.499v24.997c.67.332 1.303.774 1.861 1.332 2.75 2.75 2.75 7.206 0 9.959-2.75 2.749-7.209 2.749-9.957 0-2.75-2.754-2.75-7.21 0-9.959.68-.679 1.467-1.193 2.307-1.537v-25.23c-.84-.344-1.625-.853-2.307-1.537-2.083-2.082-2.584-5.14-1.516-7.698L22.822 23.271 1.544 44.548c-2.312 2.313-2.312 6.058 0 8.371l40.121 40.118c2.31 2.311 6.056 2.311 8.369 0L92.71 52.779c2.311-2.311 2.311-6.07 0-8.371z"/>
      </svg>
    ),
  },
  {
    name: 'MongoDB',
    color: '#47A248',
    icon: (
      /* Official MongoDB leaf logo */
      <svg viewBox="0 0 250 250" width="52" height="52" xmlns="http://www.w3.org/2000/svg">
        <path fill="currentColor" d="M141.813 51.467C128.948 34.38 118.892 16.52 116.761 0c0 0-1.359 8.14-9.267 17.956-6.085 7.569-45.824 40.304-48.955 70.542-2.958 28.489 9.917 47.83 26.698 59.28l5.45 3.657s-.914 17.2-.924 17.538c-.149 4.806 3.247 6.072 5.45 6.237 4.901.364 9.975-2.977 10.124-7.007.149-4.03-.199-17.902-.199-17.902.011 0 4.826-2.777 6.333-3.763 14.32-9.518 28.55-26.898 29.862-50.573.834-15.037-4.52-34.498-19.52-44.498z"/>
      </svg>
    ),
  },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const itemRefs   = useRef([]);

  useEffect(() => {
    const sObs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) e.target.classList.add('sk-in');
        else e.target.classList.remove('sk-in');
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) sObs.observe(sectionRef.current);

    const iObs = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('sk-item-in');
        else e.target.classList.remove('sk-item-in');
      }),
      { threshold: 0.15 }
    );
    itemRefs.current.forEach(el => el && iObs.observe(el));

    return () => { sObs.disconnect(); iObs.disconnect(); };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,900&family=DM+Sans:wght@300;400;500;600&display=swap');
html {
  scroll-behavior: smooth;
}
        
      /* ── DIVIDER ── */
        .sk-divider {
          display: block;
          width: 100%;
          background: #0D0D0D;
          line-height: 0;
          overflow: hidden;
        }
        .sk-divider svg { display: block; width: 100%; }

        /* ── WRAPPER ── */
        .sk-wrapper {
          background: #0D0D0D;
          padding: 80px 24px 120px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        .sk-wrapper::after {
          content: '';
          position: absolute;
          top: 30%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 700px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(201,147,10,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── INNER ── */
        .sk-inner {
          max-width: 960px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── HEADER ── */
        .sk-header {
          text-align: center;
          margin-bottom: 72px;
        }

        /* ── TITLE — normal weight, NOT italic/gradient ── */
        .sk-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(36px, 5.5vw, 64px);
          font-weight: 700;
          color: #FFFFFF;
          line-height: 1.1;
          margin: 0 0 20px 0;
          letter-spacing: -0.01em;
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .sk-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 300;
          color: #6B6055;
          line-height: 1.8;
          max-width: 540px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.8s ease 0.14s, transform 0.8s ease 0.14s;
        }

        .sk-in .sk-title,
        .sk-in .sk-subtitle {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── SKILLS GRID — exactly 4 per row ── */
        .sk-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px 0;
          max-width: 760px;
          margin: 0 auto;
        }

        /* ── ITEM ── */
        .sk-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          cursor: default;
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 0.6s cubic-bezier(0.22,1,0.36,1),
            transform 0.6s cubic-bezier(0.22,1,0.36,1);
        }
        .sk-item.sk-item-in {
          opacity: 1;
          transform: translateY(0);
        }

        /* Icon circle */
        .sk-icon-wrap {
          width: 94px;
          height: 94px;
          border-radius: 50%;
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.22);
          position: relative;
          transition:
            color 0.35s ease,
            background 0.35s ease,
            border-color 0.35s ease,
            transform 0.35s cubic-bezier(0.22,1,0.36,1),
            box-shadow 0.35s ease;
        }

        /* Spinning arc on hover */
        .sk-icon-wrap::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 2px solid transparent;
          border-top-color: var(--c);
          border-right-color: var(--c);
          opacity: 0;
          transition: opacity 0.3s ease;
          animation: sk-spin 1.2s linear infinite paused;
        }
        @keyframes sk-spin { to { transform: rotate(360deg); } }

        .sk-item:hover .sk-icon-wrap::before {
          opacity: 1;
          animation-play-state: running;
        }
        .sk-item:hover .sk-icon-wrap {
          color: var(--c);
          background: rgba(255,255,255,0.07);
          border-color: var(--c);
          transform: translateY(-8px) scale(1.1);
          box-shadow: 0 14px 44px rgba(0,0,0,0.45), 0 0 28px var(--glow);
        }

        /* Name */
        .sk-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          transition: color 0.3s ease;
          text-align: center;
        }
        .sk-item:hover .sk-name {
          color: rgba(255,255,255,0.88);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 600px) {
          .sk-grid { gap: 32px 36px; }
          .sk-icon-wrap { width: 76px; height: 76px; }
        }
      `}</style>

      {/* ── WAVY GOLD DIVIDER ── */}
      <div className="sk-divider" id='skills'>
        <svg viewBox="0 0 1440 110" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="goldLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(201,147,10,0)"/>
              <stop offset="20%"  stopColor="rgba(245,200,66,0.5)"/>
              <stop offset="50%"  stopColor="rgba(201,147,10,1)"/>
              <stop offset="80%"  stopColor="rgba(245,200,66,0.5)"/>
              <stop offset="100%" stopColor="rgba(201,147,10,0)"/>
            </linearGradient>
          </defs>
          
          <path d="M0,0 L1440,0 L1440,110 L0,110 Z" fill="#0D0D0D"/>
        
          <path
            d="M0,60 C120,100 240,20 360,60 C480,100 600,20 720,60 C840,100 960,20 1080,60 C1200,100 1320,20 1440,60 L1440,0 L0,0 Z"
            fill="#0D0D0D"
          />
      
          <path
            d="M0,60 C120,100 240,20 360,60 C480,100 600,20 720,60 C840,100 960,20 1080,60 C1200,100 1320,20 1440,60"
            fill="none"
            stroke="url(#goldLine)"
            strokeWidth="2"
          />
        
          <path
            d="M0,78 C160,48 320,98 480,74 C640,50 800,98 960,74 C1120,50 1300,96 1440,72"
            fill="none"
            stroke="rgba(201,147,10,0.13)"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="sk-wrapper" ref={sectionRef}>
        <div className="sk-inner">

          {/* Header — no eyebrow, no watermark, normal font title */}
          <div className="sk-header">
            <h2 className="sk-title">Skills &amp; Experience</h2>
            <p className="sk-subtitle">
              I specialise in building elegant digital experiences — combining clean code,
              modern frameworks, and robust databases to bring ideas to life.
            </p>
          </div>

          {/* Skills grid */}
          <div className="sk-grid">
            {skills.map(({ name, icon, color }, i) => (
              <div
                key={name}
                className="sk-item"
                ref={el => (itemRefs.current[i] = el)}
                style={{
                  '--c':    color,
                  '--glow': color + '55',
                  transitionDelay: `${i * 0.07}s`,
                }}
              >
                <div className="sk-icon-wrap">{icon}</div>
                <span className="sk-name">{name}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default SkillsSection;