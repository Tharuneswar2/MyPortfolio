import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Cloud, Wrench, Box } from 'lucide-react';

const skillsData = {
  languages: {
    title: "Programming Languages",
    icon: Code2,
    skills: ["Python", "Java", "JavaScript", "C", "Shell Script"]
  },
  frameworks: {
    title: "Frameworks & Libraries",
    icon: Box,
    skills: ["FastAPI", "TensorFlow", "OpenCV", "DeepFace", "Langchain", "Hugging Face Transformers"]
  },
  tools: {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["Docker", "Kubernetes", "Git/GitHub", "N8N", "UI Path", "Nginx"]
  },
  cloud: {
    title: "Cloud & Databases",
    icon: Cloud,
    skills: ["AWS", "MongoDB", "Qdrant", "Linux", "Windows"]
  }
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section ref={sectionRef} className="py-24 relative" id="skills">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {Object.values(skillsData).map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-bold">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-sm rounded-full bg-muted/50 border border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Skill Bars for Key Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Core Competencies</h3>
          <div className="space-y-6">
            {[
              { name: "Python & FastAPI", level: 95 },
              { name: "AI/ML & Deep Learning", level: 90 },
              { name: "Docker & Kubernetes", level: 85 },
              { name: "Cloud Computing (AWS)", level: 80 },
              { name: "Database Management", level: 85 }
            ].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : {}}
                    transition={{ duration: 1, delay: 0.2 * index }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
