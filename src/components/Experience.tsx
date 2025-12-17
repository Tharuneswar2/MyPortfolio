import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "AI-ML Full Stack Developer",
    company: "Criativo Software Solutions Pvt Ltd",
    period: "August 2024 – Present",
    description:
      "Developed and managed backend components for web applications using Python and FastAPI framework. Solved complex problems by identifying and fixing issues in the code, improving overall application functionality.",
    achievements: [
      "Built scalable REST APIs using FastAPI",
      "Optimized backend performance and response times",
      "Implemented automated testing and debugging solutions",
    ],
  },
  {
    role: "AI & ML Intern",
    company: "ULearn",
    period: "May 2024 – July 2024",
    description:
      "Completed comprehensive AI & ML training using Python, achieving an A+ grade. Gained hands-on experience in machine learning concepts, algorithms, and Python-based AI development.",
    achievements: [
      "Developed multiple AI/ML projects with real-world applications",
      "Mastered machine learning algorithms and model design",
      "Achieved A+ grade for outstanding performance",
    ],
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 relative" id="experience">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{exp.role}</h3>
                      <p className="text-lg text-primary">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-sm text-muted-foreground">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
