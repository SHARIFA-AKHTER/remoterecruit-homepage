import { Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 text-slate-600 py-12 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand Signoff */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
            <Briefcase size={20} />
          </div>
          <span className="text-lg font-bold text-slate-900">
            Remote<span className="text-blue-600">Recruit</span>
          </span>
        </div>

        {/* Legal Text */}
        <p className="text-sm text-slate-400">
          &copy; {new Date().getFullYear()} RemoteRecruit. All rights reserved. Engineering global distributed workflows.
        </p>
      </div>
    </footer>
  );
}