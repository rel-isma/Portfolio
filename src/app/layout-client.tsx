"use client";

import { useState } from "react";
import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { AiAssistant } from "@/components/AiAssistant";
import { Toaster } from "react-hot-toast";
import type React from "react";

interface LayoutClientProps {
  children: React.ReactNode;
}

export function LayoutClient({ children }: LayoutClientProps) {
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-background/95 flex">
      <Sidebar onOpenAiAssistant={() => setIsAiAssistantOpen(true)} />
      <div className="flex-1 lg:ml-[80px] flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
      <AiAssistant 
        isOpenExternal={isAiAssistantOpen}
        onOpenChange={setIsAiAssistantOpen}
      />
    </div>
  );
}
