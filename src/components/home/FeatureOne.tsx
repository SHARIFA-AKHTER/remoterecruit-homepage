import { CheckSquare, Square } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../../utils/motionVariants";

export function FeatureOne() {
  return (
    <section id="features" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="space-y-6 max-w-xl"
          >
            <span className="inline-block bg-sky-100 text-sky-600 text-xs font-semibold px-3 py-1.5 rounded-full tracking-wide">
              Global Reach
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight leading-tight">
              The First Fully Global Job Board, Anywhere, Ever
            </h2>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              RemoteRecruit connects candidates with opportunities around the
              world. With today's remote-first workforce, you need to be able to
              find the best jobs and the best people for them, wherever they may
              be.
            </p>
          </motion.div>


          {/* RIGHT MOCKUP */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex justify-center lg:justify-end mt-10 lg:mt-0 px-4 sm:px-10"
          >

            {/* MAIN CARD */}
            <motion.div
              variants={fadeInUp}
              className="w-[360px] sm:w-[460px] bg-slate-50/90 rounded-3xl border border-slate-200 shadow-sm flex pb-10 overflow-hidden"
            >

              {/* Sidebar */}
              <div className="w-12 bg-[#1a365d] min-h-full flex flex-col items-center py-5 gap-4">
                <div className="w-5 h-5 rounded bg-white/20"></div>
                <div className="w-5 h-5 rounded bg-white/10"></div>
                <div className="w-5 h-5 rounded bg-white/10"></div>
              </div>


              {/* Content */}
              <div className="flex-1 p-5">

                <span className="text-[9px] font-medium text-slate-400 block">
                  Welcome Max
                </span>

                <h3 className="text-base font-extrabold text-slate-800">
                  Let's Find Work
                </h3>


                {/* Tabs */}
                <div className="flex gap-2 flex-wrap my-4">
                  {["UI/UX", "Front End", "Back End"].map((tab, index) => (
                    <span
                      key={index}
                      className={`text-[9px] font-semibold px-2.5 py-1 rounded-md ${
                        index === 0
                          ? "bg-brand-primary text-white"
                          : "bg-white text-slate-600 border border-slate-200"
                      }`}
                    >
                      {tab}
                    </span>
                  ))}
                </div>


                {/* Jobs + Filter */}
                <div className="grid grid-cols-3 gap-3 mt-5">

                  {/* Job */}
                  <div className="col-span-2">
                    <span className="text-[10px] font-bold text-slate-400 block mb-2">
                      Recent Jobs
                    </span>

                    <div className="bg-white border border-slate-200 p-3 rounded-xl shadow-sm">
                      <span className="text-[8px] text-slate-400 block mb-1">
                        Remote • Full-time
                      </span>

                      <h4 className="text-[10px] font-bold text-slate-800 leading-tight">
                        Senior UI/UX Designer needed for ongoing support
                      </h4>
                    </div>
                  </div>


                  {/* Filter */}
                  <div className="border-l border-slate-200 pl-3">
                    <span className="text-[9px] font-bold text-slate-700 block mb-2">
                      Filter
                    </span>

                    <div className="space-y-2">
                      {["Full Time", "Part Time", "Fixed"].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-1 text-[8px] text-slate-500"
                        >
                          {index === 0 ? (
                            <CheckSquare size={10} className="text-blue-600" />
                          ) : (
                            <Square size={10} className="text-slate-300" />
                          )}

                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>


            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.5,
                ease: [0, 0, 0.2, 1],
              }}
              className="absolute top-[25%] -left-4 sm:-left-8 bg-white rounded-full py-2 pl-2 pr-8 shadow-lg border border-slate-100 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center border-2 border-amber-400">
                FG
              </div>

              <div>
                <span className="text-[8px] font-bold text-brand-primary uppercase">
                  Python Developer
                </span>

                <h4 className="text-xs font-bold text-slate-900">
                  Felonious Gru
                </h4>
              </div>
            </motion.div>


            {/* Bottom Badge */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4,
                duration: 0.5,
                ease: [0, 0, 0.2, 1],
              }}
              className="absolute bottom-[10%] right-2 bg-white rounded-full py-2 pl-2 pr-8 shadow-lg border-2 border-blue-600 flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center border-2 border-amber-400">
                MM
              </div>

              <div>
                <span className="text-[8px] font-bold text-cyan-600 uppercase">
                  Front End Wizard
                </span>

                <h4 className="text-xs font-bold text-slate-900">
                  Mel Muselphiem
                </h4>
              </div>
            </motion.div>


            {/* Floating Circle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                type: "spring",
                stiffness: 100,
              }}
              className="absolute -right-2 top-[45%] w-14 h-14 rounded-full bg-gradient-to-br from-sky-400 to-blue-700 shadow-lg flex items-center justify-center text-white border-4 border-white z-20"
            >
              👤
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}