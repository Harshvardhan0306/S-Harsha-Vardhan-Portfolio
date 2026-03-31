const Footer = () => (
  <footer className="py-20 border-t border-white/5 relative overflow-hidden mt-20">
    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-30" />
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <p className="text-2xl font-display font-black tracking-tighter mb-2">
            HV<span className="text-primary">.</span>
          </p>
          <p className="text-muted-foreground/40 text-[10px] font-black uppercase tracking-[0.3em]">
            Digital Craftsman & Data Explorer
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-muted-foreground/60 text-xs font-bold uppercase tracking-widest mb-2">
            &copy; {new Date().getFullYear()} S Harsha Vardhan
          </p>
          <p className="text-muted-foreground/30 text-[10px] font-medium leading-relaxed">
            Built with React, Tailwind & Passion for Design.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
