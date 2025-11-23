'use client';

import { useState, useRef, useEffect } from 'react';
import { Power } from 'lucide-react';

interface ShutdownViewProps {
  onShutdownComplete: () => void;
}

/**
 * Shutdown View Component
 * 
 * Displays a black screen with a power icon button.
 * User must click and hold for 3 seconds to complete shutdown.
 */
export function ShutdownView({ onShutdownComplete }: ShutdownViewProps) {
  const [holdProgress, setHoldProgress] = useState(0);
  const [isHolding, setIsHolding] = useState(false);
  const holdTimerRef = useRef<NodeJS.Timeout | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const HOLD_DURATION = 3000; // 3 seconds

  useEffect(() => {
    return () => {
      // Cleanup on unmount
      if (holdTimerRef.current) {
        clearTimeout(holdTimerRef.current);
      }
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  const startHold = () => {
    setIsHolding(true);
    setHoldProgress(0);
    startTimeRef.current = Date.now();

    // Update progress every 50ms for smooth animation
    progressIntervalRef.current = setInterval(() => {
      if (startTimeRef.current) {
        const elapsed = Date.now() - startTimeRef.current;
        const progress = Math.min((elapsed / HOLD_DURATION) * 100, 100);
        setHoldProgress(progress);
      }
    }, 50);

    // Complete shutdown after 3 seconds
    holdTimerRef.current = setTimeout(() => {
      if (holdTimerRef.current) {
        onShutdownComplete();
      }
    }, HOLD_DURATION);
  };

  const stopHold = () => {
    setIsHolding(false);
    setHoldProgress(0);
    startTimeRef.current = null;

    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
      holdTimerRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  };

  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="flex flex-col items-center gap-8">
        <div className="relative">
          <button
            onMouseDown={startHold}
            onMouseUp={stopHold}
            onMouseLeave={stopHold}
            onTouchStart={startHold}
            onTouchEnd={stopHold}
            className={`relative w-24 h-24 rounded-full border-2 transition-all duration-200 ${
              isHolding
                ? 'border-white bg-white/10 scale-110'
                : 'border-white/50 bg-transparent hover:border-white/80 hover:bg-white/5'
            }`}
            aria-label="Hold to turn website back on"
          >
            <Power
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 transition-colors ${
                isHolding ? 'text-white' : 'text-white/70'
              }`}
            />
            
            {/* Progress ring */}
            {isHolding && (
              <svg
                className="absolute inset-0 w-full h-full transform -rotate-90"
                viewBox="0 0 100 100"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth="2"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="48"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray={`${2 * Math.PI * 48}`}
                  strokeDashoffset={`${2 * Math.PI * 48 * (1 - holdProgress / 100)}`}
                  strokeLinecap="round"
                  className="transition-all duration-50"
                />
              </svg>
            )}
          </button>
        </div>
        
        {isHolding && (
          <p className="text-white/80 text-sm animate-pulse">
            Hold to turn website back on
          </p>
        )}
      </div>
    </div>
  );
}

export default ShutdownView;

