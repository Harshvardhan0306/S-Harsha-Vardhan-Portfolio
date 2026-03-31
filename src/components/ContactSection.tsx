import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const contactLinks = [
  { icon: Mail, label: "haarshavardhan0306@gmail.com", href: "mailto:haarshavardhan0306@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/s-harsh-vardhan/" },
  { icon: Github, label: "GitHub", href: "https://github.com/Harshvardhan0306" },
];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Message sent! (Demo)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <SectionWrapper id="contact" title="Get in Touch" subtitle="Let's build something amazing together">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="glass-premium rounded-[2.5rem] p-10 md:p-16 border border-white/10 relative overflow-hidden"
        >
          {/* Decorative Background */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 blur-[100px]" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 blur-[100px]" />

          <div className="relative z-10 text-center">
            <h3 className="text-3xl md:text-5xl font-display font-bold mb-8 tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <motion.a
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:harshasv0306@gmail.com"
                className="flex items-center gap-3 bg-primary text-primary-foreground font-black px-10 py-5 rounded-2xl shadow-glow hover:shadow-primary/40 transition-all text-lg"
              >
                <Mail size={24} /> Say Hello
              </motion.a>
              
              <div className="flex gap-6">
                {[
                  { icon: Github, href: "https://github.com/Harshvardhan0306" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/s-harsh-vardhan/" },
                  { icon: Send, href: "https://wa.me/917993077399" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.2, rotate: 5, color: "hsl(var(--primary))" }}
                    href={social.href}
                    target="_blank"
                    className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground transition-all"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="mt-16 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground/40">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Open for Opportunities
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-500" />
                Based in India
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
