import AnimatedBackground from '@/components/AnimatedBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import SkillsSection from '@/components/SkillsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSectionUpdated from '@/components/ContactSectionUpdated';
import CursorTrail from '@/components/CursorTrail';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="relative">
      {/* Cursor Trail Animation */}
      <CursorTrail />
      
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PortfolioSection />
        <SkillsSection />
        <TestimonialsSection />
        <ContactSectionUpdated />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
