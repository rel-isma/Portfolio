"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  MessageSquare,
  Home,
  LayoutGrid,
  User,
  FileText,
  Mail,
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm dark:bg-background-dark/80 border-b border-gray-200 dark:border-gray-700 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
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
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button className="bg-primary hover:bg-primary/90">
                <MessageSquare className="mr-2 h-4 w-4" />
                let&apos;s talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/80 backdrop-blur-sm dark:bg-background-dark/80 border-t border-gray-200 dark:border-gray-700">
          <div className="max-w-md mx-auto px-4 h-16">
            <div className="grid grid-cols-7 h-full">
              <Link
                href="#home"
                className="flex items-center justify-center text-primary"
              >
                <Home className="h-6 w-6" />
              </Link>
              <Link
                href="#portfolio"
                className="flex items-center justify-center text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark"
              >
                <LayoutGrid className="h-6 w-6" />
              </Link>
              <Link
                href="#about"
                className="flex items-center justify-center text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark"
              >
                <User className="h-6 w-6" />
              </Link>
              <Link
                href="#blog"
                className="flex items-center justify-center text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark"
              >
                <FileText className="h-6 w-6" />
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark"
              >
                <Mail className="h-6 w-6" />
              </Link>
              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-center">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
                >
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
