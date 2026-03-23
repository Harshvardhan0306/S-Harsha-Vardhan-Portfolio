import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "0.0.0.0",
    port: 5173,
    strictPort: false,
    hmr: {
      overlay: false,
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: true,
  },
  optimizeDeps: {
    include: ["react-icons/si", "react-icons/fa", "react-icons/lu", "react-icons/io5", "react-icons/pi", "react-icons/vsc"],
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
