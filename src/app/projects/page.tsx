"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { 
  ArrowUpRight, 
  Star, 
  ExternalLink,
  Github,
  Calendar,
  Code2,
  Layers
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useMemo } from "react";
import { projects } from "@/lib/projectData";

const AnimatedElement = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.6, delay, ease: [0.6, -0.05, 0.01, 0.99] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  // Filter projects
  const filteredProjects = useMemo(() => {
    const filtered = projects.filter(project => {
      return selectedCategory === "All" || project.category === selectedCategory;
    });

    // Sort by most recent by default
    filtered.sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());

    return filtered;
  }, [selectedCategory]);

  const stats = {
    total: projects.length,
    categories: categories.length - 1, // excluding "All"
    technologies: Array.from(new Set(projects.flatMap(p => p.technologies))).length,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="max-w-6xl mx-auto relative">
          <AnimatedElement className="text-center">
            {/* Profile Image with Beautiful Shape */}
            <motion.div 
              className="relative mx-auto mb-8 w-32 h-32 md:w-40 md:h-40"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Animated Background Gradient */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary via-primary/80 to-secondary p-1"
                animate={{ 
                  rotate: [0, 360],
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
              >
                <div className="w-full h-full rounded-3xl bg-background p-1">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src="/relisma_pic.jpg"
                      alt="Rachid El Ismaiyly - Full Stack Developer"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 768px) 128px, 160px"
                    />
                    {/* Overlay gradient for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-primary/5" />
                  </div>
                </div>
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-2 -right-2 w-6 h-6 bg-primary rounded-full"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-1 -left-1 w-4 h-4 bg-secondary rounded-full"
                animate={{
                  y: [5, -5, 5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
            </motion.div>

            <motion.div 
              className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/10 to-primary/5 px-6 py-3 text-sm font-medium text-primary mb-8 border border-primary/20"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="mr-2 h-4 w-4" />
              Featured Work & Projects
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Experiences
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
              A curated collection of my work spanning web development, software engineering, 
              and innovative digital solutions. Each project represents a unique challenge solved with creativity and precision.
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Simple Filter Section */}
      <section className="py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedElement>
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-primary text-white shadow-lg scale-105"
                      : "bg-muted/70 hover:bg-muted text-muted-foreground hover:text-foreground border border-border hover:border-primary/30"
                  }`}
                  whileHover={{ scale: selectedCategory === category ? 1.05 : 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                  {category !== "All" && (
                    <span className="ml-2 text-xs opacity-70">
                      ({projects.filter(p => p.category === category).length})
                    </span>
                  )}
                </motion.button>
              ))}
            </div>

            {/* Results Summary */}
            <div className="text-center">
              <p className="text-muted-foreground">
                {selectedCategory !== "All" ? (
                  <>
                    Showing{" "}
                    <span className="font-semibold text-primary">{filteredProjects.length}</span>
                    {" "}projects in{" "}
                    <span className="font-semibold text-primary">{selectedCategory}</span>
                  </>
                ) : (
                  <>
                    Explore all{" "}
                    <span className="font-semibold text-primary">{stats.total}</span>{" "}
                    projects across{" "}
                    <span className="font-semibold text-primary">{stats.categories}</span>{" "}
                    categories
                  </>
                )}
              </p>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length === 0 ? (
            <AnimatedElement className="text-center py-16">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-6xl mb-6"
              >
                📁
              </motion.div>
              <h3 className="text-2xl font-bold mb-3">
                No projects in this category
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                Switch to another category to see more projects.
              </p>
              <Button 
                onClick={() => setSelectedCategory("All")}
                variant="outline"
              >
                Show All Projects
              </Button>
            </AnimatedElement>
          ) : (
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              {filteredProjects.map((project, index) => (
                <AnimatedElement key={project.id} delay={index * 0.1}>
                  <motion.div
                    className="group relative bg-background rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl border border-border transition-all duration-500"
                    whileHover={{ y: -12 }}
                    layout
                  >
                    {/* Project Image */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={`${project.title} project screenshot`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      
                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <div className="absolute inset-0 p-6 flex flex-col justify-between">
                          {/* Category Badge */}
                          <div className="flex justify-between items-start">
                            <motion.span 
                              className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-3 py-1 text-xs font-semibold text-white border border-white/30"
                              initial={{ opacity: 0, y: -20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {project.category}
                            </motion.span>
                            {project.features && project.features.length > 0 && (
                              <motion.div
                                className="bg-primary/90 backdrop-blur-md px-2 py-1 rounded-full"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                <Star className="h-3 w-3 text-white fill-current" />
                              </motion.div>
                            )}
                          </div>

                          {/* Action Buttons */}
                          <motion.div 
                            className="flex justify-between items-end"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            <div className="flex space-x-3">
                              {project.liveDemo && (
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                  <Link
                                    href={project.liveDemo}
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                  </Link>
                                </motion.div>
                              )}
                              {project.sourceCode && (
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                  <Link
                                    href={project.sourceCode}
                                    target="_blank"
                                    className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <Github className="h-4 w-4" />
                                  </Link>
                                </motion.div>
                              )}
                            </div>
                            <motion.div 
                              className="p-3 rounded-full bg-primary/90 backdrop-blur-md text-white"
                              whileHover={{ scale: 1.1 }}
                            >
                              <ArrowUpRight className="h-4 w-4" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Project Info */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors leading-tight">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Enhanced Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <motion.span
                            key={tech}
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-muted/80 to-muted/60 px-3 py-1 text-xs font-medium transition-colors hover:bg-primary/10 border border-border"
                            whileHover={{ scale: 1.05 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary border border-primary/20">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Enhanced Project Meta */}
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                        <div className="flex items-center bg-muted/50 rounded-full px-3 py-1">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(project.created_at).getFullYear()}
                        </div>
                        <div className="flex items-center bg-muted/50 rounded-full px-3 py-1">
                          <Code2 className="h-3 w-3 mr-1" />
                          {project.role}
                        </div>
                      </div>

                      {/* Enhanced View Project Button */}
                      <Link href={`/projects/${project.slug}`} className="block">
                        <Button 
                          variant="outline" 
                          size="lg" 
                          className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                        >
                          Explore Project
                          <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </motion.div>
                </AnimatedElement>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Interested in Working <span className="text-primary">Together</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              I&apos;m always excited to take on new challenges and create amazing digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  Hire Me
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View Services
                  <Layers className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
