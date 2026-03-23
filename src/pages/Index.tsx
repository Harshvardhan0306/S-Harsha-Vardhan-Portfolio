import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsSection />
    <SkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <AchievementsSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
    <WhatsAppButton />
  </div>
);

export default Index;
