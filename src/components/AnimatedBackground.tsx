import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

const AnimatedBackground = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 15,
          duration: Math.random() * 10 + 15,
        });
      }
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient background */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          background: 'var(--gradient-hero)',
          backgroundSize: '400% 400%',
          animation: 'gradient-shift 15s ease-in-out infinite',
        }}
      />
      
      {/* Floating particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-accent/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            boxShadow: '0 0 10px currentColor',
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-20 h-20 border border-accent/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary/30 animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-1/3 w-24 h-24 border border-accent/25 rounded-full animate-float" style={{ animationDelay: '1s' }} />
    </div>
  );
};

export default AnimatedBackground;