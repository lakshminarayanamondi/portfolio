import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    image: '',
    type: 'normal'
  });
  const projects = [
    {
      id: 'insurance-prediction',
      title: "Medical Insurance Cost Prediction",
      description: "Developed a machine learning model to predict medical insurance costs based on individual attributes like age, BMI, smoking status, and region. Collected and cleaned data, performed exploratory data analysis (EDA), and applied feature encoding and normalization.",
      fullDescription: "This comprehensive machine learning project involved training and evaluating multiple regression models using Scikit-learn, selecting the best-performing one based on accuracy metrics. Visualized key insights and model performance to support prediction reliability. The project demonstrated proficiency in data preprocessing, feature engineering, and model evaluation techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600",
      company: "Microsoft with Edunet Foundation",
      duration: "May - June 2025",
      type: "Internship Project",
      achievements: [
        "Successfully implemented multiple regression algorithms",
        "Achieved high accuracy in cost prediction",
        "Comprehensive data visualization and analysis",
        "Feature engineering and data preprocessing"
      ]
    },
    {
      id: 'agile-dashboard',
      title: "Agile Project Management Dashboard",
      description: "Created a project management dashboard prototype focused on intuitive user experience. Applied Agile methodology for task breakdown and iteration.",
      fullDescription: "Developed insights into frontend structure useful for integrating AI-based modules in future projects. The dashboard featured task management, sprint planning, and team collaboration tools built with modern web technologies.",
      technologies: ["HTML5", "CSS", "JavaScript", "Agile Methodology", "UI/UX Design"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600",
      company: "Infosys Springboard",
      duration: "October - December 2024",
      type: "Virtual Internship",
      achievements: [
        "Implemented Agile methodology principles",
        "Created intuitive user interface",
        "Developed task management features",
        "Gained frontend development experience"
      ]
    },
    {
      id: 'campus-assistant',
      title: "AI-Powered Campus Utility Assistant",
      description: "Collaborated in a 24-hour hackathon to develop an AI-powered campus utility assistant using Python.",
      fullDescription: "This intensive hackathon project involved creating an intelligent assistant to help students navigate campus resources, find information, and access various university services efficiently using artificial intelligence and natural language processing.",
      technologies: ["Python", "AI/ML", "Natural Language Processing", "API Integration"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600",
      company: "Delhi Technological University",
      duration: "March 2025",
      type: "Hackathon",
      achievements: [
        "Completed project in 24 hours",
        "Implemented AI-powered features",
        "Team collaboration and leadership",
        "Rapid prototyping and development"
      ]
    },
    {
      id: 'house-prediction',
      title: "House Price Prediction",
      description: "Linear regression model for predicting house prices based on various features and market conditions.",
      fullDescription: "Self-initiated project to understand real estate market dynamics through machine learning. Implemented linear regression algorithms to predict house prices using features like location, size, amenities, and market trends.",
      technologies: ["Python", "Linear Regression", "Scikit-learn", "Data Analysis", "Pandas"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600",
      company: "Self-Learning Project",
      duration: "2024",
      type: "Personal Project",
      achievements: [
        "Independent learning and development",
        "Applied linear regression concepts",
        "Data analysis and preprocessing",
        "Model evaluation and optimization"
      ]
    },
    {
      id: 'student-prediction',
      title: "Student Score Prediction",
      description: "Python-based prediction model for student academic performance using data visualization and machine learning techniques.",
      fullDescription: "Educational analytics project focused on predicting student academic performance using historical data. Utilized various machine learning algorithms and data visualization techniques to identify patterns and factors affecting student success.",
      technologies: ["Python", "Matplotlib", "Data Visualization", "Predictive Analytics", "NumPy"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600",
      company: "Self-Learning Project",
      duration: "2024",
      type: "Personal Project",
      achievements: [
        "Educational data analysis",
        "Predictive modeling implementation",
        "Data visualization skills",
        "Python programming proficiency"
      ]
    }
  ];

  const aiProjects = projects.filter(p => p.technologies.some(tech => ['Python', 'AI/ML', 'TensorFlow', 'Scikit-learn'].includes(tech)));
  const normalProjects = projects.filter(p => !p.technologies.some(tech => ['Python', 'AI/ML', 'TensorFlow', 'Scikit-learn'].includes(tech)));
  
  const filteredProjects = activeFilter === 'ai' ? aiProjects : activeFilter === 'normal' ? normalProjects : projects;

  return (
    <Layout>
      <Navigation />
      
      <main className="pt-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fadeIn">
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slideUp">
              A collection of my work in AI/ML, web development, and innovative solutions
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button 
              variant={activeFilter === 'all' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('all')}
            >
              All Projects ({projects.length})
            </Button>
            <Button 
              variant={activeFilter === 'ai' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('ai')}
            >
              AI/ML Projects ({aiProjects.length})
            </Button>
            <Button 
              variant={activeFilter === 'normal' ? 'default' : 'outline'}
              onClick={() => setActiveFilter('normal')}
            >
              Web Projects ({normalProjects.length})
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <Card 
                  className="glass-card hover-lift group cursor-pointer h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="p-3">
                    <div className="relative overflow-hidden rounded-lg mb-3 bg-gradient-to-br from-primary/20 to-accent/20 h-32">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-1 right-1 px-2 py-1 text-xs rounded bg-primary/80 text-primary-foreground">
                        {project.type}
                      </div>
                    </div>
                    <CardTitle className="gradient-text text-lg group-hover:scale-105 transition-transform duration-300">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground text-sm">
                      {project.description.slice(0, 80)}...
                    </CardDescription>
                    <div className="text-xs text-accent font-medium">
                      {project.company}
                    </div>
                  </CardHeader>
                  <CardContent className="p-3 pt-0">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 2).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 2 && (
                        <span className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground">
                          +{project.technologies.length - 2}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Projects;