"use client";

import { Button } from "@/components/ui/button";
import { Download, LayoutGrid, ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [projectsRef, projectsInView] = useInView({
    threshold: 0.1,
  });

  const [serviceRef, serviceInView] = useInView({
    threshold: 0.1,
  });

  const [homeRef, homeInView] = useInView({
    threshold: 0.1,
  });

  const [aboutRef, aboutInView] = useInView({
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
    <motion.div
      className="min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        id="home"
        className="py-16 lg:py-24"
        ref={homeRef}
        variants={containerVariants}
        initial="hidden"
        animate={homeInView ? "visible" : "hidden"}
      >
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
      </motion.section>

      <motion.section
        id="portfolio"
        className="py-16 lg:py-24 scroll-mt-16"
        ref={projectsRef}
        variants={containerVariants}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
      >
        <motion.div
          variants={itemVariants}
          className="grid lg:grid-cols-2 gap-12 mb-12"
        >
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

          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
          >
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
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid lg:grid-cols-2 gap-12 mb-12"
        >
          {[2, 3].map((project) => (
            <motion.div
              key={project}
              variants={itemVariants}
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
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
          >
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
          </motion.div>

          <div className="flex justify-center">
            <Link
              href="#"
              className="inline-flex items-center text-2xl font-semibold hover:text-primary transition-colors group"
            >
              View all projects
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </motion.div>
      </motion.section>

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
                  src={`/placeholder.svg?height=400&width=800`}
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
                  src={`/placeholder.svg?height=400&width=800`}
                  alt="Backend Development"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="about"
        className="py-16 lg:py-24 scroll-mt-16"
        ref={aboutRef}
        variants={containerVariants}
        initial="hidden"
        animate={aboutInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
            <Star className="mr-1.5 h-4 w-4" />
            about
          </div>

          <div className="space-y-12">
            <motion.div variants={itemVariants} className="max-w-4xl">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Why you <span className="text-primary">hire me</span> for your
                next <span className="text-primary">project</span>?
              </h2>

              <div className="grid lg:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I'm A Full-Stack Developer Specializing In Modern Web
                    Applications. With Expertise In React, Django, And Software
                    Development, I Deliver Clean, Efficient Solutions That Work.
                    Let Me Turn Your Ideas Into Reality.
                  </p>
                  <p className="text-lg leading-relaxed">
                    As A Graduate Of 1337 School, I Bring Strong Problem-Solving
                    Skills And A Collaborative Mindset. I'm Committed To
                    Delivering Quality Solutions That Exceed Your Expectations.
                  </p>
                  <Button className="text-lg px-8 py-6">Hire Me</Button>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="space-y-4 bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg"
                >
                  <Link
                    href={`mailto:relismailyly@gmail.com`}
                    className="block space-y-2 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="text-sm text-muted-foreground">Email</h3>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center">
                        relismailyly@gmail.com
                        <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </motion.div>
                  </Link>

                  <Link
                    href="tel:+21211563140"
                    className="block space-y-2 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="text-sm text-muted-foreground">Phone</h3>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center">
                        +21211563140
                        <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </motion.div>
                  </Link>

                  <Link
                    href="https://1337.ma"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block space-y-2 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="text-sm text-muted-foreground">
                        Education
                      </h3>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center">
                        1337 School - Computer Science Engineering
                        <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </motion.div>
                  </Link>

                  <Link
                    href="https://maps.google.com/?q=Taounate,Morocco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block space-y-2 p-4 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <motion.div
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h3 className="text-sm text-muted-foreground">
                        Location
                      </h3>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors flex items-center">
                        Taounate, Morocco
                        <ArrowUpRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </p>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold">
                Turning <span className="text-primary">Ideas</span> into Reality
                with <span className="text-primary">My Tech Skills</span>
              </h3>

              <div className="grid gap-8">
                {/* Backend Section */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg"
                >
                  <h4 className="text-2xl font-semibold mb-6">backend</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      {
                        name: "Django",
                        icon: "django.svg",
                      },
                      {
                        name: "PostgreSQL",
                        icon: "postgresql.svg",
                      },
                      {
                        name: "DRF",
                        icon: "drf.svg",
                      },
                      {
                        name: "WebSocket",
                        icon: "web.svg",
                      },
                    ].map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 group"
                        whileHover={{ y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Frontend Section */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg"
                >
                  <h4 className="text-2xl font-semibold mb-6">Frontend</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      {
                        name: "JavaScript",
                        icon: "js.svg",
                      },
                      {
                        name: "TypeScript",
                        icon: "ts.svg",
                      },
                      {
                        name: "HTML5",
                        icon: "html.svg",
                      },
                      {
                        name: "CSS3",
                        icon: "css.svg",
                      },
                      {
                        name: "Tailwind",
                        icon: "tailwinds.svg",
                      },
                      {
                        name: "React",
                        icon: "react.svg",
                      },
                      {
                        name: "Next.js",
                        icon: "nextjs.svg",
                      },
                    ].map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 group"
                        whileHover={{ y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Programming Languages Section */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg"
                >
                  <h4 className="text-2xl font-semibold mb-6">
                    Programming Lngs
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      {
                        name: "Python",
                        icon: "python.svg",
                      },
                      {
                        name: "C++",
                        icon: "cpp.svg",
                      },
                      {
                        name: "C",
                        icon: "c.svg",
                      },
                      {
                        name: "JavaScript",
                        icon: "js.svg",
                      },
                    ].map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 group"
                        whileHover={{ y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Tools Section */}
                <motion.div
                  variants={itemVariants}
                  className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg"
                >
                  <h4 className="text-2xl font-semibold mb-6">Tools</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      {
                        name: "Docker",
                        icon: "docker.svg",
                      },
                      {
                        name: "Bash",
                        icon: "bash.svg",
                      },
                      {
                        name: "Figma",
                        icon: "figma.svg",
                      },
                      {
                        name: "VSCode",
                        icon: "vscode.svg",
                      },
                      {
                        name: "Notion",
                        icon: "notion.svg",
                      },
                    ].map((tech) => (
                      <motion.div
                        key={tech.name}
                        className="flex flex-col items-center gap-2 group"
                        whileHover={{ y: -5 }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 17,
                        }}
                      >
                        <div className="relative p-4 rounded-2xl bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors">
                          <Image
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            width={60}
                            height={60}
                            className="rounded-lg"
                          />
                        </div>
                        <span className="text-sm font-medium">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-xl text-center max-w-3xl mx-auto"
            >
              I am always <span className="text-primary">learning</span> and
              evolving. Technology never stops, and{" "}
              <span className="text-primary">neither do I</span>.
            </motion.p>
          </div>
        </motion.div>
      </motion.section>

      <div className="fixed bottom-12 right-12 text-sm font-medium [writing-mode:vertical-rl] hidden lg:flex items-center gap-12">
        <span>SCROLL FOR MORE</span>
        <span className="h-24 w-px bg-foreground/20 dark:bg-foreground-dark/20" />
      </div>
    </motion.div>
  );
}
