"use client";

import { useParams } from "next/navigation";
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
  FileCode,
  FileJson,
  FileIcon as FileHtml,
  FileType,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { format } from "date-fns";
import { Breadcrumb } from "@/components/breadcrumb";

export default function ProjectPage() {
  const params = useParams();
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

  const breadcrumbItems = [
    { label: "Projects", href: "/projects" },
    { label: project.title, href: `/projects/${params.slug}` },
  ];

  const totalLines = Object.values(project.languages).reduce(
    (a, b) => a + b,
    0
  );

  const languageIcons: { [key: string]: unknown } = {
    TypeScript: FileType,
    JavaScript: FileCode,
    CSS: FileJson,
    HTML: FileHtml,
  };

  const languageColors: { [key: string]: string } = {
    TypeScript:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    JavaScript:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400",
    CSS: "bg-pink-100 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400",
    HTML: "bg-orange-100 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400",
  };

  return (
    <div className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <motion.div
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 py-4 sm:py-8 lg:py-12"
      >
        <Breadcrumb items={breadcrumbItems} />

        {/* Title and Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-4"
        >
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {project.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8">
              <Github className="mr-2 h-5 w-5" />
              Source Code
            </Button>
            <Button
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-8 "
              variant="outline"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Live Demo
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
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <p className="text-white text-2xl font-bold">View Project</p>
            </div>
          </div>
        </motion.div>

        {/* Project Info Cards */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
        >
          <div className="bg-white dark:bg-secondary rounded-xl p-4 sm:p-6 space-y-1 sm:space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
              Created
            </h3>
            <p className="text-sm sm:text-lg font-semibold">
              {format(new Date(project.created_at), "MMM d, yyyy")}
            </p>
          </div>
          <div className="bg-white dark:bg-secondary rounded-xl p-4 sm:p-6 space-y-1 sm:space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
              Last Updated
            </h3>
            <p className="text-sm sm:text-lg font-semibold">
              {format(new Date(project.pushed_at), "MMM d, yyyy")}
            </p>
          </div>
          <div className="bg-white dark:bg-secondary rounded-xl p-4 sm:p-6 space-y-1 sm:space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Link2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
              Client
            </h3>
            <p className="text-sm sm:text-lg font-semibold">{project.client}</p>
          </div>
          <div className="bg-white dark:bg-secondary rounded-xl p-4 sm:p-6 space-y-1 sm:space-y-2 shadow-lg transition-transform duration-300 hover:scale-105">
            <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
              Role
            </h3>
            <p className="text-sm sm:text-lg font-semibold">{project.role}</p>
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
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12"
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
        <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-secondary rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-8">
              Languages Used
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {Object.entries(project.languages).map(([language, lines]) => {
                const Icon = languageIcons[language] || FileCode;
                const colorClass =
                  languageColors[language] ||
                  "bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400";
                const percentage = ((lines / totalLines) * 100).toFixed(1);

                return (
                  <motion.div
                    key={language}
                    className="flex items-center gap-3 sm:gap-6 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-muted/50"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div
                      className={`w-8 h-8 sm:w-12 sm:h-12 rounded-xl ${colorClass} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1 sm:mb-2">
                        <div>
                          <h3 className="font-medium text-sm sm:text-lg">
                            {language}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">
                            {lines.toLocaleString()} lines
                          </p>
                        </div>
                        <span className="text-xs sm:text-sm font-medium">
                          {percentage}%
                        </span>
                      </div>
                      <div className="h-1.5 sm:h-2 rounded-full bg-muted overflow-hidden">
                        <motion.div
                          className={`h-full ${
                            colorClass.includes("bg-")
                              ? colorClass.split(" ")[0].replace("bg-", "bg-")
                              : "bg-primary"
                          }`}
                          initial={{ width: 0 }}
                          animate={{ width: `${percentage}%` }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeInUp} className="mb-12">
          <div className="bg-white dark:bg-secondary rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Development Timeline</h2>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
              <div className="space-y-8">
                {project.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 w-8 h-8 rounded-full border-4 border-background dark:border-background-dark bg-primary" />
                    <div className="space-y-2">
                      <div className="text-sm text-muted-foreground">
                        {item.date}
                      </div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
          <div className="bg-white dark:bg-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
              Key Features
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-lg bg-muted hover:bg-primary/10 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary shrink-0" />
                  <span className="text-sm sm:text-base font-medium">
                    {feature}
                  </span>
                </motion.div>
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
          <div className="bg-white dark:bg-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Interested in working together?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              I&apos;m always open to discussing new projects and opportunities.
              Let&apos;s create something amazing together!
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
            >
              Let&apos;s Talk
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
