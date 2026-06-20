
export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const baseStyles = 'px-5 py-2.5 rounded-xl font-medium transition-all duration-200 cursor-pointer flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-[#1e3eb5] hover:bg-[#163e85] text-white shadow-md shadow-blue-600/10',
    outline: 'border border-slate-200 hover:bg-slate-50 text-slate-800',
    ghost: 'text-slate-600 hover:text-slate-900'
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}