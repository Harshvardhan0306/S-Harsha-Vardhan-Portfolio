import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const Counter = ({ value, label }: { value: string; label: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  
  const target = parseInt(value);
  const isPlus = value.includes("+");

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = target;
      if (start === end) return;

      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="glass-premium rounded-2xl p-8 text-center transition-all duration-500 group relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <h3 className="text-5xl md:text-6xl font-display font-bold text-gradient mb-3 tracking-tighter">
        {count}{isPlus ? "+" : ""}
      </h3>
      <p className="text-sm md:text-base text-muted-foreground font-semibold uppercase tracking-[0.2em]">
        {label}
      </p>
      
      {/* Decorative dot */}
      <div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-primary/30 group-hover:bg-primary transition-colors" />
    </motion.div>
  );
};

const stats = [
  { value: "5+", label: "Languages" },
  { value: "5+", label: "Projects" },
  { value: "240+", label: "Commits" },
  { value: "5+", label: "Certificates" },
];

const StatsSection = () => (
  <section className="py-24 relative z-10 overflow-hidden">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <Counter key={stat.label} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
