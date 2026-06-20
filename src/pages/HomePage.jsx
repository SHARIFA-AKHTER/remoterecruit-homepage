
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';

import FaqAccordion from '../components/home/FaqAccordion';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import FeatureCard from '../components/home/FeatureCard';
import SignUpAd from '../components/home/SignUpAd';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white antialiased text-slate-900">
      <Navbar />
      
      {/* Upper Layout Frame */}
      <HeroSection />
      <FeatureCard/>
      
      {/* Spacer zone to handle card translation overflow height boundaries */}
      <div className="h-16 bg-white"></div>

      <SignUpAd />
      <FaqAccordion />
      <Footer />
      <ScrollToTop />
    </div>
  );
}