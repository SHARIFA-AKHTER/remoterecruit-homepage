
import { motion } from 'framer-motion';
import { hoverScale } from '../../utils/motionVariants';

export default function FeatureCard({ icon, title, description }) {
  return (
    <motion.div 
      variants={hoverScale}
      whileHover="hover"
      className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
    >
      <div className="p-4 bg-blue-50 text-brand-cyan rounded-2xl w-fit mb-6 group-hover:bg-brand-cyan group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed flex-grow">{description}</p>
    </motion.div>
  );
}