
import { Briefcase, GraduationCap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ExperienceSection = () => {
  const workExperience = [
    {
      title: "Senior Front-end Developer",
      company: "Tech Solutions Inc.",
      period: "2021 - Present",
      description: "Lead the development of client-facing web applications using React, TypeScript, and Next.js. Improved site performance by 40% and implemented CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      period: "2018 - 2021",
      description: "Developed and maintained multiple web applications for clients across various industries. Worked with React, Node.js, and MongoDB to create scalable solutions."
    },
    {
      title: "Junior Developer",
      company: "StartUp Labs",
      period: "2016 - 2018",
      description: "Collaborated with senior developers to build and maintain web applications. Assisted in the implementation of new features and bug fixes."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in software engineering and web development. Graduated with distinction."
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Science Academy",
      period: "2010 - 2014",
      description: "Focused on programming fundamentals, data structures, and algorithms. Participated in coding competitions and hackathons."
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Code Camp",
      period: "2015",
      description: "Intensive 12-week program covering full stack web development with modern technologies and frameworks."
    }
  ];

  const TimelineItem = ({ item, isWorkExperience = true }) => {
    return (
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            {isWorkExperience ? (
              <Briefcase className="text-portfolio-blue" size={20} />
            ) : (
              <GraduationCap className="text-portfolio-blue" size={20} />
            )}
          </div>
          <div className="w-1 bg-blue-100 grow mt-2"></div>
        </div>
        <div className="pb-10">
          <span className="inline-block px-3 py-1 bg-blue-50 text-portfolio-blue rounded-full text-sm font-medium mb-2">
            {item.period}
          </span>
          <h3 className="text-xl font-bold text-portfolio-navy">
            {isWorkExperience ? item.title : item.degree}
          </h3>
          <h4 className="text-portfolio-blue font-medium mb-2">
            {isWorkExperience ? item.company : item.institution}
          </h4>
          <p className="text-portfolio-gray">
            {item.description}
          </p>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block p-2 bg-blue-100 rounded-lg mb-2">
            <Briefcase className="text-portfolio-blue" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-navy">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mt-4 mb-6 rounded-full"></div>
          <p className="text-portfolio-gray text-center max-w-2xl">
            My professional journey and academic background.
          </p>
        </div>

        <Tabs defaultValue="experience" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="experience">Work Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="experience">
            <div className="max-w-3xl mx-auto">
              {workExperience.map((job, index) => (
                <TimelineItem key={index} item={job} isWorkExperience={true} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="education">
            <div className="max-w-3xl mx-auto">
              {education.map((edu, index) => (
                <TimelineItem key={index} item={edu} isWorkExperience={false} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ExperienceSection;
