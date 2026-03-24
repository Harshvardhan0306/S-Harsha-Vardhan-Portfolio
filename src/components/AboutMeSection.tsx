import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const AboutMeSection = () => {
  return (
    <SectionWrapper id="about" title="About Me" subtitle="Passionate about data-driven problem solving">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass p-8 md:p-12 rounded-2xl relative overflow-hidden group hover:shadow-glow transition-all duration-500 border border-border/50 hover:border-primary/30">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[100px] group-hover:bg-primary/20 transition-colors duration-500" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/10 blur-[100px] group-hover:bg-primary/20 transition-colors duration-500" />

          <div className="relative z-10 text-center">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              I am a dedicated <span className="text-gradient font-bold">Data Science</span> enthusiast with a strong foundation in 
              <span className="text-gradient font-bold"> Python</span> and its ecosystem. My passion lies in extracting meaningful insights 
              from complex datasets and building intelligent systems that solve real-world problems.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground">
              With expertise in <span className="text-gradient font-bold">Machine Learning</span> and statistical modeling, 
              I strive to bridge the gap between technical complexity and business value. I am constantly exploring new technologies 
              and methodologies to stay at the forefront of the rapidly evolving AI landscape.
            </p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default AboutMeSection;
