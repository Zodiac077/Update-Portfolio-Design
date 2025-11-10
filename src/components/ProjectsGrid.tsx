import { Button } from "./ui/button";
import React from "react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  codeUrl?: string;
}

const projects: Project[] = [
  {
    title: "Weather Dashboard",
    description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics. Integrates with multiple weather APIs for comprehensive data.",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    image: "/projects/weather-dashboard.png",
    demoUrl: "https://weather-dashboard-demo.vercel.app",
    codeUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    title: "Portfolio CMS",
    description: "A headless CMS built for creative professionals to showcase their work. Features dynamic content management, SEO optimization, and responsive design capabilities.",
    technologies: ["Next.js", "Sanity CMS", "Vercel"],
    image: "/projects/portfolio-cms.png",
    demoUrl: "https://portfolio-cms-demo.vercel.app",
    codeUrl: "https://github.com/yourusername/portfolio-cms"
  },
  {
    title: "Fitness Tracker Mobile App",
    description: "A React Native mobile application for tracking workouts, nutrition, and fitness goals. Includes offline capabilities and data synchronization.",
    technologies: ["React Native", "Firebase", "Redux"],
    image: "/projects/fitness-tracker.png",
    demoUrl: "https://expo.dev/@yourusername/fitness-tracker",
    codeUrl: "https://github.com/yourusername/fitness-tracker"
  },
  {
    title: "AI Code Assistant",
    description: "An intelligent code completion and suggestion tool powered by machine learning. Features real-time suggestions, code analysis, and integration with major IDEs.",
    technologies: ["Python", "TensorFlow", "FastAPI"],
    image: "/projects/ai-code-assistant.png",
    demoUrl: "https://ai-code-assistant.demo.dev",
    codeUrl: "https://github.com/yourusername/ai-code-assistant"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce solution with real-time inventory, payment processing, and advanced analytics. Supports multiple vendors and marketplaces.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/projects/ecommerce-platform.png",
    demoUrl: "https://ecommerce-platform-demo.vercel.app",
    codeUrl: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    title: "Social Media Analytics",
    description: "A comprehensive analytics dashboard for social media managers. Features sentiment analysis, engagement metrics, and automated reporting.",
    technologies: ["Angular", "D3.js", "Python", "AWS"],
    image: "/projects/social-analytics.png",
    demoUrl: "https://social-analytics-demo.aws.app",
    codeUrl: "https://github.com/yourusername/social-analytics"
  }
];

export function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-16 py-12">
      {projects.map((project, index) => (
        <div 
          key={index} 
          className="bg-black/50 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all"
        >
          <div className="aspect-video bg-gray-900 relative overflow-hidden group">
            <img
              src={project.image}
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/projects/placeholder.png';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          </div>
          
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="text-sm text-gray-300 line-clamp-3">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="px-2 py-1 bg-gray-800 rounded-full text-xs text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              {project.demoUrl && (
                <a 
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="gap-2 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <span className="i-lucide-external-link text-lg" />
                    Demo
                  </Button>
                </a>
              )}
              {project.codeUrl && (
                <a 
                  href={project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 transition-transform hover:scale-105 cursor-pointer"
                  >
                    <span className="i-lucide-code text-lg" />
                    Code
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}