import React, { useState } from 'react';
import {
  Dna,
  Fingerprint,
  Cpu,
  FlaskConical,
  Target,
  ArrowRight,
  CheckCircle,
  Microscope,
  Scale,
  Sparkles,
  Layers,
} from 'lucide-react';
import { forensicDisciplines } from '../data/disciplinesData';

export default function Disciplines({ onSelectDiscipline, onNavigateToEvidence }) {
  const [selectedId, setSelectedId] = useState(forensicDisciplines[0].id);

  const activeDiscipline =
    forensicDisciplines.find((d) => d.id === selectedId) || forensicDisciplines[0];

  const getIcon = (iconName, size = 22, color = '#00f2fe') => {
    switch (iconName) {
      case 'Dna':
        return <Dna size={size} color={color} />;
      case 'Fingerprint':
        return <Fingerprint size={size} color={color} />;
      case 'Cpu':
        return <Cpu size={size} color={color} />;
      case 'FlaskConical':
        return <FlaskConical size={size} color={color} />;
      case 'Target':
        return <Target size={size} color={color} />;
      default:
        return <Microscope size={size} color={color} />;
    }
  };

  return (
    <section id="disciplines" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Layers size={14} />
            <span>CORE CRIMINALISTIC DISCIPLINES</span>
          </div>
          <h2 className="section-title">
            Five Pillars of <span className="section-title-highlight">Forensic Science</span>
          </h2>
          <p className="section-subtitle">
            Explore the biological, chemical, cyber, and physical disciplines of forensic investigation,
            and learn how machine learning algorithms augment each laboratory workflow.
          </p>
        </div>

        {/* 5 Disciplines Selector Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: '1rem',
            marginBottom: '2.5rem',
          }}
        >
          {forensicDisciplines.map((discipline) => {
            const isSelected = discipline.id === activeDiscipline.id;
            return (
              <button
                key={discipline.id}
                onClick={() => setSelectedId(discipline.id)}
                style={{
                  background: isSelected
                    ? 'linear-gradient(135deg, rgba(0, 242, 254, 0.18) 0%, rgba(8, 28, 70, 0.8) 100%)'
                    : 'rgba(6, 18, 48, 0.6)',
                  border: isSelected ? '1.5px solid #00f2fe' : '1px solid rgba(148, 163, 184, 0.15)',
                  borderRadius: '16px',
                  padding: '1.25rem 1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  boxShadow: isSelected ? '0 0 25px rgba(0, 242, 254, 0.25)' : 'none',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: '#00f2fe',
                      boxShadow: '0 0 10px #00f2fe',
                    }}
                  />
                )}
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: isSelected ? 'rgba(0, 242, 254, 0.25)' : 'rgba(0, 242, 254, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '0.85rem',
                  }}
                >
                  {getIcon(discipline.iconName, 22, isSelected ? '#00f2fe' : '#94a3b8')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: isSelected ? 'var(--cyan-primary)' : 'var(--text-dim)',
                    textTransform: 'uppercase',
                    marginBottom: '0.2rem',
                  }}
                >
                  {discipline.category}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                    lineHeight: '1.2',
                  }}
                >
                  {discipline.shortName}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Discipline Deep-Dive Dossier */}
        <div
          className="glass-panel"
          style={{
            padding: '2.5rem',
            borderRadius: '24px',
            background: 'linear-gradient(180deg, rgba(9, 25, 65, 0.8) 0%, rgba(3, 10, 28, 0.95) 100%)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Header row with badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              borderBottom: '1px solid rgba(0, 242, 254, 0.15)',
              paddingBottom: '1.5rem',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(0, 242, 254, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {getIcon(activeDiscipline.iconName, 22, '#00f2fe')}
                </div>
                <h3 style={{ fontSize: '1.85rem' }}>{activeDiscipline.name}</h3>
              </div>
              <p style={{ color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem' }}>
                {activeDiscipline.tagline}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span className="badge badge-cyan">{activeDiscipline.badge}</span>
              <span className="badge badge-green">ISO 17025 Calibrated</span>
            </div>
          </div>

          {/* Overview & Transfer Mechanism */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem',
              marginBottom: '2.5rem',
            }}
            className="discipline-overview-grid"
          >
            <div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.6rem', color: '#ffffff' }}>
                Discipline Overview & Methodology
              </h4>
              <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
                {activeDiscipline.overview}
              </p>
            </div>

            <div
              style={{
                background: 'rgba(5, 16, 44, 0.65)',
                padding: '1.25rem 1.5rem',
                borderRadius: '14px',
                border: '1px solid rgba(0, 242, 254, 0.18)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <Sparkles size={16} color="#00f2fe" />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--cyan-primary)',
                    textTransform: 'uppercase',
                  }}
                >
                  Locard Transfer Mechanism
                </span>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {activeDiscipline.locardPrinciple}
              </p>
            </div>
          </div>

          {/* AI Integration Highlight Box */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.08) 0%, rgba(14, 165, 233, 0.04) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.35)',
              borderRadius: '18px',
              padding: '1.75rem',
              marginBottom: '2.5rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
              <span className="pulse-node" />
              <h4 style={{ fontSize: '1.25rem', color: '#ffffff' }}>
                {activeDiscipline.aiIntegration.title}
              </h4>
            </div>

            <p style={{ fontSize: '0.95rem', lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              {activeDiscipline.aiIntegration.description}
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1rem' }}>
              {activeDiscipline.aiIntegration.keyAlgorithms.map((algo, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '8px',
                    background: 'rgba(8, 25, 65, 0.8)',
                    border: '1px solid rgba(0, 242, 254, 0.25)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: '#e2e8f0',
                  }}
                >
                  {algo}
                </div>
              ))}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                color: '#34d399',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <CheckCircle size={15} />
              <span>Verified Impact: {activeDiscipline.aiIntegration.impactMetric}</span>
            </div>
          </div>

          {/* Laboratory Workflow (4 Steps) */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h4 style={{ fontSize: '1.15rem', marginBottom: '1.25rem', color: '#ffffff' }}>
              Standard Laboratory Workflow (01 - 04)
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '1rem',
              }}
            >
              {activeDiscipline.laboratoryWorkflow.map((step) => (
                <div
                  key={step.step}
                  style={{
                    background: 'rgba(5, 16, 42, 0.6)',
                    border: '1px solid rgba(148, 163, 184, 0.15)',
                    borderRadius: '14px',
                    padding: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1.2rem',
                      fontWeight: 800,
                      color: 'var(--cyan-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {step.step}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                    {step.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courtroom Standards & Evidence Portal Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.25rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(0, 242, 254, 0.15)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', maxWidth: '650px' }}>
              <Scale size={20} color="#00f2fe" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                <strong style={{ color: '#ffffff' }}>Courtroom Standard:</strong> {activeDiscipline.courtroomStandards}
              </div>
            </div>

            <button
              onClick={() => onNavigateToEvidence(activeDiscipline.id)}
              className="btn btn-secondary btn-sm"
              style={{ gap: '0.5rem' }}
            >
              <span>View Exhibits in Library</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .discipline-overview-grid {
            grid-template-columns: 1.3fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

