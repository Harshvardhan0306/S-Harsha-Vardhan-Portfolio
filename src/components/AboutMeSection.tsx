import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Brain, Rocket, Code2, Lightbulb, CheckCircle2 } from "lucide-react";

const statCards = [
  {
    icon: GraduationCap,
    title: "B.Tech CSE 2027",
    desc: "Data Science Specialization",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    desc: "Model Building & Prediction",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Rocket,
    title: "Data Analytics",
    desc: "Insights from Real Datasets",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Code2,
    title: "Python & SQL",
    desc: "Core Tools for Data Work",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Analytical & Practical Thinking",
    color: "from-yellow-500/20 to-amber-500/20"
  }
];

const AboutMeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as any }
    }
  };

  return (
    <SectionWrapper id="about" title="About Me" subtitle="My journey and passion for technology">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-7xl mx-auto px-4">
        
        {/* Left Column: Stat Cards & Visuals */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4"
        >
          {statCards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`relative overflow-hidden group p-5 rounded-2xl glass-premium border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-lg`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="relative z-10 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-background/50 border border-white/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <card.icon size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm md:text-base leading-tight">
                    {card.title}
                  </h4>
                  <p className="text-muted-foreground text-xs font-medium">
                    {card.desc}
                  </p>
                </div>
                <CheckCircle2 size={16} className="ml-auto text-primary/40 group-hover:text-primary transition-colors" />
              </div>
            </motion.div>
          ))}
          
          {/* Decorative ambient glow */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        </motion.div>

        {/* Right Column: Bio & Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="glass-premium p-8 md:p-12 rounded-[2.5rem] relative overflow-hidden group border border-white/5 shadow-2xl">
            {/* Inner Glows */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[60px] rounded-full" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/10 blur-[60px] rounded-full" />

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">The Vision</span>
                <h3 className="text-3xl md:text-4xl font-bold font-display text-white leading-tight">
                  Turning Data into <br/>
                  <span className="text-gradient underline-animation">Meaningful Insights</span>
                </h3>
              </div>
              
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground/90 font-body">
                <p>
                  I am a dedicated <span className="text-white font-semibold">Data Scientist</span> currently pursuing my B.Tech in CSE (2027). My expertise lies in working with data, analytics, and <span className="text-primary font-medium font-bold">Machine Learning</span> to uncover meaningful patterns and solve practical real-world problems.
                </p>
                
                <p>
                  With a strong foundation in <span className="text-white font-semibold font-bold">Python</span>, <span className="text-white font-semibold font-bold">SQL</span>, and statistical analysis, I enjoy building <span className="text-primary font-medium font-bold">Predictive Models</span> and extracting insights that support analytical decision-making. My work focuses on data preprocessing, feature engineering, and visualization across <span className="text-white font-semibold italic">diverse datasets</span>.
                </p>
                
                <p>
                  I am focused on creating data-driven solutions that are technically sound, scalable, and impactful. As I continue to grow, I aim to strengthen my expertise in <span className="text-white font-semibold font-bold">Data Science</span> and <span className="text-primary font-medium font-bold">Analytics</span> while building projects that bridge data with practical value.
                </p>
              </div>

              {/* Tag Cloud */}
              <div className="pt-6 flex flex-wrap gap-3">
                {["Data", "Insights", "Prediction", "Analysis", "Impact"].map((tag, i) => (
                  <span 
                    key={i}
                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-primary/80 uppercase tracking-widest hover:bg-primary/10 hover:border-primary/30 transition-all cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutMeSection;

