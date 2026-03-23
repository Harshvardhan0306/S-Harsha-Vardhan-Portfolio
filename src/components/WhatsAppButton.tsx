import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-pulse-glow"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-foreground" />
  </a>
);

export default WhatsAppButton;
