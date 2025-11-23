"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Safari } from "@/components/ui/safari";
import { generateBreadcrumbSchema } from "@/lib/seo-config";
import { BudPalQuiz2 } from "@/components/ui/budpal-quiz-2";

export default function WebDevPage(): React.JSX.Element {
  const router = useRouter();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Web Development Projects", url: "/webdev" },
  ]);

  return (
    <div className="relative flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
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
              Web Development Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              All websites showcased below are built and managed by me
            </p>
          </motion.div>

          {/* Section 1: Lumina Trading LLC ecosystem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              Lumina Trading LLC Ecosystem
            </h2>
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">luminatradingllc.com</h3>
                <Safari 
                  url="luminatradingllc.com" 
                  src="https://luminatradingllc.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">worldmaxxing.com</h3>
                <Safari 
                  url="worldmaxxing.com" 
                  src="https://worldmaxxing.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">srilanka-immigration.com</h3>
                <Safari 
                  url="srilanka-immigration.com" 
                  src="https://srilanka-immigration.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">srilankaemigration.com</h3>
                <Safari 
                  url="srilankaemigration.com" 
                  src="https://srilankaemigration.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">india-immigration.com</h3>
                <Safari 
                  url="india-immigration.com" 
                  src="https://india-immigration.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">tanzaniaimmigration.com</h3>
                <Safari 
                  url="tanzaniaimmigration.com" 
                  src="https://tanzaniaimmigration.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">kenya-immigration.com</h3>
                <Safari 
                  url="kenya-immigration.com" 
                  src="https://kenya-immigration.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">indonesia-immigration.com</h3>
                <Safari 
                  url="indonesia-immigration.com" 
                  src="https://indonesia-immigration.com" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 2: Sutygon ecosystem */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.6,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              Sutygon Ecosystem
            </h2>
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">sutygon.com</h3>
                <Safari 
                  url="sutygon.com" 
                  src="https://sutygon.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">portal.sutygon.com (CRM)</h3>
                <Safari 
                  url="portal.sutygon.com" 
                  src="https://portal.sutygon.com" 
                  className="w-full h-auto"
                />
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">cskh.sutygon.com</h3>
                <Safari 
                  url="cskh.sutygon.com" 
                  src="https://cskh.sutygon.com" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 3: Isitscam Project */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              Isitscam Project
            </h2>
            <div className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">isitscam.worldmaxxing.com</h3>
                <Safari 
                  url="isitscam.worldmaxxing.com" 
                  src="https://isitscam.worldmaxxing.com" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.section>

          {/* Section 4: BudPal CRM and Training Portal */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.0,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 text-center">
              BudPal CRM and Training Portal
            </h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <BudPalQuiz2 />
            </div>
          </motion.section>
        </div>
      </AuroraBackground>
    </div>
  );
}

