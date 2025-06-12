import { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'AI Task Manager',
      description: 'An intelligent task management app that uses AI to prioritize tasks and suggest optimal schedules. Built with Next.js and integrated with OpenAI API.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['Next.js', 'TypeScript', 'OpenAI', 'Prisma'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'CipherShare',
      description: 'CipherShare is a secure file sharing platform built using microservices architecture. It provides secure file storage, sharing, and audit logging capabilities with decentralized storage using IPFS.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['Java', 'Docker', 'Kubernetes', 'MySQL', 'RESTful APIs'],
      liveUrl: '#',
      githubUrl: 'https://github.com/VIRTUALGOD325/CipherShare.git'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleLiveDemo = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleGithub = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development.
            </p>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <Card
                    key={project.title}
                    className="group card-hover border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => handleLiveDemo(project.liveUrl)}
                          disabled={!project.liveUrl || project.liveUrl === '#'}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleGithub(project.githubUrl)}
                          disabled={!project.githubUrl || project.githubUrl === '#'}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                          <span
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                          >
                      {tech}
                    </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
            ))}
          </div>

          {/* Mobile/Tablet Carousel View */}
          <div className="lg:hidden">
            <div className="relative">
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden">
                <div className="relative">
                  <img
                      src={projects[currentProject].image}
                      alt={projects[currentProject].title}
                      className="w-full h-64 object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{projects[currentProject].title}</h3>
                  <p className="text-muted-foreground mb-4">{projects[currentProject].description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[currentProject].technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded text-sm font-medium"
                        >
                      {tech}
                    </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <Button
                        onClick={() => handleLiveDemo(projects[currentProject].liveUrl)}
                        disabled={!projects[currentProject].liveUrl || projects[currentProject].liveUrl === '#'}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => handleGithub(projects[currentProject].githubUrl)}
                        disabled={!projects[currentProject].githubUrl || projects[currentProject].githubUrl === '#'}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-6">
                <Button variant="outline" size="sm" onClick={prevProject}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                      <button
                          key={index}
                          className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentProject ? 'bg-primary' : 'bg-muted'
                          }`}
                          onClick={() => setCurrentProject(index)}
                      />
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={nextProject}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Projects;