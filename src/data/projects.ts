// Project type used by the portfolio card component.
// Keeping this centralized makes it easy to add or reorder projects.

export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  highlights: string[];
  demoUrl?: string;
  repoUrl?: string;
  imageUrl?: string;

  /** controls preview framing inside the card */
  imageFit?: "cover" | "contain";
  imagePos?: string;
};

// Main portfolio projects
export const projects: Project[] = [
  {
    title: "Job Tracker",
    subtitle:
      "Application tracking dashboard with search, filtering, and status management.",
    tech: ["React", "TypeScript", "State Management", "LocalStorage"],
    highlights: [
      "Add, edit, and delete applications",
      "Search and status-based filtering",
      "Responsive UI with dark mode support",
    ],
    demoUrl: "https://job-tracker-react-two.vercel.app/",
    repoUrl: "https://github.com/Mohamedt19/job-tracker-react",
    imageUrl: "/previews/job-tracker.png",
    imageFit: "contain",
    imagePos: "center 28%",
  },

  {
    title: "GitHub Explorer",
    subtitle:
      "GitHub user search with repository browsing, filtering, and performance optimizations.",
    tech: ["React", "TypeScript", "GitHub API", "Custom Hooks"],
    highlights: [
      "Debounced search for improved performance",
      "Repository filtering & sorting",
      "Skeleton loading and language indicators",
    ],
    demoUrl: "https://github-explorer-seven-woad.vercel.app/",
    repoUrl: "https://github.com/Mohamedt19/github-explorer",
    imageUrl: "/previews/github-explorer.png",
    imageFit: "cover",
    imagePos: "center 12%",
  },

  {
    title: "Kanban Lite",
    subtitle:
      "Drag-and-drop workflow board for task organization and productivity.",
    tech: ["React", "TypeScript", "useReducer", "Drag & Drop API"],
    highlights: [
      "Tab-based workflow management",
      "Drag & drop between columns",
      "Smooth animations and empty states",
    ],
    demoUrl: "https://kanban-lite-ashy.vercel.app/",
    repoUrl: "https://github.com/Mohamedt19/kanban-lite",
    imageUrl: "/previews/kanban-lite.png",
    imageFit: "cover",
    imagePos: "center 36%",
  },
];