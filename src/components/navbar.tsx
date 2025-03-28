"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { usePathname } from "next/navigation";
import {
  MessageSquare,
  Home,
  LayoutGrid,
  Server,
  Mail,
} from "lucide-react";
import { BsInfoSquare } from "react-icons/bs";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [selectedItem, setSelectedItem] = useState("home");
  const pathname = usePathname(); 

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "portfolio", icon: LayoutGrid, label: "Portfolio" },
    { id: "service", icon: Server, label: "Service" },
    { id: "about", icon: BsInfoSquare, label: "About" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  useEffect(() => {
    if (pathname === "/projects") {
      setSelectedItem("portfolio");
    } else if (pathname === "/") {
      setSelectedItem("home");
    }
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Visible section:", entry.target.id);
          setSelectedItem(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [pathname]);

  return (
    <>
      {/* Desktop Navbar (Only visible on screens > lg) */}
      <nav className="sticky  top-0 z-50 w-full bg-transparent backdrop-blur-sm hidden lg:flex">
        <div className="max-w-7xl mx-auto px-2 w-full">
          <div className="flex items-center justify-between h-16 w-full">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4 relative">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`/#${item.id}`}
                    className={`relative px-3 py-2 text-ms lg:text-lg font-medium transition-all duration-200 group`}
                    onClick={() => setSelectedItem(item.id)}
                  >
                    {item.label}
                    {selectedItem === item.id && (
                      <motion.div
                        layoutId="underline"
                        className="absolute left-0 bottom-0 h-1 bg-primary rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                      />
                    )}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                href="/#contact"
                className="bg-primary text-white hover:bg-primary/90"
                onClick={() => setSelectedItem("contact")}
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
