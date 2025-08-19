"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Linkedin, Github } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Services", href: "/services" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Static Website Development", href: "/services#static" },
        { label: "Dynamic Web Applications", href: "/services#dynamic" },
        { label: "Custom Software Solutions", href: "/services#custom" },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "relismailyly@gmail.com",
      href: "mailto:relismailyly@gmail.com",
    },
    {
      icon: Phone,
      label: "+212 611 563 140",
      href: "tel:+212611563140",
    },
    {
      icon: MapPin,
      label: "Taounate, Morocco",
      href: "https://maps.google.com/?q=Taounate,Morocco",
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
    <footer className="bg-muted/30 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
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
              Full-Stack Developer specializing in modern web applications and digital solutions.
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
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm">{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Rachid El-Ismaiyly. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm">
            Made with ❤️ using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
