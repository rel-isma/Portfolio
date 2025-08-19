"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Heart, 
  Calendar,
  Award,
  Code2,
  Zap,
  Target
} from "lucide-react";
import Link from "next/link";
import { Suspense, lazy } from "react";

// Lazy load 3D avatar
const Avatar3D = lazy(() => import("@/components/Avatar3D"));

// Animation variants

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

export default function AboutPage() {
  const personalInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "relismailyly@gmail.com",
      href: "mailto:relismailyly@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+212 611 563 140",
      href: "tel:+212611563140",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Taounate, Morocco",
      href: "https://maps.google.com/?q=Taounate,Morocco",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "1337 School",
      subtext: "Software Engineering",
      href: "https://1337.ma",
    },
    {
      icon: Calendar,
      label: "Experience",
      value: "3+ Years",
      subtext: "Full-Stack Development",
    },
    {
      icon: Heart,
      label: "Interests",
      value: "Tech, Travel, Football",
      subtext: "Design & Innovation",
    },
  ];

  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "I believe in writing maintainable, scalable, and well-documented code that stands the test of time."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency to deliver exceptional user experiences across all devices."
    },
    {
      icon: Target,
      title: "Problem Solving",
      description: "Approaching challenges with analytical thinking and creative solutions to overcome complex obstacles."
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              <AnimatedElement>
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    <Award className="mr-2 h-4 w-4" />
                    About Me
                  </div>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Passionate{" "}
                    <span className="text-primary">Developer</span>{" "}
                    Building Tomorrow
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Transforming ideas into digital reality through code, creativity, and dedication.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={0.2}>
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed">
                    I&apos;m a <strong>Full-Stack Developer</strong> with a passion for creating 
                    exceptional digital experiences. Graduated from{" "}
                    <Link href="https://1337.ma" target="_blank" className="text-primary hover:underline">
                      1337 School
                    </Link>, I specialize in modern web technologies including 
                    React, Django, and everything in between.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    My journey in programming started with curiosity and has evolved into 
                    a career dedicated to solving complex problems and building scalable 
                    solutions. I believe in continuous learning and staying updated with 
                    the latest technologies and best practices.
                  </p>

                  <p className="text-lg leading-relaxed">
                    When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                    traveling to discover new cultures, playing football, or sketching 
                    new design ideas. I&apos;m always open to new opportunities and 
                    collaborations that challenge me to grow.
                  </p>
                </div>
              </AnimatedElement>

              <AnimatedElement delay={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg">
                    <Link href="/contact">
                      <Mail className="mr-2 h-5 w-5" />
                      Hire Me
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="/Rachid_El_ismaiyly_Full-Stack.pdf" target="_blank">
                      <Download className="mr-2 h-5 w-5" />
                      Download Resume
                    </Link>
                  </Button>
                </div>
              </AnimatedElement>
            </div>

            {/* 3D Avatar */}
            <AnimatedElement delay={0.3} className="relative">
              <div className="relative h-[500px] lg:h-[600px] w-full">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl" />
                <Suspense fallback={
                  <div className="w-full h-full bg-muted rounded-3xl flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
                  </div>
                }>
                  <Avatar3D />
                </Suspense>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Personal Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Quick <span className="text-primary">Info</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get to know me better through these quick details about my background and interests.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personalInfo.map((item, index) => (
              <AnimatedElement key={index} delay={index * 0.1}>
                <motion.div
                  className="group relative bg-background rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium text-muted-foreground mb-1">
                        {item.label}
                      </h3>
                      {item.href ? (
                        <Link
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          className="font-semibold text-lg hover:text-primary transition-colors"
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className="font-semibold text-lg">{item.value}</p>
                      )}
                      {item.subtext && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {item.subtext}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              My <span className="text-primary">Philosophy</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles and values that guide my approach to development and problem-solving.
            </p>
          </AnimatedElement>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedElement key={index} delay={index * 0.15}>
                <motion.div
                  className="text-center p-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300"
                  whileHover={{ y: -4 }}
                >
                  <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-4">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies Link */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement>
            <div className="bg-background rounded-3xl p-12 shadow-lg border">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6">
                <Code2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Skills & <span className="text-primary">Technologies</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8 text-lg">
                Explore my comprehensive technical skills, programming languages, frameworks, 
                and tools that I use to create exceptional digital experiences.
              </p>
              <Button asChild size="lg" className="text-lg px-8 py-6">
                <Link href="/skills">
                  <Zap className="mr-2 h-5 w-5" />
                  View My Skills
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Passion Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedElement>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              My Passion for <span className="text-primary">Programming</span>
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
              <p>
                Ever since I wrote my first lines of code, I knew programming was more than 
                just a skill—it was a way to <strong className="text-foreground">create</strong>, 
                solve problems, and build something meaningful.
              </p>
              <p>
                I love the challenge of breaking down complex problems and turning ideas into 
                real applications. Whether it&apos;s developing efficient algorithms, crafting 
                intuitive user interfaces, or optimizing performance, I&apos;m always eager 
                to learn and push my limits.
              </p>
              <p>
                For me, coding isn&apos;t just a profession; it&apos;s an ongoing journey of 
                <strong className="text-foreground"> innovation and discovery</strong>. 
                Each project is an opportunity to grow, learn something new, and make a 
                positive impact.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg">
                <Link href="/projects">
                  <Briefcase className="mr-2 h-5 w-5" />
                  See My Work
                </Link>
              </Button>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
}
