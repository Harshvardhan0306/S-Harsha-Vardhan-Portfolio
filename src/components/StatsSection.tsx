import { motion } from "framer-motion";

const stats = [
  { value: "5+", label: "Languages" },
  { value: "5+", label: "Projects" },
  { value: "240+", label: "Commits" },
  { value: "5+", label: "Certificates" },
];

const StatsSection = () => (
  <section className="py-16 relative z-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="glass rounded-xl p-6 md:p-8 text-center hover:shadow-glow transition-all duration-300"
          >
            <h3 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2 drop-shadow-[0_0_15px_rgba(var(--primary),0.3)]">
              {stat.value}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
