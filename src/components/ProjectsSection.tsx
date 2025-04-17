
import { Folder, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ProjectsSection = () => {
  const categories = ["All", "Web", "Mobile", "Design"];
  
  const projects = [
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with payment integration and user authentication.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveLink: "#",
      githubLink: "#",
      category: "Web"
    },
    {
      title: "Task Management App",
      description: "A productivity app for managing tasks, projects and team collaboration.",
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React Native", "Firebase", "Redux"],
      liveLink: "#",
      githubLink: "#",
      category: "Mobile"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
      category: "Web"
    },
    {
      title: "Music Streaming UI",
      description: "A sleek user interface design for a music streaming service.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      technologies: ["Figma", "Adobe XD", "Illustrator"],
      liveLink: "#",
      githubLink: "#",
      category: "Design"
    }
  ];

  const ProjectCard = ({ project }) => (
    <Card className="overflow-hidden border-portfolio-lightgray transition-all duration-300 hover:shadow-lg group">
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-500"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex space-x-4">
            <a 
              href={project.liveLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
            <a 
              href={project.githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 bg-white rounded-full hover:bg-portfolio-blue hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-portfolio-navy mb-2">{project.title}</h3>
        <p className="text-portfolio-gray mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="bg-blue-50 text-portfolio-blue border-blue-200">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block p-2 bg-blue-100 rounded-lg mb-2">
            <Folder className="text-portfolio-blue" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-navy">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mt-4 mb-6 rounded-full"></div>
          <p className="text-portfolio-gray text-center max-w-2xl">
            A collection of my recent work, showcasing my skills and expertise.
          </p>
        </div>

        <Tabs defaultValue="All" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category} value={category}>
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => category === "All" || project.category === category)
                  .map((project, index) => (
                    <ProjectCard key={index} project={project} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex justify-center mt-12">
          <Button className="bg-portfolio-blue hover:bg-portfolio-lightblue text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
