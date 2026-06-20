
import { motion } from 'framer-motion';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import FeatureCard from '../components/home/FeatureCard';
import DualCtaBanner from '../components/home/DualCtaBanner';
import FaqAccordion from '../components/home/FaqAccordion';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { Code, Cpu, Layers, LayoutGrid } from 'lucide-react';
import { staggerContainer } from '../utils/motionVariants';

export default function HomePage() {
  const features = [
    { icon: <Code size={26} />, title: "Modular Architecture", description: "Enforcing atomic component design patterns ensuring maintainability and clean abstractions." },
    { icon: <Cpu size={26} />, title: "LLM Matching Matrix", description: "Smart vector embeddings pairing incoming resumes precisely with structural job metrics." },
    { icon: <Layers size={26} />, title: "Automated QA Pipelines", description: "Ensuring validation criteria are tested prior to pipeline deployment." },
    { icon: <LayoutGrid size={26} />, title: "Unified Dashboard View", description: "Real-time state tracking managing recruitment responses, status updates, and hooks." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 antialiased selection:bg-brand-cyan/30">
      <Navbar />
      <HeroSection />
      
      <section id="features" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">
            Platform Capabilities
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Engineered with modern full-stack workflows to optimize remote onboarding structures.
          </p>
        </div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feat, index) => (
            <FeatureCard 
              key={index}
              icon={feat.icon}
              title={feat.title}
              description={feat.description}
            />
          ))}
        </motion.div>
      </section>

      <DualCtaBanner />
      <FaqAccordion />
      <Footer />
      <ScrollToTop />
    </div>
  );
}