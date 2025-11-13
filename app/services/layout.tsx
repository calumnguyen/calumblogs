import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Global Services",
  description: "Comprehensive solutions designed to promote convenience and efficiency in global lifestyle and services. Offering visa services, travel insurance, and international eSIM connectivity to 40+ destinations worldwide.",
  openGraph: {
    title: "Global Services | Lumina Trading LLC",
    description: "Comprehensive global services including visa processing, travel insurance, and international eSIM connectivity to 40+ destinations worldwide.",
    url: `${siteConfig.url}/services`,
    images: [
      {
        url: `${siteConfig.url}/seo/og-image-services.png`,
        width: 1200,
        height: 630,
        alt: "Lumina Trading LLC - Global Services",
      },
    ],
  },
  twitter: {
    title: "Global Services | Lumina Trading LLC",
    description: "Comprehensive global services including visa processing, travel insurance, and international eSIM connectivity to 40+ destinations worldwide.",
    images: [`${siteConfig.url}/seo/og-image-services.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return <>{children}</>;
}

