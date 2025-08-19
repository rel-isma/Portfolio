"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SidebarContextType {
  isMobileOpen: boolean;
  setIsMobileOpen: (open: boolean) => void;
  toggleMobile: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

  return (
    <SidebarContext.Provider
      value={{
        isMobileOpen,
        setIsMobileOpen,
        toggleMobile,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
