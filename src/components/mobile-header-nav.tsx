"use client";

import { motion } from "framer-motion";
import { Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";

interface MobileHeaderNavProps {
  onMenuClick: () => void;
}

export function MobileHeaderNav({ onMenuClick }: MobileHeaderNavProps) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background/95 backdrop-blur-md border-b border-border z-50 flex items-center justify-between px-4 shadow-sm">
      {/* Logo/Brand */}
      <div className="flex items-center space-x-2">
        <Image
          src="/relismaDark.svg"
          alt="Relisma Logo"
          width={28}
          height={28}
          className="w-7 h-7"
        />
        <h1 className="text-base font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          rachid.tech
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-2">
        {/* Theme Toggle */}
        {mounted && (
          <motion.button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-9 h-9 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <Sun className="w-4 h-4 text-yellow-600" />
            ) : (
              <Moon className="w-4 h-4 text-blue-500" />
            )}
          </motion.button>
        )}
        
        {/* Menu Button */}
        <motion.button
          onClick={onMenuClick}
          className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 transition-colors shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </motion.button>
      </div>
    </header>
  );
}
