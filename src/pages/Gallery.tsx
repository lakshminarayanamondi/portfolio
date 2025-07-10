import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from 'react';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const images = [
    {
      id: 1,
      title: "Hackathon Victory",
      description: "24-hour hackathon at Delhi Technological University",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600",
      category: "Events"
    },
    {
      id: 2,
      title: "AI/ML Workshop",
      description: "Machine Learning workshop and certification",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600",
      category: "Learning"
    },
    {
      id: 3,
      title: "Programming Setup",
      description: "My development environment and coding setup",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600",
      category: "Workspace"
    },
    {
      id: 4,
      title: "Data Science Project",
      description: "Working on insurance cost prediction model",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
      category: "Projects"
    },
    {
      id: 5,
      title: "Team Collaboration",
      description: "Working with team on project management dashboard",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600",
      category: "Collaboration"
    },
    {
      id: 6,
      title: "Learning Session",
      description: "Python programming and algorithm practice",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600",
      category: "Learning"
    },
    {
      id: 7,
      title: "University Campus",
      description: "BVC College of Engineering campus life",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600",
      category: "Campus"
    },
    {
      id: 8,
      title: "Certificate Achievement",
      description: "NVIDIA Building LLM certification completion",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600",
      category: "Achievements"
    },
    {
      id: 9,
      title: "Code Review",
      description: "Reviewing machine learning algorithms and implementations",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600",
      category: "Learning"
    }
  ];

  const categories = ["All", "Events", "Learning", "Projects", "Workspace", "Collaboration", "Campus", "Achievements"];
  
  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real app, you'd upload to a server
      console.log('File selected:', file.name);
    }
  };

  return (
    <Layout>
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fadeIn">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slideUp">
              A visual journey through my academic projects, achievements, and learning experiences
            </p>
          </div>

          {/* Events Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold gradient-text mb-8">Events</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.filter(img => img.category === 'Events').map((image, index) => (
                <Card 
                  key={image.id}
                  className="glass-card overflow-hidden hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm font-semibold text-foreground">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Learning Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold gradient-text mb-8">Learning Journey</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.filter(img => img.category === 'Learning').map((image, index) => (
                <Card 
                  key={image.id}
                  className="glass-card overflow-hidden hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm font-semibold text-foreground">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Other Memories Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold gradient-text mb-8">Other Memories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.filter(img => !['Events', 'Learning'].includes(img.category)).map((image, index) => (
                <Card 
                  key={image.id}
                  className="glass-card overflow-hidden hover-lift group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={image.image} 
                      alt={image.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 text-xs rounded bg-primary/80 text-primary-foreground">
                        {image.category}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm font-semibold text-foreground">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Gallery;