import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Education Experience",
  description: "Education experience at University of Southern California. Graduated in 2022 with a B.A. in Philosophy, Politics, and Law; and a B.A. in French.",
  openGraph: {
    title: "Education Experience | Calum Nguyen",
    description: "Education experience at University of Southern California. Graduated in 2022 with a B.A. in Philosophy, Politics, and Law; and a B.A. in French.",
    url: `${siteConfig.url}/edu`,
    images: [
      {
        url: `${siteConfig.url}/USC-Logo.png`,
        width: 1200,
        height: 630,
        alt: "USC Education Experience",
      },
    ],
  },
  twitter: {
    title: "Education Experience | Calum Nguyen",
    description: "Education experience at University of Southern California. Graduated in 2022 with a B.A. in Philosophy, Politics, and Law; and a B.A. in French.",
    images: [`${siteConfig.url}/USC-Logo.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/edu`,
  },
};

export default function EduLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <>{children}</>;
}

