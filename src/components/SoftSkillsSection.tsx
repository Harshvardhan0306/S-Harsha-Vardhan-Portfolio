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
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass p-6 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 font-display">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SoftSkillsSection;
