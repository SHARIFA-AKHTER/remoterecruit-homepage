
import { CheckSquare, Square } from 'lucide-react';

export function FeatureOne() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT SIDE: CONTENT ================= */}
          <div className="space-y-6 max-w-xl">
            <div>
              <span className="inline-block bg-[#e0f2fe] text-[#0284c7] text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
                Global Reach
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              RemoteRecruit connects candidates with opportunities around the world. 
              With today's remote-first workforce, you need to be able to find the 
              best jobs and the best people for them, wherever they may be.
            </p>
          </div>

          {/* ================= RIGHT SIDE: FIGMA MATCHED MOCKUP ================= */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 px-6 sm:px-12">
            
            <div className="w-95 sm:w-115 bg-slate-50/90 rounded-3xl border border-slate-200/80 shadow-sm relative flex pb-10 overflow-hidden">
              
              <div className="w-12 bg-[#1a365d] min-h-full flex flex-col items-center py-5 gap-4 shrink-0">
                <div className="w-5 h-5 rounded bg-white/20"></div>
                <div className="w-5 h-5 rounded bg-white/10"></div>
                <div className="w-5 h-5 rounded bg-white/10"></div>
              </div>

              <div className="flex-1 p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-[9px] font-medium text-slate-400 block mb-0.5">Welcome Max</span>
                    <h3 className="text-base font-extrabold text-slate-800 leading-none">Let's Find Work</h3>
                  </div>
                </div>

                <div className="flex gap-1.5 flex-wrap my-3">
                  {['UI/UX', 'Front End', 'Back End'].map((tab, idx) => (
                    <span 
                      key={idx} 
                      className={`text-[9px] font-semibold px-2.5 py-1 rounded-md ${
                        idx === 0 ? 'bg-brand-primary text-white' : 'bg-white text-slate-600 border border-slate-200'
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

    
                <div className="grid grid-cols-3 gap-3 mt-5">
                  <div className="col-span-2 space-y-2">
                    <span className="text-[10px] font-bold text-slate-400 block">Recent Jobs</span>
                    <div className="bg-white border border-slate-200/60 p-3 rounded-xl shadow-sm">
                      <span className="text-[8px] text-slate-400 font-medium block mb-1">Remote • Full-time</span>
                      <h4 className="text-[10px] font-bold text-slate-800 leading-tight">Senior UI/UX Designer needed for ongoing support</h4>
                    </div>
                  </div>
                  <div className="border-l border-slate-200/80 pl-3 space-y-2">
                    <span className="text-[9px] font-bold text-slate-700 block">Filter</span>
                    <div className="space-y-2">
                      {['Full Time', 'Part Time', 'Fixed'].map((item, index) => (
                        <div key={index} className="flex items-center gap-1 text-[8px] font-medium text-slate-500">
                          {index === 0 ? <CheckSquare size={10} className="text-blue-600" /> : <Square size={10} className="text-slate-300" />}
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="absolute top-[25%] -left-4 sm:-left-8 bg-white rounded-full py-2.5 pl-2.5 pr-8 shadow-[0_10px_30px_rgba(15,23,42,0.12)] border border-slate-100 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 p-0.5 bg-slate-200">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center text-white text-[10px] font-bold">FG</div>
              </div>
              <div>
                <span className="block text-[8px] font-bold text-brand-primary uppercase tracking-wider">Python Developer</span>
                <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Felonious Gru</h4>
              </div>
            </div>

            <div className="absolute bottom-[10%] right-2 sm:right-4 bg-white rounded-full py-2.5 pl-2.5 pr-8 shadow-[0_10px_30px_rgba(15,23,42,0.12)] border-2 border-blue-600 flex items-center gap-3 z-30">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border-2 border-amber-400 p-0.5 bg-slate-200">
                <div className="w-full h-full bg-slate-800 rounded-full flex items-center justify-center text-white text-[10px] font-bold">MM</div>
              </div>
              <div>
                <span className="block text-[8px] font-bold text-cyan-600 uppercase tracking-wider">Front End Wizard</span>
                <h4 className="text-xs font-extrabold text-slate-900 leading-tight">Mel Muselphiem</h4>
              </div>
            </div>

            <div className="absolute -right-3 top-[45%] w-14 h-14 rounded-full bg-linear-to-br from-sky-400 to-[#1e3eb5] shadow-lg shadow-blue-700/20 flex items-center justify-center text-white z-30 border-4 border-white">
              <svg className="w-6 h-6 text-white/90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4.5 16.5c1.5-2.5 3.5-3.5 6-3.5s4.5 1 6 3.5" />
                <circle cx="12" cy="7.5" r="2.5" />
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}