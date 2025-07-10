import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add mousemove listener
    window.addEventListener('mousemove', updatePosition);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      {/* Main cursor - diamond shape */}
      <div
        className={`fixed top-0 left-0 w-3 h-3 bg-gradient-to-br from-primary to-accent pointer-events-none z-[9999] transition-all duration-200 ${
          isHovering ? 'scale-150 rotate-45' : 'scale-100 rotate-45'
        }`}
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) rotate(45deg) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`,
          boxShadow: '0 0 15px hsl(var(--primary)), 0 0 30px hsl(var(--accent))',
        }}
      />
      
      {/* Cursor ring - animated */}
      <div
        className="fixed top-0 left-0 w-6 h-6 border border-primary/60 rounded-full pointer-events-none z-[9998] transition-all duration-300 animate-pulse"
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) ${
            isHovering ? 'scale(2)' : 'scale(1)'
          }`,
        }}
      />
      
      {/* Cursor trail particles */}
      <div
        className="fixed top-0 left-0 w-1 h-1 bg-accent/50 rounded-full pointer-events-none z-[9997] transition-all duration-700"
        style={{
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
        }}
      />
    </>
  );
};

export default CustomCursor;