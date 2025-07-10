import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Download } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const certifications = [
    {
      title: "Development of Agile Project Management Dashboard",
      issuer: "Infosys Springboard",
      date: "December 2024",
      image: "/lovable-uploads/8399d31c-52d1-4148-9f38-343a3c088843.png",
      description: "Completed internship program focused on web development and Agile methodology. Developed a comprehensive project management dashboard with modern UI/UX principles.",
      skills: ["Web Development", "Agile Methodology", "UI/UX Design", "Project Management"],
      credentialId: "INF-2024-APM-001"
    },
    {
      title: "Building LLM Applications With Prompt Engineering",
      issuer: "NVIDIA",
      date: "April 2025",
      image: "/lovable-uploads/97e4e439-0d68-4c1b-a9da-f8f9b0454798.png",
      description: "Comprehensive course on Large Language Models and prompt engineering techniques. Gained expertise in building AI applications and understanding transformer architecture.",
      skills: ["LLM", "Prompt Engineering", "AI/ML", "Python", "Transformers"],
      credentialId: "NVIDIA-2025-LLM-456"
    },
    {
      title: "HQL Edutech - Core and Advanced Java",
      issuer: "HQL Edutech",
      date: "2024",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300",
      description: "Comprehensive Java programming certification covering core concepts and advanced features including OOP, collections, multithreading, and enterprise development.",
      skills: ["Java", "OOP", "Collections", "Multithreading", "Spring Framework"],
      credentialId: "HQL-2024-JAVA-789"
    },
    {
      title: "Python Foundation",
      issuer: "Infosys",
      date: "2024",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300",
      description: "Foundational Python programming course covering syntax, data structures, algorithms, and practical applications in software development.",
      skills: ["Python", "Data Structures", "Algorithms", "Problem Solving"],
      credentialId: "INF-2024-PY-123"
    },
    {
      title: "Certificate of Achievement",
      issuer: "E-Cell DTU",
      date: "March 2025",
      image: "image.png",
      description: "Awarded for securing a position in the top 100 in the Execute 4.0 Hackathon conducted by E-Cell DTU during the E-Summit'25, held on 21st and 22nd March 2025. Recognized for exceptional problem-solving skills and technical innovation in technology and entrepreneurship.",
      skills: ["Problem Solving", "Innovation", "Hackathon Participation", "Entrepreneurship"],
      credentialId: "afa2dfdd-05d9-49e9-83e6-46652588911f"
    },
    {
      title: "Certificate of Completion",
      issuer: "Microsoft, AICTE, Edunet Foundation",
      date: "June 2025",
      image: "edunet.jpg",
      description: "Successfully completed a 4-week internship on AI Azure, a Microsoft initiative implemented by Edunet Foundation in collaboration with AICTE. The internship was held from 13th May 2025 to 13th June 2025 and focused on practical applications of artificial intelligence on the Azure cloud platform.",
      skills: ["AI Development", "Microsoft Azure", "Cloud Computing", "Technical Collaboration", "Applied Machine Learning"],
      credentialId: "INTERNSHIP_174365314467ee0918e7994"
    }
  ];

  const handleDownloadCertificate = (cert: any) => {
    const link = document.createElement('a');
    link.href = cert.image;
    link.download = `${cert.title.replace(/\s+/g, '_')}_Certificate.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Layout>
      <Navigation />
      
      <main className="pt-32 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text animate-fadeIn">
              Certifications
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slideUp">
              Professional certifications and achievements in technology and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="glass-card hover-lift group max-w-xs"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="p-4">
                  <div className="relative overflow-hidden rounded-lg mb-3 h-32">
                    <img 
                      src={cert.image} 
                      alt={cert.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardTitle className="gradient-text text-sm group-hover:scale-105 transition-transform duration-300">
                    {cert.title}
                  </CardTitle>
                  <CardDescription className="text-accent font-medium text-xs">
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex flex-wrap gap-1 mb-3">
                    {cert.skills.slice(0, 2).map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs rounded-full bg-primary/20 text-primary border border-primary/30"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 2 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground">
                        +{cert.skills.length - 2}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => setSelectedCert(cert)}
                        >
                          <Eye className="w-4 h-4 mr-1" />
                          View
                        </Button>
                      </DialogTrigger>
                      
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle className="gradient-text text-2xl mb-2">
                            {cert.title}
                          </DialogTitle>
                          <div className="text-accent font-medium mb-4">
                            {cert.issuer} • {cert.date}
                          </div>
                        </DialogHeader>
                        
                        <div className="space-y-6">
                          <img 
                            src={cert.image} 
                            alt={cert.title} 
                            className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300" 
                            onClick={() => window.open(cert.image, '_blank')}
                          />
                          
                          <p className="text-muted-foreground">{cert.description}</p>
                          
                          <div>
                            <h4 className="font-semibold mb-3">Skills Acquired:</h4>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="text-sm text-muted-foreground">
                            <strong>Credential ID:</strong> {cert.credentialId}
                          </div>
                          
                          <Button 
                            onClick={() => handleDownloadCertificate(cert)}
                            className="w-full"
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download Certificate
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    
                    <Button 
                      size="sm" 
                      variant="secondary"
                      onClick={() => handleDownloadCertificate(cert)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Certifications;