import React, { useEffect, useRef } from 'react';
import profileImg from '../assets/rajesh.jpg';

/* ── SVG Social Icons ── */
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const socialLinks = [
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/iam18.r', label: 'Instagram' },
  { icon: <LinkedInIcon />,  href: 'https://www.linkedin.com/in/rajesh-rauniyar-one8/', label: 'LinkedIn' },
  { icon: <TwitterIcon />,   href: 'https://x.com/RAJESH_One8', label: 'Twitter / X' },
  { icon: <GitHubIcon />,    href: 'https://github.com/rajesh-rauniyar', label: 'GitHub' },
];

const HeroSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero-in-view');
        } else {
          entry.target.classList.remove('hero-in-view');
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

        html {
           scroll-behavior: smooth;
          }

        .hero-wrapper {
          background-color: #E8D9C5;
          background-image:
            radial-gradient(ellipse at 20% 50%, rgba(255,122,0,0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(37,34,31,0.04) 0%, transparent 50%);
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 24px;
          box-sizing: border-box;
          overflow: hidden;
          position: relative;
        }

        .hero-wrapper::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 0;
        }

        .hero-container {
          max-width: 1200px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── ANIMATION BASE STATES ── */
        .anim-from-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-from-bottom {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-from-right {
          opacity: 0;
          transform: translateX(80px);
          transition: opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-fade-scale {
          opacity: 0;
          transform: scale(0.88);
          transition: opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ── IN-VIEW: everything snaps to natural position ── */
        .hero-in-view .anim-from-left,
        .hero-in-view .anim-from-bottom,
        .hero-in-view .anim-from-right,
        .hero-in-view .anim-fade-scale {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }

        /* ── STAGGER DELAYS ── */
        .delay-0   { transition-delay: 0s;    }
        .delay-1   { transition-delay: 0.10s; }
        .delay-2   { transition-delay: 0.20s; }
        .delay-3   { transition-delay: 0.30s; }
        .delay-4   { transition-delay: 0.42s; }
        .delay-5   { transition-delay: 0.54s; }
        .delay-6   { transition-delay: 0.64s; }
        .delay-img { transition-delay: 0.18s; }

        /* ── TEXT COLUMN ── */
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 0;
          padding: 48px 0 48px 48px;
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(48px, 5vw, 72px);
          font-weight: 900;
          color: #1A1714;
          line-height: 1.0;
          letter-spacing: -0.02em;
          margin: 0 0 20px 0;
        }

        .hero-role {
          font-family: 'georgia';
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 700;
          background: #FF7A00;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 28px 0;
          line-height: 1.6;
          max-width: 380px;
          letter-spacing: 0.02em;
        }

        .hero-divider {
          width: 48px;
          height: 3px;
          background: linear-gradient(90deg, #FF7A00, transparent);
          border-radius: 2px;
          margin-bottom: 28px;
        }

        .hero-bio {
          font-size: 15px;
          font-weight: 300;
          line-height: 1.8;
          color: #4A3F35;
          max-width: 360px;
          margin: 0 0 40px 0;
        }

        .hero-buttons {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .btn-primary {
          background: #1A1714;
          color: #E8D9C5;
          border: none;
          padding: 14px 32px;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 16px rgba(26,23,20,0.18);
        }
        .btn-primary:hover {
          background: #FF7A00;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(255,122,0,0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #1A1714;
          border: 1.5px solid #1A1714;
          padding: 14px 32px;
          border-radius: 4px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-decoration: none;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .btn-secondary:hover {
          background: #1A1714;
          color: #E8D9C5;
          transform: translateY(-2px);
        }

        .hero-socials {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(26,23,20,0.2);
          color: #4A3F35;
          background: transparent;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .social-icon-btn:hover {
          background: #1A1714;
          color: #E8D9C5;
          border-color: #1A1714;
          transform: translateY(-3px);
          box-shadow: 0 6px 16px rgba(26,23,20,0.2);
        }

        /* ── IMAGE COLUMN ── */
        .hero-image-col {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .hero-image-col::before {
          content: '';
          position: absolute;
          top: 24px;
          right: -16px;
          width: 85%;
          height: 90%;
          background: rgba(255,122,0,0.12);
          border-radius: 20px;
          z-index: 0;
          opacity: 0;
          transform: translateX(80px);
          transition: opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.18s,
                      transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.18s;
        }
        .hero-in-view .hero-image-col::before {
          opacity: 1;
          transform: translateX(0);
        }
        .hero-image-col:hover::before {
          transform: translate(6px, 6px) !important;
        }

        .hero-image-frame {
          position: relative;
          z-index: 1;
          width: 440px;
          aspect-ratio: 4 / 5;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 24px 64px rgba(26,23,20,0.22), 0 4px 16px rgba(26,23,20,0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .hero-image-frame:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 36px 80px rgba(26,23,20,0.28), 0 8px 24px rgba(26,23,20,0.12);
        }
        .hero-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: contrast(1.04) brightness(0.97);
          transition: transform 0.6s ease;
        }
        .hero-image-frame:hover img {
          transform: scale(1.04);
        }
        .hero-image-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, transparent 60%, rgba(26,23,20,0.15) 100%);
          pointer-events: none;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-container { grid-template-columns: 1fr; gap: 48px; }
          .hero-text { padding: 32px 24px 0; text-align: center; align-items: center; }
          .hero-eyebrow { justify-content: center; }
          .hero-role, .hero-bio { max-width: 100%; }
          .hero-image-col { padding-bottom: 48px; }
          .hero-image-frame { width: 300px; }
          .hero-socials { justify-content: center; }
        }
      `}</style>

      <div className="hero-wrapper" ref={sectionRef}>
        <div className="hero-container">

          {/* LEFT — Text */}
          <div className="hero-text">
            <h1 className="hero-name anim-from-left delay-1">Rajesh<br />Rauniyar</h1>
            <p className="hero-role anim-from-bottom delay-2">Full Stack Developer</p>
            <div className="hero-divider anim-from-left delay-3" />
            <p className="hero-bio anim-from-bottom delay-4">
              I'm a passionate Full Stack Developer, transforming ideas into modern, responsive, and impactful web applications.
            </p>
            <div className="hero-buttons anim-fade-scale delay-5">
              <a href="#contact-me" className="btn-primary">Contact Me</a>
              <a  href="/Rajesh_Rauniyar_Resume.pdf"
                  target="_blank" className="btn-secondary" rel="noopener noreferrer">Download CV</a>
            </div>
            <div className="hero-socials anim-fade-scale delay-6">
  {socialLinks.map(({ icon, href, label }) => (
    <a
      key={label}
      href={href}
      aria-label={label}
      className="social-icon-btn"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  ))}
  </div>
          </div>

          {/* RIGHT — Image */}
          <div className="hero-image-col">
            <div className="hero-image-frame anim-from-right delay-img">
              <img src={profileImg} alt="Rajesh Rauniyar" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default HeroSection;