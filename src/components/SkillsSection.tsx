import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'UI/UX Design', percentage: 95, category: 'Design' },
    { name: 'React/Next.js', percentage: 92, category: 'Development' },
    { name: 'Video Editing', percentage: 88, category: 'Video' },
    { name: 'Graphic Design', percentage: 96, category: 'Design' },
    { name: 'TypeScript', percentage: 85, category: 'Development' },
    { name: 'Motion Graphics', percentage: 82, category: 'Video' },
  ];

  const tools = [
    { name: 'Figma', icon: '🎨', category: 'Design' },
    { name: 'Adobe CC', icon: '🎭', category: 'Design' },
    { name: 'React', icon: '⚛️', category: 'Development' },
    { name: 'Node.js', icon: '🟢', category: 'Development' },
    { name: 'Premiere', icon: '🎬', category: 'Video' },
    { name: 'After Effects', icon: '✨', category: 'Video' },
    { name: 'Tailwind', icon: '💨', category: 'Development' },
    { name: 'Photoshop', icon: '📸', category: 'Design' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill percentages
          skills.forEach((skill, index) => {
            setTimeout(() => {
              let current = 0;
              const increment = skill.percentage / 50;
              const timer = setInterval(() => {
                current += increment;
                if (current >= skill.percentage) {
                  current = skill.percentage;
                  clearInterval(timer);
                }
                setAnimatedSkills(prev => ({ ...prev, [skill.name]: Math.round(current) }));
              }, 20);
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ percentage, name }: { percentage: number; name: string }) => {
    const animatedPercentage = animatedSkills[name] || 0;
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="hsl(var(--muted))"
            strokeWidth="8"
            fill="transparent"
            className="opacity-20"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          {/* Gradient definition */}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: 'hsl(180 100% 50%)' }} />
              <stop offset="50%" style={{ stopColor: 'hsl(260 83% 68%)' }} />
              <stop offset="100%" style={{ stopColor: 'hsl(300 100% 50%)' }} />
            </linearGradient>
          </defs>
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold gradient-text">
            {animatedPercentage}%
          </span>
        </div>
      </div>
    );
  };

  return (
    <section 
      id="skills" 
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
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical proficiency and creative tools mastery
          </p>
        </div>

        {/* Skills Progress Circles */}
        <div 
          className={`grid md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="text-center transform transition-all duration-1000"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CircularProgress percentage={skill.percentage} name={skill.name} />
              <h3 className="mt-4 font-semibold text-foreground">{skill.name}</h3>
              <p className="text-sm text-muted-foreground">{skill.category}</p>
            </div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div 
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8">Tools & Technologies</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className={`glass-card rounded-lg p-6 text-center hover:scale-105 transition-all duration-300 group transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                }`}
                style={{ transitionDelay: `${600 + index * 50}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Row */}
        <div 
          className={`grid md:grid-cols-4 gap-8 mt-16 transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          {[
            { number: '100+', label: 'Projects Completed' },
            { number: '50+', label: 'Happy Clients' },
            { number: '5+', label: 'Years Experience' },
            { number: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center glass-card rounded-lg p-6">
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;