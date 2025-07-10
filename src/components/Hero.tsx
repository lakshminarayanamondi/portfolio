const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      <div className="container px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-6 animate-fadeIn">
              <br />
              <span className="gradient-text">MONDI LAKSHMI NARAYANA</span>
              
            
            </h1>
            
            <p className="text-xl md:text-3xl text-muted-foreground mb-4 animate-slideUp">
              B.Tech Computer Science Student | AI/ML Enthusiast | Python Developer
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 animate-slideUp">
              Passionate about Artificial Intelligence, Machine Learning, and creative digital experiences. 
              Building real-world AI/ML solutions while growing as a future-ready developer.
            </p>
        
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
              <a href="/projects" className="px-8 py-4 bg-gradient-to-r from-primary to-accent rounded-full text-background font-semibold hover:scale-105 transition-all duration-300 glow-effect">
                View My Projects
              </a>
              <a href="/resume" className="px-8 py-4 border border-border rounded-full hover:bg-secondary/50 transition-all duration-300">
                Download Resume
              </a>
            </div>
            
            <div className="flex flex-col gap-4 text-sm text-muted-foreground animate-slideUp" style={{ animationDelay: '0.3s' }}>
              <a href="mailto:lokeshmondi4@gmail.com" className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-110">
                📧 lokeshmondi4@gmail.com
              </a>
              <a href="tel:+919121434023" className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-110">
                📱 9121434023
              </a>
              <a href="http://linkedin.com/in/mondiLakshmiNarayana" className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-110">
                💼 LinkedIn Profile
              </a>
              <a href="https://github.com/lakshminarayanamondi" className="flex items-center gap-2 hover:text-accent transition-all duration-300 hover:scale-110">
                🔗 GitHub Profile
              </a>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-80 md:w-72 md:h-96 rounded-2xl overflow-hidden border-4 border-primary/30 shadow-2xl bg-gradient-to-b from-primary/10 to-accent/10 backdrop-blur">
                <img 
                  src="/20250322_114512.jpg" 
                  alt="Mondi Lakshmi Narayana" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  style={{ aspectRatio: '9/16' }}
                />
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center space-x-8 animate-slideUp" style={{ animationDelay: '0.5s' }}>
          <div className="text-center">
            <div className="text-3xl font-bold gradient-text">B.Tech</div>
            <div className="text-sm text-muted-foreground">CS (AI & ML)</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">6+</div>
            <div className="text-sm text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text">2025</div>
            <div className="text-sm text-muted-foreground">Graduate</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;