import React, { useState } from 'react';

/* ── Button with hover effect ── */
const NavButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        backgroundColor: isHovered ? '#FFFFFF' : 'transparent',
        border: '1px solid #C8A97E',
        color: isHovered ? '#000000' : '#C8A97E',
        padding: '0.5rem 1.5rem',
        borderRadius: '0.375rem',
        fontSize: '0.95rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out',
        flexShrink: 0,
      }}
    >
      <a
        href="mailto:rajeshbro188@gmail.com?subject=Portfolio%20Inquiry"
        style={{
          textDecoration: 'none',
          color: 'inherit',
          display: 'inline-block',
          width: '100%',
          height: '100%',
        }}
      >
        Get In Touch
      </a>
    </button>
  );
};

/* ── Nav link with hover effect ── */
const NavLink = ({ href, children, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        color: isHovered ? '#C8A97E' : '#9F8B68',
        textDecoration: 'none',
        fontSize: '0.95rem',
        transition: 'color 0.2s ease-in-out',
      }}
    >
      {children}
    </a>
  );
};

/* ── Hamburger icon ── */
const HamburgerIcon = ({ open }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#C8A97E"
    strokeWidth="2"
    strokeLinecap="round"
  >
    {open ? (
      <>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </>
    ) : (
      <>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </>
    )}
  </svg>
);

const navLinks = [
  { href: '#home',       label: 'Home' },
  { href: '#about-me',   label: 'About me' },
  { href: '#skills',     label: 'Skills' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact-me', label: 'Contact Me' },
];

/* ── Main Navbar ── */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        /* ── DESKTOP: unchanged layout ── */
        .nb-desktop {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background-color: #000000;
          padding: 1.5rem 3rem;
          font-family: sans-serif;
          width: 100%;
          box-sizing: border-box;
          position: relative;
          z-index: 100;
        }

        .nb-divider {
          flex-grow: 1;
          height: 1px;
          background-color: #4D4230;
          margin: 0 3rem;
        }

        .nb-links-desktop {
          display: flex;
          gap: 2rem;
        }

        /* ── HAMBURGER button — hidden on desktop ── */
        .nb-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          flex-shrink: 0;
        }

        /* ── MOBILE DRAWER ── */
        .nb-mobile-drawer {
          display: none;
          flex-direction: column;
          gap: 0;
          background: #0A0805;
          border-top: 1px solid #2A2018;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s cubic-bezier(0.22,1,0.36,1);
        }
        .nb-mobile-drawer.open {
          max-height: 400px;
        }

        .nb-mobile-link {
          display: block;
          padding: 16px 24px;
          color: #9F8B68;
          text-decoration: none;
          font-family: sans-serif;
          font-size: 1rem;
          font-weight: 500;
          border-bottom: 1px solid #1A1510;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .nb-mobile-link:hover {
          color: #C8A97E;
          background: rgba(200,169,126,0.05);
        }

        .nb-mobile-cta {
          padding: 16px 24px;
        }
        .nb-mobile-cta a {
          display: block;
          text-align: center;
          border: 1px solid #C8A97E;
          color: #C8A97E;
          padding: 10px;
          border-radius: 6px;
          font-family: sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .nb-mobile-cta a:hover {
          background: #C8A97E;
          color: #000;
        }

        /* ── BREAKPOINT: switch to mobile at 768px ── */
        @media (max-width: 768px) {
          .nb-desktop {
            padding: 1rem 1.25rem;
          }

          /* Hide divider and desktop links */
          .nb-divider,
          .nb-links-desktop {
            display: none;
          }

          /* Show hamburger */
          .nb-hamburger {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Show mobile drawer */
          .nb-mobile-drawer {
            display: flex;
          }
        }
      `}</style>

      {/* ── NAV BAR ── */}
      <nav className="nb-desktop">
        {/* Left: Get In Touch button */}
        <NavButton />

        {/* Centre divider — desktop only */}
        <div className="nb-divider" />

        {/* Right: links — desktop only */}
        <div className="nb-links-desktop">
          {navLinks.map(({ href, label }) => (
            <NavLink key={href} href={href}>{label}</NavLink>
          ))}
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="nb-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon open={menuOpen} />
        </button>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div className={`nb-mobile-drawer ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            className="nb-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Navbar;