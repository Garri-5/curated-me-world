
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-navy text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Your Name</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              A passionate web developer focused on creating beautiful, 
              functional, and user-friendly websites and applications.
            </p>
            <Button className="bg-portfolio-blue hover:bg-portfolio-lightblue">
              <a href="#contact">Let's Talk</a>
            </Button>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect</h4>
            <ul className="space-y-2">
              {[
                { name: "Email", link: "mailto:your.email@example.com" },
                { name: "LinkedIn", link: "#" },
                { name: "GitHub", link: "#" },
                { name: "Twitter", link: "#" },
                { name: "Instagram", link: "#" }
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.link} 
                    className="text-gray-300 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-center md:text-left">
            © {currentYear} Your Name. All rights reserved.
          </p>
          <p className="text-gray-300 flex items-center mt-4 md:mt-0">
            Made with <Heart className="mx-1 text-red-500" size={16} /> by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
