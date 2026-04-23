import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code2, Cpu, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    {
      icon: Brain,
      title: 'AI / ML',
      description: 'Building end-to-end AI systems: semantic search, NLP pipelines, and LLM integrations.',
    },
    {
      icon: Code2,
      title: 'Backend Dev',
      description: 'Python-first backend systems with REST APIs, data pipelines, and cloud deployments.',
    },
    {
      icon: Cpu,
      title: 'Android & IoT',
      description: 'Native Android apps (Java/Kotlin) with Bluetooth/IoT integrations and hardware control.',
    },
    {
      icon: BookOpen,
      title: 'Research',
      description: 'Published researcher — Best Paper Award (SSIC 2025) and Springer LNNS (SmartCom 2026).',
    },
  ];

  return (
    <section id="about" className="py-20 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I build AI-powered tools and backend systems that solve real problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year BTech Computer Engineering student at NMIMS, Mumbai, graduating in
                July 2026. My work spans AI/ML pipelines, backend development, and Android apps —
                with a focus on practical, end-to-end systems that work in the real world.
              </p>
              <p>
                My capstone project, <span className="text-foreground font-medium">DocInsight</span>,
                is a deployed AI system that detects document originality using semantic similarity
                (SBERT), stylometric analysis, and citation masking. It was recognized with a Best
                Paper Award at SSIC 2025 and published in Springer LNNS.
              </p>
              <p>
                Currently interning at <span className="text-foreground font-medium">Eduprime Technologies</span>,
                where I'm building browser-based Arduino IDE tooling. Previously interned at Moringa
                and Skandha. I'm actively looking for AI/Backend/Android roles for my gap year (Jul 2026–Jul 2027).
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {['Python', 'LangChain', 'FastAPI', 'OpenAI API', 'MongoDB', 'Android', 'TypeScript', 'Docker'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                <Card className="card-hover border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">
                      <div className="p-3 rounded-full bg-primary/10">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
