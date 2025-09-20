import { useEffect, useRef, useState } from 'react';
import { Palette, Video, Code, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creating stunning visual identities, logos, and branding materials that make lasting impressions.',
      features: ['Logo Design', 'Brand Identity', 'Print Design', 'Digital Graphics'],
      gradient: 'var(--gradient-primary)',
      glow: 'var(--glow-primary)',
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video production and post-processing for engaging content that tells your story.',
      features: ['Motion Graphics', 'Color Grading', 'Sound Design', 'Visual Effects'],
      gradient: 'var(--gradient-secondary)',
      glow: 'var(--glow-secondary)',
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Building responsive, modern websites and web applications with cutting-edge technologies.',
      features: ['React/Next.js', 'Responsive Design', 'E-commerce', 'Web Apps'],
      gradient: 'var(--gradient-tertiary)',
      glow: 'var(--glow-accent)',
    },
  ];

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-20 px-4 relative z-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I offer comprehensive creative solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="glass-card rounded-2xl p-8 h-full hover:scale-105 transition-all duration-500 relative overflow-hidden">
                {/* Gradient overlay on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: service.gradient }}
                />
                
                {/* Icon */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  style={{ background: service.gradient, boxShadow: service.glow }}
                >
                  <service.icon className="w-8 h-8 text-background" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground relative z-10">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed relative z-10">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8 relative z-10">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full mr-3" style={{ background: service.gradient }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  className="w-full glass-card rounded-lg py-3 font-semibold text-foreground hover:text-background transition-all duration-300 group/btn relative z-10"
                  style={{
                    backgroundImage: `linear-gradient(transparent, transparent), ${service.gradient}`,
                    backgroundOrigin: 'border-box',
                    backgroundClip: 'padding-box, border-box',
                    border: '1px solid transparent',
                  }}
                  onClick={() => window.open('https://wa.me/your-number', '_blank')}
                >
                  <span className="flex items-center justify-center gap-2">
                    <MessageCircle size={16} />
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;