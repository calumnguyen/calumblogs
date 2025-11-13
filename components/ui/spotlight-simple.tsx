'use client';

import { useRef, useEffect } from 'react';

interface SpotlightProps {
  size?: number;
  className?: string;
}

export function SpotlightSimple({ size = 400, className = '' }: SpotlightProps): React.JSX.Element {
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const currentPosition = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | undefined>(undefined);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent): void => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = (): void => {
      // Smooth interpolation
      const dx = mousePosition.current.x - currentPosition.current.x;
      const dy = mousePosition.current.y - currentPosition.current.y;
      
      currentPosition.current.x += dx * 0.15;
      currentPosition.current.y += dy * 0.15;

      if (spotlightRef.current) {
        spotlightRef.current.style.left = `${String(currentPosition.current.x - size / 2)}px`;
        spotlightRef.current.style.top = `${String(currentPosition.current.y - size / 2)}px`;
      }

      rafId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafId.current = requestAnimationFrame(updatePosition);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [size]);

  return (
    <div
      ref={spotlightRef}
      className={`pointer-events-none fixed z-0 ${className}`}
      style={{
        width: `${String(size)}px`,
        height: `${String(size)}px`,
        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.5) 20%, rgba(255,255,255,0.2) 40%, transparent 70%)',
        filter: 'blur(50px)',
        willChange: 'transform',
      }}
    />
  );
}

