import React, { useState, useEffect, useRef } from 'react';
import insightedImg from '../assets/insighted.jpg';
import meditrackImg from '../assets/meditrack.jpg';

/* ─────────────────────────────────────────────
   PROJECT DATA
   Edit text, tags, links, or images here.
───────────────────────────────────────────── */
const projects = [
  {
    id: 'insighted',
    title: 'InsightED',
    tagline: 'AI-powered Self-Study Assistance & Academic Performance Analysis Platform',
    image: insightedImg,
    type: 'Web App',
    status: 'Completed',
    completed: 'May 2026',
    description: `Developed InsightED, a full-stack AI-driven educational platform that leverages Generative AI to analyze academic syllabi, detect skill gaps between university coursework and industry requirements, and create personalized learning roadmaps. The platform integrates intelligent assessments, study productivity tracking, learning analytics, progress monitoring, and resource management to provide a comprehensive and personalized learning experience for students.`,
    highlights: [
      'AI-generated personalized learning roadmaps',
      'Industry gap analysis based on uploaded syllabi',
      'Dynamic practice quizzes and assessment modules',
      'Smart Focus Mode with integrated study timer',
      'AI-driven insights, analytics, and progress tracking',
      'Integrated Library Section to compare original academic material alongside AI-generated content',
      'Smart calendar scheduling system',
      'Personalized assessments and self-evaluation modules',
    ],
    tags: ['React.js', 'Vite', 'Node.js', 'Express.js', 'Redis', 'BullMQ', 'TiDB Serverless', 'Gemini API'],
    github: 'https://lnkd.in/gzi8FVVs',
    demo: 'https://lnkd.in/gmEqtqt8',
  },
  {
    id: 'meditrack',
    title: 'MediTrack',
    tagline: 'Smart Medical History Record System',
    image: meditrackImg,
    type: 'Mobile App',
    status: 'In Progress',
    completed: 'In Progress',
    description: `MediTrack is a healthcare management system that replaces scattered paper records and manual prescription tracking with one centralised, AI-enhanced record book. Every report, visit, and health metric is stored in one place, and Gemini-powered summarisation turns a patient's full history into a clear, structured overview — making past conditions easy for both patients and doctors to understand at a glance.`,
    highlights: [
      'AI-driven medical summary engine (Gemini API)',
      'Centralised record management for reports & visits',
      'Appointment scheduling with live tracking',
      'Smart medicine reminders with time-based alerts',
      'AI-powered medicine guide',
      'Health logs for BP, sugar, oxygen & pulse',
    ],
    tags: ['Java', 'Swing', 'Maven', 'MySQL', 'JDBC', 'Gemini API'],
    github: '#',
    demo: null,
  },
];

/* Small chevron icon used on the expand affordance */
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M17 7H9M17 7V15"/>
  </svg>
);

const SparkIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
    <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z"/>
  </svg>
);

