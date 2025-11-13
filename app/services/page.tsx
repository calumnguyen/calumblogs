"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MenuBar } from "@/components/ui/animated-menu-bar";
import { Footer } from "@/components/ui/footer-section";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Safari } from "@/components/ui/safari";
import { GradientButton } from "@/components/ui/gradient-button";

export default function ServicesPage(): React.JSX.Element {
  const router = useRouter();
  const [active, setActive] = React.useState<'home' | 'services' | 'csuite'>('services');

  const handleNavigation = (key: 'home' | 'services' | 'csuite'): void => {
    setActive(key);
    if (key === 'home') {
      router.push('/');
    } else if (key === 'services') {
      router.push('/services');
    } else {
      router.push('/csuite');
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      <AuroraBackground className="bg-black dark:bg-black">
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => { router.push('/'); }}
            className="mb-8 flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="size-5" />
            <span>Back to Home</span>
          </motion.button>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Global Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive solutions designed to promote convenience and efficiency in global lifestyle and services
            </p>
          </motion.div>

          {/* Section 1: Global Visa and Travel Authorization Document Services */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left: Header and Description */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Global Visa and Travel Authorization Document Services
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed mb-8">
                  Visa and Travel Authorization Services to over 40 destinations globally.
                </p>
                <GradientButton
                variant='variant'
                  onClick={() => window.open('https://worldmaxxing.com', '_blank', 'noopener,noreferrer')}
                  className="transition-transform hover:scale-105"
                >
                  Explore this service
                </GradientButton>
              </div>
              
              {/* Right: Live Website Preview */}
              <div className="text-gray-300">
                <Safari 
                  url="worldmaxxing.com" 
                  src="https://worldmaxxing.com" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 2: Travel Insurance */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Travel Insurance
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Comprehensive travel insurance coverage available to over 40 destinations worldwide, providing peace of mind for your international journeys.
            </p>
            <GradientButton
              variant='variant'
              className="transition-transform hover:scale-105"
            >
              Contact us
            </GradientButton>
          </motion.section>

          {/* Section 3: International eSim Service */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              International eSim Service
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Stay connected across borders with our international eSim service, available to over 40 destinations globally for seamless mobile connectivity.
            </p>
            <GradientButton
              variant='variant'
              className="transition-transform hover:scale-105"
            >
              Contact us
            </GradientButton>
          </motion.section>

          {/* Menu Bar at bottom */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.4,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="flex justify-center pb-12"
          >
            <MenuBar active={active} onSelect={handleNavigation} />
          </motion.div>
        </div>
      </AuroraBackground>
      <Footer />
    </div>
  );
}

