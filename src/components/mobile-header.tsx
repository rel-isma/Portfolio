"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import { Download, UserCheck, User, Home, Code, Briefcase, Mail, BrainCircuit, GraduationCap } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/about", label: "About", icon: User },
  { href: "/education", label: "Education", icon: GraduationCap },
  { href: "/skills", label: "Skills & Tech", icon: BrainCircuit },
  { href: "/projects", label: "Projects", icon: Code },
  { href: "/services", label: "Services", icon: Briefcase },
  { href: "/contact", label: "Contact", icon: Mail },
];

export function MobileHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  // Close sidebar when route changes
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b z-40 flex items-center justify-between px-4">
        {/* Logo/Brand */}
        <div className="flex items-center">
          <h1 className="text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Rachid El-Ismaiyly
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle */}
          <ThemeToggle />
          
          {/* Menu Button */}
          <motion.button
            onClick={() => setIsSidebarOpen(true)}
            className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle sidebar menu"
          >
            <Menu className="w-5 h-5" />
          </motion.button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-40"
              onClick={() => setIsSidebarOpen(false)}
            />

            {/* Mobile Sidebar */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed left-0 top-16 bottom-0 w-80 max-w-[85vw] bg-background border-r shadow-2xl z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="p-4 border-b flex justify-between items-center">
                <h2 className="font-semibold text-lg">Menu</h2>
                <motion.button
                  onClick={() => setIsSidebarOpen(false)}
                  className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Navigation */}
              <nav className="py-6">
                <div className="space-y-2 px-4">
                  {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    
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

              {/* Profile & Actions */}
              <div className="p-6 border-t mt-6 space-y-6">
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
