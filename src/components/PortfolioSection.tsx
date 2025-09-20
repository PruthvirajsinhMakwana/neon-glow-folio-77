import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play, Eye } from 'lucide-react';

const PortfolioSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('design');
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

  const portfolioData = {
    design: [
      { title: 'Brand Identity Suite', category: 'Branding', image: 'design-1' },
      { title: 'Mobile App UI', category: 'UI/UX', image: 'design-2' },
      { title: 'E-commerce Design', category: 'Web Design', image: 'design-3' },
      { title: 'Logo Collection', category: 'Logos', image: 'design-4' },
      { title: 'Print Materials', category: 'Print', image: 'design-5' },
      { title: 'Social Media Kit', category: 'Digital', image: 'design-6' },
    ],
    video: [
      { title: 'Corporate Promo', category: 'Commercial', duration: '2:30' },
      { title: 'Music Video', category: 'Entertainment', duration: '3:45' },
      { title: 'Product Demo', category: 'Product', duration: '1:20' },
      { title: 'Event Highlights', category: 'Event', duration: '4:15' },
    ],
    web: [
      { title: 'E-commerce Platform', tech: 'React, Node.js', live: '#', code: '#' },
      { title: 'Portfolio Website', tech: 'Next.js, Tailwind', live: '#', code: '#' },
      { title: 'SaaS Dashboard', tech: 'React, TypeScript', live: '#', code: '#' },
      { title: 'Mobile App', tech: 'React Native', live: '#', code: '#' },
    ],
  };

  const tabs = [
    { id: 'design', label: 'Graphic Design', icon: '🎨' },
    { id: 'video', label: 'Video Projects', icon: '🎬' },
    { id: 'web', label: 'Web Development', icon: '💻' },
  ];

  return (
    <section 
      id="portfolio" 
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
            My <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of creative projects spanning design, development, and multimedia
          </p>
        </div>

        {/* Tab Navigation */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'neon-button text-background'
                  : 'glass-card text-foreground hover:scale-105'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Content */}
        <div className="min-h-[600px]">
          {/* Graphic Design Grid */}
          {activeTab === 'design' && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.design.map((item, index) => (
                <div
                  key={item.title}
                  className={`group transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                      <div className="text-4xl gradient-text font-bold">{item.title.charAt(0)}</div>
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <button className="neon-button text-background font-semibold">
                          <Eye size={16} className="mr-2" />
                          View Project
                        </button>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Video Projects */}
          {activeTab === 'video' && (
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.video.map((item, index) => (
                <div
                  key={item.title}
                  className={`group transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="glass-card rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500">
                    <div className="aspect-video bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center relative group">
                      <Play size={48} className="text-foreground/60 group-hover:text-primary transition-colors duration-300" />
                      
                      <div className="absolute top-4 right-4 glass-card rounded-lg px-3 py-1 text-sm">
                        {item.duration}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{item.category}</p>
                      <button className="neon-button-secondary text-foreground font-semibold w-full">
                        Watch Video
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Web Development Projects */}
          {activeTab === 'web' && (
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.web.map((item, index) => (
                <div
                  key={item.title}
                  className={`group transform transition-all duration-1000 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="glass-card rounded-2xl p-6 hover:scale-105 transition-all duration-500">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-6 relative overflow-hidden group">
                      <div className="text-6xl gradient-text font-bold">{'<>'}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6">{item.tech}</p>
                    
                    <div className="flex gap-3">
                      <button className="neon-button text-background font-semibold flex-1 inline-flex items-center justify-center gap-2">
                        <ExternalLink size={16} />
                        Live Demo
                      </button>
                      <button className="glass-card rounded-lg px-4 py-3 text-foreground hover:scale-105 transition-transform duration-300">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;