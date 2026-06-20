
import { motion } from 'framer-motion';
import { fadeInUp } from '../../utils/motionVariants';

export default function HeroSection() {
  return (
    <div className="w-full bg-white">
      <section className="relative bg-linear-to-b from-brand-secondary via-[#163e85] to-brand-primary pt-36 pb-44 text-center overflow-hidden">
        
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0">
          <svg className="relative block w-full h-22.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" fill="#ffffff"></path>
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-white">
          <div className="max-w-4xl mx-auto">
            
            <motion.h1 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp}
              className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 leading-tight"
            >
              RemoteRecruit’s Difference
            </motion.h1>
            
            <motion.p 
              initial="hidden" 
              animate="visible" 
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-md sm:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed font-normal px-4"
            >
              RemoteRecruit is connecting the world with an easy-to-use platform that lets full-time, part-time, and freelance workers showcase their talents to businesses that need them. With no paywalls, no fees, and no barriers, there’s nothing but you, your talents, and the next step in your career.
            </motion.p>

          </div>
        </div>
      </section>
    </div>
  );
}