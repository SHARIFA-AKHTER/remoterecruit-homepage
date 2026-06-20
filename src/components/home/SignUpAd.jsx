import { ArrowRight, Search, Bell, CheckSquare, Square } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motionVariants';

export default function SignUpAd() {
  return (
    <section className="py-20 bg-linear-to-br from-[#eff6ff] via-[#f5f3ff] to-[#e0e7ff] relative overflow-hidden">
      
      {/* Decorative Floating Circles */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 0.8, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="absolute top-12 left-[25%] w-12 h-12 bg-amber-400 rounded-full blur-[2px] hidden md:block"
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-12 right-[35%] w-6 h-6 bg-blue-600 rounded-full blur-[1px] hidden md:block"
      ></motion.div>
      <div className="absolute right-[-100px] top-[-50px] w-[400px] h-[400px] bg-purple-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* ================= LEFT SIDE: RICH DASHBOARD MOCKUP ================= */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="lg:col-span-7 w-full flex justify-center lg:justify-start"
          >
            <div className="w-full max-w-[620px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(30,62,181,0.08)] border border-slate-100 flex h-[400px] overflow-hidden">
              
              {/* Sidebar */}
              <div className="w-16 sm:w-20 bg-[#1e3eb5] flex flex-col items-center py-6 justify-between shrink-0 text-white/50">
                <div className="space-y-6 w-full flex flex-col items-center">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center font-bold text-white text-xs mb-4">
                    RR
                  </div>
                  <div className="w-full flex justify-center border-l-4 border-white text-white py-1">
                    <div className="w-5 h-5 rounded bg-white/20"></div>
                  </div>
                  <div className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 cursor-pointer"></div>
                  <div className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 cursor-pointer"></div>
                </div>
                <div className="w-5 h-5 rounded bg-white/10"></div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 bg-[#f8fafc] p-4 sm:p-6 flex flex-col overflow-hidden">
                
                {/* Dashboard Top Header */}
                <div className="flex justify-between items-center mb-5">
                  <div>
                    <span className="text-[10px] font-medium text-slate-400 block">Welcome Max</span>
                    <h3 className="text-lg font-extrabold text-slate-800 tracking-tight leading-none">Let's Find Work</h3>
                  </div>
              
                  <div className="flex items-center gap-3">
                    <div className="relative hidden sm:block">
                      <Search size={12} className="absolute left-2.5 top-2 text-slate-400" />
                      <input type="text" placeholder="Search" className="bg-white border border-slate-200 rounded-lg pl-7 pr-3 py-1 text-[10px] w-36 focus:outline-none" disabled />
                    </div>
                    <div className="p-1.5 bg-white border border-slate-200 rounded-lg text-slate-500 relative">
                      <Bell size={12} />
                      <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-sky-400 rounded-full"></span>
                    </div>
                  </div>
                </div>

                {/* Filter Badges */}
                <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none shrink-0">
                  {['UI/UX', 'Front End', 'Back End', 'Data Science', 'Sales'].map((tab, idx) => (
                    <span key={idx} className={`text-[9px] font-bold px-3 py-1 rounded-full whitespace-nowrap ${idx === 0 ? 'bg-[#1e3eb5] text-white' : 'bg-white text-slate-500 border border-slate-200'}`}>
                      {tab}
                    </span>
                  ))}
                </div>

                {/* Grid Content */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3 flex-1 overflow-hidden">
                  
                  {/* Job List Column */}
                  <div className="sm:col-span-2 space-y-2.5 overflow-y-auto pr-1 scrollbar-none">
                    <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Recent Jobs</span>
                    
                    <div className="bg-white border border-slate-200/60 p-3 rounded-xl shadow-sm">
                      <span className="text-[8px] text-slate-400 font-semibold block mb-0.5">Remote • Full-time</span>
                      <h4 className="text-[10px] font-bold text-slate-800 leading-tight">Senior UI/UX Designer needed for ongoing support</h4>
                    </div>

                    <div className="bg-white border border-slate-200/60 p-3 rounded-xl shadow-sm">
                      <span className="text-[8px] text-slate-400 font-semibold block mb-0.5">Remote • Full-time</span>
                      <h4 className="text-[10px] font-bold text-slate-800 leading-tight">Senior UI/UX Designer needed for ongoing support</h4>
                    </div>

                    <div className="bg-[#1a365d] text-white p-3 rounded-xl shadow-md border border-blue-900/40">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 rounded bg-white/20 flex items-center justify-center text-[8px] font-bold">T</div>
                        <span className="text-[8px] text-blue-200 font-medium">The Vanguard • 2 days ago</span>
                      </div>
                      <h4 className="text-[10px] font-bold leading-tight mb-2">Senior UI/UX Designer needed for ongoing support</h4>
                      <p className="text-[8px] text-slate-300 line-clamp-2 leading-relaxed">
                        We are looking for a talented designer to help maintain our core products, design dashboard systems...
                      </p>
                    </div>
                  </div>

                  {/* Sidebar Filters Column */}
                  <div className="border-l border-slate-200/80 pl-3 space-y-3 hidden sm:block">
                    <div>
                      <span className="text-[10px] font-bold text-slate-700 block mb-2">Filter</span>
                      <div className="space-y-1.5">
                        {['Full Time', 'Part Time', 'Hourly', 'Fixed Rate'].map((item, index) => (
                          <div key={index} className="flex items-center gap-1.5 text-[8px] font-medium text-slate-500">
                            {index === 1 ? <CheckSquare size={11} className="text-[#1e3eb5]" /> : <Square size={11} className="text-slate-300" />}
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-slate-200">
                      <span className="text-[9px] font-bold text-slate-700 block mb-1">Language</span>
                      <label className="flex items-center gap-1.5 text-[8px] text-slate-500 font-medium">
                        <input type="radio" defaultChecked className="accent-[#1e3eb5]" /> English
                      </label>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE: CTA CONTENT BLOCK ================= */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-5 space-y-6 text-center lg:text-left"
          >
            <span className="text-sm font-bold text-[#1e3eb5] uppercase tracking-wider block">
              Are you ready?
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Help is only a few clicks away!
            </h2>
            <p className="text-slate-500 text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
              Click Below to get set up super quickly and find help now!
            </p>
            
            <div className="pt-2 flex justify-center lg:justify-start">
              <button className="bg-[#bfdbfe] hover:bg-blue-200 text-[#1e3eb5] font-bold px-6 py-3 rounded-full shadow-sm hover:shadow transition-all duration-300 flex items-center gap-2.5 text-sm">
                <div className="p-1 bg-[#1e3eb5] text-white rounded-full">
                  <ArrowRight size={14} />
                </div>
                Get Started
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}