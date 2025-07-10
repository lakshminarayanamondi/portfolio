import { useParams, Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { ArrowLeft, ExternalLink, Calendar, Building } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  const projects = {
    'insurance-prediction': {
      title: "Medical Insurance Cost Prediction",
      description: "Developed a machine learning model to predict medical insurance costs based on individual attributes like age, BMI, smoking status, and region.",
      fullDescription: "This comprehensive machine learning project involved training and evaluating multiple regression models using Scikit-learn, selecting the best-performing one based on accuracy metrics. Collected and cleaned data, performed exploratory data analysis (EDA), and applied feature encoding and normalization. Visualized key insights and model performance to support prediction reliability. The project demonstrated proficiency in data preprocessing, feature engineering, and model evaluation techniques.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800",
      company: "Microsoft with Edunet Foundation",
      duration: "May - June 2025",
      type: "Internship Project",
      achievements: [
        "Successfully implemented multiple regression algorithms",
        "Achieved high accuracy in cost prediction",
        "Comprehensive data visualization and analysis",
        "Feature engineering and data preprocessing",
        "Model evaluation and performance metrics"
      ],
      features: [
        "Data collection and cleaning",
        "Exploratory Data Analysis (EDA)",
        "Feature encoding and normalization",
        "Multiple regression model training",
        "Model performance evaluation",
        "Data visualization and insights"
      ]
    },
    'agile-dashboard': {
      title: "Agile Project Management Dashboard",
      description: "Created a project management dashboard prototype focused on intuitive user experience with Agile methodology implementation.",
      fullDescription: "Developed insights into frontend structure useful for integrating AI-based modules in future projects. The dashboard featured task management, sprint planning, and team collaboration tools built with modern web technologies. Applied Agile methodology for task breakdown and iteration, creating a comprehensive solution for project management needs.",
      technologies: ["HTML5", "CSS", "JavaScript", "Agile Methodology", "UI/UX Design"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=800",
      company: "Infosys Springboard",
      duration: "October - December 2024",
      type: "Virtual Internship",
      achievements: [
        "Implemented Agile methodology principles",
        "Created intuitive user interface",
        "Developed task management features",
        "Gained frontend development experience",
        "Applied responsive design principles"
      ],
      features: [
        "Task breakdown and management",
        "Sprint planning interface",
        "Team collaboration tools",
        "Progress tracking dashboard",
        "Responsive web design",
        "User-friendly interface"
      ]
    },
    'campus-assistant': {
      title: "AI-Powered Campus Utility Assistant",
      description: "Collaborated in a 24-hour hackathon to develop an AI-powered campus utility assistant using Python.",
      fullDescription: "This intensive hackathon project involved creating an intelligent assistant to help students navigate campus resources, find information, and access various university services efficiently using artificial intelligence and natural language processing. The project showcased rapid development skills and innovative problem-solving in a time-constrained environment.",
      technologies: ["Python", "AI/ML", "Natural Language Processing", "API Integration"],
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=800",
      company: "Delhi Technological University",
      duration: "March 2025",
      type: "Hackathon",
      achievements: [
        "Completed project in 24 hours",
        "Implemented AI-powered features",
        "Team collaboration and leadership",
        "Rapid prototyping and development",
        "Innovative problem-solving"
      ],
      features: [
        "Natural language processing",
        "Campus resource navigation",
        "Student service integration",
        "AI-powered recommendations",
        "Real-time information access",
        "User-friendly interface"
      ]
    },
    'house-prediction': {
      title: "House Price Prediction",
      description: "Linear regression model for predicting house prices based on various features and market conditions.",
      fullDescription: "Self-initiated project to understand real estate market dynamics through machine learning. Implemented linear regression algorithms to predict house prices using features like location, size, amenities, and market trends. This project demonstrated understanding of regression analysis and its practical applications in real estate valuation.",
      technologies: ["Python", "Linear Regression", "Scikit-learn", "Data Analysis", "Pandas"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&h=800",
      company: "Self-Learning Project",
      duration: "2024",
      type: "Personal Project",
      achievements: [
        "Independent learning and development",
        "Applied linear regression concepts",
        "Data analysis and preprocessing",
        "Model evaluation and optimization",
        "Real estate market understanding"
      ],
      features: [
        "Linear regression implementation",
        "Feature selection and engineering",
        "Data preprocessing pipeline",
        "Model performance evaluation",
        "Price prediction accuracy",
        "Market trend analysis"
      ]
    },
    'student-prediction': {
      title: "Student Score Prediction",
      description: "Python-based prediction model for student academic performance using data visualization and machine learning techniques.",
      fullDescription: "Educational analytics project focused on predicting student academic performance using historical data. Utilized various machine learning algorithms and data visualization techniques to identify patterns and factors affecting student success. This project demonstrated the application of ML in educational contexts.",
      technologies: ["Python", "Matplotlib", "Data Visualization", "Predictive Analytics", "NumPy"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=800",
      company: "Self-Learning Project",
      duration: "2024",
      type: "Personal Project",
      achievements: [
        "Educational data analysis",
        "Predictive modeling implementation",
        "Data visualization skills",
        "Python programming proficiency",
        "Academic performance insights"
      ],
      features: [
        "Student performance prediction",
        "Data visualization dashboard",
        "Pattern recognition analysis",
        "Statistical modeling",
        "Educational insights generation",
        "Performance metrics tracking"
      ]
    }
  };

  const project = projects[id as keyof typeof projects];

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-accent hover:underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>

          <div className="space-y-8">
            {/* Hero Section */}
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 text-sm rounded-full bg-primary/80 text-primary-foreground">
                    {project.type}
                  </span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 gradient-text">
                  {project.title}
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4 gradient-text">Project Overview</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.fullDescription}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">{project.company}</div>
                        <div className="text-sm text-muted-foreground">{project.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">Duration</div>
                        <div className="text-sm text-muted-foreground">{project.duration}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;