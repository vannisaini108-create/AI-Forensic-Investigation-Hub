# AI Forensic Investigation Hub

> **College Assessment-3 Project: Artificial Intelligence for Forensic Science**  
> An educational and interactive web portal exploring computational criminalistics, neural pattern recognition, and courtroom evidence standards.

---

## 🔬 Project Overview

**AI Forensic Investigation Hub** is a responsive web application engineered to demonstrate how modern machine learning models (Convolutional Neural Networks, Graph Neural Networks, Bayesian MCMC Deconvolution, and Vision Transformers) augment traditional forensic workflows across biological, chemical, cyber, and physical criminalistics.

### ⚠️ Educational Assessment Disclaimer
*This platform was created exclusively for educational purposes for **College Assessment-3**. All datasets, electropherogram profiles, mass spectra, case studies, and evidence exhibits are **fictional simulations** designed to illustrate forensic science methodologies and computational algorithms. This application does not analyze or claim to process real-world criminal case evidence.*

---

## ✨ Features & Modules

1. **Responsive Forensic Navigation Bar**
   - Sticky glassmorphism header with active link tracking
   - Animated system status indicator (`AI CORE ONLINE`)
   - Mobile menu drawer with smooth transitions and quick shortcuts

2. **Hero Section & Interactive Forensic Terminal**
   - High-impact typography, academic tags, and key criminalistics statistics
   - **Interactive Forensic Scanner Simulation**: Switch in real-time between:
     - *Latent Minutiae Vector Scanner* (Level 2 minutiae, bifurcation nodes, laser scanlines)
     - *DNA STR Electropherogram Deconvolution* (Fluorophore peak de-stuttering, 24 loci)
     - *3D Ballistic Surface Topography* (Breech face striations, Congruent Matching Cells)

3. **Foundations of Criminalistics (About)**
   - Locard's Exchange Principle (*"Every contact leaves a trace"*) in physical & digital domains
   - Chain of Custody integrity & SHA-256 cryptographic provenance
   - Human-in-the-loop expert witness accountability (ACE-V protocol)
   - Interactive historical timeline: From Bertillon anthropometry (1882) to Deep Neural Forensics (2020s+)

4. **Five Core Forensic Disciplines**
   - **DNA Profiling**: STR multiplex typing, mitochondrial sequencing, Bayesian MCMC mixture deconvolution
   - **Fingerprint Analysis**: Dactyloscopy, cyanoacrylate fuming, CNN ridge restoration, AFIS matching
   - **Digital Forensics**: Volatile RAM heap carving, AES-XTS key extraction, steganography detection
   - **Forensic Toxicology**: LC-MS/MS, GC-MS, molecular Graph Neural Networks for Novel Psychoactive Substances (NPS)
   - **Ballistics & Toolmarks**: 3D confocal topography, Siamese networks, Congruent Matching Cells (CMC)
   - 4-step laboratory workflows, key algorithms, and courtroom standard benchmarks for each discipline

5. **AI in Forensic Science**
   - 5 core AI paradigms: Computer Vision, NLP & Stylometry, 3D Spatial Reconstruction, Synthetic Media/Deepfake Detection, and Explainable AI (XAI)
   - **Interactive Comparison Matrix**: Side-by-side benchmark of *Traditional Criminalistics* vs *AI-Assisted Workflows* across speed, cognitive bias, mixture deconvolution, and scalability

6. **Interactive Evidence Library**
   - **Live keyword search**: Instant filtering across IDs, titles, summaries, analysts, and tags
   - **Category filter pills**: Biological & DNA, Latent Prints, Digital & Cyber, Ballistics & Toolmarks, Toxicology & Chemical, Trace Evidence
   - **Status filtering**: Verified Match, Neural Reconstruction, Pending Review
   - **Interactive Evidence Modal**:
     - Cryptographic SHA-256 chain of custody seal
     - Laboratory instrument specifications & parameters
     - Simulated instrument signal telemetry (electropherograms, memory maps, striation profiles, mass spectra)
     - AI algorithmic findings & Daubert courtroom admissibility analysis

7. **Fictional Case Studies**
   - 6 investigative dossiers demonstrating AI breakthroughs:
     - *Operation Silent Strand* (15-year cold case DNA deconvolution)
     - *The Phantom Ledger* (Volatile RAM ransomware key carving)
     - *Cold Harbor Ballistics* (3D striation cross-correlation)
     - *The Spectral Toxin Enigma* (Novel fluorinated fentanyl analog identification)
     - *Echoes of the Glade* (Soot-obscured latent print recovery)
     - *Project GhostDrive* (Drone firmware steganography in industrial espionage)
   - Interactive **Case Dossier Modal** with chronological event timelines, AI findings vs investigator audits, and judicial outcomes

8. **Academic Learning Resources**
   - **Courtroom Admissibility Standards**: Daubert Standard, Frye General Acceptance, ISO/IEC 17025, ISO/IEC 27037, and OSAC/SWGDAM guidelines
   - **Searchable Forensic Glossary**: Instant term lookup (Minutiae, Likelihood Ratio, Steganography, Volatile RAM, NPS, CMC, etc.)
   - **Academic Literature Citations**: PCAST Landmark Report, IEEE TPAMI, Elsevier FSI Genetics, and Harvard JOLT

9. **Interactive Assessment-3 Competency Quiz**
   - 6 multiple-choice forensic questions with real-time scoring
   - Detailed scientific justifications and feedback for every question
   - Animated competency rank certificate badge upon completion with retake functionality

