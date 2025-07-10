import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Auto-fill the search query and auto-search
    const timer1 = setTimeout(() => {
      setSearchQuery('mondi lakshmi narayana');
    }, 1000);

    const timer2 = setTimeout(() => {
      setIsSearching(true);
    }, 2000);

    const timer3 = setTimeout(() => {
      navigate('/home');
    }, 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [navigate]);

  const handleSearch = () => {
    if (searchQuery.toLowerCase().includes('mondi lakshmi narayana')) {
      setIsSearching(true);
      setTimeout(() => {
        navigate('/home');
      }, 2000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center relative overflow-hidden cursor-none">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/10 to-transparent rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="mb-8 animate-fade-in">
          <div className="text-6xl mb-4 animate-bounce">🌐</div>
          <h1 className="text-4xl font-bold mb-4 gradient-text animate-scale-in">Microsoft Edge</h1>
          <p className="text-muted-foreground animate-slide-up">Search the web</p>
        </div>

        <div className="max-w-2xl mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-6 py-4 text-lg rounded-full border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Search..."
            />
            <button
              onClick={handleSearch}
              className="absolute right-2 top-2 px-6 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
            >
              Search
            </button>
          </div>
        </div>

        {isSearching && (
          <div className="animate-fadeIn">
            <div className="text-lg text-muted-foreground mb-4">Searching...</div>
            <div className="animate-spin w-8 h-8 border-2 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <div className="text-sm text-accent">Found: Mondi Lakshmi Narayana - Portfolio</div>
          </div>
        )}

        {!isSearching && searchQuery && (
          <div className="text-sm text-muted-foreground">
            Press Enter or click Search to continue
          </div>
        )}
      </div>
    </div>
  );
};

export default Landing;