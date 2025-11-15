"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import {
  School, 
  Calendar, 
  MapPin, 
  Code2,
  Brain,
  BookOpen,
  ChevronRight,
  Download,
  ExternalLink,
  BookOpenCheck,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

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

export default function EducationPage() {
  const education = [
    {
      institution: "1337 School",
      degree: "Software Engineering Program",
      period: "2022 - Present",
      location: "khouribga, Morocco",
      description: "Intensive peer-to-peer learning program focusing on modern software development, algorithms, and system administration. Part of the 42 Network.",
      highlights: [
        "C/C++ Programming & System Programming",
        "Web Development (HTML, CSS, JavaScript, React)",
        "Database Management & SQL",
        "Network & System Administration",
        "Unix/Linux System Programming",
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Project-based collaborative learning"
      ],
      projects: [
        {
          name: "IRC Server",
          description: "Internet Relay Chat server implementation in C++",
          difficulty: "Advanced"
        },
        {
          name: "push_swap",
          description: "Sorting algorithm optimization with limited operations",
          difficulty: "Intermediate"
        },
        {
          name: "NetPractice",
          description: "Network addressing and subnetting configuration",
          difficulty: "Intermediate"
        },
        {
          name: "Inception",
          description: "Docker containerization and infrastructure setup",
          difficulty: "Advanced"
        },
        {
          name: "CPP Modules",
          description: "Object-oriented programming concepts in C++",
          difficulty: "Intermediate"
        },
        {
          name: "Born2beRoot",
          description: "System administration and server configuration",
          difficulty: "Beginner"
        }
      ],
      icon: School,
      color: "from-blue-500 to-indigo-600",
      website: "https://1337.ma"
    },
    {
      institution: "Baccalauréat Sciences de la Vie et de la Terre (SVT)",
      degree: "High School Diploma",
      period: "2021",
      location: "tissa/taounate",
      description: "Specialized in Life and Earth Sciences with focus on biology, chemistry, physics, and mathematics.",
      highlights: [
        "Biology & Life Sciences",
        "Earth Sciences & Geology",
        "Chemistry & Biochemistry",
        "Physics & Mathematics",
        "Scientific Research Methods",
        "Laboratory Techniques",
        "Environmental Studies"
      ],
      icon: BookOpenCheck,
      color: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto text-center">
          <AnimatedElement>
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <BookOpenCheck className="mr-2 h-4 w-4" />
              Academic Background
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="text-primary">Educational</span>
              <br />
              Journey to <span className="text-primary">Excellence</span>
            </h1>
            <p className="text-xl text-foreground max-w-3xl mx-auto mb-8 font-medium">
              From foundational sciences to advanced software engineering, 
              every step has shaped my path in technology and innovation.
            </p>
            <Button asChild size="lg">
              <Link href="#education">
                Explore My Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimatedElement>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

        {/* Education Timeline */}
        <div className="space-y-16">
          {education.map((edu, index) => (
            <AnimatedElement key={index} delay={0.2 + (index * 0.2)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                {/* Timeline connector */}
                {index !== education.length - 1 && (
                  <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full w-px h-16 bg-gradient-to-b from-primary/30 to-transparent hidden lg:block" />
                )}
                
                <div className="relative bg-card/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border/30 shadow-2xl group-hover:shadow-3xl group-hover:border-primary/20 transition-all duration-500">
                  {/* Floating decoration */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full opacity-20 group-hover:opacity-40 transition-opacity" />
                  
                  <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Left: Institution Info */}
                    <div className="lg:col-span-1">
                      <div className="mb-6">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {edu.institution}
                          </h3>
                          <p className="text-lg font-semibold text-primary/80">{edu.degree}</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-foreground">
                          <Calendar className="w-5 h-5 mr-3 text-primary" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-foreground">
                          <MapPin className="w-5 h-5 mr-3 text-primary" />
                          <span className="font-medium">{edu.location}</span>
                        </div>
                      </div>
                      
                      {edu.website && (
                        <Link 
                          href={edu.website} 
                          target="_blank"
                          className="inline-flex items-center px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-xl transition-colors font-medium"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Website
                        </Link>
                      )}
                    </div>
                    
                    {/* Right: Details */}
                    <div className="lg:col-span-2 space-y-8">
                      <p className="text-lg text-foreground leading-relaxed font-medium">
                        {edu.description}
                      </p>
                      
                      {/* Key Areas */}
                      <div>
                        <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                          <BookOpen className="w-5 h-5 mr-3 text-primary" />
                          Key Areas of Study
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {edu.highlights.map((highlight, hIndex) => (
                            <motion.div
                              key={hIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: hIndex * 0.1 }}
                              className="flex items-center p-3 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0" />
                              <span className="text-sm font-medium text-foreground">{highlight}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Projects */}
                      {edu.projects && (
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-4 flex items-center">
                            <Code2 className="w-5 h-5 mr-3 text-primary" />
                            Notable Projects
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {edu.projects.map((project, pIndex) => (
                              <motion.div
                                key={pIndex}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: pIndex * 0.1 }}
                                className="group/project bg-gradient-to-br from-muted/20 to-muted/40 rounded-xl p-4 hover:from-primary/5 hover:to-primary/10 border border-border/30 hover:border-primary/30 transition-all duration-300"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-bold text-foreground group-hover/project:text-primary transition-colors">
                                    {project.name}
                                  </h5>
                                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                    project.difficulty === 'Advanced' ? 'bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400' :
                                    project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400' :
                                    'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400'
                                  }`}>
                                    {project.difficulty}
                                  </span>
                                </div>
                                <p className="text-sm text-foreground leading-relaxed">
                                  {project.description}
                                </p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedElement>
          ))}
        </div>
        </div>
      </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-transparent to-transparent">
          <div className="max-w-4xl mx-auto text-center">
        <AnimatedElement className="text-center" delay={0.6}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your <span className="text-primary">Project</span>?
          </h2>
          <p className="text-xl text-foreground mb-8 max-w-2xl mx-auto font-medium">
            Ready to turn ideas into reality? Let&apos;s connect and create innovative solutions together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">
                Get In Touch
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/skills">
                <Brain className="mr-2 h-5 w-5" />
                View My Skills
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/resume/Rachid_El_ismaiyly_Resume.pdf" target="_blank">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Link>
            </Button>
          </div>
        </AnimatedElement>
          </div>
        </section>
    </div>
  );
}
