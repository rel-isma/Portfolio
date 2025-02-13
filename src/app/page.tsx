"use client";

import { Button } from "@/components/ui/button";
import { Download, LayoutGrid, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [serviceRef, serviceInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <section id="home" className="py-16 lg:py-24">
        <h1 className="text-4xl lg:text-6xl font-bold space-y-4">
          <span className="text-foreground/60 dark:text-foreground-dark/60">
            Hi! I&apos;m
          </span>
          <br />
          <span className="text-primary">Rachid</span> El-Ismailyly
        </h1>
        <h2 className="text-2xl lg:text-4xl font-bold mt-6 flex items-center">
          <span className="text-primary mr-2">&gt;</span> Full-Stack Web
          Developer
        </h2>

        <p className="mt-8 text-lg lg:text-xl leading-relaxed max-w-3xl">
          I Build All Kinds Of <span className="text-primary">Websites</span>{" "}
          And <span className="text-primary">Web Applications</span> That Help
          Businesses Grow And Meet Their Needs. From Interactive User Interfaces
          To Powerful Backend Systems, I Focus On Delivering{" "}
          <span className="text-primary">High-Quality</span>, Scalable, And{" "}
          <span className="text-primary">User-Friendly</span> Solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-12">
          <Button className="text-lg px-8 py-6" variant="outline">
            <LayoutGrid className="mr-2 h-5 w-5" />
            My works
          </Button>
          <Button className="text-lg px-8 py-6 " variant="outline">
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-16 lg:py-24 scroll-mt-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="space-y-4">
            <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
              <Star className="mr-1.5 h-4 w-4" />
              Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              My latest
              <br />
              awesome <span className="text-primary">Projects</span>
            </h2>
          </div>

          <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project One"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Project one</h3>
                <Link
                  href="#"
                  className="inline-block text-lg mt-2 font-semibold border-b border-white/30 hover:border-white transition-colors"
                >
                  View Work
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {[2, 3].map((project) => (
            <div
              key={project}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt={`Project ${project}`}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-2xl font-bold">Project one</h3>
                  <Link
                    href="#"
                    className="inline-block text-lg mt-2 font-semibold border-b border-white/30 hover:border-white transition-colors"
                  >
                    View Work
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <div className="aspect-[4/3] relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project 4"
                className="object-cover"
                fill
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold">Project one</h3>
                <Link
                  href="#"
                  className="inline-block text-lg mt-2 font-semibold border-b border-white/30 hover:border-white transition-colors"
                >
                  View Work
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center text-2xl font-semibold hover:text-primary transition-colors group"
            >
              View all projects
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </section>

      <motion.section
        id="service"
        className="py-16 lg:py-24 scroll-mt-16"
        ref={serviceRef}
        variants={containerVariants}
        initial="hidden"
        animate={serviceInView ? "visible" : "hidden"}
      >
        <div className="relative">
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
              <Star className="mr-1.5 h-4 w-4" />
              Service
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-between items-start mt-4"
          >
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              I&apos;m great in what I do
              <br />
              and <span className="text-primary">I&apos;m loving it</span>
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center text-xl font-semibold text-primary hover:text-primary/90 transition-colors group"
            >
              Hire Me
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-3xl bg-white dark:bg-secondary shadow-lg overflow-hidden group"
            >
              {/* Decorative dots */}
              <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-green-400" />
              <div className="absolute top-12 right-8 w-2 h-2 rounded-full bg-orange-400" />
              <div className="absolute bottom-8 left-12 w-2 h-2 rounded-full bg-red-400" />
              <div className="absolute bottom-16 right-16 w-2 h-2 rounded-full bg-green-400" />

              <h3 className="text-3xl font-bold mb-4">Frontend development</h3>
              <div className="flex gap-3 mb-4">
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                  UI/UX Design
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                  Design to Code
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Building modern, responsive web interfaces with React, Next.js,
                and TypeScript.
              </p>
              <div className="relative w-full aspect-[2/1]">
                <Image
                  src={`/placeholder.svg?height=600&width=800`}
                  alt="Frontend Development"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="relative p-8 rounded-3xl bg-white dark:bg-secondary shadow-lg overflow-hidden group"
            >
              {/* Decorative dots */}
              <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-orange-400" />
              <div className="absolute top-16 right-12 w-2 h-2 rounded-full bg-green-400" />
              <div className="absolute bottom-12 left-16 w-2 h-2 rounded-full bg-red-400" />
              <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-green-400" />

              <h3 className="text-3xl font-bold mb-4">Backend development</h3>
              <div className="flex gap-3 mb-4">
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                  Idea to Code
                </span>
                <span className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm font-medium">
                  API Integration
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Building secure and scalable systems with Django REST Framework.
              </p>
              <div className="relative w-full aspect-[2/1]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BLOB_URL}/0Q3cR.png`}
                  alt="Backend Development"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <div className="fixed bottom-12 right-12 text-sm font-medium [writing-mode:vertical-rl] hidden lg:flex items-center gap-12">
        <span>SCROLL FOR MORE</span>
        <span className="h-24 w-px bg-foreground/20 dark:bg-foreground-dark/20" />
      </div>
    </div>
  );
}
