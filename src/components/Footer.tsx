"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink, Sparkles, Heart } from "lucide-react";
import { socialLinks, navigationLinks, personalInfo } from "@/data/portfolioData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-background border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand Section */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {personalInfo.name}
            </h3>
            <p className="text-muted-foreground text-sm max-w-md leading-relaxed">
              {personalInfo.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              Quick Links
            </h4>
            <div className="flex flex-wrap gap-4">
              {navigationLinks.map((link: { name: string; href: string }) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <span>© {currentYear} {personalInfo.name}. Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>and lots of ☕</span>
            </div>
            <div className="flex items-center space-x-6">
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm hover:underline underline-offset-4"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm hover:underline underline-offset-4"
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
