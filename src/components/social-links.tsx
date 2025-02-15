import Link from "next/link";
import { Github, Instagram, Linkedin, MessageSquare } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex justify-center gap-4">
      <Link
        href="https://www.instagram.com/rel_ismaa/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Instagram className="h-6 w-6" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/rachid-el-isamiyly/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Linkedin className="h-6 w-6" />
      </Link>
      <Link
        href="https://github.com/rel-isma"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <Github className="h-6 w-6" />
      </Link>
      <Link
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <MessageSquare className="h-6 w-6" />
      </Link>
    </div>
  );
}
