import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background/50 backdrop-blur border-t border-border/30 py-8 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Mondi Lakshmi Narayana</h3>
            <p className="text-muted-foreground">
              B.Tech Computer Science Student | AI/ML Enthusiast | Python Developer
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2">
              <a href="/home" className="block text-muted-foreground hover:text-accent transition-colors">Home</a>
              <a href="/projects" className="block text-muted-foreground hover:text-accent transition-colors">Projects</a>
              <a href="/experience" className="block text-muted-foreground hover:text-accent transition-colors">Experience</a>
              <a href="/certifications" className="block text-muted-foreground hover:text-accent transition-colors">Certifications</a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-accent">Connect</h4>
            <div className="flex space-x-4">
              <a href="mailto:lokeshmondi4@gmail.com" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                <Mail className="w-5 h-5" />
              </a>
              <a href="tel:9121434023" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                <Phone className="w-5 h-5" />
              </a>
              <a href="http://linkedin.com/in/mondiLakshmiNarayana" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/lakshminarayanamondi" className="text-muted-foreground hover:text-accent transition-all duration-300 hover:scale-110">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/30 pt-6 mt-8 text-center text-muted-foreground">
          <p>&copy; 2025 Mondi Lakshmi Narayana. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;