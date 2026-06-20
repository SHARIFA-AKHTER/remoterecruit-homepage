import { useState } from 'react';
import { Menu, X, Briefcase, User } from 'lucide-react';
import Button from '../common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="p-2 bg-[#1e3eb5]/10 rounded-lg text-[#1e3eb5]">
              <Briefcase size={22} />
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-wide">
              Remote<span className="text-[#1e3eb5]">Recruit</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium">
            <a href="#features" className="hover:text-[#1e3eb5] transition-colors">Features</a>
            <a href="#portal" className="hover:text-[#1e3eb5] transition-colors">Portal</a>
            <a href="#faq" className="hover:text-[#1e3eb5] transition-colors">FAQ</a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="flex items-center gap-1.5">
              <User size={18} /> Sign In
            </Button>
            <Button variant="primary">Sign Up</Button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-slate-900 p-2">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-slate-600 py-2 font-medium">Features</a>
          <a href="#portal" onClick={() => setIsOpen(false)} className="block text-slate-600 py-2 font-medium">Portal</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="block text-slate-600 py-2 font-medium">FAQ</a>
          <hr className="border-slate-100" />
          <div className="flex flex-col gap-3">
            <Button variant="ghost" className="w-full justify-start">Sign In</Button>
            <Button variant="primary" className="w-full">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
}