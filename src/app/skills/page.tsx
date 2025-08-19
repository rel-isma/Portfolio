"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Search, Code2, Database, Cloud, Palette, Wrench, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// Animation component
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

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";
type SkillCategory = "Languages" | "Frameworks" | "Libraries" | "Tools" | "Databases" | "Cloud/DevOps";

interface Skill {
  name: string;
  icon: string;
  category: SkillCategory;
  level: SkillLevel;
  description: string;
  experience: string;
}

const skills: Skill[] = [
  // Languages
  { name: "Python", icon: "python.svg", category: "Languages", level: "Expert", description: "Backend development, automation, data analysis", experience: "3+ years" },
  { name: "JavaScript", icon: "javascript.svg", category: "Languages", level: "Expert", description: "Modern ES6+, async programming, DOM manipulation", experience: "3+ years" },
  { name: "TypeScript", icon: "typescript.svg", category: "Languages", level: "Advanced", description: "Type-safe JavaScript, complex type systems", experience: "2+ years" },
  { name: "C++", icon: "cpp.svg", category: "Languages", level: "Intermediate", description: "Systems programming, algorithms, data structures", experience: "2 years" },
  { name: "C", icon: "c.svg", category: "Languages", level: "Intermediate", description: "Low-level programming, memory management", experience: "1+ years" },

  // Frameworks
  { name: "Django", icon: "django.svg", category: "Frameworks", level: "Expert", description: "Full-stack web framework, REST APIs, authentication", experience: "3+ years" },
  { name: "React", icon: "react.svg", category: "Frameworks", level: "Expert", description: "Component-based UI, hooks, state management", experience: "3+ years" },
  { name: "Next.js", icon: "nextjs.svg", category: "Frameworks", level: "Advanced", description: "Server-side rendering, API routes, optimization", experience: "2+ years" },
  { name: "Django REST", icon: "drf.svg", category: "Frameworks", level: "Advanced", description: "API development, serialization, authentication", experience: "2+ years" },

  // Libraries
  { name: "Tailwind CSS", icon: "tailwinds.svg", category: "Libraries", level: "Advanced", description: "Utility-first CSS, responsive design", experience: "2+ years" },
  { name: "Framer Motion", icon: "react.svg", category: "Libraries", level: "Intermediate", description: "React animations, transitions, gestures", experience: "1+ years" },

  // Tools
  { name: "Docker", icon: "docker.svg", category: "Tools", level: "Advanced", description: "Containerization, microservices, deployment", experience: "2+ years" },
  { name: "Git", icon: "bash.svg", category: "Tools", level: "Expert", description: "Version control, branching, collaboration", experience: "3+ years" },
  { name: "VS Code", icon: "vscode.svg", category: "Tools", level: "Expert", description: "Code editing, debugging, extensions", experience: "3+ years" },
  { name: "Figma", icon: "figma.svg", category: "Tools", level: "Intermediate", description: "UI/UX design, prototyping, collaboration", experience: "1+ years" },
  { name: "Notion", icon: "notion.svg", category: "Tools", level: "Advanced", description: "Project management, documentation", experience: "2+ years" },

  // Databases
  { name: "PostgreSQL", icon: "postgresql.svg", category: "Databases", level: "Advanced", description: "Relational database, complex queries, optimization", experience: "2+ years" },

  // Cloud/DevOps
  { name: "WebSocket", icon: "websocket.svg", category: "Cloud/DevOps", level: "Intermediate", description: "Real-time communication, chat applications", experience: "1+ years" },
];

const categories: { name: SkillCategory; icon: React.ComponentType<{ className?: string }>; color: string }[] = [
  { name: "Languages", icon: Code2, color: "bg-blue-500/10 text-blue-600 border-blue-200" },
  { name: "Frameworks", icon: Globe, color: "bg-green-500/10 text-green-600 border-green-200" },
  { name: "Libraries", icon: Palette, color: "bg-purple-500/10 text-purple-600 border-purple-200" },
  { name: "Tools", icon: Wrench, color: "bg-orange-500/10 text-orange-600 border-orange-200" },
  { name: "Databases", icon: Database, color: "bg-red-500/10 text-red-600 border-red-200" },
  { name: "Cloud/DevOps", icon: Cloud, color: "bg-indigo-500/10 text-indigo-600 border-indigo-200" },
];

const levelColors = {
  Beginner: "bg-gray-100 text-gray-700 border-gray-300",
  Intermediate: "bg-yellow-100 text-yellow-800 border-yellow-300",
  Advanced: "bg-blue-100 text-blue-800 border-blue-300",
  Expert: "bg-green-100 text-green-800 border-green-300",
};

export default function SkillsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<SkillCategory[]>([]);

  const filteredSkills = skills
    .filter(skill => 
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(skill => 
      selectedCategories.length === 0 || selectedCategories.includes(skill.category)
    );

  const toggleCategory = (category: SkillCategory) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <AnimatedElement className="text-center mb-16">
            <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-4">
              <Code2 className="mr-2 h-4 w-4" />
              Skills & Technologies
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              My <span className="text-primary">Technical</span> Arsenal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore my comprehensive skill set spanning multiple programming languages, 
              frameworks, and tools that I use to create exceptional digital experiences.
            </p>
          </AnimatedElement>

          {/* Search and Filters */}
          <AnimatedElement delay={0.2} className="mb-12">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Search skills, technologies, or descriptions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-12 text-lg"
                />
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isSelected = selectedCategories.includes(category.name);
                  return (
                    <motion.button
                      key={category.name}
                      onClick={() => toggleCategory(category.name)}
                      className={`inline-flex items-center px-4 py-2 rounded-full border text-sm font-medium transition-all duration-200 ${
                        isSelected 
                          ? "bg-primary text-white border-primary shadow-lg" 
                          : `${category.color} border hover:shadow-md`
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {category.name}
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="ml-2 bg-white/20 rounded-full px-1.5 py-0.5 text-xs"
                        >
                          ✓
                        </motion.span>
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </AnimatedElement>

          {/* Skills Grid */}
          <AnimatedElement delay={0.4}>
            <motion.div 
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              layout
            >
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group relative bg-background border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ y: -4 }}
                >
                  {/* Skill Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Image
                      src={`/${skill.icon}`}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>

                  {/* Skill Info */}
                  <div className="space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {skill.experience}
                      </p>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {skill.description}
                    </p>

                    {/* Level Badge */}
                    <div className="flex items-center justify-between">
                      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${levelColors[skill.level]}`}>
                        {skill.level}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatedElement>

          {/* Empty State */}
          {filteredSkills.length === 0 && (
            <AnimatedElement delay={0.2} className="text-center py-20">
              <div className="max-w-md mx-auto">
                <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No skills found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search terms or filters to find what you&apos;re looking for.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategories([]);
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            </AnimatedElement>
          )}
        </div>
      </section>
    </div>
  );
}
