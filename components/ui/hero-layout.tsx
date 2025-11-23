'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { CalumIsAllYouNeed } from './animated-hero-section';
import { MacBookFrame } from './macbook-frame';
import { PhoneHeroLayout } from './phone-hero-layout';
import { AboutView } from './about-view';
import { SystemPreferencesView } from './system-preferences-view';
import { SleepView } from './sleep-view';
import { RestartView } from './restart-view';
import { ShutdownView } from './shutdown-view';

interface HeroLayoutProps {
  appName?: string;
}

const COLOR_OPTIONS = {
  default: 'from-gray-200 via-gray-100 to-gray-200',
  lavender: 'from-purple-200 via-pink-100 to-purple-200',
  mint: 'from-green-200 via-emerald-100 to-green-200',
  sky: 'from-blue-200 via-cyan-100 to-blue-200',
  peach: 'from-orange-200 via-pink-100 to-orange-200',
};

/**
 * Hero Layout Component
 * 
 * Responsive wrapper that switches between laptop and phone versions
 * based on screen size.
 * 
 * - Laptop version: MacBook frame with macOS menu bar
 * - Phone version: Custom mobile layout (to be implemented)
 */
export function HeroLayout({ appName = 'CALUM' }: HeroLayoutProps) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [showSleep, setShowSleep] = useState(false);
  const [showRestart, setShowRestart] = useState(false);
  const [showShutdown, setShowShutdown] = useState(false);
  const [heroKey, setHeroKey] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('default');

  useEffect(() => {
    // Check if device is mobile (width < 768px)
    const checkMobile = (): void => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => { 
      window.removeEventListener('resize', checkMobile); 
    };
  }, []);

  useEffect(() => {
    // Load saved color preference from sessionStorage
    const savedColor = sessionStorage.getItem('background-color');
    if (savedColor && COLOR_OPTIONS[savedColor as keyof typeof COLOR_OPTIONS]) {
      setSelectedColor(savedColor);
    }
  }, []);

  const handleMenuAction = (action: string) => {
    if (action === 'about') {
      setShowAbout(prev => !prev);
      setShowPreferences(false);
      setShowSleep(false);
      setShowRestart(false);
      setShowShutdown(false);
    } else if (action === 'preferences') {
      setShowPreferences(prev => !prev);
      setShowAbout(false);
      setShowSleep(false);
      setShowRestart(false);
      setShowShutdown(false);
    } else if (action === 'sleep') {
      setShowSleep(prev => !prev);
      setShowAbout(false);
      setShowPreferences(false);
      setShowRestart(false);
      setShowShutdown(false);
    } else if (action === 'restart') {
      setShowRestart(true);
      setShowAbout(false);
      setShowPreferences(false);
      setShowSleep(false);
      setShowShutdown(false);
    } else if (action === 'shutdown') {
      setShowShutdown(true);
      setShowAbout(false);
      setShowPreferences(false);
      setShowSleep(false);
      setShowRestart(false);
    } else if (action === 'view-education') {
      router.push('/edu');
    } else if (action === 'view-professional') {
      router.push('/professional');
    } else if (action === 'view-webdev') {
      router.push('/webdev');
    } else if (action === 'view-blog') {
      router.push('/blogs');
    } else if (action === 'contact-calum') {
      router.push('/contact');
    }
  };

  const handleWakeUp = () => {
    setShowSleep(false);
  };

  const handleRestartComplete = () => {
    // Force hero to restart by changing key, which will remount the component
    setHeroKey(prev => prev + 1);
    setShowRestart(false);
  };

  const handleShutdownComplete = () => {
    // Force hero to restart by changing key, which will remount the component
    setHeroKey(prev => prev + 1);
    setShowShutdown(false);
  };

  const handleColorSelect = (colorId: string) => {
    setSelectedColor(colorId);
    sessionStorage.setItem('background-color', colorId);
  };

  const backgroundGradient = COLOR_OPTIONS[selectedColor as keyof typeof COLOR_OPTIONS] || COLOR_OPTIONS.default;

  // Laptop version (MacBook frame with macOS menu bar)
  if (!isMobile) {
    return (
      <div className={`min-h-screen bg-gradient-to-br ${backgroundGradient} transition-colors duration-500`}>
        <MacBookFrame appName={appName} onMenuAction={handleMenuAction} hideMenuBar={showShutdown}>
          {showAbout ? (
            <AboutView />
          ) : showPreferences ? (
            <SystemPreferencesView selectedColor={selectedColor} onColorSelect={handleColorSelect} />
          ) : showSleep ? (
            <SleepView onWakeUp={handleWakeUp} />
          ) : showRestart ? (
            <RestartView onRestartComplete={handleRestartComplete} />
          ) : showShutdown ? (
            <ShutdownView onShutdownComplete={handleShutdownComplete} />
          ) : (
            <CalumIsAllYouNeed key={heroKey} />
          )}
        </MacBookFrame>
      </div>
    );
  }

  // Phone version (custom mobile layout - to be implemented)
  return (
    <PhoneHeroLayout appName={appName} />
  );
}

export default HeroLayout;

