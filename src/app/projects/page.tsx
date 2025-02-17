"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Breadcrumb } from "@/components/breadcrumb";

const projects = [
  {
    id: 1,
    title: "Project One",
    description: "A modern web application built with Next.js and TypeScript",
    image: "/a7.jpg",
    category: "Web Development",
    slug: "project-one",
  },
  {
    id: 2,
    title: "Project Two",
    description: "Full-stack application with real-time features",
    image: "/a7.jpg",
    category: "Full Stack",
    slug: "project-two",
  },
  {
    id: 3,
    title: "Project Three",
    description: "Mobile-first responsive design implementation",
    image: "/a7.jpg",
    category: "UI/UX Design",
    slug: "project-three",
  },
  {
    id: 4,
    title: "Project Four",
    description: "E-commerce platform with advanced features",
    image: "/a7.jpg",
    category: "E-commerce",
    slug: "project-four",
  },
  {
    id: 5,
    title: "Project Five",
    description: "Content management system with modern architecture",
    image: "/a7.jpg",
    category: "CMS",
    slug: "project-five",
  },
  {
    id: 6,
    title: "Project Six",
    description: "Social media platform with real-time messaging",
    image: "/a7.jpg",
    category: "Social Media",
    slug: "project-six",
  },
];

export default function ProjectsPage() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const breadcrumbItems = [{ label: "Projects", href: "/projects" }];
  return (
    <div className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-16 lg:py-24"
      >
        <Breadcrumb items={breadcrumbItems} />
        <motion.div variants={fadeInUp} className="space-y-4 mb-12">
          <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
            <Star className="mr-1.5 h-4 w-4" />
            Projects
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            Explore My <span className="text-primary">Latest Works</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            A collection of projects that showcase my skills in web development,
            design, and problem-solving. Each project represents a unique
            challenge and solution.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
            >
              <Link href={`/projects/${project.slug}`}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 p-6 text-white">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                        {project.category}
                      </span>
                      <h3 className="text-2xl font-bold mt-2">
                        {project.title}
                      </h3>
                      <div className="mt-4 inline-flex items-center text-sm font-semibold border-b border-white/30 hover:border-white transition-colors">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
