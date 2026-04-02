import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutMeSection from "@/components/AboutMeSection";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import StatsSection from "@/components/StatsSection";
import SkillsSection from "@/components/SkillsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import AchievementsSection from "@/components/AchievementsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <BackgroundBlobs />
    <Navbar />
    <HeroSection />
    <AboutMeSection />
    <StatsSection />
    <SkillsSection />
    <SoftSkillsSection />
    <ProjectsSection />
    <CertificationsSection />
    <AchievementsSection />
    <ResumeSection />
    <ContactSection />
    <Footer />
  </div>
);

export default Index;
