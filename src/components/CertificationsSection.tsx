import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const certificates = [
  {
    title: "Bits and Bytes of Computer Networking",
    href: "",
    meta: "Certificate",
  },
  {
    title: "IBM Exploratory Data Analysis for machine learning",
    href: "",
    meta: "Certificate",
  },
  {
    title: "APTAI Certificate",
    href: "",
    meta: "Certificate",
  },
  {
    title: "Data Analyst Certificate",
    href: "",
    meta: "Certificate",
  },
  {
    title: "Coding Master Certificate",
    href: "",
    meta: "Certificate",
  },
];

const CertificationsSection = () => (
  <SectionWrapper id="certifications" title="Certificate">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {certificates.map((certificate, i) => (
        <motion.div
          key={certificate.title}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6, ease: "circOut" }}
          whileHover={{ y: -10 }}
          className="glass-premium rounded-3xl p-10 text-center transition-all duration-500 group border border-white/10 flex flex-col h-full hover:border-primary/50 shadow-lg hover:shadow-primary/10"
        >
          <div className="w-20 h-20 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 transition-all duration-500 border border-white/5 group-hover:border-primary/20">
            <Award size={36} className="text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-primary/60 mb-4">{certificate.meta}</p>
          <h3 className="font-display font-bold text-foreground text-xl leading-tight mb-8 flex-grow">
            {certificate.title}
          </h3>
          {certificate.href ? (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={certificate.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-6 py-3 text-sm font-bold text-foreground hover:bg-white/10 transition-colors mt-auto uppercase tracking-widest"
            >
              <ExternalLink size={16} />
              Verify
            </motion.a>
          ) : (
            <div className="h-[46px]" /> 
          )}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
