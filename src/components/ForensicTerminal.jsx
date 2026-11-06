import React, { useState, useEffect } from 'react';
import { Fingerprint, Dna, Target, Activity, Cpu, ShieldCheck, RefreshCw, ZoomIn } from 'lucide-react';

export default function ForensicTerminal() {
  const [activeMode, setActiveMode] = useState('fingerprint');
  const [isScanning, setIsScanning] = useState(true);
  const [scanProgress, setScanProgress] = useState(64);

  // Auto-cycle simulation or manual interaction
  useEffect(() => {
    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) return 30;
        return prev + 2;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  const modes = [
    { id: 'fingerprint', label: 'Latent Dactyloscopy', icon: Fingerprint, code: 'MOD-LPA-99' },
    { id: 'dna', label: 'DNA STR Profiler', icon: Dna, code: 'MOD-STR-24L' },
    { id: 'ballistics', label: '3D Ballistic Topography', icon: Target, code: 'MOD-CMC-3D' },
  ];

  return (
    <div
      className="glass-panel"
      style={{
        padding: '1.5rem',
        borderRadius: '20px',
        position: 'relative',
        overflow: 'hidden',
        border: '1px solid rgba(0, 242, 254, 0.35)',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 242, 254, 0.15)',
        background: 'linear-gradient(180deg, rgba(8, 24, 60, 0.85) 0%, rgba(3, 10, 28, 0.95) 100%)',
      }}
    >
      {/* Laser Scanline */}
      {isScanning && <div className="scanner-line" />}

      {/* Terminal Top Bar */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(0, 242, 254, 0.15)',
          paddingBottom: '0.9rem',
          marginBottom: '1rem',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--cyan-primary)',
              letterSpacing: '0.05em',
            }}
          >
            LAB-NEURAL-STATION // ISO-17025 SIMULATOR
          </span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="pulse-node" />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: '#34d399',
            }}
          >
            CONFIDENCE: 99.4%
          </span>
        </div>
      </div>

      {/* Mode Switcher Tabs */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '0.5rem',
          marginBottom: '1.25rem',
        }}
      >
        {modes.map((mode) => {
          const Icon = mode.icon;
          const isActive = activeMode === mode.id;
          return (
            <button
              key={mode.id}
              onClick={() => {
                setActiveMode(mode.id);
                setScanProgress(45);
              }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.35rem',
                padding: '0.6rem 0.4rem',
                borderRadius: '10px',
                background: isActive ? 'rgba(0, 242, 254, 0.18)' : 'rgba(15, 23, 42, 0.5)',
                border: isActive ? '1px solid #00f2fe' : '1px solid rgba(148, 163, 184, 0.15)',
                color: isActive ? '#ffffff' : 'var(--text-muted)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Icon size={18} color={isActive ? '#00f2fe' : '#94a3b8'} />
              <span style={{ fontSize: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}>
                {mode.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Forensic Visual Display Area */}
      <div
        style={{
          minHeight: '260px',
          background: 'rgba(2, 7, 20, 0.8)',
          borderRadius: '14px',
          border: '1px solid rgba(0, 242, 254, 0.2)',
          padding: '1.25rem',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        {/* Latent Fingerprint Scanner View */}
        {activeMode === 'fingerprint' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Fingerprint size={20} color="#00f2fe" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff' }}>
                  LATENT MINUTIAE VECTOR MAP: FP-9912
                </span>
              </div>
              <span className="badge badge-cyan">16 POINTS VERIFIED</span>
            </div>

            {/* Visual SVG Fingerprint Grid Overlay */}
            <div
              style={{
                height: '160px',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                background: 'radial-gradient(circle at center, rgba(0, 242, 254, 0.1) 0%, transparent 70%)',
                borderRadius: '8px',
                border: '1px dashed rgba(0, 242, 254, 0.25)',
              }}
            >
              <svg width="240" height="150" viewBox="0 0 240 150" style={{ opacity: 0.85 }}>
                {/* Simulated Friction Ridges */}
                <path d="M 60 75 Q 120 20 180 75" fill="none" stroke="#0284c7" strokeWidth="2" strokeDasharray="3 3" />
                <path d="M 50 85 Q 120 30 190 85" fill="none" stroke="#00f2fe" strokeWidth="2.5" />
                <path d="M 40 95 Q 120 40 200 95" fill="none" stroke="#38bdf8" strokeWidth="2" />
                <path d="M 30 105 Q 120 50 210 105" fill="none" stroke="#00f2fe" strokeWidth="2" />
                <path d="M 20 115 Q 120 60 220 115" fill="none" stroke="#0369a1" strokeWidth="1.5" />

                {/* Minutiae Bifurcation Nodes */}
                <circle cx="85" cy="62" r="4" fill="#10b981" />
                <line x1="85" y1="62" x2="85" y2="40" stroke="#10b981" strokeWidth="1" />
                <text x="90" y="42" fill="#10b981" fontSize="9" fontFamily="JetBrains Mono">BIF-01 (99.8%)</text>

                <circle cx="155" cy="64" r="4" fill="#00f2fe" />
                <line x1="155" y1="64" x2="155" y2="42" stroke="#00f2fe" strokeWidth="1" />
                <text x="160" y="44" fill="#00f2fe" fontSize="9" fontFamily="JetBrains Mono">END-04 (98.9%)</text>

                <circle cx="120" cy="52" r="5" fill="#f59e0b" />
                <text x="128" y="55" fill="#f59e0b" fontSize="9" fontFamily="JetBrains Mono">CORE LOCUS</text>
              </svg>

              {/* Target Reticle */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: `${scanProgress}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '40px',
                  height: '40px',
                  border: '1px solid #00f2fe',
                  borderRadius: '50%',
                  boxShadow: '0 0 10px #00f2fe',
                  pointerEvents: 'none',
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                marginTop: '0.75rem',
              }}
            >
              <span>ALGORITHM: ResNet-101 DeepRidge</span>
              <span style={{ color: '#38bdf8' }}>STATUS: MATCH IDENTIFIED (IAFIS #7819)</span>
            </div>
          </div>
        )}

        {/* DNA STR Profiler View */}
        {activeMode === 'dna' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Dna size={20} color="#00f2fe" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff' }}>
                  ELECTROPHEROGRAM PEAK DECONVOLUTION: 24 LOCI
                </span>
              </div>
              <span className="badge badge-green">LR: 1.42 × 10¹⁸</span>
            </div>

            {/* Simulated Peaks */}
            <div
              style={{
                height: '160px',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-around',
                padding: '0.75rem 0.5rem 1.5rem 0.5rem',
                borderBottom: '1px solid rgba(0, 242, 254, 0.4)',
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '8px',
              }}
            >
              {[
                { name: 'D3S1358', h1: 75, h2: 70, a1: '15', a2: '17', color: '#00f2fe' },
                { name: 'vWA', h1: 90, h2: 85, a1: '16', a2: '19', color: '#38bdf8' },
                { name: 'FGA', h1: 65, h2: 60, a1: '21', a2: '24', color: '#10b981' },
                { name: 'D8S1179', h1: 82, h2: 80, a1: '12', a2: '14', color: '#a855f7' },
                { name: 'AMEL', h1: 95, h2: 92, a1: 'X', a2: 'Y', color: '#f59e0b' },
              ].map((locus, idx) => (
                <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-end', gap: '4px' }}>
                    <div
                      style={{
                        width: '14px',
                        height: `${locus.h1}px`,
                        background: `linear-gradient(180deg, ${locus.color} 0%, rgba(0,0,0,0.2) 100%)`,
                        borderRadius: '3px 3px 0 0',
                        boxShadow: `0 0 8px ${locus.color}`,
                      }}
                    />
                    <div
                      style={{
                        width: '14px',
                        height: `${locus.h2}px`,
                        background: `linear-gradient(180deg, ${locus.color} 0%, rgba(0,0,0,0.2) 100%)`,
                        borderRadius: '3px 3px 0 0',
                        opacity: 0.85,
                      }}
                    />
                  </div>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)' }}>
                    {locus.name}
                  </span>
                  <span style={{ fontSize: '0.6rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                    [{locus.a1},{locus.a2}]
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                marginTop: '0.75rem',
              }}
            >
              <span>DECONVOLUTION: Contributor 1 (82%) Isolated</span>
              <span style={{ color: '#10b981' }}>STUTTER FILTER: 94.2% CLEAN</span>
            </div>
          </div>
        )}

        {/* Ballistics Topography View */}
        {activeMode === 'ballistics' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Target size={20} color="#00f2fe" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: '#ffffff' }}>
                  3D BREECH FACE STRIATION CROSS-CORRELATION
                </span>
              </div>
              <span className="badge badge-amber">CMC: 28 / 32 CELLS</span>
            </div>

            {/* 3D Topo Visual Simulation */}
            <div
              style={{
                height: '160px',
                width: '100%',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, rgba(8, 20, 50, 0.9) 0%, rgba(2, 6, 20, 0.9) 100%)',
                borderRadius: '8px',
                border: '1px solid rgba(0, 242, 254, 0.25)',
                overflow: 'hidden',
              }}
            >
              {/* Concentric Casing Geometry */}
              <div
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  border: '2px solid rgba(0, 242, 254, 0.6)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(0, 242, 254, 0.2)',
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    border: '1.5px dashed #38bdf8',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#00f2fe',
                      boxShadow: '0 0 12px #00f2fe',
                    }}
                  />
                </div>

                {/* Shear marks rays */}
                <div style={{ position: 'absolute', top: '15px', right: '25px', color: '#34d399', fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>
                  +2.8µm
                </div>
                <div style={{ position: 'absolute', bottom: '15px', left: '25px', color: '#38bdf8', fontSize: '0.65rem', fontFamily: 'var(--font-mono)' }}>
                  -1.4µm
                </div>
              </div>

              {/* Congruent Cells Grid simulation */}
              <div
                style={{
                  position: 'absolute',
                  right: '15px',
                  top: '15px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 12px)',
                  gap: '4px',
                }}
              >
                {Array.from({ length: 16 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '2px',
                      background: i % 5 === 0 ? '#ef4444' : '#10b981',
                      opacity: 0.8,
                    }}
                  />
                ))}
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                marginTop: '0.75rem',
              }}
            >
              <span>SIAMESE CCF SCORE: 0.941</span>
              <span style={{ color: '#fbbf24' }}>FALSE POSITIVE RISK: &lt; 1 IN 100,000</span>
            </div>
          </div>
        )}

        {/* Progress Bar Footer */}
        <div style={{ marginTop: '0.9rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '4px' }}>
            <span>NEURAL PIPELINE LATENCY: 34ms</span>
            <span>ACCURACY THRESHOLD: CALIBRATED</span>
          </div>
          <div
            style={{
              height: '4px',
              width: '100%',
              background: 'rgba(148, 163, 184, 0.15)',
              borderRadius: '999px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${scanProgress}%`,
                background: 'linear-gradient(90deg, #00f2fe, #38bdf8)',
                boxShadow: '0 0 10px #00f2fe',
                transition: 'width 0.12s linear',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

