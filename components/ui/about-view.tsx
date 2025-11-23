'use client';

/**
 * About View Component
 * 
 * Displays information about the website when "About This Website" is clicked.
 */
export function AboutView() {
  return (
    <div className="absolute inset-0 bg-black flex items-center justify-center">
      <div className="text-center px-8 max-w-2xl">
        <p className="text-white text-lg md:text-xl leading-relaxed">
          Website made with NextJS, ThreeJS, Spline, Framer-motion in 2025 by Calum Nguyen.
        </p>
      </div>
    </div>
  );
}

export default AboutView;

