import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import type React from "react";
import { Toaster } from "react-hot-toast";
import { PerformanceWrapper } from "@/components/PerformanceWrapper";
import type { Metadata } from "next";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://relisma.me'),
  title: {
    default: "Rachid El-Ismaiyly - Full Stack Developer",
    template: "%s | Rachid El-Ismaiyly"
  },
  description: "Full Stack Developer specializing in React, Django, and modern web applications. Building scalable solutions and beautiful user experiences.",
  keywords: ["Full Stack Developer", "React", "Django", "JavaScript", "TypeScript", "Web Development", "Portfolio", "Rachid El-Ismaiyly"],
  authors: [{ name: "Rachid El-Ismaiyly" }],
  creator: "Rachid El-Ismaiyly",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://relisma.me",
    title: "Rachid El-Ismaiyly - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Django, and modern web applications.",
    siteName: "Rachid El-Ismaiyly Portfolio",
    images: [
      {
        url: "/relisma_pic.jpg",
        width: 1200,
        height: 630,
        alt: "Rachid El-Ismaiyly - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachid El-Ismaiyly - Full Stack Developer",
    description: "Full Stack Developer specializing in React, Django, and modern web applications.",
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
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PerformanceWrapper>
            <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex">
              <Sidebar />
              <div className="flex-1 lg:ml-[80px] flex flex-col">
                <main className="flex-1">
                  {children}
                </main>
                <Footer />
              </div>
              <Toaster position="bottom-right" />
            </div>
          </PerformanceWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
