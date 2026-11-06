// Fictional Forensic Case Studies Demonstrating AI Investigations
export const caseStudies = [
  {
    id: 'case-01-operation-silent-strand',
    caseNumber: 'CASE-2024-FS-819',
    title: 'Operation Silent Strand: The 15-Year Cold Case Genetic Deconvolution',
    discipline: 'Forensic DNA Profiling',
    disciplineBadge: 'Biological Forensics',
    dateResolved: 'October 2024',
    jurisdiction: 'Metro Criminalistics Division',
    status: 'Conviction Secured',
    leadInvestigator: 'Dr. Evelyn Vance & Det. Marcus Kane',
    aiModelUsed: 'DeepSTR-MCMC Neural Genotyping Engine',
    brief:
      'In a 2009 cold case commercial burglary and physical assault, forensic technicians collected a minute touch DNA sample from an interior door handle. Traditional capillary electrophoresis produced an unresolvable 4-person mixed electropherogram with severe allelic dropout, leaving the case frozen for 15 years.',
    challenge:
      'The sample had only 0.028 ng/µL of degraded template DNA. Manual interpretation was impossible due to severe stutter artifacts overlapping true minor alleles. Two previous laboratories classified the sample as "inconclusive".',
    aiBreakthrough:
      'Using DeepSTR-MCMC, the AI model deconvoluted the raw fluorescent peak height ratios across 24 STR loci. The network isolated the unknown primary perpetrator profile with a Likelihood Ratio (LR) of 1.84 × 10¹⁸, filtering false stutter peaks that had misdirected human analysts.',
    outcome:
      'The deconvoluted genetic profile matched a national offender database hit. The suspect was apprehended, confronted with the statistical weight of the AI evidence, and entered a guilty plea.',
    timeline: [
      { year: '2009', event: 'Initial offense; touch DNA gathered from latch; deemed unresolvable 4-person mix.' },
      { year: '2016', event: 'First manual review; sample declared inconclusive due to low template mass.' },
      { year: '2024-03', event: 'Evidence resubmitted for AI neural deconvolution under cold case grant.' },
      { year: '2024-06', event: 'AI engine isolates primary contributor profile; CODIS database search matches suspect.' },
      { year: '2024-10', event: 'Judicial admissibility hearing accepts MCMC validation; suspect pleads guilty.' }
    ],
    evidenceItems: ['EVD-2024-STR-904', 'EVD-COLD-2009-LATCH', 'EVD-REF-SUSPECT-819'],
    juridicalValidation:
      'Pre-trial Daubert hearing affirmed the neural network’s error rate and training corpus peer reviews. All source code algorithms were made accessible to the defense under court protective order.'
  },
  {
    id: 'case-02-phantom-ledger',
    caseNumber: 'CASE-2024-DF-402',
    title: 'The Phantom Ledger: Carving Ephemeral Keys from Volatile Memory',
    discipline: 'Digital & Multimedia Forensics',
    disciplineBadge: 'Cyber Forensics',
    dateResolved: 'November 2024',
    jurisdiction: 'Financial Cyber Crimes Taskforce',
    status: 'Assets Seized & Indictment',
    leadInvestigator: 'Aria Kovacs & Agent Tyler Ross',
    aiModelUsed: 'VolatiliX Neural Heap Sieve & LogTransformer',
    brief:
      'An international cyber-syndicate deployed memory-only ransomware targeting municipal hospital infrastructure, demanding $8.5 million in cryptocurrency. The malware operated entirely in RAM without dropping identifiable executables to the local disk.',
    challenge:
      'Investigators had a narrow window of under 12 minutes before defensive system watchdog timers initiated volatile RAM zeroization. Conventional forensic keyword carving failed against polymorphically encrypted runtime strings.',
    aiBreakthrough:
      'The VolatiliX deep learning memory sieve parsed 64GB of live RAM within 4.2 seconds. It detected unindexed thread execution anomalies, extracted a symmetric 256-bit AES-XTS master decryption key, and reconstructed memory buffers containing live command-and-control IP addresses.',
    outcome:
      'The extracted master key enabled instant decryption of hospital patient databases without paying ransom. Extracted server logs enabled law enforcement to seize offshore cryptocurrency wallet infrastructure holding $14.2 million in illicit assets.',
    timeline: [
      { year: '00:00:00', event: 'Hospital ICU triage servers alert anomalous memory spike.' },
      { year: '00:04:12', event: 'Incident response team attaches hardware memory capture probe.' },
      { year: '00:06:15', event: 'VolatiliX AI initiates deep neural parsing of 64GB volatile RAM dump.' },
      { year: '00:06:19', event: 'AES-XTS master key extracted; hollow thread injection mapped.' },
      { year: '00:18:00', event: 'All encrypted hospital databases successfully decrypted without ransom.' }
    ],
    evidenceItems: ['EVD-4091-DIGITAL-RAM', 'EVD-NET-PCAP-4812', 'EVD-WALLET-LEDGER'],
    juridicalValidation:
      'Chain of custody cryptographically sealed with SHA-256 and Ed25519 signatures. NIST CFTT standard certification presented to the Grand Jury.'
  },
  {
    id: 'case-03-cold-harbor-ballistics',
    caseNumber: 'CASE-2024-BL-671',
    title: 'Cold Harbor Ballistics: 3D Topographical Cartridge Casing Linkage',
    discipline: 'Forensic Ballistics & Toolmark Identification',
    disciplineBadge: 'Physical Forensics',
    dateResolved: 'August 2024',
    jurisdiction: 'State Bureau of Forensic Investigation',
    status: 'Court Conviction (Life Sentence)',
    leadInvestigator: 'Marcus Chen, Forensic Ballistician',
    aiModelUsed: 'BallistiScan Siamese Topography CNN',
    brief:
      'Three seemingly unrelated drive-by shootings occurred across multiple counties over an 18-month span. Multiple spent 9mm cartridge casings were collected from each crime scene, but physical distance and differing jurisdiction backlogs prevented manual comparison.',
    challenge:
      'Optical microscopy was hindered by severe corrosion, dirt fouling, and slight weapon wear between the first and last incidents, which altered secondary breech face marks and misled initial visual examiners.',
    aiBreakthrough:
      'BallistiScan captured 3D confocal elevation maps at 0.05-micron resolution across all recovered casings. The Siamese neural network applied Congruent Matching Cell (CMC) algorithms, mathematically proving that firing pin indentation depth profiles and aperture shearing shared identical micro-toolmarks across all 3 incidents.',
    outcome:
      'The quantitative 3D matching linked all three crime scenes to a single weapon recovered during an unrelated traffic stop. Ballistics AI presented clear 3D topographical overlays to jurors, culminating in a first-degree murder conviction.',
    timeline: [
      { year: '2023-01', event: 'First incident; two 9mm casings collected at Harbor Point.' },
      { year: '2023-09', event: 'Second incident; five 9mm casings collected at West District.' },
      { year: '2024-05', event: 'Suspect firearm recovered during highway patrol interdiction.' },
      { year: '2024-07', event: '3D confocal scanning & Siamese network linkage connects all 3 events.' },
      { year: '2024-08', event: 'Jury delivers unanimous guilty verdict based on 3D topographical evidence.' }
    ],
    evidenceItems: ['EVD-8812-BALLISTIC', 'EVD-HARBOR-CASING-01', 'EVD-FIREARM-GLOCK19'],
    juridicalValidation:
      'Adhered strictly to PCAST guidelines requiring objective numerical matching cell criteria instead of subjective examiner visual opinion.'
  },
  {
    id: 'case-04-spectral-toxin-enigma',
    caseNumber: 'CASE-2024-TX-911',
    title: 'The Spectral Toxin Enigma: Identifying a Novel Synthetic Opioid Analog',
    discipline: 'Forensic Toxicology & Chemical Profiling',
    disciplineBadge: 'Toxicology & Chemistry',
    dateResolved: 'September 2024',
    jurisdiction: 'Forensic Toxicology State Central Lab',
    status: 'Public Health Warning & Prosecution',
    leadInvestigator: 'Dr. Soraya Malik, Chief Toxicologist',
    aiModelUsed: 'SpectraNet Molecular Graph Transformer',
    brief:
      'Four sudden fatal overdoses occurred within a 48-hour period in an urban district. Standard hospital tox screens and routine GC-MS forensic toxicology libraries returned negative results for all known opioids, benzodiazepines, and illicit drugs.',
    challenge:
      'The substance had been synthesized specifically to evade scheduled substance molecular definitions and mass spectrometer reference libraries by substituting a fluorinated phenyl ring.',
    aiBreakthrough:
      'SpectraNet analyzed raw tandem mass spectrometry (LC-MS/MS) fragmentation spectra. Utilizing graph neural network molecular fragmentation prediction, the AI back-calculated the chemical structure of the novel compound in under 9 minutes, identifying it as 2-fluoro-ortho-methylfentanyl.',
    outcome:
      'Immediate emergency toxicology bulletins were dispatched to regional trauma centers, saving numerous subsequent overdose victims with targeted naloxone titration. The clandestine synthesis lab was located and shuttered.',
    timeline: [
      { year: 'Day 1 (08:00)', event: 'Four unexplained fatalities reported; routine drug screens negative.' },
      { year: 'Day 1 (14:30)', event: 'Post-mortem blood specimens prepared for high-resolution LC-MS/MS.' },
      { year: 'Day 1 (16:15)', event: 'SpectraNet deconvolution predicts novel synthetic opioid molecular formula.' },
      { year: 'Day 1 (18:00)', event: 'Hospital clinical alert issued; antidote dosing guidelines distributed.' },
      { year: 'Day 14', event: 'Clandestine chemical synthesis lab raided; compound inventory matched.' }
    ],
    evidenceItems: ['EVD-5594-TOX-SERUM', 'EVD-LAB-POWDER-09', 'EVD-PRECURSOR-DRUM'],
    juridicalValidation:
      'Structural NMR (Nuclear Magnetic Resonance) spectroscopy verified the AI-predicted chemical structure with 100% molecular fidelity.'
  },
  {
    id: 'case-05-echoes-latent-recovery',
    caseNumber: 'CASE-2024-FP-119',
    title: 'Echoes of the Glade: Partial Latent Recovery from Burned Vehicle Glass',
    discipline: 'Dactyloscopy & Latent Prints',
    disciplineBadge: 'Pattern Forensics',
    dateResolved: 'July 2024',
    jurisdiction: 'Special Arson & Homicide Taskforce',
    status: 'Arrest & Awaiting Trial',
    leadInvestigator: 'Det. Samuel Thorne & Sarah Jenkins',
    aiModelUsed: 'LatentDiffuser Generative Minutiae Network',
    brief:
      'A luxury vehicle was deliberately set ablaze inside a forest clearing to destroy physical evidence of an executive kidnapping. Crime scene technicians discovered a tiny partial fingerprint deposit on a partially shielded fragment of tempered quarter-glass.',
    challenge:
      'Severe soot carbon deposition, thermal micro-fracturing of the glass substrate, and soot binder interaction obscured 70% of the friction ridge detail. Human examiners rated the latent print as "non-viable for AFIS search".',
    aiBreakthrough:
      'LatentDiffuser combined multi-spectral ultraviolet fluorescence photography with a deep generative diffusion model. The algorithm isolated the carbon soot emission wavelength and enhanced the underlying friction ridge contrast, recovering 16 verifiable Level-2 minutiae without hallucinating nonexistent features.',
    outcome:
      'The enhanced latent print matched the right index finger of a former security contractor. When presented with the forensic evidence reconstruction, the suspect revealed the location of the hostage, who was rescued unharmed.',
    timeline: [
      { year: 'Day 0', event: 'Burned vehicle located; soot-covered glass fragment recovered from chassis.' },
      { year: 'Day 2', event: 'Initial laboratory assessment rates latent print unviable due to severe thermal soot.' },
      { year: 'Day 3', event: 'Multi-spectral UV imaging and LatentDiffuser neural filtering applied.' },
      { year: 'Day 4', event: '16 Level-2 minutiae extracted; AFIS returns direct suspect identity.' },
      { year: 'Day 5', event: 'Hostage successfully recovered; kidnapping charges filed.' }
    ],
    evidenceItems: ['EVD-3170-LATENT', 'EVD-GLASS-SHARD-ARSON', 'EVD-ACCELERANT-TRACE'],
    juridicalValidation:
      'Independent double-blind peer verification conducted by two IAI-certified latent print examiners.'
  },
  {
    id: 'case-06-ghostdrive-steganography',
    caseNumber: 'CASE-2024-CY-339',
    title: 'Project GhostDrive: Steganographic Firmware in Industrial Espionage',
    discipline: 'Digital & Multimedia Forensics',
    disciplineBadge: 'Cyber Forensics',
    dateResolved: 'December 2024',
    jurisdiction: 'Federal Counter-Espionage Division',
    status: 'Indictment & Patent Recovery',
    leadInvestigator: 'Aria Kovacs & Special Agent Vance',
    aiModelUsed: 'StegoTransformer & Entropy Boundary Classifier',
    brief:
      'Blueprints for a next-generation solid-state battery were stolen from a clean-energy laboratory. Despite strict network air-gapping and USB drive prohibitions, proprietary schematics leaked online.',
    challenge:
      'Inspections of all employee laptops, corporate network gateways, and storage media showed no unauthorized file transfers or cloud uploads. The exfiltration vector appeared non-existent.',
    aiBreakthrough:
      'StegoTransformer scanned the micro-controller firmware of IoT environmental sensors installed in the laboratory. The AI discovered that an employee had modified the firmware image, steganographically embedding 450MB of compressed CAD vector blueprints inside the least significant bits (LSB) of temperature sensor calibration tables.',
    outcome:
      'The suspect was identified through physical badge access logs correlating with sensor firmware update timestamps. The proprietary patents were recovered before commercial exploitation.',
    timeline: [
      { year: '2024-04', event: 'Proprietary solid-state battery schematics appear on foreign research forum.' },
      { year: '2024-05', event: 'Air-gapped network audit finds zero digital egress logs or USB connections.' },
      { year: '2024-07', event: 'AI steganography scan detects high-entropy micro-firmware payload in IoT sensors.' },
      { year: '2024-08', event: 'StegoTransformer extracts 450MB CAD schematics from calibration arrays.' },
      { year: '2024-12', event: 'Federal indictment handed down for economic espionage.' }
    ],
    evidenceItems: ['EVD-7102-STEG-DRONE', 'EVD-IOT-SENSOR-BOARD', 'EVD-CAD-SCHEMATICS'],
    juridicalValidation:
      'Bit-exact cryptographic reconstruction confirmed original vector file MD5 and SHA-256 hashes.'
  }
];

