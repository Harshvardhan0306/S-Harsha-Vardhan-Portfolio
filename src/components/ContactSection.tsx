import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const contactLinks = [
  { icon: Mail, label: "haarshavardhan0306@gmail.com", href: "mailto:haarshavardhan0306@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/s-harsh-vardhan" },
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
    <SectionWrapper id="contact" title="Contact" subtitle="Let's connect and build something great">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Info */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-muted-foreground leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div className="space-y-4">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-secondary-foreground hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                  <link.icon size={18} className="text-primary" />
                </div>
                <span className="text-sm">{link.label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-xl p-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
            className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <input
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
            className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
          />
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
            rows={4}
            className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-gradient-primary text-primary-foreground font-semibold py-3 rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-glow"
          >
            <Send size={16} /> Send Message
          </button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
