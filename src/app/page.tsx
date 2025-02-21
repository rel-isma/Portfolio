"use client";

import { Button } from "@/components/ui/button";
import {
  Download,
  LayoutGrid,
  ArrowUpRight,
  Star,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import { FaDiscord, FaTelegram, FaWhatsapp } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { staggerContainer, scrollAnimation } from "@/lib/animations";
import { useEffect, useState } from "react";
import { fadeInUp, fadeInDown } from "@/lib/animations";

// 🔹 Scroll Direction Hook (Reused for Both Components)
const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY) > 10) { // Prevents frequent triggering
        setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return scrollDir;
};

// 🔹 Animated Section (With Scroll Tracking)
const AnimatedSection = ({ children, className, id }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const scrollDir = useScrollDirection();

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={staggerContainer}
      className={className}
    >
      <motion.div variants={scrollDir === "down" ? fadeInDown : fadeInUp}>
        {children}
      </motion.div>
    </motion.section>
  );
};

// 🔹 Animated Element (Now Works Like AnimatedSection)
const AnimatedElement = ({ children, className }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const scrollDir = useScrollDirection();

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={scrollDir === "down" ? fadeInDown : fadeInUp} // Same behavior as AnimatedSection
      className={className}
    >
      {children}
    </motion.div>
  );
};

