import { motion } from "framer-motion";
import { Star, Code } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const achievements = [
  { icon: Star, title: "5-Star SQL", subtitle: "HackerRank", stat: "⭐⭐⭐⭐⭐" },
  { icon: Code, title: "Problem Solver", subtitle: "150+ Questions on LeetCode", stat: "150+" },
];

const AchievementsSection = () => (
  <SectionWrapper id="achievements" title="Achievements" subtitle="Milestones and recognition">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
      {achievements.map((a, i) => (
        <motion.div
          key={a.title}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.15, duration: 0.6, ease: "circOut" }}
          whileHover={{ y: -10 }}
          className="glass-premium rounded-[2rem] p-12 text-center transition-all duration-500 group border border-white/10 hover:border-primary/50 shadow-xl"
        >
          <div className="w-24 h-24 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 transition-all duration-500 border border-white/5 group-hover:border-primary/20 transform group-hover:rotate-6">
            <a.icon size={44} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-4xl font-display font-black text-primary mb-4 tracking-tighter">{a.stat}</p>
          <h3 className="font-display font-bold text-foreground text-2xl mb-2 tracking-tight">{a.title}</h3>
          <p className="text-muted-foreground font-medium uppercase tracking-[0.3em] text-[10px]">{a.subtitle}</p>
          
          <div className="mt-8 flex justify-center gap-1 opacity-30 group-hover:opacity-100 transition-opacity">
            {[1,2,3].map(j => (
              <div key={j} className="w-1.5 h-1.5 rounded-full bg-primary" />
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default AchievementsSection;
