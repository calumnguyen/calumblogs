"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import { generateBreadcrumbSchema } from "@/lib/seo-config";

export default function EduPage(): React.JSX.Element {
  const router = useRouter();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Education Experience", url: "/edu" },
  ]);

  // Convert 1:51:50 to seconds: 1 hour (3600s) + 51 minutes (3060s) + 50 seconds = 6710 seconds
  const videoStartTime = 6710; // 1:51:50 in seconds

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
              Education Experience
            </h1>
          </motion.div>

          {/* USC Education Section */}
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
            <div className="flex flex-col items-center text-center">
              {/* USC Logo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="mb-8 bg-white p-6 rounded-lg"
              >
                <Image
                  src="/USC-Logo.png"
                  alt="USC Logo"
                  width={300}
                  height={300}
                  className="w-auto h-auto max-w-[300px]"
                  priority
                />
              </motion.div>

              {/* Graduation Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="max-w-3xl"
              >
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8">
                  Graduated in <span className="text-white font-semibold">2022</span> with a{" "}
                  <span className="text-white font-semibold">B.A. in Philosophy, Politics, and Law</span>; and a{" "}
                  <span className="text-white font-semibold">B.A. in French</span>
                </p>
              </motion.div>
            </div>
          </motion.section>

          {/* YouTube Video Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.0,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mb-20 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12"
          >
            <div className="flex flex-col items-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Commencement Video
              </h2>
              <div className="w-full max-w-4xl">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={`https://www.youtube.com/embed/IKIOrehRvDk?start=${videoStartTime}&autoplay=0&rel=0&enablejsapi=1`}
                    title="USC Commencement Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <p className="text-sm text-gray-400 mt-4 text-center">
                  Video timestamp: 1:51:50 - 1:52:05
                </p>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  <a 
                    href="https://www.youtube.com/watch?v=IKIOrehRvDk&t=6710s" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-300"
                  >
                    Watch on YouTube
                  </a>
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </AuroraBackground>
    </div>
  );
}
