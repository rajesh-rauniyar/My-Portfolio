import React, { useEffect, useRef } from 'react';
import aboutPhoto from '../assets/aboutme.jpg';

/* ── SVG Social Icons ── */
const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const socialLinks = [
  { icon: <TwitterIcon />,   label: 'Twitter',   href: 'https://x.com/RAJESH_One8' },
  { icon: <InstagramIcon />, label: 'Instagram', href: 'https://www.instagram.com/your_username' },
  { icon: <LinkedInIcon />,  label: 'LinkedIn',  href: 'https://www.linkedin.com/in/rajesh-rauniyar-one8/' },
  { icon: <GitHubIcon />,    label: 'GitHub',    href: 'https://github.com/rajesh-rauniyar' },
];

const languages = ['Nepali', 'English', 'Hindi'];

const AboutSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('about-in-view');
        } else {
          entry.target.classList.remove('about-in-view');
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=DM+Sans:wght@300;400;500&display=swap');

        html {
  scroll-behavior: smooth;
}

        /* ── CURVED TOP DIVIDER ── */
        .about-curve {
          display: block;
          width: 100%;
          background: #12100E;
          line-height: 0;
          margin-bottom: -2px;
        }
        .about-curve svg {
          display: block;
          width: 100%;
        }

        /* ── WRAPPER ── */
        .about-wrapper {
          background: #12100E;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px 120px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        /* Glow top-left */
        .about-wrapper::before {
          content: '';
          position: absolute;
          top: -120px;
          left: -80px;
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(201,147,10,0.07) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Glow bottom-right */
        .about-wrapper::after {
          content: '';
          position: absolute;
          bottom: -100px;
          right: -60px;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(201,147,10,0.05) 0%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* Big watermark */
        .about-watermark {
          position: absolute;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          font-family: 'Playfair Display', serif;
          font-size: clamp(80px, 14vw, 180px);
          font-weight: 900;
          color: rgba(255,255,255,0.025);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          white-space: nowrap;
          user-select: none;
          pointer-events: none;
          z-index: 0;
        }

        /* ── TWO-COLUMN GRID ── */
        .about-container {
          max-width: 1200px;
          width: 100%;
          display: grid;
          /* Left: photo | Right: text */
          grid-template-columns: 420px 1fr;
          gap: 80px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ── LEFT: Text column ── */
        .about-content {
          padding: 0;
        }

        /* Section label */
        .about-label {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9930A;
          margin-bottom: 36px;
        }
        .about-label::before {
          content: '';
          display: block;
          width: 3px;
          height: 18px;
          background: #C9930A;
          border-radius: 2px;
        }

        /* ── BIG HEADLINE ── */
        .about-headline {
          font-family: 'Playfair Display', serif;
          font-size: clamp(40px, 4.5vw, 68px);
          font-weight: 400;
          color: #F0EBE3;
          line-height: 1.12;
          letter-spacing: -0.015em;
          margin: 0 0 40px 0;
        }
        .about-headline .name {
          font-weight: 900;
          font-style: italic;
          color: #FFFFFF;
        }
        .about-headline .role {
          font-style: italic;
          font-weight: 400;
          background: linear-gradient(90deg, #C9930A 0%, #F5C842 45%, #D4A017 80%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Gold divider */
        .about-divider {
          width: 60px;
          height: 1px;
          background: linear-gradient(90deg, #C9930A, transparent);
          margin-bottom: 40px;
        }

        /* Social links */
        .about-socials {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 44px;
          padding-bottom: 44px;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .about-social-link {
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          color: #7A6F65;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .about-social-link:hover {
          color: #F5C842;
          transform: translateY(-2px);
        }

        /* Bio */
        .about-bio {
          font-family: 'DM Sans', sans-serif;
          font-size: 17px;
          font-weight: 300;
          line-height: 1.9;
          color: #8A8078;
          margin: 0 0 52px 0;
        }
        .about-bio .highlight {
          font-weight: 500;
          color: #D4C4B0;
        }

        /* Languages */
        .about-languages-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #4A4440;
          margin-bottom: 16px;
        }
        .about-languages {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        .about-lang-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #7A6F65;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 100px;
          padding: 7px 20px;
          background: rgba(255,255,255,0.03);
          letter-spacing: 0.06em;
          transition: all 0.2s ease;
          cursor: default;
        }
        .about-lang-tag:hover {
          background: #C9930A;
          color: #0D0D0D;
          border-color: #C9930A;
        }

        /* ── RIGHT: Photo column ── */
        .about-photo-col {
          position: relative;
        }

        /* Decorative gold offset shape behind photo */
        .about-photo-col::before {
          content: '';
          position: absolute;
          bottom: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(201,147,10,0.25);
          border-radius: 20px;
          z-index: 0;
          transition: transform 0.4s ease;
        }
        .about-photo-col:hover::before {
          transform: translate(-6px, 6px);
        }

        .about-photo-frame {
          position: relative;
          z-index: 1;
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0,0,0,0.6), 0 8px 24px rgba(0,0,0,0.4);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .about-photo-frame:hover {
          transform: translateY(-6px);
          box-shadow: 0 44px 100px rgba(0,0,0,0.7), 0 12px 32px rgba(0,0,0,0.5);
        }
        .about-photo-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          filter: brightness(0.9) contrast(1.05);
          transition: transform 0.6s ease;
        }
        .about-photo-frame:hover img {
          transform: scale(1.04);
        }

        /* Bottom gradient vignette on photo */
        .about-photo-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(13,13,13,0.35) 100%
          );
          pointer-events: none;
        }

        /* ── ANIMATIONS ── */
        .anim-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-fade {
          opacity: 0;
          transition: opacity 1.0s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-from-left {
          opacity: 0;
          transform: translateX(-60px);
          transition: opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .anim-from-right {
          opacity: 0;
          transform: translateX(60px);
          transition: opacity 1.1s cubic-bezier(0.22, 1, 0.36, 1),
                      transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-in-view .anim-up,
        .about-in-view .anim-fade {
          opacity: 1;
          transform: translateY(0);
        }
        .about-in-view .anim-from-left {
          opacity: 1;
          transform: translateX(0);
        }
        .about-in-view .anim-from-right {
          opacity: 1;
          transform: translateX(0);
        }

        /* Stagger delays */
        .d0 { transition-delay: 0s;    }
        .d1 { transition-delay: 0.14s; }
        .d2 { transition-delay: 0.28s; }
        .d3 { transition-delay: 0.42s; }
        .d4 { transition-delay: 0.56s; }
        .d5 { transition-delay: 0.70s; }
        .d-img { transition-delay: 0.20s; }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .about-photo-col {
            max-width: 360px;
            margin: 0 auto;
          }
        }
        @media (max-width: 600px) {
          .about-wrapper { padding: 80px 20px; }
          .about-headline { font-size: clamp(36px, 10vw, 48px); }
          .about-bio { font-size: 16px; }
          .about-socials { gap: 16px; }
        }
      `}</style>

      <div className="about-curve" id='about-me'>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hero section background color — change #E8D9C5 if your hero bg is different */}
          <path d="M0,0 L1440,0 L1440,0 Q720,80 0,0 Z" fill="#E8D9C5"/>
        </svg>
      </div>

      <div className="about-wrapper" ref={sectionRef}>
        <div className="about-watermark">About</div>

        <div className="about-container">

          {/* ── LEFT: Photo ── */}
          <div className="about-photo-col anim-from-left d-img">
            <div className="about-photo-frame">
              <img src={aboutPhoto} alt="Rajesh Rauniyar working" />
            </div>
          </div>

          {/* ── RIGHT: Text ── */}
          <div className="about-content">

            <div className="about-label anim-up d0">About Me</div>

            <h2 className="about-headline anim-up d1">
              Hi, I'm{' '}
              <span className="name">Rajesh Rauniyar,</span>
              <br />
              <span className="role">Full Stack Developer</span>
              <br />
              &amp; Tech Enthusiast.
            </h2>

            <div className="about-divider anim-fade d2" />

            <div className="about-socials anim-fade d2">
  {socialLinks.map(({ icon, label, href }) => (
    <a
      key={label}
      href={href}
      className="about-social-link"
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon} {label}
    </a>
  ))}
</div>

            <p className="about-bio anim-up d3">
              I'm a <span className="highlight">passionate Full Stack Developer</span> who transforms ideas into scalable digital solutions. 
              I build modern web and mobile applications with a focus on performance, usability, and seamless user experiences, creating technology
               that solves real-world problems.{' '}
              <span className="highlight">Turning ideas into reality through continuous learning and creation.</span>
            </p>

            <div className="anim-up d4">
              <p className="about-languages-label">Languages</p>
              <div className="about-languages">
                {languages.map((lang) => (
                  <span key={lang} className="about-lang-tag">{lang}</span>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default AboutSection;