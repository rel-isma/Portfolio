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
            position="top-right"
            toastOptions={{
              duration: 5000, // 3 seconds
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
              <Navbar />
              <main
                className="flex-grow overflow-auto no-scrollbar p-8  relative w-full"
                id="main-content"
              >
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
