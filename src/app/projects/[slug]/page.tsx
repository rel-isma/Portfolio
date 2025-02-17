"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Clock, Code2, ExternalLink, Github, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectTimeline } from "@/components/project-timeline";
import { ProjectTechStack } from "@/components/project-tech-stack";
import { ProjectStats } from "@/components/project-stats";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ProjectPage() {
  const params = useParams();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // This would be fetched from your API/database
  const project = {
    title: "Project One",
    description:
      "A modern web application that showcases the latest technologies and best practices in web development. Built with Next.js, TypeScript, and TailwindCSS.",
    image: "/a7.jpg",
    sourceCode: "https://github.com/yourusername/project-one",
    liveDemo: "https://project-one.vercel.app",
    client: "Acme Inc",
    duration: "3 months",
    role: "Full Stack Developer",
    techStack: [
      { name: "Next.js", icon: "/nextjs.svg" },
      { name: "TypeScript", icon: "/typescript.svg" },
      { name: "TailwindCSS", icon: "/tailwind.svg" },
      { name: "PostgreSQL", icon: "/postgresql.svg" },
    ],
    features: [
      "Real-time data synchronization",
      "Responsive design",
      "Dark mode support",
      "Authentication & Authorization",
      "API integration",
      "Performance optimization",
    ],
    timeline: [
      {
        date: "January 2024",
        title: "Project Kickoff",
        description: "Initial planning and requirements gathering",
      },
      {
        date: "February 2024",
        title: "Development Phase",
        description: "Core features implementation and testing",
      },
      {
        date: "March 2024",
        title: "Launch",
        description: "Final testing, optimization, and deployment",
      },
    ],
    stats: {
      commits: 234,
      contributors: 3,
      stars: 45,
      forks: 12,
      issues: 5,
    },
  };

  return (
    <div className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="flex flex-col lg:flex-row gap-8"
      >
        <div className="flex-1">
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="flex items-start justify-between">
              <div className="space-y-4">
                <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
                  <Star className="mr-1.5 h-4 w-4" />
                  Featured Project
                </div>
                <h1 className="text-4xl lg:text-5xl font-bold">
                  {project.title}
                </h1>
              </div>
              <div className="flex gap-4">
                <Button variant="outline" asChild>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Source Code
                  </a>
                </Button>
                <Button asChild>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </div>

            <div className="aspect-[16/9] relative rounded-3xl overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="text-sm text-muted-foreground font-medium">
                  Client
                </h3>
                <p className="font-semibold">{project.client}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-muted-foreground font-medium">
                  Project Duration
                </h3>
                <p className="font-semibold">{project.duration}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-sm text-muted-foreground font-medium">
                  Role
                </h3>
                <p className="font-semibold">{project.role}</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Project Overview</h2>
              <p className="text-lg leading-relaxed">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Code2 className="h-5 w-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <ProjectStats stats={project.stats} />
              </div>

              <ProjectTechStack technologies={project.techStack} />

              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Development Timeline</h3>
                <ProjectTimeline timeline={project.timeline} />
              </div>

              <div className="bg-white dark:bg-secondary rounded-3xl p-8 space-y-4">
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="h-5 w-5" />
                  <h3 className="text-xl font-semibold">Development Stats</h3>
                </div>
                <div className="h-[300px] bg-muted rounded-xl">
                  {/* WakaTime integration would go here */}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