export { AnimatedSection, AnimatedElement };

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Full-Stack Web Developer";

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

  const cardHoverEffect = {
    initial: {
      scale: 1,
      rotate: 0,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
    },
    hover: {
      scale: 1.02,
      rotate: 1,
      boxShadow: "0px 20px 40px rgba(0,0,0,0.2)",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  return (
    <div className="flex flex-col min-h-full bg-gradient-radial from-background to-background/80 dark:from-background-dark dark:to-background-dark/80">
      <AnimatedSection id="home" className="py-16 lg:py-24">
        <AnimatedElement>
          <h1 className="text-4xl lg:text-6xl font-bold space-y-4">
            <span className="text-foreground/60 dark:text-foreground-dark/60">
              Hi! I&apos;m
            </span>
            <br />
            <span className="text-primary">Rachid</span> El-Ismailyly
          </h1>
        </AnimatedElement>
        <AnimatedElement>
          <h2 className="text-2xl lg:text-4xl font-bold mt-6 flex items-center">
            <span className="text-primary mr-2">&gt;</span> {typedText}
          </h2>
        </AnimatedElement>
        <AnimatedElement>
          <p className="mt-8 text-lg lg:text-xl leading-relaxed max-w-3xl">
            I Build All Kinds Of <span className="text-primary">Websites</span>{" "}
            And <span className="text-primary">Web Applications</span> That Help
            Businesses Grow And Meet Their Needs. From Interactive User
            Interfaces To Powerful Backend Systems, I Focus On Delivering{" "}
            <span className="text-primary">High-Quality</span>, Scalable, And{" "}
            <span className="text-primary">User-Friendly</span> Solutions.
          </p>
        </AnimatedElement>
        <AnimatedElement>
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button
              className="text-lg sm:text-base px-8 py-6 text-white"
              href="/projects"
            >
              <LayoutGrid className="mr-2 h-5 w-5" />
              My works
            </Button>
            <Button
              href="/Rachid_El_ismaiyly_Full-Stack.pdf"
              target="_blank"
              className="text-lg sm:text-base px-8 py-6"
              variant="outline"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="portfolio" className="pb-16 lg:py-24 scroll-mt-16">
        <AnimatedElement className="grid lg:grid-cols-2 gap-12 mb-12">
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
          <AnimatedElement className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <Link href={`/projects/project-one`}>
              <div className="aspect-[4/3] relative">
                <Image
                  src="/a7.jpg"
                  alt="Project One"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  fill
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                    Food Delivery
                  </span>
                  <h3 className="text-2xl font-bold mt-2">Project one</h3>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold border-b border-white/30 hover:border-white transition-colors">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedElement>
        </AnimatedElement>

        <AnimatedElement className="grid lg:grid-cols-2 gap-12 mb-12">
          {[2, 3].map((project) => (
            <AnimatedElement
              key={project}
              className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg"
            >
              <Link href={`/projects/project-${project}`}>
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/a7.jpg"
                    alt={`Project ${project}`}
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    fill
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 p-6 text-white">
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                      Project Category
                    </span>
                    <h3 className="text-2xl font-bold mt-2">
                      Project {project}
                    </h3>
                    <div className="mt-4 inline-flex items-center text-sm font-semibold border-b border-white/30 hover:border-white transition-colors">
                      View Project
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedElement>
          ))}
        </AnimatedElement>

        <AnimatedElement className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedElement className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary shadow-lg">
            <Link href={`/projects/project-four`}>
              <div className="aspect-[4/3] relative">
                <Image
                  src="/a7.jpg"
                  alt="Project Four"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  fill
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-0 p-6 text-white">
                  <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/20 backdrop-blur-sm">
                    Project Category
                  </span>
                  <h3 className="text-2xl font-bold mt-2">Project Four</h3>
                  <div className="mt-4 inline-flex items-center text-sm font-semibold border-b border-white/30 hover:border-white transition-colors">
                    View Project
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedElement>

          <AnimatedElement className="flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center text-2xl font-semibold hover:text-primary transition-colors group"
            >
              View all projects
              <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </AnimatedElement>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="service" className="pb-16 lg:py-24 scroll-mt-16">
        <AnimatedElement>
          <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
            <Star className="mr-1.5 h-4 w-4" />
            Service
          </div>
        </AnimatedElement>

        <AnimatedElement className="flex justify-between items-start mt-4">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            I&apos;m great in what I do
            <br />
            and <span className="text-primary">I&apos;m loving it</span>
          </h2>
          <Link
            href="/#contact"
            className="inline-flex items-center text-xl font-semibold text-primary hover:text-primary/90 transition-colors group"
          >
            Hire Me
            <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </AnimatedElement>

        <AnimatedElement className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Frontend Card */}
          <motion.div
            variants={cardHoverEffect}
            initial="initial"
            whileHover="hover"
            className="relative p-8 rounded-3xl bg-white dark:bg-secondary shadow-lg overflow-hidden group cursor-pointer"
          >
            <h3 className="text-3xl font-bold mb-4">Frontend Development</h3>
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
                src="frontend.svg"
                alt="Frontend Development"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Backend Card */}
          <motion.div
            variants={cardHoverEffect}
            initial="initial"
            whileHover="hover"
            className="relative p-8 rounded-3xl bg-white dark:bg-secondary shadow-lg overflow-hidden group cursor-pointer"
          >
            <h3 className="text-3xl font-bold mb-4">Backend Development</h3>
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
                src="backend.svg"
                alt="Backend Development"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="about" className="pb-16 lg:py-24 scroll-mt-16">
        <AnimatedElement className="space-y-8">
          <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
            <Star className="mr-1.5 h-4 w-4" />
            about
          </div>

          <div className="space-y-12">
            <AnimatedElement className="max-w-4xl">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-8">
                Why you <span className="text-primary">hire me</span> for your
                next <span className="text-primary">project</span>?
              </h2>

              <div className="grid lg:grid-cols-2 gap-12">
                <AnimatedElement className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I&apos;m A Full-Stack Developer Specializing In Modern Web
                    Applications. With Expertise In React, Django, And Software
                    Development, I Deliver Clean, Efficient Solutions That Work.
                    Let Me Turn Your Ideas Into Reality.
                  </p>
                  <p className="text-lg leading-relaxed">
                    As A Graduate Of 1337 School, I Bring Strong Problem-Solving
                    Skills And A Collaborative Mindset. I&apos;m Committed To
                    Delivering Quality Solutions That Exceed Your Expectations.
                  </p>
                  <Button
                    href="/#contact"
                    className="text-lg px-8 py-6 text-white"
                  >
                    Hire Me
                  </Button>
                </AnimatedElement>

                <AnimatedElement className="space-y-4 bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
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
                </AnimatedElement>
              </div>
            </AnimatedElement>

            <AnimatedElement className="space-y-8 mt-20">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                My Passion for Programming:{" "}
                <span className="text-primary">Creating</span>,{" "}
                <span className="text-primary">Solving</span>, and{" "}
                <span className="text-primary">Innovating</span>
              </h2>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <AnimatedElement>
                  <p className="text-lg leading-relaxed">
                    Ever Since I Wrote My First Lines Of Code, I Knew
                    Programming Was More Than Just A Skill—It Was A Way To
                    Create, Solve Problems, And Build Something Meaningful. I
                    Love The Challenge Of Breaking Down Complex Problems And
                    Turning Ideas Into Real Applications. Whether It&apos;s
                    Developing Efficient Algorithms, Crafting Intuitive User
                    Interfaces, Or Optimizing Performance, I&apos;m Always Eager
                    To Learn And Push My Limits. For Me, Coding Isn&apos;t Just
                    A Profession; It&apos;s An Ongoing Journey Of Innovation And
                    Discovery.
                  </p>
                  <Button
                    href="/#contact"
                    className="mt-8 text-lg px-8 py-6 text-white"
                  >
                    Hire Me
                  </Button>
                </AnimatedElement>

                <AnimatedElement className="relative h-[600px] w-full">
                  <Image
                    src="/relisma.png"
                    alt="Developer Portrait"
                    fill
                    className="object-contain"
                  />
                </AnimatedElement>
              </div>
            </AnimatedElement>

            <AnimatedElement className="space-y-8">
              <h3 className="text-3xl font-bold">
                Turning <span className="text-primary">Ideas</span> into Reality
                with <span className="text-primary">My Tech Skills</span>
              </h3>

              <div className="grid gap-8">
                {/* Backend Section */}
                <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
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
                </AnimatedElement>

                {/* Frontend Section */}
                <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
                  <h4 className="text-2xl font-semibold mb-6">Frontend</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {[
                      {
                        name: "JavaScript",
                        icon: "JavaScript.svg",
                      },
                      {
                        name: "TypeScript",
                        icon: "TypeScript.svg",
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
                </AnimatedElement>

                {/* Programming Languages Section */}
                <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
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
                        icon: "JavaScript.svg",
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
                </AnimatedElement>

                {/* Tools Section */}
                <AnimatedElement className="bg-white dark:bg-secondary p-8 rounded-3xl shadow-lg">
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
                </AnimatedElement>
              </div>
            </AnimatedElement>

            <AnimatedElement>
              <p className="text-xl text-center max-w-3xl mx-auto">
                I am always <span className="text-primary">learning</span> and
                evolving. Technology never stops, and{" "}
                <span className="text-primary">neither do I</span>.
              </p>
            </AnimatedElement>
          </div>
        </AnimatedElement>
      </AnimatedSection>

      <AnimatedSection id="contact" className="pb-16 lg:py-24 scroll-mt-16">
        <AnimatedElement className="mx-auto px-4">
          <div className="space-y-4 text-start mb-12">
            <div className="inline-flex items-center rounded-full border bg-white dark:bg-secondary shadow-sm px-3 py-1 text-sm font-semibold">
              <Star className="mr-1.5 h-4 w-4" />
              Contact
            </div>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary">
              Let&apos;s make something awesome together!
            </h2>
          </div>

          <AnimatedElement>
            <form className="space-y-8 mx-auto">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="text-lg border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary placeholder:text-gray-500 dark:placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Textarea
                  name="message"
                  placeholder="A Few Words*"
                  required
                  className="text-lg min-h-[150px] border-0 border-b-2 border-gray-300 dark:border-gray-700 rounded-none px-0 py-2 bg-transparent focus-visible:ring-0 focus-visible:border-primary resize-none placeholder:text-gray-500 dark:placeholder:text-gray-400"
                />
              </div>

              <div className="flex flex-col md:items-start lg:items-center gap-4 pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-fit text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-white rounded-full"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </form>
          </AnimatedElement>

          <AnimatedElement className="mt-16 text-center space-y-8">
            <div className="flex justify-center gap-8">
              <Link
                href="https://www.instagram.com/rel_ismaa/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Instagram className="h-10 w-10" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/rachid-el-isamiyly/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin className="h-10 w-10" />
              </Link>
              <Link
                href="https://github.com/rel-isma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaDiscord className="h-10 w-10" />
              </Link>
              <Link
                href="https://github.com/rel-isma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaTelegram className="h-10 w-10" />
              </Link>
              <Link
                href="https://github.com/rel-isma"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <FaWhatsapp className="h-10 w-10" />
              </Link>
            </div>
          </AnimatedElement>
        </AnimatedElement>
      </AnimatedSection>

      <motion.footer
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="mt-auto py-16 bg-white dark:bg-secondary"
      >
        <AnimatedElement className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-2xl">R</span>
                </div>
                <h2 className="text-xl font-semibold">Rachid El-ismailyly</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Full-stack developer specializing in modern web applications.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#home"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#portfolio"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#service"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#about"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact"
                    className="text-gray-600 dark:text-gray-300 hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li className="text-gray-600 dark:text-gray-300">
                  Frontend Development
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  Backend Development
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  UI/UX Design
                </li>
                <li className="text-gray-600 dark:text-gray-300">
                  API Integration
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    relismailyly@gmail.com
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    +21211563140
                  </span>
                </li>
                <li className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span className="text-gray-600 dark:text-gray-300">
                    Taounate, Morocco
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} Rachid El-ismailyly. All rights
                reserved.
              </p>
              <div className="flex space-x-6">
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-primary"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </motion.footer>
    </div>
  );
}
