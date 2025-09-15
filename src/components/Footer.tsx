"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/husni-haniffa",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/husni-haniffa",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/husni-haniffa",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:husni@example.com",
      icon: Mail,
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">Husni Haniffa</h3>
            <p className="text-muted-foreground text-sm max-w-md">
              Full Stack Developer passionate about creating innovative solutions
              and building exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Get In Touch
            </h4>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                Let's work together on your next project
              </p>
              <Link
                href="mailto:husni@example.com"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <Mail className="h-4 w-4 mr-2" />
                husni@example.com
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Contact Form
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Husni Haniffa. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
