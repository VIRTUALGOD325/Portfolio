import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const roles = ['AI/ML Engineer', 'Backend Developer', 'Android Developer', 'Full Stack Developer'];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const typeWriter = () => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000);
        return;
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        return;
      }
    };
    const speed = isDeleting ? 50 : 100;
    const timer = setTimeout(typeWriter, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="text-primary text-lg font-medium tracking-widest uppercase">Hello, I'm</p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
              <span className="gradient-text">Tanishq Nabar</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                {displayText}<span className="animate-pulse text-primary">|</span>
              </h2>
            </div>
          </motion.div>

          <motion.p
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Final-year BTech CS student at NMIMS Mumbai, building AI-powered applications,
            backend systems, and Android apps. 2× published researcher. Passionate about
            turning real-world problems into intelligent software.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <Button size="lg" className="group tech-glow" asChild>
              <a href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-4 w-4 group-hover:animate-pulse" />
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            className="flex justify-center space-x-6 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            {[
              { icon: Github, href: 'https://github.com/VIRTUALGOD325', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/tanishq-nabar-4768ab315', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:tanishqnabar10@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:rotate-12 group"
                aria-label={label}
              >
                <Icon className="h-6 w-6 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-12 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            {[
              { value: '2', label: 'Research Papers' },
              { value: '3+', label: 'Internships' },
              { value: '10+', label: 'Projects Built' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="text-3xl font-bold gradient-text">{value}</p>
                <p className="text-sm text-muted-foreground mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
