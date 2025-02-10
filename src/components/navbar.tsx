"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { MessageSquare, Menu } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm dark:bg-background-dark/80 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-4">
                <Link
                  href="#home"
                  className="text-primary hover:text-primary/90 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  href="#portfolio"
                  className="text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Portfolio
                </Link>
                <Link
                  href="#about"
                  className="text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Me
                </Link>
                <Link
                  href="#contact"
                  className="text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="bg-primary hover:bg-primary/90">
                <MessageSquare className="mr-2 h-4 w-4" />
                let&apos;s talk
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-foreground hover:bg-background-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background-dark focus:ring-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="#home"
              className="text-primary hover:text-primary/90 block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="#portfolio"
              className="text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark block px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </Link>
            <Link
              href="#about"
              className="text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark block px-3 py-2 rounded-md text-base font-medium"
            >
              About Me
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark block px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <ThemeToggle />
              <Button className="ml-auto bg-primary hover:bg-primary/90">
                <MessageSquare className="mr-2 h-4 w-4" />
                let&apos;s talk
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
