"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Mail, MapPin, Calendar, Sparkles, Code, Zap } from "lucide-react";
import { personalInfo, sectionHeaders, skills } from "@/data/portfolioData";
import Link from "next/link";

const About = () => {

  return (
    <section id="about" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-10 right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <Code className="h-8 w-8 text-primary" />
            {sectionHeaders.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionHeaders.about.subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Profile Section */}
            <div className="lg:col-span-1 space-y-6">
              {/* Profile Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative w-80 h-80 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20 flex items-center justify-center border border-border/50 backdrop-blur-sm">
                  <div className="text-8xl text-muted-foreground group-hover:scale-110 transition-transform duration-500">{personalInfo.profileImage}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent"></div>
                </div>
              </div>

            </div>

            {/* Bio and Skills Section */}
            <div className="lg:col-span-2 space-y-8">
              {/* Bio Section */}
              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {personalInfo.bio.map((paragraph, index) => (
                    <p key={index} className={`${index === 0 ? "text-lg text-foreground/90 font-medium" : ""} ${index === 1 ? "text-base" : "text-sm"}`}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>


              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  <Link href="#contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Get In Touch
                  </Link>
                </Button>
                <Button variant="outline" className="text-foreground hover:bg-secondary/10 hover:border-secondary/30 hover:text-foreground transition-all duration-300">
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
