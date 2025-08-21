"use client";

import type React from "react";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import {
  Calendar,
  Clock,
  Code2,
  ExternalLink,
  Github,
  Link2,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { staggerContainer, scrollAnimation } from "@/lib/animations";
import { format } from "date-fns";
import { projects } from "@/lib/projectData";

const AnimatedSection = ({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className: string;
  id: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  );
};

const AnimatedElement = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      variants={scrollAnimation}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-full pb-10 bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <AnimatedSection
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        id=""
      >
        {/* Back Button */}
        <div className="mb-6 sm:mb-8">
          <Button
            asChild
            variant="outline"
            className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/30 text-primary hover:bg-primary/20 hover:border-primary/50 shadow-sm hover:shadow-md transition-all duration-300 px-4 py-2"
          >
            <Link href="/projects" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Title and Buttons */}
        <AnimatedElement className="flex flex-col lg:flex-row justify-between items-start mb-6 sm:mb-8 gap-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            {project.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            {project.sCode && (
              <Button
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8"
              >
                <Github className="mr-2 h-5 w-5" />
                Source Code
              </Button>
            )}

            {project.demo && (
              <Button
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto border-primary text-primary hover:bg-primary/10 px-8 "
                variant="outline"
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                Live Demo
              </Button>
            )}
          </div>
        </AnimatedElement>

        {/* Project Image */}
        <AnimatedElement className="mb-12">
          <div className="aspect-[21/9] relative rounded-3xl overflow-hidden group">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>
        </AnimatedElement>

        {/* Project Info Cards */}
        <AnimatedElement className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <motion.div 
            className="bg-gradient-to-br from-white to-slate-50 dark:from-secondary dark:to-slate-800/50 rounded-xl p-4 sm:p-6 space-y-2 sm:space-y-3 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-primary/10 to-primary/20">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Created
                </h3>
                <p className="text-sm sm:text-base font-semibold">
                  {format(new Date(project.created_at), "MMM d, yyyy")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-slate-50 dark:from-secondary dark:to-slate-800/50 rounded-xl p-4 sm:p-6 space-y-2 sm:space-y-3 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Last Updated
                </h3>
                <p className="text-sm sm:text-base font-semibold">
                  {format(new Date(project.pushed_at), "MMM d, yyyy")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-slate-50 dark:from-secondary dark:to-slate-800/50 rounded-xl p-4 sm:p-6 space-y-2 sm:space-y-3 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50">
                <Link2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Client
                </h3>
                <p className="text-sm sm:text-base font-semibold">{project.client}</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-gradient-to-br from-white to-slate-50 dark:from-secondary dark:to-slate-800/50 rounded-xl p-4 sm:p-6 space-y-2 sm:space-y-3 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-primary/40 dark:hover:border-primary/40 transition-all duration-300"
            whileHover={{ scale: 1.02, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50">
                <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-medium text-muted-foreground">
                  Role
                </h3>
                <p className="text-sm sm:text-base font-semibold">{project.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatedElement>

        {/* Overview */}
        <AnimatedElement className="mb-12">
          <div className="bg-gradient-to-br from-white via-slate-50 to-white dark:from-secondary dark:via-slate-800/30 dark:to-secondary rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/50 dark:to-indigo-800/50">
                <Code2 className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h2 className="text-2xl font-bold">Project Overview</h2>
            </div>
            <div className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>
        </AnimatedElement>

        {/* Technologies & Languages */}
        <AnimatedElement className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-white via-blue-50/50 to-white dark:from-secondary dark:via-blue-900/10 dark:to-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
              Technologies Used
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
              {Object.keys(project.languages).map((language) => (
                <motion.div
                  key={language}
                  className="flex flex-col items-center gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-800/50 dark:to-slate-700/30 hover:from-primary/5 hover:to-primary/10 dark:hover:from-primary/10 dark:hover:to-primary/5 transition-all duration-300 shadow-md hover:shadow-lg border border-slate-200 dark:border-slate-600 hover:border-primary/30 dark:hover:border-primary/40"
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br from-white to-gray-50 dark:from-slate-700 dark:to-slate-600 shadow-sm border border-gray-200 dark:border-slate-500">
                    <Image
                      src={`/${language.toLowerCase()}.svg`}
                      alt={`${language} logo`}
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm sm:text-base text-foreground">
                      {language}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Timeline */}
        <AnimatedElement className="mb-12">
          <div className="bg-gradient-to-br from-white via-amber-50/30 to-white dark:from-secondary dark:via-amber-900/10 dark:to-secondary rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <div className="p-2 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/50 dark:to-amber-800/50">
                <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Development Timeline</h2>
            </div>
            <div className="relative">
              <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40" />
              <div className="space-y-6 sm:space-y-8">
                {project.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.15 }}
                    className="relative pl-8 sm:pl-12"
                  >
                    <div className="absolute left-0 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-3 sm:border-4 border-white dark:border-background bg-gradient-to-br from-primary to-primary/80 shadow-lg" />
                    <div className="bg-gradient-to-r from-slate-100/80 to-slate-50/50 dark:from-slate-800/50 dark:to-slate-700/30 rounded-xl p-4 sm:p-5 space-y-2 sm:space-y-3 border border-slate-200/50 dark:border-slate-600/50">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <h4 className="text-base sm:text-lg font-semibold">{item.title}</h4>
                        <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium border border-primary/20">
                          {item.date}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedElement>

        {/* Key Features */}
        <AnimatedElement className="mb-8 sm:mb-12">
          <div className="bg-gradient-to-br from-white via-emerald-50/30 to-white dark:from-secondary dark:via-emerald-900/10 dark:to-secondary rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50">
                <Code2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold">Key Features</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-gradient-to-r from-slate-100/80 to-slate-50/50 dark:from-slate-800/50 dark:to-slate-700/30 hover:from-emerald-100/80 hover:to-emerald-50/50 dark:hover:from-emerald-900/30 dark:hover:to-emerald-800/20 border border-slate-200 dark:border-slate-600 hover:border-emerald-300 dark:hover:border-emerald-700 transition-all duration-300 shadow-sm hover:shadow-md"
                  whileHover={{ scale: 1.02, x: 4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/50 dark:to-emerald-800/50 shrink-0">
                    <Code2 className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm sm:text-base font-medium flex-1">
                    {feature}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedElement>

        {/* Call to Action */}
        <AnimatedElement className="text-center">
          <motion.div 
            className="bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg border border-primary/20"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="p-3 rounded-full bg-primary/10">
                <Github className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">
              Interested in working together?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8">
              I&apos;m always open to discussing new projects and opportunities.
              Let&apos;s create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary/90 transition-colors duration-300"
              >
                <Link href="/contact">
                  Let&apos;s Talk
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10"
              >
                <Link href="/projects">
                  View More Projects
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatedElement>
      </AnimatedSection>
    </div>
  );
}
