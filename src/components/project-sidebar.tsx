"use client";

import Link from "next/link";
import { LayoutGrid, FileCode2, Rocket, Brain } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

interface ProjectSidebarProps {
  project: any; // Replace with proper type
}

export function ProjectSidebar({ project }: ProjectSidebarProps) {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutGrid,
    },
    {
      id: "challenges",
      label: "Challenges",
      icon: Brain,
    },
    {
      id: "tech-stack",
      label: "Tech Stack",
      icon: FileCode2,
    },
    {
      id: "process",
      label: "Development Process",
      icon: Rocket,
    },
  ];

  return (
    <aside className="w-full lg:w-[300px] lg:shrink-0">
      <div className="lg:sticky lg:top-8 space-y-6 bg-white dark:bg-secondary rounded-3xl p-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Show:</h2>
          <nav className="flex flex-col space-y-1">
            {sections.map((section) => (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors relative",
                  activeSection === section.id
                    ? "text-primary bg-primary/10"
                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setActiveSection(section.id)}
              >
                <section.icon className="h-5 w-5" />
                {section.label}
                {activeSection === section.id && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-6 bg-primary rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Let&apos;s Build Something
            </h3>
            <h4 className="text-2xl font-bold">
              Great<span className="text-primary">.</span>
            </h4>
            <Button className="w-full">let&apos;s talk</Button>
          </div>
        </div>
      </div>
    </aside>
  );
}
