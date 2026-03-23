import React, { useEffect, useRef } from 'react';

const HeroIceBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      radius: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor(width: number, height: number, startOffScreen: boolean = false) {
        this.x = startOffScreen ? -10 : Math.random() * width;
        this.y = Math.random() * height;
        // radius between 2px and 5px (much larger to ensure visibility)
        this.radius = Math.random() * 3 + 2;
        // speedX between 4 and 10 (simulate blowing wind)
        this.speedX = Math.random() * 6 + 4;
        // speedY between -1 and 1
        this.speedY = Math.random() * 2 - 1;
        // opacity between 0.6 and 1.0 (brighter)
        this.opacity = Math.random() * 0.4 + 0.6;
      }

      update(width: number, height: number) {
        this.x += this.speedX;
        this.y += this.speedY;

        // Reset particle if it blows off the right screen
        if (this.x > width + this.radius) {
          this.x = -10;
          this.y = Math.random() * height;
        }

        // Slight wrap around for top/bottom to keep smooth blizzard
        if (this.y < -this.radius) {
          this.y = height + this.radius;
        } else if (this.y > height + this.radius) {
          this.y = -this.radius;
        }
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        context.shadowBlur = 5;
        context.shadowColor = 'white';
        context.fill();
        context.closePath();
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push(new Particle(canvas.width, canvas.height, false));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update(canvas.width, canvas.height);
        particles[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      // We don't re-initialize all particles to avoid visually resetting the blizzard,
      // but ensure existing particles are still rendering fine.
    };

    init();
    animate();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-gradient-to-br from-[#050B14] via-[#0A1931] to-[#2c45ae] z-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {/* Dark overlay to lessen the intensity and push the animation into the background */}
      <div className="absolute inset-0 bg-slate-950/60 pointer-events-none" />
    </div>
  );
};

export default HeroIceBackground;
