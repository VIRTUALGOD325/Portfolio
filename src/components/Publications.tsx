import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, BookOpen, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const publications = [
  {
    title: 'DocInsight: AI-Powered Document Originality and Plagiarism Risk Detection',
    conference: 'SSIC 2025',
    publisher: 'Best Paper Award',
    description:
      'Multi-layered document originality scoring system combining SBERT semantic similarity, stylometric analysis, and citation masking for explainable AI-driven plagiarism detection.',
    icon: Trophy,
    badgeColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    iconColor: 'text-yellow-400',
    bgGradient: 'from-yellow-500/10 to-orange-500/10',
    year: '2025',
  },
  {
    title: 'SmartCom 2026: Intelligent Systems for Communication and Connectivity',
    conference: 'SmartCom 2026',
    publisher: 'Springer LNNS',
    description:
      'Published in Springer Lecture Notes in Networks and Systems — exploring intelligent communication systems leveraging AI and embedded technologies.',
    icon: BookOpen,
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    iconColor: 'text-blue-400',
    bgGradient: 'from-blue-500/10 to-purple-500/10',
    year: '2026',
  },
];

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="publications" className="py-20 bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Research <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Peer-reviewed research in AI systems and intelligent communication.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {publications.map((pub, index) => (
            <motion.div
              key={pub.conference}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className={`border-border/50 bg-gradient-to-br ${pub.bgGradient} backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-full bg-card/60 shrink-0">
                      <pub.icon className={`h-6 w-6 ${pub.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border ${pub.badgeColor}`}>
                          {pub.publisher}
                        </span>
                        <span className="text-xs text-muted-foreground">{pub.year}</span>
                      </div>
                      <h3 className="font-bold text-base leading-tight">{pub.title}</h3>
                      <p className="text-sm text-primary mt-1">{pub.conference}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {pub.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
