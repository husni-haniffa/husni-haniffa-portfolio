"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Database, Cloud, Wrench, Brain, Palette, Sparkles } from "lucide-react";
import { skills, sectionHeaders } from "@/data/portfolioData";
import Link from "next/link";

const Skills = () => {
  // Icon mapping for different skill categories
  const categoryIcons: { [key: string]: React.ReactNode } = {
    "Programming Languages": <Code2 className="h-5 w-5" />,
    "Frontend": <Palette className="h-5 w-5" />,
    "Backend": <Database className="h-5 w-5" />,
    "Databases": <Database className="h-5 w-5" />,
    "Cloud & DevOps": <Cloud className="h-5 w-5" />,
    "Tools": <Wrench className="h-5 w-5" />,
    "AI & Machine Learning": <Brain className="h-5 w-5" />
  };

  const categoryColors: { [key: string]: string } = {
    "Programming Languages": "from-primary/20 to-primary/10",
    "Frontend": "from-secondary/20 to-secondary/10", 
    "Backend": "from-accent/20 to-accent/10",
    "Databases": "from-primary/15 to-secondary/15",
    "Cloud & DevOps": "from-secondary/15 to-accent/15",
    "Tools": "from-accent/15 to-primary/15",
    "AI & Machine Learning": "from-primary/20 to-accent/20"
  };

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
      <div className="absolute top-10 right-20 w-40 h-40 bg-accent/10 rounded-full opacity-20"></div>
      <div className="absolute bottom-10 left-20 w-32 h-32 bg-primary/10 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-accent to-primary bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-accent" />
            {sectionHeaders.skills.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionHeaders.skills.subtitle}
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList], index) => (
            <Card key={index} className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1">
              <CardHeader className="relative pb-3">
                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${categoryColors[category] || "from-primary/10 to-secondary/10"} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-lg`}></div>
                
                <div className="relative z-10 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <div className="text-accent">
                      {categoryIcons[category] || <Code2 className="h-5 w-5" />}
                    </div>
                  </div>
                  <CardTitle className="text-lg font-semibold bg-gradient-to-r from-foreground to-accent/80 bg-clip-text text-transparent group-hover:from-accent group-hover:to-primary transition-all duration-300">
                    {category}
                  </CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="relative">
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill: string, skillIndex: number) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-sm hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all duration-200 cursor-default group-hover:border-accent/20"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
