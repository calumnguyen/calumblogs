import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Web Development Projects",
  description: "A showcase of websites and web applications built and managed by Calum. Featuring Lumina Trading LLC ecosystem, Sutygon ecosystem, and BudPal CRM.",
  openGraph: {
    title: "Web Development Projects | Calum",
    description: "A showcase of websites and web applications built and managed by Calum.",
    url: `${siteConfig.url}/webdev`,
    images: [
      {
        url: `${siteConfig.url}/seo/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Calum - Web Development Projects",
      },
    ],
  },
  twitter: {
    title: "Web Development Projects | Calum",
    description: "A showcase of websites and web applications built and managed by Calum.",
    images: [`${siteConfig.url}/seo/og-image.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/webdev`,
  },
};

export default function WebDevLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <>{children}</>;
}

