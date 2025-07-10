import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { useEffect, useRef } from 'react';

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      company: "Microsoft with Edunet Foundation",
      position: "AI/ML Intern",
      duration: "May - June 2025",
      description: "Developed a machine learning model to predict medical insurance costs using Python, Scikit-learn, and data preprocessing techniques.",
      achievements: [
        "Built and trained multiple regression models",
        "Achieved high accuracy in cost prediction",
        "Implemented comprehensive data visualization",
        "Applied feature engineering and normalization"
      ],
      logo: "🏢",
      color: "from-blue-500 to-purple-600"
    },
    {
      company: "Infosys Springboard",
      position: "Web Development Intern",
      duration: "October - December 2024",
      description: "Created an Agile Project Management Dashboard prototype with focus on intuitive user experience and frontend development.",
      achievements: [
        "Applied Agile methodology principles",
        "Developed interactive dashboard interface",
        "Gained expertise in frontend technologies",
        "Enhanced UI/UX design skills"
      ],
      logo: "💻",
      color: "from-green-500 to-teal-600"
    },
    {
      company: "Delhi Technological University",
      position: "Hackathon Participant",
      duration: "March 2025",
      description: "24-hour hackathon developing an AI-powered campus utility assistant using Python and machine learning.",
      achievements: [
        "Completed full project in 24 hours",
        "Implemented AI-powered features",
        "Demonstrated teamwork and leadership",
        "Rapid prototyping and development"
      ],
      logo: "🏆",
      color: "from-orange-500 to-red-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-in-right');
          }
        });
      },
      { threshold: 0.1 }
    );

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <Navigation />
      
      <main className="pt-32 px-6 pb-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fadeIn">
              Experience Journey
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slideUp">
              Follow my professional timeline through internships, projects, and achievements
            </p>
          </div>

          <div ref={timelineRef} className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`timeline-item flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-lg z-10"></div>
                
                {/* Content card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                  <div className="glass-card p-6 hover-lift relative">
                    {/* Arrow pointer */}
                    <div className={`absolute top-6 ${
                      index % 2 === 0 ? 'right-[-8px]' : 'left-[-8px]'
                    } w-4 h-4 bg-background transform rotate-45 border border-border/30`}></div>
                    
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center text-white text-lg`}>
                        {exp.logo}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold gradient-text mb-1">
                          {exp.position}
                        </h3>
                        <p className="text-accent font-medium">
                          {exp.company}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {exp.duration}
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Experience;