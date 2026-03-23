import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ id, title, subtitle, children, className = "" }: Props) => (
  <section id={id} className={`section-padding ${className}`}>
    <div className="container mx-auto">
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-3">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && <p className="text-muted-foreground max-w-xl mx-auto">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

export default SectionWrapper;
