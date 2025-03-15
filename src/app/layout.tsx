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
import { Metadata } from "next";

// const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${syne.className} flex flex-col md:flex-row md:h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Add Toaster here */}
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

          <div className="flex flex-col md:flex-row w-full max-w-[1440px] overflow-hidden mx-auto">
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-hidden w-full">
              <main
                className="flex-grow overflow-auto no-scrollbar p-8 !pt-0  relative w-full"
                id="main-content"
              >
                <Navbar />
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Rachid El-Ismaiyly | Full-Stack Developer & Software Engineer",
    description:
      "Expert in React, Next.js, and Django. Crafting scalable and high-performance web applications for businesses.",
    images: ["/relisma-preview.jpg"],
  },
};

