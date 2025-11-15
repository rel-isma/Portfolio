"use client";

import { useState } from "react";
import { DesktopSidebar } from "@/components/desktop-sidebar";
import { MobileHeaderNav } from "@/components/mobile-header-nav";
import { MobileMenu } from "@/components/mobile-menu";
import { Footer } from "@/components/footer";
import { Toaster } from "react-hot-toast";
import { usePathname } from "next/navigation";
import type React from "react";

interface LayoutClientProps {
  children: React.ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAiAssistantRoute = pathname?.startsWith("/ai-assistant");

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex">
      {/* Desktop Sidebar - Clean, always visible on desktop */}
      <DesktopSidebar />
      
      {/* Mobile Header - With menu button */}
      <MobileHeaderNav onMenuClick={() => setIsMobileMenuOpen(true)} />
      
      {/* Mobile Menu - Dropdown overlay menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
      
      {/* Main Content */}
      <div className="flex-1 lg:ml-[320px] pt-16 lg:pt-0 flex flex-col">
        <main className="flex-1">{children}</main>
        {/* Hide Footer on the AI Assistant page for an immersive experience */}
        {!isAiAssistantRoute && <Footer />}
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}
