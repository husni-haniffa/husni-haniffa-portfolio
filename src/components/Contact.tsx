"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Send, MessageCircle, Clock } from "lucide-react";
import { socialLinks, sectionHeaders, contactInfo } from "@/data/portfolioData";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert(result.message);
        reset();
      } else {
        alert(result.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent mb-4 flex items-center justify-center gap-3">
            <MessageCircle className="h-8 w-8 text-primary" />
            {sectionHeaders.contact.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {sectionHeaders.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Social Links and Info */}
          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">{contactInfo.connectTitle}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {contactInfo.connectDescription}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-foreground">Find Me On</h4>
                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const iconName = social.icon;
                      const IconComponent = iconName === "Github" ? Github : iconName === "Linkedin" ? Linkedin : Mail;
                      return (
                        <Button
                          key={social.name}
                          variant="outline"
                          size="lg"
                          asChild
                          className="w-full justify-start hover:bg-primary/5 hover:border-primary/30 hover:text-primary transition-all duration-300"
                        >
                          <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                          >
                            <IconComponent className="h-4 w-4 text-primary mr-3" />
                            <span>{social.name}</span>
                          </a>
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <Clock className="h-5 w-5 text-accent" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground">Response Time</h4>
                  </div>
                  <p className="text-muted-foreground">
                    {contactInfo.responseTime}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
              <CardHeader className="relative">
                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-t-lg"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Send className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                      {contactInfo.formTitle}
                    </CardTitle>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {contactInfo.formSubtitle}
                  </p>
                </div>
              </CardHeader>
              
              <CardContent className="relative">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-medium text-foreground">Name</Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      placeholder="Your name"
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive"></span>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive"></span>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      {...register("subject", { required: "Subject is required" })}
                      placeholder="What's this about?"
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200"
                    />
                    {errors.subject && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive"></span>
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      {...register("message", { required: "Message is required" })}
                      placeholder="Tell me about your project or just say hello..."
                      rows={4}
                      className="bg-background/50 border-border/50 focus:border-primary/50 focus:ring-primary/20 transition-all duration-200 resize-none"
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive flex items-center gap-1">
                        <span className="w-1 h-1 rounded-full bg-destructive"></span>
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
