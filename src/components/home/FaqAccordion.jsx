
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../../data/faqData';
import { useState } from 'react';

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-2">
            <HelpCircle className="text-brand-cyan" size={32} /> Frequently Asked Inquiries
          </h2>
          <p className="text-slate-600">Common structural and technical inquiries regarding our execution matrix.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div key={index} className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm transition-all duration-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex justify-between items-center p-6 text-left bg-slate-50/50 hover:bg-slate-50 font-semibold text-slate-800 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown 
                    size={20} 
                    className={`text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-cyan' : ''}`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="p-6 bg-white border-t border-slate-100 text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
        <div className="mt-12">
          <button className="border border-slate-300 hover:border-slate-400 bg-white text-slate-700 font-semibold px-6 py-3 rounded-2xl shadow-sm transition-all duration-200 text-sm cursor-pointer">
            More Questions
          </button>
        </div>
      </div>
    </section>
  );
}