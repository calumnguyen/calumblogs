'use client'

import { SplineScene } from "@/components/ui/splite";
import { SpotlightSimple } from "@/components/ui/spotlight-simple"
import { GradientButton } from "@/components/ui/gradient-button"
import { MenuBar } from "@/components/ui/animated-menu-bar";
import { Footer } from '@/components/ui/footer-section';
import { useState } from 'react'

type MenuItem = 'home' | 'services' | 'csuite';

export function DemoOne(): React.JSX.Element {
  return (
    <div className="relative flex min-h-svh flex-col">
      <div className="min-h-screen flex items-center justify-center">
        <h1 className='font-mono text-2xl font-bold'>Scroll Down!</h1>
      </div>
      <Footer />
    </div>
  );
}

export function SplineSceneBasic(): React.JSX.Element {
  const [active, setActive] = useState<MenuItem>('home');
  
  return (
    <div className="relative flex min-h-screen flex-col">
      <div className="w-full h-screen bg-black relative overflow-hidden">
        <SpotlightSimple size={500} />
        
        <div className="flex h-full flex-col md:flex-row">
          {/* Left content */}
          <div className="flex-1 p-8 md:p-16 relative z-10 flex flex-col justify-center">
            <h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              style={{
                background: 'linear-gradient(to bottom, #fafafa, #a3a3a3)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Lumina Trading Global Services
            </h1>
            <p className="mt-6 text-gray-300 max-w-lg text-lg md:text-xl">
            Drive innovation through agile, forward-thinking solutions that adapt to the fast-changing global market.
            </p>
            <div className="mt-8">
              <GradientButton variant='variant'>See our services</GradientButton>
            </div>
          </div>

          {/* Right content */}
          <div className="flex-1 relative">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Menu Bar at bottom center */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center px-4">
          <MenuBar active={active} onSelect={setActive} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

