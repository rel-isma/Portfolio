"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, UserCheck, ChevronRight, User, Home, Code, Briefcase, Mail, BrainCircuit, ChevronLeft, Bot } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/skills", label: "Skills & Tech", icon: BrainCircuit },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
  { href: "#ai-assistant", label: "AI Assistant", icon: Bot, isAction: true },
];

interface SidebarProps {
  onOpenAiAssistant?: () => void;
}

export function Sidebar({ onOpenAiAssistant }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile sidebar when route changes
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Toggle Button - Fixed in top-left corner */}
      <motion.button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed top-2 left-0 w-12 h-12 bg-primary rounded-r-lg flex items-center justify-center text-white hover:bg-primary/90 transition-colors z-50 shadow-lg"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open sidebar menu"
      >
        <ChevronRight className="w-6 h-6" />
      </motion.button>

      {/* Desktop Sidebar */}
      <motion.aside
        initial={{ width: "80px" }}
        animate={{ width: isExpanded ? "320px" : "80px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="hidden lg:flex fixed left-0 top-0 h-full flex-col bg-background border-r shadow-lg z-50 overflow-hidden"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Toggle Button with Theme Toggle */}
        <div className="p-4 border-b">
          <div className="flex flex-col items-center space-y-3">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
            
            {/* Theme Toggle - always below the arrow */}
            <ThemeToggle />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4">
          <div className="space-y-2 px-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href && !item.isAction;
              
              if (item.isAction) {
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => onOpenAiAssistant?.()}
                    className="w-full flex items-center space-x-3 px-3 py-3 rounded-xl transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-6 h-6 min-w-[24px]" />
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="font-medium whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.button>
                );
              }
              
              return (
                <Link key={item.href} href={item.href}>
                  <motion.div
                    className={`flex items-center space-x-3 px-3 py-3 rounded-xl transition-colors ${
                      isActive
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-6 h-6 min-w-[24px]" />
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="font-medium whitespace-nowrap"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </nav>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="p-4 border-t space-y-4"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.aside>

      {/* Mobile Sidebar - Full Height Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsMobileOpen(false)}
            />

            {/* Mobile Sidebar - Full Height */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background border-r shadow-2xl z-50 overflow-y-auto flex flex-col"
            >
              {/* Header with Close and Theme Toggle */}
              <div className="p-4 border-b flex items-center justify-between">
                <h2 className="font-semibold text-lg">Menu</h2>
                <div className="flex items-center space-x-2">
                  <ThemeToggle />
                  <motion.button
                    onClick={() => setIsMobileOpen(false)}
                    className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 py-6">
                <div className="space-y-2 px-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href && !item.isAction;
                    
                    if (item.isAction) {
                      return (
                        <motion.button
                          key={item.href}
                          onClick={() => {
                            onOpenAiAssistant?.();
                            setIsMobileOpen(false);
                          }}
                          className="w-full flex items-center space-x-3 px-4 py-4 rounded-xl transition-colors text-muted-foreground hover:text-foreground hover:bg-muted"
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="font-medium">{item.label}</span>
                        </motion.button>
                      );
                    }
                    
                    return (
                      <Link key={item.href} href={item.href}>
                        <motion.div
                          className={`flex items-center space-x-3 px-4 py-4 rounded-xl transition-colors ${
                            isActive
                              ? "bg-primary text-white"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon className="w-6 h-6" />
                          <span className="font-medium">{item.label}</span>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Profile & Actions - At bottom */}
              <div className="p-6 border-t space-y-6">
                {/* Profile Info */}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-b from-primary/10 to-primary/5 rounded-xl mx-auto mb-4 relative overflow-hidden">
                    <Image
                      src="/relisma_pic.jpg"
                      alt="Profile"
                      fill
                      className="object-cover object-top rounded-xl"
                    />
                  </div>
                  <h3 className="font-semibold">Rachid El-ismaiyly</h3>
                  <p className="text-sm text-muted-foreground">Full-Stack Developer</p>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button
                    href="/contact"
                    className="w-full group"
                  >
                    <UserCheck className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Hire Me
                  </Button>
                  <Button
                    href="/Rachid_El_ismaiyly_Full-Stack.pdf"
                    target="_blank"
                    variant="outline"
                    className="w-full"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <SocialLinks />
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
