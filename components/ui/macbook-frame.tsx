'use client';

import React from 'react';
import MacOSMenuBar from './mac-os-menu-bar';

interface MacBookFrameProps {
  children: React.ReactNode;
  appName?: string;
  onMenuAction?: (action: string) => void;
  className?: string;
  hideMenuBar?: boolean;
}

export function MacBookFrame({ 
  children, 
  appName = 'CALUM',
  className = '',
  onMenuAction,
  hideMenuBar = false
}: MacBookFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen py-8 px-4">
      <div className={`relative w-full max-w-6xl flex flex-col bg-black rounded-t-3xl shadow-2xl overflow-hidden ${className}`} style={{ aspectRatio: '16/10' }}>
        {/* macOS Menu Bar */}
        {!hideMenuBar ? <div className="relative z-50 px-4 pt-4">
            <MacOSMenuBar appName={appName} onMenuAction={onMenuAction} />
          </div> : null}
        
        {/* Content Area */}
        <div className="relative flex-1 w-full h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
