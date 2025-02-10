import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { Navbar } from "@/components/navbar";
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} flex flex-col lg:flex-row min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col lg:flex-row w-full max-w-[1440px] mx-auto">
            <Sidebar />
            <div className="flex flex-col flex-grow w-full">
              <Navbar />
              <main className="flex-grow overflow-auto p-8">{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
