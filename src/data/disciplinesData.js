// Comprehensive Forensic Disciplines Data with AI Integrations
export const forensicDisciplines = [
  {
    id: 'dna-analysis',
    name: 'Forensic DNA Profiling',
    shortName: 'DNA Analysis',
    tagline: 'Short Tandem Repeats (STR), NGS, and Neural Allele Deconvolution',
    category: 'Biological Sciences',
    iconName: 'Dna',
    badge: '99.98% Model Sensitivity',
    overview:
      'Forensic DNA analysis examines polymorphic regions of the human genome to establish biological identity, kinship, and genealogical linkages. Modern forensic laboratories employ Short Tandem Repeat (STR) multiplex typing, mitochondrial DNA (mtDNA) sequencing, and Next-Generation Sequencing (NGS).',
    locardPrinciple:
      'Epithelial cells, blood droplets, hair follicles, or touch DNA left on surfaces transfer minute quantities of genetic material that can be amplified via Polymerase Chain Reaction (PCR).',
    aiIntegration: {
      title: 'Deep Neural Networks for Mixed-Sample Deconvolution',
      description:
        'Traditional probabilistic genotyping struggles with high-order complex DNA mixtures (3+ contributors) and severe allele dropout. AI models trained on peak height ratios, stutter percentages, and degradation curves deconvolute complex electropherograms in seconds with reproducible likelihood ratios (LR).',
      keyAlgorithms: [
        'Bayesian Markov Chain Monte Carlo (MCMC)',
        'Convolutional Electropherogram Peak Classifiers',
        'Stutter Artifact Filtering Neural Networks',
        'Kinship Linkage Graph Neural Networks (GNN)'
      ],
      impactMetric: '14x faster mixture interpretation with zero human cognitive bias'
    },
    laboratoryWorkflow: [
      { step: '01', title: 'Evidence Swabbing & Lysis', desc: 'Cellular membrane breakdown to extract raw genomic DNA.' },
      { step: '02', title: 'PCR Amplification', desc: 'Targeted amplification of 24+ core CODIS STR loci.' },
      { step: '03', title: 'Capillary Electrophoresis', desc: 'Laser fluorometry measures fragment lengths and peak heights.' },
      { step: '04', title: 'AI Allele Calling & LR Scoring', desc: 'Automated peak verification and likelihood ratio calculation against national databases.' }
    ],
    courtroomStandards: 'Meets FBI Quality Assurance Standards (QAS) and Daubert Standard criteria when validated under SWGDAM guidelines.',
    colorAccent: '#00f2fe'
  },
  {
    id: 'fingerprint-analysis',
    name: 'Dactyloscopy & Latent Prints',
    shortName: 'Fingerprint Analysis',
    tagline: 'Automated Minutiae Extraction and Latent Print Diffusion Enhancement',
    category: 'Pattern Evidence',
    iconName: 'Fingerprint',
    badge: 'Sub-pixel Alignment',
    overview:
      'Dactyloscopy relies on the uniqueness and permanence of friction ridge skin on the palmar and plantar surfaces. Friction ridges form during the 10th-17th weeks of gestation and remain unchanged throughout human life except through permanent dermal scarring.',
    locardPrinciple:
      'Natural eccrine, sebaceous, and apocrine secretions leave latent friction ridge patterns on touched substrates, requiring chemical, fluorescent, or physical visual development.',
    aiIntegration: {
      title: 'Generative Latent Ridge Enhancement & Minutiae Auto-Mapping',
      description:
        'Severely degraded latent prints left on textured, curved, or contaminated surfaces often cause AFIS rejection. Deep convolutional autoencoders and diffusion-based image restorer networks reconstruct ridge continuity, filter background noise, and identify Level 1 (pattern), Level 2 (bifurcations/islands), and Level 3 (sweat pores) minutiae.',
      keyAlgorithms: [
        'Spatial Transformer Networks for Distortion Correction',
        'ResNet-based Minutiae Feature Extractors',
        'Generative Adversarial Inpainting for Smudged Ridge Flow',
        'Graph Matching Minutiae Topology Networks'
      ],
      impactMetric: '96.2% latent retrieval rate on textured and porous backgrounds'
    },
    laboratoryWorkflow: [
      { step: '01', title: 'Development & Cyanoacrylate Fuming', desc: 'Superglue vaporization cross-links amino acids on non-porous exhibits.' },
      { step: '02', title: 'High-Res Multi-Spectral Imaging', desc: 'Forensic light source (450nm-532nm) excitation and polarized capture.' },
      { step: '03', title: 'AI Ridge Enhancement', desc: 'Neural filtering removes substrate textures, fabric weaves, and grain noise.' },
      { step: '04', title: 'ACE-V Expert Verification', desc: 'AI-assisted Analysis, Comparison, Evaluation, and Verification protocol.' }
    ],
    courtroomStandards: 'Supports OSAC friction ridge standard methodologies with transparent audit logs of AI visual filters.',
    colorAccent: '#38bdf8'
  },
  {
    id: 'digital-forensics',
    name: 'Digital & Multimedia Forensics',
    shortName: 'Digital Forensics',
    tagline: 'Memory Carving, Anti-Forensic Detection, and Automated Log Correlation',
    category: 'Cyber & Information Security',
    iconName: 'Cpu',
    badge: 'ISO/IEC 27037 Compliant',
    overview:
      'Digital forensics encompasses the recovery, forensic disk imaging, volatile RAM preservation, and cryptographically verified examination of electronic evidence across PCs, mobile devices, IoT hardware, drone telemetry, and cloud storage systems.',
    locardPrinciple:
      'Every digital transaction leaves timestamps, NTFS master file table records, volatile heap allocations, registry updates, or network packet traces.',
    aiIntegration: {
      title: 'Neural Log Triaging, Anomaly Carving & Deepfake Audio/Video Detection',
      description:
        'Investigating terabyte-scale digital drives involves millions of unindexed files. Natural Language Processing (NLP) models cluster chat logs and parse encrypted artifacts, while deep vision transformers detect steganography, digital tampering, splice boundaries, and synthetic media artifacts.',
      keyAlgorithms: [
        'Bidirectional Encoder Transformers (BERT) for Log Semantics',
        'Frequency Domain Spatial Frequency CNNs for Steganalysis',
        'LSTM Sequence Models for User Event Timelining',
        'Ensemble Deepfake Detectors (Artifact & Blink Analysis)'
      ],
      impactMetric: '92% reduction in initial forensic triage time across multi-TB media'
    },
    laboratoryWorkflow: [
      { step: '01', title: 'Cryptographic Preservation', desc: 'Hardware write-blocker imaging generating SHA-256 and MD5 bit-stream verification.' },
      { step: '02', title: 'Volatile RAM Drip Analysis', desc: 'Extraction of plaintext keys, decrypted buffers, and active sockets from memory.' },
      { step: '03', title: 'AI Event Triaging & Clustering', desc: 'Machine learning grouping of billions of system log entries into causal anomaly chains.' },
      { step: '04', title: 'Artifact Presentation & Timelining', desc: 'Structured timeline generation mapping suspect actions down to nanosecond precision.' }
    ],
    courtroomStandards: 'Adheres to NIST SP 800-86 and RFC 3227 order of volatility for strict legal admissibility.',
    colorAccent: '#06b6d4'
  },
  {
    id: 'forensic-toxicology',
    name: 'Forensic Toxicology & Chemical Profiling',
    shortName: 'Forensic Toxicology',
    tagline: 'GC-MS / LC-MS/MS Spectral Library Matching and NPS Screening',
    category: 'Chemical Pathology',
    iconName: 'FlaskConical',
    badge: 'Sub-picogram Detection',
    overview:
      'Forensic toxicology identifies foreign chemical substances, illicit narcotics, therapeutic drugs, synthetic poisons, alcohol, and volatile inhalants in biological matrices (blood, vitreous humor, liver tissue, hair) to determine cause of death or human impairment.',
    locardPrinciple:
      'Xenobiotics ingested, inhaled, or injected are metabolized by liver enzymes and distributed throughout organ tissues, leaving distinct metabolic finger-prints.',
    aiIntegration: {
      title: 'AI Mass Spectrometry Deconvolution for Designer Drugs & Synthetic Poisons',
      description:
        'Clandestine chemists continually alter molecular backbones to produce Novel Psychoactive Substances (NPS) missing from standard spectral reference databases. Deep graph neural networks predict fragmentation patterns directly from chemical SMILES structures, enabling identification of never-before-seen designer compounds.',
      keyAlgorithms: [
        'Graph Convolutional Networks (GCN) for Molecular Fragmentation',
        'LC-MS Retention Time Predictive Regressors',
        'Deconvolution of Co-Eluting Chromatographic Peaks',
        'Automated Pharmacokinetic Metabolite Simulation'
      ],
      impactMetric: 'Identifies novel synthetic analog variants before official library indexing'
    },
    laboratoryWorkflow: [
      { step: '01', title: 'Matrix Homogenization & SPE', desc: 'Solid-Phase Extraction separates target xenobiotics from complex biological lipids.' },
      { step: '02', title: 'Chromatographic Separation', desc: 'UPLC/HPLC separates compounds based on polarity and molecular weight.' },
      { step: '03', title: 'Tandem Mass Spectrometry (MS/MS)', desc: 'Collision-induced dissociation breaks molecules into ion diagnostic fragments.' },
      { step: '04', title: 'Neural Spectral Identification', desc: 'AI compares fragmented mass-to-charge ratios (m/z) and quantifies toxic levels.' }
    ],
    courtroomStandards: 'Compliant with SOFT/AAFS Guidelines for Forensic Toxicology Laboratory Practices.',
    colorAccent: '#22d3ee'
  },
  {
    id: 'ballistics-toolmarks',
    name: 'Forensic Ballistics & Toolmark Identification',
    shortName: 'Ballistics & Toolmarks',
    tagline: '3D Topographical Surface Metrology and Breech Face Striation Matching',
    category: 'Physical Examination',
    iconName: 'Target',
    badge: 'Micron-Level 3D Profiling',
    overview:
      'Forensic ballistics examines firearms, discharged cartridge cases, fired bullets, and projectile trajectory physics. Firearm barrel rifling (lands and grooves) and manufacturing tooling leave microscopic striations and impression marks unique to an individual firearm mechanism.',
    locardPrinciple:
      'High pressure combustion forces soft copper/lead against hardened steel rifling, engraving microscopic structural toolmarks onto bullets and cartridge primers.',
    aiIntegration: {
      title: 'Siamese Convolutional Networks for 3D Micro-Topography Striation Verification',
      description:
        'Traditional comparison microscopes rely solely on subjective visual 2D side-by-side matching by examiners. Confocal microscopy coupled with Siamese deep neural networks captures 3D digital elevation models of firing pin impressions and breech face marks, calculating mathematically objective Congruent Matching Cells (CMC).',
      keyAlgorithms: [
        'Siamese Metric Learning for Twin Impression Comparison',
        '3D Surface Topography Area De-trending and Filtering',
        'Congruent Matching Cell (CMC) Algorithmic Verification',
        'Trajectory Reconstruction via 3D Point-Cloud Raytracing'
      ],
      impactMetric: '99.1% objective true-positive firearm linkage score with zero observer fatigue'
    },
    laboratoryWorkflow: [
      { step: '01', title: 'Ammunition Classification & Caliber Check', desc: 'Physical gauge check, primer composition, headstamp stamping documentation.' },
      { step: '02', title: '3D Confocal Surface Scanning', desc: 'Optical profilometry measures striation depth profiles at sub-micron resolution.' },
      { step: '03', title: 'Algorithmic Feature Alignment', desc: 'AI model rotates and aligns breech face shear marks to isolate unique toolmarks.' },
      { step: '04', title: 'Objective Statistical Match Reporting', desc: 'Likelihood ratio report mapping striation congruence against firearm test fires.' }
    ],
    courtroomStandards: 'Meets PCAST guidelines for objective quantitative firearm examination methodologies.',
    colorAccent: '#38bdf8'
  }
];

