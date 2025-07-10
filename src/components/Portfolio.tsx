import { Link } from 'react-router-dom';
import { ArrowRight, Code, Briefcase, Award, User, Star } from 'lucide-react';

const Portfolio = () => {
  const sections = [
    {
      title: "Projects",
      description: "Explore my AI/ML and web development projects",
      icon: <Code className="w-8 h-8" />,
      link: "/projects",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Experience",
      description: "My professional journey and internships",
      icon: <Briefcase className="w-8 h-8" />,
      link: "/experience",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Certifications",
      description: "Professional certifications and achievements",
      icon: <Award className="w-8 h-8" />,
      link: "/certifications",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "Gallery",
      description: "Events, learning moments, and memories",
      icon: <User className="w-8 h-8" />,
      link: "/gallery",
      color: "from-pink-500 to-purple-600"
    },
    {
      title: "Reviews",
      description: "Feedback and ratings from colleagues",
      icon: <Star className="w-8 h-8" />,
      link: "/reviews",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Portfolio Overview
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover my journey as a Computer Science student passionate about AI/ML and technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <Link
              key={section.title}
              to={section.link}
              className="group glass-card p-6 hover-lift block transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {section.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                {section.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {section.description}
              </p>
              
              <div className="flex items-center text-primary group-hover:text-accent transition-colors">
                <span className="text-sm font-medium">Explore</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;