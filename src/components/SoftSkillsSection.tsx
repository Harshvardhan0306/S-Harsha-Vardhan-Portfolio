import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Lightbulb, 
  Users, 
  Clock, 
  RefreshCcw, 
  Search 
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const softSkills = [
  {
    title: "Communication",
    description: "Effectively conveying complex technical ideas to non-technical stakeholders.",
    icon: MessageSquare,
  },
  {
    title: "Problem Solving",
    description: "Analytical mindset with a focus on finding efficient and scalable solutions.",
    icon: Lightbulb,
  },
  {
    title: "Teamwork",
    description: "Collaborative approach to achieving shared goals in cross-functional teams.",
    icon: Users,
  },
  {
    title: "Time Management",
    description: "Prioritizing tasks and meeting deadlines in fast-paced environments.",
    icon: Clock,
  },
  {
    title: "Adaptability",
    description: "Quickly learning and embracing new technologies and methodologies.",
    icon: RefreshCcw,
  },
  {
    title: "Critical Thinking",
    description: "Approaching challenges with a logical and evidence-based perspective.",
    icon: Search,
  },
];

const SoftSkillsSection = () => {
  return (
    <SectionWrapper id="soft-skills" title="Soft Skills" subtitle="The human side of my technical expertise">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-premium p-8 rounded-2xl border border-white/10 group hover:border-primary/50 transition-all duration-500"
          >
            <div className="flex flex-col gap-6">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-all duration-500 border border-white/5 group-hover:border-primary/20">
                <skill.icon className="w-7 h-7 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3 font-display tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">{skill.title}</h3>
                <p className="text-muted-foreground/80 text-sm leading-relaxed group-hover:text-muted-foreground transition-colors">
                  {skill.description}
                </p>
              </div>
            </div>
            
            {/* Corner decorator */}
            <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-2 h-2 rounded-full bg-primary/20" />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SoftSkillsSection;
