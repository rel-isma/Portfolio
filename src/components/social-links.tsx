import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";
import { FaDiscord, FaWhatsapp } from "react-icons/fa6";

export function SocialLinks() {
  return (
    <div className="flex justify-between gap-2 w-full">
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
        href="https://discord.com/users/957577009599496192"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <FaDiscord className="h-6 w-6" />
      </Link>
      <Link
        href="https://wa.me/+212611563140"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-2xl border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <FaWhatsapp className="h-6 w-6" />
      </Link>
    </div>
  );
}
