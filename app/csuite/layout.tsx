import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Leadership Team",
  description: "Meet the exemplary leadership team of Lumina Trading LLC. Led by CEO/CTO Calum Nguyen (USC graduate with 10+ years experience) and COO/CFO Duke Nguyen On, our executives drive innovation and excellence in global business strategy and digital transformation.",
  openGraph: {
    title: "Leadership Team | Lumina Trading LLC",
    description: "Meet our executive team: Calum Nguyen (CEO/CTO) and Duke Nguyen On (COO/CFO), bringing expertise in global business strategy, operations, and financial management.",
    url: `${siteConfig.url}/csuite`,
    images: [
      {
        url: `${siteConfig.url}/seo/og-image-team.png`,
        width: 1200,
        height: 630,
        alt: "Lumina Trading LLC - Leadership Team",
      },
    ],
  },
  twitter: {
    title: "Leadership Team | Lumina Trading LLC",
    description: "Meet our executive team: Calum Nguyen (CEO/CTO) and Duke Nguyen On (COO/CFO), bringing expertise in global business strategy, operations, and financial management.",
    images: [`${siteConfig.url}/seo/og-image-team.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/csuite`,
  },
};

export default function CSuiteLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <>{children}</>;
}

