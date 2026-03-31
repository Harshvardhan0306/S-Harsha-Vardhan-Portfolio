import { motion } from "framer-motion";

const BackgroundBlobs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-background">
      {/* Premium Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[5%] -left-[5%] w-[60%] h-[60%] bg-primary/15 blur-[140px] rounded-full mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [0, -70, 0],
          y: [0, 90, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[15%] -right-[5%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full mix-blend-screen"
      />
      <motion.div
        animate={{
          x: [30, -30, 30],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[15%] left-[20%] w-[70%] h-[70%] bg-purple-600/15 blur-[160px] rounded-full mix-blend-screen"
      />
      
      {/* Subtle Grainy Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] brightness-50 contrast-125 mix-blend-overlay pointer-events-none" />
      
      {/* Modern Refined Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Radial Soft Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 opacity-40" />
    </div>
  );
};

export default BackgroundBlobs;

