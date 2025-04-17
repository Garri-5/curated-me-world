
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-navy leading-tight">
              Hi, I'm <span className="text-portfolio-blue">Your Name</span>
              <br />
              <span className="text-portfolio-gray">Web Developer</span>
            </h1>
            
            <p className="text-lg text-portfolio-gray max-w-lg">
              I build exceptional digital experiences with a focus on clean design 
              and performance. Let's work together to bring your ideas to life.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="bg-portfolio-blue hover:bg-portfolio-lightblue text-white">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Replace with your actual profile image */}
              <div className="w-full h-full bg-gradient-to-br from-portfolio-blue to-portfolio-accent flex items-center justify-center text-white">
                <span className="text-xl font-semibold">Your Photo</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-portfolio-blue" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
