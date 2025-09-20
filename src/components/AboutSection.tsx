import { useEffect, useRef, useState } from 'react';
import { Download, Code, Palette, Video } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';

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
      className="py-16 px-4 relative z-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <div 
            className={`flex justify-center lg:justify-start transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="relative">
              <div className="glass-card glow-border p-6 rounded-2xl">
                <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  {/* Profile image placeholder */}
                  <img 
                    src={profileImage} 
                    alt="Profile" 
                    className="w-full h-full object-cover rounded-xl"
                    onError={(e) => {
                      // Fallback to gradient background with initials
                      const target = e.currentTarget as HTMLImageElement;
                      target.style.display = 'none';
                      const nextDiv = target.nextElementSibling as HTMLElement;
                      if (nextDiv) {
                        nextDiv.style.display = 'flex';
                      }
                    }}
                  />
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl items-center justify-center hidden">
                    <div className="text-6xl gradient-text font-bold">PM</div>
                  </div>
                </div>
              </div>
              
              {/* Floating stats - smaller on mobile */}
              <div className="absolute -top-3 -right-3 glass-card rounded-lg p-3 text-center">
                <div className="text-xl font-bold gradient-text">1st</div>
                <div className="text-xs text-muted-foreground">Year Student</div>
              </div>
              
              <div className="absolute -bottom-3 -left-3 glass-card rounded-lg p-3 text-center">
                <div className="text-xl font-bold gradient-text">10+</div>
                <div className="text-xs text-muted-foreground">Projects</div>
              </div>
            </div>
          </div>

          {/* About Content */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              I'm a first-year B.Voc IT student with a passion for sports commentary and tech development. 
              With hands-on experience in HTML, website development, and content creation, I'm eager to 
              expand my technical expertise while enhancing my communication abilities.
            </p>
            
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              As a gamer, tech enthusiast, and esports host, I bring unique perspectives to digital media. 
              I'm actively seeking opportunities to contribute and grow in both IT and digital media spaces, 
              leveling up daily in the world of gaming and technology.
            </p>

            {/* Skills highlights - more compact */}
            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                { icon: Code, label: 'HTML/CSS', color: 'text-primary' },
                { icon: Video, label: 'Content Creation', color: 'text-secondary' },
                { icon: Palette, label: 'Gaming/Esports', color: 'text-accent' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="glass-card rounded-lg p-3 text-center group hover:scale-105 transition-transform duration-300">
                  <Icon className={`w-6 h-6 mx-auto mb-2 ${color}`} />
                  <div className="text-sm font-medium text-foreground">{label}</div>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <button 
              onClick={() => window.open('https://drive.google.com/file/d/1xlH8sLxyhcMHRfYDGJ_JLcyM3PVcvTqo/view?usp=sharing', '_blank')}
              className="neon-button text-background font-semibold inline-flex items-center gap-2 px-4 py-2 text-sm">
              <Download size={18} />
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;