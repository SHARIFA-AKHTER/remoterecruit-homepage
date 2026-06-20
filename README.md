# 🚀 RemoteRecruit – Home Page (Technical Examination)

A pixel-perfect, highly responsive, and animated implementation of the **RemoteRecruit - Features** landing page, developed based on the provided Figma design guidelines. Built under a strict 48-hour timeline using modern frontend architecture and cutting-edge build tools.

📌 **Live Deployment:** [👉 Live Demo Link Here](https://remoterecruit-homepage.vercel.app)  
📌 **Design Reference:** [Figma File](https://www.figma.com/design/EtejDtLu3wavBclhHY6JNa/Design?node-id=1-131&t=VHcwSbDXAx7tqVMf-0)

---

## ✨ Features & Functional Implementations

* **Pixel-Perfect Fidelity:** Meticulously matched layout, spacing, typography, and color palette directly from the Figma design.
* **Fully Responsive Layout:** Seamless, fluid adaptivity across Mobile, Tablet, and Desktop breakpoints.
* **Smooth Animations & Micro-interactions:**
    * Staggered entry and fade-in section reveals using `framer-motion` as users scroll into view.
    * Interactive hover states, smooth transitions, and dynamic rotation properties on accordion triggers.
* **Dynamic FAQ Accordion:** Fully functional collapse/expand interaction with automated layout shift prevention using layout-safe motion wrapping (`overflow-hidden`).
* **Scroll-to-Top:** A floating, responsive button that smoothly snaps the user back to the hero section.
* **Performance Optimized:** Incorporates modern asset delivery, image lazy-loading, and semantic markup targeting a 90+ Lighthouse score.

---

## 🛠️ Tech Stack & Core Libraries

* **Core Framework:** React.js (v19.2) — Utilizing the latest React features for ultra-fast rendering.
* **Build Tool:** Vite (v8.0) — Next-generation frontend tooling for instantaneous Hot Module Replacement (HMR).
* **Styling Engine:** Tailwind CSS v4.0 (`@tailwindcss/vite`) — Leveraging the all-new, lightning-fast v4 compiler integrated directly into Vite.
* **Animations:** Framer Motion (v12.4) — For advanced scroll-triggered tracking and fluid component entry/exit orchestration.
* **Iconography:** Lucide React & React Icons — High-performance vector graphics matching the source design spec.

---

## 🚀 Getting Started & Local Setup

Follow these straightforward steps to get the project up and running locally on your machine.

### 🔧 Installation Steps

1. **Clone the repository:**
```bash
   git clone [https://github.com/SHARIFA-AKHTER/remoterecruit-homepage]
    cd remoterecruit-homepage

   Install the dependencies:

   npm install
Boot up the local development server:       
   npm run dev 
📂 Architecture & Directory Layout
├── src/
│   ├── assets/            # Static media resources and fonts
│   ├── components/        # Reusable functional UI components
│   │   ├── common/        # Global shared elements
│   │   │   ├── Button.jsx
│   │   │   └── ScrollToTop.jsx
│   │   ├── home/          # Home/Features page specific modules
│   │   │   ├── FaqAccordion.jsx
│   │   │   ├── FeatureCard.jsx
│   │   │   ├── FeatureOne.tsx
│   │   │   ├── FeatureTwo.tsx
│   │   │   ├── FeatureThree.jsx
│   │   │   ├── HeroSection.jsx
│   │   │   ├── PricingSection.jsx
│   │   │   └── SignUpAd.jsx
│   │   └── layout/        # Layout structure shells
│   │       └── Navbar.jsx
│   ├── data/              # Static mock datasets
│   │   └── faqData.js
│   ├── pages/             # Route-level view containers
│   │   └── HomePage.jsx
│   ├── utils/             # Helper utilities and motion variant objects
│   ├── App.css            # Component local fallback styling
│   ├── App.jsx            # Core layout controller
│   ├── index.css          # Global styles & Tailwind CSS injection point
│   └── main.jsx           # Application bootstrapper & React 19 Root API           # Core layout wrapper