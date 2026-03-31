import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiPython,
  SiC,
  SiCplusplus,
  SiMysql,
  SiJupyter
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { IoLogoTableau } from "react-icons/io5";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { VscVscodeInsiders } from "react-icons/vsc";
import {
  BrainCircuit,
  BarChart3,
  LineChart,
  Database,
  Code2,
  Network,
  BarChart3 as PowerBiIcon // Fallback for Power BI
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const categories = [
  {
    title: "Languages",
    items: [
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Tools / Tech",
    items: [
      { name: "Power BI", icon: PowerBiIcon },
      { name: "Tableau", icon: IoLogoTableau },
      { name: "MySQL", icon: SiMysql },
      { name: "Excel", icon: PiMicrosoftExcelLogo },
      { name: "Jupyter Notebook", icon: SiJupyter },
      { name: "VS Code", icon: VscVscodeInsiders },
    ],
  },
  {
    title: "Concepts",
    items: [
      { name: "Machine Learning", icon: BrainCircuit },
      { name: "Data Analysis", icon: BarChart3 },
      { name: "Data Visualization", icon: LineChart },
      { name: "Statistics", icon: BarChart3 },
      { name: "DBMS", icon: Database },
      { name: "OOP", icon: Code2 },
      { name: "DSA", icon: Network },
    ],
  },
];

const TechMarquee = () => {
  const items = [
    "Python", "Machine Learning", "Data Analysis", "SQL", "Tableau", 
    "Power BI", "Excel", "Deep Learning", "NLP", "Computer Vision",
    "Azure", "AWS", "Docker", "Git", "Pandas", "NumPy", "Scikit-Learn"
  ];

  return (
    <div className="w-full overflow-hidden py-10 bg-white/[0.02] border-y border-white/5 mb-20 relative">
      <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex gap-12 whitespace-nowrap items-center"
      >
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="text-2xl md:text-4xl font-display font-bold text-muted-foreground/30 hover:text-primary/50 transition-colors cursor-default uppercase tracking-tighter"
          >
            {item} <span className="mx-6 text-primary/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  const activeCategory = categories.find(cat => cat.title === activeTab);

  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Technologies and competencies I work with">
      <div className="flex flex-col items-center">
        
        <TechMarquee />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 z-10 relative">
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-xs transition-all duration-500 border ${
                activeTab === cat.title
                  ? "bg-primary text-primary-foreground border-primary shadow-glow scale-110"
                  : "bg-white/5 text-muted-foreground border-white/10 hover:border-primary/50 hover:text-foreground hover:bg-white/10"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              >
                {activeCategory.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    whileHover={{ 
                      y: -10, 
                      transition: { duration: 0.2 } 
                    }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="glass-premium rounded-[1.5rem] p-8 flex flex-col items-center justify-center gap-6 group hover:border-primary/50 transition-all duration-500"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors border border-white/5 group-hover:border-primary/20">
                      <skill.icon size={32} className="text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-500" />
                    </div>
                    <span className="font-bold text-sm text-muted-foreground group-hover:text-foreground text-center tracking-widest uppercase">
                      {skill.name}
                    </span>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity -z-10 rounded-full" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
