import Layout from '@/components/Layout';
import Navigation from '@/components/Navigation';
import { Download, Mail, Phone, Linkedin, MapPin, Github, Code, Brain, Database, Globe, Award, Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Resume = () => {
  const downloadPDF = () => {
    // Create a simple PDF-like content and download
    const content = `
MONDI LAKSHMI NARAYANA
B.Tech Computer Science Student | AI/ML Enthusiast | Python Developer

Contact Information:
Phone: 9121434023
Email: lokeshmondi4@gmail.com
LinkedIn: http://linkedin.com/in/mondiLakshmiNarayana

Career Objective:
A passionate and innovative B.Tech student driven by interests in Artificial Intelligence, Machine Learning, and creative digital experiences...

Technical Skills:
- Programming Languages: Python, Java
- AI/ML & Frameworks: Scikit-learn, Pandas, NumPy, TensorFlow
- Web Technologies: HTML5, CSS
- Tools: VS Code, Jupyter Notebook, Google Colab, MS Office

Experience:
1. Virtual Intern - Infosys Springboard (Oct - Dec 2024)
2. Intern - Microsoft with Edunet Foundation (May - June 2025)

Education:
B.Tech Computer Science (AI & ML) - BVC College of Engineering
Expected April 2026 | CGPA: 62%
    `;
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Mondi_Lakshmi_Narayana_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <Layout>
      <Navigation />
      
      <main className="pt-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Modern Header */}
          <div className="text-center mb-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl"></div>
            <div className="relative p-8">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-accent p-1">
                <img 
                  src="/20250322_114512.jpg"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
                MONDI LAKSHMI NARAYANA
              </h1>
              <div className="flex items-center justify-center gap-2 mb-6">
                <Code className="w-5 h-5 text-primary" />
                <p className="text-xl text-muted-foreground">
                  B.Tech Computer Science Student | AI/ML Enthusiast | Python Developer
                </p>
                <Brain className="w-5 h-5 text-accent" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="flex items-center justify-center gap-2 p-3 glass-card rounded-lg">
                  <Phone className="w-4 h-4 text-accent" />
                  <a href="tel:9121434023" className="text-sm hover:text-accent transition-colors">9121434023</a>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 glass-card rounded-lg">
                  <Mail className="w-4 h-4 text-accent" />
                  <a href="mailto:lokeshmondi4@gmail.com" className="text-sm hover:text-accent transition-colors">lokeshmondi4@gmail.com</a>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 glass-card rounded-lg">
                  <Linkedin className="w-4 h-4 text-accent" />
                  <a href="http://linkedin.com/in/mondiLakshmiNarayana" className="text-sm hover:text-accent">
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center justify-center gap-2 p-3 glass-card rounded-lg">
                  <Github className="w-4 h-4 text-accent" />
                  <a href="https://github.com/lakshminarayanamondi" className="text-sm hover:text-accent">
                    GitHub
                  </a>
                </div>
              </div>
              
              <button 
                onClick={downloadPDF}
                className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-background font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-lg"
              >
                <a
                   href="/resume.pdf" download
           
>   </a>
                <Download className="w-5 h-5" />
                Download Resume
              </button>
            </div>
          </div>

          <div className="space-y-8">
            {/* Career Objective */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  Career Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-4 rounded-lg bg-gradient-to-r from-primary/5 to-accent/5 border-l-4 border-primary">
                  <p className="text-muted-foreground leading-relaxed">
                    A passionate and innovative B.Tech student driven by interests in Artificial Intelligence, Machine Learning, and 
                    creative digital experiences. Eager to contribute to tech-forward teams through skills in Python, frontend development, 
                    and user-centered design. Seeking opportunities to build real-world AI/ML-based solutions while growing as a future-ready 
                    developer.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Technical Skills */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Python", "Java"].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">AI/ML & Frameworks</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Scikit-learn", "Pandas", "NumPy", "TensorFlow"].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Web Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {["HTML5", "CSS"].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-accent">Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {["VS Code", "Jupyter Notebook", "Google Colab", "MS Office"].map((skill) => (
                        <span key={skill} className="px-3 py-1 text-sm rounded-full bg-primary/20 text-primary border border-primary/30">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3 text-accent">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Leadership", "Patience", "Communication", "Adaptability", "Problem Solving", "Critical Thinking"].map((skill) => (
                      <span key={skill} className="px-3 py-1 text-sm rounded-full bg-accent/20 text-accent border border-accent/30">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center gap-2">
                  <Briefcase className="w-5 h-5" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Virtual Intern - Infosys Springboard</h4>
                    <span className="text-sm text-accent">Oct - Dec 2024</span>
                  </div>
                  <p className="text-accent mb-2">Project: Agile Project Management Dashboard</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Created a project management dashboard prototype focused on intuitive user experience</li>
                    <li>• Applied Agile methodology for task breakdown and iteration</li>
                    <li>• Developed insights into frontend structure useful for integrating AI-based modules</li>
                  </ul>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Intern - Microsoft with Edunet Foundation</h4>
                    <span className="text-sm text-accent">May - June 2025</span>
                  </div>
                  <p className="text-accent mb-2">Project: Medical Insurance Cost Prediction</p>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Developed ML model to predict medical insurance costs based on individual attributes</li>
                    <li>• Performed data collection, cleaning, and exploratory data analysis (EDA)</li>
                    <li>• Applied feature encoding, normalization, and trained multiple regression models</li>
                    <li>• Visualized insights and model performance to support prediction reliability</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">B.Tech Computer Science (AI & ML)</h4>
                    <span className="text-sm text-accent">Expected April 2026</span>
                  </div>
                  <p className="text-muted-foreground">BVC College of Engineering, JNTUK</p>
                  <p className="text-muted-foreground">CGPA: 62% | Palacharla, Andhra Pradesh</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Intermediate (MPC)</h4>
                    <span className="text-sm text-accent">March 2022</span>
                  </div>
                  <p className="text-muted-foreground">Sri Chaitanya Junior College</p>
                  <p className="text-muted-foreground">CGPA: 52% | Rajahmundry, Andhra Pradesh</p>
                </div>
                
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">Secondary Education</h4>
                    <span className="text-sm text-accent">April 2020</span>
                  </div>
                  <p className="text-muted-foreground">Niveditha Kishore Vihar High School</p>
                  <p className="text-muted-foreground">CGPA: 94% | Rajahmundry, Andhra Pradesh</p>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Infosys Internship (Web Development) Execute 5.0",
                    "HQL Edutech (Core and Advanced Java)",
                    "NVIDIA (Building LLM with Prompt Engineering)",
                    "Infosys Python Foundation"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Projects Highlight */}
            <Card className="glass-card hover-lift">
              <CardHeader>
                <CardTitle className="gradient-text flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Key Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-accent">Hackathon Participation - Delhi Technological University (March 2025)</h4>
                  <p className="text-muted-foreground">Collaborated in a 24-hour hackathon to develop an AI-powered campus utility assistant using Python</p>
                </div>
                <div>
                  <h4 className="font-semibold text-accent">Mini ML Projects (Self-Learning)</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• House Price Prediction using Linear Regression</li>
                    <li>• Student Score Prediction using Python and Matplotlib</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Resume;