"use client";

import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import type React from "react";

interface LayoutClientProps {
  children: React.ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
  const pathname = usePathname();
  const isAiAssistantRoute = pathname?.startsWith("/ai-assistant");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex">
      <Sidebar />
      <div className="flex-1 lg:ml-[80px] flex flex-col">
        <main className="flex-1">{children}</main>
        {/* Hide Footer on the AI Assistant page for an immersive experience */}
        {!isAiAssistantRoute && <Footer />}
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
