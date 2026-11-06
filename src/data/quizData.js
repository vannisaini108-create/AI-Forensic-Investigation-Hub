// Interactive Forensic Science & AI Knowledge Assessment for Assessment-3
export const forensicQuizData = [
  {
    id: 1,
    question: "What core forensic principle is summarized by the aphorism 'Every contact leaves a trace'?",
    discipline: 'General Criminalistics',
    options: [
      { text: "Locard's Exchange Principle", correct: true },
      { text: "The Daubert Admissibility Rule", correct: false },
      { text: "Bertillon Anthropometric Metric", correct: false },
      { text: "The Shannon Entropy Law", correct: false }
    ],
    explanation:
      "Locard's Exchange Principle, formulated by Dr. Edmond Locard in 1910, states that whenever two objects come into contact, physical material is mutually transferred between them. Modern AI algorithms detect and correlate these micro-traces even at picogram or pixel-level thresholds."
  },
  {
    id: 2,
    question: 'How do deep neural networks assist in forensic DNA analysis of complex mixed samples?',
    discipline: 'Biological Forensics',
    options: [
      { text: 'By synthesizing artificial DNA strands inside the laboratory', correct: false },
      { text: 'By deconvoluting overlapping fluorescent peak heights and filtering PCR stutter artifacts', correct: true },
      { text: 'By replacing PCR thermal cycling instruments entirely', correct: false },
      { text: 'By converting DNA base pairs directly into binary machine code without sequencing', correct: false }
    ],
    explanation:
      'AI models analyze electropherogram peak heights, degradation curves, and stutter ratios to separate DNA contributions from 3 or more individuals, outputting mathematically rigorous likelihood ratios (LR).'
  },
  {
    id: 3,
    question: 'What is the primary courtroom legal standard in the United States governing the admissibility of scientific AI methodologies?',
    discipline: 'Forensic Jurisprudence',
    options: [
      { text: 'The Turing Benchmark Protocol', correct: false },
      { text: 'The Daubert Standard (Daubert v. Merrell Dow Pharmaceuticals)', correct: true },
      { text: 'The Moore-Metcalfe Directive', correct: false },
      { text: 'The Bell-LaPadula Security Model', correct: false }
    ],
    explanation:
      'The Daubert Standard requires that scientific methodology possesses empirical testability, peer review and publication, known or potential error rates, maintenance of operational standards, and general acceptance in the relevant scientific community.'
  },
  {
    id: 4,
    question: 'In forensic ballistics, how do Siamese Convolutional Networks improve upon traditional 2D optical comparison microscopes?',
    discipline: 'Ballistics & Toolmarks',
    options: [
      { text: 'They calculate 3D Congruent Matching Cells (CMC) on microscopic breech face striations objectively', correct: true },
      { text: 'They predict the exact velocity of a bullet purely from the color of the casing', correct: false },
      { text: 'They automatically melt down spent cartridges for chemical purity verification', correct: false },
      { text: 'They bypass the need for test-firing the suspect firearm', correct: false }
    ],
    explanation:
      '3D confocal topography combined with Siamese networks divides the surface into microscopic cells and correlates elevation depth profiles, eliminating examiner subjective fatigue and providing quantitative statistical certainty.'
  },
  {
    id: 5,
    question: 'Why are Explainable AI (XAI) techniques like Grad-CAM and SHAP essential for courtroom evidence?',
    discipline: 'AI Ethics & Legal Admissibility',
    options: [
      { text: 'They make the neural network run 100 times faster on consumer hardware', correct: false },
      { text: 'They eliminate the legal requirement for a chain of custody hash', correct: false },
      { text: 'They provide interpretable visual and statistical heatmaps explaining why the algorithm made a specific determination', correct: true },
      { text: 'They automatically grant attorney-client privilege to the software vendor', correct: false }
    ],
    explanation:
      'Proprietary "black-box" models cannot be cross-examined under constitutional confrontation clauses. XAI allows examiners and juries to inspect the specific features (e.g. ridge minutiae or spectral ions) that influenced the model output.'
  },
  {
    id: 6,
    question: 'In digital memory forensics (RAM analysis), what critical cryptographic material can AI heap parsers recover in volatile states?',
    discipline: 'Digital Forensics',
    options: [
      { text: 'Physical fingerprints pressed onto the keyboard keys', correct: false },
      { text: 'Unpaged AES volume master keys and decrypted plaintext chat buffers before shutdown', correct: true },
      { text: 'The physical serial number stamped onto the silicon wafer', correct: false },
      { text: 'The hardware MAC address of disconnected cell towers', correct: false }
    ],
    explanation:
      'Volatile RAM contains active encryption keys (BitLocker AES-XTS, FileVault), decrypted messaging buffers, and unindexed process memory that are wiped clean the moment power is disconnected.'
  }
];

