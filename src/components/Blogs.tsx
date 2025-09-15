"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PenTool, Clock } from "lucide-react";

const Blogs = () => {

  return (
    <section id="blogs" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
            <PenTool className="h-8 w-8 text-primary" />
            Blog & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights from my development journey
          </p>
        </div>

        {/* Coming Soon Content */}
        <div className="max-w-2xl mx-auto">
          <Card className="text-center">
            <CardContent className="p-12">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <Clock className="h-12 w-12 text-primary" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    {`I'm currently working on creating valuable content for this section. 
                    Stay tuned for articles, tutorials, and insights about web development, 
                    cloud technologies, and machine learning.`}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
