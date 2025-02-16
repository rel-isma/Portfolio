"use client";

import { motion } from "framer-motion";
import {
  GitFork,
  GitPullRequest,
  Star,
  Users2,
  AlertCircle,
} from "lucide-react";

interface ProjectStatsProps {
  stats: {
    commits: number;
    contributors: number;
    stars: number;
    forks: number;
    issues: number;
  };
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">GitHub Statistics</h3>
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-secondary border"
        >
          <GitPullRequest className="h-5 w-5 text-primary" />
          <div>
            <div className="text-2xl font-bold">{stats.commits}</div>
            <div className="text-sm text-muted-foreground">Commits</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-secondary border"
        >
          <Users2 className="h-5 w-5 text-primary" />
          <div>
            <div className="text-2xl font-bold">{stats.contributors}</div>
            <div className="text-sm text-muted-foreground">Contributors</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-secondary border"
        >
          <Star className="h-5 w-5 text-primary" />
          <div>
            <div className="text-2xl font-bold">{stats.stars}</div>
            <div className="text-sm text-muted-foreground">Stars</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-secondary border"
        >
          <GitFork className="h-5 w-5 text-primary" />
          <div>
            <div className="text-2xl font-bold">{stats.forks}</div>
            <div className="text-sm text-muted-foreground">Forks</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-3 p-4 rounded-xl bg-white dark:bg-secondary border col-span-2"
        >
          <AlertCircle className="h-5 w-5 text-primary" />
          <div>
            <div className="text-2xl font-bold">{stats.issues}</div>
            <div className="text-sm text-muted-foreground">Open Issues</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
