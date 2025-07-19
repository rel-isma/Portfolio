// import { Inter } from 'next/font/google';
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import type React from "react";
import { ProgressBar } from "@/components/ProgressBar";
import { Toaster } from "react-hot-toast";
import { AiAssistant } from "@/components/AiAssistant";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Rachid El Ismaiyly | Full-Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Rachid El Ismaiyly, Full-Stack Developer. Projects, skills, and contact information." />
        <meta property="og:title" content="Rachid El Ismaiyly | Full-Stack Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Rachid El Ismaiyly, Full-Stack Developer." />
        <meta property="og:image" content="/public/relisma_pic.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rachid El Ismaiyly | Full-Stack Developer Portfolio" />
        <meta name="twitter:description" content="Portfolio of Rachid El Ismaiyly, Full-Stack Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rachidelismaiyly.me" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/model.glb" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="/Rachid_El_ismaiyly_Full-Stack.pdf" as="document" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Performance optimizations */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        
        {/* Resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </head>
      <body className={`${syne.className} flex flex-col md:flex-row md:h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 5000,
              style: {
                background: "hsl(var(--background))",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
                padding: "12px",
              },
            }}
          />
          <AiAssistant />
          <PerformanceMonitor />
          <div className="flex flex-col md:flex-row w-full max-w-[1440px] overflow-hidden mx-auto">
            <aside aria-label="Sidebar Navigation">
              <Sidebar />
            </aside>
            <div className="flex flex-col flex-grow overflow-hidden w-full">
              <main
                className="flex-grow overflow-auto no-scrollbar p-8 !pt-0  relative w-full"
                id="main-content"
                tabIndex={-1}
                aria-label="Main Content"
              >
                <header>
                  <Navbar />
                </header>
                {children}
                <ProgressBar />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  metadataBase: new URL('https://rachidelismaiyly.me'),
  title: "Rachid El-Ismaiyly | Full-Stack Web Developer",
  description:
    "Experienced full-stack developer specializing in modern web applications. Expertise in React, Next.js, Django, and scalable backend solutions.",
  keywords: [
    "Rachid El-Ismaiyly",
    "Portfolio",
    "rachid el ismaili",
    "rachid el ismaily",
    "Rel Isma",
    "Relisma",
    "Full-Stack Developer",
    "Software Engineer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "Python Developer",
    "JavaScript Engineer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "Performance Optimization",
  ],
  authors: [{ name: "Rachid El-Ismaiyly", url: "https://rachidelismaiyly.me" }],
  creator: "Rachid El-Ismaiyly",
  publisher: "Rachid El-Ismaiyly",
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
  openGraph: {
    title: "Rachid El-Ismaiyly | Full-Stack Developer & Software Engineer",
    description:
      "Building high-performance web applications using React, Next.js, and Django. Helping businesses scale with modern and scalable technology.",
    url: "https://rachidelismaiyly.me",
    siteName: "Rachid El-Ismaiyly Portfolio",
    images: [
      {
        url: "/relisma-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Preview of Rachid El-Ismaiyly's Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachid El-Ismaiyly | Full-Stack Developer & Software Engineer",
    description:
      "Expert in React, Next.js, and Django. Crafting scalable and high-performance web applications for businesses.",
    images: ["/relisma-preview.jpg"],
    creator: "@rachidelismaiyly",
  },
  alternates: {
    canonical: "https://rachidelismaiyly.me",
  },
  category: "technology",
  classification: "Portfolio",
};

