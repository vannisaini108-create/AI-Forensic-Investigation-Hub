import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Disciplines from './components/Disciplines';
import AIApplications from './components/AIApplications';
import EvidenceLibrary from './components/EvidenceLibrary';
import CaseStudies from './components/CaseStudies';
import LabResources from './components/LabResources';
import InteractiveLabQuiz from './components/InteractiveLabQuiz';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [evidenceFilterCategory, setEvidenceFilterCategory] = useState('All');

  // Smooth navigation to a specific section by ID
  const handleNavigate = (sectionId, categoryFilter = null) => {
    setActiveSection(sectionId);
    if (categoryFilter) {
      setEvidenceFilterCategory(categoryFilter);
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section observer to update active nav link on scroll
  useEffect(() => {
    const sections = [
      'hero',
      'about',
      'disciplines',
      'ai-forensics',
      'evidence',
      'case-studies',
      'resources',
      'quiz',
      'contact',
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.25, rootMargin: '-60px 0px -40% 0px' }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Ambient Radial Gradient Orbs */}
      <div className="ambient-glow-top" />
      <div className="ambient-glow-bottom" />

      {/* Sticky Responsive Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onNavigate={handleNavigate} />

        {/* 2. About Forensic Science & Core Foundations */}
        <About />

        {/* 3. Forensic Disciplines (DNA, Latent Prints, Cyber, Tox, Ballistics) */}
        <Disciplines
          onSelectDiscipline={(dId) => {}}
          onNavigateToEvidence={(dId) => {
            let cat = 'All';
            if (dId === 'dna-analysis') cat = 'Biological & DNA';
            else if (dId === 'fingerprint-analysis') cat = 'Latent Prints';
            else if (dId === 'digital-forensics') cat = 'Digital & Cyber';
            else if (dId === 'forensic-toxicology') cat = 'Toxicology & Chemical';
            else if (dId === 'ballistics-toolmarks') cat = 'Ballistics & Toolmarks';
            handleNavigate('evidence', cat);
          }}
        />

        {/* 4. AI in Forensic Science (Paradigms & Comparative Matrix) */}
        <AIApplications />

        {/* 5. Evidence Library with Live Search & Category Filters */}
        <EvidenceLibrary initialCategory={evidenceFilterCategory} />

        {/* 6. Fictional Case Studies with Interactive Modals */}
        <CaseStudies
          onOpenEvidence={(evidenceId) => {
            handleNavigate('evidence');
          }}
        />

        {/* 7. Academic Learning Resources & Glossary */}
        <LabResources />

        {/* 8. Interactive Assessment-3 Competency Quiz */}
        <InteractiveLabQuiz />

        {/* 9. Contact / Inquiry Form with Validation */}
        <Contact />
      </main>

      {/* Footer & Assessment-3 Academic Disclaimers */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

