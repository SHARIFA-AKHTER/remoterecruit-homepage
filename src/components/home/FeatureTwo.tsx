
import { Check } from 'lucide-react';

export function FeatureTwo() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Pricing Tier UI Panel from Figma */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 max-w-sm w-full relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              
              {/* Top accent line or badge mimicking Figma */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-brand-secondary to-brand-primary"></div>
              
              <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-2.5 py-1 rounded-md">
                Your Membership Tier
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-4">Premium</h3>
              
              <div className="my-5 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-slate-900">$79.99</span>
                <span className="text-xs text-slate-400 font-normal">/ 14 Days</span>
              </div>
              
              <div className="border-t border-slate-100 pt-5 mb-6">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">Features</span>
                <ul className="space-y-3.5 text-slate-600 text-xs">
                  {[
                    'Up to 25 active job posts',
                    'Premium Placement & Visibility',
                    'Messaging anyone, unlimited',
                    'Unlimited invites',
                    'View all applicants',
                    'Unlimited invites to jobseekers'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2.5 leading-tight">
                      <Check size={14} className="text-blue-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button className="w-full py-3 bg-linear-to-r from-[#163e85] to-brand-primary hover:opacity-95 text-white font-medium text-xs rounded-xl shadow-md cursor-pointer transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* Right: Content Block */}
          <div className="order-1 lg:order-2 space-y-6 max-w-xl">
            <span className="inline-block bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Actually Fee Free
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Fee-Free Forever
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              We don't charge you fees and we don't put up paywalls. We're the bridge that connects job opportunities with the best candidates, with no middleman involved.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}