import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import { personalInfo } from "@/data/portfolioData";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Enhanced Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-accent/5"></div>
        
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full opacity-30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                {`Hi, I'm `}
                <span className="gradient-text inline-block">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {personalInfo.tagline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <a
                href="#about"
                className="btn-enhanced inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg hover:shadow-xl h-12 px-8 font-medium glow group"
              >
                <span className="relative z-10">Learn More About Me</span>
              </a>
              <a
                href="#contact"
                className="btn-enhanced glass inline-flex items-center justify-center rounded-lg border border-border hover:border-primary h-12 px-8 font-medium group"
              >
                <span className="relative z-10">Get In Touch</span>
              </a>
            </div>
            
            <div className="pt-12">
              <p className="text-sm text-muted-foreground mb-6 animated-underline inline-block">Scroll down to explore my work</p>
              <div className="float">
                <svg
                  className="w-6 h-6 mx-auto text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Experience Section */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Blogs Section */}
      <Blogs />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
