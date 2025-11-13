'use client'

import { SplineScene } from "@/components/ui/splite";
import { SpotlightSimple } from "@/components/ui/spotlight-simple"
import { GradientButton } from "@/components/ui/gradient-button"
 
export function SplineSceneBasic(): React.JSX.Element {
  return (
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
    </div>
  )
}

