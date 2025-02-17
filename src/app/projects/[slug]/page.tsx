"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Clock,
  Code2,
  ExternalLink,
  Github,
  GitFork,
  GitCommit,
  Link2,
  Star,
  Users2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProjectTimeline } from "@/components/project-timeline";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { format } from "date-fns";

export default function ProjectPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // This would be fetched from your API/database using the GitHub integration
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
    created_at: "2024-01-01",
    pushed_at: "2024-03-15",
    languages: {
      TypeScript: 15000,
      JavaScript: 10000,
      CSS: 5000,
      HTML: 3000,
    },
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
    },
  };

  const totalLines = Object.values(project.languages).reduce(
    (a, b) => a + b,
    0
  );

  return (
    <div className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        {/* Title and Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
            {project.title}
          </h1>
          <div className="flex gap-4">
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
              asChild
            >
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                <span>Live Demo</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              asChild
            >
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Github className="mr-2 h-5 w-5" />
                <span>Source Code</span>
              </a>
            </Button>
          </div>
        </motion.div>

        {/* Project Image */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="aspect-[21/9] relative rounded-3xl overflow-hidden group">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center"></div>
          </div>
        </motion.div>

        {/* Project Info Cards */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Calendar className="h-6 w-6 text-primary" />
            <h3 className="text-sm font-medium text-muted-foreground">
              Created
            </h3>
            <p className="text-lg font-semibold">
              {format(new Date(project.created_at), "MMM d, yyyy")}
            </p>
          </div>
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Clock className="h-6 w-6 text-primary" />
            <h3 className="text-sm font-medium text-muted-foreground">
              Last Updated
            </h3>
            <p className="text-lg font-semibold">
              {format(new Date(project.pushed_at), "MMM d, yyyy")}
            </p>
          </div>
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Link2 className="h-6 w-6 text-primary" />
            <h3 className="text-sm font-medium text-muted-foreground">
              Client
            </h3>
            <p className="text-lg font-semibold">{project.client}</p>
          </div>
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Code2 className="h-6 w-6 text-primary" />
            <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
            <p className="text-lg font-semibold">{project.role}</p>
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 flex items-center gap-4 shadow-lg transition-transform duration-300 hover:scale-105">
            <GitCommit className="h-10 w-10 text-primary" />
            <div>
              <div className="text-2xl font-bold">{project.stats.commits}</div>
              <div className="text-sm text-muted-foreground">Commits</div>
            </div>
          </div>
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 flex items-center gap-4 shadow-lg transition-transform duration-300 hover:scale-105">
            <Star className="h-10 w-10 text-primary" />
            <div>
              <div className="text-2xl font-bold">{project.stats.stars}</div>
              <div className="text-sm text-muted-foreground">Stars</div>
            </div>
          </div>
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 flex items-center gap-4 shadow-lg transition-transform duration-300 hover:scale-105">
            <GitFork className="h-10 w-10 text-primary" />
            <div>
              <div className="text-2xl font-bold">{project.stats.forks}</div>
              <div className="text-sm text-muted-foreground">Forks</div>
            </div>
          </div>
          <div className="bg-white dark:bg-secondary rounded-2xl p-6 flex items-center gap-4 shadow-lg transition-transform duration-300 hover:scale-105">
            <Users2 className="h-10 w-10 text-primary" />
            <div>
              <div className="text-2xl font-bold">
                {project.stats.contributors}
              </div>
              <div className="text-sm text-muted-foreground">Contributors</div>
            </div>
          </div>
        </motion.div>

        {/* Languages Used */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Languages Used</h2>
            <div className="space-y-4">
              {Object.entries(project.languages).map(([language, lines]) => (
                <div key={language} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium">{language}</span>
                    <span className="text-sm text-muted-foreground">
                      {((lines / totalLines) * 100).toFixed(1)}% (
                      {lines.toLocaleString()} lines)
                    </span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${(lines / totalLines) * 100}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Development Timeline</h2>
            <ProjectTimeline timeline={project.timeline} />
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-xl bg-muted transition-colors duration-300 hover:bg-muted/80"
                >
                  <Code2 className="h-6 w-6 text-primary shrink-0" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* WakaTime Stats */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Development Stats</h2>
            <div className="aspect-[21/9] bg-muted rounded-xl flex items-center justify-center">
              <p className="text-muted-foreground">
                WakaTime stats will be displayed here
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeInUp} className="text-center">
          <div className="bg-white dark:bg-secondary rounded-2xl p-8 sm:p-12 shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Interested in working together?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              I'm always open to discussing new projects and opportunities.
              Let's create something amazing together!
            </p>
            <Button
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            >
              Let's Talk
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
