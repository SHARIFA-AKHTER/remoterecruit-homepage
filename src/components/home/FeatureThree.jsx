import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function FeatureThree() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            className="space-y-6 max-w-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-[#e0f2fe] text-[#0284c7] text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
              Custom Profile
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
              Showcase Your Talents
            </h2>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              Personalize your profile with everything that makes you unique.
              Add an introductory video and other media for a personal touch
              that stands out to employers and candidates.
            </p>
          </motion.div>


          {/* Right Mockup */}
          <motion.div
            className="relative flex justify-center lg:justify-end mt-12 lg:mt-0 px-6 sm:px-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >

            {/* Main Profile Card */}
            <div className="w-[360px] sm:w-[420px] bg-white rounded-3xl border border-slate-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] p-6 space-y-5 relative z-10">

              {/* Video Banner */}
              <div className="bg-[#1e3eb5] rounded-2xl p-4 text-white relative overflow-hidden h-32 flex flex-col justify-between">
                <div className="absolute right-[-20px] top-[-10px] w-32 h-32 bg-white/10 rounded-full blur-xl"></div>

                <span className="text-[10px] font-bold bg-white/20 px-2 py-0.5 rounded-full w-fit">
                  102 Jobs Completed!
                </span>

                <div className="flex items-center gap-2.5 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-amber-400 border-2 border-white flex items-center justify-center text-slate-900 text-xs font-bold">
                    DM
                  </div>

                  <div>
                    <h4 className="text-xs font-bold">
                      Dylan M.
                    </h4>
                    <span className="text-[9px] text-white/80">
                      Full Stack Developer
                    </span>
                  </div>
                </div>


                {/* Play Button Animation */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/90 text-[#1e3eb5] p-3 rounded-full shadow-lg cursor-pointer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={14} fill="currentColor" />
                </motion.div>
              </div>


              {/* Skills */}
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">
                  Top Skills
                </span>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Python Dev",
                    "Javascript",
                    "Front End",
                    "Back End",
                    "iOS Development",
                    "+12",
                  ].map((tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.08 }}
                      className={`text-[10px] font-medium px-3 py-1.5 rounded-lg ${
                        tag === "+12"
                          ? "bg-slate-100 text-slate-500"
                          : "bg-blue-50 text-[#1e3eb5] font-semibold"
                      }`}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

            </div>


            {/* Left Floating Review */}
            <motion.div
              className="absolute bottom-[35%] -left-6 sm:-left-12 bg-white rounded-2xl p-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center gap-3 z-20 max-w-[240px]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white text-xs">
                🤝
              </div>

              <div>
                <span className="block text-[8px] font-bold text-slate-400 uppercase">
                  Past Client Feedback
                </span>
                <h4 className="text-xs font-extrabold text-slate-800">
                  "Best Developer Ever!"
                </h4>
              </div>
            </motion.div>


            {/* Right Avatar */}
            <motion.div
              className="absolute right-[-10px] top-[25%] w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 z-20 flex items-center justify-center"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 150 }}
            >
              <div className="w-full h-full bg-slate-800 flex items-center justify-center text-white font-bold text-sm">
                FG
              </div>
            </motion.div>


            {/* Blue Orb */}
            <motion.div
              className="absolute -top-6 left-12 w-4 h-4 bg-blue-500 rounded-full"
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}