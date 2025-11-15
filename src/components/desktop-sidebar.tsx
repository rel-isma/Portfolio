"use client";

import { motion } from "framer-motion";
import { Download, UserCheck, User, Home, Code, Briefcase, Mail, BrainCircuit, Sun, Moon, GraduationCap, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/skills", label: "Skills & Tech", icon: BrainCircuit },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "/ai-assistant", label: "AI Assistant", icon: Bot },
];

export function DesktopSidebar() {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.aside
      initial={{ width: "320px", opacity: 0 }}
      animate={{ width: "320px", opacity: 1 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      className="hidden lg:flex fixed left-0 top-0 h-full flex-col bg-background border-r border-border shadow-lg z-40 overflow-hidden"
    >
      {/* Header with Logo and Theme Toggle */}
      <div className="p-4 border-b border-border">
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          className="h-[88px] flex flex-col justify-between gap-1"
        >
          {/* Logo Section */}
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-3">
              <Image
                src="/relismaDark.svg"
                alt="Relisma Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Rachid El-ismaiyly
              </h1>
            </div>
          </div>
          
          {/* Theme Toggle */}
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2 p-2 border border-border rounded-lg">
              {mounted && (
                <>
                  <motion.button
                    onClick={() => setTheme("light")}
                    className={`flex items-center justify-center space-x-1 px-2 py-2 rounded-lg text-xs transition-all ${
                      theme === "light"
                        ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400 border-2 border-yellow-500"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Sun className="w-4 h-4" />
                    <span>Light</span>
                  </motion.button>
                  <motion.button
                    onClick={() => setTheme("dark")}
                    className={`flex items-center justify-center space-x-1 px-2 py-2 rounded-lg text-xs transition-all ${
                      theme === "dark"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 border-2 border-blue-500"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground border border-border"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Moon className="w-4 h-4" />
                    <span>Dark</span>
                  </motion.button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <div className="space-y-2 px-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link key={item.href} href={item.href}>
                <motion.div
                  className={`flex items-center justify-start space-x-3 px-3 py-3 rounded-xl transition-colors ${
                    isActive
                      ? "bg-primary text-white shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                  whileHover={{ x: 4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-medium whitespace-nowrap">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t border-border space-y-4">
        {/* Profile Info */}
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-b from-primary/10 to-primary/5 rounded-xl mx-auto mb-3 relative overflow-hidden">
            <Image
              src="/relisma_pic.jpg"
              alt="Profile"
              fill
              className="object-cover object-top rounded-xl"
            />
          </div>
          <h3 className="font-semibold text-sm">Rachid El-ismaiyly</h3>
          <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button
            href="/contact"
            className="w-full h-9 text-sm group"
          >
            <UserCheck className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Hire Me
          </Button>
          <Button
            href="/Rachid_El_ismaiyly_Full-Stack.pdf"
            target="_blank"
            variant="outline"
            className="w-full h-9 text-sm"
          >
            <Download className="mr-2 h-4 w-4" />
            Resume
          </Button>
        </div>

        {/* Social Links */}
        <div className="pt-2">
          <SocialLinks />
        </div>
      </div>
    </motion.aside>
  );
}
