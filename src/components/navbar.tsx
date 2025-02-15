"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  MessageSquare,
  Home,
  LayoutGrid,
  Server,
  IdCard,
  Mail,
} from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [selectedItem, setSelectedItem] = useState("home");

  const navItems = [
    { id: "home", icon: Home, label: "Home" },
    { id: "portfolio", icon: LayoutGrid, label: "Portfolio" },
    { id: "service", icon: Server, label: "service" },
    { id: "about", icon: IdCard, label: "about" },
    { id: "contact", icon: Mail, label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navbar (Only visible on screens > lg) */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm dark:bg-background-dark/80 border-b border-gray-200 dark:border-gray-700 hidden lg:flex">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    href={`#${item.id}`}
                    className={`px-3 py-2 rounded-md text-ms lg:text-lg font-medium ${
                      selectedItem === item.id
                        ? "text-primary"
                        : "text-foreground/80 hover:text-foreground dark:text-foreground-dark/80 dark:hover:text-foreground-dark"
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
              <Button className="bg-primary hover:bg-primary/90">
                <MessageSquare className="mr-2 h-4 w-4" />
                Let&apos;s talk
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tablet Navbar (Visible only on md screens) */}
      <nav className="sticky top-0 z-50 w-full hidden md:flex lg:hidden">
        <div className="bg-background/80 backdrop-blur-md dark:bg-background-dark/80 border-t border-gray-200 dark:border-gray-700 w-full">
          <div className="mx-auto px-4 h-16 w-full flex items-center justify-between">
            <div className="flex flex-1 items-center justify-start space-x-10">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center justify-center ${
                    selectedItem === item.id
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  <item.icon
                    className={`h-6 w-6 ${
                      selectedItem === item.id
                        ? "bg-primary/20 rounded-lg p-1"
                        : ""
                    }`}
                  />
                </Link>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button
                size="icon"
                className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
              >
                <MessageSquare className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar (Only visible on screens < md) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-background/70 backdrop-blur-sm dark:bg-background-dark/70 border-t border-gray-200 dark:border-gray-700 w-full">
          <div className="max-w-md mx-auto px-4 h-16 w-full">
            <div className="grid grid-cols-7 h-full w-full">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center justify-center ${
                    selectedItem === item.id
                      ? "text-primary"
                      : "text-foreground/60 hover:text-foreground dark:text-foreground-dark/60 dark:hover:text-foreground-dark"
                  }`}
                  onClick={() => setSelectedItem(item.id)}
                >
                  <item.icon
                    className={`h-6 w-6 ${
                      selectedItem === item.id
                        ? "bg-primary/20 rounded-lg p-1"
                        : ""
                    }`}
                  />
                </Link>
              ))}
              <div className="flex items-center justify-center">
                <ThemeToggle />
              </div>
              <div className="flex items-center justify-center">
                <Button
                  size="icon"
                  className="h-10 w-10 rounded-full bg-primary hover:bg-primary/90"
                >
                  <MessageSquare className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
