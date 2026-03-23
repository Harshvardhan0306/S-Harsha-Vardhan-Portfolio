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
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      {certificates.map((certificate, i) => (
        <motion.div
          key={certificate.title}
          initial={{ scale: 0.88, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.45 }}
          className="glass rounded-xl p-7 text-center hover:shadow-glow transition-all duration-300 group border border-border/50"
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
            <Award size={28} className="text-primary" />
          </div>
          <p className="text-2xl font-display font-bold text-primary mb-2">{certificate.meta}</p>
          <h3 className="font-display font-semibold text-foreground text-lg leading-snug min-h-[3.5rem]">
            {certificate.title}
          </h3>
          {certificate.href ? (
            <a
              href={certificate.href}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition-colors"
            >
              <ExternalLink size={14} />
              View Certificate
            </a>
          ) : null}
        </motion.div>
      ))}
    </div>
  </SectionWrapper>
);

export default CertificationsSection;
