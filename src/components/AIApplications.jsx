import React, { useState } from 'react';
import {
  BrainCircuit,
  Eye,
  FileCode2,
  Boxes,
  ShieldCheck,
  Scale,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  BarChart3,
} from 'lucide-react';
import { aiParadigms, comparisonMatrix } from '../data/aiApplicationsData';

export default function AIApplications() {
  const [activeParadigmId, setActiveParadigmId] = useState(aiParadigms[0].id);
  const [viewMode, setViewMode] = useState('paradigms'); // 'paradigms' or 'matrix'

  const activeParadigm =
    aiParadigms.find((p) => p.id === activeParadigmId) || aiParadigms[0];

  const getParadigmIcon = (iconName) => {
    switch (iconName) {
      case 'Eye':
        return <Eye size={22} color="#00f2fe" />;
      case 'FileCode2':
        return <FileCode2 size={22} color="#00f2fe" />;
      case 'Boxes':
        return <Boxes size={22} color="#00f2fe" />;
      case 'ShieldCheck':
        return <ShieldCheck size={22} color="#00f2fe" />;
      case 'Scale':
        return <Scale size={22} color="#00f2fe" />;
      default:
        return <BrainCircuit size={22} color="#00f2fe" />;
    }
  };

  return (
    <section id="ai-forensics" className="section-wrapper" style={{ background: 'rgba(3, 9, 26, 0.5)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BrainCircuit size={14} />
            <span>MACHINE LEARNING ARCHITECTURES</span>
          </div>
          <h2 className="section-title">
            Artificial Intelligence in <span className="section-title-highlight">Forensic Science</span>
          </h2>
          <p className="section-subtitle">
            From neural electropherogram deconvolution to deepfake biological pulse verification,
            discover how modern computational intelligence transforms forensic problem-solving.
          </p>
        </div>

        {/* View Switcher: Paradigms vs Comparative Matrix */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '0.35rem',
              background: 'rgba(6, 18, 48, 0.8)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              borderRadius: '12px',
              gap: '0.4rem',
            }}
          >
            <button
              onClick={() => setViewMode('paradigms')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                background: viewMode === 'paradigms' ? 'linear-gradient(135deg, #00f2fe, #0284c7)' : 'transparent',
                color: viewMode === 'paradigms' ? '#020817' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Cpu size={16} />
              <span>AI Paradigms & Models</span>
            </button>

            <button
              onClick={() => setViewMode('matrix')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                background: viewMode === 'matrix' ? 'linear-gradient(135deg, #00f2fe, #0284c7)' : 'transparent',
                color: viewMode === 'matrix' ? '#020817' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <BarChart3 size={16} />
              <span>AI vs Traditional Forensics</span>
            </button>
          </div>
        </div>

        {/* VIEW 1: AI PARADIGMS EXPLORER */}
        {viewMode === 'paradigms' && (
          <div>
            {/* Horizontal Paradigm Tab Bar */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}
            >
              {aiParadigms.map((p) => {
                const isSelected = p.id === activeParadigm.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setActiveParadigmId(p.id)}
                    style={{
                      background: isSelected ? 'rgba(0, 242, 254, 0.16)' : 'rgba(7, 20, 52, 0.6)',
                      border: isSelected ? '1px solid #00f2fe' : '1px solid rgba(148, 163, 184, 0.12)',
                      borderRadius: '12px',
                      padding: '1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '8px',
                        background: isSelected ? 'rgba(0, 242, 254, 0.25)' : 'rgba(0, 242, 254, 0.08)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {getParadigmIcon(p.icon)}
                    </div>
                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: '0.88rem',
                          color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                          lineHeight: '1.25',
                        }}
                      >
                        {p.title.split('&')[0]}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Paradigm Expanded Card */}
            <div
              className="glass-panel"
              style={{
                padding: '2.5rem',
                borderRadius: '24px',
                background: 'linear-gradient(180deg, rgba(8, 22, 58, 0.85) 0%, rgba(3, 10, 28, 0.95) 100%)',
                border: '1px solid rgba(0, 242, 254, 0.25)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  marginBottom: '1rem',
                }}
              >
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: 'rgba(0, 242, 254, 0.15)',
                    border: '1px solid rgba(0, 242, 254, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getParadigmIcon(activeParadigm.icon)}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.6rem', color: '#ffffff' }}>{activeParadigm.title}</h3>
                  <div style={{ color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                    {activeParadigm.subtitle}
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '1.02rem', lineHeight: '1.75', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                {activeParadigm.description}
              </p>

              {/* Capabilities Grid */}
              <div style={{ marginBottom: '2rem' }}>
                <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '1rem' }}>
                  Core Forensic Capabilities:
                </h4>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '1rem',
                  }}
                >
                  {activeParadigm.capabilities.map((cap, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        padding: '1rem',
                        background: 'rgba(5, 16, 42, 0.65)',
                        border: '1px solid rgba(0, 242, 254, 0.15)',
                        borderRadius: '12px',
                      }}
                    >
                      <CheckCircle2 size={18} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Architecture & Legal Admissibility Bottom Boxes */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.25rem',
                }}
                className="architecture-legal-grid"
              >
                <div
                  style={{
                    background: 'rgba(6, 18, 48, 0.8)',
                    padding: '1.25rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Technical Neural Architecture
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontFamily: 'var(--font-mono)' }}>
                    {activeParadigm.technicalArchitecture}
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(6, 18, 48, 0.8)',
                    padding: '1.25rem',
                    borderRadius: '14px',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                  }}
                >
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#34d399', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                    Judicial Admissibility & Ethics
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#e2e8f0' }}>
                    {activeParadigm.legalConsideration}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* VIEW 2: AI VS TRADITIONAL MATRIX */}
        {viewMode === 'matrix' && (
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem',
              borderRadius: '24px',
              background: 'linear-gradient(180deg, rgba(8, 22, 58, 0.85) 0%, rgba(3, 10, 28, 0.95) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
                BENCHMARK COMPARISON
              </span>
              <h3 style={{ fontSize: '1.75rem' }}>Traditional Criminalistics vs AI-Assisted Workflows</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', maxWidth: '620px', margin: '0.5rem auto 0' }}>
                An objective breakdown illustrating how computational models augment speed, scalability,
                and statistical certainty while preserving human expert accountability.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {comparisonMatrix.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(5, 16, 44, 0.7)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    borderRadius: '16px',
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: 'var(--cyan-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                        marginBottom: '0.4rem',
                      }}
                    >
                      EVALUATION DIMENSION
                    </div>
                    <h4 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '1.25rem' }}>
                      {item.metric}
                    </h4>

                    {/* Traditional Method */}
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.2rem' }}>
                        TRADITIONAL PRACTICE:
                      </div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        {item.traditional}
                      </div>
                    </div>

                    {/* AI-Assisted Method */}
                    <div style={{ marginBottom: '1.25rem' }}>
                      <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#38bdf8', marginBottom: '0.2rem' }}>
                        AI-ASSISTED ENHANCEMENT:
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#ffffff' }}>
                        {item.aiAssisted}
                      </div>
                    </div>
                  </div>

                  {/* Advantage Tag */}
                  <div
                    style={{
                      padding: '0.6rem 0.85rem',
                      borderRadius: '8px',
                      background: 'rgba(0, 242, 254, 0.1)',
                      border: '1px solid rgba(0, 242, 254, 0.3)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--cyan-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                    }}
                  >
                    <Sparkles size={14} />
                    <span>{item.advantage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .architecture-legal-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

