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

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  const activeCategory = categories.find(cat => cat.title === activeTab);

  return (
    <SectionWrapper id="skills" title="Skills" subtitle="Technologies and competencies I work with">
      <div className="flex flex-col items-center">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 z-10 relative">
          {categories.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(cat.title)}
              className={`px-6 py-2 md:px-8 md:py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === cat.title
                  ? "bg-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-background/50 text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground hover:scale-105"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="w-full min-h-[300px]">
          <AnimatePresence mode="wait">
            {activeCategory && (
              <motion.div
                key={activeCategory.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {activeCategory.items.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:shadow-glow border border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <skill.icon size={26} className="text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="font-semibold text-sm text-foreground text-center tracking-wide">
                      {skill.name}
                    </span>
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
