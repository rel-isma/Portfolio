"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  MessageSquare,
  Home,
  LayoutGrid,
  Server,
  Info,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react"; // Add useEffect

export function Navbar() {
  const [selectedItem, setSelectedItem] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "portfolio", icon: LayoutGrid, label: "Portfolio" },
    { id: "service", icon: Server, label: "service" },
    { id: "about", icon: Info, label: "about" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  // Add Intersection Observer to detect visible section
  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Select all sections
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px",
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelectedItem(entry.target.id); // Update selected item based on section ID
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section); // Observe each section
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section); // Cleanup observer on unmount
      });
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar (Only visible on screens > lg) */}
      <nav className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-sm hidden lg:flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/#${item.id}`}
                    className={`px-3 py-2 rounded-full text-ms lg:text-lg font-medium transition-all duration-200 ${
                      selectedItem === item.id
                        ? "text-primary bg-primary/10 border border-primary/20"
                        : "text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                    onClick={() => setSelectedItem(item.id)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                href="/#contact"
                className="bg-primary text-white hover:bg-primary/90"
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tablet Navbar (Visible only on md screens) */}
      <nav className="sticky top-4 z-50 w-full hidden md:flex lg:hidden">
        <div className="w-full px-4">
          <div className="mx-auto flex justify-center">
            <div className="relative px-6 py-3 rounded-full bg-transparent backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="flex items-center space-x-10">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/#${item.id}`}
                    className={`w-6 h-6 flex items-center justify-center transition-all duration-200 ${
                      selectedItem === item.id
                        ? "text-primary transform scale-125"
                        : "text-neutral-500 dark:text-neutral-300 hover:scale-110"
                    }`}
                    onClick={() => setSelectedItem(item.id)}
                  >
                    <item.icon className="w-full h-full" />
                  </Link>
                ))}
                <div className="w-6 h-6 flex items-center justify-center">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Only visible on screens < md) */}
      <div className="fixed bottom-8 left-0 right-0 z-50 flex justify-center md:hidden">
        <div className="relative px-6 py-3 rounded-full bg-transparent dark:bg-background-dark/90 backdrop-blur-lg border border-gray-200 dark:border-gray-800 shadow-lg">
          <div className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                className={`w-6 h-6 flex items-center justify-center transition-all duration-200 ${
                  selectedItem === item.id
                    ? "text-primary transform scale-125"
                    : "text-neutral-500 dark:text-neutral-300 hover:scale-110"
                }`}
                onClick={() => setSelectedItem(item.id)}
              >
                <item.icon className="w-full h-full" />
              </Link>
            ))}
            <div className="w-6 h-6 flex items-center justify-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}