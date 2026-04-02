import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

interface FeaturedProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo?: string;
  highlights: string[];
}

const FeaturedProject = ({ 
  title, 
  description, 
  image, 
  tech, 
  github, 
  demo, 
  highlights 
}: FeaturedProjectProps) => {
  return (
    <div className="mb-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="glass-premium rounded-[2.5rem] overflow-hidden border border-white/10 group hover:shadow-glow transition-all duration-500 hover:-translate-y-1"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Image Section */}
          <div className="lg:col-span-7 relative overflow-hidden h-[300px] lg:h-full min-h-[400px]">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:hidden" />
            
            {/* Floating Badge */}
            <div className="absolute top-8 left-8">
              <span className="px-4 py-2 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] shadow-2xl">
                Featured Project
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <motion.h3 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight leading-tight"
            >
              {title}
            </motion.h3>
            
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground/90 mb-8 leading-relaxed"
            >
              {description}
            </motion.p>

            <motion.ul 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-4 mb-10"
            >
              {highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {highlight}
                </li>
              ))}
            </motion.ul>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {tech.map((t) => (
                <span key={t} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-bold text-primary tracking-widest uppercase">
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-foreground text-background font-black px-8 py-4 rounded-xl hover:scale-105 transition-transform"
              >
                <Github size={20} /> Code
              </a>
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 glass-premium font-black px-8 py-4 rounded-xl hover:bg-white/10 transition-all border border-white/20"
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturedProject;
