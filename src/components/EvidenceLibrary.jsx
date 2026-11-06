import React, { useState, useMemo, useEffect } from 'react';
import {
  Search,
  Filter,
  Dna,
  Fingerprint,
  Cpu,
  Target,
  FlaskConical,
  Shield,
  Eye,
  CheckCircle,
  Sparkles,
  RotateCcw,
} from 'lucide-react';
import { evidenceCatalog } from '../data/evidenceData';
import EvidenceModal from './EvidenceModal';

export default function EvidenceLibrary({ initialCategory = 'All' }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [activeModalEvidence, setActiveModalEvidence] = useState(null);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const categories = [
    'All',
    'Biological & DNA',
    'Latent Prints',
    'Digital & Cyber',
    'Ballistics & Toolmarks',
    'Toxicology & Chemical',
    'Trace Evidence',
  ];

  const statuses = ['All', 'Verified Match', 'Neural Reconstruction'];

  // Filtered evidence calculation
  const filteredEvidence = useMemo(() => {
    return evidenceCatalog.filter((item) => {
      // Category filter
      const matchesCategory =
        selectedCategory === 'All' || item.category === selectedCategory;

      // Status filter
      const matchesStatus =
        selectedStatus === 'All' || item.status === selectedStatus;

      // Search query filter
      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.id.toLowerCase().includes(q) ||
        item.summary.toLowerCase().includes(q) ||
        item.analyst.toLowerCase().includes(q) ||
        item.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesStatus && matchesQuery;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const getDisciplineIcon = (type) => {
    switch (type) {
      case 'dna':
        return <Dna size={18} color="#00f2fe" />;
      case 'fingerprint':
        return <Fingerprint size={18} color="#00f2fe" />;
      case 'digital':
        return <Cpu size={18} color="#00f2fe" />;
      case 'toxicology':
        return <FlaskConical size={18} color="#00f2fe" />;
      case 'ballistics':
        return <Target size={18} color="#00f2fe" />;
      default:
        return <Shield size={18} color="#00f2fe" />;
    }
  };

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedStatus('All');
  };

  return (
    <section id="evidence" className="section-wrapper">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Search size={14} />
            <span>CRYPTOGRAPHIC EVIDENCE REPOSITORY</span>
          </div>
          <h2 className="section-title">
            Forensic <span className="section-title-highlight">Evidence Library</span>
          </h2>
          <p className="section-subtitle">
            Browse simulated forensic exhibits verified under strict chain of custody protocols.
            Inspect raw sensor telemetry, AI-assisted pattern classifications, and Daubert admissibility criteria.
          </p>
        </div>

        {/* Filter & Search Control Panel */}
        <div
          className="glass-panel"
          style={{
            padding: '1.75rem',
            borderRadius: '20px',
            marginBottom: '2.5rem',
            background: 'rgba(6, 18, 48, 0.75)',
            border: '1px solid rgba(0, 242, 254, 0.25)',
          }}
        >
          {/* Top Row: Search Input + Status Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.25rem',
            }}
          >
            {/* Live Search Bar */}
            <div style={{ position: 'relative', flex: '1', minWidth: '280px' }}>
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
                placeholder="Search evidence ID, title, keyword, or tag (e.g. 'STR', '9mm', 'RAM')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-input"
                style={{
                  paddingLeft: '2.75rem',
                  fontSize: '0.92rem',
                  background: 'rgba(3, 10, 28, 0.85)',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                  }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Status Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                STATUS:
              </span>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                {statuses.map((st) => (
                  <button
                    key={st}
                    onClick={() => setSelectedStatus(st)}
                    style={{
                      padding: '0.35rem 0.75rem',
                      borderRadius: '8px',
                      background: selectedStatus === st ? 'rgba(0, 242, 254, 0.2)' : 'rgba(15, 23, 42, 0.6)',
                      border: selectedStatus === st ? '1px solid #00f2fe' : '1px solid rgba(148, 163, 184, 0.15)',
                      color: selectedStatus === st ? '#ffffff' : 'var(--text-muted)',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      cursor: 'pointer',
                    }}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Row: Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
              borderTop: '1px solid rgba(148, 163, 184, 0.1)',
              paddingTop: '1rem',
            }}
          >
            <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginRight: '0.3rem' }}>
              CATEGORY:
            </span>
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  style={{
                    padding: '0.35rem 0.85rem',
                    borderRadius: '20px',
                    background: isSelected ? 'linear-gradient(135deg, #00f2fe, #0284c7)' : 'rgba(8, 22, 56, 0.7)',
                    border: isSelected ? '1px solid #00f2fe' : '1px solid rgba(0, 242, 254, 0.15)',
                    color: isSelected ? '#020817' : 'var(--text-secondary)',
                    fontWeight: isSelected ? 700 : 500,
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Counter & Active Filters Display */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            padding: '0 0.5rem',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            SHOWING <strong style={{ color: '#00f2fe' }}>{filteredEvidence.length}</strong> OF{' '}
            <strong>{evidenceCatalog.length}</strong> EXHIBITS
          </div>

          {(searchQuery || selectedCategory !== 'All' || selectedStatus !== 'All') && (
            <button
              onClick={handleResetFilters}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'transparent',
                border: 'none',
                color: 'var(--cyan-primary)',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: 'var(--font-mono)',
              }}
            >
              <RotateCcw size={13} />
              <span>Reset All Filters</span>
            </button>
          )}
        </div>

        {/* Evidence Cards Grid */}
        {filteredEvidence.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredEvidence.map((item) => (
              <div
                key={item.id}
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  {/* Top Card Info Row */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(0, 242, 254, 0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {getDisciplineIcon(item.thumbnailType)}
                      </div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          color: 'var(--cyan-primary)',
                          fontWeight: 700,
                        }}
                      >
                        {item.id}
                      </span>
                    </div>

                    <span className="badge badge-green">{item.status}</span>
                  </div>

                  {/* Title & Category */}
                  <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.9rem',
                    }}
                  >
                    {item.category} • {item.analyst.split(',')[0]}
                  </div>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: '0.88rem',
                      lineHeight: '1.6',
                      color: 'var(--text-secondary)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {item.summary}
                  </p>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          padding: '0.2rem 0.55rem',
                          borderRadius: '6px',
                          background: 'rgba(15, 23, 42, 0.8)',
                          border: '1px solid rgba(148, 163, 184, 0.15)',
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: AI Confidence Progress + Inspect Button */}
                <div
                  style={{
                    borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                    paddingTop: '1rem',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '4px',
                    }}
                  >
                    <span>AI Model Confidence:</span>
                    <span style={{ color: '#00f2fe', fontWeight: 700 }}>{item.aiConfidence}%</span>
                  </div>

                  <div
                    style={{
                      height: '5px',
                      width: '100%',
                      background: 'rgba(148, 163, 184, 0.15)',
                      borderRadius: '999px',
                      overflow: 'hidden',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      style={{
                        height: '100%',
                        width: `${item.aiConfidence}%`,
                        background: 'linear-gradient(90deg, #00f2fe, #34d399)',
                        boxShadow: '0 0 8px #00f2fe',
                      }}
                    />
                  </div>

                  <button
                    onClick={() => setActiveModalEvidence(item)}
                    className="btn btn-primary btn-sm"
                    style={{ width: '100%', gap: '0.5rem' }}
                  >
                    <Eye size={15} />
                    <span>Inspect Evidence & Chain of Custody</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div
            className="glass-panel"
            style={{
              textAlign: 'center',
              padding: '3.5rem 2rem',
              borderRadius: '20px',
            }}
          >
            <div
              style={{
                width: '54px',
                height: '54px',
                borderRadius: '50%',
                background: 'rgba(0, 242, 254, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem',
              }}
            >
              <Search size={26} color="#00f2fe" />
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#ffffff' }}>
              No Forensic Exhibits Match Your Criteria
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              Try broadening your keyword query or resetting the category and status filters.
            </p>
            <button onClick={handleResetFilters} className="btn btn-secondary btn-sm">
              <RotateCcw size={14} />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

        {/* Evidence Inspection Modal */}
        {activeModalEvidence && (
          <EvidenceModal
            evidence={activeModalEvidence}
            onClose={() => setActiveModalEvidence(null)}
          />
        )}
      </div>
    </section>
  );
}
