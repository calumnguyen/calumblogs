'use client';

import { useEffect } from 'react';
import { ShiningText } from './shining-text';

interface RestartViewProps {
  onRestartComplete: () => void;
}

/**
 * Restart View Component
 * 
 * Displays "Restarting...." text for 2 seconds, then triggers restart.
 */
export function RestartView({ onRestartComplete }: RestartViewProps) {
  useEffect(() => {
    // Show "Restarting...." for 2 seconds, then complete restart
    const timer = setTimeout(() => {
      onRestartComplete();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [onRestartComplete]);

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <ShiningText 
          text="Restarting...." 
          className="text-2xl md:text-4xl font-semibold"
        />
      </div>
    </div>
  );
}

export default RestartView;

