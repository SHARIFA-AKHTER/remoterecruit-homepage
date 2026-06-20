
import { Briefcase, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-brand-cyan/10 rounded-lg text-brand-cyan">
            <Briefcase size={22} />
          </div>
          <span className="text-xl font-bold text-white">
            Remote<span className="text-brand-cyan">Recruit</span>
          </span>
        </div>

        <p className="text-sm text-slate-500">
          &copy; {new Date().getFullYear()} RemoteRecruit. All rights reserved. Engineering global distributed workflows.
        </p>

        <div className="flex gap-5 text-slate-400">
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
}