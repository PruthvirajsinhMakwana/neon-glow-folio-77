import { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, MessageCircle, CheckCircle } from 'lucide-react';

const ContactSectionUpdated = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/mzzanrja', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setShowSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      // You might want to show an error message here
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bopal, Ahmedabad, Gujarat',
      gradient: 'var(--gradient-primary)',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7016592727',
      gradient: 'var(--gradient-secondary)',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'pruthvirajsinhpvt@gmail.com',
      gradient: 'var(--gradient-tertiary)',
    },
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-16 px-4 relative z-10"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-12 transform transition-all duration-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's collaborate and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div 
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
            }`}
          >
            <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
              {/* Success Message Overlay */}
              {showSuccess && (
                <div className="absolute inset-0 glass-card rounded-2xl flex items-center justify-center z-20 backdrop-blur-lg">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll get back to you soon!
                    </p>
                  </div>
                </div>
              )}

              <h3 className="text-xl font-bold mb-6 gradient-text">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 text-foreground resize-none disabled:opacity-50"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full neon-button text-background font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-background border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div 
            className={`transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
            }`}
          >
            <div className="space-y-4">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className={`glass-card rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 transform ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center"
                      style={{ background: info.gradient }}
                    >
                      <info.icon className="w-5 h-5 sm:w-6 sm:h-6 text-background" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground text-sm sm:text-base">{info.title}</h4>
                      <p className="text-muted-foreground text-sm">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div className="glass-card rounded-2xl p-6 text-center">
                <div className="mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">Quick Chat</h3>
                  <p className="text-muted-foreground text-sm">
                    Need immediate assistance? Let's chat on WhatsApp!
                  </p>
                </div>
                
                <button 
                  onClick={() => window.open('https://wa.me/917016592727?text=Hello%20Pruthviraj!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank')}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </button>
              </div>

              {/* Availability */}
              <div className="glass-card rounded-2xl p-4 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  Available for new projects
                </div>
                <p className="text-muted-foreground text-sm">
                  Typically responds within 2-4 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionUpdated;