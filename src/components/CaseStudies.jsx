import React, { useState } from 'react';
import {
  FileText,
  FolderOpen,
  ArrowRight,
  Shield,
  Calendar,
  Sparkles,
  Scale,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';
import { caseStudies } from '../data/caseStudiesData';
import CaseModal from './CaseModal';

export default function CaseStudies({ onOpenEvidence }) {
  const [selectedCase, setSelectedCase] = useState(null);
  const [filterDiscipline, setFilterDiscipline] = useState('All');

  const filterOptions = [
    'All',
    'Biological Forensics',
    'Cyber Forensics',
    'Physical Forensics',
    'Toxicology & Chemistry',
    'Pattern Forensics',
  ];

  const filteredCases = caseStudies.filter((c) => {
    if (filterDiscipline === 'All') return true;
    return c.disciplineBadge === filterDiscipline;
  });

  return (
    <section id="case-studies" className="section-wrapper" style={{ background: 'rgba(3, 10, 28, 0.45)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <FileText size={14} />
            <span>CRIMINAL INVESTIGATION DOSSIERS</span>
          </div>
          <h2 className="section-title">
            Fictional <span className="section-title-highlight">Case Studies</span>
          </h2>
          <p className="section-subtitle">
            Explore simulated investigative dossiers demonstrating how computational neural networks
            and mass spectrometry models resolve complex cold cases and modern cyber intrusions.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.6rem',
            flexWrap: 'wrap',
            marginBottom: '2.5rem',
          }}
        >
          {filterOptions.map((opt) => {
            const isSelected = filterDiscipline === opt;
            return (
              <button
                key={opt}
                onClick={() => setFilterDiscipline(opt)}
                style={{
                  padding: '0.45rem 1rem',
                  borderRadius: '20px',
                  background: isSelected ? 'linear-gradient(135deg, #00f2fe, #0284c7)' : 'rgba(8, 22, 54, 0.7)',
                  border: isSelected ? '1px solid #00f2fe' : '1px solid rgba(0, 242, 254, 0.18)',
                  color: isSelected ? '#020817' : 'var(--text-secondary)',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '0.82rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Case Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {filteredCases.map((cs) => (
            <div
              key={cs.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                {/* Top Info Bar */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1rem',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                      color: 'var(--cyan-primary)',
                      fontWeight: 700,
                    }}
                  >
                    {cs.caseNumber}
                  </span>
                  <span className="badge badge-green">{cs.status}</span>
                </div>

                {/* Case Title */}
                <h3
                  style={{
                    fontSize: '1.25rem',
                    color: '#ffffff',
                    marginBottom: '0.5rem',
                    lineHeight: '1.3',
                  }}
                >
                  {cs.title}
                </h3>

                {/* Badges & Meta */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '1rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <span className="badge badge-cyan">{cs.disciplineBadge}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    • {cs.dateResolved}
                  </span>
                </div>

                {/* Brief Summary */}
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.65',
                    color: 'var(--text-secondary)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {cs.brief}
                </p>

                {/* AI Model Badge */}
                <div
                  style={{
                    padding: '0.6rem 0.85rem',
                    borderRadius: '8px',
                    background: 'rgba(5, 18, 48, 0.75)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <Sparkles size={15} color="#00f2fe" />
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    MODEL: <strong style={{ color: '#ffffff' }}>{cs.aiModelUsed}</strong>
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => setSelectedCase(cs)}
                className="btn btn-primary btn-sm"
                style={{ width: '100%', gap: '0.5rem' }}
              >
                <FolderOpen size={16} />
                <span>Open Case File Dossier</span>
                <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>

        {/* Case Dossier Modal */}
        {selectedCase && (
          <CaseModal
            caseData={selectedCase}
            onClose={() => setSelectedCase(null)}
            onOpenEvidence={onOpenEvidence}
          />
        )}
      </div>
    </section>
  );
}

