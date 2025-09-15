"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react";
import { projects, sectionHeaders } from "@/data/portfolioData";

const Projects = () => {

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" />
            {sectionHeaders.projects.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionHeaders.projects.subtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/20"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Enhanced Image Display */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay Effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {project.liveUrl && (
                    <Button size="sm" className="h-8 w-8 p-0 bg-primary/90 hover:bg-primary">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                  <Button size="sm" variant="outline" className="h-8 w-8 p-0 bg-background/90 hover:bg-background">
                    <Github className="h-4 w-4" />
                  </Button>
                </div>

              </div>

              <CardHeader className="relative">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-primary/80 bg-clip-text text-transparent group-hover:from-primary group-hover:to-secondary transition-all duration-300">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100">
                      <Zap className="h-4 w-4 text-accent animate-pulse" />
                    </div>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6 relative">
                {/* Key Features */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
                    <h4 className="text-sm font-semibold text-foreground">Key Features</h4>
                  </div>
                  <ul className="space-y-2 ml-3">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start group/item">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-3 mt-2 group-hover/item:bg-primary transition-colors duration-200"></div>
                        <span className="group-hover/item:text-foreground transition-colors duration-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-4 bg-gradient-to-b from-secondary to-accent rounded-full"></div>
                    <h4 className="text-sm font-semibold text-foreground">Tech Stack</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-3">
                    {project.technologies.map((tech, idx) => (
                      <Badge 
                        key={idx} 
                        variant="outline" 
                        className="text-xs hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-all duration-200 cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  {project.liveUrl ? (
                    <>
                      <Button asChild size="sm" className="flex-1 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                        <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="flex-1 text-foreground hover:bg-secondary/10 hover:border-secondary/30 hover:text-foreground transition-all duration-300">
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Source Code
                        </Link>
                      </Button>
                    </>
                  ) : (
                    <Button asChild variant="outline" size="sm" className="w-full text-foreground hover:bg-secondary/10 hover:border-secondary/30 hover:text-foreground transition-all duration-300">
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Source Code
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="text-center mt-20">
          <div className="relative">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 blur-3xl rounded-full"></div>
            
            <div className="relative bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 max-w-2xl mx-auto">
              
              <h3 className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-3">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Interested in seeing more of my work or collaborating on your next project? 
                Let's create something extraordinary together.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300">
                  <Link href="https://github.com/husni-haniffa" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    View All Projects
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-foreground hover:bg-secondary/10 hover:border-secondary/30 hover:text-foreground transition-all duration-300">
                  <Link href="#contact">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Let's Work Together
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
