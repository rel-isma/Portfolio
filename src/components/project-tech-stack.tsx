"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Technology {
  name: string;
  icon: string;
}

interface ProjectTechStackProps {
  technologies: Technology[];
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Technologies Used</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {technologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-secondary border group hover:border-primary transition-colors"
          >
            <div className="relative h-12 w-12">
              <Image
                src={`/${tech.icon}` || "/placeholder.svg"}
                alt={tech.name}
                fill
                className="object-contain"
              />
            </div>
            <span className="text-sm font-medium group-hover:text-primary transition-colors">
              {tech.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
