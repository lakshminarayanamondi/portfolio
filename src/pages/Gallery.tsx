import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Calendar, MapPin, Users, Award, Code, BookOpen } from 'lucide-react';
import { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const journeyDetails = {
    'Events': {
      icon: <Award className="w-5 h-5" />,
      description: "Participating in hackathons, competitions, and tech events has been a cornerstone of my learning journey. These experiences have taught me to work under pressure, collaborate effectively, and think innovatively.",
      highlights: [
        "24-hour hackathon at Delhi Technological University - March 2025",
        "E-Cell DTU Execute 4.0 - Top 100 achievement",
        "Various coding competitions and tech meetups",
        "Networking with industry professionals and peers"
      ]
    },
    'Learning': {
      icon: <BookOpen className="w-5 h-5" />,
      description: "My continuous learning journey spans across multiple technologies and domains. From foundational programming to advanced AI/ML concepts, each step has built upon the previous one.",
      highlights: [
        "Python programming mastery through hands-on projects",
        "Machine Learning algorithms and implementation",
        "Web development with modern frameworks",
        "Cloud computing and AI services on Azure platform",
        "Data structures and algorithms optimization"
      ]
    },
    'Projects': {
      icon: <Code className="w-5 h-5" />,
      description: "Each project represents a milestone in my technical growth. From simple scripts to complex ML models, these projects showcase my evolution as a developer.",
      highlights: [
        "Medical Insurance Cost Prediction - Advanced ML project",
        "Agile Project Management Dashboard - Full-stack development",
        "AI Campus Assistant - 24-hour hackathon project",
        "Various mini-projects in data analysis and prediction"
      ]
    },
    'Workspace': {
      icon: <Users className="w-5 h-5" />,
      description: "My development environment and workspace setup reflects my commitment to efficient coding and continuous improvement. The tools and setup evolve with my growing expertise.",
      highlights: [
        "VS Code with optimized extensions for Python and web development",
        "Jupyter Notebook for data science and ML experiments",
        "Google Colab for cloud-based ML model training",
        "Git version control for project management",
        "Multiple monitor setup for enhanced productivity"
      ]
    },
    'Collaboration': {
      icon: <Users className="w-5 h-5" />,
      description: "Working with teams and mentors has been instrumental in my growth. These collaborative experiences have enhanced my communication skills and technical knowledge.",
      highlights: [
        "Internship collaborations with industry professionals",
        "Hackathon team leadership and coordination",
        "Peer programming and code review sessions",
        "Mentorship from experienced developers",
        "Open source contribution discussions"
      ]
    },
    'Campus': {
      icon: <MapPin className="w-5 h-5" />,
      description: "My college life at BVC College of Engineering has provided the foundation for my technical journey. The campus environment fostered learning, innovation, and personal growth.",
      highlights: [
        "Computer Science (AI & ML) specialization studies",
        "Laboratory sessions and practical implementations",
        "Technical seminars and guest lectures",
        "Student project presentations and exhibitions",
        "Campus coding clubs and technical societies"
      ]
    },
    'Achievements': {
      icon: <Award className="w-5 h-5" />,
      description: "Recognition and achievements mark important milestones in my journey. Each certification and accomplishment represents dedication and skill development.",
      highlights: [
        "Multiple professional certifications from industry leaders",
        "Successful completion of internship programs",
        "Hackathon achievements and recognitions",
        "Academic project excellence",
        "Technical skill certifications in AI/ML and web development"
      ]
    }
  };

  const images = [
    {
      id: 1,
      title: "Hackathon Victory",
      description: "24-hour hackathon at Delhi Technological University",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600",
      category: "Events",
      date: "March 2025",
      location: "Delhi Technological University",
      story: "This 24-hour hackathon was a turning point in my development journey. Working with a diverse team, we created an AI-powered campus utility assistant from scratch. The experience taught me rapid prototyping, team coordination under pressure, and the importance of user-centered design. Despite the time constraints, we managed to implement core AI features and present a working prototype that impressed the judges."
    },
    {
      id: 2,
      title: "AI/ML Workshop",
      description: "Machine Learning workshop and certification",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600",
      category: "Learning",
      date: "2024",
      location: "Online/Campus",
      story: "This intensive workshop on machine learning fundamentals opened my eyes to the vast possibilities of AI. Learning about different algorithms, from linear regression to neural networks, provided the theoretical foundation that I later applied in real projects. The hands-on sessions with Python and scikit-learn were particularly valuable, as they bridged the gap between theory and practical implementation."
    },
    {
      id: 3,
      title: "Programming Setup",
      description: "My development environment and coding setup",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600",
      category: "Workspace",
      date: "2024",
      location: "Home/Campus",
      story: "Creating an efficient development environment was crucial for my productivity. This setup includes multiple monitors for better code visualization, optimized VS Code configurations, and a carefully curated set of extensions for Python, web development, and data science. The workspace reflects my commitment to professional development and efficient coding practices."
    },
    {
      id: 4,
      title: "Data Science Project",
      description: "Working on insurance cost prediction model",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
      category: "Projects",
      date: "May-June 2025",
      location: "Microsoft Internship",
      story: "The medical insurance cost prediction project was my first major foray into real-world machine learning applications. Working with actual healthcare data, I learned about data preprocessing, feature engineering, and model evaluation. The project involved extensive exploratory data analysis, multiple regression algorithms, and comprehensive performance metrics. This experience solidified my understanding of the complete ML pipeline."
    },
    {
      id: 5,
      title: "Team Collaboration",
      description: "Working with team on project management dashboard",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600",
      category: "Collaboration",
      date: "Oct-Dec 2024",
      location: "Infosys Springboard",
      story: "Collaborating on the Agile Project Management Dashboard taught me the importance of teamwork in software development. We followed Agile methodologies, conducted regular stand-ups, and used collaborative tools for project management. This experience enhanced my communication skills and taught me how to break down complex features into manageable tasks while maintaining code quality and meeting deadlines."
    },
    {
      id: 6,
      title: "Learning Session",
      description: "Python programming and algorithm practice",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600",
      category: "Learning",
      date: "2024",
      location: "Self-Study",
      story: "Regular Python programming sessions formed the backbone of my technical skill development. These focused learning periods involved solving algorithmic challenges, implementing data structures, and exploring Python's extensive libraries. The consistent practice helped me develop problem-solving skills and coding efficiency that proved invaluable in later projects and internships."
    },
    {
      id: 7,
      title: "University Campus",
      description: "BVC College of Engineering campus life",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600",
      category: "Campus",
      date: "2022-Present",
      location: "BVC College of Engineering",
      story: "My time at BVC College of Engineering has been transformative. The Computer Science program with AI & ML specialization provided a strong theoretical foundation while encouraging practical application. The campus environment fostered innovation, with access to modern labs, supportive faculty, and a community of like-minded peers who shared the passion for technology and learning."
    },
    {
      id: 8,
      title: "Certificate Achievement",
      description: "NVIDIA Building LLM certification completion",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600",
      category: "Achievements",
      date: "April 2025",
      location: "NVIDIA Certification",
      story: "Completing the NVIDIA course on Building LLM Applications with Prompt Engineering was a significant milestone in my AI journey. The course provided deep insights into large language models, transformer architecture, and practical prompt engineering techniques. This certification enhanced my understanding of cutting-edge AI technologies and their real-world applications."
    },
    {
      id: 9,
      title: "Code Review",
      description: "Reviewing machine learning algorithms and implementations",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600",
      category: "Learning",
      date: "2024-2025",
      location: "Various Projects",
      story: "Code review sessions have been instrumental in improving my programming skills and understanding best practices. Whether reviewing my own code or collaborating with peers, these sessions taught me about code quality, optimization techniques, and maintainable software design. The practice of explaining code logic and receiving feedback has made me a more thoughtful and efficient programmer."
    }
  ];

  const categories = ["All", "Events", "Learning", "Projects", "Workspace", "Collaboration", "Campus", "Achievements"];

  return (
    <Layout>
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fadeIn">
              My Journey Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slideUp">
              A visual story of my growth, achievements, and experiences in technology and development
            </p>
          </div>

          {/* Journey Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {Object.entries(journeyDetails).map(([category, details], index) => (
              <Dialog key={category}>
                <DialogTrigger asChild>
                  <Card className="glass-card hover-lift cursor-pointer p-6" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                        {details.icon}
                      </div>
                      <h3 className="text-xl font-semibold gradient-text">{category}</h3>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {details.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-accent text-sm">
                      <Eye className="w-4 h-4" />
                      View Details
                    </div>
                  </Card>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="gradient-text text-2xl flex items-center gap-3">
                      {details.icon}
                      {category} Journey
                    </DialogTitle>
                  </DialogHeader>
                  
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {details.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold mb-3 text-accent">Key Highlights:</h4>
                      <ul className="space-y-2">
                        {details.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="text-sm text-muted-foreground bg-secondary/30 p-4 rounded-lg">
                      <strong>Impact:</strong> Each experience in this category has contributed to my overall growth as a developer and problem solver, building both technical skills and professional competencies.
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>

          {/* Image Gallery Sections */}
          {categories.slice(1).map((category) => {
            const categoryImages = images.filter(img => img.category === category);
            if (categoryImages.length === 0) return null;
            
            return (
              <div key={category} className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white">
                    {journeyDetails[category as keyof typeof journeyDetails]?.icon}
                  </div>
                  <h2 className="text-2xl font-bold gradient-text">{category}</h2>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categoryImages.map((image, index) => (
                    <Dialog key={image.id}>
                      <DialogTrigger asChild>
                        <Card 
                          className="glass-card overflow-hidden hover-lift group cursor-pointer"
                          style={{ animationDelay: `${index * 0.1}s` }}
                          onClick={() => setSelectedImage(image)}
                        >
                          <div className="relative overflow-hidden">
                            <img 
                              src={image.image} 
                              alt={image.title}
                              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                              <h3 className="text-sm font-semibold text-foreground mb-1">
                                {image.title}
                              </h3>
                              <div className="flex items-center gap-2 text-xs text-accent">
                                <Calendar className="w-3 h-3" />
                                {image.date}
                              </div>
                            </div>
                            
                            {/* View Details Button */}
                            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <Button size="sm" variant="secondary" className="bg-background/80 backdrop-blur-sm">
                                <Eye className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </Card>
                      </DialogTrigger>
                      
                      <DialogContent className="max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="gradient-text text-2xl mb-2">
                            {image.title}
                          </DialogTitle>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {image.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {image.location}
                            </div>
                          </div>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <img 
                            src={image.image} 
                            alt={image.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-accent">Description</h4>
                            <p className="text-muted-foreground">{image.description}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-accent">My Journey Story</h4>
                            <p className="text-muted-foreground leading-relaxed">{image.story}</p>
                          </div>
                          
                          <div className="bg-secondary/30 p-4 rounded-lg">
                            <h4 className="font-semibold mb-2">Category: {image.category}</h4>
                            <p className="text-sm text-muted-foreground">
                              {journeyDetails[image.category as keyof typeof journeyDetails]?.description}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </Layout>
  );
};

export default Gallery;