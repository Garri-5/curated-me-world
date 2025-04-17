import { User, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block p-2 bg-blue-100 rounded-lg mb-2">
            <User className="text-portfolio-blue" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-navy">
            About Me
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mt-4 mb-6 rounded-full"></div>
          <p className="text-portfolio-gray text-center max-w-2xl">
            Get to know me better - my background, passions and what drives me forward.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-portfolio-gray">
                <span className="text-xl">About Image</span>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-portfolio-blue rounded-lg flex items-center justify-center text-white font-bold">
                <div className="text-center">
                  <div className="text-3xl">5+</div>
                  <div className="text-sm">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-2xl font-bold text-portfolio-navy">
              A passionate developer with a love for creating exceptional digital experiences
            </h3>
            
            <p className="text-portfolio-gray">
              I am a dedicated and creative web developer with a strong passion for building 
              modern and performant web applications. With years of experience in the field, 
              I've developed a keen eye for detail and a commitment to writing clean, efficient code.
            </p>
            
            <p className="text-portfolio-gray">
              My journey in web development began when I discovered my passion for turning ideas into 
              interactive digital experiences. Since then, I've worked on various projects ranging 
              from small business websites to complex web applications.
            </p>
            
            <div className="flex items-center space-x-4 pt-4">
              <Button 
                className="bg-portfolio-blue hover:bg-portfolio-lightblue text-white"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <FileText className="mr-2" size={20} />
                Download Resume
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <Card className="border-portfolio-lightgray">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-portfolio-blue font-semibold">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-navy">Problem Solver</h4>
                    <p className="text-sm text-portfolio-gray">Creative solutions for complex problems</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-lightgray">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-portfolio-blue font-semibold">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-navy">Team Player</h4>
                    <p className="text-sm text-portfolio-gray">Collaborative and communicative</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-lightgray">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-portfolio-blue font-semibold">03</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-navy">Fast Learner</h4>
                    <p className="text-sm text-portfolio-gray">Quickly adapt to new technologies</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-portfolio-lightgray">
                <CardContent className="p-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-portfolio-blue font-semibold">04</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-portfolio-navy">Detail Oriented</h4>
                    <p className="text-sm text-portfolio-gray">Meticulous attention to quality</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
