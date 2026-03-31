import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import FeaturedProject from "./FeaturedProject";

const projects = [
  {
    title: "Bird Migration Analysis",
    description: "Analyzed 10,000+ GPS data points to identify migration patterns using statistical techniques.",
    image: "/assets/bird.png",
    tech: ["Python", "Pandas", "Statistics"],
    github: "https://github.com/Harshvardhan0306/Migratory-Bird-Movement-Analysis-Using-Data-Analytics-",
    features: ["GPS Data Processing", "Spatio-temporal Analysis", "Pattern Recognition"],
    isFeatured: true
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
    description: "Developed a Space Invader game using Python and Pygame, implementing core game logic and real-time rendering.",
    image: "/assets/space-invader.png",
    tech: ["Python", "Pygame", "OOP"],
    github: "https://github.com/Harshvardhan0306/space-Invader-Game-Development-Using-Python",
  },
  {
    title: "Multithreading Simulator",
    description: "Built a simulator demonstrating threading models and visualizing thread behavior using Tkinter.",
    image: "/assets/multithreading.png",
    tech: ["Python", "OS", "Tkinter"],
    github: "https://github.com/Harshvardhan0306/Operating-Systems",
  },
];

const ProjectsSection = () => {
  const featured = projects.find(p => p.isFeatured);
  const others = projects.filter(p => !p.isFeatured);

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Featured work and technical explorations">
      <div className="flex flex-col">
        {featured && (
          <FeaturedProject 
            title={featured.title}
            description={featured.description}
            image={featured.image}
            tech={featured.tech}
            github={featured.github}
            highlights={featured.features || []}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "circOut" }}
              className="glass-premium rounded-3xl overflow-hidden group hover:border-primary/30 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Floating Tech Badges */}
                <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((t) => (
                    <span key={t} className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-md border border-white/10 text-[10px] font-bold text-white tracking-widest uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display font-bold text-2xl text-foreground group-hover:text-primary transition-colors tracking-tight">{project.title}</h3>
                  <motion.a
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    href={project.github}
                    target="_blank"
                    className="p-2 rounded-full bg-white/5 border border-white/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all"
                  >
                    <ArrowUpRight size={20} />
                  </motion.a>
                </div>
                
                <p className="text-muted-foreground/80 leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                    >
                      <Github size={14} /> Repository
                    </a>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full border border-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 transition-all duration-500">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProjectsSection;
