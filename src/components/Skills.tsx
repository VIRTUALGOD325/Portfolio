import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'AI / ML',
    gradient: 'from-blue-500 to-purple-500',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'LangChain / LangGraph', level: 75 },
      { name: 'OpenAI / Gemini API', level: 80 },
      { name: 'Scikit-learn / SBERT', level: 78 },
    ],
  },
  {
    title: 'Backend & Data',
    gradient: 'from-green-500 to-teal-500',
    skills: [
      { name: 'FastAPI / Flask', level: 80 },
      { name: 'MongoDB', level: 75 },
      { name: 'PostgreSQL / SQL', level: 72 },
      { name: 'REST APIs', level: 85 },
    ],
  },
  {
    title: 'Frontend & Mobile',
    gradient: 'from-orange-500 to-pink-500',
    skills: [
      { name: 'React / TypeScript', level: 78 },
      { name: 'Android (Java)', level: 82 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Node.js', level: 70 },
    ],
  },
];

const additionalTech = [
  'Vector DBs (ChromaDB/Qdrant)',
  'Docker',
  'Kubernetes',
  'Git / GitHub',
  'Pandas / NumPy',
  'TensorFlow / Keras',
  'Matplotlib / Plotly',
  'Arduino / IoT',
  'Bluetooth (HC-05)',
  'WebSockets',
  'Firebase',
  'Postman / Swagger',
  'Linux',
  'Gradle',
  'CI/CD',
  'Microservices',
  'C / C++ / C#',
  'Java',
  'Power BI',
];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-card/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Core technologies I work with — focused on AI, backend, and mobile.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: categoryIndex * 0.15, duration: 0.6 }}
            >
              <Card className="border-border/50 bg-card/50 backdrop-blur-sm h-full">
                <CardHeader>
                  <CardTitle className={`text-xl bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 4 + skillIndex) * 0.12}s`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6">More Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {additionalTech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-muted/50 text-foreground rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