10. **Academic Inquiry & Consultation Dispatch**
    - Client-side validated form (Full Name, Academic Email, Institution, Inquiry Topic, Message)
    - Live inline error feedback
    - Generates an interactive verification receipt with unique dispatch ticket ID (`DISPATCH-XXXX-AI-LAB`)

---

## 🎨 Design System & Aesthetics

- **Primary Colors**: Dark Navy Blue (`#020817`, `#050f28`), Glowing Cyan (`#00f2fe`), Accent Blue (`#38bdf8`), Crisp White (`#ffffff`, `#f8fafc`)
- **Visual Style**: High-tech laboratory glassmorphism, animated laser scanner lines, glowing pulse nodes, subtle coordinate gridlines
- **Typography**: `Space Grotesk` (display headings), `Plus Jakarta Sans` (body), `JetBrains Mono` (hashes, metrics, and terminal readouts)
- **Responsiveness**: Fully optimized for mobile phones (320px+), tablets (768px+), and desktop monitors (1280px+)

---

## 💻 Tech Stack

- **Framework**: React.js 18 (Functional components, Hooks, clean modular structure)
- **Bundler**: Vite 5
- **Styling**: Custom CSS Design System with CSS variables and Glassmorphism
- **Icons**: Lucide React
- **Language**: JavaScript (ES Modules)

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js (version 18.0.0 or higher recommended)
- npm (version 9.0.0 or higher)

### Setup Instructions
1. **Clone or Navigate to the Repository**:
   ```bash
   cd Forensic-Investigation-Hub
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:3000` to interact with the website.

4. **Build for Production**:
   ```bash
   npm run build
   ```
   The compiled, optimized static bundle will be generated in the `dist/` directory.

5. **Preview Production Build Locally**:
   ```bash
   npm run preview
   ```

---

## 🌐 Vercel Deployment Instructions

The project is pre-configured for instant zero-configuration deployment on **Vercel**:

1. **Option A: Via Vercel Web Dashboard**:
   - Push this repository to GitHub or GitLab.
   - Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
   - Import this repository.
   - Framework Preset will automatically detect **Vite**.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Click **Deploy**.

2. **Option B: Via Vercel CLI**:
   ```bash
   npm install -g vercel
   vercel
   ```
   Follow the prompts to deploy.

The included `vercel.json` ensures that all single-page application routes redirect seamlessly to `/index.html`.

---

## 📁 Project Structure

```
Forensic-Investigation-Hub/
├── dist/                          # Production build output
├── public/                        # Static assets
├── src/
│   ├── components/                # Modular UI components
│   │   ├── Navbar.jsx             # Responsive navigation with mobile menu
│   │   ├── Hero.jsx               # Hero banner and quick stats
│   │   ├── ForensicTerminal.jsx   # Interactive multi-mode scanner visualizer
│   │   ├── About.jsx              # Criminalistics principles & history
│   │   ├── Disciplines.jsx        # 5 Core Forensic Disciplines
│   │   ├── AIApplications.jsx     # AI models & comparative matrix
│   │   ├── EvidenceLibrary.jsx    # Searchable & filterable evidence catalog
│   │   ├── EvidenceModal.jsx      # Detailed forensic exhibit inspection modal
│   │   ├── CaseStudies.jsx        # 6 Fictional criminal investigation dossiers
│   │   ├── CaseModal.jsx          # Detailed case file modal with timelines
│   │   ├── LabResources.jsx       # Legal standards & searchable glossary
│   │   ├── InteractiveLabQuiz.jsx # Assessment-3 knowledge check widget
│   │   ├── Contact.jsx            # Validated inquiry form with dispatch receipt
│   │   └── Footer.jsx             # Academic disclaimers and navigation links
│   ├── data/                      # Structured forensic domain datasets
│   │   ├── disciplinesData.js     # Disciplines, workflows, AI integrations
│   │   ├── aiApplicationsData.js  # AI paradigms and comparative matrix
│   │   ├── evidenceData.js        # 8+ simulated exhibits with sensor data
│   │   ├── caseStudiesData.js     # 6 detailed fictional case files
│   │   ├── labResourcesData.js    # Legal standards, glossary, citations
│   │   └── quizData.js            # 6 Assessment questions with explanations
│   ├── styles/
│   │   └── index.css              # Custom CSS design system & glassmorphism
│   ├── App.jsx                    # Root component with scroll observation
│   └── main.jsx                   # Entry point
├── index.html                     # HTML root with typography fonts & metadata
├── package.json                   # Project scripts and dependencies
├── vercel.json                    # Vercel deployment configuration
├── vite.config.js                 # Vite configuration
└── README.md                      # Documentation & setup guide
```

---

## ⚖️ Legal & Ethical Compliance References
- **Daubert v. Merrell Dow Pharmaceuticals**, 509 U.S. 579 (1993)
- **Frye v. United States**, 293 F. 1013 (D.C. Cir. 1923)
- **ISO/IEC 17025:2017**: General requirements for the competence of testing and calibration laboratories
- **ISO/IEC 27037:2012**: Guidelines for identification, collection, acquisition and preservation of digital evidence
- **NIST Special Publication 800-86**: Guide to Integrating Forensic Techniques into Incident Response
- **President's Council of Advisors on Science and Technology (PCAST)**: Report on Forensic Science in Criminal Courts (2016)

