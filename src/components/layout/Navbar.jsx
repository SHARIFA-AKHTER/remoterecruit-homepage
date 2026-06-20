
import { useState } from 'react';
import { Menu, X, Briefcase, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0, overflow: "hidden" },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (

    <motion.nav 
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-brand-primary/10 rounded-lg text-brand-primary">
              <Briefcase size={22} />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-wide">
              Remote<span className="text-brand-primary">Recruit</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#features" className="hover:text-brand-primary transition-colors">Features</a>
            <a href="#portal" className="hover:text-brand-primary transition-colors">Portal</a>
            <a href="#faq" className="hover:text-brand-primary transition-colors">FAQ</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="ghost" className="flex items-center gap-1.5">
                <User size={18} /> Sign In
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="primary">Sign Up</Button>
            </motion.div>
          </div>

          {/* Mobile Hamburg Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl"
          >
            <a href="#features" onClick={() => setIsOpen(false)} className="block text-slate-600 py-2 font-medium">Features</a>
            <a href="#portal" onClick={() => setIsOpen(false)} className="block text-slate-600 py-2 font-medium">Portal</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="block text-slate-600 py-2 font-medium">FAQ</a>
            <hr className="border-slate-100" />
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="w-full justify-start">Sign In</Button>
              <Button variant="primary" className="w-full">Sign Up</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}