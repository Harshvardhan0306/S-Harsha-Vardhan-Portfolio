import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FolderOpen, Download } from "lucide-react";
import { useState, useEffect } from "react";

const roles = [
  "Data Scientist",
  "Data Engineer",
  "Python Full Stack Developer"
];

const resumeFilePath = "/resume.pdf";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setCurrentText(
          role.substring(0, currentText.length + (isDeleting ? -1 : 1))
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0"
      >
        <img src="/assets/hero-bg-v2.png" alt="" className="w-full h-[120%] object-cover object-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        <div className="absolute inset-0 bg-background/20" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto text-center px-4 pt-20 relative z-10"
      >
        {/* Profile */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mx-auto mb-8 w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/50 shadow-glow animate-pulse-glow"
        >
          <img src="/assets/profile.jpeg" alt="S Harsha Vardhan" className="w-full h-full object-cover object-[center_top]" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold font-display mb-4"
        >
          Hi, I'm <span className="text-gradient">S Harsha Vardhan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          <span className="font-semibold text-foreground block mb-2 min-h-[1.75rem] md:min-h-[2rem]">
            <span className="text-gradient">{currentText}</span>
            <span className="animate-pulse">|</span>
          </span>
          I build data-driven solutions and intelligent systems using Python and machine learning.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg flex items-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
          >
            <FolderOpen size={18} /> View Projects
          </button>
          <a
            href={resumeFilePath}
            download
            className="border border-primary/50 text-primary font-semibold px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-primary/10 transition-colors"
          >
            <Download size={18} /> Download Resume
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        >
          <ArrowDown size={24} className="text-primary/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
