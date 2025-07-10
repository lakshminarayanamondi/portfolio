import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const MiniProjects = () => {
  const projects = [
    {
      id: 'insurance-prediction',
      title: "Medical Insurance Cost Prediction",
      description: "ML model to predict medical insurance costs using Python and Scikit-learn",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250",
      type: "AI/ML"
    },
    {
      id: 'agile-dashboard',
      title: "Agile Project Management Dashboard",
      description: "Interactive dashboard with task management and sprint planning features",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=250",
      type: "Web Dev"
    },
    {
      id: 'campus-assistant',
      title: "AI Campus Assistant",
      description: "24-hour hackathon project - AI-powered campus utility assistant",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250",
      type: "AI/ML"
    }
  ];

  return (
    <section className="py-20 px-6 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 gradient-text">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in AI/ML and web development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} to={`/projects/${project.id}`}>
              <Card 
                className="glass-card hover-lift group cursor-pointer h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg h-40">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-primary/80 text-primary-foreground">
                      {project.type}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="gradient-text text-lg mb-2 group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/projects" 
            className="px-8 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-background font-semibold hover:scale-105 transition-all duration-300 inline-block"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MiniProjects;