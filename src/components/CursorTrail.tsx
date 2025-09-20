import { useEffect, useRef } from 'react';

interface Trail {
  x: number;
  y: number;
  life: number;
  id: number;
}

const CursorTrail = () => {
  const trailsRef = useRef<Trail[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const idCounter = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Add multiple trails for more effect
      for (let i = 0; i < 3; i++) {
        trailsRef.current.push({
          x: x + (Math.random() - 0.5) * 10,
          y: y + (Math.random() - 0.5) * 10,
          life: 1,
          id: idCounter.current++
        });
      }

      // Limit number of trails
      if (trailsRef.current.length > 100) {
        trailsRef.current = trailsRef.current.slice(-100);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw trails
      trailsRef.current = trailsRef.current.filter(trail => {
        trail.life -= 0.02;
        
        if (trail.life <= 0) return false;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(
          trail.x, trail.y, 0,
          trail.x, trail.y, 20
        );
        gradient.addColorStop(0, `hsla(${180 + Math.sin(trail.id * 0.1) * 60}, 100%, 50%, ${trail.life * 0.8})`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(trail.x, trail.y, 15 * trail.life, 0, Math.PI * 2);
        ctx.fill();
        
        return true;
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default CursorTrail;