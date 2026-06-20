
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = "px-6 py-3 rounded-xl font-medium transition-all duration-200 transform active:scale-95 inline-flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    primary: "bg-brand-cyan hover:bg-blue-600 text-white shadow-lg shadow-blue-500/20",
    secondary: "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700",
    accent: "bg-brand-accent hover:bg-emerald-500 text-slate-900 font-semibold shadow-md",
    outline: "border-2 border-slate-300 text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-800"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}