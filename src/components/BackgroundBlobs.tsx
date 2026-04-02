import { motion } from "framer-motion";

const BackgroundBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-[1] bg-background">
      {/* Hero Profile Glow - Highly Focused Focal Point */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.03, 0.05, 0.03],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50%] h-[50%] max-w-[600px] rounded-full bg-[radial-gradient(circle,hsl(190,100%,70%,0.2)_0%,hsl(210,100%,60%,0.08)_40%,transparent_80%)] blur-[120px] mix-blend-screen"
      />

      {/* Mid-Section Ambient Accent - Soft Sidebar Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] right-[5%] w-[35%] h-[35%] max-w-[500px] rounded-full bg-[radial-gradient(circle,hsl(280,100%,60%,0.06)_0%,hsl(210,100%,60%,0.03)_40%,transparent_80%)] blur-[140px] mix-blend-screen"
      />

      {/* Bottom Reach Accent - Subtle Atmosphere Finish */}
      <motion.div
        animate={{
          x: [20, -20, 20],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[5%] left-[5%] w-[40%] h-[40%] max-w-[600px] rounded-full bg-[radial-gradient(circle,hsl(190,100%,50%,0.05)_0%,hsl(210,100%,60%,0.02)_50%,transparent_80%)] blur-[160px] mix-blend-screen"
      />
      
      {/* Refined Texture - Minimalist Depth */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.04] brightness-50 contrast-125 mix-blend-overlay pointer-events-none" />
      
      {/* Structural Universal Grid - Highly Transparent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:120px_120px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,#000_40%,transparent_100%)]" />
      
      {/* Depth Vignette - Subtle anchoring */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-background/20 opacity-30" />
    </div>
  );
};

export default BackgroundBlobs;

