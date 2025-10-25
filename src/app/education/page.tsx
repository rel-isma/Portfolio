"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  School, 
  Calendar, 
  MapPin, 
  Code2,
  Brain,
  BookOpen,
  ChevronRight,
  Download,
  ExternalLink,
  BookOpenCheck
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 relative overflow-hidden">
      {/* Modern Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <AnimatedElement className="text-center mb-20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary via-blue-600 to-purple-600 rounded-2xl mb-8 shadow-2xl"
          >
            <GraduationCap className="w-10 h-10 text-white" />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent mb-6 leading-tight"
          >
            My Educational
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-primary bg-clip-text text-transparent">
              Journey
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-medium"
          >
            From foundational sciences to advanced software engineering, 
            <br className="hidden md:block" />
            every step has shaped my path in technology.
          </motion.p>
        </AnimatedElement>

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
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="w-5 h-5 mr-3 text-primary" />
                          <span className="font-medium">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-muted-foreground">
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
                      <p className="text-lg text-muted-foreground leading-relaxed">
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
                                <p className="text-sm text-muted-foreground leading-relaxed">
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

        {/* Call to Action */}
        <AnimatedElement className="text-center mt-20" delay={0.6}>
          <div className="relative bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 rounded-3xl p-8 md:p-12 border border-primary/20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              >
                Let&apos;s Build Something Amazing
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
              >
                Ready to turn ideas into reality? Let&apos;s connect and create innovative solutions together.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button size="lg" className="group px-8 py-3 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  <Link href="/contact" className="flex items-center">
                    Get In Touch
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group px-8 py-3 rounded-2xl font-semibold">
                  <Link href="/skills" className="flex items-center">
                    <Brain className="w-5 h-5 mr-2" />
                    View My Skills
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="group px-8 py-3 rounded-2xl font-semibold">
                  <Link href="/resume/Rachid_El_ismaiyly_Resume.pdf" target="_blank" className="flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
}
