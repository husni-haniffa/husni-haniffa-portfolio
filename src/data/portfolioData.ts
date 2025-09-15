// Portfolio Data - Centralized content management
// Update this file to modify any content across the portfolio

export const personalInfo = {
  name: "Husni Haniffa",
  title: "Software Engineer",
  education: "BSc (Hons) Software Engineering",
  tagline: "Software Engineer | BSc (Hons) Software Engineering",
  bio: [
    "I design and build solutions that matter. From system architecture to full-stack development, I create digital experiences that solve real problems. My work spans across AI integrations, machine learning models, and everything in between.",
    "Whether it's crafting intelligent systems that understand human behavior or building scalable applications that handle complex workflows, I approach each project with curiosity and precision. I believe technology should feel natural and make life easier."
  ],
  profileImage: "👨‍💻", // Replace with actual image path when available
  email: "husni@example.com"
};

export const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/husni-haniffa",
    icon: "Github"
  },
  {
    name: "LinkedIn", 
    href: "https://linkedin.com/in/husni-haniffa",
    icon: "Linkedin"
  },
  {
    name: "Email",
    href: "mailto:husni@example.com",
    icon: "Mail"
  }
];

export const navigationLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Blogs", href: "#blogs" },
  { name: "Contact", href: "#contact" }
];

export const experiences = [
  {
    title: "Software Engineer Intern",
    company: "Verdentra",
    location: "Colombo - Sri Lanka",
    duration: "2024 Oct - 2025 Apr",
    type: "Internship",
    description: [
      "Developed and designed internal projects using modern web technologies",
      "Implemented new features and enhanced user interfaces for better user experience",
      "Performed bug fixing and issue resolution across multiple applications",
      "Participated in hackathons and contributed to quality assurance processes",
      "Collaborated with cross-functional teams on various development initiatives"
    ],
    technologies: ["React", "Node.js", "TypeScript", "Microsoft Azure", "SQL", "Azure DevOps", "Azure AI Foundry", "C#", "Entity Framework", ".NET", "LangChain"]
  }
];

export const projects = [
  {
    title: "Cognitive Load Detection System",
    description: "Cognitive load is the mental effort required to process information. When it exceeds capacity, it makes you lose focus and productivity. This system is an initial prototype that allows detection of behavioral indications to monitor cognitive state.",
    image: "/Cognitive Load Detection.jpg",
    technologies: ["Python", "OpenCV", "MediaPipe", "FlaskAPI", "React", "TypeScript", "RTK Query", "shadcn", "Tailwind CSS"],
    features: [
      "Human Computer Interaction",
      "Behavioral indication detection",
      "Real-time cognitive state monitoring",
      "Computer vision integration",
      "Mental effort analysis"
    ],
    liveUrl: null,
    githubUrl: "https://github.com/husni-haniffa/cognitive-load-detector-backend"
  },
  {
    title: "AI-Integrated Booking System",
    description: "This system allows users to filter hotels using natural language and then book them, instead of traditional filtering methods. Users can describe what they're looking for in plain English.",
    image: "/AI Booking.jpg", 
    technologies: ["React", "MongoDB", "Express", "Node.js", "TypeScript", "shadcn", "OpenAI", "LangChain", "RTK Query", "Clerk"],
    features: [
      "RAG AI Integration",
      "Natural language hotel filtering",
      "Intelligent booking recommendations",
      "User authentication with Clerk",
      "Real-time search capabilities"
    ],
    liveUrl: "https://aidf-le-luxe-frontend-husni.netlify.app/",
    githubUrl: "https://github.com/husni-haniffa/ai-booking-backend"
  },
  {
    title: "AI Recruitment Tool",
    description: "Allows recruiters to filter candidates easily for the initial phase instead of going through all resumes. Based on responses to job questions, AI will filter these candidates for shortlisting.",
    image: "/AI Recruitment.jpg",
    technologies: ["React", "MongoDB", "Express", "Node.js", "TypeScript", "shadcn", "OpenAI", "Python", "Clerk"],
    features: [
      "Fine-Tuned AI Integration",
      "Automated candidate filtering",
      "Job question analysis",
      "Intelligent shortlisting",
      "Resume processing automation"
    ],
    liveUrl: "https://aidf-hirely-ai-frontend-husni.netlify.app/",
    githubUrl: "https://github.com/husni-haniffa/ai-shortlisting-backend"
  }
];

export const skills = {
  "Programming Languages": ["Java", "Python", "TypeScript", "JavaScript", "C#"],
  "Frontend": ["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "shadcn", "Material UI"],
  "Backend": ["FlaskAPI", ".NET", "Entity Framework", "REST APIs"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "Cloud & DevOps": ["Microsoft Azure", "Azure AI Foundry", "Azure DevOps", "Vercel", "Netlify", "CI/CD", "Linux"],
  "Tools": ["Git", "GitHub", "Postman"],
  "AI & Machine Learning": ["AI/Machine Learning"]
};

export const blogs = [
  // Empty array - will be populated when blog content is ready
];

export const sectionHeaders = {
  about: {
    title: "About Me",
    subtitle: "Get to know more about who I am, what I do, and what technologies I'm passionate about"
  },
  experience: {
    title: "Experience",
    subtitle: "My professional journey and the roles that have shaped my expertise in software development"
  },
  projects: {
    title: "Projects",
    subtitle: "A showcase of my recent work and the technologies I've used to bring ideas to life"
  },
  skills: {
    title: "Skills & Technologies",
    subtitle: "The tools and technologies I use to build modern, scalable applications"
  },
  blogs: {
    title: "Blogs",
    subtitle: "Thoughts, tutorials, and insights about web development and technology"
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Have a project in mind or just want to connect? I'd love to hear from you."
  }
};

export const contactInfo = {
  responseTime: "I typically respond to messages within 24-48 hours. For urgent matters, feel free to reach out directly via email.",
  formTitle: "Send Me a Message",
  formSubtitle: "Fill out the form below and I'll get back to you as soon as possible.",
  connectTitle: "Let's Connect",
  connectDescription: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation. Feel free to reach out through any of these platforms."
};
