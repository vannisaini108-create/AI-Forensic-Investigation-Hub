// Forensic Standards, Legal Precedents, and Academic References
export const legalStandards = [
  {
    name: 'Daubert Standard',
    citation: 'Daubert v. Merrell Dow Pharmaceuticals, 509 U.S. 579 (1993)',
    keyCriteria: [
      'Empirical testability & falsifiability',
      'Subject to peer review and academic publication',
      'Known or potential operational error rate (FAR/FRR)',
      'Existence of operating standards and protocols',
      'General acceptance within the scientific community'
    ],
    aiRelevance: 'Mandates transparent error rates, validation datasets, and code auditability for machine learning algorithms used as expert testimony.'
  },
  {
    name: 'Frye General Acceptance Standard',
    citation: 'Frye v. United States, 293 F. 1013 (D.C. Cir. 1923)',
    keyCriteria: [
      'Scientific deduction must be sufficiently established',
      'Consensus recognition in the relevant scientific specialty'
    ],
    aiRelevance: 'Still active in several state jurisdictions; requires forensic AI techniques to achieve widespread consensus among criminalists.'
  },
  {
    name: 'ISO/IEC 17025:2017 & ISO/IEC 27037',
    citation: 'International Organization for Standardization Forensic Competence',
    keyCriteria: [
      'Testing and calibration laboratory competence',
      'Identification, collection, acquisition, and preservation of digital evidence',
      'Cryptographic chain of custody logging (SHA-256)'
    ],
    aiRelevance: 'Defines strict calibration, quality assurance (QA), and instrument validation protocols for AI-driven laboratory hardware.'
  },
  {
    name: 'OSAC & SWGDAM Guidelines',
    citation: 'NIST Organization of Scientific Area Committees & Scientific Working Group on DNA Analysis',
    keyCriteria: [
      'Probabilistic genotyping validation criteria',
      'Friction ridge terminology standardization',
      'Minimum minutiae documentation protocols'
    ],
    aiRelevance: 'Provides baseline operational benchmarks against which all computational forensic tools are tested before casework deployment.'
  }
];

export const glossaryTerms = [
  { term: 'Chain of Custody', def: 'The chronological paper trail or cryptographically verifiable ledger recording the receipt, custody, transfer, analysis, and disposition of physical and electronic evidence.' },
  { term: 'Minutiae', def: 'Major friction ridge characteristics found on fingerprints, including bifurcations (ridge dividing), ridge endings, islands, dots, and crossovers, used for positive identification.' },
  { term: 'Likelihood Ratio (LR)', def: 'The statistical ratio comparing the probability of observing forensic evidence under the prosecution hypothesis (Hp) versus the defense hypothesis (Hd).' },
  { term: 'Electropherogram', def: 'A graphic representation of separated DNA fragments showing fluorescent intensity peaks proportional to the quantity of amplified alleles at specific genetic loci.' },
  { term: 'Congruent Matching Cells (CMC)', def: 'A statistical method dividing 3D ballistics topography into microscopic grid cells to correlate striation similarity between suspect and evidence cartridge cases.' },
  { term: 'Steganography', def: 'The practice of concealing a secret file, message, image, or video within another ordinary file or carrier stream to evade discovery.' },
  { term: 'Volatile RAM', def: 'Temporary operational computer memory that loses its contents when power is removed, holding active encryption keys, running processes, and network socket tables.' },
  { term: 'Novel Psychoactive Substance (NPS)', def: 'Synthetic designer drugs chemically modified to evade international scheduled substance lists while maintaining psychoactive or toxic effects.' }
];

export const academicResources = [
  {
    title: 'PCAST Report: Forensic Science in Criminal Courts - Ensuring Scientific Validity of Feature-Comparison Methods',
    organization: "President's Council of Advisors on Science and Technology",
    year: '2016',
    category: 'Government Landmark Report',
    linkText: 'NIST Standards Portal'
  },
  {
    title: 'Deep Learning Approaches in Latent Fingerprint Enhancement and Minutiae Extraction',
    organization: 'IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)',
    year: '2023',
    category: 'Peer-Reviewed Journal',
    linkText: 'IEEE Computer Society'
  },
  {
    title: 'Probabilistic Genotyping and Machine Learning in Complex DNA Mixture Interpretation',
    organization: 'Forensic Science International: Genetics',
    year: '2024',
    category: 'Genetics Journal',
    linkText: 'Elsevier FSI Genetics'
  },
  {
    title: 'Explainable AI for Criminal Justice: Legal and Ethical Frameworks for Algorithmic Evidence',
    organization: 'Harvard Journal of Law & Technology',
    year: '2024',
    category: 'Legal & Ethical Review',
    linkText: 'Harvard Law Review'
  }
];

