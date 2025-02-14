// import { Inter } from "next/font/google";
import { Syne } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import type React from "react";

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
        className={`${syne.className} flex flex-col md:flex-row  md:h-screen overflow-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col md:flex-row w-full max-w-[1440px] overflow-hidden mx-auto">
            <Sidebar />
            <div className="flex flex-col flex-grow overflow-hidden w-full">
              <Navbar />
              <main className="flex-grow overflow-auto p-8">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
