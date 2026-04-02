import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import FeaturedProject from "./FeaturedProject";

const projects = [
  {
    title: "Bird Migration Analysis",
    description: "Built a high-performance analytical pipeline for avian movement patterns.",
    image: "/assets/bird.png",
    tech: ["Python", "Pandas", "Matplotlib", "Statistics"],
    github: "https://github.com/Harshvardhan0306/Migratory-Bird-Movement-Analysis-Using-Data-Analytics-",
    bullets: [
      "Analyzed 10,000+ GPS data points to identify seasonal migration trends",
      "Developed statistical models to identify spatio-temporal bottlenecks",
      "Visualized biological insights using advanced plotting techniques"
    ],
    isFeatured: true
  },
  {
    title: "Netflix Analysis & ML",
    description: "Developed a predictive framework for streaming content success.",
    image: "/assets/netflix.png",
    tech: ["Python", "ML", "Pandas", "Scikit-Learn"],
    github: "https://github.com/Harshvardhan0306/Netflix-Dataset-Analysis-and-Machine-Learning-Modeling",
    bullets: [
      "Processed and cleaned 16,000+ records for unbiased model training",
      "Built a Random Forest model achieving high predictive accuracy",
      "Implemented performance evaluation using RMSE and R-squared metrics"
    ],
  },
  {
    title: "KidGuard Parental System",
    description: "Designed a robust security application for child digital safety.",
    image: "/assets/kidguard.png",
    tech: ["Security", "Web Dev", "System Design"],
    github: "https://github.com/Harshvardhan0306",
    bullets: [
      "Developed a system to block unauthorized purchases and harmful ads",
      "Integrated real-time notification alerts for parental monitoring",
      "Engineered a scalable architecture for secure system management"
    ],
  },
  {
    title: "Space Invader Game",
    description: "Engineered a classic arcade experience using OOP principles.",
    image: "/assets/space-invader.png",
    tech: ["Python", "Pygame", "OOP"],
    github: "https://github.com/Harshvardhan0306/space-Invader-Game-Development-Using-Python",
    bullets: [
      "Developed interactive game logic using Python and Pygame",
      "Implemented real-time physics and collision detection systems",
      "Architected the codebase using modular Object-Oriented design"
    ],
  },
  {
    title: "Multithreading Simulator",
    description: "Engineered a visual simulator for operating system thread scheduling.",
    image: "/assets/multithreading.png",
    tech: ["Python", "OS", "Tkinter"],
    github: "https://github.com/Harshvardhan0306/Operating-Systems",
    bullets: [
      "Developed a GUI-based simulator to visualize multi-threading behavior",
      "Implemented threading models and performance monitoring metrics",
      "Designed an interactive interface with Tkinter for process visualization"
    ],
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
            highlights={featured.bullets || []}
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
              className="glass-premium rounded-3xl overflow-hidden group hover:border-primary/50 hover:-translate-y-2 hover:shadow-glow transition-all duration-500 flex flex-col h-full relative"
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
                  {project.tech.map((t) => (
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
                
                <p className="text-muted-foreground/90 font-bold mb-4 tracking-tight">
                  {project.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {project.bullets?.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground/70 leading-relaxed">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>

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
