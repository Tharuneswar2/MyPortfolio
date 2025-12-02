import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "CampusVibe - DeepFace Application",
    description: "Full-stack image management system with face recognition capabilities. Features include image uploads (ZIP & individual), embedding storage in Qdrant, metadata in MongoDB, face clustering, and similarity search.",
    tech: ["Python", "DeepFace", "FastAPI", "MongoDB", "Qdrant", "Docker", "Linux"],
    highlights: [
      "Implemented real-time face recognition and similarity search",
      "Designed scalable backend with Docker deployment",
      "Optimized for high-concurrency requests"
    ]
  },
  {
    title: "Financial RAG Agent",
    description: "Retrieval-Augmented Generation system for answering queries about company financials. Integrated LangChain, MongoDB, and Qdrant for document processing and semantic search.",
    tech: ["LangChain", "Python", "MongoDB", "Qdrant", "RAG", "LLM"],
    highlights: [
      "Multi-step querying and data extraction",
      "Automated insights from financial reports",
      "Semantic search for complex financial queries"
    ]
  },
  {
    title: "Structured OCR on Invoice Images",
    description: "Advanced pipeline using HuggingFace's Nanonets-OCR model to extract structured data from invoices. Optimized for large-scale document processing with efficient memory management.",
    tech: ["Python", "HuggingFace", "OCR", "Computer Vision"],
    highlights: [
      "Automated financial data extraction",
      "Optimized image processing pipeline",
      "Integrated with downstream systems"
    ]
  },
  {
    title: "LinkedIn Posting Automation",
    description: "Automated LinkedIn content posting system using n8n workflow automation with AI integration. Generates post content dynamically using LLMs based on templates and data inputs.",
    tech: ["N8N", "Python", "LLM", "Automation", "API Integration"],
    highlights: [
      "AI-powered content generation",
      "Scheduled automated posting",
      "Template-based content creation"
    ]
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-24 relative" id="projects">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3 text-primary">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">▸</span>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 border border-primary/30 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-primary hover:bg-primary/90"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
