import { motion } from "framer-motion";
import { Star, Code } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  { icon: Star, title: "5-Star SQL", subtitle: "HackerRank", stat: "⭐⭐⭐⭐⭐" },
  { icon: Code, title: "Problem Solver", subtitle: "150+ Questions on LeetCode", stat: "150+" },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements" subtitle="Milestones and recognition">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
      {achievements.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.5 }}
          className="glass rounded-xl p-8 text-center hover:shadow-glow transition-all duration-300 group"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
            <a.icon size={28} className="text-primary" />
          </div>
          <p className="text-2xl font-display font-bold text-primary mb-1">{a.stat}</p>
          <h3 className="font-display font-semibold text-foreground">{a.title}</h3>
          <p className="text-sm text-muted-foreground">{a.subtitle}</p>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
