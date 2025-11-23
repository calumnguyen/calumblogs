import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Professional Experience",
  description: "Professional experience and career timeline showcasing roles in technology, management, and operations across various industries.",
  openGraph: {
    title: "Professional Experience | Calum Nguyen",
    description: "Professional experience and career timeline showcasing roles in technology, management, and operations across various industries.",
    url: `${siteConfig.url}/professional`,
    images: [
      {
        url: `${siteConfig.url}/professional/LuminaTradingLOGO.png`,
        width: 1200,
        height: 630,
        alt: "Professional Experience",
      },
    ],
  },
  twitter: {
    title: "Professional Experience | Calum Nguyen",
    description: "Professional experience and career timeline showcasing roles in technology, management, and operations across various industries.",
    images: [`${siteConfig.url}/professional/LuminaTradingLOGO.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/professional`,
  },
};

export default function ProfessionalLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <>{children}</>;
}


