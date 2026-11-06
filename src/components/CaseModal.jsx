import React from 'react';
import {
  X,
  Shield,
  Clock,
  User,
  Scale,
  BrainCircuit,
  FileCheck2,
  Calendar,
  AlertTriangle,
  Sparkles,
  CheckCircle2,
  FolderOpen,
} from 'lucide-react';

export default function CaseModal({ caseData, onClose, onOpenEvidence }) {
  if (!caseData) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Modal Top Header */}
        <div
          style={{
            padding: '1.75rem 2rem',
            borderBottom: '1px solid rgba(0, 242, 254, 0.2)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            background: 'linear-gradient(180deg, rgba(8, 26, 68, 0.95) 0%, rgba(4, 14, 38, 0.95) 100%)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
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
                boxShadow: '0 0 15px rgba(0, 242, 254, 0.25)',
              }}
            >
              <FolderOpen size={22} color="#00f2fe" />
            </div>

            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.2rem' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--cyan-primary)',
                    fontWeight: 700,
                  }}
                >
                  {caseData.caseNumber}
                </span>
                <span className="badge badge-cyan">{caseData.disciplineBadge}</span>
                <span className="badge badge-green">{caseData.status}</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff' }}>{caseData.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close case file"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(148, 163, 184, 0.2)',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.25)';
              e.currentTarget.style.borderColor = '#ef4444';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
              e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div style={{ padding: '2rem' }}>
          {/* Case Metadata Bar */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(3, 10, 28, 0.8)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 242, 254, 0.15)',
              marginBottom: '2rem',
            }}
          >
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>JURISDICTION</div>
              <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>{caseData.jurisdiction}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>INVESTIGATOR(S)</div>
              <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>{caseData.leadInvestigator}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>NEURAL ENGINE</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--cyan-primary)', fontFamily: 'var(--font-mono)' }}>{caseData.aiModelUsed}</div>
            </div>

            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>RESOLVED</div>
              <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600 }}>{caseData.dateResolved}</div>
            </div>
          </div>

          {/* Incident Brief */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Incident Background & Overview
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
              {caseData.brief}
            </p>
          </div>

          {/* Challenge vs AI Breakthrough Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '1.25rem',
              marginBottom: '2rem',
            }}
            className="challenge-breakthrough-grid"
          >
            {/* The Forensic Bottleneck */}
            <div
              style={{
                padding: '1.25rem',
                background: 'rgba(239, 68, 68, 0.06)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                borderRadius: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <AlertTriangle size={18} color="#f87171" />
                <h5 style={{ fontSize: '0.95rem', color: '#f87171' }}>The Forensic Bottleneck</h5>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {caseData.challenge}
              </p>
            </div>

            {/* The AI Neural Breakthrough */}
            <div
              style={{
                padding: '1.25rem',
                background: 'rgba(0, 242, 254, 0.08)',
                border: '1px solid rgba(0, 242, 254, 0.35)',
                borderRadius: '14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Sparkles size={18} color="#00f2fe" />
                <h5 style={{ fontSize: '0.95rem', color: '#00f2fe' }}>The AI Neural Breakthrough</h5>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                {caseData.aiBreakthrough}
              </p>
            </div>
          </div>

          {/* Investigation Timeline */}
          <div style={{ marginBottom: '2rem' }}>
            <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '1.25rem' }}>
              Chronological Investigative Timeline
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {caseData.timeline.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '1rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(6, 18, 48, 0.6)',
                    border: '1px solid rgba(0, 242, 254, 0.15)',
                    borderRadius: '10px',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: 'var(--cyan-primary)',
                      minWidth: '95px',
                    }}
                  >
                    {step.year}
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                    {step.event}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Outcome & Judicial Resolution */}
          <div
            style={{
              padding: '1.25rem',
              borderRadius: '14px',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
              <CheckCircle2 size={18} color="#10b981" />
              <h5 style={{ fontSize: '0.98rem', color: '#34d399' }}>Judicial Outcome & Sentence</h5>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', lineHeight: '1.6' }}>
              {caseData.outcome}
            </p>
          </div>

          {/* Daubert Pre-Trial Admissibility */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '1rem 1.25rem',
              background: 'rgba(5, 16, 44, 0.7)',
              border: '1px solid rgba(148, 163, 184, 0.15)',
              borderRadius: '10px',
            }}
          >
            <Scale size={20} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
              <strong style={{ color: '#ffffff' }}>Pre-Trial Court Admissibility:</strong> {caseData.juridicalValidation}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid rgba(0, 242, 254, 0.15)',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '1rem',
            background: 'rgba(2, 6, 20, 0.95)',
          }}
        >
          <button onClick={onClose} className="btn btn-secondary btn-sm">
            Close Case Dossier
          </button>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .challenge-breakthrough-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

