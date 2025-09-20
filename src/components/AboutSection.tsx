import { useEffect, useRef, useState } from 'react';
import { Download, Code, Palette, Video } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div 
            className={`flex justify-center lg:justify-start transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="glass-card glow-border p-8 rounded-2xl">
                <div className="w-80 h-80 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  {/* Placeholder for profile image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center">
                    <div className="text-8xl gradient-text font-bold">JD</div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats */}
              <div className="absolute -top-4 -right-4 glass-card rounded-lg p-4 text-center">
                <div className="text-2xl font-bold gradient-text">5+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 glass-card rounded-lg p-4 text-center">
                <div className="text-2xl font-bold gradient-text">100+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate creative professional specializing in digital design, 
              web development, and video production. With over 5 years of experience, 
              I transform ideas into stunning visual experiences that captivate and engage.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey combines technical expertise with artistic vision, creating 
              solutions that not only look amazing but also deliver exceptional user experiences.
            </p>

            {/* Skills highlights */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { icon: Palette, label: 'Design', color: 'text-primary' },
                { icon: Code, label: 'Development', color: 'text-secondary' },
                { icon: Video, label: 'Video Edit', color: 'text-accent' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="glass-card rounded-lg p-4 text-center group hover:scale-105 transition-transform duration-300">
                  <Icon className={`w-8 h-8 mx-auto mb-2 ${color}`} />
                  <div className="text-sm font-medium text-foreground">{label}</div>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <button className="neon-button text-background font-semibold inline-flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;