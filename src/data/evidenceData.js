// Realistic Fictional Evidence Library Dataset for Educational Assessment
export const evidenceCatalog = [
  {
    id: 'EVD-2024-STR-904',
    title: 'Touch DNA Swab - Glass Fracture Fragment',
    category: 'Biological & DNA',
    disciplineId: 'dna-analysis',
    dateAcquired: '2024-09-12 22:45 UTC',
    analyst: 'Dr. Evelyn Vance, Forensic Geneticist',
    labLocation: 'Forensic Biology Lab 3 (Clean Room A)',
    chainOfCustodyHash: 'SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069',
    custodyStatus: 'Sealed & Verified in Evidence Lockbox',
    aiConfidence: 99.8,
    status: 'Verified Match',
    thumbnailType: 'dna',
    tags: ['STR Multiplex', 'Low Copy DNA', 'PCR Amplified', 'CODIS Hit'],
    summary:
      'Trace epithelial cells swabbed from the interior fractured edge of an entry window frame. AI deconvolution resolved a 3-person mixed electropherogram identifying the primary contributor.',
    specifications: {
      instrument: 'Applied Biosystems 3500xl Genetic Analyzer',
      kitUsed: 'GlobalFiler™ PCR Amplification Kit (24 Loci)',
      dnaConcentration: '0.042 ng/µL (Low-Template DNA)',
      profileQualityIndex: 'High peak-to-noise ratio post-neural artifact de-stuttering'
    },
    aiFindings: [
      'Deconvoluted 3 distinct contributors: Contributor 1 (82% ratio), Contributor 2 (14%), Contributor 3 (4%).',
      'Likelihood Ratio (LR): 1.42 × 10¹⁸ in favor of match with Reference Sample REF-819.',
      'Identified and corrected 4 minus-stutter artifacts at D13S317 and vWA loci without false positive alleles.'
    ],
    technicalMetrics: [
      { label: 'Allelic Peak Precision', value: '99.8%' },
      { label: 'Electropherogram Resolution', value: '0.15 bp' },
      { label: 'Likelihood Ratio (LR)', value: '> 10¹⁸' },
      { label: 'Stutter Artifact Reduction', value: '94.2%' }
    ],
    simulatedData: {
      type: 'electropherogram',
      peaks: [
        { locus: 'D3S1358', allele1: '15', allele2: '17', rfu1: 1840, rfu2: 1790 },
        { locus: 'vWA', allele1: '16', allele2: '19', rfu1: 2100, rfu2: 2040 },
        { locus: 'D16S539', allele1: '9', allele2: '11', rfu1: 1650, rfu2: 1590 },
        { locus: 'CSF1PO', allele1: '10', allele2: '12', rfu1: 1420, rfu2: 1390 },
        { locus: 'Amelogenin', allele1: 'X', allele2: 'Y', rfu1: 2450, rfu2: 2380 }
      ]
    },
    courtroomAdmissibility: 'Full compliance with SWGDAM guidelines. Accepted under Federal Rule of Evidence 702.'
  },
  {
    id: 'EVD-8812-BALLISTIC',
    title: 'Fired 9mm Luger Brass Cartridge Casing',
    category: 'Ballistics & Toolmarks',
    disciplineId: 'ballistics-toolmarks',
    dateAcquired: '2024-10-04 03:15 UTC',
    analyst: 'Marcus Chen, Lead Ballistics Specialist',
    labLocation: 'Ballistics Optical Profilometry Unit',
    chainOfCustodyHash: 'SHA-256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    custodyStatus: 'Archived in Secure Armory Safe',
    aiConfidence: 98.4,
    status: 'Verified Match',
    thumbnailType: 'ballistics',
    tags: ['Breech Face Mark', 'Firing Pin Impression', '3D Topography', 'CMC Confirmed'],
    summary:
      'Discharged 9×19mm Parabellum casing recovered from asphalt. 3D confocal scanning registered microscopic breech face toolmarks matching a confiscated Glock 19 semi-automatic pistol.',
    specifications: {
      instrument: 'Sensofar 3D Confocal Optical Profiler',
      magnification: '50x sub-micron interferometric scan',
      surfaceAreaScanned: '2.4mm × 2.4mm breech face aperture',
      calibratedStandard: 'NIST Golden Standard Cartridge Casing SRM 2460'
    },
    aiFindings: [
      'Siamese neural network registered 28 Congruent Matching Cells (CMC) exceeding the 18-cell definitive threshold.',
      'Cross-correlation function (CCF) max peak: 0.941 across circular breech face striation marks.',
      'Aperture shear impression angle measured at 14.8° congruent with ejector geometry.'
    ],
    technicalMetrics: [
      { label: 'Congruent Matching Cells', value: '28 / 32 cells' },
      { label: '3D Cross Correlation (CCF)', value: '0.941' },
      { label: 'Surface Height Resolution', value: '0.05 µm' },
      { label: 'False Positive Risk', value: '< 1 in 100,000' }
    ],
    simulatedData: {
      type: 'striationProfile',
      striations: [
        { offset: '0.2mm', depth: '-1.4µm', match: true },
        { offset: '0.5mm', depth: '+2.8µm', match: true },
        { offset: '0.8mm', depth: '-0.9µm', match: true },
        { offset: '1.2mm', depth: '+3.4µm', match: true },
        { offset: '1.6mm', depth: '-2.1µm', match: true },
        { offset: '2.0mm', depth: '+1.7µm', match: true }
      ]
    },
    courtroomAdmissibility: 'Meets PCAST standards for quantitative 3D topographical validation in firearms forensics.'
  },
  {
    id: 'EVD-4091-DIGITAL-RAM',
    title: 'Volatile RAM Dump - Encrypted Workstation',
    category: 'Digital & Cyber',
    disciplineId: 'digital-forensics',
    dateAcquired: '2024-10-18 11:20 UTC',
    analyst: 'Aria Kovacs, Digital Forensics Examiner',
    labLocation: 'Air-Gapped Cyber Incident Response Lab',
    chainOfCustodyHash: 'SHA-256: 4a6486638f29d2b27159c3cb3d95ef54c03848b3017a4c7e6008dd52b2260662',
    custodyStatus: 'Preserved on Write-Protected NVMe Archive',
    aiConfidence: 99.2,
    status: 'Verified Match',
    thumbnailType: 'digital',
    tags: ['Memory Carving', 'AES-XTS Key Extraction', 'Unallocated Space', 'Process Injection'],
    summary:
      'Raw 64GB physical memory dump acquired live prior to workstation power-down. AI neural carving extracted active BitLocker Volume Master Keys and recovered volatile Telegram session fragments.',
    specifications: {
      acquisitionTool: 'LiME (Linux Memory Extractor) v1.9 / WinPmem 4.0',
      hashVerification: 'Pre/Post SHA-256 Cryptographic Hash Match',
      entropyRating: '7.89 bits/byte (High cryptographic payload density)',
      targetOS: 'Windows 11 Enterprise (Build 22631)'
    },
    aiFindings: [
      'Isolated injected hollow DLL payload inside svchost.exe (PID 4812) using memory anomaly classifier.',
      'Extracted active 256-bit AES-XTS volume encryption key from unpaged pool memory buffer in 4.2 seconds.',
      'Reconstructed deleted peer-to-peer chat buffer containing cryptocurrency transfer coordinates.'
    ],
    technicalMetrics: [
      { label: 'Volatile Buffer Carved', value: '64.00 GB' },
      { label: 'Entropy Discrepancy', value: 'High (7.89/8.0)' },
      { label: 'Malicious DLL Confidence', value: '99.2%' },
      { label: 'Extraction Time', value: '4.2 seconds' }
    ],
    simulatedData: {
      type: 'memoryMap',
      processes: [
        { pid: '4812', name: 'svchost.exe [INJECTED]', status: 'CRITICAL THREAT', address: '0x7FFE0010' },
        { pid: '1024', name: 'lsass.exe', status: 'AUDITED NORMAL', address: '0x7FFE4520' },
        { pid: '3318', name: 'explorer.exe', status: 'CLEAN', address: '0x7FFEB890' },
        { pid: '7920', name: 'tor.exe [ORPHANED]', status: 'SUSPICIOUS', address: '0x7FFEFA10' }
      ]
    },
    courtroomAdmissibility: 'Forensically verified under ISO/IEC 27037 standards with continuous hardware write-blocking.'
  },
  {
    id: 'EVD-3170-LATENT',
    title: 'Partial Latent Fingerprint - Stainless Steel Vault',
    category: 'Latent Prints',
    disciplineId: 'fingerprint-analysis',
    dateAcquired: '2024-10-22 19:10 UTC',
    analyst: 'Det. Samuel Thorne, Dactyloscopy Specialist',
    labLocation: 'Latent Print Enhancement Facility',
    chainOfCustodyHash: 'SHA-256: 9b2d35a8bc3e414c278c2e64673dbb90ee4e4a9e2d3f74618e478546a36c841f',
    custodyStatus: 'Photogrammetric RAW Image Vaulted',
    aiConfidence: 96.5,
    status: 'Verified Match',
    thumbnailType: 'fingerprint',
    tags: ['Cyanoacrylate Fuming', 'Minutiae Mapping', 'Level 2 Details', 'AFIS Verified'],
    summary:
      'Smudged partial fingerprint developed on brushed stainless steel safe handle. Deep diffusion restoration reconstructed broken ridge continuity, extracting 16 verifiable minutiae points.',
    specifications: {
      developerChemical: 'Cyanoacrylate ester + Basic Yellow 40 fluorescent dye',
      lightSource: 'Polilight Forensic Light Source at 450 nm with 530 nm barrier filter',
      minutiaeThreshold: '12-point minimum (16 verified Level-2 minutiae identified)',
      patternType: 'Right Hand Whorl (Double Loop)'
    },
    aiFindings: [
      'Filtered high-specular reflective noise from brushed steel background without altering ridge flow paths.',
      'Identified 9 bifurcations, 5 ridge endings, and 2 independent ridge islands with 99.4% spatial precision.',
      'Query against national fingerprint repository returned single candidate hit with high score.'
    ],
    technicalMetrics: [
      { label: 'Verifiable Minutiae Points', value: '16 points' },
      { label: 'Background Noise Removal', value: '98.1%' },
      { label: 'Spatial Ridge Congruence', value: '96.5%' },
      { label: 'ACE-V Verification Score', value: 'Confirmed' }
    ],
    simulatedData: {
      type: 'minutiaePlot',
      minutiae: [
        { x: 34, y: 45, type: 'Bifurcation', confidence: 0.98 },
        { x: 52, y: 68, type: 'Ridge Ending', confidence: 0.99 },
        { x: 61, y: 32, type: 'Island / Dot', confidence: 0.95 },
        { x: 78, y: 84, type: 'Bifurcation', confidence: 0.97 },
        { x: 44, y: 92, type: 'Ridge Ending', confidence: 0.96 }
      ]
    },
    courtroomAdmissibility: 'Full blind ACE-V verification conducted by two senior fingerprint examiners.'
  },
  {
    id: 'EVD-5594-TOX-SERUM',
    title: 'Post-Mortem Blood Sample - Spectral Deconvolution',
    category: 'Toxicology & Chemical',
    disciplineId: 'forensic-toxicology',
    dateAcquired: '2024-11-01 08:30 UTC',
    analyst: 'Dr. Soraya Malik, Chief Toxicologist',
    labLocation: 'Chromatography & Mass Spectrometry Suite',
    chainOfCustodyHash: 'SHA-256: 12b84f3e9c56209d738f619b03940173e65428a1c97f4e82b79316d2319ef471',
    custodyStatus: 'Stored at -80°C Cryogenic Bio-Vault',
    aiConfidence: 97.9,
    status: 'Verified Match',
    thumbnailType: 'toxicology',
    tags: ['LC-MS/MS', 'Novel Psychoactive Substance', 'Synthetic Opioid', 'Molecular GNN'],
    summary:
      'Peripheral femoral blood specimen subjected to targeted screening. Graph neural network identified a novel fluorinated fentanyl analog absent from commercial mass spectrometry libraries.',
    specifications: {
      instrument: 'Agilent 6495 Triple Quadrupole LC/MS',
      ionSource: 'Electrospray Ionization (ESI) in Positive Mode',
      column: 'Zorbax Eclipse Plus C18 (2.1 × 100 mm, 1.8 µm)',
      internalStandard: 'Deuterated Fentanyl-d5 Internal Reference'
    },
    aiFindings: [
      'Molecular Graph Convolutional Network predicted precursor fragmentation ions m/z 355.21 and 188.14.',
      'Quantified concentration at 8.4 ng/mL, establishing lethal toxicity benchmark.',
      'Excluded 412 non-toxic therapeutic metabolites with 99.9% specificity.'
    ],
    technicalMetrics: [
      { label: 'Precursor Ion m/z', value: '355.21 Da' },
      { label: 'Retention Time (Rt)', value: '4.82 min' },
      { label: 'Quantified Concentration', value: '8.4 ng/mL' },
      { label: 'GNN Prediction Fit', value: '97.9%' }
    ],
    simulatedData: {
      type: 'massSpectrogram',
      peaks: [
        { mz: 105.1, intensity: 45, label: 'Tropylium-like ion' },
        { mz: 188.1, intensity: 100, label: 'Base fragment ion' },
        { mz: 281.2, intensity: 62, label: 'Amide cleavage' },
        { mz: 355.2, intensity: 88, label: 'Protonated precursor [M+H]+' }
      ]
    },
    courtroomAdmissibility: 'Peer-reviewed validation study attached. Complies with SOFT/AAFS toxicology forensic guidelines.'
  },
  {
    id: 'EVD-7102-STEG-DRONE',
    title: 'MicroSD Flash Partition - Autonomous Drone Flight Log',
    category: 'Digital & Cyber',
    disciplineId: 'digital-forensics',
    dateAcquired: '2024-11-03 14:10 UTC',
    analyst: 'Aria Kovacs, Digital Forensics Examiner',
    labLocation: 'Air-Gapped Cyber Incident Response Lab',
    chainOfCustodyHash: 'SHA-256: 62e5188f12a991823901b08914619ef0b812f8649392e6205807963d3e6c0f73',
    custodyStatus: 'Physical Write-Locked Flash Chip in Farady Pouch',
    aiConfidence: 94.8,
    status: 'Neural Reconstruction',
    thumbnailType: 'digital',
    tags: ['Drone Telemetry', 'Steganography', 'GPS Waypoints', 'Spatial Pathfinding'],
    summary:
      'Corrupted flash memory chip extracted from a crashed surveillance drone. Machine learning reconstructed damaged telemetry packets, revealing unlisted clandestine launch coordinates.',
    specifications: {
      storageType: '32GB SanDisk Extreme UHS-I MicroSD',
      fileSystem: 'Raw exFAT with damaged allocation tables',
      signalAnalysis: 'Deep learning bit-level ECC parity reconstruction',
      coordinatePrecision: 'RTK Differential GPS (0.02m accuracy)'
    },
    aiFindings: [
      'Rebuilt 1,420 flight telemetry sentences from fragmented flash pages with 94.8% sequence continuity.',
      'Identified hidden payload: encrypted GeoJSON data steganographically concealed inside firmware JPEG preview thumbnails.',
      'Mapped complete 38-minute flight path including origin take-off point and hover altitude.'
    ],
    technicalMetrics: [
      { label: 'Recovered Flight Duration', value: '38m 14s' },
      { label: 'GPS Coordinates Restored', value: '1,420 pts' },
      { label: 'Steg Detection Confidence', value: '94.8%' },
      { label: 'Packet Integrity Score', value: '99.1%' }
    ],
    simulatedData: {
      type: 'flightPath',
      waypoints: [
        { time: '14:02:10', alt: '120m', speed: '14.2 m/s', event: 'Launch waypoint Alpha' },
        { time: '14:15:32', alt: '85m', speed: '2.1 m/s', event: 'Loiter / Camera survey target' },
        { time: '14:28:44', alt: '110m', speed: '18.4 m/s', event: 'Evasion maneuver recorded' },
        { time: '14:40:24', alt: '0m', speed: '0.0 m/s', event: 'Terminal impact coordinate' }
      ]
    },
    courtroomAdmissibility: 'NIST CFTT (Computer Forensic Tool Testing) validated recovery methodology.'
  },
  {
    id: 'EVD-9420-PAINT-TRACE',
    title: 'Automotive Paint Chip Micro-Layers - Hit-and-Run Vehicle',
    category: 'Trace Evidence',
    disciplineId: 'forensic-toxicology',
    dateAcquired: '2024-11-04 16:50 UTC',
    analyst: 'Dr. Soraya Malik, Chief Toxicologist',
    labLocation: 'Materials & Micro-Spectroscopy Unit',
    chainOfCustodyHash: 'SHA-256: d85a90e38644e590050800b41c09eb2c525f0535384666f4ee5d14df5a230492',
    custodyStatus: 'Vacuum Sealed Micro-Vial in Evidence Cabinet',
    aiConfidence: 98.7,
    status: 'Verified Match',
    thumbnailType: 'toxicology',
    tags: ['FTIR Spectroscopy', 'Pyrolysis GC-MS', 'Automotive Paint Query (PDQ)', 'Layer Stacking'],
    summary:
      'Multi-layer paint flake (clearcoat, basecoat, primer, electrocoat) recovered from a pedestrian collision barrier. FTIR spectra matched against the International Forensic Automotive Paint database.',
    specifications: {
      instrument: 'Thermo Scientific Nicolet iN10 FTIR Microscope',
      samplingMethod: 'Diamond Anvil Micro-Compression Cell',
      layerCount: '4 distinct paint polymer coats measured at 120 µm total thickness',
      spectralRange: '4000 cm⁻¹ to 650 cm⁻¹'
    },
    aiFindings: [
      'Identified acrylic-melamine clearcoat and bismuth vanadate pigment ratio unique to OEM manufacturer batches.',
      'Automated PDQ query narrowed suspect vehicle models to a specific assembly plant production run (2021-2023).',
      'Correlation score against suspect vehicle paint scrapings reached 0.987.'
    ],
    technicalMetrics: [
      { label: 'Layer Thickness Accuracy', value: '±0.5 µm' },
      { label: 'FTIR Spectral Overlap', value: '98.7%' },
      { label: 'Vehicle Model Accuracy', value: 'Top 1 match' },
      { label: 'Binder Polymer Match', value: '100%' }
    ],
    simulatedData: {
      type: 'paintLayers',
      layers: [
        { layer: 'Layer 1: Clearcoat', thickness: '42 µm', composition: 'Polyurethane acrylic resin' },
        { layer: 'Layer 2: Metallic Base', thickness: '18 µm', composition: 'Aluminum flake / Pearl pigment' },
        { layer: 'Layer 3: Primer Surfacer', thickness: '35 µm', composition: 'Epoxy polyester modified' },
        { layer: 'Layer 4: Electrocoat (E-Coat)', thickness: '25 µm', composition: 'Cathodic epoxy phosphate' }
      ]
    },
    courtroomAdmissibility: 'SWGMAT (Scientific Working Group for Materials Analysis) standard guide compliant.'
  },
  {
    id: 'EVD-6022-AUDIO-VOICE',
    title: 'Emergency Dispatch Audio Recording - Forensic Voice Biometrics',
    category: 'Digital & Cyber',
    disciplineId: 'digital-forensics',
    dateAcquired: '2024-11-05 02:40 UTC',
    analyst: 'Aria Kovacs, Digital Forensics Examiner',
    labLocation: 'Acoustic & Audio Authentication Lab',
    chainOfCustodyHash: 'SHA-256: 8c6976e5b5410415bde908bd4dee15dfb167a9c873fc4bb8a81f6f2ab448a918',
    custodyStatus: 'Lossless FLAC Master Archived on Cold Storage',
    aiConfidence: 95.1,
    status: 'Verified Match',
    thumbnailType: 'digital',
    tags: ['Acoustic Formants', 'Deepfake Audio Detection', 'Voiceprint Biometrics', 'rPPG Vocal Tract'],
    summary:
      'High-stress 911 audio call subjected to acoustic forensics. AI verified acoustic authenticity, excluded AI voice cloning, and matched vocal tract formant frequencies against known suspect interviews.',
    specifications: {
      sampleRate: '48 kHz / 24-bit PCM Uncompressed FLAC',
      channelCount: 'Monophonic studio enhancement',
      acousticFeatures: 'MFCCs, Linear Predictive Coding (LPC), Formants F1-F4',
      deepfakeProbability: '0.003 (Authentic human acoustic resonance confirmed)'
    },
    aiFindings: [
      'Confirmed absence of synthetic neural vocoder phase artifacts (DiffWave/HiFi-GAN spectral footprints).',
      'Extracted fundamental frequency (F0 = 124 Hz) with consistent human vocal jitter and shimmer dynamics.',
      'Likelihood Ratio calculated at 480:1 supporting identity hypothesis.'
    ],
    technicalMetrics: [
      { label: 'Synthetic Voice Probability', value: '< 0.3%' },
      { label: 'Formant F1-F3 Alignment', value: '95.1%' },
      { label: 'Signal-to-Noise Ratio (SNR)', value: '+26 dB' },
      { label: 'Acoustic Authenticity Score', value: 'High' }
    ],
    simulatedData: {
      type: 'audioSpectrogram',
      formants: [
        { formant: 'F0 (Pitch)', freq: '124 Hz', deviation: '±4 Hz' },
        { formant: 'F1 (Vocal tract height)', freq: '540 Hz', deviation: '±12 Hz' },
        { formant: 'F2 (Tongue position)', freq: '1720 Hz', deviation: '±25 Hz' },
        { formant: 'F3 (Acoustic sharpness)', freq: '2640 Hz', deviation: '±30 Hz' }
      ]
    },
    courtroomAdmissibility: 'Admitted under International Association for Identification (IAI) acoustic standards.'
  }
];

