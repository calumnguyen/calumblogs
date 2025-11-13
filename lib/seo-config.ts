export const siteConfig = {
  name: "Lumina Trading LLC",
  description: "Drive innovation through agile, forward-thinking solutions that adapt to the fast-changing global market. Offering global visa services, travel insurance, and international connectivity solutions.",
  url: "https://lumina-trading.com", // Update with your actual domain
  ogImage: "/seo/og-image.png",
  links: {
    twitter: "https://twitter.com/luminatrading", // Update with actual
    linkedin: "https://www.linkedin.com/company/lumina-trading", // Update with actual
  },
  keywords: [
    // Core Business Keywords
    "global visa services",
    "travel authorization documents",
    "international visa processing",
    "visa application services",
    "travel document services",
    
    // Service-Specific Keywords
    "travel insurance worldwide",
    "international travel insurance",
    "global travel coverage",
    "international eSIM service",
    "global eSIM connectivity",
    "international mobile connectivity",
    
    // Location & Scope Keywords
    "40+ destination coverage",
    "worldwide travel services",
    "global business services",
    "international travel solutions",
    
    // Business Type Keywords
    "travel services company",
    "global lifestyle services",
    "international business solutions",
    "travel convenience services",
    "digital transformation travel",
    
    // Leadership Keywords
    "USC graduate leadership",
    "global business strategy",
    "executive team travel services",
    "experienced travel industry leaders",
    "innovative business solutions",
    
    // Value Proposition Keywords
    "seamless travel experience",
    "comprehensive travel solutions",
    "efficient visa processing",
    "modern travel services",
    "forward-thinking travel company",
  ],
  authors: [
    {
      name: "Calum Nguyen",
      title: "CEO / CTO",
      linkedin: "https://www.linkedin.com/in/calum-nguyen/",
      github: "https://github.com/calumnguyen/",
      bio: "University of Southern California graduate with 10+ years of experience in global business strategy, leadership development, and digital transformation.",
    },
    {
      name: "Duke Nguyen On",
      title: "COO / CFO",
      linkedin: "https://www.linkedin.com/in/duc-nguyen-24740b202/",
      bio: "Strategic operations and financial expert driving innovation and excellence across all business functions globally.",
    },
  ],
  services: [
    {
      name: "Global Visa and Travel Authorization",
      description: "Visa and Travel Authorization Services to over 40 destinations globally.",
      url: "https://worldmaxxing.com",
    },
    {
      name: "Travel Insurance",
      description: "Comprehensive travel insurance coverage available to over 40 destinations worldwide.",
    },
    {
      name: "International eSim Service",
      description: "Stay connected across borders with our international eSim service, available to over 40 destinations globally.",
    },
  ],
};

export const generateMetadata = {
  metadataBase: new URL(siteConfig.url),
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
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
    card: "summary_large_image",
    site: "@luminatrading", // Update with actual handle
    creator: "@luminatrading",
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large" as const,
      "max-snippet": -1,
    },
  },
};

// Structured Data Helpers
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/icon-transparent.png`,
  description: siteConfig.description,
  founder: siteConfig.authors.map(author => ({
    "@type": "Person",
    name: author.name,
    jobTitle: author.title,
    url: author.linkedin,
    description: author.bio,
  })),
  sameAs: [
    siteConfig.links.twitter,
    siteConfig.links.linkedin,
    siteConfig.authors[0]?.linkedin,
    siteConfig.authors[0]?.github,
    siteConfig.authors[1]?.linkedin,
  ].filter(Boolean),
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English"],
  },
});

export const generateWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  publisher: {
    "@type": "Organization",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/icon-transparent.png`,
    },
  },
});

export const generatePersonSchema = (author: typeof siteConfig.authors[0]) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: author.name,
  jobTitle: author.title,
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  url: author.linkedin,
  sameAs: [
    author.linkedin,
    ...(author.github ? [author.github] : []),
  ],
  description: author.bio,
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${siteConfig.url}${item.url}`,
  })),
});

export const generateServiceSchema = (service: typeof siteConfig.services[0]) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  areaServed: {
    "@type": "Place",
    name: "Worldwide",
  },
  ...(service.url && { url: service.url }),
});

