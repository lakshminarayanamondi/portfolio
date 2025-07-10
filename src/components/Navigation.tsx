import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Resume', path: '/resume' },
    { name: 'Reviews', path: '/reviews' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/home" className="flex items-center gap-3 text-xl font-bold gradient-text">
            <img 
              src="/lovable-uploads/0bf255f8-aab2-4c6b-a193-897b2c07c46e.png" 
              alt="MLN" 
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/50"
            />
            MLN
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 hover:bg-primary/10 hover:shadow-lg ${
                  location.pathname === item.path
                    ? 'text-accent bg-accent/10 shadow-md'
                    : 'text-muted-foreground hover:text-accent'
                } before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-primary/0 before:via-primary/5 before:to-accent/0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300`}
              >
                <span className="relative z-10">{item.name}</span>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="mailto:lokeshmondi4@gmail.com"
              className="px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-full text-background text-sm font-semibold hover:scale-105 transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;