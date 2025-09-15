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
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/10 pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {personalInfo.tagline}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 h-11 px-8 font-medium transition-colors"
              >
                Learn More About Me
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-11 px-8 font-medium transition-colors"
              >
                Get In Touch
              </a>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-muted-foreground mb-4">Scroll down to explore my work</p>
              <div className="animate-bounce">
                <svg
                  className="w-6 h-6 mx-auto text-muted-foreground"
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
