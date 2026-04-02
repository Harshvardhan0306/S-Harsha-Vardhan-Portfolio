import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, FolderOpen, Download, Github, Linkedin, Mail, Sparkles, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const roles = [
  "Data Scientist",
  "Data Analyst",
  "ML Enthusiast"
];

const resumeFilePath = "/resume.pdf";

const HeroSection = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.7], [1, 0.9]);

  // Mouse move for parallax and spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 150 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (clientX - left) / width;
    const y = (clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  // Parallax for items
  const itemX = useTransform(smoothMouseX, [0, 1], [15, -15]);
  const itemY = useTransform(smoothMouseY, [0, 1], [15, -15]);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === role) {
        setTimeout(() => setIsDeleting(true), 2500);
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
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
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[100vh] flex items-center justify-center overflow-hidden py-24 md:py-32"
    >
      
      {/* Cinematic Spotlight - Ultra Subtle Interaction */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.3] md:opacity-[0.4]"
        style={{
          background: useTransform(
            [smoothMouseX, smoothMouseY],
            ([x, y]) => `radial-gradient(1000px circle at ${Number(x) * 100}% ${Number(y) * 100}%, rgba(var(--primary-rgb), 0.08), transparent 80%)`
          )
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity, scale, y }}
        className="container mx-auto text-center px-4 relative z-10"
      >
        {/* Availability Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-10 backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Open for Collaboration
        </motion.div>

        {/* Premium Profile Visual */}
        <motion.div
          variants={itemVariants}
          style={{ x: itemX, y: itemY }}
          className="relative mx-auto mb-12 w-44 h-44 md:w-56 md:h-56"
        >
          {/* Animated Ring */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
            <circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-primary/20"
            />
            <motion.circle
              cx="50%"
              cy="50%"
              r="48%"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeDasharray="100 300"
              className="text-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          {/* Floating Image Container */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
            className="w-full h-full rounded-full overflow-hidden p-2 relative group cursor-pointer transition-all duration-500"
            style={{ perspective: "1000px" }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-background border border-white/10 shadow-[0_0_40px_rgba(var(--primary-rgb),0.2)]">
              <img 
                src="/assets/profile.jpeg" 
                alt="S Harsha Vardhan" 
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" 
              />
            </div>
            {/* Inner Overlays */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(255,255,255,0.1)] pointer-events-none" />
          </motion.div>
          
          {/* Orbiting Element */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 pointer-events-none"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-primary rounded-full blur-[2px] shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" />
          </motion.div>
        </motion.div>

        {/* Content Hierarchy */}
        <motion.div variants={itemVariants} className="mb-10">
          <motion.div 
            className="flex items-center justify-center gap-3 mb-6 text-muted-foreground font-bold tracking-[0.3em] uppercase opacity-80"
          >
            <Sparkles size={16} className="text-primary animate-pulse" />
            <span className="text-xs md:text-sm">Hi, I'm S Harsha Vardhan</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight leading-[1.2] text-white">
            <span className="text-gradient animate-background-pan bg-[length:200%_auto] block mt-4 min-h-[1.4em]">
              {currentText}
              <span className="inline-block w-[4px] h-[0.8em] bg-primary ml-2 animate-pulse align-middle" />
            </span>
          </h1>
          
          {/* Technical Micro-Label */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-6 flex justify-center"
          >
            <span className="px-5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] md:text-xs font-bold text-primary/70 uppercase tracking-[0.2em] inline-flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
              Turning Data into Meaningful Solutions
            </span>
          </motion.div>
        </motion.div>

        <motion.p 
          variants={itemVariants}
          className="text-base md:text-xl text-muted-foreground/90 max-w-3xl mx-auto mb-14 leading-relaxed font-body tracking-wide"
        >
          Focused on data analytics, machine learning, and solving real-world problems through data-driven thinking.
        </motion.p>

        {/* Upgraded CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6">
          <motion.button
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            className="group relative px-10 py-4 rounded-xl bg-primary font-bold text-primary-foreground overflow-hidden transition-all shadow-[0_0_20px_rgba(var(--primary-rgb),0.3)] hover:shadow-[0_0_35px_rgba(var(--primary-rgb),0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            <span className="relative z-10 flex items-center gap-2">
              <FolderOpen size={18} className="group-hover:translate-x-1 transition-transform" />
              View Projects
            </span>
          </motion.button>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href={resumeFilePath}
              target="_blank"
              rel="noreferrer"
              className="glass-premium relative px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 group overflow-hidden"
            >
              <Eye size={18} className="group-hover:scale-110 transition-transform text-primary" />
              View Resume
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              href={resumeFilePath}
              download
              className="glass-premium relative px-8 py-4 rounded-xl font-bold text-white border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2 group overflow-hidden"
            >
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
              Download Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Premium Socials */}
        <motion.div
          variants={itemVariants}
          className="mt-20 flex justify-center gap-10"
        >
          {[
            { icon: Github, href: "https://github.com/Harshvardhan0306", color: "#fff" },
            { icon: Linkedin, href: "https://www.linkedin.com/in/s-harsh-vardhan/", color: "#0077b5" },
            { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=haarshavardhan0306@gmail.com", color: "hsl(var(--primary))" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target="_blank"
              whileHover={{ y: -8, scale: 1.2 }}
              className="relative p-3 rounded-full hover:bg-white/5 transition-colors group"
            >
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
              <social.icon size={26} className="relative z-10 text-muted-foreground group-hover:text-white transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-primary/60">Discover</span>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-1 h-12 rounded-full bg-gradient-to-b from-primary via-primary/50 to-transparent shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

