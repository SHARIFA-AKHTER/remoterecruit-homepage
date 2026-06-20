
import { Play } from 'lucide-react';

export function FeatureThree() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content (Showcase Your Talents) */}
          <div className="space-y-6 max-w-xl">
            <div>
              <span className="inline-block bg-[#e0f2fe] text-[#0284c7] text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
                Custom Profile
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Showcase Your Talents
            </h2>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Personalize your profile with everything that makes you unique. Add an introductory video and other media for a personal touch that stands out to employers and candidates.
            </p>
          </div>

          {/* Right Column: Figma Matched Mockup Grid */}
          <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 px-6 sm:px-12">
            
            {/* Main Profile Background Box */}
            <div className="w-[360px] sm:w-[420px] bg-white rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-6 space-y-5 relative z-10">
              
              {/* Header Video/Banner Card */}
              <div className="bg-[#1e3eb5] rounded-2xl p-4 text-white relative overflow-hidden h-32 flex flex-col justify-between">
                <div className="absolute right-[-20px] top-[-10px] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full w-fit">
                  102 Jobs Completed!
                </span>
                
                {/* User Info inside Banner */}
                <div className="flex items-center gap-2.5 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-slate-900 text-xs font-bold">
                    DM
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-none">Dylan M.</h4>
                    <span className="text-[9px] text-white/80">Full Stack Developer</span>
                  </div>
                </div>

                {/* Floating Custom Play Button Overlay */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-[#1e3eb5] p-3 rounded-full shadow-lg cursor-pointer hover:scale-105 transition-transform">
                  <Play size={14} fill="currentColor" />
                </div>
              </div>

              {/* Skills / Tags Area */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Top Skills</span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python Dev', 'Javascript', 'Front End', 'Back End', 'iOS Development', '+12'].map((tag, idx) => (
                    <span 
                      key={idx} 
                      className={`text-[10px] font-medium px-3 py-1.5 rounded-lg ${
                        tag === '+12' ? 'bg-slate-100 text-slate-500' : 'bg-blue-50 text-[#1e3eb5] font-semibold'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Floating Review Card (Past Client Feedback) - Left Side Overlap */}
            <div className="absolute bottom-[35%] -left-6 sm:-left-12 bg-white rounded-2xl p-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center gap-3 z-20 max-w-[240px]">
              <div className="w-9 h-9 rounded-full bg-slate-900 shrink-0 flex items-center justify-center text-white text-xs font-bold">
                🤝
              </div>
              <div>
                <span className="block text-[8px] font-bold text-slate-400 uppercase tracking-wider">Past Client Feedback</span>
                <h4 className="text-xs font-extrabold text-slate-800 leading-tight">"Best Developer Ever!"</h4>
              </div>
            </div>

            {/* Floating Gru Circular Badge - Right Side Overlap */}
            <div className="absolute right-[-10px] top-[25%] w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 z-20 flex items-center justify-center">
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
                FG
              </div>
            </div>

            {/* Small Blue Floating Background Orb */}
            <div className="absolute -top-6 left-12 w-4 h-4 bg-blue-500 rounded-full opacity-80 animate-pulse"></div>

          </div>

        </div>
      </div>
    </section>
  );
}