import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll(".about-text"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={sectionRef} className="py-24 relative" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="about-text">
              <h3 className="text-2xl font-bold mb-4 text-primary">Who I Am</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate Python Backend Developer and AI/ML enthusiast
                currently pursuing my MCA at Aditya PG College. With hands-on
                experience in building scalable backend systems and intelligent
                applications, I specialize in FastAPI, AI model integration, and
                cloud deployments.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-text">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                What I Do
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I develop robust backend solutions using Python and FastAPI,
                create AI-powered applications with machine learning models, and
                deploy scalable systems using Docker and Kubernetes. My
                expertise spans from building RAG agents to implementing face
                recognition systems and automated workflows.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="about-text">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently interning at Criativo Software Solutions as a Python
                Backend Developer, I've worked on multiple projects involving
                computer vision, natural language processing, and full-stack
                development. I won 1st place in Robo-Race 2k23 and completed an
                AI/ML internship with an A+ grade at ULearn.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">🎓</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Education</h4>
                    <p className="text-sm text-muted-foreground">MCA Student</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-3xl">💼</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Experience</h4>
                    <p className="text-sm text-muted-foreground">
                      AI-Full Stack Developer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Location</h4>
                    <p className="text-sm text-muted-foreground">
                      Kakinada, India
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                    <span className="text-3xl">✉️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Contact</h4>
                    <p className="text-sm text-muted-foreground">
                      tharuneswardoddi@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
