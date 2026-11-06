import React from 'react';
import { Shield, Sparkles, ArrowRight, BookOpen, Search, CheckCircle2, Terminal } from 'lucide-react';
import ForensicTerminal from './ForensicTerminal';

export default function Hero({ onNavigate }) {
  return (
    <section id="hero" className="section-wrapper" style={{ paddingTop: '8.5rem', paddingBottom: '5rem' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Column: Headline and Call to Actions */}
          <div>
            {/* Academic Assessment Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.45rem 1rem',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                borderRadius: '999px',
                marginBottom: '1.5rem',
                backdropFilter: 'blur(8px)',
              }}
            >
              <Sparkles size={16} color="#00f2fe" />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: 'var(--cyan-primary)',
                  letterSpacing: '0.04em',
                }}
              >
                COLLEGE ASSESSMENT-3 • AI FOR FORENSIC SCIENCE
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
                marginBottom: '1.5rem',
              }}
            >
              Next-Generation <br />
              <span className="text-gradient-cyan">Computational AI</span> in <br />
              Forensic Investigation
            </h1>

            {/* Sub-headline */}
            <p
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.18rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '620px',
              }}
            >
              An educational research and interactive demonstration platform showcasing how deep neural networks,
              computer vision, and mass spectral transformers augment human criminalists across DNA deconvolution,
              latent dactyloscopy, volatile digital artifacts, and 3D ballistic topography.
            </p>

            {/* CTA Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginBottom: '2.75rem',
              }}
            >
              <button
                onClick={() => onNavigate('evidence')}
                className="btn btn-primary"
                style={{ gap: '0.5rem', fontSize: '1rem', padding: '0.85rem 1.8rem' }}
              >
                <Search size={18} />
                <span>Explore Evidence Library</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => onNavigate('disciplines')}
                className="btn btn-secondary"
                style={{ gap: '0.5rem', fontSize: '1rem', padding: '0.85rem 1.6rem' }}
              >
                <Terminal size={18} color="#00f2fe" />
                <span>Forensic Disciplines</span>
              </button>

              <button
                onClick={() => onNavigate('quiz')}
                className="btn btn-outline"
                style={{ gap: '0.5rem', fontSize: '1rem', padding: '0.85rem 1.4rem' }}
              >
                <Sparkles size={16} />
                <span>Assessment Quiz</span>
              </button>
            </div>

            {/* Quick Trust / Methodology Pillars */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '1rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  ISO/IEC 17025 Standards
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Daubert Courtroom Admissibility
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                  Zero Real Evidence Claimed
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Forensic Terminal Simulation */}
          <div>
            <ForensicTerminal />
          </div>
        </div>

        {/* Global Key Forensic Statistics Bar */}
        <div
          className="glass-panel"
          style={{
            marginTop: '4.5rem',
            padding: '2rem 2.5rem',
            borderRadius: '20px',
            background: 'linear-gradient(90deg, rgba(8, 22, 58, 0.7) 0%, rgba(4, 14, 38, 0.8) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
              textAlign: 'center',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                  letterSpacing: '-0.02em',
                }}
              >
                5 <span style={{ color: 'var(--cyan-primary)' }}>Core</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Forensic Disciplines Modeled
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                }}
              >
                99.4<span style={{ color: 'var(--cyan-primary)' }}>%</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Peak Algorithmic Precision
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                }}
              >
                8+ <span style={{ color: 'var(--cyan-primary)' }}>Exhibits</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Simulated Evidence Catalog
              </div>
            </div>

            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.25rem',
                }}
              >
                6 <span style={{ color: 'var(--cyan-primary)' }}>Cases</span>
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Fictional Forensic Dossiers
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
}

