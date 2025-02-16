"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useEffect, useState } from "react";
import { getGithubProjects } from "@/lib/github";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    async function fetchProjects() {
      const githubProjects = await getGithubProjects("rel-isma");
      setProjects(githubProjects);
    }
    fetchProjects();
  }, []);

  return (
    <div className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <motion.section
        ref={ref}
        initial="initial"
        animate={inView ? "animate" : "initial"}
        variants={staggerContainer}
        className="py-16 lg:py-24"
      >
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/a7.jpg"
                    alt={project.name}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 p-6 text-white">
                      <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                        {project.language || "Unknown"}
                      </span>
                      <h3 className="text-2xl font-bold mt-2">
                        {project.name}
                      </h3>
                      <p className="text-white/80 mt-2">
                        {project.description || "No description available."}
                      </p>
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
