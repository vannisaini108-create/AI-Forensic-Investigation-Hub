import React from 'react';
import {
  Shield,
  ArrowUp,
  Cpu,
  Lock,
  Scale,
  Sparkles,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        background: '#010511',
        borderTop: '1px solid rgba(0, 242, 254, 0.2)',
        padding: '4.5rem 0 2rem 0',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <div className="container">
        {/* Main Footer Columns Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand & Purpose Column */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(0, 242, 254, 0.15)',
                  border: '1px solid rgba(0, 242, 254, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Shield size={20} color="#00f2fe" />
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  color: '#ffffff',
                }}
              >
                AI FORENSIC <span style={{ color: 'var(--cyan-primary)' }}>HUB</span>
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.65', marginBottom: '1.25rem' }}>
              An educational portal for College Assessment-3 exploring artificial intelligence, deep learning,
              and computational methodologies across criminalistics, chain of custody, and forensic evidence analysis.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.75rem',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                borderRadius: '8px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--cyan-primary)',
              }}
            >
              <Lock size={12} />
              <span>COLLEGE ASSESSMENT-3 DEMO</span>
            </div>
          </div>

          {/* Quick Hub Navigation */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Hub Modules
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { id: 'hero', label: 'Platform Home' },
                { id: 'about', label: 'About Forensic Science' },
                { id: 'disciplines', label: 'Five Forensic Disciplines' },
                { id: 'ai-forensics', label: 'AI Models & Paradigms' },
                { id: 'evidence', label: 'Evidence Library' },
                { id: 'case-studies', label: 'Fictional Case Studies' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic & Assessment Tools */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Learning Tools
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {[
                { id: 'resources', label: 'Courtroom Standards (Daubert / Frye)' },
                { id: 'resources', label: 'Searchable Forensic Glossary' },
                { id: 'resources', label: 'Academic Literature Citations' },
                { id: 'quiz', label: 'Assessment-3 Competency Quiz' },
                { id: 'contact', label: 'Academic Inquiry Dispatch' },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: 'var(--text-secondary)',
                      fontSize: '0.88rem',
                      cursor: 'pointer',
                      transition: 'color 0.2s ease',
                      textAlign: 'left',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#00f2fe')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Technical Compliance & Frameworks */}
          <div>
            <h4
              style={{
                fontSize: '0.95rem',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                marginBottom: '1.25rem',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Admissibility Frameworks
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                • <strong>Daubert Standard:</strong> Empirical testability & error rates
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                • <strong>ISO/IEC 17025:</strong> Testing & calibration competence
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                • <strong>ISO/IEC 27037:</strong> Digital evidence handling & custody
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                • <strong>OSAC & SWGDAM:</strong> Probabilistic genotyping guidelines
              </div>
            </div>
          </div>
        </div>

        {/* Academic Disclaimer Callout Box */}
        <div
          style={{
            padding: '1.25rem 1.75rem',
            borderRadius: '12px',
            background: 'rgba(0, 242, 254, 0.04)',
            border: '1px solid rgba(0, 242, 254, 0.18)',
            marginBottom: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
            <Scale size={16} color="#00f2fe" />
            <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', fontWeight: 700 }}>
              ACADEMIC ASSESSMENT-3 DISCLAIMER & ETHICAL CHARTER
            </span>
          </div>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
            This web application is an educational simulation created solely for a college Assessment-3 project on
            Artificial Intelligence in Forensic Science. All case studies, evidence specimens, serial numbers,
            and algorithmic outputs are entirely fictional demonstrations of scientific principles.
            This platform does not analyze, process, or claim to evaluate real-world criminal case evidence.
          </p>
        </div>

        {/* Bottom Copyright & Back to Top Row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
          }}
        >
          <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} AI Forensic Investigation Hub • College Assessment-3 • Vite + React + JavaScript
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="btn btn-secondary btn-sm"
            style={{ gap: '0.4rem' }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}

