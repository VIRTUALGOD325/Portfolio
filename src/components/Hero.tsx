
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = ['Full Stack Developer', 'Frontend Specialist', 'UI/UX Enthusiast', 'Tech Innovator'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    let charIndex = 0;
    let isDeleting = false;

    const typeWriter = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        charIndex++;
        setTimeout(typeWriter, 100);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        charIndex--;
        setTimeout(typeWriter, 50);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => {
          isDeleting = true;
          typeWriter();
        }, 2000);
      } else if (isDeleting && charIndex === 0) {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setTimeout(typeWriter, 500);
      }
    };

    typeWriter();
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Alex Johnson</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                {displayText}<span className="animate-pulse">|</span>
              </h2>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            Passionate about creating innovative digital experiences through clean code, 
            modern design, and cutting-edge technologies. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group tech-glow">
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' }
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