const ProjectsSection = () => {
  const [activeId, setActiveId] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('pj-in');
        else entry.target.classList.remove('pj-in');
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const activeProject = projects.find(p => p.id === activeId);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500;600&display=swap');

          html {
  scroll-behavior: smooth;
}

        /* ── WRAPPER ── */
        .pj-wrapper {
          background: #12100E;
          padding: 100px 24px 120px;
          box-sizing: border-box;
          position: relative;
          overflow: hidden;
        }
        .pj-wrapper::before {
          content: '';
          position: absolute;
          top: 10%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(ellipse, rgba(201,147,10,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .pj-inner {
          max-width: 1180px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        /* ── HEADER ── */
        .pj-header {
          margin-bottom: 64px;
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1);
        }
        .pj-in .pj-header { opacity: 1; transform: translateY(0); }

        .pj-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #C9930A;
          margin-bottom: 18px;
        }
        .pj-eyebrow::before { content:''; width:24px; height:1px; background:#C9930A; }

        .pj-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(34px, 5vw, 56px);
          font-weight: 700;
          color: #FFFFFF;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* ════════════════════════════════════════
           GRID VIEW (collapsed cards)
        ════════════════════════════════════════ */
        .pj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .pj-card {
          cursor: pointer;
          opacity: 0;
          transform: translateY(46px);
          transition: opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1);
        }
        .pj-in .pj-card { opacity: 1; transform: translateY(0); }

        .pj-card-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
          background: #1a1714;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1), box-shadow 0.45s ease, border-color 0.35s ease;
        }
        .pj-card:hover .pj-card-frame {
          transform: translateY(-6px);
          box-shadow: 0 30px 70px rgba(0,0,0,0.5);
          border-color: rgba(201,147,10,0.35);
        }

        .pj-card-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          transition: transform 0.6s cubic-bezier(0.22,1,0.36,1), filter 0.45s ease;
          filter: brightness(0.92);
        }
        .pj-card:hover .pj-card-frame img {
          transform: scale(1.06);
          filter: brightness(1);
        }

        /* Title overlay on the image */
        .pj-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.78) 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 22px;
        }

        .pj-card-name {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px 0;
        }

        .pj-card-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 400;
          color: rgba(255,255,255,0.65);
          margin: 0;
        }

        /* Platform badge */
        .pj-platform-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'DM Sans', sans-serif;
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #C9930A;
          background: rgba(201,147,10,0.1);
          border: 1px solid rgba(201,147,10,0.3);
          border-radius: 100px;
          padding: 4px 11px;
        }

        /* Expand affordance icon, top right */
        .pj-card-expand {
          position: absolute;
          top: 16px;
          right: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(6px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          transition: background 0.3s ease, transform 0.3s ease;
        }
        .pj-card:hover .pj-card-expand {
          background: #C9930A;
          transform: rotate(45deg);
        }

        /* Meta row below the image */
        .pj-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 16px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .pj-tags {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }

        .pj-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          color: rgba(255,255,255,0.55);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 100px;
          padding: 5px 14px;
        }

        .pj-status {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.4);
          white-space: nowrap;
        }
        .pj-status.live { color: #6FCF97; }
        .pj-status.inprogress { color: #F2994A; }

        /* ════════════════════════════════════════
           DETAIL VIEW (expanded)
        ════════════════════════════════════════ */
        .pj-detail-overlay {
          position: fixed;
          inset: 0;
          background: rgba(8,7,6,0.88);
          backdrop-filter: blur(6px);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .pj-detail-overlay.pj-open {
          opacity: 1;
          pointer-events: auto;
        }

        .pj-detail {
          background: #15130F;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          max-width: 1100px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          padding: 56px;
          position: relative;
          transform: scale(0.94) translateY(20px);
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
        }
        .pj-detail-overlay.pj-open .pj-detail {
          transform: scale(1) translateY(0);
        }

        .pj-close {
          position: absolute;
          top: 28px;
          right: 28px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
          z-index: 2;
        }
        .pj-close:hover {
          background: #C9930A;
          transform: rotate(90deg);
        }

        .pj-detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }

        /* Big title left side */
        .pj-detail-title {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: clamp(56px, 9vw, 110px);
          line-height: 0.92;
          color: #fff;
          margin: 0 0 28px 0;
          letter-spacing: -0.02em;
        }

        .pj-detail-tagline {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #C9930A;
          letter-spacing: 0.04em;
          margin-bottom: 20px;
          text-transform: uppercase;
        }

        .pj-detail-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 15.5px;
          line-height: 1.85;
          color: #B8AFA4;
          font-weight: 300;
          margin-bottom: 28px;
        }

        .pj-detail-highlights {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .pj-detail-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #D8CFC4;
          line-height: 1.5;
        }
        .pj-detail-highlights li svg {
          flex-shrink: 0;
          margin-top: 3px;
          color: #C9930A;
        }

        .pj-detail-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }
        .pj-detail-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          color: #15130F;
          background: #fff;
          border-radius: 100px;
          padding: 7px 16px;
        }

        .pj-detail-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .pj-detail-date {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #756B5F;
        }
        .pj-detail-date strong { color: #D8CFC4; font-weight: 500; }

        .pj-detail-links {
          display: flex;
          gap: 12px;
        }

        .pj-link-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          text-decoration: none;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 100px;
          padding: 10px 20px;
          transition: all 0.25s ease;
        }
        .pj-link-btn:hover {
          background: #C9930A;
          border-color: #C9930A;
          color: #15130F;
          transform: translateY(-2px);
        }

        /* Right side image */
        .pj-detail-image {
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .pj-detail-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ── RESPONSIVE ── */
@media (max-width: 860px) {
  .pj-grid { grid-template-columns: 1fr; }
  .pj-detail-grid { grid-template-columns: 1fr; gap: 32px; }
  .pj-detail { padding: 32px 24px; max-height: 92vh; }
  .pj-detail-title { font-size: clamp(40px, 14vw, 70px); }
  .pj-detail-image { display: none; }
}
      `}</style>

      <div className="pj-wrapper" id="projects" ref={sectionRef}>
        <div className="pj-inner">

          {/* Header */}
          <div className="pj-header">
            <div className="pj-eyebrow">Selected Work</div>
            <h2 className="pj-title">Projects</h2>
          </div>

          {/* Grid of collapsed cards */}
          <div className="pj-grid">
            {projects.map((project, i) => (
              <div
                key={project.id}
                className="pj-card"
                style={{ transitionDelay: `${i * 0.12}s` }}
                onClick={() => setActiveId(project.id)}
              >
                <div className="pj-card-frame">
                  <img src={project.image} alt={project.title} />
                  <div className="pj-card-overlay">
                    <h3 className="pj-card-name">{project.title}</h3>
                    <p className="pj-card-tagline">{project.tagline}</p>
                  </div>
                  {/* Platform badge — top left */}
                  <div style={{ position:'absolute', top:14, left:14 }}>
                    <span className="pj-platform-badge">
                      {project.type === 'Web App' ? '🌐' : '📱'} {project.type}
                    </span>
                  </div>
                  <div className="pj-card-expand">
                    <ArrowIcon />
                  </div>
                </div>

                <div className="pj-card-meta">
                  <div className="pj-tags">
                    {project.tags.slice(0, 4).map(tag => (
                      <span key={tag} className="pj-tag">{tag}</span>
                    ))}
                  </div>
                  <span className={`pj-status ${project.status === 'Live' ? 'live' : project.status === 'In Progress' ? 'inprogress' : ''}`}>
                    {project.status === 'Live' ? '● Live'
                      : project.status === 'In Progress' ? '⟳ In Progress'
                      : `Completed: ${project.completed}`}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── EXPANDED DETAIL MODAL ── */}
      <div
        className={`pj-detail-overlay ${activeProject ? 'pj-open' : ''}`}
        onClick={() => setActiveId(null)}
      >
        {activeProject && (
          <div className="pj-detail" onClick={(e) => e.stopPropagation()}>
            <button className="pj-close" onClick={() => setActiveId(null)} aria-label="Close">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="pj-detail-grid">

              {/* Left: text content */}
              <div>
                <h2 className="pj-detail-title">{activeProject.title}</h2>
                <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                  <p className="pj-detail-tagline" style={{ margin:0 }}>{activeProject.tagline}</p>
                  <span className="pj-platform-badge" style={{ flexShrink:0 }}>
                    {activeProject.type === 'Web App' ? '🌐' : '📱'} {activeProject.type}
                  </span>
                </div>
                <p className="pj-detail-desc">{activeProject.description}</p>

                <ul className="pj-detail-highlights">
                  {activeProject.highlights.map((point) => (
                    <li key={point}>
                      <SparkIcon />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="pj-detail-tags">
                  {activeProject.tags.map(tag => (
                    <span key={tag} className="pj-detail-tag">{tag}</span>
                  ))}
                </div>

                <div className="pj-detail-footer">
                  <span className="pj-detail-date">
                    {activeProject.status === 'Live'
                      ? <><strong>● Live</strong></>
                      : activeProject.status === 'In Progress'
                      ? <><strong>⟳ In Progress</strong></>
                      : <>Completed: <strong>{activeProject.completed}</strong></>}
                  </span>
                  <div className="pj-detail-links">
                    {activeProject.github && activeProject.github !== '#' && (
                      <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="pj-link-btn">
                        GitHub <ArrowIcon />
                      </a>
                    )}
                    {activeProject.demo && (
                      <a href={activeProject.demo} target="_blank" rel="noopener noreferrer" className="pj-link-btn">
                        Live Demo <ArrowIcon />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: image */}
              <div className="pj-detail-image">
                <img src={activeProject.image} alt={activeProject.title} />
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectsSection;