import { useState } from 'react';
import { Menu, X, Briefcase, User } from 'lucide-react';
import Button from '../common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-brand-dark/95 backdrop-blur-md z-50 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-brand-cyan/20 rounded-lg text-brand-cyan">
              <Briefcase size={28} />
            </div>
            <span className="text-2xl font-bold text-white tracking-wide">
              Remote<span className="text-brand-cyan">Recruit</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
            <a href="#features" className="hover:text-brand-cyan transition-colors">Features</a>
            <a href="#cta" className="hover:text-brand-cyan transition-colors">Portal</a>
            <a href="#faq" className="hover:text-brand-cyan transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-300 hover:text-white font-medium flex items-center gap-1 cursor-pointer">
              <User size={18} /> Login
            </button>
            <Button variant="accent">Join Platform</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2 cursor-pointer">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-brand-blue border-b border-slate-800 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white py-2">Features</a>
          <a href="#cta" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white py-2">Portal</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block text-slate-300 hover:text-white py-2">FAQ</a>
          <hr className="border-slate-700" />
          <div className="flex flex-col gap-3">
            <Button variant="secondary" className="w-full">Login</Button>
            <Button variant="accent" className="w-full">Join Platform</Button>
          </div>
        </div>
      )}
    </nav>
  );
}