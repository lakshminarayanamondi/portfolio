import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, Download, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<any>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'detail'>('grid');

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
      "title": "Certificate of Achievement",
      "issuer": "E-Cell DTU",
      "date": "March 2025",
      "image": "image.png",
      "description": "Awarded for securing a position in the top 100 in the Execute 4.0 Hackathon conducted by E-Cell DTU during the E-Summit'25, held on 21st and 22nd March 2025. Recognized for exceptional problem-solving skills and technical innovation in technology and entrepreneurship.",
      "skills": ["Problem Solving", "Innovation", "Hackathon Participation", "Entrepreneurship"],
      "credentialId": "afa2dfdd-05d9-49e9-83e6-46652588911f"
    },
    {
      "title": "Certificate of Completion",
      "issuer": "Microsoft, AICTE, Edunet Foundation",
      "date": "June 2025",
      "image": "edunet.jpg",
      "description": "Successfully completed a 4-week internship on AI Azure, a Microsoft initiative implemented by Edunet Foundation in collaboration with AICTE. The internship was held from 13th May 2025 to 13th June 2025 and focused on practical applications of artificial intelligence on the Azure cloud platform.",
      "skills": ["AI Development", "Microsoft Azure", "Cloud Computing", "Technical Collaboration", "Applied Machine Learning"],
      "credentialId": "INTERNSHIP_174365314467ee0918e7994"
    }
    
    
    
  ];

  const handleViewCertificate = (cert: any) => {
    setSelectedCert(cert);
    setViewMode('detail');
  };

  const handleDownloadCertificate = (cert: any) => {
    // Create a download link for the certificate image
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
            
            {/* View Mode Toggle */}
            <div className="flex justify-center gap-4 mt-8">
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
              >
                Grid View
              </Button>
              <Button 
                variant={viewMode === 'detail' ? 'default' : 'outline'}
                onClick={() => setViewMode('detail')}
              >
                Detail View
              </Button>
            </div>
          </div>

          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className="glass-card hover-lift group cursor-pointer max-w-xs"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => setSelectedCert(cert)}
                  >
                    <CardHeader className="p-4">
                      <div className="relative overflow-hidden rounded-lg mb-3 h-32">
                        <img 
                          src={cert.image} 
                          alt={cert.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Action Buttons Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-background/80 backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewCertificate(cert);
                            }}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="secondary"
                            className="bg-background/80 backdrop-blur-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownloadCertificate(cert);
                            }}
                          >
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <CardTitle className="gradient-text text-sm group-hover:scale-105 transition-transform duration-300">
                        {cert.title}
                      </CardTitle>
                      <CardDescription className="text-accent font-medium text-xs">
                        {cert.issuer} • {cert.date}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex flex-wrap gap-1">
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
                    </CardContent>
                  </Card>
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
                      className="w-full h-64 object-cover rounded-lg" 
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
                  </div>
                </DialogContent>
              </Dialog>
            ))}
            </div>
          ) : (
            /* Detail View Mode */
            <div className="space-y-8">
              {selectedCert ? (
                <div className="max-w-4xl mx-auto">
                  <Card className="glass-card">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="gradient-text text-3xl mb-2">
                            {selectedCert.title}
                          </CardTitle>
                          <div className="text-accent font-medium text-lg mb-4">
                            {selectedCert.issuer} • {selectedCert.date}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            onClick={() => handleDownloadCertificate(selectedCert)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Certificate Image */}
                        <div className="space-y-4">
                          <div className="relative group">
                            <img 
                              src={selectedCert.image} 
                              alt={selectedCert.title} 
                              className="w-full h-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300" 
                              onClick={() => window.open(selectedCert.image, '_blank')}
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 rounded-lg">
                              <Button variant="secondary" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Full Size
                              </Button>
                            </div>
                          </div>
                        </div>
                        
                        {/* Certificate Details */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-xl font-semibold mb-3 gradient-text">Description</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              {selectedCert.description}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-xl font-semibold mb-3 gradient-text">Skills Acquired</h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedCert.skills.map((skill, i) => (
                                <span
                                  key={i}
                                  className="px-3 py-2 text-sm rounded-full bg-primary/20 text-primary border border-primary/30"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                          
                          <div className="p-4 rounded-lg bg-secondary/30">
                            <h4 className="font-semibold mb-2">Credential Information</h4>
                            <div className="space-y-1 text-sm">
                              <p><strong>Credential ID:</strong> {selectedCert.credentialId}</p>
                              <p><strong>Issue Date:</strong> {selectedCert.date}</p>
                              <p><strong>Issuing Organization:</strong> {selectedCert.issuer}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ) : (
                <div className="text-center py-16">
                  <h3 className="text-2xl font-semibold mb-4 gradient-text">Select a Certificate to View</h3>
                  <p className="text-muted-foreground mb-8">Choose a certificate from the list below to view its details</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                    {certifications.map((cert, index) => (
                      <Card 
                        key={index}
                        className="glass-card hover-lift cursor-pointer"
                        onClick={() => setSelectedCert(cert)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <img 
                              src={cert.image} 
                              alt={cert.title} 
                              className="w-12 h-12 object-cover rounded" 
                            />
                            <div className="flex-1 text-left">
                              <h4 className="font-semibold text-sm">{cert.title}</h4>
                              <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                            </div>
                            <Eye className="w-4 h-4 text-accent" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </Layout>
  );
};

export default Certifications;