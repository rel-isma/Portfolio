"use client";

import { motion } from "framer-motion";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
}

interface ProjectTimelineProps {
  timeline: TimelineItem[];
}

export function ProjectTimeline({ timeline }: ProjectTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />
      <div className="space-y-8">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 w-8 h-8 rounded-full border-4 border-background dark:border-background-dark bg-white dark:bg-secondary" />
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">{item.date}</div>
              <h4 className="text-lg font-semibold">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
