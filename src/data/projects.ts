export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "resqnet",
    title: "ResQNet",
    description: "AI Disaster Response System",
    details: [
      "Built a Progressive Web App for disaster response, enabling users to access emergency information and response features through a responsive web interface.",
      "Developed a mobile-first frontend with AI-powered capabilities to assist users during disaster and emergency scenarios.",
    ],
    technologies: ["React", "JavaScript", "CSS", "PWA", "Gemini AI", "REST API", "Vercel", "GitHub"],
    githubUrl: "https://github.com/Mubashshir-k/resqnet",
    liveUrl: "https://resqnet-steel.vercel.app/login",
    featured: true,
  },
];
