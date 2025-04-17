
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import RevealOnScroll from "@/components/RevealOnScroll";

const Index = () => {
  // Effect to handle scroll animations
  useEffect(() => {
    // Any additional initialization if needed
    document.title = "Your Name - Portfolio";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <HeroSection />
        
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>
        
        <RevealOnScroll delay={100}>
          <SkillsSection />
        </RevealOnScroll>
        
        <RevealOnScroll delay={200}>
          <ProjectsSection />
        </RevealOnScroll>
        
        <RevealOnScroll delay={300}>
          <ExperienceSection />
        </RevealOnScroll>
        
        <RevealOnScroll delay={400}>
          <AchievementsSection />
        </RevealOnScroll>
        
        <RevealOnScroll delay={500}>
          <ContactSection />
        </RevealOnScroll>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
