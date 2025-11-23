'use client';

import { CalumIsAllYouNeed } from './animated-hero-section';

interface PhoneHeroLayoutProps {
  appName?: string;
}

/**
 * Phone Hero Layout Component
 * 
 * Mobile version - just shows the hero without MacBook frame.
 * Mobile menu can be added later.
 */
export function PhoneHeroLayout({ appName: _appName = 'CALUM' }: PhoneHeroLayoutProps) {
  return (
    <div className="fixed inset-0 w-full h-full bg-black">
      <CalumIsAllYouNeed />
    </div>
  );
}

export default PhoneHeroLayout;

