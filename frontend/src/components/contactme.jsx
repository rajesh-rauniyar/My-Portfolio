import React, { useState, useEffect, useRef } from 'react';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [focused, setFocused] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) e.target.classList.add('ct-in');
        else e.target.classList.remove('ct-in');
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError('');
    try {
      const res = await fetch('https://formspree.io/f/mgojezlz', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,900&family=DM+Sans:wght@300;400;500;600&display=swap');

        html {
  scroll-behavior: smooth;
}
  
        /* ── DIVIDER FROM PROJECTS ── */
        .ct-divider {
          display: block;
          width: 100%;
          background: #12100E;
          line-height: 0;
          overflow: hidden;
        }
        .ct-divider svg { display: block; width: 100%; }

        /* ── WRAPPER ── */
        .ct-wrapper {
          background: #0A0805;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 120px 24px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }

        /* Ambient glow */
        .ct-wrapper::before {
          content: '';
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 700px;
          height: 700px;
          background: radial-gradient(ellipse, rgba(201,147,10,0.06) 0%, transparent 65%);
          pointer-events: none;
        }
        .ct-wrapper::after {
          content: '';
          position: absolute;
          top: -80px;
          right: -80px;
          width: 500px;
          height: 500px;
          background: radial-gradient(ellipse, rgba(201,147,10,0.04) 0%, transparent 65%);
          pointer-events: none;
        }

        /* Big watermark */
        .ct-watermark {
          position: absolute;
          bottom: 40px;
          right: -20px;
          font-family: 'Playfair Display', serif;
          font-size: clamp(100px, 18vw, 220px);
          font-weight: 900;
          color: rgba(255,255,255,0.025);
          letter-spacing: 0.05em;
          user-select: none;
          pointer-events: none;
          line-height: 1;
        }

        /* ── INNER ── */
        .ct-inner {
          max-width: 1100px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 100px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        /* ══════════════════════════════
           LEFT COLUMN
        ══════════════════════════════ */
        .ct-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: opacity 1s cubic-bezier(0.22,1,0.36,1),
                      transform 1s cubic-bezier(0.22,1,0.36,1);
        }
        .ct-in .ct-left { opacity: 1; transform: translateX(0); }

        .ct-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: #C9930A;
          margin-bottom: 24px;
        }
        .ct-eyebrow::before {
          content: '';
          width: 24px;
          height: 1px;
          background: #C9930A;
        }

        .ct-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(52px, 7vw, 88px);
          font-weight: 900;
          color: #FFFFFF;
          line-height: 1.0;
          letter-spacing: -0.02em;
          margin: 0 0 8px 0;
        }

        .ct-heading em {
          font-style: italic;
          color: rgba(255,255,255,0.55);
        }

        .ct-subtext {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 300;
          color: #6B6055;
          line-height: 1.7;
          margin: 24px 0 48px 0;
          max-width: 340px;
        }

        /* Info items */
        .ct-info-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ct-info-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .ct-info-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(201,147,10,0.1);
          border: 1px solid rgba(201,147,10,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C9930A;
          flex-shrink: 0;
        }

        .ct-info-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #4A4440;
          margin-bottom: 2px;
        }

        .ct-info-value {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 400;
          color: #C4B9AF;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ct-info-value:hover { color: #C9930A; }

        /* ══════════════════════════════
           RIGHT COLUMN — FORM
        ══════════════════════════════ */
        .ct-right {
          opacity: 0;
          transform: translateX(50px);
          transition: opacity 1s cubic-bezier(0.22,1,0.36,1) 0.15s,
                      transform 1s cubic-bezier(0.22,1,0.36,1) 0.15s;
        }
        .ct-in .ct-right { opacity: 1; transform: translateX(0); }

        .ct-form-card {
          background: rgba(255,255,255,0.025);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 48px 44px;
          position: relative;
          overflow: hidden;
        }
        .ct-form-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9930A, transparent);
        }

        .ct-form-title {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 700;
          color: #FFFFFF;
          margin: 0 0 6px 0;
        }

        .ct-form-subtitle {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          color: #6B6055;
          margin: 0 0 40px 0;
        }

        /* Field groups */
        .ct-field {
          position: relative;
          margin-bottom: 32px;
        }

        .ct-field label {
          display: block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #4A4440;
          margin-bottom: 10px;
          transition: color 0.25s ease;
        }
        .ct-field.focused label { color: #C9930A; }

        .ct-field input,
        .ct-field textarea {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.1);
          color: #F0EBE3;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 300;
          padding: 10px 0;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.3s ease;
          resize: none;
          caret-color: #C9930A;
        }
        .ct-field input::placeholder,
        .ct-field textarea::placeholder {
          color: rgba(255,255,255,0.15);
        }
        .ct-field.focused input,
        .ct-field.focused textarea {
          border-bottom-color: #C9930A;
        }

        /* Animated underline */
        .ct-field-line {
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 0;
          background: #C9930A;
          transition: width 0.4s cubic-bezier(0.22,1,0.36,1);
        }
        .ct-field.focused .ct-field-line { width: 100%; }

        .ct-field textarea { height: 80px; }

        /* Required star */
        .ct-req { color: #C9930A; margin-left: 2px; }

        /* Submit button */
        .ct-submit {
          width: 100%;
          background: #C9930A;
          color: #0A0805;
          border: none;
          border-radius: 8px;
          padding: 16px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          margin-top: 8px;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }
        .ct-submit:hover {
          background: #F5C842;
          transform: translateY(-2px);
          box-shadow: 0 12px 36px rgba(201,147,10,0.35);
        }
        .ct-submit:active { transform: translateY(0); }
        .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        /* Spinner inside button */
        .ct-spinner {
          display: inline-block;
          width: 14px;
          height: 14px;
          border: 2px solid rgba(10,8,5,0.3);
          border-top-color: #0A0805;
          border-radius: 50%;
          animation: ct-spin 0.7s linear infinite;
          margin-right: 8px;
          vertical-align: middle;
        }
        @keyframes ct-spin { to { transform: rotate(360deg); } }

        /* Success state */
        .ct-success {
          text-align: center;
          padding: 40px 20px;
        }
        .ct-success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(201,147,10,0.12);
          border: 1px solid rgba(201,147,10,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          color: #C9930A;
        }
        .ct-success h3 {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 10px 0;
        }
        .ct-success p {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #6B6055;
          font-weight: 300;
          margin: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .ct-inner { grid-template-columns: 1fr; gap: 56px; }
          .ct-form-card { padding: 32px 24px; }
          .ct-heading { font-size: clamp(44px, 12vw, 72px); }
        }
      `}</style>

      {/* ── DIVIDER from Projects section ── */}
      <div className="ct-divider" id='contact-me'>
        <svg viewBox="0 0 1440 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="ctGold" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%"   stopColor="rgba(201,147,10,0)"/>
              <stop offset="30%"  stopColor="rgba(245,200,66,0.5)"/>
              <stop offset="50%"  stopColor="rgba(201,147,10,0.9)"/>
              <stop offset="70%"  stopColor="rgba(245,200,66,0.5)"/>
              <stop offset="100%" stopColor="rgba(201,147,10,0)"/>
            </linearGradient>
          </defs>
          <rect x="0" y="0" width="1440" height="100" fill="#0A0805"/>
          <path d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50 C1320,30 1400,60 1440,50 L1440,0 L0,0 Z" fill="#12100E"/>
          <path d="M0,50 C200,10 400,90 600,50 C800,10 1000,90 1200,50 C1320,30 1400,60 1440,50"
            fill="none" stroke="url(#ctGold)" strokeWidth="1.8"/>
        </svg>
      </div>

      <div className="ct-wrapper" ref={sectionRef}>
        <div className="ct-watermark">Contact</div>

        <div className="ct-inner">

          {/* ── LEFT ── */}
          <div className="ct-left">
            <div className="ct-eyebrow">Get In Touch</div>
            <h2 className="ct-heading">
              Let's<br /><em>talk.</em>
            </h2>
            <p className="ct-subtext">
              New projects, freelance inquiry or even a coffee — I'm always open to a good conversation.
            </p>

            <div className="ct-info-list">
              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <p className="ct-info-label">Email</p>
                  <a href="mailto:rajeshbro188@gmail.com" className="ct-info-value">rajeshbro188@gmail.com</a>
                </div>
              </div>

              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="ct-info-label">Location</p>
                  <span className="ct-info-value">
                    🇮🇳 Pune, Maharashtra
                    <span style={{
                      display: 'inline-block',
                      width: '1px',
                      height: '12px',
                      background: 'rgba(255,255,255,0.15)',
                      margin: '0 10px',
                      verticalAlign: 'middle'
                    }}/>
                    🇳🇵 Biratnagar, Nepal
                  </span>
                </div>
              </div>

              <div className="ct-info-item">
                <div className="ct-info-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="ct-info-label">Response Time</p>
                  <span className="ct-info-value">Within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: FORM ── */}
          <div className="ct-right">
            <div className="ct-form-card">
              {submitted ? (
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thanks for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <>
                  <h3 className="ct-form-title">Let's talk.</h3>
                  <p className="ct-form-subtitle">New projects, freelance inquiry or even a coffee.</p>

                  <form onSubmit={handleSubmit}>
                    <div className={`ct-field ${focused === 'name' ? 'focused' : ''}`}>
                      <label>Name <span className="ct-req">*</span></label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder=""
                        value={form.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                      />
                      <div className="ct-field-line" />
                    </div>

                    <div className={`ct-field ${focused === 'email' ? 'focused' : ''}`}>
                      <label>E-mail <span className="ct-req">*</span></label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder=""
                        value={form.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                      />
                      <div className="ct-field-line" />
                    </div>

                    <div className={`ct-field ${focused === 'message' ? 'focused' : ''}`}>
                      <label>Message <span className="ct-req">*</span></label>
                      <textarea
                        name="message"
                        required
                        placeholder=""
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                      />
                      <div className="ct-field-line" />
                    </div>

                    {error && (
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '13px',
                        color: '#E57373',
                        marginBottom: '12px',
                        marginTop: '-8px',
                      }}>
                        ⚠ {error}
                      </p>
                    )}

                    <button type="submit" className="ct-submit" disabled={sending}>
                      {sending && <span className="ct-spinner" />}
                      {sending ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default ContactSection;