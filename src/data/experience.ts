export interface Experience {
  id: string;
  company: string;
  role: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    id: "apexplanet",
    company: "ApexPlanet Software Pvt. Ltd.",
    role: "Web Developer Intern",
    location: "Remote",
    startDate: "September 2026",
    endDate: "Present",
    description: [
      "Developed responsive and structured web interfaces using HTML, CSS, and JavaScript, implementing clean layouts, reusable components, and interactive user-facing features.",
      "Implemented JavaScript functionality using DOM manipulation, event handling, functions, arrays, and modern JavaScript concepts.",
      "Collaborated on development tasks by understanding requirements, implementing assigned features, debugging issues, and following structured testing practices.",
      "Used Git and GitHub for version control while gaining hands-on experience with code organization and deployment workflows.",
    ],
  },
];
