import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'DocInsight',
    tagline: 'AI Document Originality Detection',
    description:
      'AI-powered plagiarism and originality detection system using SBERT semantic similarity, stylometric analysis, and citation masking. Built for my capstone — won Best Paper Award at SSIC 2025 and published in Springer LNNS.',
    technologies: ['Python', 'SBERT', 'FastAPI', 'PostgreSQL', 'Docker', 'Vercel'],
    liveUrl: 'https://capstoneverceldepmain.vercel.app',
    githubUrl: 'https://github.com/VIRTUALGOD325/capstoneverceldep_main',
    badge: 'Best Paper Award',
    badgeColor: 'from-yellow-500 to-orange-500',
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Credit Card Statement Parser',
    tagline: 'Multi-bank PDF Data Extraction Pipeline',
    description:
      'Python pipeline that parses and extracts structured financial data from credit card statements across 5 major Indian banks (HDFC, SBI, IDBI, Saraswat, NKGSB). Features a GUI app, mock data generator, and modular parser architecture.',
    technologies: ['Python', 'PDF Parsing', 'Data Pipelines', 'GUI', 'Multi-bank'],
    liveUrl: '',
    githubUrl: 'https://github.com/VIRTUALGOD325/Credit-Card-Statement-Parser',
    badge: 'Data Engineering',
    badgeColor: 'from-green-500 to-teal-500',
    gradient: 'from-green-500/20 to-teal-500/20',
  },
  {
    title: 'AI Task Manager',
    tagline: 'OpenAI-Powered Productivity App',
    description:
      'Intelligent task management app that uses the OpenAI API to prioritize tasks, suggest optimal schedules, and generate performance insights. Built with React and Vite with a clean dark UI.',
    technologies: ['React', 'Vite', 'OpenAI API', 'Tailwind CSS', 'JavaScript'],
    liveUrl: '',
    githubUrl: 'https://github.com/VIRTUALGOD325/AI-TaskManager',
    badge: 'OpenAI Integration',
    badgeColor: 'from-purple-500 to-pink-500',
    gradient: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'ArduinoBT Control App',
    tagline: 'Bluetooth Android Hardware Controller',
    description:
      'Native Android app (Java) for controlling Arduino hardware over Bluetooth (HC-05/HM-10). Supports D-pad, joystick, voice commands, and tilt controls. Clean modular architecture with custom BT connection manager.',
    technologies: ['Java', 'Android', 'Bluetooth', 'HC-05', 'IoT', 'Android Studio'],
    liveUrl: '',
    githubUrl: 'https://github.com/VIRTUALGOD325/ArduinoBTControlApp',
    badge: 'IoT / Android',
    badgeColor: 'from-orange-500 to-red-500',
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Arduino Code Link',
    tagline: 'Browser-based Arduino IDE & Memory Monitor',
    description:
      'Browser-based compiler and IDE for uploading code to Arduino boards. Features a serial terminal, memory leak monitor, and syntax highlighting. Built during my internship at Eduprime Technologies.',
    technologies: ['JavaScript', 'Node.js', 'WebSockets', 'Arduino', 'Embedded Systems'],
    liveUrl: '',
    githubUrl: 'https://github.com/VIRTUALGOD325/Arduino_Code_Link',
    badge: 'Internship Project',
    badgeColor: 'from-cyan-500 to-blue-500',
    gradient: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'CipherShare',
    tagline: 'Secure Decentralized Cloud Storage',
    description:
      'Microservices-based secure file storage and sharing platform with audit logging, Docker/Kubernetes orchestration, and RESTful APIs. Built with Java, designed for scalable, secure cloud deployments.',
    technologies: ['Java', 'Docker', 'Kubernetes', 'MySQL', 'Microservices', 'REST APIs'],
    liveUrl: '',
    githubUrl: 'https://github.com/VIRTUALGOD325/CipherShare',
    badge: 'Microservices',
    badgeColor: 'from-slate-400 to-slate-600',
    gradient: 'from-slate-500/20 to-zinc-500/20',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 3) * 0.15, ease: 'easeOut' }}
      className="h-full"
    >
      <Card className={`group h-full border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1`}>
        {/* Gradient header */}
        <div className={`h-2 w-full bg-gradient-to-r ${project.gradient.replace('/20', '')}`} />
        <CardContent className="p-6 flex flex-col h-full">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="text-sm text-primary font-medium">{project.tagline}</p>
            </div>
            <span className={`shrink-0 ml-2 px-2 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${project.badgeColor} text-white`}>
              {project.badge}
            </span>
          </div>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            {project.liveUrl && (
              <Button size="sm" className="flex-1" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                  Live Demo
                </a>
              </Button>
            )}
            <Button size="sm" variant="outline" className={project.liveUrl ? '' : 'flex-1'} asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-3.5 w-3.5 mr-1.5" />
                Code
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const Projects = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end AI systems, backend tools, and Android apps — built to solve real problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
