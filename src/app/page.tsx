"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, UserCheck, Download, LayoutGrid, Star, Code, Users, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { projects } from "@/lib/projectData";

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Animated section component
const AnimatedSection = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
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

export default function HomePage() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Developer";

  // Typing animation
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <AnimatedSection className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <AnimatedElement>
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mt-16 md:mt-0"
                  >
                    <Star className="mr-2 h-4 w-4" />
                    Welcome to my portfolio
                  </motion.div>
                  
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    <span className="text-muted-foreground">Hi, I&apos;m</span>
                    <br />
                    <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                      Rachid
                    </span>{" "}
                    El-Ismaiyly
                  </h1>
                  
                  <div className="text-2xl lg:text-4xl font-bold flex items-center">
                    <span className="text-primary mr-2">&gt;</span>
                    <span className="min-h-[1.2em]">
                      {typedText}
                      <motion.span
                        animate={{ opacity: [0, 1, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="text-primary"
                      >
                        |
                      </motion.span>
                    </span>
                  </div>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={0.2}>
                <p className="text-xl leading-relaxed text-muted-foreground max-w-2xl">
                  I craft exceptional digital experiences through{" "}
                  <span className="text-primary font-semibold">modern web technologies</span>.
                  Specializing in React, Django, and full-stack development to bring your ideas to life.
                </p>
              </AnimatedElement>

              <AnimatedElement delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="text-lg px-8 py-6">
                    <Link href="/projects">
                      <LayoutGrid className="mr-2 h-5 w-5" />
                      View My Work
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                    <Link href="/contact">
                      <UserCheck className="mr-2 h-5 w-5" />
                      Hire Me
                    </Link>
                  </Button>
                </div>
              </AnimatedElement>

              {/* Stats */}
              <AnimatedElement delay={0.6}>
                <div className="grid grid-cols-3 gap-8 pt-8 border-t">
                  {[
                    { number: "15+", label: "Projects Completed", icon: Code },
                    { number: "1+", label: "Years Experience", icon: Award },
                    { number: "100%", label: "Client Satisfaction", icon: Users },
                  ].map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="text-center">
                        <div className="flex justify-center mb-2">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="text-2xl font-bold text-primary">{stat.number}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </AnimatedElement>
            </div>

            {/* Right Column - Profile Image */}
            <AnimatedElement delay={0.3} className="relative">
              <div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
                
                {/* Profile Card */}
                <motion.div
                  className="relative w-full max-w-md h-full bg-background rounded-3xl overflow-hidden shadow-2xl border"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Profile Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/relisma_pic.jpg"
                      alt="Rachid El-Ismaiyly - Full Stack Developer"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority
                    />
                    
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                    
                    {/* Name Badge */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="bg-background/90 backdrop-blur-sm rounded-2xl p-4 border shadow-lg">
                        <h3 className="text-xl font-bold text-center">Rachid El-Ismaiyly</h3>
                        <p className="text-primary text-center font-medium">Full Stack Developer</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </AnimatedSection>

      {/* Featured Projects Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <LayoutGrid className="mr-2 h-4 w-4" />
              Featured Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Recent <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore some of my latest work showcasing modern web development and creative solutions.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <AnimatedElement key={project.id} delay={index * 0.1}>
                <Link href={`/projects/${project.slug}`}>
                  <motion.div
                    className="group relative bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -8 }}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-white">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-primary font-medium">
                        View Project
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedElement>
            ))}
          </div>

          <AnimatedElement delay={0.4} className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                View All Projects
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">collaborate</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your next project and turn your ideas into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/contact">
                  Hire Me
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6">
                <Link href="/Rachid_El_ismaiyly_Full-Stack.pdf" target="_blank">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </AnimatedSection>
    </div>
  );
}
