"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/data/portfolioData";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5' 
        : 'bg-background/70 backdrop-blur-md border-b border-border/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Signature Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="group relative"
            >
              <div className="relative">
                <span className="text-3xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-primary/80 hover:to-secondary/80 transition-all duration-300 group-hover:scale-110 select-none relative z-10">
                  {"{ H }"}
                </span>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 text-3xl font-black text-primary/20 blur-sm group-hover:text-primary/30 transition-all duration-300 select-none">
                  {"{ H }"}
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {navigationLinks.map((link: { href: string; name: string }) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-muted-foreground hover:text-foreground px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                >
                  <span className="relative z-10">{link.name}</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-background/95 backdrop-blur-xl border-t border-border/50">
              {navigationLinks.map((link: { href: string; name: string }) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative text-muted-foreground hover:text-foreground block px-2 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-primary/5 hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">
                    {link.name}
                  </span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
