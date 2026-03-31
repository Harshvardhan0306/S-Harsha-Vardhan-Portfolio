import { motion } from "framer-motion";
import { GraduationCap, Download } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const resumeFilePath = "/resume.pdf";

const resumeItems = [
  {
    institution: "J.P. Morgan Chase & Co.",
    degree: "Quantitative Research Virtual Internship",
    period: "Worked on statistical modeling, probability, and financial simulations using Python.",
  },
  {
    institution: "Lovely Professional University",
    degree: "B.Tech CSE (CGPA: 6.67)",
    period: "2023 – 2027",
  },
  {
    institution: "Green Land Convent School",
    degree: "12th Grade (Percentage: 64%)",
    period: "Completed",
  },
  {
    institution: "Green Land Convent School",
    degree: "10th Grade (Percentage: 65%)",
    period: "Completed",
  },
];

const ResumeSection = () => (
  <SectionWrapper id="resume" title="Experience & Education" subtitle="My academic background and professional experience">
    <div className="max-w-4xl mx-auto space-y-8 mb-16">
      {resumeItems.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: "circOut" }}
          className="glass-premium rounded-3xl p-8 flex flex-col md:flex-row items-start md:items-center gap-8 group hover:border-primary/40 transition-all duration-500"
        >
          <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors border border-white/5 group-hover:border-primary/20">
            <GraduationCap size={32} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <div className="flex-grow">
            <h3 className="font-display font-bold text-2xl text-foreground/90 group-hover:text-foreground transition-colors mb-1 tracking-tight">{edu.institution}</h3>
            <p className="text-primary font-black uppercase tracking-widest text-[10px] mb-3">{edu.degree}</p>
            <p className="text-muted-foreground/70 text-sm leading-relaxed font-medium">{edu.period}</p>
          </div>
          <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-primary/30" />
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <motion.a
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        href={resumeFilePath}
        download
        className="inline-flex items-center gap-3 bg-foreground text-background font-black px-10 py-5 rounded-2xl hover:shadow-2xl transition-all text-sm uppercase tracking-widest"
      >
        <Download size={20} /> Download Full CV
      </motion.a>
    </motion.div>
  </SectionWrapper>
);

export default ResumeSection;
