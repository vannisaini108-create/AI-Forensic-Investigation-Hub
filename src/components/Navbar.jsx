import React, { useState, useEffect } from 'react';
import { Shield, Cpu, Menu, X, Terminal, Search, BookOpen, FileText, Sparkles, Scale } from 'lucide-react';

export default function Navbar({ activeSection, onNavigate }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'disciplines', label: 'Disciplines' },
    { id: 'ai-forensics', label: 'AI in Forensics' },
    { id: 'evidence', label: 'Evidence Library' },
    { id: 'case-studies', label: 'Case Studies' },
    { id: 'resources', label: 'Lab Resources' },
    { id: 'quiz', label: 'Quiz' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        transition: 'all 0.3s ease',
        background: isScrolled
          ? 'rgba(2, 8, 23, 0.92)'
          : 'rgba(2, 8, 23, 0.65)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: isScrolled
          ? '1px solid rgba(0, 242, 254, 0.25)'
          : '1px solid rgba(148, 163, 184, 0.08)',
        boxShadow: isScrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick('hero')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            userSelect: 'none',
          }}
        >
          <div
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '12px',
              background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.2) 0%, rgba(14, 165, 233, 0.4) 100%)',
              border: '1px solid rgba(0, 242, 254, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 15px rgba(0, 242, 254, 0.35)',
              position: 'relative',
            }}
          >
            <Shield size={22} color="#00f2fe" />
            <span
              style={{
                position: 'absolute',
                top: '-3px',
                right: '-3px',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#00f2fe',
                boxShadow: '0 0 8px #00f2fe',
              }}
            />
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.15rem',
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                }}
              >
                AI FORENSIC <span style={{ color: 'var(--cyan-primary)' }}>HUB</span>
              </span>
            </div>
            <div
              style={{
                fontSize: '0.68rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              Assessment-3 • Computational Criminalistics
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.4rem',
          }}
          className="desktop-nav"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: isActive ? 'rgba(0, 242, 254, 0.12)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 242, 254, 0.35)' : '1px solid transparent',
                  borderRadius: '8px',
                  color: isActive ? 'var(--cyan-primary)' : 'var(--text-secondary)',
                  padding: '0.45rem 0.85rem',
                  fontSize: '0.88rem',
                  fontWeight: isActive ? 600 : 500,
                  fontFamily: 'var(--font-sans)',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA / Academic Badge */}
        <div style={{ display: 'none', alignItems: 'center', gap: '0.75rem' }} className="desktop-nav-cta">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.35rem 0.75rem',
              background: 'rgba(0, 242, 254, 0.08)',
              border: '1px solid rgba(0, 242, 254, 0.25)',
              borderRadius: '999px',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              color: 'var(--cyan-primary)',
            }}
          >
            <span className="pulse-node" />
            <span>AI CORE ONLINE</span>
          </div>

          <button
            onClick={() => handleNavClick('evidence')}
            className="btn btn-primary btn-sm"
            style={{ gap: '0.4rem' }}
          >
            <Search size={14} />
            <span>Search Evidence</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '42px',
            height: '42px',
            borderRadius: '10px',
            background: 'rgba(10, 25, 60, 0.7)',
            border: '1px solid rgba(0, 242, 254, 0.3)',
            color: '#00f2fe',
            cursor: 'pointer',
          }}
          className="mobile-toggle-btn"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            background: 'rgba(2, 7, 22, 0.98)',
            borderBottom: '1px solid rgba(0, 242, 254, 0.3)',
            padding: '1.25rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            animation: 'fadeIn 0.2s ease-out',
          }}
        >
          <div
            style={{
              padding: '0.5rem 0.75rem',
              marginBottom: '0.5rem',
              background: 'rgba(0, 242, 254, 0.06)',
              borderRadius: '8px',
              border: '1px solid rgba(0, 242, 254, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              SYSTEM STATUS:
            </span>
            <span style={{ fontSize: '0.75rem', color: '#00f2fe', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
              ONLINE (DEMO MODE)
            </span>
          </div>

          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  textAlign: 'left',
                  background: isActive ? 'rgba(0, 242, 254, 0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(0, 242, 254, 0.4)' : '1px solid transparent',
                  borderRadius: '8px',
                  color: isActive ? '#00f2fe' : 'var(--text-secondary)',
                  padding: '0.75rem 1rem',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{item.label}</span>
                {isActive && <span style={{ color: '#00f2fe', fontSize: '0.8rem' }}>●</span>}
              </button>
            );
          })}

          <div style={{ marginTop: '0.75rem', display: 'flex', gap: '0.75rem' }}>
            <button
              onClick={() => handleNavClick('evidence')}
              className="btn btn-primary btn-sm"
              style={{ flex: 1 }}
            >
              <Search size={14} />
              <span>Evidence Library</span>
            </button>
            <button
              onClick={() => handleNavClick('quiz')}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <Sparkles size={14} />
              <span>Take Quiz</span>
            </button>
          </div>
        </div>
      )}

      {/* Style query for desktop navigation display */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .desktop-nav-cta { display: flex !important; }
          .mobile-toggle-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}

