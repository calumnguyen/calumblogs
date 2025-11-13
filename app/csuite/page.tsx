"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MenuBar } from "@/components/ui/animated-menu-bar";
import { Footer } from "@/components/ui/footer-section";
import { useRouter } from "next/navigation";
import { ArrowLeft, Github, Linkedin } from "lucide-react";
import { GlassmorphismProfileCard } from "@/components/ui/profile-card-1";

export default function CSuitePage(): React.JSX.Element {
  const router = useRouter();
  const [active, setActive] = React.useState<'home' | 'services' | 'csuite'>('csuite');

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
    <div className="relative flex min-h-screen flex-col dark">
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
              Our Leadership Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
             Exemplary leadership and expertise in the global business landscape
            </p>
          </motion.div>

          {/* Profile Cards Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 max-w-5xl mx-auto"
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <GlassmorphismProfileCard
                avatarUrl="https://placehold.co/400x400/2a2a2a/6b7280?text=CN"
                name="Calum Nguyen"
                title="CEO / CTO"
                bio="University of Southern California graduate with 10+ years of experience in global business strategy, leadership development, and digital transformation."
                socialLinks={[
                  // eslint-disable-next-line @typescript-eslint/no-deprecated
                  { id: 'github', icon: Github, label: 'GitHub', href: 'https://github.com/calumnguyen/' },
                  // eslint-disable-next-line @typescript-eslint/no-deprecated
                  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/calum-nguyen/' },
               
                ]}
                actionButton={{
                  text: 'Connect',
                  href: 'https://www.linkedin.com/in/calum-nguyen/',
                }}
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.6,
                duration: 0.8,
                ease: "easeInOut",
              }}
            >
              <GlassmorphismProfileCard
                avatarUrl="https://placehold.co/400x400/2a2a2a/6b7280?text=DN"
                name="Duke Nguyen On"
                title="COO / CFO"
                bio="Strategic operations and financial expert driving innovation and excellence across all business functions globally."
                socialLinks={[
                  // eslint-disable-next-line @typescript-eslint/no-deprecated
                  { id: 'linkedin', icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/duc-nguyen-24740b202/' },
             
                ]}
                actionButton={{
                  text: 'Connect',
                  href: 'https://www.linkedin.com/in/duc-nguyen-24740b202/',
                }}
              />
            </motion.div>
          </motion.div>

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

