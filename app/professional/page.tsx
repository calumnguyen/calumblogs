"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/seo-config";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";

export default function ProfessionalPage(): React.JSX.Element {
  const router = useRouter();

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Professional Experience", url: "/professional" },
  ]);

  const timelineData = [
    {
      title: "2025 - Current",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              CTO @ Lumina Trading LLC
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              California and Ho Chi Minh City
            </p>
          </div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Build and manage infrastructure for over 8 companies within the Lumina Trading LLC ecosystem
          </p>
          <div className="flex justify-start">
            <Image
              src="/professional/LuminaTradingLOGO.png"
              alt="Lumina Trading LLC logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2023 - April 2025",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              General Manager @ El Pollo Loco
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              California
            </p>
          </div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Manage over 50 employees, P&L, Training, daily operation, and Compliances for 2 different locations
          </p>
          <div className="flex justify-start">
            <Image
              src="/professional/Elpolloloco.png"
              alt="El Pollo Loco logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Jan 2023 - Aug 2023",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Store Supervisor / Corporate Trainer @ Lee&apos;s Sandwiches
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              California
            </p>
          </div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Executed daily operations, learned about P&L, served as communication and training liaison between corporate and store
          </p>
          <div className="flex justify-start">
            <Image
              src="/professional/LeesSandwicheseLOGO.png"
              alt="Lee's Sandwiches logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Feb 2022 - Nov 2022",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Settlement Administrator @ Abramson Labor Group
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              California
            </p>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-white text-base md:text-lg mb-2">
              <span>•</span>
              <span>Efficiently managed the pre-litigation settlement process for a portfolio of over 40 cases per month, demonstrating exceptional organizational and multitasking abilities.</span>
            </div>
            <div className="flex gap-2 items-start text-white text-base md:text-lg">
              <span>•</span>
              <span>Successfully executed over 300 Settlement Agreements, resulting in substantial settlement payments totaling more than $500,000</span>
            </div>
          </div>
          <div className="flex justify-start">
            <Image
              src="/professional/AbramsonLogo.png"
              alt="Abramson Labor Group logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2021 - Dec 2021",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Marketing & Ads Intern @ MAG Jeunes LGBT Paris
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              Paris, France
            </p>
          </div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Manage and oversee 10k in Google Ads Budget, Event and Logistic Planning
          </p>
          <div className="flex justify-start">
            <Image
              src="/professional/MAGJEUNESLOGO.png"
              alt="MAG Jeunes LGBT Paris logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2020 - Aug 2021",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Human Services Specialist @ Oregon Department of Human Services
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              Oregon, USA
            </p>
          </div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            As a Bilingual Specialist, responsible for assisting members of both the Vietnamese and English-speaking communities to apply for welfare and state benefits including but not limited to Food stamps, health insurance and cash assistance. Diligently leveraged historical interpersonal proficiency to liaise with approximately 3.7 million members to improve their quality of living since Q3 2020.
          </p>
          <div className="flex justify-start">
            <Image
              src="/professional/OregonDHSLogo.png"
              alt="Oregon Department of Human Services logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2016 - Aug 2018",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Designated Hitter @ Walgreens
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              Oregon
            </p>
          </div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Worked closely with the pharmacy manager for accurate prescription of medication and labelling of product pharmaceutical information. Proficiently packaged and labeled pharmaceuticals and performed mandatory pharmacy operations to contribute to the completion of 150+ prescriptions weekly.
          </p>
          <div className="flex justify-start">
            <Image
              src="/professional/WalgreensLogo.png"
              alt="Walgreens logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aug 2015 - April 2017",
      content: (
        <div>
          <div className="mb-4">
            <h4 className="text-white text-xl md:text-2xl font-semibold mb-2">
              Shift Manager @ McDonald&apos;s
            </h4>
            <p className="text-white/80 text-base md:text-lg mb-2">
              Oregon, USA
            </p>
          </div>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-white text-base md:text-lg mb-2">
              <span>•</span>
              <span>Proficiently trained crew members to handle the creation and preparation of 145+ menu items for 2 years.</span>
            </div>
            <div className="flex gap-2 items-start text-white text-base md:text-lg mb-2">
              <span>•</span>
              <span>Led 32 employees to fulfill daily company operations, solved conflicts with issue-resolution, and fulfilled orders for at least 500 customers daily throughout tenure.</span>
            </div>
            <div className="flex gap-2 items-start text-white text-base md:text-lg">
              <span>•</span>
              <span>During day-to-day store tasks, contributed to seamless team functionality in a fast-paced dynamic environment through inter-departmental collaboration with the restaurant owner, store manager, and corporate during 2015-17.</span>
            </div>
          </div>
          <div className="flex justify-start">
            <Image
              src="/professional/McDonaldsLogo.png"
              alt="McDonald's logo"
              width={300}
              height={300}
              className="rounded-lg object-contain h-32 md:h-44 lg:h-60 w-auto shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="relative flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <AuroraBackground className="bg-black dark:bg-black">
        <div className="relative z-10 w-full">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => {
              router.push("/");
            }}
            className="absolute top-8 left-4 md:left-8 z-50 flex items-center gap-2 text-gray-300 hover:text-white transition-colors bg-black/50 backdrop-blur-sm px-4 py-2 rounded-lg"
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
            className="text-center pt-32 pb-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Professional Experience
            </h1>
          </motion.div>

          {/* Timeline */}
          <Timeline 
            data={timelineData} 
            showHeader={false}
          />
        </div>
      </AuroraBackground>
    </div>
  );
}
