import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Facebook, Instagram } from 'lucide-react';

const HeroSection = () => {
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTextVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.12.9/build/spline-viewer.js';
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4 overflow-hidden">
      {/* Neon Purple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-background to-purple-800/50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600/30 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl" />
      
      {/* Spline 3D Background - Using iframe for better mobile support */}
      <div className="absolute inset-0 z-[1]">
        <iframe 
          src='https://my.spline.design/nexbotrobotcharacterconcept-y20nvhHc7Q3hKXih5ajpSIPb/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="opacity-90 md:opacity-100 scale-110 md:scale-100"
          style={{ pointerEvents: 'none' }}
          title="3D Robot Animation"
        />
      </div>
      
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-background via-transparent to-background/50" />
      
      <div className="text-center max-w-4xl mx-auto relative z-[10]">
        {/* Main heading with split animation */}
        <div className="overflow-hidden mb-6">
          <h1 
            className={`text-5xl md:text-7xl font-bold mb-4 transform transition-all duration-1000 ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            <span className="gradient-text">PRUTHVIRAJ</span>
            <br />
            <span className="text-foreground">MAKWANA</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden mb-8">
          <p 
            className={`text-xl md:text-2xl text-muted-foreground mb-8 transform transition-all duration-1000 delay-300 ${
              textVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
          >
            B.Voc IT Student passionate about{' '}
            <span className="gradient-text font-semibold">sports commentary</span> and{' '}
            <span className="gradient-text font-semibold">tech development</span>
          </p>
        </div>

        {/* Action buttons */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transform transition-all duration-1000 delay-500 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <button 
            className="neon-button text-background font-semibold"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explore My Work
          </button>
          <button 
            className="neon-button-secondary text-foreground font-semibold"
            onClick={() => window.open('https://wa.me/917016592727?text=Hello%20Pruthviraj!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}
          >
            Hire Me
          </button>
        </div>

        {/* Social links */}
        <div 
          className={`flex justify-center space-x-6 mb-16 transform transition-all duration-1000 delay-700 ${
            textVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {[
            { icon: Github, href: 'https://github.com/PruthvirajsinhMakwana', label: 'GitHub' },
            { icon: Linkedin, href: 'https://www.linkedin.com/in/makwana-pruthvirajsinh-064113295/', label: 'LinkedIn' },
            { icon: Facebook, href: 'https://www.facebook.com/pruthvirajsinh.makwana.12/', label: 'Facebook' },
            { icon: Instagram, href: 'https://www.instagram.com/pruthvirajsinh__makwana/', label: 'Instagram' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        {/* Enhanced Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="group relative animate-bounce hover:animate-none text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
          aria-label="Scroll to next section"
        >
          <div className="absolute inset-0 rounded-full bg-primary/20 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          <ChevronDown size={32} className="relative z-10 group-hover:translate-y-1 transition-transform duration-300" />
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full opacity-20 animate-float hidden lg:block"
           style={{ background: 'var(--gradient-primary)' }} />
      <div className="absolute bottom-1/4 right-10 w-16 h-16 rounded-full opacity-20 animate-float hidden lg:block"
           style={{ background: 'var(--gradient-secondary)', animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;