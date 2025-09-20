import { Github, Linkedin, Twitter, Instagram, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/PruthvirajsinhMakwana', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/makwana-pruthvirajsinh-064113295/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://www.facebook.com/pruthvirajsinh.makwana.12/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/pruthvirajsinh__makwana/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:pruthvirajsinhpvt@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold gradient-text hover:scale-105 transition-transform duration-300 inline-block mb-4"
            >
              PRUTHVIRAJ MAKWANA
            </button>
            <p className="text-muted-foreground leading-relaxed">
              B.Voc IT Student passionate about sports commentary and tech development. 
              Leveling up daily in gaming and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>pruthvirajsinhpvt@gmail.com</p>
              <p>+91 7016592727</p>
              <p>Bopal, Ahmedabad, Gujarat</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-full p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110 group"
              aria-label={label}
            >
              <Icon 
                size={20} 
                className="group-hover:rotate-12 transition-transform duration-300" 
              />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-muted-foreground text-sm flex items-center gap-2">
              © {currentYear} PRUTHVIRAJ MAKWANA. Made with{' '}
              <Heart size={16} className="text-red-500 animate-pulse" />{' '}
              by Pruthviraj Makwana
            </div>

            {/* Legal Links */}
            <div className="flex gap-6 text-sm text-muted-foreground">
              <button className="hover:text-primary transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-primary transition-colors duration-300">
                Terms of Service
              </button>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 glass-card rounded-full p-3 text-foreground hover:text-primary transition-all duration-300 hover:scale-110 z-50"
          aria-label="Scroll to top"
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <path d="m18 15-6-6-6 6"/>
          </svg>
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px opacity-50"
           style={{ background: 'var(--gradient-primary)' }} />
    </footer>
  );
};

export default Footer;