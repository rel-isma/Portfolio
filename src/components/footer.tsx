"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { Button } from "./ui/button";

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks: FooterSection[] = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Services", href: "/services" },
        { label: "Skills", href: "/skills" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Static Websites", href: "/services#static-website-development" },
        { label: "Web Applications", href: "/services#dynamic-web-applications" },
        { label: "Custom Solutions", href: "/services#custom-software-solutions" },
        { label: "Consultation", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Resume", href: "/Rachid_El_ismaiyly_Full-Stack.pdf", external: true },
        { label: "GitHub", href: "https://github.com/rel-isma", external: true },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/rachid-el-isamiyly/", external: true },
        { label: "Get Quote", href: "/contact" },
      ],
    },
  ];


  const socialLinks = [
    {
      icon: Instagram,
      href: "https://www.instagram.com/rel_ismaa/",
      label: "Instagram",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/rachid-el-isamiyly/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/rel-isma",
      label: "GitHub",
    },
    {
      icon: FaWhatsapp,
      href: "https://wa.me/+212611563140",
      label: "WhatsApp",
    },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <Image
                  src="/relismalogo.svg"
                  alt="Rachid El-Ismaiyly"
                  width={24}
                  height={24}
                  className="text-white"
                />
              </div>
              <span className="font-bold text-lg">Rachid El-Ismaiyly</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Full-Stack Developer specializing in modern web applications and digital solutions. Transform your ideas into powerful, scalable software.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 mb-6">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg mb-2">Ready to Work Together?</h4>
              <p className="text-muted-foreground text-sm">
                Let&apos;s turn your vision into reality with modern web solutions.
              </p>
            </div>
            <Button asChild size="lg" className="text-lg px-8 py-6">
              <Link
                href="/contact"
              >
                Get Started
              </Link>
            </Button>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Rachid El-Ismaiyly. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Made with ❤️ using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
