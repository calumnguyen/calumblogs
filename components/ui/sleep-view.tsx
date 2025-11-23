'use client';

import { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';

interface SleepViewProps {
  onWakeUp: () => void;
}

/**
 * Sleep View Component
 * 
 * Displays the Lottie sleeping animation when "Sleep" is clicked.
 * Shows "Hit any button to wake up" text and listens for keyboard input.
 */
export function SleepView({ onWakeUp }: SleepViewProps) {
  const [animationData, setAnimationData] = useState<any>(null);
  const wakeUpEnabledRef = useRef(false);

  useEffect(() => {
    // Load the Lottie animation from the public folder
    fetch('/sleeping.json')
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error('Error loading Lottie animation:', error));
  }, []);

  useEffect(() => {
    wakeUpEnabledRef.current = false;
    
    // Add a small delay before enabling wake-up to prevent immediate trigger from menu click
    const enableTimer = setTimeout(() => {
      wakeUpEnabledRef.current = true;
    }, 300); // 300ms delay to allow menu to close

    // Listen for any key press to wake up
    const handleKeyPress = () => {
      if (wakeUpEnabledRef.current) {
        onWakeUp();
      }
    };

    // Also listen for mouse clicks on the sleep view container
    const handleClick = (e: MouseEvent) => {
      if (wakeUpEnabledRef.current) {
        // Only wake up if clicking on the sleep view itself, not on menu items
        const target = e.target as HTMLElement;
        if (target.closest('[data-sleep-view]')) {
          onWakeUp();
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyPress);
    window.addEventListener('click', handleClick);

    return () => {
      clearTimeout(enableTimer);
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyPress);
      window.removeEventListener('click', handleClick);
    };
  }, [onWakeUp]);

  if (!animationData) {
    return (
      <div className="absolute inset-0 bg-black flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div 
      className="absolute inset-0 bg-black flex flex-col items-center justify-center"
      data-sleep-view
    >
      <div className="w-full h-full flex items-center justify-center relative" data-sleep-view>
        <Lottie
          animationData={animationData}
          loop={true}
          autoplay={true}
          className="w-full h-full max-w-2xl max-h-2xl"
        />
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <p className="text-white text-lg md:text-xl font-medium opacity-80 animate-pulse">
            Hit any button to wake up
          </p>
        </div>
      </div>
    </div>
  );
}

export default SleepView;

