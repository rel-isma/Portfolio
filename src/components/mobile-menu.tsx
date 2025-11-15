"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, UserCheck, User, Home, Code, Briefcase, Mail, BrainCircuit, GraduationCap, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Menu Panel - Dropdown from top */}
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
              mass: 0.8
            }}
            className="lg:hidden fixed top-16 left-0 right-0 bg-background border-b border-border shadow-2xl z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h2 className="text-lg font-semibold">Menu</h2>
              <motion.button
                onClick={onClose}
                className="w-9 h-9 bg-muted hover:bg-muted/80 rounded-lg flex items-center justify-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="py-4">
              <div className="space-y-1 px-4">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={item.href}>
                        <motion.div
                          className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-colors ${
                            isActive
                              ? "bg-primary text-white shadow-md"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted"
                          }`}
                          whileHover={{ x: 4, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{item.label}</span>
                        </motion.div>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Profile & Actions */}
            <div className="p-4 border-t border-border space-y-4 bg-muted/30">
              {/* Profile Info */}
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-gradient-to-b from-primary/10 to-primary/5 rounded-xl relative overflow-hidden flex-shrink-0">
                  <Image
                    src="/relisma_pic.jpg"
                    alt="Profile"
                    fill
                    className="object-cover object-top rounded-xl"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Rachid El-ismaiyly</h3>
                  <p className="text-xs text-muted-foreground">Full-Stack Developer</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  href="/contact"
                  className="group text-sm h-10"
                >
                  <UserCheck className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  Hire Me
                </Button>
                <Button
                  href="/Rachid_El_ismaiyly_Full-Stack.pdf"
                  target="_blank"
                  variant="outline"
                  className="text-sm h-10"
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
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
