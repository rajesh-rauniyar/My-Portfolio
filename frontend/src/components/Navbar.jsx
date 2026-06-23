import React, { useState } from 'react';

// Helper component for the Button hover effect
const NavButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  // --- CUSTOMIZE YOUR COLORS HERE ---
  const defaultBackgroundColor = 'transparent';
  const hoverBackgroundColor = '#FFFFFF'; // Currently set to White on hover

  const defaultTextColor = '#C8A97E';
  const hoverTextColor = '#000000'; // Currently set to Black on hover
  // ----------------------------------

  return (
    <button 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        backgroundColor: isHovered ? hoverBackgroundColor : defaultBackgroundColor, 
        border: '1px solid #C8A97E', 
        color: isHovered ? hoverTextColor : defaultTextColor, 
        padding: '0.5rem 1.5rem', 
        borderRadius: '0.375rem', 
        fontSize: '0.95rem', 
        fontWeight: '600', 
        cursor: 'pointer',
        transition: 'all 0.2s ease-in-out' // Smooth color transition

        
      }}>
  <a
  href="mailto:rajeshbro188@gmail.com?subject=Portfolio%20Inquiry"
  style={{
    textDecoration: 'none',
    color: 'inherit',
    display: 'inline-block',
    width: '100%',
    height: '100%'
  }}
>
  Get In Touch
</a>
    </button>
  );
};

// Helper component for the Links hover effect
const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a 
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ 
        color: isHovered ? '#C8A97E' : '#9F8B68', 
        textDecoration: 'none', 
        fontSize: '0.95rem',
        transition: 'color 0.2s ease-in-out' // Smooth color transition
      }}>
      {children}
    </a>
  );
};

// Main Navbar Component
const Navbar = () => {
  return (
    <nav style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      backgroundColor: '#000000', 
      padding: '1.5rem 3rem', 
      fontFamily: 'sans-serif', 
      width: '100%', 
      boxSizing: 'border-box' 
      
    }}>
      
      {/* Button moved to the left side */}
      <NavButton />

      {/* Center Divider Line */}
      <div style={{ flexGrow: 1, height: '1px', backgroundColor: '#4D4230', margin: '0 3rem' }}></div>

      {/* Updated Navigation Links */}
      <div style={{ display: 'flex', gap: '2rem' }}>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about-me">About me</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact-me">Contact Me</NavLink>
      </div>
      
    </nav>
  );
};

export default Navbar;