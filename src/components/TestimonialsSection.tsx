import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const testimonials = [
    {
      name: 'Arjun Patel',
      role: 'Gaming Community Leader',
      avatar: 'AP',
      rating: 5,
      content: 'Pruthviraj\'s commentary during our esports tournament was exceptional! His energy and technical knowledge made the event truly engaging for all viewers.',
      project: 'Esports Commentary'
    },
    {
      name: 'Ravi Shah',
      role: 'Content Creator',
      avatar: 'RS',
      rating: 5,
      content: 'Amazing collaboration on our gaming content! Pruthviraj brings fresh perspectives and excellent technical skills to every project we work on together.',
      project: 'Content Creation'
    },
    {
      name: 'Khushi Sharma',
      role: 'Student Coordinator',
      avatar: 'KS',
      rating: 5,
      content: 'Pruthviraj helped create our college website with such dedication and skill. His HTML and web development knowledge is impressive for a first-year student.',
      project: 'Website Development'
    },
    {
      name: 'Dharmi Joshi',
      role: 'YouTube Manager',
      avatar: 'DJ',
      rating: 5,
      content: 'Working with Pruthviraj on YouTube content has been fantastic! His gaming insights and technical expertise make him a valuable team member.',
      project: 'YouTube Content'
    },
  ];

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

  // Auto-rotate testimonials
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isVisible, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-20 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div 
          className={`relative transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div 
              className="absolute top-0 right-0 w-32 h-32 opacity-10"
              style={{ background: 'var(--gradient-primary)' }}
            />
            
            {/* Quote icon */}
            <div className="text-6xl gradient-text font-serif mb-6 opacity-50">"</div>
            
            {/* Testimonial Content */}
            <div className="relative z-10">
              <div className="min-h-[200px] flex items-center">
                <div className="w-full">
                  <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                    {testimonials[currentTestimonial].content}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={20} 
                        className="text-yellow-400 fill-current" 
                      />
                    ))}
                  </div>
                  
                  {/* Client Info */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold text-background"
                      style={{ background: 'var(--gradient-secondary)' }}
                    >
                      {testimonials[currentTestimonial].avatar}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-foreground">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      <p className="text-muted-foreground">
                        {testimonials[currentTestimonial].role}
                      </p>
                      <p className="text-sm text-primary font-medium">
                        {testimonials[currentTestimonial].project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="glass-card rounded-full p-3 hover:scale-110 transition-all duration-300 text-foreground hover:text-primary"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="glass-card rounded-full p-3 hover:scale-110 transition-all duration-300 text-foreground hover:text-primary"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'w-8'
                    : 'opacity-50 hover:opacity-75'
                }`}
                style={{ 
                  background: index === currentTestimonial 
                    ? 'var(--gradient-primary)' 
                    : 'hsl(var(--muted-foreground))' 
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;