"use client";

import React from "react";
import { personalInfo, sectionHeaders } from "@/data/portfolioData";

const About = () => {

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {sectionHeaders.about.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionHeaders.about.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Profile and Description */}
          <div className="text-center space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                {/* Placeholder for profile image */}
                <div className="text-6xl text-muted-foreground">{personalInfo.profileImage}</div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center">
                {personalInfo.bio.map((paragraph, index) => (
                  <p key={index} className={index === 0 ? "text-lg" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
