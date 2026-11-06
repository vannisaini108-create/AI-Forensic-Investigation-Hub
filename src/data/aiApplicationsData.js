// AI Paradigms and Applications in Forensic Science
export const aiParadigms = [
  {
    id: 'computer-vision',
    title: 'Computer Vision & Deep Feature Extraction',
    subtitle: 'Convolutional neural networks for sub-millimeter pattern verification',
    icon: 'Eye',
    description:
      'Computer vision algorithms automate the micro-topographical mapping of friction ridge minutiae, footwear sole wear tread patterns, tire impression tread designs, and cartridge casing breech-face marks. Vision Transformers (ViTs) detect structural anomalies beyond the optical resolution limits of the human eye.',
    capabilities: [
      'Latent fingerprint restoration from noisy/smudged surfaces',
      'Automated footwear wear-and-tear defect tracking (RAC: Random Acquired Characteristics)',
      '3D ballistic striation curvature registration and cross-matching',
      'Bloodstain Pattern Analysis (BPA) trajectory & impact angle calculation'
    ],
    technicalArchitecture: 'ResNet-101 + Vision Transformers (ViT) with spatial attention maps',
    legalConsideration: 'Grad-CAM visual heatmaps provide transparent visual audit trails for courtroom jurors.'
  },
  {
    id: 'nlp-stylometry',
    title: 'Natural Language Processing & Forensic Stylometry',
    subtitle: 'Linguistic authorship attribution and automated cyber investigation',
    icon: 'FileCode2',
    description:
      'NLP models parse millions of unstructured text records—including darknet marketplace posts, phishing emails, extortion letters, and encrypted messaging logs. Forensic stylometry evaluates lexical richness, syntactic n-grams, punctuation frequencies, and syntactic cadence to identify anonymous authors.',
    capabilities: [
      'Authorship attribution across anonymous extortion and threat communications',
      'Entity-relation extraction across multi-gigabyte forensic chat extractions',
      'Automated semantic categorization of dark web illicit transaction logs',
      'Sentiment, urgency, and coercion indicators in digital evidence files'
    ],
    technicalArchitecture: 'Fine-tuned RoBERTa & Forensic-BERT embeddings with Stylometric Classifiers',
    legalConsideration: 'Confidence intervals accompanied by baseline corpus calibration matrices.'
  },
  {
    id: 'generative-reconstruction',
    title: '3D Crime Scene Reconstruction & Neural Modeling',
    subtitle: 'Spatial photogrammetry, trajectory physics, and post-mortem facial approximation',
    icon: 'Boxes',
    description:
      'Spatial AI and Neural Radiance Fields (NeRFs) reconstruct complete 3D immersive digital twins of crime scenes from aerial drone scans, laser LiDAR clouds, and standard responder bodycam footage. Trajectory models simulate bullet paths, acoustic reverberations, and line-of-sight visual fields.',
    capabilities: [
      'Interactive 3D digital crime scene flythroughs for trial presentation',
      'Neural cranial facial reconstruction from degraded skeletal remains',
      'Acoustic gunfire triangulation & multi-microphone echo cancellation',
      'Line-of-sight and witness vantage point optical validation'
    ],
    technicalArchitecture: 'NeRF (Neural Radiance Fields) + Gaussian Splatting + Rigid Body Physics Engines',
    legalConsideration: 'Preservation of raw photogrammetric spatial metadata without speculative hallucination.'
  },
  {
    id: 'deepfake-detection',
    title: 'Synthetic Media & Deepfake Forensic Authentication',
    subtitle: 'Multi-spectral biometric and temporal frequency verification of digital audio/video',
    icon: 'ShieldCheck',
    description:
      'As generative AI enables convincing deepfake video and cloned audio evidence, forensic multimedia specialists utilize temporal frequency analysis, biological pulse signal estimation (photoplethysmography / rPPG), and synthetic artifact detection to authenticate court-submitted recordings.',
    capabilities: [
      'Remote blood pulse (rPPG) detection in face pixels to verify biological authenticity',
      'Spectral phoneme transition analysis for voice clone and audio splice detection',
      'Color filter array (CFA) and PRNU sensor noise fingerprint matching',
      'Frame-to-frame optical flow consistency checks'
    ],
    technicalArchitecture: 'Dual-stream Spatio-Temporal CNNs + Bio-Signal rPPG Extractors',
    legalConsideration: 'Adheres to Scientific Working Group on Digital Evidence (SWGDE) video standards.'
  },
  {
    id: 'explainable-ai',
    title: 'Explainable AI (XAI) & Legal Admissibility',
    subtitle: 'Bridging the Daubert & Frye legal standards with transparent decision trees',
    icon: 'Scale',
    description:
      'For AI findings to withstand cross-examination in court, "black box" models are strictly impermissible. Forensic XAI leverages SHAP (Shapley Additive Explanations), LIME, and mathematical confidence bounds so certified examiners can articulate exactly why the algorithm made each determination.',
    capabilities: [
      'SHAP & LIME feature importance breakdowns for each evidence match',
      'Known error rates (FAR/FRR) and validation test set metrics',
      'Cryptographic provenance and model versioning tracking in chain of custody',
      'Daubert standard compliance dossiers generated alongside forensic reports'
    ],
    technicalArchitecture: 'Surrogate interpretable models + SHAP game-theoretic value estimators',
    legalConsideration: 'Eliminates proprietary black-box barriers; enables full defense cross-examination.'
  }
];

export const comparisonMatrix = [
  {
    metric: 'Analysis Speed',
    traditional: 'Days to weeks for complex mixtures and high-volume media',
    aiAssisted: 'Seconds to minutes for automated triage and probabilistic modeling',
    advantage: 'AI: 95% reduction in evidence backlogs'
  },
  {
    metric: 'Cognitive & Confirmation Bias',
    traditional: 'Susceptible to context bias, fatigue, and circular comparison',
    aiAssisted: 'Blind, standardized algorithmic evaluation against objective thresholds',
    advantage: 'AI: Eliminates confirmation bias when properly calibrated'
  },
  {
    metric: 'Complex Multi-source Mixtures',
    traditional: 'High rate of "inconclusive" calls on 3+ contributor samples',
    aiAssisted: 'Deconvolutes 4-5 contributor mixtures with verifiable likelihood ratios',
    advantage: 'AI: Resolves previously unsolvable cold case samples'
  },
  {
    metric: 'Evidence Scalability',
    traditional: 'Linear examiner hours required for each additional gigabyte/sample',
    aiAssisted: 'Processes multi-terabyte drives or millions of database queries concurrently',
    advantage: 'AI: Handles modern digital scale effortlessly'
  },
  {
    metric: 'Mathematical Reproducibility',
    traditional: 'Qualitative terminology ("consistent with", "similar in all respects")',
    aiAssisted: 'Quantitative statistical likelihood ratios (LR) and calibrated error bounds',
    advantage: 'AI: Standardized numerical certainty metrics'
  },
  {
    metric: 'Human Oversight Role',
    traditional: 'Examiner is the sole analyzer and decision maker',
    aiAssisted: 'Examiner acts as supervisor, auditor, and ultimate expert witness',
    advantage: 'Symbiotic: Human expertise verified by AI precision'
  }
];

