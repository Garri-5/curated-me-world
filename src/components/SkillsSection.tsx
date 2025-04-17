
import { Code, Server, Palette, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="text-portfolio-blue" size={24} />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "TypeScript", level: 75 }
      ]
    },
    {
      icon: <Server className="text-portfolio-blue" size={24} />,
      title: "Backend Development",
      description: "Building robust and scalable server-side applications",
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "SQL", level: 65 }
      ]
    },
    {
      icon: <Palette className="text-portfolio-blue" size={24} />,
      title: "Design & UI/UX",
      description: "Crafting beautiful and user-friendly interfaces",
      skills: [
        { name: "Figma", level: 75 },
        { name: "UI Design", level: 70 },
        { name: "Responsive Design", level: 85 },
        { name: "Animation", level: 65 }
      ]
    },
    {
      icon: <LineChart className="text-portfolio-blue" size={24} />,
      title: "Other Skills",
      description: "Additional tools and technologies",
      skills: [
        { name: "Git & GitHub", level: 85 },
        { name: "Testing", level: 70 },
        { name: "Performance Optimization", level: 75 },
        { name: "SEO", level: 60 }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block p-2 bg-blue-100 rounded-lg mb-2">
            <Code className="text-portfolio-blue" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-navy">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mt-4 mb-6 rounded-full"></div>
          <p className="text-portfolio-gray text-center max-w-2xl">
            A showcase of my technical abilities and professional expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-portfolio-lightgray overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-portfolio-navy">{category.title}</h3>
                    <p className="text-sm text-portfolio-gray">{category.description}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium text-portfolio-navy">{skill.name}</span>
                        <span className="text-sm text-portfolio-gray">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
