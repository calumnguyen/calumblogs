"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateBreadcrumbSchema } from "@/lib/seo-config";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
  showHome?: boolean;
}

export function Breadcrumb({ 
  items, 
  className,
  showHome = true 
}: BreadcrumbProps): React.JSX.Element {
  // Add home to the beginning if showHome is true
  const breadcrumbItems = showHome 
    ? [{ name: "Home", url: "/" }, ...items]
    : items;
  
  const schema = generateBreadcrumbSchema(breadcrumbItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <nav 
        aria-label="Breadcrumb"
        className={cn("flex items-center space-x-2 text-sm", className)}
      >
        <ol className="flex items-center space-x-2">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;
            const isHome = index === 0 && showHome;
            
            return (
              <li key={item.url} className="flex items-center">
                {index > 0 ? <ChevronRight 
                    className="mx-2 h-4 w-4 text-gray-400" 
                    aria-hidden="true"
                  /> : null}
                {isLast ? (
                  <span 
                    className="text-gray-300 font-medium"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className={cn(
                      "flex items-center gap-1 text-gray-400 hover:text-white transition-colors",
                      isHome && "hover:scale-105"
                    )}
                  >
                    {isHome ? <Home className="h-4 w-4" aria-hidden="true" /> : null}
                    <span>{item.name}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

// Simplified version without icon, for minimal UI
export function SimpleBreadcrumb({ 
  items, 
  className 
}: Omit<BreadcrumbProps, "showHome">): React.JSX.Element {
  const schema = generateBreadcrumbSchema(items);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />
      <nav 
        aria-label="Breadcrumb"
        className={cn("text-sm", className)}
      >
        <ol className="flex items-center flex-wrap">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            
            return (
              <li key={item.url} className="flex items-center">
                {index > 0 ? <span className="mx-2 text-gray-500" aria-hidden="true">
                    /
                  </span> : null}
                {isLast ? (
                  <span className="text-gray-300">{item.name}</span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

