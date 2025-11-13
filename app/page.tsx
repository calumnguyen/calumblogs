import { SplineSceneBasic } from "@/components/demo";
import { siteConfig, generateOrganizationSchema, generateWebSiteSchema } from "@/lib/seo-config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Travel & Business Services",
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} - Global Travel and Business Services`,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Global Travel and Business Services`,
      },
    ],
  },
  twitter: {
    title: `${siteConfig.name} - Global Travel and Business Services`,
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
      <SplineSceneBasic />
    </>
  );
}
