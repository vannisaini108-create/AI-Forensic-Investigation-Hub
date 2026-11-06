import React from 'react';
import {
  X,
  Shield,
  FileCheck2,
  Calendar,
  User,
  MapPin,
  Lock,
  Sparkles,
  Dna,
  Fingerprint,
  Cpu,
  Target,
  FlaskConical,
  CheckCircle,
  ExternalLink,
} from 'lucide-react';

export default function EvidenceModal({ evidence, onClose }) {
  if (!evidence) return null;

  const getDisciplineIcon = (type) => {
    switch (type) {
      case 'dna':
        return <Dna size={22} color="#00f2fe" />;
      case 'fingerprint':
        return <Fingerprint size={22} color="#00f2fe" />;
      case 'digital':
        return <Cpu size={22} color="#00f2fe" />;
      case 'toxicology':
        return <FlaskConical size={22} color="#00f2fe" />;
      case 'ballistics':
        return <Target size={22} color="#00f2fe" />;
      default:
        return <Shield size={22} color="#00f2fe" />;
    }
  };

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
            background: 'linear-gradient(180deg, rgba(10, 28, 72, 0.95) 0%, rgba(4, 14, 38, 0.95) 100%)',
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
              {getDisciplineIcon(evidence.thumbnailType)}
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
                  {evidence.id}
                </span>
                <span className="badge badge-green">{evidence.status}</span>
              </div>
              <h3 style={{ fontSize: '1.35rem', color: '#ffffff' }}>{evidence.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
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
          {/* Metadata Quick Ribbon */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '1rem',
              padding: '1rem',
              background: 'rgba(3, 10, 28, 0.8)',
              borderRadius: '12px',
              border: '1px solid rgba(0, 242, 254, 0.15)',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} color="#00f2fe" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>ACQUIRED</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff' }}>{evidence.dateAcquired}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <User size={16} color="#00f2fe" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>ANALYST</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff' }}>{evidence.analyst}</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MapPin size={16} color="#00f2fe" />
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>FACILITY</div>
                <div style={{ fontSize: '0.8rem', color: '#ffffff' }}>{evidence.labLocation}</div>
              </div>
            </div>
          </div>

          {/* Cryptographic Chain of Custody */}
          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'rgba(5, 18, 48, 0.6)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              borderRadius: '10px',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Lock size={15} color="#10b981" />
                <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#34d399', fontWeight: 600 }}>
                  CHAIN OF CUSTODY INTEGRITY SEAL
                </span>
              </div>
              <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                {evidence.custodyStatus}
              </span>
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-muted)',
                wordBreak: 'break-all',
                background: 'rgba(0, 0, 0, 0.35)',
                padding: '0.45rem 0.65rem',
                borderRadius: '6px',
              }}
            >
              {evidence.chainOfCustodyHash}
            </div>
          </div>

          {/* Evidence Summary & Technical Specifications */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              Exhibitory Summary
            </h4>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: '1.65' }}>
              {evidence.summary}
            </p>
          </div>

          {/* Technical Hardware & Instrument Specs */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Laboratory Instrumentation & Analysis Parameters
            </h4>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '0.75rem',
              }}
            >
              {Object.entries(evidence.specifications).map(([key, val]) => (
                <div
                  key={key}
                  style={{
                    background: 'rgba(7, 20, 52, 0.6)',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(148, 163, 184, 0.1)',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                    {key.replace(/([A-Z])/g, ' $1')}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>
                    {val}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Simulated Forensic Visual Data Panel */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '14px',
              background: 'rgba(2, 8, 22, 0.95)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              marginBottom: '1.75rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Sparkles size={16} color="#00f2fe" />
                <span style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', fontWeight: 700 }}>
                  LABORATORY INSTRUMENT SPECTROGRAM / SIGNAL TELEMETRY
                </span>
              </div>
              <span className="badge badge-cyan">MODEL CONFIDENCE: {evidence.aiConfidence}%</span>
            </div>

            {/* Render Specific Visual Simulation Depending on Evidence Type */}
            {evidence.simulatedData.type === 'electropherogram' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span>LOCUS</span>
                  <span>ALLELE 1 (RFU)</span>
                  <span>ALLELE 2 (RFU)</span>
                  <span>CONFIDENCE</span>
                </div>
                {evidence.simulatedData.peaks.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#00f2fe', fontWeight: 600 }}>{p.locus}</span>
                    <span>{p.allele1} ({p.rfu1})</span>
                    <span>{p.allele2} ({p.rfu2})</span>
                    <span style={{ color: '#10b981' }}>99.9%</span>
                  </div>
                ))}
              </div>
            )}

            {evidence.simulatedData.type === 'striationProfile' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span>SURFACE OFFSET</span>
                  <span>ELEVATION PROFILE (MICRONS)</span>
                  <span>CONGRUENCE STATUS</span>
                </div>
                {evidence.simulatedData.striations.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#38bdf8' }}>{s.offset}</span>
                    <span style={{ color: s.depth.startsWith('+') ? '#34d399' : '#38bdf8' }}>{s.depth}</span>
                    <span style={{ color: '#10b981', fontWeight: 600 }}>CMC MATCH CELL CONFIRMED</span>
                  </div>
                ))}
              </div>
            )}

            {evidence.simulatedData.type === 'memoryMap' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span>PID / PROCESS</span>
                  <span>VIRTUAL ADDRESS</span>
                  <span>NEURAL THREAT ASSESSMENT</span>
                </div>
                {evidence.simulatedData.processes.map((proc, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#00f2fe' }}>{proc.pid} - {proc.name}</span>
                    <span style={{ color: 'var(--text-muted)' }}>{proc.address}</span>
                    <span style={{ color: proc.status.includes('CRITICAL') ? '#ef4444' : '#10b981', fontWeight: 600 }}>
                      {proc.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {evidence.simulatedData.type === 'massSpectrogram' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span>MASS-TO-CHARGE (m/z)</span>
                  <span>RELATIVE ABUNDANCE</span>
                  <span>ION FRAGMENT IDENTIFIER</span>
                </div>
                {evidence.simulatedData.peaks.map((p, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#00f2fe', fontWeight: 600 }}>{p.mz} Da</span>
                    <span>{p.intensity}%</span>
                    <span style={{ color: '#38bdf8' }}>{p.label}</span>
                  </div>
                ))}
              </div>
            )}

            {evidence.simulatedData.type === 'minutiaePlot' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span>COORDINATES (X, Y)</span>
                  <span>MINUTIAE CLASSIFICATION</span>
                  <span>SPATIAL CERTAINTY</span>
                </div>
                {evidence.simulatedData.minutiae.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#00f2fe' }}>({m.x}, {m.y})</span>
                    <span style={{ color: '#ffffff' }}>{m.type}</span>
                    <span style={{ color: '#10b981' }}>{(m.confidence * 100).toFixed(1)}%</span>
                  </div>
                ))}
              </div>
            )}

            {evidence.simulatedData.type === 'flightPath' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                  <span>GPS TIMESTAMP</span>
                  <span>ALTITUDE / VELOCITY</span>
                  <span>FLIGHT EVENT</span>
                </div>
                {evidence.simulatedData.waypoints.map((w, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#00f2fe' }}>{w.time}</span>
                    <span style={{ color: '#ffffff' }}>{w.alt} @ {w.speed}</span>
                    <span style={{ color: '#38bdf8' }}>{w.event}</span>
                  </div>
                ))}
              </div>
            )}

            {evidence.simulatedData.type === 'paintLayers' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {evidence.simulatedData.layers.map((l, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#00f2fe', fontWeight: 600 }}>{l.layer} ({l.thickness})</span>
                    <span style={{ color: '#cbd5e1' }}>{l.composition}</span>
                  </div>
                ))}
              </div>
            )}

            {evidence.simulatedData.type === 'audioSpectrogram' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {evidence.simulatedData.formants.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '0.5rem 0.75rem',
                      background: 'rgba(10, 28, 68, 0.5)',
                      borderRadius: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                    }}
                  >
                    <span style={{ color: '#00f2fe' }}>{f.formant}</span>
                    <span style={{ color: '#ffffff', fontWeight: 600 }}>{f.freq}</span>
                    <span style={{ color: '#34d399' }}>{f.deviation}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* AI Algorithmic Findings */}
          <div style={{ marginBottom: '1.75rem' }}>
            <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Key AI Algorithmic Findings & Deductions
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {evidence.aiFindings.map((finding, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    padding: '0.75rem 1rem',
                    background: 'rgba(6, 18, 48, 0.65)',
                    border: '1px solid rgba(0, 242, 254, 0.15)',
                    borderRadius: '8px',
                  }}
                >
                  <CheckCircle size={16} color="#00f2fe" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.88rem', color: 'var(--text-primary)', lineHeight: '1.5' }}>
                    {finding}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Courtroom Admissibility Assessment Note */}
          <div
            style={{
              padding: '1rem 1.25rem',
              background: 'rgba(16, 185, 129, 0.08)',
              border: '1px solid rgba(16, 185, 129, 0.25)',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}
          >
            <Shield size={20} color="#10b981" style={{ flexShrink: 0 }} />
            <div style={{ fontSize: '0.85rem', color: '#e2e8f0' }}>
              <strong style={{ color: '#34d399' }}>Courtroom Admissibility Status:</strong> {evidence.courtroomAdmissibility}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
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
            Close Exhibit
          </button>
        </div>
      </div>
    </div>
  );
}

