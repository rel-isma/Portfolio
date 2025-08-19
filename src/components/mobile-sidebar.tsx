"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu, UserCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialLinks } from "@/components/social-links";
import Image from "next/image";

export function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-50 bg-primary text-white shadow-lg hover:bg-primary/90 rounded-full w-12 h-12"
        aria-label="Open sidebar menu"
      >
        <Menu className="h-6 w-6" />
      </Button>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 bg-black/50 z-50"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="lg:hidden fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-background border-l shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header with Close Button */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Image
                      src="/relismalogo.svg"
                      alt="Logo"
                      width={24}
                      height={24}
                      className="text-white"
                    />
                  </div>
                  <h2 className="text-lg font-semibold">Rachid El-ismaiyly</h2>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground hover:text-foreground"
                  aria-label="Close sidebar"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Profile Image */}
              <div className="p-6">
                <div className="w-full max-w-[200px] mx-auto aspect-square bg-gradient-to-b from-primary/10 to-primary/5 rounded-xl mb-6 relative">
                  <Image
                    src="/relisma_pic.jpg"
                    alt="Profile"
                    fill
                    className="object-cover object-top rounded-xl"
                  />
                </div>

                {/* Info Section */}
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">
                      Specialization:
                    </h3>
                    <p className="font-semibold text-sm">
                      Full-stack Developer & Software Developer
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">
                      Based in:
                    </h3>
                    <p className="font-semibold text-sm">Taounate, Morocco</p>
                  </div>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <SocialLinks />
                  <Button
                    href="/contact"
                    className="w-full group"
                    onClick={() => setIsOpen(false)}
                  >
                    <UserCheck className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                    Hire Me
                  </Button>
                  <Button
                    href="/Rachid_El_ismaiyly_Full-Stack.pdf"
                    target="_blank"
                    variant="outline"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
