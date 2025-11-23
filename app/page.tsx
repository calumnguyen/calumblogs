import { HeroLayout } from "@/components/ui/hero-layout";
import { siteConfig, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CALUM is all you need",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - CALUM is all you need`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - CALUM is all you need`,
      },
    ],
  },
  twitter: {
    title: `${siteConfig.name} - CALUM is all you need`,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function Home(): React.JSX.Element {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebSiteSchema();
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <HeroLayout appName="CALUM" />
    </>
  );
}
