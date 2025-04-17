
import { Award, Trophy, Medal, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AchievementsSection = () => {
  const achievements = [
    {
      icon: <Trophy className="text-yellow-500" size={40} />,
      title: "Best Web Developer",
      organization: "Tech Awards 2023",
      description: "Recognized for exceptional contribution to web development industry"
    },
    {
      icon: <Medal className="text-blue-500" size={40} />,
      title: "Hackathon Winner",
      organization: "Global Code Fest",
      description: "First place in the annual coding competition with 500+ participants"
    },
    {
      icon: <Award className="text-green-500" size={40} />,
      title: "5-Star Certification",
      organization: "Web Development Institute",
      description: "Achieved highest level of expertise in frontend technologies"
    },
    {
      icon: <Star className="text-purple-500" size={40} />,
      title: "Open Source Contributor",
      organization: "GitHub",
      description: "Top 1% contributor with over 200 accepted pull requests"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="inline-block p-2 bg-blue-100 rounded-lg mb-2">
            <Award className="text-portfolio-blue" size={24} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-portfolio-navy">
            Achievements
          </h2>
          <div className="w-20 h-1 bg-portfolio-accent mt-4 mb-6 rounded-full"></div>
          <p className="text-portfolio-gray text-center max-w-2xl">
            Recognition and awards received throughout my professional journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="border-portfolio-lightgray hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-portfolio-navy mb-1">
                  {achievement.title}
                </h3>
                <p className="text-portfolio-blue font-medium mb-3">
                  {achievement.organization}
                </p>
                <p className="text-portfolio-gray text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 max-w-4xl mx-auto">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-48 h-48 rounded-full bg-white p-4 flex items-center justify-center shadow-md">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-portfolio-blue to-portfolio-accent flex items-center justify-center">
                <Trophy className="text-white" size={64} />
              </div>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold text-portfolio-navy mb-3">
              Excellence in Web Development
            </h3>
            <p className="text-portfolio-gray mb-4">
              With a proven track record of delivering high-quality projects and receiving recognition
              from industry leaders, I strive for excellence in every project I undertake. My commitment
              to continuous learning and improvement has led to numerous achievements throughout my career.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-white text-portfolio-blue rounded-full text-sm font-medium">
                100+ Projects Completed
              </span>
              <span className="px-3 py-1 bg-white text-portfolio-blue rounded-full text-sm font-medium">
                50+ Satisfied Clients
              </span>
              <span className="px-3 py-1 bg-white text-portfolio-blue rounded-full text-sm font-medium">
                10+ Industry Awards
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
