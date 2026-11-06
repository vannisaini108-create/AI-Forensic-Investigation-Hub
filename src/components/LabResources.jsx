import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Scale,
  Search,
  ExternalLink,
  Shield,
  FileText,
  CheckCircle,
  HelpCircle,
  Download,
} from 'lucide-react';
import { legalStandards, glossaryTerms, academicResources } from '../data/labResourcesData';

export default function LabResources() {
  const [activeTab, setActiveTab] = useState('standards'); // 'standards', 'glossary', 'literature'
  const [glossarySearch, setGlossarySearch] = useState('');

  const filteredGlossary = useMemo(() => {
    if (!glossarySearch.trim()) return glossaryTerms;
    const q = glossarySearch.toLowerCase();
    return glossaryTerms.filter(
      (item) => item.term.toLowerCase().includes(q) || item.def.toLowerCase().includes(q)
    );
  }, [glossarySearch]);

  return (
    <section id="resources" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            <span>ACADEMIC & LEGAL KNOWLEDGE REPOSITORY</span>
          </div>
          <h2 className="section-title">
            Forensic <span className="section-title-highlight">Learning Resources</span>
          </h2>
          <p className="section-subtitle">
            Curated references, courtroom admissibility precedents, standardized glossaries,
            and peer-reviewed literature for students, researchers, and legal evaluators.
          </p>
        </div>

        {/* Tab Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2.5rem' }}>
          <div
            style={{
              display: 'inline-flex',
              padding: '0.35rem',
              background: 'rgba(6, 18, 48, 0.8)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              borderRadius: '12px',
              gap: '0.4rem',
              flexWrap: 'wrap',
            }}
          >
            <button
              onClick={() => setActiveTab('standards')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                background: activeTab === 'standards' ? 'linear-gradient(135deg, #00f2fe, #0284c7)' : 'transparent',
                color: activeTab === 'standards' ? '#020817' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <Scale size={16} />
              <span>Courtroom Standards</span>
            </button>

            <button
              onClick={() => setActiveTab('glossary')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                background: activeTab === 'glossary' ? 'linear-gradient(135deg, #00f2fe, #0284c7)' : 'transparent',
                color: activeTab === 'glossary' ? '#020817' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <HelpCircle size={16} />
              <span>Forensic Glossary</span>
            </button>

            <button
              onClick={() => setActiveTab('literature')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.55rem 1.25rem',
                borderRadius: '8px',
                background: activeTab === 'literature' ? 'linear-gradient(135deg, #00f2fe, #0284c7)' : 'transparent',
                color: activeTab === 'literature' ? '#020817' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              <FileText size={16} />
              <span>Academic Citations</span>
            </button>
          </div>
        </div>

        {/* TAB 1: COURTROOM STANDARDS */}
        {activeTab === 'standards' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {legalStandards.map((std, idx) => (
              <div key={idx} className="glass-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                  <Scale size={20} color="#00f2fe" />
                  <h3 style={{ fontSize: '1.25rem', color: '#ffffff' }}>{std.name}</h3>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--cyan-primary)',
                    marginBottom: '1rem',
                  }}
                >
                  {std.citation}
                </div>

                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-dim)', marginBottom: '0.4rem' }}>
                    KEY ADMISSIBILITY CRITERIA:
                  </div>
                  <ul style={{ paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {std.keyCriteria.map((crit, cIdx) => (
                      <li key={cIdx} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.45' }}>
                        {crit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  style={{
                    padding: '0.85rem 1rem',
                    background: 'rgba(0, 242, 254, 0.08)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    borderRadius: '10px',
                  }}
                >
                  <div style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: 'var(--cyan-primary)', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
                    Application to Forensic AI Models:
                  </div>
                  <p style={{ fontSize: '0.82rem', color: '#e2e8f0', lineHeight: '1.5' }}>
                    {std.aiRelevance}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: SEARCHABLE FORENSIC GLOSSARY */}
        {activeTab === 'glossary' && (
          <div>
            {/* Search input for glossary */}
            <div style={{ maxWidth: '520px', margin: '0 auto 2rem', position: 'relative' }}>
              <Search
                size={18}
                color="#00f2fe"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Search forensic terminology (e.g., 'Minutiae', 'RAM', 'Likelihood Ratio')..."
                value={glossarySearch}
                onChange={(e) => setGlossarySearch(e.target.value)}
                className="form-input"
                style={{
                  paddingLeft: '2.75rem',
                  fontSize: '0.92rem',
                  background: 'rgba(5, 16, 44, 0.85)',
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.25rem',
              }}
            >
              {filteredGlossary.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.25rem',
                    borderRadius: '14px',
                    background: 'rgba(6, 18, 48, 0.65)',
                    border: '1px solid rgba(0, 242, 254, 0.18)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.05rem',
                      fontWeight: 700,
                      color: 'var(--cyan-primary)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    {item.term}
                  </div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                    {item.def}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ACADEMIC CITATIONS & LANDMARK LITERATURE */}
        {activeTab === 'literature' && (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {academicResources.map((res, idx) => (
              <div key={idx} className="glass-card">
                <span className="badge badge-cyan" style={{ marginBottom: '0.75rem' }}>
                  {res.category}
                </span>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.6rem', lineHeight: '1.35' }}>
                  {res.title}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  {res.organization}
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--cyan-primary)', marginBottom: '1.25rem' }}>
                  Published Year: {res.year}
                </div>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    color: '#38bdf8',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  <ExternalLink size={14} />
                  <span>Referenced in {res.linkText}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

