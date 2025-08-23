import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { PerformanceWrapper } from "@/components/PerformanceWrapper";
import { LayoutClient } from "./layout-client";
import type React from "react";
import type { Metadata } from "next";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rachid.tech'),
  title: {
    default: "Rachid El Ismaiyly - Full Stack Developer",
    template: "%s | Rachid El Ismaiyly"
  },
  description: "Hi, I'm Rachid El Ismaiyly – a Full Stack Developer specializing in Next.js, React, Django, and modern web applications. Explore my projects, skills, and contact me for collaborations.",
  keywords: [
    "Rachid El Ismaiyly portfolio",
    "Rachid El-Ismaiyly",
    "Full Stack Developer",
    "Web Developer Morocco",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "JavaScript Developer",
    "TypeScript Developer",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "Rachid El Ismaiyly" }],
  creator: "Rachid El Ismaiyly",
  alternates: {
    canonical: "https://rachid.tech",
  },
  icons: [
    {
      url: "/relismalogo.svg",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/relismaDark.svg", 
      media: "(prefers-color-scheme: dark)",
    },
    {
      url: "/relismaDark.svg", // Default fallback
      sizes: "any",
    }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rachid.tech",
    title: "Rachid El Ismaiyly - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Django, Next.js, and modern web applications.",
    siteName: "Rachid El Ismaiyly Portfolio",
    images: [
      {
        url: "/relisma_pic.jpg", // make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "Rachid El Ismaiyly - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachid El Ismaiyly - Full Stack Developer",
    description: "Explore the portfolio of Rachid El Ismaiyly – Full Stack Developer specializing in Next.js, React, and Django.",
    images: ["/relisma_pic.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* JSON-LD Schema for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Rachid El Ismaiyly",
              url: "https://rachid.tech",
              sameAs: [
                "https://github.com/relisma",
                "https://www.linkedin.com/in/rachid-elismaiyly/",
              ],
              jobTitle: "Full Stack Developer",
              knowsAbout: [
                "Next.js",
                "React",
                "Django",
                "TypeScript",
                "JavaScript",
                "Web Development"
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PerformanceWrapper>
            <LayoutClient>
              {children}
            </LayoutClient>
          </PerformanceWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
