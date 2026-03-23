import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const projects = [
  {
    title: "Bird Migration Analysis",
    description: "Analyzed 10,000+ GPS data points to identify migration patterns using statistical techniques.",
    image: "/assets/bird.png",
    tech: ["Python", "Pandas", "Statistics"],
    github: "https://github.com/Harshvardhan0306/Migratory-Bird-Movement-Analysis-Using-Data-Analytics-",
  },
  {
    title: "Netflix Data Analysis & ML",
    description: "Processed 16,000+ records and built a Random Forest model achieving high accuracy with low RMSE.",
    image: "/assets/netflix.png",
    tech: ["Python", "Pandas", "Scikit-learn"],
    github: "https://github.com/Harshvardhan0306/Netflix-Dataset-Analysis-and-Machine-Learning-Modeling",
  },
  {
    title: "KidGuard – Parental Control System",
    description: "Built a system to restrict unauthorized purchases, send alerts, and block harmful ads.",
    image: "/assets/kidguard.png",
    tech: ["Web App", "Security", "System Design"],
    github: "https://github.com/Harshvardhan0306",
  },
  {
    title: "Space Invader Game",
    description: "Developed a Space Invader game using Python and Pygame, implementing core game logic, collision detection, and real-time rendering. Focused on object-oriented design and interactive gameplay mechanics.",
    image: "/assets/space-invader.png",
    tech: ["Python", "Game Development", "OOP"],
    github: "https://github.com/Harshvardhan0306/space-Invader-Game-Development-Using-Python",
  },
  {
    title: "Multithreading Simulator (Operating Systems)",
    description: "Built a multithreading simulator demonstrating Many-to-One, One-to-Many, and Many-to-Many threading models. Visualized thread behavior using Python and Tkinter.",
    image: "/assets/multithreading.png",
    tech: ["Python", "Operating Systems", "Multithreading"],
    github: "https://github.com/Harshvardhan0306/Operating-Systems",
  },
];

const ProjectsSection = () => (
  <SectionWrapper id="projects" title="Projects" subtitle="Featured work and technical explorations">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.15, duration: 0.6 }}
          className="glass rounded-xl overflow-hidden group hover:shadow-glow transition-all duration-300"
        >
          <div className="relative overflow-hidden h-48">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors duration-300" />
          </div>
          <div className="p-6">
            <h3 className="font-display font-semibold text-xl text-foreground mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map((t) => (
                <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:opacity-80 transition-opacity"
            >
              <Github size={16} /> View on GitHub
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default ProjectsSection;
