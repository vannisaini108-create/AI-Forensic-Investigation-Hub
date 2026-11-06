import React, { useState } from 'react';
import { Shield, BookOpen, Clock, GitCommit, FileLock, CheckCircle, Info, BrainCircuit, Sparkles } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('principles');

  const timelineMilestones = [
    {
      year: '1882',
      era: 'Anthropometric Measurement',
      pioneer: 'Alphonse Bertillon',
      desc: 'First systematic physical identification system using eleven anatomical measurements to classify recidivist offenders in Paris.',
    },
    {
      year: '1910',
      era: "Locard's Exchange Principle",
      pioneer: 'Dr. Edmond Locard',
      desc: 'Established the world’s first forensic laboratory in Lyon, codifying "Every contact leaves a trace"—the bedrock of modern forensic science.',
    },
    {
      year: '1984',
      era: 'Forensic DNA Fingerprinting',
      pioneer: 'Sir Alec Jeffreys',
      desc: 'Discovery of hypervariable minisatellite DNA sequences, revolutionizing human identification and paternity verification globally.',
    },
    {
      year: '1999',
      era: 'Automated Biometric Databases',
      pioneer: 'FBI / Interpol AFIS',
      desc: 'Deployment of the Integrated Automated Fingerprint Identification System (IAFIS), indexing millions of 10-print fingerprint cards digitally.',
    },
    {
      year: '2020s+',
      era: 'Deep Neural Forensic Synthesis',
      pioneer: 'Computational Criminalistics',
      desc: 'Integration of deep learning for complex 4-person DNA mixture deconvolution, 3D sub-micron ballistic topography, and volatile cyber carving.',
    },
  ];

  return (
    <section id="about" className="section-wrapper" style={{ background: 'rgba(3, 10, 28, 0.4)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>FOUNDATIONS OF CRIMINALISTICS</span>
          </div>
          <h2 className="section-title">
            The Science of <span className="section-title-highlight">Objective Truth</span>
          </h2>
          <p className="section-subtitle">
            Forensic science is the application of rigorous empirical science to criminal and civil law.
            Explore the enduring physical principles that govern trace evidence and how modern artificial
            intelligence is ushering in a new era of computational accuracy.
          </p>
        </div>

        {/* Core Principles Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Locard's Principle */}
          <div className="glass-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(0, 242, 254, 0.12)',
                border: '1px solid rgba(0, 242, 254, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <GitCommit size={24} color="#00f2fe" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Locard's Exchange Principle</h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'var(--cyan-primary)',
                marginBottom: '0.75rem',
              }}
            >
              "EVERY CONTACT LEAVES A TRACE"
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
              Whenever two entities interact, a cross-transfer of physical or digital matter occurs.
              While traditional criminalistics sought hairs, fibers, and blood drops, modern computational
              forensics detects nanogram touch DNA, volatile heap allocations, and micro-spectroscopic pigment layers.
            </p>
          </div>

          {/* Chain of Custody */}
          <div className="glass-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(16, 185, 129, 0.12)',
                border: '1px solid rgba(16, 185, 129, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <FileLock size={24} color="#10b981" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Chain of Custody Integrity</h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#34d399',
                marginBottom: '0.75rem',
              }}
            >
              CHRONOLOGICAL & CRYPTOGRAPHIC PROVENANCE
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
              Evidence is only admissible if an unbroken, tamper-proof record demonstrates who seized,
              transferred, stored, and analyzed it. In AI forensics, models calculate SHA-256 digital
              fingerprints to ensure zero algorithmic manipulation or dataset contamination.
            </p>
          </div>

          {/* Symbiotic Human-AI Decision Model */}
          <div className="glass-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'rgba(168, 85, 247, 0.12)',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <BrainCircuit size={24} color="#c084fc" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.6rem' }}>Human-in-the-Loop Verification</h3>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#c084fc',
                marginBottom: '0.75rem',
              }}
            >
              ACE-V & DAUBERT COMPLIANCE
            </div>
            <p style={{ fontSize: '0.92rem', lineHeight: '1.65', color: 'var(--text-secondary)' }}>
              Artificial intelligence serves as a high-precision analytical assistant, never an autonomous juror.
              Certified human forensic specialists audit algorithmic outputs, conduct blind peer validations, and
              bear constitutional accountability as expert witnesses.
            </p>
          </div>
        </div>

        {/* Historical Evolution Timeline Showcase */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(8, 22, 58, 0.6) 0%, rgba(4, 12, 34, 0.8) 100%)',
          }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
              HISTORICAL TRAJECTORY
            </span>
            <h3 style={{ fontSize: '1.75rem' }}>From Bertillon's Calipers to Neural Networks</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '600px', margin: '0.5rem auto 0' }}>
              Trace the milestone breakthroughs that transformed criminal investigation from subjective deduction
              into an exact computational discipline.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              position: 'relative',
            }}
          >
            {timelineMilestones.map((m, idx) => (
              <div
                key={idx}
                style={{
                  background: 'rgba(5, 16, 44, 0.6)',
                  border: '1px solid rgba(0, 242, 254, 0.18)',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--cyan-primary)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {m.year}
                  </div>
                  <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.3rem' }}>{m.era}</h4>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94a3b8',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {m.pioneer}
                  </div>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Assessment & Ethical Disclaimer Callout */}
        <div
          style={{
            marginTop: '3rem',
            padding: '1.25rem 1.75rem',
            borderRadius: '14px',
            background: 'rgba(0, 242, 254, 0.05)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(0, 242, 254, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <Info size={22} color="#00f2fe" />
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.2rem' }}>
              Academic Research Demonstration Notice
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              This platform was created specifically for a college Assessment-3 project on Artificial Intelligence in
              Forensic Science. All datasets, evidence exhibits, and case profiles are educational simulations designed
              to illustrate computational methodologies. The platform does not process real criminal investigation evidence.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

