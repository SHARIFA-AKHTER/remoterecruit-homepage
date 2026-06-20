
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Shield, Zap } from 'lucide-react';
import Button from '../common/Button';
import { fadeInUp } from '../../utils/motionVariants';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-brand-dark to-brand-blue pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-slate-50"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Globe size={16} className="animate-spin-slow" /> Decentralizing Global Engineering Pipelines
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight mb-6">
            Deploy Your Talents to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-brand-accent">Global Ventures</span>
          </h1>
          
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Bridge the geographical gap. Gain direct exposure to enterprise-scale codebases and cross-border project management without boundaries.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button variant="primary" className="text-lg px-8 py-4">
              Explore Roles <ArrowRight size={20} />
            </Button>
            <Button variant="secondary" className="text-lg px-8 py-4">
              Post Opportunities
            </Button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8 text-left">
          {[
            { icon: <Zap className="text-amber-400" />, title: "1-Click Submission", desc: "Instantly stream your standardized markdown resume profile." },
            { icon: <Shield className="text-emerald-400" />, title: "Vetted Sovereignty", desc: "Strict verification pipeline ensuring authenticated remote setups." },
            { icon: <Globe className="text-sky-400" />, title: "Compliant Remittance", desc: "Comprehensive documentation onboarding for direct wires." }
          ].map((item, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-2xl border border-slate-800/80 flex gap-4">
              <div className="p-3 bg-slate-800 rounded-xl h-fit">{item.icon}</div>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}