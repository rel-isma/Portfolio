import Link from "next/link";
import { Github, Instagram, Linkedin, MessageSquare } from "lucide-react";

export function SocialLinks() {
  return (
    <div className="flex justify-center space-x-4">
      <Link
        href="#"
        className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <MessageSquare className="h-5 w-5" />
      </Link>
      <Link
        href="#"
        className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
      >
        <Instagram className="h-5 w-5" />
      </Link>
    </div>
  );
}
