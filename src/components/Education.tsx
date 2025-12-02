import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Aditya PG College",
    location: "Kakinada, India",
    period: "2025 – Present",
    status: "In Progress"
  },
  {
    degree: "Bachelor's Degree in MCsAiR",
    institution: "Aditya Degree College",
    location: "Kakinada, India",
    period: "2022 – 2025",
    grade: "CGPA: 7.1"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "P.R.Govt Junior College",
    location: "Kakinada, India",
    period: "2020 – 2022",
    grade: "50%"
  }
];

const certificates = [
  "Python Essentials - Cisco",
  "Workshop on Python, ML & Data Analysis",
  "Competitive Coding - Mepro",
  "Ethical Hacking - Infosys Springboard",
  "Building RAG Agents with LLMs - Nvidia",
  "Pearson Certification"
];

const achievements = [
  {
    title: "Robo-Race 2k23 Winner",
    description: "1st place in automation event, leading team to victory among 13 competing campuses",
    icon: "🏆"
  },
  {
    title: "AWS Cloud Deployment",
    description: "Successfully deployed n8n on AWS EC2 with custom domain and HTTPS",
    icon: "☁️"
  }
];

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 relative" id="education">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="h-8 w-8 text-primary" />
              Academic Background
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                      <p className="text-primary mb-2">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="text-right space-y-1">
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      {edu.grade && (
                        <p className="text-sm font-semibold text-primary">{edu.grade}</p>
                      )}
                      {edu.status && (
                        <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Award className="h-8 w-8 text-primary" />
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="glass-card p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{achievement.icon}</span>
                    <div>
                      <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {achievement.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Certifications</h3>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 rounded-2xl"
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {certificates.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="text-primary">✓</span>
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
