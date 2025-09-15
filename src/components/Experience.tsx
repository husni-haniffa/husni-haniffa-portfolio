"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, Award, Sparkles } from "lucide-react";
import { experiences, sectionHeaders } from "@/data/portfolioData";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-20 left-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <Award className="h-8 w-8 text-primary" />
            {sectionHeaders.experience.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionHeaders.experience.subtitle}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="w-full">
                <Card className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-secondary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-secondary/10 hover:-translate-y-1">
                    <CardHeader className="relative">
                      {/* Animated Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-lg"></div>
                      
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <CardTitle className="text-xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-primary group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                            {exp.title}
                          </CardTitle>
                          <Badge variant="secondary" className="w-fit bg-gradient-to-r from-secondary/20 to-primary/20 border-secondary/30 hover:from-secondary/30 hover:to-primary/30 transition-all duration-300">
                            {exp.type}
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center mr-3 group-hover:bg-secondary/20 transition-colors duration-300">
                              <Briefcase className="h-4 w-4 text-secondary" />
                            </div>
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
                                <Calendar className="h-3 w-3 text-primary" />
                              </div>
                              <span>{exp.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center mr-2">
                                <MapPin className="h-3 w-3 text-accent" />
                              </div>
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="relative">
                      <div className="space-y-6">
                        {/* Description */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-4 bg-gradient-to-b from-secondary to-primary rounded-full"></div>
                            <h4 className="text-sm font-semibold text-foreground">Key Responsibilities</h4>
                          </div>
                          <ul className="space-y-2 ml-3">
                            {exp.description.map((item, idx) => (
                              <li key={idx} className="text-muted-foreground flex items-start group/item">
                                <div className="w-1.5 h-1.5 rounded-full bg-secondary/60 mr-3 mt-2 group-hover/item:bg-secondary transition-colors duration-200"></div>
                                <span className="text-sm group-hover/item:text-foreground transition-colors duration-200">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <div className="w-1 h-4 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                            <h4 className="text-sm font-semibold text-foreground">Technologies Used</h4>
                          </div>
                          <div className="flex flex-wrap gap-2 ml-3">
                            {exp.technologies.map((tech, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline" 
                                className="text-xs text-foreground hover:bg-secondary/10 hover:border-secondary/30 hover:text-foreground transition-all duration-200 cursor-default"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
