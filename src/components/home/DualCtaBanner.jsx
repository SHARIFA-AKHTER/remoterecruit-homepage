
import { ArrowRight, Briefcase, Users } from 'lucide-react';
import Button from '../common/Button';

export default function DualCtaBanner() {
  return (
    <section id="cta" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="bg-brand-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-xl flex flex-col justify-between group">
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-brand-cyan/10 rounded-full blur-2xl"></div>
            <div>
              <div className="p-3 bg-brand-cyan/20 text-brand-cyan rounded-xl w-fit mb-6">
                <Briefcase size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Seeking Global Opportunities?</h3>
              <p className="text-slate-300 mb-8 max-w-md">
                Query verified requirements across modern tech stacks. Discover matching ecosystems built for distributed remote engineering teams.
              </p>
            </div>
            <Button variant="primary" className="w-fit text-md">
              Create Engineering Profile <ArrowRight size={18} />
            </Button>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 text-slate-800 border border-slate-200 shadow-lg relative overflow-hidden flex flex-col justify-between group">
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-40 h-40 bg-brand-accent/10 rounded-full blur-2xl"></div>
            <div>
              <div className="p-3 bg-emerald-50 text-brand-accent rounded-xl w-fit mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Sourcing Premium Engineers?</h3>
              <p className="text-slate-600 mb-8 max-w-md">
                Gain instant filtering pipelines to pre-vetted full stack engineers, system architects, and technical writers ready to ship code.
              </p>
            </div>
            <Button variant="accent" className="w-fit text-md">
              Initialize Talent Search <ArrowRight size={18} />
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}